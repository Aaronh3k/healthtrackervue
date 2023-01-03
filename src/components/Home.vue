<template>
  <div v-if="!this.loggedIn" class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column" style="text-align:center">
    <div class="bgimg">
      <div class="middle">
        <h1>WELCOME TO HEALTHTRACKER APPPLICATION</h1>
        <hr>
        <p>Please Login or Register</p>
      </div>
    </div>
  </div>
  <div v-else-if="showAdminBoard">
    <v-card class="mx-auto" max-width="700">
      <v-card-item title="Total User Registered" class="justify-center"></v-card-item>
      <v-card-text class="py-0" >
        <v-row align="center" justify="center" no-gutters>
          <v-col class="text-h1" cols="1">
            {{users.length}}
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="justify-center">
        <v-btn to="/users" color="primary" elevation="2" x-large>
          More Details
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-divider></v-divider>
    <v-card class="mx-auto" max-width="700">
      <v-card-item title="Number Of Activities" class="justify-center"></v-card-item>
      <v-card-text class="py-0" >
        <v-row align="center" justify="center" no-gutters>
          <v-col class="text-h1" cols="1">
            {{activities.length}}
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="justify-center">
        <v-btn to="/activities" color="primary" elevation="2" x-large>
          More Details
        </v-btn>
        <v-btn to="/addactivity" color="blue-grey" elevation="2" x-large>
          Add Activity
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-divider></v-divider>
    <v-card class="mx-auto" max-width="700">
      <v-card-item title="Number Of Categories" class="justify-center"></v-card-item>
      <v-card-text class="py-0" >
        <v-row align="center" justify="center" no-gutters>
          <v-col class="text-h1" cols="1">
            {{categories.length}}
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="justify-center">
        <v-btn to="/categories" color="primary" elevation="2" x-large>
          More Details
        </v-btn>
        <v-btn to="/addcategory" color="blue-grey" elevation="2" x-large>
          Add Activity
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-divider></v-divider>
    <v-card class="mx-auto" max-width="700">
      <v-card-item title="Number Of Goals" class="justify-center"></v-card-item>
      <v-card-text class="py-0" >
        <v-row align="center" justify="center" no-gutters>
          <v-col class="text-h1" cols="1">
            {{goals.length}}
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="justify-center">
        <v-btn to="/goals" color="primary" elevation="2" x-large>
          More Details
        </v-btn>
        <v-btn to="/addgoal" color="blue-grey" elevation="2" x-large>
          Add Activity
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
  <div v-else>
    <v-card class="mx-auto" max-width="700">
      <v-card-item title="Number Of Activities" class="justify-center"></v-card-item>
      <v-card-text class="py-0" >
        <v-row align="center" justify="center" no-gutters>
          <v-col class="text-h1" cols="1">
            {{activities.length}}
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="justify-center">
        <v-btn to="/activities" color="primary" elevation="2" x-large>
          More Details
        </v-btn>
        <v-btn to="/addactivity" color="blue-grey" elevation="2" x-large>
          Add Activity
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-divider></v-divider>
    <v-card class="mx-auto" max-width="700">
      <v-card-item title="Number Of Goals" class="justify-center"></v-card-item>
      <v-card-text class="py-0" >
        <v-row align="center" justify="center" no-gutters>
          <v-col class="text-h1" cols="1">
            {{goals.length}}
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="justify-center">
        <v-btn to="/goals" color="primary" elevation="2" x-large>
          More Details
        </v-btn>
        <v-btn to="/addgoal" color="blue-grey" elevation="2" x-large>
          Add Activity
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-divider></v-divider>
    <v-card class="mx-auto" max-width="700">
      <v-card-item title="Number Of Categories" class="justify-center"></v-card-item>
      <v-card-text class="py-0" >
        <v-row align="center" justify="center" no-gutters>
          <v-col class="text-h1" cols="1">
            {{categories.length}}
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="justify-center">
        <v-btn to="/categories" color="primary" elevation="2" x-large>
          More Details
        </v-btn>
        <v-btn to="/addcategory" color="blue-grey" elevation="2" x-large>
          Add Activity
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
//"this.currentUser.role === 'ROLE_ADMIN'"
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
    showAdminBoard() {
      if (this.currentUser && this.currentUser.role) {
        return this.currentUser.role === 'ROLE_ADMIN';
      }
      return false;
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
      } else if(this.currentUser.role === "ROLE_USER") {
        ActivityService.getAllActivitiesByToken().then(
            (response) => {
              this.activities = response.data;
            }
        );
        CategoryService.getAllCategories().then(
            (response) => {
              this.categories = response.data;
            }
        );
        GoalService.getAllGoalsByToken().then(
            (response) => {
              this.goals = response.data;
            }
        )
      }
    }
  }
};
</script>

<style>
/* Set height to 100% for body and html to enable the background image to cover the whole page: */
body, html {
  height: 100%
}

/* Position text in the top-left corner */
.topleft {
  position: absolute;
  top: 0;
  left: 16px;
}

/* Position text in the bottom-left corner */
.bottomleft {
  position: absolute;
  bottom: 0;
  left: 16px;
}

/* Position text in the middle */
.middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

/* Style the <hr> element */
hr {
  margin: auto;
  width: 40%;
}
</style>


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
<!--  </v-card-actions>-->
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
