# React tips

## 1. don't use React.FunctionalComponent

- explicit Props bro, it's "just javascript"

## 2. explicit children

```ts
{
  children: React.ReactNode
}
```

## 3. React.ReactNode or wat ?

- Don't ReactNode !

- DO: `ReactChild` and tuples/arrays

## 4. defaultProps

- `JSX.LibraryManagedAttributes` + Cmp.defaultProps = {}
- plain js object and old good args merge FTW!

> const assertions

## 5. Type safe web components / amp within JSX

-> Extends JSX.intrinsic elements

```ts
declare global {
  namespace JSX {
    interface IntrinsicElements {
      // 'x-greeter': React.DetailedHTMLProps<
      //   React.HTMLAttributes<Greeter>,
      //   Greeter
      // >
      'x-greeter': Pick<
        import('../lib/web-components').Greeter,
        'who' | 'greeting'
      > & {
        children?: ReactChild
      }
    }
  }
}
```

## 6.(Optional) tuples for customHooks
