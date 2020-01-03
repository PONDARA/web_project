y='';
number='';
operation='';
function input(number)
{
		number+='';
		y+=number;
		newP=document.createElement("p");
		newText=document.createTextNode(y);
		newP.appendChild(newText);
		document.getElementById("display").innerHTML='';
		text=document.getElementById('display');
		text.appendChild(newP);
}


function operations(instruction)
{
	x=y;
	y='';
	operation=instruction;
	newP=document.createElement("p");
	newText=document.createTextNode(operation);
	newP.appendChild(newText);
	document.getElementById("display").innerHTML='';
	text=document.getElementById('display');
	text.appendChild(newP);
	console.log(instruction);
}


function equal()
{
	if(operation=='+')
	{
			x=x*1;
			y=y*1;
			result=x+y;
			y=result;
			newP=document.createElement("p");
			newText=document.createTextNode(result);
			newP.appendChild(newText);
			document.getElementById("display").innerHTML='';
			text=document.getElementById('display');
			text.appendChild(newP);	
	}
	else if(operation=='-')
	{
			result = x-y;
			y=result;
			newP=document.createElement("p");
			newText=document.createTextNode(result);
			newP.appendChild(newText);
			document.getElementById("display").innerHTML='';
			text=document.getElementById('display');
			text.appendChild(newP);
	}
	else if(operation=='*')
	{
			result = x*y;
			y=result;
			newP=document.createElement("p");
			newText=document.createTextNode(result);
			newP.appendChild(newText);
			document.getElementById("display").innerHTML='';
			text=document.getElementById('display');
			text.appendChild(newP);
	}
	else if(operation=='/')
	{
			result = x/y;
			y=result;
			newP=document.createElement("p");
			newText=document.createTextNode(result);
			newP.appendChild(newText);
			document.getElementById("display").innerHTML='';
			text=document.getElementById('display');
			text.appendChild(newP);
	}

}
function percent()
{
	y*=1;
	result = y/100;
	newP=document.createElement("p");
	newText=document.createTextNode(result);
	newP.appendChild(newText);
	document.getElementById("display").innerHTML='';
	text=document.getElementById('display');
	text.appendChild(newP);
}
function signed()
{
	result=y*(-1);
	y=result;
	newP=document.createElement("p");
	newText=document.createTextNode(result);
	newP.appendChild(newText);
	document.getElementById("display").innerHTML='';
	text=document.getElementById('display');
	text.appendChild(newP);
}
function clearNumber()
{
	document.getElementById("display").innerHTML='';
	x='';
	y='';
	operation='';
	result='';
}
