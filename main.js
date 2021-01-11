var count = 0;

function add() {
    const notes = document.getElementById('notes1');
    var div = document.createElement('div');
    var span = document.createElement('span');
    var button = document.createElement('button');
    div.setAttribute('class','note');
    span.setAttribute('id', `text${count}`);
    button.setAttribute('id','delete');
    button.onclick = del(this);
    notes.appendChild(div).prepend(span, button);
    const text1 = document.getElementById(`text${count}`);
    const customtext = document.querySelector("textarea").value;
    text1.innerText = customtext;
    count++;
}

function del() {
    const notes = document.getElementById('notes1');
    //notes.removeChild()
}