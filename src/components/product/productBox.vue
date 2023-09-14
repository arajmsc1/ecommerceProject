<template>


  <div class="card w-100 h-100">
    <div class="embed-responsive embed-responsive-21by9">
      <img
        class="card-img-top embed-responsive-item"
        :src="viewProduct.imgurl"
        alt="Card image cap"
      />
    </div>
    <div class="card-body ">
      <router-link :to="{name:'productDetails',params:{id:viewProduct.id}}"
class='text-black'> 
      <h5 class="card-title">{{viewProduct.name}}</h5>
      </router-link>
      <p class="card-text">
        {{viewProduct.desc.substr(0,100)}}...
      </p>
      <h4>Price : {{viewProduct.price}}</h4>
     <router-link  v-show="$route.name=='Product'"  :to="{name:'editProduct',params:{id:viewProduct.id}}"> <span class=" float-right">Edit</span></router-link>
    </div>
  </div>
  
</template>
<script>
export default {
  name: "categoryBox",
  props: {
    viewProduct: Object,
  },
};
</script>
<style scoped>
.card-img-top {
  object-fit: cover;
}
a { text-decoration: none;
color:black}
</style>