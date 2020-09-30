<template>
    <div id="signin-wrapper">
      
            <h2>Welcome Back!</h2>
              <p>Please login with your personal info</p>
   <form class="sign-in" action="#">
        <h2>Sign In</h2>
        <div>Use your account</div>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </form>
          
    
       <form class="sign-up" action="#">
        <h2>Create login</h2>
        <div>Use your email for registration</div>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </form>
      
    


    </div>

</template>


<script>
export default {
    data: () => {
    return {
      signUp: false
    }
  }
}
</script>

<style scoped>
  body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  
}

#signin-wrapper {
  font-family: Tahoma;
  font-size: 1rem;
  color: #222;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin:30px;
}

.container {

  width: auto;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, .2),
    0 10px 10px rgba(0, 0, 0, .2);
  background: linear-gradient(to bottom, #efefef, #ccc);
}

.sign-up ,.sign-in{
    background-color: rgb(230, 116, 173);
    display:grid;
    grid-auto-columns: 1fr;
    grid-gap: 10px;
    margin: 20px;
    padding:30px;
    border:rgb(243, 44, 183) solid;
    border-radius: 7px;

}
button{
    width: 200px;
    margin:50px;
}

.signup > textarea{
  height:50px;
}
</style>