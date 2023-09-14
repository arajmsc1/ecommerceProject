<template >
    
  <div class="container-fluid m-2 border pt-1" style="width: auto">
    <router-link to='/admin/category'>
    <button class="btn btn-secondary float-right "> Category</button>
    </router-link>
    <h2 style="text-align: center">Edit Category</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter Name"
          v-model="category.name"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Description</label>
        <textarea
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Description"
          v-model="category.desc"
        />
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input
          type="text"
          class="form-control"
          id="image"
          placeholder="image URL"
          v-model="category.imgurl"
        />
      </div>
      <button @click="editCategory" type="button" class="btn btn-primary">
        Submit</button
      ><br /><br />
    </form>
  </div>
</template>
<script>
import axios from 'axios'
import sweetalert from 'sweetalert'
export default {
    name:'editCategory',
    data()
    {
        return{
            category:[],
            id:null,
        }
    },
    methods:{
      async editCategory()
        {
            console.warn(this.category)
            await axios.put(`${this.baseURL}`+ "Pro_category/"+this.id,this.category)
            .then((res)=>{
                console.warn(res)
                sweetalert({text:'Category updated',icon:'success'})
                this.$router.push({name:'Category'})
            })
            .catch(err=>{console.warn(err)})
            
        }
    },
    props:
    {baseURL:String, allcategory2:Object},
    mounted()
    {
        this.id=this.$route.params.id
        this.category=this.allcategory2.find(category=>category.id==this.id)
    }
}
</script>