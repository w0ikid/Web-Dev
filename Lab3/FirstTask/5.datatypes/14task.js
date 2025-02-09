let d = new Date(2012, 1, 20, 3, 12);
alert(d);

function getWeekDay(date) {
  let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  return days[date.getDay()];
}

let date = new Date(2014, 0, 3); // 3 января 2014 года
alert(getWeekDay(date)); // ПТ

function getLocalDay(date) {
  let day = date.getDay();

  if (day == 0) {
    // день недели 0 (воскресенье) в европейской нумерации будет 7
    day = 7;
  }

  return day;
}
