function promisify (func) {
  return function () {
    const args = arguments
    return new Promise((resolve, reject) => {
      const resArgs = {
        ...args[0],
        success:() => {
          resolve()
        },
        fail: (err) => {
          reject(err)
        }
      }
      func(resArgs)
    })
  }
}

module.exports = promisify