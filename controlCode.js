function writeCss(prefix, code, fn){
    let domCode = document.querySelector('#code')
    let n = 0
    let id = setInterval(() => {
      n += 1
      domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
      styleTag.innerHTML = prefix +  code.substring(0, n)
      domCode.scrollTop = domCode.scrollHeight
      if (n >= code.length) {
        window.clearInterval(id)
        fn && fn.call()
      }
    }, 0)
  }
  function writeMarkdown(markdown, fn){
    let domPaper = document.querySelector('#paper>.content')
    let n = 0
    let id = setInterval(() => {
      n += 1
      domPaper.innerHTML = markdown.substring(0, n)
      domPaper.scrollTop = domPaper.scrollHeight
      if (n >= markdown.length) {
        window.clearInterval(id)
        fn && fn.call()
      }
    }, 100)
  }
  
  var css1 = `
  /* 大家好，在介绍自己之前我想要将
  简历的样式布置一下
  */   
*{
    transition: all 1s;
  }
  html{
  background-color:#eee;
  }
  #code-wrapper{
    width: 40%; left: 0; position: fixed; 
    height: 100%;
  }
  /*加个边距和一些会动的动画*/
  #code{
     background-color:white;
     transform-origin: top left;
     transform-style: preserve-3D;
     transform: rotate(360deg);
     border: 1px solid #aaa;
     padding: 16px;
  
  }
  /*我需要一点代码高亮*/
  
  .token.comment{
    color:eee
}
  .token.selector{
      color:#690
  }
  .token.punctuation{
  color:#999
  }
  .token.property{
      color:#905
  }
  .token.function{
      color:#DD4A68
  }
/*添加呼吸效果*/
    #code{
    animation: breath 0.5s infinite alternate-reverse;
     }
  /* 不玩了，我来介绍自己把,现在开始我要准备一张白纸
  */
 /* 于是我就可以在白纸上写字了，请看右边 */
  `
  
  var css2 = `
  /* 接下来用一个优秀的库 marked.js
   * 把 Markdown 变成 HTML
   */
  `
  var md = `
  # 本人照片，有点俗，但还能看
  ![](./pic/photo.JPG)
  # 自我介绍
      我叫罗明慧
  # 我的座右铭
      趁着年轻，所有你想要的都别随风而去，愿不负韶华
  # 我的爱好
      敲代码,打桌球，看书，听音乐
  # 我的技能
      熟练使用js，jquery,http,git,boostrap等框架的使用，并且能使用mvc的框架思想
  # 我的作品
      画板，web简历，导航栏，轮播图，会动的比卡丘等
 
   **我会加油的，望能给我到贵公司面试的机会**
  `
  var css3=`
  /*这是我的会动简历，谢谢观看*/
  `
  
  writeCss('', css1, ()=>{ // writeCss call the function
    createPaper(() => {
       
      writeMarkdown(md, ()=> {
       
        writeCss(css1, css2, ()=>{
           
          convertMarkdownToHtml(()=>{
            writeCss(css1+css2, css3, ()=> {  
              console.log('完成')
            })
          })
        })
      })
    })
  })
  
  
  
  
  function createPaper(fn){
    var paper = document.createElement('div') 
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn && fn.call()
  }
  
  function convertMarkdownToHtml(fn){
    var div = document.createElement('div')  
    div.className = 'html markdown-body'
    div.innerHTML = marked(md)
    let markdownContainer = document.querySelector('#paper > .content')
    markdownContainer.replaceWith(div)
    fn && fn.call()
  }