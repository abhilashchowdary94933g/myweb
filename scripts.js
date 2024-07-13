// Handle cart operations
let cart = []; // Initialize an empty array to store cart items

// Function to add item to cart
function addToCart(item, price) {
    cart.push({ item, price }); // Push item object into cart array
    alert(`${item} added to cart.`);
    updateCart(); // Update cart display
}

// Function to update cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = ''; // Clear previous items in cart display
    let total = 0;

    // Loop through each item in cart array
    cart.forEach(cartItem => {
        const li = document.createElement('li');
        li.textContent = `${cartItem.item} - $${cartItem.price}`;
        cartItems.appendChild(li);
        total += cartItem.price; // Accumulate total price
    });

    cartTotal.textContent = total; // Display total price
}

// Example usage of addToCart function (You can remove this in production)
addToCart('Chicken Biryani', 10);
addToCart('Veg Biryani', 8);
addToCart('Chilli Chicken', 5);
