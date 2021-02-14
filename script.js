const pinappend = document.getElementById('pinappend');
var valuess = [];
new URLSearchParams(window.location.search).forEach((name, value) => {
    valuess.push(name), 
    console.log(valuess)
});

console.log(valuess[1])


function sendmessage() {
    const textarea = document.getElementById('text-area-object');
    var message = document.getElementById('submsg').value;
    var y = document.createTextNode(valuess[1]);
    var sub = document.createTextNode(' >    ');
    var x = document.createTextNode(message);
    textarea.appendChild(y);
    textarea.append(sub);
    textarea.append(x)
    textarea.append(document.createElement('br'))
    document.getElementById('submsg').value='';
}