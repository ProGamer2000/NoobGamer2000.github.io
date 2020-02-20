var TR = Get("route");
var obj;
var TR = TR.route;
//A Function to run the chatbot
function chatty(choose){
    userinput = choose;
    if (userinput === "quit" || userinput === "exit"){
        output(random(['bye','See You :(', ':/']),CT);
        window.location.href = '';
    }
    else if (choose === 'date'){
        
        output(new Date(),CT);
        run()
    }
    else if (choose === "lunch"){
        print2(" ", ['Today','This month'], ['finder("Today")','finder("Month")'])
        //print2("What do you you want", ["lunch menu","Today's Special"],['menu("menuOfMonth")','menu("todaysSpecial")'])
    }
    else if (choose === "TS") {
        finder('TS');
        run();
    }
    else if (choose === "TR"){
        //Transport route
        var obj = "";
        for (var i = TR.length - 1; i >= 0; i--) {
            obj += TR[i]["stopName"] + "*";
        }
        var obj = obj.split("*");
        print3("Choose your Transport route", obj);
    }
    else if (choose === 'ContactL') {

    }
}
function Contact(option) {
    if (option === 'FL'){ // Forms LOG
        print2("Please choose what links you want to acess",["Exigency reporting form","Dressing Feedback to Individual","PYP School Counselor Intervention Form","Event Feedback form","Field Trip / Outstation Event Requisition Form"],["window.open('https://bit.ly/2TRb5qG');run()","window.open('https://bit.ly/37wh2NC');run()","window.open('https://bit.ly/36nKyUp');run()","window.open('https://bit.ly/3awMWMd');run()","window.open('https://bit.ly/2Gcm2LB');run()"])
    }
    else if (option === 'CL'){ //Call LOG
        window.open('https://bit.ly/2Nl0a4m');
    }
    else if (option === 'PDF'){ //policy PDF
        //need URL
    }
    
}