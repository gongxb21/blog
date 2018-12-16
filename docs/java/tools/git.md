# git

## 安装 git

- brew install git mac 使用 brew 安装 git
- git --version 查看 git 版本
- git config --global user.name 配置用户名
- git config --global user.email 配置用户邮箱

## git 常用命令

- git init 初始化 git
- git status //查看当前分支有哪些修改
- git log //查看当前分支上面的日志信息
- git add . 把目录下的文件全部添加
- git commit -m “你的注释”
- git remote add origin https:/xxxxxx 项目地址
- git push -u origin master
- git branch -r/-a //查看远程分支/全部分支
- git checkout master/branch //切换到某个分支
- git checkout -b test //新建 test 分支
- git checkout -d test //删除 test 分支
- git clone 把远端的代码拉取到本地
- git merge master //假设当前在 test 分支上面，把 master 分支上的修改同步到 test 分支上
- git blame someFile //查看某个文件的每一行的修改记录（）谁在什么时候修改的）
- git diff //查看当前没有 add 的内容
- git diff --cache //查看已经 add 但是没有 commit 的内容
- git diff HEAD //上面两个内容的合并
- git reset --hard HEAD //撤销本地修改
- git pull 拉取所有分支的代码
