//根据毫秒数获取日期
function msToDate(msec) {
  let dataTime = new Date(msec);
  let year = dataTime.getFullYear();
  let month = dataTime.getMonth();
  let date = dataTime.getDate();
  let hour = dataTime.getHours();
  let minute = dataTime.getMinutes();
  let second = dataTime.getSeconds();

  let result1 = year +
    '-' +
    ((month + 1) >= 10 ? (month + 1) : '0' + (month + 1)) +
    '-' +
    ((date + 1) < 10 ? '0' + date : date) +
    ' ' +
    ((hour + 1) < 10 ? '0' + hour : hour) +
    ':' +
    ((minute + 1) < 10 ? '0' + minute : minute) +
    ':' +
    ((second + 1) < 10 ? '0' + second : second);

  let result2 = year +
    '-' +
    ((month + 1) >= 10 ? (month + 1) : '0' + (month + 1)) +
    '-' +
    ((date + 1) < 11 ? '0' + date : date);

  let result = {
    hasTime: result1,
    withoutTime: result2
  };

  return result;
};

modules.exports = msToDate;