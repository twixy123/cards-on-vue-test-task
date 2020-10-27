<template>
  <div class="body">
    <FilterTasks />
    <TasksList v-if="tasks.length"
               v-bind:tasks="tasks"
               v-bind:colors="colors"
               v-bind:icons="icons"
    />
    <p class="no_tasks" v-else>Нет записей</p>
  </div>
</template>

<script>
  import TasksList from "@/components/TasksList";
  import FilterTasks from "@/components/FilterTasks";
  import {mapGetters, mapActions} from 'vuex'

  export default {
    computed: mapGetters(['tasks', 'colors', 'icons']),
    methods: mapActions(['fetchTasks']),
    async mounted() {
      this.fetchTasks('https://furorprogress.uz/test/fp/test-tasks?page=1&perPage=100')
    },
    components: {
      TasksList, FilterTasks
    }
  }
</script>

<style lang="scss" scoped>
.no_tasks{
  width: 100%;
  text-align: center;
  font-family: 'Roboto';
  font-size: 20px;
  color: black;
}
</style>