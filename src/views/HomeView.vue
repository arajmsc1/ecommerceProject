<template>
{{productSize}}
  <div id="home">
    <div id="background-div" class="page-holder bg-cover">
      <div class="container py-5">
        <header class="text-white py-5">
          <h3 class="text-right text-dark">
            <a href="start-shop" class="p-3 mb-2 rounded bg-white"
              >Start Shoppping
            </a>
          </h3>
        </header>
      </div>
    </div>
    <!-- Top Category   -->
    <div class="container-fluid">
      <div class="row">
        <h3>Top categories</h3>
      </div>
      <div class="row">
        <div v-for="index in categorySize" :key="index" class='col-xl-4 py-2 d-flex'>
          <categoryBox :viewcategory="allcategory2[index - 1]"> </categoryBox>
        </div>
      </div>
    </div>
    <hr>
    <!-- Top Product   -->
    <div class="container-fluid">
      <div class="row">
        <h3>Top Products</h3>
      </div>
      <div class="row">
         <div v-for="index in productSize" :key="index" class='col-xl-4 py-2 d-flex'>
          <productBox :viewProduct="allproducts[index - 1]"> </productBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import categoryBox from "../components/category/categoryBox.vue";
import productBox from "../components/product/productBox.vue";
export default {
  name: "HomeView",
  data() {
    return {
      categorySize: 6,
      productSize:0,
      //topcat:6
    };
  },
  props: {
    allcategory2: Object,
    allproducts: Object
  },
  components: { categoryBox,productBox },
  mounted() {
    console.warn(this.allproducts)
    this.productSize=Math.min(8,this.allproducts.length)
  },
};
</script>
<style>
.page-holder {
  min-height: 100vh;
}
.bg-cover {
  background-size: cover !important;
}
#background-div {
  background-image: url(../assets/banner.jpg);
  /*background-repeat: repeat-x;*/
}
</style>
