// ASIGNMENT 01
document.write("ASSIGNMENT 01");
document.write("<br>");
document.write("<br>");

// If-Else Statements
document.write("If-Else Statements:");
document.write("<br>");

/* **Problem:**
Write a program that takes an integer as input and prints whether it is an even or odd number.

**Instructions:**
1. Create a variable and assign an integer value to it.
2. Use an if-else statement to check if the number is even or odd.
3. Print the result. */

// Example 01
var number=8;

    if(number%2===0){
        document.write("The Number"," ", number , "is EVEN");
    }
    else{
        document.write("The Number" ," ", number , "is ODD");
    }

document.write("<br>");

// Example 02
var number=5;

    if(number%2===0){
        document.write("The Number"," ", number , "is EVEN");
    }
    else{
        document.write("The Number" ," ", number , "is ODD");
    }

document.write("<br>");
document.write("<br>");

// ASIGNMENT 02
document.write("ASSIGNMENT 02");
document.write("<br>");
document.write("<br>");

// If-Else & Else-If Statements
document.write("If-Else & Else-If Statements:");
document.write("<br>");

/* **Problem:**
Create a program that determines if a given temperature is above or below freezing (32°F).

**Instructions:**
1. Create a variable and assign a temperature value to it.
2. Use an if-else statement to check if the temperature is above or below freezing.
3. Print the result. */

// Example 01
var temperature = 40; 

    if (temperature > 32) {

        document.write("Temperature"," ", temperature , " is above the Freezing (32<sup>o</sup> F)")
    }
    else if (temperature === 32) {

        document.write("Temperature"," ", temperature, " is equal to the Freezing (32<sup>o</sup> F)")
    }
    else{
        document.write("Temperature"," ", temperature, " is below the Freezing (32<sup>o</sup> F)")
    }

document.write("<br>");

// Example 02
var temperature = 32; 

    if (temperature > 32) {

        document.write("Temperature"," ", temperature , " is above the Freezing (32<sup>o</sup> F)")
    }
    else if (temperature === 32) {

        document.write("Temperature"," ", temperature, " is equal to the Freezing (32<sup>o</sup> F)")
    }
    else{
        document.write("Temperature"," ", temperature, " is below the Freezing (32<sup>o</sup> F)")
    }

document.write("<br>");

// Example 03
var temperature = 25; 

    if (temperature > 32) {

        document.write("Temperature"," ", temperature , " is above the Freezing (32<sup>o</sup> F)")
    }
    else if (temperature === 32) {

        document.write("Temperature"," ", temperature, " is equal to the Freezing (32<sup>o</sup> F)")
    }
    else{
        document.write("Temperature"," ", temperature, " is below the Freezing (32<sup>o</sup> F)")
    }

document.write("<br>");
document.write("<br>");

// ASIGNMENT 03
document.write("ASSIGNMENT 03");
document.write("<br>");
document.write("<br>");

// Switch Statements
document.write("Switch Statements:");
document.write("<br>");

/* **Problem:**
Write a program that converts a numeric day of the week (1 for Sunday, 2 for Monday, ..., 7 for Saturday) into its corresponding name.

**Instructions:**
1. Create a variable and assign a day number to it.
2. Use a switch statement to match the number with the corresponding day.
3. Print the day of the week. */

var day = 8;  

    switch (day) {
        case 1:
            document.write("The"," ",day," ","day is Monday");
            break;
        case 2:
            document.write("The"," ",day," ","day is Tuesday");
            break;
        case 3:
            document.write("The"," ",day," ","day is Wednesday");
            break;
        case 4:
            document.write("The"," ",day," ","day is Thursday");
            break;
        case 5:
            document.write("The"," ",day," ","day is Friday");
            break;
        case 6:
            document.write("The"," ",day," ","day is Saturday");
            break;
        case 7:
            document.write("The"," ",day," ","day is Sunday");
            break;
        default:
            document.write("Put a valid number");


    }

document.write("<br>");
document.write("<br>");

// ASIGNMENT 04
document.write("ASSIGNMENT 04");
document.write("<br>");
document.write("<br>");

// If-Else & Else-If Statements
document.write("If-Else & Else-If Statements:");
document.write("<br>");

/* **Problem:**
Create a program that checks if a given number is positive, negative, or zero.

**Instructions:**
1. Create a variable and assign a number to it.
2. Use if-else statements to check if the number is positive, negative, or zero.
3. Print the result. */

var number = -2;

    if (number > 0) {

        document.write("The Number"," ",number, " is Positive Number");
    }
    else if (number < 0) {

        document.write("The Number"," ",number, " is Negative Number");
    }
    else {

        document.write("The Number"," ",number, " is Equal to Zero");
    }

document.write("<br>");
document.write("<br>");

// ASIGNMENT 05
document.write("ASSIGNMENT 05");
document.write("<br>");
document.write("<br>");

// If-Else Statements
document.write("If-Else Statements:");
document.write("<br>");

/* **Problem:**
Write a program that checks if a given year is a leap year.

**Instructions:**
1. Create a variable and assign a year value to it.
2. Use if-else statements to check if the year is a leap year.
3. Print the result. */

var year=2004;

    if(year % 4 === 0){
        if(year % 100 ===0){
          if(year % 400 ===0){
            document.write("This Year"," ",year," ","is a Leap Year");
          }  
          else{
            document.write("This Year"," ",year," ","is not a Leap Year");
          }
        }
        else{
            document.write("This Year"," ",year," ","is a Leap Year");
        }
    }
    else{
        document.write("This Year"," ",year," ","is not a Leap Year");
    }
























































