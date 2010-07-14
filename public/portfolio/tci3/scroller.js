/**********************************************************************************   
NewsSlideFade 
*   Copyright (C) 2001 <a href="/dhtmlcentral/thomas_brattli.asp">Thomas Brattli</a>
*   This script was released at DHTMLCentral.com
*   Visit for more great scripts!
*   This may be used and changed freely as long as this msg is intact!
*   We will also appreciate any links you could give us.
*
*   Made by <a href="/dhtmlcentral/thomas_brattli.asp">Thomas Brattli</a> 
*********************************************************************************/

function lib_bwcheck(){ //Browsercheck (needed)
	this.ver=navigator.appVersion
	this.agent=navigator.userAgent
	this.dom=document.getElementById?1:0
	this.opera5=this.agent.indexOf("Opera 5")>-1
	this.ie5=(this.ver.indexOf("MSIE 5")>-1 && this.dom && !this.opera5)?1:0; 
	this.ie6=(this.ver.indexOf("MSIE 6")>-1 && this.dom && !this.opera5)?1:0;
	this.ie4=(document.all && !this.dom && !this.opera5)?1:0;
	this.ie=this.ie4||this.ie5||this.ie6
	this.mac=this.agent.indexOf("Mac")>-1
	this.ns6=(this.dom && parseInt(this.ver) >= 5) ?1:0; 
	this.ns4=(document.layers && !this.dom)?1:0;
	this.bw=(this.ie6 || this.ie5 || this.ie4 || this.ns4 || this.ns6 || this.opera5)
	return this
}
var bw=new lib_bwcheck()

var fading = 0;

/***************************************************************************
Use the style tag to change the placement and width of the layers.
If you are trying to place this into a table cell or something make the
position of the divNewsCont layer relative...Remeber that that might crash
Netscape 4 though, Good luck!
********************************************************************************/

/****
Variables to set 
****/

//How do you want the script to work? 
//0 = Fade in - Fade out
//1 = Slide in - Fade out
//2 = Random 
nWorks = 1

//If you use the slide set these variables:
nSlidespeed = 10 //in px
nNewsheight = 200 //This is how long down it should start the slide.

nBetweendelay = 10000 //The delay before fading out.
nFont = 'arial,helvetiva' //The font for the news.
nFontsize = 12 //Font size in pixel.
nFadespeed = 150 //The speed to fade in, in milliseconds.

//Set the colors, first color is same as background, last color is the color it stops at:
//You can have as many colors you want
//nColor=new Array('#000000','#111111','#222222','#333333','#444444','#555555','#666666','#777777','#888888','#999999','#AAAAAA','#BBBBBB','#CCCCCC','#DDDDDD','#EEEEEE','#FFFFFF')
//nColor=new Array('#000000','#330000','#660000','#663300','#993300','#996600','#aa4400','#cc8800','#ffaa00','#ffbb00','#ffcc00','#ffcc33','#ffdd77','#ffeebb','#ffffff')
nColor = new Array('#000000','#330000','#331100','#442200','#553300','#664400','#775500','#997700','#aa8800','#cc9900','#ee9900','#ffaa00','#ffbb22','#ffcc55','#ffdd77','#ffeebb','#ffffff')

//This is the news you wanna have, set the link and the text. If you don't wan't it to link anywhere
//use a # as the link
nNews=new Array()
//Copy there three lines and change the info and numbers to get more news.
nNews[0]=new Array()
nNews[0]["text"]='“The Critical Inch partnered with our global services organization to provide a customized training program that would meet our critical time-to-market schedule. Their real-world experience was a perfect match for our training needs.”'
nNews[0]["credit"]='John Root, Training Manager<br>EMC Corporation<br>23,000 Employees<br>100 Sales Offices<br>One Solution'
//nNews[0]["delay"]=3000

nNews[1]=new Array()
nNews[1]["text"]='“The Critical Inch partnered with us to build our Windows NT environment and train our IT staff. Their curriculum was highly effective and their experience won the admiration of our engineers.”'
nNews[1]["credit"]='Richard B. Perry, Director<br>BNSF Railroad<br>40,000 Employees<br>33,500 Route Miles of Track<br>28 States<br>One Solution'

nNews[2]=new Array()
nNews[2]["text"]='“The Ciritcal Inch generated a unique training curriculum for our testers and developers strategically focused for our return on investment. Their customized training program was extremely valuable to our team—they measure up in every respect.”'
nNews[2]["credit"]='Terry Whitehead, Test Engineer<br>T.A.C., Inc.<br>2,000 Employees<br>250 Subsidiaries<br>70 Countries<br>One Solution'

/********************************************************************************
Object code...Object constructors and functions...
********************************************************************************/
function makeNewsObj(obj,nest,font,size,color,news,fadespeed,betweendelay,slidespeed,works,newsheight){
    nest=(!nest) ? "":'document.'+nest+'.'
   	this.css=bw.dom? document.getElementById(obj).style:bw.ie4?document.all[obj].style:bw.ns4?eval(nest+"document.layers." +obj):0;	
   	this.writeref=bw.dom? document.getElementById(obj):bw.ie4?document.all[obj]:bw.ns4?eval(nest+"document.layers." +obj+".document"):0;
	if(font){this.color=new Array(); this.color=eval(color); this.news=new Array(); this.news=eval(news)
		this.font=font; this.size=size; this.speed=fadespeed; this.delay=betweendelay; this.newsheight=newsheight;
		this.fadeIn=b_fadeIn;this.fadeOut=b_fadeOut; this.newsWrite=b_newsWrite; this.y=1
		this.slideIn=b_slideIn; this.moveIt=b_moveIt; this.slideSpeed=slidespeed; this.works=works
		colorstep = (newsheight / slidespeed) / this.color.length
		this.colorstep = colorstep + (colorstep == 0)
		if(bw.dom || bw.ie4){this.css.fontFamily=this.font; this.css.fontSize=this.size; this.css.color=this.color[0]}
	}
	this.obj = obj + "Object"; 	eval(this.obj + "=this"); return this
}

