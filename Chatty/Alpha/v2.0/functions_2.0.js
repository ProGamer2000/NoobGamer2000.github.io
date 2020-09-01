const Slist = ["Menu", "Today's Special", "Transport Route", "Day", "Contact List/ Intercom", "Utilities"];
const flist = ["chatty('lunch')", "chatty('TS')", "chatty('TR')", "chatty('date')", "chatty('CL')", "chatty('Utli')"];
const append = function(container) {
    document.getElementById('Textbox').appendChild(container);
}
window.addEventListener('load', function() {
    document.getElementsByClassName('loading')[0].remove()
    append(new OptionClass(Slist, flist));
}, false);

const get = async (url) => await fetch(
    'https://v2-api.sheety.co/9a12bc0f9230b39275673e809fbca912/chattyApi/' + url,
    {
        headers: new Headers({
            'Authorization': 'Bearer 418362',
            'Content-Type': 'application/json'
        })
    })
.then(response => response.json())
.then(json => json)
.catch(err => console.log(err))

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementsByClassName('dropdown-content')[0]
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
const disableall = function() {
    changeall('.Button', 'disabled', true);
    changeall('.Button', 'class', 'disable');
    changeall('#myInput', 'disabled', true);
}

function changeall(elem, atrribute, value) {
    var time = document.querySelectorAll(elem).length
    while (time > 0) {
        time--;
        document.querySelectorAll(elem)[time].setAttribute(atrribute, value)
    }
}

function run() {
    var run = setTimeout(function() {
        append(new OptionClass(Slist, flist));
    }, 3000);
}