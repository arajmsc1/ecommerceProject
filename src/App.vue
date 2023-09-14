<template>
  <navBar :cartCount="cartCount" :token="token" @getToken="getToken"  @resetCartItem="resetCartItem" />
  <router-view
    v-if="allcategory2 && allproducts"
    :baseURL="baseURL"
    :allcategory2="allcategory2"
    :allproducts="allproducts"
    @getProducts="getProducts"
    @getCategories="getCategories"
    @getCartItems="getCartItems"
    @getToken="getToken"
    style="min-height: 60vh"
  >
  </router-view>
  <footerBar />
</template>

<script>
import axios from "axios";
import navBar from "./components/navBar.vue";
import footerBar from "./components/footerBar.vue";
export default {
  name: "App",
  data() {
    return {
      baseURL: "http://localhost:3000/",
      allcategory2: null,
      allproducts: null,
      token: null,
      cartCount: 0,
    };
  },
  components: { navBar, footerBar },
  methods: {
    async getCategories() {
      await axios
        .get(this.baseURL + "Pro_category")
        .then((res) => {
          this.allcategory2 = res.data;
          console.log(this.allcategory2);
        })
        .catch((err) => console.log(err));
    },
    async getProducts() {
      await axios
        .get(this.baseURL + "products")
        .then((res) => {
          this.allproducts = res.data;
          console.log(this.allproducts);
        })
        .catch((err) => console.log(err));
    },
    async getCartItems() {
      if (this.token) {
        //alert(this.token)
        axios
          .get(`${this.baseURL}` + "cartItem?token=" + this.token)
          .then((res) => {
            // this.actcart=res.data;
            this.cartCount = res.data.length;
            console.warn("cnt", this.cartCount);
          })
          .catch((err) => console.warn(err));
      }
    },
    getToken() {
      this.token = localStorage.getItem("email");
    },
    resetCartItem() {
      this.cartCount = 0;
    },
  },
  mounted() {
    (this.token = localStorage.getItem("email")),
      this.getCategories(),
      this.getProducts(),
      this.getCartItems();
  },
};
</script>

<style>
</style>
