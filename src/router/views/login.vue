<script>
import Layout from '@layouts/main.vue'
import { authMethods } from '@state/helpers'
import appConfig from '@src/app.config'

export default {
  page: {
    title: 'Log in',
    meta: [{ name: 'description', content: `Log in to ${appConfig.title}` }],
  },
  components: { Layout },
  data() {
    return {
      username: '',
      password: '',
      authError: null,
      tryingToLogIn: false,
    }
  },
  computed: {
    placeholders() {
      return process.env.NODE_ENV === 'production'
        ? {}
        : {
            username: 'Use "admin" to log in with the mock API',
            password: 'Use "password" to log in with the mock API',
          }
    },
  },
  methods: {
    ...authMethods,
    // Try to log the user in with the username
    // and password they provided.
    tryToLogIn() {
      this.tryingToLogIn = true
      // Reset the authError if it existed.
      this.authError = null
      return this.logIn({
        username: this.username,
        password: this.password,
      })
        .then((token) => {
          this.tryingToLogIn = false

          // Redirect to the originally requested page, or to the home page
          this.$router.push(this.$route.query.redirectFrom || { name: 'home' })
        })
        .catch((error) => {
          this.tryingToLogIn = false
          this.authError = error
        })
    },
  },
}
</script>

<template>
  <Layout>
    <v-row align="center" justify="center">
      <v-col>
        <v-form ref="form" @submit.prevent="tryToLogIn">
          <h2 class="text-center">Login</h2>
          <v-text-field
            v-model="username"
            name="username"
            :placeholder="placeholders.username"
          />
          <v-text-field
            v-model="password"
            name="password"
            type="password"
            :placeholder="placeholders.password"
          />
          <div class="text-right">
            <v-btn :disabled="tryingToLogIn" type="submit" color="primary">
              <v-icon v-if="tryingToLogIn" class="spin">spinner</v-icon>
              <span v-else>
                Log in
              </span>
            </v-btn>
          </div>
          <v-alert v-if="authError" color="error" class="mt-2">
            There was an error logging in to your account.
          </v-alert>
        </v-form>
      </v-col>
    </v-row>
  </Layout>
</template>

<style lang="scss" module>
@import '@design';

.form {
  text-align: center;
}
</style>
