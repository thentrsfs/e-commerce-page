import { defineStore } from "pinia";
import { ref, computed, onBeforeUnmount } from "vue";

export const useCartStore = defineStore("cart", () => {
  const salePrice = ref(125);
  const orderAmount = ref(0);
  const ordered = ref(false);
  const finishOrderAmount = ref(0);
  const maximized = ref(false);
  const currentIndex = ref(0);
  const drawer = ref(false);

  const images = ref([
    "/images/image-product-1.jpg",
    "/images/image-product-2.jpg",
    "/images/image-product-3.jpg",
    "/images/image-product-4.jpg",
  ]);

  const currentImage = computed(() => {
    return images.value[currentIndex.value];
  });

  const totalAmount = computed(() => {
    return salePrice.value * finishOrderAmount.value;
  });

  const selectImage = (image) => {
    currentIndex.value = images.value.indexOf(image);
  };

  const increment = () => {
    orderAmount.value++;
  };
  const decrement = () => {
    if (orderAmount.value > 0) orderAmount.value--;
  };

  const addToCart = () => {
    if (orderAmount.value > 0) {
      finishOrderAmount.value = orderAmount.value;
      ordered.value = true;
    } else {
      resetCart();
    }
  };

  const swipeLeft = () => {
    if (currentIndex.value > 0) {
      currentIndex.value--;
    }
  };
  const swipeRight = () => {
    if (currentIndex.value < images.value.length - 1) {
      currentIndex.value++;
    }
  };

  const resetCart = () => {
    ordered.value = false;
    orderAmount.value = 0;
    finishOrderAmount.value = 0;
  };

  const closeDialog = () => {
    maximized.value = false;
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      swipeLeft();
    } else if (event.key === "ArrowRight") {
      swipeRight();
    }
  };

  const addKeyListeners = () => {
    window.addEventListener("keydown", handleKeyDown);
  };

  const removeKeyListeners = () => {
    window.removeEventListener("keydown", handleKeyDown);
  };

  onBeforeUnmount(() => {
    removeKeyListeners();
  });

  return {
    currentImage,
    currentIndex,
    images,
    selectImage,
    orderAmount,
    ordered,
    increment,
    decrement,
    finishOrderAmount,
    addToCart,
    salePrice,
    totalAmount,
    resetCart,
    maximized,
    swipeLeft,
    swipeRight,
    addKeyListeners,
    removeKeyListeners,
    handleKeyDown,
    closeDialog,
    drawer,
  };
});
