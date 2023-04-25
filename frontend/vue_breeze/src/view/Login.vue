<template>
    <AuthLayout title="Sing in to Your account">
        <form @submit.prevent="auth.handleLogin(form)">
            <input type="hidden" name="remember" value="true" />
            <div class="-space-y-px rounded-md my-5">
                <div class="my-5">
                    <label for="email-address" class="sr-only"
                        >Email address</label
                    >
                    <input
                        id="email-address"
                        type="email"
                        autocomplete="email"
                        v-model="form.email"
                        class="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Email address"
                    />
                    <div v-if="auth.errors.email" class="text-center">
                        <p class="text-red-500 pt-2">
                            {{ auth.errors.email[0] }}
                        </p>
                    </div>
                </div>
                <div class="my-5">
                    <label for="password" class="sr-only">Password</label>
                    <input
                        id="password"
                        type="password"
                        autocomplete="current-password"
                        v-model="form.password"
                        class="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Password"
                    />
                </div>
                <div v-if="auth.errors.password" class="text-center">
                    <p class="text-red-500 pt-2">
                        {{ auth.errors.password[0] }}
                    </p>
                </div>
            </div>

            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                        for="remember-me"
                        class="ml-2 block text-sm text-gray-900"
                        >Remember me</label
                    >
                </div>

                <div class="text-sm my-5">
                    <router-link
                        class="font-medium text-indigo-600 hover:text-indigo-500"
                        to="/forgot-password"
                        >Forgot your password?</router-link
                    >
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    class="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    <span
                        class="absolute inset-y-0 left-0 flex items-center pl-3"
                    >
                        <LockClosedIcon
                            class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                            aria-hidden="true"
                        />
                    </span>
                    Sign in
                </button>
            </div>
        </form>
    </AuthLayout>
</template>

<script setup>
import AuthLayout from "../components/AuthLayout.vue";
import { ref, onMounted } from "vue";
import { useAuthStore } from "../stores/auth";
const auth = useAuthStore();
const form = ref({
    email: "",
    password: "",
});
</script>
<style scoped></style>
