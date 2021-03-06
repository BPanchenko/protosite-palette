import {
    getPicture,

    renderCircleInSquare,
    renderColumns,
    renderDiscCover,
    renderFilm,
    renderFrontSight,
    renderQuarterCircle,
    renderNineCircles,
    renderPyramid,
    renderRecord,
    renderSemicircleAndTwoQuarters,
    renderSquares,
    renderSixCircles,
    renderSixRings,
    renderTwoSemicircles
  
} from './pics/_import.js'

// Class of Custom Element
// ==========================================================================

class ColorCompositionTemplate extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.appendChild(getPicture(renderTwoSemicircles()))
        this.appendChild(getPicture(renderColumns()))
        this.appendChild(getPicture(renderFrontSight()))
        this.appendChild(getPicture(renderFilm()))
        this.appendChild(getPicture(renderRecord()))
        this.appendChild(getPicture(renderSquares()))
        this.appendChild(getPicture(renderQuarterCircle()))
        this.appendChild(getPicture(renderPyramid()))
        this.appendChild(getPicture(renderNineCircles()))
        this.appendChild(getPicture(renderSixRings()))
        this.appendChild(getPicture(renderDiscCover()))

        this.appendChild(getPicture(renderNineCircles({
            colors: ['green-grey', 'yellow', 'red']
        })))

        this.appendChild(getPicture(renderSemicircleAndTwoQuarters()))
        this.appendChild(getPicture(renderCircleInSquare()))
        this.appendChild(getPicture(renderSixCircles()))
    }

    static get observedAttributes() {
        return ['data-width', 'data-height']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(oldValue === newValue) return null
        console.log('Custom square element attributes changed.', name, oldValue, newValue)
    }
}

export {
    ColorCompositionTemplate
}