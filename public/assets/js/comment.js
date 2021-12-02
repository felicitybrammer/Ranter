const postContainer = document.getElementById('post-feed-results')

function newCommentHandler(comment_text, logPostId) {
    
  return fetch(`/api/comment`, {
    method: 'POST',
    body: JSON.stringify({
      comment_text,
      post_id: logPostId
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

}

postContainer.addEventListener('submit', async event => {
  event.preventDefault()

  //console.log(event.target.dataset.postId)
  const logPostId = event.target.dataset.postId
  const commentForm = event.target
  const comment_text = commentForm.querySelector(".comment-textarea").value

  //console.log(commentForm.querySelector(".comment-textarea").value)

  const result = await newCommentHandler(comment_text, logPostId) 
  if (result.ok) {
    console.log('success') 
    //add comment html to comment container
    const commentsContainer = document.querySelector('.comments')
    
   
    const newCommentContainer = document.createElement('section')
    newCommentContainer.className = 'comment border-bottom border-2 border-light mt-3 pb-3'
    
    const meta = document.createElement('div')
    meta.className = 'meta'
    meta.innerHTML = '<div>`@${user.username} ∙ ' + '<span class="fst-italic fw-light fs-7">`${format_date}${created_at}`</span>' + '</div>'
    
    const commText = document.createElement('div')
    //commText.className = 'comments'
    commText.textContent = `${comment_text}`

    newCommentContainer.appendChild(meta, commText)
    commentsContainer.appendChild(newCommentContainer)
    console.log(meta,commText)

    const outerCommentContainer = document.querySelector('.star')
    outerCommentContainer.appendChild(commentsContainer)
    //document.location.reload('/feed');
  } else {
    console.log('no success')
  }

})



  
  
  
  