import { translateMatrix, scaleMatrix, rotateMatrix, Vector, MatrixCss } from '../src'

const out = scaleMatrix(2)
out.display()

const rout = rotateMatrix(45)
rout.display()

const cout = out.multipliy(rout)
cout.display()

const v = new Vector(3)
v.set([5, 10, 1])

const tout = translateMatrix(v)

tout.display()

var nv = v.dot(tout)

v.display()
nv.display()

const mc = new MatrixCss()

console.log(mc.scaleY(4).rotateX(45).css())
