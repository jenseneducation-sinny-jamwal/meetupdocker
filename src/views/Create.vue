<template>
    <div>
        <h1>You Can Organize a MeetUP From Here</h1>
        <div class="new-meetup">
                
                    <h2 class="form-head">Create a MeetUp!</h2>
                    
                    <form  @submit.prevent="addMeetup()" class="meetup-form" name="newMeetup" >
                         
                        <label for="Meetuptitle">Meetup Name</label>
                        <input name="Meetupname" type="text" id="Meetupname" v-model="title">

                        <label for="Details">Details</label>
                        <input name="Details" type="text" id="details" v-model="details">

                        <label for="Date">Date</label>
                        <input name="Date" type="date" id="Date" v-model="Date">
                        
                        <label for="Adress">Adress</label>
                        <input name="Adress" type="text" id="Adress" v-model="address">

                        <label for="Picture">Picture</label>
                         <input type="file" name="picture" id="picture" v-bind="meetups.image">  
                       

                         <button class="form-button" >ADD meetup</button>
                        
                    </form> 
                </div>

    </div>
    
</template>

<script>
 import axios from "axios";
 const baseURL = "http://localhost:3000/meetups";

export default {
//name:{Create},
  
  
    data(){
        return{
            
            meetups:[],

            id:"",
            title:"",
            details:"",
            Date:"",
            address:"",
            image:""

            


        };
    },

    async created(){
        try{
        const res = await axios.get(baseURL);
        this.meetups = res.data;
    }catch(e) {
        console.error(e)
    }
 },


   methods: {

        async addMeetup(){
           const res = await axios.post(baseURL, {title: this.title,details: this.details , Date: this.Date, address: this.address, image:this.image});
             this.meetups=[...this.meetups, res.data];
                this.title="";
                this.details="";
                this.Date="";
                this.address=""; 
                this.image="";
       }

   }, 



   
      

};

</script>

<style scoped >
.new-meetup{
 background-color: rgb(233, 184, 233);
 height: auto;
 display: flex;
 flex-direction:column;
 align-content: center;
 text-align: center;
 font-family: Georgia, 'Times New Roman', Times, serif ;


}
.meetup-form{    
display: grid;
grid-template-columns: [labels] auto [controls] 1fr;
grid-auto-flow: row;
grid-gap: .8em;
background: #eee;
padding: 25px 15px;
}

.meetup-form > label  {
grid-column: labels;
grid-row: auto;
}

.meetup-form > input,
.meetup-form > textarea,
.meetup-form > button {
grid-column: controls;
grid-row: auto;
border: none;
padding: 1em;
}

.form-button{
    color: rgb(34, 30, 30);
    cursor: pointer;
    border-radius: 2px ;
    font-weight: bold;
    width: 120px;
    justify-self: end; 
    background-color: bisque;
}
.form-button:hover{
    background-color: #b478b9;
}




</style>
