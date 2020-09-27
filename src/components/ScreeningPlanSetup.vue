<template>
  <div class="flex">
    <div class="flex-1" style="width: 800px !important;">
      <draggable tag="el-collapse" :list="list" :component-data="collapseComponentData">
        <div
          class="shadow-md border-2 mb-4 bg-gray-300"
          v-for="item in list"
          :key="item.job_step_id"
          :name="item.job_step_id"
        >
          <header class="p-4">
            <input
              class="mb-4 bg-gray-300"
              type="text"
              placeholder="Step Name"
              v-model="item.step_name"
              @change="handleChangeStepName"
            />

            <el-collapse v-model="activeName" accordion>
              <draggable tag="el-collapse" :list="item.activities">
                <el-collapse-item
                v-for="activity in item.activities"
                :key="activity.job_step_activity_id"
                :name="activity.job_step_activity_id"
              >
                <template slot="title">
                  <input
                    class="m-0"
                    type="text"
                    placeholder="Activity Name"
                    v-model="activity.activity_name"
                    @change="handleChangeActivityName"
                  />
                </template>

                <p class="px-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sequi vero cupiditate magnam
                  repudiandae at rerum minus doloremque veniam possimus! Aliquid numquam corrupti recusandae. Doloremque
                  nostrum reiciendis totam nobis hic alias, id sit itaque!
                </p>
                
              </el-collapse-item>
              </draggable>
            </el-collapse>



          </header>
        </div>
      </draggable>
    </div>

    <div class="flex-1 p-4">
      <div class="block">
        <div class="text-2xl p-12">{{ listTitle }}</div>
        <vue-json-pretty
          :data="list"
          :deep="4"
          :show-double-quotes="true"
          :show-length="true"
          :show-line="showLine"
          :highlight-mouseover-node="highlightMouseoverNode"
          :collapsed-on-click-brackets="collapsedOnClickBrackets"
          :custom-value-formatter="useCustomLinkFormatter ? customLinkFormatter : null"
        >
        </vue-json-pretty>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import 'element-ui/lib/theme-chalk/index.css'

import draggable from 'vuedraggable'
import NestedDraggable from './NestedDraggable'
import VueJsonPretty from 'vue-json-pretty'

export default {
  name: 'ScreeningPlanSetup',
  display: 'Screening Plan Setup',
  order: 10,
  components: {
    draggable,
    NestedDraggable,
    VueJsonPretty,
  },
  methods: {
    inputChanged(val) {
      this.activeNames = val
    },
    customValueData() {
      return {
        componentName: 'ScreeningPlanSetup.vue',
        title: 'Screening Plan Setup',
        message: 'Love is the key.',
      }
    },
    handleChangeStepName(stepName) {
      console.log('stepName', stepName)
    },
    handleChangeActivityName(activityName) {
      console.log('activityName', activityName)
    },
  },
  data() {
    return {
      activeName: null,
      num: 1,
      listTitle: 'Screening Plan JSON Data',
      value: 'res.error',
      selectableType: 'single',
      showSelectController: true,
      showLength: false,
      showLine: true,
      showDoubleQuotes: true,
      highlightMouseoverNode: true,
      highlightSelectedNode: true,
      selectOnClickNode: true,
      collapsedOnClickBrackets: true,
      useCustomLinkFormatter: false,
      path: 'res',
      deep: 3,
      itemData: {},
      itemPath: '',
      list: [
        {
          sort_order: 0,
          step_name: 'Personal Profile',
          job_step_id: 3465,
          job_id: 1910,
          min_pass_score: null,
          job_type_id: 2,
          activities: [
            {
              job_id: 1910,
              job_step_activity_id: 5422,
              step_name: 'Personal Profile',
              activity_name: 'Personal Profile',
              measurement_type_id: 6,
              measurement_type: 'Profiles',
              minutes: null,
              question_count: 0,
              asmt_count: 0,
              asmt_question_count: null,
              activity_weight: 5,
              sort_order: 0,
              job_type_id: 2,
              instruction: null,
              outcome_frequency_id: null,
              months_until_first_perf: null,
            },
          ],
        },
        {
          job_step_id: 3466,
          activities: [
            {
              job_id: 1910,
              job_step_activity_id: 5423,
              step_name: 'Online Skype Interview',
              activity_name: 'Initial Screening',
              measurement_type_id: 3,
              measurement_type: 'Pre-screen Question',
              minutes: 31,
              question_count: 2,
              asmt_count: 0,
              asmt_question_count: null,
              activity_weight: 6,
              sort_order: 1,
              job_type_id: 2,
              instruction: '',
              outcome_frequency_id: null,
              months_until_first_perf: null,
            },
          ],
          step_name: 'Online Skype Interview',
          min_pass_score: null,
          job_type_id: 2,
          sort_order: 1,
          job_id: 1910,
        },
        {
          job_step_id: 3467,
          activities: [
            {
              job_id: 1910,
              job_step_activity_id: 5424,
              step_name: 'Audition Videos',
              activity_name: 'Learn Our 2 min Routine',
              measurement_type_id: 1,
              measurement_type: 'Personal Assessment',
              minutes: 57,
              question_count: 0,
              asmt_count: 1,
              asmt_question_count: '58',
              activity_weight: 2,
              sort_order: 1,
              job_type_id: 2,
              instruction: null,
              outcome_frequency_id: null,
              months_until_first_perf: null,
            },
            {
              job_id: 1910,
              job_step_activity_id: 5425,
              step_name: 'Audition Videos',
              activity_name: 'Upload to YouTube',
              measurement_type_id: 1,
              measurement_type: 'Personal Assessment',
              minutes: 58,
              question_count: 0,
              asmt_count: 1,
              asmt_question_count: '42',
              activity_weight: 7,
              sort_order: 2,
              job_type_id: 2,
              instruction: null,
              outcome_frequency_id: null,
              months_until_first_perf: null,
            },
            {
              job_id: 1910,
              job_step_activity_id: 5426,
              step_name: 'Audition Videos',
              activity_name: 'Teach Routine Video',
              measurement_type_id: 1,
              measurement_type: 'Personal Assessment',
              minutes: 59,
              question_count: 0,
              asmt_count: 1,
              asmt_question_count: '39',
              activity_weight: 2,
              sort_order: 3,
              job_type_id: 2,
              instruction: null,
              outcome_frequency_id: null,
              months_until_first_perf: null,
            },
          ],
          step_name: 'Audition Videos',
          min_pass_score: null,
          job_type_id: 2,
          sort_order: 2,
          job_id: 1910,
        },
        {
          job_step_id: 3472,
          activities: [],
          step_name: 'Add Screening Step Modal',
          min_pass_score: null,
          job_type_id: 2,
          sort_order: 3,
          job_id: 1910,
        },
        {
          job_step_id: 3473,
          activities: [],
          step_name: 'New Step 4',
          min_pass_score: null,
          job_type_id: 2,
          sort_order: 4,
          job_id: 1910,
        },
      ],

      activeNames: [1],
      collapseComponentData: {
        on: {
          input: this.inputChanged,
        },
        props: {
          value: this.activeNames,
        },
      },

    }
  },
}
</script>
<style scoped></style>
