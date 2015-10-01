# object-lens [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Support us][gittip-image]][gittip-url] [![Build Status][travis-image]][travis-url] [![Coveralls Status][coveralls-image]][coveralls-url]
## Information
<table><tr><td>Package</td><td>object-lens</td></tr><tr><td>Description</td><td>ACL-like filtering of objects</td></tr><tr><td>Node Version</td><td>>= 0.10</td></tr></table>  

## Usage
## Install

```
npm install object-lens --save
```

## Example

```js
var CreditCard = new Schema({
  token: String,
  last4: String,
  expiry: String
});
CreditCard.plugin(lens, {
  token: ['admin'],
  last4: ['owner', 'admin'],
  expiry: ['owner', 'admin']
});

var UserSchema = new Schema({
  name: String,
  creditCards: [CreditCard],
  bff: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});
UserSchema.plugin(lens, {
  name: ['public', 'owner', 'admin'],
  creditCards: ['owner', 'admin'],
  bff: ['owner, admin']
});

// later on...
```

## LICENSE
(MIT License)

Copyright (c) 2015 Contra [contra@maricopa.edu](mailto:contra@maricopa.edu)

Permission is hereby granted, free of charge, to any person obtaininga copy of this software and associated documentation files (the"Software"), to deal in the Software without restriction, includingwithout limitation the rights to use, copy, modify, merge, publish,distribute, sublicense, and/or sell copies of the Software, and topermit persons to whom the Software is furnished to do so, subject tothe following conditions:

The above copyright notice and this permission notice shall beincluded in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OFMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE ANDNONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BELIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTIONOF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTIONWITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[gittip-url]: https://www.gittip.com/contra/
[gittip-image]: http://img.shields.io/gittip/contra.svg
[downloads-image]: http://img.shields.io/npm/dm/object-lens.svg
[npm-url]: https://npmjs.org/package/object-lens
[npm-image]: http://img.shields.io/npm/v/object-lens.svg
[travis-url]: https://travis-ci.org/contra/object-lens
[travis-image]: https://travis-ci.org/contra/object-lens.png?branch=master
[coveralls-url]: https://coveralls.io/r/contra/object-lens
[coveralls-image]: https://coveralls.io/repos/contra/object-lens/badge.png
[depstat-url]: https://david-dm.org/contra/object-lens
[depstat-image]: https://david-dm.org/contra/object-lens.png
[david-url]: https://david-dm.org/contra/object-lens
[david-image]: https://david-dm.org/contra/object-lens.png?theme=shields.io
