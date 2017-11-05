<template>
  <div>
    <div class="Get">
      <h1>Get</h1>
      <ul>
        <li class="lii" v-for="item in studenten">
          {{ item.name[0].value }}  {{ item.field_first_name[0].value }}
        </li>
      </ul>           
    </div>
    <div class="Post">
      <h1>Post</h1>
      <form class="container" v-on:submit.prevent="postPost">    
      <div class="row">
        <div class="input-field col s6">
          <input  id="firstname" type="text" class="validate" v-model="addfirstname">
          <label class="active" for="firstname"> Voornaamnaam</label>
        </div>
        <div class="input-field col s6">
          <input  id="naam" type="text" class="validate" v-model="addname">
          <label class="active" for="naam">Achternaam</label>
        </div>
      </div>      
      <div class="row">
        <div class="input-field col s12">
        <div v-model="selected">
        <p>Selecteer de courses</p>
          <p v-for="item in courses">
            <input type="checkbox" v-bind:id="item.name[0].value" />
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
  name: 'student',
  data (){
    return {
      msg: 'student',
      studenten: [],
      courses: [],
      addname: '',
      addfirstname: '',
      selected: [],
      errors: []
    }
  },
  // Fetches posts when the component is created.
  created() {
    axios.all([
      axios.get(`http://localhost:80/drupal/students`),
      axios.get(`http://localhost:80/drupal/courses`)
    ])
    .then(axios.spread((students, courses) => {
      // JSON responses are automatically parsed.
      this.studenten = students.data,
      this.courses = courses.data
    }))
    .catch(e => {
      this.errors.push(e)
    })  
  },
    postPost() {
    axios.post(`http://localhost:80/drupal/students`, {
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

ul {
  list-style-type: none;
  padding: 0;
}
.lii{
  display: block;
  text-align: center;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
