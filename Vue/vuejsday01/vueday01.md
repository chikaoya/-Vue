# 1.Vue核心

### vue的特点

![image-20240816101129562](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240816101129562.png)

### 第二个特点，声明式和命令式区别

![image-20240816101309821](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240816101309821.png)



## 初始Vue

```
初识Vue：
1.想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象；
2.root容器里的代码依然符合html规范，只不过混入了一些特殊的Vue语法；
3.root容器里的代码被称为【Vue模板】；
4.Vue实例和容器是一一对应的；
5.真实开发中只有一个Vue实例，并且会配合着组件一起使用；
6.{{xxx}}中的xxx要写js表达式，且xxx可以自动读取到data中的所有属性；
7.一旦data中的数据发生改变，那么页面中用到该数据的地方也会自动更新；
```



## Vue 中的模板语法

```vue
<div id="root">
    <h1>插值语法</h1>
    <h3>你好,{{name}}</h3>
    <hr/>
    <h1>指令语法</h1>
    <a :href="school.url.toUpperCase()">点我去{{school.name}}学习1</a>
    <a :href="school.url.toUpperCase()">点我去{{school.name}}学习2</a>
  </div>
   <script src="../js/vue.js"></script>
  <script>
    Vue.config.productionTip = false//阻止vue启动时生产生产提示
    new Vue({
      el:'#root',
      data:{
        name:'jack',
        school:{
          name:'尚硅谷',
          url:'http://www.atguigu.com'
        }
      }
    })
  </script>
```

## Vue数据绑定

Vue中的单向数据绑定:v-bind	简写：：****

Vue中的双向数据绑定:v-model	简写：v-model不写value值

Vue中的事件点击监听:v-on:click 简写：@

v-modal只能运用在表单类元素上（输入元素类）上



el和data 的俩种写法

```vue
 el:'#root'//第一种
 v.$mount('#root') //第二种写法 
 
 data
 // data的第一种写法：对象式
 data:{
        name:'尚硅谷'
      } 
 // data的第二种写法：函数式
      data(){
   console.log('@@@',this)//此处的this是Vue实例对象
        return{
          name:'尚硅谷'
        }
      }
```



## MVVM模型

M-V-VM 模型 视图 视图模型

![image-20240820220759311](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240820220759311.png)



## 数据代理 原理图解

![image-20240821114402157](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240821114402157.png)



## 事件处理

```Vue
事件的基本使用：
1.使用v-on:xxx 或 @xxx 绑定事件，其中xxx是事件名；
2.事件的回调需要配置在methods对象中，最终会在vm上；
3.methods中配置的函数，不要用箭头函数！否则this就不是vm了；
4.methods中配置的函数，都是被Vue所管理的函数，this的指向是vm 或 组件实例对象；
5.@click="demo" 和 @click="demo($event)" 效果一致，但后者可以传参；
```



### 事件修饰符

| Vue中的事件修饰符：                                         |
| ----------------------------------------------------------- |
| 1.prevent：阻止默认事件（常用）；                           |
| 2.stop：阻止事件冒泡（常用）；                              |
| 3.once：事件只触发一次（常用）；                            |
| 4.capture：使用事件的捕获模式；                             |
| 5.self：只有event.target是当前操作的元素时才触发事件；      |
| 6.passive：事件的默认行为立即执行，无需等待事件回调执行完毕 |



### Vue常用案件别名 键盘事件

| Vue中常用的按键别名：                     |
| ----------------------------------------- |
| 回车 => enter                             |
| 删除 => delete (捕获“删除”和“退格”键)     |
| 退出 => esc                               |
| 空格 => space                             |
| 换行 => tab (特殊，必须配合keydown去使用) |
| 上 => up                                  |
| 下 => down                                |
| 左 => left                                |
| 右 => right                               |

## 计算属性

**计算属性与插值和methods方法区别：**

*插值表达式去表示数据的连接比较复杂不推荐使用。*

methods的方法，在使用时候需要写小括号，因为是方法所以要调用

计算属性：他可以像methods方法那样，但是可以省去小括号。

做项目的时候要考虑清楚，我调用的是methods方法还是data中的数据，还是computed里配置的属性



## 监视属性

**监视（侦听）属性watch VS 计算属性** 

*计算属性里面不能开启异步任务，监视属性可以开启异步任务*

