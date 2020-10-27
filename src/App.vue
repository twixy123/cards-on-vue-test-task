<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
  import Header from "@/components/Header";
  export default {
    components:{
      Header
    }
  }
</script>

<style lang="scss">

  @import "./assets/fonts/montserat/fonts.css";
  @import "./assets/fonts/nunito/fonts.css";
  @import "./assets/fonts/roboto/fonts.css";

  *{
    margin: 0;
    padding: 0;
    list-style: none;
    /* outline: 1px solid red; */
  }

  a{
    text-decoration: none;
  }

  .container{
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
    background: none !important;
    border: none !important;
  }

  #app{
    display: grid;
    grid-row-gap: 40px;
    grid-auto-rows: minmax(80px, auto);
  }

</style>
