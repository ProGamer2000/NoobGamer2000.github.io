var menucard= get('menu').then(d => d);

//This is lunch menu functions which search through every live sync data from web
function finder(id) {
    append(new textclass(id).createClientSide());
    daynumber=new Date().getDate();
    var month=["January","February","March","April","May","June","July","August","September","October","November","December"]
    daynumber=daynumber+" "+month[new Date().getMonth()];
    for (var i=0; i < menucard.menu.length; i++) {
        var date = menucard.menu[i];

        if (date['date']===daynumber) {
            if (id==="Today's Special") {
                append(new textclass("Today's Special").createClientSide());
                append(new textclass(date['t1'] + ", "+ date['t2']).createBotSide());
                run();
                return 0;
            }

            else if (id==="Menu Of The Day") {
                append(new textclass("Menu The Day").createClientSide());
                var menu_list=date['m1']+", "+date['m2']+", "+date['m3']+", "+date['m4']+", "+date['m5'];
                append(new textclass(menu_list).createBotSide());;
                run();
                return 0;
            }
        }

        else if (id==="Menu Of The Month") {
            window.open("https://www.fountainheadschools.org/helpdesk/school-menu/");
            append(new textclass('The Menu Of the Month has requested to be opened to the browser').createBotSide());
            run();
            return 0;
        }
    }

    append(new textclass(`Sorry The Database Has not been updated to the latest menu ! ! You may use this <a href='https://www.fountainheadschools.org/helpdesk/school-menu/'>link<a/> for the time being`).createBotSide());
    document.querySelector('#option-typer').removeAttribute('disabled');
    document.querySelector('#option-typer').placeholder='Type the options instead...';
    run()
}


//TimeTable("1,9F,6/8/10E,9D,2,9E,10E,2/2,9F,2,9S,2/8/10E,9D,9E,2,9S,2")
//This function searches warps any thing in slash with <tr></tr> and comma with <th></th>
const TimeTable=function(str) {
    var results;
    days=0;

    const figureToControl=(h)=> {
        var g='';

        if ( !Number.isNaN(+h)===true) {
            Number(h);

            for(h > 0; h--; ) {
                g+='<th></th>';
            }
        }

        else {
            g=`<th>${h}</th>`;
        }

        return g
    }

    const operate=(a, c)=> {
        days++;
        results=a.push(`<tr><th>Day ${days}</th><th></th>${
                c.split(',').reduce((g, h)=>(g.push(figureToControl(h)), g), []).join('')
            }</tr>`) 
        return results
    }

    var tableText=`<table><tr><th></th><th>Settling Time</th><th>1</th><th>2</th><th>3</th><th>Meal Break</th><th>4</th><th>5</th><th>6</th><th>7</th></tr>`;
    tableText+=str.split('/').reduce((a, c)=> (operate(a, c), a), []).join('');
    return tableText+"</table>";
}