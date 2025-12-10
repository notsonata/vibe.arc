<script setup>
import { Head } from '@inertiajs/vue3';
import ShopLayout from '@/Layouts/ShopLayout.vue';
</script>

<template>
    <ShopLayout>
        <Head title="VIBE.ARC - About Us" />

        <div class="relative bg-black py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
             <!-- Background elements -->
             <div class="absolute top-0 right-0 w-1/2 h-full bg-neutral-900 -skew-x-12 opacity-50 z-0"></div>

            <div class="relative z-10 max-w-7xl mx-auto">
                <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <div>
                        <h1 class="text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-none" style="font-family: 'Space Grotesk', sans-serif;">
                            Forged In <br/>
                            <span class="text-red-600" style="font-family: 'Unbounded', sans-serif;">The Void</span>
                        </h1>
                        <div class="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                VIBE.ARC was established in 2049, primarily as a salvage operation in the Kuiper Belt. 
                                We recovered what others left behind: prototypes, reinforced fabrics, and rare minerals.
                            </p>
                            <p>
                                Today, we repurpose these materials into high-performance streetwear. 
                                Every garment tells a story of survival in the harshest environment known to man.
                            </p>
                            <p>
                                We don't just sell clothes. We sell artifacts. 
                                Each drop is limited. Once it's gone, it's lost to the vacuum forever.
                            </p>
                        </div>
                        
                        <div class="mt-12 grid grid-cols-2 gap-8">
                            <div>
                                <h3 class="text-4xl font-bold text-white">400+</h3>
                                <p class="text-sm uppercase tracking-widest text-red-500 mt-1">Sectors Explored</p>
                            </div>
                            <div>
                                <h3 class="text-4xl font-bold text-white">0%</h3>
                                <p class="text-sm uppercase tracking-widest text-red-500 mt-1">Compromise</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-12 lg:mt-0 relative">
                        <div class="aspect-square bg-gray-800 relative z-10 p-2 border border-white/10">
                            <img 
                                src="/images/about.png" 
                                alt="Space texture" 
                                class="w-full h-full object-cover grayscale contrast-125"
                            />
                            <!-- Overlay design elements -->
                            <div class="absolute top-4 left-4 w-12 h-1 bg-red-600"></div>
                            <div class="absolute bottom-4 right-4 text-xs font-mono text-white/50 w-32">
                                SECTOR 7G // SALVAGE UNIT // AUTHENTICATED
                            </div>
                        </div>
                        <div class="absolute -bottom-8 -right-8 w-64 h-64 bg-red-600 z-0 hidden lg:block"></div>
                    </div>
                </div>
            </div>
        </div>
    </ShopLayout>
</template>
