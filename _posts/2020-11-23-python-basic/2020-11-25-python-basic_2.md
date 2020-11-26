---
title: 파이썬 기초 2
date: 2020-11-25 10:25:00
tags:
  - python
---

## 예외처리

예외처리는 프로그램의 예상치 못한 종료나, 치명적인 오류를 예방할 수 있는 방법 중 하나이다. 따라서 꼼꼼하게 예외처리를 해 주는 것이 굉장이 중요하다고 할 수 있다. 이에 사용되는 것이 **try-except-else(finally)** 문이다.

|이름|설명|
|:---:|---|
|try:|예외 처리를 할 부분|
|except:|예외가 발생했을 때 실행할 코드|
|else:|예외가 발생하지 않았을 때 실행할 코드|
|finally:|예외 발생 여부와 상관없이 실행할 코드|

위 표에서 볼 수 있듯이, 예외 처리를 할 코드를 try 문에 넣은 뒤, 예외 발생 여부에 따른 코드를 알맞게 사용하면 된다. 아래 예시로 자세히 살펴보자.

```python
num1, num2 = input("나눗셈을 할 숫자를 2개 넣어주세요: ").split()
try:
    result = int(num1) / int(num2)
except ValueError:
    print('오류 : 입력 값이 실수가 아닙니다.')
except:
    print('오류 발생')
else:
    print("결과:", result)
finally:
    print("프로그램 종료")
```

<br>

<span style="color: skyblue;">실행 결과</span>

```shell
나눗셈을 할 숫자를 2개 넣어주세요: 10 2
결과: 5.0
프로그램 종료
```

```shell
나눗셈을 할 숫자를 2개 넣어주세요: a b
오류 : 입력 값이 실수가 아닙니다.
프로그램 종료
```

```shell
나눗셈을 할 숫자를 2개 넣어주세요: 10 0
오류 발생
프로그램 종료
```

위 예제처럼, except 뒤에 추가적으로 error type을 지정하여, 특정 에러일 경우를 핸들링할 수 있다.
실행 결과를 보면, *'a, b'* 처럼 실수가 아닌 값을 입력하면, ValueError 이므로, **'except ValueError'** 가 실행된다.
두번째 입력값에 0을 넣게 되면, *ZeroDivisionError*가 발생하여, **'except'** 가 실행된다.
ZeroDivisionError만 특별히 핸들링하고 싶다면, **'except ZeroDivisionError:'** 로 구성하면 된다.

<br>

## 클래스

### - 초기화 메소드

파이썬이 객체 지향 프로그래밍 언어인 것은 누구나 다 알 것이다. 그 OOL에 걸맞게 클래스를 잘 활용하기 위해, 클래스에 대해 자세히 아는 것이 중요하다. 객체는 정의될 때, 각 속성들을 초기화 및 할당해줘야한다. 마찬가지로 클래스도 마찬가지로 정의할 때 초기화를 해줘야하는데, 이 때 사용되는 것이 초기화 메소드, ***__init()__*** 이다. 아래 예제를 통해 자세히 확인해보자.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def hi(self):
        print("Hello!! My name is", self.name, "\nI\'m {} years old!".format(self.age))

minsoo = Person('MinSoo', 18)
minsoo.hi()
```

```shell
Hello!! My name is MinSoo 
I'm 18 years old!
```

위 예제를 보면, 생성자의 첫 번째 매개변수는 **self** 로, 이는 생성한 인스턴스를 의미한다. 클래스 내에서는 인스턴스를 부를 방법이 없기 때문에 self를 사용한다.  

<br>

### - 문자열화 메소드

이와 비슷한 메소드가 더 있다. [파이썬 기초 1](/python-basic_1/#--객체의-식별값)에서 확인할 수 있듯이, 모든 객체는 다른 객체와 구분되는 고유한 정보를 갖는데, 이를 **id** 라고 한다. 클래스 인스턴스도 객체이므로, id를 갖는다.

```python
print(minsoo)
```
```shell
<__main__.Person object at 0x0335F388>
```

'0x0335F388'가 바로 인스턴스의 아이디이다. 그러나 이를 통해 객체가 어떤 값을 가지고 있는지 알기 힘들다. 따라서 이를 도와주는 메소드가 바로 **__str__** 이다. 아래 예제로 자세히 살펴보자.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def __str__(self):
        return ('Person(name = ' + self.name + ', age = ' + str(self.age) + ')')

    def hi(self):
        print("Hello!! My name is", self.name, "\nI\'m {} years old!".format(self.age))

minsoo = Person('MinSoo', 18)
print(minsoo)
```

