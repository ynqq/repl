export declare type LangsProps = {
    [k in string]: any;
};
export interface ModalValueProps {
    value: string;
    label: string;
}
export interface ModalItemProps {
    isTem?: boolean;
    id: number;
    type: "input" | "textarea" | "select" | "multiple" | "radio" | "checkbox" | "date" | "inputNumber" | "email" | "link" | "attachment" | "container2" | "container3";
    title: string;
    model?: string | string[] | number | number[] | undefined;
    icon?: any;
    placeholder?: string;
    action?: string;
    nameMapping?: string;
    urlMapping?: string;
    fileName?: string;
    defaultList?: any[];
    value?: ModalValueProps[];
    format?: any;
    formatOptions?: any[];
    append?: string;
    prepend?: string;
    hasSuffix?: boolean;
    suffixOptions?: boolean[];
    columns?: ContainerColumnsProp;
}
export interface ContainerColumnsProp {
    l: ModalItemProps[];
    m?: ModalItemProps[];
    r: ModalItemProps[];
}
export interface ContainersProps {
    id: number;
    type: string;
    columns: ContainerColumnsProp;
    title: string;
}
export interface UploadInfoProps {
    statusKey: string;
    successValue: number;
    uploadFileName: string;
}
