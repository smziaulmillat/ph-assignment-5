### What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
#### Above all the things are from the **DOM** concept. That's mean by this four we can find different elements from _DOM TREE_ .There is a big difference between them.
- **getElementById**
 👉by **getElementById** we can find elements by _idname_. SO the id is always a unique name for any element. THat's why if we console it, we will get single element.
 > Example
 document.getElementById("Id")
- **getElementsByClassName**
 👉The main difference between **getElementById** and **getElementsByClassName** is in the _getElementById_ we need the elements id name but _getElementsByClassName_ we need class name and we all know that class is a group thing. So it will not give us a element it will give us a group of elements or **Array** **like** **object**.
  👉One of the thing about that is you have to do a **loop** for getting all the elements from **Array** **like** **object**
 > Example
 ✔document.getElementsByClassName("class")
 ✔for(const btn of copyBtns){}


- **querySelector**
👉By **querySelector** you can find a element by his own class name, id name, tag etc. But in the braket it uses the way naming *RAW CSS*.
👉You will get a single element same like **getElementById** but here you can give him a ✅class name, ✅id name, ✅tag etc .He will give you the first element ot that class name or id name or any tag you  give.
- **querySelectorAll**
👉
### How do you create and insert a new element into the DOM?
### What is Event Bubbling and how does it work?
### What is Event Delegation in JavaScript? Why is it useful?

### What is the difference between preventDefault() and stopPropagation() methods?
