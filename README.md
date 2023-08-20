# Deno + HTMX
This is a template for using [Deno](https://deno.land/) with [HTMX](https://htmx.org/).


### Why
Some stand-out features:

- Just-in-time rendering on the edge.
- Zero runtime overhead: no JS is shipped to the client by default.
- No build step.
- TypeScript support out of the box.

## Tips


Use SSR Components with JSX by wrapping in `renderToString` function.
```
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