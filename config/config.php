<?php
//build a json (string) for config variables
$c = '{
	"showWinterRates"	:	"true",
	"email": {
		"toEmail"		:	"bookings@lazylizardhostel.com",
		"toName"		:	"Lazy Lizard"
	},
	"rates": {
		"dorm_s"	: "16.00",
		"dorm_w"	:	"16.00",
		"cabin"	: {
			"p1b1_s"	:	"41.00",
			"p1b1_w"	:	"24.00",
			"p2b1_s"	:	"45.00",
			"p2b1_w"	:	"28.00",
			"p2b2_s"	:	"47.00",
			"p2b2_w"	:	"28.00",
			"p3_s"		:	"50.00",
			"p3_w"		:	"34.00",
			"p4_s"		:	"54.00",
			"p4_w"		:	"38.00",
			"p5_s"		:	"58.00",
			"p5_w"		:	"42.00",
			"p6_s"		:	"62.00",
			"p6_w"		:	"46.00"
		},
		"house"	: {		
			"wm_whole_s"	:	"340.00",
			"wm_whole_w"	:	"200.00",
			"wm_upper_s"	:	"200.00",
			"wm_upper_w"	:	"120.00",
			"wm_lower_s"	:	"160.00",
			"wm_lower_w"	:	"100.00",
			"grammas_s"		:	"180.00",
			"grammas_w"		:	"100.00",
			"lacasa_s"		:	"240.00"
		},
		"room" : {
			"p1_s"	:	"35.00",
			"p1_w"	:	"24.00",
			"p2_s"	:	"39.00",
			"p2_w"	:	"28.00",
			"p3_s"	:	"45.00",
			"p3_w"	:	"34.00",
			"p4_s"	:	"51.00",
			"p4_w"	:	"38.00",
			"p5_s"	:	"58.00",
			"p5_w"	:	"n/a",
			"p6_s"	:	"65.00",
			"p6_w"	:	"n/a"
		}
	}
}';
//convert it to a php object for use in templates
$config = json_decode($c);
