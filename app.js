// / ================CHAPTER NO:35 to 38 (Q NO 1)===================
// / =======================( FUNCTION )============================

// 1. Write a function that displays current date & time in your
// browser.

// let currentDateTime = new Date();
// document.write(currentDateTime)

// / =========================== (Q NO 2)===========================

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.


// function User(firstName, lastName) {
//     let fullName = firstName + " " + lastName;
//     console.log("Assalam-o-Alaikum, " + fullName + " Aap ko Khush Amdeed]");
//   }
  
  
//   let firstName = "Muhammad";
//   let lastName = "Rizwan";

//   User(firstName, lastName);

//   ager hum argument commas main dain gay to argument lay ga lakin ager hum alag say variable banain to argument ko with out argument likhna hoo ga to wo variable ki value utha lay ga.

// / =========================== (Q NO 3)===========================

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// function abc(a,b){
//     return a+b;
// }

// let sum =abc(5,2)
// console.log(sum)

// / ======================================================

// Yahan ek JavaScript function hai jo do numbers ko (jo ke user se input hote hain) add karta hai aur in dono numbers ka sum wapas return karta hai:

// function addNumbers() {
//     let number1 = parseFloat(prompt("Pehla number dain:"));
//     let number2 = parseFloat(prompt("Dusra number dain:"));
  
//     let sum = number1 + number2;
//     return sum;
//   }
  
//   let result = addNumbers();
//   console.log("Dono numbers ka jama hai: " + result);
  

//   Is code mein:

// Humne addNumbers function tayar kiya hai jo do numbers ko input leta hai prompt ke zariye.
// prompt se input liye gaye values initially strings ki form mein hoti hain, is liye hum parseFloat ka istemal karke unko numbers mein convert karte hain.
// Phir, hum in dono numbers ko add karte hain aur sum variable mein store karte hain.
// Function se return ke zariye sum ko wapas bhejte hain.
// Akhir mein, hum function ka example addNumbers ko call karte hain aur console.log se result ko display karte hain.

// / =========================== (Q NO 4)===========================

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.


// Yahan ek JavaScript function hai jo teen arguments (num1, num2, aur operator) leta hai aur di gayi operation ko perform karta hai. Iske baad woh operation ka natija wapas return karta hai aur browser mein us natije ko display karta hai:


// function calculate(num1, num2, operator) {
//     var result;
  
//     switch (operator) {
//       case "+":
//         result = num1 + num2;
//         break;
//       case "-":
//         result = num1 - num2;
//         break;
//       case "*":
//         result = num1 * num2;
//         break;
//       case "/":
//         if (num2 !== 0) {
//           result = num1 / num2;
//         } else {
//           result = "Undefined (Division by zero)";
//         }
//         break;
//       default:
//         result = "Invalid operator";
//     }
  
//     document.write("Result: " + num1 + " " + operator + " " + num2 + " = " + result);
//   }
  
//   // Example usage:
//   var number1 = parseFloat(prompt("Pehla number dain:"));
//   var number2 = parseFloat(prompt("Dusra number dain:"));
//   var operator = prompt("Operator dain (+, -, *, /):");
  
//   calculate(number1, number2, operator);
  

//   Is code mein:

// Humne calculate function tayar kiya hai jo teen arguments (num1, num2, aur operator) leta hai.
// switch statement ka istemal kiya gaya hai taake di gayi operator ke hisab se sahi operation perform kiya ja sake.
// Operation ke natije ko result variable mein store kiya jata hai.
// Agar division ke case mein num2 zero ho, to "Undefined (Division by zero)" wapas kiya jata hai.
// Default case mein, agar invalid operator di gayi ho to "Invalid operator" wapas kiya jata hai.
// Phir, document.write se operation aur uska result browser mein display kiya jata hai.


// / =========================== (Q NO 5)===========================

// 5. Write a function that squares its argument.


// function squareNumber(number) {
//     let result = number * number;
//     return result;
//   }
  
//   let inputNumber = 5;
//   let squared = squareNumber(inputNumber);
//   console.log(inputNumber + " ka square: " + squared);
  

//   Is code mein:

// Humne squareNumber function tayar kiya hai jo aik argument, number, leta hai.
// Function mein, hum number ka square nikalte hain, yani usko khud se multiply karke result variable mein store karte hain.
// Hum return statement ka istemal karke squared result ko function se wapas bhejte hain.
// Akhir mein, hum function ka example inputNumber ko square karne ke liye istemal karte hain aur console.log se result ko display karte hain.


