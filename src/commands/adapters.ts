import { Command, flags } from '@oclif/command';
import * as fs from 'fs-extra';
import * as path from 'path';

import { fetchAdapterConfig } from '../services/adapter-fetch';

export default class Adapters extends Command {

  static description = 'fetch updated adapter config';

  static flags = {
    update: flags.boolean({ char: 'u' }),
  };

  async run() {
    const { flags } = this.parse(Adapters);
    let adapterConfig = {};

    if (flags.update) {
      console.log('Fetching updated config...');
      adapterConfig = await fetchAdapterConfig();
      if (!fs.existsSync(this.config.configDir)) {
        fs.mkdirpSync(this.config.configDir);
      }
      await fs.writeJSON(path.join(this.config.configDir, 'kendraio-adapters.json'), adapterConfig);
    } else {
      try {
        adapterConfig = await fs.readJSON(path.join(this.config.configDir, 'kendraio-adapters.json'));
      } catch (e) {
        console.log('adapter config not found. try updating with the `-u` flag');
        throw e;
      }
    }
    console.log('Available adapters:');
    console.log(Object.keys(adapterConfig));
  }
}
