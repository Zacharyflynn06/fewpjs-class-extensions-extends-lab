// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides
        this.count = this.sides.length
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {

        let sum = 0
        for (const element of this.sides) {
            sum += element
        }
        return sum
    }

}


class Triangle extends Polygon {
    
    get isValid() {
        if (this.count !== 3) return
        let firstSide = this.sides[0]
        let secondSide = this.sides[1]
        let thirdSide = this.sides[2]

        return((firstSide + secondSide > thirdSide) && (firstSide + thirdSide > secondSide) && (secondSide + thirdSide > firstSide))
    }
}

class Square extends Polygon {

    get isValid() {

        if (this.count !== 4) return
        let firstSide = this.sides[0]
        let secondSide = this.sides[1]
        let thirdSide = this.sides[2]
        let fourthSide = this.sides[3]

        return ((firstSide === secondSide) && (firstSide === thirdSide) && (firstSide === fourthSide))
    }

    get area() {
        return this.sides[0] * this.sides[0]
    }

}