import { ref, computed } from 'vue';

// Cart state (singleton)
const cartItems = ref([]);

// Load cart from localStorage on initialization
if (typeof window !== 'undefined') {
    const savedCart = localStorage.getItem('vibe-arc-cart');
    if (savedCart) {
        try {
            cartItems.value = JSON.parse(savedCart);
        } catch (e) {
            console.error('Failed to parse cart from localStorage', e);
        }
    }
}

// Save cart to localStorage
const saveCart = () => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('vibe-arc-cart', JSON.stringify(cartItems.value));
    }
};

export function useCart() {
    // Computed values
    const cartCount = computed(() => {
        return cartItems.value.reduce((total, item) => total + item.quantity, 0);
    });

    const cartTotal = computed(() => {
        return cartItems.value.reduce((total, item) => {
            const price = parseFloat(item.price.replace('$', ''));
            return total + (price * item.quantity);
        }, 0);
    });

    // Add item to cart
    const addToCart = (product) => {
        const existingItem = cartItems.value.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cartItems.value.push({
                ...product,
                quantity: 1
            });
        }
        
        saveCart();
    };

    // Remove item from cart
    const removeFromCart = (productId) => {
        const index = cartItems.value.findIndex(item => item.id === productId);
        if (index > -1) {
            cartItems.value.splice(index, 1);
            saveCart();
        }
    };

    // Update quantity
    const updateQuantity = (productId, quantity) => {
        const item = cartItems.value.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                removeFromCart(productId);
            } else {
                item.quantity = quantity;
                saveCart();
            }
        }
    };

    // Clear cart
    const clearCart = () => {
        cartItems.value = [];
        saveCart();
    };

    return {
        cartItems: computed(() => cartItems.value),
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart
    };
}
