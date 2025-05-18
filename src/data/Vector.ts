class Vector {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    add(vector: Vector) {
        this.x += vector.x
        this.y += vector.y
    }

    sub(vector: Vector) {
        this.x -= vector.x
        this.y -= vector.y
    }
    
    mul(scalar: number) {
        this.x *= scalar
        this.y *= scalar
    }

    div(scalar: number) {
        this.x /= scalar
        this.y /= scalar
    }

    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    normalize() {
        const mag = this.mag()
        this.x /= mag
        this.y /= mag
    }

    limit(max: number) {
        const mag = this.mag()
        if (mag > max) {
            this.normalize()
            this.mul(max)
        }
    }

    setMag(mag: number) {
        this.normalize()
        this.mul(mag)
    }

    heading() {
        return Math.atan2(this.y, this.x)
    }

    rotate(angle: number) {
        const mag = this.mag()
        const heading = this.heading()
        this.x = mag * Math.cos(heading + angle)
        this.y = mag * Math.sin(heading + angle)
    }

    copy() {
        return new Vector(this.x, this.y)
    }
    
}

export default Vector