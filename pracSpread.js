const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    // ES6 enhanced object literals
    openingHours:{
        thu: {
            open:12,
            close:09,
        },
        mon: {
            open: 09,
            close: 10,
        },
        fri:{
            open:12,
            close: 09,
        },
    },
  
    order(starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({time = '20:20', address, starterIndex=1, mainIndex=1}) {
        console.log(`Food delivered at ${time} in place ${address} item on menu ${this.mainMenu[mainIndex]} 
        and food is ${this.starterMenu[starterIndex]}`);
    },

    makePasta: function(ing1, ing2, ing3){
        console.log(`Here is your delicious pasta with ${ing1},
        ${ing2}, ${ing3}`);
    }

}

// --------------- Basic ------------------ 
// const arr = [1,2,3,4];
// const newArr = [...arr, 5,6,7];
// console.log(newArr); // 1

// const arr = [4,5,6,7,8];
// const myArr = [1,2,3,...arr, ...arr];
// console.log(myArr);
// console.log(...myArr); // 2

// const strIng = ['m','d','j','u','w','e','l'];
// const strDing = [...strIng, 's','o','f','t','w','a','r','e'];
// console.log(strDing);
// console.log(...strDing); // 3

// const myLine = ['computer','science','and','engineering'];
// const addLine = [...myLine, 'Locate', 'in', 'chittagong'];
// console.log(addLine);
// const addline2 = [...addLine, 'Best','Low','Versity'];
// console.log(addline2);
// console.log(...addline2); // 4

// const mainLine = [1,2,3,4,5];
// const line1 = [...mainLine, 6,7,8,9,10];
// console.log(line1);
// const line2 = [(3*3), (2*4), (2*8),...line1];
// console.log(line2);  // 5

// const mainLine = [2,4,6,8];
// const line1 = [...mainLine,10,12];
// console.log(line1);

// const multi = [...line1, (7*2),(8*2),(9*2),(10*2)];
// console.log(multi);

// const addi = [...multi,(11+11),(11+13),(11+15),(11+17)];
// console.log(addi);
// console.log(...addi);

// const divv = [(22/2),(16/2),(8/4),...addi];
// console.log(divv);

// const minn = [(10-2),(8-4),(1-1),...divv];
// console.log(minn);
// console.log(...minn); // 6


// const arr = [2,3,45,6,67];
// const newArr = [...arr, 5,6,7,8,9,0];
// console.log(newArr);
// console.log(...newArr);
// console.table(newArr); // 7


// const myLife = [08, 12, 14, 16, 18];
// const addLife = [...myLife, 10, 12, ...myLife,...myLife,...myLife];
// console.log(addLife);
// console.log(...addLife); // 8
 
// const numberRoll = [09, 08, 07, 06];
// const AddingNumber = [...numberRoll, 10, 11, 12, 13];
// console.log(AddingNumber);
// console.log(...AddingNumber); // 9

// const floatNumber = [1.1, 1.2, 1.3, 1.4, 1.5, 1.6];
// const integerNumber = [1, 2, 3, 4, 5, 6];
// const mixNumber = [1.1, 1, 1.2, 2, 1.3, 3, 1.4, 4, 1.5, 5, 1.6, 6];
// console.log(...floatNumber, ...integerNumber, ...mixNumber); //10

// const str = ['m', 'd', 'j', 'u', 'w', 'e', 'l'];
// const strArr = [...str, 'a', 'h', 'm', 'e', 'd'];
// console.log(strArr);
// console.log(...strArr); // 11

// const str = ['Bangladesh','is','beautiful','country'];
// const strString = [...str, 'but','huge','population'];
// console.log(strString);
// console.log(...strString); // 12

// const drive = ['ferrai', 'bugati', 'tesla'];
// const addDrive = ['tokyo drive in cure',...drive];
// console.log(addDrive); // 13

// const muchStr = ['peter parker', 'Robert Dawyne Jr', 'Chris'];
// const aven = [...muchStr,'they','are', 'AVENGER'];
// console.log(aven);
// console.log(...aven); // 14

// const movie = ['Avenger: End Game', 'Spider-Man: No way Home'];
// const addMovie = [...movie, 'Batman-Beginning'];
// console.log(addMovie);
// console.log(...addMovie);  // 15

// const songList = ['Enemy', 'Bond', 'Animal', 'Death-bed'];
// const addSongList = ['Lovely', 'Love Nwantiti', 'Believer',...songList];
// console.log(addSongList);
// console.log(...addSongList); // 16


// const animeName = ['Naruto', 'Naruto Shippuden', 'Demon Slayer', 'Jujutsu Kaisen'];
// const addAnimeList = ['Attack On Titan',...animeName, 'Berserk', 'My Hero Academia'];
// console.log(addAnimeList);
// console.log(...addAnimeList); // 17

