import {Command, flags} from '@oclif/command'

type Result = {
  args: {[name: string]: unknown}
  flags: {[name: string]: unknown}
}

export default class PreCore extends Command {
  static args = [
    {
      name: 'optionalArg',
    },
    {
      name: 'defaultArg',
      default: 'simple string default',
    },
    {
      name: 'defaultFnArg',
      default: (): string => 'fn default',
    },
  ]
static flags = {
    optionalString: flags.string(),
    defaultString: flags.string({
      default: 'simple string default',
    }),
    defaultFnString: flags.string({
      default: () => 'fn default',
    }),
    json: flags.boolean(),
  }

  async run(): Promise<Result> {
    const {args, flags} = this.parse(PreCore)
    if (flags.json) {
      this.log(JSON.stringify({args, flags}, null, 2))
    } else {
      this.log(`hello I am a pre-core plugin from ${this.config.root}`)
    }

    return {args, flags}
  }
}
