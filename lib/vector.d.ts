/**
 * 向量类
 *
 *  @author: cendechen
*/
import { Matrix } from './matrix';
export declare class Vector {
    private dimension;
    private elements;
    constructor(dimension?: number);
    set(elements: number[]): this;
    get(index: number): number;
    display(): void;
    /**
     * 向量乘变换矩阵
    */
    dot(matrix: Matrix): Vector;
}