// / =========================== (Q NO 6)===========================

// 6. Write a function that computes factorial of a number.

// function factorial(number) {
//     if (number === 0 || number === 1) {
//       return 1;
//     } else {
//       var result = 1;
//       for (var i = 2; i <= number; i++) {
//         result *= i;
//       }
//       return result;
//     }
//   }
  
//   var inputNumber = 5;
//   var fact = factorial(inputNumber);
//   console.log(inputNumber + " ka factorial: " + fact);
  

//   Is code mein:

// Humne factorial function tayar kiya hai jo aik argument, number, leta hai.
// Function mein, if statement se check karte hain ke agar number 0 ya 1 hai toh factorial 1 hota hai, is liye phir return 1; kiya jata hai.
// Agar number 0 ya 1 nahi hai, toh hum ek for loop se factorial calculate karte hain.
// for loop i ko 2 se lekar number tak chalata hai aur har iteration mein result ko i se multiply karta hai.
// Phir, calculate kiya gaya factorial return statement se function se wapas bheja jata hai.
// Akhir mein, hum function ka example inputNumber ko calculate karne ke liye istemal karte hain aur console.log se result ko display karte hain.

// / =========================== (Q NO 7)===========================

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

// function displayCounting(start, end) {
//     if (start <= end) {
//       for (var i = start; i <= end; i++) {
//         console.log(i);
//       }
//     } else {
//       console.log("Start number should be less than or equal to end number.");
//     }
//   }
  
//   // Example usage:
//   var startNumber = 1;
//   var endNumber = 5;
//   displayCounting(startNumber, endNumber);
  

//   Is code mein:

// Humne displayCounting function tayar kiya hai jo do arguments (start aur end) leta hai.
// Function mein, hum check karte hain ke agar start end se chota ya barabar hai toh for loop ka istemal karke counting display karte hain.
// Agar start end se bada hai toh error message display kiya jata hai.
// for loop start se lekar end tak chalata hai aur har iteration mein i ko console.log se display karta hai.
// Akhir mein, hum function ka example startNumber aur endNumber ke sath istemal karte hain.

// / =========================== (Q NO 8)===========================

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2

// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare() 


// Bilkul! Yahan ek JavaScript function hai jo do inputs, base aur perpendicular, leta hai aur ek nested function ka istemal karke right angle triangle ki hypotenuse calculate karta hai. Inner function calculateSquare ka istemal square nikalne ke liye kiya jata hai:

// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(number) {
//       return number * number;
//     }
  
//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);
  
//     var hypotenuseSquare = baseSquare + perpendicularSquare;
//     var hypotenuse = Math.sqrt(hypotenuseSquare);
  
//     return hypotenuse;
//   }
  
//   // Example usage:
//   var baseLength = 3;
//   var perpendicularLength = 4;
//   var result = calculateHypotenuse(baseLength, perpendicularLength);
//   console.log("Hypotenuse of the right angle triangle is: " + result);
  

//   Is code mein:

// calculateHypotenuse function mein do arguments (base aur perpendicular) liye jate hain.
// Inner function calculateSquare tayar ki gayi hai jo ek number ko square karta hai aur woh square result wapas return karta hai.
// calculateSquare function ka istemal base aur perpendicular ko square nikalne ke liye kiya jata hai aur unke square results baseSquare aur perpendicularSquare mein store kiye jate hain.
// Hypotenuse ka square (hypotenuseSquare) baseSquare aur perpendicularSquare ko add karke calculate kiya jata hai.
// Math.sqrt ka istemal square root nikalne ke liye kiya jata hai aur square root result hypotenuse ki value ko determine karta hai.
// Hypotenuse value return statement se function se wapas bheji jati hai.


// / =========================== (Q NO 9)===========================

// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:

// i. Arguments as value
// ii. Arguments as variables


// Yahan do tariqay se rectangle ki area calculate karne wala JavaScript function diya gaya hai. Pehla tariqa hai jahan width aur height arguments ke roop mein diye jate hain, aur doosra tariqa hai jahan width aur height variables ke roop mein diye jate hain:

// Pehla Tariqa: Arguments as Value

