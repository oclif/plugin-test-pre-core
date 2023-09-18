import {Hook} from '@oclif/config'

const hook: Hook<'init'> = async function () {
  console.log('Greetings! from plugin-test-pre-core init hook')
}

export default hook
