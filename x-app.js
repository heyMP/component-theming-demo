import { html, LitElement, css } from "https://unpkg.com/lit-element?module";
import "./x-card.js";

class XApp extends LitElement {
  static get styles() {
    return css`
      /* Default Lightdom styles */
      :host {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 100vh;
        padding: 0;
        margin: 0;
      }

      x-card::part(title) {
        color: rebeccapurple;
      }
    `;
  }

  render() {
    return html`
      <main>
        <x-card icon="⏰">
          <h2 slot="title">Main Content</h2>
          <div slot="text">This is my main content</div>
          <p>
            Sit irure et magna ex eiusmod aliqua est fugiat eiusmod laborum
            Lorem cillum nulla. Enim veniam pariatur fugiat et enim id in sit
            cillum culpa. Ullamco commodo fugiat excepteur magna eiusmod ea
            reprehenderit nisi duis ut nulla minim.
          </p>
        </x-card>
      </main>
      <slot></slot>
      <footer>
        <x-card icon="👣">
          <h2 slot="title">Footer Content</h2>
          <div slot="text">This is my footer content</div>
          <p>
            Proident ea incididunt nostrud veniam fugiat dolore ipsum aute ea.
            Nostrud consectetur excepteur est elit amet ullamco quis nisi
            officia. Officia commodo exercitation est anim ut. Laborum labore
            deserunt id laboris aliqua aliquip nisi in anim tempor tempor aute.
            Consectetur ea adipisicing aliquip laborum aliqua officia dolor
            ullamco excepteur.
          </p>
        </x-card>
      </footer>
    `;
  }
}

customElements.define("x-app", XApp);
