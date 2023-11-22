### Sveltekit test
Dev
```sh
npx turbo run dev --filter=SveltekitJS
```
Build
```sh
npx turbo run build --filter=SveltekitJS
```

If I import typia stuff from a module in the workspace without following typia setup : 

Error on typia.is(): no transform has been configured. Read and follow https://typia.io/docs/setup please.
```sh
pnpm add typia --filter=SveltekitJS
npx typia setup
```
