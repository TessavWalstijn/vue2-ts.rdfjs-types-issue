# vue2-ts.rdfjs-types-issue

Repository for https://github.com/rdfjs/types/pull/36

## Setting up this environment

MacOS & Ubuntu

```bash
nvm use
corepack enable # to use modern yarn
yarn
```

Windows

```bash
nvm install <version-from-nvmrc>
nvm use <version-from-nvmrc>
corepack enable # to use modern yarn
yarn
```

## Running in to the issue

```bash
yarn dev
```

Running `yarn dev` will display the following errors:

```
✘ [ERROR] Could not resolve "./data-model"

    node_modules/@rdfjs/types/index.d.ts:3:14:
      3 │ export * from './data-model';
        ╵               ~~~~~~~~~~~~~~

✘ [ERROR] Could not resolve "./stream"

    node_modules/@rdfjs/types/index.d.ts:4:14:
      4 │ export * from './stream';
        ╵               ~~~~~~~~~~

✘ [ERROR] Could not resolve "./dataset"

    node_modules/@rdfjs/types/index.d.ts:5:14:
      5 │ export * from './dataset';
        ╵               ~~~~~~~~~~~

✘ [ERROR] Could not resolve "./query"

    node_modules/@rdfjs/types/index.d.ts:6:14:
      6 │ export * from './query';
        ╵               ~~~~~~~~~
```

The page will result in to a white screen which is not expected.

The issue does not arise with building and application works as expected

```
yarn build
yarn preview
```