// const animeCharacter = ['Uchiha Sasuke','Uchiha Itachi', 'Madara Uchiha', 'Shishui Uchiha', 'Obito Uchiha'];
// const addAnimeCharater = ['Naruto Uzumaki', 'Minato Namikaze', 'Kakashi Hetake',...animeCharacter];
// console.log(addAnimeCharater);
// console.log(...addAnimeCharater); // 18


// const Uzumaki = ['Naruto', 'Karin', 'Nagato'];
// const addUzumaki = ['Kushina', ...Uzumaki];
// console.log(addUzumaki);
// console.log(...addUzumaki); //19

// const Uchiha = ['itachi', 'sasuke', 'shishui', 'madara', 'obito'];
// const halfUchiha = ['sakura', 'sarada'];
// console.log(halfUchiha);
// console.log(...halfUchiha); // 20

// const arr = [1,2,3,4];
// const newArr = [...arr, 5,6,7,8];
// console.log(newArr); // 21

// const arr = [5,6, 7, 8 ,9];
// const newArr = [1,2,3,4, ...arr];
// console.log(newArr); // 22

// const middle = [1,2,3,4];
// const side1 = [10, 11, 12, 13, 14];
// const addIng = [...middle,5,6,7,8,9,...side1];
// console.log(addIng); // 23

// const wholeNumbe = [12,21, 5,6];
// const newWholeNumber = [3,2,4,56,5];
// console.log([...wholeNumbe,...newWholeNumber]); //24 

// const add = [1,2,3 ,4,5];
// const newAdd = [...add, 6,7,8];
// console.log(newAdd); // 25

// const newStr = ['m', 'd'];
// const addNewStr = [...newStr,   'j','u','w','e','l'];
// console.log(addNewStr); // 26

// const myWord = ['We', 'Developers'];
// const tech = [...myWord, 'use','vsCode', 'CODE'];
// console.log(tech);
// console.log(...tech); // 27

// const mySelf = ['M', 'E', 'R', 'N'];
// const meaning =[...mySelf,'MongoDB','Express.Js','React.Js','Node.Js'];
// console.log(meaning);
// console.log(...meaning); // 28

// const aim = ['Become','Software','Developer'];
// const tech = [...aim, 'learn','all','kind','of','Js','Frame'];
// console.log(tech);
// console.log(...tech); //29

// const done = ['Practice','Done'];
// const done1 = [...done, 'till','now'];
// console.log(done1);
// console.log(...done1); //30 

// ---------------- Inserting new Element and Creating new variable.

// const newItem = [...restaurant.mainMenu, 'Egg Ramen'];
// console.log(newItem);
// console.log(...newItem); // 1

// const newItem = [...restaurant.mainMenu, 'Alu Paratha', 'Egg Fresh', 'Salmon Fish'];
// console.log(newItem);
// console.log(...newItem); // 2

// const addStart = ['Real Maxi', 'Capacino', 'Fruit Salad', ...restaurant.starterMenu];
// console.log(addStart);
// console.log(...addStart); // 3

// const addCat = ['Fruit Section','Vegetable Section','Fish Section',...restaurant.categories];
// console.log(addCat);
// console.log(...addCat); // 4

// const addingItemAll = ['Chicken Dost','Fried Rice',...restaurant.mainMenu];
// const addCat = [...restaurant.categories,'Fruit','Vegetable','Fish'];
// const addStart = ['Boil Rice','Water Drink',...restaurant.starterMenu];
// console.log(addingItemAll, addCat, addStart);
// console.log(...addingItemAll, ...addCat, ...addStart); // 5

// const addStart = [...restaurant.starterMenu,'Egg Post','Egg Omlet','Egg Boil'];
// console.log(addStart);
// console.log(...addStart); // 5

// const startAdd = ['Fish Fry', 'Fish Boil', 'Fish',...restaurant.starterMenu];
// console.log(startAdd);
// console.log(...startAdd); // 6


// const startAdd = ['Cary Fish','Fry Salmon',...restaurant.starterMenu];
// console.log(startAdd);
// console.log(...startAdd); // 7

// const startAdd = ['Fish Item 1', 'Fish Item 2', ...restaurant.starterMenu,'Fish Item 3','Fish Item 4'];
// console.log(startAdd);
// console.log(...startAdd); // 8

// const startAddMenu = ['Fruit Item 1', 'Fruit Item 2', ...restaurant.starterMenu];
// console.log(startAddMenu);
// console.log(...startAddMenu);

// const startMenu = ['item', 'Item2', 'Item3', ...restaurant.starterMenu, 'Item 4', 'Item 5', 'Item 6'];
// console.log(startMenu);
// console.log(...startMenu); // 9

