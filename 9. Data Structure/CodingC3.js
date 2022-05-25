const gameEvents = new Map([
    [17, 'GOAL'],
    [36, 'Substitution'],
    [47, 'GOAL'],
    [61, 'Substitution'],
    [64, 'Yellow Card'],
    [69, 'Red Card'],
    [70, 'Substitution'],
    [72, 'Substitution'],
    [76, 'GOAL'],
    [86, 'GOAL'],
    [92, 'Yellow Card']
]);

// 1. Creating array with a unique value
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. Delete events
gameEvents.delete(64);
console.log(gameEvents);

// 3. Calculation events

const time = [...gameEvents.keys()].pop();
console.log(time);

console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

// 4. Events Occurrence 

for(const [min, event] of gameEvents){
    const half = min <= 45 ? 'FIRST': 'SECOND';
    console.log(`[${half} HALF] ${min} : ${event}`);
}