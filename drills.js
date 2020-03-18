const HashMap = require('./hash_map');
HashMap.SIZE_RATIO = 3;
HashMap.MAX_LOAD_RATIO = .5;
const HashMap2 = require('./hash_map_separate_chaining');
HashMap2.SIZE_RATIO = 3;
HashMap2.MAX_LOAD_RATIO = .5;
const util = require('../linked_lists/utility');

function main() {
  const lotr = new HashMap();

  const characters = [
    {'Hobbit': 'Bilbo'}, 
    {'Hobbit': 'Frodo'},
    {'Wizard': 'Gandolf'},
    {'Human': 'Aragon'},
    {'Elf': 'Legolas'},
    {'Maiar': 'The Necromancer'},
    {'Maiar': 'Sauron'},
    {'RingBearer': 'Gollum'},
    {'LadyOfLight': 'Galadriel'},
    {'HalfElven': 'Arwen'},
    {'Ent': 'Treebeard'}
  ];

  characters.forEach(character => {
    for (let [key, value] of Object.entries(character)) {
      lotr.set(key, value);
    }
  });
  console.log(lotr._hashTable);
  console.log('length: ', lotr.length);
  console.log('capacity: ', lotr._capacity);
  console.log('deleted: ', lotr._deleted);
}

function main2() {
  const lotr = new HashMap2();

  const characters = [
    {'Hobbit': 'Bilbo'}, 
    {'Hobbit': 'Frodo'},
    {'Wizard': 'Gandolf'},
    {'Human': 'Aragon'},
    {'Elf': 'Legolas'},
    {'Maiar': 'The Necromancer'},
    {'Maiar': 'Sauron'},
    {'RingBearer': 'Gollum'},
    {'LadyOfLight': 'Galadriel'},
    {'HalfElven': 'Arwen'},
    {'Ent': 'Treebeard'}
  ];

  characters.forEach(character => {
    for (let [key, value] of Object.entries(character)) {
      lotr.set(key, value);
    }
  });
  console.log('setting up the hash map');
  console.log('');
  lotr._hashTable.forEach(list => {
    util.display2(list);
  });
  console.log(lotr._hashTable);
  console.log('length: ', lotr.length);
  console.log('capacity: ', lotr._capacity);

  // console.log('=====deleting=====');
  // console.log('');
  // lotr.delete('Hobbit');
  // lotr._hashTable.forEach(list => {
  //   util.display2(list);
  // });
  // console.log('length: ', lotr.length);
  // console.log('capacity: ', lotr._capacity);

  // console.log('=====adding=====');
  // console.log('');
  // lotr.set('Hobbit', 'Levi');
  // lotr._hashTable.forEach(list => {
  //   util.display2(list);
  // });
  // console.log('length: ', lotr.length);
  // console.log('capacity: ', lotr._capacity);
}

main2();


//2  what does this do?
// should print out 20 and then 10

//5 palindrome

// function canBePalindrome(str) {
//   const hash = new Map();
//   for (let i=0; i<str.length; i++) {
//     if (hash.has(str[i])) {
//       let currentValue = hash.get(str[i]);
//       hash.set(str[i], currentValue+1);
//     } else {
//       hash.set(str[i], 1);
//     }
//   }
//   if (str.length % 2 === 0) {
//     return hash.size === str.length/2;
//   } else {
//     return hash.size === Math.ceil(str.length/2);
//   }
// }

//6 anagrams

// function normalize(word) {
//   let chars = word.split('');
//   return chars.sort().join('');
// }

// function groupAnagrams(words) {
//   const hash = new Map();
//   words.forEach(word => {
//     let normalizeWord = normalize(word);
//     if (hash.has(normalizeWord)) {
//       let values = hash.get(normalizeWord);
//       values.push(word);
//     } else {
//       hash.set(normalizeWord, [word]);
//     }
//   });
  
//   return [...hash.values()];
// }