<template>
     <AuthLayout title="Reset your Password">
        <form action="" class="my-10" @submit.prevent="auth.handleResetPassword(form)">
            <div class="flex flex-col space-y-5">
                <label for="new-ps">
                    <p class="font-medium text-slate-700 pb-2">New Password</p>
                    <input v-model="form.password" id="new-pas" name="email" type="password" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" >
                </label>
                <label for="email">
                    <p class="font-medium text-slate-700 pb-2">Comfirm Password</p>
                    <input v-model="form.password_confirmation" id="email" name="email" type="password" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" >
                </label>
               
                <button class="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                      </svg>
                      
                      <span>Reset password</span>
                </button>
                
            </div>
        </form>
    </AuthLayout>
</template>

<script setup>
import AuthLayout from '../components/AuthLayout.vue';
import { useAuthStore } from "../stores/auth";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router"
const auth = useAuthStore();
const route = useRoute();

const form = ref({
    password: "",
    password_confirmation: "",
    email: route.query.email,
    token: route.params.token
})
</script>

<style>
</style>