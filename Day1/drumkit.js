
const playkeys=(event)=>{

	const audio=document.querySelector(`audio[data-key="${event.keyCode}"]`);

	if(!audio) return

    audio.currentTime=0;

	audio.play();
	if(audio.currentTime =20)audio.pause()

    const key=document.querySelector(`.key[data-key="${event.keyCode}"]`);

    function stopPlaying(event){

		if(event.keyCode=32)

		{return audio.pause()}
	};
	
  function removeTransition(event){

  	if(event.propertyName!=="transform") return

  		this.classList.remove("playing");

	};

	key.classList.add("playing");

	const keys=document.querySelectorAll(".key");

	keys.forEach(key => key.addEventListener("transitionend",removeTransition));
};

window.addEventListener("keydown",playkeys);
