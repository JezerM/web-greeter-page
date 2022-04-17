<template>
  <div class="grid-container">
    <slot></slot>
  </div>
</template>

<style>
.grid-container {
  display: grid;

  grid-column-gap: 24px;
  grid-row-gap: 24px;

  margin-left: auto;
  margin-right: auto;

  padding: 0px 24px;
  max-width: 400px;

  grid-template-columns: repeat(12, minmax(0, 1fr));
}

@media screen and (min-width: 768px) {
  .grid-container {
    max-width: 800px;
  }
}
@media screen and (min-width: 1024px) {
  .grid-container {
    max-width: none;
  }
}
</style>
