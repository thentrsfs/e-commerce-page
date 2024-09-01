<template>
  <q-btn
    @click="store.swipeLeft"
    size="lg"
    round
    class="nav-button left"
    icon="mdi-chevron-left"
  ></q-btn>
</template>
<script>
import { useCartStore } from "src/stores/cart-items.js";

const store = useCartStore();
</script>
