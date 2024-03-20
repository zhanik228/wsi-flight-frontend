<template>
            <div class="register">
            <div class="register__img-wrapper">
                <!-- <img class="register__img" src="./media1/images/aircrafts/airbus.jpg" alt=""> -->
            </div>
            <form class="register-form" @submit.prevent="register">
                <div class="register-form__welcome-wrapper">
                    <h1 class="register-form__welcome">Welcome to FlightPool!</h1>
                </div>
                <div class="register-form__body-wrapper">
                    <h2 class="register-form__title">Register</h2>
                    <div class="register-form__inputs-wrapper">
                        <input v-model="first_name" class="register-form__input test-2-name" placeholder="Enter your Firts Name" type="text">
                        <input v-model="last_name" class="register-form__input test-2-last" placeholder="Enter your Last Name" type="text">
                        <input v-model="document_number" class="register-form__input test-2-doc" placeholder="Enter your Document number" type="number">
                        <input v-model="phone" class="register-form__input test-2-phone" placeholder="Enter your number" type="text">
                        <input v-model="password" class="register-form__input test-2-pass" placeholder="Enter your password" type="password">
                        <input class="register-form__input test-2-pass2" placeholder="Repeat your password" type="password">
                    </div>
                    <button class="primary-btn register-form__button test-2-btn">Create account</button>
                </div>
            </form>
        </div>
</template>

<script>
import { USER_REGISTER } from "@/constants/api/constants.js"
import router from '@/router/index.js'

export default {
    data() {
        return {
            'first_name': '',
            'last_name': '',
            'phone': '',
            'document_number': '',
            'password': ''
        }
    },
    methods: {
        async register() {
            const formdata = new FormData()
            formdata.append('first_name', this.first_name)
            formdata.append('last_name', this.last_name)
            formdata.append('phone', this.phone)
            formdata.append('document_number', this.document_number)
            formdata.append('password', this.password)

            const response = await fetch(USER_REGISTER, {
                method: 'POST',
                body: formdata,
            })
            console.log(await response)

            if (response.status === 204) {
                router.push({ path: '/' })
            }
        },
        mounted() {
            if (localStorage.getItem('token')) {
                router.push({ path: '/' })
            }
        }
    }
}
</script>