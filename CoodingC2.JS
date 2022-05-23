const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    Players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski'
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze'
        ],
    ],

    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1. Print Scoring Goal
for(const [i, players] of game.scored.entries()){
    console.log(`Goal ${i+1} scored: ${players}`);
}

// 2. Calculation the odd;
const odds = Object.values(game.odds);
let avg = 0;
for(const odd of odds)
avg += odd;
avg /= odds.length;
console.log(avg);



