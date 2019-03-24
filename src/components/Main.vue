<template>
  <div id="app">
      <Clock :dateTime="dateTime" />
  </div>
</template>

<script>
    import Clock from '@/components/Clock.vue';

    export default {
        name: 'Main',

        components: {
            Clock,
        },

        data() {
            return {
                dateTime: new Date(),
            }
        },

        mounted() {
            this.startClock();
        },

        methods: {
            startClock() {
                this.dateTime = new Date();

                setTimeout(this.startClock, 1000);
            },
        },
    }
</script>

<style>
    html,
    body,
    #app {
        height: 100%;
    }

    body {
        margin: 0;
        font-family: 'Nunito', sans-serif;
        font-size: 15px;
        letter-spacing: 1px;
        line-height: 1.8em;
    }

    #app {
        width: 100%;
        display: flex;
        background: linear-gradient(0, #292f49 0%, #536977 100%);
    }
</style>
