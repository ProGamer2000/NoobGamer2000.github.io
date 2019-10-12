//This Script is connected
window.toggle = function() {
  //alert('it ran: ');
  if (document.getElementById('Dark').getAttribute('class') === 'btn btn-outline-light') {
    document.getElementById('Dark').setAttribute('class', 'btn btn-outline-dark');
    document.getElementById('main').setAttribute('class', 'dark-mode')

  } else {
    document.getElementById('Dark').setAttribute('class', 'btn btn-outline-light');
    document.getElementById('main').setAttribute('class', 'light-mode');

}};