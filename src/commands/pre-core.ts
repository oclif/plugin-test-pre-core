import {Command} from '@oclif/command'

export default class PreCore extends Command {
  async run(): Promise<void> {
    this.log(`Hello I am a pre-core plugin from ${this.config.root}`)
  }
}
