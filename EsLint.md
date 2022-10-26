# EsLint - особенности настройки

### vue/no-deprecated-slot-attribute

Атрибут "slot" устарел, но продолжает использоваться в [Vuetifyjs](https://vuetifyjs.com/en/getting-started/installation/). Правило отключено, пока не будет найдено новое техническое решение.

### vue/no-deprecated-v-on-native-modifier

Правило отключено. Оно предназначено для Vue 3.

### import/no-extraneous-dependencies

Пока отключенно. Большинство ошибок происходит из-за Vuex. После выяснения вопроса, нужно ли его устанавливать в Nuxt правило разрешится.

### no-unused-vars

Правило отключено. Много особенностей vue.

### no-return-assign

Правило отключенно. Пока не понятен возврат присваивания в стрелочных функциях.

### no-restricted-syntax

Правило отдельнно. Пока непонятна его целесообразность в этом проекте

### import/prefer-default-export

Правило отключенно, т.к. не всегда есть возможность экспортировать модули как функции:

- store/orderStore

### no-shadow

Правило отключенно в следующих файлах:

- store/orderStore

### no-param-reassign

Правило отключенно в следующих файлах:

- store/orderStore
