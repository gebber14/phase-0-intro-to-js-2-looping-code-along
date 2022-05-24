//const names = ["Lucy", "Charlie", "Linus"];
//const event = "birthday";

function writeCards(names,event) {
  let collectMessages =[];
  for (let i = 0; i < names.length; i++) {
    collectMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    
  }
  return collectMessages;
}





function countDown(startingInt) {
  while(startingInt >=0) {
  console.log(startingInt);
  startingInt--;  
  }
}