// function calculateRectangleArea(width, height) {
//     var area = width * height;
//     return area;
//   }
  
//   // Example usage with values as arguments:
//   var area1 = calculateRectangleArea(5, 10);
//   console.log("Rectangle ka area (arguments as values): " + area1);

//   Is code mein calculateRectangleArea function width aur height ko arguments ke roop mein leta hai aur phir unka area calculate karke wapas bhejta hai.

  // / =======================================================================

//   Doosra Tariqa: Arguments as Variables

//   function calculateRectangleArea(width, height) {
//     var area = width * height;
//     return area;
//   }
  
//   // Example usage with values as variables:
//   var rectangleWidth = 7;
//   var rectangleHeight = 12;
//   var area2 = calculateRectangleArea(rectangleWidth, rectangleHeight);
//   console.log("Rectangle ka area (arguments as variables): " + area2);
  

// Is code mein bhi calculateRectangleArea function width aur height ko arguments ke roop mein leta hai, lekin yahan width aur height ko pehle variables mein store kiya gaya hai, aur phir un variables ko function mein pass kiya gaya hai.

// Dono tariqon se aap rectangle ki area calculate kar sakte hain, chaho to values ko seedha arguments ke roop mein ya variables ke roop mein pass kar sakte hain.


// / =========================== (Q NO 10)===========================

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.


// Bilkul! Ek palindrome string woh hoti hai jo ulta seedha dono taraf se same hoti hai, yaani ki string ko ulta karke bhi wohi string rehti hai. Palindrome ko check karne ke liye, aap ek JavaScript function istemal kar sakte hain. Yahan ek asaan tariqa diya gaya hai:


// function isPalindrome(str) {
//     // String ko lowercase mein convert karein taki case-insensitive comparison ho
//     str = str.toLowerCase();
  
//     // String ko ulta karke dekhein
//     var reversedStr = str.split('').reverse().join('');
  
//     // Original string aur reversed string ko compare karein
//     return str === reversedStr;
//   }
  
//   // Example usage:
//   var inputString = "madam";
//   var result = isPalindrome(inputString);
  
//   if (result) {
//     console.log("Ye string palindrome hai.");
//   } else {
//     console.log("Ye string palindrome nahi hai.");
//   }
  

// Is code mein:

// isPalindrome function ek argument (str) leta hai jo string ko represent karta hai.
// Pehle, hum string ko lowercase mein convert karte hain taake case-insensitive comparison ho sake.
// Fir, hum string ko ulta karke dekhte hain. Iske liye hum split('') ka istemal karke string ko array mein convert karte hain, usko reverse karte hain, aur phir join('') se array ko string mein convert karte hain.
// Original string aur reversed string ko compare karte hain, agar dono same hain toh woh palindrome hai.
// Example mein, inputString mein "madam" pass ki gayi hai, aur isPalindrome function se check kiya gaya hai ke ye palindrome hai ya nahi. Result ke hisab se appropriate message display kiya jata hai.


// / =========================== (Q NO 11)===========================

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'


// Yahan ek JavaScript function diya gaya hai jo string ko parameter ke roop mein leta hai aur usmein har word ke pehle harf ko uppercase mein convert karta hai:


// function capitalizeFirstLetterOfEachWord(inputString) {
//     var words = inputString.split(' ');
//     var capitalizedWords = [];
  
//     for (var i = 0; i < words.length; i++) {
//       var word = words[i];
//       var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
//       capitalizedWords.push(capitalizedWord);
//     }
  
//     var resultString = capitalizedWords.join(' ');
//     return resultString;
//   }
  
//   // Example usage:
//   var inputString = 'the quick brown fox';
//   var result = capitalizeFirstLetterOfEachWord(inputString);
//   console.log("Expected Output: 'The Quick Brown Fox'");
//   console.log("Actual Output: '" + result + "'");
  

// Is code mein:

// capitalizeFirstLetterOfEachWord function ek argument (inputString) leta hai jo string ko represent karta hai.
// Hum split(' ') ka istemal karke string ko words mein tukde karte hain.
// Fir, ek loop se har word ke pehle harf ko uppercase mein convert karte hain. charAt(0) se word ka pehla harf nikala jata hai, usko uppercase mein convert kiya jata hai, aur phir slice(1) se word ke baki hisse ko lekar capital word banaya jata hai.
// Capitalized words ko capitalizedWords array mein store karte hain.
// join(' ') ka istemal karke capital words ko ek string mein convert karte hain aur wapas bhejte hain.


