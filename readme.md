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

domainNameRegex.test('_sip.example.com')
//=> true

domainNameRegex.test('-invalid.com')
//=> false

domainNameRegex.test('invalid.123')
//=> false
```

## Rules

+ Domain name length cannot exceed 253 characters
+ Label length cannot exceed 63 characters
+ Label can only consist of letters, digits, hyphens and underscores (LDHU)
+ Label cannot start or end with a hyphen
+ TLD cannot contain only numbers
+ TLD cannot contain any underscores
