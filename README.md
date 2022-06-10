# TypeScript

慕课网 TypeScript 课程

课程使用的 secret 值为 secretKey

node版本 12.13

npm i typeScript@3.6.4 -g
tsc 文件名
node 运行编译后的文件
比较麻烦 全局安装
npm i -g ts-node@8.4.1
ts-node 文件名

在ts中能用接口定义就用接口，实在不行就用别名
？ 代表可有可无
readonly name: string; 只读

"scripts": {
"dev:build": "tsc -w",
"dev:start": "nodemon node build/crowller.js", // 监控 只有有变化就去执行命令
"dev": "concurrently npm:dev:*",
"build": "tsc"
},
需要同时执行 dev:build、dev:start命令
"run": "concurrently npm run dev:build &npm run dev:start"
"dev": "concurrently npm:dev:*"
run dev 相当于上面的两个命令

// 忽略文件的变化
"nodemonConfig": {
"ignore": [
"data/*"
]
},

tsc --init 初始化typeScript项目
npm init -y

tsc demo.ts 命令不会走ts.config.json
只有运行 tsc 命令时才会用到ts.config.json 



