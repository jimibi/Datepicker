import Vue from 'vue'
import DatepickerComponent from './components/datepicker/Datepicker'
import TimepickerComponent from './components/timepicker/Timepicker'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: {
    viaDatepicker: DatepickerComponent,
    viaTimepicker: TimepickerComponent
  }
})
