<template>
  <v-table>
    <thead>
    <tr>
      <th class="text-left">
        Goal Id
      </th>
      <th class="text-left">
        User Id
      </th>
      <th class="text-left">
        Calories
      </th>
      <th class="text-left">
        Standing Hours
      </th>
      <th class="text-left">
        Steps
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
        v-for="item in goals"
        :key="item.name"
    >
      <td>{{ item.id }}</td>
      <td>{{ item.userId }}</td>
      <td>{{ item.calories }}</td>
      <td>{{ item.standing_hours }}</td>
      <td>{{ item.steps }}</td>
      <td>{{ item.distance }}</td>
      <td>{{ item.created_at }}</td>
      <td>
        <v-btn  icon :to="'/goals/' + item.id">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn  icon :to="'/goals/' + item.id">
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
import GoalService from "../services/goal.service";

export default {
  name: "Goals",
  data() {
    return {
      goals: [],
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
        GoalService.getAllGoals().then(
            (response) => {
              this.goals = response.data;
            }
        );
      }
    }
  }
}
</script>