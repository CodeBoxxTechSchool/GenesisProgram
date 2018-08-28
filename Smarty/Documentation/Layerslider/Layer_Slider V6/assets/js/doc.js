$(document).ready(function() {

	// Check user OS
	if(navigator.appVersion.indexOf('Mac') != -1) {
		$('body').addClass('mac');
	}

	// Init syntax highlighter
	SyntaxHighlighter.defaults.toolbar = false;
	SyntaxHighlighter.all();

	// Init sidebar
	$('#sidebar li').click(function(e) {

		var $li = $(this);

		// Do nothing if it's the active menu
		if( $li.hasClass('active') ) { return false; }

		// Highlight the menu item
		$li.addClass('active').siblings().removeClass('active');

		// Show new section
		$('#content > div > section').removeClass('active').eq( $li.index() ).addClass('active');

		// Scroll to top
		$('#content').scrollTop(0);

		// Filter out triggered events
		if( ! e.isTrigger ) {

			// Update hash
			document.location.hash = $li.data('hash');
		}
	});


	// JumpTo functionality
	$(window).on('hashchange', function(e) {
		e.preventDefault();

		var hash 		= document.location.hash.substr(1),
			$target 	= $('[data-target="'+hash+'"]'),
			$section 	= $target.closest('section');

		if( $target.length && $section.length ) {

			$('#sidebar li').eq( $section.index() ).trigger('click');

			var scrollTop = $('#content').scrollTop() + $target.offset().top;
				scrollTop = scrollTop < 50 ? 0 : scrollTop;

			$('#content').stop(true, true).animate({ scrollTop: scrollTop }, 500);
		}
	}).trigger('hashchange');


	// Init transition gallery
	if( typeof layerSliderTransitions !== 'undefined' ){
		window.lsTrImgPath = 'assets/img/';
		window.pluginPath = '../';
		transitionGallery.init();
	}
});

var transitionGallery = {

	init : function() {

		var self =  this;

		// Add transition list
		self.appendTransitions(layerSliderTransitions['t2d'], $('#slide-transitions-2d tbody'));
		self.appendTransitions(layerSliderTransitions['t3d'], $('#slide-transitions-3d tbody'));

		// Show transitions
		jQuery('.ls-transition-list').on('mouseenter', 'a', function() {
			lsShowTransition( this );
		});

		// Hide transitions
		jQuery('.ls-transition-list').on('mouseleave', 'a', function() {
			lsHideTransition( this );
		});
	},

	appendTransitions : function(transitions, target) {
		for(c = 0; c < transitions.length; c+=2) {

			// Append new table row
			var tr = jQuery('<tr>').appendTo(target).append('<td class="c light"></td><td></td><td class="c"></td><td></td>');


			// Append transition col 1 & 2
			tr.children().eq(0).text((c+1));
			tr.children().eq(1).append( jQuery('<a>', { 'href' : '#', 'html' : transitions[c]['name'], 'data-key' : (c+1) } ) )
			if(transitions.length > (c+1)) {
				tr.children().eq(2).text((c+2));
				tr.children().eq(3).append( jQuery('<a>', { 'href' : '#', 'html' : transitions[(c+1)]['name'], 'data-key' : (c+2) } ) )
			}
		}
	}
};
