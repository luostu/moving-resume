

var result=`
/* 大家好，在介绍自己之前我想要将
简历的样式布置一下
*/
body{
background-color:#eee;
}
.content{
   padding:20px;
   width:45%;
   background-color:#AAA;
   box-shadow: -4px 2px 18px -2px rgba(0,0,0,0.75);
   transition: transform 1s linear;
  transform-origin: top left;
  transform-style: preserve-3D;
  transform: rotate(360deg);

}
/* 现在开始我要准备一张白纸
*/
.paper{
    padding:20px;
   width:50%;
   height:100vh;
    background-color:#239886;
    box-shadow: -4px 2px 18px -2px rgba(0,0,0,0.75);
    margin-left:2%
}
`
result2=`
/* 我来开始介绍啦
*/
我的名字时罗明慧

`

var n=0
var timer=setInterval(() => {
  n+=1
  code.innerHTML=result.substring(0,n)
  code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css');
  styleTag.innerHTML=result.substring(0,n)

  if(n>=result.length){
      window.clearInterval(timer)
  }
}, 0);
var div=document.createElement('div')
body.appendChild(div)

div.setAttribute("id", "paper");
div.classList.add('paper')
//var div_paper=document.getElementsByClassName('paper')

var z=0
var timer2=setInterval(() => {
    z+=1
    paper.innerHTML=result2.substring(0,z)
    
   
   //    div_paper.innerHTML= Prism.highlight(result2.innerHTML, Prism.languages.markdown, 'markdown');
    
  
    if(z>=result2.length){
        window.clearInterval(timer2)
    }
    
  }, 1000);
  console.log(paper)
 

