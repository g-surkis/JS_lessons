// напишіть функцію очищену від анаграм


function aclean(arr) {
    let map = new Map();
    
    for (let word of arr) {
        let sorted = word.toLowerCase().split("").sort().join(""); // (*)
        map.set(sorted, word);
    }

    return Array.from(map.values());
}

let arr = ["PAN", "ear", "era", "hectares", "nap", "teachers", "cheaters",];

console.log('-----', aclean(arr));

