let products = {
    data: [
      {
        productName: "Arithmetic Operations",
        category: "Tdd",
        link:"https://github.com/KaveyaAnnadurai/TDDArithmeticOperations",
        image:"images/tddone.jpg",
      },
     
      {
        productName: "Fizz-Buzz",
        category: "Tdd",
        link:"https://github.com/KaveyaAnnadurai/FizzBuzz",
        image:"images/fizzbuzz.jpg",
      },

      {
        productName: "Calculator",
        category: "Calculator",
        link:"https://kaveya-calculator.netlify.app/",
        image:"images/calci.jpg",
      },
      {
        productName: "Guess the number",
        category: "Game",
        link:"https://kaveya-guess-the-number.netlify.app/",
        
        image: "images/guess.jpg",
      },
      {
        productName: "Architecture Problem",
        category: "Tdd",
        link:"https://github.com/KaveyaAnnadurai/Architect",
        image:"images/tddt.jpg",
      },
      {
        productName: "Customer Registration Form",
        category: "Concept",
       link:"https://kaveya-forms.netlify.app/",
        image: "images/form.jpg",
      },
      {
        productName: "Probability TDD",
        category: "Tdd",
        link:"https://github.com/KaveyaAnnadurai/Probability",
        image:"images/prob.jpg",
      },
      {
        productName: "Rectangle",
        category: "Tdd",
        link:"https://github.com/KaveyaAnnadurai/Rectangle",
        image:"images/rect.jpg",
      },

      {
        productName: "EMI Calculator",
        category: "Calculator",
        link:"https://kaveya-emicalculator.netlify.app/",
        image: "images/emi.jpg",
      },
      {
        productName: "Amazon's Replica Page using Grid",
        category: "Concept",
        link:"https://kaveya-grid-amazon.netlify.app/",
        image: "images/grid.jpg",
      },
      {
        productName: "Currency Convertor",
        category: "Calculator",
        link:"https://kaveya-currency-convertor.netlify.app/",
        image:"images/currency.jpg",
      },
      {
        productName: "RGB Color Mixer",
        category: "Calculator",
        link:"https://kaveya-rgb.netlify.app/",
        image: "images/rgb.jpg",
      },
    
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("contain");
    //product name
    let name = document.createElement('a');
    name.classList.add("product-name");
    name.setAttribute("href",i.link);
    name.setAttribute("target","_blank");
    name.innerText = i.productName;
    container.appendChild(name);

    // //product name
    // let name = document.createElement("h5");
    // name.classList.add("product-name");
    // name.innerText = i.productName.toUpperCase();
    // container.appendChild(name);
    //price
    // let price = document.createElement("h6");
    // price.innerText = "$" + i.price;
    // container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    
    buttons.forEach((button) => {
     
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput)) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };
