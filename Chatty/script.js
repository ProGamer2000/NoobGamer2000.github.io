var CT = "CT"
var UT = "UT"
var NC = Get('normalChat');
var Route = Get('route');

function test(input) {
	var data = Get('studentDetails');
	for(var i = 0; i < data.studentDetails.length; i++) {
    	var obj = data.studentDetails[i];
    	if (obj['name'] === input) {
    		console.log("Hi " + obj['name'] + " " + obj['surname'] + ". How may I help you today")
    	}
	}
}
function info_find(){
    Uinput = input()
    for(var i = 0; i < SD.studentDetails.length; i++) {
    	var info = SD.studentDetails[i];
        if (info['name'] === Uinput){
            info_find.FSKID = info['fskid'];
            info_find.Name = info['name'];
            info_find.Surname = info['surname'];
            info_find.Grade = info['grade'];
            info_find.Section = info['section'];
            output("Hello " + info_find.Name + " " + info_find.Surname + ", I am Chatty how may I help you today!", CT);
            output("If you need help with the commands type help. Type quit to leave\n\n\n",CT);
            print2("hi",['Menu','Todays Special'],['lol()','dude()'])
            change("chatty()");
            return 0;
        }
    }
    output("Please enter your first name only",CT)
}

//This will do the bus Route task
function keycode(SC){
    // SC = "b"
    Routenumber = SC.toUpperCase() + String(route.sn['route' + SC.toUpperCase()])
    H = String(route.sn[SC + "h"])
    M = String(route.sn[SC + "m"])
    if(M.length === 1){
	   M = "0" + M
    }
    Time = H + ":" + M;
    output("The route number is " + Routenumber,CT)
    output("The time is " + Time,CT)
    run()
}

function route(Stopname){
    // Stopname = "Opp.Someshwar Enclave Main Gate"
    $('select').prop('disabled', true);
    for (var i = Route.route.length - 1; i >= 0; i--){
    	var SN = Route.route[i];
        if (SN['stopName'] === Stopname){
        	route.sn = Route.route[i];
        	print2("What is the key code",['A(7:30am)','B(8:45am)','D(2:00pm)','E(3:30pm)'],['keycode("a")','keycode("b")','keycode("d")','keycode("e")'])
            return 0;
        }
    }
    output("Sorry That's not a route check your spellings or mistakes",CT);
}