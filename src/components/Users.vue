<template>
  <v-table>
    <thead>
    <tr>
      <th class="text-left">
        User Id
      </th>
      <th class="text-left">
        User Name
      </th>
      <th class="text-left">
        Email
      </th>
      <th class="text-left">
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
        v-for="item in users"
        :key="item.name"
    >
      <td>{{ item.id }}</td>
      <td>{{ item.user_name }}</td>
      <td>{{ item.email }}</td>
      <td>
        <router-link :to="'/user/' + item.id" class="nav-link">
        More Details..
      </router-link>
      </td>
    </tr>
    </tbody>
  </v-table>
</template>

<script>
import UserService from "../services/user.service";

export default {
  name: "Users",
  data() {
    return {
      users: [],
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (this.currentUser != null) {
      if (this.currentUser.role === "ROLE_ADMIN") {
        UserService.getAllUsers().then(
            (response) => {
              this.users = response.data;
            }
        );
      }
      }
    }
  }
</script>