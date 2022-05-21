//Loads navbar hiring staus and loads JS when page is fully loaded
window.addEventListener('load', (event) => {
    console.log('Main.JS has loaded!');
    hiringStatus();
    hiringHeading();
  });
//Script for navbar hiring status
var isOpenHire = true;
function hiringStatus(){
    //bool true = Open to be hired; false = Currently Employed
    if (isOpenHire == true)
    {
        document.getElementById("nav-item-HiringStatus").innerHTML =
    "<i class='bi-check-circle-fill' id='navbarIcon' style='font-size: 1.5rem; color: rgb(20, 109, 20);'></i>Open to Work";
    console.log('Currently open for hire!');
    }
    else
    {
        document.getElementById("nav-item-HiringStatus").innerHTML =
    "<i class='bi-dash-circle-fill' id='navbarIcon' style='font-size: 1.5rem; color: rgb(161, 16, 16);'></i>Not open for work";
    console.log('Currently not open for hire!');
    }
};

//Script for hiring header
function hiringHeading(){
    if(isOpenHire == true){
        document.getElementById("hiringHeader").innerHTML =
        "<h3 style='color: rgb(20, 109, 20);'>I am currently open to work. Feel free to contact me for offers! </h3>"
    }
    else{
        document.getElementById("hiringHeader").innerHTML =
        "<h3 style='color: rgb(161, 16, 16);'>I am currently not open to work. But feel free to contact me for offers or inquiries </h3>"
    }
}