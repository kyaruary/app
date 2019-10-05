export const formatTime = time => {
    if (time < 0) {
        return "00:00";
    }
    let hour = Math.floor(time / 1000 / 60 / 60);
    let min = Math.ceil((time / 1000 / 60) % 60);
    if (min == 60) {
        min = 59;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (hour < 10) {
        hour = '0' + hour;
    }
    return hour + ":" + min;
}