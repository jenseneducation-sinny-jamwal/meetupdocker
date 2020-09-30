import Home from '@/components/Home'
import MeetupList from '@/views/MeetupList'
import About from '@/views/About'
import Create from '@/views/Create'
import SignIn from '@/views/SignIn'
import Meet from '@/components/Meet'



export default [

     {
       path: '/',
       name: "Home",
       component: Home
    },

  {
    path: '/MeetupList',
    name: "MeetupList",
    component: MeetupList
  },

  

  {
    path: '/About',
    name: "About",
    component: About
  },
  
  {
    path: '/create',
    name: "Create",
    component: Create
  },

  {
    path: '/signin',
    name: "SignIn",
    component: SignIn
  },

  {
    path: '/MeetupList/id',
    name: "Meet",
    component: Meet,
    props:true
  },

 
];