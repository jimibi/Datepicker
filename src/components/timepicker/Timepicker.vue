<style>
  .timepicker__container {
    position: relative;
  }
</style>

<template>
  <div class="timepicker__container">
    <input type="text" value="{{ time_formatted }}" @click="showTimepicker">
    <input type="text" name="{{ name }}" value="{{ time_raw }}">
    <via-timepicker-clock :time="time" :visible="isVisible" @change="selectTime" @cancel="hideTimepicker"></via-timepicker-clock>
  </div>
</template>

<script>
import moment from 'moment'
import TimepickerClockComponent from './TimepickerClock'

var locale = 'fr'
// locale = window.navigator.userLanguage || window.navigator.language

moment.locale(locale)

export default {
  components: {
    'via-timepicker-clock': TimepickerClockComponent
  },
  props: {
    value: {type: String, required: true},
    format: {type: String, default: 'hh:mm'},
    name: {type: String}
  },
  methods: {
    selectTime (time) {
      this.time = time
      this.hideTimepicker()
    },
    showTimepicker () {
      this.isVisible = true
      setTimeout(() => document.addEventListener('click', this.hideTimepicker), 0)
    },
    hideTimepicker () {
      this.isVisible = false
      document.removeEventListener('click', this.hideTimepicker)
    }
  },
  data () {
    return {
      isVisible: false,
      time: moment(this.value, 'hh:mm:ss')
    }
  },
  computed: {
    time_formatted () {
      return this.time.format(this.format)
    },
    time_raw () {
      return this.time.format('hh:mm:ss')
    }
  }
}
</script>
