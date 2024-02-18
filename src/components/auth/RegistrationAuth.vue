<template>
    <div>
        <form @submit.prevent="submitForm" class="flex flex-col justify-center w-3/4 mx-auto">
            <label for="firstname">Firstname</label>
            <input type="text" v-model.trim="firstname">
            <label for="surname">Lastname</label>
            <input type="text" v-model.trim="lastname">
            <label for="email">Email</label>
            <input type="email" v-model="email">
            <label for="password">Password</label>
            <input type="password" v-model="password">
            <button class="p-3 mt-5 rounded-xl shadow-md bg-lightblue text-main-txt-color hover:bg-sky-700">Create User</button>
        </form>
        <p v-if="isLoading" class="text-white">Loading...</p>
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
            isLoading: false
        }
    },
    methods: {
        async submitForm() {
            try {
                await this.$store.dispatch('registration', {
                    firstname: this.firstname,
                    lastname: this.lastname,
                    email: this.email,
                    password: this.password,
                })
            } catch(err) {
                console.log("ERR", err)
            }
            
        }
    }
}
</script>
<style scoped>
label {
    color: whitesmoke;
}
</style>