# 介绍与备忘 README
不必于此再论存档的重要性。有些规则需要注意：
* 目前最多每日一次<code>git commit</code>，提交时以 "Daily for year.mm.dd" 打头



## 内容 Contents
* log_bytw.md -> By the way，顾名思义
* log_joke.md -> 起源于看到一句 "'works on my machine' bugs"
* log_life.md -> 简短的生活、心情小记，相当于说说
* log_link.md -> 主要是保存看过的一些文章的链接，跟 'task' 或 'tech' 中可能会重复，以示强调重要
* log_read.md -> 阅读，书单之后再考虑
* log_task.md -> 给自己布置的任务，迟早都得打上勾（不能再像以前那样丢三落四🙄）
* log_tech.md -> 谈工作，谈学习
* log_word.md -> 存档说说、签名、'bio'
* ...log...md -> 一如 '...'，eh，我也不晓得干什么，就留做存档吧
（发现无论在 Sublime 还是 Atom 等非 Markdown 编辑器上所显示对齐效果与网页有出入，还是优先考虑编辑器）

## 格式
非 list 与 task list 情况下，换行似乎没有其他好的办法：
* 句尾加两空格并回车，类似<code>br</code>标签效果，而空格在 Sublime 下容易被自动去除
* 直接使用<code>p</code>标签
相关测试记录：
* 自定义<code>style</code>在 github 上无效，显然是其 markdown.js 在处理时做了 ignore 处理，忽略<code>style</code>，不保留其他<code>tag</code>上的<code>class</code>等属性



### 时间
不去搞事情了，按自己国人的标准来，年月日，如：'2017.05.25'


### 标题
从记录时间起，一般都用<code>h3</code>："###"


### 标点
<p>中文句中除了引号，都统一用中文，凡有问题，见到随时修改</p>
<p>翻译的英文句子中都按英文标点来</p>
<p>虽说<code>JS</code>的什么现在都用单引号''</p>
<p>讲道理不该拘泥于这种小节的，但还是为了统一，这边写记录句子用双引号<code>"</code>，名词性或反正单个的单词都用<code>'</code>，(英文标点)</p>


### 间隔
每一条之后的换行占用 *2* 行