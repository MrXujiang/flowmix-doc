import{_ as a,o as e,c as o,O as t}from"./chunks/framework.59bec809.js";const m=JSON.parse('{"title":"辅助设计","description":"","frontmatter":{},"headers":[],"relativePath":"editor/deal.md","filePath":"editor/deal.md","lastUpdated":1687343205000}'),i={name:"editor/deal.md"},p=t('<h1 id="辅助设计" tabindex="-1">辅助设计 <a class="header-anchor" href="#辅助设计" aria-label="Permalink to &quot;辅助设计&quot;">​</a></h1><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eb330e732c8f47ca9070b0f281652414~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>hello, 大家好, 我是徐小夕, 今天继续和大家分享有关 <code>Dooring低代码</code> 的技术实践, 我会从<strong>辅助设计</strong>的维度来和大家分享一下 <code>Dooring</code> 在这方面做的一些技术实践和展望.</p><p><code>H5-Dooring</code> 断断续续已经迭代了3个年头, 从UI设计,到组件物料, 再到搭建能力, 一直在不断更新,往更优的方案迈进, 致力于打造极致的用户体验. 接下来我分享的内容主要由以下几个方面组成:</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/39f4c4b23eeb4f94bf014b184f2b5e77~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><h2 id="_1-组件面板可定制" tabindex="-1">1. 组件面板可定制 <a class="header-anchor" href="#_1-组件面板可定制" aria-label="Permalink to &quot;1. 组件面板可定制&quot;">​</a></h2><p>传统的搭建系统组件面板基本是固定的, 如果后期组件逐渐增多, 对用户侧会造成一定的使用负担. 由于用户常用的组件数是有限的, 所以为了提高用户发现目标组件的效率, <code>H5-Dooring</code> 提供了组件定制面板, 用户可以自己定制常用的组件显示, 并支持组件搜索:</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1ce6748387c645918152e4af36940b35~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>同时编辑器支持组件搜索能力:</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5713f10ec8c24e5dbc5181e87e849d8c~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>通过这种方式, 我们可以把组件物料的选择权交给用户, 让用户有更多的自定义能力, 从而提高搭建幸福感.</p><h2 id="_2-画布辅助设计" tabindex="-1">2. 画布辅助设计 <a class="header-anchor" href="#_2-画布辅助设计" aria-label="Permalink to &quot;2. 画布辅助设计&quot;">​</a></h2><p>画布辅助设计主要是为了帮助用户更精准的进行页面搭建, 使得非技术人员也能做出专业的页面设计. 接下来分享一下 <code>Dooring</code> 在画布辅助上做的改进.</p><h3 id="_2-1-参考线设计" tabindex="-1">2.1 参考线设计 <a class="header-anchor" href="#_2-1-参考线设计" aria-label="Permalink to &quot;2.1 参考线设计&quot;">​</a></h3><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/df25620065474c9a8044ab8ab3dacec9~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>这块主要借鉴了老牌设计软件 <code>PhotoShop</code>, 我们可以便捷的在 <code>Dooring</code> 的标尺双击来生成参考线(包括<code>x</code>轴, <code>y</code>轴), 我们可以把参考线拖拽到画布任意位置, 来实现对元素定位的参考.</p><h3 id="_2-2-标尺设计" tabindex="-1">2.2 标尺设计 <a class="header-anchor" href="#_2-2-标尺设计" aria-label="Permalink to &quot;2.2 标尺设计&quot;">​</a></h3><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2cfc9f978af44cf0a40834e9e8f3172d~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>标尺设计主要是为辅助参考线, 进行更精准的参考线位置和布局的规划, 随着画布的缩放, 参考线也会等比例缩放, 保证和画布一致.</p><h3 id="_2-3-网格线设计" tabindex="-1">2.3 网格线设计 <a class="header-anchor" href="#_2-3-网格线设计" aria-label="Permalink to &quot;2.3 网格线设计&quot;">​</a></h3><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a077d0a152454af3adc38ebf369079f6~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>网格线的价值在于用户可以在非设计稿的情况下, 精准控制元素的位置, 比如对齐, 排列等, 我们可以通过<strong>网格布局(Dooring的设计哲学之一)</strong> 的搭建模式下更快速的布局和排版页面.</p><h3 id="_2-4-配色面板" tabindex="-1">2.4 配色面板 <a class="header-anchor" href="#_2-4-配色面板" aria-label="Permalink to &quot;2.4 配色面板&quot;">​</a></h3><p>在传统搭建平台里, 如果没有丰富的模版支持撑, 小白用户很难做出精致的页面, 包括设计元素, 包括色彩搭配等, 所以基于这样的背景, <code>Dooring</code> 引入了免费素材库和<strong>色彩搭配面板</strong>, 方便用户做页面设计参考:</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0c4c2e176b034b1593084fcece704605~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>素材库里列出了我们调研之后得出的的几个常用分类:</p><ul><li>商业素材</li><li>生活类素材</li><li>自然类素材</li><li>插画类素材</li></ul><p>配色方案目前提供了:</p><ul><li>传统色</li><li>低调色</li><li>渐变色</li><li>色彩通用搭配方案</li><li>卡其色</li></ul><p>用户可以参考配色方案搭建不同色彩风格的页面.</p><h2 id="_3-视图控件" tabindex="-1">3. 视图控件 <a class="header-anchor" href="#_3-视图控件" aria-label="Permalink to &quot;3. 视图控件&quot;">​</a></h2><p>视图控件主要是方便用户可以更快捷的调整画布和控制画布中的元素. 我们都知道一旦页面中的元素变多之后, 我们在查找组件或者调整页面结构的时候就会变得非常麻烦, 比如页面过长, 我们需要上滑动才能定位到指定位置, 再比如页面元素过多, 我们想快速找到某一个元素并调整, 这样变得非常困难, 所以 <code>Dooring</code> 基于这些痛点做了一些改进和优化.</p><h3 id="_3-1-尺寸控制" tabindex="-1">3.1 尺寸控制 <a class="header-anchor" href="#_3-1-尺寸控制" aria-label="Permalink to &quot;3.1 尺寸控制&quot;">​</a></h3><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c8619fafcaf54370927d87d0b0a93b0a~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>通过 <code>Dooring</code> 提供的画布控制面板, 我们可以快捷的切换画布大小, 或者通过手动输入<strong>自定义尺寸</strong>的方式来改变画布大小.</p><h3 id="_3-2-图层管理" tabindex="-1">3.2 图层管理 <a class="header-anchor" href="#_3-2-图层管理" aria-label="Permalink to &quot;3.2 图层管理&quot;">​</a></h3><p>为了解决上述分析的第二个问题, <code>Dooring</code> 设计了<strong>图层管理面板</strong>.</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5a8ef4cdaff48fba032fab70aecaf36~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>我们可以通过图层管理面板轻松的管理画布中的组件, 比如:</p><ul><li>显示/ 隐藏 组件</li><li>删除组件</li><li>调整组件排序(后期会迭代)</li></ul><p>当然后期也会提供更强大的图层面板.</p><h3 id="_3-3-快捷键支持" tabindex="-1">3.3 快捷键支持 <a class="header-anchor" href="#_3-3-快捷键支持" aria-label="Permalink to &quot;3.3 快捷键支持&quot;">​</a></h3><p>为了方便用户在画布中高效的创作, 快捷键是必不可少的, 所以 <code>Dooring</code> 也提供了快捷键的能力:</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/513465146287455cbc36b146b2a8ffeb~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>我们可以通过快捷键, 快速的实现复制, 删除, 粘贴图片等功能.</p><h2 id="_4-搭建模式的创新" tabindex="-1">4. 搭建模式的创新 <a class="header-anchor" href="#_4-搭建模式的创新" aria-label="Permalink to &quot;4. 搭建模式的创新&quot;">​</a></h2><p>传统搭建平台一般都是自由布局或者自然流布局, 搭建模式比较单一, 很难满足用户不同业务场景的搭建需求, 所以<code>Dooring</code> 在这方面做了一定的创新, 同时支持两种模式的搭建:</p><ul><li>自由布局</li><li>智能网格布局</li></ul><p>用户可以更新不同场景随意切换.</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/60e587112a944d76bf8e50598ab78c6b~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><h2 id="_5-有关智能设计的展望" tabindex="-1">5. 有关智能设计的展望 <a class="header-anchor" href="#_5-有关智能设计的展望" aria-label="Permalink to &quot;5. 有关智能设计的展望&quot;">​</a></h2><p>后期 <code>Dooring-Saas</code> 也会在智能化方向做一些努力, 比如无痕生成页面, 智能参数化生成模版等, 在搭建体验和搭建生态上也会持续完善, 如果你有更好的建议, 欢迎随时反馈~</p>',52),c=[p];function l(r,n,d,f,s,b){return e(),o("div",null,c)}const u=a(i,[["render",l]]);export{m as __pageData,u as default};
