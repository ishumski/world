//promis


const ms = parseInt(Math.random() * 10, 10) * 1000;

const time = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}
time(ms).then(() => {
  console.log(`working after ${ms}`)
})