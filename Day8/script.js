  const canvas=document.querySelector('#draw');
  const ctx =canvas.getContext('2d');

  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;  

  ctx.strokeStyle='#BADA55';
  ctx.lineJoin='round';
  ctx.lineCap='round';
  ctx.lineWidth=50;
  //ctx.globalCompositeOperation='destination-over'


  let isDrawing= false;
  let  lastY=0;
  let lastX=0;
  let hue=0;
  let direction=true;

  function Draw(e){
  if(!isDrawing) return; //stop the function from running when they are not running mouse down
  console.log(e);
  ctx.strokeStyle=`hsl(${hue} 100% 50%)`;

  ctx.beginPath();
  //start from
  ctx.moveTo(lastX,lastY);
  //end to
  ctx.lineTo(e.offsetX,e.offsetY);
  ctx.stroke();
  [lastX,lastY]=[e.offsetX,e.offsetY];
  hue++;
  if(hue>=360){
    hue=0;
  }
  if(ctx.lineWidth>=100 || ctx.lineWidth<=1){
    direction = !direction;
  }

  if(direction){
    ctx.lineWidth++;
 }
  else{
    ctx.lineWidth--;
  }
}

  canvas.addEventListener('mousedown',(e)=>{
    	isDrawing=true;
      	[lastX,lastY]=[e.offsetX,e.offsetY];
})
 

  canvas.addEventListener('mousemove',Draw);
  canvas.addEventListener('mouseup',()=>isDrawing=false);
  canvas.addEventListener('mouseout',()=>isDrawing=false);      