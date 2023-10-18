/*방법 1*/
function solution(num1, num2) {
    var answer = Math.trunc(num/num2 * 1000);
    return answer;
}

/*방법 2*/
const solution = (num1, num2) => Math.trunc(num1/num2 * 1000);