# wxw-delay-click
防止元素被重复点击

### 安装
```
npm install wxw-delay-click --save
```

### 引入方法
在入口文件中,例如 main.js 引入

```
import wxwDelayClick from 'wxw-delay-click'
Vue.use(wxwDelayClick)
```
### 使用
在所需要防止连续点击的元素上添加指令 v-delayClick

```
<button v-delayClick='{func:functionName, time: 2000, params:[a,b,c]}'>登录</button>
```
### 参数说明
- **func**: 方法名 (必填)
- **time**: 两次点击延迟的时间 (可选) 默认1000毫秒
- **params**: 方法的参数, 需要数组形式, 例如[a,b,c], (可选)





