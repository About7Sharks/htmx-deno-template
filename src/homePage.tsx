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
