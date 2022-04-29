import {Toast} from '@shopify/polaris';
import {useCallback, useContext} from 'react';
import {
  ToastContext,
  ToastDescription,
  ToastStateContext,
} from 'utilities/toast/context';

export function AppToasts() {
  const toasts = useContext(ToastStateContext);
  const {hide} = useContext(ToastContext);
  const handleDismiss = useCallback(
    (toast) => {
      hide(toast);
    },
    [hide],
  );

  if (!toasts || toasts.length === 0) {
    return null;
  }

  return <>{toasts.map(renderToast)}</>;

  function renderToast(toast: ToastDescription) {
    return <Toast key={toast.content} {...toast} onDismiss={onDismiss} />;

    function onDismiss() {
      toast.onDismiss?.();
      handleDismiss(toast);
    }
  }
}
