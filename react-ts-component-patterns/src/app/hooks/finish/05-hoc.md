# HoC - Story line


## Intro

So we got a component `CounterWannabe` that has following props. It basically watn's to support the same API as our `Counter`

```ts
type CounterWannabeProps = {
  count: number
  inc: () => void
  dec: () => void
  colorType?: ColorTypes
}
```

Without duplicating our types, we can leverage prop types from Counter with some typescript mapped types dark magic.

```ts
type InjectedProps = Parameters<ComponentProps<typeof Counter>['children']>[0]
```

and use those via intersection

```ts
type CounterWannabeProps = InjectedProps & {
  colorType?: ColorTypes
}
```

Why the name `InjectedProps` ?
> We are going to inject this behaviour via our HoC


## HoC one (inject + pass)

this is what we want

```ts
const ExtendedComponent = withCounter(CounterWannabe)
```

Let's implement it:

```tsx
const withCounter = <P extends InjectedProps>(Cmp: React.ComponentType<P>) => {
  const WithCounter = (props: P) => {
    const {...passThrough} = props

    return <Cmp {...passThrough}/>
  }

  return WithCounter
}
```

Now with this

```tsx
<ExtendedComponent colorType="secondary"/>
```

We'll get errors like:

```
Property 'count' is missing in type '{ colorType: "secondary"; }' but required
```

That's because we didn't "inject" those props in our HoC and didn't annotate it properly. Let's do that:


```tsx
const withCounter = <P extends InjectedProps>(Cmp: React.ComponentType<P>) => {
  const WithCounter = (props: Subtract<P,InjectedProps>) => {
    const {...passThrough} = props

    return <Cmp {...passThrough}/>
  }

  return WithCounter
}
```

While that fixed one error, we got another error:

```
Type 'Pick<P, Exclude<keyof P, "count" | "inc" | "dec">>' is not assignable to type 'P'
```

Well of course, thanks typescript! We didn't inject those into our wrapped component. Let's do that now.

How?

Implement it again right? Nope. We can leverage our Counter!

```tsx
const withCounter = <P extends InjectedProps>(Cmp: React.ComponentType<P>) => {
  const WithCounter = (props: Subtract<P, InjectedProps>) => {
    const { ...passThrough } = props

    return (
      <Counter>
        {(injectedProps) => {
          return <Cmp {...injectedProps as P} {...passThrough} />
        }}
      </Counter>
    )
  }

  return WithCounter
}
```


## HoC two (extend)

We can extend our behaviour with new one


```ts
type ExtendedProps = { maxCount?: number }
```

```ts
const WithCounter = (props: Subtract<P, InjectedProps> & ExtendedProps) => {
```

Behold our Hoc in it's whole glory

```tsx
const withCounter = <P extends InjectedProps>(Cmp: React.ComponentType<P>) => {
  const WithCounter = (props: Subtract<P, InjectedProps> & ExtendedProps) => {
    const { maxCount,...passThrough } = props

    return (
      <Counter>
        {(injectedProps) => {
          if(maxCount && injectedProps.count > maxCount){

            return <p className="alert alert-danger">YOU SHALL NOT PASSSS</p>
          }

          return <Cmp {...injectedProps as P} {...passThrough} />
        }}
      </Counter>
    )
  }

  return WithCounter
}
```


and usage

```tsx
  <ExtendedComponent />
  <ExtendedComponent colorType="primary"/>
  <ExtendedComponent maxCount={3}/>
```