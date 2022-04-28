import {PropsWithChildren as PropsWithChildrenActual} from 'react';

export interface EmptyProps {}

export type PropsWithChildren<Props = EmptyProps> =
  PropsWithChildrenActual<Props>;
