function convertToRoman(num){
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
    
    for (let i = 0; i < romanList.length; i++){
      if (num > 3999){
        console.log("Enter a number equal or less than 3999");
        return;
      }
      else if (num <= -1){
        console.log("Please enter a number greater than or equal to 1");
        return;
      }
      else if (!num){
        console.log("Please enter a valid number");
        return;
      }
      while(num >= romanList[i][1]){
      romanNumeral += romanList[i][0];
      num -= romanList[i][1];
      }
    }  
    return romanNumeral;
  }
  convertToRoman(0);
  