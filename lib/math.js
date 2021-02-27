const { cos: _cos, sin: _sin } = Math;
// 角度转换为弧度
export const deg2rad = (deg) => {
    return deg / 180 * Math.PI;
};
// 弧度转换为角度
export const rad2deg = (rad) => {
    return rad / Math.PI * 180;
};
// 求sin值
export const sin = (deg) => {
    if (deg === 180 || deg === -180) {
        return 0;
    }
    return _sin(deg2rad(deg));
};
export const cos = (deg) => {
    if (deg === 90 || deg === -90) {
        return 0;
    }
    return _cos(deg2rad(deg));
};
//# sourceMappingURL=math.js.map