// const startBuck = ['Coffie 1','Coffe 2', 'Coffe 3', ...restaurant.starterMenu];
// console.log(startBuck);
// console.log(...startBuck); // 10

// Explanation: Add element in object array first declare variable with 'let'
// of 'const'. Then in third bracket add element as many as you want.
// then wirte object name give dot and then array name which are stored in 
// object.

// Example: const variable_name = ['item1', 'item2', 'item3',...objectName.arrayName];

// const catValue = ['Fish Categories', 'Vegetable Categories', 'Egg Categories'];
// console.log(catValue);
// console.log(...catValue); // 11

// const catValue1 = ['catItem1', 'catItem2', 'catItem3', ...restaurant.categories];
// console.log(catValue1);
// console.log(...catValue1); // 12

// const calcium = ['itme','item2','item 3','item4',...restaurant.categories];
// console.log(calcium);
// console.log(...calcium); // 13

// const DureApp = ['time1', 'time2', 'time 3',...restaurant.categories];
// console.log(DureApp);
// console.log(...DureApp); // 14

// const fishCat = ['Fish One', 'Fish Two', 'Fish Three',...restaurant.categories];
// console.log(fishCat);
// console.log(...fishCat); // 15

// const mainMenu = ['Item List', ...restaurant.mainMenu];
// console.log(mainMenu);
// console.log(...mainMenu); // 16

// const mainItem = ['Dosla','Chicken Paratha', 'Egg Omlet',...restaurant.mainMenu];
// console.log(mainItem);
// console.log(...mainItem); // 17

// const mainMenuCat = ['Fried Rice','Chicken Ball',...restaurant.mainMenu];
// console.log(mainMenuCat);
// console.log(...mainMenuCat); // 18

// const mainMen = [...restaurant.mainMenu,'Item1','Item 2'];
// console.log(mainMen);
// console.log(...mainMen); // 19

// const last = ['fish', 'fruit', ...restaurant.mainMenu];
// console.log(last);
// console.log(...last); // 20

// ===>>>>>>>>>>> copying array from one to another array <<<<<<<<<<<<<<<<

// const mainCopy = [...restaurant.mainMenu];
// console.log(mainCopy);
// console.log(...mainCopy); // 1

// const arr = [1,2,3,4,5,6];
// const arrCopy = [...arr];
// console.log(arrCopy);  // 2

// const addItem = [...arrCopy,7, 8, 9];
// console.log(...arr);
// console.log(...addItem);
// console.log(...arrCopy); // 3

// const arr1 = {
//     namee:'md',
//     lasat: 'juwel'
// };

// const obj = {...arr1};
// console.log(obj);
// console.log(...obj.namee); // 4

// const juwel = ['m', 'd'];
// const juwelCopy = [juwel];
// console.log(...juwelCopy); // 5

// const arr = [1, 4, 5];
// const copyArr = [...arr];
// console.log(copyArr);  // 6

// const obj1={
//     name: 'Md Juwel',
//     hobby: 'Coding'
// };
// const copyObj = {...obj1};
// console.log(copyObj);
// const addObj = {...copyObj, favourite:'React.Js'};
// console.log(addObj); // 7

// const myArr = ['md','juwel'];
// const myArrCopy =[...myArr];
// console.log(myArrCopy);
// const addCopy = [...myArrCopy, 3.4, 34, 54];
// console.log(addCopy); // 8

// const copy = [1,2,3,4];
// const copy2 = [...copy];
// console.log(copy2);  // 9

// const main = [1,2,3,5];
// const copy = [...main];
// console.log(copy); // 10

// const main2 = [1,2,3,4,5];
// const main2Copy = [...main2];
// console.log(main2Copy);  // 11

// const main3 = ['j','u','w','e','l'];
// const main3Copy = [...main3];
// console.log(main3Copy);
// console.log(...main3Copy); // 12

// const main4 = [5,4,3,2,1];
// const main4Copy = [...main4];
// console.log(main4Copy); // 13


// const main5 = [12,13,14,15,16];
// const main5Copy = [...main5];
// console.log(main5Copy); // 14

// const main6 = [12, 15, 16, 17];
// console.log(main6);
// const main6Copy = [...main6];
// console.log(main6Copy);
// const addCopy = [...main6, 19, 20, 21, 22];
// console.log(addCopy); // 15

// >>>>>>>>>>>>>>>>> Joining 2 or more than a array <<<<<<<<<<<<<<<<<<

const arr = [1,2,3,4,5,6];
const arr2 = [7,8,9,10,11,12];
const join_Arr = [...arr, ...arr2];
console.log(join_Arr);