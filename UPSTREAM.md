# Upstream review

Source: [es6-promise@4.2.8, 1e68dce6f674e5613f4a1797aedd55dc70ac1dcb](https://github.com/stefanpenner/es6-promise/commit/1e68dce6f674e5613f4a1797aedd55dc70ac1dcb). Published upstream source files match the integrity-verified npm tarball. Generated distributions are rebuilt using current development tools; original library source, license and API contracts are retained.

## Issue review (2026-09-29)

- [#354: Promise.allSettled request](https://github.com/stefanpenner/es6-promise/issues/354): Keep the original ES6 Promise API. Do not claim new ES2020 allSettled support.
- [#365: IE11/Babel integration](https://github.com/stefanpenner/es6-promise/issues/365): Build all normal/auto/minified UMD outputs as ES5, parse them as ES5 and execute auto-polyfill in real Chromium. Historical IE11 itself is not available for a live browser test.
- [#324: Default require export](https://github.com/stefanpenner/es6-promise/issues/324): Verify the CommonJS constructor remains the default export and .Promise refers to that constructor.

No upstream maintainer was contacted. These are scoped compatibility decisions rather than claims that every issue was solved.

## Verification

Run `npm ci --ignore-scripts`, `npm run build`, `npm test`, `npm run test:package`, and `npm audit --audit-level=low`. CI and CodeQL must pass before the exact built tarball is published with provenance.

The original scheduler and Promise extension suites execute unchanged with a current Mocha runner. The obsolete PhantomJS/Ember test wrapper is replaced by direct Node tests and a real Chromium auto-polyfill check. The historical PhantomJS-specific Promises/A+ wrapper is not represented as a newly executed certification suite.
