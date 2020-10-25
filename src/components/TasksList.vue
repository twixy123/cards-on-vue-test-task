<template>
  <section class="cards container">
    <TaskCardTemplate
      v-for="task of tasks"
      :key="task.id"
      v-bind:task="task"
      v-bind:colors="colors"
      v-bind:icons="icons"
    />
  </section>
</template>

<script>
  import TaskCardTemplate from "./TaskCardTemplate";

  export default {
    props: {
      tasks :{
        type: Array,
        required: true
      },
      colors:Object,
      icons:Array
    },
    components: {
      TaskCardTemplate
    }
  }
</script>

<style lang="scss" scoped>
  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
</style>