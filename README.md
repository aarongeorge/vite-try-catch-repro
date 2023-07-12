# Try Catch Bug
When creating a try catch block and building with vite it turns all `catch (err) {...}` blocks that don't utilise the `err` argument into `catch { ... }` which is resulting in a syntax error

## Setup
Run `pnpm install` to install the dependencies
Run `pnpm run build` to build the files

Look in `dist` for the built files and notice how any catch not using the `err` argument results in a catch block that doesn't include the parentheses (Causing a syntax error)