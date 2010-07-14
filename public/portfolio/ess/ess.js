
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function picture(imgname, desc) {
	imgsrc = 'images/pics/big/' + imgname;
	if (desc == undefined)
		desc = "";
	win = popup((imgsrc), 'picture', 570, 450, 'yes', 'no');
	win.document.write('<html><head><title>Picture: '+desc+'</title></head><body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" onclick="window.close()"><table cellspacing="0" cellpadding="0" border="0" width="100%" height="100%"><tr><td align="center" valign="middle"><img src="'+imgsrc+'" border="0" hspace="0" vspace="0" valign="top"><br>'+desc+'</td></tr></table></body></html>');
}

function popup(mypage, myname, w, h, scroll, menu) {
	if (h > (screen.height - 100)) h = screen.height - 100;
	if (w > (screen.width - 100)) w = screen.width - 100;
	var winl = (screen.width - w) / 2;
	var wint = (screen.height - h) / 2 - 100;
	if (winl < 0) winl = 0;
	if (wint < 0) wint = 0;
	winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',scrollbars='+scroll+',menubar='+menu+',resizable=yes,toolbar=no,location=no,status=no'
	win = window.open(mypage, myname, winprops)
	if (parseInt(navigator.appVersion) >= 4) { win.window.focus(); }
	return win;
}

function hotbox() {
	var focusColor = '#ffffdd';
	var blurColor = '#ffffff';
	var form, el, e, f = 0;
	var savebg;
	while (form = document.forms[f++]) { 
		e = 0;
		while (el = form.elements[e++]) {
			if ((el.type == 'radio' || el.type == 'checkbox' || el.type == 'textarea' || el.type == 'select-one' || el.type == 'select-multiple' || el.type == 'text' || el.type == 'password') && typeof el.style != 'undefined') {
				el.onfocus = new Function('if(this.select)this.select();this.style.background="'+focusColor+'";');
				el.onblur = new Function('if(this.select)this.value=this.value;this.style.background="'+blurColor+'";');
			}
		}
	}
}
