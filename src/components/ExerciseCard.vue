<script>
export default {
  name: "ExerciseCard",
  props: {
    exercise: Object,
  },
  methods: {
    sendToEditModal(exercise){
      this.$emit('to-edit', exercise);
    }
  },
  emits: ['to-edit']
}
</script>

<template>
  <div class="card">
    <div class="card-body text-center">
      <h5 class="card-title">{{ exercise.title }}</h5>
      <p v-for="(set) in exercise.sets">{{ exercise.reps[set - 1] }} reps x {{ exercise.weight[set - 1] }} lbs.</p>
      <q-btn no-caps @click="sendToEditModal(exercise)" color="grey" padding="xs xl"
             data-bs-toggle="modal" data-bs-target="#editExerciseModal">Edit
      </q-btn>
    </div>
  </div>
</template>

<style scoped>

</style>
