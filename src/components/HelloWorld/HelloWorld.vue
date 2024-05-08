<script setup lang="ts">
import { ref } from 'vue'
import { Quad } from '@rdfjs/types'
import clownface from 'clownface'
import { default as factory } from 'rdf-ext'
import { v4 as uuid } from 'uuid'
import env from '@zazuko/env'
import DatasetExt from 'rdf-ext/lib/Dataset'

interface iProps {
  msg: string
}

defineProps<iProps>()

const count = ref(0)

const Person = env.namedNode('http://xmlns.com/foaf/0.1/Person')
const firstName = env.namedNode('http://xmlns.com/foaf/0.1/firstName')
const lastName = env.namedNode('http://xmlns.com/foaf/0.1/lastName')

const getStuard = (): DatasetExt => {
  const blankNode = factory.blankNode(uuid())
  const dataset = factory.dataset()
  const quads: Quad[] = [
    factory.quad(blankNode, env.ns.rdf.type, Person),
    factory.quad(blankNode, firstName, factory.literal('Stuart')),
    factory.quad(blankNode, lastName, factory.literal('Bloom')),
  ]

  dataset.addAll(quads)

  return dataset
}

const rdf = () => {
  const data = clownface({
    dataset: getStuard(),
  })

  return data.has(lastName).out(firstName).values
}

console.log(rdf())
</script>

<template>
  <div class="container">
    <h1>{{ msg }}</h1>

    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
      <p>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">
        create-vue
      </a>
      , the official Vue + Vite starter
    </p>
    <p>
      Install
      <a href="https://github.com/vuejs/language-tools" target="_blank">
        Volar
      </a>
      in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>

<style scoped lang="scss">
@import './HelloWorld.scss';
</style>
