"use strict";
/*
 Tyler Green
 CISC 131
 9-15-2014
 Template
*/
window.onload=function()
{
	var answer;
	var container
	container=document.getElementById("container");
	answer=Number(window.prompt("What size Magic Square would you like?(Must an integer bigger than 2)",""));
	if(answer%2===1 && answer>2)
	{
		createMagicSquare(container,answer);
	}
	else
	{
		window.alert("The answer provided to the previous question is not an integer, bigger than 2, and odd, please try again.");
	}
	//createMagicSquare("container",3);
};

function createMagicSquare(containerElement,order)
{
	var i;
	var j;
	var array;
	var count;
	var row;
	var col;
	var newRow;
	var newCol;
	array= new Array(order);
	for(i=0;i<array.length;i++)
	{
		array[i]= new Array(order);
	}
	for(i=0;i<array.length;i++)
	{
		for(j=0;j<array[i].length;j=j+1)
		{
			array[i][j]=0;
		}
	}
	row=0
	col=Math.floor(order/2)
	count=1;
	array[row][col]=count;
	count=count+1;
	for(i=0;i<(order*order-1);i++)
	{
		newRow=row-1;
		newCol=col+1;
		if(newRow===-1)
		{
			newRow=order-1;
		}
		if(newCol===order)
		{
			newCol=0;
		}
		if(array[newRow][newCol]!==0)
		{
			newRow=row+1;
			newCol=col;
		    if(newRow===order)
		    {
			    newRow=0;
		    }
		}
		array[newRow][newCol]=count;
		count=count+1;
		row=newRow;
		col=newCol;

	}
	makeTable(array,containerElement,order);
}

function makeTable(array2d,containerElement,order)
{
	var i;
	var j;
	var k;
	var temp;
	k=0;
	temp=new Array(order*order);

	for(i=0;i<array2d.length;i++)
	{
		for(j=0;j<array2d[i].length;j=j+1)
		{
			temp[k]=array2d[i][j];
			k=k+1;
		}

	}

	for(i=0;i<order*order;i++)
	{
		if(i%order===0)
		{
			containerElement.innerHTML=containerElement.innerHTML+createHTMLElement("div","box"+i,"box front",temp[i]+"");
		}
		else
		{
			containerElement.innerHTML=containerElement.innerHTML + createHTMLElement("div","box"+i,"box",temp[i]+"");
		}
	}
}

function createHTMLElement(elementType, id, classInfo, content)
{



	if(elementType===null)  //div or span
	{
		elementType="";
	}
	else
	{
		elementType=trim(elementType);
	}

	if(trim(id)===null)  //id
	{
		id="";
	}
	else
	{
		id=" id=" + '"' + trim(id)+ '"';
		if(trim(id).length===0)
		{
			id="";
		}
	}
	if(trim(classInfo)===null)   //classinfo
	{
		classInfo="";
	}
	else
	{
        classInfo=" class=" + '"' + trim(classInfo)+ '"';
		if(trim(classInfo).length===0)
		{
			classInfo="";
		}
	}
	if(content===null)     //content
    {
		content="";
	}
  //trim(classInfo).length===0




	return "<" + elementType + id + classInfo + ">" + content +"</" + elementType + ">";
}

function isNumeric(data)
{
	return (isNaN(trim(data))===false && Number(trim(data)).length===undefined && trim(data)!==null);
}

function isInteger(data)
{
	return (isNumeric(data)===true && Math.floor(Number(data))===Number(data) && Math.ceil(Number(data))===Number(data));
}

function trim(data)
{
	var whitespace;
	var start;
	var end;
	var result;
    if(typeof data==="string")   //first if
    {
		whitespace=" \n\r\t\f";
		start=0;
		while(start<data.length && whitespace.indexOf(data.charAt(start))>=0) //first while
		{
			start=start+1;
		}
		end=data.length-1;
		while(end>=0 && whitespace.indexOf(data.charAt(end))>=0)   //second while
		{
			end=end-1;
		}
		if(end<start)    //second if
		{
			result="";
		}
		else         //else to second if
		{
			result= data.substring(start,end+1);
		}

	}
	else
	{
		result=data;
	}
return result;
}