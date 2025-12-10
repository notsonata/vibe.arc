<script setup>
import { ref, computed } from 'vue';
import { Head } from '@inertiajs/vue3';
import ShopLayout from '@/Layouts/ShopLayout.vue';
import { useCart } from '@/composables/useCart';

const { addToCart: addItemToCart } = useCart();

const allProducts = [
    { id: 1, name: 'Moon Rock Hoodie', price: '$85.00', image: '/images/hoodie.png', description: 'Raw aesthetic from the lunar surface. Heavyweight cotton.', category: 'Apparel' },
    { id: 2, name: 'Orbital Cargo Pants', price: '$120.00', image: '/images/pants.png', description: 'Designed for zero-g environments. Multi-pocket utility.', category: 'Apparel' },
    { id: 3, name: 'Nebula Tee', price: '$45.00', image: '/images/shirt.png', description: 'Colors from deep space. Oversized fit.', category: 'Apparel' },
    { id: 4, name: 'Gravity Boots', price: '$220.00', image: '/images/shoes.png', description: 'Magnetic soles for metallic surfaces.', category: 'Footwear' },
    { id: 5, name: 'Void Jacket', price: '$350.00', image: '/images/jacket.png', description: 'Total darkness. Reflective accents.', category: 'Apparel' },
    { id: 6, name: 'Asteroid Belt', price: '$60.00', image: '/images/belt.png', description: 'Industrial grade webbing with quick-release buckle.', category: 'Accessories' },
];

const activeFilter = ref('All');
const notification = ref({ show: false, message: '' });

const products = computed(() => {
    if (activeFilter.value === 'All') {
        return allProducts;
    }
    return allProducts.filter(p => p.category === activeFilter.value);
});

const setFilter = (filter) => {
    activeFilter.value = filter;
};

const addToCart = (product) => {
    addItemToCart(product);
    notification.value = { show: true, message: `${product.name} added to cart!` };
    setTimeout(() => {
        notification.value.show = false;
    }, 2000);
};
</script>

<template>
    <ShopLayout>
        <Head title="VIBE.ARC - Drops" />

        <!-- Notification Toast -->
        <Transition
            enter-active-class="transition ease-out duration-300"
            enter-from-class="opacity-0 translate-y-4"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-4"
        >
            <div v-if="notification.show" class="fixed top-8 right-8 z-50 bg-red-600 text-white px-6 py-4 rounded-sm shadow-2xl border border-red-400">
                <div class="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span class="font-medium uppercase tracking-wide text-sm">{{ notification.message }}</span>
                </div>
            </div>
        </Transition>

        <div class="bg-black py-24">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h1 class="text-5xl font-black text-white uppercase tracking-tighter mb-4" style="font-family: 'Unbounded', sans-serif;">The Collection</h1>
                    <p class="text-gray-400 max-w-2xl mx-auto">Equip yourself for the journey. Limited run artifacts from the outer rim.</p>
                </div>

                <!-- Filters -->
                <div class="flex justify-center space-x-8 mb-12 text-sm uppercase tracking-widest text-gray-500 font-medium">
                    <button 
                        @click="setFilter('All')"
                        :class="activeFilter === 'All' ? 'text-white border-b-2 border-red-500 pb-1' : 'hover:text-white transition'"
                    >
                        All
                    </button>
                    <button 
                        @click="setFilter('Apparel')"
                        :class="activeFilter === 'Apparel' ? 'text-white border-b-2 border-red-500 pb-1' : 'hover:text-white transition'"
                    >
                        Apparel
                    </button>
                    <button 
                        @click="setFilter('Accessories')"
                        :class="activeFilter === 'Accessories' ? 'text-white border-b-2 border-red-500 pb-1' : 'hover:text-white transition'"
                    >
                        Accessories
                    </button>
                    <button 
                        @click="setFilter('Footwear')"
                        :class="activeFilter === 'Footwear' ? 'text-white border-b-2 border-red-500 pb-1' : 'hover:text-white transition'"
                    >
                        Footwear
                    </button>
                </div>

                <TransitionGroup 
                    name="product-list"
                    tag="div"
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8"
                >
                    <div v-for="product in products" :key="product.id" class="group">
                        <div class="aspect-[4/5] w-full bg-gray-900 rounded-sm overflow-hidden mb-6 relative">
                            <img :src="product.image" :alt="product.name" class="h-full w-full object-cover object-center group-hover:scale-105 transition duration-500 opacity-90 group-hover:opacity-100" />
                            <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
                            <button 
                                @click="addToCart(product)"
                                class="absolute bottom-4 right-4 bg-white text-black p-3 hover:bg-red-500 hover:text-white transition opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </button>
                        </div>
                        <h3 class="text-xl font-bold text-white uppercase tracking-wide group-hover:text-red-500 transition">{{ product.name }}</h3>
                        <p class="mt-1 text-gray-500 text-sm">{{ product.description }}</p>
                        <p class="mt-2 text-lg font-mono text-white">{{ product.price }}</p>
                    </div>
                </TransitionGroup>
            </div>
        </div>
    </ShopLayout>
</template>

<style scoped>
.product-list-move {
    transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);
}

.product-list-enter-active {
    transition: all 0.4s cubic-bezier(0.55, 0, 0.1, 1);
}

.product-list-leave-active {
    transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
}

.product-list-enter-from {
    opacity: 0;
    transform: scale(0.8);
}

.product-list-leave-to {
    opacity: 0;
    transform: scale(0.8);
}
</style>
