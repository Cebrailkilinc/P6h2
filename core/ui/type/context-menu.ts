import { MouseEventHandler } from 'react';

export type ContextEvents<T extends string | number> = { [key in T]?: () => void };

export type ContextEventsProp<T extends string | number> = {
  events?: ContextEvents<T>;
};

export type ContextEventHandler<T extends string | number> = (
  type: T,
) => MouseEventHandler<HTMLDivElement>;
