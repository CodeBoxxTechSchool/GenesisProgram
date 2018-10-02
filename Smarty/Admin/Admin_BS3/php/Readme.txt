_upload		- upload folder (when a file is sent via email)
		- edit the path to config.inc.php
		- required to have write permission (chmod 0755)

view		- contains php demo files.
		- example: demo.shop.php - contains examples of how to use the shop template files together with javascript files (js/view/demo.shop.js)

config.inc.php	- global config file.
		- edit this file using your favourite editor

contact.php	- the script used to send emails via SMTP or mail()
		- script called directly or via ajax (using form validation)

phpmailer	- used by contact.php to send emails
