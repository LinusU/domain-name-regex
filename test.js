/* eslint-env mocha */

'use strict'

const re = require('./')
const assert = require('assert')

describe('Domain Name Regex', () => {
  describe('Valid names', () => {
    function setup (name) {
      it(name, () => assert.ok(re.test(name), `"${name}" should be consider valid`))
    }

    setup('a.net')
    setup('aa.net')
    setup('x.com')
    setup('0-0O.COM')
    setup('0-OZ.CO.uk')
    setup('www.my---domain.com')
    setup('xn--unnebck-9wa.se')
    setup('0-TENSION.COM.br')
    setup('0-WH-AO14-0.COM-com.net')
    setup('a-1234567890-1234567890-1234567890-1234567890-1234567890-1234-z.eu.us')
    setup('www.google.com')
    setup('google.com')
    setup('test123.com')
    setup('test-info.com')
    setup('sub.test.com')
    setup('sub.test-info.com')
    setup('test.com.au')
    setup('test.tld1')
    setup('test.0-1')
    setup('g.co')
    setup('co.uk')
    setup('test.t.t.c')
    setup('test.t.t.co')
    setup('test.xn--xkc2al3hye2a')
    setup('tedjgkghdfs.fgahfdsjfh.asfha.jsdhfksdfhsdjfhkasd.fhasdjfkhaddjgkghdfs.fgahfdsjfh.asfha.jsdhfksdfhsdjfhkasd.fhadjgkghdfs.fgahfdsjfh.asfha.jsdhfksdfhsdjfhkasd.fhasdjfkhaddjgkghdfs.fgahfdsjfh.asfha.jsdhfksdfhsdjfhkasd.fhasdjfkhadsjfasd.fhsadjfsdhf.asst.com')
    setup('_dmarc.google.com')
  })

  describe('Invalid names', () => {
    function setup (name) {
      it(name, () => assert.ok(!re.test(name), `"${name}" should be consider invalid`))
    }

    // Only TLD
    setup('.com')
    setup('com.')
    setup('com')

    // Trailing dot
    setup('com.')
    setup('test.com.')
    setup('test.x.com.')

    // Invalid characters
    setup('test,com')
    setup('test.⏰.com')
    setup('test.com/users')

    // Label with leading or trailing dash
    setup('-0-0O.COM')
    setup('-a.dot')
    setup('-test.com')
    setup('sub.-test.com')
    setup('sub.test-.com')
    setup('test-.com')
    setup('test.-com')
    setup('test.com-')

    // TLD consists of only numbers
    setup('test.123')

    // Label longer than 63 characters
    setup('a-1234567890-1234567890-1234567890-1234567890-1234567890-12345-z.eu.us')

    // Domain name longer than 253 characters
    setup('tedjagkghdfs.fgahfdsjfh.asfha.jsdhfksdfhsdjfhkasd.fhasdjfkhaddjgkghdfs.fgahfdsjfh.asfha.jsdhfksdfhsdjfhkasd.fhadjgkghdfs.fgahfdsjfh.asfha.jsdhfksdfhsdjfhkasd.fhasdjfkhaddjgkghdfs.fgahfdsjfh.asfha.jsdhfksdfhsdjfhkasd.fhasdjfkhadsjfasd.fhsadjfsdhf.asst.com')
  })
})
