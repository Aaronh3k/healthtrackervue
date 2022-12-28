<template>
  <v-form
      ref="form"
      v-model="valid"
      lazy-validation
  >
    <v-text-field
        v-model="username"
        :counter="15"
        :rules="usernameRules"
        label="User Name"
        required
    ></v-text-field>

    <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
    ></v-text-field>

    <v-text-field
        v-model="firstname"
        :counter="15"
        :rules="firstnameRules"
        label="First Name"
        required
    ></v-text-field>

    <v-text-field
        v-model="lastname"
        :counter="15"
        :rules="lastnameRules"
        label="Last Name"
        required
    ></v-text-field>

    <v-text-field
        v-model="date"
        label="DOB"
        v-bind="attrs"
        v-on="on"
    ></v-text-field>

    <v-select
        v-model="gender"
        :items="items"
        :rules="[v => !!v || 'Gender is required']"
        label="Gender"
        required
    ></v-select>

    <v-text-field
        v-model="createdAt"
        label="Created at"
        readonly
    ></v-text-field>

    <v-btn color="success" small class="mr-2" @click="submit">
      submit
    </v-btn>

    <v-btn color="primary" small class="mr-2" @click="clear">
      clear
    </v-btn>

  </v-form>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  name: "User",
  data() {
    return {
      valid: true,
      username: '',
      usernameRules: [
        v => !!v || 'User Name is required',
        v => (v && v.length <= 15) || 'User Name must be less than 15 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      firstname: '',
      firstnameRules: [
        v => !!v || 'First Name is required',
        v => (v && v.length <= 15) || 'First Name must be less than 15 characters',
      ],
      lastname: '',
      lastnameRules: [
        v => !!v || 'Last Name is required',
        v => (v && v.length <= 15) || 'Last Name must be less than 15 characters',
      ],
      date: '',
      items: [
        'M',
        'F'
      ],
      gender: '',
      createdAt: ''
    };
  },
  setup(){
    const route = useRoute();
    const id = route.params.userid;
    console.log(id)
  },
  methods: {
    submit () {
      console.log(this.username)
      //this.$refs.observer.validate()
    },
    clear () {
      this.username = ''
      this.email = ''
      this.$refs.observer.reset()
    },
    async validate () {
      const { valid } = await this.$refs.form.validate()

      if (valid) alert('Form is valid')
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
}
</script>

<style>
.list {
  max-width: 750px;
}
</style>

<!--<template>-->
<!--  <div v-if="currentTutorial" class="edit-form py-3">-->
<!--    <p class="headline">Edit Tutorial</p>-->

<!--    <v-form ref="form" lazy-validation>-->
<!--      <v-text-field-->
<!--          v-model="currentTutorial.title"-->
<!--          :rules="[(v) => !!v || 'Title is required']"-->
<!--          label="Title"-->
<!--          required-->
<!--      ></v-text-field>-->

<!--      <v-text-field-->
<!--          v-model="currentTutorial.description"-->
<!--          :rules="[(v) => !!v || 'Description is required']"-->
<!--          label="Description"-->
<!--          required-->
<!--      ></v-text-field>-->

<!--      <label><strong>Status:</strong></label>-->
<!--      {{ currentTutorial.published ? "Published" : "Pending" }}-->

<!--      <v-divider class="my-5"></v-divider>-->

<!--      <v-btn v-if="currentTutorial.published"-->
<!--             @click="updatePublished(false)"-->
<!--             color="primary" small class="mr-2"-->
<!--      >-->
<!--        UnPublish-->
<!--      </v-btn>-->

<!--      <v-btn v-else-->
<!--             @click="updatePublished(true)"-->
<!--             color="primary" small class="mr-2"-->
<!--      >-->
<!--        Publish-->
<!--      </v-btn>-->

<!--      <v-btn color="error" small class="mr-2" @click="deleteTutorial">-->
<!--        Delete-->
<!--      </v-btn>-->

<!--      <v-btn color="success" small @click="updateTutorial">-->
<!--        Update-->
<!--      </v-btn>-->
<!--    </v-form>-->

<!--    <p class="mt-3">{{ message }}</p>-->
<!--  </div>-->

<!--  <div v-else>-->
<!--    <p>Please click on a Tutorial...</p>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--//import TutorialDataService from "../services/TutorialDataService";-->

<!--export default {-->
<!--  name: "tutorial",-->
<!--  data() {-->
<!--    return {-->
<!--      currentTutorial: null,-->
<!--      message: "",-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    getTutorial(id) {-->
<!--      TutorialDataService.get(id)-->
<!--          .then((response) => {-->
<!--            this.currentTutorial = response.data;-->
<!--            console.log(response.data);-->
<!--          })-->
<!--          .catch((e) => {-->
<!--            console.log(e);-->
<!--          });-->
<!--    },-->

<!--    updatePublished(status) {-->
<!--      var data = {-->
<!--        id: this.currentTutorial.id,-->
<!--        title: this.currentTutorial.title,-->
<!--        description: this.currentTutorial.description,-->
<!--        published: status,-->
<!--      };-->

<!--      TutorialDataService.update(this.currentTutorial.id, data)-->
<!--          .then((response) => {-->
<!--            this.currentTutorial.published = status;-->
<!--            console.log(response.data);-->
<!--          })-->
<!--          .catch((e) => {-->
<!--            console.log(e);-->
<!--          });-->
<!--    },-->

<!--    updateTutorial() {-->
<!--      TutorialDataService.update(this.currentTutorial.id, this.currentTutorial)-->
<!--          .then((response) => {-->
<!--            console.log(response.data);-->
<!--            this.message = "The tutorial was updated successfully!";-->
<!--          })-->
<!--          .catch((e) => {-->
<!--            console.log(e);-->
<!--          });-->
<!--    },-->

<!--    deleteTutorial() {-->
<!--      TutorialDataService.delete(this.currentTutorial.id)-->
<!--          .then((response) => {-->
<!--            console.log(response.data);-->
<!--            this.$router.push({ name: "tutorials" });-->
<!--          })-->
<!--          .catch((e) => {-->
<!--            console.log(e);-->
<!--          });-->
<!--    },-->
<!--  },-->
<!--  mounted() {-->
<!--    this.message = "";-->
<!--    this.getTutorial(this.$route.params.id);-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style>-->
<!--.edit-form {-->
<!--  max-width: 300px;-->
<!--  margin: auto;-->
<!--}-->
<!--</style>-->

