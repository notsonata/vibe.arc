<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <Head title="VIBE.ARC - Access Portal" />

    <div class="min-h-screen flex items-center justify-center bg-black cosmic-bg px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
            <!-- Logo / Header -->
            <div class="text-center">
                <Link :href="route('welcome')" class="inline-block">
                    <h1 class="text-4xl font-bold tracking-tighter uppercase text-white mb-2" style="font-family: 'Boldonse', sans-serif;">
                        VIBE<span class="text-red-500">.</span>ARC
                    </h1>
                </Link>
                <h2 class="mt-6 text-3xl font-bold text-white uppercase tracking-tight" style="font-family: 'Space Grotesk', sans-serif;">
                    Access Portal
                </h2>
                <p class="mt-2 text-sm text-gray-400 uppercase tracking-widest">
                    Authorized Personnel Only
                </p>
            </div>

            <!-- Status Message -->
            <div v-if="status" class="bg-green-900/50 border border-green-500 text-green-200 px-4 py-3 text-sm uppercase tracking-wide text-center">
                {{ status }}
            </div>

            <!-- Error Messages -->
            <div v-if="form.errors.email && !form.errors.password" class="bg-red-900/50 border border-red-500 text-red-200 px-4 py-3 text-sm uppercase tracking-wide text-center">
                {{ form.errors.email }}
            </div>

            <!-- Login Form -->
            <form @submit.prevent="submit" class="mt-8 space-y-6 bg-neutral-900/50 p-8 border border-white/10 backdrop-blur-sm">
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
                        autofocus
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
                        autocomplete="current-password"
                        class="appearance-none relative block w-full px-4 py-3 border border-white/20 placeholder-gray-500 text-white bg-black focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                        placeholder="••••••••"
                    />
                    <p v-if="form.errors.password" class="mt-2 text-sm text-red-400">{{ form.errors.password }}</p>
                </div>

                <!-- Remember Me -->
                <div class="flex items-center">
                    <input
                        id="remember"
                        type="checkbox"
                        v-model="form.remember"
                        class="h-4 w-4 rounded border-white/20 bg-black text-red-600 focus:ring-red-500 focus:ring-offset-0"
                    />
                    <label for="remember" class="ml-2 block text-sm text-gray-400 uppercase tracking-wide">
                        Remember Me
                    </label>
                </div>

                <!-- Actions -->
                <div class="flex items-center justify-between space-x-4">
                    <Link
                        v-if="canResetPassword"
                        :href="route('password.request')"
                        class="text-sm text-gray-400 hover:text-white uppercase tracking-wide transition"
                    >
                        Forgot Code?
                    </Link>

                    <button
                        type="submit"
                        :disabled="form.processing"
                        :class="{ 'opacity-50 cursor-not-allowed': form.processing }"
                        class="flex-1 py-3 px-6 border border-transparent text-sm font-bold uppercase tracking-widest text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150"
                    >
                        <span v-if="form.processing">Authenticating...</span>
                        <span v-else>Enter Portal</span>
                    </button>
                </div>
            </form>

            <!-- Register Link -->
            <div class="text-center">
                <p class="text-sm text-gray-500 uppercase tracking-wide">
                    New Operator?
                    <Link :href="route('register')" class="text-red-500 hover:text-red-400 font-bold ml-1 transition">
                        Request Access
                    </Link>
                </p>
            </div>

            <!-- Footer -->
            <div class="text-center font-mono text-xs text-gray-600 border-t border-white/10 pt-6">
                <p>SECURE CONNECTION // ENCRYPTED</p>
                <p>VIBE.ARC MAINFRAME v2.1</p>
            </div>
        </div>
    </div>
</template>
