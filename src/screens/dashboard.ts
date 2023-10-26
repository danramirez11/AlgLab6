import Game, {AttributeChar} from "../components/Mine/Mine";

class Dashboard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) this.shadowRoot.innerHTML = `<style></style>
        <h1>HPTA BUSCAMINAS</h1>
        <h2>AAA</h2>
        <my-game></my-game>
        `;

		

	}
}

customElements.define('app-dashboard', Dashboard);