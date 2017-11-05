<template>
  <div id="app">
    <header>
      <span>REST-exportview</span>  
      <div class="nav">
        <router-link class="routerlink" to="/">Course</router-link>
        <router-link class="routerlink" to="/Instructor">Instructor</router-link>
        <router-link class="routerlink" to="/Student">Student</router-link>
      </div>      
    </header>
    <main>
      <img src="http://www.arteveldehogeschool.be/explo/wp-content/uploads/2015/12/ARTEV_lo_met_baseline_xsml_RGB.png" alt="Vue.js PWA">
      <router-view>

      </router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}
.nav{
display: inline-block;
margin-top: 16px;
float: right;
}
.routerlink{
  -moz-transition: all .2s ease-out;
    -o-transition: all .2s ease-out;
    -webkit-transition: all .2s ease-out;
    transition: all .2s ease-out;   
  color: white;
  text-decoration: none;
  margin: 0px 10px;
}
.router-link-exact-active.router-link-active{
  color: #41B883;
}
.routerlink:hover{
  -moz-transition: all .2s ease-in;
    -o-transition: all .2s ease-in;
    -webkit-transition: all .2s ease-in;
    transition: all .2s ease-in;
    color: #41B883;
}
.routerlink:mouse
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 20% 0 ;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: inline-block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
