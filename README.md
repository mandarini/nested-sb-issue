# Nested Storybook issue

This is a project set up with a root React app (`web`), set up with Storybook. It uses the latest build from [this PR](https://github.com/nrwl/nx/pull/13314).

```
nx storybook web
```

produces the following error:

```
ERR! /Users/katerina/Projects/nrwl/test_nx_workspaces/nested-two/apps/ng-app/.storybook/main.ts:1
ERR! import { rootMain } from '../../../.storybook/main.root';
ERR! ^^^^^^
ERR!
ERR! SyntaxError: Cannot use import statement outside a module
ERR!     at compileFunction (<anonymous>)
ERR!     at Object.compileFunction (node:vm:352:18)
```

and also Storybook does not read the `.storybook/tsconfig.json` file. It reads the app's `tsconfig.json` file instead (which is in the root).

## Other note

It's interesting to note, that even when I try to do `nx storybook ng-app` (which is a nested Angular app), I get the same error. So even the nested projects are not working with Storybook, they are not reading `tsconfig.json` files from `.storybook` folder.

error I get:

```
ERR! /Users/katerina/Projects/nrwl/test_nx_workspaces/nested-two/apps/ng-app/.storybook/main.ts:15
ERR! export {};
ERR! ^^^^^^
ERR!
ERR! SyntaxError: Unexpected token 'export'
ERR!     at compileFunction (<anonymous>)
```
