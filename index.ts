let 이름: string = "kim";

// object, 사용이 불확실하때에는 ?사용
let 이름2: {name?: string} = {name: "kim"};

// 다양한 타입이 들어오게 하려면 union타입을 사용하여 or 기호인 |을 사용한다.
// 배열이나 오브젝트도 사용 가능함.
let 이름3: string[] | number = 123;

//type을 통해 타입을 변수에 저장하여 사용할 수 있다.
//대부분 변수명을 대문자로 시작하여 일반 변수들과 차별화를 해둔다.
type 타입지정 = string | {type: number};
let 이름4: 타입지정 = "냥냥";

//파라미터 값에 타입 지정도 가능하다 (파라미터도 일종의 변수기때문)
//return 값에도 타입 지정이 가능하다
function 함수(x: number): number {
  return x * 2;
}
함수(123);

//array에 쓸 수 있는 tuple type
// 배열의 안쪽에다가 타입을 지정해서 사용한다.
type Member = [number, boolean];
let john: Member = [123, true];

// object에 타입지정해야할 속성들이 너무 많을 때 사용
type Member2 = {
  name: string;
};
let john2: Member2 = {name: "kim"};

// object의 모든 속성에 타입을 줘야할 때
// 글자들은 모두 string타입임을 명칭
type Member3 = {
  [key: string]: string;
};
let john3: Member3 = {name: "kim", age: "123"};

//class형은 constructor위에 전역변수를 선언하고 변수에 타입지정
//안전하게 파라미터에도 전역변수에 줬던 타입값을 입력해주는 것이 좋다
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
