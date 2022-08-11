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
      button.textContent = "Like 👍";
      console.log("Liked 👍")
  },
  Unlike: function(button) {
      button.textContent = "Like 👍";
      console.log("Unliked 👎")
  }
};



var actOnPost = (event) =>  {
  let postId = event.target.dataset.postId;
  let action = event.target.textContent.trim().slice(0, -3);
  toggleButtonText[action](event.target);
  updatePostStats[action](postId);
  let idAndAction = {_id: postId, action: action}
  
  if (action === "Like" ) { 
    fetch('/posts/like', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(idAndAction)
  }) 
  } else {
    fetch('/posts/unlike', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(idAndAction)
    }) 
  }
};