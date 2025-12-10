<script setup>
import { ref } from 'vue';
import { Link } from '@inertiajs/vue3';
import { useCart } from '@/composables/useCart';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
});

const { cartCount } = useCart();
const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
    mobileMenuOpen.value = false;
};
</script>

<template>
    <div class="min-h-screen bg-black text-white font-sans selection:bg-red-500 selection:text-white cosmic-bg">
        <!-- Navigation -->
        <nav class="border-b border-white/10 backdrop-blur-md fixed w-full z-50 bg-black/80">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16 items-center">
                    <!-- Logo -->
                    <div class="flex-shrink-0 flex items-center">
                        <Link :href="route('welcome')" class="text-2xl font-bold tracking-tighter uppercase whitespace-nowrap" style="font-family: 'Boldonse', sans-serif;">VIBE<span class="text-red-500">.</span>ARC</Link>
                    </div>

                    <!-- Desktop Menu -->
                    <div class="hidden md:flex space-x-8">
                        <Link :href="route('welcome')" class="hover:text-red-500 transition-colors uppercase text-sm tracking-widest font-medium">Home</Link>
                        <Link :href="route('products.index')" class="hover:text-red-500 transition-colors uppercase text-sm tracking-widest font-medium">Drops</Link>
                        <Link :href="route('about')" class="hover:text-red-500 transition-colors uppercase text-sm tracking-widest font-medium">About</Link>
                        <Link :href="route('contact')" class="hover:text-red-500 transition-colors uppercase text-sm tracking-widest font-medium">Contact</Link>
                    </div>

                    <!-- Desktop Auth / Cart -->
                    <div class="hidden md:flex items-center space-x-4">
                        <Link v-if="$page.props.auth.user" :href="route('dashboard')" class="text-sm hover:text-white/70">Dashboard</Link>
                        <template v-else>
                            <Link :href="route('login')" class="text-sm hover:text-white/70">Log in</Link>
                        </template>
                        <Link :href="route('cart')" class="relative group">
                            <span class="sr-only">Cart</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 group-hover:text-red-500 transition-colors">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            <span v-if="cartCount > 0" class="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                {{ cartCount }}
                            </span>
                        </Link>
                    </div>

                    <!-- Mobile Menu Button & Cart -->
                    <div class="flex md:hidden items-center space-x-4">
                        <!-- Mobile Cart -->
                        <Link :href="route('cart')" class="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            <span v-if="cartCount > 0" class="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                {{ cartCount }}
                            </span>
                        </Link>
                        
                        <!-- Hamburger Button -->
                        <button @click="toggleMobileMenu" class="p-2 text-white hover:text-red-500 transition-colors">
                            <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Mobile Sidebar -->
        <Transition
            enter-active-class="transition-opacity duration-300"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-300"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div v-if="mobileMenuOpen" @click="closeMobileMenu" class="fixed inset-0 bg-black/80 z-40 md:hidden backdrop-blur-sm"></div>
        </Transition>

        <Transition
            enter-active-class="transition-transform duration-300"
            enter-from-class="translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transition-transform duration-300"
            leave-from-class="translate-x-0"
            leave-to-class="translate-x-full"
        >
            <div v-if="mobileMenuOpen" class="fixed right-0 top-0 h-full w-64 bg-neutral-900 border-l border-white/10 z-50 md:hidden">
                <div class="p-6 space-y-6">
                    <!-- Close Button -->
                    <button @click="closeMobileMenu" class="absolute top-4 right-4 p-2 text-white hover:text-red-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <!-- Logo -->
                    <div class="pt-8">
                        <Link @click="closeMobileMenu" :href="route('welcome')" class="text-2xl font-bold tracking-tighter uppercase whitespace-nowrap" style="font-family: 'Boldonse', sans-serif;">
                            VIBE<span class="text-red-500">.</span>ARC
                        </Link>
                    </div>

                    <!-- Navigation Links -->
                    <nav class="space-y-4">
                        <Link @click="closeMobileMenu" :href="route('welcome')" class="block py-2 text-lg uppercase tracking-widest font-medium hover:text-red-500 transition-colors">Home</Link>
                        <Link @click="closeMobileMenu" :href="route('products.index')" class="block py-2 text-lg uppercase tracking-widest font-medium hover:text-red-500 transition-colors">Drops</Link>
                        <Link @click="closeMobileMenu" :href="route('about')" class="block py-2 text-lg uppercase tracking-widest font-medium hover:text-red-500 transition-colors">About</Link>
                        <Link @click="closeMobileMenu" :href="route('contact')" class="block py-2 text-lg uppercase tracking-widest font-medium hover:text-red-500 transition-colors">Contact</Link>
                    </nav>

                    <!-- Auth Links -->
                    <div class="pt-6 border-t border-white/10">
                        <Link v-if="$page.props.auth.user" @click="closeMobileMenu" :href="route('dashboard')" class="block py-2 text-sm hover:text-red-500 transition-colors">Dashboard</Link>
                        <Link v-else @click="closeMobileMenu" :href="route('login')" class="block py-2 text-sm hover:text-red-500 transition-colors">Log in</Link>
                    </div>
                </div>
            </div>
        </Transition>

        <!-- Main Content -->
        <main class="pt-16">
            <slot />
        </main>

        <!-- Footer -->
        <footer class="border-t border-white/10 mt-20 bg-neutral-900">
            <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-400">
                    <div>
                        <h3 class="text-white font-bold uppercase tracking-wider mb-4">VIBE.ARC</h3>
                        <p>Curating the finest space artifacts for the modern explorer.</p>
                    </div>
                    <div>
                        <h3 class="text-white font-bold uppercase tracking-wider mb-4">Support</h3>
                        <ul class="space-y-2">
                            <li><a href="#" class="hover:text-white transition">Shipping & Returns</a></li>
                            <li><a href="#" class="hover:text-white transition">FAQ</a></li>
                            <li><a href="#" class="hover:text-white transition">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-white font-bold uppercase tracking-wider mb-4">Connect</h3>
                        <div class="flex space-x-4">
                            <!-- Social icons would go here -->
                            <a href="#" class="hover:text-white transition">Instagram</a>
                            <a href="#" class="hover:text-white transition">Twitter</a>
                        </div>
                    </div>
                </div>
                <div class="mt-8 border-t border-white/10 pt-8 text-center">
                    <p>&copy; 2025 VIBE.ARC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>
</template>
