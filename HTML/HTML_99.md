### Element

- form : 웹에서 사용자 정보를 입력하는 여러 방식(text, button, checkbox 등)을 제공하고 사용자로부터 할당된 데이터를 서버로 전송하는 역할을 담당

  - 핵심속성

    - action : 입력 데이터가 전송된 URL 지정

    - method : 입력 데이터 전달 방식 지정(http request method) 

      1. GET : 서버로부터 <u>정보를 조회</u>하는 데 사용. 데이터를 가져올 때만 사용해야 함

         ​		우리가 서버에 요청을 하면 html 문서 파일 한장을 받는데, 이때 방식이 get

         ​		반드시 특정 리소스를 가져오도록 요청할 때만 사용(<u>CRUD 중 R</u>)
      
      2. POST : 서버로 <u>데이터를 전송</u>할 때 사용. 리소스를 생성/변경
      
         ​			서버에 변경사항을 만듦 (<u>CRUD 중 C,U,D</u>)

- input : 사용자로부터 데이터를 입력받기 위해 사용. type 속성에 따라 동작 방식 달라짐
  - 핵심속성
    - name
    - 중복 가능, 양식을 제출했을 때 name이라는 이름에 설정된 값을 넘겨서 값을 가져올 수 있음
    - 주요 용도는 GET/POST방식으로 서버에 전달하는 파라미터로 매핑하는 것
    - GET 방식에서는 URL에서 ?key=value&key=value 형식으로 데이터를 전달함
  
- label : 사용자 인터페이스 항목에 대한 설명을 나타냄
  - label을 input 요소와 연결하기
    - input에 id 속성 부여
    - label에는 input의 id와 동일한 값의 for 속성이 필요
    - label을 클릭해서 input에 초점을 맞추거나 활성화시킬 수 있음
    - label 요소와 연결할 수 있는 요소 : button, input, select, textarea...



### Attribute

- for : for 속성의 값과 일치하는 id를 가진 문서의 첫번째 요소를 제어

- id : 전체 문서에서 고유해야 하는 식별자를 정의

  - 사용 목적 : linking, scripting, styling 시 요소를 식별

  