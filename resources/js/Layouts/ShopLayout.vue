<script setup>
import { Link } from '@inertiajs/vue3';
import { useCart } from '@/composables/useCart';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
});

const { cartCount } = useCart();
</script>

<template>
    <div class="min-h-screen bg-black text-white font-sans selection:bg-red-500 selection:text-white cosmic-bg">
        <!-- Navigation -->
        <nav class="border-b border-white/10 backdrop-blur-md fixed w-full z-50 bg-black/80">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16 items-center">
                    <!-- Logo -->
                    <div class="flex-shrink-0 flex items-center">
                        <Link :href="route('welcome')" class="text-2xl font-bold tracking-tighter uppercase" style="font-family: 'Boldonse', sans-serif;">
                            VIBE<span class="text-red-500">.</span>ARC
                        </Link>
                    </div>

                    <!-- Desktop Menu -->
                    <div class="hidden md:flex space-x-8">
                        <Link :href="route('welcome')" class="hover:text-red-500 transition-colors uppercase text-sm tracking-widest font-medium">Home</Link>
                        <Link :href="route('products.index')" class="hover:text-red-500 transition-colors uppercase text-sm tracking-widest font-medium">Drops</Link>
                        <Link :href="route('about')" class="hover:text-red-500 transition-colors uppercase text-sm tracking-widest font-medium">About</Link>
                        <Link :href="route('contact')" class="hover:text-red-500 transition-colors uppercase text-sm tracking-widest font-medium">Contact</Link>
                    </div>

                    <!-- Auth / Cart -->
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
                </div>
            </div>
        </nav>

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
