/*
<template>
  <div>
    <p>My Component 1 says: {{ msg }}</p>
    <button @click="increment">Increment ({{ count }})</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello from Component 1',
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  }
};
</script>

<style>
p { color: blue; }
</style>
*/

import { defineComponent } from './defineComponent.js';

const template = `
  <div>
    <p>My Component 1 says: {{ msg }}</p>
    <button @click="increment">Increment ({{ count }})</button>
  </div>
`;

const component = {
  msg: 'Hello from Component 1',
  count: 0,
  increment() {
    this.count++;
  }
};

const styles = `
p { color: blue; }
`;

export function registerMyComponent1() {
  defineComponent({
    tag: 'my-component-1',
    template,
    component,
    styles
  });
}
