import { createApp } from 'petite-vue';

export function defineComponent({ tag, template, component, styles }) {
  class CustomElement extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
      // Create a container element inside the shadow root
      const container = document.createElement('div');
      container.innerHTML = `<style>${styles}</style>${template}`;
      this.shadowRoot.appendChild(container);
      // Mount Petite Vue on the container element (not on the shadowRoot directly)
      createApp(component).mount(container);
    }
  }
  if (!customElements.get(tag)) {
    customElements.define(tag, CustomElement);
  }
}
