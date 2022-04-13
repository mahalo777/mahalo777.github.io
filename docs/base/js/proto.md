### 原型

#### 原型是什么
what：原型（prototype）是一个普通的对象，它为所有特定类型的实例共享了属性和方法，因此可以将这些信息直接添加到原型对象中而不必在构造函数中定义对象实例的信息

why：一切始于封装

#### 原型实现
![context](~@imgs/proto0.png)
- 在创建这个函数的时候，会根据特定规则为该函数创建一个prototype属性（指针）指向函数的原型对象。
- 将type和maxAge属性直接添加到了Person的prototype属性中
- 接着我们使用new调用构造函数Person创建了一个实例对象p，使p可以共享原型对象中的属性和方法
- 该实例的内部将包含一个指针（内部属性），ECMA-262 第 5 版中管这个指针叫[[Prototype]]。虽然在脚本中没有标准的方式访问[[Prototype]]，但 Firefox、Safari 和 Chrome 在每个对象上都支持一个属性__proto__,实际上，它是来自于Object.prototype


#### 原型链
当我们访问name属性的时候，引擎首先会先查找实例对象dog1中是否有定义，找到则返回该属性，否则引擎将通过__proto__属性继续搜索原型对象中是否有该属性。

如果原型对象中还没有，就会把当前得到的原型对象当作实例对象，继续通过它的__proto__属性去查找（原型的原型），向上追溯直到原型链末端__proto__为null为止。由相互关联的原型组成的链状结构就是原型链


#### 原型链实现
原型链的基本思路就是让原型对象等于另一个类型的实例。


```
function Animal() {
  this.type = 'animal';
}
Animal.prototype.getType = function () {
  return this.type;
};

function Dog() {
  this.name = 'dog';
}
Dog.prototype = new Animal();

Dog.prototype.bark = function () {
  console.log('Woof!');
};

var dog1 = new Dog();
dog1.getType(); // animal
dog1.__proto__ === Dog.prototype; // true
Dog.prototype.__proto__ === Animal.prototype; // true
Animal.prototype.__proto__ === Object.prototype; // true
Object.prototype.__proto__ === null; // true 

```

#### 补充
- ES6实际上为构造函数和原型使用了一种更简单的语法：类。语法糖。
- Object.create能创建无原型的对象
- Object原理

#### 注意理解概括
![context](~@imgs/proto1.png)

[原型基础](https://juejin.cn/post/6890710212803002376)

