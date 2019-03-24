<template>
    <div class="clock">
        <div class="clock-time">
            {{ time }}
        </div>
        <div class="clock-date">
            {{ date }}
        </div>
    </div>
</template>

<script>
    import DateFormat from '@/util/DateFormat.js';

    export default {
        name: 'Clock',

        props: ['dateTime'],

        computed: {
            date() {
                const dayOfWeek = DateFormat.dayOfWeek(this.dateTime.getDay());
                const day = DateFormat.formatWithOrdinal(this.dateTime.getDate());
                const month = DateFormat.month(this.dateTime.getMonth());

                return `${dayOfWeek} ${day} ${month}`;
            },

            time() {
                const hour = this.dateTime.getHours();
                const hours = (hour > 12) ? hour - 12 : hour;

                const minutes = DateFormat.formatWithZeros(this.dateTime.getMinutes());

                const postfix = (hour > 11) ? 'PM' : 'AM';

                return `${hours}:${minutes} ${postfix}`;
            },
        },
    }
</script>

<style>
    .clock {
        flex: 1;
        margin: auto;
        text-align: center;
        text-shadow: 1px 1px 1px #000;
        cursor: default;
    }

    .clock-time {
        font-size: 6rem;
        line-height: 1.4em;
        color: #fff;
    }

    .clock-date {
        font-size: 1.6rem;
        color: #ccc;
    }
</style>
