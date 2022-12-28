<template>
  id: {{ $route.params.id }}
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
            cols="12"
            md="4"
        >
          <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name id: "
              required
          ></v-text-field>
        </v-col>

        <v-col
            cols="12"
            md="4"
        >
          <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Last name"
              required
          ></v-text-field>
        </v-col>

        <v-col
            cols="12"
            md="4"
        >
          <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  name: 'User',
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
  }),
  computed(){
    console.log($route.params.id)
  }
}
</script>


<!--<template>-->
<!--  id: {{ $route.params.id }}-->
<!--</template>-->

<!--<script>-->
<!--return this.$route.params.id-->
<!--</script>-->