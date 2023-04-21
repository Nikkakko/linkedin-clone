import moment from 'moment';

export const getCurrentTimeStamp = (timeFormat: number) => {
  return moment(timeFormat).format('LLL');
};
