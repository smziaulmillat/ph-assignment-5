## 🌟What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
#### Above all the things are from the **DOM** concept. That's mean by this four we can find different elements from _DOM TREE_ .There is a big difference between them.
- **getElementById**
 
 👉by **getElementById** we can find elements by _idname_. SO the id is always a unique name for any element. THat's why if we console it, we will get single element.
 > Example
 document.getElementById("Id")
- **getElementsByClassName**

 👉The main difference between **getElementById** and **getElementsByClassName** is in the _getElementById_ we need the elements id name but _getElementsByClassName_ we need class name and we all know that class is a group thing. So it will not give us a element it will give us a group of elements or **Array** **like** **object**.
 
  👉One of the thing about that is you have to do a **loop** for getting all the elements from **Array** **like** **object**

 > Example
 > ✔document.getElementsByClassName("class")
 > ✔for(const btn of copyBtns){}


- **querySelector**

👉By **querySelector** you can find a element by his own class name, id name, tag etc. But in the braket it uses the way naming *RAW CSS*.

👉You will get a single element same like **getElementById** but here you can give him a ✅class name, ✅id name, ✅tag etc .He will give you the first element ot that class name or id name or any tag you  give.
- **querySelectorAll**

👉By **querySelectorAll** you will find **Array** **like** **object** .But the main difference between   **querySelector** and **querySelectorAll** the first one will give you only  *one element* of the class or id but **querySelectorAll** will give you all the elements of the same class etc.
## 🌟How do you create and insert a new element into the DOM?

#### There is simple four steps for to remember how to do that 

##### **Step1**

👉First you have to find where you want to put 

> const container = document.getElementById('card-container');

##### **Step2**

👉Then you will create a new element like div etc

> const newDiv = document.createElement('div')

##### **Step3**

👉Now you have to set the **innerHTML** of the div 

>newDiv.innerHTML= ``

##### **Step4**

👉Last part is to just **appendChild** or in a simple language you have to push your new div 

>container.appendChild(newDiv);


## 🌟What is Event Bubbling and how does it work?

👉 **Event Bubbling** is related to events in javascript. Mainly it means it will go from the child element to parent element then it wil go to the grandparent in this way it will go upper and upper until it finds the document

👉And all the events works like that means it will do **Event Bubbling** first and there is two more steps 

👉The working pattern is simple it will go from the child to the document

>Example
> button → div → body → document

## 🌟What is Event Delegation in JavaScript? Why is it useful?

👉**Event Delegation** is also related to events in javascript. That means we will not give event to the every **child element** we will give it to the **parent element** straight. THe event will bubbles up so it works.

#### 🔹Why is it useful?

👉It is 100 percent is useful. Let's break down into points in below:-

1. **Saves memory**, you dont have use a lot of event listeners rather only in parent

2. Your **code will be more cleaner** and it will help you to explain if have a team to work with

3. The most imp. is that it will make you to **easily make a dynamic web**.


## 🌟What is the difference between preventDefault() and stopPropagation() methods?
