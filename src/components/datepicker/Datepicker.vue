<style>
  .datepicker__container {
    position: relative;
  }
</style>

<template>
  <div class="datepicker__container">
    <input type="text" value="{{ date_formatted }}" @click="showDatepicker">
    <input type="hidden" name="{{ name }}" value="{{ date_raw }}">
    <via-datepicker-agenda :date="date" :visible="isVisible" @change="selectDate" @cancel="hideDatepicker"></via-datepicker-agenda>
  </div>
</template>

<script>
import moment from 'moment'
import DatepickerAgendaComponent from './DatepickerAgenda'

var locale = 'fr'
// locale = window.navigator.userLanguage || window.navigator.language

moment.locale(locale)

export default {
  components: {
    'via-datepicker-agenda': DatepickerAgendaComponent
  },
  props: {
    value: {type: String, required: true},
    format: {type: String, default: 'YYYY-MM-DD'},
    name: {type: String}
  },
  methods: {
    selectDate (date) {
      this.date = date
      this.hideDatepicker()
    },
    showDatepicker () {
      this.isVisible = true
      setTimeout(() => document.addEventListener('click', this.hideDatepicker), 0)
    },
    hideDatepicker () {
      this.isVisible = false
      document.removeEventListener('click', this.hideDatepicker)
    }
  },
  data () {
    return {
      isVisible: false,
      date: moment(this.value, 'YYYY-MM-DD')
    }
  },
  computed: {
    date_formatted () {
      return this.date.format(this.format)
    },
    date_raw () {
      return this.date.format('YYYY-MM-DD')
    }
  }
}
</script>
