var MenuCard = Get('menu');
//This is lunch menu functions which search through every live sync data from web
function finder(id) {
    append(new TextClass(id).createClientSide());
    daynumber = new Date().getDate();
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    daynumber = daynumber + " " + month[new Date().getMonth()];
    for (var i = 0; i < MenuCard.menu.length; i++) {
        var date = MenuCard.menu[i];
        if (date['date'] === daynumber) {
            if (id === "Today's Special") {
                append(new TextClass("Today's Special").createClientSide())
                append(new TextClass(date['t1'] + ", " + date['t2']).createBotSide());;;
                run()
                return 0;
            } else if (id === "Menu Of The Day") {
                append(new TextClass("Menu The Day").createClientSide())
                var menu_list = date['m1'] + ", " + date['m2'] + ", " + date['m3'] + ", " + date['m4'] + ", " + date['m5']
                append(new TextClass(menu_list).createBotSide());;
                run()
                return 0;
            }
        } else if (id === "Menu Of The Month") {
            window.open("https://www.fountainheadschools.org/helpdesk/school-menu/");
            append(new TextClass('The Menu Of the Month has requested to be opened to the browser').createBotSide())
            run()
            return 0;
        }
    }
    append(new TextClass(`Sorry The Database Has not been updated to the latest menu!!
        You may use this <a href='https://www.fountainheadschools.org/helpdesk/school-menu/'>link<a/> for the time being`).createBotSide());
    document.querySelector('#option-typer').removeAttribute('disabled');
    document.querySelector('#option-typer').placeholder = 'Type the options instead...';
    run()
}