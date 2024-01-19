<template class="q-pa-lg">
  <q-page class="flex flex-center">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="username"
        label="Username"
        hint="Enter Username"
        lazy-rules
        color="primary"
        clearable
        autofocus
        :rules="[ val => val && val.length > 0 || 'username']"
      />

      <q-input
        filled
        v-model="password"
        label="Password"
        hint="Enter Your Password"
        lazy-rules
        color="primary"
        type="password"
        clearable
        :rules="[ val => val && val.length > 0 || 'password']"
      />

      <q-toggle v-model="accept" label="I am not a computer..." />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
      <div>
        <a class="link" href="/ForgotPassword">Forgot Username or Password</a>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default defineComponent({
  name: 'LoginPage',
  setup () {
    const $q = useQuasar()

    return {
      $q
    }},
    data(){
      const username = ref(null)
      const password = ref(null)
      const accept = ref(false)
      return{
        username,
        password,
        accept
      }
    },
    methods: {
        onSubmit(){

        },
        onReset(){

        },
    },
})
</script>

<style lang="scss">
.link{
  text-decoration: none !important;
  color: $primary !important;
}
</style>