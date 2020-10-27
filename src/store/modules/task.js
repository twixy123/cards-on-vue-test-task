import {
  mdiAccount,
  mdiAccountCheck,
  mdiAccountPlus, mdiBackupRestore, mdiCheckCircleOutline,
  mdiClock,
  mdiEyeOutline,
  mdiNewBox,
  mdiPauseCircleOutline
} from "@mdi/js";

export default {
  state: {
    tasksArr: [],
    taskFilterArr: []
  },
  mutations: {
    updateTasks(state, json) {
      state.tasksArr = json
      state.taskFilterArr = json
    },
    filterTasks(state, id){
      state.taskFilterArr = state.tasksArr.filter(t=>t.task_statuses_id == +id)
    }
  },
  actions: {
    async fetchTasks(ctx, url) {
      const res = await fetch(url)
      const json = await res.json()

      ctx.commit('updateTasks', json.rows)
    }
  },
  getters: {
    tasks(state) {
      return state.taskFilterArr
    },
    colors() {
      return {
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
        type: [
          '#B2BEC3',
          '#6C5CE7',
          '#E17055',
          '#D6A2E8',
        ],
        platform: [
          '#E5E5E5',
          '#A29BFE',
          '#6C5CE7',
          '#B2BEC3',
          '#00B894',
        ],
        priority: [
          '#E5E5E5',
          '#E17055',
          '#00B894',
          '#FBC531',
        ]
      }
    },
    icons() {
      return [mdiAccount, mdiNewBox, mdiAccountPlus, mdiAccountCheck, mdiClock, mdiPauseCircleOutline, mdiEyeOutline,
        mdiBackupRestore, mdiCheckCircleOutline
      ]
    }
  }
}