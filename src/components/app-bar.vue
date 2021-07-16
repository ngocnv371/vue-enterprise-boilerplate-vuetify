<script>
import { authComputed } from '@state/helpers'
import { mapMutations, mapState } from 'vuex'

export default {
  computed: {
    ...authComputed,
    ...mapState('nav', ['drawer']),
  },
  methods: {
    ...mapMutations('nav', ['SET']),
    toggle() {
      this.SET(!this.drawer)
    },
  },
}
</script>

<template>
  <v-app-bar v-if="loggedIn" color="deep-purple accent-4" dark app>
    <v-app-bar-nav-icon @click.stop="toggle"></v-app-bar-nav-icon>

    <v-toolbar-title>{{ $route.name }}</v-toolbar-title>
    <slot></slot>
  </v-app-bar>
</template>

<style lang="scss" module>
@import '@design';
</style>
