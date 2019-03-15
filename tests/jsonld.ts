import * as fs from 'fs-extra';
import * as jsonld from 'jsonld';
import { get } from 'lodash';
import * as X2JS from 'x2js';
import { readFileYamlSync } from "../src/util/read-yaml-sync";

const inputFile = 'var/data/rin-sample-01.xml';

const context = readFileYamlSync('tests/party-context.yaml');

const content = fs.readFileSync(inputFile, 'utf-8');

const defaultConfig = {
  enableToStringFunc: false
};
const config = {};
const x2js = new X2JS({ ...defaultConfig, ...config });
const _r = x2js.xml2js(content) as any;
const outputItems = get(_r, 'RecordingInformationNotification.PartyList.Party');

console.log(JSON.stringify(outputItems, null, 2));

outputItems.map(item => {
  jsonld.expand({ ...item, '@context': context }, function (_err, expanded) {
    console.log(JSON.stringify(expanded, null, 2));
  });
});
