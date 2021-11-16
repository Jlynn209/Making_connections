function removeRequest(id, myButton) {
  var element = document.getElementById(id);
  element.remove();

  var request = document.querySelector("#badge1");
  var count = parseInt(request.innerText);
  count--;
  request.innerText = count;

  var badge2request = document.querySelector("#badge2");
  var badge2count = parseInt(badge2request.innerText);
  if (myButton == "accept") {
    badge2request.innerText = badge2count + 1;
  }
}

function changeName(id) {
  var element = document.getElementById(id);
  var test = element.querySelector("h1");
  console.log((test.innerText = "Donna Lee"));
}
