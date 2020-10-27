<template>
  <div class="card">
    <div class="card__main-block">
      <div class="card__title">
        <h3 v-if="task.projects_name">{{task.projects_name}}</h3>
        <h3 v-else>FUROR PROGRESS</h3>
        <svg-icon v-if="task.task_statuses_id" type="mdi" :path="icons[task.task_statuses_id]"></svg-icon>
        <svg-icon v-else type="mdi" :path="icons[0]"></svg-icon>
      </div>

      <div class="card__main">
        <p v-if="task.name" class="card__main-title">
          {{task.name}}
        </p>
        <p v-else>Название проекта</p>
        <p class="card__main-description">
          It is a long established fact that a reader will be distracted by the readable content of a page
          when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as
          their default model text, and a search for 'lorem ipsum' will uncover many web sites still in
          their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on
          purpose (injected humour and the like).
        </p>
        <p class="card__main-status">
          <span>Статус:</span>
          <span v-if="task.task_statuses_name">{{task.task_statuses_name}}</span>
          <span v-else>Не найден</span>
        </p>
      </div>

    </div>

    <div class="card__detail-main">
      <div class="card__type">
        <h4>тип</h4>
        <p v-if="task.task_types_name">{{task.task_types_name}}</p>
        <p v-else>Не найден</p>
      </div>
      <div class="card__prioritet">
        <h4>приоритет</h4>
        <p v-if="task.task_priorities_name">{{task.task_priorities_name}}</p>
        <p v-else>Не найден</p>
      </div>
      <div class="card__platform">
        <h4>Платформа</h4>
        <p v-if="task.task_platforms_name">{{task.task_platforms_name}}</p>
        <p v-else>Не выбрана</p>
      </div>
      <div class="card__other">
        <div class="card__task-director">
          <h4>Постановщик задачи:</h4>
          <p v-if="task.created_users_name">{{task.created_users_name}}</p>
          <p v-else>Тимур</p>
        </div>
        <div class="card__task-performer">
          <h4>Исполнитель задачи:</h4>
          <p v-if="task.curr_executor_name">{{task.curr_executor_name}}</p>
          <p v-else>Не найден</p>
        </div>
        <div class="card__category">
          <h4>Категория:</h4>
          <p v-if="task.project_categories_name">{{task.project_categories_name}}</p>
          <p v-else>Не поставлена</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import SvgIcon from "@jamescoyle/vue-icon";

  export default {
    computed:mapGetters(['colors', 'icons']),
    props:{
      task:{
        type:Object,
        required:true
      }
    },
    mounted() {
      let cardTitle = document.querySelector('.card__title')
      let cardType = document.querySelector('.card__type').querySelector('h4')
      let cardPlatform = document.querySelector('.card__platform').querySelector('h4')
      let cardPrioritet = document.querySelector('.card__prioritet').querySelector('h4')

      cardTitle.style.background = this.colors.status[this.task.task_statuses_id]
      cardType.style.background = this.colors.type[this.task.task_types_id] || this.colors.type[0]
      cardPlatform.style.background = this.colors.platform[this.task.task_platforms_id] || this.colors.platform[0]
      cardPrioritet.style.background = this.colors.priority[this.task.task_priorities_id] || this.colors.priority[0]
    },
    components:{
      SvgIcon,
    }
  }
</script>

<style lang="scss" scoped>

  .card{
    display: grid;
    grid-template-columns: 8fr 4fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }

  @media (max-width: 760px) {
    .card{
      grid-template-columns: 1fr;
    }

    .card__detail-main{
      margin: 0 auto;
    }
  }

  .card__main-block{
    overflow: hidden;
    border-radius: 10px;
    border: 2px solid #777777;
    display: grid;
    grid-template-rows: 80px auto;
  }


  .card__title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    background-color: #00B894;
  }

  .card__title h3{
    font-family: 'Montserrat';
    font-weight: 900;
    color: rgba(255, 255, 255, 0.8);
    font-size: 20px;
    line-height: 20px;
  }

  .card__title svg{
    width: 40px;
    height: 40px;
    color: rgba(255, 255, 255, 0.8) !important;
  }

  .card__main{
    padding: 30px 20px;
  }

  .card__main-title{
    margin-bottom: 35px;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 20px;
    color: #000;
  }

  .card__main-description{
    font-size: 18px;
    color: #333;
    font-family: 'Roboto';
  }

  .card__main-status{
    margin-top: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .card__main-status span:first-child{
    font-family: 'Montserrat';
    font-weight: 600;
    color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
    margin-right: 15px;
    line-height: 21px;
  }

  .card__main-status span:last-child{
    font-size: 18px;
    color: rgba(0, 0, 0, 0.8);
    font-family: 'Roboto';
    font-weight: 700;
  }

  .card__detail-main{
    display: grid;
    grid-template-rows: 70px 70px 70px auto;
    grid-row-gap: 15px;
  }

  .card__detail-main > div > h4{
    height: 40px;
    display: flex;
    align-items: center;
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 18px;
    color: #ffffff;
    letter-spacing: -1px;
    box-sizing: border-box;
    padding: 0 10px;
    border-radius: 5px;
    text-transform: capitalize;
  }

  .card__detail-main > div > p{
    font-size: 16px;
    color: rgb(0, 0, 0);
    font-family: 'Roboto';
    font-weight: 500;
    padding: 5px 10px;
    text-transform: capitalize;
  }

  .card__other{
    border-radius: 5px;
    border: 2px solid #777777;
    padding: 20px 10px;
  }

  .card__other > div{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }


  .card__other > div > h4{
    align-items: center;
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.8);
    letter-spacing: -1px;
    margin-right: 15px;
    text-transform: capitalize;
  }

  .card__other > div > p{
    font-size: 16px;
    color: rgb(0, 0, 0);
    font-family: 'Roboto';
    font-weight: 500;
    text-transform: capitalize;
    padding: 10px 0;
  }
</style>