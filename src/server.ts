import errorHandler from 'errorhandler'
import { config, connectToDatabase } from './config.js'
import app from './app.js'

const port = config.PORT
const env = app.get('env') || process.env.NODE_ENV

/**
 * Error Handler. Provides full error stack traces and internal details of any object passed to this module
 */
if (env === 'development') {
  app.use(errorHandler())
}

const server = app.listen(port, async () => {
  console.log('  App is running at http://localhost:%d in %s mode', port, env)
  console.log('  Press CTRL-C to stop\n')

  await connectToDatabase()
  console.info('  Database is connected successfully!')
})

export default server
