<?php
session_start();

// slim
require "assets/Slim/Slim.php";
 

// captcha
include('assets/Captcha-1.1.1/CaptchaBuilderInterface.php');
include('assets/Captcha-1.1.1/PhraseBuilderInterface.php');
include('assets/Captcha-1.1.1/CaptchaBuilder.php');
include('assets/Captcha-1.1.1/PhraseBuilder.php');
use Gregwar\Captcha\CaptchaBuilder;

//php mailer
require 'assets/PHPMailer-master/PHPMailerAutoload.php';

// create new Slim instance
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();

//route the requests . . . 
//$app->get('/requestInfo/:data', 'requestInfo');
$app->post('/requestInfo/', 'requestInfo');
$app->get('/captcha/', 'getCaptcha');
$app->get('/captcha2/', 'getCaptcha2');

function getCaptcha() {
	$builder = new CaptchaBuilder;
	$builder->build(180, 60);
	$_SESSION['phrase'] = $builder->getPhrase();	
	header('Content-type: image/jpeg');
	$builder->output(100);	
}
function getCaptcha2() {
	$builder = new CaptchaBuilder;
	$builder->build(180,60);
	$_SESSION['phrase'] = $builder->getPhrase();
	$html = '<img src="' . $builder->inline() . '"/>';
	print $html;
}

function requestInfo() {
	include("../config/config.php");
	
	$app = \Slim\Slim::getInstance();
	$data = $app->request->getBody();
	$data1 = json_decode($data);	
	
	
	$response = array();
	$response['data'] = json_decode($data);
	//test the recaptcha
	$response['recaptchaPass'] = $data1->recaptcha == $_SESSION['phrase'];
	if( $data1->recaptcha == $_SESSION['phrase'] ) {
		//build the object to send to email
		switch ($data1->type) {
			case "Private Room":
				$message =  '<h4>Availability Request</h4>
							<p>Arrival Date: <b>' . $data1->arrivalDate . '</b><br/>
							Departure Date: <b>' . $data1->departureDate . '</b><br/>
							First Name: <b>' . $data1->firstName . '</b><br/>
							Last Name: <b>' . $data1->lastName . '</b><br/>
							Email: <b>' . $data1->email. '</b><br/>
							Room type: <b>' . $data1->type . '</b><br/>
							Quantity: <b>' . $data1->quantity . '</b></p>';
				//now iterate through the details
				$i = 1;
 				foreach( $data1->privateRooms as $c ) {
					$message .= "<p>Room" . $i . ":<br/>&nbsp;&nbsp;People: " . $c->people . "<br/>&nbsp;&nbsp;Beds: " . $c->beds . "</p>";
					$i++;
				};
				//add comments
				$message .= '<p>Comments/ requests: <b>' . $data1->comments . '</b></p>';
			break;
			case "Cabin":
				$message =  '<h4>Availability Request</h4>
							<p>Arrival Date: <b>' . $data1->arrivalDate . '</b><br/>
							Departure Date: <b>' . $data1->departureDate . '</b><br/>
							First Name: <b>' . $data1->firstName . '</b><br/>
							Last Name: <b>' . $data1->lastName . '</b><br/>
							Email: <b>' . $data1->email. '</b><br/>
							Room type: <b>' . $data1->type . '</b><br/>
							Quantity: <b>' . $data1->quantity . '</b></p>';
				//now iterate through the details
				$i = 1;
 				foreach( $data1->privateCabins as $c ) {
					$message .= "<p>Cabin" . $i . ":<br/>&nbsp;&nbsp;People: " . $c->people . "<br/>&nbsp;&nbsp;Beds: " . $c->beds . "</p>";
					$i++;
				};
				//add comments
				$message .= '<p>Comments/ requests: <b>' . $data1->comments . '</b></p>';				
			break;
			case "Dorm":
				$message =  '<h4>Availability Request</h4>
							<p>Arrival Date: <b>' . $data1->arrivalDate . '</b><br/>
							Departure Date: <b>' . $data1->departureDate . '</b><br/>
							First Name: <b>' . $data1->firstName . '</b><br/>
							Last Name: <b>' . $data1->lastName . '</b><br/>
							Email: <b>' . $data1->email. '</b><br/>
							Room type: <b>' . $data1->type . '</b><br/>
							&nbsp;&nbsp;Male: ' . $data1->dormQuantities->maleDorm . '<br/>
							&nbsp;&nbsp;Female: ' . $data1->dormQuantities->femaleDorm . '<br/>
							&nbsp;&nbsp;Coed: ' . $data1->dormQuantities->coedDorm . '<br/></p>';
				//add comments
				$message .= '<p>Comments/ requests: <b>' . $data1->comments . '</b></p>';
			break;
			case "Guest House":
				$message =   '<h4>Availability Request</h4>
							<p>Arrival Date: <b>' . $data1->arrivalDate . '</b><br/>
							Departure Date: <b>' . $data1->departureDate . '</b><br/>
							First Name: <b>' . $data1->firstName . '</b><br/>
							Last Name: <b>' . $data1->lastName . '</b><br/>
							Email: <b>' . $data1->email. '</b><br/>
							Room type: <b>' . $data1->type . '</b><br/>
							Houses requested: </p>';
				//iterate through the houses array
				foreach ($data1->houses as $h) {
					$message .= '<p>&nbsp;&nbsp;' . $h . '</p>';
				};
				//add comments
				$message .= '<p>Comments/ requests: <b>' . $data1->comments . '</b></p>';				
			break;			
		}
		//send the email
		$mail = new PHPMailer;
		//$mail->SMTPDebug = 3;								//uncomment to see errors 
		$mail->Debugoutput = 'html';
		$mail->SMTPAuth = false;                           
		$mail->setFrom( $data1->email , $data1->firstName . ' ' . $data1->lastName );
		$mail->addAddress( $config->email->toEmail );
		//$mail->addReplyTo( $data1->email, $data1->firstName . $data1->lastName );
		$mail->addReplyTo ( $data1->email );
		$mail->Subject = $data1->type . " Request: " . $data1->arrivalDate . " - " . $data1->departureDate;
		$mail->isHTML = true;
		$mail->Body    = $message;
		//$mail->AltBody = Html2Text::convert($message);
		$mail->AltBody = $mail->html2text($message);
		//send it off
		if(!$mail->send()) {
			$response['emailSent'] = false;
			$response['mailerError'] = $mail->ErrorInfo;
		} else {
			$response['emailSent'] = true;
			//now send the response
			$response['replySent'] = sendReply( $data1->email );
		} 
	} else {
		$response['emailSent'] = false;
	}
	print json_encode($response);
}

function sendReply( $toEmail ) {
	include("../config/config.php");
	$message = "<p>Thank you for inquiring about accomodation at the Lazy Lizard Hostel in Moab, Utah.<br/><br/>We will let you know if we have availability within 24 hours.<br/><br/>Lazy Lizard Hostel<br/>1213 S Hwy 191<br/>Moab, UT 84532<br/>booking@lazylizardhostel.com<br/>(435) 259 6057</p>";
	$mail = new PHPMailer;
	$mail->SMTPAuth = false;
	$mail->setFrom( $config->email->toEmail );
	$mail->addAddress( $toEmail );
	$mail->Subject = "Lazy Lizard Hostel availability request";
	$mail->isHTML = true;
	$mail->Body = $message;
	$mail->AltBody = $mail->html2text($message);
	if( !$mail->send() ){
		return false;
	} else {
		return true;
	}
	
}

$app->run();

