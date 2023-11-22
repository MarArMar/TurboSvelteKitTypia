### Setup
```sh
pnpm add turbo --global
pnpm install
```

### Working 

pnpm workspace with typia & TS imports : 
```sh
npx ts-node packages/typiaLib/run.ts
```

pnpm workspace lib that imports typia : 
```sh
npx ts-node packages/typia-imported/run-import
```

sveltekit in workspace with typia lib that imports only JS files : 
```sh
npx ts-node packages/typia-imported/run-import
```

### Not working 

sveltekit in workspace with typia lib that imports TS files : 
```sh
npx ts-node packages/typia-imported/run-import
```

### Sveltekit with Js : working test
Dev
```sh
npx turbo run dev --filter=SvelteKitJS
```
### Sveltekit with Ts : not working example
Dev
```sh
npx turbo run dev --filter=SvelteKitTS
```
Build
```sh
npx turbo run build --filter=SvelteKitTS
```
