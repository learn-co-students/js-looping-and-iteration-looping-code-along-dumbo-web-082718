// Code your solutions in this file
function printBadges(names){
  for (let i = 0; i < names.length; i ++) {
    console.log(`Welcome ${names[i]}! You are employee #${i + 1}.`);
  }
    return names;
}

// printBadges(['Ada', 'Brendan', 'Ali']);

function tailsNeverFails() {
  let toss = Math.random();
  let count = 0
  while (toss >= 0.5) {
    toss = Math.random();
    count ++;
  }
  return `You got ${count} tails in a row!`
}
