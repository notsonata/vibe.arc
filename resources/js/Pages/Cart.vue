<script setup>
import { Head, Link } from '@inertiajs/vue3';
import ShopLayout from '@/Layouts/ShopLayout.vue';
import { useCart } from '@/composables/useCart';

const { cartItems, cartCount, cartTotal, updateQuantity, removeFromCart } = useCart();

const incrementQuantity = (productId, currentQty) => {
    updateQuantity(productId, currentQty + 1);
};

const decrementQuantity = (productId, currentQty) => {
    updateQuantity(productId, currentQty - 1);
};

const formatPrice = (price) => {
    return typeof price === 'string' ? price : `$${price.toFixed(2)}`;
};
</script>

<template>
    <ShopLayout>
        <Head title="VIBE.ARC - Your Cart" />

        <div class="min-h-screen bg-black py-24">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Header -->
                <div class="mb-12">
                    <h1 class="text-5xl font-black text-white uppercase tracking-tighter mb-4" style="font-family: 'Unbounded', sans-serif;">
                        Your Cart
                    </h1>
                    <p class="text-gray-400">{{ cartCount }} {{ cartCount === 1 ? 'item' : 'items' }} in your cargo hold</p>
                </div>

                <!-- Empty State -->
                <div v-if="cartItems.length === 0" class="text-center py-24">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-24 h-24 mx-auto text-gray-700 mb-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <h2 class="text-2xl font-bold text-white uppercase tracking-wide mb-4" style="font-family: 'Space Grotesk', sans-serif;">
                        Cart Empty
                    </h2>
                    <p class="text-gray-500 mb-8 uppercase tracking-widest text-sm">No artifacts in your hold</p>
                    <Link :href="route('products.index')" class="inline-block px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-widest hover:bg-red-700 transition">
                        Browse Drops
                    </Link>
                </div>

                <!-- Cart Items -->
                <div v-else class="lg:grid lg:grid-cols-3 lg:gap-12">
                    <!-- Items List -->
                    <div class="lg:col-span-2 space-y-6">
                        <TransitionGroup name="cart-item">
                            <div v-for="item in cartItems" :key="item.id" class="bg-neutral-900/50 border border-white/10 p-6 flex gap-6 backdrop-blur-sm">
                                <!-- Product Image -->
                                <div class="w-32 h-40 bg-gray-800 flex-shrink-0 overflow-hidden">
                                    <img :src="item.image" :alt="item.name" class="w-full h-full object-cover" />
                                </div>

                                <!-- Product Info -->
                                <div class="flex-1 flex flex-col">
                                    <div class="flex-1">
                                        <h3 class="text-xl font-bold text-white uppercase tracking-wide mb-2">{{ item.name }}</h3>
                                        <p class="text-sm text-gray-500 mb-4">{{ item.description }}</p>
                                        <p class="text-lg font-mono text-white">{{ item.price }}</p>
                                    </div>

                                    <div class="flex items-center justify-between mt-4">
                                        <!-- Quantity Controls -->
                                        <div class="flex items-center space-x-3">
                                            <button @click="decrementQuantity(item.id, item.quantity)" class="w-8 h-8 bg-black border border-white/20 text-white hover:bg-white hover:text-black transition flex items-center justify-center">
                                                <span class="text-lg">−</span>
                                            </button>
                                            <span class="text-white font-mono w-12 text-center">{{ item.quantity }}</span>
                                            <button @click="incrementQuantity(item.id, item.quantity)" class="w-8 h-8 bg-black border border-white/20 text-white hover:bg-white hover:text-black transition flex items-center justify-center">
                                                <span class="text-lg">+</span>
                                            </button>
                                        </div>

                                        <!-- Remove Button -->
                                        <button @click="removeFromCart(item.id)" class="text-sm text-red-500 hover:text-red-400 uppercase tracking-wide transition">
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </TransitionGroup>
                    </div>

                    <!-- Order Summary -->
                    <div class="mt-8 lg:mt-0">
                        <div class="bg-neutral-900/80 border border-white/10 p-8 backdrop-blur-sm sticky top-24">
                            <h2 class="text-2xl font-bold text-white uppercase tracking-tighter mb-6" style="font-family: 'Space Grotesk', sans-serif;">
                                Order Summary
                            </h2>

                            <div class="space-y-4 mb-6">
                                <div class="flex justify-between text-gray-400">
                                    <span class="uppercase tracking-wide text-sm">Subtotal</span>
                                    <span class="font-mono">${{ cartTotal.toFixed(2) }}</span>
                                </div>
                                <div class="flex justify-between text-gray-400">
                                    <span class="uppercase tracking-wide text-sm">Shipping</span>
                                    <span class="font-mono text-green-400">FREE</span>
                                </div>
                                <div class="border-t border-white/10 pt-4 flex justify-between text-white text-xl font-bold">
                                    <span class="uppercase tracking-wide">Total</span>
                                    <span class="font-mono">${{ cartTotal.toFixed(2) }}</span>
                                </div>
                            </div>

                            <button class="w-full py-4 bg-red-600 text-white font-bold uppercase tracking-widest hover:bg-red-700 transition mb-4">
                                Checkout
                            </button>

                            <Link :href="route('products.index')" class="block text-center text-sm text-gray-400 hover:text-white uppercase tracking-wide transition">
                                Continue Shopping
                            </Link>

                            <!-- Footer Info -->
                            <div class="mt-8 pt-8 border-t border-white/10 text-xs text-gray-600 space-y-2 font-mono uppercase tracking-wide">
                                <p>✓ Secure Checkout</p>
                                <p>✓ Free Universal Shipping</p>
                                <p>✓ 30-Day Returns</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ShopLayout>
</template>

<style scoped>
.cart-item-move,
.cart-item-enter-active,
.cart-item-leave-active {
    transition: all 0.4s cubic-bezier(0.55, 0, 0.1, 1);
}

.cart-item-enter-from {
    opacity: 0;
    transform: translateX(-30px);
}

.cart-item-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.cart-item-leave-active {
    position: absolute;
    width: 100%;
}
</style>
