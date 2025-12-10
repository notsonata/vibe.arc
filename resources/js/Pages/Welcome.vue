<script setup>
import { Head, Link } from '@inertiajs/vue3';
import ShopLayout from '@/Layouts/ShopLayout.vue';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
});

// Mock Data for "Featured Drops"
const featuredProducts = [
    { id: 1, name: 'Moon Rock Hoodie', price: '$85.00', image: '/images/hoodie.png', description: 'Raw aesthetic from the lunar surface.' },
    { id: 2, name: 'Orbital Cargo Pants', price: '$120.00', image: '/images/pants.png', description: 'Designed for zero-g environments.' },
    { id: 3, name: 'Nebula Tee', price: '$45.00', image: '/images/shirt.png', description: 'Colors from deep space.' },
];
</script>

<template>
    <ShopLayout :can-login="canLogin" :can-register="canRegister">
        <Head title="VIBE.ARC - Welcome Aboard" />

        <!-- Hero Section -->
        <div class="relative h-[80vh] flex items-center justify-center overflow-hidden">
            <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-40 grayscale"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            
            <div class="relative z-10 text-center px-4">
                <h1 class="text-7xl md:text-9xl uppercase tracking-tighter text-white mb-6 drop-shadow-2xl">
                    <span class="font-bold" style="font-family: 'Space Grotesk', sans-serif;">Beyond</span> <br/> 
                    <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600" style="font-family: 'Unbounded', sans-serif;">Earth</span>
                </h1>
                <p class="text-xl md:text-2xl text-gray-300 mb-10 tracking-widest uppercase font-light max-w-2xl mx-auto">
                    Streetwear inspired by the cosmos. <br/>Limited artifacts from the void.
                </p>
                <Link :href="route('products.index')" class="inline-block px-12 py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-red-500 hover:text-white transition duration-300 transform hover:scale-105">
                    Shop The Drop
                </Link>
            </div>
        </div>

        <!-- Ticker / Marquee -->
        <div class="bg-red-600 overflow-hidden py-3 whitespace-nowrap">
            <div class="flex animate-marquee space-x-12 items-center text-black font-bold uppercase text-xl font-mono">
                <span>New Arrival: Mars Collection</span>
                <span>•</span>
                <span>Universal Shipping</span>
                <span>•</span>
                <span>Limited Edition Artifacts</span>
                <span>•</span>
                <span>New Arrival: Mars Collection</span>
                <span>•</span>
                <span>Universal Shipping</span>
                <span>•</span>
                <span>Limited Edition Artifacts</span>
            </div>
        </div>

        <!-- Featured Section -->
        <div class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-end mb-12">
                <h2 class="text-4xl font-bold uppercase tracking-tighter text-white">Latest Drops</h2>
                <Link :href="route('products.index')" class="text-gray-400 hover:text-white uppercase tracking-widest text-sm border-b border-gray-600 pb-1 hover:border-white transition">View All</Link>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div v-for="product in featuredProducts" :key="product.id" class="group cursor-pointer">
                    <div class="aspect-[4/5] w-full overflow-hidden bg-gray-800 relative mb-4">
                        <img :src="product.image" :alt="product.name" class="h-full w-full object-cover object-center group-hover:scale-110 transition duration-700 opacity-80 group-hover:opacity-100" />
                        <div class="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 uppercase tracking-widest">
                            New
                        </div>
                    </div>
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="text-lg font-bold text-white uppercase tracking-wide group-hover:text-red-500 transition">{{ product.name }}</h3>
                            <p class="mt-1 text-sm text-gray-500">{{ product.description }}</p>
                        </div>
                        <p class="text-lg font-medium text-white">{{ product.price }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Banner / Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 h-[600px]">
            <div class="bg-neutral-900 flex items-center justify-center p-12">
                <div class="max-w-md">
                    <h2 class="text-5xl font-bold uppercase tracking-tighter mb-6">The Void Collection</h2>
                    <p class="text-gray-400 mb-8 leading-relaxed">
                        Inspired by the silence of deep space. Minimalist cuts, technical fabrics, and utilitarian design.
                    </p>
                    <Link :href="route('products.index')" class="text-white border border-white px-8 py-3 uppercase tracking-widest hover:bg-white hover:text-black transition">
                        Explore
                    </Link>
                </div>
            </div>
            <div class="bg-[url('https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center grayscale hover:grayscale-0 transition duration-1000">
            </div>
        </div>
    </ShopLayout>
</template>

<style scoped>
.animate-marquee {
    animation: marquee 20s linear infinite;
}

@keyframes marquee {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
}
</style>
