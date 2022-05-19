const juwel = {
    firstName: 'Md',
    secondName: 'Juwel',
    education: ['Rahmania School','Kulgaon City Corporation College', 'Port City International University'],
    hobby: ['Anime', 'Football', 'Coding', 'Gaming','Sleeping'],
    football: ['Argentina', 'Barcelona', 'Chelsea', 'Dortmund'],
    web: {
        front: {
            frontend: 'HTML CSS JS ReactJs',
            git: {
                github: 'no need'
            }
        },
        back: {
            backend: 'JS NodeJs ExpressJs'
        },        

        extra: {
            laravel: 'PHP Management'
        },
    }
}

// // Basic Destructing
// const {firstName, secondName, education} = juwel;
// console.log(firstName, secondName, education); 1

// const {secondName, hobby, web} = juwel;
// console.log(secondName, hobby, web); 2

// const {hobby, footabll, web} = juwel;
// console.log(hobby, footabll, web); 3

// const {football} = juwel;
// console.log(football); 4

// const {hobby, football, web} = juwel;
// console.log(hobby, football, web); 5

// const {hobby, football, web, firstName, secondName, education} = juwel;
// console.log(hobby, football, web, firstName, secondName, education); 6

// const {football, firstName, secondName} = juwel;
// console.log(football, firstName, secondName); 7

// const {firstName, secondName} = juwel;
// console.log(firstName, secondName); 8

// const {education, hobby} = juwel;
// console.log(education, hobby); 9

// const {football, web} = juwel;
// console.log(football, web); 10

// const {web, hobby, firstName} = juwel;
// console.log(web, hobby, firstName); 11

// const {web: {front}, hobby, firstName} = juwel;
// console.log(front, hobby, firstName); 12

// const {back, front, extra} = juwel.web;
// console.log(front, back, extra); 13

// const{ back: {backend}, front:{frontend}} = juwel.web;
// console.log(frontend, backend); 14

// const {web} = juwel;
// console.log(web); 14.1

// const {web: {front}} = juwel;
// console.log(front); 14.2

// const {web: {front: {frontend}}} = juwel;
// console.log(frontend); 14.3

// const {web: {front: {git}}} = juwel;
// console.log(git); 14.4

// const {front: {git: {github}}} = juwel.web;
// console.log(github); 15

// const {git: {github}} = juwel.web.front;
// console.log(github); 16

// const {web, hobby, football} = juwel;
// console.log(web, hobby, football); 17

// const {firstName, secondName, football} = juwel;
// console.log(firstName, secondName, football); 18

// const {hobby, football, firstName} = juwel;
// console.log(hobby, football, firstName); 19

// const {web :{front: {git}}, hobby, football} = juwel;
// console.log(git, hobby, football); 20

// const {firstName, secondName, education} = juwel;
// console.log(firstName, secondName, education); 21

// const {hobby, web: {back: {backend}, extra: {laravel}}} = juwel;
// console.log(hobby, backend, laravel); 22

// const {education, web: {back: {backend}, extra: {laravel}, front: {git: {github}}}, football} = juwel;
// console.log(education, backend, laravel, github, football); 23

// const {education, hobby, football} = juwel;
// console.log(education, hobby, football); 24

// const {hobby, web, football} = juwel;
// console.log(hobby, football, web); 25

// const {web} = juwel;
// console.log(web); 26

// const {web: {front: {git}}, hobby} = juwel;
// console.log(hobby, git); 27 

// const {football, hobby, web} = juwel;
// console.log(football, hobby, web); 28 

// const {firstName, secondName, education} = juwel;
// console.log(firstName, secondName, education); 29

// const {firstName, secondName, education, hobby, football, web} = juwel;
// console.log(firstName, secondName, education, hobby, football, web); 30


// const {football: ball, secondName: lastName, education: learn} = juwel
// console.log(ball, lastName, learn); 1

// const {hobby: hob, football: foot, web: we} = juwel;
// console.log(hob, foot, we); 2

// const {firstName: first, education: edu, football: foot}=juwel;
// console.log(first, edu, foot); 3

// const {web: fro, firstName: fn, secondName: sn} = juwel;
// console.log(fro, fn, sn); 4

