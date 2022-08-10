console.log('Client-side code running');

var updatePostStats = {
  Like: function (postId) {
      document.querySelector('#likes-count-' + postId).textContent++;
  },
  Unlike: function(postId) {
      document.querySelector('#likes-count-' + postId).textContent--;
  }
};


var toggleButtonText = {
  Like: function(button) {
      button.textContent = "Unlike 👎";
      console.log("Liked 👍")
  },
  Unlike: function(button) {
      button.textContent = "Like 👍";
      console.log("Unliked 👎")
  }
};



var actOnPost = (event) =>  {
  console.log(event)
  // console.log(request.session.user)
  let postId = event.target.dataset.postId;
  console.log(typeof postId)
  console.log(postId)
  let action = event.target.textContent.trim().slice(0, -2);
  let actionz = action.trim()
  toggleButtonText[actionz](event.target);
  updatePostStats[actionz](postId);
  idObj = {_id: postId, actionz: actionz}
  fetch('/posts/like-post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(idObj),
  })
};