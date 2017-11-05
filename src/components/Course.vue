<template>
<div>
    <div class="Get">    
      <h1>Get</h1>  
      <ul id="">
        <li class="lii" v-for="item in courses">
          {{ item.name[0].value }}
        </li>
      </ul>   
    </div>
      <div class="Post">
      <h1>Post</h1>
      <form class="container" v-on:submit.prevent="postCourse">    
      <div class="row">
        <div class="input-field col s6">
          <input  id="name" type="text" class="validate" v-model="name">
          <label class="active" for="name"> Name</label>
        </div>
        <div class="input-field col s6">
          <input  id="institution" type="text" class="validate" v-model="institution">
          <label class="active" for="institution">Institution</label>
        </div>
      </div>      
      <div class="row">
        <div class="input-field col s12">
          <div v-model="selectedstudents">
            <p>Selecteer de studenten voor dit vak</p>        
            <p v-for="item in students">
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
  name: 'course',
  data () {
    return {
      msg: 'Course',
      name: '',
      institution: '',
      students: [],
      selectedstudents: [],
      courses: []
    }
  },
  // Fetches posts when the component is created.
  created() {
    axios.all([
      axios.get(`http://localhost:80/drupal/courses`),
      axios.get(`http://localhost:80/drupal/students`)
    ])
    .then(axios.spread((response, students) => {
      // JSON responses are automatically parsed.
      this.courses = response.data,
      this.students = students.data
    }))
    .catch(e => {
      this.errors.push(e)
    })  
  },
   postCourse() {
    axios.post(`http://localhost:80/drupal/entity/instructor`, {
       headers: {
                accept: 'application/json',
                'accept': 'application/hal+json',
                'content-type': 'application/hal+json',
                'X-CSRF-Token': 'tWVIcxL8AtKaMPplzhn1rs99XpxgsSqy98oi9qDxuMQ'
            }, auth: {
                username: cmsdev-user,
                password: cmsdev-pass
            }, body: {
                password: credentials.password,
                username: credentials.username,
                grant_type: 'password',
                scope: 'read write',
                client_secret: Config.clientSecret,
                client_id: Config.clientId
            }
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
