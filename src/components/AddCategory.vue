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

    <v-btn color="success" small class="mr-2" @click="addCategory()">
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
      description: '',
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    isAdmin() {
      if (this.currentUser && this.currentUser.role) {
        return this.currentUser.role === 'ROLE_ADMIN';
      }
      return false;
    },
  },
  methods: {
    addCategory() {
      var data = {
        name : this.name,
        description : this.description,
      }

      CategoryService.addCategory(data)
          .then((response) => {
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });

      this.$router.push("/categories")
    },
    clear () {
      this.name = ''
      this.description = ''
    },
  },
}
</script>

<style>
.list {
  max-width: 750px;
}
</style>

