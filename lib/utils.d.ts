import { Matrix } from './matrix';
import { Vector } from './vector';
export declare const translateMatrix: (v: Vector) => Matrix;
export declare const rotateMatrix: (deg: number) => Matrix;
export declare const scaleMatrix: (scaleX: number, scaleY?: number) => Matrix;
