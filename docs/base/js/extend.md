### 面向对象

#### 概念
面向对象的语言有一个标志，那就是都有类的概念，通过类可以创建任意多个具有相同属性和方法的对象。

#### 对象属性类型
ECMA中有两种属性：数据属性和访问器属性，是个给JS引擎使用的，不能直接访问，需要使用`object.defineProperty`操作 

数据属性有4个描述其行为的特性：[[Configurable]]（删除和改成访问器属性）、[[Enumerable]]、[[Writable]]、[[Value]]。使用字面量创建的默认是true。

访问器属性：[[Configurable]]、[[Enumerable]]、[[Get]]、[[Set]]。访问器属性不能直接定义，必须使用`object.defineProperty`定义

注意：一旦使用[[Configurable]]变成不可配置的，就不能变成可配置了的。

#### 创建对象的方式
- 创建一个对象({}、new Object())，然后用object.defineProperty或者.操作符定义属性
- 对象字面量语法
  
  ```
  const person = {
      name: 'yoyo',
      sayName: function() {
          console.log(this.name)
      }
  }
  ```
- 工厂模式：使用Object构造函数或对象字面量都可以创建单个对象，但会产生大量重复代码。
  
##### 1、工厂模式
优点：解决了创建多个相似对象的问题
缺点：没有解决对象识别的问题，instanceof 不可用

```
function createPerson(name, age) {
    const o = new Object();
    o.name = name;
    o.age = age;

    o.sayName = function() {
        console.log(this.name);
    }
    return o;
}

const person = createPerson('zhuzhu', 3);
```

##### 2、 构造函数模式
优点：解决了工厂模式对象识别问题，能使用instanceof(后几种都能使用)；没有显示创建对象
缺点：每个方法都要在每个实例上重新创建一遍；方法放全局能解决这一问题，但会污染全局环境

```
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function() {
        console.log(this.name);
    }
}

const person2 = new Person('zhuzhujing', 4);
```

补充：new 操作符的过程：
1. 创建一个新的对象
2. 将构造函数的作用域赋给新对象
3. 执行构造函数中的代码
4. 返回新对象

##### 3、 原型模式
优点：所有实例共享原型的属性和方法，不必在构造函数中定义对象实例的信息
缺点：所有实例在默认情况下取得相同的属性，需要实例覆盖；最大的问题是共享引用类型值的属性，尤其是数组。

补充：
1. prototype是通过调用构造函数而创建的对象实例的原型对象
只要创建一个函数，就会为函数创建一个prototype属性，这个属性指向函数的原型对象。原型对象会获得一个construct属性，包含指向构造函数的指针。
2. hasOwnProperty方法可检查属性是否在实例
3. in 无法区分在实例和原型
4. 注意原型对象能被覆盖

```
function Person() {

}

Person.prototype.name = 'zhuzhu';
Person.prototype.age = 23;
Person.prototype.sayName = function() {
    console.log(this.name);
}

const person1 = new Person();
person1.sayName();
```

##### 4、 组合使用构造函数和原型模式
优点：构造函数模式用于定义实例属性，而原型模式用于定义方法和共享的属性。每个实例有自己的一份实例属性的副本，又共享着对方法的引用。
缺点：暂无，所有信息没有都在构造函数中(可能不符合某些oo编程的习惯)

```
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.friends = ['hong', 'ming'];
}

Person.prototype = {
    constructor: Person,
    sayName: function () {
        console.log(this.name)
    }
}

const person1 = new Person('zhuzhu', 2);
```

##### 5、 动态原型模式
优点：把所有信息封装在构造函数中，仅在必要的情况下初始化原型，堪称完美
缺点：无
```
function Person(name, age) {
    this.name = name;
    this.age = age;
    if (typeof this.sayName != 'function') {
        Person.prototype.sayName = function () {
            console.log(this.name)
        }
    }
}

const person1 = new Person('zhuzhu', 2);
person1.sayName();
```

##### 6、 寄生构造函数模式
除了使用new 操作符，并把包装函数叫做构造函数外，这个模式跟工厂模式其实一模一样。
优点：在特殊情况下可以为对象创建构造函数，比如想要一个额外方法的数组，又不想直接修改Array构造函数
缺点：返回的对象跟构造函数或构造函数的原型之间没有关系，也就是说，构造函数返回的对象与在构造函数外部创建的函数没有什么不同。为此不能依赖instanceof 来确定对象类型。能使别的就用别的。

