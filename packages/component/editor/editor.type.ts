import { PropsWithChildren } from 'react';

export type EditorProps = PropsWithChildren & {
    data: string;
    config: {
        bold?: boolean;
        italic?: boolean;
        underline?: boolean;
        align?: boolean;
        list?: boolean;
        fontSize?: boolean;
        undoRedo?: boolean;
        image?: boolean;
    };
    onChange: (data: string) => void;
};