// const {
//     firstName: first, 
//     secondName:last, 
//     education: edu, 
//     hobby: hob, 
//     football: foot, 
//     web: we
// }=juwel;

// console.log(
//     first,
//     last,
//     edu,
//     hob,
//     foot,
//     we
// ); 5

// const {firstName: Fn, secondName: SN} = juwel;
// console.log(Fn, SN); 5

// const {web: {front: {frontend: fg}}} =juwel;
// console.log(fg); 6

// const {secondName: me, hobby: hob} = juwel;
// console.log(me, hob); 7

// const {football: club, secondName: sn} = juwel;
// console.log(club, sn); 8

// const {firstName: fn, secondName: sn, education: ed} = juwel;
// console.log(fn, sn, ed); 9

// const {
//     hobby: hob,
//     football: foot,
//     web: we
// } = juwel;


// console.log(hob, foot, we);  10


// const {
//     web: {
//         front: {
//             git:{
//                 github: gb
//             }
//         }
//     }
// } = juwel;

// console.log(gb); 11

// const {
//     football: foot,
//     hobby: hobb
// } = juwel;
// console.log(foot, hobb); 12

// const {
//     education: edu,
//     firstName: fn 
// } = juwel;

// console.log(edu, fn) 13

// const {
//     firstName: first,
//     secondName: second,
//     education: edu, 
//     hobby: hob,
//     football: ball,
//     web: {
//         front: {
//             git: {
//                 github: gb
//             }
//         }
//     }
// } = juwel;

// console.log(first, second, edu, hob, ball, gb); 14

// const {
//     firstName: first,
//     secondName: second,
//     education: edu,
//     hobby: hobi, 
//     football: foot,
//     web: {
//         back: {
//             backend: backto
//         }
//     }
// } = juwel;

// console.log(first, second, edu, hobi, foot, backto); 15


// const {
//     firstName: fn,
//     web: wb,
//     secondName: sn,
//     football: foot,
//     education: edu,
//     hobby: hobi
// } = juwel;

// console.log(fn, wb, sn, foot, edu, hobi); 16

// const {
//     web: {
//         extra: {
//             laravel: lr
//         }
//     }
// } = juwel;

// console.log(lr); 17

// const {
//     secondName: sn,
//     education: edc,
//     hobby: hoby 
// } = juwel;
// console.log(sn, edc, hoby); 18

// const {
//     web: {
//         front: {
//             frontend: fd
//         },
//         back:{
//             backend: bk
//         },
//         extra: {
//             laravel: ls
//         }
//     },

//     football: foot
// } = juwel;

// console.log(fd, bk, ls, foot); =19

// const {
//     firstName: fn,
//     secondName: sn, 
//     education: edu,
//     hobby: hoby,
//     football: foot,
//     web: {
//         front: {
//             frontend: fd,
//             git: {
//                 github: gb,
//             }
//         },
//         back: {
//             backend: bk
//         },
//         extra: {
//             laravel: lv
//         }
//     }
//  } = juwel;


//  console.log(fn, sn, edu, hoby, foot, fd, gb, bk, lv); 20

// Assigning default value

// const {
//     firstName = [],
//     secondName = [],
//     hobby = []
// } = juwel;

// console.log(firstName, secondName, hobby); // 1


// const {
//     secondName = [],
//     web = [],
//     hobby = 'md juwe'
// } = juwel;

// console.log(secondName, web, hobby); // 2

// const {
//     football = [],
//     web: []
// } = juwel;
// console.log(football, web) // 3

// const {
//     firstName = [],
//     secondName = [],
//     education = [],
//     hobby = [],
//     football = [],
//     web = []
// } = juwel;

// console.log(firstName, secondName, education, hobby, football, web); // 4

// const {
//     firstName = [],
//     secondName = []
// } = juwel;

// console.log(firstName, secondName); // 5

// const {
//     education = [],
//     hobby = []
// } = juwel;

// console.log(education, hobby); // 6

// const {
//     football = [],
//     web = []
// } = juwel;

// console.log(football, web); // 7
 
// const {
//     firstName = [],
//     secondName = [],
//     education = []
// } = juwel;

// console.log(firstName, secondName, education); // 8


