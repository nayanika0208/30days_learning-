const secrotate=document.querySelector(".sec-hand");
const hourrotate=document.querySelector(".hour-hand");
const minrotate=document.querySelector(".min-hand");
const hand=document.querySelector(".hand");

const setDate=()=>{
	const now= new Date();
	const seconds= now.getSeconds();
	const hour=now.getHours();
	const minutes=now.getMinutes();
	const secdeg=((seconds/60)*360-90);
	const hourdeg=((hour/12)*360-90);
	const mindeg=((minutes/60)*360-90);


	secrotate.style.transform=`rotate(${secdeg}deg)`;
	hourrotate.style.transform=`rotate(${hourdeg}deg)`;
	minrotate.style.transform=`rotate(${mindeg}deg)`;		


}
setInterval(setDate,1000);