<template>
  <div id="app">
    <div class="flex justify-center mt-6">
      <div class="min-h-screen">
        <header class="bg-gray-400 px-3 py-3 mb-6">
          <div class="col-1">
            <button class="btn btn-secondary button" @click="add">
              Add Step
            </button>
          </div>
        </header>
        <div
          v-for="(step, idx) in steps"
          :key="step.sort_order"
          class="bg-gray-300 px-3 py-3 mb-6"
        >
          <div class="text-gray-700 font-semibold font-sans text-lg">
            <i class="fa fa-align-justify handle"></i>
            <span class="p-3">{{ step.sort_order }}</span>
            <input
              v-model="step.title"
              class="border-solid border-2 border-gray-600 p-1"
            />
            <i class="fa fa-close" @click="removeAt(idx)"></i>
          </div>
          <!-- Draggable component comes from vuedraggable. It provides drag & drop functionality -->
          <draggable
            tag="ul"
            :list="step.tasks"
            :animation="200"
            ghost-class="ghost-card"
            group="tasks"
            class="list-group"
          >
            <!-- Each element from here will be draggable and animated. Note :key is very important here to be unique both for draggable and animations to be smooth & consistent. -->
            <task-card
              v-for="task in step.tasks"
              :key="task.id"
              :task="task"
              class="mt-3 cursor-move"
            ></task-card>
            <!-- </transition-group> -->
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import TaskCard from "./components/TaskCard.vue";

let id = 3;

export default {
  name: "App",
  instruction: "Drag using the handle icon",
  order: 5,
  components: {
    TaskCard,
    draggable,
  },
  data() {
    return {
      steps: [
        {
          title: "Backlog",
          sort_order: 1,
          tasks: [
            {
              id: 1,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request",
            },
            {
              id: 2,
              title: "Provide documentation on integrations",
              date: "Sep 12",
            },
            {
              id: 3,
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design",
            },
            {
              id: 4,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request",
            },
            {
              id: 5,
              title: "Test checkout flow",
              date: "Sep 15",
              type: "QA",
            },
          ],
        },
        {
          title: "In Progress",
          sort_order: 2,
          tasks: [
            {
              id: 6,
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design",
            },
            {
              id: 7,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request",
            },
            {
              id: 8,
              title: "Provide documentation on integrations",
              date: "Sep 12",
              type: "Backend",
            },
          ],
        },
        {
          title: "Review",
          sort_order: 3,
          tasks: [
            {
              id: 9,
              title: "Provide documentation on integrations",
              date: "Sep 12",
            },
            {
              id: 10,
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design",
            },
            {
              id: 11,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request",
            },
            {
              id: 12,
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design",
            },
            {
              id: 13,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request",
            },
          ],
        },
        {
          title: "Done",
          sort_order: 4,
          tasks: [
            {
              id: 14,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request",
            },
            {
              id: 15,
              title: "Design shopping cart dropdown",
              date: "Sep 9",
              type: "Design",
            },
            {
              id: 16,
              title: "Add discount code to checkout page",
              date: "Sep 14",
              type: "Feature Request",
            },
          ],
        },
      ],
    };
  },
  methods: {
    removeAt(idx) {
      this.steps.splice(idx, 1);
    },
    add: function () {
      id++;
      this.steps.push({ name: "Juan " + id, id, text: "" });
    },
  },
};
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
  background: #F7FAFC;
  border: 1px solid #4299e1;
}
</style>
