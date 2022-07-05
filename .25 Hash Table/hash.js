// A hash is a function that takes an arbitary input and returns a fixed size index size.
// Get 
// Accept a key and a value
// Hash the key
// Store the key-value pair in the hash table array via seperate chaining
// If nothing exists on the index, return undefined

// Set
// Accepts a key
// Hashes the key
// Retrieves  the key value pair in the hash table
class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = ( total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if(!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value])
    }

    get(key) {
        let index = this._hash(key);
        if(this.keyMap[index]) {
            for(let i = 0; i < this.keyMap[index].length; i++) {
                if(this.keyMap[index][i][0] == key) {
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined
    }
    values() {
        let valuesArr = [];
        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]) {
                for(let j = 0; j < this.keyMap[i].length; j++) {
                    if(!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArr;
    }
}

let ht = new HashTable(17);
ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00')
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072')
ht.set('lightcoral', '#FO8O8O')
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD')
console.log(JSON.stringify(ht.values(), 2, null))