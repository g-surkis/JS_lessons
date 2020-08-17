 Number
        number < 2**53 (16 цифр)
        Крім звичайних чисел, існують так звані «спеціальні числові значення», які відносяться до цього типу даних: Infinity, -Infinity і NaN.
        console.log( 1 / 0 ); // Infinity
        console.log( "не число" / 2 ); // NaN

        Математичні операції - безпечні
        Математичні операції в JavaScript «безпечні». Ми можемо робити що завгодно: ділити на нуль, 
        звертатися з рядками як з числами і т.д.
       
        float


https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/%D0%A7%D0%B8%D1%81%D0%BB%D0%BE

    BigInt
    const bigInt = 1234567890123456789012345678901234567890n;


    Symbol
    Тип symbol (символ) використовується для створення унікальних ідентифікаторів об'єктів.

    

    const a = Symbol('a')
    const b = Symbol('a')
    console.log(a===b)


    String

    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String
    
        typeof        

        typeof 0 // "number"

        typeof 10n // "bigint"

        typeof true // "boolean"

        typeof "foo" // "string"

        typeof undefined // "undefined"

        typeof Symbol("id") // "symbol"

        typeof null // "object"  (2)




        typeof Math // "object"        

        typeof console.log // "function"  



    Приведення типів
        Число 0, пустая строка "", null, undefined и NaN становятся false. Из-за этого их называют «ложными»