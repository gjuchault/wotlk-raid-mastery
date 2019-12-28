import { buildConfig } from './config'
import { buildStorage } from './storage'
import { buildHttp } from './http'
import { buildLog } from './log'

import { onExit } from './helpers/onExit'

const main = async () => {
  const config = buildConfig()
  const log = buildLog()
  const storage = buildStorage({ log })
  const http = buildHttp({ storage, config, log })

  onExit(async () => {
    log.info('main', 'exitting gracefully')

    await storage.close()
  })

  await storage.open()

  http.listen()
}

if (require.main === module) {
  main()
}
