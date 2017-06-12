var i = 0; //this integer will become a class name that connects all the components of one to-do item, for easy deletion
function display(){
	var s = document.createElement("span"); 
	var element = document.getElementById("myInput").value;
	var node = document.createTextNode(element);
	s.appendChild(node); //creates text element that uses input from text box

	var iString = i.toString(); //turns integer into string for class name
	s.className += iString; //assigns a class to the span element

	

	var sp = document.createElement("span");
	var dots = document.createTextNode("........");
	sp.setAttribute("class", iString);
	sp.className += " invisible";
	sp.appendChild(dots);			//the invisible (aka white) dots make the list easier to read

	var span = document.createElement("span");
	var close = document.createTextNode("x");
	span.setAttribute("class", iString);
	span.setAttribute("onClick", "hide(this.className);");
	span.appendChild(close);		//it's an "x" that deletes the element when clicked

	i++;
	//assigns same numbered class to "close" button and increments value

	var br = document.createElement("br");
	br.setAttribute("class", iString);

	document.getElementById("start").appendChild(s); //displays text element
	document.getElementById("start").appendChild(sp); //displays invisible dots
	document.getElementById("start").appendChild(span); // displays x
	document.getElementById("start").appendChild(br); //break, aka new line

	document.getElementById("myInput").value = ""; //resets value inside text input box
	
}

function hide(class_str){
	var str = ".".concat(class_str);
	$(str).remove();
}
