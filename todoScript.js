var i = 0; //this variable will become a class name that connects all the components of one to-do item
function display(){
	var s = document.createElement("span"); 
	var element = document.getElementById("myInput").value;
	var node = document.createTextNode(element);
	console.log("hi");
	s.appendChild(node); //creates text element that uses input from text box

	var iString = i.toString();
	s.className += iString;
				//assigns a numbered class to the text item

	

	var sp = document.createElement("span");
	var dots = document.createTextNode("........");
	sp.setAttribute("class", iString);
	sp.className += " invisible";
	sp.appendChild(dots);

	var span = document.createElement("span");
	var close = document.createTextNode("x");
	span.setAttribute("class", iString);
	span.setAttribute("onClick", "hide(this.className);");
	span.appendChild(close);		//creates "close" button

	i++;
	//assigns same numbered class to "close" button and increments value

	var br = document.createElement("br");
	br.setAttribute("class", iString);

	document.getElementById("start").appendChild(s); //displays text element
	document.getElementById("start").appendChild(sp); //invisible dots
	document.getElementById("start").appendChild(span); //x
	document.getElementById("start").appendChild(br); //break

	document.getElementById("myInput").value = "";
	
}

function hide(class_str){
	console.log("x");
	var str = ".".concat(class_str);
	console.log(str);
	$(str).remove();
}
