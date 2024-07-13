// Handle sign up
function signUp() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    localStorage.setItem('user', JSON.stringify({ firstName, lastName, email, password }));
    alert('Sign up successful!');
}

// Handle login
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
        alert('Login successful!');
        window.location.href = 'home.html'; // Redirect to home page after successful login
    } else {
        alert('Invalid email or password.');
    }
}

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
