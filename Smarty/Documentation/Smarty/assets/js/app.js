window.height = jQuery(window).height();

jQuery(window).ready(function() {

	// easing - only needed
	jQuery.extend( jQuery.easing,{
		easeInOutExpo: function (x, t, b, c, d) {
			if (t==0) return b;
			if (t==d) return b+c;
			if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
			return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
		},
	});

	SyntaxHighlighter.defaults['toolbar'] = false;
	SyntaxHighlighter.all();

	_aside();
	_scrollTo();
	_afterResize();
	jQuery("#start-welcome").height(window.height - 100);
});



/** After Resize
 **************************************************************** **/
	function _afterResize() {

		// On Resize
		jQuery(window).resize(function() {

			if(window.afterResize) {
				clearTimeout(window.afterResize);
			}

			window.afterResize = setTimeout(function() {

				/**
					After Resize Code
					.................
				**/
				window.height = jQuery(window).height();
				jQuery("#start-welcome").height(window.height - 100);

				_aside();

			}, 500);

		});

	}



/** Aside
 **************************************************************** **/
	function _aside() {

		var _logoHeight 	= parseInt(jQuery('a.logo').outerHeight()),
			_windowHeight 	= parseInt(jQuery(window).height()),
			_asideHeight	= parseInt(_windowHeight - _logoHeight);

		jQuery("ul#side-nav").height(_asideHeight);
		jQuery("#start").height(_windowHeight - 200);


		// Main menu click
		jQuery("#side-nav>li>a").bind("click", function(e) {
			e.preventDefault();

			_page_id = jQuery(this).attr('href');

			jQuery("#side-nav>li").removeClass('menu-active');
			jQuery(this).parent().addClass('menu-active');

			// Close all open submenus
			jQuery("#side-nav>li>ul").each(function() {
				if(jQuery(this).is(":visible")) {
					jQuery(this).slideUp().removeClass('submenu-open');
				}
			});

			// toggle this submenu (if exists a submenu)
			jQuery(this).next('ul.list-group').slideDown(150).addClass('submenu-open');
			
			setTimeout(function(){ 
				jQuery('html,body').animate({scrollTop: 0}, 800, 'easeInOutExpo');
			}, 156 );

			// set visible curent page
			if(!jQuery(_page_id).hasClass('submenu-active')) {
				jQuery('.page:visible').fadeOut(0).removeClass('submenu-active');
				jQuery(_page_id).fadeIn(250).addClass('submenu-active');
				jQuery(this).next().find('li:first-child>a').trigger('click');
			}
		});


		// Submenu click
		jQuery("#side-nav>li>ul li a").bind("click", function(e) {
			e.preventDefault();
			
			jQuery("#side-nav>li>ul li a").removeClass('submenu-active');
			jQuery(this).addClass('submenu-active');
		});

		// Logo Click
		jQuery("a.logo").bind("click", function(e) {
			e.preventDefault();
			
			jQuery("#pageStartBtn").trigger('click');
		});

	}



/** ScrollTo
 **************************************************************** **/
	function _scrollTo() {

		jQuery("a.scrollTo").bind("click", function(e) {
			e.preventDefault();

			var href = jQuery(this).attr('href');

			if(href != '#') {
				jQuery('html,body').animate({scrollTop: jQuery(href).offset().top - 80}, 500, 'easeInOutExpo');
			}
		});

	}
