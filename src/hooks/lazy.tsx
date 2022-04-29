import {SkeletonBodyText, SkeletonPage} from '@shopify/polaris';
import React, {ReactChild} from 'react';

export interface Options {
  fallback?: ReactChild;
  title?: string;
}

export function useLazyComponent(
  component: ReactChild,
  {title, fallback = defaultLazyFallback(title)}: Options = {},
) {
  return <React.Suspense fallback={fallback}>{component}</React.Suspense>;
}

export function defaultLazyFallback(title?: string): ReactChild {
  return (
    <SkeletonPage title={title}>
      <SkeletonBodyText />
    </SkeletonPage>
  );
}
