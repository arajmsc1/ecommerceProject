<template>
    <div class="container">
    <div class="row">
      <div class="col-xl-2"></div>

      <div class="col-xl-8 border p-4 mt-4">
        <div class="row">
          <div class="col-xl-12">
            <h3>Login</h3>
          </div>
        </div>
        <!-- <form> -->
        <form @submit="submitform">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              required
              v-model="form.email"
            />
          </div>

          
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              required
              v-model="form.password"
            />
          </div>

         
          <button type="submit" class="btn btn-primary rounded">
           Login
          </button>
          <div><small>New? SIGNUP</small></div>
        </form>
        <!--end <form> -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import sweealert from 'sweetalert'
export default {
    name:'loginView',
    data()
    {
        return{
            form:{email:'',password:''}
        }
    },
    methods:
    {
        submitform(e)
        {
            e.preventDefault()
            axios.get('http://localhost:3000/Susers?email='+this.form.email+'&password='+this.form.password)
            .then((res)=>
            {
                console.warn(res)
                if(res.data.length==1) 
                {
                    //let token=res.data.token
                    localStorage.setItem('email',res.data[0].email)
                    console.warn('token',res)
                        sweealert({text:'Login Success',icon:'success'})
                      //this.$router.replace('/')
                      this.$emit("getToken")
                      this.$emit("getCartItems")
                       this.$router.go(-1)
                }
                else
                sweealert({text:'Invlaid credentials',icon:'error'})
            })
            .catch(err=>console.log(err))
            
        }
        
    }
}
</script>