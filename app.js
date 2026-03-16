// Initialize Icons
lucide.createIcons();

// Products Data with Categories
const products = [
    {
        id: 'p1',
        category: 'pastries',
        name: 'Chocolate Truffle Pastry',
        desc: 'Rich, dense chocolate sponge with silky dark chocolate ganache.',
        price: 140,
        img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'p2',
        category: 'pastries',
        name: 'Red Velvet Pastry',
        desc: 'Classic red velvet layers with our signature cream cheese frosting.',
        price: 150,
        img: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'p3',
        category: 'pastries',
        name: 'Blueberry Cheesecake Slice',
        desc: 'Creamy New York style cheesecake topped with blueberry compote.',
        price: 180,
        img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'p4',
        category: 'pastries',
        name: 'Butterscotch Pastry',
        desc: 'Vanilla sponge layers soaked in caramel with crunchy butterscotch bits.',
        price: 130,
        img: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'c1',
        category: 'cakes',
        name: 'Chocolate Truffle Cake',
        desc: 'A decadent 1/2 kg dense chocolate truffle cake.',
        price: 750,
        img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'c2',
        category: 'cakes',
        name: 'Fresh Fruit Cake',
        desc: 'Vanilla sponge loaded with seasonal fresh fruits.',
        price: 800,
        img: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'c3',
        category: 'cakes',
        name: 'Black Forest Cake',
        desc: 'Classic chocolate sponge with whipped cream and cherry filling.',
        price: 720,
        img: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'c4',
        category: 'cakes',
        name: 'Red Velvet Cake',
        desc: 'Premium red velvet celebration cake.',
        price: 850,
        img: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 's1',
        category: 'savory',
        name: 'Paneer Puff',
        desc: 'Flaky baked pastry filled with spicy paneer tikka mix.',
        price: 90,
        img: 'https://images.unsplash.com/photo-1598514981146-2495ea54dd48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 's2',
        category: 'savory',
        name: 'Veg Sandwich',
        desc: 'Fresh bakery bread filled with vegetables and mint chutney.',
        price: 110,
        img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 's3',
        category: 'savory',
        name: 'Garlic Bread',
        desc: 'Crusty loaf topped with butter, garlic, and herbs.',
        price: 120,
        img: 'https://images.unsplash.com/photo-1573140401552-3fab0b24306f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 's4',
        category: 'savory',
        name: 'Cheese Croissant',
        desc: 'Classic buttery croissant baked with a rich cheese center.',
        price: 160,
        img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'b1',
        category: 'beverages',
        name: 'Cold Coffee',
        desc: 'Creamy, chilled blended coffee treat.',
        price: 160,
        img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'b2',
        category: 'beverages',
        name: 'Cappuccino',
        desc: 'Rich espresso with steamed milk foam.',
        price: 140,
        img: 'https://images.unsplash.com/photo-1534045580646-6b2a4cc0a373?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'b3',
        category: 'beverages',
        name: 'Hot Chocolate',
        desc: 'Thick and luxurious melted real chocolate beverage.',
        price: 150,
        img: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'b4',
        category: 'beverages',
        name: 'Masala Chai',
        desc: 'Authentic Mumbai style spiced tea.',
        price: 80,
        img: 'https://images.unsplash.com/photo-1636920272028-c27f1ae474c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
];

// Cart State
let cart = {}; // Format: { productId: quantity }

// DOM Elements
const menuGrid = document.getElementById('menu-grid');
const cartToggle = document.querySelector('.cart-toggle');
const closeCartBtn = document.querySelector('.close-cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItemsContainer = document.querySelector('.cart-items');
const cartCountBadge = document.querySelector('.cart-count');
const cartTotalPrice = document.querySelector('.cart-total-price');
const checkoutBtnOuter = document.querySelector('.checkout-btn');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentFilter = 'all';

// Filtering logic
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderMenu();
    });
});

// Render Menu
function renderMenu() {
    menuGrid.innerHTML = '';
    
    // Filter Products
    const filteredProducts = currentFilter === 'all' 
        ? products 
        : products.filter(p => p.category === currentFilter);
        
    filteredProducts.forEach(product => {
        const qty = cart[product.id] || 0;
        
        let actionHTML = '';
        if (qty === 0) {
            actionHTML = `<button class="add-btn" onclick="window.addToCart('${product.id}')">Add to Cart</button>`;
        } else {
            actionHTML = `
                <div class="qty-selector">
                    <button class="qty-btn" onclick="window.updateQuantity('${product.id}', -1)">-</button>
                    <span class="qty-val">${qty}</span>
                    <button class="qty-btn" onclick="window.updateQuantity('${product.id}', 1)">+</button>
                </div>
            `;
        }
        
        const cardHTML = `
            <div class="product-card">
                <div class="product-img-container">
                    <img src="${product.img}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-desc">${product.desc}</p>
                    <div class="product-bottom">
                        <span class="product-price">₹${product.price}</span>
                        <div class="product-action" id="action-${product.id}">
                            ${actionHTML}
                        </div>
                    </div>
                </div>
            </div>
        `;
        menuGrid.insertAdjacentHTML('beforeend', cardHTML);
    });
}

