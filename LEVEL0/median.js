/* 내 풀이 */
function solution(array) {
    var i = array.length;
    
    // 숫자 배열을 오름차순으로 정렬
    array.sort(function(a, b) {
        return a - b;
    });
    
    // 중앙 인덱스 계산
    var middleIndex = Math.floor(i / 2);

    var answer = array[middleIndex]; // 중앙값 가져오기
    return answer;
}

/* 함수 선언문 사용하여 함수 정의 */
function solution(array) {
    return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}

/* 화살표 함수 사용하여 함수 정의, 메서드 체이닝 */
const solution = (array) =>
    array
        .sort((a, b) => a - b)
        .at(Math.floor(array.length / 2));


// 특정 인덱스에 있는 요소를 가져오는 메서드입니다. 아래 예시.
var arr = [1, 2, 3, 4, 5];

var result1 = arr.at(0); // 첫 번째 요소인 1을 반환
var result2 = arr.at(2); // 세 번째 요소인 3을 반환
        