// A unit of measure that will be added when setting the position of a layer.
var px = bw.ns4||window.opera?"":"px";

function b_moveIt(x,y){this.x=x; this.y=y; this.css.left=this.x+px; this.css.top=this.y+px;}

function b_newsWrite(num,i){
	if (bw.ns4){
		//this.writeref.write("<a href=\""+this.news[num]['link']+"\" target=\"myTarget\" style=\"text-decoration:none; font-size:"+this.size+"px\">"
		//	+"<font face=\""+this.font+"\" color=\""+this.color[i]+"\">"+this.news[num]['text']+"</font></a>")
		this.writeref.write("<font face=\""+this.font+"\" color=\""+this.color[i]+"\">"+this.news[num]['text']+"<div class='credit'>"+this.news[num]['credit']+"</div></font>")
		this.writeref.close()
//	}else this.writeref.innerHTML = '<a id="'+this.obj+'link' +'" target="myTarget"  style="text-decoration:none; font-size:'+this.size+'px; color:'+this.color[i]+'" href="'+this.news[num]['link']+'">'+this.news[num]['text']+'</a>'
	}else this.writeref.innerHTML = '<span id="'+this.obj+'link' +'" style="text-decoration:none; font-size:'+this.size+'px; color:'+this.color[i]+'">'+this.news[num]['text']+"<div class='credit'>"+this.news[num]['credit']+'</div></span>'
}
//Slide in
function b_slideIn(num,i){
	if (this.y>0){
		if (i==0){this.moveIt(0,this.newsheight); this.newsWrite(num,this.color.length-1)}
		// fade color
			obj = bw.ie4?eval(this.obj+"link"):document.getElementById(this.obj+"link")
			coloridx = Math.floor(i / this.colorstep)
			if (coloridx >= this.color.length) coloridx = this.color.length - 1
			obj.style.color = this.color[coloridx]
		// end fade color
		this.moveIt(this.x,this.y-this.slideSpeed)
		i ++
		setTimeout(this.obj+".slideIn("+num+","+i+");",50)
	}else setTimeout(this.obj+".fadeOut("+num+","+(this.color.length-1)+")",this.delay)
}
//The fade functions
function b_fadeIn(num,i){
	if (i<this.color.length){
		if (i==0 || bw.ns4) this.newsWrite(num,i)
		else{
			obj = bw.ie4?eval(this.obj+"link"):document.getElementById(this.obj+"link")
			obj.style.color = this.color[i]
		}
		i ++
		setTimeout(this.obj+".fadeIn("+num+","+i+")",this.speed)
	}else setTimeout(this.obj+".fadeOut("+num+","+(this.color.length-1)+")",this.delay)
}

function b_fadeOut(num,i){
	if (i>=0){
		if (i==0 || bw.ns4) this.newsWrite(num,i)	
		else{
			obj = bw.ie4?eval(this.obj+"link"):document.getElementById(this.obj+"link")
			obj.style.color = this.color[i]
		}
		i --
		setTimeout(this.obj+".fadeOut("+num+","+i+")",this.speed)
	}else{
		num ++
		if(num==this.news.length) num=0
		works = !this.works?0:this.works==1?1:Math.round(Math.random())
		if(works==0) setTimeout(this.obj+".fadeIn("+num+",0)",0)
		else if (works==1){this.y=1; setTimeout(this.obj+".slideIn("+num+",0)",0)
		}
	}
}
/********************************************************************************************
The init function. Calls the object constructor and set some properties and starts the fade
*********************************************************************************************/
function fadeInit(){
	oNews = new makeNewsObj('divNews','divNewsCont',nFont,nFontsize,"nColor","nNews",nFadespeed,nBetweendelay,nSlidespeed,nWorks,nNewsheight)
	oNewsCont = new makeNewsObj('divNewsCont')
	works = !oNews.works?0:oNews.works==1?1:Math.round(Math.random())
	if (works==0) oNews.fadeIn(0,0)
	else if (works==1) oNews.slideIn(0,0)
	oNewsCont.css.visibility = "visible"
	
	setTimeout("sweep()", 50)
	setInterval("positionit()", 100)
}

var cc = 0

function sweep() {
	var colors = Array('#aaaaaa','#bbbbbb','#cccccc','#dddddd','#eeeeee','#ffffff')
	cc --
	if (cc < -6) {
		cc = 25
	}
	else {
	
	for (z = 1; z < 7; z++) {
		ci = (cc + z - 1)
		//if (ci > 5) ci = ci - 6
		theobj = document.getElementById("p" + z)
		if (!colors[ci]) ci = 0
		theobj.style.color = colors[ci]
	}
	}
	setTimeout("sweep()", 300)
}



var ie=document.all
var ieNOTopera=document.all&&navigator.userAgent.indexOf("Opera")==-1

var quotetop = 325

function positionit(){
	var dsoctop=ie? document.body.scrollTop : pageYOffset
	var window_height=ieNOTopera? document.body.clientHeight : window.innerHeight
	
	var newsobj=ie? document.all.divNewsCont : document.getElementById? document.getElementById("divNewsCont") : document.divNewsCont
	
	var newtop = quotetop
	if (dsoctop > 10) newtop = parseInt(dsoctop)+parseInt(window_height)-newsobj.offsetHeight-5
	if (newtop < quotetop) newtop = quotetop

	if (ie||document.getElementById){
		newsobj.style.top = newtop
	}
	else if (document.layers){
		newsobj.top = newtop - 1
	}
}



