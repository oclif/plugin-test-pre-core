import {Command, flags} from '@oclif/command'

export default class Hello extends Command {
  static description = 'Say hello'

  static examples = [
    `$ oex hello friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ]

  static flags = {
    from: flags.string({char: 'f', description: 'Who is saying hello', required: true}),
  }

  // static args = {
  //   person: Args.string({description: 'Person to say hello to', required: true}),
  // }

  static args = [
    {
      name: 'person',
      required: true,
      description: 'Person to say hello to',
    },
  ]

  async run(): Promise<void> {
    const {args, flags} = this.parse(Hello)

    this.log(`hello ${args.person} from ${flags.from}! (./src/commands/hello/index.ts)`)
  }
}
