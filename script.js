//Getting elemet by Id and storing it in a variable.
const navIcon = document.getElementById("menu");
function dropdown (){
    // check if the menuitem is displayed or not. 
    //if it is, drop-down changes to hidden and vice versa
    if(navIcon.className == "menuitems"){
        navIcon.className = "hidden"; 
    }
    else{
        navIcon.className = "menuitems";
    }
}