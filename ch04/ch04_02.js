// add() 함수 표현식
var add = function(x, y) {
    return x + y:
};                       // add 변수는 함수를 참조하는 변수지 함수 이름이 아니다.(함수 변수라 부르자)

var plus = add;     // 함수 변수 add는 함수의 참조값을 가지므로 또 다른 변수 plus에 할당 가능
                    // 때문에 아래에서 코드가 제대로 수행됨

console.log(add(3,4)); // 7
console.log(plus(5,6)); // 11