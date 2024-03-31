TypeScript Vite Build React Component as Library Demo
===========================

vite build时默认需要index.html，作为网站build。

如果想build成一个component，需要手动在config中配置`build.lib`等信息。

如果导入了css文件，它会被单独编译成一个 `style.css`文件。

如果用了@emotion/css等，只会有js文件

另外，vite默认不支持生成typescript的.d.ts文件，需要使用 vite-plugin-dts 插件

```
npm install
npm run build
```
