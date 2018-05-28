<template>
  <div class=" col-sm-6 col-md-6 mb-4">
    <div class="card" :class="{ 'bg-dark text-white': selected }">
      <img class="card-img-top" :src="movie.imageUrl" alt="Card image cap">
      <div class="card-body">
        
        <h5 class="card-title"><i style="color: #086A87">Movie: </i><router-link :to="{ name: 'movieId', params: {id: movie.id}}">{{ movie.title}}</router-link></h5>
        <h5 class="card-title"><i style="color: #086A87">Director: </i>{{ movie.director}}</h5>
        <h5 class="card-title"><i style="color: #086A87">Genre: </i>{{ movie.genre}}</h5>
        <h5 class="card-title"><i style="color: #086A87">Release Date: </i>{{ movie.releaseDate}}</h5>
        <h5 class="card-title"><i style="color: #086A87">Duration: </i>{{ movie.duration}}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div class="col-sm">
            <b-button
              size="lg"
              type="submit"
              variant="primary"
              @click="onSelected">
              Select / Deselect
            </b-button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieRow",
  props: {
    movie: {
      type: Object,
      required: true
    },
    selectedMoviesIds: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  computed: {
    selected() {
      return this.selectedMoviesIds.indexOf(this.movie.id) > -1;
    }
  },
  methods: {
    onSelected() {
      this.$emit("on-selected-movie", this.movie, !this.selected);
    }
  }
};
</script>

<style>
</style>


