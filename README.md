## Description of the problem 

In this monorepo, within Sveltekit projects : 
✅ TS files from the same project work
✅ JS file from the PNPM workspace work
✅ On a regular Sveltekit install, TS files on the PNPM workspace work
BUT When I import a TS file on the PNPM workspace work I get this :

```
Parse failure: Unexpected token (3:26)
At file: /@fs/TurboSvelteKitTypia/packages/common/log.ts
Contents of line 3: export const messageLoaded: string =
```

Tried : 
- putting the rollup-plugin-typescript2 plugin before the sveltekit plugin in the vite config, it didn't work
- importing the file with ".ts" at the end of the import, no effect
- importing the file from a relative path ".ts" at the end of the import, no effect (https://github.com/vitejs/vite/issues/5370#issuecomment-1339022262)
- setting "sourceMap: false," in the vite config, no effect


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
