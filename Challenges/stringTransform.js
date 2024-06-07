
function transformString(str) {
    // Check for empty string
    if (!str) return "";
  
    const length = str.length;
  
    // Check for divisibility by 15 (both 3 and 5)
    if (length % 15 === 0) {
      // Reverse the string and convert to ASCII codes
      return str.split("").reverse().map((char) => char.charCodeAt(0)).join(" ");
    } else if (length % 5 === 0) {
      // Convert to ASCII codes
      return str.split("").map((char) => char.charCodeAt(0)).join(" ");
    } else if (length % 3 === 0) {
      // Reverse the string
      return str.split("").reverse().join("");
    } else {
      // No transformation
      return str;
    }
  }
  
  // Examples
  console.log(transformString("Hamburger")); // Output: regrubmaH
  console.log(transformString("Pizza")); // Output: 80 105 122 122 97
  console.log(transformString("Chocolate Chip Cookie")); // Output: eikooCpihCetalocohC