<template>
  <div class="container-fluid m-2 border pt-1" style="width: auto">
    <router-link to="/admin/Product">
      <button class="btn btn-secondary float-right">Product</button>
    </router-link>
    <h2 style="text-align: center">Add Product</h2>
    <form>
      <div class="form-group">
        <label >Category</label>
        <select class="form-control"  v-model="categoryID">          
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
          v-model="name"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Description</label>
        <textarea
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Description"
          v-model="desc"
        />
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input
          type="text"
          class="form-control"
          id="image"
          placeholder="image URL"
          v-model="imgurl"
        />
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input
          type="number"
          class="form-control"
          id="price"
          placeholder="Price"
          v-model="price"
        />
      </div>
      <button @click="saveProduct" type="button" class="btn btn-primary">
        Submit</button
      ><br /><br />
    </form>
  </div>
</template>
<script>
import axios from "axios";
import sweetalert from "sweetalert";
export default {
  name: "addProduct",
  props: {
    allcategory2: Object,
    baseURL: String,
  },
  data() {
    return {
      name: "",
      desc: "",
      imgurl: "",
      categoryID:null,
      price:null
    };
  },

  methods: {
    async saveProduct() {
     // console.log("called");
      //const baseURL = "http://localhost:3000/Pro_category";
      const newProduct = {
        name: this.name,
        desc: this.desc,
        imgurl: this.imgurl,
        categoryID: this.categoryID,
        price: this.price,
      };
      console.log("called",newProduct);
      axios({
        method: "post",
        url: `${this.baseURL}` + "products/",
        data: newProduct,
        header: { "Content-type": "application/json" },
      })
        .then(() => {
          //console.warn(res.status);
          this.$router.push({name:'Product'})
          sweetalert({
            text: "Product added Successfully",
            icon: "success",
          });
          
        })
        .catch((err) => {
          console.warn(err);
        });
      /* let result = await axios.post("http://localhost:3000/Pro_category", {
        name: this.name,
        desc: this.desc,
        imgurl: this.imgurl,
      });*/
      //console.warn(result);
    },
  },
};
</script>
<style scoped>
.top {
  padding-top: 30px;
}
</style>