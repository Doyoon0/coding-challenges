
import java.util.Arrays;

/*
 * 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
 *  numbers	                            result
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]	    5.5
 */
class stream {
    public double solution(int[] numbers) {
        return Arrays.stream(numbers).average().orElse(0);
    }
}

/*
Stream API는 데이터를 가공하고 처리하는 강력한 도구로, 여러 기능들을 활용하여 데이터에 대한 다양한 연산을 수행할 수 있습니다. 기본적으로 Stream API를 통해 데이터를 효율적이고 직관적으로 다룰 수 있습니다. 이를 좀 더 구체적으로 설명하자면:
=========================================================================================================================
1. Stream API의 주요 기능
데이터 변환: 스트림의 각 요소를 다른 형태로 변환할 수 있습니다. 예를 들어, 문자열 배열의 각 요소를 대문자로 변환하거나, 숫자의 제곱을 계산하는 작업을 할 수 있습니다.

List<String> words = Arrays.asList("hello", "world", "java");
List<String> upperCaseWords = words.stream()
                                   .map(String::toUpperCase)
                                   .collect(Collectors.toList());

=========================================================================================================================
필터링: 스트림에서 조건에 맞는 요소만 추출할 수 있습니다. 예를 들어, 리스트에서 특정 조건을 만족하는 요소만 선택할 수 있습니다.


List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
List<Integer> evenNumbers = numbers.stream()
                                   .filter(n -> n % 2 == 0)
                                   .collect(Collectors.toList());
=========================================================================================================================                                   
집계: 스트림의 요소들을 집계하여 단일 값으로 반환할 수 있습니다. 예를 들어, 평균값, 합계, 최대값, 최소값 등을 계산할 수 있습니다.


int sum = numbers.stream()
                 .mapToInt(Integer::intValue)
                 .sum();
=========================================================================================================================                 
정렬: 스트림의 요소들을 정렬할 수 있습니다. 정렬 기준에 따라 오름차순, 내림차순 등의 정렬이 가능합니다.


List<String> sortedWords = words.stream()
                                .sorted()
                                .collect(Collectors.toList());
=========================================================================================================================                                
컬렉션으로 수집: 스트림의 결과를 컬렉션으로 변환할 수 있습니다. collect 메서드를 사용하여 리스트, 셋, 맵 등의 형태로 결과를 수집할 수 있습니다.


Set<String> wordSet = words.stream()
                           .collect(Collectors.toSet());

=========================================================================================================================                           
2. Stream API의 주요 연산 종류
중간 연산 (Intermediate Operations): 스트림을 변형하는 연산으로, 필터링, 매핑, 정렬 등이 포함됩니다. 중간 연산은 지연 평가되어 최종 연산이 수행될 때까지 실행되지 않습니다.


Stream<String> stream = words.stream()
                              .filter(word -> word.length() > 4)
                              .map(String::toUpperCase);
                              
최종 연산 (Terminal Operations): 스트림의 요소를 처리하고 결과를 반환하는 연산으로, 집계, 수집, 출력 등이 포함됩니다. 최종 연산이 호출되면 스트림의 모든 중간 연산이 실제로 수행됩니다.


long count = stream.count();

=========================================================================================================================
3. Stream API 사용 예
다음은 Stream API를 사용하여 데이터 목록에서 짝수만 추출하고, 각 짝수의 제곱을 구한 후, 그 합계를 계산하는 예제입니다:


import java.util.Arrays;
import java.util.List;

public class StreamExample {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);

        int sumOfSquares = numbers.stream()        // 스트림 생성
                                  .filter(n -> n % 2 == 0) // 짝수만 필터링
                                  .map(n -> n * n)  // 제곱 계산
                                  .reduce(0, Integer::sum); // 합계 계산

        System.out.println("Sum of squares of even numbers: " + sumOfSquares);
    }
}
이 예제에서는 스트림의 생성, 필터링, 매핑, 집계 단계를 순차적으로 수행하여 최종 결과를 도출합니다. 이렇게 Stream API를 사용하면 데이터 처리 작업을 간결하고 효율적으로 수행할 수 있습니다.



/* 나의 코드 */
class Solution {
    public double solution(int[] numbers) {
        int sum = 0;
        for (int num:numbers) {
            sum += num;
        };
        
        return (double)sum/numbers.length;
        
    }
}