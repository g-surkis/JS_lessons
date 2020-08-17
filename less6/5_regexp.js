// const regexp = new RegExp("template", "flag");


// const regexp = /template/; 
// const regexp = /template/gmi;

// let tag = "h2";
// let regexp = new RegExp(`<${tag}>`);

// flags
// i - case insensitive
// g - global
// m - multirows

// Search: str.match
// Replace: str.replace
// Check: str.test


// let str = "Любо, братцы, любо!";

// console.log(str.match(/любо/g))
// console.log(str.match(/любо/gi))
// console.log(str.match(/любо/i))

// console.log( "We will, we will".replace(/we/i, "I") ); 
// console.log( "We will, we will".replace(/we/ig, "I") ); 


// let str = "Я ЛюБлЮ JavaScript";
// let regexp = /люблю/i;

// console.log(( regexp.test(str) ));


// Symbol class
// \d //(«d»  «digit» )
// \s //(«s» «space» )
// \w //(«w» «word» )

// \D //not digit
// \S //not space
// \W //not symbol 
// . //any symbol 

//  Anchors
// Каретка ^ означает совпадение с началом текста, а доллар $ – с концом.

// let str1 = "Mary had a little lamb";
// console.log( /^Mary/.test(str1) ); 

// let str1 = "it's fleece was white as snow";
// console.log( /snow$/.test(str1) );

// Word border 
//  \b 
// console.log( "Hello, Java!".match(/\bJava\b/) ); 
// console.log( "Hello, JavaScript!".match(/\bJava\b/) ); 

// Set
// console.log( "Топ хоп".match(/[тх]оп/gi) );

// Ranges
// console.log( "Exception 0xAF".match(/x[0-9A-F][0-9A-F]/g) ); 

// Exclusive ranges

// [^aeyo] – любой символ, за исключением 'a', 'e', 'y' или 'o'.
// [^0-9] – любой символ, за исключением цифры, то же, что и \D.
// [^\s] – любой непробельный символ, то же, что и \S.

// Квантификаторы +, *, ? и {n}
// let str = "+7(903)-123-45-67";
// let numbers = str.match(/\d{1,}/g);
// console.log(numbers); 


// + Означает «один или более». То же самое, что и {1,}.
// let str = "+7(903)-123-45-67";
// console.log( str.match(/\d+/g) );

// ? Означает «ноль или один». То же самое, что и {0,1}. По сути, делает символ необязательны

// * Означает «ноль или более». То же самое, что и {0,}. То есть символ может повторяться много раз или вообще отсутствовать.
// console.log( "100 10 1 gh".match(/\d0*/g) );


// function validateEmail(email) {
//     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     return emailPattern.test(email);
//   }
// console.log(validateEmail('ghgh@self.vomds'));
// console.log(validateEmail('5114@self.vo'));
// console.log(validateEmail('email@gmail.com'));
  
