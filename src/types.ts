import { App } from "./core/App"
import { Drawable } from "./core/Drawable"
import Vector from "./data/Vector"

export type iioApp = {
    canvas: HTMLCanvasElement
    ctx?: CanvasRenderingContext2D
    width: number
    height: number
}

export type iioAppProps = {
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D | null
    width: number
    height: number
    color: string
    app?: App
    pos?: Vector
}

export type iioProps = {
    ctx?: CanvasRenderingContext2D
    pos?: Vector
    app?: App
}