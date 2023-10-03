# do javascript really have classes



## javascript is a prototype-based language
Yes, JavaScript has a class syntax introduced in ECMAScript 2015 (ES6) that provides a way to define and work with classes. However, it's important to note that JavaScript's class syntax is syntactic sugar over its existing prototype-based inheritance system. JavaScript classes are a more convenient and familiar way for developers coming from class-based languages like Java or C++ to work with objects and inheritance in JavaScript.

Here's an example of how you can define a class in JavaScript:

```javascript

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}
```

```
const cat = new Animal('Fluffy');
cat.speak(); // Output: Fluffy makes a sound.
In the code above, Animal is a class, and cat is an instance of that class. The constructor method is called when an instance is created, and you can define methods on the class, like speak, which can be called on instances of the class.

```
Under the hood, JavaScript's class syntax still relies on prototypes for inheritance. When you create a subclass or use the extends keyword, you are essentially setting up prototype chains. Here's an example:

```javascript

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}
```
```
const dog = new Dog('Buddy', 'Golden Retriever');
dog.speak(); // Output: Buddy barks.
While JavaScript classes offer a more structured way to work with objects and inheritance, it's important to remember that they are built on top of JavaScript's prototypal inheritance system. Underneath the class syntax, JavaScript is still a prototype-based language.
```



# OOP
It is programming paradiam i.e. structure of code that we write , we can also say Style
 
## object
- collection of properties and methods

## parts od OOP
- Object literal

- Constructor function
- Prototypes
- Classes
- Instances (new , this)

## 4 pillars of OOP
- Abstraction
- Encapsulation
- Inheritance
- Polymorphism