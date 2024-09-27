git的三个区域 工作区，暂存区，版本库

工作区的内容保存到暂存区，版本库记录从暂存区提交的版本号

![image-20240810171420951](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240810171420951.png)

三个区域总结

![image-20240810172011525](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240810172011525.png)

git 文件状态

U未跟踪，A新添加，”“未修改，M已修改

第一列是暂存区，第二列是工作区

假如文件在工作区修改，没有用add添加到暂存区

用git status -s 就会显示该文件AM（已存入的前提下）

![image-20240810173105630](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240810173105630.png)

```vue
Git常用命令集合 单引号只是为了修饰 无实际意义
git -v //查看版本号
git init //初始化本地仓库

//文件操作
git add 文件标识
git add . //添加所有文件到暂存区
git commit -m '说明注释' //暂存区的文件添加到版本库
git ls-files //查看暂存区的文件
git status //查看详细信息
git status -s //查看暂存区的文件状态 查看简略信息 第一列是暂存区状态，第二列是工作区状态
git restore /文件 //将修改过的文件恢复到修改之前的状态
git rm -cached /文件 //将文件从暂存区删除，变成未跟踪状态
git log --oneline //查看当前版本库提交过的历史记录
git reflog --oneline //查看完整日志--简略消息 

//切换版本系列
git reset --hard '版本号' //恢复到指定的版本号 工作区和暂存区不保留
git reset --soft '版本号' //恢复到指定的版本号 工作区和暂存区都保留
git reset --mixed '版本号' //恢复到指定的版本号 暂存区不保留，工作区保留

//创建分支系列
git branch '分支名'	//新增分支
git checkout -b '分支件' //选择分支
git checkout -b //创建并立刻切换分支
git merge '分支名' //合并分支
git branch -d '分支名' //删除分支
git branch //查看现有分支
```

git 回退版本

![image-20240810190042656](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240810190042656.png)

删除文件操作

![image-20240810192744141](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240810192744141.png)

忽略文件操作 忽略掉不需要记录的文件，可以使git仓库更小更快。 

![image-20240810193304749](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240810193304749.png)

git 分支的概念 ：为了同时进行项目的编写不占用master，可以用来维修bug，开辟分支修改bug，修改完善之后再汇入主干

使用场景：开发新需求/修复bug，保证主线代码随时可用，多人协同开发提高效率

![image-20240810210155154](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240810210155154.png)

创建分支的命令 

![image-20240810210120827](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240810210120827.png)

```

```

新需求解决方案：给谁修改，就在原来的基础上增加分支。先指回master，再新建login-bug分支

![image-20240810212125204](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240810212125204.png)



分支合并 先切回要合并的分支上，然后输入命令合并，最后删除合并的分支

#### 所有分支进行合并的时候，git会自动进行ort的合并策略

![image-20240810212928821](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240810212928821.png)



合并冲突

![image-20240810215545594](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240810215545594.png)	

git 远程管理

```vue
git remote add origin  https://gitee.com/aichikaoya5889/git_study.git
git remote add 仓库别名 仓库地址 //添加远程仓库地址
git remote -v //查看远程仓库地址
git remote remove origin //删除远程仓库地址
git pull 远程仓库别名 分支名 //获取仓库最新数据
git push 远程仓库别名 分支名 //推送仓库最新数据
git push -u master //推送版本到git 上 需要验证账号密码
git pull --rebase 远程仓库别名 分支名 //拉取合并
git clone 远程仓库地址 //克隆
```

git 远程仓库常用命令

![image-20240812115542144](C:\Users\Small Zhou\AppData\Roaming\Typora\typora-user-images\image-20240812115542144.png)