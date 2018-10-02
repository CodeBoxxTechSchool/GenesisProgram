<?php
/** ********************************************** **
	@DEMO AUTOSUGGEST
	@Last Update	2:39 PM Wednesday, June 03, 2015
*************************************************** **/

	if(isset($_REQUEST['search']) && !empty($_REQUEST['search'])) {
	
		/**
			PARAMS
			$LIMIT 		= limit your query [1 - 1000]
			$KEYWORD 	= Letters/Keywords typed by the user
			
			USE THESE PARAMS TO CREATE THE QUERY.
			Quick Mysql Query Example:
			
			mysql_query("SELECT * FROM my_table WHERE title LIKE '%$KEYWORK%' LIMIT $LIMIT");
			
			Add All results to an array and encode the array with JSON. Please, see below!
		**/
		$LIMIT 		= isset($_REQUEST['limit']) 	? (int) 	$_REQUEST['limit'] 		: 30;
		$KEYWORD 	= isset($_REQUEST['search']) 	? (string) 	$_REQUEST['search'] 	: null;








		/**
			Country Array List - Demo Purpose Only!

		**/
		$array = array(
			"Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda",
			"Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain",
			"Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia",
			"Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria",
			"Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile",
			"China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship",
			"Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador",
			"Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands",
			"Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia",
			"Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey",
			"Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India",
			"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey",
			"Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho",
			"Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar",
			"Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova",
			"Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands",
			"Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway",
			"Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland",
			"Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon",
			"Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone",
			"Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts & Nevis",
			"St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria",
			"Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago",
			"Tunisia","Turkey","Turkmenistan","Turks & Caicos","Uganda","Ukraine","United Arab Emirates",
			"United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"
		);

		// Convert to JSON
		$json = json_encode($array);

		// Print JSON
		die($json);

	}
?>