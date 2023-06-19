import type { ContainersProps, LangsProps, ModalItemProps, UploadInfoProps } from "./types/types";
export interface NeoCustomFormProps {
    uploadAction?: string;
    height?: string;
    value?: ModalItemProps[];
    mode?: "design" | "edit" | "view";
    lang?: "zh-CN" | "en-US";
    langPackage?: any;
    header?: () => any;
    hasColon?: boolean;
    domain?: string;
    uploadInfo?: UploadInfoProps;
}
declare const _sfc_main: import("vue").DefineComponent<{
    uploadAction: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    height: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    value: {
        type: ArrayConstructor;
        required: false;
        default: () => any[];
    };
    mode: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    lang: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    langPackage: {
        type: any;
        required: false;
        default: () => {};
    };
    header: {
        type: FunctionConstructor;
        required: false;
        default: () => void;
    };
    hasColon: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    domain: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    uploadInfo: {
        type: any;
        required: false;
        default: () => {
            statusKey: string;
            successValue: number;
            uploadFileName: string;
        };
    };
}, {
    props: any;
    emit: (event: "update:value", ...args: any[]) => void;
    vBar: any;
    selectedItem: import("vue").Ref<ModalItemProps>;
    optionsWidget: import("vue").Ref<string[]>;
    placeholderWidget: import("vue").Ref<string[]>;
    langs: import("vue").Ref<LangsProps>;
    containers: import("vue").Ref<{
        id: number;
        title: string;
        type: string;
    }[]>;
    modals: import("vue").Ref<ModalItemProps[]>;
    isDesign: import("vue").Ref<boolean>;
    selectTab: import("vue").Ref<"tab1" | "tab2">;
    dragType: import("vue").Ref<string>;
    handleClone: (item: ModalItemProps) => any;
    currentValue: import("vue").Ref<ModalItemProps[]>;
    handleMove: (e: any) => boolean;
    selectConponent: (data: (ModalItemProps | ContainersProps)[], id: number) => ModalItemProps;
    handleSelect: (id: number) => void;
    setDragType: (val: string) => void;
    deleteComponent: (data: any, item: ModalItemProps, parent?: any, index?: number) => void;
    handleDelete: (item: ModalItemProps) => void;
    handleAddOption: () => void;
    handleMinusOption: (value: string) => void;
    handleStart: (e: any) => void;
    handleEnd: () => void;
    init: () => void;
    readonly draggable: import("vue").DefineComponent<{
        list: {
            type: ArrayConstructor;
            required: boolean;
            default: any;
        };
        modelValue: {
            type: ArrayConstructor;
            required: boolean;
            default: any;
        };
        itemKey: {
            type: (StringConstructor | FunctionConstructor)[];
            required: boolean;
        };
        clone: {
            type: FunctionConstructor;
            default: (original: any) => any;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
        move: {
            type: FunctionConstructor;
            default: any;
        };
        componentData: {
            type: ObjectConstructor;
            required: boolean;
            default: any;
        };
    }, unknown, {
        error: boolean;
    }, {
        realList(): any;
        getKey(): any;
    }, {
        getUnderlyingVm(domElement: any): any;
        getUnderlyingPotencialDraggableComponent(htmElement: any): any;
        emitChanges(evt: any): void;
        alterList(onList: any): void;
        spliceList(): void;
        updatePosition(oldIndex: any, newIndex: any): void;
        getRelatedContextFromMoveEvent({ to, related }: {
            to: any;
            related: any;
        }): any;
        getVmIndexFromDomIndex(domIndex: any): any;
        onDragStart(evt: any): void;
        onDragAdd(evt: any): void;
        onDragRemove(evt: any): void;
        onDragUpdate(evt: any): void;
        computeFutureIndex(relatedContext: any, evt: any): any;
        onDragMove(evt: any, originalEvent: any): any;
        onDragEnd(): void;
    }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, any[], any, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        move: Function;
        tag: string;
        clone: Function;
        list: unknown[];
        modelValue: unknown[];
        componentData: Record<string, any>;
    } & {
        itemKey?: string | Function;
    }>, {
        move: Function;
        tag: string;
        clone: Function;
        list: unknown[];
        modelValue: unknown[];
        componentData: Record<string, any>;
    }, {}>;
    ListContainer: import("vue").DefineComponent<{
        uploadAction: {
            type: StringConstructor;
            required: true;
            default: string;
        };
        list: {
            type: ArrayConstructor;
            required: true;
            default: () => any[];
        };
        selectedItem: {
            type: any;
            required: true;
            default: () => ModalItemProps;
        };
        mode: {
            type: StringConstructor;
            required: true;
            default: string;
        };
        lang: {
            type: StringConstructor;
            required: true;
            default: string;
        };
        header: {
            type: FunctionConstructor;
            required: true;
            default: () => void;
        };
        hasColon: {
            type: BooleanConstructor;
            required: true;
            default: boolean;
        };
        domain: {
            type: StringConstructor;
            required: true;
            default: string;
        };
        containerIndex: {
            type: any;
            required: true;
            default: any;
        };
        dragType: {
            type: StringConstructor;
            required: true;
            default: string;
        };
        uploadInfo: {
            type: any;
            required: true;
        };
    }, {
        props: any;
        emit: (event: "handleDelete", ...args: any[]) => void;
        uploadHeaders: import("vue").Ref<{}>;
        langs: import("vue").Ref<LangsProps>;
        attachmentModal: import("vue").Ref<ModalItemProps>;
        isDesign: import("vue").Ref<boolean>;
        isEdit: import("vue").Ref<boolean>;
        isView: import("vue").Ref<boolean>;
        uploadRefList: any;
        handleDelete: (item: ModalItemProps) => void;
        handleSelect: any;
        handleListSelect: (e: any) => void;
        handleAdd: (e: any) => void;
        openFile: (url: string) => void;
        setUploadRef: (el: any, id: number) => void;
        onSuccess: (response: any, file: any, fileList: any, item: ModalItemProps) => void;
        setDragType: any;
        handleStart: (e: any) => void;
        handleEnd: () => void;
        handleFileChange: ({ file, fileList }: any, item: ModalItemProps) => void;
        onError: (error: any, fileList: any, file: any) => void;
        beforeUpload: () => void;
        onRemove: (file: any, item: ModalItemProps) => void;
        onPreview: (file: any) => void;
        getMultipleLabels: (item: ModalItemProps) => string | any[];
        getSelectLabel: (item: ModalItemProps) => string;
        formatOldFileData: (data: ModalItemProps) => void;
        initPropsFile: (list: ModalItemProps[], uploadFileName?: string) => ModalItemProps[];
        init: () => void;
        readonly draggable: import("vue").DefineComponent<{
            list: {
                type: ArrayConstructor;
                required: boolean;
                default: any;
            };
            modelValue: {
                type: ArrayConstructor;
                required: boolean;
                default: any;
            };
            itemKey: {
                type: (StringConstructor | FunctionConstructor)[];
                required: boolean;
            };
            clone: {
                type: FunctionConstructor;
                default: (original: any) => any;
            };
            tag: {
                type: StringConstructor;
                default: string;
            };
            move: {
                type: FunctionConstructor;
                default: any;
            };
            componentData: {
                type: ObjectConstructor;
                required: boolean;
                default: any;
            };
        }, unknown, {
            error: boolean;
        }, {
            realList(): any;
            getKey(): any;
        }, {
            getUnderlyingVm(domElement: any): any;
            getUnderlyingPotencialDraggableComponent(htmElement: any): any;
            emitChanges(evt: any): void;
            alterList(onList: any): void;
            spliceList(): void;
            updatePosition(oldIndex: any, newIndex: any): void;
            getRelatedContextFromMoveEvent({ to, related }: {
                to: any;
                related: any;
            }): any;
            getVmIndexFromDomIndex(domIndex: any): any;
            onDragStart(evt: any): void;
            onDragAdd(evt: any): void;
            onDragRemove(evt: any): void;
            onDragUpdate(evt: any): void;
            computeFutureIndex(relatedContext: any, evt: any): any;
            onDragMove(evt: any, originalEvent: any): any;
            onDragEnd(): void;
        }, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, any[], any, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
            move: Function;
            tag: string;
            clone: Function;
            list: unknown[];
            modelValue: unknown[];
            componentData: Record<string, any>;
        } & {
            itemKey?: string | Function;
        }>, {
            move: Function;
            tag: string;
            clone: Function;
            list: unknown[];
            modelValue: unknown[];
            componentData: Record<string, any>;
        }, {}>;
        readonly CloseCircleOutlined: import("@ant-design/icons-vue/lib/icons/CloseCircleOutlined").CloseCircleOutlinedIconType;
        readonly UploadOutlined: import("@ant-design/icons-vue/lib/icons/UploadOutlined").UploadOutlinedIconType;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "handleDelete"[], "handleDelete", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        uploadAction: {
            type: StringConstructor;
            required: true;
            default: string;
        };
        list: {
            type: ArrayConstructor;
            required: true;
            default: () => any[];
        };
        selectedItem: {
            type: any;
            required: true;
            default: () => ModalItemProps;
        };
        mode: {
            type: StringConstructor;
            required: true;
            default: string;
        };
        lang: {
            type: StringConstructor;
            required: true;
            default: string;
        };
        header: {
            type: FunctionConstructor;
            required: true;
            default: () => void;
        };
        hasColon: {
            type: BooleanConstructor;
            required: true;
            default: boolean;
        };
        domain: {
            type: StringConstructor;
            required: true;
            default: string;
        };
        containerIndex: {
            type: any;
            required: true;
            default: any;
        };
        dragType: {
            type: StringConstructor;
            required: true;
            default: string;
        };
        uploadInfo: {
            type: any;
            required: true;
        };
    }>> & {
        onHandleDelete?: (...args: any[]) => any;
    }, {
        uploadAction: string;
        mode: string;
        lang: string;
        header: Function;
        domain: string;
        list: unknown[];
        dragType: string;
    }, {}>;
    readonly MinusOutlined: import("@ant-design/icons-vue/lib/icons/MinusOutlined").MinusOutlinedIconType;
    readonly PlusOutlined: import("@ant-design/icons-vue/lib/icons/PlusOutlined").PlusOutlinedIconType;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:value"[], "update:value", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    uploadAction: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    height: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    value: {
        type: ArrayConstructor;
        required: false;
        default: () => any[];
    };
    mode: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    lang: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    langPackage: {
        type: any;
        required: false;
        default: () => {};
    };
    header: {
        type: FunctionConstructor;
        required: false;
        default: () => void;
    };
    hasColon: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    domain: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    uploadInfo: {
        type: any;
        required: false;
        default: () => {
            statusKey: string;
            successValue: number;
            uploadFileName: string;
        };
    };
}>> & {
    "onUpdate:value"?: (...args: any[]) => any;
}, {
    value: unknown[];
    uploadAction: string;
    height: string;
    mode: string;
    lang: string;
    langPackage: any;
    header: Function;
    hasColon: boolean;
    domain: string;
    uploadInfo: any;
}, {}>;
export default _sfc_main;
