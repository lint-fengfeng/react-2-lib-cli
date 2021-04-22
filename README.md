## 1. 安装
```bash
npm i -g xdfmini
```
## 2. 用处

- 一键生成可直接发布的组件库（详见组件库文档[https://uwiki.yuque.com/ucanseal/rxxzb6/dxsrba](https://uwiki.yuque.com/ucanseal/rxxzb6/dxsrba)）
- 替换package名称，author名，description
- 安装依赖
- 进度条、变色、询问
## 3. 相关指令

- 查看指令
```bash
xdfmini 
# Usage: project <command> [options]
# Options:
# -v, --version   output the version number
# -h, --help      display help for command
# Commands:
# init [name]     create project
# help [command]  display help for command
```

- 查看版本
```bash
xdfmini -v
```

- 生成项目
```bash
xdfmini init # 询问输入组件库名称
xdfmini init [name] # 直接输入组件库名称
```


