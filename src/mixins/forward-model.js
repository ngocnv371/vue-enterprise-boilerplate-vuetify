export default {
  props: ['value'],
  computed: {
    localValue: {
      get() {
        return this.value
      },
      set(localValue) {
        this.$emit('input', localValue)
      },
    },
  },
}
