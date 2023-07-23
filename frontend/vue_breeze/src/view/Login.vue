<template>
    <AuthLayout title="Sing in to Your account">
        <form @submit.prevent="auth.handleLogin(form)">
            <input type="hidden" name="remember" value="true" />
            <div class="-space-y-px rounded-md my-5">
                <div class="my-5">
                    <div v-if="auth.errors.email" class="mb-3 text-center border-2 border-red-400 rounded-lg border-opacity-25 bg-red-300 bg-opacity-30">
                        <p class="text-red-600">
                            Incorrect username or password
                        </p>
                    </div>
                    <label for="email-address" class="sr-only"
                        >Email address</label
                    >
                    <input
                        id="email-address"
                        type="email"
                        autocomplete="email"
                        v-model="form.email"
                        class="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-red-400 sm:text-sm sm:leading-6"
                        placeholder="Email address"
                    /> 
                </div>
                <div class="my-2">
                    <label for="password" class="sr-only">Password</label>
                    <input
                        id="password"
                        type="password"
                        autocomplete="current-password"
                        v-model="form.password"
                        class="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-red-400 sm:text-sm sm:leading-6"
                        placeholder="Password"
                    />
                </div>
            </div>

            <div class="h-5 flex items-center justify-between mb-4"  >
                <div class="flex items-center">
                    <input  
                        id="remember-me"
                        name="remember"
                        value="1"
                        v-model="form.remember"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-red-400 focus:ring-indigo-600"
                    />
                    <label
                        for="remember-me"
                        class="ml-2 block text-sm text-gray-900"
                        >Remember me</label
                    >
                </div>

                <div class="text-sm my-5">
                    <router-link
                        class="font-medium text-red-400 hover:text-indigo-500"
                        to="/forgot-password"
                        >Forgot your password?</router-link
                    >
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    class="group relative flex w-full justify-center rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-white hover:bg-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
import { useRouter } from "vue-router";
import axios from "axios";
const router = useRouter();
const auth = useAuthStore();
const form = ref({
    email: "",
    password: "",
    remember: null
});
// const handleLogin = async () => {
//     auth.getToken();
//     await axios.post('/login', {
//         email: form.value.email,
//         password: form.value.password
//     });
// }
</script>
<style scoped></style>
