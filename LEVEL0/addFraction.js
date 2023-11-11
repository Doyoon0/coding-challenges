/* gcd 함수 생성 */
function fnGCD(a, b){
    return (a%b)? fnGCD(b, a%b) : b;
}

function solution(denum1, numer1, denum2, numer2) {
    let denum = denum1 * numer2 + denum2 * numer1;
    let numer = numer1 * numer2;
    let gcd = fnGCD(denum, numer); //최대공약수

    return [denum/gcd, numer/gcd];
}

/* for문 이용 */
function solution(numer1, denom1, numer2, denom2) {
    const answer = [];
    let numer = (numer1 * denom2) + (numer2 * denom1);
    let denom = denom1 * denom2;
    let gcd = 0;

    // Math.min(a, b) 더 작은 숫자를 반환 
    // 1부터 찾아가는 gcd
    for (let i=1; i<=Math.min(numer, denom); i++) {
        // 분자와 분모를 i로 나누면 최대공약수를 구할 수 있다
        if (numer % i === 0 && denom % i === 0) {
            gcd = i;
        }

    }
    answer.push(numer / gcd);
    answer.push(denom / gcd);

    return answer;
}