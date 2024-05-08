// Functions related to HelloWorld vue

import { Quad } from '@rdfjs/types'
import clownface from 'clownface'
import { default as factory } from 'rdf-ext'
import { v4 as uuid } from 'uuid'
import env from '@zazuko/env'
import DatasetExt from 'rdf-ext/lib/Dataset'

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

export const rdf = () => {
  const data = clownface({
    dataset: getStuard(),
  })

  return data.has(lastName).out(firstName).values
}
