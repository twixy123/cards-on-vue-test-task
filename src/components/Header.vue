<template>
  <header>
    <nav class="nav container">
      <router-link to="/">LOGO</router-link>
      <ul class="nav__menu">
        <li class="nav__list">
          <router-link
            to="/"
            exact
            class="nav__link"
            active-class="active"
          >
            Home
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  header{
    width: 100%;
    background: rgb(237, 241, 242);
  }

  .nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: none;
  }

  .nav>a{
    font-family: 'Montserrat';
    font-weight: 900;
    color: #000;
    font-size: 30px;
    line-height: 30px;
  }

  .nav>a:hover{
    color: rgba(0, 0, 0, 0.8);
  }

  .nav__menu{
    display: flex;
    height: 100%;
  }

  .nav__list{
    height: 100%;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav__link{
    font-family: 'Nunito-sans_Semibold';
    font-size: 18px;
    text-transform: uppercase;
    text-decoration: none;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav__link.active{
    background: rgb(217, 216, 216);
  }

  .nav__link:hover{
    background: rgb(222, 222, 222);
  }
</style>