alert("Welcome to the FizzBuzz challenge");

var fizzyNum = 1;
var output = 1;



while (fizzyNum <= 100) {
  if (fizzyNum % 15 == 0) {
    output = "FizzBuzz";
    document.write(output);
    // document.write("\n");
    document.write("<br>");
    }
  else if (fizzyNum % 3 == 0) {
    output = "Fizz"
    document.write(output);
    // document.write("\n");
    document.write("<br>");
  }
  else if (fizzyNum % 5 == 0) {
    output = "Buzz"
    document.write(output);
    // document.write("\n");
    document.write("<br>");
  }
  else {
    output = fizzyNum;
    document.write(output);
    // document.write("\n");
    document.write("<br>");
  }
  fizzyNum += 1;
}