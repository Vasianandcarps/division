let a1 = prompt("Введите число a (a/b)");
let b1 = prompt("Введите число b (a/b)");
let a = a1;
let b = b1;
if (a1 != NaN && b1 != NaN) {
  while (a != b)
    if (a % b == 0) {
      d = a / b;
      alert(d);
      break;
    } else if (a > b) {
      a -= b;
    } else if (a < b) {
      b -= a;
    }
}
alert(b);
b1 /= b;
a1 /= b;
d = ~~(a1 / b1);
if (a1 > b1) {
  document.write(a1 + "/" + b1 + "</br>");
  document.write(d + (a1 % b1) + "/" + b1);
} else if (a1 < b1) {
  document.write(a1 + "/" + b1);
} else {
  document.write(1);
}
