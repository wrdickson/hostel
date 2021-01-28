//reserve.js
var request = {};



var llReserve = {
    initialize: function () { 
        var self = this;        
        console.log("llReserve initializes", self);

        //apply datepicker to date selects
        $('#dateContainer .input-daterange').datepicker({
            autoclose: true
        }); 
        //attach handler to accomodation type select 
        $("#typeSelect").change(function () {
            //reset hidden/shown and select options on all sub panels
            self.resetAllSubPanels();
            //process
            self.typeSelectSwitch();
        });
        //attach handler to room quantity select
        $("#numberRooms").change(function () {
            //reset detail panes
            self.hideRoomDetails();
            self.roomQuantitySelectSwitch();
        });
        //attach handlers to dorm quantity selects
        $(".dormSelect").change(function () {
            self.dormQuantitiesSelect();
        });
        
        //attach handlers to house checkbox selects
        $(".houseCBox").change(function (e) {
            self.houseTypeCheck(e);
        });
		//attache event to the "request info" button
		$("#btnRequest").on("click", function () {
			console.log("request", request);
		});
    },
    dormQuantitiesSelect: function () {
        //verify that one of the three types (male, female, coed) has 
        //  at least 1 selected
        var female = parseInt($("#femaleDorm").val());
        var male = parseInt($("#maleDorm").val());
        var coed = parseInt($("#coedDorm").val());
        //only show the request panel if at least one of the values is > 0
        var totalDorms = female + male + coed;
        if (totalDorms > 0) {
            //show the request panel
            $(".requestInfoPanel").removeClass("hidden");
        } else {
            $(".requestInfoPanel").addClass("hidden");
        };
    },
    hideRoomDetails: function () {
        $(".roomDetail").addClass("hidden");
    },
    hideSubPanels: function () {
        $(".typeSelectSubpanel").addClass("hidden");
    },
    houseTypeCheck: function (e) {
        //get what's checked
		console.log($($(e)[0].target).attr("value"));
        $(".requestInfoPanel").removeClass("hidden");
        
    },
    resetAllSubPanels: function () {
        var self = this;
        self.resetRoomDetails();
        self.resetDormDetails();
        self.resetCabinDetails();
        self.resetHouseDetails();
    },
    resetCabinDetails: function () {
        
    },
    resetDormDetails: function () {
        //reset the selects
        $("#femaleDorm").val("0");
        $("#maleDorm").val("0");
        $("#coedDorm").val("0");
    },
    resetHouseDetails: function () {
        
    },
    resetRoomDetails: function () {

        //hide the detail panels
        $(".roomDetail").addClass('hidden');
        //reset room detail choices
        //  .roomSelect is on all selects within this module
        $(".roomSelect").val("0");
    },
    roomQuantitySelectSwitch: function () {
        var self = this;
        var numberRooms = $("#numberRooms").val();
        switch (numberRooms) {
            case "0":
                //hide all
                self.hideRoomDetails();            
            break;
            case "1":
                //hide all
                self.hideRoomDetails();
                //show first
                $(".roomDetail1").removeClass("hidden");
            break;
            case "2":
                //hide all
                self.hideRoomDetails();
                //show first
                $(".roomDetail1").removeClass("hidden");
                //show second
                $(".roomDetail2").removeClass("hidden");                
            break;
            case "3":
                //hide all
                self.hideRoomDetails();
                //show first
                $(".roomDetail1").removeClass("hidden");
                //show second
                $(".roomDetail2").removeClass("hidden"); 
                //show third
                $(".roomDetail3").removeClass("hidden");
            break;
            case "4":
                //hide all
                self.hideRoomDetails();
                //show first
                $(".roomDetail1").removeClass("hidden");
                //show second
                $(".roomDetail2").removeClass("hidden"); 
                //show third
                $(".roomDetail3").removeClass("hidden");
                //show fourth
                $(".roomDetail4").removeClass("hidden");
            break;            
        };
    },
    typeSelectSwitch: function () {
        var self = this;
        //reset sub panels
        //reset all sub panels
        self.resetAllSubPanels();
        $(".requestInfoPanel").addClass("hidden");
        //TODO clear out selections from various possible sub panels ie- numbers on rooms, dorm types, etc
        switch ( $("#typeSelect").val() ) {
            case "Private Room":
				//reset the request object
				request = {};
				//set the request variable
				request.propertyType = "Private Room";
                self.hideSubPanels();
                //show room options panel
                $("#roomOptions").removeClass('hidden');
                //apply event to room# select
                $("#numberRooms").change(function () {
                    
                });
            break;
            case "Cabin":
				//reset the request object
				request = {};			
				//set the request variable
				request.propertyType = "Cabin";			
                self.hideSubPanels();                
            break;
            case "Dorm":
				//reset the request object
				request = {};			
				//set the request variable
				request.propertyType = "Dorm";			
                self.hideSubPanels(); 
                //show dorm options panel
                $("#dormOptions").removeClass('hidden');
            break;
            case "Group House":
				//reset the request object
				request = {};			
				//set the request variable
				request.propertyType = "Group House";			
                self.hideSubPanels();
                $("#houseOptions").removeClass('hidden');    
            break;
        }        
    }
}

