<script setup lang="ts">
const products = ref([
  {
    name: "laptop",
    price: 2000,
  },
  {
    name: "iPhone",
    price: 4000,
  },
]);

const totalPrice = computed(() => {
  return products.value.reduce((total, product) => total + product.price, 0);
});
// const totalPrice = () => {
//   return products.value.reduce((total, product) => total + product.price, 0);
// }

const increaseLaptop = () => {
  if (products.value[0]) {
    console.log(products.value[0]?.price);
    products.value[0].price++;
  }
};
</script>
<template>
  <div>
    <h1>Total Price : {{ totalPrice }}</h1>
    <button
      class="px-6 py-4 border border-zinc-400 rounded-md cursor-pointer"
      @click="increaseLaptop"
    >
      increse laptop price {{ products[0]?.price }}
    </button>
  </div>
</template>
