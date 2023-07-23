import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null,
        authErrors: [],
        authStatus: null,
        loadingTime: null,
        loadingStatus: false,
        Register_auth_error: null,
        route: "Landing",
    }),
    getters: {
        user: (state) => state.authUser,
        errors: (state) => state.authErrors,
        status: (state) => state.authStatus,
    },
    actions: {
        async getToken() {
            const data = await axios.get("/sanctum/csrf-cookie");
        },
        async getUser() {
            try {
                await this.getToken();
                const data = await axios.get("/api/user");
                var endTime = window.performance.now();
                this.loadingTime = endTime;
                this.authUser = data.data;
                localStorage.setItem("user", JSON.stringify(data.data));
            } catch (error) {
                if (error.response.status) {
                    console.log('error is going');
                }
            }
        },

        
        IsUser() {
            if(JSON.parse(localStorage.getItem("user"))){
                this.authUser = JSON.parse(localStorage.getItem("user"));
            }
        },
        async handleLogin(data) {
            this.authErrors = [];
            await this.getToken();
            try {
                console.log(data);
                await axios.post('/login', {
                    email: data.email,
                    password: data.password,
                    remember: data.remember 
                });
                await this.getUser();
                this.router.push("/");
            } catch (error) {
                if (error.response?.status === 422) {
                    this.authErrors = error.response.data.errors;
                    console.log(error.response.data);
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
                this.router.push("/");
            } catch (error) {
                this.Register_auth_error = error.response.data.errors
                console.log(this.Register_auth_error);
            }
        },
        async handleLogout() {
            await this.getToken();
            await axios.post("/logout");
            this.authUser = null;
            localStorage.removeItem("user")
            this.router.push("/"); 
        },
        async handleForgotPassword(email) {
            this.authErrors = [];
            this.getToken();

            try {
                const response = await axios.post("forgot-password", {
                    email: email,
                });
                this.authStatus = response.data.status;
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
        async handleResetPassword(resetData) {
            this.authErrors = [];
            try {
                await axios.post("/reset-password", resetData);
                this.router.push("/");
            } catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
    },
});
