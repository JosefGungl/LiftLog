<script>
import {defineComponent} from "vue";
import DateBar from "@/components/DateBar.vue";
import AddExerciseModal from "@/components/AddExerciseModal.vue";
import ExerciseCard from "@/components/ExerciseCard.vue";
import EditExerciseModal from "@/components/EditExerciseModal.vue";
import EndWorkoutModal from "@/components/EndWorkoutModal.vue";
import ReviewCard from "@/components/ReviewCard.vue";
import ExerciseCollection from "@/models/DayExerciseCollection.js";
import DayExerciseCollection from "@/models/DayExerciseCollection.js";
import ReviewCollection from "@/models/ReviewCollection.js";

export default
defineComponent({
  components: {
    DateBar,
    AddExerciseModal,
    ExerciseCard,
    EditExerciseModal,
    EndWorkoutModal,
    ReviewCard,
  },
  useQuasar:{

  },
  data() {
    return {
      exerciseList: new ExerciseCollection().add({
        id: 0, title: 'Bench Press', date: '2024-04-03',
        sets: 2, reps: [10, 10], weight: [185, 185]
      }),
      dayList: new DayExerciseCollection(),
      reviewList: new ReviewCollection(),
      daysReview:{},
      selectedEditExercise: {},
      currentDay: ''
    };
  },
  methods:{
    addExercise(exercise, date){
      this.exerciseList.add(exercise, date);
      this.dayList.add(exercise, date);
    },

    addSet(){
      this.exerciseList.addSet(this.selectedEditExercise)
    },
    deleteSet(i){
      this.exerciseList.deleteSet(this.selectedEditExercise, i)
    },
    saveExercise() {
      this.selectedEditExercise = {};
    },
    addReview(newReview) {
      this.daysReview = newReview;
    },
    sendToEditModal(exercise) {
      this.selectedEditExercise = exercise;
    },
    editDate(edit) {
      this.currentDay = moment(this.currentDay).add(edit, 'days').format('YYYY[-]MM[-]DD');
    },
    getCurrentDate() {
      let today = new Date();
      return moment(today).format('YYYY[-]MM[-]DD');
    },
    updateDate(newDate) {
      this.currentDay = newDate;
    },
    checkEmpty(review){
      return Object.keys(review).length;
    }
  }
})

</script>


<template>
  <div class="container bg-inner rounded-3 q-mt-xl q-mb-xl">
    <div class="mt-2">
      <date-bar :date="currentDay"
                @edit-date="editDate"
                @update-date="updateDate"
      ></date-bar>
      <div class="row g-2">
        <div class="col text-right">
          <q-btn no-caps color="grey" class="btn-new-exercise" data-bs-toggle="modal"
                 data-bs-target="#newExerciseModal">Add New Exercise
          </q-btn>
        </div>

        <add-exercise-modal id="newExerciseModal"
                            :date="currentDay"
                            @add-exercise="addExercise"
        ></add-exercise-modal>

        <div class="col"></div>
        <div class="col">
          <div class="row q-pa-none">
            <div class="col-sm-auto align-self-center q-pt-none text-left">
              <label for="workout-name" class="form-label">Today's workout is:</label>
            </div>
            <div class="col-4 column justify-center">
              <input type="text" class="form-control" id="workout-name" value="">
            </div>
          </div>
        </div>
      </div>

      <div class="row q-pa-md wrap justify-center">
        <div v-for="(exercise, i) in dayList" :key="dayList" class="column justify-center q-pa-md q-gutter-sm" style="width: 300px;">
          <exercise-card id="exerciseCard"
                         :exercise="exercise"
                         @to-edit="sendToEditModal"
                         style="width: 275px;"
          ></exercise-card>
        </div>
      </div>

      <edit-exercise-modal id="editExerciseModal"
                           :exercise="selectedEditExercise"
                           @add-set="addSet"
                           @delete-set="deleteSet"
                           @save-exercise="saveExercise"
                           @delete-exercise="ex => exerciseList.delete(ex)"
      ></edit-exercise-modal>

      <div class="row g-3">
        <div class="col text-center justify-center" :key="daysReview">
          <div v-if="checkEmpty(daysReview) !== 0"></div>

          <review-card v-if="checkEmpty(daysReview) !== 0"
                          :review="daysReview"
                          :key="daysReview"
                          @delete-review="review => reviewList.delete(review)"
          > </review-card>
          <q-btn v-else no-caps color="grey" class="btn-end-workout" padding="xs xl"
                 data-bs-toggle="modal" data-bs-target="#endWorkoutModal">End Workout
          </q-btn>
        </div>

        <end-workout-modal id="endWorkoutModal"
                           @add-review="review => reviewList.add(review)"
        ></end-workout-modal>
      </div>
    </div>
  </div>
</template>


<style scoped>
div.bg-inner{
  height: 90vh;
}
</style>
