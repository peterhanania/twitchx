![Banner](assets/twitchx.png)

<div align="center">
    <h2>twitchx</h2>
    <p>Super-powered TypeScript Twitch REST API wrapper.</p>
    <img src="https://forthebadge.com/images/badges/fuck-it-ship-it.svg" />
    <img src="https://forthebadge.com/images/badges/made-with-typescript.svg" />
    <img src="https://forthebadge.com/images/badges/powered-by-black-magic.svg" />
    <img src="https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg" />
    <img src="https://forthebadge.com/images/badges/fixed-bugs.svg" />
</div>

### About

> **twitchx** is a versatile [Node.js](http://nodejs.org/) library that lets you use the Twitch API with little overhead.
> Written completely in TypeScript with accurate typings.

-   Object-oriented
-   Low overhead
-   Fast
-   API like [discord.js](https://www.npmjs.com/package/discord.js)
-   99.99% coverage

### Installation and Usage

Node.js v14 or newer is required.

```bash
# Install with NPM:
$ npm install twitchx

# or alternatively, with Yarn:
$ yarn add twitchx
```

```js
// Available with CommonJS:
const Twitch = require("twitchx");

// or with ESM:
import * as Twitch from "twitchx";
```

### Example

```ts
import * as Twitch from "twitchx";

(async () => {
    const client = new Twitch.Client({
        clientId: "a-cool-id",
        clientSecret: "dont-steal-pls",
    });

    await client.login();

    const user = await client.users.fetch("44445592");

    console.log(user);
})();
```

### Links

-   [Website](https://twitchx.js.org/)
-   [Documentation](https://twitchx.js.org/#/docs)
-   [Guide](https://twitchx.js.org/#/docs/guide)
-   [Discord](https://discord.gg/hMzQye6sWU)
-   [GitHub](https://github.com/cursorsdottsx/twitch)
-   [NPM](https://www.npmjs.com/package/twitchx)

### Contributing

Before opening an issue or contributing, make sure that it hasn't been opened or brought up already, or hasn't been done before/is being done.

Read [CONTRIBUTING.md](./CONTRIBUTING.md) for information on contributing.

Submit a PR to the GitHub repo and have a collaborator review the changes.

### Help

If you don't understand something or have trouble creating a feature with **twitchx**, hop in our [Discord](https://discord.gg/hMzQye6sWU) and ask away!

### Package scripts

-   `watch` – Compiles TypeScript source when a file is changed.
-   `test` – Runs tests against the library.
-   `docs` – Generates a `data.json` with all the gathered JSDoc (runs when a file is changed).
-   `md` – Generates a `docs.json` with all the markdown files (runs when an markdown file is changed).
-   `build` – Compiles TypeScript source.
-   `deploy` – Update website.
