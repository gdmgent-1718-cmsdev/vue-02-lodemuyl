import Vue from 'vue'
import Router from 'vue-router'
import course from '@/components/Course'
import instructor from '@/components/Instructor'
import student from '@/components/Student'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Course',
      component: course
    },
    {
      path: '/Instructor',
      name: 'Instructor',
      component: instructor
    },
    {
      path: '/Student',
      name: 'Student',
      component: student
    }

  ]
})
