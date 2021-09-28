// Linear search
// this function accepts an array and a value
// loop through the current array element and check if the current array element is equal to the value
// if it is, return the index at which the element is found
// if value is never found, return -1

function linearSearch(array, value) {
    for (let index = 0; index < array.length; index++) {
        if(array[index].toLocaleUpperCase() === value.toLocaleUpperCase()) return index;
    }
    return -1
}

let array = ['ABUJA', 'LAGOS', 'ANAMBRA', 'ABIA', 'OGUN', 'KANO', 'KADUNA', 'JOS', 'EKITI'];
console.log(linearSearch(array, 'kano'))