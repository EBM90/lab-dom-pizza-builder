// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(oneGrePep => {
    if (state.greenPeppers) {
      oneGrePep.style.visibility = 'visible';
    } else {
      oneGrePep.style.visibility = 'hidden';
    }
  });}

function renderWhiteSauce() {
  const sauce = document.querySelector('.sauce')
  if(state.whiteSauce){
    sauce.setAttribute('class', 'sauce sauce-white')
  }else{
    sauce.setAttribute('class', 'sauce')
  }
}

function renderGlutenFreeCrust() {
  const crust = document.querySelector('.crust')
  if(state.glutenFreeCrust){
    crust.setAttribute('class', 'crust crust-gluten-free')
  }else{
    crust.setAttribute('class', 'crust')
  }
  
}

function renderButtons() {
  if (state.pepperoni){
    document.querySelector('.btn.btn-pepperoni').setAttribute('class', 'btn btn-pepperoni active')
    
  }
  else {
    document.querySelector('.btn.btn-pepperoni').setAttribute('class', 'btn btn-pepperoni')
  }
  if (state.mushrooms){
    document.querySelector('.btn.btn-mushrooms').setAttribute('class', 'btn btn-mushrooms active')
  }
  else {
    document.querySelector('.btn.btn-mushrooms').setAttribute('class', 'btn btn-mushrooms')
  }
  if (state.greenPeppers){
    document.querySelector('.btn.btn-green-peppers').setAttribute('class', 'btn btn-green-peppers active')
  }
  else {
    document.querySelector('.btn.btn-green-peppers').setAttribute('class', 'btn btn-green-peppers')
  }
  if (state.whiteSauce){
    document.querySelector('.btn.btn-sauce').setAttribute('class', 'btn btn-sauce active')
  }
  else {
    document.querySelector('.btn.btn-sauce').setAttribute('class', 'btn btn-sauce')
  }
  if (state.glutenFreeCrust){
    document.querySelector('.btn.btn-crust').setAttribute('class', 'btn btn-crust active')
  }
  else {
    document.querySelector('.btn.btn-crust').setAttribute('class', 'btn btn-crust')
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let price = document.querySelector('aside.panel.price ul')
  let total = 10
  let totalHTML = document.querySelector('aside.panel.price strong')
  console.log(totalHTML)
  const priceMain = 1
  const priceWhite = 3
  const priceFree = 5

  price.innerHTML= ``

  if (state.pepperoni){
    price.innerHTML += `<li>$${priceMain} pepperoni</li>`
    total += priceMain
    totalHTML.innerHTML =`<strong>$${total}</strong>`
  }
  if (state.mushrooms){
    price.innerHTML += `<li>$${priceMain} mushrooms</li>`
    total += priceMain
    totalHTML.innerHTML =`<strong>$${total}</strong>`
  }
  if (state.greenPeppers){
    price.innerHTML += `<li>$${priceMain} green peppers</li>`
    total += priceMain
    totalHTML.innerHTML =`<strong>$${total}</strong>`
  }
  if (state.whiteSauce){
    price.innerHTML += `<li>$${priceWhite} white sauce</li>`
    total += priceWhite
    totalHTML.innerHTML =`<strong>$${total}</strong>`
  }
  if (state.glutenFreeCrust){
    price.innerHTML += `<li>$${priceFree} gluten-free crust</li>`
    total += priceFree
    totalHTML.innerHTML =`<strong>$${total}</strong>`
  }
  // let whiteText= document.createElement('li')
  // whiteText.innerText= '$3 white sauce'
  // let freeText= document.createElement('li')
  // freeText.innerText= '$5 gluten-free crust'

  // for(let i = 0; i < ingredients.length; i++){
  //   if(state[ingredients]){
  //     price.innerHTML = `<li>$1 pepperoni</li>`
  //   }
  // }
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});