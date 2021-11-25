let tmpl = document.createElement('template');
class App extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        // this.render();
    }
    
    render(){
        const name=this.getAttribute('name');
        // let shadowRoot = this.attachShadow({mode: 'open'});
        // tmpl.innerHTML=
        this.innerHTML=`
            <h3>${name}</h3>
        `;
        // shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }
    
    connectedCallback() {
        if (!this.rendered) {
            this.render();
            this.rendered = true;
        }
    }
    
    disconnectedCallback() {
    
    }
    
    static get observedAttributes() { // (3)
        return ['name'];
    }
    
    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log(newVal);
        this.render();
    }
}

customElements.define('app-main', App);