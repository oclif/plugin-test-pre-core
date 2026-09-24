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
@oclif/plugin-test-pre-core/0.4.22 linux-x64 node-v22.23.2
$ pre-core --help [COMMAND]
USAGE
  $ pre-core COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`pre-core help [COMMAND]`](#pre-core-help-command)
* [`pre-core plugins`](#pre-core-plugins)
* [`pre-core plugins:inspect PLUGIN...`](#pre-core-pluginsinspect-plugin)
* [`pre-core plugins install PLUGIN`](#pre-core-plugins-install-plugin)
* [`pre-core plugins link PATH`](#pre-core-plugins-link-path)
* [`pre-core plugins reset`](#pre-core-plugins-reset)
* [`pre-core plugins uninstall [PLUGIN]`](#pre-core-plugins-uninstall-plugin)
* [`pre-core plugins update`](#pre-core-plugins-update)
* [`pre-core pre-core [OPTIONALARG] [DEFAULTARG] [DEFAULTFNARG]`](#pre-core-pre-core-optionalarg-defaultarg-defaultfnarg)

## `pre-core help [COMMAND]`

Display help for pre-core.

```
USAGE
  $ pre-core help [COMMAND...] [-n]

ARGUMENTS
  [COMMAND...]  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for pre-core.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/7.0.0/src/commands/help.ts)_

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

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/7.0.1/src/commands/plugins/index.ts)_

## `pre-core plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ pre-core plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ pre-core plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/7.0.1/src/commands/plugins/inspect.ts)_

## `pre-core plugins install PLUGIN`

Installs a plugin into pre-core.

```
USAGE
  $ pre-core plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into pre-core.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the PRE_CORE_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the PRE_CORE_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ pre-core plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ pre-core plugins install myplugin

  Install a plugin from a github url.

    $ pre-core plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ pre-core plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/7.0.1/src/commands/plugins/install.ts)_

## `pre-core plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ pre-core plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ pre-core plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/7.0.1/src/commands/plugins/link.ts)_

## `pre-core plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ pre-core plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/7.0.1/src/commands/plugins/reset.ts)_

## `pre-core plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ pre-core plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ pre-core plugins unlink
  $ pre-core plugins remove

EXAMPLES
  $ pre-core plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/7.0.1/src/commands/plugins/uninstall.ts)_

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

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/7.0.1/src/commands/plugins/update.ts)_

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

_See code: [src/commands/pre-core.ts](https://github.com/oclif/plugin-test-pre-core/blob/0.4.22/src/commands/pre-core.ts)_
<!-- commandsstop -->
