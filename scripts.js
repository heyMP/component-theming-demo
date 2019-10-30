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
        [part="top-color"] {
          /* properties that are tied into the "--theme" convention define a css variable --[element-name]--[css-part-name]--[css-property] */
          background-color: var(--x-card--top-color--background-color, var(--x-card--top-color--background-color-default, gray));
          /* properties that are NOT tied into the "--theme" convention define a css variable --[element-name]--[css-part-name]--[css-property], default value */
          height: var(--x-card--top-color--height, 10px);
          width: var(--x-card--top-color--width, 100%);
        }
        [part="text"] {
          color: var(--x-card--text--color, var(--x-card--text--color-default, gray));
        }
      </style>
      <!-- All elements get labeled with "part" attribute -->
      <div part="container">
        <div part="top-color"></div>
        <div part="title"><slot name="title"></slot></div>
        <div part="text"><slot name="text"></slot></div>
        <slot></slot>
      </div>
    `
  }
}

customElements.define('x-card', XCard)