/** ********************************************** **
	@HOTEL PACK DEMO [usage example]
	pack-hotel-*.html
*************************************************** **/
	jQuery(document).ready(function() {

		_init_();

	});



	/**	_init_() 
	******************************* **/
	function _init_() {


		/* 	CALCULATE TOTAL BOOKING PRICE
			pack-hotel-booking.html
		 *********************************** */
		var _bookingData = []; // set as a default array
		


		// Get Booking Details in array format
		// Using a function is easier for multiple use
		function _getBookingData() {

			// room type
			_bookingData[0] 	= jQuery("ul.booking-option-list>li>label.radio>input:checked").val() 				|| '';

			// room price
			_bookingData[1] 	= jQuery("ul.booking-option-list>li>label.radio>input:checked").attr('data-price') 	|| 0;

			// check in date
			_bookingData[2] 	= jQuery("input#client_checkin").val() 		|| '';

			// check out date
			_bookingData[3] 	= jQuery("input#client_checkout").val() 	|| '';

			// Total Days [1 by default]
			_bookingData[4] 	= 1;



			// Calculate checkin-checkout in days when we have both dates (check in/out)
			if(_bookingData[2] != '' && _bookingData[3] != '') {

				var timeStampA = Date.parse(_bookingData[2]) / 1000,	// convert checkin to timestamp
					timeStampB = Date.parse(_bookingData[3]) / 1000,	// convert checkout to timestamp

			    	oneDay 		= 24 * 60 * 60 * 1000, 					// hours * minutes * seconds * milliseconds

			    	firstDate 	= new Date(timeStampA * 1000),
			    	secondDate 	= new Date(timeStampB * 1000),

			    	diffDays 	= Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

			    // now we know in days - minimum 1 day, no matter what!
			    _bookingData[4] = diffDays == 0 ? 1 : diffDays;

			}



			// No. of rooms
			_bookingData[5] 	= jQuery("select#client_rooms").val() 		|| 1;

			// Children
			_bookingData[6] 	= jQuery("select#client_adults").val() 		|| 1;

			// Children
			_bookingData[7] 	= jQuery("select#client_children").val() 	|| 0;

			// return array
			return _bookingData;

		}





		// Calculate everything
		function _computeBooking() {

			// Call functions below to get current data
			_bookingData 		= _getBookingData();

			// set as a simple variables (easier to understand the code)
			// commented - not used here (uncomment if you want to expand the code)
			//_bookingDataType 		= _bookingData[0];
			_bookingDataPrice 		= _bookingData[1];

			//_bookingDataCheckIn 	= _bookingData[2];
			//_bookingDataCheckOut 	= _bookingData[3];
			_bookingDataDays 		= _bookingData[4];

			_bookingDataRooms 		= _bookingData[5];
			//_bookingDataAdults 		= _bookingData[6];
			//_bookingDataChildren 	= _bookingData[7];


			// Update total payment & nights
			jQuery("#total_payment").html(_bookingDataDays * _bookingDataPrice * _bookingDataRooms);
			jQuery("#total_nights").html(_bookingDataDays);

		}



		// On change
		jQuery("form#bookingForm input, form#bookingForm select").on("change", function() {

			_computeBooking();

		});



		// On load
		_computeBooking();

	}




