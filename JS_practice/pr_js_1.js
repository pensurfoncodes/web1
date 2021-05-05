// 생성자 함수를 이용하여 새로운 객체를 만들어내는 방법
function Person(name, age) {
    console.log(this);
    this.name = name;
    this.age = age;
}

const p = new Person('Mark', 37);

console.log(p, p.name, p.age)

const a = new Person('Anna', 26);

console.log(a, a.name, a.age);

// const Cat = (name) => {
//     console.log(this)
//     this.name = name;
//     this.age = age;
// }

// const c = new Cat('냥이', 1);

// this가 없어서 출력 오류

// 생성자 함수는 무조건 function 키워드를 이용한 함수임을 명심!



// 함수 안에서 함수를 만들어 리턴
// 안 함수의 인수는 두번째 입력되는 인수와 대응

function plus(base) {
    return function(num) {
        return base * num;
    };
}

const plus5 = plus(5);
console.log(plus5(10));

const plus7 = plus(7);
console.log(plus7(8));

// 함수를 인자로 하여 함수를 호출
function hello(c) {
    c();
    console.log('hello');
}
hello(function() {
    console.log('콜백')
});