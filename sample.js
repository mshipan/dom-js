// step-1: add eventListener to the post button
document.getElementById('btn_post').addEventListener('click', function(){
    //step-2: get the comment inside the text area
    const  commentBox = document.getElementById('new_comment');
    const newComment = commentBox.value;
    // step-3: set the comment inside the paragraph tag
    // step-3.1: get the comment id
    // step-3.2: set the text of the comment as innerText of the p tag
    const commentContent = document.getElementById('comment');
    commentContent.innerText = newComment;
    // step-4: clear the textarea 
    commentBox.value = '';
});

document.getElementById('btn_post2').addEventListener('click' ,function(){
    const commentBox2 = document.getElementById('new_comment2');
    const newComment2 = commentBox2.value;

    const commentContainer = document.getElementById('comment-container');
    const p = document.createElement('p');
    p.innerText = newComment2;
    commentContainer.appendChild(p);
    commentBox2.value ='';   
});