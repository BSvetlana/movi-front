<template>
    <div class="container mt-4">
    <form class="form-signin" @submit.prevent="register">
      <h2 class="form-signin-heading">Please register</h2>
      <input v-model="userRegister.name" type="text" class="form-control mb-2" name="name" placeholder="Username"  autofocus />
        <span v-if="errors.name" class="error">
            <div  v-for="error in errors.name" :key="error" class="alert alert-danger" role="alert">
                {{ error }}
            </div>
        </span>
      <input v-model="userRegister.email" type="text" class="form-control mb-2" name="email" placeholder="Email Address" required />
        <span v-if="errors.email" class="error">
            <div  v-for="error in errors.email" :key="error" class="alert alert-danger" role="alert">
                {{ error }}
            </div>
        </span>
      <input v-model="userRegister.password" type="password" class="form-control mb-2" name="password" placeholder="Password" required />
        <span v-if="errors.password" class="error">
            <div  v-for="error in errors.password" :key="error" class="alert alert-danger" role="alert">
                {{ error }}
            </div>
        </span>
      <input v-model="userRegister.password_confirmation" type="password" class="form-control mb-2" name="confirm " placeholder="Confirm Password" required/>

      <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
    </form>
    </div>
</template>

<script>
import { register } from './../services/Register.js'

export default {
    name: 'AppRegister',
    data() {
        return {
            userRegister: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
                
                },
                errors: []
            }
    },
    methods: {
        register(){
            register.addUser(this.userRegister)
            .then(() => {
                this.$router.push('/login')
            }).catch((error) => {
                if(error.response.status == 422) {
                    this.errors = error.response.data.errors;

                }
            })
        }
    }
}
</script>

<style>

</style>


