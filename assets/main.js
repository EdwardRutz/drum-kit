console.log("main.js loaded");

window.addEventListener('keydown', function(e){
  console.log(e.keyCode);  //keyCode is depreciated
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  console.log(audio);
});

