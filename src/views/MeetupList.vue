<template>
     <div class="container">
    
    <h1 class="product-head">Meetups </h1><br>

 <input type="text" placeholder="Look for Meetups" v-model="search" />

    <div class="meetup-div">
      <ul>
        <li v-for="meetup in filteredList" :key="meetup.id">
             <h1 class="meetup-title">{{ meetup.title }}</h1>
                <div class="thumbnail" :style="'height: auto; width: 200px;'">
                  <img class="meetup-image" :src="require('@/assets/' + meetup.image + '.png')" />
            </div>
              <p> {{ meetup.Address }}</p>
              <p> {{ meetup.Date }}</p>
              <h3>{{ meetup.detail }}Info</h3>
              <button class="addcart" @click="$router.push({ name: 'Meet', params: { id: meetup.id, meetup } })">Signup for </button>
    
        
        </li>
      </ul>
      </div>
      
  


    
   </div> 
</template>


<script>
import axios from "axios";
// import Meet from "@/components/Meet.vue"


export default {
    name:"MeetupList",
    
    // components: {
    //     Meet
    //   },
    

  data(){
    return{
       search: "",
       meetups: [],
      
       
    };
    
 },

 async created() {
    try {
      const res = await axios.get(` http://localhost:3000/meetups`);
      this.meetups = res.data;
    } catch (e) {
      console.log(e);
    }
  },


   computed: {
    filteredList() {
      return this.meetups.filter((meetup) => {
        return meetup.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },

  // methods:{
  //    signUp(id){
  //     this.$router.push( '/MeetupList'+ id);

  //   }
    
}
  

 
</script>

<style scoped>

.thumbnail{
    margin-left: auto;
    margin-right: auto;
} 

.container {
  display:flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(#ad7aa5, #d9a6e4);
  max-width: 1440px;
  padding: 1rem 10rem;
  margin: 0 auto 100px auto;
  Height:auto;
}
.product-head {
  font-weight: 800;
  font-size: 24px;
}


ul {
  /* list-style: none;
  display: grid;
  gap: 6rem 1rem;
  grid-template-columns: repeat(2, 1fr); */
  display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;
    margin-left: auto;
    margin-right: auto;
    

}
li {
  background: whitesmoke;
  box-shadow: 5px 5px 6px #00000080;
  margin: 20px;
  border-radius: 7.25px;
  height: 400px;
  width: 400px;
  padding-left:25px;
  
}
h1 {
  font-weight: 400;
  font-size: 20px;
  top: 0;
  left: 0;
}
h3 {
  font-weight: 300;
  font-size: 20px;
  top: 0;
  left: 0;
}
h4 {
  font-weight: 300;
  font-size: 18px;
  top: 0;
  left: 0;
}
.order-counter {
  top: 0;
  left: 0;
  justify-content: center;
}
input[type="text"] {
  height: 45px;
  width: 45%;
  border-radius: 25.5px;
  border: none;
  outline: none;
  padding-left: 15px;
}
.addcart {
  color: #fff;
  font-size: 16px;
  background: #4dcc62;
  border: none;
  border-radius: 10px;
  outline: none;
  padding: 0.8rem;
  font-weight: bold;
  cursor: pointer;
}
.addcart:hover {
  background: #57e26e;
}
.addcart:active {
  border-radius: 12.5px;
}
.icon {
  padding-left: 300px;
}
.meetup-image {
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  height: 90px;

}



</style> 
 