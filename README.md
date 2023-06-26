# 仿网易云音乐实战
# 摘要
vue + electron 实战，实现桌面端应用开发。(electron 中使用 vue、vue 中使用 electron)。项目实战是仿网易云音乐桌面端进行开发。  
# 前言
这个项目是我跟着官方文档的那个入门教程大致跑了一遍，了解了下流程之后就自己实战的项目（大概跟着打了小半天代码），所以中间应该是会有很多写法不是很规范，安全性有可能也没考虑到，可实现的各种api也不是很了解，所以只适合和我类似刚接触的萌新小白，至于为什么要写这篇文章，是因为在我跟着官网那个入门教程做完后，打算看视频跟着写写项目，发现网上完整的教程实在是太少了（主要是有点老了），虽然开源项目很多（但是我真心理解的不太容易）。看了github上面的项目，发现有网易云音乐的一个有接口的项目，觉得很适合自己练手，同类的开源项目也很多，所以打算记录下，就按这个可用的接口进行仿写一下，欢迎萌新大家一起研究。        
必须感谢 [https://github.com/Binaryify/NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi) 作者大大提供的API，给上satr，这个项目直接拉下来跑在本地就是一个后台啦，很感谢！     
使用文档：[https://binaryify.github.io/NeteaseCloudMusicApi/#/](https://binaryify.github.io/NeteaseCloudMusicApi/#/)      
# 项目持续更新中（项目暂时停止）
基本每天搬砖完会更新一点，进度会有点缓慢（并不会和当前的网易云音乐界面完全一样，因为会考虑到部分接口没有，所以会有略微调整，基本就是看能实现的功能进行实现，不能实现的功能就不实现了，反正对接口的调用就是业务逻辑，实现部分就差不多了）。     
（本项目主要是记录electron的使用，所以对于html+js+css只会描述关键部分，如果有不懂的或者不知道怎么实现的建议是把代码拉取下来自己对应查看）  
# 一、创建vue项目
## 1.用vue-cli创建vue项目
```javascript
vue create electron-vue-cloud-music
```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1686535111317-4e5ee21b-fc89-44e1-b557-ca77f5589774.png#averageHue=%23201f1e&clientId=u708a9b37-6ca8-4&from=paste&height=106&id=u361d2714&originHeight=132&originWidth=842&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=16790&status=done&style=none&taskId=u67450193-b402-43ae-803f-468e8f7fdb5&title=&width=673.6)
## 2.查看项目是否正常运行
```javascript
cd electron-vue-cloud-music
npm run serve
```
## 3.设置electron的镜像
```javascript
npm config set registry=https://registry.npmmirror.com
npm config set disturl=https://registry.npmmirror.com/-/binary/node

npm config set electron_mirror=https://registry.npmmirror.com/-/binary/electron/
```
防止在打包的时候或者下载的时候由于网络原因失败。
## 4.安装electron环境
使用 vue-cli-plugin-electron-builder 插件实现vue和electron的使用。    
安装插件：    
```javascript
vue add electron-builder
```
我这里选择13版本。    
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1686535616132-e9831b00-7496-4399-a140-4de52340815a.png#averageHue=%231c1b1a&clientId=u3f198bfd-f89a-4&from=paste&height=182&id=ua726c662&originHeight=228&originWidth=871&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=17905&status=done&style=none&taskId=ub9d656db-dbf3-4669-bb72-aedeac4a7cc&title=&width=696.8)
出现 Successfully 表示安装成功。    
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1686535657031-8f367e09-1599-49e6-92c0-4ca7f5bf2be0.png#averageHue=%231b1a19&clientId=u3f198bfd-f89a-4&from=paste&height=224&id=ub4cd14bf&originHeight=280&originWidth=1150&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=24243&status=done&style=none&taskId=uf1b1e57f-70c0-4f37-9089-4fa27988d09&title=&width=920)
## 5.查看运行命令
打开package.json文件，查看使用命令。    
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1686535783223-e4cc59d1-4dcb-4dff-ac48-4b090dcf6ca0.png#averageHue=%23211f1e&clientId=u3f198bfd-f89a-4&from=paste&height=361&id=u6a2a5058&originHeight=451&originWidth=1075&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=59147&status=done&style=none&taskId=u06826eb5-be99-4e57-bc1a-ccc323e686d&title=&width=860)

可以看到主入口文件是 background.js ，运行命令是 electron:serve， 打包命令是 electron:build  
## 6.测试命令是否成功
### 6.1运行项目
```javascript
npm run electron:serve
```

![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1686535908872-866bd211-6c4d-47af-ae92-64bba0983a09.png#averageHue=%23201e1d&clientId=u3f198bfd-f89a-4&from=paste&height=82&id=u4a4b7b14&originHeight=103&originWidth=882&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=10502&status=done&style=none&taskId=uce857a79-8ab2-4079-a4c1-a243caa5c32&title=&width=705.6)
如果出现扩展失败，并不断尝试，请先等待4次，稍后项目会正常运行。  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1686535954211-5016d67f-4fa8-4f08-8c2b-8f900245160b.png#averageHue=%2322201e&clientId=u3f198bfd-f89a-4&from=paste&height=63&id=ue6427327&originHeight=79&originWidth=461&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=4578&status=done&style=none&taskId=u2a3eb161-a955-484a-8271-03442550337&title=&width=368.8)   
项目正常运行：   
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1686536065279-ef4431a2-1f42-4bd8-9dba-4306c1ec8a62.png#averageHue=%23faf9f6&clientId=u3f198bfd-f89a-4&from=paste&height=594&id=u19e737f6&originHeight=742&originWidth=984&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=90129&status=done&style=none&taskId=uf278c6c5-9d7c-4ef8-9ec3-6a482a51b01&title=&width=787.2)
打开入口文件 background.js 文件，找到刚刚扩展失败的代码：   
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1686536149548-d1ff74ad-c06f-4654-9cbf-ad42fb7c3f5f.png#averageHue=%231f1e1e&clientId=u3f198bfd-f89a-4&from=paste&height=411&id=u5bfb3414&originHeight=514&originWidth=1394&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=84942&status=done&style=none&taskId=u40c71c79-e179-4c46-ae69-2802e06c9fd&title=&width=1115.2)
可以看到是由于在开发环境的时候 vue 的 devtools 工具安装失败导致，我这边直接注释这部分代码（主要是我也没研究怎么解决，暂时用不到，不然每次启动项目都要等待扩展有点浪费时间）
### 6.2打包项目
```javascript
npm run electron:build
```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1686536350376-7fdfbcaf-0fb7-43f2-a863-6dd693e974ce.png#averageHue=%231f1d1c&clientId=u3f198bfd-f89a-4&from=paste&height=101&id=ueb54a4b4&originHeight=126&originWidth=886&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=10914&status=done&style=none&taskId=ue8141ccf-3149-48e0-b7e7-f25b9a538c8&title=&width=708.8)
耐心等待，只要安装了我上面的镜像应该是没问题，出现 Build complete 表示打包成功。
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1686536442599-92f84943-a897-4abb-9923-10b4eb451dd8.png#averageHue=%2323211e&clientId=u3f198bfd-f89a-4&from=paste&height=187&id=uf455897d&originHeight=234&originWidth=1253&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=38886&status=done&style=none&taskId=u76234f65-d1bb-40d4-9f9e-d313d878b99&title=&width=1002.4)
可以看到打包完成的目录：dist_electron
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1686536667174-45a20540-49c2-457f-a381-e264469a48cc.png#averageHue=%231e1d1b&clientId=u3f198bfd-f89a-4&from=paste&height=283&id=uc1db3ef3&originHeight=354&originWidth=363&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=18836&status=done&style=none&taskId=ud04c4477-58f2-4871-8996-a4c33d4ae13&title=&width=290.4)   
点击.exe文件就可以安装，然后正常运行，这里是测试，后面会等项目最后进行讲更加具体的项目打包。
# 二、实现标题栏
## 1.隐藏标题栏
对于这部分的菜单栏需要隐藏，虽然这里有缩小、放大、关闭按钮，但是需要自定义菜单栏的话还是自己写吧（我这里是直接用vue组件实现的，如果electron这个框架有对这部分可以自定义的话麻烦也告知一下）  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1686540359349-b08744f2-dc39-46de-937d-fd153d694d1c.png#averageHue=%23f1f1f1&clientId=u3f198bfd-f89a-4&from=paste&height=138&id=u9c51f987&originHeight=173&originWidth=1111&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=15120&status=done&style=none&taskId=ud96961c5-cf23-4046-8162-36ac2e8feb8&title=&width=888.8)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1686540796535-f91fbb24-9e6c-49a2-aa7c-f486e6eb5c21.png#averageHue=%231f1f1f&clientId=u3f198bfd-f89a-4&from=paste&height=354&id=u3dbca6a6&originHeight=442&originWidth=598&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=34188&status=done&style=none&taskId=u675a8897-ae59-49ea-b21b-4cf20d09520&title=&width=478.4)
可以看到通过 frame:false 现在隐藏了标题栏，并且我还设置了窗口的最小宽度和高度，对于控制台的显示也做了控制，只有在开发环境下才能打开控制台，生产环境下不能打开。
控制台快捷键：Ctrl + Shift + I
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1686540782413-8ac11b90-35dd-4e0f-9398-db7722561dc4.png#averageHue=%23fdfdfd&clientId=u3f198bfd-f89a-4&from=paste&height=600&id=ub5b64d88&originHeight=750&originWidth=1000&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=64987&status=done&style=none&taskId=ua09decd4-f65c-4418-a986-9a6a0ea492e&title=&width=800)
## 2.实现标题栏样式
标题栏样式差不多如下，先实现右上角缩小、放大、关闭按钮功能。
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1686553526148-f60c5e29-f32a-4c36-ab93-35ec358c4705.png#averageHue=%232bce5c&clientId=u3f198bfd-f89a-4&from=paste&height=662&id=u1e3b314d&originHeight=827&originWidth=1337&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=30448&status=done&style=none&taskId=u2796ecca-2fd5-40c7-8464-609d200a148&title=&width=1069.6)
结构目录如下：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1686553760628-117c3708-28cd-4327-8eb2-2255d271f70e.png#averageHue=%231f1e1e&clientId=u3f198bfd-f89a-4&from=paste&height=523&id=u807dbe06&originHeight=654&originWidth=1099&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=88413&status=done&style=none&taskId=uc90780d4-765f-4196-b714-589be0b60f8&title=&width=879.2)
可以看到我是直接把各个页面放在App.vue文件里面了，想封装的自己封装，我这只为了实现功能和熟悉框架。
views目录下面的 TitleBar.vue 表示的是 标题栏的功能页面， SideBar.vue 表示的是侧边栏的功能页面， BottomBar.vue 表示的是底部播放栏的功能页面。这里我先把基本的结构给搭好，后面基本就是存业务操作，和electron相关的会重点记录下。
## 3.实现放大、缩小、关闭
部分功能可能后面会再优化和实现，先实现放大、缩小、关闭按钮功能。
### 3.1引入ipcRenderer
在渲染进程中引入ipcRenderer，注意这个时候需要安装个插件 node-polyfill-webpack-plugin 。
这是由于在webpack5中移除了nodejs核心模块的polyfill自动引入，所以需要手动引入。如果是用webpack4的小伙伴应该是不需要安装的，应该不会报错。
```javascript
npm install node-polyfill-webpack-plugin
```
在vue.conifg.js中进行配置：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1686555304519-82f373e1-fbd7-40a1-b18a-6ad444dca9b1.png#averageHue=%2320201f&clientId=u3f198bfd-f89a-4&from=paste&height=312&id=u02266fb2&originHeight=390&originWidth=752&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=36317&status=done&style=none&taskId=u97ee9014-e0ba-47d8-9fb9-aeb9d01d2e5&title=&width=601.6)
在 main.js 中引入 ipcRenderer：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1686555741860-a76fc6bc-7423-4408-bc91-b57e708bd6ef.png#averageHue=%2321201f&clientId=u3f198bfd-f89a-4&from=paste&height=221&id=ubb5cb860&originHeight=276&originWidth=765&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=24246&status=done&style=none&taskId=u2d7be979-1dc9-4eea-b119-ce6c1bd52da&title=&width=612)
注意在主入口 background.js 文件中要把node使用开启：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1686555823159-700ca8e0-4289-4fe6-a7f8-bdfe62e49775.png#averageHue=%23201f1f&clientId=u3f198bfd-f89a-4&from=paste&height=363&id=u6fed6c55&originHeight=454&originWidth=1254&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=68079&status=done&style=none&taskId=uf360a95b-d276-46f6-a9ae-0a0bb544d5b&title=&width=1003.2)
这样就引入成功了，如果有别的报错可能是别的原因。
ps：这里我是直接在渲染进程中就引入ipcRenderer，按照官方教程考虑安全性应该使用预加载脚本创建一个preload.js然后通过 contextBridge.exposeInMainWorld 抛出ipcRenderer的功能，但是这个方法我按照网上教程失败了，有了解的小伙伴可以告诉我下应该把preload.js文件放在哪里，我之前是放在public 目录下，但是没有生效，后面也没有继续尝试（后面我会继续研究下，除去安全性，确实进程间通信还是放在一个文件中好管理一下）。
### 3.2点击按钮进程间通信实现
因为渲染进程和主进程之间是隔离的，所以现在在渲染进程中的点击事件我需要通过ipcRenderer传递给主进程，在主进程中完成功能。
在 TitleBar.vue 文件下设置点击事件：
```javascript
<i class="iconfont icon-suoxiao1" @click="minimizeClick" title="最小化"></i>
<i v-show="isMaximize" class="iconfont icon-fangda1" @click="maximizeClick" title="最大化"></i>
<i v-show="!isMaximize" class="iconfont icon-suoxiao" @click="maximizeClick" title="向下还原"></i>
<i class="iconfont icon-guanbi1" @click="closeAppClick" title="关闭"></i>


 methods: {
    // 最小化
    minimizeClick() {
      window.ipcRenderer.send('minimize-window');
    },
    // 最大化
    maximizeClick() {
      window.ipcRenderer.send('maximize-window')
      this.isMaximize = !this.isMaximize
    },
    // 关闭
    closeAppClick() {
      window.ipcRenderer.send('close-app');
    }
  }
```
通过ipcRenderer.send()把点击事件发送给主进程监听。

在 background.js 文件中进行监听事件的发生，并进行事件的处理：
```javascript
import { app, protocol, BrowserWindow, ipcMain } from 'electron'

// 最小化
ipcMain.on('minimize-window', () => {
  const win = BrowserWindow.getFocusedWindow();
  if (win) {
    win.minimize();
  }
})

// 最大化
ipcMain.on('maximize-window', () => {
  const win = BrowserWindow.getFocusedWindow();
  if (win) {
    if (win.isMaximized()) {
      win.unmaximize(); // 如果窗口已经最大化，则还原窗口大小
    } else {
      win.maximize(); // 否则最大化窗口
    }
  }
})

// 关闭
ipcMain.on('close-app', () => {
  app.exit()
})
```
引入ipcMain，并通过ipcMain.on进行监听事件，然后进行事件处理。
这样就实现了应用放大、缩小、关闭的效果。
# 三、封装axios请求
## 1.安装axios
先安装aioxs：
```javascript
npm install axios
```
## 2.创建公共请求头
这边是本地跑后端环境，对vue.config.js中的代理服务器设置我就不开了，直接设定环境变量使用公共的url。
### 2.1创建.env.development文件
.env.development表示开发环境的配置。
设置公共请求头（请根据自己的实际后端端口号，默认把后端项目拉下来应该是3000端口）：
```javascript
# 接口公共部分
VUE_APP_BASE_URL = 'http://localhost:9080'
```
### 2.2创建.env.production文件
.env.production 表示生产环境的配置。
设置公共请求头（请根据自己的实际后端端口号，默认把后端项目拉下来应该是3000端口）：
```javascript
# 接口公共部分
VUE_APP_BASE_URL = 'http://localhost:9080'
```
## 3.安装js-cookie
### 3.1安装
安装 js-cookie 用于存储token。
```javascript
npm install js-cookie
```
### 3.2封装js-cookie
在src/utils 文件下创建 auth.js 用于封装 cookie的相关使用：
```javascript
import Cookies from "js-cookie";

const TokenKey = 'token'
// 获取token
export function getToken () {
  return Cookies.get(TokenKey)
}
// 设置token
export function setToken (token) {
  return Cookies.set(TokenKey, token)
}
// 移除token
export function removeToken () {
  return Cookies.remove(TokenKey)
}
```
## 4.安装element-plus
这里是用来做消息弹框。
```javascript
npm install element-plus --save
```
## 5.封装axios
在 src/utils 文件下新建 request.js 文件，用于封装axios。这里具体的封装方式就不具体写出来了，有兴趣自己看 request.js 文件。（主要是这个文件应该会不断改动，所以现在我也还不确定最后是怎么样）
## 6.创建api文件
封装完 axios 后在 src 下创建一个api文件，用于存储接口请求。
# 四、实现侧边栏
## 1.创建路由页面
思路：
1.1.在views文件下面创建路由页面，对应左边侧边栏的页面；
1.2.在router.js文件中写入页面路由。
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1686637451642-4e64f68a-31e5-48b9-a059-38c0831fe7b6.png#averageHue=%231f1e1e&clientId=ub4bba521-e93e-4&from=paste&height=622&id=u7e6e75fc&originHeight=778&originWidth=1134&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=98291&status=done&style=none&taskId=uba2a5ff1-f989-447b-8b1c-00cca82ceda&title=&width=907.2)
## 2.实现侧边栏样式
修改 views文件下的 SideBar.vue 文件样式，最终实现效果如下所示：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1686637164703-03d53f27-340a-4d4b-a7cf-f487615c50e4.png#averageHue=%2306f7e4&clientId=ub4bba521-e93e-4&from=paste&height=650&id=u59b2b830&originHeight=813&originWidth=1313&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=43795&status=done&style=none&taskId=u6f12ebc2-55d0-4f89-9b31-f035e8b47ef&title=&width=1050.4)
根据上面步骤创建的路由页面，实现点击的时候切换不同的页面，并设置样式。现在基本结构搭建好了，接下来就逐步写各个页面的接口和页面功能，丰富这个应用。
# 五、实现发现音乐
发现音乐页面还有6个子页面。如下所示：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1686641031604-0d574224-fddd-4b49-819d-99d57badc708.png#averageHue=%23f2f3f6&clientId=ub4bba521-e93e-4&from=paste&height=37&id=u3dc20590&originHeight=46&originWidth=618&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=4142&status=done&style=none&taskId=u11b5cea5-4952-439f-bd61-c29d5522c4b&title=&width=494.4)
所以要对路由和页面进行调整，思路：
1.给原本的/faxian路由后面添加上这6个子路由页面：
2.在/views/faxian文件下面创建一个children文件，用于存放子路由页面。
## 1.给/faxian添加子路由
```javascript
{
    path: '/faxian',
    name: 'faxian',
    title: '发现音乐',
    redirect: '/tuijian',
    component: FaXian,
    children: [{
      path: '/tuijian',
      title: '个性推荐',
      component: () => import('../views/faxian/children/tuijian.vue')
    },{
      path: '/playList',
      title: '歌单',
      component: () => import('../views/faxian/children/playlist.vue')
    },{
      path: '/dj',
      title: '主播电台',
      component: () => import('../views/faxian/children/dj.vue')
    },{
      path: '/rank',
      title: '排行榜',
      component: () => import('../views/faxian/children/rank.vue')
    },{
      path: '/artist',
      title: '歌手',
      component: () => import('../views/faxian/children/artist.vue')
    },{
      path: '/newSong',
      title: '最新音乐',
      component: () => import('../views/faxian/children/newSong.vue')
    }]
  },
```
注意：把原本的/faxian路由页面现在重定向到/tuijian路由页面，确保点击“发现音乐”的时候“个性推荐”能自动显示。
## 2.创建子路由页面
在/views/faxian文件下面创建children文件，用于存储子路由页面。
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1686641392093-42de8724-734b-43c3-b259-218bc67a5414.png#averageHue=%231c1b1a&clientId=ub4bba521-e93e-4&from=paste&height=282&id=uc73cccca&originHeight=352&originWidth=312&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=15033&status=done&style=none&taskId=uf8724136-35bd-47bb-a6a7-3c483810cdc&title=&width=249.6)
## 3.实现页面
安装 vue-lazyload 插件实现图片懒加载。
```javascript
$ npm i vue-lazyload -S
```
网站：  
[https://github.com/hilongjw/vue-lazyload/tree/next](https://github.com/hilongjw/vue-lazyload/tree/next)
剩下的页面就是实现发现的各个子页面（这部分就是css 和 html 没有什么逻辑比较简单就直接放上效果图，在实现的过程中发现有的接口参数可能不能用了，建议还是自己实际修改下，或者不调用）
**实现效果图：  **
个性推荐：  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1687325298362-7e624de7-87ac-4acc-8735-e43f1db860cc.png#averageHue=%23c1ae4d&clientId=u073cc503-5005-4&from=paste&height=650&id=ubd662cd6&originHeight=813&originWidth=1313&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=855532&status=done&style=none&taskId=u9f710065-caa6-4930-a1a4-56f558d2ab7&title=&width=1050.4)
歌单：  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1687325327051-eceb3bf2-7cb9-4783-8a4b-9b5cd46e718e.png#averageHue=%2389876d&clientId=u073cc503-5005-4&from=paste&height=650&id=u585fa78f&originHeight=813&originWidth=1313&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=748203&status=done&style=none&taskId=u02ed797e-5c32-45b4-b952-f998bdb87d7&title=&width=1050.4)主播电台：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1687325348667-9b2baca2-6fcd-4920-8933-d1728cc224be.png#averageHue=%23bcb89f&clientId=u073cc503-5005-4&from=paste&height=824&id=u16974cee&originHeight=1030&originWidth=1920&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=876028&status=done&style=none&taskId=u0a4b6da2-2501-491b-a828-2d288d06fe9&title=&width=1536)排行榜：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1687325367544-518e7aee-1344-4a67-a732-d1b82b204751.png#averageHue=%23f1e9d5&clientId=u073cc503-5005-4&from=paste&height=650&id=ufc871cb7&originHeight=813&originWidth=1313&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=154648&status=done&style=none&taskId=u4b54bec5-e988-4df8-807c-77d78e417b9&title=&width=1050.4)最新音乐：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1687325380493-73dab9bd-3970-4286-8131-b012ec5b3ef4.png#averageHue=%23b29d7e&clientId=u073cc503-5005-4&from=paste&height=650&id=uce47ddc2&originHeight=813&originWidth=1313&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=155600&status=done&style=none&taskId=ud087f76d-963a-4b68-8214-a0a0ea9d808&title=&width=1050.4)
这些页面点进入的歌单现在还没有实现，还有和播放关联的部分，后面再去实现功能。并且 `歌手`应该也是 `发现音乐`的子页面，但是实现的时候好像有BUG，就暂时放侧边栏了。
# 六、实现歌手页面
歌手页面原本是在发现音乐页面的子页面中的，现在单独放在侧边栏，所以调整下路由结构和文件结构。
## 创建歌手页面文件
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1687325756846-7325d294-bf18-4e34-9247-4e944490a07c.png#averageHue=%231e1d1c&clientId=u073cc503-5005-4&from=paste&height=221&id=ueee55c3a&originHeight=276&originWidth=414&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=14818&status=done&style=none&taskId=ubdf77466-51e4-42e5-b35a-a0a02421c64&title=&width=331.2)
## 添加路由
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1687325734495-97faea98-7976-4b63-8b36-4744af7110f4.png#averageHue=%23222120&clientId=u073cc503-5005-4&from=paste&height=590&id=u7fd003d3&originHeight=737&originWidth=787&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=60639&status=done&style=none&taskId=ue2223f7d-e974-45b4-bdd9-dc2c5204b02&title=&width=629.6)
## 实现页面
主要是实现样式效果，直接上实现完的效果页面：
歌手：  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1687329315135-3ab86b9d-48e7-4260-925d-1a073b106dbd.png#averageHue=%2392928c&clientId=u073cc503-5005-4&from=paste&height=650&id=ue8bfc291&originHeight=813&originWidth=1313&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=504712&status=done&style=none&taskId=u095ab65d-1d55-407f-a980-ebeae4e2fe1&title=&width=1050.4)
# 七、创建底边栏播放音乐
功能思路：
底边栏一般具有喜欢、列表循环、上一首/下一首、播放/暂停、显示/隐藏歌词、声音控制、播放列表。
这边主要就是播放列表的实现，把播放列表通过vuex进行全局管理。
## css样式实现
样式效果如下所示：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/36118313/1687674430024-6c7dc075-6d56-4e06-b6ef-5c772a8ded9e.png#averageHue=%23c5bba7&clientId=ueb052144-0a09-4&from=paste&height=650&id=u527b3ac3&originHeight=813&originWidth=1313&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=701042&status=done&style=none&taskId=u7ae21364-5226-4a84-8f73-e11db527eb5&title=&width=1050.4)   
现在基本的样式就已经完成了，剩下的就是实现功能。
## 功能实现
基本思路：
因为这边播放的歌曲是任何页面都会相关联的，所以把当前播放的歌曲就直接放在vuex中进行管理，把歌单也是直接放在vuex中进行管理。
# 更新
2023/06/26：后面这个项目不打算继续了写下去了，基本就是纯业务操作，花费时间有点大，所以打算暂停了，之后有时间再写吧。
