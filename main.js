/******************
 * YOUR CODE HERE *
 ******************/
function slice(str, num1, num2){
  let x = ''
  if (num1===undefined && num2===undefined){
    return str
  }
  else if (num1>str.length-1){
    return ''
  }
  else if (num1!==undefined && num2===undefined){
    for (let i=num1; i<str.length; i++){
      x += str[i]
    }
    return x
  }
  else if (num1!==undefined && num2!==undefined){
    for (let i=num1; i<num2; i++){
      x += str[i]
    }
    return x
  }
}

function repeat(str, num){
  let x=''
  if (num===0){
    return ''
  }
  else {
    for (let i=1; i<=num; i++){
      x += str
    }
    return x
  }
}

function startsWith(str1, str2){
  return slice(str1, 0, str2.length)===str2 ? true : false
}

function endsWith(str1, str2){
  return slice(str1, str1.length-str2.length, str1.length)===str2 ? true : false
}

function includes(arr, item){
  for (let i=0; i<arr.length; i++){
    if (arr[i]===item){
      return true
      }
  }
  return false
}

function join(arr, sep){
  let x=''
  if (sep===undefined){
    for (let i=0; i<arr.length; i++){
      x += arr[i]
    }
    return x
  }
  else {
    for (let i=0; i<arr.length; i++){
      if (i===arr.length-1){
        x += arr[i]
      }
      else {
        x += arr[i] + sep
      }
    }
    return x
  }
}

function split(str, sep){
const w = []
let x = ''
let y = ''
if (sep===undefined){
  w.push(str)
  return w
}
else {
  for (let a=0; a<str.length; a++){
    x += str[a]
    if (includes(x, sep)){
      for (b=0; b<x.length-1; b++){
        y = slice(x, 0, x.length-1)
      }
      w.push(y)
      x =''
    }
    else if (endsWith(str, x)){
      for (b=0; b<x.length-1; b++){
        y = slice(x, 0, x.length)
      }
      w.push(y)
      x =''
    }
  }
  return w
}
}

function trimStart(str){
  let x = ''
  for (i=0; i<str.length; i++){
    x += str[i]
    if (startsWith(x, ' ')){
      x = slice(x, 1, x.length)
    }
  }
  return x
}

function trimEnd(str){
  let x = str
  for (i=str.length-1; i>=0; i--){
    if (endsWith(x, ' ')){
      x = slice(x, 0, x.length-1)
    }
  }
  return x
}



/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof slice === 'undefined') {
  slice = undefined;
}

if (typeof repeat === 'undefined') {
  repeat = undefined;
}

if (typeof startsWith === 'undefined') {
  startsWith = undefined;
}

if (typeof endsWith === 'undefined') {
  endsWith = undefined;
}

if (typeof includes === 'undefined') {
  includes = undefined;
}

if (typeof join === 'undefined') {
  join = undefined;
}

if (typeof split === 'undefined') {
  split = undefined;
}

if (typeof trimStart === 'undefined') {
  trimStart = undefined;
}

if (typeof trimEnd === 'undefined') {
  trimEnd = undefined;
}



module.exports = {
  slice,
  repeat,
  startsWith,
  endsWith,
  includes,
  join,
  split,
  trimStart,
  trimEnd,
}
