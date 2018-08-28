_cache		- folder used to store cached files (example: twitter feeds) for faster load
		- required to have write permission (chmod 0755)
		- by default, most webserver already have write permission but if not, change  permission from your ftp client or call your server administrator.
		- can be disabled from config.inc.php

_upload		- upload folder (example: contact form - page-contact-1.html)
		- edit the path to config.inc.php
		- required to have write permission (chmod 0755)

view		- contains php demo files.
		- example: demo.shop.php - contains examples of how to use the shop template files together with javascript files (js/view/demo.shop.js)

config.inc.php	- global config file.
		- edit this file using your favourite editor

twitter/twitter.php	- return tweets in json format.
		- usage example: php/twitter/tweet.php?username=stepofweb&limit-3
		- this is called by assets/js/scripts.js
		- sure, you can also call the url manually

contact.php	- the script used to send emails via SMTP or mail()
		- script called directly or via ajax (using form validation)

phpmailer	- used by contact.php to send emails

newsletter.php	- used by "subscribe to newsletter" forms.
		- all emails are written into external text file called "_newsletter.txt"
