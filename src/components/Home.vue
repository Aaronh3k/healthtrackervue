<template>
  <div v-if="!this.loggedIn" class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <header class="mb-auto">
    </header>
    <main class="px-3">
      <h1>Health Tracker.</h1>
    </main>
  </div>
  <div v-else-if="this.currentUser.role === 'ROLE_ADMIN'">
    <div class="col">
      <div class="card">
        <h5 class="card-header">Registered Users</h5>
        <div class="card-body">
          <h5 class="card-title">{{users.length}}</h5>
          <router-link to="/users" class="nav-link">
            More Details...
          </router-link>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <h5 class="card-header">Number Of Activities</h5>
        <div class="card-body">
          <h5 class="card-title">{{activities.length}}</h5>
          <router-link to="/activities" class="nav-link">
            More Details..
          </router-link>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <h5 class="card-header">Number Of Categories</h5>
        <div class="card-body">
          <h5 class="card-title">{{categories.length}}</h5>
          <router-link to="/categories" class="nav-link">
            <font-awesome-icon icon="user" /> More Details..
          </router-link>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <h5 class="card-header">Number Of Goals</h5>
        <div class="card-body">
          <h5 class="card-title">{{goals.length}}</h5>
          <router-link to="/goals" class="nav-link">
            More Details..
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    Health Tracker Logged User {{user}}
  </div>
</template>

<script>
import UserService from "../services/user.service";
import ActivityService from "@/services/activity.service";
import CategoryService from "@/services/category.service";
import GoalService from "@/services/goal.service";

export default {
  // eslint-disable-next-line
  name: "Home",
  data() {
    return {
      users: [],
      activities: [],
      categories: [],
      goals: [],
      user: ""
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
        ActivityService.getAllActivities().then(
            (response) => {
              this.activities = response.data;
            }
        );
        CategoryService.getAllCategories().then(
            (response) => {
              this.categories = response.data;
            }
        );
        GoalService.getAllGoals().then(
            (response) => {
              this.goals = response.data;
            }
        )
      } else {
        UserService.getUserBoard().then(
            (response) => {
              this.user = response.data;
            },
            (error) => {
              this.user =
                  (error.response &&
                      error.response.data &&
                      error.response.data.message) ||
                  error.message ||
                  error.toString();
            }
        );
      }
    }
  }
};
</script>




<!--<script type="text/x-template" id="app-template">-->
<!--<v-app>-->
<!--<v-card class="mx-auto" max-width="1000">-->
<!--  <v-card-item title="Total Users Registered"></v-card-item>-->
<!--  <v-card-text class="py-0">-->
<!--    <v-row align="center" justify="center" no-gutters>-->
<!--      <v-col class="text-h1" cols="4">-->
<!--        2-->
<!--      </v-col>-->
<!--    </v-row>-->
<!--  </v-card-text>-->
<!--  <v-divider></v-divider>-->
<!--  <v-card-actions>-->
<!--    <v-btn @click="">-->
<!--      More Details-->
<!--    </v-btn>-->
<!--    <v-btn>Add Users</v-btn>-->
<!--</v-card>-->
<!--<v-spacer></v-spacer>-->
<!--<v-card class="mx-auto" max-width="1000">-->
<!--  <v-card-item title="Total Users Registered"></v-card-item>-->
<!--  <v-card-text class="py-0">-->
<!--    <v-row align="center" justify="center" no-gutters>-->
<!--      <v-col class="text-h1" cols="4">-->
<!--        2-->
<!--      </v-col>-->
<!--    </v-row>-->
<!--  </v-card-text>-->
<!--  <v-divider></v-divider>-->
<!--  <v-card-actions>-->
<!--    <v-btn @click="">-->
<!--      More Details-->
<!--    </v-btn>-->
<!--    <v-btn>Add Users</v-btn>-->
<!--</v-card>-->
<!--</v-app>-->
<!--</script>-->

<!--<div id="app"></div>-->