```
function Person(name, age) {
    const o = new Object();
    o.name = name;
    o.age = age;

    o.sayName = function() {
        console.log(this.name);
    }
    return o;
}
```
用途：

```
function SpecialArray() {
    const values = new Array();
    values.push.apply(values, arguments);

    values.toPipedString = function () {
        return this.join('|');
    }

    return values;
}

const colors = new SpecialArray('red', 'blue');
console.log(colors.toPipedString());
```

##### 7、 稳妥构造函数模式
优点：某些特殊情况使用，不使用this、new
缺点：与寄生构造函数类似，但不能使用instanceof

稳妥对象(durable objects)指没有公共属性，其方法也不引用this的对象，适合在安全环境中使用（禁用this、new），或者方式数据被其他应用程序改动时使用。

稳妥构造函数模式与寄生构造函数类似，但两点不同：1、新创建对象的实例方法不引用this，2、不使用new 调用构造函数

```
function Person(name, age) {
    const o = new Object();
    o.name = name;
    o.age = age;

    o.sayName = function() {
        console.log(name);
    }
    return o;
}

const person = Person('zhuzhu', 3);
person.sayName();

```

这样变量person中保存的就是一个稳妥对象，除了调用sayName方法外，没有别的方式访问其数据成员。即使有别的代码会给这个对象添加方法和属性，但是也不可能有别的办法访问：传入到构造函数中的原始数据。





#### 继承
继承是oo中的重要概念，一般都支持：接口继承和实现继承。接口继承只继承方法签名，实现继承则继承实际的方法。由于函数没有签名，则ECMAS无法实现接口继承，只支持实现继承。并且实现继承主要依靠原型链来实现。

##### 原型链
基本思想是利用原型让一个引用类型继承另一个引用类型的方法，重写原型对象。

构造函数、原型、实例的关系：每个构造函都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的指针

实现：让原型对象等于另一个类型的实例。此时的原型对象将包含一个指向另一个原型的指针，相应地，另一个原型中包含着一个指向另一个构造函数的指针。假如另一个原型又是另一个类型的实例，那么上述关系依旧成立。如此层层递进，构成了实例和原型的链条。这就是所谓的原型链的基本概念。

原型链搜索：当读取某个实例属性时，首先会在实例中搜索该属性，如果没有找到该属性，则会继续搜索实例的原型。

默认的原型：所有引用类型默认都继承了Object，而这个继承也是通过原型链实现的。所以所有函数的默认原型都是Object的实例，因此默认原型都会包含一个内部指针，指向Object.prototype，这也是所有自定义类型都会继承toString()、valueOf()等默认方法的根本原因。


确认原型和实例的关系：
instanceof - 实例和原型链中出现的构造函数 `person instanceof Object` 
isPrototypeof - 只要是原型链中出现过的原型 `Object.prototype.isPrototypeOf(person)` 

谨慎的定义方法：
- 重写超类中的某个方法，或者添加超类中不存在的方法。注意添加方法要放在替换原型的语句之后。重写后会发生屏蔽，但是超类的实例还是会调用旧方法。
- 使用原型链继承时，不能使用对象字面量创建原型方法。因为这样会重写原型链，切断和之前的联系。


##### 1、原型链继承

原型链的问题：
- 引用类型的问题：组合继承中，我们在构造函数中定义属性。在通过原型来继承时，原型变成了超类的实例，超类实例中的引用类型属性就变成了原型属性，会被所有子实例共享。
- 创建子类型的实例时，不能向超类型的构造函数中传递参数。

```
function SuperType() {
    this.name = 'super';
}

SuperType.prototype.getName = function() {
    return this.name;
}

function SubType() {
    this.subName = 'sub';
}

SubType.prototype = new SubType();
SubType.prototype.getSubName = function () {
    return this.subName;
}

const instance = new SubType();
console.log(instance.getSubName())
```

##### 2、借用构造函数
目的：为了解决原型中引用类型值所带来的问题，在子类构造函数内部调用超类构造函数。
优势：在子类行构造函数中向超类构造函数传递参数，解决原型中引用类型带来的问题。
问题：方法都在构造函数中定义，函数复用无从谈起。在超类型原型中定义的方法，对子类行也是不可见的，结果就是所有类型都只能使用构造函数模式。因为这种方式很少单独使用。

```
function SuperType(name) {
    this.name = name;
    this.color = ['red', 'blue'];
}

function SubType() {
    SuperType.call(this, 'zhuzhu');
    this.age = 20;
}

const instance = new SubType();
const instance1 = new SubType();
instance.color.push('green');
console.log(instance.color, instance1.color)
```

