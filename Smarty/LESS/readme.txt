BETA VERSION

NOTE 1: CSS files are not fully converted to LESS but are splitted so you can easely remove sections you don't need. Also, you can edit essentials (contains many plugins/rules you may not need for your project): _lib/essentials/essentials.less

NOTE 2: CSS plugins (including bootstrap) are copied to LESS folder. Because of this, some of them will throw you an error in the console - it's because a specific plugin will look for a font or image. Example: bootstrap, by default, will try to load glyphicons font. To solve this, you need to copy the missing files to the right path, from assets/plugins/ . If you don't want to compile all plugins (but you want to compile only smarty files), remove all plugins from production.less and keep only smarty files (there should be no console error/warning for smarty files only).





HOW TO COMPILE 

Download winLess from http://winless.org/ (for windows) and mac users can go to (http://incident57.com/less/).

Once installed load up and drop in the less folder to the 'Less Files' zone. Deselect all selected less files and only select "production.less".

Hit compile and it should automatically create a minified CSS file to your css directory called "production.css"!



HTML USAGE:
1. Copy compiled production.css to HTML/assets/css/
2. Remove all CSS files from <head> and add only this line:
<link href="assets/css/production.css" rel="stylesheet" type="text/css" />




Other compillers:

Prepros:
http://alphapixels.com/prepros/

Koala compiller:
http://koala-app.com/
