<!-- Copyright � 2000 Grushka, Inc. All rights reserved. -->
<!-- Use without permission is strictly prohibited. -->
<!-- Site problems? Please contact support@grushka.com for assistance. -->
<!-- http://www.grushka.com -->

<!--


if (document.images) {
  email = newImg('../images/email.gif');
  mexico2 = newImg('../images/mexico2.gif');
  mexico3 = newImg('../images/mexico3.gif');
}

function newImg(arg) {
  if (document.images) {
    rslt = new Image();
    rslt.src = arg;
    return rslt;
  }
}

function swapImg(imgName, imgSrc, layerName) {
  if (preloadFlag == true) {
      document[imgName].src = imgSrc;
  }
}

function preloadImages() {  
  if (document.images) {
    email_on = newImg('../images/email_on.gif');
    logo_top_on = newImg('../images/logo_top_on.gif');
    mexico1_on = newImg('../images/mexico1_on.gif');
    mexico2_on = newImg('../images/mexico2_on.gif');
    nav1_company = newImg('../images/nav1_company.jpg');
    nav1_logo = newImg('../images/nav1_logo.jpg');
    nav1_services = newImg('../images/nav1_services.jpg');
    nav2_contacts = newImg('../images/nav2_contacts.gif');
    nav2_services = newImg('../images/nav2_services.gif');
    nav3_company = newImg('../images/nav3_company.gif');
    mexico1_on = newImg('../images/mexico1_on.gif');
    mexico2_on = newImg('../images/mexico2_on.gif');
    mexico3_on = newImg('../images/mexico3_on.gif');
    
    arrow_on = newImg('../images/menus/arrow_on.gif');
    
    preloadFlag = true;
  }
}

function overLogo() {
  hideMenus();
  swapImg('imgLogoTop','../images/logo_top_on.gif');
  swapImg('imgNav1','../images/nav1_logo.jpg');
}

function outLogo() {
  swapImg('imgLogoTop','../images/logo_top.gif');
  swapImg('imgNav1','../images/nav1.gif');
}

function showPop() {
  args = showPop.arguments;
  for (var i=0; i<args.length; i++) {

document.getElementById(args[i]).style.visibility = 'visible';

    }
}

function hidePop() {
  args = hidePop.arguments;
  
  for (var i=0; i<args.length; i++) {

document.getElementById(args[i]).style.visibility = 'hidden';

    }
}

function overCompany() {
  hideMenus();
  swapImg('imgNav1','../images/nav1_company.jpg');
  swapImg('imgNav3','../images/nav3_company.gif');
  showPop('Company');
}

function overServices() {
  hideMenus();
  swapImg('imgNav1','../images/nav1_services.jpg');
  swapImg('imgNav2','../images/nav2_services.gif');
  showPop('Services');
}

function overContacts() {
  hideMenus();
  swapImg('imgNav2','../images/nav2_contacts.gif');
  showPop('Contacts');
}


function outMenu() {
  window.clearTimeout(timerID);
  timerID = window.setTimeout('hideMenus()', 100);
}

function hideMenus() {
  window.clearTimeout(timerID);
  swapImg('imgNav3','../images/nav3.gif');
  swapImg('imgNav1','../images/nav1.gif');
  swapImg('imgNav2','../images/nav2.gif');
  hidePop('Company','Services','Contacts');
}


function overMexico() {
  swapImg('imgMexico1','../images/mexico1_on.gif');
  swapImg('imgMexico2','../images/mexico2_on.gif');
  swapImg('imgMexico3','../images/mexico3_on.gif');
}

function outMexico() {
  swapImg('imgMexico1','../images/mexico1.gif');
  swapImg('imgMexico2','../images/mexico2.gif');
  swapImg('imgMexico3','../images/mexico3.gif');
}


var timerID;
var preloadFlag = false;


menusOK = 1;

if (top.location != location) top.location.href = location.href;

//-->
