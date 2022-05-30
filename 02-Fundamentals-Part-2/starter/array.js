const player = ["Messi", "Ronaldo", "Neymar", "Roney"];
console.log(player);

for(x of player){
    console.log(x);
}

player[2] = "Zalatan";
console.log(player);

for(y of player){
    console.log(y);
}