export const read = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onabort = () => reject('aborted')
    reader.onerror = () => reject('errored')
    reader.onload = () => {
      if (reader.result === null) {
        return reject('empty')
      }

      if (reader.result instanceof ArrayBuffer) {
        return reject('unknown')
      }

      if (reader.result.length === 0) {
        return reject('empty')
      }

      resolve(reader.result.toString())
    }

    reader.readAsText(file)
  })
