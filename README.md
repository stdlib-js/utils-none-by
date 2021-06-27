<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# noneBy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Test whether all elements in a collection fail a test implemented by a predicate function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-none-by
```

</section>

<section class="usage">

## Usage

```javascript
var noneBy = require( '@stdlib/utils-none-by' );
```

#### noneBy( collection, predicate\[, thisArg ] )

Tests whether all elements in a `collection` fail a test implemented by a `predicate` function.

```javascript
function isPositive( value ) {
    return ( value > 0 );
}

var arr = [ -1, -2, -3, -4 ];

var bool = noneBy( arr, isPositive );
// returns true
```

If a `predicate` function returns a truthy value, the function **immediately** returns `false`.

```javascript
function isPositive( value ) {
    return ( value > 0 );
}

var arr = [ -1, 2, -3, -4 ];

var bool = noneBy( arr, isPositive );
// returns false
```

The invoked `function` is provided three arguments:

-   `value`: collection element
-   `index`: collection index
-   `collection`: input collection

To set the function execution context, provide a `thisArg`.

```javascript
function sum( value ) {
    if ( value < 0 ) {
        return true;
    }
    this.sum += value;
    this.count += 1;
    return false;
}

var arr = [ 1, 2, 3, 4 ];

var context = {
    'sum': 0,
    'count': 0
};

var bool = noneBy( arr, sum, context );
// returns true

var mean = context.sum / context.count;
// returns 2.5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).

-   If provided an empty collection, the function returns `true`.

    ```javascript
    function truthy() {
        return true;
    }
    var bool = noneBy( [], truthy );
    // returns true
    ```

-   The function does **not** skip `undefined` elements.

    <!-- eslint-disable no-sparse-arrays, stdlib/doctest-marker -->

    ```javascript
    function log( value, index ) {
        console.log( '%s: %s', index, value );
        return false;
    }

    var arr = [ 1, , , 4 ];

    var bool = noneBy( arr, log );
    /* =>
        0: 1
        1: undefined
        2: undefined
        3: 4
    */
    ```

-   The function provides limited support for dynamic collections (i.e., collections whose `length` changes during execution).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var noneBy = require( '@stdlib/utils-none-by' );

function isNegative( value ) {
    return ( value < 0 );
}

var bool;
var arr;
var i;

arr = new Array( 100 );
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = randu();
}

bool = noneBy( arr, isNegative );
// returns true
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-none-by.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-none-by

[test-image]: https://github.com/stdlib-js/utils-none-by/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/utils-none-by/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-none-by/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-none-by?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-none-by.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-none-by/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-none-by/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

</section>

<!-- /.links -->
