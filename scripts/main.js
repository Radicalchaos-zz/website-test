var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image-facemask.jpg') {
      myImage.setAttribute ('src','images/mask_lavander.jpg');
    } else {
      myImage.setAttribute ('src','images/image-facemask.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'healthy life!, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'healthy life!, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
