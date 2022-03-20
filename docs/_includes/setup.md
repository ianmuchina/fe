## Setup

Install the dependencies.

```
pnpm install
```

Start the development server on localhost.

```
make dev
```

Build the site and save the output to `dist/`

```sh
make build
```

Check css for errors using `stylelint`

```
make lint-css
```

Format files with Prettier.

```
make fmt
```

Run lighthouse on solutions marked as complete

> edit `docs/_data/solutions.cjs` to mark solution as complete

```
make lhci
```

See lighthouse results

```
make docs-html
```

Generate index

```
make docs
```
