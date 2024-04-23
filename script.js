const number = document.getElementById("number");
const input = number.value;
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", () => {
  const inputValue = parseInt(number.value);
  const romanNumeral = convertToRoman(inputValue);
  output.innerText = romanNumeral;
});


function convertToRoman(input){
    let romanNumeral = "";
    const romanList = [
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1]
    ]

      if (input > 3999){
        return "Enter a number equal or less than 3999";
      }
      else if (input <= 0){
        return "Please enter a number greater than or equal to 1";
      }
      else if (!input){
        return "Please enter a valid number";
      }
      for (let i = 0; i < romanList.length; i++){
      while(input >= romanList[i][1]){
      romanNumeral += romanList[i][0];
      input -= romanList[i][1];
      }
    }
    return romanNumeral;
  }
