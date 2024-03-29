
## 执行上下文和作用域链

## 写在前面
由于网上文章杂乱，要注意ES版本。这里理解思路，并不纠结具体实现和版本更替。互联网上的文章，新，但不全，甚至不新。要注意分辨。

感觉JS解析和执行流程还是比较黑盒的，不像JVM，浏览器厂商就很多。再加上厂商实现效果可能和ES标准一致，但具体实现方法可能并不与规范一致。


## 概念

### 作用域
JS是词法作用域，词法作用域就是定义在词法阶段的作用域，由变量和块作用域写在哪里决定的。也就是说函数的作用域在函数定义的时候就决定了。

具体的，函数在创建的时候(预解析阶段)，会保存父级的所有变量对象指针到[[scope]] 属性中。注: 函数的 [[scope]] 属性并不是作用域链，详见下面说明。现代浏览器用内部属性是[[Scopes]]。ES本旧书一个规范，具体浏览器会实现效果，但内部结构、参数可能不同，所以是不是一个东西不纠结了。


### 执行上下文
当 Javascript 代码在运行的时候，它都是在执行上下文中运行。可理解为是当前代码的执行环境，且同一个函数在不同的环境中执行，会因为访问数据的不同产生不一样的结果。

分为三种：全局执行上下文、函数执行上下文、Eval函数执行上下文


### 执行上下文栈
what：执行上下文栈（Execution context stack，ECS），也叫函数调用栈(call stack)，是一种拥有LIFO（后进先出）数据结构的栈，用于存储代码执行时创建的执行上下文

why：由于JS是单线程的，每次只能做一件事情，通过这种机制，我们能够追踪到哪个函数正在执行，其他函数在调用栈中排队等待执行。保证了函数的调用顺序正确。

how：JS引擎第一次执行脚本时，会创建一个全局执行上下文压到栈顶，然后随着每次函数的调用都会创建一个新的执行上下文放入到栈顶中，随着函数执行完毕后被执行上下文栈顶弹出，直到回到全局的执行上下文中


### 作用域链
对于 JavaScript来说作用域及作用域链的**变量查询**是通过存储在浏览器内存中的执行上下文实现的。当查找变量时，首先从当前上下文中的变量对象查找，如果没有就会往上查找父级作用域中的变量对象，最终找到全局上下文的变量对象，如果没有就报错。这样由多个执行上下文的变量对象构成的链表就叫做作用域链。（LHS&RHS？）


## 执行上下文具体内容

### ES3 ES5 ES2018(ES9)版本变迁

- 执行上下文在 ES3 中，包含三个部分。
  - scope：作用域链
  - variable object：变量对象
  - this value：this 
- 在 ES5 增加了词法环境：
  - lexical environment：词法环境，存储函数声明和使用 let const 关键字绑定的变量，以此来实现函数级作用域
  - variable environment：存储 var 声明的变量
  - this value：this 值。
  - 词法/变量环境包含两部分：
    - 环境记录：存储变量和函数声明的实际位置
    - 对外部环境的引用：它指向作用域链的下一个对象，可以访问其父级词法环境（作用域），作用与 es3 的作用域链相似， scope -> outer
- 在 ES2018 this被归入词法环境，同时增加了新内容：
  - lexical environment
  - variable environment
  - code evaluation state：用于恢复代码执行位置。
  - Function：执行的任务是函数时使用，表示正在被执行的函数。
  - ScriptOrModule：执行的任务是脚本或者模块时使用，表示正在被执行的代码。
  - Realm：使用的基础库和内置对象实例。
  - Generator：仅生成器上下文有这个属性，表示当前生成器。
  - 

### ES3
对于 ES3 中的执行上下文，我们可以用下面这个列表来概括程序执行的整个过程：

1. 函数被调用
2. 在执行具体的函数代码之前，创建了执行上下文
3. 进入执行上下文的创建阶段：
    - 初始化作用域链
    - 创建 arguments object 检查上下文中的参数，初始化名称和值并创建引用副本
扫描上下文找到所有函数声明：

        - 对于每个找到的函数，用它们的原生函数名，在变量对象中创建一个属性，该属性里存放的是一个指向实际内存地址的指针
        - 如果函数名称已经存在了，属性的引用指针将会被覆盖

    - 扫描上下文找到所有 var 的变量声明：

        - 对于每个找到的变量声明，用它们的原生变量名，在变量对象中创建一个属性，并且使用 undefined 来初始化
        - 如果变量名作为属性在变量对象中已存在，则不做任何处理并接着扫描


4. 确定 this 值
5. 进入执行上下文的执行阶段：
    在上下文中运行/解释函数代码，并在代码逐行执行时分配变量值。



### ES5

对于 ES5 中的执行上下文，我们可以用下面这个列表来概括程序执行的整个过程：
1. 程序启动，全局上下文被创建
    -  创建全局上下文的 词法环境
        - 创建 对象环境记录器 ，它用来定义出现在 全局上下文 中的变量和函数的关系（负责处理 let 和 const 定义的变量）
        - 创建 外部环境引用，值为 null
    - 创建全局上下文的 变量环境
        - 创建 对象环境记录器，它持有 变量声明语句 在执行上下文中创建的绑定关系（负责处理 var 定义的变量，初始值为 undefined 造成声明提升）
        - 创建 外部环境引用，值为 null
    - 确定 this 值为全局对象（以浏览器为例，就是 window ）
2. 函数被调用，函数上下文被创建 
      - 创建函数上下文的 词法环境
         - 创建 声明式环境记录器 ，存储变量、函数和参数，它包含了一个传递给函数的 arguments 对象（此对象存储索引和参数的映射）和传递给函数的参数的 length。（负责处理 let 和 const 定义的变量）
         - 创建 外部环境引用，值为全局对象，或者为父级词法环境（作用域）
      - 创建函数上下文的 变量环境
        - 创建 声明式环境记录器 ，存储变量、函数和参数，它包含了一个传递给函数的 arguments 对象（此对象存储索引和参数的映射）和传递给函数的参数的 length。（负责处理 var 定义的变量，初始值为 undefined 造成声明提升）
        - 创建 外部环境引用，值为全局对象，或者为父级词法环境（作用域）
      - 确定 this 值
3. 进入函数执行上下文的执行阶段： 
  在上下文中运行/解释函数代码，并在代码逐行执行时分配变量值。


#### 执行过程
- [简版执行上下文创建过程](https://www.cnblogs.com/MomentYY/p/15785719.html)
- [傻傻分不清之作用域/执行上下文](https://caraws.github.io/2022/03/21/%E5%82%BB%E5%82%BB%E5%88%86%E4%B8%8D%E6%B8%85%E4%B9%8B%E4%BD%9C%E7%94%A8%E5%9F%9F-%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87/)
- [框架很好](https://juejin.cn/post/6956827007296471070#heading-6)
- [两个版本执行过程参考](https://juejin.cn/post/6844904158957404167#heading-12)
- [上下文的函数案例很好](https://juejin.cn/post/6945240902625394718#heading-2)
