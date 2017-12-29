export default function _formatTime(fourDigitTime) {
    var hours24 = parseInt(fourDigitTime.substring(0, 2),10);
    var hours = ((hours24 + 11) % 12) + 1;
    var amPm = hours24 > 11 ? 'PM' : 'AM';
    var minutes = fourDigitTime.length<1 ? fourDigitTime.substring(2) : '00 ';

    return hours + ':' + minutes + amPm;
}