##### 3、组合继承
最常用的方式，结合原型链和借用构造函数，避免了二者的缺陷，融合了它们的优点。
缺点：超类构造函数会调用两次

```
function SuperType(name) {
    this.name = name;
    this.color = ['red', 'blue'];
}

SuperType.prototype.sayName = function() {
    console.log(this.name);
}

function SubType() {
    SuperType.call(this, 'zhuzhu');
    this.age = 20;
}

SubType.prototype = new SuperType();
SubType.prototype.sayAge = function() {
    console.log(this.age)
}

const instance = new SubType();
const instance1 = new SubType();
instance.color.push('green');
instance.sayName();
instance.sayAge();
console.log(instance.color, instance1.color)
```

##### 原型式继承
概念：借用原型可以基于已有的对象创建新对象，同时还不必因此创建自定义类型。
应用：在没有必要兴师动众地创建构造函数，只想让一个对象和另一个对象类似的情况下。
重点：引用类型值的属性都是中会共享相应的值，同原型模式。

```
function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}
```
先创建了一个临时性的构造函数，然后将传入的对象作为这个构造函数的原型，最后返回了这个临时类型的一个新实例。本质上讲，object()对传入的对象实现了浅复制。

```
const person = {
    name: 'pig',
    friends: ['zhu', 'mie']
}

const person1 = object(person);
const person2 = object(person);

person1.name = 'pig1';
person2.name = 'pig2';
person1.friends.push('ha');

console.log(person.friends, person2.friends, person1.name, person.name);
```

object可以用Object.create()替换。

##### 寄生式继承
概念：与原型式结合紧密。思路与寄生构造函数和工厂模式类似，即创建一个仅用于封装过程的函数，该函数在内部以某种方式增强对象，可以在内部增加自己的属性和方法。

重点：引用类型值的属性都是中会共享相应的值，同原型模式。

这个方式重点是，在构造函数中，增强实例，增加属于他的方法和属性。
object()可替换为任何能够返回新对象的函数。

```
function createAnother(o) {
    const clone = object(o);
    clone.sayHi = function () {
        console.log('hi')
    }
    return clone;
}

const another = createAnother(person);
another.sayHi();
another.friends.push('c');

console.log(another.friends, person.friends)
```

##### 寄生组合式继承
目的：为了解决组合继承的两次调用超类构造函数
最理想的

```
function SuperType(name) {
    this.name = name;
    this.color = ['red', 'blue'];
}

SuperType.prototype.sayName = function() {
    console.log(this.name);
}

function SubType() {
    SuperType.call(this, 'zhuzhu'); // 第二次调用超类
    this.age = 20;
}

SubType.prototype = new SuperType(); // 第一次调用超类
SubType.prototype.sayAge = function() {
    console.log(this.age)
}

const instance = new SubType();
const instance1 = new SubType();
instance.color.push('green');
instance.sayName();
instance.sayAge();
console.log(instance.color, instance1.color)
```

第一次调用超类构造函数时，子类型的原型会的到两个属性name和color，他们是超类的实例，只不过出现在子类的原型中。

当调用子类的构造函数时，又调用一次超类构造函数，这一次在新对象上创建了实例属性。于是实例上的属性就屏蔽了原型中的同名属性。因此其实存在两组属性，一组在原型，一组在实例。

解决：去掉第一次调用超类，不必为了指定子类型的原型而调用超类的构造函数，我们只是想要超类原型的一个副本而已。本质上，就是使用寄生式继承来继承超类型的原型，然后将结果指定给子类的原型。

```
function inheritPrototype(SubType, SuperType) {
    const prototype = object(SuperType.prototype); // 创建对象，获取副本
    prototype.constructor = SubType;// 增强对象，为副本增加constructor属性，弥补因重写原型而失去的默认的constructor属性
    SubType.prototype = prototype;// 指定对象
}
```

```
function SuperType(name) {
    this.name = name;
    this.color = ['red', 'blue'];
}

SuperType.prototype.sayName = function() {
    console.log(this.name);
}

function SubType() {
    SuperType.call(this, 'zhuzhu'); // 第二次调用超类
    this.age = 20;
}

inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function() {
    console.log(this.age)
}

const instance = new SubType();
const instance1 = new SubType();
instance.color.push('green');
instance.sayName();
instance.sayAge();
console.log(instance.color, instance1.color)
```