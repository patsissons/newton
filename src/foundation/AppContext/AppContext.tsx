import {AppProvider} from '@shopify/polaris';
import {I18nContext, I18nManager} from '@shopify/react-i18n';
import enTranslations from '@shopify/polaris/locales/en.json';
import {useMemo, useRef, useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {PropsWithChildren} from 'types';
import {
  Toast,
  ToastContext,
  ToastDescription,
  ToastStateContext,
} from 'utilities/toast/context';

export interface Props {
  locale?: string;
}

export function AppContext({
  children,
  locale = 'en',
}: PropsWithChildren<Props>) {
  const manager = useMemo(() => {
    return new I18nManager({
      locale,
    });
  }, [locale]);
  const [toastState, setToastState] = useState<ToastDescription[]>();
  const toast = useRef<Toast>({
    show(toastToShow) {
      setToastState((state = []) => state.concat(toastToShow));
    },
    hide(removeSelector) {
      if (removeSelector) {
        setToastState((state = []) =>
          typeof removeSelector === 'function'
            ? state.filter((item) => !removeSelector(item))
            : state.filter((item) => item !== removeSelector),
        );
      } else {
        setToastState([]);
      }
    },
  });

  return (
    <AppProvider i18n={enTranslations}>
      <I18nContext.Provider value={manager}>
        <ToastContext.Provider value={toast.current}>
          <ToastStateContext.Provider value={toastState}>
            <BrowserRouter>{children}</BrowserRouter>
          </ToastStateContext.Provider>
        </ToastContext.Provider>
      </I18nContext.Provider>
    </AppProvider>
  );
}
