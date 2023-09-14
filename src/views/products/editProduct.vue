<template>
{{product}}
  <div class="container-fluid m-2 border pt-1" style="width: auto">
    <router-link to="/admin/Product">
      <button class="btn btn-secondary float-right">Product</button>
    </router-link>
    <h2 style="text-align: center">Edit Product</h2>
    <form>
      <div class="form-group">
        <label >Category</label>
        <select class="form-control"  v-model="product.categoryID">          
          <option v-for=" item in allcategory2" :key="item.id" 
          :value="item.id">{{item.name}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter Name"
          v-model="product.name"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Description</label>
        <textarea
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Description"
          v-model="product.desc"
        />
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input
          type="text"
          class="form-control"
          id="image"
          placeholder="image URL"
          v-model="product.imgurl"
        />
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input
          type="number"
          class="form-control"
          id="price"
          placeholder="Price"
          v-model="product.price"
        />
      </div>
      <button @click="saveProduct" type="button" class="btn btn-primary">
        Submit</button
      ><br /><br />
    </form>
  </div>
</template>
<script>
import axios from 'axios'
import sweetalert from 'sweetalert'
export default {
   name:'editProduct',
   data()
   {
    return{
        id:null,
        product:[]
    }
   },
   props:
   {
    allproducts:Object,
    allcategory2:Object,
    baseURL:String
   },
   mounted()
   {
    this.id= this.$route.params.id
    this.product=this.allproducts.find(product=>product.id==this.id)
   },
   methods:
   {
    saveProduct()
    {
      console.warn(this.product)
      axios.put(`${this.baseURL}`+'products/'+this.id,this.product)
      .then((res)=>{
        console.warn(res.data)
        sweetalert({text:'Product Saved',icon:'success'})
        this.$router.push({name:'Product'})
      })
      .catch((err)=>{console.warn(err)})
    }
   }
}
</script>