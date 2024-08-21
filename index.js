const display=document.getElementById("Display");
let erroroccured=false;
function appendToDisplay(text){
    if(erroroccured){
        display.value=text;
        erroroccured=false;
    }
    else
    display.value+=text;
}

function clearDisplay(){
    display.value="";
    erroroccured=false;
}
function calculate(){
    try{
    display.value= eval(display.value);}
    catch(error){
        display.value="Error";
        erroroccured=true;
    }
}