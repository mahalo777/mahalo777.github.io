(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{424:function(a,v,t){"use strict";t.r(v);var _=t(56),r=Object(_.a)({},(function(){var a=this,v=a.$createElement,t=a._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"js语言基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js语言基础"}},[a._v("#")]),a._v(" JS语言基础")]),a._v(" "),t("p",[a._v("本文主要介绍编译、解释型语言，js是什么类型的语言，JIT")]),a._v(" "),t("h2",{attrs:{id:"js是什么类型的语言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js是什么类型的语言"}},[a._v("#")]),a._v(" JS是什么类型的语言")]),a._v(" "),t("blockquote",[t("p",[a._v("MDN：JavaScript ( JS ) 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。")])]),a._v(" "),t("p",[a._v("从对 JavaScript 编译的疑问开始，我们就像拿到了一块拼图中的零片一样，寻找着附近的拼图零片，希望能将这些碎片一块块地拼在一起。")]),a._v(" "),t("p",[a._v("最终拼出的这块拼图不仅解答了开始的疑惑，更让人意外的是，它还将不同的知识点连接在了一起。")]),a._v(" "),t("h3",{attrs:{id:"编译型语言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译型语言"}},[a._v("#")]),a._v(" 编译型语言")]),a._v(" "),t("p",[a._v("高级语言->汇编语言->机器语言")]),a._v(" "),t("p",[a._v("代码在执行前需要预编译，转换成机器语言，运行时直接使用编译结果即可。")]),a._v(" "),t("p",[a._v("特点：")]),a._v(" "),t("ul",[t("li",[a._v("在编译过程中，会进行代码优化")]),a._v(" "),t("li",[a._v("编译后执行速度快，相比解释型对系统要求低")]),a._v(" "),t("li",[a._v("有专门的编译器")]),a._v(" "),t("li",[a._v("跨平台性不好\n"),t("ul",[t("li",[a._v("例如：比如c语言针对不同系统，需要编译成不同的机器语言(如windows编译成ext文件，linux编译成erp文件)，多个平台若多个版本，将非常难以维护。")])])])]),a._v(" "),t("h3",{attrs:{id:"解释型语言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解释型语言"}},[a._v("#")]),a._v(" 解释型语言")]),a._v(" "),t("p",[a._v("代码在执行前不需要预先编译，在运行时必须先解释再执行。")]),a._v(" "),t("p",[a._v("特点：")]),a._v(" "),t("ul",[t("li",[a._v("在编译过程中，可能有优化但是较少")]),a._v(" "),t("li",[a._v("执行一次就要编译一次，速度较慢，效率比较低（JIT）")]),a._v(" "),t("li",[a._v("有专门的解释器：在源代码执行时被翻译成平台无关的中间代码，解释器会把这些代码翻译成机器语言")]),a._v(" "),t("li",[a._v("跨平台好\n"),t("ul",[t("li",[a._v("例如Java首先通过编译器编译成class文件，如果在windows平台上运行，将通过该平台的JVM进行解释，同理linux。所以说能跨平台，前提是平台上有匹配的JVM或者说是解释器。")])])])]),a._v(" "),t("h3",{attrs:{id:"各有利弊"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#各有利弊"}},[a._v("#")]),a._v(" 各有利弊")]),a._v(" "),t("p",[a._v("对执行速度快，要求低的如操作系统，大型应用程序等，一般采用编译型语言。\n对执行速度要求不高，平台兼容性高的程序，一般采用解释性语言，如Java、JS、PY")]),a._v(" "),t("h3",{attrs:{id:"争端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#争端"}},[a._v("#")]),a._v(" 争端")]),a._v(" "),t("p",[a._v("对于JS的归属，一直都有争议：")]),a._v(" "),t("blockquote",[t("p",[a._v("JavaScript ( JS ) 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言 - MDN\n尽管通常将 JavaScript 归类为“动态”或“解释执行”语言，但事实上它是一门编译语言。- 你不知道的JS上")])]),a._v(" "),t("p",[a._v("可以理解《你不知道的JS》的定论，因为JS的编译过程和传统的编译过程类似。\n那么应该如何解释以下质疑：")]),a._v(" "),t("ol",[t("li",[a._v("如果 JS 是解释型语言那为什么会有变量提升（hoisting）？")]),a._v(" "),t("li",[a._v("JIT（及时编译）会做代码优化(同时创建代码的编译版本)；解释型语言是无法做到这些的")])]),a._v(" "),t("p",[a._v("解释：")]),a._v(" "),t("ol",[t("li",[a._v("变量提升不是代码修改。在这个过程中没有生成中间代码。变量提升只是 JS 解释器处理事情的方式")]),a._v(" "),t("li",[a._v("JavaScript 代码需要在机器（node 或者浏览器）上安装一个工具（JS 引擎）才能执行。这是解释型语言需要的。编译型语言程序能够自由地直接运行。")]),a._v(" "),t("li",[a._v("JIT 是唯一一点我们可以对 JavaScript 是否是一个解释型语言提出疑问的理由。但是 JIT 不是完整的编译器，它在执行前进行编译。而且 JIT 只是 Mozilla 和 Google 的开发人员为了提升浏览器性能才引入的。JavaScript 或 TC39 从来没有强制要求使用 JIT。")])]),a._v(" "),t("h2",{attrs:{id:"如何理解现在的-javascript-语言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何理解现在的-javascript-语言"}},[a._v("#")]),a._v(" 如何理解现在的 JavaScript 语言？")]),a._v(" "),t("p",[a._v("V8 引擎执行 JavaScript 代码的过程更像是编译型和解释型的结合体。那么如何理解以这种方式运行的 JavaScript 语言？")]),a._v(" "),t("p",[a._v("现在的 JavaScript 语言，并不是一行一行的解释执行，也不是全部编译后再执行。")]),a._v(" "),t("p",[a._v("大概的流程是，先编译当前必须的代码并执行，然后再去编译下一步必须的代码再执行。比如，一个函数是在用户点击某个按钮时才会运行，那么在用户点击按钮之前这个函数就不会被编译执行。(参考V8的全量解析/预解析，只会对立即执行的代码全量解析，生成AST和作用域；对非立即执行的生成作用域，等要执行的时候再编译)")]),a._v(" "),t("p",[a._v("所以，现在的 JavaScript 语言就像是不停地重复编译-执行流程的编译型语言。")]),a._v(" "),t("p",[a._v("我们就能回答"),t("a",{attrs:{href:"https://www.zhihu.com/question/381924902",target:"_blank",rel:"noopener noreferrer"}},[a._v("JavaScript在执行时是边编译边执行还是将整个脚本文件编译完成后执行？"),t("OutboundLink")],1),a._v("这个问题了，可以看下第二个高赞回复验证。")]),a._v(" "),t("h2",{attrs:{id:"jit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jit"}},[a._v("#")]),a._v(" JIT")]),a._v(" "),t("h3",{attrs:{id:"基础概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础概念"}},[a._v("#")]),a._v(" 基础概念")]),a._v(" "),t("p",[a._v("JIT（Just In Time）编译器：是指程序逻辑以代码（或字节码）形式下发到目标机（如客户端）上，在系统即将运行此逻辑的前一刻，目标机系统上的编译器才将这些代码编译成机器指令，然后再交给系统执行。因为它的编译发生成运行前一刻，刚刚能赶得上执行，所以叫做Just In Time编译器.")]),a._v(" "),t("h3",{attrs:{id:"与解释器进行区分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#与解释器进行区分"}},[a._v("#")]),a._v(" 与解释器进行区分")]),a._v(" "),t("p",[a._v("谈到JIT，经常有同学把它与解释器（Interpreter）混淆，下面首先看一下这两个概念的区别：\n虚拟机执行一段程序，一般有两种方式：解释执行和先编译再执行。")]),a._v(" "),t("ol",[t("li",[a._v("解释执行：虚拟机读取程序字节码，取出其中的“虚拟机指令”，由解释器逐条进行解释执行")])]),a._v(" "),t("p",[a._v("“虚拟机指令”可以理解为一种DSL（Domain Specific Language），它作为一种领域专用数据结构，包含了虚拟机运行程序所需的所有数据信息（如：操作符、操作数等）")]),a._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[a._v("先编译再执行，根据编译的时机不同，又可以分为AOT和JIT：\n"),t("ul",[t("li",[t("p",[a._v("AOT：Ahead of Time，即开发者先将程序编译成机器码，再将由机器码构成的二进制程序下发到客户端运行。")]),a._v(" "),t("ul",[t("li",[a._v("JavaScriptCore目前不支持AOT")]),a._v(" "),t("li",[a._v("一个支持AOT的虚拟机的例子是Dart VM，它可以执行事先编译成机器码的Dart程序。")])])]),a._v(" "),t("li",[t("p",[a._v("JIT：Just in Time，虚拟机读取程序字节码，在真正运行代码逻辑前，先将他们编译成“机器指令”序列，再执行这些机器指令")]),a._v(" "),t("ul",[t("li",[a._v("JIT编译后，待运行的方法就已经是机器指令了")]),a._v(" "),t("li",[a._v("一般对于比较“热”的方法可以在运行时动态调整JIT的级别，根据调用现场情况开启相应的优化")])])])])])]),a._v(" "),t("h3",{attrs:{id:"结合js引擎理解jit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结合js引擎理解jit"}},[a._v("#")]),a._v(" 结合JS引擎理解JIT")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("在 V8 出现之前，所有的 JavaScript 虚拟机所采用的都是解释执行的方式，这是 JavaScript 执行速度过慢的一个主要原因。")])]),a._v(" "),t("li",[t("p",[a._v("而 V8 率先引入了即时编译（JIT）的双轮驱动的设计（混合使用编译器和解释器的技术），这是一种权衡策略，混合编译执行和解释执行这两种手段，给 JavaScript 的执行速度带来了极大的提升。")])]),a._v(" "),t("li",[t("p",[a._v("V8 出现之后，各大厂商也都在自己的 JavaScript 虚拟机中引入了 JIT 机制，所以目前市面上 JavaScript 虚拟机都有着类似的架构。另外，V8 也是早于其他虚拟机引入了惰性编译、内联缓存、隐藏类等机制，进一步优化了 JavaScript 代码的编译执行效率。")])]),a._v(" "),t("li",[t("p",[a._v("JIT编译器（Just-In-Time Compiler）是负责将字节码转换为本地机器代码的组件。在优化编译阶段，JIT编译器会生成与特定硬件架构兼容的机器代码。")])])]),a._v(" "),t("p",[a._v("执行优化后的代码： 生成的优化后的机器代码被保存起来，并在后续的执行中直接使用，而不再需要解释器。这提高了热点代码的执行速度。")]),a._v(" "),t("p",[a._v("总体而言，V8的JIT机制通过动态地识别和优化频繁执行的代码，将其转换为本地机器代码，从而提高 JavaScript 代码的执行效率。")]),a._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/601871778",target:"_blank",rel:"noopener noreferrer"}},[a._v("为什么说 JavaScript 更像一门编译型语言"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.cn/post/6890187786045882375",target:"_blank",rel:"noopener noreferrer"}},[a._v("初识 JavaScriptCore JIT"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=r.exports}}]);