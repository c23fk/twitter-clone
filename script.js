function processForm(e) {
    e.preventDefault();
    console.log(e.path[0][0].value);
    console.log(e)
    const tweet = e.path[0][0].value;
    if (tweet == ""){
        return false;
    }
    const list = document.getElementById('timeline');
    const li = document.createElement('li');
    li.innerText = tweet;
    list.appendChild(li);
    e.path[0][0].value = "";

}

const form = document.getElementById("send-tweet");
form.addEventListener("submit", processForm);