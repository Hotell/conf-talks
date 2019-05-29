import { lazy, LazyExoticComponent } from 'react'

export type PreloadingStrategy = 'PreloadAllModules' | 'NoPreloading'

/**
 *
 * @param factory
 * @param preload - determine if component chunk should be loaded immediately or on demand by user
 */
export function lazyWithPreload(
  factory: () => Promise<{ default: any }>,
  preload = true
) {
  if (preload) {
    // load dynamic chunk immediately
    const chunk = factory()
    const Component = lazy(() => chunk)

    return Component
  }

  const Component = lazy(factory) as LazyExoticComponent<any> & {
    preload?: typeof factory
  }
  Component.preload = factory

  return Component
}
