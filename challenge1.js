/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

function printName(){
    console.log(`Reem`)
};

printName();

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

function printAge(birthyear){
    console.log( 2023 - birthyear )
}

printAge(1996);

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

function printHello(language, name){
    if(language == `English`){
        console.log(`Hello ${name}`)
    } else if(language == `Spanish`){
        console.log(`Hola ${name}`)
    } else if (language == `French`){
        console.log(`Bonjour ${name}`)
    } else if (language == `Turkish`)
    {console.log(`Merhaba ${name}`)
    }
    else console.log(`مرحبًا ${name}`) 
};

printHello(`English`,`Reem`);
printHello(`French`,`Moudhi`);
printHello(`Spanish`,`Shaikha`);
printHello(`Turkish`,`Mariam`);
printHello(`Arabic`,`Aisha`);






/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax(x,y){ 
    if( x > y ){
        console.log(x)
    } else if ( y > x ){
        console.log(y)
    }
    else {
        console.log( x , y )
    }
    };

    printMax(5,5);