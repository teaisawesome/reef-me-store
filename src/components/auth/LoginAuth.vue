<template>
    <div class="flex justify-center">
    <div class="flex flex-col md:flex-row justify-center shadow-xl shadow-slate-800 my-5 rounded-xl">
        <div class="grow bg-sky-50 rounded-l-xl p-8">
            <h2 v-if="message" :class="message.style" class="rounded-md p-3 mb-5 shadow-md text-slate-50">{{ message.text }}</h2>
            <h1 class="text-3xl mb-10">Login</h1>
            <form @submit.prevent="submitForm">
                <div class="mb-5">
                    <label for="email" class="block mb-1">Email <span class="text-red-600">*</span></label>
                    <input type="email" v-model.trim="email" :class="{ 'border-red-500': errors.email }" class="block border-solid border-b border-slate-500 focus:outline-none focus:border-slate-700 bg-transparent w-80">
                    <p v-if="errors.email" class="mt-3 bg-red-600 text-sky-50 p-1 pl-2 w-80">{{ errors.email }}</p>
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-3">Password <span class="text-red-600">*</span></label>
                    <input type="password" v-model.trim="password" :class="{ 'border-red-500': errors.password }" class="block border-solid border-b border-slate-500 focus:outline-none focus:border-slate-700 bg-transparent w-80">
                    <p v-if="errors.password" class="mt-3 bg-red-600 text-sky-50 p-1 pl-2 w-80">{{ this.errors.password }}</p>
                </div>
                <button class="p-3 mt-5 rounded-xl shadow-md bg-lightblue text-main-txt-color hover:bg-sky-700"><span class="mr-2">🐠</span>Belépés</button>
            </form>
        </div>
        <div class="grow bg-slate-200 rounded-r-xl sm:w-1/4 flex flex-col justify-center items-center p-5">
            <h1 class="text-1/5xl mb-5 font-bold">New Customer</h1>
            <p class="text-center mb-5">If you are a new customer, please register to our website!<br/><b>Happy reefing!</b></p>
            <router-link to="/registration" class="p-3 mt-5 rounded-xl shadow-md bg-lightblue text-main-txt-color hover:bg-sky-700"><span class="mr-2">🐠</span>Regisztráció</router-link>
        </div>
    </div>
</div>
</template>
<script>

export default {
    data() {
        return {
            email: '',
            password: '',
            errors: {},
            message: null,
            formIsValid: true
        }
    },
    methods: {
        submitForm: async function() {
            this.message = null
            this.fieldValidation()
            
            if(!this.formIsValid) {
                return
            }

            try {
                await this.$store.dispatch("login", {
                    email: this.email,
                    password: this.password,
                    returnSecureToken: true
                })

                this.message = {
                    text: 'Successful login',
                    style: 'bg-green-600'
                }

                this.$router.push('/')
            } catch(err) {
                this.message = {
                    text: 'Login failed',
                    style: 'bg-red-600'
                }
            }
        },
        fieldValidation: function() {
            this.errors = {}
            this.formIsValid = true

            if(!this.email) {
                this.errors['email'] = 'Email field is required'
                this.formIsValid = false
            }
            if(!this.password) {
                this.errors['password'] = 'Password field is required'
                this.formIsValid = false
            } else if(this.password.length < 6) {
                this.errors['password'] = 'Password field should be 6 character or more'
                this.formIsValid = false
            }
        }
    }
}
</script>