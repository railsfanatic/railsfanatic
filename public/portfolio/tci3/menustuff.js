
/***
This is the menu creation code - place it right after you body tag
Feel free to add this to a stand-alone js file and link it to your page.
**/

//Menu object creation
oCMenu=new makeCM("oCMenu") //Making the menu object. Argument: menuname

oCMenu.frames = 0

//Menu properties
oCMenu.pxBetween=0
oCMenu.fromLeft=240
oCMenu.fromTop=13
oCMenu.rows=1
oCMenu.menuPlacement="left"

oCMenu.offlineRoot=""
oCMenu.onlineRoot=""
oCMenu.resizeCheck=1
oCMenu.wait=500
oCMenu.fillImg="images/spacer.gif"
oCMenu.zIndex=0

//Background bar properties
oCMenu.useBar=0
oCMenu.barWidth="100%"
oCMenu.barHeight=""
oCMenu.barClass=""
oCMenu.barX=0
oCMenu.barY=0
oCMenu.barBorderX=0
oCMenu.barBorderY=0
oCMenu.barBorderClass=""

//Level properties - ALL properties have to be spesified in level 0
oCMenu.level[0]=new cm_makeLevel() //Add this for each new level
oCMenu.level[0].width=100
oCMenu.level[0].height=25
oCMenu.level[0].regClass="clLevel0"
oCMenu.level[0].overClass="clLevel0over"
oCMenu.level[0].borderX=0
oCMenu.level[0].borderY=0
oCMenu.level[0].borderClass="clLevel0border"
oCMenu.level[0].offsetX=0
oCMenu.level[0].offsetY=0
oCMenu.level[0].rows=0
oCMenu.level[0].arrow=0
oCMenu.level[0].arrowWidth=0
oCMenu.level[0].arrowHeight=0
oCMenu.level[0].align="bottom"

//EXAMPLE SUB LEVEL[1] PROPERTIES - You have to specify the properties you want different from LEVEL[0] - If you want all items to look the same just remove this
oCMenu.level[1]=new cm_makeLevel() //Add this for each new level (adding one to the number)
//oCMenu.level[1].width=oCMenu.level[0].width
oCMenu.level[1].width=200
oCMenu.level[1].height=22
oCMenu.level[1].regClass="clLevel1"
oCMenu.level[1].overClass="clLevel1over"
oCMenu.level[1].borderX=1
oCMenu.level[1].borderY=1
oCMenu.level[1].align="right" 
oCMenu.level[1].offsetX=-16
oCMenu.level[1].offsetY=5
oCMenu.level[1].arrow="images/arrow.gif"
oCMenu.level[1].arrowWidth=20
oCMenu.level[1].arrowHeight=20
oCMenu.level[1].borderClass="clLevel1border"


oCMenu.level[2]=new cm_makeLevel() //Add this for each new level (adding one to the number)
oCMenu.level[2].height=20
oCMenu.level[2].regClass="clLevel2"
oCMenu.level[2].overClass="clLevel2over"
oCMenu.level[2].borderX=1
oCMenu.level[2].borderY=1
oCMenu.level[2].align="right" 
oCMenu.level[2].offsetX=-16
oCMenu.level[2].offsetY=5
oCMenu.level[2].arrow="images/arrow.gif"
oCMenu.level[2].arrowWidth=20
oCMenu.level[2].arrowHeight=20
oCMenu.level[2].borderClass="clLevel2border"


/******************************************
Menu item creation:
myCoolMenu.makeMenu(name, parent_name, text, link, target, width, height, regImage, overImage, regClass, overClass , align, rows, nolink, onclick, onmouseover, onmouseout) 
*************************************/
oCMenu.makeMenu('top0','','HOME','index.php','',70)
	
oCMenu.makeMenu('top1','','COMPANY','company.php')
	oCMenu.makeMenu('sub11','top1','ABOUT US','company.php','',140)
	oCMenu.makeMenu('sub12','top1','CERTIFICATIONS','certs.php','',140)
		oCMenu.makeMenu('sub121','sub12','List All','certs.php','',170)
		oCMenu.makeMenu('sub122','sub12','Historically Underutilized<br>Business','javascript:cert("hub")','',170, 34)
		oCMenu.makeMenu('sub123','sub12','Minority Business Certification','javascript:cert("min",650)','',170, 34)
		oCMenu.makeMenu('sub129','sub12','More Coming Soon...','javascript:return(false)','',170)
	
oCMenu.makeMenu('top2','','SERVICES','services.php')
	oCMenu.makeMenu('sub21','top2','MIGRATION & INTEGRATION','services.php?node=migration','',200)
	oCMenu.makeMenu('sub22','top2','PROCESS & OPERATIONAL<br>IMPROVEMENT','services.php?node=process','',200,38)
	oCMenu.makeMenu('sub23','top2','RISK MANAGEMENT','services.php?node=risk','',200)
	oCMenu.makeMenu('sub24','top2','TROUBLESHOOTING','services.php?node=tshoot','',200)
	oCMenu.makeMenu('sub25','top2','CONFIGURATION','services.php?node=config','',200)
	oCMenu.makeMenu('sub26','top2','TECHNICAL STAFFING','services.php?node=staffing','',200)

oCMenu.makeMenu('top3','','VALUES','values.php')
	oCMenu.makeMenu('sub31','top3','UNDERSTANDING','values.php?node=und','',135)
	oCMenu.makeMenu('sub32','top3','CONFIDENCE','values.php?node=con','',135)
	oCMenu.makeMenu('sub33','top3','EMPOWERMENT','values.php?node=emp','',135)
	oCMenu.makeMenu('sub34','top3','INDEPENDENCE','values.php?node=ind','',135)

oCMenu.makeMenu('top5','','SUPPORT','contact.php')
	oCMenu.makeMenu('sub50','top5','CONTACT US','contact.php','',115)

//Leave this line - it constructs the menu
oCMenu.construct()		

