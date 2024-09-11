import{_ as e,o as a,c as t,O as r}from"./chunks/framework.59bec809.js";const u=JSON.parse('{"title":"预览模块设计与实现","description":"","frontmatter":{},"headers":[],"relativePath":"editor/preview.md","filePath":"editor/preview.md","lastUpdated":1687343205000}'),o={name:"editor/preview.md"},i=r('<h1 id="预览模块设计与实现" tabindex="-1">预览模块设计与实现 <a class="header-anchor" href="#预览模块设计与实现" aria-label="Permalink to &quot;预览模块设计与实现&quot;">​</a></h1><p><img src="https://basic.dooring.cn/saas/user/7e200e46-4976-44e4-8af9-7082871b6934/Fhc1WDqZeid2rt_laoDSCJyMdMQr.png?imageView2/0/format/webp/q/75" alt=""></p><p>预览模块分两部分:</p><ul><li>编辑器画布的实时预览</li><li>预览页面的预览</li></ul><h2 id="编辑器画布的实时预览" tabindex="-1">编辑器画布的实时预览 <a class="header-anchor" href="#编辑器画布的实时预览" aria-label="Permalink to &quot;编辑器画布的实时预览&quot;">​</a></h2><p>编辑器画布的实时预览依赖于一套数据共享机制, 这里我们采用 <code>dva</code> 来实现全局状态的管理, 具体路径:</p><ul><li>src/pages/editor/models</li></ul><p>我们可以在这里扩展编辑器项目的全局数据.</p><h2 id="预览页面的预览" tabindex="-1">预览页面的预览 <a class="header-anchor" href="#预览页面的预览" aria-label="Permalink to &quot;预览页面的预览&quot;">​</a></h2><p>预览页面的预览来自于 <code>entry</code> 入口功能, 这块在 文档的<a href="/doc/entry.html">全局入口</a> 模块会详细介绍.</p>',10),d=[i];function s(l,c,n,p,_,h){return a(),t("div",null,d)}const f=e(o,[["render",s]]);export{u as __pageData,f as default};
