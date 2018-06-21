
const playkeys=(event)=>{

	const audio=document.querySelector(`audio[data-key="${event.keyCode}"]`);

	if(!audio) return

    audio.currentTime=0;

	audio.play();

    const key=document.querySelector(`.key[data-key="${event.keyCode}"]`);

	
  function removeTransition(event){

  	if(event.propertyName!=="transform") return

  		this.classList.remove("playing");

	};

	key.classList.add("playing");

	const keys=document.querySelectorAll(".key");

	keys.forEach(key => key.addEventListener("transitionend",removeTransition));
};

window.addEventListener("keydown",playkeys);
