<?php
/** ********************************************** **
	@DEMO SHOP 		[used by js/view/demo.shop.js]
	@Last Update	10:19 AM Wednesday, May 13, 2015
*************************************************** **/


	/** ADD TO WISHLIST
	 ********************************** **/
	if(isset($_POST['action']) && $_POST['action'] == 'add_to_wishlist') {
	
		// get item ID
		$item_id = isset($_POST['item_id']) ? (int) $_POST['item_id'] : 0;
		
		// check if item ID is valid
		if($item_id < 1) {
			die('_invalid_id_');
		}

		/***************************************************************/
		// ADD TO YOUR DATABASE - INSERT $item_id TO USER WISHLIST TABLE
		/***************************************************************/


		// return _ok_ back to javascript, item id added to wishlist
		die('_ok_');
		
	}





	/** ADD TO COMPARE
	 ********************************** **/
	if(isset($_POST['action']) && $_POST['action'] == 'add_to_compare') {
	
		// get item ID
		$item_id = isset($_POST['item_id']) ? (int) $_POST['item_id'] : 0;

		// check if item ID is valid
		if($item_id < 1) {
			die('_invalid_id_');
		}

		/***************************************************************/
		// ADD TO YOUR COOKIE OR SESSION [SHOULD BE AN ARRAY]
		// LATER RETUENED BY YOUR SCRIPT TO shop-compare.html
		/***************************************************************/


		// return _ok_ back to javascript, item id added to compare
		die('_ok_');
		
	}


?>