```vue
computed和watch之间的区别：
1.computed能完成的功能，watch都可以完成。
2.watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作。

两个重要的小原则：
1.所被Vue管理的函数，最好写成普通函数，这样this的指向才是vm 或 组件实例对象。
2.所有不被Vue所管理的函数（定时器的回调函数、ajax的回调函数等、Promise的回调函数），最好写成箭头函数，
这样this的指向才是vm 或 组件实例对象
```



## 绑定样式

```
绑定样式：
1. class样式
写法:class="xxx" xxx可以是字符串、对象、数组。
字符串写法适用于：类名不确定，要动态获取。
对象写法适用于：要绑定多个样式，个数不确定，名字也不确定。
数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用。
2. style样式
:style="{fontSize: xxx}"其中xxx是动态值。
:style="[a,b]"其中a、b是样式对象。
```



## 条件渲染

```Vue
条件渲染：
1.v-if
写法：
(1).v-if="表达式" 
(2).v-else-if="表达式"
(3).v-else="表达式"
适用于：切换频率较低的场景。
特点：不展示的DOM元素直接被移除。
注意：v-if可以和:v-else-if、v-else一起使用，但要求结构不能被“打断”。
2.v-show
写法：v-show="表达式"
适用于：切换频率较高的场景。
特点：不展示的DOM元素未被移除，仅仅是使用样式隐藏掉
3.备注：使用v-if的时，元素可能无法获取到，而使用v-show一定可以获取到。
```



## 列表渲染

```
v-for指令:
1.用于展示列表数据
2.语法：v-for="(item, index) in xxx" :key="yyy"
3.可遍历：数组、对象、字符串（用的很少）、指定次数（用的很少）
```



##### 遍历列表时key的作用(index作为key)

![image-20240822221524706](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240822221524706.png)



##### 遍历列表时key的作用(id作为key)

![image-20240822221555430](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240822221555430.png)

id作为key的好处是不会使数据错乱，即使是数据逆序的添加和逆序的删除也不会导致数据错乱。而index作为key则会，开发中如果只是简单展示则可以用index作为key，否则需要用id



#### 列表过滤





#### 列表排序



#### 数据监测原理

vue会监视data所有层次的数据，只要调用setter就被监测，当数据改变时，

1需要对对象进行响应式则使用vue.set(),vm.$set()，不能直接给根目录数据添加对象，会报错。

2需要对数据进行响应式则使用原生的方法进行更新即可

```
	Vue监视数据的原理：
1. vue会监视data中所有层次的数据。

2. 如何监测对象中的数据？
通过setter实现监视，且要在new Vue时就传入要监测的数据。
(1).对象中后追加的属性，Vue默认不做响应式处理
(2).如需给后添加的属性做响应式，请使用如下API：
Vue.set(target，propertyName/index，value) 或 
vm.$set(target，propertyName/index，value)

3. 如何监测数组中的数据？
通过包裹数组更新元素的方法实现，本质就是做了两件事：
(1).调用原生对应的方法对数组进行更新。
(2).重新解析模板，进而更新页面。

4.在Vue修改数组中的某个元素一定要用如下方法：
1.使用这些API:push()、pop()、shift()、unshift()、splice()、sort()、reverse()
2.Vue.set() 或 vm.$set()
				特别注意：Vue.set() 和 vm.$set() 不能给vm 或 vm的根数据对象 添加属性！！！
```



#### 收集表单数据

```
收集表单数据：
若：<input type="text"/>，则v-model收集的是value值，用户输入的就是value值。
若：<input type="radio"/>，则v-model收集的是value值，且要给标签配置value值。
若：<input type="checkbox"/>
1.没有配置input的value属性，那么收集的就是checked（勾选 or 未勾选，是布尔值）
2.配置input的value属性:
(1)v-model的初始值是非数组，那么收集的就是checked（勾选 or 未勾选，是布尔值）
(2)v-model的初始值是数组，那么收集的的就是value组成的数组
备注：v-model的三个修饰符：
lazy：失去焦点再收集数据
number：输入字符串转为有效的数字
trim：输入首尾空格过滤
```



## 过滤器



#### 内置指令：

```
v-bind	: 单向绑定解析表达式, 可简写为 :xxx
v-model	: 双向数据绑定
v-for  	: 遍历数组/对象/字符串
v-on   	: 绑定事件监听, 可简写为@
v-if 	 	: 条件渲染（动态控制节点是否存存在）
v-else 	: 条件渲染（动态控制节点是否存存在）
v-show 	: 条件渲染 (动态控制节点是否展示)
```

