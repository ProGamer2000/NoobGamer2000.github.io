function finder(id) {
    let found;
    boxes({Message: id,side: 'client'})
    daynumber = ("0" + new Date().getMonth()).slice(-2) + '-' + ("0" + new Date().getDate()).slice(-2)
    if (id == "Menu Of The Month") {
        openurl("https://www.fountainheadschools.org/helpdesk/school-menu/");
        found = true;
    } else {
        menucard.forEach(data => {
            if (data.date.includes(daynumber)) {
                found = true;
                if (id == "Today's Special") {
                    boxes({Message: data['t1'] + ", " + data['t2'],side: 'client'})
                } else if (id == "Menu Of The Day") {
                    boxes({Message: `${data.m1}, ${data.m2}, ${data.m3}, ${data.m4}, ${data.m5}`,side: 'bot'});
                }
            }
        })
    }
    if (!found) {
        boxes({
            Message: `Sorry The Database Has not been updated to the latest menu ! ! You may use this <a href='https://www.fountainheadschools.org/helpdesk/school-menu/'>link<a/> for the time being`,
            side: 'bot'
        });
    }
    document.querySelector('#option-typer').removeAttribute('disabled');
    document.querySelector('#option-typer').placeholder = 'Type the options instead...';
    run();
}


const generateFoodList = (food) => {
    if (!food) {
        let foodlist = [];
        menucard.forEach(a => {
            foodlist.push(a.m1);
            foodlist.push(a.m2);
            foodlist.push(a.m3);
            foodlist.push(a.m4);
            foodlist.push(a.m5);
        })
        foodlist = [...new Set(foodlist.sort())];
        foodlist.pop();
        let sorted = {};
        foodlist.forEach(a => {
            sorted[a] = 'generateFoodList(this.innerText)'
        })
        boxes({
            Options: sorted,
            Message: "Choose From the Given",
            side: "bot",
            Type: "List"
        })
    } else {
        changeall('#myInput', 'disabled', true);
        document.getElementsByClassName('dropdown-content')[0].remove()
        document.querySelector('#option-typer').removeAttribute('disabled');
        changeall('#option-typer', 'placeholder', 'Type the options instead...');
        boxes({
            Message: `Give me the information about ${food}`
        });
        menucard.forEach(b => {
            if ([b.m1, b.m2, b.m3, b.m4, b.m5].some((a) => a == food)) {
                boxes({
                    Message: `The food can appear on your plate on ${b.date.split('T')[0].split('-')[2]}(th)`,
                    side: "bot"
                })
            }
        })
        run();
    }
}