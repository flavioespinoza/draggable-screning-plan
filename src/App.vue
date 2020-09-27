<template>
  <div id="app">
    <section class="flex justify-center mt-6">
      <screening-plan-setup />
    </section>
  </div>
</template>

<script>
// import Draggable from 'vuedraggable'
// import Activity from './components/Activity'
import ScreeningPlanSetup from './components/ScreeningPlanSetup'
let id = 3

export default {
  name: 'App',
  instruction: 'Drag using the handle icon',
  order: 5,
  components: {
    // Activity,
    // Draggable,
    ScreeningPlanSetup,
  },
  data() {
    return {
      steps: [],
    }
  },
  methods: {
    removeAt(idx) {
      this.steps.splice(idx, 1)
    },
    add: function() {
      id++
      this.steps.push({ name: 'Juan ' + id, id, text: '' })
    },
  },
}
</script>

<style scoped>
.column-width {
  min-width: 320px;
  width: 320px;
}
/* Unfortunately @apply cannot be setup in codesandbox, 
but you'd use "@apply border opacity-50 border-blue-500 bg-gray-200" here */
.ghost-card {
  opacity: 0.5;
  border: 1px solid #4299e1;
}
</style>
