/*
<template>
  <div>
    <p>My Component 2 says: {{ msg }}</p>
    <button @click="increment">Click Me ({{ count }})</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello from Component 2',
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
p { color: green; }
</style>
*/

import { defineComponent } from './defineComponent.js';

const template = `
  <div>
    <p>My Component 2 says: {{ msg }}</p>
    <button @click="increment">Click Me ({{ count }})</button>
  </div>
`;

const component = {
  msg: 'Hello from Component 2',
  count: 0,
  increment() {
    this.count++;
  }
};

const styles = `
p { color: green; }
`;

export function registerMyComponent2() {
  defineComponent({
    tag: 'my-component-2',
    template,
    component,
    styles
  });
}
