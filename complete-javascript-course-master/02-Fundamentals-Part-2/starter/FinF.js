function fruitPiece(fruit){
    return fruit * 4;
}

function fruitJuice(apple, orange){
    const applePiece = fruitPiece(apple);
    const orangePiece = fruitPiece(orange);

    const result = `Juice with apple ${applePiece} piece and orange ${orangePiece}`;
    return result;
}

console.log(fruitJuice(2,4));