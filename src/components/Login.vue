<template>
  <div class="container mt-4">
    <form class="form-signin" @submit.prevent="login">
      <h2 class="form-signin-heading">Please login</h2>
      <input v-model="email" type="text" class="form-control mb-2" name="email" placeholder="Email Address" required autofocus />
        <span v-if="error.length" class="error">
            <div  class="alert alert-danger" role="alert">
                {{ this.error }}
            </div>
        </span>
      <input v-model="password" type="password" class="form-control mb-2" name="password" placeholder="Password" required />
          <span v-if="error.length" class="error">
            <div  class="alert alert-danger" role="alert">
                {{ this.error }}
            </div>
        </span>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { authService } from '../services/Auth.js'
import { mapMutations } from 'vuex'

  export default {
    data() {
      return {
        email: '',
        password: '',
        error: ''
      }
    },
    methods: {
      ...mapMutations(["setIsAuthenticated"]),
      login() {
        authService.login(this.email,this.password)
        .then((response) => {
          this.$router.push({name: 'movies'});
          this.setIsAuthenticated(true);
        }).catch((error) => {
            this.error = error.response.data.error
            
          })
      }
    }
  }
</script>