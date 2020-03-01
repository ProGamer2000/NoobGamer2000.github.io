var Scriptlist = ["menu.js", "chatty.js", "script.js"];
var i, script;
for (i = 0; i !== Scriptlist.length; i += 1) {
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = Scriptlist[i];
    document.getElementsByTagName('head')[0].appendChild(script);
}