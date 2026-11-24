const products = [
    {
        name: "Fruit Mixer",
        price: 20,
        image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400"
    },
    {
        name: "Badam Milk",
        price: 20,
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400"
    },
    {
        name: "Lemon Juice",
        price: 10,
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?w=400"
    },
    {
        name: "Pomegranate Juice",
        price: 60,
        image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=400"
    },
    {
        name: "Apple Juice",
        price: 70,
        image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400"
    },
    {
        name: "Watermelon Juice",
        price: 30,
        image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=400"
    },
    {
        name: "Lassi",
        price: 30,
        image: "https://images.unsplash.com/photo-1570696516188-ade861b84a49?w=400"
    },
    {
        name: "Chocolate Milk",
        price: 50,
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400"
    }
];

let cart = {};
const productsContainer = document.getElementById("products");

products.forEach((product, index) => {
    productsContainer.innerHTML += `
        <div class="card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">₹${product.price}</p>
            <button onclick="addToCart(${index})">
                Add to Cart +
            </button>
        </div>
    `;
});

function addToCart(index) {
    cart[index] = (cart[index] || 0) + 1;
    updateCart();
}

function removeFromCart(index) {
    cart[index]--;

    if (cart[index] <= 0) {
        delete cart[index];
    }

    updateCart();
}

function updateCart() {
    let total = 0;
    let html = "";

    for (let index in cart) {
        let product = products[index];
        let quantity = cart[index];
        let subtotal = product.price * quantity;

        total += subtotal;

        html += `
            <p>
                ${product.name} × ${quantity}
                = ₹${subtotal}
                <button onclick="removeFromCart(${index})">−</button>
                <button onclick="addToCart(${index})">+</button>
            </p>
        `;
    }

    document.getElementById("items").innerHTML =
        html || "Your cart is empty.";

    document.getElementById("total").innerText =
        "Total: ₹" + total;
}

function clearCart() {
    cart = {};
    updateCart();
}