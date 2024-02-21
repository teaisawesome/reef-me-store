<template>
    <div class="bg-slate-50 text-black p-10 rounded-xl w-96 mx-auto md:w-1/2 lg:w-1/2 lg:bg-red-500">
        <h2 v-if="message" :class="message.style" class="rounded-md p-3 mb-5 shadow-md text-slate-50">{{ message.text }}</h2>
        <h1 class="text-3xl mb-10">Registration</h1>
        <form @submit.prevent="submitForm" class="flex flex-col justify-center w-11/12">
            <div class="mb-5">
                <label for="firstname" class="block mb-1">Firstname <span class="text-red-600">*</span></label>
                <input type="text" v-model.trim="firstname" class="block border-solid border-b border-slate-500 focus:outline-none focus:border-slate-700 bg-transparent w-72 md:w-80">
                <p v-if="errors.firstname" class="mt-3 bg-red-600 text-sky-50 p-1 pl-2 w-72 md:w-80">{{ errors.firstname }}</p>
            </div>
            <div class="mb-5">
                <label for="lastname">Lastname <span class="text-red-600">*</span></label>
                <input type="text" v-model.trim="lastname" class="block border-solid border-b border-slate-500 focus:outline-none focus:border-slate-700 bg-transparent w-72 md:w-80">
                <p v-if="errors.lastname" class="mt-3 bg-red-600 text-sky-50 p-1 pl-2 w-72 md:w-80">{{ errors.lastname }}</p>
            </div>
            <div class="mb-5">
                <label for="email">Email <span class="text-red-600">*</span></label>
                <input type="email" v-model="email" class="block border-solid border-b border-slate-500 focus:outline-none focus:border-slate-700 bg-transparent w-72 md:w-80">
                <p v-if="errors.email" class="mt-3 bg-red-600 text-sky-50 p-1 pl-2 w-72 md:w-80">{{ errors.email }}</p>
            </div>
            <div class="mb-5">
                <label for="password">Password <span class="text-red-600">*</span></label>
                <input type="password" v-model="password" class="block border-solid border-b border-slate-500 focus:outline-none focus:border-slate-700 bg-transparent w-72 md:w-80">
                <p v-if="errors.password" class="mt-3 bg-red-600 text-sky-50 p-1 pl-2 w-72 md:w-80">{{ errors.password }}</p>
            </div>
            <div class="mb-5">
                <input type="checkbox" class="mr-2" v-model="generalTermsChecked">
                <label for="aszf">I accept the Privacy Policy and the Terms of Service</label>
                <p v-if="errors.generalTermsChecked" class="mt-3 bg-red-600 text-sky-50 p-1 pl-2 w-72 md:w-80">{{ errors.generalTermsChecked }}</p>
            </div>
            <button type="submit" class="p-3 mt-5 rounded-xl shadow-md bg-lightblue text-main-txt-color hover:bg-sky-700 w-72 md:w-80">Create User</button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            message: null,
            errors: {},
            formIsValid: true,
            generalTermsChecked: false
        }
    },
    methods: {
        async submitForm() {
            this.message = null
            this.validateForm()

            if(!this.formIsValid) {
                return
            }

            try {
                await this.$store.dispatch('registration', {
                    firstname: this.firstname,
                    lastname: this.lastname,
                    email: this.email,
                    password: this.password,
                })

                this.message = {
                    text: 'Successful registration',
                    style: 'bg-green-600'
                }
            } catch(err) {
                this.message = {
                    text: 'Registration failed',
                    style: 'bg-red-600'
                }
            }
        },
        validateForm() {
            this.errors = {}
            this.formIsValid = true

            if(!this.firstname) {
                this.errors['firstname'] = 'Firstname field is required'
                this.formIsValid = false
            }
            if(!this.lastname) {
                this.errors['lastname'] = 'Lastname field is required'
                this.formIsValid = false
            }
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
            if(!this.generalTermsChecked) {
                this.errors['generalTermsChecked'] = 'General terms and conditions are required'
                this.formIsValid = false
            }
        }
    }
}
</script>
<style scoped>
</style>