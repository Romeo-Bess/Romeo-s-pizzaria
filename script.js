// Selecting the shopping cart element
let cart = document.querySelector('.shopping-cart');

// Toggling the visibility of the shopping cart when the cart button is clicked
document.querySelector('#cart').onclick = () =>{
  cart.classList.toggle('active');
  // Removing the 'active' class from the login form if it's active
  login.classList.remove('active');
}

// Selecting the login form element
let login = document.querySelector('.login-form');

// Toggling the visibility of the login form when the login button is clicked
document.querySelector('#login').onclick = () =>{
  login.classList.toggle('active');
  // Removing the 'active' class from the shopping cart if it's active
  cart.classList.remove('active');
}

// Selecting the navbar element
let navbar = document.querySelector('.navbar');

// Toggling the visibility of the navbar when the menu button is clicked
document.querySelector('#menu').onclick = () =>{
  navbar.classList.toggle('active');
  // Removing the 'active' class from the shopping cart and login form if they're active
  cart.classList.remove('active');
  login.classList.remove('active');
}

// Removing 'active' class from cart, login, and navbar when scrolling
window.onscroll = () =>{
  cart.classList.remove('active');
  login.classList.remove('active');
  navbar.classList.remove('active');
}

// Initializing Swiper for the home slider
var swiper = new Swiper(".home-slider", {
  autoplay:{
    delay:7500,
    disableOnInteraction:false,
  },
  grabCursor:true,
  loop: true,
  centeredSlides:true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Initializing Swiper for the menu slider
var swiper = new Swiper(".menu-slider", {
  grabCursor:true,
  loop: true,
  autoHeight:true,
  centeredSlides:true,
  spaceBetwwen:20, // Typo: should be 'spaceBetween' instead of 'spaceBetwwen'
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },
});

// Handling click events for menu items to display their previews
let previewContainer = document.querySelector('.menu-preview-container');
let previewBox = previewContainer.querySelectorAll('.menu-preview');

document.querySelectorAll('.menu .box').forEach(menu =>{
  menu.onclick = () =>{
    // Displaying the preview container when a menu item is clicked
    previewContainer.style.display = 'flex';
    let name = menu.getAttribute('data-name');
    // Looping through preview boxes to find the one corresponding to the clicked menu item
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

// Handling click event to close the menu preview
previewContainer.querySelector('#close').onclick = () =>{
  // Hiding the preview container when the close button is clicked
  previewContainer.style.display = 'none';
  // Removing 'active' class from all preview boxes
  previewBox.forEach(close =>{
    close.classList.remove('active');
  });
};
