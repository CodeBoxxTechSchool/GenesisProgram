/** ********************************************** **
	@REALESTATE PACK DEMO [usage example]
	pack-realestate-*.html
*************************************************** **/
	var googleMapKey = "AIzaSyCqCn84CgZN6o1Xc3P4dM657HIxkX3jzPY";

	jQuery(document).ready(function() {

		_init_();

	});



	/**	_init_() 
	******************************* **/
	function _init_() {



		/* 	LIST MODE
			pack-realestate-property-list-1.html
			pack-realestate-property-list-2.html
		 *********************************** */
		window._lastClass = null;
		jQuery('div.property-list-opt .property-list-btn>a').bind("click", function(e) {
			e.preventDefault();

			var _t 			= jQuery(this),
				_class 		= _t.attr('data-class') || null;




			if(window._lastClass == null) {

				if(_class != null && _class != 'property-item-box') {

					window._lastClass = _class;
				
				} else {
				
					window._lastClass = 'col-xs-12 col-md-4'; // fail safe
				
				}
			
			}


			jQuery('div.property-list-opt .property-list-btn>a').removeClass('active');
			_t.addClass('active');

			if(_class != 'property-item-box') {

				jQuery('div.property-item-list div.property-item').removeClass('property-item-box').parent().removeClass('col-md-6 col-md-5 col-md-4 col-md-3 col-md-2 col-lg-6 col-lg-5 col-lg-4 col-lg-3 col-lg-2');

				// add to cookie (for php use if needed)
				_setCookie('property-list-mode','unboxed', 30); // in days
			
			} else {

				jQuery('div.property-item-list div.property-item').addClass('property-item-box');
				jQuery('div.property-item-list>div').addClass(window._lastClass);

				// add to cookie (for php use if needed)
				_setCookie('property-list-mode','boxed', 30); // in days
			}

		});








		/* 	SAVE BUTTON
			pack-realestate-property-item.html
		 *********************************** */
		jQuery("#restate-save").bind('click', function(e) {
			e.preventDefault();

			var _this = jQuery(this),
				_href = _this.attr('href');


			jQuery.ajax({
				url 		: _href,
				dataType 	: 'html',
				type 		: 'POST',
				cache 		: true, // warning: this will cause a timestamp and will call the request twice
				async 		: true,

				beforeSend 	: function() {

					jQuery('i', _this).toggleClass('fa fa-heart-o , fa fa-cog fa-spin');

				},

				success : function(data) {

					_toastr("Successfully Saved!",'top-right',"success",false);
					jQuery('i', _this).toggleClass('fa fa-heart-o , fa fa-cog fa-spin');

				},

				complete: function(){},

				// 404 ERROR MESSAGE
				error : function(xhr, ajaxOptions, thrownError) {

					_toastr("ERROR: Please try again later!",'top-right',"error",false);
					jQuery('i', _this).toggleClass('fa fa-heart-o , fa fa-cog fa-spin');

				}
			});


		});







		/* 	FULLSCREEN GOOGLE MAP
			pack-realestate-property-item.html
		 *********************************** */
		jQuery("a.togglemap").bind('click', function(e) {
			e.preventDefault();

			// get latitude and longitude
			var _lat = jQuery(this).attr('data-lat') || 0,
				_lng = jQuery(this).attr('data-lng') || 0;

			// load scripts first
			loadScript('//maps.google.com/maps/api/js?key=' + googleMapKey, function() {
				loadScript(plugin_path + 'gmaps.js', function() {
				
					// show map & init
					jQuery("#map-fullscreen").show(0, function() {

						/**
							@BASIC GOOGLE MAP
						**/
						var map = new GMaps({
							div: '#gmap-init',
							lat: Number(_lat),
							lng: Number(_lng)
						});

						var marker = map.addMarker({
							lat: Number(_lat),
							lng: Number(_lng),
							title: 'Company, Inc.'
						});

					});

					// close map
					jQuery("#map-fullscreen>button").bind('click', function(e) {
						e.preventDefault();
						jQuery("#map-fullscreen").hide();
					});


				});
			});


		});





		/* 	GOOGLE MAP ON SLIDER
			pack-realestate-property-item-2.html
		 *********************************** */
		var _gs_container = "#gmap-slider"; 

		if(jQuery(_gs_container).length > 0) {
			jQuery(window).on("load", function() {

			// get latitude and longitude
			var _gs_this	 	= jQuery(_gs_container),
				_gs_lat 		= _gs_this.attr('data-lat') || 0,
				_gs_lng 		= _gs_this.attr('data-lng') || 0,
				_sliderH 		= jQuery("#slider").outerHeight();	// slider height


				// load scripts first
				loadScript('//maps.google.com/maps/api/js?key=' + googleMapKey, function() {
					loadScript(plugin_path + 'gmaps.js', function() {

						// Slider and google map shouyld have the same height
						_gs_this.height(_sliderH);

						/**
							@PANORAMA GOOGLE MAP
						**/
						var panorama = GMaps.createPanorama({
							el: _gs_container,
							lat: Number(_gs_lat),
							lng: Number(_gs_lng)
						});


					});
				});


			});
		}




		/* 	MORTGAGE CALCULATOR
			pack-realestate-property-item.html
		 *********************************** */
		// Recalculate on change
		jQuery("#mcalc-price, #mcalc-dpayment, #mcalc-rate").keyup(function() {
		 	_mcalc();
		});

		jQuery("#mcalc-term").change(function() {
			_mcalc();
		});


		// Morgage Calculator
		function _mcalc() {
			var _mcalc_price 		= jQuery("#mcalc-price").val() 		|| 0,			// price
			 	_mcalc_term 		= jQuery("#mcalc-term").val() 		|| 10,			// term
			 	_mcalc_dpayment 	= jQuery("#mcalc-dpayment").val() 	|| 0,			// % down payment
			 	_mcalc_rate 		= jQuery("#mcalc-rate").val() 		|| 0,			// rate
			 	_mcalc_charges		= jQuery("#mcalc-charges").html()	|| 0,			// monthyl charges
			 	_mcalc_charges		= Number(_mcalc_charges.replace(',',''));
              

			 // it's a rare case scenario when interest rate is 0
			 // it's not accurate but we cover it - info only!
			if(_mcalc_rate == 0)
			 	_mcalc_rate = 0.000000000001;


		 	// DOWN PAYMENT AMOUNT
		 	_result_amount = _mcalc_price / 100 * _mcalc_dpayment;
		 	jQuery("#mcalc-result-downpayment").html(_result_amount.formatMoney(2, '.', ','));


		 	// MORTGAGE AMOUNT
		 	_result_mamount = _mcalc_price - _result_amount;
		 	jQuery("#mcalc-result-mamount").html(_result_mamount.formatMoney(2, '.', ','));


		 	// MONTHLY MORTGAGE PAYMENT
		 	// Formula: M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
			var P = _result_mamount; 			//principle / initial amount borrowed
			var I = _mcalc_rate / 100 / 12; 	//monthly interest rate
			var N = _mcalc_term * 12; 			//number of payments months

			_result_mortgage = P * I * (Math.pow(1 + I, N)) / (Math.pow(1 + I, N) - 1);
			jQuery("#mcalc-mortgage").html(_result_mortgage.formatMoney(2, '.', ','));


			// TOTAL MONTHLY PAYMENT
			_result_pmonthly = _result_mortgage + _mcalc_charges;
			jQuery("#mcalc-pmonthly").html(_result_pmonthly.formatMoney(2, '.', ','));

		} 

		if(jQuery("#mcalc-price").length > 0) {
			_mcalc(); // init on load
		}


	}