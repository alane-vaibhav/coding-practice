let min = 7;
let max = 19;

let output = Math.floor(Math.random() * (max - min + 1) + min);
console.log(
  Math.floor(Math.random() * (max - min + 1) + min),
  Math.random() * 20
);


JS tasks on real scenarios
﻿Reverse string: 'Vaibhav Alane'

a. Using method:-

	str.split('').reverse().join(‘’)

b. Using for loop:-

   let out='';
   for(let i=str.length-1; i>=0; i--){
     out+=str[i]
   }
   console.log(out);

c. Using for in array:-

   let out = [];
   let arr = str.split('');
   for (let i = arr.length - 1; i >= 0; i--) {
     out.push(arr[i]);
     arr.pop(i).join;
   }
   console.log(out.join(''));

d. Using reduce

   const out=str.split('').reduce((acc, num)=>`${num}${acc}`)
  console.log(out)

========================================================================


String matches

let text = 'The rain in SPAIN stays mainly in the plain';

console.log(text.match('rain'))
console.log(text.match(/main/))
console.log(text.match(/the/gi))

========================================================================


let text = 'a';
console.log(text.padStart(4,"0"));---000a

console.log(text.padEnd(4,"x"));—axxx

========================================================================

Q.
let obj = {};
for (let i = 0; i < arr.length - 1; i++) {
  const first = arr[i][0];
  if(!obj[first]){
    obj[first]=[]
  }
    obj[first].push(arr[i])

}
console.log(obj);


let obj={};

arr.forEach((item)=>{
    let first=item[0];
    console.log(first);
    obj[first]=obj[first] || []
  obj[first].push(item)

})
console.log(obj);



const first=str.slice(0,1).toUpperCase()+str.slice(1)
const sec=str.substring(0,1).toUpperCase()+str.substring(1)
console.log(sec)

const thir=str.replace(/^./, char=>char.toUpperCase())

console.log(str.split(','))

Q.divide string in elements which incliudes ,

let arr = [];
let first = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === ',') {
    arr.push(str.slice(first, i));
    first = i + 1;
  }
}
arr.push(str.slice(first))

console.log(arr);

const a = str.split('').reduce(
  (char, acc) => {
    if (acc === ',') {
      char.push('');
    } else {
      char[char.length - 1] += acc;
    }
    return char;
  },
  ['']
);
console.log(a);

const s = "apple,banana,cherry,";
const a = s.split(",").filter(item => item !== "");
console.log(a);


==============================================================

remove extra spaces from string

const str = ' Va ib  ha     v A lan e';

console.log(str.charAt(str.length - 1));
console.log(str.substring(str.length - 1));
console.log(str.slice(str.length - 1));
console.log(str.replace(/\s+/g, ' '));

let s = '';
let space = false;
for (let char of str) {
  if (char === ' ') {
    if (!space) {
      s += char;
      space = true;
    }
  } else {
    s += char;
    space = false;
  }
}
console.log(s.length);

==============================================================

number of occcurance of word in string

console.log(str.match(/vaibhav/g).length);
console.log(str.split('vaibhav').length-1);

const s1 = 'hello world, hello JavaScript!';
const s2 = 'hello';
let count = 0;
let temp = s1;

while (temp.includes(s2)) {
  count++;
  temp = temp.slice(temp.indexOf(s2) + s2.length);
  console.log(temp)
}
console.log(count);


const out = str
  .split(' ')
  .reduce((acc, num) => (num === word ? acc + 1 : acc), 0);

console.log(out);

===============================================================
Q.Occurances of letter in string:-

let str = 'VAibhav alane patil';

 const obj = {};

for (let i of str) {
  obj[i] = (obj[i] || 0) + 1;
}
console.log(obj);

str.split('').forEach((item) => {
  obj[item] = (obj[item] || 0) + 1;
});

console.log(obj)

================================================================

Q. Vowels in string?

const str = 'dlhblbskiibsdbdhbdbdbuakdbkj kbdb dkbdjkbdkjbsnlnohebjdk dnjdb';
let vowels = ['a', 'e', 'i', 'o', 'u'];
let out = str.split('').filter((i) => {
  return vowels.includes(i);
});
console.log(out);

let arr = [];
for (let i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
    arr.push(str[i]);
  }
}
console.log(arr);

