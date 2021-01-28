//payment.js
	'use strict';
var payment = (function () {
	
var aDate;
var dDate;
	
var payment = {
	attachHandlers: function () {
		var self = this;
		$("#aDate").on("change", function () {

			self.dateChanged();
		});
		$("#dDate").on('change', function() {
			
			self.dateChanged();
		});		
	},
	dateChanged: function () {
		var self = this;
		aDate = $("#aDate").val();	
		dDate = $("#dDate").val();			
		console.log("aDate", aDate);
		console.log("dDate", dDate);
		//moment.js needs proper ISO format on date, which we're not displaying, so tell it
		if(aDate != dDate && moment(aDate, 'MMM D YYYY').unix() < moment(dDate, 'MMM D YYYY').unix()) {
			//now that we have a date, show all payment divs
			$(".payment").removeClass("hidden");
			//remove appended hidden inputs if this is a date changed event
			$(".ppHiddenDate").remove();
			//add the hidden input that will send the date to paypal as the name
			$('form').append("<input class='ppHiddenDate' type='hidden' name='item_name' value='" + aDate + " - " + dDate + "'>");
		}else{
			//hide the payment buttons since the dates are the same
			self.hidePayment();
			//remove any appended hidden divs
			$(".ppHiddenDate").remove();
		};		

	},
	hidePayment: function () {
		$(".payment").addClass("hidden");
	},
	initialize: function () {
		console.log("payment initializes . . . ");
		this.initializeDatepicker();
		this.attachHandlers();
		//hide all payment divs
		this.hidePayment();
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
	}		
	
};
return payment;
	
}())