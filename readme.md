# crypto-address-decoder



## Installation
``` bash
npm install crypto-address-decoder
```

## Usage
``` javascript
const addressDecoder=require('crypto-address-decoder');
const {prefix,data}=addressDecoder('DUBhARNpy4WYCEWoFQsgeFeYZxQjzQadpv');
```

also works for bech32 addresses

``` javascript
const addressDecoder=require('crypto-address-decoder');
const {prefix,data}=addressDecoder('dgb1qcu403j8m7kdsrl74279qhlyg36adkgwdxpf0jl');
```