/* 일반함수 */
function solution(num1, num2) {
    var answer = 0;
    if (num1 == num2) {
        answer = 1;
    } else {
        answer = -1;
    }
    return answer;
}

/* 삼항연산자 이용 함수 */
function solution(num1, num2) {
    var answer = num1 === num2 ? 1 : -1;
    return answer;
}