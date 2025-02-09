alert(undefined ?? NaN ?? null ?? "" ?? " "); //NaN

let city = null;
city ??= "Berlin";
city ??= null;
city ??= "Keln";
city ??= "Hamburg";
alert(city); //Berlin

let num1 = 10,
  num2 = 20,
  result;

result ??= num1 ?? num2;
