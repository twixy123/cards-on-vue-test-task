<template>
  <div class="card_template">
    <div class="showElement card_template__preview active">
      <h3 v-if="task.name">
        {{task.name}}
      </h3>
      <h3 v-else>
        Название проекта
      </h3>
    </div>

    <div class="showElement card_template__description">
      <div class="card_template__description_title">
        <h4>{{task.projects_name}}</h4>
        <svg-icon type="mdi" :path="icons[task.task_statuses_id]"></svg-icon>
      </div>

      <div class="card_template__description_main">
        <h3 v-if="task.name">
          {{task.name}}
        </h3>
        <h3 v-else>
          Название проекта
        </h3>

        <div class="card_template__description_detail">
          <div>
            <h4>Постановщик задачи:</h4>
            <p v-if="task.created_users_name">{{task.created_users_name}}</p>
            <p v-else>Тимур</p>
          </div>
          <div>
            <h4>Исполнитель задачи:</h4>
            <p v-if="task.curr_executor_name">{{task.curr_executor_name}}</p>
            <p v-else>Не найден</p>
          </div>
          <div>
            <h4>Категория:</h4>
            <p v-if="task.project_categories_name">{{task.project_categories_name}}</p>
            <p v-else>Не поставлена</p>
          </div>
        </div>

        <p class="card_template__description_status">
          <span>Статус:</span>
          <span>{{task.task_statuses_name}}</span>
        </p>

        <router-link :to="'/task/' + task.id">Детально »</router-link>
      </div>
    </div>

    <p
      @click="showCard(task)"
      class="showCard down"><span>»</span></p>
  </div>
</template>

<script>
  import SvgIcon from '@jamescoyle/vue-icon'

  export default {
    props: {
      task :{
        type: Object,
        required: true
      },
      colors: Object,
      icons:Array
    },
    methods:{
      showCard(task){
        let thisDiv = this.$el
        let btn = thisDiv.querySelector('.showCard')
        btn.classList.toggle('down')
        let divs = thisDiv.querySelectorAll('.showElement')
        divs.forEach(div => {
          div.classList.toggle('active')
        })
      },
    },
    mounted() {
      let cardTemplate = this.$el
      cardTemplate.style.background = this.colors.status[this.task.task_statuses_id]
    },
    components:{
      SvgIcon
    }
  }
</script>

<style lang="scss" scoped>
  .card_template {
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    height: fit-content;
    min-height: 230px;
    overflow: hidden;
  }

  .card_template__preview {
    height: 0;
    opacity: 0;
    transition: 1s all;
  }

  .card_template__preview.active {
    height: fit-content;
    max-height: 140px;
    overflow: hidden;
    display: flex;
    margin-top: 0;
    opacity: 1;
  }

  .showCard {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 0;
  }

  .showCard span {
    transform: rotate(-90deg);
    font-size: 24px;
    color: #fff;
    font-family: 'Montserrat';
    font-weight: 700;
    height: min-content;
    user-select: none;
  }

  .showCard.down span {
    transform: rotate(90deg);
  }

  .card_template__preview h3 {
    width: 100%;
    text-align: center;
    color: #fff;
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 20px;
    margin-top: 20px;
  }

  .card_template__description {
    height: 0;
    opacity: 0;
    margin-top: -300px;
    transition: .5s all;
  }

  .card_template__description.active {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: fit-content;
    margin-top: 0;
    opacity: 1;
  }

  .card_template__description_title {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .card_template__description_title h4 {
    color: rgba(255, 255, 255, 0.8);
    font-family: 'Montserrat';
    font-weight: 900;
    font-size: 14px;
  }

  .card_template__description_title svg {
    width: 26px;
    height: auto;
    color: rgba(255, 255, 255, 0.8) !important;
  }

  .card_template__description_main h3 {
    color: rgb(255, 255, 255);
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 16px;
  }

  .card_template__description_detail {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .card_template__description_detail h4 {
    color: rgba(255, 255, 255, 0.8);
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 14px;
    letter-spacing: -1px;
    margin-right: 15px;
  }

  .card_template__description_detail p {
    color: rgb(255, 255, 255);
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 16px;
  }

  .card_template__description_status {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .card_template__description_status span:first-child {
    color: rgba(255, 255, 255, 0.8);
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 12px;
    letter-spacing: -1px;
    margin-right: 10px;
  }

  .card_template__description_status span:last-child {
    color: rgb(255, 255, 255);
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 14px;
  }

  .card_template__description_main > a {
    color: rgb(255, 255, 255);
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 14px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }
</style>