// Basic Syntax to write

// const col  = ['red','blue','purple','yellow'];
// const [one, two, three] = col;
// console.log(one);
// console.log(two);
// console.log(three); // 1

// const color = ['red', 'blue', 'green','purple'];
// const [one, two] = color;
// console.log(one, two); // 2

// const number = [1,2,3,4,5,6,7,8,9,10];
// const [one, two, three, four] = number;
// console.log(one, two , three, four); // 3

// const playerName = ['Messi', 'Ronaldo', 'Ozil', 'Roberto', 'Bayern', 'City'];
// const [barca, madrid, madrid2, barca2] = playerName;
// console.log(barca, barca2, madrid, madrid2); // 4

// const playerNumber = [10, 7, 11, 21, 32];
// const [messi, ronaldo, ozil] = playerNumber;
// console.log(messi, ronaldo, ozil); // 5

// const [a, b] = [12, 14, 16, 18];
// console.log(a, b); // 6

// const arr = [2,5,6,'juwel'];
// const [des1, des2, des3, des4] = arr;
// console.log(des1, des2, des3, des4); // 7

// const numberAdd = [1,2,3,4,5,6,7,8,9];
// const [n1, n2] = numberAdd;
// console.log(n1, n2); // 8

// const numberAdd = [3,4,5,6];
// const [a, b, c] = numberAdd;
// console.log(a, b, c); // 9

// const numberAdd = [1,2];
// const [a,b,c,d,e] = numberAdd;
// console.log(a,b,c,d,e); // 10


// const str = ['Juwel','Ahmed','Zubayer'];
// const [firstName, middleName, lastName] = str;
// console.log(firstName, middleName, lastName); // 11 

// const str = ['Barcelona', 'Real Madrid', 'PSG', 'Bayern'];
// const [club1, club2, club3] = str;
// console.log(club1, club2, club3); // 12

// const str = ['Paris', 'Turkey', 'Brazil', 'Argentina'];
// const [c1, c2, c3] = str;
// console.log(c1, c2, c3); // 13

// const pc = ['Hp', 'Dell', 'Apple', 'Asus','Acer'];
// const [pc1, pc2]= pc;
// const [pc3, pc4]= pc;
// console.log(pc1, pc2, pc3, pc4); // 14

// const mobile = ['Samsung', 'Apple', 'Nokia', 'Xiami'];
// const [sam, app, nok]= mobile;
// console.log(sam, app, nok); // 15

// >>>>>>>>>>>>>>>> SEPARATE VARIABLE DECLARATION <<<<<<<<<<<<<<<<<
// let a;
// let b;

// [a, b] = [1,2];
// console.log(a,b); // 1

// let a= 0;
// let b= 0;

// const arr = [1,2,3];
// [a, b] = arr;
// console.log(a,b); // 2

// let a2, b2;
// [a2=5, b2=2] = [1];
// console.log(a2, b2); // 10 times

// const name = ['juwel','md','ahmed'];
// const [a='rakib',b='sakin',c='sajin',d='jubayer'] = name;
// console.log(a, b, c, d); // 1

// const number = [1,2,3,4,5];
// const [a = 2, b = 3, c, d] = number;
// console.log(a, b, c, d); // 2

// const def = ['beer','whisky','drink'];
// const [a = 'mango juice', b = 'soft drinks'] = def;
// console.log(a, b); // 3

// const numberCall = [2,4];
// const [a, b, c=4, d=5] = numberCall;
// console.log(a, b, c, d); // 4

// const num = ['juwel', 'dev', 'all'];
// const [a, b, c, d='football', e ='sccoer'] = num;
// console.log(a, b, c, d, e); // 5

// const str = ['vsCode', 'sublime'];
// const [a, b, c='bracket', d='phpStorm'] = str;
// console.log(a,b,c,d); // 6

// const club = ['Barcelona', 'Real Madrid'];
// const [a, b, c= 'Chelsea', d= 'Dotmund'] = club;
// console.log(a, b, c, d); // 7 

// const number = [1,2,3];
// const [a, b, c, d= 2, f=4, g=4] = number;
// console.log(a,b,c,d,f,g); // 8

// const anime = ['naruto','sasuke'];
// const [a='hinata',b = 'sakura', c = 'Neji']= anime;
// console.log(a, b, c); // 9

// const number = [1,2];
// const [a=1, b=2, c=3, d=4] = number;
// console.log(a,b,c,d); // 10

// const arr = [1,2];
//  [a, b] = arr;
// // console.log(a,b);
// [b,a] = [a, b]
// console.log(b,a);

// function foo(){
//     return [2,5];
// }

// const [a,b] = foo();
// console.log(a, b);

// Ignoring some returned values
// function f(){
//     return [4, 5, 9];
// }
// [a4, ,g] = f();
// console.log(a4, g);

// const[c]= f();
// console.log(c); // 10 times

// const arr = [1,2,3,4,5];
// const [a, , c, , d]=arr;
// console.log(a,c,d); // 1

// const ignore = [1,2,3];
// const [a, ,c] = ignore;
// console.log(a,c); // 2

// const value = ['juwel','ahmed','md'];
// [a, ,c] = value;
// console.log(a, c);

// [c, a] = [a, c];
// console.log(a, c); // 3

// const number = [1,2,3,4,5];
// const [a, , , ,n] = number;
// console.log(a, n); // 4

// const str = ['Md', 'Juwel', 'Ahmed'];
// const [ , a, b]=str;
// console.log(a,b); // 5

// Nesting inside loop
// let arr3 = [2, 4, 5, [10, 13, 14]];
// [a,b, ,[z,r]]=arr3;
// console.log([a, b, [z, r]]); // 

// const arr = [
//     [1,2,3,4,5,6],
//     [7,8,9,10,11],
//     [12,13,14,15]
// ];

// const [[a,b,c],[d,e,f]] =arr;
// console.log(a,b,c,d,e,f); // 1

// const arr = [
//     [1,2,3,4,5,6],
//     [7,8,9,10,11],
//     [12,13,14,15]
// ];
// const [[a,b,c],[d,f],[g,h]] = arr;
// console.log(a,b,c,d,f,g,h); // 2

// const arr = [1,2,3,[4,5],[6,7]];
// [a,b, ,[c,d]] = arr;
// console.log(a,b,c,d); // 3

// const arr = [1,2,3,[4,5,6],[7,8,9],[10,11,12,13]];
// [a,b,c, [e,f],[g,h], [i,j]]= arr;
// console.log(a,b,c,e,f,g,h,i,j); // 4

// const arr = [
//     1,2,3,
//     [4,5,
//         [6,7],
//         [9,10]
//     ],
// ];

// [a,b,c,[d,f,[g],[i]]] = arr;
// console.log(a,b,c,d,f,g,i); // 5

// const oneArray = [1,2,3,[4,5,6]];
// [a,b, ,[c, d]] = oneArray;
// console.log(a,b,c,d); // 6

// const twoArray = [1,2,[3,4],[5,6]];
// [a, ,[b], [c]] = twoArray;
// console.log(a, b, c); // 7

