import { html, LitElement } from "https://unpkg.com/lit-element?module"

class XCard extends LitElement {
  render() {
    return html`
      <style>
        *, *:before, *:after {
          box-sizing: border-box;
        }
        :host {
          display: block;
          /* DO NOT Target these variables that start with an underscore i.e. (--_) */
          /* --[element-name]__[css-part-name]--[css-property] */
          --_accentColor: var(--x-card--accentColor, var(--theme-accent-1, #ff9a00));
          --_textColor: var(--x-card--textColor, var(--theme--text--color, #2e2e2e));
          --_backgroundColor: var(--theme--surface--backgroundColor, #f5f5f5);
          --_surfacePadding: var(--theme--surface--padding, 1em);
          background-color: var(--_backgroundColor);
        }
        [part="top-color"] {
          background-color: var(--x-card__top-color--BackgroundColor, var(--_accentColor));
          height: 10px;
          width: 100%;
        }
        [part="title-container"] {
          display: flex;
          align-items: center;
        }
        [part="title"] {
          color: var(--x-card__title--Color, var(--_accentColor));
          padding: var(--_surfacePadding) var(--_surfacePadding) 0;
          flex: 1 1 auto;
        }
        [part="title"] ::slotted(*) {
          margin: 0;
        }
        [part="icon"] {
          color: var(--x-card__icon--Color, var(--_accentColor));
          padding: 0 var(--_surfacePadding);
        }
        [part="description"] {
          color: var(--_textColor);
          padding: calc(var(--_surfacePadding) / 4) var(--_surfacePadding) 0;
          font-style: var(--x-card__description--FontStyle, italic);
        }
        [part="text"] {
          color: var(--_textColor);
          padding: 0 calc(var(--_surfacePadding) * 2);
        }
      </style>
      <!-- All elements get labeled with "part" attribute -->
      <div part="container">
        <div part="top-color"></div>
        <div part="title-container">
          <div part="title"><slot name="title"></slot></div>
          <div part="icon"><slot name="icon"></slot></div>
        </div>
        <div part="description"><slot name="description"></slot></div>
        <div part="text">
          <slot name="text"></slot>
        </div>
      </div>
    `
  }
}

customElements.define('x-card', XCard)