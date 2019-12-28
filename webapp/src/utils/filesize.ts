export const filesize = (fileSizeInBytes: number) => {
  let i = -1
  const byteUnits = ['kB', 'MB', 'GB']

  do {
    fileSizeInBytes = fileSizeInBytes / 1024
    i++
  } while (fileSizeInBytes > 1024)

  const value = Math.max(fileSizeInBytes, 0.1).toFixed(1)

  return `${value} ${byteUnits[i]}`
}
