<template>
<div class="container-fluid">
    <div class="row">
      <div class="col-xl-6"></div>
      <div class="col-xl-6">
        <h3 class="text-left">Your Wishlist</h3>
        <!-- {{wishlistA}} -->
      </div>
    </div>

    <div class="row">
      <div v-for="item in wishlistA" :key="item" class="col-xl-4 py-2 d-flex">
        <productBox :viewProduct="item"> </productBox>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
//import sweealert from 'sweealert'
import productBox from '../../components/product/productBox.vue'
export default {
  name: "wishList",
  data() {
    return {
      token: null,
      wishlistA:'',
       wishlist2:'7'
    };
  },
  components:
  {
    productBox
  },
  props: {
    baseURL: String,
    allproducts: Object,
  },
  methods:{
    fetchwishList() {
      this.token = localStorage.getItem("email");
      axios
        .get(`${this.baseURL}` + "wishlist?token=" + this.token)
        .then((res) => {
            console.warn(res.data)
          this.wishlistA=(this.removeDuplicates(res.data))
          // this.wishlist.push(this.allproducts.find(
          //   (item) => '7' == item.id))
          //    this.wishlist.push(this.allproducts.find(
          //   (item) => '1' == item.id))
           console.warn( this.wishlistA)
    })
        .catch((err) => console.warn(err));
     
    },
    removeDuplicates(arr) {
      let unique = [];
      let finalwishlist=[]
      for (let i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i].productid) === -1) {
          unique.push(arr[i].productid);
          finalwishlist.push(this.allproducts.find(
            (item) => arr[i].productid == item.id))
        }
      }
      return finalwishlist;
    },
  },
  
  mounted() {
    this.fetchwishList();
    // this.wishlistA=this.allproducts.filter(
    //          (item) => item.id== this.wishlist2 )
    // console.warn( this.wishlistA)         
  },
};
</script>