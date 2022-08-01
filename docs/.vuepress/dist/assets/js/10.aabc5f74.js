(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{398:function(t,a,v){t.exports=v.p+"assets/img/context.48f497fd.png"},418:function(t,a,v){"use strict";v.r(a);var n=v(56),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"执行上下文和作用域链"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文和作用域链"}},[t._v("#")]),t._v(" 执行上下文和作用域链")]),t._v(" "),n("h4",{attrs:{id:"什么是执行上下文"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是执行上下文"}},[t._v("#")]),t._v(" 什么是执行上下文")]),t._v(" "),n("p",[t._v("可理解为是当前代码的执行环境，同一个函数在不同的环境中执行，会因为访问数据的不同产生不一样的结果。")]),t._v(" "),n("p",[t._v("分为三种：全局执行上下文、函数执行上下文、Eval函数执行上下文")]),t._v(" "),n("h4",{attrs:{id:"执行上下文栈"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文栈"}},[t._v("#")]),t._v(" 执行上下文栈")]),t._v(" "),n("p",[t._v("what：执行上下文栈（Execution context stack，ECS），也叫函数调用栈(call stack)，是一种拥有LIFO（后进先出）数据结构的栈，用于存储代码执行时创建的执行上下文")]),t._v(" "),n("p",[t._v("why：由于JS是单线程的，每次只能做一件事情，通过这种机制，我们能够追踪到哪个函数正在执行，其他函数在调用栈中排队等待执行。")]),t._v(" "),n("p",[t._v("how：JS引擎第一次执行脚本时，会创建一个全局执行上下文压到栈顶，然后随着每次函数的调用都会创建一个新的执行上下文放入到栈顶中，随着函数执行完毕后被执行上下文栈顶弹出，直到回到全局的执行上下文中。")]),t._v(" "),n("h4",{attrs:{id:"作用域链"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#作用域链"}},[t._v("#")]),t._v(" 作用域链")]),t._v(" "),n("p",[t._v("对于 JavaScript来说作用域及作用域链的变量查询是通过存储在浏览器内存中的执行上下文实现的。当查找变量时，首先从当前上下文中的变量对象查找，如果没有就会往上查找父级作用域中的变量对象，最终找到全局上下文的变量对象，如果没有就报错。这样由多个执行上下文的变量对象构成的链表就叫做作用域链。")]),t._v(" "),n("h4",{attrs:{id:"作用域和执行上下文有什么区别呢"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#作用域和执行上下文有什么区别呢"}},[t._v("#")]),t._v(" 作用域和执行上下文有什么区别呢？")]),t._v(" "),n("ol",[n("li",[t._v("函数执行上下文是在调用函数时, 函数体代码执行之前创建，函数调用结束时就会自动释放。因为不同的调用可能有不同的参数（传参不同）")]),t._v(" "),n("li",[t._v("而JavaScript采用的是词法作用域，fn函数创建的作用域在函数定义时就已经确定了")]),t._v(" "),n("li",[t._v("作用域只是一个“地盘”，其中没有变量，要通过作用域对应的执行上下文环境来获取变量的值，所以作用域是静态观念的，而执行上下文环境是动态的。也就是说，作用域只是用于划分你在这个作用域里面定义的变量的有效范围，出了这个作用域就无效。\n同一个作用域下，对同一个函数的不同的调用会产生不同的执行上下文环境，继而产生不同的变量的值，所以，作用域中变量的值是在执行过程中确定的，而作用域是在函数创建时就确定的。")])]),t._v(" "),n("h3",{attrs:{id:"es5版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#es5版本"}},[t._v("#")]),t._v(" es5版本")]),t._v(" "),n("h4",{attrs:{id:"三个重要属性和阶段"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三个重要属性和阶段"}},[t._v("#")]),t._v(" 三个重要属性和阶段")]),t._v(" "),n("p",[t._v("this、作用域链、词法环境组件、变量环境组件")]),t._v(" "),n("p",[t._v("创建阶段 → 执行阶段 → 回收阶段")]),t._v(" "),n("ul",[n("li",[t._v("创建阶段\n"),n("ul",[n("li",[t._v("确定 this 的值")]),t._v(" "),n("li",[t._v("LexicalEnvironment（词法环境） 组件被创建")]),t._v(" "),n("li",[t._v("VariableEnvironment（变量环境） 组件被创建")])])]),t._v(" "),n("li",[t._v("执行阶段\n"),n("ul",[n("li",[t._v("变量赋值")]),t._v(" "),n("li",[t._v("函数的引用")]),t._v(" "),n("li",[t._v("执行其他代码")])])]),t._v(" "),n("li",[t._v("销毁阶段\n"),n("ul",[n("li",[t._v("一般来讲当函数执行完成后，当前执行上下文（局部环境）会被弹出执行上下文栈并且等待虚拟机回收，控制权被重新交给执行栈上一层的执行上下文。")])])])]),t._v(" "),n("h4",{attrs:{id:"创建阶段"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建阶段"}},[t._v("#")]),t._v(" 创建阶段")]),t._v(" "),n("ol",[n("li",[t._v("确定 this 的值，也被称为 This Binding")]),t._v(" "),n("li",[t._v("LexicalEnvironment（词法环境） 组件被创建")]),t._v(" "),n("li",[t._v("VariableEnvironment（变量环境） 组件被创建")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("ExecutionContext = {  \n  ThisBinding = <this value>,     // 确定this \n  LexicalEnvironment = { ... },   // 词法环境\n  VariableEnvironment = { ... },  // 变量环境\n}\n")])])]),n("h4",{attrs:{id:"词法环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#词法环境"}},[t._v("#")]),t._v(" 词法环境")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('GlobalExectionContext = {  // 全局执行上下文\n  LexicalEnvironment: {       // 词法环境\n    EnvironmentRecord: {     // 环境记录\n      Type: "Object",           // 全局环境\n      // 标识符绑定在这里 \n      outer: <null>           // 对外部环境的引用\n  }  \n}\n \nFunctionExectionContext = { // 函数执行上下文\n  LexicalEnvironment: {     // 词法环境\n    EnvironmentRecord: {    // 环境记录\n      Type: "Declarative",      // 函数环境\n      // 标识符绑定在这里      // 对外部环境的引用\n      outer: <Global or outer function environment reference>  \n  }  \n}\n\n')])])]),n("p",[t._v("可以看到词法环境有两种类型 👇：")]),t._v(" "),n("ul",[n("li",[t._v("全局环境：是一个没有外部环境的词法环境，其外部环境引用为 null。拥有一个全局对象（window对象）及其关联的方法和属性（例如数组方法）以及任何用户自定义的全局变量，this 的值指向这个全局对象。")]),t._v(" "),n("li",[t._v("函数环境：用户在函数中定义的变量被存储在环境记录中，包含了 arguments对象。对外部环境的引用可以是全局环境，也可以是包含内部函数的外部函数环境。")])]),t._v(" "),n("p",[t._v("词法环境有两个组件 👇：")]),t._v(" "),n("ul",[n("li",[t._v("环境记录器 ：存储变量和函数声明的实际位置。")]),t._v(" "),n("li",[t._v("外部环境的引用 ：它指向作用域链的下一个对象，可以访问其父级词法环境（作用域），作用与 es3 的作用域链相似")])]),t._v(" "),n("p",[t._v("环境记录器也有两种类型 👇：")]),t._v(" "),n("ul",[n("li",[t._v("在函数环境中使用 声明式环境记录器，用来存储变量、函数和参数。")]),t._v(" "),n("li",[t._v("在全局环境中使用 对象环境记录器，用来定义出现在全局上下文中的变量和函数的关系。")])]),t._v(" "),n("p",[t._v("🎉 因此：")]),t._v(" "),n("ul",[n("li",[t._v("创建全局上下文的词法环境使用 对象环境记录器 ,outer 值为 null;")]),t._v(" "),n("li",[t._v("创建函数上下文的词法环境时使用 声明式环境记录器 ,outer 值为全局对象，或者为父级词法环境（作用域）")])]),t._v(" "),n("h4",{attrs:{id:"变量环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#变量环境"}},[t._v("#")]),t._v(" 变量环境")]),t._v(" "),n("p",[t._v("变量环境也是一个词法环境，因此它具有上面定义的词法环境的所有属性。")]),t._v(" "),n("p",[t._v("在 ES6 中，词法环境和 变量环境的区别在于前者用于存储函数声明和变量（ let和const关键字）绑定，而后者仅用于存储变量（ var ）绑定，因此变量环境实现函数级作用域，通过词法环境在函数作用域的基础上实现块级作用域。")]),t._v(" "),n("p",[t._v("🚨 使用 let / const 声明的全局变量，会被绑定到 Script 对象而不是 Window 对象，不能以Window.xx 的形式使用；使用 var 声明的全局变量会被绑定到 Window 对象；使用 var / let / const 声明的局部变量都会被绑定到 Local 对象。注：Script 对象、Window 对象、Local 对象三者是平行并列关系。")]),t._v(" "),n("h4",{attrs:{id:"例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function foo(){\n  var a = 1\n  let b = 2\n  {\n    let b = 3\n    var c = 4\n    let d = 5\n    console.log(a)\n    console.log(b)\n  }\n  console.log(b) \n  console.log(c)\n  console.log(d)\n}   \nfoo()\n\n")])])]),n("ol",[n("li",[n("p",[t._v("调用 foo 函数前先编译并创建执行上下文，在编译阶段将 `var 声明的变量存放到变量环境中，let 声明的变量存放到词法环境中，需要注意的是此时在函数体内部块作用域中 let 声明的变量不会被存放到词法环境中")])]),t._v(" "),n("li",[n("p",[t._v("继续执行代码，当执行到代码块里面时，变量环境中的 a 的值已经被设置为1，词法环境中 b 的值已经被设置成了2，此时函数的执行上下文如图所示：\n"),n("img",{attrs:{src:v(398),alt:"context"}})]),t._v(" "),n("ul",[n("li",[t._v("从图中就可以看出，当进入函数的作用域块时，作用域块中通过 let 声明的变量，会被存放在词法环境的一个单独的区域中，这个区域中的变量并不影响作用域块外面的变量，因此示例中在函数体内块作用域中声明的变量的 b 与函数作用域中声明的变量 b 都是独立的存在。")]),t._v(" "),n("li",[t._v("在词法环境内部，实际上维护了一个小型栈结构，栈底是函数最外层的变量，进入一个作用域块后，就会把该作用域内部的变量压到栈顶；当该块级作用域执行完成之后，该作用域的信息就会从栈顶弹出，这就是词法环境的结构。")])])]),t._v(" "),n("li",[n("p",[t._v("当代码执行到作用域块中的 console.log(a) 时，就需要在词法环境和变量环境中查找变量 a 的值了，具体查找方式是：沿着词法环境的栈顶向下查询，如果在词法环境中的某个块中查找到了，就直接返回给 JavaScript 引擎，如果没有查找到，那么继续在变量环境中查找")])]),t._v(" "),n("li",[n("p",[t._v("当函数体内块作用域执行结束之后，其内部变量就会从词法环境的栈顶弹出")])]),t._v(" "),n("li",[n("p",[t._v("当foo函数执行完毕后执行栈将foo函数的执行上下文弹出。")])])]),t._v(" "),n("p",[t._v("所以，块级作用域就是通过词法环境的栈结构来实现的，而变量提升是通过变量环境来实现，通过这两者的结合，JavaScript 引擎也就同时支持了变量提升和块级作用域了。")]),t._v(" "),n("h3",{attrs:{id:"es3版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#es3版本"}},[t._v("#")]),t._v(" es3版本")]),t._v(" "),n("h4",{attrs:{id:"三个重要属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三个重要属性"}},[t._v("#")]),t._v(" 三个重要属性")]),t._v(" "),n("p",[t._v("可以将每个执行上下文抽象为一个对象")]),t._v(" "),n("ul",[n("li",[t._v("变量对象VO\n"),n("ul",[n("li",[t._v("是与上下文关联的数据作用域，用来存储上下文中定义的变量和函数声明")]),t._v(" "),n("li",[t._v("全局上下文中变量对象就是全局对象，在浏览器中就是window对象。")]),t._v(" "),n("li",[t._v("函数执行上下文中，用活动对象表示。变量对象是引擎实现的，js不能直接访问。当函数被调用时，变成活动对象我们才能访问。")])])]),t._v(" "),n("li",[t._v("作用域链[]")]),t._v(" "),n("li",[t._v("this")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("executionContextObj = {\n  scopeChain: { /* 变量对象（variableObject）+ 所有父执行上下文的变量对象*/ },\n  [variableObject | activationObject]: {\n    /*函数 arguments/参数，内部变量和函数声明 */\n    arguments,\n    ...\n  },\n  this: {}\n}\n")])])]),n("h4",{attrs:{id:"声明周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#声明周期"}},[t._v("#")]),t._v(" 声明周期")]),t._v(" "),n("ul",[n("li",[t._v("创建阶段\n"),n("ul",[n("li",[t._v("生成变量对象\n"),n("ul",[n("li",[t._v("创建arguments")]),t._v(" "),n("li",[t._v("扫描函数声明（重名函数覆盖）")]),t._v(" "),n("li",[t._v("扫描变量声明（如有重名函数，变量声明被忽略）")])])]),t._v(" "),n("li",[t._v("建立作用域链")]),t._v(" "),n("li",[t._v("确定this的指向\n"),n("ul",[n("li",[t._v("如果当前函数被作为对象方法调用或使用 bind、call、apply 等 API 进行委托调用，则将当前代码块的调用者信息（this value）存入当前执行上下文，否则默认为全局对象调用。")])])])])]),t._v(" "),n("li",[t._v("执行阶段")]),t._v(" "),n("li",[t._v("销毁阶段")])]),t._v(" "),n("h3",{attrs:{id:"了解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#了解"}},[t._v("#")]),t._v(" 了解")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://juejin.cn/post/6945240902625394718#heading-12",target:"_blank",rel:"noopener noreferrer"}},[t._v("执行上下文"),n("OutboundLink")],1),t._v("好文")])])}),[],!1,null,null,null);a.default=e.exports}}]);