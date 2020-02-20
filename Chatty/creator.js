var Scriptlist = ["menu.js", "chatty.js","script.js"];
name[0] = "functions";
name[1] = "menu";
name[2] = "chatty";
name[3] = "script";

for (var i = 0; i != Scriptlist.length; i++) {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = Scriptlist[i];
	console.log(Scriptlist[i]);
	document.getElementsByTagName('head')[0].appendChild(script);
}