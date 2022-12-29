<template>
  <v-table>
    <thead>
    <tr>
      <th class="text-left">
        Category Id
      </th>
      <th class="text-left">
        Name
      </th>
      <th class="text-left">
        Description
      </th>
      <th class="text-left">
        Created At
      </th>
      <th class="text-left">
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
        v-for="item in categories"
        :key="item.name"
    >
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.description }}</td>
      <td>{{ item.created_at }}</td>
      <td>
        <v-btn  v-if="showAdminBoard" icon :to="'/categories/' + item.id">
            <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn  v-if="showAdminBoard" icon :to="'/categories/' + item.id">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </td>
      <td>
      </td>
    </tr>
    </tbody>
  </v-table>
</template>

<script>
import CategoryService from "../services/category.service";

export default {
  name: "Categories",
  data() {
    return {
      categories: [],
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.role) {
        return this.currentUser.role === 'ROLE_ADMIN';
      }
      return false;
    },
  },
  mounted() {
    if (this.currentUser != null) {
      if (this.currentUser.role === "ROLE_ADMIN" || this.currentUser.role === "ROLE_USER" ) {
        CategoryService.getAllCategories().then(
            (response) => {
              this.categories = response.data;
            }
        );
      }
    }
  }
}
</script>