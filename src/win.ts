export const win = (typeof window !== 'undefined'
  ? window
  : typeof self === 'object' && self.self === self
  ? self
  : global) as unknown as Window;
