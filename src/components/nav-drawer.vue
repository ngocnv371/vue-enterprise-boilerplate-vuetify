<script>
import { mapMutations, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('nav', ['drawer']),
  },
  methods: {
    ...mapMutations('nav', ['SET']),
    onUpdate(value) {
      this.SET(value)
    },
  },
}
</script>

<template>
  <v-navigation-drawer
    :value="drawer"
    absolute
    left
    temporary
    app
    @input="onUpdate"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Delve
        </v-list-item-title>
        <v-list-item-subtitle>
          deep
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
    <v-list nav dense>
      <v-list-item-group active-class="deep-purple--text text--accent-4">
        <v-list-item to="/about">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn block color="secondary" to="/profile">
          Profile
        </v-btn>
      </div>
      <div class="pa-2">
        <v-btn block color="primary" to="/logout">
          Logout
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<style lang="scss" module>
@import '@design';
</style>
