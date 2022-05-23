
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

// Challenge Solution

// 1. Creating Array.
const[players1, players2] = game.Players;
console.log(players1, players2);

// 2. Creating array with gk variables
const [gk, ...fieldPlayers] = players1; 
console.log(gk, fieldPlayers);

// 3. One array with all the players.
const allPlayers =[...players1, ...players2];
console.log(allPlayers);