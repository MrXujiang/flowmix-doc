import{_ as a,o as e,c as t,O as p}from"./chunks/framework.59bec809.js";const h=JSON.parse('{"title":"数据源设计与实现","description":"","frontmatter":{},"headers":[],"relativePath":"editor/dataSource.md","filePath":"editor/dataSource.md","lastUpdated":1690107782000}'),s={name:"editor/dataSource.md"},o=p('<h1 id="数据源设计与实现" tabindex="-1">数据源设计与实现 <a class="header-anchor" href="#数据源设计与实现" aria-label="Permalink to &quot;数据源设计与实现&quot;">​</a></h1><p>什么是数据源呢? 我们的理解就是 <code>数据的来源</code>，是提供某种所需要数据的母体。在数据源中存储了所有建立数据库连接的信息, 通过提供正确的数据源名称，我们可以找到相应的数据资产。</p><p><img src="https://basic.dooring.cn/saas/user/7e200e46-4976-44e4-8af9-7082871b6934/FujqfzmMu2O3Pb3scYDqweiQnmIa.png?imageView2/0/format/webp/q/75" alt="image.png"></p><p>低代码的产物, 有纯静态的页面, 也有需要对接动态数据的动态页面, 低代码平台的数据源主要就是为动态页面(业务系统)设计的. 低代码平台使用人员可以选择或者创建<strong>数据源</strong>, <strong>变量</strong>, <strong>函数</strong>, <strong>自定义事件</strong>等来供页面和组件实现数据对接和页面交互, 通过这种方式可以进一步降低数据对接复杂度并提高研发效能.</p><p><img src="https://basic.dooring.cn/saas/user/7e200e46-4976-44e4-8af9-7082871b6934/FhsP5fSDpdIuch9qRqAaKp5A1HFP.png?imageView2/0/format/webp/q/75" alt="image.png"></p><p>对于数据源的设计, 根据实际的业务需求, 我们可以分为静态数据源和动态数据源. 静态数据源是用户可以通过可视化的方式在低代码平台上创建的, 比如编辑数据表格等.</p><p><img src="https://basic.dooring.cn/saas/user/7e200e46-4976-44e4-8af9-7082871b6934/Fvl4Cd5fpTCLLyDYK7ZB2AwKmpDN.png?imageView2/0/format/webp/q/75" alt="image.png"></p><p>动态数据源是指用户可以自定义的请求第三方的数据服务, 组件消费数据源完全是动态调用的, 类似于我们传统开发时使用的<code>ajax</code>请求.</p><p><img src="https://basic.dooring.cn/saas/user/7e200e46-4976-44e4-8af9-7082871b6934/Fg1MysJgae3niiG6zmMacP6TkTyd.png?imageView2/0/format/webp/q/75" alt="image.png"></p><p>基于以上的概念, 我来带大家介绍一下</p><p><code>Dooring-Saas</code>的数据源实现.</p><p>数据源编辑界面:</p><p><img src="https://basic.dooring.cn/saas/user/7e200e46-4976-44e4-8af9-7082871b6934/Fk5MSTVOTEbdjfnsbSufkBJgNu1o.png?imageView2/0/format/webp/q/75" alt="image.png"></p><p>首先<strong>Dooring</strong>的每个用户都有独立的数据源仓库, 可以配置不同的数据源供组件消费, 数据源会保存在对应的用户下, 用户可以让不同的页面/组件消费数据源.如下:</p><p>[数据源模式]</p><h3 id="_1-静态数据源实现" tabindex="-1">1. 静态数据源实现 <a class="header-anchor" href="#_1-静态数据源实现" aria-label="Permalink to &quot;1. 静态数据源实现&quot;">​</a></h3><p>静态数据源即用户在平台自己创建的数据源, 我们将此类数据源存放在公共状态中让组件消费, 比如<code>redux</code>或者<code>vuex</code>中, 同时对其进行数据库存储. 具体流程如下:</p><p><img src="https://basic.dooring.cn/saas/user/7e200e46-4976-44e4-8af9-7082871b6934/FiEgrh7Jyw5Opx84LaEIb2YT2Fzr.png?imageView2/0/format/webp/q/75" alt="image.png"></p><p>从代码层面, 我们只需要把从服务器获取的静态数据源, 存储到客户端全局状态中, 对于用户自己创建的数据源, 我们提供数据库的<code>CURD</code>操作即可. 如下图:</p><p><img src="https://basic.dooring.cn/saas/user/7e200e46-4976-44e4-8af9-7082871b6934/Fk5MSTVOTEbdjfnsbSufkBJgNu1o.png?imageView2/0/format/webp/q/75" alt="image.png"></p><h3 id="_2-动态数据源" tabindex="-1">2. 动态数据源 <a class="header-anchor" href="#_2-动态数据源" aria-label="Permalink to &quot;2. 动态数据源&quot;">​</a></h3><p>动态数据源设计需要一套组件数据协定, 需要约定第三方接口遵循低代码平台数据规范来返回数据, 后者手动通过编程的模式来对应字段和组件数据的映射关系.</p><p><img src="https://basic.dooring.cn/saas/user/7e200e46-4976-44e4-8af9-7082871b6934/Fo1ubkaRwx671rir0iJ6h-kUqRmt.png?imageView2/0/format/webp/q/75" alt="image.png"></p><p>具体方案类似于我在可视化组件中实现的第三方数据接入的方案:</p><p><img src="https://basic.dooring.cn/saas/user/7e200e46-4976-44e4-8af9-7082871b6934/FsJvRaXl_R9Kietaae3031z2hdBa.png?imageView2/0/format/webp/q/75" alt="image.png"></p><p>这样, 组件既可以消费静态数据, 也可以动态加载第三方数据, 进而实现了低代码动态页面的搭建.</p>',26),r=[o];function i(n,g,c,d,m,b){return e(),t("div",null,r)}const u=a(s,[["render",i]]);export{h as __pageData,u as default};
