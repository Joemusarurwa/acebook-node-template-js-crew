console.log('Client-side code running');

var updatePostStats = {
  Like: function (postId) {
      document.querySelector('#likes-count-' + postId).textContent++;
  }
};


var actOnPost = (event) =>  {
  let postId = event.target.dataset.postId;
  let action = event.target.textContent.trim().slice(0, -3);
  updatePostStats[action](postId);
  let idAndAction = {_id: postId, action: action} 
  fetch('/posts/like', { 
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(idAndAction)
  })
};