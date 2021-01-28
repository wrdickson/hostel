'use strict';
var llMap = (function () {
	var llMap = {
		initialize: function () {
			console.log("llMap initialize()");
			var options = {
				scrollWheelZoom: false
			};
			var map = L.map('llMap', options).setView([38.55608595586475, -109.53489303588867], 9);
						L.tileLayer( 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
				subdomains: ['a','b','c']
			}).addTo( map );
			var marker = L.marker([38.55608595586475, -109.53489303588867]).addTo(map);
			//marker.bindPopup("<b>Lazy Lizard Hostel<br>1213 S Hwy 191<br/>Moab, UT 84532").openPopup();
			marker.bindPopup("<b>Lazy Lizard Hostel<br>1213 S Hwy 191<br/>Moab, UT 84532");
		}
	}



	return llMap;
}());