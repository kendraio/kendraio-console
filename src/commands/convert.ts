import Command from '@oclif/command';

export class Convert extends Command {
  static description = 'convert file format using adapter';

  static examples = [
    `$ kendraio convert input.xml output.csv
convert an input file from XML to CSV
`,
  ];

  static args = [
    {name: 'inputFile'},
    {name: 'outputFile'},
  ];

  async run() {
    // can get args as an object
    const {args} = this.parse(Convert);
    console.log(`running my command with args: ${args.firstArg}, ${args.secondArg}`);
    // can also get the args as an array
    const {argv} = this.parse(Convert);
    console.log(`running my command with args: ${argv[0]}, ${argv[1]}`);
  }
}
