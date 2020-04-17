
<template class="container-fluid">
  <div>
    <input
      v-model="search"
      id="sortJokes"
      class="form-control form-control-sm ml-3 w-75"
      type="text"
      placeholder="Find jokes by user!"
      aria-label="Search"
    />
    <div class="allJokes row">
      <div class="col-12 m-3">
        <joke v-for="joke in sortJokes" :jokeData="joke" :key="joke._id"></joke>
      </div>
    </div>
  </div>
</template>


<script>
import Joke from "../components/Joke.vue";
export default {
  name: "allJokes",
  data() {
    return {
      search: ""
    };
  },
  created() {
    this.$store.dispatch("getJokes");
  },
  computed: {
    allJokes() {
      return this.$store.state.jokes;
    },
    sortJokes: function() {
      return this.$store.state.jokes.filter(email => {
        return email.creatorEmail.match(this.search);
      });
    }
  },

  methods: {},
  
  components: {
    Joke
  }
};
</script>


<style scoped>
</style>