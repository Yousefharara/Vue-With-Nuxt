<script setup lang="ts">
import Products from '~/components/sections/HomeSections/Products.vue';
import HeroTemplateOne from '~/components/templates/template-one/Hero.vue';
import HeroTemplateTwo from '~/components/templates/template-two/Hero.vue';

const {currentTemplate} = useTemplate()

const heroes = {
  "template-one" : HeroTemplateOne,
  "template-two" : HeroTemplateTwo,
}

const currentHero = computed(() => (
  heroes[currentTemplate.value]
))

</script>
<template>
  <div>
    <div class="container-sec text-5xl font-semibold bg-red-600 my-8! flex justify-center items-center">
      <component :is="currentHero"/>
    </div>
    <Products />
  </div>
</template>
