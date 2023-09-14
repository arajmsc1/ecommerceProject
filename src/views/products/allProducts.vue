<template>
  <div class="container-fluid m-2 border" style="width: auto">
    <h2 style="text-align: center">Products</h2>
    <router-link to='/admin/product/add'>
    <button class="btn btn-secondary float-right ">Add Product</button>
    </router-link>
    <div class="row" >
        <div v-for="items in allproducts" :key="items.id" class='col-xl-4 d-flex pt-3'> 
             <productBox :viewProduct="items"> </productBox>
        </div>   
    </div>
   
  </div>
</template>
<script>

import productBox from "../../components/product/productBox.vue";
export default {
  name: "allProduct",
  data()
  {
    return{
        
    }
  },
  props:{
    allproducts:Object,
    
  },
  components: {
    productBox,
  },
  mounted()
  {
    //this.getProducts();
    this.$emit("getProducts")
  }
  
  
};
</script>
<style scoped>
.top {
  padding-top: 30px;
}
</style>