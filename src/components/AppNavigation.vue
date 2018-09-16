<template>
  <nav class="nav">
    <router-link
      class="nav__link"
      to="/"
    >
      Home
    </router-link>
    <router-link
      class="nav__link"
      to="/about"
    >
      About Us
    </router-link>
    <router-link
      class="nav__link"
      to="/contact"
    >
      Contact Us
    </router-link>
  </nav>
</template>


<script>
export default {
  name: 'AppNavigation',
};
</script>


<style>
.nav {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.nav__link {
  margin: 0 14px 0 0;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  color: rgba(0, 101, 156, 1);
}

.nav__link:last-child {
  margin-left: 0;
}

.nav__link:hover {
  color: rgba(48, 151, 206, 1);
}

.router-link-exact-active {
  color: black;
}
</style>

