<template>

  <div class="col-md-6 offset-md-3 mt-4">
    <div class="card" style="width: 40rem;">
      <img class="card-img-top" :src="movie.imageUrl" alt="Card image cap">
      <div class="card-body">
        
        <h5 class="card-title"><i style="color: #086A87">Movie: </i>{{ movie.title}}</h5>
        <h5 class="card-title"><i style="color: #086A87">Director: </i>{{ movie.director}}</h5>
        <h5 class="card-title"><i style="color: #086A87">Genre: </i>{{ movie.genre}}</h5>
        <h5 class="card-title"><i style="color: #086A87">Release Date: </i>{{ movie.releaseDate}}</h5>
        <h5 class="card-title"><i style="color: #086A87">Duration: </i>{{ movie.duration}}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

      </div>
    </div>
  </div>

</template>

<script>
import MoviesService from "./../services/MoviesService";

export default {
data() {
  return {
    movie: {}
  }
},
beforeRouteEnter(to, from, next){
  MoviesService.getId(to.params.id)
    .then((response) => {
      next((vm) => {
        vm.movie = response.data
      })
    })
}
};
</script>

<style>
</style>

