import type { LangsProps } from "../types/types";
export declare const getColumns: (id: number) => {
    l: any[];
    r: any[];
    m?: undefined;
} | {
    l: any[];
    m: any[];
    r: any[];
} | {
    l?: undefined;
    r?: undefined;
    m?: undefined;
};
/**
 * 自定义表单组件类
 */
declare const getContainers: (langs: LangsProps) => {
    isTem: boolean;
    id: number;
    type: string;
    columns: {
        l: any[];
        r: any[];
        m?: undefined;
    } | {
        l: any[];
        m: any[];
        r: any[];
    } | {
        l?: undefined;
        r?: undefined;
        m?: undefined;
    };
    title: any;
}[];
export default getContainers;