**v-text**

```
<div v-text="name"></div>
v-text指令：
1.作用：向其所在的节点中渲染文本内容。
2.与插值语法的区别：v-text会替换掉节点中的内容，{{xx}}则不会。
```

**v-html,有安全性问题，他人可能会通过改属性获得您网站储存的cookie值从而进行盗窃**

```
<div v-html="str"></div>
v-html指令：
1.作用：向指定节点中渲染包含html结构的内容。
2.与插值语法的区别：
(1).v-html会替换掉节点中所有的内容，{{xx}}则不会。
(2).v-html可以识别html结构。
3.严重注意：v-html有安全性问题！！！！
(1).在网站上动态渲染任意HTML是非常危险的，容易导致XSS攻击。
(2).一定要在可信的内容上使用v-html，永不要用在用户提交的内容上！
```

**v-cloak指令，如果浏览器加载速度慢，可以配合[v-cloak]{display:none}让页面暂时不显示，识别到js之后自动删除该属性，确保页面不会出现闪屏的错误。**

```
<h2 v-cloak>{{name}}</h2>
v-cloak指令（没有值）：
1.本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性。
2.使用css配合v-cloak可以解决网速慢时页面展示出{{xxx}}的问题。
```

**v-once**

```
<h2 v-once>初始化的n值是:{{n}}</h2>
v-once指令：
1.v-once所在节点在初次动态渲染后，就视为静态内容了。
2.以后数据的改变不会引起v-once所在结构的更新，可以用于优化性能。
```

**v-pre**

```
<h2 v-pre>Vue其实很简单</h2>
v-pre指令：
1.跳过其所在节点的编译过程。
2.可利用它跳过：没有使用指令语法、没有使用插值语法的节点，会加快编译。
```

**自定义属性** directives

**属性名**(element,binding){}

```js
<input type="text" v-fbind:value="n">
\\全局自定义属性配置
Vue.directive('fbind',{
			//指令与元素成功绑定时（一上来）
			bind(element,binding){
				element.value = binding.value
			},
			//指令所在元素被插入页面时
			inserted(element,binding){
				element.focus()
			},
			//指令所在的模板被重新解析时
			update(element,binding){
				element.value = binding.value
			}
		}) 
```

## 生命周期

完整的生命周期有**八个函数**，四对，分别是：

```
//初始化之前
beforeCreate(){}
//初始化之后
created(){}
//挂载成功之前:虚拟DOM转换成真实DOM插入页面叫做挂载
beforeMount(){}
//真实DOM插入页面
mounted(){}
//数据更新之前，数据是新的，页面是旧的
beforeUpdate(){}
//数据更新数据是新的，页面也是新的
update(){}
//数据销毁之前，将要执行销毁过程，关闭定时器，取消订阅消息，停止自定义时间等操作
beforeDestroy(){}
//调用该函数，数据成功销毁，除vue自带的事件属性不受影响，其余如定时器，取消订阅消息，都会受影响。
destroyed(){}
```

**Vue使用组件的三大步骤**

1.先定义一个组件，用extend定义组件

2.注册组件，在vm中注册components局部组件，用component注册全局组件

3.使用组件在body直接使用，<组件名></组件名>

注意事项：注册组件时不要写el配置项。

```
组件定义全局：
const hello = Vue.extend({
			template:`
				<div>	
					<h2>你好啊！{{name}}</h2>
				</div>
			`,
			data(){
				return {
					name:'Tom'
				}
			}
		})
	Vue.component('hello',hello)//全局注册组件
```

```vue
局部定义组件：
//第一步：创建school组件
		const school = Vue.extend({
			template:`
				<div class="demo">
					<h2>学校名称：{{schoolName}}</h2>
				</div>
			`,
			data(){
				return {
					schoolName:'尚硅谷',
				}
			}
		})
		//创建vm
		new Vue({
			el:'#root',
			//第二步：注册组件（局部注册）
			components:{
				school //局部创建组件
			}
		})
使用方法：
<body>
<school></school>
</body>
```

## 非单文件组件

对象原型，原型对象，构造函数三者间关系图

![image-20240827103144276](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240827103144276.png)
