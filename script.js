
function processForm(e) {
    e.preventDefault();
    console.log(e.path[0][0].value);
    console.log(e)
    const tweet = e.path[0][0].value;
    if (tweet == ""){
        return false;
    }
    const list = document.getElementById('timeline');
    const div = document.createElement('div');
    const p = document.createElement('p');
    const del = document.createElement('button');
    del.innerText = 'Delete';
    del.className = 'delete';
    p.innerText = tweet;
    del.addEventListener('click', function(){
        del.parentElement.remove();
    });
    div.className="tweet";
    div.appendChild(p);
    div.appendChild(del)
    list.appendChild(div);
    e.path[0][0].value = "";

}

const form = document.getElementById("send-tweet");
form.addEventListener("submit", processForm);