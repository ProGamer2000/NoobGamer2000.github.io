var CT = "CT";
var UT = "UT";
var count = 0;
var Slist = ["Menu", "Today's Special", "Transport Route", "Day", "Contact List/ Intercom", "Form's Link", "Policy PDF"];
var flist = ["chatty('lunch')","chatty('TS')","chatty('TR')","chatty('date')","Contact('CL')","Contact('FL')","Contact('PDF')"];
function clear() {
	document.getElementById("Textbox").innerHTML = "";
}
function print(text, side) {
	$('button').prop('disabled', true);
	$('button').prop('class', 'btn btn-outline-secondary btn-lg btn-block');
	count++;
	var text = String(text);
	var side = String(side);
	var container = document.createElement("div");
	if (side === "UT") {
		container.setAttribute( "class", "container darker");
	}
	else {
		container.setAttribute( "class", "container");
	}
	container.id = count;
	document.getElementById("Textbox").appendChild(container);
	var img = document.createElement("img");
	if (side === "UT") {
		img.setAttribute( "class", "right");
		img.setAttribute( "alt", "Avatar");
		img.setAttribute( "src", "img/User.jpg")
	}
	else {
		img.setAttribute( "alt", "Avatar");
		img.setAttribute( "src", "img/Chatbot.jpg");
	}
	document.getElementById(count).appendChild(img);
	var val = document.createElement("p");
	val.innerHTML = text;
	val.id = side; //UT or CT
	document.getElementById(count).appendChild(val);
	var time = document.createElement("span");
	if (side === "UT") {
		time.setAttribute( "class", "time-left");
	}
	else {
		time.setAttribute( "class", "time-right");
	}
	time.innerHTML = String(new Date().getHours() + " : " + new Date().getMinutes());
	document.getElementById(count).appendChild(time);
	document.getElementById(count).scrollIntoView();
}
//updated print command
function output(text, side) {
	$('button').prop('disabled', true);
	$('button').prop('class', 'btn btn-outline-secondary btn-lg btn-block');
	count++;
	var text = String(text);
	var side = String(side);
	var container = document.createElement("div");
	if (side === "UT") {
		container.setAttribute( "class", "container darker");
	}
	else {
		container.setAttribute( "class", "container");
	}
	container.id = count;
	document.getElementById("Textbox").appendChild(container);
	var img = document.createElement("img");
	if (side === "UT") {
		img.setAttribute( "class", "right");
		img.setAttribute( "alt", "Avatar");
		img.setAttribute( "src", "img/User.jpg")
	}
	else {
		img.setAttribute( "alt", "Avatar");
		img.setAttribute( "src", "img/Chatbot.jpg");
	}
	document.getElementById(count).appendChild(img);
	var val = document.createElement("p");
	val.innerHTML = text;
	val.id = side; //UT or CT
	document.getElementById(count).appendChild(val);
	var time = document.createElement("span");
	if (side === "UT") {
		time.setAttribute( "class", "time-left");
	}
	else {
		time.setAttribute( "class", "time-right");
	}
	time.innerHTML = String(new Date().getHours() + " : " + new Date().getMinutes());
	document.getElementById(count).appendChild(time);
	document.getElementById(count).scrollIntoView();
}
//Buttons print command
function print2(text, string, func, clear) {
	$('button').prop('disabled', true);
	$('button').prop('class', 'btn btn-outline-secondary btn-lg btn-block');
	count++;
	text = String(text);
	//Create the chatbot side container
	var container = document.createElement("div");
	container.setAttribute( "class", "container");
	container.id = count;
	document.getElementById("Textbox").appendChild(container);
	//add image to the container
	var img = document.createElement("img");
	img.setAttribute( "alt", "Avatar");
	img.setAttribute( "src", "img/Chatbot.jpg");
	document.getElementById(count).appendChild(img);
	//add the text
	var valid = String(count) + "p"
	var val = document.createElement("p");
	val.innerHTML = text;
	val.setAttribute( "id", valid)
	document.getElementById(count).appendChild(val);
	//add buttons for the options
	// First option
	for (var i = 0; i != string.length; i++) {
		var btn = document.createElement("button");
		btn.innerHTML = string[i];
		btn.setAttribute( "onclick", func[i]);
		btn.setAttribute("class", "btn btn-outline-info btn-lg btn-block");
		document.getElementById(valid).appendChild(btn);
	}
	//add Time to the container
	var time = document.createElement("span");
	time.setAttribute( "class", "time-right");
	time.innerHTML = String(new Date().getHours() + " : " + new Date().getMinutes());
	document.getElementById(count).appendChild(time);
	//Just scroll to the last message
	document.getElementById(count).scrollIntoView();
}
//Dropdown print commands
function print3(text,option) {
	$('button').prop('disabled', true);
	$('button').prop('class', 'btn btn-outline-secondary btn-lg btn-block');
	count++;
	text = String(text);
	//Create the chatbot side container
	var container = document.createElement("div");
	container.setAttribute( "class", "container");
	container.id = count;
	document.getElementById("Textbox").appendChild(container);
	//add image to the container
	var img = document.createElement("img");
	img.setAttribute( "alt", "Avatar");
	img.setAttribute( "src", "img/Chatbot.jpg");
	document.getElementById(count).appendChild(img);
	//add the text
	var valid = String(count) + "p";
	var val = document.createElement("p");
	val.innerHTML = text;
	val.setAttribute( "id", valid)
	document.getElementById(count).appendChild(val);
	//add buttons for the options
	//Create the select menu
	selid = String(count) + "s";
	var sel = document.createElement("select");
	sel.setAttribute( "id", selid)
	sel.setAttribute( "class", "select");
	sel.setAttribute( "onchange", "route(this.value)")
	document.getElementById(valid).appendChild(sel);
	//select options option
	var selopt = document.createElement("option");
	selopt.innerHTML = "--Select From The Options--";
	document.getElementById(selid).appendChild(selopt);
	//Define options the select menu
	for (var i = 0; i != option.length; i++) {
		var opt = document.createElement("option");
		opt.innerHTML = option[i];
		document.getElementById(selid).appendChild(opt);
	}
	//gives it search box
	$("#" + selid).select2();
	//add Time to the container
	var time = document.createElement("span");
	time.setAttribute( "class", "time-right");
	time.innerHTML = String(new Date().getHours() + " : " + new Date().getMinutes());
	document.getElementById(count).appendChild(time);
	//Just scroll to the last message
	document.getElementById(count).scrollIntoView();
}

function run() {
	var run = setTimeout(function() {print2("Choose between the options",Slist,flist);},3000);
}





























function input() {
	var val = document.getElementById("UI").value;
	output(val, UT);
	document.getElementById("UI").value = "";
	return val;
}
function Get(Url){
	var URL = 'https://v2-api.sheety.co/9a12bc0f9230b39275673e809fbca912/chattyApi/' + Url;
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",URL,false);
    Httpreq.send(null);
	var value = String(Httpreq.responseText)
    var value = JSON.parse(value);
    return value;
}
function change(name){
	document.getElementById("run").setAttribute( "onClick", name);
}
function random(string) {
	return string[Math.floor(Math.random()*string.length)]
}
// Run as soon as the page has created all the element
window.addEventListener('load',function(){console.clear(); 	print2("Choose between the options",Slist,flist);}, false);
