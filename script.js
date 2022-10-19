
function processForm(e) {
    // Prevent the form from submitting
    e.preventDefault();
    // Get the form data
    const tweet = e.path[0][0].value;
    // ignore empty tweets
    if (tweet == ""){
        return false;
    }
    // Find the timeline
    const list = document.getElementById('timeline');
    // create new tweet
    const div = document.createElement('div');
    const p = document.createElement('p');
    // add delete button
    const del = document.createElement('button');
    del.innerText = 'Delete';
    del.className = 'delete';
    p.innerText = tweet;
    // function to remove tweet
    del.addEventListener('click', function(){
        del.parentElement.remove();
    });
    div.className="tweet";
    // append tweet to timeline
    div.appendChild(p);
    div.appendChild(del)
    list.appendChild(div);
    //empty the box
    e.path[0][0].value = "";
}
// Find the form and process it on submit
const form = document.getElementById("send-tweet");
form.addEventListener("submit", processForm);