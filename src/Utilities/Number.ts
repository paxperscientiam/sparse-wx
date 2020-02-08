// toLocaleString polyfill
// https://github.com/willsp/polyfill-Number.toLocaleString-with-Locales/blob/master/polyfill.number.toLocaleString.js

function replaceSeparators(sNum: any, separators: any) {
  const sNumParts = sNum.split(".")
  if (separators && separators.thousands) {
    sNumParts[0] = sNumParts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + separators.thousands)
  }
  sNum = sNumParts.join(separators.decimal)

  return sNum
}

export function commaThousDotDec(sNum: number|string) {
  sNum = sNum.toString()
  const separators = {
    decimal: ".",
    thousands: ",",
  }
  return replaceSeparators(sNum, separators)
}

// Number.prototype.commaThousDotDec = function() {
//   return commaThousDotDec(this.toString())
// }
