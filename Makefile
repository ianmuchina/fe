# Be Quiet
MAKEFLAGS += --silent

# Lint CSS Using Stylelint
lint-css:
	pnpm exec stylelint "src/**/*.css"

fmt: 
	pnpm exec prettier --write . 

fmt-check:
	pnpm exec prettier --check .

# Development
build:
	rm -fr src/lighthouse/
	pnpm exec parcel build "./src/**/*.html"

dev:
	pnpm exec parcel './src/*.html'

dev-static:
	@echo "Server running at http://localhost:4000"
	python3 -m http.server 4000

docs-css:
	pnpm exec tailwindcss --content "docs/index.njk" --output "src/index.css" --config "tailwind.config.js"

docs-css-w:
	pnpm exec tailwindcss --content "docs/index.njk" --output "src/index.css" --config "tailwind.config.js" --watch

docs-html:
	pnpm exec eleventy --input="docs" --output="src"

docs-html-w:
	pnpm exec eleventy --input="docs" --output="src" --watch

docs: docs-html docs-css fmt
docs-dev: docs-html-w

lhci:
	rm -fr .lighthouseci/*
	rm -fr .lhci/*
	pnpm exec lhci autorun
	
lh-stats:
	node render.cjs

clean:

x: clean build lhci docs fmt