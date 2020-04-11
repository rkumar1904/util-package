import moment from 'moment';

export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const randomColor = () => {
  // return `#${Math.floor(Math.random() * 0xFFFFFF).toString(16)}`;
  return `hsl(${Math.random() * 360}, 100%, 90%)`;
};

export const randomColorDark = (index = 0) => {
  // return `#${Math.floor(Math.random() * 0xFFFFFF).toString(16)}`;
  // return "hsl(" + Math.random() * 55 + ", 70%, 70%)";
  const colorList = [
    'rgba(216, 226, 220, 1)',
    'rgba(255, 229, 217, 1)',
    'rgba(255, 202, 212, 1)',
    'rgba(203, 243, 240, 1)',
    'rgba(46, 196, 182, 1)',
    'rgba(216, 226, 210, 1)',
    'rgba(255, 229, 227, 1)',
    'rgba(255, 202, 222, 1)',
    'rgba(203, 243, 210, 1)',
    'rgba(246, 196, 222, 1)',
    'rgba(203, 243, 200, 1)',
    'rgba(246, 196, 122, 1)',
  ];
  // return colorList[Math.floor(Math.random() * colorList.length)];
  return colorList[index];
};

export const delay = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export const getDateReadable = (date) => {
  // for displaying date as -> 30 Nov 2018
  return moment(date).format('DD MMM YYYY');
};

export const getFormattedDate = (date) => {
  // for displaying date as -> 30 Nov 18, 01:30 AM
  const today = moment();
  const yesterday = moment().subtract(1, 'day');
  if (moment(date).isSame(today, 'day')) {
    return `Today, ${moment(date).format('hh:mm A')}`;
  } else if (moment(date).isSame(yesterday, 'day')) {
    return `Yesterday, ${moment(date).format('hh:mm A')}`;
  } else {
    return moment(date).format('DD MMM YY, hh:mm A');
  }
};

export const getFilterDate = (date) => {
  // for displaying date as YESTERDAY or TODAY's text
  const today = moment();
  const yesterday = moment().subtract(1, 'day');
  if (moment(date).isSame(today, 'day')) {
    return 'TODAY';
  } else if (moment(date).isSame(yesterday, 'day')) {
    return 'YESTERDAY';
  } else {
    return moment(date).format('DD MMM YY, hh:mm A');
  }
};

export const stdFormattedDate = (date) => {
  // for displaying date as 22 December 2019, 00:00 or Tomorrow, 00:00
  const today = moment();
  const yesterday = moment().subtract(1, 'day');
  const tomorrow = moment().add(1, 'day');
  if (moment(date).isSame(today, 'day')) {
    return `Today, ${moment(date).format('hh:mm A')}`;
  } else if (moment(date).isSame(yesterday, 'day')) {
    return `Yesterday, ${moment(date).format('hh:mm A')}`;
  } else if (moment(date).isSame(tomorrow, 'day')) {
    return `Tomorrow, ${moment(date).format('hh:mm A')}`;
  } else {
    return moment(date).format('DD MMM YYYY, hh:mm A');
  }
};

export const commonFormattedDate = (date) => {
  // for displaying date as 22 December 2019, 00:00 or Tomorrow, 00:00
  const today = moment();
  const yesterday = moment().subtract(1, 'day');
  const tomorrow = moment().add(1, 'day');
  if (moment(date).isSame(today, 'day')) {
    return `Today, ${moment(date).utc().format('hh:mm A')}`;
  } else if (moment(date).isSame(yesterday, 'day')) {
    return `Yesterday, ${moment(date).utc().format('hh:mm A')}`;
  } else if (moment(date).isSame(tomorrow, 'day')) {
    return `Tomorrow, ${moment(date).utc().format('hh:mm A')}`;
  } else {
    return moment(date).utc().format('DD MMM YYYY, hh:mm A');
  }
};

export const getReadableFormatDate = (date) => {
  // for displaying date as -> Fri, 20 February or Tomorrow, 00:00
  const today = moment();
  const yesterday = moment().subtract(1, 'day');
  const tomorrow = moment().add(1, 'day');
  if (moment(date).isSame(today, 'day')) {
    return `Today, ${moment(date).format('hh:mm A')}`;
  } else if (moment(date).isSame(yesterday, 'day')) {
    return `Yesterday, ${moment(date).format('hh:mm A')}`;
  } else if (moment(date).isSame(tomorrow, 'day')) {
    return `Tomorrow, ${moment(date).format('hh:mm A')}`;
  } else {
    return moment(date).format('ddd, Do MMM YYYY');
  }
};

export function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}


export function getTimeDistance(type) {
  const now = new Date();
  const oneDay = 1000 * 60 * 60 * 24;

  if (type === 'today') {
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    return [moment(now), moment(now.getTime() + (oneDay - 1000))];
  }

  if (type === 'week') {
    let day = now.getDay();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);

    if (day === 0) {
      day = 6;
    } else {
      day -= 1;
    }

    const beginTime = now.getTime() - (day * oneDay);

    return [moment(beginTime), moment(beginTime + ((7 * oneDay) - 1000))];
  }

  if (type === 'month') {
    const year = now.getFullYear();
    const month = now.getMonth();
    const nextDate = moment(now).add(1, 'months');
    const nextYear = nextDate.year();
    const nextMonth = nextDate.month();

    return [moment(`${year}-${fixedZero(month + 1)}-01 00:00:00`), moment(moment(`${nextYear}-${fixedZero(nextMonth + 1)}-01 00:00:00`).valueOf() - 1000)];
  }

  if (type === 'year') {
    const year = now.getFullYear();

    return [moment(`${year}-01-01 00:00:00`), moment(`${year}-12-31 23:59:59`)];
  }
}


const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;

export function isUrl(path) {
  return reg.test(path);
}

export function kFormatter(num) {
  return Math.abs(num) > 999 ? `${Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1))}k` : Math.sign(num) * Math.abs(num);
}

export function nFormatter(num, digits) {
  var si = [
    { value: 1, symbol: "" },
    { value: 1E3, symbol: "k" },
    { value: 1E6, symbol: "M" },
    { value: 1E9, symbol: "G" },
    { value: 1E12, symbol: "T" },
    { value: 1E15, symbol: "P" },
    { value: 1E18, symbol: "E" }
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}


export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


export function isEmpty(obj) {
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }
  return true;
}


export function slowImport(value, ms = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}
