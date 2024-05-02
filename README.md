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
$ npm install -g @oclif/plugin-test-pre-core
$ pre-core COMMAND
running command...
$ pre-core (--version)
@oclif/plugin-test-pre-core/0.4.13 linux-x64 node-v18.20.2
$ pre-core --help [COMMAND]
USAGE
  $ pre-core COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`pre-core help [COMMANDS]`](#pre-core-help-commands)
* [`pre-core plugins`](#pre-core-plugins)
* [`pre-core plugins:inspect PLUGIN...`](#pre-core-pluginsinspect-plugin)
* [`pre-core plugins:install PLUGIN...`](#pre-core-pluginsinstall-plugin)
* [`pre-core plugins:link PLUGIN`](#pre-core-pluginslink-plugin)
* [`pre-core plugins:uninstall PLUGIN...`](#pre-core-pluginsuninstall-plugin)
* [`pre-core plugins update`](#pre-core-plugins-update)
* [`pre-core pre-core [OPTIONALARG] [DEFAULTARG] [DEFAULTFNARG]`](#pre-core-pre-core-optionalarg-defaultarg-defaultfnarg)

## `pre-core help [COMMANDS]`

Display help for pre-core.

```
USAGE
  $ pre-core help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for pre-core.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/5.2.20/src/commands/help.ts)_

## `pre-core plugins`

List installed plugins.

```
USAGE
  $ pre-core plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ pre-core plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/3.9.4/src/commands/plugins/index.ts)_

## `pre-core plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ pre-core plugins:inspect PLUGIN...

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
  $ pre-core plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/3.9.4/src/commands/plugins/inspect.ts)_

## `pre-core plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ pre-core plugins:install PLUGIN...

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
  $ pre-core plugins add

EXAMPLES
  $ pre-core plugins:install myplugin 

  $ pre-core plugins:install https://github.com/someuser/someplugin

  $ pre-core plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/3.9.4/src/commands/plugins/install.ts)_

## `pre-core plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ pre-core plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help      Show CLI help.
  -v, --verbose
  --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ pre-core plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/3.9.4/src/commands/plugins/link.ts)_

## `pre-core plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ pre-core plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ pre-core plugins unlink
  $ pre-core plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/3.9.4/src/commands/plugins/uninstall.ts)_

## `pre-core plugins update`

Update installed plugins.

```
USAGE
  $ pre-core plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/3.9.4/src/commands/plugins/update.ts)_

## `pre-core pre-core [OPTIONALARG] [DEFAULTARG] [DEFAULTFNARG]`

```
USAGE
  $ pre-core pre-core [OPTIONALARG] [DEFAULTARG] [DEFAULTFNARG] [--optionalString <value>] [--defaultString
    <value>] [--defaultFnString <value>] [--json]

FLAGS
  --defaultFnString=<value>  [default: fn default]
  --defaultString=<value>    [default: simple string default]
  --json
  --optionalString=<value>
```

_See code: [src/commands/pre-core.ts](https://github.com/oclif/plugin-test-pre-core/blob/0.4.13/src/commands/pre-core.ts)_
<!-- commandsstop -->
