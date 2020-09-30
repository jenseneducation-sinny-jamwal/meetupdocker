<template>
<div class="main-container">

  <div class="image-box">
    <h1>Welcome to the MEETUPs</h1>
    <img class ="meetup-banner" alt="logo"  src="../assets/wallpaper.jpeg" />
  
    
       <button class="button-primary" @click="$router.push({path: '/MeetupList'})">Look for MeetUps</button>
        <button class="button-primary" @click="$router.push({path: '/CreateMeetup'})">Organize a Meetup</button>
        </div>
  

     
    
       
   
  
</div>
</template>

<script>
export default {
  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >


 h1 {
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   
  
   }


.image-box{
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin:30px;
  padding:30px;
  

 



}
.button-primary{
  width:200px;
  height: 100px;
  font-size: 25px;
  text-align: center;
  border-radius: 4px;
  border-color: black;
  margin:30px;
  

}
.meetup-banner{
  width:100%;

}

</style>
