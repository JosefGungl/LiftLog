<script>
export default {
  name: "DateBar",
  data: function(){
    return{
      newDate: this.date,
    }
  },
  props: {
    date: String,
  },
  created: function (){
    this.newDate = this.date;
  },
  methods: {
    editDate(edit) {
      this.$emit('edit-date', edit);
    },
    updateDate() {
      this.$emit('update-date', this.newDate);
    },
  },
  emits: ['edit-date', 'update-date'],

}
</script>

<template>
  <div class="row g-3">
    <div class="col text-right align-items-center">
      <q-btn flat no-caps @click="editDate(-1)"><q-icon name="fa-solid fa-angle-left" />Yesterday</q-btn>
    </div>
    <div class="col align-items-center text-center fw-bold fs-2">
      Lift Log
    </div>
    <div class="col align-items-center">
      <q-btn flat no-caps @click="editDate(1)">Tomorrow<q-icon name="fa-solid fa-angle-right"/></q-btn>
    </div>
  </div>
  <!-- today's date -->
  <div class="row g-3">
    <div class="col text-center align-items-center">
      <button class="btn border-0 btn-date">
        <input type="date" id="currentDate" @input="updateDate" v-model="newDate" />
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
