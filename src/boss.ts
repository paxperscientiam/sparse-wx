// setInterval(() => {
//   document.body.innerText = Math.random()
// }, 1000)

// (() => {
//   if (typeof Application === "object") {
//     return
//   }
//   Object.defineProperty(Object.prototype, "__magic__", {
//     configurable: true,
//     get() {
//       return this
//     },
//   })
//   // @ts-ignore
//   __magic__.Application = __magic__
//   // @ts-ignore
//   delete Object.prototype.__magic__
// })()


function tz () {
  return 66;
}

// @ts-ignore
globalThis.tz = tz
