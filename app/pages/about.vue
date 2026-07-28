<script setup lang="ts">
import HeroTemplateOne from '~/components/templates/template-one/Hero.vue'
import HeroTemplateTwo from '~/components/templates/template-two/Hero.vue'

const loggedUser = useState('loggedUser')
const { currentTemplate } = useTemplate()
// currentTemplate.value = 'template-two'

const heroes = {
  'template-one': HeroTemplateOne,
  'template-two': HeroTemplateTwo,
}

const CurrentHero = computed(() => {
  return heroes[currentTemplate.value]
})
</script>

<template>
  <div class="bg-emerald-600 w-full h-screen text-white flex justify-center items-center text-7xl">
    <article>
      <h1>Yousef About</h1>

      <component :is="CurrentHero" />
    </article>
  </div>
</template>
