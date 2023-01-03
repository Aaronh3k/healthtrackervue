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
        readonly
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
        v-model="dob"
        label="DOB (YYYY-MM-DD)"
        required
    ></v-text-field>

    <v-select
        v-model="gender"
        :items="items"
        :rules="[v => !!v || 'Gender is required']"
        label="Gender"
        required
    ></v-select>

    <v-text-field
        v-model="role"
        label="Role"
        readonly
    ></v-text-field>

    <v-text-field v-if="isProfile"
        v-model="createdAt"
        label="Created at"
        readonly
    ></v-text-field>

    <v-btn color="success" small class="mr-2" v-if="isProfile" @click="updateUserProfile()">
      submit
    </v-btn>
    <v-btn color="success" small class="mr-2" v-if="!isProfile" @click="addUserProfile()">
      submit
    </v-btn>

    <v-btn color="primary" small class="mr-2" @click="clear">
      clear
    </v-btn>

  </v-form>
</template>

<script>
import { useRoute } from 'vue-router'
import UserService from "../services/user.service";
import ProfilesService from "../services/profile.service";
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
      dob: '',
      items: [
        'M',
        'F'
      ],
      gender: '',
      createdAt: '',
      role: '',
      userId: '',
      isProfile: false
    };
  },
  mounted() {
    UserService.getUserByToken().then(
        (response) => {
          this.username = response.data.user_name;
          this.email = response.data.email;
          this.role = response.data.role;
          this.userId = response.data.id;
        }
    );
    ProfilesService.getProfileByToken().then(
        (response) => {
          if (response.data !== ""){
            this.isProfile = true
            this.firstname = response.data.first_name;
            this.lastname = response.data.last_name;
            this.dob = response.data.dob.split('T')[0];
            this.gender = response.data.gender;
            this.createdAt = response.data.created_at;}
        }
    );
  },
  methods: {
    updateUserProfile() {
      var user_data = {
        user_name : this.username,
        email : this.email
      }
      var profile_data = {
        userId : this.userId,
        first_name : this.firstname,
        last_name : this.lastname,
        dob: this.dob,
        gender: this.gender
      }
      UserService.updateUserByToken(user_data)
          .then((response) => {
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      ProfilesService.updateProfileByToken(profile_data)
          .then((response) => {
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      window.location.reload();
    },
    addUserProfile() {
      var user_data = {
        user_name : this.username,
        email : this.email
      }
      var profile_data = {
        first_name : this.firstname,
        last_name : this.lastname,
        dob: this.dob,
        gender: this.gender,
        userId: this.userId
      }
      UserService.updateUserByToken(user_data)
          .then((response) => {
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      ProfilesService.addProfile(profile_data)
          .then((response) => {
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      window.location.reload();
    },
    clear () {
      this.username = ''
      this.firstname = ''
      this.lastname = ''
      this.gender = ''
      this.dob = ''
    },
  },
}
</script>

<style>
.list {
  max-width: 750px;
}
</style>