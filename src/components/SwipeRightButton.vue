<template>
  <q-btn
    @click="store.swipeRight"
    size="lg"
    round
    class="nav-button right"
    icon="mdi-chevron-right"
  ></q-btn>
</template>
<script>
import { useCartStore } from "src/stores/cart-items.js";

const store = useCartStore();
</script>
