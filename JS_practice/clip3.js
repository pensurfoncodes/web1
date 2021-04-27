// console.log('Hello Javascript')
//
// {
//     const name = 'Mark';
//     console.log(name);
// }
//
// let age = 37;
//
// console.log(age);
//
// {
//     age++;
//     console.log(age);
// }
//
// var a = 0;
//
// (function () {
//         a++;
//         console.log(a);
//     })();
//
//     console.log(a);
//
// { var adoy = 37;}
// console.log(adoy);
//
//
//     var c = 0;
// {
//     c++;
//     console.log(c);
// }
//
// { var d =0;
// console.log(d);}
//
// console.log(d);
//
//
//     console.log(name);
//
//     name='Mark';
//
//     console.log(name);
//
//     var name='Renjun';
//
//     let whatever = 'Mark';
//     whatever = 37;
//     whatever = true;
//     // 값에 따라서 변수가 가진 자료형이 달라지는데 이를 동적타이핑이라고 함. dynamic type language
//
// const isTrue = true;
// const isFalse = false;
//
// console.log(isTrue, typeof isTrue);
// console.log(isFalse, typeof isFalse);
//
// const allan = null;
// console.log(allan, typeof allan);
//
//
//
//
//
//
// let b;
// console.log(b, typeof b);
//
// b=undefined;
// console.log(b, typeof b);
//
//
//
// if (allan==b) {
//     console.log(allan==b);
// }
//
// // true가 나옴. 즉 null과 undefined는 == 비교시 같은 것으로 여겨짐.
// // 때문에 ===으로 비교해야함. ===은 값뿐만 아니라 type까지 나오기 때문에 정확하게 비교가 가능함.
//
// if (allan===b) {
//     console.log(allan===b);
// }
//
// const r = Number('Mark');
//
// console.log(r, typeof r);
//
//
// const dr = 'Mark';
// const eam = `${dr} Lee`;
//
// console.log(eam);

if (false) console.log(false);
if (0) console.log(false);
if ('') console.log('');
if (null) console.log(null);
if (undefined) console.log(undefined);
if (NaN) console.log(NaN);

if (true) console.log(true);
if (37) console.log(37);
if (-37) console.log(-37);
if ('Mark') console.log('Mark');
if ({}) console.log({});
if ([]) console.log([]);

let n = 5;
n % 5 === 0 && console.log('5로 나눠 떨어질 때만 실행');
n % 7 === 0 && console.log('5로 나눠 떨어질 때만 실행');
