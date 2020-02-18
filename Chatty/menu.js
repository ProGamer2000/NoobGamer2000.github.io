var CT = "CT"
var MenuCard = Get('menu');
//This is lunch menu functions which search through every live sync data from web
function finder(id){
    daynumber = new Date().getDate();
    var month = ["January","February","March","April","May","June","July","August","September","October","November","December"]

    daynumber = daynumber + " " + month[new Date().getMonth()];
    for (var i = 0; i < MenuCard.menu.length;i++){
        var date = MenuCard.menu[i];
        if (date['date'] === daynumber) {
            if (id === 'TS') {
                console.log(date['todaysSpecial'])
                print(date['t1'] + ", " + date['t2'],CT);
            }
            else if (id === "Today") {
                var menu_list = date['m1'] + ", " + date['m2'] + ", " + date['m3'] + ", " + date['m4'] + ", " + date['m5']
                print(menu_list,CT);
                run()
            }
            else if (id === "Month") {
                window.open("https://www.fountainheadschools.org/helpdesk/school-menu/");
                run()
            }
        }
    }
}
