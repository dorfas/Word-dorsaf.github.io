Name();

function funDropdown(){
document.getElementById("myDropdown").classList.Toggle
}

// LES BOUTONS :
function boldButton() 
{
 
   var  ban =document.getElementById("typedText").style.fontWeight ;
 
 if(ban == 'normal')
    {
        document.getElementById("typedText").style.fontWeight = 'bold';
    }
 else
    {
        document.getElementById("typedText").style.fontWeight = 'normal';
    }
}

function italicButton() 
{
 
   var  ban =document.getElementById("typedText").style.fontStyle ;
 
 if(ban == 'normal')
    {
        document.getElementById("typedText").style.fontStyle = 'italic';
    }
 else
    {
        document.getElementById("typedText").style.fontStyle = 'normal';
    }
}

/*function underlineButton() 
{
 
   var  ban =document.getElementById("typedText").style.textDecoration ;
   console.log(ban);

 
 if(ban == 'none')
    {
        document.getElementById("typedText").style.textDecoration = 'underline';
    }
 else
    {
        document.getElementById("typedText").style.textDecoration = 'none';
    }
}

*/

function underlineButton() 
{
 
   document.getElementById("typedText").classList.toggle("underline") ;

 
}


function Name(){

for (var i=0 ; i<4; i++) {
var font= document.getElementsByClassName("fontName")[i].value ;

document.getElementsByClassName("fontName")[i].style.fontFamily=font;
console.log(font);
}

}


function change (){
 
  var a = document.getElementById("police").value ;
 
  document.getElementById("typedText").style.fontFamily = a;

document.getElementById("police").style.fontFamily=a;

}

function textsize(){
  
  var a= document.getElementById("fontSize").value + "px";
  console.log(a);
  document.getElementById("typedText").style.fontSize=a ;
  }