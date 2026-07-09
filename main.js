
    
// let cart = 0;
// function updateCart(number) {
//   cart += number;

//   if (number > 0) {
//     alert("Product has been added");
//   } else if (number < 0) {
//     alert("Product has been removed");
//   }

//   console.log(`Cart is now: ${cart}`);

//   const showCart=  document.getElementById(`showCart`);
//   showCart.textContent = `${cart} `;

//   if (cart == 0){
//     showCart.style.display = "none";
//   }
//   else{
//     showCart.style.display ="inline-block";
//   }
// }

//  let cart = JSON.parse(localStorage.getItem("cart")) || [];

//     function updateCart(name, price, image) {
//       cart.push({ name, price, image });
//       localStorage.setItem("cart", JSON.stringify(cart));
//       alert("Product has been added");

//       const showCart = document.getElementById("showCart");
//       showCart.textContent = cart.length;
//       showCart.style.display = cart.length === 0 ? "none" : "inline-block";
//     }

//     document.addEventListener("DOMContentLoaded", function () {
//       const showCart = document.getElementById("showCart");
//       showCart.textContent = cart.length;
//       showCart.style.display = cart.length === 0 ? "none" : "inline-block";
//     });

// function addToCart(name, price, image) {
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const index = cart.findIndex(item => item.name === name);
  
//   if (index >= 0) {
//     cart[index].quantity += 1;
//   } else {
//     cart.push({ name, price, quantity: 1, image });
//   }

//   localStorage.setItem("cart", JSON.stringify(cart));
//   updateCartBadge();
// }

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, image) {
  const index = cart.findIndex(item => item.name === name);
  
  if (index >= 0) {
    cart[index].quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1, image });
  } 
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartBadge();
  alert("Product has been added");
}
 function removeFromCart(name) {
    const index = cart.findIndex(item => item.name === name);
    if (index >= 0) {
      if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
      } else {
        cart.splice(index, 1);
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartBadge();
    }
  }
function updateCartBadge() {
  const showCart = document.getElementById("showCart");
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  showCart.textContent = totalItems;
  showCart.style.display = totalItems === 0 ? "none" : "inline-block";
}

document.addEventListener("DOMContentLoaded", updateCartBadge);





    document.addEventListener('DOMContentLoaded', function () {
      const swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }); 
  // Menu tab switching
    document.querySelectorAll('.menu-tab').forEach(tab => {
      tab.addEventListener('click', function() {
        document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        document.querySelectorAll('.menu-content').forEach(list => list.style.display = 'none');
        document.getElementById('menu-' + this.dataset.menu).style.display = 'block';
      });
    });
    document.querySelector('.menu-tab').click(); // Activate the first tab by default
    
    document.querySelector('.swiper-button-next').addEventListener('click', function() {
      swiper.slideNext();
    });

    document.querySelector('.swiper-button-prev').addEventListener('click', function() {
      swiper.slidePrev();
    });
    // Smooth scroll for menu links
    document.querySelectorAll('.menu-link').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });







