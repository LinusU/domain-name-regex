# Domain Name Regex

A regex to validate domain names.

## Installation

```sh
npm install --save domain-name-regex
```

## Usage

```js
const domainNameRegex = require('domain-name-regex')

domainNameRegex.test('example.com')
//=> true

domainNameRegex.test('-invalid.com')
//=> false

domainNameRegex.test('invalid.123')
//=> false
```

## Rules

+ Domain name length cannot exceed 253 characters
+ Label length cannot exceed 63 chaacters
+ Label can only consist of letters, digits, hypen and underscores (LDHU)
+ TLD cannot contain only numbers
