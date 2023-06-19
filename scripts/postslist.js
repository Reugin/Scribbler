


function del(postId) {
    var delDisplay = document.getElementById("back");
    var yesButton = document.getElementById("yes");
    yesButton.onclick = function () {
        var post = document.getElementsByClassName("post_" + postId)[0];
        post.style.display = "none";
        delDisplay.style.display = "none";
    };
    delDisplay.style.display = "block";  
}

function dontDel() {
    var delDisplay = document.getElementById("back");
    delDisplay.style.display = "none";
    
}

