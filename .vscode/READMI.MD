 Answers to Questions

 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
    ANS:1.getElementById() selects one element by ID.
        2.getElementsByClassName() selects all elements with a class name.
        3.querySelector() selects the first matching CSS selector.
        4.querySelectorAll() selects all matching CSS selectors.

 2. How do you create and insert a new element into the DOM?
    ANS:Use document.createElement() to create an element and appendChild() to insert it into the  DOM.

    Example:

    const div = document.createElement("div");
    document.body.appendChild(div);

 3. What is Event Bubbling? And how does it work?
    ANS:Event Bubbling means an event starts from the target element and then moves upward through its parent elements.

 4. What is Event Delegation in JavaScript? Why is it useful?
    ANS:Event Delegation means adding one event listener to a parent element instead of multiple child elements.
    It is useful because it improves performance and works for dynamically added elements.

 5. What is the difference between preventDefault() and stopPropagation() methods?
    ANS:preventDefault() stops the browser’s default action.
        stopPropagation() stops the event from bubbling to parent elements.

