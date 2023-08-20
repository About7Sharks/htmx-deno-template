import { Fragment, h, renderToString } from "jsx";

export const homePage = async () => {
  return await renderToString(
    <div>
      <h1>Home Page</h1>
      <ul>
        {/* random 10 nuumbers */}
        {Array.from({ length: 10 }, () => Math.floor(Math.random() * 40)).map(
          (num) => (
            <li>
              <a
                href={`/article/${num}`}
                hx-target="#content"
                hx-swap="innerHTML transition:true"
                hx-push-url="true"
              >
                {num}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
