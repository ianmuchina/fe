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
	pnpm exec tailwindcss \
		--output "src/index.css" \
		--content "docs/index.njk" \
		--config "tailwind.config.js"

docs-css-w:
	pnpm exec tailwindcss \
		--watch
		--output "src/index.css" \
		--content "docs/index.njk" \
		--config "tailwind.config.js" \

docs-html:
	pnpm exec eleventy --input="docs" --output="src"

docs-html-w:
	pnpm exec eleventy --input="docs" --output="src" --watch

readme: docs-html
	pnpm exec prettier -w README.md

docs: docs-html docs-css fmt
docs-dev: docs-html-w

lhci:
	rm -fr .lighthouseci/*
	rm -fr .lhci/*
	pnpm exec lhci autorun
	node tools/render.cjs

lhci-upload:
	pnpm exec lhci upload --target="temporary-public-storage"

lh-stats:
	node tools/render.cjs

clean:
	rm -fr .lighthouseci/*
	rm -fr .lhci/*

fonts:
	tools/fonts.sh install

fonts-update:
	tools/fonts.sh update