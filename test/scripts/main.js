const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Hitagi_anime4.webp") {
    myImage.setAttribute("src", "images/Hitagi_novel2.webp");
  } else {
    myImage.setAttribute("src", "images/Hitagi_anime4.webp");
  }
};

let myButton = document.querySelector("button");

let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hitagi is the best waifu, ${myName}`;
  }  
}

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hitagi is the best waifu, ${storedName}`;
  }  

  myButton.onclick = () => {
    setUserName();
  };
  