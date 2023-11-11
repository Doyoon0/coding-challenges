/* 내 풀이 */
function solution(n) {
    var answer = [];
    for (i = 0; i < n + 1; i++) {
        if (i % 2 != 0) {
            answer.push(i);
        }
    }
    return answer;
}

/* i += 2를 이용 */
function solution(n) {
    var answer = [];

    for (let i = 1; i <= n; i += 2) answer.push(i)

    return answer;
}
