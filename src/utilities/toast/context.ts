import {Action} from '@shopify/polaris';
import {createContext} from 'react';
import {noop} from 'utilities/misc';

export interface ToastDescription {
  content: string;
  error?: boolean;
  dismissible?: boolean;
  duration?: number;
  onDismiss?(): void;
  action?: Action;
}

export interface Toast {
  show(toastToShow: ToastDescription): void;
  hide(
    removeSelector?: ToastDescription | ((item: ToastDescription) => boolean),
  ): void;
}

export const ToastContext = createContext<Toast>({
  show: noop,
  hide: noop,
});

export const ToastStateContext = createContext<ToastDescription[] | undefined>(
  undefined,
);
