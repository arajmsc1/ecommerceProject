<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-2"></div>

      <div class="col-xl-8 border p-4 mt-4">
        <div class="row">
          <div class="col-xl-12">
            <h3>Create Account</h3>
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
            <label for="fname">First name</label>
            <input
              type="text"
              class="form-control"
              id="fname"
              aria-describedby="fname"
              placeholder="Enter First name"
              required
              v-model="form.firstname"
            />
          </div>
          <div class="form-group">
            <label for="lname">Last name</label>
            <input
              type="text"
              class="form-control"
              id="lname"
              aria-describedby="lname"
              placeholder="Enter Last name"
              v-model="form.lastname"
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

          <div class="form-group">
            <label for="cp">Confirm Password</label>
            <input
              type="password"
              class="form-control"
              id="cp"
              placeholder="Confirm Password"
              required
              v-model="form.cpassword"
            />
          </div>

          <button type="submit" class="btn btn-primary rounded">
            Create Account
          </button>
          <div><small>Already have an account LOGIN</small></div>
        </form>
        <!--end <form> -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import sweetalert from "sweetalert";
export default {
  name: "signUp",
  data() {
    return {
      form: 
        {
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          cpassword: "",
        },
      
    };
  },
  methods: {
    submitform(e) {
      e.preventDefault();
      //let frmdata=JSON.stringify(this.form)
      //console.warn(frmdata);
      if (this.form.password == this.form.cpassword) {
        axios
          .post("http://localhost:3000/sUsers", this.form)
          .then(() => {
            sweetalert({ text: "Signup success", icon: "success" });
            //this.$router.push({name:'home'})
            this.$router.replace('/')
          })
          .catch((err) => console.warn(err));
      }
      else
      {
        sweetalert({ text: "Password mismatch", icon: "error" });
      }
    },
  },
};
</script>