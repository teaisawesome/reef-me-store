<template>
    <nav class="h-10vh flex justify-between text-main-txt-color">
        <div class="text-1/5xl ml-16 flex justify-center items-center">
            <span>Reef Me</span>
            <span>🪸</span>
        </div>
        <div class="mr-16 flex justify-around w-1/5">
            <router-link class="flex justify-center items-center" to="/">Home</router-link>
            <router-link class="flex justify-center items-center" to="/login">Login</router-link>
            <p v-if="isLoggedIn" class="flex justify-center items-center">{{ userEmail }}</p>
        </div>
    </nav>
</template>
<script>
export default {
    computed: {
        isLoggedIn: function() {
            return this.$store.getters.isAuthenticated
        },
        userEmail: function() {
            return this.$store.getters.getEmail
        }
    }
}
</script>