import { html, LitElement } from "https://unpkg.com/lit-element?module"

class XCard extends LitElement {
  render() {
    return html`
      <style>
        :host {
          display: block;
          --x-card--top-color--background-color-default: var(--theme-accent-1);
          --x-card--text--color-default: var(--theme-font-color);
        }
        [part="text"] {
          color: var(--x-card--text--color);
        }
        [part="top-color"] {
          background-color: var(--x-card--top-color--background-color, var(--x-card--top-color--background-color-default, gray));
          height: var(--x-card--top-color--height, 10px);
          width: var(--x-card--top-color--width, 100%);
        }
      </style>
      <div part="container">
        <div part="top-color"></div>
        <div part="title">Title</div>
        <div part="text">Blah blah blah...</div>
        <slot></slot>
      </div>
    `
  }
}

customElements.define('x-card', XCard)