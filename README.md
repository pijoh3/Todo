# vue2-todo
vue2 Todo 앱 구현
브랜치별로 `Option API`/`Composition API`를 구분하여 보실 수 있습니다.

|Branch명|desc|
|:---|:---|
|master|Main branch로 기본적으로 Composition API로 구성되어 있습니다. App 변화 상태에 따라 가장 최신의 소스로 유지합니다.|
|feature/option|`Option API`로 todo 앱을 구현하였습니다. 가장 기초적인 버전의 앱입니다.|
|feature/composition|`Composition API`로 todo앱을 구현하였습니다.`typescript`와 `eslint`설정 등을 추가하였습니다.|

## Blog
해당 repository와 관련하여 블로그 글을 작성하였습니다. 앞으로 Vue 관련 프로젝트를 라우터로 분기처리하여 추가적으로 글을 작성해볼까 생각중입니다.
살을 붙여 Vite, tslint 설정, storybook 등도 연계해볼 생각입니다.

[CodeUp 블로그- Composition API vs. Option API](https://codeup-eugene.tistory.com/2)

[CodeUp 블로그 - Vuetify Carousel(https://codeup-eugene.tistory.com/6)

## EsLint 설정
`setup script`내 macro 설정 -> `defineProps`, `defineEmits` 등을 별도로 `import`할 필요가 없다.
``` json
"eslintConfig": {
    "root": true,
    "env": {
      "node": true,
      "vue/setup-compiler-macros": true
    },
```

- component 명 관련 설정

두단어 이상 컨벤션 관련 오류 시 해당 주석 포함을 통해 해결

``` vue
<!-- eslint-disable vue/multi-word-component-names -->
<template>
</template>
```

## image import
이미지를 `import`할 때 cannot find module '@/assets/images/slide1.jpg' or its corresponding type declrations.와 같은 메세지를 lint가 표시하는데, 이를 해결하기 위해서는 src폴더 밑에 types 폴더를 만들고 `images.d.ts` 파일에

``` javascript
declare module "*.jpg";
declare module "*.jpeg";
```
와 같이 선언해주면 lint의 오류표시가 사라집니다.

## styleLint
scss를 사용하다가 semi-colon expected라고 뜨는경우 아래와 같이 styleLint와 stylelint-config-standard를 설치하시기 바랍니다.

``` bash
npm install --save-dev stylelint stylelint-config-standard
yarn add -D stylelint stylelint-config-standard
```
