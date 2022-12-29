<template>
  <v-form
      ref="form"
      v-model="valid"
      lazy-validation
  >
    <v-text-field
        v-model="userId"
        label="User ID"
        readonly
    ></v-text-field>

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

    <v-text-field
        v-model="createdAt"
        label="Created at"
        readonly
    ></v-text-field>

    <v-btn color="success" small class="mr-2" @click="updateGoal(goalId)">
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
  name: "Goal",
  data() {
    return {
      valid: true,
      description: '',
      standing_hours: 0.0,
      calories: 0.0,
      steps: 0,
      distance: 0.0,
      createdAt: '',
      userId: '',
    };
  },
  mounted() {
    const route = useRoute();
    const id = route.params.goalid;
    GoalService.getGoalById(id).then(
        (response) => {
          this.goalId = id;
          this.userId = response.data.userId;
          this.description = response.data.description;
          this.standing_hours = response.data.standing_hours;
          this.calories = response.data.calories;
          this.steps = response.data.steps;
          this.distance = response.data.distance;
          this.createdAt = response.data.created_at
        }
    );
  },
  methods: {
    updateGoal(goalId) {
      var data = {
        userId : this.userId,
        description : this.description,
        standing_hours  : this.standing_hours ,
        calories : this.calories,
        steps : this.steps,
        distance : this.distance,
      }
      GoalService.updateGoalById(goalId, data)
          .then((response) => {
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      window.location.reload();
    },
    clear () {
      // this.username = ''
      // this.firstname = ''
      // this.lastname = ''
      // this.gender = ''
      // this.dob = ''
    },
  },
}
</script>

<style>
.list {
  max-width: 750px;
}
</style>

