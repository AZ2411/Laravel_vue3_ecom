import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        
        authUser: null,
        authErrors: []
    }),
    getters: {
        user: (state) => state.authUser,
        errors: (state) => state.authErrors
    },
    actions: {
        async getToken() {
            await axios.get("/sanctum/csrf-cookie");
        },
        async getUser() {
            await this.getToken();
            const data = await axios.get("/api/user");
            this.authUser = data.data;
        },
        async handleLogin(data) {
            this.authErrors = [];
            await this.getToken();
            try {
                await axios.post("/login", {
                    email: data.email,
                    password: data.password,
                });
                this.authUser = data;
                this.router.push('/')
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
            
        },
        async handleRegister(data) {
            this.authErrors = [];
            await this.getToken();
            try {
                await axios.post("/register", {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                    password_confirmation: data.password_confirmation,
                });
                this.router.push('/')
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
        async handleLogout() {
            await this.getToken();
            await axios.post("/logout")
            this.authUser = null;
            this.login_email
            this.router.push("/login")
        },
        async handleForgotPassword(email) {
            await axios.post('forgot-password', {
                email: email
            });
        },
        async handleResetPassword(resetData) {
            this.authErrors = [];
            try {
                await axios.post('/reset-password', resetData);
                this.router.push('/')
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        }
    },
});
