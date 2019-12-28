export const onExit = (cleanup: () => Promise<void>) => {
  const handler = async () => {
    await cleanup()
    process.exit()
  }

  //catches ctrl+c event
  process.on('SIGINT', handler)
}
