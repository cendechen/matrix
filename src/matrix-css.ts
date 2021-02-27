import { Matrix } from './matrix'
import { sin, cos, tan } from './math'
// 集成矩阵
export class MatrixCss extends Matrix {

  constructor (row: number = 4, col: number = 4) {
    super(row, col)
  }

  scaleZ (scale: number) {
    const m = new MatrixCss()
    m.set([
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, scale, 0,
      0, 0, 0, 1
    ])
    return this.multipliy(m)
  }

  scaleY (scale: number) {
    const m = new MatrixCss()
    m.set([
      1, 0, 0, 0,
      0, scale, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ])
    return this.multipliy(m)
  }

  scaleX (scale: number) {
    const m = new MatrixCss()
    m.set([
      scale, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ])
    return this.multipliy(m)
  }
  // 设置缩放等级
  scale (x: number = 1, y?: number, z?: number) {
    if (z === undefined) {
      z = 1
    }
    if (y === undefined) {
      y = 1
    }
    return this.multipliy(this.scaleX(x).scaleY(y).scaleZ(z))
  }

  rotateX (o: number) {
    const cosb = cos(o)
    const sinb = sin(o)

    const m = new MatrixCss()
    m.set([
      1, 0, 0, 0,
      0, cosb, -sinb, 0,
      0, sinb, cosb, 0,
      0, 0, 0, 1
    ])
    return this.multipliy(m)
  }

  rotateY (o: number) {
    const cosb = cos(o)
    const sinb = sin(o)

    const m = new MatrixCss()
    m.set([
      cosb, 0, -sinb, 0,
      0, 1, 0, 0,
      sinb, 0, cosb, 0,
      0, 0, 0, 1
    ])
    return this.multipliy(m)
  }

  rotateZ (o: number) {
    const cosb = cos(o)
    const sinb = sin(o)

    const m = new MatrixCss()
    m.set([
      cosb, -sinb, 0, 0,
      sinb, cosb, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ])
    return this.multipliy(m)
  }

  translate (x: number = 0, y: number = 0, z: number = 0) {
    const m1 = new MatrixCss()
    m1.set([
      1, 0, 0, x,
      0, 1, 0, y,
      0, 0, 1, z,
      0, 0, 0, 1
    ])
    return this.multipliy(m1)
  }
  translateX (x: number) {
    const m1 = new MatrixCss()
    m1.set([
      1, 0, 0, x,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ])
    return this.multipliy(m1)
  }
  translateY (y: number) {
    const m1 = new MatrixCss()
    m1.set([
      1, 0, 0, 0,
      0, 1, 0, y,
      0, 0, 1, 0,
      0, 0, 0, 1
    ])
    return this.multipliy(m1)
  }
  translateZ (z: number) {
    const m1 = new MatrixCss()
    m1.set([
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, z,
      0, 0, 0, 1
    ])
    return this.multipliy(m1)
  }

  skewX (deg: number) {
    const m1 = new MatrixCss()
    const tanb = tan(deg)
    m1.set([
      1, tanb, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ])
    return this.multipliy(m1)
  }
  skewY (deg: number) {
    const m1 = new MatrixCss()
    const tanb = tan(deg)
    m1.set([
      1, 0, 0, 0,
      tanb, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ])
    return this.multipliy(m1)
  }
  // 获取css表示
  css () {
    return `matrix3d(${this.elements.join(',')})`
  }
}
