import Command from '@oclif/command';
import * as fs from 'fs-extra';
import * as path from 'path';

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
    const userConfig = await fs.readJSON(path.join(this.config.configDir, 'config.json'));
    // can get args as an object
    const {args} = this.parse(Convert);
    console.log(`running my command with args: ${args.firstArg}, ${args.secondArg}`);
    // can also get the args as an array
    const {argv} = this.parse(Convert);
    console.log(`running my command with args: ${argv[0]}, ${argv[1]}`);

    console.log('extra user config', userConfig);
  }
}
