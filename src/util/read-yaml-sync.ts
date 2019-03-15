import { readFileSync } from 'fs';
import { safeLoad as YamlLoad } from 'js-yaml';

export function readFileYamlSync(path) {
  const data = readFileSync(path, 'utf-8');
  return YamlLoad(data);
}
