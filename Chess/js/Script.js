//This Script is connected
window.toggle = function() {
  //alert('it ran: ');
  if (document.getElementById('main').getAttribute('class') === 'light-mode') {
    document.getElementById('main').setAttribute('class', 'dark-mode')

  } else {
    document.getElementById('main').setAttribute('class', 'light-mode');

}};