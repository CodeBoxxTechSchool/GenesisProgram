<?php
/**
 * @version		v1.0.0
 * @author		Dorin Grigoras [www.stepofweb.com]
 * @date		Thursday, May 21, 2015
**/	date_default_timezone_set('Etc/UTC');
	@ini_set('display_errors', 0);
	@ini_set('track_errors', 0);

	$array['email']	= isset($_REQUEST['email']) ? ckmail($_REQUEST['email']) : false;

	if($array['email'] !== false) {

		$fh = fopen('_newsletter.txt', 'a+');
		fwrite($fh, "\r\n" . $array['email']);
		fclose($fh);


		/** ***************************************************************************************** **/
		/** ***************************************************************************************** **/
		/**
		 
		// UNCOOMENT THIS ID YOU WANT TO SEND ALL SUBSCRIBERS TO YOUR CONTACT ADDRESS!


		require('config.inc.php');

		// SMTP
		if($config['use_smtp'] === true) {

			require('phpmailer/5.2.23/PHPMailerAutoload.php');
			require('phpmailer/5.2.23/class.phpmailer.php');


			$m = new PHPMailer();
			$m->IsSMTP();
			$m->SMTPDebug  	= false;					// enables SMTP debug information (for testing) [default: 2]
			$m->SMTPAuth   	= true;						// enable SMTP authentication
			$m->Host       	= $config['smtp_host']; 	// sets the SMTP server
			$m->Port       	= $config['smtp_port'];		// set the SMTP port for the GMAIL server
			$m->Username   	= $config['smtp_user'];		// SMTP account username
			$m->Password   	= $config['smtp_pass'];		// SMTP account password
			$m->SingleTo   	= true;
			$m->CharSet    	= "UTF-8";
			$m->Subject 	= "Newsletter Subscribe";
			$m->AltBody 	= 'To view the message, please use an HTML compatible email viewer!';

			$m->AddAddress($config['send_to'], "Newsletter Subscribe");
			$m->AddReplyTo($array['email'],   isset($array['name']) ? $array['name'] : $array['email']);
			$m->SetFrom($config['smtp_user'], isset($array['name']) ? $array['name'] : $array['email']);
			$m->MsgHTML("
				Email Address: {$array['email']}
				---------------------------------------------------<br>
				IP: {$ip}
			");

			if($config['smtp_ssl'] === true)
				$m->SMTPSecure = 'ssl';					// sets the prefix to the server

			// @SEND MAIL
			if($m->Send()) {
				// SENT
			} else {
				// NOT SENT
			}


		// mail()
		} else {

			// mail( string $to , string $subject , string $message [, string $additional_headers [, string $additional_parameters ]] )
			mail( 
				$config['send_to'] , 
				$config['subject'],
				$email_body
			);

		}

		**/


		/** ***************************************************************************************** **/
		/** ***************************************************************************************** **/


		unset($fh, $array);
	}

/** ********************************** 
 @CHECK EMAIL
/** ******************************* **/
	function ckmail($email) {
		$email = trim(strtolower($email));
		if(preg_match('/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/',trim($email))){
			return $email;
		} else { return false; }
	}
?>