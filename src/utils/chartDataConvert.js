import { TOOLTIP_DATA_LIMIT } from 'constants/index';

export const getFormattedData = (data) => {

    // init new date and get the string fromat of day and month
    const dateInfo = data.date.split('-');
    dateInfo[2]  = dateInfo[2] - 0;

    const day = getDay(data.date);
    const month = getMonth(data.date);

    const title = `${day}, ${month} ${dateInfo[2]}, ${dateInfo[0]}`;
    const x = `${dateInfo[2]} ${day.substring(0, 3)}`;
    const y = data.visitors;

    return {
        x, 
        y,
        title,
        date: data.date
    }
}

const getDay = (date) => {
    if(!date) return '';

    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    const dateInfo = date.split('-');
    const newDate = new Date(dateInfo[0], (dateInfo[1] - 1), dateInfo[2]);

    return days[ newDate.getDay() ];    
}

export const getMonth = (date) => {
    if(!date) return '';

    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    const dateInfo = date.split('-');
    const newDate = new Date(dateInfo[0], (dateInfo[1] - 1), dateInfo[2]);

    return months[ newDate.getMonth() ];    
}

export const filterTooltipData = (date, data) => {
    const result = data.filter((each) => {
        return each.date === date;
    });

    return result.slice(0, TOOLTIP_DATA_LIMIT);
}