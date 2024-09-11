import{_ as s,o as a,c as n,O as o}from"./chunks/framework.59bec809.js";const u=JSON.parse('{"title":"渲染器设计","description":"","frontmatter":{},"headers":[],"relativePath":"editor/render.md","filePath":"editor/render.md","lastUpdated":1687343205000}'),l={name:"editor/render.md"},p=o(`<h1 id="渲染器设计" tabindex="-1">渲染器设计 <a class="header-anchor" href="#渲染器设计" aria-label="Permalink to &quot;渲染器设计&quot;">​</a></h1><p>渲染器主要包括搭建模式和渲染模式两部分, 接下来具体介绍一下.</p><h2 id="搭建模式" tabindex="-1">搭建模式 <a class="header-anchor" href="#搭建模式" aria-label="Permalink to &quot;搭建模式&quot;">​</a></h2><p>目前 <code>Dooring-Saas</code> 支持两种搭建模式:</p><ul><li>智能网格布局(二维空间排列, 空余空间自动补位)</li><li>自由布局(三维自由布局, 支持图层, 元素自由叠加)</li></ul><p>具体的实现模式可以参考私有化部署代码的:</p><ul><li>editor/src/core/viewRender.tsx</li></ul><h2 id="渲染模式" tabindex="-1">渲染模式 <a class="header-anchor" href="#渲染模式" aria-label="Permalink to &quot;渲染模式&quot;">​</a></h2><p><code>Dooring-Saas</code> 的组件均采用动态加载的方式来渲染, 也就是页面在渲染的时候, 组件是异步加载的, 这样可以提高首频屏渲染性能, 我们采用的 <code>import</code> 来实现, 具体的动态加载模式路径为:</p><ul><li>editor/src/DynamicEngine.tsx</li></ul><p><img src="http://h5.dooring.cn/doc/assets/img/dynamic.15a5303a.png" alt=""></p><p>对于每一个元素的位置, 我们采用如下结构来设计:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">point</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">w</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#F78C6C;">24</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">   </span><span style="color:#676E95;font-style:italic;">// 组件宽度</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">h</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#F78C6C;">30</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">   </span><span style="color:#676E95;font-style:italic;">// 组件高度</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">x</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">    </span><span style="color:#676E95;font-style:italic;">// x坐标</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">y</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#F78C6C;">26</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">   </span><span style="color:#676E95;font-style:italic;">// y坐标</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">i</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wb3d1LFIX3</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">// 组件id</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">moved</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">static</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">isBounded</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">: </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,13),e=[p];function t(c,r,F,y,i,D){return a(),n("div",null,e)}const C=s(l,[["render",t]]);export{u as __pageData,C as default};
