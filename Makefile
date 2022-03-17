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
build: docs
	pnpm exec parcel build "./src/**/*.html"

dev:
	pnpm exec parcel './src/*.html'

dev-static:
	@echo "Server running at http://localhost:4000"
	python3 -m http.server 4000

docs-css:
	pnpm exec tailwindcss --content "docs/index.njk" --output "src/index.css" --config "tailwind.config.cjs"

docs-html:
	pnpm exec eleventy --input="docs" --output="src"

docs: docs-html docs-css fmt

lhci: build
	pnpm exec lhci autorun