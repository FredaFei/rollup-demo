import { version } from '../package.json'
import hi from './foo'

function logA() {
  console.log('function logA called')
  return 12
}

export default function () {
  console.log('version ' + version)
  return logA() + hi
}
