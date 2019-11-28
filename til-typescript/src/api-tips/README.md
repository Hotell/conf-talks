# API tips

## Declaration merging with factories + Use runtime values as source of truth for types

```
Merge API for functional factories
Export Todo = () => {}
Export Todo = ReturnType<typeof Todo>
```

## Re-exporting types with turned on isolateModules

Prevent isolateModules errors when re-exporting types

## (Optional) Unused generics issue

You should never have type parameters which are unused. The type will have unexpected compatibility (as shown here) and will also fail to have proper generic type inference in function calls.

## (Optional) Allow API extensibility via `declare`

@TODO

Analytics example -> how to extend Events interface

## (Optional) ReturnType of generic function

@TODO

https://stackoverflow.com/questions/50321419/typescript-returntype-of-generic-function/50321754#50321754

## (Optional) Narrow generic function union return to proper output (discriminant unions but for return type)

@TODO

https://stackoverflow.com/questions/57349647/typescript-how-to-return-proper-type-from-generic-function-constrained-by-looku/57350048#57350048
