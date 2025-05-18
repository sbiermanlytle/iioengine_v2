import { iioAppProps, iioProps } from "../types"
import { Drawable } from "./Drawable"

export class App extends Drawable {
    private width: number
    private height: number
    private view: HTMLCanvasElement
    private color: string
    private script: Function

    constructor(view: HTMLCanvasElement, script: Function) {
        super({
            canvas: view,
            ctx: view.getContext('2d'),
            width: view.clientWidth || view.width,
            height: view.clientHeight || view.height,
            color: 'rgba(255,255,255,1)'
        })
        this.view = view
        this.width = view.clientWidth || view.width;
        this.height = view.clientHeight || view.height;
        this.script = script
        this.color = 'rgba(255,255,255,1)'
    }

    draw(noClear: Boolean = false) {
        if (!noClear) this.ctx?.clearRect(0, 0, this.width, this.height)
        // draw background color
        if (this.ctx && this.color) {
            this.ctx.fillStyle = this.color
            this.ctx.fillRect(0, 0, this.width, this.height);
        }
    }
}
