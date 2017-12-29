## gulp + webpack 多页打包

安装运行

* clone 到本地 <br>
`npm install`

* 开发模式<br>
 `gulp dev`

* 生产模式<br>
 `gulp build`

> 注意:

##### 插件修改:

<!-- 需要 `${url}？v=${version}` -->

修改[gulp-rev](https://www.npmjs.com/package/gulp-rev)源码：

1. _<font face="微软雅黑">修改映射表中 属性值的格式：</font>_
打开`node_modules\gulp-rev\index.js`

    ```javascript
    // 第135行
        manifest[originalFile] = revisionedFile;
    // 修改为:
        manifest[originalFile] = originalFile + '?v=' + file.revHash;
    ```

2. _<font face="微软雅黑">修改生成文件的文件名（原来是将 hash 值加入到文件名中，现要文件名保持不变）：
打开`node_modules\rev-path\index.js`</font>_

    ```javascript
    // 第9行
        return modifyFilename(pth, (filename, ext) => `${filename}-${hash}${ext}`);
    // 修改为:
        return modifyFilename(pth, (filename, ext) => `${filename}${ext}`);
    ```
