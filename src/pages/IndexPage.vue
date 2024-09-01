<template>
  <q-page>
    <div :class="$q.screen.gt.xs ? 'row q-mx-xl' : 'col q-mt-md'">
      <div
        :class="$q.screen.gt.xs ? 'col q-mt-xl q-ml-xl' : ''"
        style="max-width: 600px"
      >
        <div class="flex">
          <q-img
            @click="store.maximized = true"
            class="main-image"
            :style="
              $q.screen.gt.xs
                ? 'border-radius: 12px ;cursor: pointer'
                : 'height: 320px'
            "
            :src="store.currentImage"
          />
          <div v-if="!$q.screen.gt.xs">
            <q-btn
              @click="store.swipeLeft"
              size="lg"
              round
              class="nav-button-mobile left"
              icon="mdi-chevron-left"
            ></q-btn>
            <q-btn
              @click="store.swipeRight"
              size="lg"
              round
              class="nav-button-mobile right"
              icon="mdi-chevron-right"
            ></q-btn>
          </div>
          <q-dialog
            no-shake
            @show="store.addKeyListeners"
            @hide="store.removeKeyListeners"
            v-model="store.maximized"
          >
            <div style="width: 650px; position: relative">
              <q-btn
                @click="store.closeDialog"
                icon="close"
                round
                flat
                size="lg"
                class="close-button"
              ></q-btn>
              <q-btn
                @click="store.swipeLeft"
                size="lg"
                round
                class="nav-button left"
                icon="mdi-chevron-left"
              ></q-btn>
              <q-img :src="store.currentImage"></q-img>
              <q-btn
                @click="store.swipeRight"
                size="lg"
                round
                class="nav-button right"
                icon="mdi-chevron-right"
              ></q-btn>

              <div class="flex q-mt-lg justify-evenly">
                <q-img
                  v-for="(image, index) in store.images"
                  :key="index"
                  :src="image"
                  :class="[
                    'thumbnail-light',
                    { 'active-thumbnail': image === store.currentImage },
                  ]"
                  @click="store.selectImage(image)"
                />
              </div>
            </div>
          </q-dialog>
        </div>

        <div v-if="$q.screen.gt.xs" class="flex q-mt-lg justify-between">
          <q-img
            v-for="(image, index) in store.images"
            :key="index"
            :src="image"
            :class="[
              'thumbnail',
              { 'active-thumbnail': image === store.currentImage },
            ]"
            fit="cover"
            @click="store.selectImage(image)"
          />
        </div>
      </div>
      <div
        class="col column flex-center q-mb-xl"
        :class="$q.screen.gt.xs ? 'q-mx-xl' : 'q-mx-md q-mt-lg'"
      >
        <div style="max-width: 550px">
          <p
            class="text-weight-bold text-accent"
            :class="$q.screen.gt.xs ? 'text-subtitle1' : 'text-subtitle2'"
          >
            SNEAKER COMPANY
          </p>
          <p
            class="text-weight-bold q-mb-lg"
            :class="$q.screen.gt.xs ? 'text-h3' : 'text-h4'"
          >
            Fall Limited Edition Sneakers
          </p>
          <p class="text-subtitle1 text-accent">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div class="row items-center">
            <span class="text-weight-bolder text-h4"
              >${{ store.salePrice }}.00</span
            ><span
              class="text-subtitle1 bg-black text-white text-weight-bold q-px-sm q-ml-md"
              style="border-radius: 5px"
              >50%</span
            >
            <q-space></q-space>
            <p
              v-if="!$q.screen.gt.xs"
              class="text-h6 text-weight-bold text-strike text-accent q-mt-md"
            >
              $250.00
            </p>
          </div>
          <p
            v-if="$q.screen.gt.xs"
            class="text-h6 text-weight-bold text-strike text-accent q-mt-md"
          >
            $250.00
          </p>
          <div
            :class="$q.screen.gt.xs ? 'flex q-mt-lg' : 'flex-column q-mt-lg'"
          >
            <div
              v-if="$q.screen.gt.xs"
              class="flex items-center bg-grey-3"
              style="width: 167px; border-radius: 5px"
            >
              <q-btn
                @click="store.decrement"
                size="md"
                class="text-primary"
                icon="remove"
                flat
              />
              <div
                class="text-weight-bold text-subtitle1 q-mx-lg"
                style="width: 5px"
              >
                {{ store.orderAmount }}
              </div>
              <q-btn
                @click="store.increment"
                size="md"
                class="text-primary"
                icon="add"
                flat
              />
            </div>
            <div
              v-else
              class="flex justify-between items-center bg-grey-3"
              style="border-radius: 5px"
            >
              <q-btn
                @click="store.decrement"
                size="lg"
                class="text-primary"
                icon="remove"
                flat
              />
              <div class="text-weight-bold text-subtitle1">
                {{ store.orderAmount }}
              </div>
              <q-btn
                @click="store.increment"
                size="lg"
                class="text-primary"
                icon="add"
                flat
              />
            </div>
            <q-btn
              v-if="$q.screen.gt.xs"
              @click="store.addToCart"
              class="col bg-primary q-ml-md q-py-sm text-weight-bold"
              style="border-radius: 5px"
              label="Add to cart"
              flat
              size="md"
              no-caps
              icon="mdi-cart-outline"
            />
            <div v-else class="flex q-mt-md">
              <q-btn
                @click="store.addToCart"
                class="col bg-primary q-py-sm text-weight-bold text-subtitle2"
                style="border-radius: 5px"
                label="Add to cart"
                flat
                size="lg"
                no-caps
                icon="mdi-cart-outline"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useCartStore } from "src/stores/cart-items.js";

const store = useCartStore();
</script>

<style lang="scss" scoped>
.main-image {
  max-height: 550px;
}
.thumbnail {
  width: 22%;
  height: 115px;
  border-radius: 10px;
  cursor: pointer;
}
.thumbnail-light {
  width: 18%;
  height: 100px;
  border-radius: 10px;
  cursor: pointer;
}
.active-thumbnail {
  filter: contrast(65%);
  border: 1px solid hsl(26, 100%, 55%);
}
.nav-button {
  position: absolute;
  top: 42%;
  transform: translateY(-50%);
  z-index: 10;
}
.nav-button-mobile {
  position: absolute;
  top: 20%;
  transform: translateY(-50%);
  z-index: 10;
}

.close-button {
  position: absolute;
  top: 5%;
  left: 87%;
  transform: translateY(-50%);
  z-index: 10;
  color: white;
}

.nav-button:hover {
  color: $primary;
}

.nav-button,
.nav-button-mobile {
  background-color: white;
}

.nav-button.left {
  left: 10px;
}

.nav-button.right {
  right: 10px;
}
.nav-button-mobile.left {
  left: 10px;
}

.nav-button-mobile.right {
  right: 10px;
}
</style>
