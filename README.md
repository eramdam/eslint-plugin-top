# eslint-plugin-nosideeffect-top

Disallow side effects at the top level of files

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-nosideeffect-top`:

```sh
npm install eslint-plugin-nosideeffect-top --save-dev
```

## Usage

Add `nosideeffect-top` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "nosideeffect-top"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "nosideeffect-top/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


