# Common Rules<br>

프로젝트 전반적인 룰입니다.<br>
해당 룰들은 절대적인것은 아니며, 언제든지 더 가독성과 범용성이 높은 방법이 있다면 그렇게 해도 상관 없습니다.<br>
또한 더 좋은 방법들이 있다면 논의후 각 프로젝트의 Common Rules 를 업데이트 해주면 좋을 것 같습니다.<br>

**1. Git**<br>
Git의 커밋은 아래와 같습니다.

**참고**<br>
[Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/)

**주요 커밋 타입**<br>

- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 관련 변경
- `style`: 코드 스타일 변경 (포맷팅, 세미콜론 등)
- `refactor`: 코드 리팩토링
- `test`: 테스트 코드 추가/수정
- `chore`: 빌드 프로세스나 보조 도구 변경

**2. CSS**<br>

- css를 지정할땐 class 사용 & 케밥 스타일

```html
<div class="cate-box"></div>
```

- 자식들을 지정할땐 언더바 2개 이용

```html
<div class="cate-box">
  <div class="cate-box__item">아이템</div>
</div>
```

- px 대신 rem 사용. rem이 반응형에 더 좋기 때문<br>
  다만 img 등 최소 고정값이 존재하고, felx-wrap 등이 적용되어야한다면 px 사용<br>

```css
.cate-box {
  font-size: 1.8rem;
}
```

우리 프로젝트에서는 html 이 10px 고정, body 가 1.6rem 으로 디폴트값으로 세팅되므로 고려해서 만들면 됨<br>
ex) 1.4rem == 14px<br> -->

이 프로젝트에서는 tailwindcss 프레임워크를 사용합니다.

- 기본 글씨 크기: 14px
- 기본 글자 색상: #181818;

기본 글씨, 글자, 폰트는 모두 main.css에서 관리합니다. 직접 픽셀 지정이 아닌 xs, sm등의 테일윈드에서 제공하는 사이즈 가이드를 따라서 작성해주세요.

색상은 main.css에 나와있는 것 이외에는 사용하지 않습니다. 사용하고자 한다면 상의 후 main.css에 추가해서 사용하도록 합니다.

폰트 굵기도 -font-gmarket-300,500,700의 형태로 사용하도록 하겠습니다.

https://tailwindcss.com/docs/preflight
해당 사이트에서 검색해서 맞게 사용하면 됩니다. 기본 css에서 사용하던 거의 모든 스타일이 대치가 가능합니다.

**3. ID**<br>

- css는 class 사용 추천 & input 은 v-model 사용 추천<br>
  bootstrap 이나 label 등에서 id가 필연적으로 쓰이는 곳이 있음. 이런 경우 사용함<br>

```html
<label for="cp-product-option">선택하기</label>
<input type="checkbox" id="cp-product-option" v-model="product" />
```

**4. DB**<br>

- DB의 테이블 및 컬럼 이름은 스네이크 형식<br>

```sql
  ALTER TABLE `cp_member` ADD COLUMN `user_email` VARCHAR(100);
```

**5. 상수**<br>

- 상수는 대문자 + 스네이크<br>

```javascript
const IMG_PATH = 'public/images'
```

```java
  public static final String TB_MEMBER = "cp_member";
```

**6. 변수선언**<br>
변수 선언시 변수 이름만 보고 타입을 알 수 있게 하면 좋다.<br>

- 배열은 뒤에 Arr 혹은 List를 붙이면 좋다.<br>

```javascript
const likeArr = [1, 2, 3, 4, 5]
```

- boolean 은 is 나 has를 붙이면 좋다.<br>

```javascript
const isActive = true
```

- 함수는 동사로 시작하면 좋다.<br>

```javascript
  function getUserList();
```
