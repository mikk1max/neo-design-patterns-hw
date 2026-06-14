// Декоратор для додавання timestamp
export function withTimestamp<This, Args extends [string, ...any[]], Return>(
  originalMethod: (this: This, ...args: Args) => Return,
  _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
): (this: This, ...args: Args) => Return {
  return function(this: This, ...args: Args): Return {
    const now = new Date();
    const pad = (n: number) => String(n).padStart(2, '0');
    const ts = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    const newArgs = [`[${ts}] ${args[0]}`, ...args.slice(1)] as unknown as Args;
    return originalMethod.call(this, ...newArgs);
  };
}

// Декоратор для перетворення в верхній регістр
export function uppercase<This, Args extends [string, ...any[]], Return>(
  originalMethod: (this: This, ...args: Args) => Return,
  _context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Return>
): (this: This, ...args: Args) => Return {
  return function(this: This, ...args: Args): Return {
    const newArgs = [(args[0] as string).toUpperCase(), ...args.slice(1)] as unknown as Args;
    return originalMethod.call(this, ...newArgs);
  };
}
