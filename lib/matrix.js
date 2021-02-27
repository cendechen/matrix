export class Matrix {
    constructor(row = 3, col = 3) {
        this.rowDimension = 0; // 行维度
        this.colDimension = 0; // 列维度
        this.elements = [];
        const out = this._initlize(row, col);
        this.rowDimension = row;
        this.colDimension = col;
        this.set(out);
    }
    _initlize(row, col) {
        const out = [];
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (i === j) {
                    out.push(1);
                }
                else {
                    out.push(0);
                }
            }
        }
        return out;
    }
    //  设置矩阵元素
    set(elements) {
        this.elements = elements;
        return this;
    }
    get(index) {
        if (index !== undefined) {
            return this.elements[index];
        }
        else {
            return this.elements;
        }
    }
    // 根据行和列来获取元素
    getElement(row, col) {
        const dimension = this.getDimension();
        const index = row * dimension.row + col;
        return this.get(index);
    }
    // 获取维度
    getDimension() {
        return {
            row: this.rowDimension,
            col: this.colDimension
        };
    }
    // 获取elements的长度
    getCount() {
        return this.rowDimension * this.colDimension;
    }
    // clone这个矩阵
    clone() {
        const matrix = new Matrix(this.rowDimension, this.colDimension);
        matrix.set(this.elements);
        return matrix;
    }
    // 打印矩阵的方法
    display() {
        const elements = this.elements.slice(0);
        const col = this.colDimension;
        console.log('[');
        for (var i = 0; i < this.rowDimension; i++) {
            const row = elements.slice(i * this.rowDimension, i * this.rowDimension + col);
            console.log(row.join(','));
        }
        console.log(']');
    }
    // 按照行迭代
    forEachByRow(callback) {
        const elements = this.elements;
        for (let i = 0; i < this.rowDimension; i++) {
            var start = i * this.rowDimension;
            var end = start + this.colDimension;
            const row = elements.slice(start, end);
            callback(row);
        }
    }
    // 按照列迭代
    forEachByCol(callback) {
        for (let i = 0; i < this.colDimension; i++) {
            let out = [];
            for (let j = 0; j < this.rowDimension; j++) {
                out.push(this.getElement(j, i));
            }
            callback(out);
        }
    }
    // 矩阵乘法
    multipliy(matrix) {
        const out = this.clone();
        const outArr = [];
        // 遍历行
        out.forEachByRow((row) => {
            matrix.forEachByCol(col => {
                const len = row.length;
                let value = 0;
                for (var i = 0; i < len; i++) {
                    value += row[i] * col[i];
                }
                outArr.push(value);
            });
        });
        out.set(outArr);
        return out;
    }
}
//# sourceMappingURL=matrix.js.map