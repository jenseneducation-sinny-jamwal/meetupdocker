<template>
   <div class="meetup-main" v-if ="meetup">
    <div class="id-content">
      <h1>Are You Intrested In this Meetup!
            <span class="close" @click="$router.go(-1)">&times;</span>
         </h1>
     
       <h2 class="title">
            {{ meetup.title }}
       </h2>
       <img class="meetup-image" :src="require('@/assets/' + meetup.image + '.png')"  style="width:400px; height:250px;" />
         <h3 class="Address">
            {{ meetup.Address }} <br>
            {{ meetup.Date}}
       </h3>

         <p class="deatils"> Read More About this Meetup <br>{{ meetup.details }}</p>
          <button class="signup" @click="signupDetails">Register Here</button>
    
    </div>
  </div>

</template>

<script>

export default {
  name: "Meet",
  props: {
    meetup: {
      type: Object,
      default: null,
    },
  },
  
  
   methods: {
    signupDetails(){
         this.$router.push('/signin');
    }
  }
};
  

</script>

<style scoped>
 /* *{background-color: rgb(231, 182, 229);}  */

.meetup-main{
  margin:30px;
  display:flex;
}

.id-content{
  margin:40px;
  margin-left: 40px;
  padding:30px;
  background-color: rgb(206, 121, 187);
}

.close{
 
  margin-left:400px;
  margin-top: 10px;
}
</style>
