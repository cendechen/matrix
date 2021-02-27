export declare class Matrix {
    private rowDimension;
    private colDimension;
    private elements;
    constructor(row?: number, col?: number);
    private _initlize;
    set(elements: number[]): this;
    get(index?: number): number | number[];
    getElement(row: number, col: number): number | number[];
    getDimension(): {
        row: number;
        col: number;
    };
    getCount(): number;
    clone(): Matrix;
    display(): void;
    forEachByRow(callback: any): void;
    forEachByCol(callback: any): void;
    multipliy(matrix: Matrix): Matrix;
}
