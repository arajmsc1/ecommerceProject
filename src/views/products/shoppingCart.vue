<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-6"></div>
      <div class="col-xl-6">
        <h3 class="text-left">My cart</h3>
        <!-- {{actcart}} -->
      </div>
    </div>
    
    <div v-for="item in mycart"  :key="item.id"  class ="row py-3">
      <div class='col-xl-2'>  </div>
      <div class='col-xl-3  float-right embed-responsive '> 
        <img :src="item.imgurl" class="img-fluid  rounded embed-responsive-item"/>
         </div>
      <div class='col-xl-5'> 
        <h5>{{ item.name }}</h5>
        <h6>{{ item.price }}</h6> per unit
        <h6>Quanity :</h6> 
        <h6>Total :</h6> 
        <a href="#" @click="removeFromCart(item.id)" >Remove from cart</a>
         </div>
      <div class='col-xl-2'>  </div>
      <div class='col-xl-12'> <hr> </div>
    </div>
    <div class='col-xl-12'> Total: </div>
  </div>
</template>
<script>
import axios from "axios";
//import sweealert from 'sweealert'
export default {
  name: "shoppingCart",
  data()
  {
    return{
        token:null,
        product:{},
        mycart:'',
        actcart:''

    }
  },
  props:
  {
     baseURL: String,
    allproducts: Object,
  },
  mounted()
  {
     this.fetchMycart()
  },
  
    methods:{
    fetchMycart() {
      this.token = localStorage.getItem("email");
      axios
        .get(`${this.baseURL}` + "cartItem?token=" + this.token)
        .then((res) => {
            console.warn(res.data)
            this.actcart=res.data;
          this.mycart=(this.removeDuplicates(res.data))
          // this.wishlist.push(this.allproducts.find(
          //   (item) => '7' == item.id))
          //    this.wishlist.push(this.allproducts.find(
          //   (item) => '1' == item.id))
           console.warn( this.mycart)
    })
        .catch((err) => console.warn(err));
     
    },
    removeDuplicates(arr) {
      let unique = [];
      let finalmycart=[]
      for (let i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i].productid) === -1) {
          unique.push(arr[i].productid);
          finalmycart.push(this.allproducts.find(
            (item) => arr[i].productid == item.id))
        }
      }
      return finalmycart;
    },
    removeFromCart(itemID)
    { //alert(itemID)
        axios.delete(`${this.baseURL}` + "cartItem/"+itemID)
        .then(()=>this.$router.go(0))
        .catch(err=>console.log('err',err))
    }
  },
  
};
</script>