// Add to Cart Logic
window.addToCart = (productId) => {
    cart[productId] = 1;
    updateApp();
    
    // Open cart automatically when an item is added
    document.body.classList.add('cart-open');
}

window.updateQuantity = (productId, change) => {
    if (!cart[productId]) return;
    
    cart[productId] += change;
    if (cart[productId] <= 0) {
        delete cart[productId];
    }
    
    updateApp();
}

// Update Cart UI
function updateCartUI() {
    let totalItems = 0;
    let totalPrice = 0;
    
    cartItemsContainer.innerHTML = '';
    
    const cartKeys = Object.keys(cart);
    
    if (cartKeys.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Your cart is feeling light!</div>';
    } else {
        cartKeys.forEach(id => {
            const product = products.find(p => p.id === id);
            const qty = cart[id];
            
            totalItems += qty;
            totalPrice += (product.price * qty);
            
            const itemHTML = `
                <div class="cart-item">
                    <img src="${product.img}" alt="${product.name}" class="cart-item-img">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${product.name}</div>
                        <div class="cart-item-price">₹${product.price} x ${qty}</div>
                        <div class="cart-item-qty">
                            <button onclick="window.updateQuantity('${id}', -1)">-</button>
                            <span>${qty}</span>
                            <button onclick="window.updateQuantity('${id}', 1)">+</button>
                        </div>
                    </div>
                    <div class="cart-item-total">
                        ₹${product.price * qty}
                    </div>
                </div>
            `;
            cartItemsContainer.insertAdjacentHTML('beforeend', itemHTML);
        });
    }
    
    cartCountBadge.textContent = totalItems;
    cartTotalPrice.textContent = '₹' + totalPrice;
    
    // Manage Checkout button state
    if (cartKeys.length > 0) {
        checkoutBtnOuter.style.opacity = '1';
        checkoutBtnOuter.style.pointerEvents = 'auto';
    } else {
        checkoutBtnOuter.style.opacity = '0.5';
        checkoutBtnOuter.style.pointerEvents = 'none';
    }
    
    // Update Checkout modal numbers if applicable
    const checkoutSubTotalEl = document.getElementById('checkout-subtotal');
    const checkoutFinalTotalEl = document.getElementById('checkout-final-total');
    const btnPayAmount = document.getElementById('btn-pay-amount');
    
    if (checkoutSubTotalEl) {
        const deliveryFee = 50;
        checkoutSubTotalEl.textContent = '₹' + totalPrice;
        const finalTotal = totalPrice + deliveryFee;
        checkoutFinalTotalEl.textContent = '₹' + finalTotal;
        btnPayAmount.textContent = finalTotal;
    }
}

// Master Update Function
function updateApp() {
    renderMenu();
    updateCartUI();
}

// Cart Sidebar Toggle
cartToggle.addEventListener('click', () => {
    document.body.classList.add('cart-open');
});

closeCartBtn.addEventListener('click', () => {
    document.body.classList.remove('cart-open');
});

cartOverlay.addEventListener('click', () => {
    document.body.classList.remove('cart-open');
});

// ------------- NEW CHECKOUT LOGIC ------------- //
function openCheckout() {
    // Hide Sidebar cart, Open Modal
    document.body.classList.remove('cart-open');
    document.body.classList.add('checkout-open');
    
    // Reset Views
    document.getElementById('checkout-form-step').classList.remove('hidden');
    document.getElementById('checkout-processing-step').classList.add('hidden');
    document.getElementById('checkout-success-step').classList.add('hidden');
}

window.closeCheckout = () => {
    document.body.classList.remove('checkout-open');
};

window.closeCheckoutAndClearCart = () => {
    closeCheckout();
    cart = {}; // Empty cart
    updateApp();
};

window.processPayment = (e) => {
    e.preventDefault();
    
    // Show Processing
    document.getElementById('checkout-form-step').classList.add('hidden');
    document.getElementById('checkout-processing-step').classList.remove('hidden');
    
    // Mock Delay 2s
    setTimeout(() => {
        document.getElementById('checkout-processing-step').classList.add('hidden');
        document.getElementById('checkout-success-step').classList.remove('hidden');
        // generate random ID
        document.getElementById('random-order-id').textContent = Math.floor(1000 + Math.random() * 9000);
    }, 2000);
};

// Payment Method Toggle Logic
document.querySelectorAll('input[name="payment"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        const mockCards = document.getElementById('card-details-container');
        if (e.target.value === 'card') {
            mockCards.style.display = 'block';
        } else {
            mockCards.style.display = 'none';
        }
    });
});
// ---------------------------------------------- //

// Transparent Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (window.scrollY > 50) {
        nav.classList.remove('transparent');
        nav.classList.add('solid');
    } else {
        nav.classList.add('transparent');
        nav.classList.remove('solid');
    }
});

// Fade-In Observers
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-section, .hero-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(el);
});

// Lightbox Logic
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');
const lightboxClose = document.querySelector('.lightbox-close');

lightboxTriggers.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = "block";
        lightboxImg.src = img.src;
    });
});

lightboxClose.addEventListener('click', () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
});

// Initial Render
updateApp();