// / =========================== (Q NO 12)===========================

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


// function findLongestWord(inputString) {
//     var words = inputString.split(' ');
//     var longestWord = '';
  
//     for (var i = 0; i < words.length; i++) {
//       var word = words[i];
  
//       // Agar current word current longest word se lamba hai, toh usko longestWord mein store karein
//       if (word.length > longestWord.length) {
//         longestWord = word;
//       }
//     }
  
//     return longestWord;
//   }
  
//   // Example usage:
//   var inputString = 'Web Development Tutorial';
//   var result = findLongestWord(inputString);
//   console.log("Expected Output: 'Development'");
//   console.log("Actual Output: '" + result + "'");
  

// Is code mein:

// findLongestWord function ek argument (inputString) leta hai jo string ko represent karta hai.
// Hum split(' ') ka istemal karke string ko words mein tukde karte hain.
// Ek loop se har word ko check kiya jata hai aur agar kisi word ka length current longest word se zyada hai, toh usko longestWord mein store kiya jata hai.
// Loop ke baad, sab se lamba word longestWord mein hota hai aur woh result ke taur par wapas bheja jata hai.
// Example mein, inputString mein "Web Development Tutorial" pass ki gayi hai, aur findLongestWord function se sab se lamba word "Development" dhunda gaya hai. Result word ko display kiya jata hai.


// / =========================== (Q NO 13)===========================

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'


// Yahan ek JavaScript function diya gaya hai jo do arguments, aik string aur aik letter, ko accept karta hai aur us string mein specified letter ki kitni baar occurrence hai, woh count karta hai:


// function countOccurrences(inputString, letter) {
//     var count = 0;
  
//     for (var i = 0; i < inputString.length; i++) {
//       if (inputString[i] === letter) {
//         count++;
//       }
//     }
  
//     return count;
//   }
  
//   // Example usage:
//   var inputString = 'JSResourceS.com';
//   var specifiedLetter = 'o';
//   var result = countOccurrences(inputString, specifiedLetter);
//   console.log("Occurrences of '" + specifiedLetter + "' in the string: " + result);
  
// Is code mein:

// countOccurrences function do arguments (inputString aur letter) leta hai jo string aur letter ko represent karte hain.
// count variable ko 0 se initialize kiya jata hai, jo letter ki occurrences ko count karega.
// Ek loop se string ko har character ke liye check kiya jata hai aur agar current character specified letter ke barabar hai, toh count ko increment kiya jata hai.
// Loop ke baad, count variable mein specified letter ki occurrences ki total count hoti hai, aur woh count result ke taur par wapas bheji jati hai.
// Example mein, inputString mein "JSResourceS.com" aur specifiedLetter mein 'o' pass kiya gaya hai, aur countOccurrences function se letter 'o' ki occurrences ki count nikali gayi hai. Result ko display kiya jata hai.


// / =========================== (Q NO 14)===========================

// The Geometrizer
// 14. 
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// Circumference of circle = 2πr
// Area of circle = πr2



// Yahan do JavaScript functions diye gaye hain jo circle ki properties calculate karte hain: circumference aur area. Pehla function calcCircumference hai jo circumference nikalta hai, aur doosra function calcArea hai jo area nikalta hai.


// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     console.log("The circumference is " + circumference);
//   }
  
//   function calcArea(radius) {
//     var area = Math.PI * Math.pow(radius, 2);
//     console.log("The area is " + area);
//   }
  
//   // Example usage:
//   var circleRadius = 5;
//   calcCircumference(circleRadius);
//   calcArea(circleRadius);
  


// Is code mein:

// calcCircumference function radius ko parameter ke roop mein leta hai aur circumference ko 2 * Math.PI * radius formula se calculate karta hai. Fir console.log se circumference ko display karta hai.
// calcArea function bhi radius ko parameter ke roop mein leta hai aur area ko Math.PI * Math.pow(radius, 2) formula se calculate karta hai. Fir console.log se area ko display karta hai.
// Example mein, circleRadius mein radius ki value 5 hai, aur dono functions calcCircumference aur calcArea se radius ke basis par circumference aur area calculate ki gayi hai. Result ko display kiya jata ha