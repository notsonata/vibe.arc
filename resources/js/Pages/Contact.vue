<script setup>
import { Head } from '@inertiajs/vue3';
import ShopLayout from '@/Layouts/ShopLayout.vue';
</script>

<template>
    <ShopLayout>
        <Head title="VIBE.ARC - Contact" />

        <div class="min-h-[80vh] flex items-center justify-center bg-black px-4 sm:px-6 lg:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black">
            <div class="max-w-3xl w-full space-y-8">
                <div>
                    <h2 class="mt-6 text-center text-5xl font-black uppercase tracking-tighter text-white" style="font-family: 'Space Grotesk', sans-serif;">
                        Establish Uplink
                    </h2>
                    <p class="mt-2 text-center text-sm text-gray-400 uppercase tracking-widest">
                        Transmission delay: 4.2 minutes
                    </p>
                </div>
                
                <form class="mt-8 space-y-6 bg-neutral-900/50 p-8 border border-white/10 backdrop-blur-sm" @submit.prevent>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="name" class="sr-only">Name</label>
                            <input id="name" name="name" type="text" autocomplete="name" required class="appearance-none relative block w-full px-3 py-4 border border-white/20 placeholder-gray-500 text-white bg-black focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm" placeholder="OPERATOR NAME" />
                        </div>
                        <div>
                            <label for="email" class="sr-only">Email address</label>
                            <input id="email" name="email" type="email" autocomplete="email" required class="appearance-none relative block w-full px-3 py-4 border border-white/20 placeholder-gray-500 text-white bg-black focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm" placeholder="COMM FREQUENCY (EMAIL)" />
                        </div>
                    </div>
                    
                    <div>
                        <label for="message" class="sr-only">Message</label>
                        <textarea id="message" name="message" rows="4" required class="appearance-none relative block w-full px-3 py-4 border border-white/20 placeholder-gray-500 text-white bg-black focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm" placeholder="TRANSMISSION CONTENT..."></textarea>
                    </div>

                    <div>
                        <button type="submit" class="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-bold uppercase tracking-widest text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out">
                            Send Signal
                        </button>
                    </div>
                </form>
                
                <div class="text-center font-mono text-xs text-gray-600">
                    <p>HQ COORDINATES: 40.7128° N, 74.0060° W (EARTH OUTPOST)</p>
                    <p>ENCRYPTED // SECURE LINE</p>
                </div>
            </div>
        </div>
    </ShopLayout>
</template>
