<template>

  <div class="container-fluid m-2 border pt-1" style="width: auto">
    <router-link to='/admin/category'>
    <button class="btn btn-secondary float-right ">Category</button>
    </router-link>
    <h2 style="text-align: center">Add Category</h2>
    <form>
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
        <label for="image">Password</label>
        <input
          type="text"
          class="form-control"
          id="image"
          placeholder="image URL"
          v-model="imgurl"
        />
      </div>
      <button @click="saveCategory" type="button" class="btn btn-primary">
        Submit</button
      ><br /><br />
    </form>
  </div>
</template>
<script>
import axios from "axios";
import sweetalert from "sweetalert"
export default {
  name: "addCategory",
  data() {
    return {
      name: "",
      desc: "",
      imgurl: "",
     
    };
   
  },
   props:{
      baseURL:String
    },
  methods: {
    async saveCategory() {
      console.log("called");
      //const baseURL = "http://localhost:3000/Pro_category";
      const newcategory = ({
        name: this.name,
        desc: this.desc,
        imgurl: this.imgurl,
      });
      axios({
        method: "post",
        url: `${this.baseURL}`+'Pro_category/',
        data: newcategory,
        header: { "Content-type": "application/json" },
      })
        .then(() => {
          //console.warn(res.status);
          sweetalert(
            {
              text:"Category added Successfully",
              icon:'success'
            }
          )})
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