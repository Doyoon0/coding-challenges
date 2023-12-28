function solution(array) {
    // 단계 1: 각 요소의 빈도를 세기 위해 Map을 사용하여 reduce를 실행합니다.
    const answer = [...array.reduce((acc, cur) => {
        acc.set(cur, acc.get(cur) ? acc.get(cur) + 1 : 1);
        return acc;
    }, new Map())]

    // 단계 2: 빈도를 내림차순으로 정렬합니다.
    .sort((a, b) => b[1] - a[1]);

    // 단계 3: 적어도 두 개의 요소가 다른 빈도를 가지고 있는지 확인합니다.
    if (answer.length >= 2) {
        // 가장 빈도가 높은 두 값을 출력합니다.
        console.log(answer[0][1], answer[1][1]);

        // 단계 4: 가장 빈도가 높은 두 값이 동일한지 확인합니다.
        if (answer[0][1] === answer[1][1]) 
            // 동일하면 -1을 반환하여 고유한 최빈값이 없음을 나타냅니다.
            return -1;
        else
            // 동일하지 않으면 가장 빈도가 높은 요소를 반환합니다.
            return answer[0][0];
    }
    // 단계 5: 배열에 하나의 요소만 있는 경우 해당 값을 반환합니다.
    else
        return answer[0][0];
}
