gulp + webpack 多页打包

安装运行

clone 到本地 -> npm install ( 可以安装 (nrm || cnpm) 以加快资源加载速度 );

开发模式
 gulp dev

生产模式
 gulp build

注意:
 
插件: 
    "gulp-rev": "^8.1.1",

需要 `${url}？v=${version}` 模式

修改源码：

修改映射表中 属性值的格式：
打开node_modules\gulp-rev\index.js

```
第135行 manifest[originalFile] = revisionedFile;
修改为: manifest[originalFile] = originalFile + '?v=' + file.revHash;
```

修改生成文件的文件名（原来是将 hash 值加入到文件名中，现要文件名保持不变）：
打开node_modules\rev-path\index.js

```
第9行 return modifyFilename(pth, (filename, ext) => `${filename}-${hash}${ext}`);
修改为: return modifyFilename(pth, (filename, ext) => `${filename}${ext}`);
```



