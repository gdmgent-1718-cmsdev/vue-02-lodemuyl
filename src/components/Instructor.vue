<template>
<div>
    <div class="Get">
      <h1>Get</h1>
      <ul id="">
        <li class="lii" v-for="item in instructors">
          {{ item.field_academic_title[0].value }}  {{ item.name[0].value }}  {{ item.field_first_name[0].value }}
        </li>
      </ul>
    </div>
     <div class="Post">
      <h1>Post</h1>
      <form class="container" v-on:submit.prevent="postinstructor">    
      <div class="row">
        <div class="input-field col s6">
          <input  id="firstname" type="text" class="validate" v-model="addfirstnamein">
          <label class="active" for="firstname"> Voornaamnaam</label>
        </div>
        <div class="input-field col s6">
          <input  id="naam" type="text" class="validate" v-model="addnamein">
          <label class="active" for="naam">Achternaam</label>
        </div>
      </div>      
      <div class="row">
        <div class="input-field col s6">

        <div v-model="academicrankselect">
          <p>Selecteer academic rank</p>
          <p v-for="item in academicranks">
            <input class="filled-in" type="checkbox" v-bind:id="item.name[0].value"/>
            <label v-bind:for="item.name[0].value">{{ item.name[0].value }}</label>
          </p>
        </div>
        </div>
        <div class="input-field col s6">
          <div v-model="academictitleselect">
          <p>Selecteer academic title</p>
          <p v-for="item in academictitleselect">
            <input class="filled-in" type="checkbox" v-bind:id="item.name[0].value"/>
            <label v-bind:for="item.name[0].value">{{ item.name[0].value }}</label>
          </p>
        </div>     
        </div>
      </div>
      <button class="btn waves-effect waves-light" type="submit" name="action" >Post
      <i class="material-icons right">send</i>
      </button>
    </form>
    </div>   
</div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'instructor',
  data () {
    return {
      msg: 'Instructor',
      addfirstnamein: '',
      addnamein: '',
      academicranks: [],
      academictitles: [],
      academicrankselect: [],
      academictitleselect: [],
      instructors: []
    }
  },
  // Fetches posts when the component is created.
  created() {
    axios.get(`http://localhost:80/drupal/instructors`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.instructors = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })  
  },
  postinstructor() {
    axios.post(`http://localhost:80/drupal/instructors`, {
      body: this.postBody
    })
    .then(response => {})
    .catch(e => {
      this.errors.push(e)
    })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
.lii{
  display: block;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
