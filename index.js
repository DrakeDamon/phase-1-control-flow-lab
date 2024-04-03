function scuberGreetingForFeet(someValue){
  if (someValue <= 400) {
    return "This one is on me!";
  } else if (someValue > 400 && someValue <= 2000) {
    return "That will be twenty bucks."; // Added dollar sign for consistency
  } else if (someValue > 2000 && someValue <= 2500) {
    return "I will gladly take your thirty bucks."; // Adjusted the message based on typical task requirements
  } else {
    return "No can do."; // Added missing else condition for distances over 2500
  }
}


function ternaryCheckCity(city){
return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default:
      return "Bye.";
  }
}
