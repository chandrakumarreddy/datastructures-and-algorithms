const lookup = [
  { symbol: "M", value: 1000 },
  { symbol: "CM", value: 900 },
  { symbol: "D", value: 500 },
  { symbol: "CD", value: 400 },
  { symbol: "C", value: 100 },
  { symbol: "XC", value: 90 },
  { symbol: "L", value: 50 },
  { symbol: "XL", value: 40 },
  { symbol: "X", value: 10 },
  { symbol: "IX", value: 9 },
  { symbol: "V", value: 5 },
  { symbol: "IV", value: 4 },
  { symbol: "I", value: 1 }
];

// function romanToInteger(num, res = "") {
//   if (num > 0) {
//     const { symbol, value } = lookup.find(({ value }) => num >= value);
//     return romanToInteger(num - value, `${res}${symbol}`);
//   }
//   return res;
// }



function romanToInteger(num) {
  let res = "";
  let current = num;
  for (let i = 0; i < lookup.length; i++) {
    const { symbol, value } = lookup[i];
    while (current >= value) {
      res += symbol;
      current -= value;
    }
  }
  return res;
}


console.log(romanToInteger(123));
