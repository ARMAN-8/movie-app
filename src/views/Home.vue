<template>
  <div class="home bg-landingBG">
    <navBar/>
    <img alt="Vue logo" src="../assets/logo.png">
    <landing-content/>
  </div>
</template>

<script>
// @ is an alias to /src
import navBar from "../components/landing/navBar";
import landingContent from "../components/landing/landingContent";

export default {
  name: 'Home',
  components: {
    navBar,
    landingContent,
  }
}
</script>
<style>
  .home {
    background: #201D47;
    /*background: url('src/assets/img/landing-img.png');*/
    height: 100vh;
  }
</style>
