const msToDate = require('./msToDate.js');

/* 更新开始时间
 * beginTimeDate: 开始时间
 * weekNum：星期几 {number}
 */
function updateBeginTime(beginTimeDate, weekDay) {
  const curWeekDay = beginTimeDate.getDay();
  const diff = curWeekDay && curWeekDay - weekDay || 6;
  curWeekDay - weekDay;
  if (!diff) {
    return msToDate(parseInt(beginTimeDate.getTime())).withoutTime;
  } else {
    beginTimeDate.setDate(beginTimeDate.getDate() - diff);
    return msToDate(parseInt(beginTimeDate.getTime())).withoutTime;
  }
}
/* 获取时间段内属于星期一(*)的日期们
 * begin: 开始时间
 * end：结束时间
 * weekNum：星期几 {number}
 */
function getMondayInAPeriod(beginDate, endDate, weekNum) {
  var dateArr = new Array();
  const _begin = updateBeginTime(new Date(begin), weekNum);

  var stimeArr = _begin.split("-");//=>["2018", "01", "01"]
  var etimeArr = end.split("-");//=>["2018", "01", "30"]

  var stoday = new Date('2022-07-29');
  stoday.setUTCFullYear(stimeArr[0], stimeArr[1] - 1, stimeArr[2]);
  var etoday = new Date('2022-07-29');
  etoday.setUTCFullYear(etimeArr[0], etimeArr[1] - 1, etimeArr[2]);

  var unixDb = stoday.getTime();//开始时间的毫秒数
  var unixDe = etoday.getTime();//结束时间的毫秒数

  for (var k = unixDb; k <= unixDe;) {
    let needJudgeDate = msToDate(parseInt(k)).withoutTime;
    //不加这个if判断直接push的话就是已知时间段内的所有日期
    if (new Date(needJudgeDate).getDay() === weekNum) {
      dateArr.push(needJudgeDate);
    }
    k = k + 24 * 60 * 60 * 1000;
  }
  return dateArr;
};

modules.exports = getMondayInAPeriod;