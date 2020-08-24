require('nodeunit');
const addressDecoder = require('../index'),
    events = require('events');

module.exports = {
    'test DigiByte D address': function(test) {
        const {prefix,data}=addressDecoder('DUBhARNpy4WYCEWoFQsgeFeYZxQjzQadpv');
        test.equal(prefix,'D');
        test.equal(data,'fcc8a08f61f3249e7a97582c2c140d4aa96f0207');
        test.done();
    },
    'test DigiByte S address': function(test) {
        const {prefix,data}=addressDecoder('Si2n5cEJKAmYxEcJ1Zm9gwufJhco79saMz');
        test.equal(prefix,'S');
        test.equal(data,'e3799709d84728cb195a4e2c4bf8f16cbff92c90');
        test.done();
    },
    'test DigiByte dgb1 address': function(test) {
        const {prefix,data}=addressDecoder('dgb1qcu403j8m7kdsrl74279qhlyg36adkgwdxpf0jl');
        test.equal(prefix,'dgb');
        test.equal(data,'c72af8c8fbf59b01ffd5578a0bfc888ebadb21cd');
        test.done();
    }

};

