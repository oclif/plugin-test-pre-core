oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @oclif/plugin-test-cjs-config
$ cjs-config COMMAND
running command...
$ cjs-config (--version)
@oclif/plugin-test-cjs-config/0.0.0 darwin-arm64 node-v18.15.0
$ cjs-config --help [COMMAND]
USAGE
  $ cjs-config COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cjs-config hello PERSON`](#cjs-config-hello-person)
* [`cjs-config hello world`](#cjs-config-hello-world)
* [`cjs-config help [COMMANDS]`](#cjs-config-help-commands)
* [`cjs-config plugins`](#cjs-config-plugins)
* [`cjs-config plugins:install PLUGIN...`](#cjs-config-pluginsinstall-plugin)
* [`cjs-config plugins:inspect PLUGIN...`](#cjs-config-pluginsinspect-plugin)
* [`cjs-config plugins:install PLUGIN...`](#cjs-config-pluginsinstall-plugin-1)
* [`cjs-config plugins:link PLUGIN`](#cjs-config-pluginslink-plugin)
* [`cjs-config plugins:uninstall PLUGIN...`](#cjs-config-pluginsuninstall-plugin)
* [`cjs-config plugins:uninstall PLUGIN...`](#cjs-config-pluginsuninstall-plugin-1)
* [`cjs-config plugins:uninstall PLUGIN...`](#cjs-config-pluginsuninstall-plugin-2)
* [`cjs-config plugins update`](#cjs-config-plugins-update)

## `cjs-config hello PERSON`

Say hello

```
USAGE
  $ cjs-config hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/oclif/plugin-test-cjs-config/blob/v0.0.0/dist/commands/hello/index.ts)_

## `cjs-config hello world`

Say hello world

```
USAGE
  $ cjs-config hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ cjs-config hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [dist/commands/hello/world.ts](https://github.com/oclif/plugin-test-cjs-config/blob/v0.0.0/dist/commands/hello/world.ts)_

## `cjs-config help [COMMANDS]`

Display help for cjs-config.

```
USAGE
  $ cjs-config help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for cjs-config.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.19/src/commands/help.ts)_

## `cjs-config plugins`

List installed plugins.

```
USAGE
  $ cjs-config plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ cjs-config plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/index.ts)_

## `cjs-config plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ cjs-config plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ cjs-config plugins add

EXAMPLES
  $ cjs-config plugins:install myplugin 

  $ cjs-config plugins:install https://github.com/someuser/someplugin

  $ cjs-config plugins:install someuser/someplugin
```

## `cjs-config plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ cjs-config plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ cjs-config plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/inspect.ts)_

## `cjs-config plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ cjs-config plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ cjs-config plugins add

EXAMPLES
  $ cjs-config plugins:install myplugin 

  $ cjs-config plugins:install https://github.com/someuser/someplugin

  $ cjs-config plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/install.ts)_

## `cjs-config plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ cjs-config plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ cjs-config plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/link.ts)_

## `cjs-config plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cjs-config plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cjs-config plugins unlink
  $ cjs-config plugins remove
```

## `cjs-config plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cjs-config plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cjs-config plugins unlink
  $ cjs-config plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/uninstall.ts)_

## `cjs-config plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cjs-config plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cjs-config plugins unlink
  $ cjs-config plugins remove
```

## `cjs-config plugins update`

Update installed plugins.

```
USAGE
  $ cjs-config plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.7.0/src/commands/plugins/update.ts)_
<!-- commandsstop -->
