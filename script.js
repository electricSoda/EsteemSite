const pinappend = document.getElementById('pinappend');
new URLSearchParams(window.location.search).forEach((value) => {
    pinappend.append(document.createElement(`${value}`))
    pinappend.append(document.createElement('br') 
,)});
