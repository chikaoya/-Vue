// 作用，需要将所有的DOM元素对象以及相关的资源全部都加载完毕之后再来实现的事件函数
window.onload = function(){
  // 全局声明图片路径
  let bigimgIndex=0
  //#region 路径导航的数据渲染
  navPathDataBind()
  function navPathDataBind(){
    // 1.获取页面导航的元素对象
  let navPath=document.querySelector('#wrapper #content .contentMain #navpath')

  // 2.获取数据
  let path=goodData.path
  
  // 3.遍历数据
  for(let i=0;i<path.length;i++){
    if(i==path.length -1){
      // 只需要创建a且没有href属性
      let aNode=document.createElement("a")
      aNode.innerText=path[i].title
      navPath.appendChild(aNode)
    }else{
      // 4.创建a标签
    let aNode=document.createElement("a")
    aNode.href=path[i].url
    aNode.innerText=path[i].title

    // 5.创建i标签
    let iNode=document.createElement('i')
    iNode.innerText='/'

    // 6.让navPath元素来追加a和i
    navPath.appendChild(aNode)
    navPath.appendChild(iNode)
  }
    }
  }
  //#endregion
  
  //#region  放大镜移入移出，效果
  bigClassBind()
  function bigClassBind() {
    /**
     * 思路：
     * 1、获取小图框元素对象，并且设置移入事件(onmouseenter)
     * 2、动态的创建蒙版元素以及大图框和大图片元素
     * 3、移出时(onmouseleave)需要移除蒙版元素和大图框
     */

    //1.获取小图框元素
    let smallPic = document.querySelector('#wrapper #content .contentMain #center #left #leftTop #smallPic');
    //获取leftTop元素
    let leftTop = document.querySelector('#wrapper #content .contentMain #center #left #leftTop');

    // 获取数据
    let imagessrc=goodData.imagessrc

    //2.设置移入事件
    smallPic.onmouseenter = function () {

        //3. 创建蒙版元素
        let maskDiv = document.createElement('div');
        maskDiv.className = "mask";

        //4.创建大图框元素
        let BigPic = document.createElement('div');
        BigPic.id = "bigPic";

        //5.创建大图片元素
        let BigImg = document.createElement('img');
        BigImg.src = imagessrc[bigimgIndex].b

        //6.大图框来追加大图片
        BigPic.appendChild(BigImg);

        //7.让小图框来追加蒙版元素
        smallPic.appendChild(maskDiv);

        //8.让leftTop元素追加大图框
        leftTop.appendChild(BigPic);

        // 移动事件
        smallPic.onmousemove=function(e){
          // event.clientX:鼠标点距离浏览器左侧X轴的值
          // getBoundingClientRect().left:小图框元素距离浏览器左侧可视left值
          // offsetWidth：威元素的占位宽度
          let left =e.clientX-smallPic.getBoundingClientRect().left-maskDiv.offsetWidth/2
          let top =e.clientY-smallPic.getBoundingClientRect().top-maskDiv.offsetHeight/2
          
          // 判断，限制蒙版的移动范围
          // 如果移动水平方向小于0则将其设置为0
          if(left<0){
            left=0
            // 如果移动水平方向大于小图框的一半，则将其设置为（小图框-蒙版图层的边框值）
          }else if(left>smallPic.clientWidth-maskDiv.offsetWidth){
            left=smallPic.clientWidth-maskDiv.offsetWidth
          }

          // 如果移动垂直方向小于0则将其设置为0
          if(top<0){
            top=0
            // 如果移动垂直方向大于小图框的一半，则将其设置为（小图框-蒙版图层的边框值）
          }else if(top>smallPic.clientHeight-maskDiv.offsetHeight){
            top=smallPic.clientHeight-maskDiv.offsetHeight
          }

          // 设置left和top属性
          maskDiv.style.left=left+'px'
          maskDiv.style.top=top+'px'

           //大图发生移动
           //确定 bigImg 的left top
           //移动比 = 蒙版的位置/大图的位置 = (小图的宽度-蒙版的宽度)/(大图片的宽度-大图框的宽度);
           let scale=(smallPic.clientWidth-maskDiv.offsetWidth)/(BigImg.offsetWidth-BigPic.clientWidth)
          //  console.log(scale);0.495

          // 蒙版往右动，大图图片向左推，垂直方向也同理
           BigImg.style.left=-left/scale+'px'
           BigImg.style.top=-top/scale+'px'

        }
        //设置移出事件
        smallPic.onmouseleave = function () {

            //让小图框移除蒙版元素
            smallPic.removeChild(maskDiv);

            //让leftTop元素移除大图框
            leftTop.removeChild(BigPic);
        }
    }
}
  // #endregion

  //#region 动态渲染放大镜缩略图的数据
  thubnailData()
  function thubnailData(){
    /**
         * 思路：
         * 1、先获取piclist元素下的ul
         * 2、在获取data.js文件下的goodData->imagessrc
         * 3、遍历数组，根据数组的长度来创建li元素
         * 4、让ul遍历追加li元素
         */

        //1.获取piclist下的ul
        let ul=document.querySelector('#wrapper #content .contentMain #center #left #leftBottom #picList ul')

        //2.获取imagessrc数据
        let imagessrc=goodData.imagessrc

        //3.遍历数组
        for(let i=0;i<imagessrc.length;i++){

          //4.创建li元素
          let liNode=document.createElement('li')
          
          //5.创建img元素
          let imgNode=document.createElement('img')
          imgNode.src=imagessrc[i].s

          //6.让li追加img元素
          liNode.appendChild(imgNode)

          //7.让ul追加li元素
          ul.appendChild(liNode)
          
        } 
  }
  // #endregion
  
  //#region 点击缩略图的效果
  thumbnailClick()
  function thumbnailClick(){
      /**
         * 思路：
         * 1、获取所有的li元素，并且循环发生点击事件
         * 2、点击缩略图需要确定其下标位置来找到对应小图路径和大图路径替换现有src的值
         */
        // 1.获取所有的li元素
        let liNodes=document.querySelectorAll('#wrapper #content .contentMain #center #left #leftBottom #picList ul li')

        //获取小图img路径 
        let s_img=document.querySelector('#wrapper #content .contentMain #center #left #leftTop #smallPic img')

        // 获取数据
        let imagessrc=goodData.imagessrc

        // 小图路径需要默认和imagessrc的第一个元素小兔的路径是一致的
        s_img.src=imagessrc[0].s

        // 2.循环点击这些li元素
        for(let i =0;i<liNodes.length;i++){
          // 在点击事件之前，给每一个元素都添加上自定义的下标
          liNodes[i].index=i
          liNodes[i].onclick=function(){
            let idx=this.index
            bigimgIndex=idx;

            // 变换小图路径
            s_img.src=imagessrc[idx].s
          }
        }
   }
  // #endregion

  //#region 点击缩略图左右箭头的效果

  thumbnailLeftRightClick();
  function thumbnailLeftRightClick(){
    /* 思路
    1.先获取左右两端的箭头按钮
    2。在获取可视的div以及ul元素和所有的li元素
    3.然后再发生点击事件 */

    // 1.获取箭头元素
    let prev=document.querySelector('#wrapper #content .contentMain #center #left #leftBottom a.prev')
    let next=document.querySelector('#wrapper #content .contentMain #center #left #leftBottom a.next')
    
    // 2。在获取可视的div以及ul元素和所有的li元素
    let ul=document.querySelector('#wrapper #content .contentMain #center #left #leftBottom #picList ul')

    let liNodes=document.querySelectorAll('#wrapper #content .contentMain #center #left #leftBottom #picList ul li')
    // console.log(picList,ul,liNodes);

    // 3.计算
    // 发生起点
    let start=0

    // 步长
    let step=(liNodes[0].offsetWidth+20)*2

    // 总体运动的距离值，ul的宽度-div框的宽度=（图片的总数-duv中显示的数量）*（li的宽度+20）
    let endPosition=(liNodes.length-5)*(liNodes[0].offsetWidth+20)

    // 发生事件
    prev.onclick=function(){
      start-=step
      if(start<0){
        start=0
      }
      ul.style.left=-start+'px'
    }

    next.onclick=function(){
      start+=step
      if(start>endPosition){
        start=endPosition
      }
      ul.style.left=-start+'px'
    }
  }
  //#endregion

  //#region 商品详情数据的动态渲染
  rightTopData();
  function rightTopData(){
    /**
         * 思路：
         * 1、查找rightTop元素
         * 2、查找data.js->goodData->goodsDetail
         * 3、建立一个字符串变量，将原来的布局结构贴进来，将所对应的数据放在对应的位置上重新渲染rightTop元素
         * 
         * 优化方式,数组解构,对象转成字符串
         */

    // 1.查找元素
    let rightTop=document.querySelector('#wrapper #content .contentMain #center .right .rightTop')
    // 2.查找数据
    let goodsDetail=goodData.goodsDetail
    // console.log(goodsDetail);
    
    // 3.创建一个字符串(模板字符串)
    //模板字符串替换数据：${变量}
    let s=`<h3>${goodsDetail.title}</h3>
             <p>${goodsDetail.recommend}</p>
             <div class="priceWrap">
                <div class="priceTop">
                 <span>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</span>
                 <div class="price">
                     <span>￥</span>
                     <p>${goodsDetail.price}</p>
                     <i>降价通知</i>
                 </div>
                 <p>
                     <span>累计评价</span>
                     <span>670000</span>
                     </p>
                </div>
                <div class="priceBottom">
                 <span>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</span>
                 <p>
                     <span>${goodsDetail.promoteSales.type}</span>
                     <span>${goodsDetail.promoteSales.content}</span>                   
                 </p>
                </div>
                 
             </div>
             <div class="support">
                 <span>支&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;持</span>
                 <p>${goodsDetail.support}</p>
             </div>
             <div class="address">
                 <span>配&nbsp;送&nbsp;至</span>
                 <p>${goodsDetail.address}</p>
             </div> `
            //  重新渲染数据回页面
            rightTop.innerHTML=s
  }
  //#endregion

  //#region 商品参数数据的动态渲染
  rightBottomData()
  function rightBottomData(){
     /**
         * 思路：
         * 1、找rightBottom的元素对象
         * 2、查找data.js->goodData.goodsDetail.crumbData数据
         * 3、由于数据是一个数组，需要遍历，有一个元素则需要有一个动态的dl元素对象(dt、dd)
         */

      //1、查找元素对象
      let chooseWrap=document.querySelector('#wrapper #content .contentMain #center .right .rightBottom .chooseWrap')
      //2、查找数据
      let crumbData = goodData.goodsDetail.crumbData;
      // console.log(crumbData);
      
      //3、循环数据
      for(let i=0;i<crumbData.length;i++){

      //4、创建dl元素对象
        let dlNode=document.createElement('dl')

      //5、创建dt元素对象
        let dtNode=document.createElement('dt')
        dtNode.innerText = crumbData[i].title

      //6、dl追加dt
      dlNode.appendChild(dtNode);

      // 7.遍历crumbData->data元素
      for(let j=0;j<crumbData[i].data.length;j++){
        // 创建dd元素
        let ddNode=document.createElement('dd')
        ddNode.innerText=crumbData[i].data[j].type
        ddNode.setAttribute('price',crumbData[i].data[j].changePrice)

        // 让dl来追加dd
        dlNode.appendChild(ddNode)
      }
      //8、让chooseWrap追加dl
      chooseWrap.appendChild(dlNode);
      }
     
  }
  //#endregion

  //#region 点击商品参数之后的颜色排他效果
  clickddBind()
  function clickddBind(){
     /**
         * 每一行dd文字颜色排他
         * 思路：
         * 1、获取所有的dl元素，取其中第一个dl元素下的所有dd先做测试，
         *   测试完毕之后在对应dl第一行下标的前面在嵌套一个for循环，目的在变换下标
         * 2、循环所有的dd元素并且添加点击事件
         * 3、确定实际发生事件的目标源对象设置其文字颜色为红色，然后给其他所有的元素颜色都重置为基础颜色(#666)
         * ==========================================================================================
         * 
         * 
         * 点击dd之后产生的mark标记
         * 思路：
         * 1、首先先来创建一个可以容纳点击的dd元素值的容器（数组），确定数组的起始长度,在添加一些默认值
         * 2、然后再将点击的dd元素的值按照对应下标来写入到数组的元素身上
         */

     //1、找第一个dl下的所有的dd元素
     let dlNodes=document.querySelectorAll('#wrapper #content .contentMain #center .right .rightBottom .chooseWrap dl')

     let arr=new Array(dlNodes.length)
     
     let choose=document.querySelector('#wrapper #content .contentMain #center .right .rightBottom .choose')

      // 数组填充值
      arr.fill(0)
     // console.log(arr); // [0, 0, 0, 0]

     for(let i=0;i<dlNodes.length;i++){
      
      (function(i){

        let ddNodes=dlNodes[i].querySelectorAll('dd')
        // console.log(ddNodes);
        
         //2、遍历当前所有的dd元素
        for(let j=0;j<ddNodes.length;j++){

          ddNodes[j].onclick=function(){

            // 清空choose元素
            choose.innerHTML = ""

            for(var k=0;k<ddNodes.length;k++){

              ddNodes[k].style.color='#666'

            }
            //假设点击的是第二个元素，下标为1'
            //ddNodes[1].style.color = "red";
            //相同下标的dd元素的字体颜色在进行覆盖操作,而其他未点击的元素都是在进行重新设置颜色
            this.style.color='red'

            // 点击哪一个dd元素动态的产生一个新的mark标记元素
            arr[i]=this

            changePriceBind(arr)

            // 遍历arr数组,将非0元素的值写入到mark标记
            arr.forEach(function(value,index){
              // 只要是为真的条件,咱们就动态的来创建mark标签
              if(value){
                // 创建div元素
                let markDiv=document.createElement('div')
                // 并且设置class属性
                markDiv.className='mark'

                //并且设置值
                markDiv.innerText=value.innerText

                // 创建a元素
                let aNode=document.createElement('a')

                // 设置值
                aNode.innerText='X'

                // 并设置下标
                aNode.setAttribute('index',index)

                // 让Div追加
                markDiv.appendChild(aNode)

                // 让choose元素追加div
                choose.appendChild(markDiv)
              }
            })
            // 获取所有的a标签元素,并且循环发生点击事件
            let aNodes=document.querySelectorAll('#wrapper #content .contentMain #center .right .rightBottom .choose .mark a')
            
            for(let n=0;n<aNodes.length;n++){
              aNodes[n].onclick=function(){
                // 获取点击的a标签身上的index属性值
                let idx1=this.getAttribute('index');
                console.log(idx1);
                
                // 恢复数组中对应下标元素的值
                arr[idx1]=0

                //查找对应下表的那个dl行中的所有dd元素
                let ddlist=dlNodes[idx1].querySelectorAll('dd') 

                // 遍历所有的dd元素
                for(let m=0;m<ddlist.length;m++){
                  // 其余所有dd的文字颜色为灰色
                  ddlist[m].style.color='#666'
                }
                // 默认的第一个dd文字颜色恢复成红色
                ddlist[0].style.color='red'

                // 删除对应下标位置的mark标记
                choose.removeChild(this.parentNode)

                // 调用价格函数
                changePriceBind(arr)
              }
            }
          }
         }
      })(i)
         //2、遍历当前所有的dd元素
        
      
      } 
  }
  //#endregion

  //#region 价格变动函数声明
  function changePriceBind(arr){
    // 1获取元素
    let oldprice=document.querySelector('#wrapper #content .contentMain #center .right .rightTop .priceWrap .priceTop .price p')
    // 取出默认价格
    let price=goodData.goodsDetail.price
    // 2遍历数组
    for(let i =0;i<arr.length;i++){
      if(arr[i]){
        // 数据类型强制转换
        let changePrice=Number(arr[i].getAttribute('price'))
        console.log(arr[i].getAttribute('price'));
        
        // 最终价格
        price+=changePrice
        console.log(price);
        
      }
    }
    oldprice.innerText=price


    // 3.将变化后的价格写入左侧标签中
    let leftprice=document.querySelector('#wrapper #content .contentMain .goodsDetailWrap .rightDetail .choseBox .listWrap .left p')

    leftprice.innerText='¥' + price

    // 4.遍历选择搭配中所有的复选框元素，看是否有选中的
    let ipts=document.querySelectorAll('#wrapper #content .contentMain .goodsDetailWrap .rightDetail .choseBox .listWrap .middle li input')
    
    let newprice=document.querySelector('#wrapper #content .contentMain .goodsDetailWrap .rightDetail .choseBox .listWrap .right i')

    for(let j=0;j<ipts.length;j++){
      if(ipts[j].checked){
        price+=Number(ipts[j].value)
      }
    }
    // 5.右侧的套餐价格重新渲染
    newprice.innerText='¥'+price 
  }
  //#endregion 


  //#region 选择搭配中间区域复选框选中套餐价变动效果
  choosePrice()
  function choosePrice(){
    // 1先复选框的元素
    let ipts=document.querySelectorAll('#wrapper #content .contentMain .goodsDetailWrap .rightDetail .choseBox .listWrap .middle li input')
    
    let leftprice=document.querySelector('#wrapper #content .contentMain .goodsDetailWrap .rightDetail .choseBox .listWrap .left p')
    
    let newprice=document.querySelector('#wrapper #content .contentMain .goodsDetailWrap .rightDetail .choseBox .listWrap .right i')

    // 2遍历这些复选框
    for(let i=0;i<ipts.length;i++){
      ipts[i].onclick=function(){
        let oldprice=Number(leftprice.innerText.slice(1))
        
        
        for(let j=0;j<ipts.length;j++){
          if(ipts[j].checked){
            
            // 新价格=左侧价格+选张复选框附加价格
            oldprice=oldprice+Number(ipts[j].value)
            
          }
          
        }
         // 3。重新协会到套餐价标签中
         newprice.innerText= '¥' + oldprice
      }
      
    }
   
  }

  //#endregion

  //#region 封装一个公共的选项卡函数
    /**
     * ① 被点击的元素   tabBtns
     * ② 被切换显示的元素  tabConts
     */
    function Tab(tabBtns,tabContents){
      for(let i=0;i<tabBtns.length;i++){
        tabBtns[i].index=i
        tabBtns[i].onclick=function(){
          for(let j=0;j<tabBtns.length;j++){
            tabBtns[j].className=''
            tabContents[j].className=''
          }
          this.className='active'
          tabContents[this.index].className='active'
        }
      }
    }
    // 点击左侧选项卡
    leftTab()
    function leftTab(){
      // 被点击的元素
      let h4s=document.querySelectorAll('#wrapper #content .contentMain .goodsDetailWrap .leftAside .asideTop h4')

      // 被切换显示的元素
      let divs=document.querySelectorAll('#wrapper #content .contentMain .goodsDetailWrap .leftAside .asideBottom>div')

      // 调用函数
      Tab(h4s,divs)
    }
    // 点击右侧选项卡
    rightTab()
    function rightTab(){
      // 被点击的元素
      let lis=document.querySelectorAll('#wrapper #content .contentMain .goodsDetailWrap .rightDetail .bottomDetail .tabBtns li')

      // 被切换显示的元素
      let divs=document.querySelectorAll('#wrapper #content .contentMain .goodsDetailWrap .rightDetail .bottomDetail .tabContents div')

      // 调用函数
      Tab(lis,divs)
    }
  //#endregion

  //#region 右边侧边栏的点击效果
  rightAsideBind();
  function rightAsideBind(){
     /**
         * 思路：
         * 1、先找到按钮元素，发生点击事件
         * 2、记录一个初始的状态，在点击事件的内容进行判断,如果为关闭则展开，否则为关闭（状态取反）
         * 3、如果为展开则设置按钮和侧边栏对应的class效果，关闭亦如此
         */
      //1、找按钮元素
      let btns=document.querySelector('#wrapper .rightAside .btns')
      //  记录初始状态
      let flag=true //关闭
      // 查找侧边栏元素
      let rightAside=document.querySelector('#wrapper .rightAside ')
      // 2.发生点击事件
      btns.onclick=function(){
        // 判断
        if(flag){
          // 展开
          btns.className='btns btnsOpen'//如果为真则直接展开

          rightAside.className='rightAside asideOpen'
        }else{
          btns.className='btns btnsClose'//如果为真则关闭

          rightAside.className='rightAside asideClose'
        }
        //无论前面的if和else执行的到底是谁，最终flag的状态都是在原来基础之上进行取反
        flag=!flag
      }
  }
  //#endregion
}