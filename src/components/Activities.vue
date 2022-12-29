<template>
  <v-table>
    <thead>
    <tr>
      <th class="text-left" >
        ActivityId
      </th>
      <th class="text-left">
        UserId
      </th>
      <th class="text-left">
        CategoryId
      </th>
      <th class="text-left">
        Description
      </th>
      <th class="text-left">
        Duration
      </th>
      <th class="text-left">
        Calories
      </th>
      <th class="text-left">
        Started
      </th>
      <th class="text-left">
        Distance
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
        v-for="item in activities"
        :key="item.name"
    >
      <td>{{ item.id }}</td>
      <td>{{ item.userId }}</td>
      <td>{{ item.categoryId }}</td>
      <td>{{ item.description }}</td>
      <td>{{ item.duration }}</td>
      <td>{{ item.calories }}</td>
      <td>{{ item.started }}</td>
      <td>{{ item.distance }}</td>
      <td>{{ item.created_at }}</td>
      <td>
        <v-btn  icon :to="'/activities/' + item.id">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn  icon @click="deleteActivity(item.id)">
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
import ActivityService from "../services/activity.service";

export default {
  name: "Activities",
  data() {
    return {
      activities: [],
    };
  },
  methods: {
    deleteActivity(activityId) {
      ActivityService.deleteActivityById(activityId)
          .then((response) => {
            console.log(response.data);
            window.location.reload();
          })
          .catch((e) => {
            console.log(e);
          });
    }
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
        ActivityService.getAllActivities().then(
            (response) => {
              this.activities = response.data;
            }
        );
      }
      else {
        ActivityService.getAllActivitiesByToken().then(
            (response) => {
              this.activities = response.data;
            }
        );
      }
    }
  }
}
</script>