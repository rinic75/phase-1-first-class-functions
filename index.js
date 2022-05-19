function receivesAFunction(ab) {
    ab();
}

function returnsANamedFunction() {
    // const myFunction = function namedFunction () {};
    return function namedFunction () {};
}

function returnsAnAnonymousFunction() {
    return () => {} ;
}