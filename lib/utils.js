import { Matrix } from './matrix';
import { cos, sin } from './math';
// 移动矩阵
export const translateMatrix = (v) => {
    const out = new Matrix(3, 3);
    out.set([
        1, 0, v.get(0),
        0, 1, v.get(1),
        0, 0, 1
    ]);
    return out;
};
// 旋转矩阵
export const rotateMatrix = (deg) => {
    const out = new Matrix();
    out.set([
        cos(deg), -sin(deg), 0,
        sin(deg), cos(deg), 0,
        0, 0, 1
    ]);
    return out;
};
// 缩放矩阵
export const scaleMatrix = (scaleX, scaleY) => {
    const out = new Matrix();
    if (scaleY === undefined) {
        scaleY = scaleX;
    }
    out.set([
        scaleX, 0, 0,
        0, scaleY, 0,
        0, 0, 1
    ]);
    return out;
};
//# sourceMappingURL=utils.js.map