// const {
//     firstName = [],
//     secondName = [],
//     education = [],
//     hobby = []
// } = juwel;

// console.log(firstName, secondName, education, hobby); // 9
 
// const {
//     firstName = [],
//     secondName =[],
//     education = [],
//     hobby = [],
//     football = [],
//     web = []
// } = juwel;

// console.log(firstName, secondName, education, hobby, football, web); //10

// Mutating Variables

// let a = 111;
// let b = 333;

// const obj = {
//     a: 23,
//     b: 33, 
//     c: 44
// };
// ({a,b,c} = obj)
// console.log(a, b, c); // 1

// let a = 333;
// let b = 444;

// const obj = {
//     a: 33,
//     b: 22,
//     c: 34,
//     d: 53
// };

// ({a, b, c, d} = obj);
// console.log(a, b, c, d); // 2

// let a = 22;
// let b = 33;
// let c = 'juwel';

// const obj = {
//     a: 33,
//     b: 45,
//     c: 'Juwle Ahmed',
//     d: 49
// };

// ({a, b, c, d} = obj);
// console.log(a, b, c, d); // 3

// let a = 100;
// let b = 200;
// let c = 300;
// let d = 'Barcelona';

// const obj = {
//     a: 101,
//     b: 201,
//     c: 301,
//     d: 'Fc Barcelona'
// };

// ({a, b, c, d} = obj);
// console.log(a, b, c, d); // 4

// let a = 500;
// let b = 600;
// let c = 700;
// let d = 800;
// let e = 900;
// let f = 1000;

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5,
//     f: 6
// };
// ({a, b, c, d, e, f} = obj);
// console.log(a, b, c, d, e, f); // 5

// let aa = 100;
// let bb = 300;
// let cc = 500;

// const obj = {
//     aa: 'Zubaiyer',
//     bb: 'Al',
//     cc: 'Juwel'
// };
// ({aa, bb, cc} = obj);
// console.log(aa, bb, cc); // 6


// let a = "Zubaiyer";
// let b = "Al";
// let c = "Juwel";

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// ({a, b, c} = obj);
// console.log(a, b, c); // 7

// let a = 32;
// let b = "Juwel";
// let c = 11;

// const obj = {
//     a: 'Md Juwel',
//     b: 382,
//     c: 'CSE'
// };
// ({a, b, c} = obj);
// console.log(a, b, c); // 8

// let mobile = 'Real Me Narzo';
// let desktop = 'Rayzen 3';

// const details = {
//     mobile: 'I phone-x',
//     desktop: 'Rayzen-7',
//     bank: 'No Bank Account at this moment'
// };

// ({mobile, desktop, bank} = details);
// console.log(mobile, desktop, bank); // 9

// let last = "Naruto";
// let first = "Namikaze";
// let middle = "Boruto";

// const anime = {
//     last: "Boruto",
//     first: "Namikaze",
//     middle: "Naruto"
// };

// ({last, first, middle} = anime);
// console.log(last, first, middle); // 10

// ---------------Nested Object (Destructing Object in Object)

// const {front, back, extra} = juwel.web;
// console.log(front, back, extra); // 1

// const {
//     web : 
//     {
//         front, back, extra
//     }
// } = juwel;
// console.log(front, back, extra); // 2

// const {
//     web: {
//         front: {
//             git: {
//                 github
//             }
//         }
//     }
// } = juwel;
// console.log(github); // 3

// const {
//     web: {
//         back: {
//             backend
//         }
//     }
// } = juwel;

// console.log(backend); // 4

// const {
//     web: {
//         extra: {
//             laravel
//         }
//     }
// } = juwel;

// console.log(laravel); //5


// const {
//     web: {
//         front: {
//             frontend,
//             git: {
//                 github
//             }
//         },
//         back: {
//             backend
//         },
//         extra: {
//             laravel
//         }
//     }
// } = juwel;

// console.log(frontend, github, backend, laravel); // 6

// const {
//     front:{
//         git:{
//             github
//         }
//     }
// } = juwel.web;

// console.log(github)  // 7

const {
    back:{
        backend
    },
    extra:{
        laravel
    }
} = juwel.web;

console.log(backend, laravel);





