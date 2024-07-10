// @emoji-mart/react exposes an empty type scheme
// This is here as a fallback, until they update their types
// See https://github.com/missive/emoji-mart/issues/576
declare module '@emoji-mart/react' {
  import type { FC } from 'react';
  import { Picker } from 'emoji-mart';

  type ExtractProps<T> = {
    [K in keyof T]?: T[K] extends { value: infer V } ? V : never;
  };

  type PickerPropsValues = ExtractProps<typeof Picker.Props>;

  const EmojiPicker: FC<PickerPropsValues>;
  export default EmojiPicker;
}