```shell
Person(name = MinSoo, age = 18)
```

<br>

### - 캡슐화

클래스를 사용하면서, 클래스 속성에 함부로 접근하지 못하도록 하고 싶을 수 있다. 단순히 [인스턴스 명].[속성명] 으로 쉽게 접근하면, 예상치 못하게 속성값이 변할 수 있기 때문이다. 따라서 이를 방지하기 위해 캡슐화를 하여 클래스를 만든다.
Java와 C++에서는 private이라는 키워드를 통해서 접근 제한이 가능하지만, 파이썬은 제공하지 않는다. 따라서 변수 이름에 표시를 해, private 변수라는 것을 확인할 수 있도록 한다. 아래 예제를 통해 확인해보자.

```python
class Person:
    def __init__(self, name, age):
        self.__name = name
        self.__age = age

    def get_name(self):
        return self.__name

    def get_age(self):
        return self.__age

    def set_age(self, age):
        if age > 0:
            self.__age = age

minsoo = Person('MinSoo', 18)
print(minsoo.get_name())
minsoo.set_age(-5)
print(minsoo.get_age())
```

```shell
MinSoo
18
```
위 예제를 보면, 멤버변수에 ***__*** 혹은 ***_*** 로 시작하도록 하여 멤버 변수를 보호한다.
이처럼, get_name(), get_age(), set_age()와 같은 멤버 함수만을 통하여 멤버변수로 접근할 수 있도록 한다.
물론 'minsoo.\__age'를 통해 접근할 수 있지만, 프로그래머들 사이에 약속을 한다면 private 변수와 같은 효과를 볼 수 있다.
또한 요즘 개발 환경에서는 __ 혹은 _ 로 시작하는 멤버 변수에 접근하지 못하도록 하기도 한다.  

<br>

### - 특수 메소드

클래스를 만들어 사용하다보면, 인스턴스를 위한 연산, 혹은 함수를 사용하고 싶을 수 있다. 아래 예제를 통해 먼저 살펴보자.

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return '({}, {})'.format(self.x, self.y)

    def add(self, other):       # 덧셈 함수
        return Vector(self.x + other.x, self.y + other.y)

v1 = Vector(1, 1)
v2 = Vector(2, 2)

print(v1.add(v2))
```

```shell
(3, 3)
```

<br>

클래스의 다른 인스턴스와의 상호작용을 하고 싶을 때는, 위와 같이 other를 사용하면 된다. 그러나 두 벡터의 합을 표현하는데 *add()* 는 직관적이지 않고, 사용하기 불편하다. 이렇게 덧셈과 뺄셈 연산자를 사용하기 위해서는 특수 메소드를 구현해야한다.

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        return '({}, {})'.format(self.x, self.y)

    def __add__(self, other):       # '+' 연산자
        return Vector(self.x + other.x, self.y + other.y)

    def __sub__(self, other):       # '-' 연산자
        return Vector(self.x - other.x, self.y - other.y)

v1 = Vector(1, 1)
v2 = Vector(2, 2)

v3 = v1 + v2
v4 = v1 - v2

print(v3)
print(v4)
```

```shell
(3, 3)
(-1, -1)
```

'+', '-' 외에 다른 산술 연산자 뿐만 아니라, 비교 연산자, 내장 함수들까지 특수 메소드로 구현할 수 있다. 내장 함수들은 종류가 많아 따로 정리하지는 않았다. *len()* 함수를 *\__len__()* 처럼 특수 메소드로 구현할 수 있으니, 잘 응용하면 될 것이다. 산술 연산자와 비교 연산자를 표를 통해 정리해놓았다. 아래 표를 통해 확인해보자.

  * 산술 연산자

|연산자|특수 메소드|하는 일|
|:---:|:------:|----------|
|x + y|\__add__(self, other)|x와 y의 합|
|x - y|\__sub__(self, other)|x와 y의 차|
|x * y|\__mul__(self, other)|x와 y의 곱|
|x ** y|\__pow__(self, other)|x의 y 거듭제곱|
|x / y|\__truediv__(self, other)|x를 y로 나눈 값|
|X // y|\__floordiv__(self, other)|x를 y로 나눈 몫|
|x % y|\__mod__(self, other)|x를 y로 나눈 나머지|
|+x|\__pos__(self)|x의 양수|
|-x|\__neg__(self)|x의 음수|

