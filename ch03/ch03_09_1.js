// 객체를 리터럴 방식으로 생성함
// 아래에서 objA 변수는 객체 자체를 저장하고 있는 것이 아니라
// 생성된 객체를 가리키는 참조값을 저장하고 있다
var objA = {
    val : 40
};

// 변수 objB에 objA 값을 할당한다
// objA는 위에서 생성된 객체를 가리키는 참조값을 가지고 있으므로
// 변수 objB에도 이같은 객체의 참조값이 저장된다
// 즉, objA와 objB 변수가 동일한 객체를 가리키는 참조값을 가지게 된다
var objB = objA;
console.log(objA.val); // 40
console.log(objB.val); // 40

// 변수 objB의 객체의 val 값을 40에서 50으로 갱신하면
// objA도 동일한 객체를 참조하므로 a.val이 50이 된다
objB.val = 50;
console.log(objA.val); // 50
console.log(objB.val); // 50