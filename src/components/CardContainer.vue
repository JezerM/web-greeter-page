<template>
  <div class="grid grid-container">
    <slot></slot>
  </div>
</template>

<style>
.grid {
  display: grid;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: repeat(12, minmax(0, 1fr));
}
</style>