<br>

  * 비교 연산자

|연산자|특수 메소드|하는 일|
|:---:|:------:|----------|
|x < y|\__lt__(self, other)|x가 y보다 작은가|
|x <= y|\__le__(self, other)|x가 y보다 작거나 같은가|
|x >= y|\__ge__(self, other)|x가 y보다 크거나 같은가|
|x > y|\__gt__(self, other)|x가 y보다 큰가|
|x == y|\__eq__(self, other)|x와 y가 같은가|
|X != y|\__ne__(self, other)|x와 y가 다른가|

<br>

### - 클래스 변수

클래스에서, 모든 인스턴스가 공통적으로 갖는 특징이 있을 수 있다. 예를 들면, 원에 대한 클래스를 지정하는데, 원주율(PI)는 모든 원이 같은 값을 가진다. 따라서 생성자를 통해 계속 원마다 초기화하는 것보다, 모든 인스턴스가 공통적으로 갖는 변수로 지정하는게 효율적이다. 이를 클래스 변수라고 한다. 아래 예제를 통해 확인해보자.

```python
class Circle:
    PI = 3.141592       # 클래스 변수
    def __init__(self, name, radius):
        self.__name = name
        self.__radius = radius

    def area(self):
        return Circle.PI * self.__radius ** 2

c1 = Circle('C1', 4)
print(c1.area())
c2 = Circle('C2', 3)
print(c2.area())
```

```shell
50.265472
28.274328
```

> 단, 클래스 내부에서 클래스 변수를 사용할 때는, *Circle.PI* 로 사용하여야 한다.

<br>

## 람다 함수

