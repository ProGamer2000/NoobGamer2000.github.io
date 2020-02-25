var TR = Get("route").route;
var obj;
var CT = "CT";
var UT = "UT";
var util_slist = ["Form's Link", "Policy PDF","About Me"];
var util_flist = ["Contact('FL')","Contact('PDF')","chatty('About_me')"];
//A Function to run the chatbot
function chatty(choose){
    userinput = choose;
    if (userinput === "quit" || userinput === "exit"){
        output(random(['bye','See You :(', ':/']),CT);
        window.location.href = '';
    }
    else if (choose === 'Utli'){
        output("Utility",UT);
        print2("What Utility do you want?", util_slist,util_flist);
    }
    else if (choose === 'date'){
        output("Date",UT);
        output(new Date(),CT);
        run();
    }
    else if (choose === 'CL'){
        output("Contact List",UT);
        Contact('CL');
    }
    else if (choose === "lunch"){
        print2(" ", ['Today','This month'], ['finder("Today")','finder("Month")']);
        //print2("What do you you want", ["lunch menu","Today's Special"],['menu("menuOfMonth")','menu("todaysSpecial")'])
    }
    else if (choose === "TS") {
        output("Today's Special");
        finder('TS');
        run();
    }
    else if (choose === "TR"){
        output("Transport Route",UT);
        //Transport route
        var obj = [];
        for (var i = 0; i != TR.length; i++) {
            obj.push(TR[i]["stopName"]);
        }
        print3("Choose your Transport route", obj);
    }
}
function Contact(option) {
    if (option === 'FL'){ // Forms LOG
        print2("Please choose what links you want to acess",["Exigency reporting form","Dressing Feedback to Individual","PYP School Counselor Intervention Form","Event Feedback form","Field Trip / Outstation Event Requisition Form","Event Requisition/Students Calendar Entry Form 2019-20"],["window.open('https://bit.ly/2TRb5qG');run()","window.open('https://bit.ly/37wh2NC');run()","window.open('https://bit.ly/36nKyUp');run()","window.open('https://bit.ly/3awMWMd');run()","window.open('https://bit.ly/2Gcm2LB');run()","window.open('http://bit.ly/3c8YMNi');run()"]);
    }
    else if (option === 'CL'){ //Call LOG
        window.open('https://bit.ly/2Nl0a4m');
    }
    else if (option === 'PDF'){ //policy PDF
        //need URL
    }
    
}