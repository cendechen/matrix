/**
 * 向量类
 *
 *  @author: cendechen
*/

import { Matrix } from './matrix'

export class Vector {
  private dimension: number // 向量的维度
  private elements: number[] = [] // 向量的元素

  constructor (dimension: number = 3) {
    if (dimension === 2) {
      this.elements = [1, 1]
    } else if (dimension === 3) {
      this.elements = [1, 1, 1]
    }
  }

  // 设置向量的值
  set (elements: number[]) {
    this.elements = [ ...elements ]
    return this
  }
  // 获取元素的值
  get (index: number) {
    return this.elements[index]
  }
  display () {
    console.log('[')
    console.log(this.elements.join(','))
    console.log(']')
  }
  /**
   * 向量乘变换矩阵
  */
  dot (matrix: Matrix) {
    // 返回乘法矩阵
    const out = new Vector(this.dimension)
    const outArr = []
    matrix.forEachByRow(row => {
      const len = row.length
      var value = 0
      for (var i = 0; i < len; i ++) {
        value += row[i] * this.get(i)
      }
      outArr.push(value)
    })
    console.log('新举证', outArr)
    out.set(outArr)
    return out
  }
}
