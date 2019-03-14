import { Command, flags } from '@oclif/command';
import * as fs from 'fs-extra';
import { json2csvAsync } from 'json-2-csv';
import { get } from 'lodash';
// import * as path from 'path';
import * as X2JS from 'x2js';
import * as inquirer from 'inquirer';

export class Convert extends Command {
  static description = 'convert file format using adapter';

  static examples = [
    `$ kendraio convert input.xml output.csv
convert an input file from XML to CSV
$ kendraio convert var/data/rin-sample-01.xml test.csv -e="ResourceList.SoundRecording"
specify a custom extraction rule
$ kendraio convert var/data/rin-sample-01.xml test.csv -e="PartyList.Party"
the default extraction rule
`,
  ];

  static flags = {
    // flag with a value (-n, --name=VALUE)
    extract: flags.string({ char: 'e', description: 'entity to extract' })
  };

  static args = [
    {
      name: 'inputFile',
      required: true
    },
    {
      name: 'outputFile',
      required: true
    },
  ];

  async run() {
    // can get args as an object
    const { args, flags } = this.parse(Convert);

    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'type',
        message: 'Which object set do you want to export?',
        default: 'Parties',
        choices: [
          {
            name: 'Parties',
            value: 'PartyList.Party'
          },
          {
            name: 'Recordings',
            value: 'ResourceList.SoundRecording'
          },
          {
            name: 'Works',
            value: 'MusicalWorkList.MusicalWork'
          },
          {
            name: 'Projects',
            value: 'ProjectList.Project'
          },
          {
            name: 'Sessions',
            value: 'SessionList.Session'
          }
        ]
      }
    ]);
    // console.log(answers);

    const extractor = answers['type'];
    // const userConfig = await fs.readJSON(path.join(this.config.configDir, 'config.json'));
    // console.log('extra user config', userConfig);

    const content = fs.readFileSync(args.inputFile, 'utf-8');

    const defaultConfig = {
      enableToStringFunc: false
    };
    const config = {};
    const x2js = new X2JS({ ...defaultConfig, ...config });
    const _r = x2js.xml2js(content) as any;
    const outputItems = get(_r, `RecordingInformationNotification.${extractor}`);

    const csv = await json2csvAsync(outputItems, {
      emptyFieldValue: '',
      expandArrayObjects: true
    });
    fs.writeFileSync(args.outputFile, csv);
  }
}
