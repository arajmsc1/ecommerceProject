<template>
  <div class="container-fluid m-2 border pt-1" style="width: auto">
    <h2 style="text-align: center">Admin Panel</h2>
    <div class="row">
      <div class="col-sm-6">
       <router-link to='/admin/category/add'>
         <div class="card">
          <div class="card-body">
            <h5 class="card-title">Add Category</h5>
            <p class="card-text">Add Category Add Category.</p>
          </div>
        </div></router-link>
      </div>
      <div class="col-sm-6">
        <div class="card">
        <router-link to='/admin/category'>  <div class="card-body">
            <h5 class="card-title">View Category</h5>
            <p class="card-text">View Category View Category.</p>
          </div></router-link>
        </div>
      </div>
      
    </div>
     <div class="row">
      <div class="col-sm-6">
       <router-link to='/admin/product/add'>
         <div class="card">
          <div class="card-body">
            <h5 class="card-title">Add Product</h5>
            <p class="card-text">Add Product Add Product.</p>
          </div>
        </div></router-link>
      </div>
      <div class="col-sm-6">
        <div class="card">
        <router-link to="/admin/product">  <div class="card-body">
            <h5 class="card-title">View Product</h5>
            <p class="card-text">View Product View Product.</p>
          </div></router-link>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  name: "adminView",
};
</script>