//Configuration Flags

var indexSeparator = ' || ';
var IsPictureNumberListEnable =  "Enable";//"Enable" or "Disable"
var IsPictureTitleEnable =   "Enable"; //Enable or "Disable"
var slideDelay = 10;

// Add one line per photo, using Picture Param function.
// The third parameter is optional and will default to the number of the photo if not provided.
// If  you do not want to provide a file comment file you can create a file  named default.txt /default.html in the Comment directory.
// This file can be empty or comprise a default message. This file will be displayed  as a comment of all photos that have
// second parammeter missed.
//Features
//  Bidirectional Slide Show
//  Click right on the image cause Next Image
//  File number list - List . This ficture is configurable. See Configuration Flags.
//  File caption list - Select. 
//  Show Picture Title -  This ficture is configurable. See Configuration Flags.
//  N.B. All Next/Previous buttons and direct click on the picture are block at the time of SlideShow !!!
PictureParam('./images/image1.jpg',''); // -example -- ,"On the way to the top"
PictureParam('./images/image2.jpg','./Comments/Comment2.html',"Výhled z vrcholu je vynikající");
PictureParam('./images/image3.jpg','./Comments/Comment3.html',"Ovce vyšetøují");
PictureParam('./images/image4.jpg','./Comments/Comment4.html',"Slibovaná bouøka");
PictureParam('./images/image5.jpg','./Comments/Comment5.html',"Spodní èást ledovce");
PictureParam('./images/image6.jpg','./Comments/Comment6.html',"Anapurna");

