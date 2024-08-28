import React from 'react'
import { createRoot } from 'react-dom/client';

import { HelloWordComponent } from './HelloWord/HelloWordComponent';

class ReactMfe extends HTMLElement {
  connectedCallback() {
    const root = createRoot(this);
    root.render(<HelloWordComponent />);
  }
}

customElements.define('react-element', ReactMfe);