<?php 
    session_start();
    // get TWIG up and running . . .
    // include and register Twig auto-loader
    include ('assets/vendor/Twig-1.24.0/lib/Twig/Autoloader.php');
	include ('config/config.php');
    Twig_Autoloader::register();
    try {
		// specify where to look for templates
		$loader = new Twig_Loader_Filesystem('templates');
		// initialize Twig environment
		$twig = new Twig_Environment($loader);
		//add the config object to globals 
		$twig->addGlobal("config",$config);	  
		// load templates
		$indexTemplate = $twig->loadTemplate('index.tpl');
		$headTemplate = $twig->loadTemplate('head.tpl');
		$navbarTemplate = $twig->loadTemplate('navbar.tpl');
    $afterNavbar = $twig->loadTemplate('after_navbar.tpl');
    $footer = $twig->loadTemplate('footer.tpl');
    $covidSpecial = $twig->loadTemplate('covid_special.tpl');
    } catch (Exception $e) {
		die ('ERROR: ' . $e->getMessage());
    }  
?>
<!DOCTYPE html>
<html>
<head>
	<!-- leaflet -->
	<link rel="stylesheet" href="assets/vendor/leaflet/leaflet.css">
	<script src="assets/vendor/leaflet/leaflet.js"></script>
    <?php
        echo $headTemplate->render(array());
    ?>
</head>
<body>
	<div class="row">
		<!-- bootstrap navbar -->
		<?php
			echo $navbarTemplate->render(array());
		?>
	</div>
	<div id="background">
		<div id="contentWrapper">
			<div id="contentMain" class='container-fluid'>
				<?php
          echo $afterNavbar->render(array());
          echo $covidSpecial->render(array());
					echo $indexTemplate->render(array());
				?>
			</div>

		</div>
		<div id="footer" class="row">
			<?php
				echo $footer->render(array());
			?>
		</div>		
	</div>
</body>
<script src="assets/js/pages/map/llMap.js"></script>

</html>
    