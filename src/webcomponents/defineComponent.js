import { createApp } from 'petite-vue';

/**
 * Helper to register a custom element (web component) with Petite Vue.
 * Options:
 *   - tag: custom element tag name (e.g. 'my-component-1')
 *   - template: HTML string for the component’s markup
 *   - component: an object containing data and methods
 *   - styles (optional): CSS string to be scoped inside the shadow DOM
 */
export function defineComponent({ tag, template, component, styles }) {
  class CustomElement extends HTMLElement {
    constructor() {
      super();
      // Attach shadow DOM for style encapsulation.
      this.attachShadow({ mode: 'open' });
      // Optionally inject styles.
      if (styles) {
        const styleEl = document.createElement('style');
        styleEl.textContent = styles;
        this.shadowRoot.appendChild(styleEl);
      }
      // Create a container element for the template.
      const container = document.createElement('div');
      container.innerHTML = template;
      this.shadowRoot.appendChild(container);
      this._container = container;
    }
    connectedCallback() {
      this._app = createApp(component);
      this._app.mount(this._container);
    }
    disconnectedCallback() {
      if (this._app) {
        this._app.unmount();
        this._app = null;
      }
    }
  }
  window.customElements.define(tag, CustomElement);
}
