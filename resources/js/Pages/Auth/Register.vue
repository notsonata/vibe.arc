<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <Head title="VIBE.ARC - Request Access" />

    <div class="min-h-screen flex items-center justify-center bg-black cosmic-bg px-4 sm:px-6 lg:px-8 py-12">
        <div class="max-w-md w-full space-y-8">
            <!-- Logo / Header -->
            <div class="text-center">
                <Link :href="route('welcome')" class="inline-block">
                    <h1 class="text-4xl font-bold tracking-tighter uppercase text-white mb-2" style="font-family: 'Boldonse', sans-serif;">
                        VIBE<span class="text-red-500">.</span>ARC
                    </h1>
                </Link>
                <h2 class="mt-6 text-3xl font-bold text-white uppercase tracking-tight" style="font-family: 'Space Grotesk', sans-serif;">
                    Request Access
                </h2>
                <p class="mt-2 text-sm text-gray-400 uppercase tracking-widest">
                    New Operator Registration
                </p>
            </div>

            <!-- Registration Form -->
            <form @submit.prevent="submit" class="mt-8 space-y-6 bg-neutral-900/50 p-8 border border-white/10 backdrop-blur-sm">
                <!-- Name -->
                <div>
                    <label for="name" class="block text-sm font-bold text-gray-300 uppercase tracking-widest mb-2">
                        Operator Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        v-model="form.name"
                        required
                        autofocus
                        autocomplete="name"
                        class="appearance-none relative block w-full px-4 py-3 border border-white/20 placeholder-gray-500 text-white bg-black focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                        placeholder="John Doe"
                    />
                    <p v-if="form.errors.name" class="mt-2 text-sm text-red-400">{{ form.errors.name }}</p>
                </div>

                <!-- Email -->
                <div>
                    <label for="email" class="block text-sm font-bold text-gray-300 uppercase tracking-widest mb-2">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        v-model="form.email"
                        required
                        autocomplete="username"
                        class="appearance-none relative block w-full px-4 py-3 border border-white/20 placeholder-gray-500 text-white bg-black focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                        placeholder="operator@vibe.arc"
                    />
                    <p v-if="form.errors.email" class="mt-2 text-sm text-red-400">{{ form.errors.email }}</p>
                </div>

                <!-- Password -->
                <div>
                    <label for="password" class="block text-sm font-bold text-gray-300 uppercase tracking-widest mb-2">
                        Access Code
                    </label>
                    <input
                        id="password"
                        type="password"
                        v-model="form.password"
                        required
                        autocomplete="new-password"
                        class="appearance-none relative block w-full px-4 py-3 border border-white/20 placeholder-gray-500 text-white bg-black focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                        placeholder="••••••••"
                    />
                    <p v-if="form.errors.password" class="mt-2 text-sm text-red-400">{{ form.errors.password }}</p>
                </div>

                <!-- Confirm Password -->
                <div>
                    <label for="password_confirmation" class="block text-sm font-bold text-gray-300 uppercase tracking-widest mb-2">
                        Confirm Access Code
                    </label>
                    <input
                        id="password_confirmation"
                        type="password"
                        v-model="form.password_confirmation"
                        required
                        autocomplete="new-password"
                        class="appearance-none relative block w-full px-4 py-3 border border-white/20 placeholder-gray-500 text-white bg-black focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                        placeholder="••••••••"
                    />
                    <p v-if="form.errors.password_confirmation" class="mt-2 text-sm text-red-400">{{ form.errors.password_confirmation }}</p>
                </div>

                <!-- Actions -->
                <div class="flex items-center justify-between space-x-4">
                    <Link
                        :href="route('login')"
                        class="text-sm text-gray-400 hover:text-white uppercase tracking-wide transition"
                    >
                        Already Registered?
                    </Link>

                    <button
                        type="submit"
                        :disabled="form.processing"
                        :class="{ 'opacity-50 cursor-not-allowed': form.processing }"
                        class="flex-1 py-3 px-6 border border-transparent text-sm font-bold uppercase tracking-widest text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150"
                    >
                        <span v-if="form.processing">Processing...</span>
                        <span v-else>Submit Request</span>
                    </button>
                </div>
            </form>

            <!-- Footer -->
            <div class="text-center font-mono text-xs text-gray-600 border-t border-white/10 pt-6">
                <p>SECURE CONNECTION // ENCRYPTED</p>
                <p>VIBE.ARC MAINFRAME v2.1</p>
            </div>
        </div>
    </div>
</template>
