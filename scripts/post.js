
document.addEventListener("DOMContentLoaded", function() {
// for edit Text and save text 
var editButton = document.getElementById('edit_btn');
var saveButton = document.getElementById('save_btn');
var text_area = document.getElementById('post_text');
var text_heading = document.getElementById('post_heading');
var updated = document.getElementById('updated');

editButton.addEventListener('click', function (){
    saveButton.style.display = "block";
    editButton.style.display = "none";
    text_area.disabled = false;
    text_area.style.border = "2px solid pink";
    text_heading.style.border = "2px solid pink";
})


saveButton.onclick = function () {
    text_area.disabled = true;
    text_area.style.border = "2px solid white";
    text_heading.style.border = "2px solid white";
    saveButton.style.display = "none";
    editButton.style.display = "block";
    updated.innerText = 'Updated: ';
}





})
// for like button
function like() {
    var liked = document.getElementById('like_btn');
    var likes = document.getElementById('all_likes');
    liked.innerText = 'Liked';
    likes.innerText = '1 person likes this!';
   
}

//FOR COMMENTS
function comment() {
    var x = document.querySelector('#comment_box').value;
    var com = document.querySelector('#all_comments');
    if (x === "") {
        alert('please type something in comment box')
    } else {
        var li = document.createElement('li');
        com.append(li);
        li.innerText = x;
        document.querySelector('#comment_box').value="";
    }
    
}