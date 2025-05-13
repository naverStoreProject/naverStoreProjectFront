# Common Rules<br>

프로젝트 전반적인 룰입니다.<br>
해당 룰들은 절대적인것은 아니며, 언제든지 더 가독성과 범용성이 높은 방법이 있다면 그렇게 해도 상관 없습니다.<br>
또한 더 좋은 방법들이 있다면 논의후 각 프로젝트의 Common Rules 를 업데이트 해주면 좋을 것 같습니다.<br>

## **1. Git**

Git의 커밋은 아래와 같습니다.

### **참고**

[Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/)

### **주요 브랜치 커밋 규칙**

⚡️ 🚨 📝 ♻️ 🎨 🙈 🩹

### **branch 생성 규칙**

- ⚡️feature/이슈번호/제목orPage(날짜)
- 🚨bug/이슈번호/제목orPage(날짜)
- ♻️refactor/이슈번호/제목orPage(날짜)
- 🎨design/이슈번호/제목orPage(날짜)
- 📝docs/이슈번호/제목orPage(날짜)
- 🩹fix/이슈번호/제목orPage(날짜)

### **commit 규칙**

- ⚡️feat: 새로운 기능추가 내용 #이슈번호
- 🚨bug: 버그 수정 내용 #이슈번호
- 📝docs: 문서 관련 변경 #이슈번호
- 🎨design: 디자인 내용 #이슈번호
- ♻️refactor: 리펙토링 내용 #이슈번호
- 🙈test: 테스트 코드 내용 #이슈번호
- 🩹fix: 고친 내용 #이슈번호

## **2. CSS**

이 프로젝트에서는 tailwindcss 프레임워크를 사용합니다.

- 기본 글씨 크기: 14px
- 기본 글자 색상: #181818;

기본 글씨, 글자, 폰트는 모두 main.css에서 관리합니다. 기본으로 잡을 글씨 크기, 글자 색상은 지정 안 해주셔도 됩니다!

직접 픽셀 지정이 아닌 xs, sm등의 테일윈드에서 제공하는 사이즈 가이드를 따라서 작성해주세요.

저희 프로젝트에서는 '1rem-16px'이 기준입니다. 테일윈드에서 제공하는 사이즈(2,4,xm,sm등을 따라서 하면 좋지만 때에 따라서 사용자 지정 고정 크기가 필요할 수 있을 때는 px to rem 사이트(https://nekocalc.com/px-to-rem-converter)를 통해서 계산 후 m-[20rem] 이렇게 넣어주시면 됩니다.

색상은 `main.css`에 나와있는 것 이외에는 사용하지 않습니다. 사용하고자 한다면 상의 후 `main.css`에 추가해서 사용하도록 합니다.

폰트 굵기도 `--font-gmarket-light,regular,bold` 형태로 사용하도록 하겠습니다. 폰트, 굵기도 이외에는 사용하지 않습니다.

https://tailwindcss.com/docs/preflight
해당 사이트에서 검색해서 맞게 사용하면 됩니다. 기본 css에서 사용하던 거의 모든 스타일이 대치가 가능합니다.
`text-lg`, `mt-2` 등의 기본의 `변수: 값;`의 형태를 `변수-값`의 형태로 진행한다고 생각하면 바로 이해될겁니다. 세팅은 다 해놔서 제가 `App.vue`에 해둔 것 보면 어렵지는 않을거예요!

바닐라 css를 사용하는 경우도 있을 수 있지만 최소화 시키는 방향으로 하면 좋겠습니다.

만약 tailwind에 대해서 잘 되지 않는다면 @최승아에게 언제든 연락주세요!

> 추천 플러그인
>
> - **Tailwind CSS IntelliSense**: Tailwind 클래스 자동 완성
> - **Headwind**: 클래스 순서 자동 정렬
> - **Color Highlighter**: 현재 사용하고 있는 색상이 뭔지 알 수 있음

## **3. ID**

- css는 class 사용 추천 & input 은 v-model 사용 추천<br>
  bootstrap 이나 label 등에서 id가 필연적으로 쓰이는 곳이 있음. 이런 경우 사용함<br>

```html
<label for="cp-product-option">선택하기</label>
<input type="checkbox" id="cp-product-option" v-model="product" />
```

## **4. DB**

- DB의 테이블 및 컬럼 이름은 스네이크 형식<br>

```sql
  ALTER TABLE `cp_member` ADD COLUMN `user_email` VARCHAR(100);
```

## **5. 상수**

- 상수는 대문자 + 스네이크<br>

```javascript
const IMG_PATH = 'public/images'
```

```java
  public static final String TB_MEMBER = "cp_member";
```

## **6. 변수선언**

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
