import { html, LitElement, css } from "https://unpkg.com/lit-element?module";

class CoolCard extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        --cool-card--top-color--background-color-default: var(--theme-accent-1);
        --cool-card--text--color-local: var(--theme-font-color);
      }
      [part="top-color"] {
        /* properties that are tied into the "--theme" convention define a css variable --[element-name]--[css-part-name]--[css-property] */
        background-color: var(
          --cool-card--top-color--background-color,
          var(--cool-card--top-color--background-color-default, gray)
        );
        /* properties that are NOT tied into the "--theme" convention define a css variable --[element-name]--[css-part-name]--[css-property], default value */
        height: var(--cool-card--top-color--height, 10px);
        width: var(--cool-card--top-color--width, 100%);
      }
      [part="text"] {
        color: var(
          --cool-card--text--color,
          var(--cool-card--text--color-local, gray)
        );
      }
    `;
  }

  render() {
    return html`
      <!-- All elements get labeled with "part" attribute -->
      <div part="container">
        <div part="top-color"></div>
        <div part="title"><slot name="title"></slot></div>
        <div part="text"><slot name="text"></slot></div>
        <div part="slot">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define("cool-card", CoolCard);

export { CoolCard }