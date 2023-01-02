<template>
  <v-form
      ref="form"
      v-model="valid"
      lazy-validation
  >
    <v-text-field v-if="isAdmin"
        v-model="userId"
        label="User ID"
        required
    ></v-text-field>

    <v-text-field
        v-model="categoryId"
        label="Category ID"
        required
    ></v-text-field>

    <v-text-field
        v-model="description"
        label="Description"
        required
    ></v-text-field>

    <v-text-field
        v-model="duration"
        label="Duration"
        type="float"
    ></v-text-field>

    <v-text-field
        v-model="calories"
        type="float"
        label="Calories"
        suffix="kcal"
        required
    ></v-text-field>

    <v-text-field
        v-model="started"
        label="Starting (YYYY-MM-DD)"
        required
    ></v-text-field>

    <v-text-field
        v-model="distance"
        type="float"
        label="Distance Covered"
        suffix="km"
    ></v-text-field>


    <v-btn color="success" small class="mr-2" @click="addActivityUser()">
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

export default {
  name: "AddActivity",
  data() {
    return {
      valid: true,
      category: '',
      description: '',
      duration: '',
      calories: '',
      started: '',
      distance: '',
      createdAt: '',
      userId: '',
      categoryId: '',
      activityId: ''
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
    addActivityUser() {
      var data = {
        userId : this.currentUser.Id,
        categoryId : this.categoryId,
        description : this.description,
        duration : this.duration,
        calories : this.calories,
        started : this.started,
        distance : this.distance,
      }

      ActivityService.addActivity(data)
          .then((response) => {
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });

      this.$router.push("/activities")
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

