<template>
  <v-form
      ref="form"
      v-model="valid"
      lazy-validation
  >
    <v-text-field
        v-model="name"
        label="Category Name"
        required
    ></v-text-field>

    <v-text-field
        v-model="description"
        label="Description"
        required
    ></v-text-field>

    <v-text-field
        v-model="createdAt"
        label="Created at"
        readonly
    ></v-text-field>

    <v-btn color="success" small class="mr-2" @click="updateCategory(categoryId)">
      submit
    </v-btn>

    <v-btn color="primary" small class="mr-2" @click="clear">
      clear
    </v-btn>

  </v-form>
</template>

<script>
import { useRoute } from 'vue-router'
import CategoryService from "../services/category.service";

export default {
  name: "Category",
  data() {
    return {
      valid: true,
      name: '',
      categoryId: '',
      description: '',
      createdAt: ''
    };
  },
  mounted() {
    const route = useRoute();
    const id = route.params.categoryid;
    CategoryService.getCategoryById(id).then(
        (response) => {
          this.categoryId = id;
          this.name = response.data.name;
          this.description = response.data.description;
          this.createdAt = response.data.created_at;
        }
    );
  },
  methods: {
    updateCategory(categoryId) {
      var data = {
        name : this.name,
        description : this.description,
      }
      CategoryService.updateCategoryById(categoryId, data)
          .then((response) => {
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      window.location.reload();
    },
    clear () {

    },
  },
}
</script>

<style>
.list {
  max-width: 750px;
}
</style>

