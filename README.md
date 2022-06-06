# Vite_exercise

> Vite 是如何站在巨人肩膀实现的？
>
> ​	Vite双引擎架构：**Esbuild 和 Rollup **，
>
> ​	Esbuild 作为构建的性能利器，Vite 利用其 Bundler 的功能进行依赖预构建，用其 Transformer 的能力进行 TS 和 JSX 文件的转译，也用到它的压缩能力进行 JS 和 CSS 代码的压缩。
>
> ​	在 Vite 当中，无论是插件机制、还是底层的打包手段，都基于 Rollup 来实现，可以说 Vite 是对于 Rollup 一种场景化的深度扩展，将 Rollup 从传统的 JS 库打包场景扩展至完整 Web 应用打包。

**通过学习 Vite 构建工程化**

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
