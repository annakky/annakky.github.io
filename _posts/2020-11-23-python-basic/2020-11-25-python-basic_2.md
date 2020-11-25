---
title: 파이썬 기초 2
date: 2020-11-25 10:25:00
tags:
  - python
---

### - 예외처리

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

### - 클래스

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