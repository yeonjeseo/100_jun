/**
 * 문제
시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

출력
시험 성적을 출력한다.

예제 입력 1 
100
예제 출력 1 
A
 */

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => parseInt(el));

const input = [100];
const [score] = input;
console.log(
  score <= 100 && score >= 90
    ? 'A'
    : score >= 80 && score <= 89
    ? 'B'
    : score >= 70 && score <= 79
    ? 'C'
    : score >= 60 && score <= 69
    ? 'D'
    : 'F'
);