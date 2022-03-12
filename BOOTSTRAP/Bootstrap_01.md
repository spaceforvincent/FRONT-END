### 0207 Bootstrap



justify-content-center : 수평정렬

align-items-center : 수직정렬



그리드 레이아웃을 구성 시에는 반드시 `.row`(행)를 먼저 배치하고 행 안에 `.col-*-*`(열)을 필요한 갯수만큼 배치한다. 즉, container 내에 .row(행)을 먼저 배치하고 그 안에 .col-*-*(열)을 배치한다. 그리고 콘텐츠는 .col-*-* 내에 배치한다.

offset : 몇 칸 띄워놓고 시작



### CSS

absolute는 부모가 relative여야 함

inline은 width, height를 속성으로 가질 수 없음

normal flow 벗어나는 수단 : absolute, fixed



### Clearing Float

.clearfix::after { #선택한 요소의 맨 마지막 자식으로 가상 요소를 하나 생성

content: "";

display: block;

clear: both}

이후 요소부터 Normal Flow를 가지도록 지정



### Flexbox

.flex-container { #부모요소

​	display: flex

}



정렬 : align-items (모든 아이템을 cross axis 기준으로)

​		-> stretch, flex-start, flex-end, center, baseline

​		 align-self (개별 아이템)

​		->stretch, flex-start, flex-end, center

flex-direction : row, column, row-reverse, column-reverse

flex-wrap : 기본적으로 컨테이너 영역을 벗어나지 않도록 함

​					nowrap(기본값) - 한 줄에 배치, wrap : 넘치면 그 다음 줄로 배치



flex-flow : flex-direction과 flex-wrap의 shorthand

ex) flex-flow: row nowrap;



공간배분 : justify-content(main axis) & align content(cross axis)

-> flex-start, flex-end, center, space-between (양쪽 정렬), space-around(아이템을 둘러싼 영역을 균일하게 분배), space-evenly(전체 영역에서 아이템간 간격을 동일하게 분배) 차이 구분



기타 : flex-grow (남은 영역을 아이템에 분배), order: 아이템 배치 순서 지정



css 우선순위 : !important -> inline -> id -> class -> 요소 -> 순서



