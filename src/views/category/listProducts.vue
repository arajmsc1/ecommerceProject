<template> 
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-6"></div>
      <div class="col-xl-6">
        <h3 class="text-left">{{ category.name }}</h3>
        <h5>{{ msg }}</h5>
      </div>
    </div>

    <div class="row">
      <div v-for="item in product" :key="item.id" class="col-xl-4 py-2 d-flex">
        <productBox :viewProduct="item"> </productBox>
      </div>
    </div>
  </div>
</template>
<script>
import productBox from "../../components/product/productBox.vue";
export default {
  name: "listProducts",
  data() {
    return {
      category: {},
      product: [],
      msg: "",
    };
  },
  components: {
    productBox,
  },
  props: {
    allcategory2: Object,
    allproducts: Object,
  },
  mounted() {
    this.id = this.$route.params.id;
    this.category = this.allcategory2.find(
      (category) => category.id == this.id
    );
    this.product = this.allproducts.filter(
      (item) => item.categoryID == this.id
    );
    console.warn( this.product) 
    if (this.product.length == 1)
      this.msg = "Only " + this.product.length + " " + "Product found";
    else if (this.product.length > 1)
      this.msg = this.product.length + " " + "Products found";
    else this.msg = "No Products found";
  },
};
</script>