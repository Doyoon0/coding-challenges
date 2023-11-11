/* for문 이용 */
function solution(numbers) {
    var answer = [];
    for(i=0; i<numbers.length; i++) {
     answer.push(parseInt(numbers[i]) * 2);   
    }
    return answer;
}

/* map 사용 (1) */
// 배열의 각 요소에 대해 새로운 배열을 생성하고,
// 각 요소를 두 배로 만든 결과를 반환합니다.
function solution(arr) {
    return arr.map(function(element) {
        return element * 2;
    });
}

/* map 사용 (2) */
const solution = (numbers) => numbers.map((number) => number * 2)

/* reduce 사용 */
function solution(numbers) {
    return numbers.reduce((a, b) => [...a, b * 2], []);
}