(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{403:function(t,r,e){t.exports=e.p+"assets/img/unjs1.a30cffa6.png"},404:function(t,r,e){t.exports=e.p+"assets/img/v83.084d00d0.png"},405:function(t,r,e){t.exports=e.p+"assets/img/v84.0ea66b6e.jpeg"},421:function(t,r,e){"use strict";e.r(r);var s=e(56),n=Object(s.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("记录神经现场～～～～")]),t._v(" "),s("h3",{attrs:{id:"神经初期-所谓的预编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#神经初期-所谓的预编译"}},[t._v("#")]),t._v(" 神经初期（所谓的预编译）")]),t._v(" "),s("p",[s("img",{attrs:{src:e(403),alt:"ujs1"}})]),t._v(" "),s("p",[s("strong",[t._v("读到1我有了一个疑问，所以这是变量提升吗？那么变量提升是在编译阶段吗？")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("于是我们开始查询资料，看看有没有详细的说明。"),s("a",{attrs:{href:"https://mengsixing.github.io/blog/js-principle.html#%E7%BC%96%E8%AF%91%E8%BF%87%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS 编译器，解释引擎 | 前端日志 (mengsixing.github.io)"),s("OutboundLink")],1),t._v(" 这文章讲：生成机器码后才开始预编译和变量提升。咦这跟书对不上。这个很离谱。")])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000013126460",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript到底是解释型语言还是编译型语言? - SegmentFault 思否"),s("OutboundLink")],1),t._v(" ，读完：分词和AST不是编译器的工作吗，当然说是引擎也没啥问题，毕竟调度都是引擎的工作。这个和书上讲的类似：在AST->生成机器码之间的某个过程，发生了预编译和变量提升。翻译的文章就权威了？？？")])])]),t._v(" "),s("p",[t._v("我们查了很多文章，都只是说了："),s("em",[s("strong",[t._v("在真正执行代码"),s("strong",[s("strong",[t._v("前")])]),t._v("，会有预编译阶段，这个阶段收集变量声明。")])]),t._v(" "),s("em",[s("strong",[t._v("那么这个阶段对应到v8哪个步骤呢？是这个中间过程，所谓的“预编译”？？")])])]),t._v(" "),s("p",[t._v("于是我们再查资料，我们开始探索V8。")]),t._v(" "),s("h3",{attrs:{id:"神经中期-确认阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#神经中期-确认阶段"}},[t._v("#")]),t._v(" 神经中期（确认阶段）")]),t._v(" "),s("p",[t._v("于是我们开始新的探索；")]),t._v(" "),s("ul",[s("li",[t._v("阶段1：搜索预解析，pre-parser莫名搜到了惰性解析，莫名学习了一波，甚至直接看的英文文章")]),t._v(" "),s("li",[t._v("阶段2：从某个文章开始看图解V8，"),s("strong",[t._v("图解V8说：解析器解析过程会生成AST和作用域，确认作用域阶段会发生变量提升。我开始确认是生成AST阶段。")])]),t._v(" "),s("li",[t._v("阶段3：然后搜索生成AST和作用域的先后？然后知道了预解析和全解析，预解析有些文章说不生成AST，有些说生成**，但是他们都生成作用域，好耶！！！！**")]),t._v(" "),s("li",[t._v("阶段4："),s("a",{attrs:{href:"https://segmentfault.com/q/1010000038371425?sort=newest",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://segmentfault.com/q/1010000038371425?sort=newest"),s("OutboundLink")],1),t._v(" ？图解V8说的不对吗？？\n"),s("ul",[s("li",[t._v("结合："),s("a",{attrs:{href:"https://hungryturbo.com/pages/fa7f62/#%E8%A7%A3%E6%9E%90%E5%99%A8-parser",target:"_blank",rel:"noopener noreferrer"}},[t._v("教女朋友学前端之深入理解JS引擎 | 童欧巴博客 (hungryturbo.com)"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("花钱买了！"),s("a",{attrs:{href:"https://xiaozhuanlan.com/topic/1946507283",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://xiaozhuanlan.com/topic/1946507283"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("抓狂😫：是生成了执行上下文，还是作用域？？")])])])]),t._v(" "),s("p",[s("strong",[t._v("终于我的得出了结论，全文重点⬇️")]),t._v("：")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("在懒惰解析生成AST的过程，会发生两种解析：预解析与全量解析。")])]),t._v(" "),s("li",[s("strong",[t._v("遇到不立即执行的函数，就进行预解析，从而生成 AST，会产生不带有变量引用和声明的 scopes 信息（这项工作由 Pre-Parser 预解析器完成）")])]),t._v(" "),s("li",[s("strong",[t._v("遇到立即执行的函数，或者被调用的函数，进行全量解析，生成AST和作用域信息（也可以理解为是执行上下文的创建阶段）")])])]),t._v(" "),s("p",[s("strong",[t._v("至此说服了自己，变量提升和作用域确定发生在生成AST阶段")]),t._v("。见补图小小论证。")]),t._v(" "),s("h3",{attrs:{id:"神经晚期-回顾总结阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#神经晚期-回顾总结阶段"}},[t._v("#")]),t._v(" 神经晚期（回顾总结阶段）")]),t._v(" "),s("p",[t._v("开始回归书本，虽然这段话没指明是那个阶段，但是我们知道是生成机器码前的某个阶段。\n38页也很好的说明了，"),s("strong",[t._v("编译阶段中的一部分工作就是找到所有变量声明，并用合适的作用域将他们关联起来。")]),t._v("\n我们迷惑的点在于：**是生成AST阶段呢，还是在执行机器码之前的所谓“预编译”？**这本书写时，应该没有V8，应该也没过度追究细节。我们自己知道因为时间和发展原因，大概有2种理解就好。⬇️⬇️")]),t._v(" "),s("p",[t._v("至此，我的结论是："),s("strong",[t._v("变量提升发生在生成AST阶段，这个阶段确定了作用域信息")]),t._v("。如果以后的面试官说：在AST->执行代码之间的预编译阶段，我只能勉强的同意了。")]),t._v(" "),s("h3",{attrs:{id:"神经衰弱-个人总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#神经衰弱-个人总结"}},[t._v("#")]),t._v(" 神经衰弱（个人总结）")]),t._v(" "),s("p",[t._v("在查资料的过程中，一直在论证学习。很多文章写的不一定是对的，他只是抄的。如果我直接看V8文档就不用怀疑真假了吧.......\n这个过程和记录这个过程花了很长时间(大概2天)，以后尽量避免这种牛角尖。")]),t._v(" "),s("p",[s("strong",[t._v("终于我说服了部分自己！！！！")])]),t._v(" "),s("p",[s("strong",[s("em",[t._v("另外：中文博客就是互相抄。")])])]),t._v(" "),s("p",[s("strong",[s("em",[t._v("需要补充学习：执行上下文。")])])]),t._v(" "),s("h3",{attrs:{id:"补充图解v8"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#补充图解v8"}},[t._v("#")]),t._v(" 补充图解V8")]),t._v(" "),s("p",[s("img",{attrs:{src:e(404),alt:"v83"}}),t._v(" "),s("img",{attrs:{src:e(405),alt:"v84"}})])])}),[],!1,null,null,null);r.default=n.exports}}]);