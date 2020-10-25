<template>
  <div class="body">
    <span class="mdi mdi-new-box"></span>
    <TasksList
      v-bind:tasks="tasks"
      v-bind:colors="colors"
      v-bind:icons="icons"
    />
  </div>
</template>

<script>
  import TasksList from "../components/TasksList";
  import { mdiAccount, mdiNewBox, mdiAccountCheck, mdiAccountPlus, mdiClock, mdiPauseCircleOutline, mdiEyeOutline, mdiBackupRestore, mdiCheckCircleOutline} from '@mdi/js'

  export default {
    data(){
      return{
        tasks:[],
        colors: {
          status: [
            '#ffffff',
            '#B2BEC3',
            '#B33771',
            '#00CEC9',
            '#74B9FF',
            '#FBC531',
            '#A29BFE',
            '#E17055',
            '#00B894',
          ],
          type:[
            '#B2BEC3',
            '#6C5CE7',
            '#E17055',
            '#D6A2E8',
          ],
          platform:[
            '#ffffff',
            '#A29BFE',
            '#6C5CE7',
            '#B2BEC3',
            '#00B894',
          ],
          priority:[
            '#ffffff',
            '#E17055',
            '#00B894',
            '#FBC531',
          ]
        },
        icons:[
          mdiAccount,
          mdiNewBox,
          mdiAccountPlus,
          mdiAccountCheck,
          mdiClock,
          mdiPauseCircleOutline,
          mdiEyeOutline,
          mdiBackupRestore,
          mdiCheckCircleOutline
        ],
      }
    },
    mounted() {
      fetch('https://furorprogress.uz/test/fp/test-tasks?page=1&perPage=10')
        .then(response => response.json())
        .then(json => this.tasks = json.rows)
    },
    components:{
      TasksList
    }
  }
</script>

<style lang="scss" scoped>

</style>