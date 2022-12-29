<template>
  <v-form
      ref="form"
      v-model="valid"
      lazy-validation
  >

    <v-text-field
        v-model="calories"
        type="float"
        label="Calories"
        suffix="kcal"
        required
    ></v-text-field>

    <v-text-field
        v-model="standing_hours"
        label="Standing Hours"
        type="float"
        required
        suffix="hr"
    ></v-text-field>

    <v-text-field
        v-model="steps"
        type="number"
        label="Steps Covered"
    ></v-text-field>

    <v-text-field
        v-model="distance"
        type="float"
        label="Distance Covered"
        suffix="km"
    ></v-text-field>

    <v-btn color="success" small class="mr-2" @click="addGoalUser()">
      submit
    </v-btn>

    <v-btn color="primary" small class="mr-2" @click="clear">
      clear
    </v-btn>

  </v-form>
</template>

<script>
import { useRoute } from 'vue-router'
import GoalService from "../services/goal.service";

export default {
  name: "AddGoal",
  data() {
    return {
      valid: true,
      standing_hours: 0.0,
      calories: 0.0,
      steps: 0,
      distance: 0.0,
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
    addGoalUser() {
      var data = {
        userId : this.currentUser.Id,
        calories : this.calories,
        steps : this.steps,
        distance : this.distance,
        standing_hours : this.standing_hours
      }

      GoalService.addGoal(data)
          .then((response) => {
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });

      this.$router.push("/goals")
    },
    // clear () {
    //   this.username = ''
    //   this.firstname = ''
    //   this.lastname = ''
    //   this.gender = ''
    //   this.dob = ''
    // },
  },
}
</script>

<style>
.list {
  max-width: 750px;
}
</style>

