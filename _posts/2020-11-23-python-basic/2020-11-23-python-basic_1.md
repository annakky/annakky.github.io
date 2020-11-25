---
title: 파이썬 기초 1
date: 2020-11-23 11:00:00
tags:
  - python
---

## 파이썬을 다시 공부하다 알게된 점

필자는 파이썬으로 개발을 하면서 파이썬 기본서를 본 적이 없다. 다른 언어를 하면서 익힌 내용들을 바탕으로 구글링을 통해 개발을 하였다.
그래서 이번에 파이썬 개발서를 한번 훑다가 몰랐던 기능들 혹은 정리하고 싶은 내용들을 정리하려고 한다.
<br><br>

### - 복소수

파이썬에서는 복소수를 표현할 수 있다. 여기서 주의할 점은 허수부에 *'i'* 대신 *'j'*를 사용한다는 것이다. 아래 예제로 확인해보자.

```python
c = 3 + 4i  # i 대신 j를 써야함

SyntaxError: invalid syntax
```

```python
c = 3 + 4j
c.real  # c의 실수부 출력
> 3.0

c.imag  # c의 허수부 출력
> 4.0
```

복소수 관련 추가적인 함수들이 있다. 아래 예제로 확인해보자.

```python
c = 3 + 4j
c.conjugate() # c의 켤레 복소수
> 3 - 4j

abs(c)        # c의 복소평면에서의 원점까지의 거리
> 5
```
<br>

### - 할당문

변수에 값을 할당하는 방법은 모두 잘 알고있을 것이다. 파이썬에서는 _'동시 할당문'_ 이라는 재밌는 기능이 있다. 아래 예제로 확인해보자.

```python
num = 10                  # 기본 할당문

num1 = num2 = num3 = 100  # 다중 할당문
print(num1, num2, num3)
> 100, 100, 100

num4, num5 = 400, 500     # 동시 할당문
print(num4, num5)
> 400, 500
```
<br>

### - 비트 연산자

비트 연산자에 경우, 필자의 경험상 많이 사용하지 않는다. 직관적이지 않고 혼동의 우려가 있기 때문에 선호하지는 않지만, 굳이 비트 연산자를 사용하는 경우가 있다. 이는 비트 연산자가 가진 큰 장점 때문인데, ***연산이 빠르다는 것***이다. 아래 표를 통해 비트 연산자를 정리해두었다.

| 연산자 | 의미 | 설명 |
|:---:|:---|---|
| & | 비트 단위 AND | 두 피연산자의 해당 비트가 모두 1이면 1, 아니면 0 |
| \| | 비트 단위 OR | 두 피연산자의 해당 비트가 하나라도 1이면 1, 아니면 0 |
| ^ | 비트 단위 XOR | 두 피연산자의 해당 비트가 값이 같으면 1, 아니면 0 |
| ~ | 비트 단위 NOT | 피연산자의 해당 비트가 0이면 1, 1이면 0 |
| << | 비트 단위 왼쪽으로 이동 | 지정된 개수만큼 모든 비트를 왼쪽으로 이동 |
| >> | 비트 단위 오른쪽으로 이동 | 지정된 개수만큼 모든 비트를 오른쪽으로 이동 |

파이썬에서 이진수 값을 확인하는 방법은 간단하다. _'bin'_ 함수를 사용하면 쉽게 이진수 형식으로 출력이 가능하다. 아래 예제로 확인해보자.

```python
bin(9)    # 2진수 형식으로 출력
> '0b1001'  # 0b는 binary라는 의미
```
<br>

### - 루프 제어변수 익명화

불필요한 메모리 사용을 줄이기 위해, 혹은 한번만 사용할 것에 대해 이름을 정하는 것이 불필요하다고 생각할 수 있다. 이를 위해 **익명화** 라는 기능이 있다. 아래 예제를 보며 알아가보자.

```python
for i in range(3):
    print('Hello World')

> Hello World
> Hello World
> Hello World

for _ in range(3):    # 루프 변수의 익명화
    print('Hello World')

> Hello World
> Hello World
> Hello World
```

**\+** range
  추가적으로 range에 대해 조금 설명을 하자면, range는 세가지 변수를 가질 수 있다.  
<br>

  ```python
  range(start, stop, step)
  ```
<br>

  **start**는 시작값을 지정해주는 변수로, 생략시 0으로 할당된다.
  **stop**은 반복이 끝나는 시점을 알려주는 변수로, stop 보다 작은 경우에 반복한다.
  **step**은 증가값을 지정해주는 변수로, 생략시 1로 할당된다.
<br><br>

  여기서 주의할 점은, stop이 ***'미만'*** 이므로 0부터 10까지의 정수 출력을 원한다면, _range(0, 10, 1)_이 아닌, **range(0, 11, 1)**을 해야한다.

<br>

### - 반복문의 break, continue

반복문에서 특정 조건일 때, 반복을 그만하거나 건너뛰고 싶을 수 있다. 그럴때 break 혹은 continue를 사용하면 프로그램 제어를 효율적으로 할 수 있다. 아래 예시를 통해 확인해보자.

