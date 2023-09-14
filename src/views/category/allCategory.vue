<template>
  <div class="container-fluid m-2 border" style="width: auto">
    <h2 style="text-align: center">Category</h2>
    <router-link to="/admin/category/add">
      <button class="btn btn-secondary float-right">Add Category</button>
    </router-link>
    <div class="row">
      <div
        v-for="items in allcategory2"
        :key="items.id"
        class="col-xl-4 d-flex pt-3"
      >
        <categoryBox :viewcategory="items"> </categoryBox>
      </div>
    </div>
  </div>
</template>
<script>

import categoryBox from "../../components/category/categoryBox.vue";
export default {
  name: "allCategory",
  props:
  { allcategory2:Object},
  data()
  {
    return{
        //allcategory2: [],
        //baseURL: "http://localhost:3000/Pro_category",
    }
  },
  
  components: {
    categoryBox,
  },
  methods: {
    
  },
  
};
</script>
<style scoped>
.top {
  padding-top: 30px;
}
</style>