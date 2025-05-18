
// APP CONTROL

import { iioProps } from "../types";
import { App } from "./App";

//-------------------------------------------------------------------
export function iioStart (app: Function, id: string)  {
    const canvas = document.getElementById(id) as HTMLCanvasElement
    return new App(canvas, app)
}