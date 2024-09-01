<template>
  <q-layout>
    <q-header
      :class="
        $q.screen.gt.xs ? 'bg-transparent q-ml-xl' : 'bg-transparent q-mt-sm'
      "
    >
      <q-toolbar>
        <q-btn
          v-if="!$q.screen.gt.xs"
          flat
          color="black"
          icon="menu"
          @click="store.drawer = !store.drawer"
        ></q-btn>
        <q-toolbar-title shrink><ToolbarLogo /> </q-toolbar-title>
        <div
          v-if="$q.screen.gt.xs"
          class="text-accent row q-gutter-x-md q-ml-lg"
        >
          <q-btn
            unelevated
            v-ripple="{ center: true, color: 'primary' }"
            class="menu-btn"
            style="height: 100px"
            >Collections</q-btn
          >
          <q-btn
            unelevated
            v-ripple="{ center: true, color: 'primary' }"
            class="menu-btn"
            >Men</q-btn
          >
          <q-btn
            unelevated
            v-ripple="{ center: true, color: 'primary' }"
            class="menu-btn"
            >Women</q-btn
          >
          <q-btn
            unelevated
            v-ripple="{ center: true, color: 'primary' }"
            class="menu-btn"
            >About</q-btn
          >
          <q-btn
            unelevated
            v-ripple="{ center: true, color: 'primary' }"
            class="menu-btn"
            >Contact</q-btn
          >
        </div>
        <q-space />
        <div
          class="flex"
          :class="
            $q.screen.gt.xs ? 'q-gutter-x-lg row q-mr-xl' : 'q-gutter-x-none '
          "
        >
          <div>
            <q-btn
              :size="$q.screen.gt.xs ? 'lg' : 'md'"
              icon="mdi-cart-outline"
              class="text-grey-8"
              flat
            >
              <ShoppingCart />
              <q-badge
                v-if="store.ordered"
                :class="
                  $q.screen.gt.xs
                    ? 'q-mr-md q-mt-xs q-px-sm'
                    : 'q-mr-md q-mt-xs q-px-xs'
                "
                color="primary"
                floating
                rounded
                text-color="black"
                >{{ store.finishOrderAmount }}
              </q-badge>
            </q-btn>
          </div>
          <q-avatar :size="$q.screen.gt.xs ? '45px' : '32px'">
            <img class="avatar" src="/images/image-avatar.png" alt="avatar" />
          </q-avatar>
        </div>
      </q-toolbar>

      <q-separator v-if="$q.screen.gt.xs" class="q-mr-xl" inset />
    </q-header>
    <q-drawer
      v-model="store.drawer"
      :width="200"
      :breakpoint="500"
      overlay
      bordered
    >
      <q-scroll-area class="fit">
        <q-list class="text-weight-bold">
          <q-btn
            @click="store.drawer = !store.drawer"
            icon="close"
            round
            flat
            color="grey-7"
            size="md"
            class="q-mb-sm q-ml-xs"
          ></q-btn>
          <q-item clickable v-ripple="{ center: true, color: 'primary' }">
            <q-item-section>
              <q-item-label> Collections </q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple="{ center: true, color: 'primary' }">
            <q-item-section>
              <q-item-label> Men </q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple="{ center: true, color: 'primary' }">
            <q-item-section>
              <q-item-label> Women </q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple="{ center: true, color: 'primary' }">
            <q-item-section>
              <q-item-label> About </q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple="{ center: true, color: 'primary' }">
            <q-item-section>
              <q-item-label> Contact </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import ToolbarLogo from "../components/ToolbarLogo.vue";
import ShoppingCart from "src/components/ShoppingCart.vue";
import { useCartStore } from "src/stores/cart-items.js";

const store = useCartStore();
</script>

<style lang="scss" scoped>
.avatar:hover {
  border: 2px solid $primary;
  cursor: pointer;
}

.menu-btn {
  font-size: 15px;
}

.menu-btn:hover {
  border-bottom: 3px solid orange;
  color: black;
}
</style>
