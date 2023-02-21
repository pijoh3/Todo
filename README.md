# vue2-todo
vue2 Todo 앱 구현

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
```