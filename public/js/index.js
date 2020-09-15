canvas=document.getElementById('canvas')
var context = canvas.getContext('2d');
var charsArray ="ABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%&*0123456789abcdefghijklmnopqrstuvwxyz";
var fonts=['Sans-Serif','Roboto','Verdana','Georgia','Arial'];
var colors = ['red', 'green', 'blue', 'grey', 'black'];
var style=['bold','italic']
  var lengthOtp = 6;
  let ans;
  function genCaptcha(){
    var newx=50,newy=50;
    var captcha = [];
    context.clearRect(0,0,canvas.width,canvas.height)
    for (var i = 0; i < lengthOtp; i++) {
        var index = Math.floor(Math.random() * charsArray.length );
        if (captcha.indexOf(charsArray[index]) == -1)
          captcha.push(charsArray[index]);
        else i--;
      }
      ans=captcha.join('');
      console.log(ans);
      for(var i=0;i<captcha.length;i++){
        angle=Math.random()*Math.PI/3;
        context.save();
        context.textAlign = "center";
        context.translate(newx, newy);
        if(Math.round(Math.random())){
            context.rotate(angle)
        }
        fontSize=Math.random()*(15)+20
        fontName=fonts[Math.floor(Math.random()*fonts.length)];
        color=colors[Math.floor(Math.random()*colors.length)];
        style=Math.round(Math.random());
        scaleX=Math.random()*0.5+1;
        scaleY=Math.random()*0.5+0.8;
        context.font = style+' '+fontSize+"px "+fontName;
        if(Math.round(Math.random())){
            context.save();
            context.scale(scaleX, scaleY);
            context.fillStyle=color;
            context.fillText(captcha[i], 0, 0);
            context.restore();
            newx+=24;
    
        }
        else{
            context.lineWidth=Math.random()*0.5+1
            context.strokeStyle=color
            context.strokeText(captcha[i],0,0);
            newx+=22;
    
        }
        context.restore();
        console.log(newx);
      }
  }
  genCaptcha()
document.getElementById('refresh').addEventListener('click',function(){
    genCaptcha();
})
document.getElementById('submit').addEventListener('click',function(){
    input=document.getElementById('input').value
    console.log(input);
    if(ans==input){
        document.getElementById('status').innerHTML='Captcha Valid';
        document.getElementById('input').value='';
    }
    else{
        document.getElementById('status').innerHTML='Captcha Invalid'
        document.getElementById('input').value='';

    }
})