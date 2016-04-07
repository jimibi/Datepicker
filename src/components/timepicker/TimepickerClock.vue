<style lang="scss">
/* Theme Material Design
Red, Pink, Purple, Deep_Purple, Indigo, Blue, Light_Blue, Cyan, Teal, Green,
Light_Green, Lime, Yellow, Amber, Orange, Deep_Orange, Brown, Grey.
*/
$theme: 'Green';
@import '../../modules/colors';
@import '../datepicker/animations';

  $time-size: 30em;
  $time-margin: 0.2em;
  $timepicker-width: $time-size + ($time-margin * 2);
  $header-height: 6em;

  .timepicker {
    position: absolute;
    width: $timepicker-width;
    top: 100%;
    z-index: 5;
    font-size:62.5%; margin:1em;
    background:#color-50;
    box-shadow: 0 0.2em 0.8em rgba(0,0,0,0.25), 0 0.2em 0.3em rgba(0,0,0,0.22);
  }
  .timepicker__header {
    background-color: $color-700;
    color: white;
    padding: $time-margin $time-margin 0 $time-margin;
    height: $header-height;
  }
  ul {
    list-style:none;
    margin:0;
    padding:0
  };
  #watch { font-size:1em; position:relative };
  #watch .frame-face {
    position:relative;
    width: 27em;
    height: 27em;
    margin: 2em auto;
    border-radius: 20%;
    background: linear-gradient(to bottom, #f9f9f9,#666);
    box-shadow: rgba(0,0,0,.8) .5em .5em 4em;
  }
  #watch .frame-face:before {
    content: '';
    width: 26.5em;
    height: 26.5em;
    border-radius: 50%;
    position: absolute;
    top: 0.2em;
    left: 0.3em;
    background:
      linear-gradient(135deg, rgba(246,248,249,0) 0%,rgba(229,235,238,1) 50%,rgba(205,212,217,1) 51%,rgba(245,247,249,0) 100%),
      radial-gradient(ellipse at center, rgba(246,248,249,1) 0%,rgba(229,235,238,1) 65%,rgba(205,212,217,1) 66%,rgba(245,247,249,1) 100%);
    }
  #watch .frame-face:after {
    content:'';
    width: 23.5em;
    height: 23.5em;
    border-radius: 50%;
    position: absolute;
    top: 1.8em;
    left: 1.9em;
    box-shadow: inset rgba(0,0,0,0.2) 0.2em 0.2em 1em;
    border: 0.1em solid rgba(0,0,0,0.2);
    background: linear-gradient(to bottom, #fff, #ccc);
  }
  #watch .minute-marks li {
    display: block;
    width: 0.3em;
    height: 1.5em;
    background: $color-600;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -0.6em 0 0 -0.1em;
  }
  #watch .minute-marks li:first-child {
    transform: rotate(6deg) translateY(-12.7em);
  }
  @for $i from 2 through 60 { // a voir
    @if ($i % 5) == 0 {
      #watch .minute-marks li:nth-child(#{$i}) {
        transform: rotate(6deg * 5 * $i) translateY(-10.7em)
      }
    }
    @else {
      #watch .minute-marks li:nth-child(#{$i}) {
        transform: rotate(6deg * $i) translateY(-12.7em)
      }
    }
  }

  #watch .digits {
    width: 26em;
    height: 26em;
    border-radius: 13em;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -13em;
  }
  #watch .digits li {
    font-size: 1.8em;
    display: block;
    width: 1.8em;
    height: 1.8em;
    position:absolute;
    top: 50%;
    left: 50%;
    line-height: 1.6em;
    text-align: center;
    margin: -0.1em 0 0 -1.1em;
    font-weight: bold;
  }
  #watch .digits li:nth-child(12) { transform:translate(0.2em, -7.4em) }
  #watch .digits li:nth-child(6) { transform:translate(0.2em, 6.7em) }
  #watch .digits li:nth-child(1) { transform:translate(3.7em, -6.4em) }
  #watch .digits li:nth-child(11) { transform:translate(-3.2em, -6.4em) }
  #watch .digits li:nth-child(3) { transform:translate(7.2em, -0.38em) }
  #watch .digits li:nth-child(9) { transform:translate(-6.8em, -0.35em) }
  #watch .digits li:nth-child(2) { transform:translate(6.3em, -3.8em) }
  #watch .digits li:nth-child(10) { transform:translate(-5.8em, -3.8em) }
  #watch .digits li:nth-child(4) { transform:translate(6.2em, 3.1em) }
  #watch .digits li:nth-child(8) { transform:translate(-5.8em, 3.1em) }
  #watch .digits li:nth-child(5) { transform:translate(3.7em, 5.8em) }
  #watch .digits li:nth-child(7) { transform:translate(-3.2em, 5.7em) }
  #watch .digits:before {
    content:'';
    width: 1.6em;
    height: 1.6em;
    border-radius: 0.8em;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -.8em 0 0 -0.8em;
    background: $color-900;
  }
  #watch .digits:after {
    content:'';
    width: 4em;
    height: 4em;
    border-radius: 2.2em;
    position: absolute;
    top: 52%;
    left: 50%;
    margin: -2.1em 0 0 -2.1em;
    border: 0.1em solid $color-100;
    background:radial-gradient(ellipse at center, rgba(200,200,200,0), rgba(190,190,190,1) 90%, rgba(130,130,130,1) 100%);
  }
  @keyframes hours { to {transform:rotate(0deg)} }
  #watch .hours-hand {
    width: 0.8em;
    height: 7em;
    border-radius: 0 0 0.9em 0.9em;
    background: $color-900;
    position: absolute;
    bottom: 50%;
    left: 50%;
    margin: 0 0 -0.8em -0.4em;
    box-shadow: #232425 0 0 2px;
    transform-origin: 0.4em 6.2em;
    transform: rotate(-0deg);
    animation: hours 43200s linear 0s infinite;
  }
  #watch .hours-hand:before {
    content: '';
    background: inherit;
    width :1.8em;
    height: 0.8em;
    border-radius: 0 0 0.8em 0.8em;
    box-shadow: $color-900 0 0 1px;
    position: absolute;
    top: -0.7em;
    left: -0.5em;
  }
  #watch .hours-hand:after {
    content: '';
    width: 0;
    height:0;
    border: 0.9em solid $color-900;
    border-width: 0 0.9em 2.4em 0.9em;
    border-left-color: transparent;
    border-right-color: transparent;
    position: absolute;
    top: -3.1em;
    left: -.5em;
  }
  @keyframes minutes { to {transform:rotate(422deg)} }
  #watch .minutes-hand {
    width: 0.8em;
    height: 13em;
    border-radius: 0.5em;
    background: $color-900;
    position: absolute;
    bottom: 48%;
    left: 50%;
    margin: 0 0 -1.5em -0.4em;
    box-shadow: $color-900 0 0 2px;
    transform-origin: 0.4em 11em;
    transform: rotate(0deg);
    animation: minutes 3600s linear 0s infinite;
  }
  @keyframes seconds { to {transform:rotate(480deg)} }
  #watch .seconds-hand {
    width: 0.2em;
    height: 14em;
    border-radius: 0.1em 0.1em 0 0/10em 10em 0 0;
    background: $color-400;
    position: absolute;
    bottom: 50%;
    left: 50%;
    margin: 0 0 -2em -0.1em;
    box-shadow :rgba(0,0,0,.8) 0 0 0.2em;
    transform-origin: 0.1em 12em;
    transform: rotate(0deg);
    animation: seconds 60s steps(60, end) 0s infinite;
  }
  #watch .seconds-hand:after {
    content: '';
    width: 1.4em;
    height: 1.4em;
    border-radius: 0.7em;
    background: inherit;
    position: absolute;
    left: -0.65em;
    bottom: 1.35em;
  }
  #watch .seconds-hand:before {
    content: '';
    width: 0.8em;
    height: 3em;
    border-radius: 0.2em 0.2em 0.4em 0.4em/0.2em 0.2em 2em 2em;
    box-shadow: rgba(0,0,0,.8) 0 0 0.2em;
    background: inherit;
    position: absolute;
    left: -0.35em;
    bottom: -3em;
  }
  #watch .digital-wrap {
    width: 9em;
    height: 3.1em;
    border: 0.1em solid black;
    border-radius: 0.3em;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 3em 0 0 -4.5em;
    overflow: hidden;
    background: $color-100;
    background: linear-gradient(to bottom, $color-400 0%, $color-900 100%);
  }
  #watch .digital-wrap ul {
    float: left;
    width: 2.85em;
    height: 3em;
    border-right: 0.1em solid black;
    color: white;
    font-family: Roboto, sans-serif;
  }
  #watch .digital-wrap ul:last-child { border:none }
  #watch .digital-wrap li {
    font-size: 1.6em;
    line-height: 2;
    letter-spacing: 2px;
    text-align: center;
    position: relative;
    left: 1px;
  }
  #watch .digit-minutes li {
    animation: dsm 3600s steps(60, end) 0s infinite;
  }
  #watch .digit-seconds li {
    animation: dsm 60s steps(60, end) 0s infinite;
  }
  @keyframes dsm {
    to { transform:translateY(-120em) }
  }

  .timepicker__days {
    position: relative;
    overflow: hidden;
    margin: $time-margin $time-margin 0;
    height: $time-size * 3;
    transition: height 0.3s;
    &.has-24-hour {
      height: $time-size * 4;
    }
  }
  .timepicker__hour {
    position: relative;
    width: $time-size;
    height: $time-size;
    float: left;
    text-align: center;
    line-height: $time-size;
    cursor: pointer;
    transition: color 450ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  .timepicker__hour__effect {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: $color-600;
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1);
    transform: scale(0);
    opacity: 0;
  }
  .timepicker__hour__text {
    position: relative;
  }
  .timepicker__hour:hover {
    color: white;
    .timepicker__hour__effect {
      transform: scale(1);
      opacity: 0.6;
    }
  }
  .timepicker__hour.selected {
    color: white;
    .timepicker__hour__effect {
      transform: scale(1);
      opacity: 1;
    }
  }
  .timepicker__controls {
    position: relative;
    height: 56px;
    line-height: 56px;
    text-align: center;
    button {
      position: relative;
      border: none;
      background-color: transparent;
      user-select: none;
      outline: none;
      cursor: pointer;
      width: 56px;
      height: 56px;
    }
    svg {
      width: 24px;
      height: 24px;
      fill: rgba(0,0,0,0.87);
      vertical-align: middle;
    }
  }
  .timepicker__next {
    float: right;
  }
  .timepicker__nextm {
    float: right;
    left: 25px;
  }
  .timepicker__prev {
    float: left;
  }
  .timepicker__prevm {
    left: -25px;
    float: left;
  }
  .timepicker__minute {
    position: absolute;
    height: 16px;
    line-height: 16px;
    overflow: hidden;
    top: 20px;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .timepicker__actions {
    text-align: right;
    padding: 8px;
  }
  .timepicker__actions button {
    border: none;
    background-color: transparent;
    display: inline-block;
    cursor: pointer;
    outline: none;
    color: $color-500;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 500;
    min-width: 70px;
    line-height: 30px;
    text-align: center;
    -webkit-appearance: none;
    transition: all 0.3s;
    &:hover {
      background-color: rgba(153, 153, 153, 0.2);
    }
  }
  .timepicker-slide-transition {
    opacity: 1;
    transition: all 0.3s;
    transform: translateY(0);
  }
  .timepicker-slide-leave, .timepicker-slide-enter {
    opacity: 0;
    transform: translateY(-15px);
  }

</style>

<template>
  <div class="timepicker" v-if="visible" transition="datepicker-slide" @click.stop>
    <div class="timepicker__header">
      <div class="timepicker__time">
        <span v-for="time_formatted in [time_formatted]" transition="slideh" :class="timeDirection">{{ time_formatted }}</span>
      </div>
    </div>
  <div id="watch">
    <div class="frame-face"></div>
    <ul class="minute-marks">
      <template v-for="minute in minutes">
        <li></li>
      </template>
    </ul>
    <div class="digital-wrap">
      <ul class="digit-hours">
        <span v-for="hour in hours"><li>{{ ("00" + hour).slice(-2) }}</li></span>
      </ul>
      <ul class="digit-minutes">
        <span v-for="minute in minutes"><li>{{ ("00" + minute).slice(-2) }}</li></span>
      </ul>
      <ul class="digit-seconds">
        <span v-for="second in seconds"><li>{{ ("00" + second).slice(-2) }}</li></span>
      </ul>
    </div>
    <ul class="digits">
      <template v-for="heure in heures"><li>{{ heure }}</li></template>
    </ul>
    <div class="hours-hand"></div>
    <div class="minutes-hand"></div>
    <div class="seconds-hand"></div>
  </div>
  <div class="timepicker__actions">
    <button @click="cancel">Annuler</button>
    <button @click="submit">Ok</button>
  </div>
    <!--div class="datepicker__controls">
      <div class="datepicker__month">
        <span v-for="month in [month]" transition="slideh" :class="classDirection">{{ month.getFormatted() }}</span>
      </div>
      <button class="datepicker__next" @click="nextYear()">
        <svg viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
          <path d="M6 6 4.59 7.41 9.17 12 4.59 16.59 6 18 12 12 z"></path>
        </svg>
      </button>
      <button class="datepicker__nextm" @click="nextMonth()">
        <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>
      </button>
      <button class="datepicker__prev" @click='prevYear()'>
        <svg viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
          <path d="M 19.41 7.41 18 6 12 12 18 18 19.41 16.59 14.83 12 z"></path>
        </svg>
      </button>
      <button class="datepicker__prevm" @click='prevMonth()'>
        <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>
      </button>
    </div>
    <div class="datepicker__week">
      <div v-for="day in days" track-by="$index" class="datepicker__weekday">
        {{ day }}
      </div>
    </div>
    <div class="datepicker__days" :class="classWeeks">
      <div v-for="month in [month]" transition="slidev" :class="classDirection">
        <div class="datepicker__day" v-bind:style="{width: (month.getWeekStart() * 35) + 'px'}">
        </div>
        <div class="datepicker__day" @click="selectDate(day)" v-for="day in month.getDays()" :class="{selected: isSelected(day)}">
          <span class="datepicker__day__effect"></span>
          <span class="datepicker__day__text">{{ day.format('D') }}</span>
        </div>
      </div>
    </div-->
  </div>
</template>

<script>
export default {
  props: {
    time: {},
    visible: {type: Boolean, default: true}
  },
  data () {
    let heures_lg = []
    let hours_lg = []
    let minutes_lg = []
    let seconds_lg = []
    for (let id = 0; id < 12; id++) { heures_lg[id] = id + 1 }
    for (let id = 0; id < 23; id++) { hours_lg[id] = id }
    for (let id = 0; id < 60; id++) { minutes_lg[id] = id }
    for (let id = 0; id < 60; id++) { seconds_lg[id] = id }
    return {
      heures: heures_lg,
      hours: hours_lg,
      minutes: minutes_lg,
      seconds: seconds_lg,
      classDirection: 'off',
      timeDirection: 'off'
    }
  },
  methods: {
    isSelected (time) {
      return this.time.unix() === time.unix()
    },
    selectMinute (minute) {
      this.minuteDirection = 'direction-next'
      if (minute.isBefore(this.minute)) {
        this.minuteDirection = 'direction-prev'
      }
      this.time = minute.clone()
    },
    nextMinute () {
      this.classDirection = 'direction-next'
      let minute = this.time.minute + 1
      let hour = this.time.hour
      if (minute > 59) {
        hour += 1
        minute = 0
      }
      // this.time = new Hour(minute, hour)
    },
    prevMinute () {
      this.classDirection = 'direction-prev'
      let minute = this.time.minute - 1
      let hour = this.time.hour
      if (minute < 0) {
        hour -= 1
        minute = 60
      }
      // this.time = new Hour(hour, minute)
    },
    nextHour () {
      this.classDirection = 'direction-next'
      // let minute = this.time.minute
      let hour = this.time.hour + 1
      if (hour > 23) {
        hour = 0
      }
      // this.time = new Hour(minute, hour)
    },
    prevHour () {
      this.classDirection = 'direction-prev'
      // let minute = this.time.minute
      let hour = this.time.hour - 1
      if (hour < 0) {
        hour = 23
      }
      // this.time = new Hour(minute, hour)
    },
    submit () {
      this.$dispatch('change', this.time)
    },
    cancel () {
      this.$dispatch('cancel')
    }
  },
  watch: {
    visible (val, oldval) {
      if (val === false) {
        this.classDirection = 'off'
        this.timeDirection = 'off'
      }
    }
  },
  computed: {
    houri () {
      return this.time.format('hh')
    },
    classWeeks () {
      return 'has-' + this.month.getWeeks() + '-ampm'
    },
    time_formatted () {
      return this.time.format('hh mm')
    }
  }
}
</script>
