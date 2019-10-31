import { html, LitElement, css } from "https://unpkg.com/lit-element?module";
import { CoolCard } from "./cool-card.js";

class XCard extends LitElement {
  static get properties() {
    return {
      icon: { type: String }
    }
  }

  constructor() {
    super()
    this.icon = "♣"
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
          max-width: 30em;
        }

        ::part(top-color) {
          background: #36c;
          background: linear-gradient(
                115deg,
                transparent 75%,
                rgba(255, 255, 255, 0.8) 75%
              )
              0 0,
            linear-gradient(
                245deg,
                transparent 75%,
                rgba(255, 255, 255, 0.8) 75%
              )
              0 0,
            linear-gradient(
                115deg,
                transparent 75%,
                rgba(255, 255, 255, 0.8) 75%
              )
              7px -15px,
            linear-gradient(
                245deg,
                transparent 75%,
                rgba(255, 255, 255, 0.8) 75%
              )
              7px -15px,
            #36c;
          background-size: 15px 30px;
          height: 50px;
        }

        [part="icon"] {
          display: inline;
          padding-right: 10px;
        }

        [part="title"] ::slotted(*) {
          display: inline-block;
        }
      `
    ];
  }

  render() {
    return html`
      <cool-card>
        <div part="container">
          <div part="title => title" slot="title">
            <div part="icon">${this.icon}</div>
            <slot name="title"></slot>
          </div>
          <div part="text => text" slot="text"><slot name="text"></slot></div>
          <div part="slot => slot">
            <slot></slot>
          </div>
        </div>
      </cool-card>
    `;
  }
}

customElements.define("x-card", XCard);
