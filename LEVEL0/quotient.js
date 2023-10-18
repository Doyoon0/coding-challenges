/*방법 1*/
function solution(num1, num2) {
    var answer = Math.trunc(num1/num2);
    return answer;
}

/*방법 2*/
const solution = (num1, num2) => Math.trunc(num1/num2)

/*방법 3
'<<0'는 결과를 정수로 형변환 시켜줌*/
function solution(num1, num2) {
    return (num1 / num2) <<0;
}

/*방법 4
틸트 연산자 중 하나. 부동 소수점을 정수로 변환해줌*/
function solution(num1, num2) {
    return ~~(num1/num2);
}