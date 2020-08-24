const base58check=require('base58check');
const bech32=require('bech32');

/**
 *
 * @param address
 * @return {{
 *     prefix:  string,
 *     data:    string
 * }}
 */
module.exports=(address)=> {
    if (address.length === 34) {              //Base58
        let {data}=base58check.decode(address, 'hex');   //decode to hex(typescript reports Buffer returned but string actually returned)
        return {
            prefix: address.substr(0,1),
            data:   data
        }

    } else {                                //bech32
        let {prefix,words} = bech32.decode(address);                     //convert address to words
        words.shift();                                          //remove first value which is always 0
        return {
            prefix: prefix,
            data:   Buffer.from(bech32.fromWords(words)).toString('hex')
        };
    }
}