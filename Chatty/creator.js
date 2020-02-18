var Scriptlist = ["functions", "menu", "chatty","script"];
name[0] = "function";
name[1] = "menu";
name[2] = "chatty";
name[3] = "script";

for (var i = 0; i != Scriptlist.length; i++) {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = Scriptlist[i] + '.js';
	document.getElementsByTagName('head')[0].appendChild(script);
}