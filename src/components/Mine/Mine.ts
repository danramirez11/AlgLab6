import { startGame, clickTile, flagTile } from "../../services/game";

import styles from "./Mine.css"

export enum AttributeChar {
	'up' = 'up',
	'mid' = 'mid',
    "down" = "down"
}

export default class Game extends HTMLElement {
	up?: string;
	mid?: string;
    down?: string;

	static get observedAttributes() {
		const attrs: Record<AttributeChar, null> = {
			up: null,
			mid: null,
            down:null,
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: AttributeChar, _: unknown, newValue: string) {
		this[propName] = newValue;
		this.render();
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();

        const board = startGame();
        console.log(board)
        board.forEach((row) => {
            const rowDiv = this.ownerDocument.createElement("div");
            rowDiv.classList.add("rowDiv")
            row.forEach((tile: any) => {
                rowDiv.appendChild(tile);
                tile.classList.add('tile');
                tile.addEventListener("click", clickTile)
				tile.addEventListener("contextmenu", flagTile(tile.id))
            })
            this.shadowRoot?.querySelector('section')?.appendChild(rowDiv);
        })


	}

	render() {
		if (this.shadowRoot)
			this.shadowRoot.innerHTML = `<style>${styles}</style>
            <h2>Mines: 10</h2>
            <section></section>
            <p>aa</p>
        `;
        
	}
}

customElements.define('my-game', Game);

