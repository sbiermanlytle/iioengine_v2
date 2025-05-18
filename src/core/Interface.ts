import { iioAppProps, iioProps } from "../types";

export class Interface {
    protected props: iioAppProps

    constructor(props: iioAppProps) {
        this.props = props
    }

    set(props: iioAppProps, redraw: Boolean = true) {
        return this
    }

    clone(): Interface {
        return new Interface(this.props)
    }
}
