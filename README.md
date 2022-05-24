# Vite_exercise

通过学习 Vite 构建工程化

> 静态资源在生产环境下的处理

- 部署域名怎么配置？

- 资源打包成单文件还是作为 Base64 格式？

  1. Vite 中内置的优化方案是下面这样的:

  - 如果静态资源体积 >= 4KB，则提取成单独的文件
  - 如果静态资源体积 < 4KB，则作为 base64 格式的字符串内联

  2. build.assetsInlineLimit 自行配置

- 图片太大，怎样进行压缩？

  1.  相对于 webpack 的 image-webpack-loader ，vite 社区提供了 vite-plugin-imagemin

- svg 请求数量太多，怎样优化？

  1.  svg 不同于 img 始终会被打包成一个文件，因为他需要动态的设置一些属性
  2.  雪碧图优化
