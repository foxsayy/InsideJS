var a = 100;
var objA = { value: 100 };

function changeArg(num, obj) {
    num = 200;            // #1
    obj.value = 200;      // #2

    console.log(num);
    console.log(obj);
}

changeArg(a, objA);       // #3
// 출력 결과
// 200
// { value: 200 }

console.log(a);
console.log(objA);

// 출력 결과
// 100
// { value: 200 }