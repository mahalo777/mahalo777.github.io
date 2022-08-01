(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{424:function(v,_,n){"use strict";n.r(_);var t=n(56),r=Object(t.a)({},(function(){var v=this,_=v.$createElement,n=v._self._c||_;return n("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[n("h3",{attrs:{id:"作用域重要概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#作用域重要概念"}},[v._v("#")]),v._v(" 作用域重要概念")]),v._v(" "),n("p",[n("strong",[v._v("为什么会有作用域？")])]),v._v(" "),n("p",[v._v("存储和访问变量的值的能力，将状态带给了程序，因此程序能执行复杂的任务。因此需要设计一套存储和查找变量的规则，这套规则就被称为作用域。")]),v._v(" "),n("p",[n("strong",[v._v("作用域的概念")])]),v._v(" "),n("p",[v._v("作用域是存储和查找变量的规则")]),v._v(" "),n("p",[n("strong",[v._v("词法作用域和动态作用域")])]),v._v(" "),n("p",[v._v("词法作用域和动态作用域是作用域的两种主要工作模型")]),v._v(" "),n("p",[v._v("词法作用域就是定义在词法阶段的作用域，由变量和块作用域写在哪里决定的。也就是说函数的作用域在函数定义的时候就决定了。")]),v._v(" "),n("p",[v._v("动态作用域是在函数调用的时候才决定的，是this的表亲。")]),v._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[v._v("var value = 1;\n\nfunction foo() {\n    console.log(value);\n}\n\nfunction bar() {\n    var value = 2;\n    foo();\n}\n\nbar();\n\n// 结果是 1\n")])])]),n("p",[n("strong",[v._v("作用域分类")])]),v._v(" "),n("p",[v._v("变量作用域可以分为：全局作用域，局部作用域（函数作用域），块作用域\n对应的变量分别称为：全局变量，局部变量，块级变量")]),v._v(" "),n("p",[v._v("全局作用域：默认\n局部作用域：函数\n块作用域：with、try catch、let与{}、const与{}")]),v._v(" "),n("p",[v._v("var：有全局作用域和函数作用域，没有块作用域，有变量提升。在全局声明时创建window 对象的属性；能重复声明\nlet、const：全局作用域、局部作用域、块作用域，有暂存性死区; let在for循环中每循环一次就会重新声明一次（因为let有块级作用域）")]),v._v(" "),n("p",[v._v("暂存性死区：")]),v._v(" "),n("p",[v._v("var的变量提升不同，通过 let 声明的变量直到它们的定义被执行时才初始化。在变量初始化前访问该变量会导致 "),n("code",[v._v("ReferenceError: Cannot access 'a' before initialization")]),v._v(" 。该变量处在一个自块顶部到初始化处理的“暂存死区”中。尽管 a 发生了变量提升，但是在初始化赋值前(before initialization)不允许读取。")]),v._v(" "),n("p",[n("strong",[v._v("提升")])]),v._v(" "),n("ol",[n("li",[v._v("函数和变量的声明，会在代码执行前被提前处理。具体是引擎在编译阶段就会找到这些声明，并用合适的作用域将他们关联起来。也就会说作用域和作用域链在编译阶段已经被处理好了。")]),v._v(" "),n("li",[v._v("函数会被优先提升，然后是变量。如果同名且函数声明在前，则同名变量会被视为重复声明，且忽略")]),v._v(" "),n("li",[v._v("函数表达式不会被提升")]),v._v(" "),n("li",[v._v("箭头函数没有自己的上下文，没有arguments，也不存在变量提升")])]),v._v(" "),n("p",[n("strong",[v._v("闭包")])]),v._v(" "),n("p",[v._v("能够访问其他函数内部变量的函数，被称为 闭包。")]),v._v(" "),n("p",[v._v("当函数记住并访问所在词法作用域时，即使在当前词法作用域外执行，就产生了闭包。")]),v._v(" "),n("p",[v._v("一个标准的闭包是：一组嵌套函数，内部函数访问了包装函数的变量等。然后内部函数的引用被return出去(或者SetTimeout，挂载在全局等)，在其他作用域被执行。")]),v._v(" "),n("p",[v._v("应用场景: 模拟私有属性或者静态变量、模拟模块化、柯里化、防抖和节流、Vue收集依赖")]),v._v(" "),n("p",[v._v("缺点: 早期浏览器垃圾回收机制采用引用计数的确会有这个问题(拓展现代浏览器的垃圾回收)、烧内存")]),v._v(" "),n("p",[n("strong",[v._v("作用域链")])]),v._v(" "),n("p",[v._v("当在Javascript中使用一个变量的时候，首先Javascript引擎会尝试在当前作用域下去寻找该变量，如果没找到，再到它的上层作用域寻找，以此类推直到找到该变量或是已经到了全局作用域")]),v._v(" "),n("h3",{attrs:{id:"其他概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其他概念"}},[v._v("#")]),v._v(" 其他概念")]),v._v(" "),n("p",[n("strong",[v._v("LHS RHS")])]),v._v(" "),n("p",[v._v("引擎查找变量的方式。RHS 是 retrieve his source value，可理解成赋值操作的源头。LHS即赋值操作的目标。")]),v._v(" "),n("p",[v._v("ReferenceError 同作用域判别失败相关。TypeError 则代表作用域判别成功了，但是对结果的操作是不合法的。")]),v._v(" "),n("p",[n("strong",[v._v("作用域嵌套")])]),v._v(" "),n("p",[v._v("当一个块或函数嵌套在另一个块或函数中时，就发生了作用域的嵌套")]),v._v(" "),n("p",[n("strong",[v._v("作用域屏蔽")])]),v._v(" "),n("p",[v._v("在多层嵌套作用域中，可以定义同名的标识符。但作用域查找会在找到第一个匹配的标识符时停止，这叫遮蔽效应。")]),v._v(" "),n("p",[v._v("访问被同名遮蔽的全局可以Window.a")]),v._v(" "),n("p",[n("strong",[v._v("欺骗词法")])]),v._v(" "),n("p",[v._v("词法作用域完全由函数所声明的位置来定义，但怎么进行修改或欺骗这种规则呢？")]),v._v(" "),n("p",[v._v("eval：传入一个包含声明的代码字符串，可以修改已经存在的词法作用域。\nwith：将一个对象的引用当做作用域处理，将对象的属性当做作用域的标识符处理，从而创建了一个新的词法作用域。")]),v._v(" "),n("p",[v._v("这两机制的副作用是引擎无法在编译时对作用域查找进行优化。")]),v._v(" "),n("p",[n("strong",[v._v("浏览器解析过程")])]),v._v(" "),n("ol",[n("li",[v._v("分词：scanner进行词法分析，将代码转成tokens")]),v._v(" "),n("li",[v._v("语法分析：Parser解释器将对tokens进行语法分析，并生成AST，同时验证语法错误，有错误则抛出。在此时生成了作用域。")]),v._v(" "),n("li",[v._v("生成字节码：Ignition将AST生成字节码，同时收集编译阶段需要的信息")]),v._v(" "),n("li",[v._v("编译：TurboFan将字节码生成汇编代码。Ignition + TurboFan 的组合，就是字节码解释器 + JIT 编译器的黄金组合「边解释边执行」。Ignition 收集大量的信息，交给 TurboFan 去优化，多方面条件都满足的情况下，会被优化成机器码。")])])])}),[],!1,null,null,null);_.default=r.exports}}]);