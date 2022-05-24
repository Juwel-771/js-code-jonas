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

