# Deno + HTMX
This is a template for using [Deno](https://deno.land/) with [HTMX](https://htmx.org/).


### Why
This framework allows for JSX, SSR and the power of Typescript to create modern HTML applications.
## Tips


Use SSR Components with JSX by wrapping in `renderToString` function.
```
/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h, renderToString } from "https://deno.land/x/jsx/mod.ts";

export const homePage = async () => {
  return await renderToString(
    <Fragment>
      <h1>Home Page</h1>
    </Fragment>
  );
};

```
## Getting Started
1. Clone this repository
2. Run `deno task start`