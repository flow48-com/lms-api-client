import { format, isValid } from 'date-fns';
export const formatDate = (date) => {
    const _date = new Date(date);
    return isValid(_date) ? format(_date, 'yyyy-MM-dd') : 'Invalid date';
};
export const todayDate = format(new Date(), 'yyyy-MM-dd');
export const handleParamsSerializer = (params) => {
    if (params instanceof URLSearchParams) {
        return params.toString();
    }
    return Object.entries(params)
        .map(([key, value]) => {
        if (Array.isArray(value)) {
            return value.map((val) => `${key}=${encodeURIComponent(val)}`).join('&');
        }
        return `${key}=${encodeURIComponent(value)}`;
    })
        .join('&');
};
