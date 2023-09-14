<template >
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Navbar</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/" class="nav-link"
            >Home <span class="sr-only">(current)</span></router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" href="#">About</router-link>
        </li>
        
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/admin" class="nav-link" href="#">Admin</router-link>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Account
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            
            <router-link v-if="!token" to="/Login" class="dropdown-item" >Login</router-link>
            <router-link v-if="token"  to="/wishList" class="dropdown-item" >wishList</router-link>
            <!-- <div class="dropdown-divider"></div> -->
            <router-link v-if="!token" to="/signUp" class="dropdown-item" >Signup</router-link>
            <a  v-if="token"  class="dropdown-item"  @click="signout">SignOut</a>
          </div>
        </li>
        <li class="nav-item dropdown" v-if="token">
          <div id="cart" style="position:relative">
          
          <router-link to ='/shoppingCart'  style="color:#ccc"> 
          <span id='cart-count'>{{cartCount}}</span>         
          <i class="fa fa-shopping-cart" style="font-size:36px"></i>
          </router-link>
          </div>
        </li>
      </ul>
      
    </div>
  </nav>
</template>
<script>
import swal from 'sweetalert'
export default {
    name:'navBar',
    data()
    {
      return{
        
      }
    },
    props:
    {
      cartCount:Number,token:String
    },
    methods:{
      signout()
      {
        localStorage.removeItem('email')
        this.$emit("getToken")
        this.$emit("resetCartItem")
        //this.token=null,
        swal({title:'Logged Out . Thank you',icon:'success'})
       this.$router.push('/')
      }
    },
    mounted()
    {
      //this.token=localStorage.getItem('email')
    }
    
}
</script>
<style>
#cart-count
{
  position: absolute;
  margin-left: 10px;
  color:white;
  background-color: red;
  height: 15px;
  width:15px;
  border-radius: 40%;
  font-size: 12px;
  align-items: center;
  display: flex;
  justify-content: center;

}
</style>