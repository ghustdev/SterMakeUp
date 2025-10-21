declare module 'locomotive-scroll' {
  interface LocomotiveScrollOptions {
    el?: Element | string | null
    smooth?: boolean
    multiplier?: number
    class?: string
    scrollbarContainer?: Element | string | null
    scrollFromAnywhere?: boolean
    direction?: 'horizontal' | 'vertical'
    gestureDirection?: 'both' | 'vertical' | 'horizontal'
    reloadOnContextChange?: boolean
    resetNativeScroll?: boolean
    lerp?: number
    getDirection?: boolean
    getSpeed?: boolean
    classMobile?: string
    smartphone?: {
      smooth?: boolean
      direction?: 'horizontal' | 'vertical'
      gestureDirection?: 'both' | 'vertical' | 'horizontal'
      breakpoint?: number
    }
    tablet?: {
      smooth?: boolean
      direction?: 'horizontal' | 'vertical'
      gestureDirection?: 'both' | 'vertical' | 'horizontal'
      breakpoint?: number
    }
  }

  class LocomotiveScroll {
    constructor(options?: LocomotiveScrollOptions)
    init(): void
    update(): void
    start(): void
    stop(): void
    scrollTo(target: string | number, options?: { offset?: number; duration?: number; easing?: number[] }): void
    destroy(): void
    on(event: string, callback: (args?: any) => void): void
    off(event: string, callback: (args?: any) => void): void
  }

  export default LocomotiveScroll
}
