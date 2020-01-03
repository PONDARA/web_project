///work on drawing board and tiger pieces 
const conv = document.getElementById('canvas');
const ctx = conv.getContext("2d");
const imgboard = new Image();
const imgtiger = new Image();
const imgcow = new Image();
const cowsound = new Audio();
const tigersound = new Audio();
imgboard.src="chessboard.jpg";
imgtiger.src="tiger.png";
imgcow.src="cow.png";
cowsound.src= "cow-moo3.wav";
tigersound.src="Tiger7.wav";
var box=125;
var tiger=[];
tiger[0]={
	posX:0,
	posY:0,
	status:0,
	lost:0
};
tiger[1]={
	posX:0,
	posY:3,
	status:0,
	lost:0
};
tiger[2]={
	posX:3,
	posY:0,
	status:0,
	lost:0
};
tiger[3]={
	posX:3,
	posY:3,
	status:0,
	lost:0
};
var cow=[];
cow[0]={
	posX:-1,
	posY:-1,
	status:0
};
cow[1]={
	posX:-1,
	posY:-1,
	status:0
};
cow[2]={
	posX:-1,
	posY:-1,
	status:0
};
cow[3]={
	posX:-1,
	posY:-1,
	status:0
};
cow[4]={
	posX:-1,
	posY:-1,
	status:0
};
cow[5]={
	posX:-1,
	posY:-1,
	status:0
};
cow[6]={
	posX:-1,
	posY:-1,
	status:0
};
cow[7]={
	posX:-1,
	posY:-1,
	status:0
};
cow[8]={
	posX:-1,
	posY:-1,
	status:0
};
cow[9]={
	posX:-1,
	posY:-1,
	status:0
};
cow[10]={
	posX:-1,
	posY:-1,
	status:0
};
cow[11]={
	posX:-1,
	posY:-1,
	status:0
};
SignTiger={
	posX:-1,
	posY:-1
};
var turn=2;
var m;
var mc;
var cm=0;
var on=0;
var ont=0;
var ontt=0;
var ontt1=0;
var win=5;
var l=0;
function drawTiger(posX,posY){
	ctx.drawImage(imgtiger,posX,posY,120,120);
}
function drawCow(posX,posY){
	ctx.drawImage(imgcow,posX,posY,120,120);
}
function drawSignTiger(posX,posY){
	ctx.strokeRect(posX,posY,120,120)
	ctx.lineWidth = "7";
	ctx.strokeStyle="red";
	ctx.stroke();
}
function drawBoard(){
	ctx.drawImage(imgboard,0,0,500,500);
	drawTiger(tiger[0].posX*box,tiger[0].posY*box);
	drawTiger(tiger[1].posX*box,tiger[1].posY*box);
	drawTiger(tiger[2].posX*box,tiger[2].posY*box);
	drawTiger(tiger[3].posX*box,tiger[3].posY*box);
	drawSignTiger(SignTiger.posX*box,SignTiger.posY*box)
	drawCow(cow[0].posX*box,cow[0].posY*box);
	drawCow(cow[1].posX*box,cow[1].posY*box);
	drawCow(cow[2].posX*box,cow[2].posY*box);
	drawCow(cow[3].posX*box,cow[3].posY*box);
	drawCow(cow[4].posX*box,cow[4].posY*box);
	drawCow(cow[5].posX*box,cow[5].posY*box);
	drawCow(cow[6].posX*box,cow[6].posY*box);
	drawCow(cow[7].posX*box,cow[7].posY*box);
	drawCow(cow[8].posX*box,cow[8].posY*box);
	drawCow(cow[9].posX*box,cow[9].posY*box);
	drawCow(cow[10].posX*box,cow[10].posY*box);
	drawCow(cow[11].posX*box,cow[11].posY*box);
	document.addEventListener("click", getTigerBlock);
	// document.addEventListener("click", clickedPiece);
}
/// work on moving algorithm
function getTigerBlock(block)
{
	var status;
	var tigerclicked;
	var clickX = block.clientX;
	var clickY = block.clientY;
	clickX-=canvas.offsetLeft;
	clickY-=canvas.offsetTop;
	clickX=Math.floor(clickX/box);
	clickY=Math.floor(clickY/box);
	cX=clickX;
	cY=clickY;
if(turn==1)
{
	
	for(var i=0;i<4;i++)
	{
		if (cX==tiger[i].posX && cY==tiger[i].posY) 
		{
			tiger[i].status=2;
			SignTiger.posX=tiger[i].posX;
			SignTiger.posY=tiger[i].posY;
			m=i;
		}
		else
		{
			tiger[i].status-=1;
		}
	}
	for(j=0;j<4;j++)
	{
		if (cX==tiger[j].posX && cY==tiger[j].posY)
		{
			SignTiger.posX=tiger[j].posX;
			SignTiger.posY=tiger[j].posY;
		}
		else if(tiger[j].status==1)
		{
			if(cX>=0 && cX<=3 && cY>=0 && cY<=3)
			{
				if(cX==tiger[m].posX+1 && cY==tiger[m].posY ||cX==tiger[m].posX && cY==tiger[m].posY+1 || cX==tiger[m].posX-1 && cY==tiger[m].posY || cX==tiger[m].posX && cY==tiger[m].posY-1)
				{
					for(k=0;k<12;k++)
					{	
						if(cX==cow[k].posX && cY==cow[k].posY)
						{
							cd=k;
							ont=1;
						}
					}
					if(ont==1)
					{
//1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
						if(cX>tiger[m].posX)
						{
							for(i=0;i<4;i++)
							{
								if(cX+1==tiger[i].posX && cY==tiger[i].posY)
								{
									ontt1=1;
								}
							}
							for(k=0;k<12;k++)
							{
								if(cX+1==cow[k].posX && cY==cow[k].posY || cX+1>3)
								{
									ontt=1;
								}
							}
							if(ontt==1 || ontt1==1)
							{
								turn=1;
								ontt=0;
								ontt1=0;
								ont=0;
							}
							else if(ontt==0 && ontt1==0 && tiger[m].posX>=0 && tiger[m].posX<=1)
							{
								tiger[m].posX=cX+1;
								tiger[m].posY=cY;
								SignTiger.posX=-1;
								SignTiger.posY=-1;
								cow[cd].posX=-1;
								cow[cd].posY=-1;
								turn=2;
								ont=0;
								win--;
								if(win==0)
								{
									alert("Cow is less than 8 Tiger is the winner");
									location.reload();
								}

							}
						}
//22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
						else if(cY>tiger[m].posY)
						{
							for(i=0;i<4;i++)
							{
								if(cY+1==tiger[i].posY && cX==tiger[i].posX)
								{
									ontt1=1;
								}
							}
							for(k=0;k<12;k++)
							{
								if(cY+1==cow[k].posY  && cX==cow[k].posX || cY+1>3) 
								{
									ontt=1;
								}
							}
							if(ontt==1 || ontt1==1)
							{
								turn=1;
								ontt=0;
								ontt1=0;
								ont=0;
							}
							else if(ontt==0  && ontt1==0 && tiger[m].posY>=0 && tiger[m].posY<=1)
							{
								tiger[m].posX=cX;
								tiger[m].posY=cY+1;
								SignTiger.posX=-1;
								SignTiger.posY=-1;
								cow[cd].posX=-1;
								cow[cd].posY=-1;
								turn=2;
								ont=0;
								win--;
								if(win==0)
								{
									alert("Cow is less than 8 Tiger is the winner");
									location.reload();
								}

							}
						}
//333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
						else if(cX<tiger[m].posX)
						{
							for(i=0;i<4;i++)
							{
								if(cX-1==tiger[i].posX && cY==tiger[i].posY)
								{
									ontt1=1;
								}
							}
							for(k=0;k<12;k++)
							{
								if(cX-1==cow[k].posX && cY==cow[k].posY || cX-1<0)
								{
									ontt=1;
								}
							}
							if(ontt==1 || ontt1==1)
							{
								turn=1;
								ontt=0;
								ontt1=0;
								ont=0;
							}
							else if(ontt==0 && ontt1==0 && tiger[m].posX>=2 && tiger[m].posX<=3)
							{
								tiger[m].posX=cX-1;
								tiger[m].posY=cY;
								SignTiger.posX=-1;
								SignTiger.posY=-1;
								cow[cd].posX=-1;
								cow[cd].posY=-1;
								turn=2;
								ont=0;
								win--;
								if(win==0)
								{
									alert("Cow is less than 8 Tiger is the winner");
									location.reload();
								}

							}
						}
//44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
						else if(cY<tiger[m].posY)
						{
							for(i=0;i<4;i++)
							{
								if(cY-1==tiger[i].posY && cX==tiger[i].posX)
								{
									ontt1=1;
								}
							}
							for(k=0;k<12;k++)
							{
								if(cY-1==cow[k].posY && cX==cow[k].posX || cY-1<0)
								{
									ontt=1;
								}
							}
							if(ontt==1 || ontt1==1)
							{
								turn=1;
								ontt=0;
								ontt1=0;
								ont=0;
							}
							else if(ontt==0 && ontt1==0 && tiger[m].posY>=2 && tiger[m].posY<=3)
							{
								tiger[m].posX=cX;
								tiger[m].posY=cY-1;
								SignTiger.posX=-1;
								SignTiger.posY=-1;
								cow[cd].posX=-1;
								cow[cd].posY=-1;
								turn=2;
								ont=0;
								win--;
								if(win==0)
								{
									alert("Cow is less than 8 Tiger is the winner");
									location.reload();
								}

							}
						}
					}
					else
					{
						tiger[m].posX=cX;
						tiger[m].posY=cY;
						SignTiger.posX=-1;
						SignTiger.posY=-1;
						turn=2;
					}
				}
			}
			else
			{
					SignTiger.posX=-1;
					SignTiger.posY=-1;
			}
		}

	}
	for(i=0;i<4;i++)
	{
		if(tiger[i].status<0)
		{
			tiger[i].status=0;
		}
	}
//to find out if tiger lose(tiger have no box to move),,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,


	if(tiger[0].lost==1 && tiger[1].lost==1 && tiger[2].lost==1 && tiger[3].lost==1) 
	{
		alert("Tiger don't have box to move  Cow is the winner");
		location.reload();
	}
}


//work on cow moving,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
else
{	
	cowsound.play();
	if (cm<12)
 	{
 		// test if box have tiger if have tiger varible on=1
		for(i=0;i<4;i++)
		{ 
			if(cX==tiger[i].posX && cY==tiger[i].posY)
			{
				on=1;
			}
		}
		for(k=0;k<12;k++)
		{
			if(cX==cow[k].posX && cY==cow[k].posY)
			{
				on=1;
			}
		}
		if(on==0)
		{ 
			cow[cm].posX=cX;
			cow[cm].posY=cY;
			cm++;
			turn=1;
		}
		else
		{
			turn=2;
			on=0;
		}
	}
	else if(cm>=12)
	{
		for(var k=0;k<12;k++)
		{
			if (cX==cow[k].posX && cY==cow[k].posY) 
			{
				cow[k].status=2;
				SignTiger.posX=cow[k].posX;
				SignTiger.posY=cow[k].posY;
				mc=k;
			}
			else
			{
				cow[k].status-=1;
			}
		}

		for(k=0;k<12;k++)
		{
			if (cX==cow[k].posX && cY==cow[k].posY)
			{
				SignTiger.posX=cow[k].posX;
				SignTiger.posY=cow[k].posY;
			}
			else if(cow[k].status==1)
			{ 
				md=k
				if(cX>=0 && cX<=3 && cY>=0 && cY<=3)
				{
					if(cX==cow[mc].posX+1 && cY==cow[mc].posY ||cX==cow[mc].posX && cY==cow[mc].posY+1 || cX==cow[mc].posX-1 && cY==cow[mc].posY || cX==cow[mc].posX && cY==cow[mc].posY-1)
					{
						for (i=0;i<4;i++)
						{
							if (cX==tiger[i].posX && cY==tiger[i].posY) 
							{
								l=1;
							}
						
						}
						if(l==1)
						{
							turn=2;
							ontt=0;
							ontt1=0;
							ont=0;
							l=0;
						}
						else
						{
							cow[mc].posX=cX;
							cow[mc].posY=cY;
							SignTiger.posX=-1;
							SignTiger.posY=-1;
							ont=0;
							ontt=0;
							ontt1=0;
							turn=1;
						}
					
					}
					else
					{
						SignTiger.posX=-1;
						SignTiger.posY=-1;
					}
				}
				else
				{
						SignTiger.posX=-1;
						SignTiger.posY=-1;
				}
			}

		}
	}	
}
// console.log(cX,cY);
// console.log(tiger[0].status);
// console.log(tiger[1].status);
// console.log(tiger[2].status);
// console.log(tiger[3].status);
// console.log(m);
console.log(tiger[0].lostR,tiger[0].lostL,tiger[0].lostD,tiger[0].lostU,tiger[0].lost);
console.log(tiger[1].lostR,tiger[1].lostL,tiger[1].lostD,tiger[1].lostU,tiger[1].lost);
console.log(tiger[2].lostR,tiger[2].lostL,tiger[2].lostD,tiger[2].lostU,tiger[2].lost);
console.log(tiger[3].lostR,tiger[3].lostL,tiger[3].lostD,tiger[3].lostU,tiger[3].lost);
ctx.clearRect(0,0,conv.width,conv.height);
drawBoard();
}
		
window.onload=drawBoard;