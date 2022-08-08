console.log('Client-side code running');

const likehandler = (event) =>  {
  console.log(event)
  event.target.children[1].textContent++;
  console.log("Button clicked")

};