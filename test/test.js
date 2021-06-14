/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var noop = require( '@stdlib/utils-noop' );
var Float64Array = require( '@stdlib/array-float64' );
var noneBy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof noneBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a collection', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		undefined,
		{},
		function noop() {},
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			noneBy( value, noop );
		};
	}
});

tape( 'the function throws an error if not provided a predicate function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		undefined,
		{},
		[],
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			noneBy( [ 1, 2, 3 ], value );
		};
	}
});

tape( 'if provided an empty collection, the function returns `true`', function test( t ) {
	var bool;
	var arr;

	function foo() {
		t.fail( 'should not be invoked' );
	}
	arr = [];
	bool = noneBy( arr, foo );

	t.strictEqual( bool, true, 'returns true' );
	t.end();
});

tape( 'the function returns `true` if all elements fail a test (array)', function test( t ) {
	var bool;
	var arr;

	arr = [ -1, -2, -3 ];

	function isPositive( value ) {
		return ( value > 0 );
	}

	bool = noneBy( arr, isPositive );

	t.strictEqual( bool, true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if one or more elements pass a test (array)', function test( t ) {
	var bool;
	var arr;

	arr = [ -1, 2, -3 ];

	function isPositive( value ) {
		return ( value > 0 );
	}

	bool = noneBy( arr, isPositive );

	t.strictEqual( bool, false, 'returns false' );
	t.end();
});

tape( 'the function returns `true` if all elements fail a test (array-like object)', function test( t ) {
	var bool;
	var arr;

	arr = {
		'length': 3,
		'0': -1,
		'1': -2,
		'2': -3
	};

	function isPositive( value ) {
		return ( value > 0 );
	}

	bool = noneBy( arr, isPositive );

	t.strictEqual( bool, true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if one or more elements pass a test (array-like object)', function test( t ) {
	var bool;
	var arr;

	arr = {
		'length': 3,
		'0': -1,
		'1': 2,
		'2': -3
	};

	function isPositive( value ) {
		return ( value > 0 );
	}

	bool = noneBy( arr, isPositive );

	t.strictEqual( bool, false, 'returns false' );
	t.end();
});

tape( 'the function returns `true` if all elements fail a test (typed array)', function test( t ) {
	var bool;
	var arr;

	arr = new Float64Array( [ -1.0, -2.0, -3.0 ] );

	function isPositive( value ) {
		return ( value > 0 );
	}

	bool = noneBy( arr, isPositive );

	t.strictEqual( bool, true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if one or more elements pass a test (typed array)', function test( t ) {
	var bool;
	var arr;

	arr = new Float64Array( [ -1.0, 2.0, -3.0 ] );

	function isPositive( value ) {
		return ( value > 0 );
	}

	bool = noneBy( arr, isPositive );

	t.strictEqual( bool, false, 'returns false' );
	t.end();
});

tape( 'the function supports providing an execution context', function test( t ) {
	var bool;
	var ctx;
	var arr;

	function sum( value ) {
		/* eslint-disable no-invalid-this */
		if ( value < 0 ) {
			return false;
		}
		this.sum += value;
		this.count += 1;
		return false;
	}

	ctx = {
		'sum': 0,
		'count': 0
	};
	arr = [ 1.0, 2.0, 3.0 ];

	bool = noneBy( arr, sum, ctx );

	t.strictEqual( bool, true, 'returns true' );
	t.strictEqual( ctx.sum/ctx.count, 2.0, 'expected result' );

	t.end();
});

tape( 'the function provides basic support for dynamic arrays', function test( t ) {
	var bool;
	var arr;

	arr = [ 1, 2, 3 ];

	function isNegative( value, index, collection ) {
		if ( index === collection.length-1 && collection.length < 10 ) {
			collection.push( index+2 );
		}
		return ( value < 0 );
	}

	bool = noneBy( arr, isNegative );

	t.deepEqual( arr, [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], 'expected result' );
	t.strictEqual( bool, true, 'returns true' );

	t.end();
});

tape( 'the function does not skip empty elements', function test( t ) {
	var expected;
	var bool;
	var arr;

	arr = [ 1, , , 4 ]; // eslint-disable-line no-sparse-arrays
	expected = [ 1, void 0, void 0, 4 ];

	function verify( value, index ) {
		t.strictEqual( value, expected[ index ], 'provides expected value' );
		return false;
	}

	bool = noneBy( arr, verify );

	t.strictEqual( bool, true, 'returns true' );
	t.end();
});
