#!/usr/bin/env sh

sed -i 's/\(\(base\|path\):.*"\)\/web-greeter-page\//\1\//g' docs/src/.vuepress/config.ts src/main.ts
sed -i 's/\(\(to\|href\)="\)\/web-greeter-page\//\1\//g' src/components/MenuBar.vue
sed -i 's/\(base:.*"\)\/web-greeter-page\//\1/g' vite.config.ts
