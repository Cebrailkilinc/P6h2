export type EditorProps = {
    data: string;
    config: {
      bold?: boolean;
      italic?: boolean;
      underline?: boolean;
      align?: boolean;
      list?: boolean;
      fontSize?: boolean;
      undoRedo?: boolean;
    };
    onChange: (data: string) => void;
  };