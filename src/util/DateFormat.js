const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const ordinals = ['th', 'st', 'nd', 'rd'];

export default class DateFormat {

    static month(index) {
        return months[index];
    }

    static dayOfWeek(index) {
        return days[index];
    }

    static formatWithZeros(number) {
        if (number < 10) {
            return `0${number}`;
        }
        
        return `${number}`;
    }

    static formatWithOrdinal(number) {
        const ordinal = this.ordinal(number);
        
        return `${number}${ordinal}`;
    }

    static ordinal(number) {
        const v = number % 100;
        
        return ordinals[(v - 20) % 10] || ordinals[v] || ordinals[0];
    }
}