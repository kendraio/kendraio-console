kendraio-console
================

Kendraio Console

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@kendraio/console.svg)](https://npmjs.org/package/@kendraio/console)
[![Downloads/week](https://img.shields.io/npm/dw/@kendraio/console.svg)](https://npmjs.org/package/@kendraio/console)
[![License](https://img.shields.io/npm/l/@kendraio/console.svg)](https://github.com/kendraio/kendraio-console/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @kendraio/console
$ kendraio COMMAND
running command...
$ kendraio (-v|--version|version)
@kendraio/console/0.0.1 linux-x64 node-v10.11.0
$ kendraio --help [COMMAND]
USAGE
  $ kendraio COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`kendraio hello [FILE]`](#kendraio-hello-file)
* [`kendraio help [COMMAND]`](#kendraio-help-command)

## `kendraio hello [FILE]`

describe the command here

```
USAGE
  $ kendraio hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ kendraio hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/kendraio/kendraio-console/blob/v0.0.1/src/commands/hello.ts)_

## `kendraio help [COMMAND]`

display help for kendraio

```
USAGE
  $ kendraio help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.2/src/commands/help.ts)_
<!-- commandsstop -->
