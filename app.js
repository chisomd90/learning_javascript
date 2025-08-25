// // DOM - document object model
// // access elements on the page, change content, add or remove elements dynamically
// // respomd to users interaction

// //ACCESS or GET ELEMENTS om the oage
// //getelementsbyID, getebytagName(h1, p), getelements by classnames
// // const heading = documents.getElementsByTagName("h1");
// //console.log(heading);

// // const heading = documenmt.getElemstsById("Hello");
// // console.log(heading);

// // const paragraphs = document.getElementsByClassName("para1");
// // console.log(paragraphs);
// // console.log(paragraphs[0]);

// //queryselector(first element), queryselectorALL(all elements that fits its selection)
// //uses css selections, .className #isName div .error

// // const para = document.querySelector(".para1");
// // const paras = document.querySelectorAll(".para1");

// // CHANGING CONTENT WITH JS
// //textContent, innerText

// const heading = document.querySelector("#hello");
// heading.textContent += ", JS is fun";

// const paragraph = document.querySelector("p");
// paragraph.textContent = "hello dom practice";

// //changing html elements
// const mydiv = document.querySelector("div");
// // mydiv.innerHTML += "<p>P from js</p>";

// const username = "John";
// mydiv.innerHTML = `<h1>Welcome ${username} </h1>`;

// //change attributes
// const beginpara = document.querySelector(".begin");
// beginpara.id = "okay";
// beginpara.className = "good";
// beginpara.style.color = "green";
// beginpara.style.backgroundColor = "purple";

// // interact with styles (classnames)
// const msgHeading = document.querySelector(".msg");

// //className (totally overide)
// msgHeading.className = "success";

// //classList (add remove contain)
// msgHeading.classList.add("sucesss");
// // msgHeading.classList.remove("msg");

// console.log(msgHeading.classList.contains("msg"));

// //create dom elements
// const section = document.createElement("section");
// section.innerHTML = "<h1></h1> <p></p>";

// const body = document.querySelector("body");
// body.appendChild(section);

// //crreate a form and let it have two input field of username and password and a button, and appaend it to the body

// const form = document.createElement("form");
// section.innerHTML = `<input type = "username" placeholder = "username"></input> <input type = "password" placeholder = "password"></input> <button>Login</button>`;

// const body2 = document.querySelector("body");
// body.appendChild(form);

// const link = document.createElement("a");
// link.textContent = "Visit Facebook";
// link.href = "https://facebook.com";

// const nav = document.querySelector("nav");
// nav.appendChild(link);

// responding to users interaction (click, submit, typing)
// event - (event listener) event handler

const body = document.querySelector("body");
const btn = document.querySelector("button");

// log user clicked
btn.addEventListener("click", () => {
  console.log("user clicked");
  body.style.backgroundColor = "blue";
});

const body1 = document.querySelector(".testbtn");
const desc = document.querySelector(".desc");

body1.addEventListener("click", () => {
  desc.style.display = "none";
});

//form handling -> submit (do sth)
// 1. prevent the default behaviour of the form
// 2. get users input (.value)

const myform = document.querySelector("form");
const usernameInput = document.querySelector("input");
const smallError = document.querySelector("small");

usernameInput.addEventListener("input", () => {
  const usernameValue = usernameInput.value;
  if (usernameValue.trim().length < 5) {
    smallError.textContent = "The min username length is 5";
    usernameInput.style.border = "2px solid red";
    usernameInput.className = "error";
  } else {
    smallError.textContent = "";
    usernameInput.className = "";
  }
});

myform.addEventListener("submit", (event) => {
  event.preventDefault();
  const usernameValue = usernameInput.value;
  if (!usernameValue.trim()) {
    smallError.textContent = "Please provide a username";
    usernameInput.className = "error";
  } else {
    console.log("form submitted", usernameValue);
    smallError.textContent = "";
    usernameInput.className = "";
  }
});
