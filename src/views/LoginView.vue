<template>
        <div class="login">
            <div class="login__img-wrapper">
                <img class="login__img" src="./media1/images/aircrafts/airbus.jpg" alt="">
            </div>
            <form class="login-form" @submit.prevent="login">
                <div class="login-form__welcome-wrapper">
                    <h1 class="login-form__welcome">Welcome back to FlightPool!</h1>
                </div>
                <div class="login-form__body-wrapper">
                    <h2 class="login-form__title">Login</h2>
                    <div class="login-form__inputs-wrapper">
                        <input v-model="phone" class="login-form__input test-1-fpn" placeholder="Enter your number" type="text">
                        <input v-model="password" class="login-form__input test-1-fps" placeholder="Enter your password" type="password">
                    </div>
                    <button class="primary-btn login-form__button test-1-fbs">Log In</button>
                    {{ errors.join(' ') }}
                </div>
            </form>
        </div>
</template>

<script>
import { USER_LOGIN } from "@/constants/api/constants.js"
import router from "@/router"

export default {
    data() {
        return {
            phone: '',
            password: '',
            errors: []
        }
    },
    methods: {
        async login() {
            try {
                const formdata = new FormData()
                formdata.append('phone', this.phone)
                formdata.append('password', this.password)
                console.log(this.phone, this.password)
                const loginRequest = await fetch(USER_LOGIN, {
                    method: "POST",
                    body: formdata
                })

                const token = await loginRequest.json()
                localStorage.setItem('token', token)
                this.$route.push({ path: '/' })
            } catch (error) {
                let errors = error.errors
            }
        }
    },
    mounted() {
        if (localStorage.getItem('token')) {
            router.push({ path: '/' })
        }
    }
}
</script>