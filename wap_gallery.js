var slideMode = new Boolean(false);  // Flag for  SlideShow mode
var slideShowDirection= "";  // Save current SlideShow direction
var glbSlideTimer = 0; // Timer ID
var CurrentPhoto = 0;  // Current photo number
var CommentsArray= new Array();  // Comprise list of text files
var ArrayPicTitle  = new Array();  // Comprise list of the Pictures titles
var ArrayImageFile = new Array(); // Comprise list of the  pictures file names


function  ChangeSelectObj(){
var list = document.getElementById('optionlist');
changeImage(list.selectedIndex);
}
// Change  Image function. Set new  image to be displayer with the supporting information
function changeImage(CurPhoto)
{
      var list = document.getElementById('optionlist');
      CurrentPhoto=CurPhoto;
      list.selectedIndex=CurrentPhoto;
      document.mainimage.src = list.options[CurrentPhoto].value;
     // Show comment  for the current picture
      CommentLoadFile(CommentsArray[CurrentPhoto]);
     // Dispaly Title
      if ( IsPictureTitleEnable == 'Enable' ){
          var pic_title = document.getElementById('picture_title');
          pic_title.innerHTML = ArrayPicTitle[CurrentPhoto];
          }
        //Display Comments
      if ( IsPictureNumberListEnable  == 'Enable' ){
          PictureNumberList();
      }
}
// Init function. Called only once
function InitPictureGallery(){
var index = 0;
var list = document.getElementById('optionlist');
  // set  start  picture value
  list.selectedIndex=0;
  list.options.length = ArrayImageFile.length;
  // Set up Sellect element
  for ( index=0; index < ArrayImageFile.length; index ++ ){
    list.options[index].value = ArrayImageFile[index];
    list.options[index].text  = ArrayPicTitle[index];
  }
  //Show first picture
 changeImage(CurrentPhoto);
}


function  buttonNext(){
   if(slideMode != true){
    nextImage();
   }
}

function buttonPrev(){
  if(slideMode != true){
    prevImage();
  }
}

function prevImage()
{
 var list = document.getElementById('optionlist');
      if(list.selectedIndex == 0){
           list.selectedIndex = list.options.length-1;
      }
      else{
           list.selectedIndex--;
      }
      CurrentPhoto=list.selectedIndex;
      changeImage(CurrentPhoto);
      // Check if SlideShow is enable
      if(slideMode == true){
         glbSlideTimer = setTimeout('prevImage();', (slideDelay * 100));
        }
}

function nextImage()
{
var list = document.getElementById('optionlist');
       if(list.selectedIndex == list.options.length-1){
            list.selectedIndex = 0;
        }
        else{
                list.selectedIndex++;
        }
        CurrentPhoto=list.selectedIndex;
        changeImage(CurrentPhoto);
        // Check if SlideShow is enable
        if(slideMode == true){
         glbSlideTimer = setTimeout('nextImage();', (slideDelay * 100));
        }
 }

 // Event - Click  directly on the foto. Cause  next foto to be displayed
function ClickOnPhoto(){
    if (slideMode != true ){
        nextImage();
   }
}
// SlideShoe  - Forward button function
function ButtonBackward(){
var button=document.getElementById("ButtonBackward");
// Set the SlideShow mode to initial state
if ( (slideMode == true )&& (slideShowDirection!="Backward") ){
   var buttonForward=document.getElementById("ButtonForward");
   buttonForward.value = "Spustit ->";
   disableSlideMode();
}
// Set the SlideShow mode to initial state
if ( (slideMode == true ) &&  (slideShowDirection=="Backward") ){
   button.value = "<- Spustit";
   disableSlideMode();
}// Start SlideShow in Backward direction
else{
   button.value = "<- Zastavit";
   enableSlideMode('prevImage()');
   slideShowDirection="Backward";
 }
}
// SlideShow  - Backward button function
function ButtonForward(){
var button=document.getElementById("ButtonForward");
// Set the SlideShow mode to initial state
 if ( (slideMode == true ) && (slideShowDirection!="Forward") ){
    var buttonBack=document.getElementById("ButtonBackward");
    buttonBack.value = "<- Spustit";
    disableSlideMode();
}
// Set the SlideShow mode to initial state
if ( (slideMode == true ) && (slideShowDirection=="Forward") ){
    button.value = "Spustit ->";
    disableSlideMode();
}// Start SlideShow in Forward direction
else{
     button.value = "Zastavit ->";
     enableSlideMode('nextImage();');
     slideShowDirection="Forward";
 }
}
// Enable Slide mode
function enableSlideMode(direction) {
   slideMode=Boolean(true);
   glbSlideTimer = setTimeout(direction, (slideDelay * 100));
}

// Disable Slide mode
function disableSlideMode() {
  slideMode = Boolean(false);
  clearTimeout (glbSlideTimer);
}
// load  the text file that comprise the comments for the current picture
function CommentLoadFile(file_name) {
 var  FrameComment;
 FrameComment = document.getElementById("PictureComments");
 FrameComment.src = file_name;
}
// Configuration function  for the whole photo gallery
function PictureParam(ImageFile, Comment, PicTitle) {

  var len = ArrayImageFile.length;
  ArrayImageFile[len] = ImageFile;
  if(Comment ==''){
  CommentsArray[len] ="./Comments/default.html";
  }else {
  CommentsArray[len] = Comment;
  }
  //Create Picture title list
  if (typeof PicTitle == "undefined") {
         ArrayPicTitle[len] = len + 1;
   } else {
        ArrayPicTitle[len] = PicTitle;
   }
}
// Creates current picture list unit
function PictureNumberList() {
  var indexString = '';
  var i;
  var index;

  for (i = 0; i < ArrayImageFile.length; i++) {
   index=i+1;
    if (i>0) {indexString += indexSeparator}
     if (i == CurrentPhoto) {
       indexString += '<b>' + index + '</b>';
     } else {
      indexString += '<a href="javascript:changeImage('+i+');">' + index+ '</a>';
     }
  }
  document.getElementById('PictureNumList').innerHTML = indexString;
}