이전 포스트 [파이썬 기초 1](/python-basic_1/#루프-제어변수-익명화) 에서 익명화에 대해 잠깐 언급한 적이 있다.
이와 비슷하게, 람다 함수는 이름이 없는 특성 때문에 익명 함수라고도 불린다.
람다 함수는 어떨때 보통 사용할까? 함수를 만들고 싶지 않지만 함수화 된 기능을 사용하고 싶거나, 1회용으로 사용할 함수를 만들고 싶을 때 많이 사용한다.    
<br>
그렇다면, 굳이 람다 함수를 사용하는 이유가 무엇일까? 이는 바로, 람다 함수를 사용하면 축약된 표현으로 코드가 간결해지고, 메모리 공간을 별도로 할당하지 않기 때문에 메모리를 절약할 수 있다. 람다 함수는 사용된 후, 힙 메모리에서 사라지기 때문이다. 그럼 람다 함수의 사용법에 대해 살펴보자.

```python
lambda [매개변수] : {표현식}
```

이해를 돕기 위해 예제를 준비했다.
아래 예제를 통해 람다 함수에 대해 살펴보자.

```python
def add(x, y):          # add 함수
    return x + y

print('100 + 200 =', add(100, 200))

print('100 + 200 =', (lambda x, y: x + y)(100, 200))            # 람다 함수
```

```shell
100 + 200 = 300
100 + 200 = 300
```

위 예제를 보면, 동일한 결과값이 나오는 것을 확인할 수 있다. 위 예제는 일반적으로 람다 함수를 사용하는 방법은 아니지만, 람다 함수에 대해 이해할 수 있는 예제라고 생각된다. 람다 함수는 필터 혹은 맵과 함께 자주 사용된다. 그럼 필터 함수가 무엇인지 살펴보겠다.

<br>

## 필터 함수

필터 함수는, 리스트와 같은 반복 가능한 요소들을 함수에 넣어 참인 것만 묶어서 반환한다. 필터 함수의 문법은 다음과 같다.

```python
filter([적용할 함수], [반복 가능 객체])
```

이해를 돕기 위해, 아래 예제를 확인해보자.

```python
def filter_positive(n):
    if n > 0:
        return True
    else:
        return False

num_list = [-3, -2, -1, 0, 1, 2, 3]
for n in filter(filter_positive, num_list):
    print(n, end = ' ')
```

```shell
1 2 3 
```

만약 *filter_positive()* 함수가 한번만 사용된다면, 람다 함수를 통해 코드를 간결하게 만들 수 있다.

```python
num_list = [-3, -2, -1, 0, 1, 2, 3]

for n in filter(lambda x: x > 0, num_list):
    print(n, end = ' ')
```

```shell
1 2 3 
```

<br>

## 맵 함수

맵 함수는 반복 가능한 자료형의 각 요소들에 대하여 지정한 함수를 적용한 뒤, 반복 가능한 자료형을 반환한다.
맵 함수의 문법은 다음과 같다.

```python
map([적용할 함수], [반복 가능 객체])
```

어려운 내용은 아니지만, 글로만 보면 이해에 어려움을 겪을 수 있다. 아래 예제를 보면 도움이 될 것이다.

```python
def square(x):
    return x ** 2

num_list = [-3, -2, -1, 0, 1, 2, 3]

square_list = map(square, num_list)
print(list(square_list))
print(list(map(lambda x: x ** 2, num_list)))
```

```shell
[9, 4, 1, 0, 1, 4, 9]
[9, 4, 1, 0, 1, 4, 9]
```

위와 같이, 직접 함수를 만들어서 적용하여도 되고, 람다 함수를 통해 map을 사용해도 같은 결과값이 나오는 것을 확인할 수 있다.

<br>

## 리스트 축약 표현

람다 함수, 필터, 맵을 통해 리스트를 축약해서 표현할 수 있다. 또한 리스트 뿐만 아니라 반복 가능 객체는 모두 가능하다. 리스트 축약 표현의 문법은 다음과 같다.

```python
[ {표현식} for {변수} in {반복자/연속열} if {조건 표현식}]
```

위에서 나오는 **{표현식}** 은 **맵** 의 기능을 수행하고, **{조건 표현식}** 은 **필터** 의 기능을 수행한다. 그리고 조건 표현식은 생략 가능하다. 아래 예제를 통해 자세히 살펴보자.

```python
num_list = [-3, -2, -1, 0, 1, 2, 3]
square_list = [x ** 2 for x in num_list]            # 리스트의 모든 값 제곱
positive_square_list = [x ** 2 for x in num_list if x > 0]          # 리스트의 양수 값 제곱

print(list(square_list))
print(list(positive_square_list))
```

```shell
[9, 4, 1, 0, 1, 4, 9]
[1, 4, 9]
```

이를 응용하면, 두 리스트의 곱을 짧은 코드로 얻을 수 있다.

```python
product_list = [x * y for x in [1, 2, 3, 4] for y in [2, 4, 6]]
print(product_list)
```

```shell
[2, 4, 6, 4, 8, 12, 6, 12, 18, 8, 16, 24]
```

조건 표현식 또한 다양하게 사용할 수 있다.

```python
list1 = [n for n in range(1, 31) if n % 2 == 0 or n % 3 == 0]       # 1-30 중에서 2 또는 3의 배수
list2 = [n for n in range(1, 31) if n % 2 == 0 if n % 3 == 0]       # 1-30 중에서 2와 3의 배수

print(list1)
print(list2)
```

```python
[2, 3, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 26, 27, 28, 30]
[6, 12, 18, 24, 30]
```

<br>

## 제너레이터

제너레이터는 반복자와 거의 유사하다. 다만, 반복자와 다른 점은 모든 값을 메모리에 올려두고 사용하는 것이 아니라, 필요할 때마다 생성해서 반환하는 일을 한다.  따라서 메모리에 보관해놓지 않으니, 메모리를 효율적으로 사용할 수 있다는 장점이 있다. 이런 점 때문에, 한번 제너레이터를 실행하면, 다음에는 아무런 객체도 반환하지 않는다.
제너레이터와 같이 쓰이는 ***yield*** 라는 함수가 있다. 이는 함수의 ***return*** 과 비슷하다. 그러나 yield는 제너레이터를 반환한다는 점에서 return과 차이가 있다
아래 예시를 통해 확인해보자.

```python
def create_generator():
    for x in range(1, 4):
        yield x

my_generator = create_generator()
print('첫번째 제너레이터 실행')
for n in my_generator:
    print(n)

print('두번째 제너레이터 실행')
for n in my_generator:
    print(n)
```

```shell
첫번째 제너레이터 실행
1
2
3
두번째 제너레이터 실행
```

위와 같이, 제너레이터를 한번 실행하면, 다음번에는 아무것도 반환하지 않기 때문에 주의해야 한다.