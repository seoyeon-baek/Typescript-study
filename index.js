var 이름 = "kim";
// object, 사용이 불확실하때에는 ?사용
var 이름2 = { name: "kim" };
// 다양한 타입이 들어오게 하려면 union타입을 사용하여 or 기호인 |을 사용한다.
// 배열이나 오브젝트도 사용 가능함.
var 이름3 = 123;
var 이름4 = "냥냥";
//파라미터 값에 타입 지정도 가능하다 (파라미터도 일종의 변수기때문)
//return 값에도 타입 지정이 가능하다
function 함수(x) {
    return x * 2;
}
함수(123);
var john = [123, true];
var john2 = { name: "kim" };
var john3 = { name: "kim", age: "123" };
//class형은 constructor위에 전역변수를 선언하고 변수에 타입지정
//안전하게 파라미터에도 전역변수에 줬던 타입값을 입력해주는 것이 좋다
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
