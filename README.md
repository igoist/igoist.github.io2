# igoist.github.io2

个人 Blog 项目

## 部署 Deploy

```sh
npm i
```

<br />

## 几部分依赖 Dependencies
* babel -- babel-core、babel-loader、babel-preset-env、babel-preset-react
* eslint -- eslint、eslint-loader、eslint-plugin-react
* react 模块热加载 -- express、react-hot-loader、webpack-dev-middleware、webpack-hot-middleware
* scss 加载 sass-loader、node-sass、css-loader、style-loader
* img 加载 url-loader
* webpack 相关 -- webpack

<br />

## 文件结构 file structure
```
root
│  
├── dist (for output)
│   │  
│   ├── css
│   ├── img (hashed or just dir link)
│   └── js (bundle、uglify)
├── scripts (for build 构建时使用的脚本)
├── src
│   │  
│   ├── components
│   ├── img
│   ├── js
│   ├── sass
│   ├── index.html
│   ├── App.js
│   └── index.js
├── .babelrc
├── .editorconfig
├── .gitignore
├── .nvmrc
├── package.json
├── README.md
├── server.js
└── webpack.config.js (you can make a new webpack dir & custom by yourself)
```