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
        v-model="categoryId"
        label="Category ID"
        readonly
    ></v-text-field>

    <v-text-field
        v-model="description"
        label="Description"
        required
    ></v-text-field>

    <v-
        v-model="duration"
        label="Duration"
        type="float"
    ></v->

    <v-text-field
        v-model="calories"
        type="float"
        label="Calories"
        suffix="kcal"
        required
    ></v-text-field>

    <v-text-field
        v-model="started"
        label="Starting"
        required
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

    <v-btn color="success" small class="mr-2" @click="updateActivity(activityId)">
      submit
    </v-btn>

    <v-btn color="primary" small class="mr-2" @click="clear">
      clear
    </v-btn>

  </v-form>
</template>

<script>
import { useRoute } from 'vue-router'
import ActivityService from "../services/activity.service";
import UserService from "../services/user.service";

export default {
  name: "Activity",
  data() {
    return {
      valid: true,
      username: '',
      category: '',
      description: '',
      duration: 0.0,
      calories: 0.0,
      started: '',
      distance: 0.0,
      createdAt: '',
      userId: '',
      categoryId: '',
      activityId: ''
    };
  },
  mounted() {
    const route = useRoute();
    const id = route.params.activityid;
    ActivityService.getActivityById(id).then(
        (response) => {
          this.activityId = id;
          this.userId = response.data.userId;
          this.categoryId = response.data.categoryId;
          this.description = response.data.description;
          this.duration = response.data.duration;
          this.calories = response.data.calories;
          this.started = response.data.started;
          this.distance = response.data.distance;
          this.createdAt = response.data.created_at
        }
    );
  },
  methods: {
      updateActivity(activityId) {
        var data = {
          userId : this.userId,
          categoryId : this.categoryId,
          description : this.description,
          duration : this.duration,
          calories : this.calories,
          started : this.started,
          distance : this.distance,
        }
        ActivityService.updateActivityById(activityId, data)
            .then((response) => {
              console.log(response.data);
            })
            .catch((e) => {
              console.log(e);
            });
        window.location.reload();
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

