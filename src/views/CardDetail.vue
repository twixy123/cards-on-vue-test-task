<template>
  <section class="container">
    <CardDetailTemplate
      v-if="task"
      v-bind:task="task"
    />
    <Loader v-else/>
  </section>
</template>

<script>
  import {mapActions, mapGetters} from "vuex";
  import CardDetailTemplate from "@/components/CardDetailTemplate";
  import Loader from "@/components/Loader"

  export default {
    computed: {
      ...mapGetters(['tasks']),
      task() {
        let task
        task = this.tasks.filter(t => t.id === +this.$route.params.id)[0]
        return task
      }
    },
    methods: mapActions(['fetchTasks']),
    async mounted() {
      await this.fetchTasks('https://furorprogress.uz/test/fp/test-tasks?page=1&perPage=100')
    },

    components: {
      CardDetailTemplate, Loader
    }
  }
</script>

<style lang="scss" scoped>


</style>