let newa = [];
for (let i of str) {
  if (vowels.includes(i)) {
    newa.push(i);
  }
}
console.log(newa);

let ou = str.match(/[aeiou]/gi);
console.log('ou', ou);

let ppp = str
  .split('')
  .reduce(
    (count, char) => (vowels.indexOf(char) !== -1 ? count + 1 : count),
    0
  );

console.log(ppp);

=================================================================

Q.replace letter:-

let str = 'dhbdb/dkjdbjbd/djbdbd/';

let out = str.replaceAll('/', 'AA');
console.log(out);

let o = str.replace(/[/]/gi, 'xxx');
console.log(o);

console.log(str.split('/').join('uuuu'));

const nam = str.split('').reduce((acc, curr) => acc+(curr === '/' ? '-' : curr))
console.log(nam);

=====================================================================

Q unique element from string

let str = 'vaibhavalane';

let out = str
  .split('')
  .filter((item, index, arr) => arr.indexOf(item) === arr.lastIndexOf(item));
console.log(out);

let stri = '';

for (let char of str) {
  if (!stri.includes(char)) {
    stri += char;
  }
}
console.log(stri);

let count = {};
let arr = [];

for (let el of str) {
  count[el] = (count[el] || 0) + 1;
}
console.log(count);

for (let ch of str) {
  if (count[ch] === 1) arr.push(ch);
}
console.log(arr)

=====================================================================
Q. Filter number or letter:-

let str = '1a2b3c';

let out = str.replace(/[1-3]/g, '');
console.log(out);

let ou = str.replace(/\d/g, 'j');
console.log(ou);

let outs = [...str].filter((item) => isNaN(item) && item !== '');
console.log(outs);

let fix = [...str].reduce((curr, acc) => {
  return isNaN(acc) && acc !== '' ? curr + acc : curr;
}, '');
console.log(fix);

let fff = '';
str.split('').forEach((item) => {
  if (isNaN(item) && item !== '') {
    fff += item;
  }
});
console.log('newfix', fff);

=====================================================================
Q. count number of number?

let str = 'abc123jb6jf3';

let count = 0;

for (let ch of str) {
  if (!isNaN(ch) && ch !== '') {
    count++;
  }
}
console.log(count);

let final = str.split('').reduce((curr, acc) => {
  return !isNaN(acc) && acc !== '' ? curr + 1 : curr;
}, 0);

console.log(final)

=====================================================================

Q. Occurance of element

let str = 'abbccc';
let obj = {};
for (let i of str) {
  obj[i] = (obj[i] || 0) + 1;
}

console.log(obj);

let aa = str.match(/[a-z]/g).reduce((curr, acc) => {
  curr[acc] = (curr[acc] || 0) + 1;
  return curr;
}, {});
console.log(aa);

=====================================================================

 let str = 'texxet';

let out = str.split('').reverse().join('');
console.log(out == str)('hello wo', 'o', 'a');

const findAndReplace = (a, b, c) => {
  let arr = a.split('');
  let str = '';
  for (let i of arr) {
    if (i === b) {
      str += c;
    } else {
      str += i;
    }
  }
  return str;
};
let fjbdbjbd=findAndReplace('jayho', 'j', 'u');
console.log(fjbdbjbd)

let str = 'aaa23bbb6z555';
console.log(str.match(/\d+/g).map(Number));
output = [23, 6, 555];

let temp = '';
let arr = [];

for (let i of str) {
  if (!isNaN(i) && i !== '') {
    temp += i;
    console.log('temp', temp);
  }
  else if (temp) {
    console.log('temp2', temp);
    arr.push(Number(temp));
    temp = '';
  }
}
if (temp) arr.push(Number(temp));
console.log(arr);

let str = 'vvvaaabbbiii';

console.log(str.replace(/(.)\1+/g, ''));
let newh = '';

for (let i = 0; i < str.length; i++) {
  if (str[i] !== str[i + 1]) {
    newh += str[i];
  }
}
console.log(newh);


=====================================================================

function longestUniqueSubstring(s) {
  let currentSubstring = "", maxSubstring = "";

  for (const char of s) {
      let index = currentSubstring.indexOf(char);
      if (index !== -1) {
          currentSubstring = currentSubstring.slice(index + 1);
      }
      currentSubstring += char;
      if (currentSubstring.length > maxSubstring.length) {
          maxSubstring = currentSubstring;
      }
  }

  return maxSubstring;
}

