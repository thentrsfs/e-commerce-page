<template>
  <q-menu :offset="[32, 20]" style="width: 352px; height: 220px">
    <div>
      <p class="q-ma-md text-weight-bold">Cart</p>
      <q-separator />
      <div
        v-if="!store.ordered"
        class="absolute-center q-mt-md text-accent text-weight-bold"
      >
        Your cart is empty.
      </div>
      <div v-else class="flex-column q-ma-md">
        <div class="flex justify-between">
          <q-img style="width: 60px" :src="store.currentImage" />
          <div class="text-subtitle2 text-accent q-mx-sm">
            <p>Fall Limited Edition Sneakers</p>
            <p style="letter-spacing: 1px">
              ${{ store.salePrice }}.00 x {{ store.finishOrderAmount }}
              <span class="text-weight-bold q-ml-sm text-black"
                >${{ store.totalAmount }}.00</span
              >
            </p>
          </div>
          <q-btn
            @click="store.resetCart"
            dense
            flat
            icon="mdi-delete-outline"
          ></q-btn>
        </div>
        <div class="flex">
          <q-btn
            class="col q-mt-md text-weight-bold"
            color="primary"
            text-color="black"
            no-caps
            label="Checkout"
          >
          </q-btn>
        </div>
      </div>
    </div>
  </q-menu>
</template>

<script setup>
import { useCartStore } from "src/stores/cart-items.js";

const store = useCartStore();
</script>
