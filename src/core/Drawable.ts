import { iioAppProps, iioProps } from "../types"
import { Interface } from "./Interface"
import Vector from "../data/Vector"
import { App } from "./App"

export class Drawable extends Interface {
    protected app: App | undefined
    protected ctx: CanvasRenderingContext2D | null
    protected pos: Vector
    protected objs: Array<Drawable>
    protected collisions: Array<Drawable>

    constructor(props: iioAppProps) {
        super(props)
        this.app = props.app
        this.ctx = props.ctx
        this.pos = props.pos || new Vector(0,0)
        this.objs = []
        this.collisions = []
    }

    set(props: iioAppProps, redraw: Boolean = true) {
        this.props = props
        if (redraw) this.app?.draw()
        return this
    }
}
