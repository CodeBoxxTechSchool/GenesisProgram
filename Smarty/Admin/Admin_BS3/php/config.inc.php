<?php

// USE SMTP OR mail()
// SMTP is recommended, mail() is disabled on most shared hosting servers.
// IF false : SMTP host/port/user/pass/ssl not used, leave empty or as it is!
$config['use_smtp']				= true;						// true|false

// SMTP Server Settings
$config['smtp_host'] 			= 'smtp.gmail.com';   		// eg.: smtp.gmail.com
$config['smtp_port'] 			= 587;						// eg.: 587
$config['smtp_user'] 			= ''; 						// you@gmail.com
$config['smtp_pass'] 			= '';						// password
$config['smtp_ssl']				= false;					// should remain false

// Who receive all emails?
$config['send_to']				= 'youremail@gmail.com';	// destination of all emails sent throught contact form

// Email Subject
$config['subject']				= 'Smarty Contact Form';	// subject of emails you receive




/** ******************************************************* MISC ******************************************************* **/
define('UPLOAD_FOLDER',		'_upload/');										// upload folder path - slash at the end!
define('UPLOAD_FOLDER_URL',	'http://localhost/PRJ/Smarty/Admin/php/_upload/');	// Full url path to upload folder (used for contact files) - slash at the end!
define('UPLOAD_MAX_SIZE',	10000000);											// 1000000 = 10Mb

?>