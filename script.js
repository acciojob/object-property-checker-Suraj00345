const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
     return key in sampleObject;
}
const keyToCheck = "green";
const keyExists = hasKey(keyToCheck);

if (keyExists) {
 return true;
} else {
  return false;
}

// Do not change the code below
// const key = prompt("Enter Key.");
// alert(hasKey(key));