<template>
  <div class="joke m-5 card border-danger text-center p-3">
    <p>{{jokeData.setup}}</p>
    <button v-on:click="revealJoke = !revealJoke" class="btn btn-lg btn-dark text-warning">Reveal</button>
  <h4 class="p-2 mt-3" v-show="revealJoke" >{{jokeData.punchline}}</h4>
  </div>
</template>


<script>
export default {
  name: 'joke',
  props: ["jokeData"],
  data(){
    return {
      revealJoke: false
    }
  },
  computed:{},
  methods:{},
  components:{}
}
</script>


<style scoped>

</style>