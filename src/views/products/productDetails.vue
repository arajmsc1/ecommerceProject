<template>
  <div class="container-fluid py-3">
    <div class="row">
      <div class="col-xl-1"></div>
      <div class="col-xl-4">
        <img :src="product.imgurl" class="img-fluid rounded" />
      </div>
      
      <div class="col-xl-6">
        <h3>{{ product.name }}</h3>
        <h6>{{ category.name }}</h6>
        <h6>Rs. {{ product.price }}</h6>
        <div class="d-flex flex-row justify-content-between">
          <div class="col-xl-3">
            <div class="input-group mb-3 d-flex">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default"
                  >Qty</span
                >
              </div>
              <input
                type="number"
                class="form-control"
                aria-label="Default" v-model="qty"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
          </div>
          <div class="col-xl-3 float-right">
            <button @click="addToCart" class="btn btn-secondary rounded">Add to cart</button>
          </div>
        </div>

        <p>{{ product.desc }}</p>
        <h6>Features</h6>
        <ul>
          <li>Supported Apps: Netflix|Prime Video|Disney+Hotstar|Youtube</li>
          <li>
            Operating System: Android (Google Assistant & Chromecast in-built)
          </li>
          <li>Resolution: HD Ready 1366 x 768 Pixels</li>
          <li>Sound Output: 20 W</li>
          <li>Refresh Rate: 60 Hz</li>
        </ul>
        <button
          class="btn btn-secondary"
          v-if="wishlistTxt === 'Add to Wishlist'"
          @click="addToWishList"
        >
          {{ wishlistTxt }}
        </button>
        <button class="btn btn-secondary" v-else @click="wishinfo">
          {{ wishlistTxt }}
        </button>
      </div>
      <div class="col-xl-1"></div>
    </div>
  </div>
</template>
<script>
import sweetalert from "sweetalert";
import axios from "axios";
export default {
  name: "productDetails",
  data() {
    return {
      product: "",
      category: "",
      id: "",
      qty:1,
      wishlistTxt: "Add to Wishlist",
    };
  },
  props: {
    allcategory2: Object,
    allproducts: Object,
    baseURL: String,
  },
  methods: {
    addToWishList() {
      if (!this.token) {
        sweetalert({ text: "Please login", icon: "error" });
      }
      axios
        .post(`${this.baseURL}` + "wishlist", {
          productid: this.id,
          token: this.token,
        })
        .then((res) => {
          if (res.status === 201) {
            this.wishlistTxt = "Added to wishlist";
            sweetalert({ text: "Added to wishlist", icon: "success" });
          }
        })
        .catch((err) => console.log("err", err));
    },
    addToCart() {
      if (!this.token) {
        sweetalert({ text: "Please login", icon: "error" });
      }
      axios
        .post(`${this.baseURL}` + "cartItem", {
          productid: this.id,
          quantity:this.qty,
          token: this.token,
        })
        .then((res) => {
          if (res.status === 201) {
            this.$emit('getCartItems')
            this.wishlistTxt = "Added to Cart";
            sweetalert({ text: "Added to Cart", icon: "success" });
          }
        })
        .catch((err) => console.log("err", err));
    },
    wishinfo() {
      sweetalert({ text: "Already Added", icon: "info" });
    },
  },
  mounted() {
    this.token = localStorage.getItem("email");
    this.id = this.$route.params.id;
    this.product = this.allproducts.find((product) => product.id == this.id);
    this.category = this.allcategory2.find(
      (category) => category.id == this.product.categoryID
    );
  },
};
</script>
<style scoped>
.btn-secondary
{
  background: orange;
  border: 1px solid orange;
}
</style>