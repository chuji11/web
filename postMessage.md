# window.postMessage() 解决跨域通讯

targetWindow.postMessage('message',)

## 同源策略

### 什么是源？


- 源=协议+域名+端口号。

> 如果两个url的协议、域名、端口号完全一致，那么这两个url就是同源的。
> 我们可以通过window.origin或location.origin得到当前源。

- 什么是同源策略？

**同源策略即**：不同源之间的页面，不准互相访问数据。



