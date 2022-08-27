console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"

document.getElementById("node1").innerHTML = "I used the getElementId method('node1') to access this";

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
document.getElementsByClassName("node2")[0].textContent = "I used the getElementByClassName method('node2') to access this";

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */

let hElements = document.getElementsByTagName("h3");
for (let ele of hElements) {
    ele.textContent = "I used the getElementByTagName('h3') method to access all of these"
}


/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"

let newElement = document.createElement("p");
newElement.textContent = "This node was created using the createElement() method"

// TODO: Append the created node to the parent node using the element.appendChild() method

let parent = document.getElementById("parent");
parent.appendChild(newElement);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"

let newATag = document.createElement("a");
newATag.textContent = "I am an <a> tag";
parent.appendChild(newATag);

// BONUS: Add a link href to the <a>

//let link = document.getElementById("a");
newATag.href = "https://google.com";

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"

let child = document.getElementById("N1");
let newChild = document.createElement("p");
newChild.textContent = "New Child Node";

let parent2 = document.getElementById("exercise-container3");
parent2.replaceChild(newChild, child); 

// TODO: Remove the "New Child Node"

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element

let uList = document.createElement("ul");
let parent5 = document.getElementById("container");
parent5.appendChild(uList);

// TODO: Iterate over the array values, and create a list item element for each

for (const l of list) {
    let newLi = document.createElement("li");
    newLi.innerHTML = l;
    uList.appendChild(newLi);

    
}

// TODO: Append the new list items to the unordered list element

// TODO: Append the unordered list to the `div#container` under exercise 4 

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

function show() {
    /* let newDiv = document.createElement("div");
    newDiv.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"; */
    alert("button was clicked");
    let modalContainer = document.createElement("div");
    let modalCard = document.createElement("div");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let closeBtn = document.createElement("button");
    
    closeBtn.addEventListener("click", () => {
        document.body.removeChild(modalContainer);
    });

    h2.textContent = "Modal Header";
    p.textContent = "Modal content";
    closeBtn.textContent = "Close"

    modalCard.append(h2,p,closeBtn);

    modalContainer.id = "modal";
    modalContainer.appendChild(modalCard);

    modalCard.className = ("modal-card");

    

    document.body.appendChild(modalContainer);
    
}

let button = document.querySelector("#btn");
button.addEventListener("click", show);
