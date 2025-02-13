/*
<template>
  <div>
    <p>My Component 3 says: {{ msg }}</p>
    <button @click="increment">Press Me ({{ count }})</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello from Component 3',
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
p { color: purple; }
</style>
*/

import { defineComponent } from './defineComponent.js';

const template = `
  <div>
    <p>My Component 3 says: {{ msg }}</p>
    <button @click="increment">Press Me ({{ count }})</button>
  </div>
`;

const component = {
  msg: 'Hello from Component 3',
  count: 0,
  increment() {
    this.count++;
  }
};

const styles = `
p { color: purple; }
`;

export function registerMyComponent3() {
  defineComponent({
    tag: 'my-component-3',
    template,
    component,
    styles
  });
}
