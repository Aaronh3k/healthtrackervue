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
  name: "Category",
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

