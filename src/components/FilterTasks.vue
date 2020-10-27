<template>
  <div class="select_div">
    <select
      @change="filter"
      v-model="section">
      <option value="" selected disabled>Выберите фильтр</option>
      <option value="1">Новые</option>
      <option value="2">Назначен исполнитель</option>
      <option value="3">Принят исполнителем</option>
      <option value="4">В процессе</option>
      <option value="5">На паузе</option>
      <option value="6">На проверке</option>
      <option value="7">Возвращен на доработку</option>
      <option value="8">Выполнен</option>
    </select>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    data(){
      return{
        section: ''
      }
    },
    methods:{
      ...mapMutations(['filterTasks']),
      filter(){
        this.filterTasks(this.section)
      }
    }
  }
</script>

<style lang="scss" scoped>

  .select_div{
    display: flex;
    justify-content: center;
  }
  select{
    padding: 10px;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 18px;
    color: black;
    border-radius: 5px;
    margin: 0 auto 40px;
    width: auto;
    cursor: pointer;
    border: 1px solid #ccc;
  }

  select:focus{
    border: 1px solid #ccc;
  }
</style>