console.log(longestUniqueSubstring("Vaibhav Alane"));

==========================================================

// let str = 'Vaibhav Alane';

// let neeSt = '';
// for (let i of str) {
//   if (!neeSt.includes(i)) {
//     neeSt += i;
//   }
// }
// console.log(neeSt);

let str = 'vaibhav Alane';
let charCount = {};
let duplicates = [];

for (let char of str) {
  if (char !== ' ') {
    if (charCount[char]) {
      if (!duplicates.includes(char)) {
        duplicates.push(char);
      }
    }else{
      charCount[char]=1
    }
  }
}
console.log(duplicates)


===============================================================

Find largest and smallest number of

function getBiggestNumberInArrays(numbers1, numbers2) {
  let merge = numbers1.concat(numbers2);
  let output = merge.reduce((acc, curr) => (acc > curr ? acc : curr), 0);
  console.log(output);
  return output;
}
getBiggestNumberInArrays([1, 9, 3], [14, 5, 6]);

function getBiggestNumberInArrays(numbers1, numbers2) {
  let merge = numbers1.concat(numbers2);
  let current = 0;
  for (let i of merge) {
    if (i >= current) {
      current = i;
    }
  }
  return current;
}
const output = getBiggestNumberInArrays([101, 19, 3], [14, 5, 116]);
console.log(output);


================================================================

TOdo App:-

import { useCallback, useMemo, useState } from "react";
import "./styles.css";

export default function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const handleAdd = () => {
    setList([...list, task]);
    setTask("");
  };

  const handleDelete = ( itemToDelete ) => {
    const updatedList = [...list];
    updatedList.splice(itemToDelete, 1);
    setList(updatedList);
  };
  return (
    <div className="App">
      <div style={{ margin: 20 }}>To do app</div>

      <div style={{ margin: "20px" }}>
        <input
          type="text"
          placeholder="Enter item..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button style={{ marginLeft: "10px" }} onClick={handleAdd}>
          Add Item
        </button>
      </div>
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          rowGap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {list.map((item, index) => {
          return (
            <div key={index}>
              <div style={{ marginRight: "20px" }}>{item}</div>
              <button onClick={() => handleDelete(index)}>Delete Task</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}


=========================================================================

export default function App() {
  const [timer, setTimer] = useState({ hr: 0, min: 0, sec: 0, mili: 0 });
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState();

  let updatehr = 0;
  let updatemin = 0;
  let updatesec = 0;
  let updatemili = 0;

  const handleStart = () => {
    myFun();
    setStatus(setInterval(myFun, 10));
  };
  const handlePause = () => {
    clearInterval(status);
  };
  const handleReset = () => {};

  const myFun = () => {
    if (updatemili == 100) {
      updatemili = 0;
      updatesec++;
    }
    if (updatesec == 60) {
      updatesec = 0;
      updatemin++;
    }
    if (updatemin == 60) {
      updatemin = 0;
      updatehr++;
    }
    updatemili++;
    return setTimer({
      hr: updatehr,
      min: updatemin,
      sec: updatesec,
      mili: updatemili,
    });
  };

  return (
    <div className="App">
      <h1>{timer.hr + ":" + timer.min + ":" + timer.sec + ":" + timer.mili}</h1>

      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}




export default function App() {
  const [timer, setTimer] = useState(0);
  const [status, setStatus] = useState();

  let updatedTimer = 0;

  let myFun = () => {
    updatedTimer++;
    return setTimer(updatedTimer);
  };

  const handleStart = () => {
    myFun();
    setStatus(setInterval(myFun, 1000));
  };
  const handlePause = () => {
    clearInterval(status);
  };
  const handleReset = () => {
    setTimer(0);
    clearInterval(status);
  };

  return (
    <div className="App">
      <h1>{timer}</h1>

      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}


=================================================================

let str = '';
for (let i = 1; i <= 10; i++) {
  str = str + i + '';
  console.log(str);
}

for (let i = 1; i <= 10; i++) {
  let str = '';
  for (let j = 1; j <= 11 - i; j++) {
    str = str + j + '';
  }
  console.log(str);
}

for (let i = 1; i <= 10; i++) {
  let str = '';
  for (let j = 0 + i; j <= 11 - i; j++) {
    str = '' + +str + j + '';
  }
  console.log(str);
}
