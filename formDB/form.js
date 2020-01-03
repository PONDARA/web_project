,.lln=0;
function addNew(){
	name = document.getElementById("Username").value;
	age = document.getElementById("Age").value;
	radio=document.getElementByName("gender");
	gender="";
	if(radio[0].checked)
	{
		gender=radio[0].value;
	}
	else
	{
		gender=radio[1].value;
	}
	school=document.getElementByClassName("School");
	school="";
	if(option[0].checked)
	{
		school=option[0].value;
	}
	else if(option[1].checked)
	{
		school=option[1].value;
	}
	else
	{
		school=option[2].value;
	}

	addName(++n,name,age,gender,option);
}
function addName(order,name,age,gender,school) {
	newRow=document.createElement("tr");
	newCol1=document.createElement("td");
	newCol2=document.createElement("td");
	newCol3=document.createElement("td");
	newCol4=document.createElement("td");
	newCol5=document.createElement("td");

	newText1=document.createTextNode(order);
	newText2=document.createTextNode(name);
	newText3=document.createTextNode(age);
	newText4=document.createTextNode(gender);
	newText5=document.createTextNode(school);
	
	newCol1.appendChild(newText1);
	newCol1.appendChild(newText2);
	newCol1.appendChild(newText3);
	newCol1.appendChild(newText4);
	newCol1.appendChild(newText5);

	newRow.appendChild(newCol1);
	newRow.appendChild(newCol2);
	newRow.appendChild(newCol3);
	newRow.appendChild(newCol4);
	newRow.appendChild(newCol5);

	tbl=document.getElementById("tableStudents");
	tbl.appendChild(newRow);

}