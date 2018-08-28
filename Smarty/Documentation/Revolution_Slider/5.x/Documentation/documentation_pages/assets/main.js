jQuery(document).ready(function(){
	
	//! Table Sorter
		jQuery("#sales").tablesorter({debug: true});
		
	//! Del Button
		jQuery(".delbut").click(function(){
			jQuery(this).closest("tr").remove();
			return false;
		});
	
	//! Clipboard
		//!	Sales	
		var sales = new ZeroClipboard( document.getElementById("sales_excel_copy") );
		sales.on( "ready", function( readyEvent ) {
		  // alert( "ZeroClipboard SWF is ready!" );
		  sales.on( "aftercopy", function( event ) {
		    // `this` === `client`
		    // `event.target` === the element that was clicked
		    //event.target.style.display = "none";
		    alert("Verfügbar für Excel");
		  } );
		} );
		//!	Sums	
		var sums = new ZeroClipboard( document.getElementById("sumsy_excel_copy") );
		sums.on( "ready", function( readyEvent ) {
		  sums.on( "aftercopy", function( event ) {
		   alert("Verfügbar für Excel");
		  } );
		} );
		//!	Withdrawal	
		var withdrawal = new ZeroClipboard( document.getElementById("withdrawal_excel_copy") );
		withdrawal.on( "ready", function( readyEvent ) {
		  withdrawal.on( "aftercopy", function( event ) {
		   alert("Verfügbar für Excel");
		  } );
		} );	
});