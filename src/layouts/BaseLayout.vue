<template>
  <div class="base-layout">
    <header class="header">
      <div class="header__inner">
        <slot name="header"></slot>
      </div>
    </header>
    <main>
      <slot></slot>
    </main>
  </div>
</template>


<style>
.base-layout{
  margin: 0 auto;
  width: 100%;
  max-width: 992px;
  padding: 60px 10px 0;
}

.header {
  width: 100%;
  height: 60px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background: white;
}

.header__inner {
  width: 100%;
  max-width: 992px;
  margin: 0 auto;
  padding: 0 10px;
}
</style>

