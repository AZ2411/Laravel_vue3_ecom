<template>
    <AuthLayout title="Create Your account">
        <form
            action=""
            class="mt-5"
            @submit.prevent="auth.handleRegister(form)"
        >
            <div class="mb-6">
                <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Your email</label
                >
                <input
                    v-model="form.email"
                    type="email"
                    id="email"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-300 focus:border-red-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-300 dark:focus:border-red-300 dark:shadow-sm-light"
                    placeholder="name@flowbite.com"
                />
                <div v-if="auth.Register_auth_error?.email" class="my-3 text-center border-2 border-red-400 rounded-lg border-opacity-25 bg-red-300 bg-opacity-30">
                        <p class="text-red-600">
                            {{ auth.Register_auth_error.email[0] }}
                        </p>
                    </div>
            </div>
            <div class="mb-6">
                <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Your Name</label
                >
                <input
                    v-model="form.name"
                    type="text"
                    id="name"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-300 focus:border-red-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-300 dark:focus:border-red-300 dark:shadow-sm-light"
                    placeholder="Mr.June"
                />
            </div>
            <div class="mb-6">
                <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Your password</label
                >
                <input
                    v-model="form.password"
                    type="password"
                    id="password"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-300 focus:border-red-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-300 dark:focus:border-red-300 dark:shadow-sm-light"
                />
            </div>
            <div v-if="auth.Register_auth_error?.password" class="mb-3 text-center border-2 border-red-400 rounded-lg border-opacity-25 bg-red-300 bg-opacity-30">
                        <p class="text-red-600">
                            {{ auth.Register_auth_error.password[0] }}
                        </p>
                    </div>
            <div class="mb-6">
                <label
                    for="repeat-password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >Repeat password</label
                >
                <input
                    v-model="form.password_confirmation"
                    type="password"
                    id="repeat-password"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-300 focus:border-red-300 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-300 dark:focus:border-red-300 dark:shadow-sm-light"
                />
            </div>

            <button
                type="submit"
                class="text-white bg-red-400 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Register new account
            </button>
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
    name: "",
    password: "",
    password_confirmation: "",
});
</script>
