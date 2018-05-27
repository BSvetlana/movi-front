<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/movies">Movies</router-link>
    <div class="navbar-nav w-100">
      <router-link
        class="nav-item nav-link active"
        to="/add-movie"
      >
        Add Movie
      </router-link>
            <router-link
        class="nav-item nav-link active"
        to="/register"
         v-if="!isAuth"
      >
        Register
      </router-link>
        
        <router-link class="nav-item nav-link active" to="/login" v-if="!isAuth">Login</router-link>
        <a class="nav-item nav-link active" v-on:click="logout()" v-if="isAuth">Logout</a>

      <movie-search
        @search-term-change="setSearchTerm"
        class="ml-auto"
      />
    </div>
  </nav>
</template>

<script>
import MovieSearch from "./MovieSearch.vue";
import { mapMutations, mapGetters } from "vuex";
import { authService } from "../services/Auth.js";

export default {
  name: "NavBar",
  components: {
    MovieSearch
  },
  data() {
    return {
      //isAuthenticated: authService.isAuthenticated()
    };
  },
  computed: {
    ...mapGetters({
      getAuthent: "getIsAuthenticated"
    }),
    isAuth() {
      return this.getAuthent;
    }
  },

  methods: {
    ...mapMutations(["setSearchTerm", "setIsAuthenticated"]),
    logout() {
      authService.logout();
      this.setIsAuthenticated(false);
      this.$router.push({ name: "login" });
    }
  }
};
</script>
