var availability = (function () {
	
var aDate;
var dDate;
var roomDetails = {};

var availability = {
	attachHandlers: function () {
		var self = this;
		/*
		** DATE PICKER HANDLERS
		*/
		$("#aDate").on('change', function() {
			self.datePicked();
		});
		$("#dDate").on('change', function() {
			self.datePicked();
		});
        /*
		** TYPE SELECT HANDLERS	
		*/
        $("#typeSelect").change(function () {
            self.typeSelectSwitch();
        });
		/*
		** RESET HANDLER
		*/
		$(".resetBtn").on("click", function () {
			self.reset();
		});
		/*
		** DORM HANDLERS
		*/
		$("#dormOptions select").on("change", function (event) {
			self.handleDormSelect();
		});
		/*
		** ROOM SELECTION HANDLERS
		*/
		// private room quantity select
		$("#privateRoomQuantity").on("change", function () {
			self.handleRoomQuantityChange();
		});
		//fire whenever they change quantity in a room select, whether people or beds
		$(".roomSelect").on("change", function () {
			self.handleRoomSelect();
		});
		/*
		** CABIN SELECTION HANDLERS
		*/
		$("#privateCabinQuantity").on("change", function () {
			self.handleCabinQuantityChange();
		});	
		//fire whenever they change quantity in a cabin select, whether people or beds
		$(".cabinSelect").on("change", function () {
			self.handleCabinSelect();
		});
		/*
		** GUEST HOUSE SELCTION HANDLERS
		*/
		$(".houseCBox").on("change", function () {
			self.handleGroupHouseSelect();
		});
		/*
		** INFO REQUEST HANDLER
		*/
		//info request
		$("#btnRequest").on("click", function () {
			self.prepareRequestInfo();
		});
		//reload captcha
		$("#refreshCaptcha").on("click", function () {
			self.reloadCaptcha();
		});
	},
	datePicked: function () {
		var self = this;
		aDate = $("#aDate").val();
		dDate = $("#dDate").val();
		//TODO remove classes 'animated pulse' after animation is finished
		//otherwise, it only presents on a fresh reload
		$("#dDate").addClass('animated pulse');
		console.log("comparing dates: ", aDate, dDate);
		//moment.js needs proper ISO format on date, which we're not displaying, so tell it
		if(aDate != dDate && moment(aDate, 'MMM D YYYY').unix() < moment(dDate, 'MMM D YYYY').unix()) {
			self.showTypeSelect();
		}else{
			//triggers when user changes date and now they're the same
			console.log("datePickes no goog");
			//reset type so user knows they screwed it up
			self.resetTypeSelect();
			self.resetBelowTypeSelect();
		};
	},
	handleCabinQuantityChange: function () {
		var self = this;
		console.log($("#privateCabinQuantity").val());
		//set the property object
		roomDetails.quantity = parseInt( $("#privateCabinQuantity").val() );
		roomDetails.privateCabins = Array();
		//reset the form
		self.showCabinsByQuantity(roomDetails.quantity);		
	},
	handleCabinSelect: function () {
		var self = this;
		//check that all (not hidden) cabin detail selectors are not zero before
		//displaying the request panel
		
		var equalsZero = false;
		$.each( $(".cabinDetail").not(':hidden').find(':selected') , function (i,v){
			if( parseInt( $(v).val() ) == 0 ){
				equalsZero = true;
			}
		});
		console.log("ez", equalsZero, "rd", roomDetails);
		if( equalsZero == false ){
			//load the cabin details object
			roomDetails.privateCabins = Array();
			//roomDetails.quantity was set at handleCabinQuantityChange()
			var cabinItem
			//TODO make this a nice $.each loop, huh?
			switch ( roomDetails.quantity ) {
				case 1:
					cabinItem = {};
					cabinItem.people = $("#numberPplCbn1").val();
					cabinItem.beds = $("#numberBedsCbn1").val();
					roomDetails.privateCabins.push(cabinItem);
					self.showRequestInfo();
					console.log("rd",roomDetails);
				break;
				case 2:
					cabinItem = {};
					cabinItem.people = $("#numberPplCbn1").val();
					cabinItem.beds = $("#numberBedsCbn1").val();
					roomDetails.privateCabins.push(cabinItem);
					cabinItem = {};
					cabinItem.people = $("#numberPplCbn2").val();
					cabinItem.beds = $("#numberBedsCbn2").val();
					roomDetails.privateCabins.push(cabinItem);					
					self.showRequestInfo();					
					console.log("rd",roomDetails);				
				break;
				case 3:
					cabinItem = {};
					cabinItem.people = $("#numberPplCbn1").val();
					cabinItem.beds = $("#numberBedsCbn1").val();
					roomDetails.privateCabins.push(cabinItem);
					cabinItem = {};
					cabinItem.people = $("#numberPplCbn2").val();
					cabinItem.beds = $("#numberBedsCbn2").val();
					roomDetails.privateCabins.push(cabinItem);
					cabinItem = {};
					cabinItem.people = $("#numberPplCbn3").val();
					cabinItem.beds = $("#numberBedsCbn3").val();
					roomDetails.privateCabins.push(cabinItem);
					self.showRequestInfo();
					console.log("rd",roomDetails);								
				break;
				case 4:
					cabinItem = {};
					cabinItem.people = $("#numberPplCbn1").val();
					cabinItem.beds = $("#numberBedsCbn1").val();
					roomDetails.privateCabins.push(cabinItem);
					cabinItem = {};
					cabinItem.people = $("#numberPplCbn2").val();
					cabinItem.beds = $("#numberBedsCbn2").val();
					roomDetails.privateCabins.push(cabinItem);
					cabinItem = {};
					cabinItem.people = $("#numberPplCbn3").val();
					cabinItem.beds = $("#numberBedsCbn3").val();
					roomDetails.privateCabins.push(cabinItem);
					cabinItem = {};
					cabinItem.people = $("#numberPplCbn4").val();
					cabinItem.beds = $("#numberBedsCbn4").val();
					roomDetails.privateCabins.push(cabinItem);					
					self.showRequestInfo();
					console.log("rd",roomDetails);				
				break;				
			}
			//show the request panel
		} else {
			//clear and hide the request panel
			self.resetRequestInfoPanel();
		}
	},	
	handleDormSelect: function () {
		var self = this;
		//scrape values from the selects
        //verify that one of the three types (male, female, coed) has 
        //  at least 1 selected
        var female = parseInt($("#femaleDorm").val());
        var male = parseInt($("#maleDorm").val());
        var coed = parseInt($("#coedDorm").val());
        //only show the request panel if at least one of the values is > 0
        var totalDorms = female + male + coed;
        if (totalDorms > 0) {
			//load up the properties
			roomDetails.dormQuantities = {
				femaleDorm: female,
				maleDorm: male,
				coedDorm: coed
			};
            //show the request panel
            self.showRequestInfo();
        } else {
			//if they zeroed everything out, hide the request form
            self.hideRequestInfo();
        };		
	},
	handleGroupHouseSelect: function () {
		var self = this;
		roomDetails.houses = Array();
		$("input:checkbox[name=houseName]:checked").each( function () {
			roomDetails.houses.push($(this).val());
		});
		console.log(roomDetails.houses);
		if( roomDetails.houses.length > 0 ) {
			self.showRequestInfo();
		} else {
			self.hideRequestInfo();
		};
	},
	handleRoomQuantityChange: function () {
		var self = this;
		console.log($("#privateRoomQuantity").val());
		//set the property object
		roomDetails.quantity = parseInt( $("#privateRoomQuantity").val() );
		roomDetails.privateRooms = Array();
		//reset the form
		self.showRoomByQuantity(roomDetails.quantity);		
	},
	handleRoomSelect: function () {
		var self = this;
		//check that all (not hidden) room detail selectors are not zero before
		//displaying the request panel
		
		var equalsZero = false;
		$.each( $(".roomDetail").not(':hidden').find(':selected') , function (i,v){
			if( parseInt( $(v).val() ) == 0 ){
				equalsZero = true;
			}
		});
		console.log("ez", equalsZero, "rd", roomDetails);
		if( equalsZero == false ){
			//load the room details object
			roomDetails.privateRooms = Array();
			//roomDetails.quantity was set at handleRoomQuantityChange()
			var roomItem
			//TODO make this a nice $.each loop, huh?
			switch ( roomDetails.quantity ) {
				case 1:
					roomItem = {};
					roomItem.people = $("#numberPplRm1").val();
					roomItem.beds = $("#numberBedsRm1").val();
					roomDetails.privateRooms.push(roomItem);
					self.showRequestInfo();
					console.log("rd",roomDetails);
				break;
				case 2:
					roomItem = {};
					roomItem.people = $("#numberPplRm1").val();
					roomItem.beds = $("#numberBedsRm1").val();
					roomDetails.privateRooms.push(roomItem);
					roomItem = {};
					roomItem.people = $("#numberPplRm2").val();
					roomItem.beds = $("#numberBedsRm2").val();
					roomDetails.privateRooms.push(roomItem);					
					self.showRequestInfo();					
					console.log("rd",roomDetails);				
				break;
				case 3:
					roomItem = {};
					roomItem.people = $("#numberPplRm1").val();
					roomItem.beds = $("#numberBedsRm1").val();
					roomDetails.privateRooms.push(roomItem);
					roomItem = {};
					roomItem.people = $("#numberPplRm2").val();
					roomItem.beds = $("#numberBedsRm2").val();
					roomDetails.privateRooms.push(roomItem);
					roomItem = {};
					roomItem.people = $("#numberPplRm3").val();
					roomItem.beds = $("#numberBedsRm3").val();
					roomDetails.privateRooms.push(roomItem);
					self.showRequestInfo();
					console.log("rd",roomDetails);								
				break;
				case 4:
					roomItem = {};
					roomItem.people = $("#numberPplRm1").val();
					roomItem.beds = $("#numberBedsRm1").val();
					roomDetails.privateRooms.push(roomItem);
					roomItem = {};
					roomItem.people = $("#numberPplRm2").val();
					roomItem.beds = $("#numberBedsRm2").val();
					roomDetails.privateRooms.push(roomItem);
					roomItem = {};
					roomItem.people = $("#numberPplRm3").val();
					roomItem.beds = $("#numberBedsRm3").val();
					roomDetails.privateRooms.push(roomItem);
					roomItem = {};
					roomItem.people = $("#numberPplRm4").val();
					roomItem.beds = $("#numberBedsRm4").val();
					roomDetails.privateRooms.push(roomItem);					
					self.showRequestInfo();
					console.log("rd",roomDetails);				
				break;				
			}
			//show the request panel
			
		} else {
			//clear and hide the request panel
			self.resetRequestInfoPanel();
		}
	},
	hideRequestInfo: function () {
		$(".requestInfoPanel").addClass("hidden");
		//clear the inputs
	},
	initialize: function () {
		console.log("availability inits . . . ");
		var self = this;
		// apply datepicker to date selects
		self.initializeDatepicker();
		// fire up the inputs 
		self.attachHandlers();
	},
	initializeDatepicker: function () {
		//note: it doesn't seem to work to use "yyyy-mm-dd" in the output
		//format to expose a proper value to datepicker()
		var d = moment().add(2, 'd').format('MMM-D-YYYY');
		$('#dateContainer .input-daterange').datepicker({
			autoclose: true,
			format: "M d yyyy",
			startDate: d
		});		
	},
	//allows for alphanumeric, space, dash and underscore I think . . . fuckin' regex
	isAlphaNumSpaceDash: function ( test) {
		var regexp = /^[\w\-\s]+$/;
		return regexp.test(test);		
	},
	nl2br: function (str, is_xhtml) {   
		var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';    
		return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
	},	
	prepareRequestInfo: function () {
		var self = this;
			//clear error message
			$("#requestError").html('');
			var firstName = $("#llFirstName").val();
			var lastName = $("#llLastName").val();
			var email = $("#llEmail").val();
			var comments = $("#llComments").val();
			var recaptchaInput = $("#recaptchaInput").val();
			var valid = true;
			//error message is html
			var error = "<b>Input Errors:</b><br/>";
			if(validator.isEmail(email) == false){
				valid = false;
				error += "Email address is invalid.<br/>";
			};
			if(validator.isLength(firstName, {
				min: 1,
				max: 48
			}) == false){
				valid = false;
				error += "First Name is too short or long.<br/>";
			};
			if(self.isAlphaNumSpaceDash( firstName ) == false) {
				valid = false;
				error += "First Name contains illegal characters.<br/>";
			};
			if(validator.isLength(lastName, {
				min: 2,
				max: 48
			}) == false){
				valid = false;
				error += "Last Name is too short or long.<br/>";
			};
			if(self.isAlphaNumSpaceDash(lastName) == false) {
				valid = false;
				error += "Last Name contains illegal characters.<br/>";
			}
			if(validator.isLength(comments, {
				min: 0,
				max: 250				
			}) == false) {
				valid = false;
				error += "Comments contain more than 250 characters.<br/>";
			};
			if(validator.isLength(recaptchaInput, {
				min:5,
				max:5
			}) == false) {
				valid = false;
				error += "Security input is the wrong length.<br/>";
			};
			firstName = validator.escape(firstName);
			lastName = validator.escape(lastName);
			email = validator.escape(email);
			//sanitize
			//first, remove "<" or ">" to invalidate script or html
			comments = comments.replace(">", "");
			comments = comments.replace("<", "");
			//now replace new line with "<br/>"
			comments = self.nl2br(comments);
			recaptchaInput = validator.escape(recaptchaInput);
			if( valid == true) {
				//set properties
				roomDetails.arrivalDate = aDate;
				roomDetails.departureDate = dDate;
				roomDetails.firstName = firstName;
				roomDetails.lastName = lastName;
				roomDetails.email = email;
				roomDetails.comments = comments;
				roomDetails.recaptcha = recaptchaInput;
				//send off the request
				self.sendRequest();
			} else {
				//load up the error message
				$("#requestError").html(error);
			};		
	},
	reloadCaptcha: function () {
		//start the spinner
		$("#refreshCaptchaBtn").addClass("fa-spin fa-fw");
		$.ajax({
			type: "get",
			url: "api/captcha2",
			success: function (data) {
				console.log("data",data);
				$("#captcha").html('');
				$("#captcha").append(data);
			},
			complete: function () {
				//stop the spinner
				$("#refreshCaptchaBtn").removeClass("fa-spin fa-fw");				
			}
		});
	},
	reset: function () {
		var self = this;
		//reset dates
		self.initializeDatepicker();
		aDate = undefined;
		dDate = undefined;		
		//reset room detail property
		roomDetails = {};
		self.resetDateSelect();
		self.resetTypeSelect();
		self.resetDormSelect();
		self.resetRoomSelect();
		self.resetCabinSelect();
		self.resetGroupHouseSelect();
		self.resetRequestInfoPanel();
	},
	resetBelowTypeSelect: function () {
		var self = this;
		self.resetDormSelect();
		self.resetRoomSelect();
		self.resetCabinSelect();
		self.resetGroupHouseSelect();
		self.resetRequestInfoPanel();		
	},
	resetCabinSelect: function () {
		//hide the main panel
		$("#cabinOptions").addClass("hidden");
		//hide any additional panels that may have been opened
		$(".cabinDetailSub").addClass("hidden");
		//reset inputs
		$(".cabinSelect").val(0);
		$("#privateCabinQuantity").val(1);		
	},

	resetDateSelect: function () {
		//reset all inputs
		$('#aDate').datepicker('update', '');
		$('#dDate').datepicker('update', '');		
	},
	resetDormSelect: function () {
		//hide panel
		$("#dormOptions").addClass("hidden");
		//clear the inputs
		$("#femaleDorm").val(0);
		$("#maleDorm").val(0);
		$("#coedDorm").val(0);		
	},
	resetGroupHouseSelect: function () {
		//hide panel
		$("#guestHouseOptions").addClass("hidden");
		//uncheck all
		$(".houseCBox").prop("checked", false);
		
	},
	resetRequestInfoPanel: function () {
		//hide panel
		$(".requestInfoPanel").addClass("hidden");
		//clear inputs
		$(".requestInfoPanel").val('');
		//clear the error
		$("#requestError").html('');
		$(".requestInfoPanel").addClass("hidden");
	},
	resetRoomSelect: function () {
		//hide the main panel
		$("#roomOptions").addClass("hidden");
		//hide any additional panels that may have been opened
		$(".roomDetailSub").addClass("hidden");
		//reset inputs
		$(".roomSelect").val(0);
		$("#privateRoomQuantity").val(1);
	},
	resetTypeSelect: function () {
		//hide  panels
		$(".typeSelectPanel").addClass("hidden");
		//reset inputs
		$("#typeSelect").val('ch');		
	},
	sendRequest: function () {
		var self = this;
		console.log("info", roomDetails);
		$("#requestBtnSpinner").addClass("fa fa-refresh fa-spin fa-fw");		
		$.ajax({
			//needs to be a post request so we can send data from the textbox input
			type: "post",
			//convert the json object into a string
			data: JSON.stringify(roomDetails),
			url: "api/requestInfo/",
			//this fires generically if the request fails, code 500 or 404 or whatever
			error: function () {
				//load up the modal content
				var html = "<p>There was an error sending your request.  <br/>Please check that the input information is correct and you have an internet connection.<br/>If the error persists, please try again later or call us at (435)259-6067 to check availability.</p>";
				$("#availabilityModalTitle").html('<h4><b>Error</b></h4>');
				$("#availabilityModalContent").html(html);
				$("#availabilityModal").modal();
				$("#availabilityModal").on("hidden.bs.modal", function () {
					$("#availabilityModalTitle").html('');
					$("#availabilityModalContent").html('');
					//remove event 
					$("#availabilityModal").off();						
				});				
			},
			success: function (data) {
				console.log('requestEmail:', data);
				if	(data.emailSent == true ) {
					self.reset();
					//load up the modal content
					$("#availabilityModalTitle").html("<h4><b>Your request has been sent.</b></h4>");
					$("#availabilityModalContent").html("<p><b>You should receive a response witin 24 hours.<b></p><p><b>We'll let you know if we have availability and send you deposit information if it is.</b></p><p><b>We look forward to seeing you in Moab at the Lazy Lizard Hostel.</b></p><p>After you close this message, you will be directed back to the home page.</p>");
					//fire modal
					$("#availabilityModal").modal();
					//do stuff when the user closes the modal that tells them how the request went
					$("#availabilityModal").on("hidden.bs.modal", function () {
						self.reset();
						//clear the modal
						$("#availabilityModalContent").html('');
						$("#availabilityModalTitle").html('');
						//remove events from the DOM and children . . . no zombies!!!
						$("#availabilityModal").off();
						//reload
						window.location.assign("index.php");
					});
				} else {
					//load up the modal content
					var html = "<p>Sorry, your request was NOT sent.</p>";
					if( data.recaptchaPass == false ) {
						html += "<p><b>The security code was entered incorrectly</b></p>";
					};
					$("#availabilityModalTitle").html('<h4><b>Error</b></h4>');
					$("#availabilityModalContent").html(html);
					$("#availabilityModal").modal();
					$("#availabilityModal").on("hidden.bs.modal", function () {
						$("#availabilityModalTitle").html('');
						$("#availabilityModalContent").html('');
						//remove events from the DOM and children . . . no zombies!!! 
						$("#availabilityModal").off();						
					});					
				}
			},
			//always fire this, otherwise the spinner doesn't stop on the send button
			complete: function () {
				$("#requestBtnSpinner").removeClass("fa fa-refresh fa-spin fa-fw");					
			},
			dataType: 'json'
		});
	},
	showCabinDetails: function () {
		$("#cabinOptions").removeClass("hidden");
		$("#cabinOptions").addClass("animated pulse");		
	},
	showCabinsByQuantity: function ( roomQuantity ) {
		console.log("cabQ", roomQuantity);
		var self = this;
		switch ( roomQuantity ) {
			case 1:
				//reset the selects
				$(".cabinSelect").val(0);
				//hide all but 
				$(".cabinDetail").addClass("hidden");
				//show 1
				$(".cabinDetail1").removeClass("hidden");
			break;
			case 2:
				//reset the selects
				$(".cabinSelect").val(0);
				//hide all 
				$(".cabinDetail").addClass("hidden");
				//show 1
				$(".cabinDetail1").removeClass("hidden");				
				//show 2
				$(".cabinDetail2").removeClass("hidden");				
			break;
			case 3:
				//reset the selects
				$(".cabinSelect").val(0);
				//hide all 
				$(".cabinDetail").addClass("hidden");
				//show 1
				$(".cabinDetail1").removeClass("hidden");				
				//show 2
				$(".cabinDetail2").removeClass("hidden");
				//show 3
				$(".cabinDetail3").removeClass("hidden");				
			break;
			case 4:
				//reset the selects
				$(".cabinSelect").val(0);
				//hide all 
				$(".cabinDetail").addClass("hidden");
				//show 1
				$(".cabinDetail1").removeClass("hidden");				
				//show 2
				$(".cabinDetail2").removeClass("hidden");
				//show 3
				$(".cabinDetail3").removeClass("hidden");
				//show 4
				$(".cabinDetail4").removeClass("hidden");				
			break;			
		};
	},	
	showDormDetails: function () {
		$("#dormOptions").removeClass("hidden");
		$("#dormOptions").addClass("animated pulse");		
	},
	showGuestHouseDetails: function () {
		$("#guestHouseOptions").removeClass("hidden");
		$("#guestHouseOptions").addClass("animated pulse");		
	},
	showRequestInfo: function () {
		$(".requestInfoPanel").removeClass("hidden");
		$(".requestInfoPanel").addClass("animated pulse");
	},
	showRoomByQuantity: function ( roomQuantity ) {
		var self = this;
		switch ( roomQuantity ) {
			case 1:
				//reset the selects
				$(".roomSelect").val(0);
				//hide all but 
				$(".roomDetail").addClass("hidden");
				//show 1
				$(".roomDetail1").removeClass("hidden");
			break;
			case 2:
				//reset the selects
				$(".roomSelect").val(0);
				//hide all 
				$(".roomDetail").addClass("hidden");
				//show 1
				$(".roomDetail1").removeClass("hidden");				
				//show 2
				$(".roomDetail2").removeClass("hidden");				
			break;
			case 3:
				//reset the selects
				$(".roomSelect").val(0);
				//hide all 
				$(".roomDetail").addClass("hidden");
				//show 1
				$(".roomDetail1").removeClass("hidden");				
				//show 2
				$(".roomDetail2").removeClass("hidden");
				//show 3
				$(".roomDetail3").removeClass("hidden");				
			break;
			case 4:
				//reset the selects
				$(".roomSelect").val(0);
				//hide all 
				$(".roomDetail").addClass("hidden");
				//show 1
				$(".roomDetail1").removeClass("hidden");				
				//show 2
				$(".roomDetail2").removeClass("hidden");
				//show 3
				$(".roomDetail3").removeClass("hidden");
				//show 4
				$(".roomDetail4").removeClass("hidden");				
			break;			
		};
	},
	showRoomDetails: function () {
		$("#roomOptions").removeClass("hidden");
		$("#roomOptions").addClass("animated pulse");		
	},
	showTypeSelect: function () {
		$(".typeSelectPanel").removeClass("hidden");
		$(".typeSelectPanel").addClass("animated pulse");
	},
	typeSelectSwitch: function () {
		var self = this;
		self.resetBelowTypeSelect();
        switch ( $("#typeSelect").val() ) {
            case "pr":
				//set the property
				roomDetails.type = "Private Room";
				//set default of 1 to quantity
				roomDetails.quantity = 1;
				self.showRoomDetails();
            break;
            case "c":
				roomDetails.type = "Cabin";
				//set default of 1 to quantity				
				roomDetails.quantity = 1;
				self.showCabinDetails();
            break;
            case "d":
				//set the property
				roomDetails.type = "Dorm";
				self.showDormDetails();
            break;
            case "gh":
				roomDetails.type = "Guest House";
				self.showGuestHouseDetails();
            break;
        }        		
	}
};
return availability;
}());