```python
st = 'start'

# 모음을 찾으면 반복문 종료
for ch in st:
    if ch in ['a', 'e', 'i', 'o', 'u']:
        break
    print(ch, end = '')

> st
```

```python
st = 'start'

# 자음만 출력
for ch in st:
    if ch in ['a', 'e', 'i', 'o', 'u']:
        continue            # 모음이면, 아래 print 함수 건너뜀
    print(ch, end = '')

> strt
```
<br>

> break와 continue는 프로그램 제어에 효과적이지만, 너무 많이 사용하면 제어 흐름에 일관성이 없어져 프로그램 이해에 어려움을 겪을 수 있다.
따라서 필요한 경우에만 사용하는 것을 권장한다.

<br><br>

### - 함수의 전역변수 참조, 인자 전달

전역변수를 자주 사용하는 것은 에러의 주 원인이 된다. 따라서 사용을 최대한 줄여야하지만, 불가피하게 사용해야할 경우가 있다. 이 때, 함수에서 전역변수의 참조 방법을 설명하려고 한다. 다음 예제로 확인해보자.

```python
def print_sum():
    global a, b
    a, b = 10, 20
    result = a + b
    print('함수 내부의 sum:', result)       # a, b는 함수 외부에서 선언된 변수를 사용함

a, b = 1, 2
print_sum()       # 두 전역변수를 a = 10, b = 20으로 변환
result = a + b
print('함수 외부의 sum:', result)
```

<span style="color: skyblue;">실행 결과</span>
```shell
함수 내부의 sum: 30
함수 외부의 sum: 30
```

단, ***'global'*** 은 할당문에서 사용할 수 없다.
```python
global a = 10   # 문법오류 발생
```

<br>

또한 함수를 호출할 때, 인자를 빠뜨리더라도 에러가 발생하지 않도록 할 수 있다. 바로 ***디폴트 인자*** 를 통해 매개변수에 기본값을 할당해 줄 수 있다. 아래 예제를 통해 확인해보자.

```python
def print_star(n = 1):      # 매개변수는 기본값으로 1을 가짐
    for _ in range(n):
        print('*', end = '')
    print('')

print_star()      # 인자를 전달하지 않아, n = 1 설정됨
print_star(5)     # 5를 인자로 전달하여, n = 1 은 수행되지 않음
```

<span style="color: skyblue;">실행 결과</span>
```shell
*
*****
```

단, 디폴트 매개변수를 할당할 때는, 전체 매개변수에 할당하거나, **매개변수 출현 순서상 뒤에 있는 변수부터 할당**해야한다.
아래 예제를 통해 구체적으로 확인해보자.

```python
def sum_first(a, b = 2):
    return a + b

print('first sum:', sum_first(1))
```
<span style="color: skyblue;">실행 결과</span>
```shell
first sum: 3
```

<br>

위와 달리, 첫번째 매개변수에 디폴트 값을 지정해주면 오류가 발생한다.

```python
def sum_second(a = 1, b):       # 디폴트 매개변수 오류
    return a + b

print('second sum:', sum_second(2))
```
<span style="color: skyblue;">실행 결과</span>
```shell
SyntaxError: non-default argument follows default argument
```

<br>

### - 객체의 식별값

파이썬은 많은 내장함수를 가지고 있다. 그 중, ***id()*** 를 알아보자.  
파이썬은 객체지향 프로그래밍 언어로, 객체마다 다른 객체와 구별되는 고유한 **식별값**을 갖는다. 이를 정수형으로 반환해주는 함수가 바로 ***id()***이다. 아래 예제로 확인해보자.

```python
str_a = "HELLO!"
id(str_a)

> 21989600

n = 100
id(n)

> 1919929824
```

<br>

### - zip() 함수

파이썬에서는 반복가능 자료형으로 분류되는 자료형이 있다. 여기에는 리스트, 딕셔너리, 집합, 튜플과 같은 자료형들이 있다. 이러한 자료형을 여러개 넘겨주면, 이들을 합쳐 튜플 반복자를 반환하는 함수가 바로 zip() 함수이다. 글로만 봤을때는 이해가 잘 안될 것이다. 아래 예제로 자세히 살펴보자.

```python
str_list = ['first', 'second', 'third']
int_tuple = (100, 200, 300, 400, 500)
fruit_list = ['apple', 'banana', 'orange', 'grape']

iterator = zip(str_list, int_tuple, fruit_list)
list(iterator)

> [('first', 100, 'apple'), ('second', 200, 'banana'), ('third', 300, 'orange')]
```

예제를 살펴보면, 같은 인덱스의 데이터끼리 묶어서 반환하는 것을 알 수 있다.
또한 세 반복가능 데이터의 길이가 3, 5, 4로 다 다르다. 이 경우, 가장 작은 길이인 3까지의 튜플 반복자를 생성함을 알 수 있다.