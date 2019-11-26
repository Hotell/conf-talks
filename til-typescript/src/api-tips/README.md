# API tips

## Declaration merging with factories + Use runtime values as source of truth for types

```
Merge API for functional factories
Export Todo = () => {}
Export Todo = ReturnType<typeof Todo>
```

## Re-exporting types with turned on isolateModules

Prevent isolateModules errors when re-exporting types

## (Optional) Allow API extensibility via `declare`

Analytics example -> how to extend Events interface

## (Optional) ReturnType of generic function

https://stackoverflow.com/questions/50321419/typescript-returntype-of-generic-function/50321754#50321754

## (Optional) Narrow generic function union return to proper output (discriminant unions but for return type)

https://stackoverflow.com/questions/57349647/typescript-how-to-return-proper-type-from-generic-function-constrained-by-looku/57350048#57350048
