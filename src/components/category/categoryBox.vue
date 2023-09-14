<template>
  <div class="card w-100 h-100">
    <div class="embed-responsive embed-responsive-21by9">
      <img
        class="card-img-top embed-responsive-item"
        :src="viewcategory.imgurl"
        alt="Card image cap"
      />
    </div>
    <div class="card-body">
     <router-link :to="{name:'listProducts',params:{id:viewcategory.id}}"> <h5 class="card-title">{{viewcategory.name}}</h5>
     </router-link>
      <p class="card-text">
        {{viewcategory.desc}}.
      </p>
      <router-link 
      v-show="$route.name=='Category'"   :to="{name:'editCategory',params:{id:viewcategory.id}}"> <span  class=" float-right">Edit</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "categoryBox",
  props: {
    viewcategory: Object,
  },
};
</script>
<style scoped>
.card-img-top {
  object-fit: cover;
}
a{ text-decoration: none;
color:#484848}
</style>