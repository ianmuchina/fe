# Be Quiet
MAKEFLAGS += --silent
PRETTIER_CONFIG := ".config/prettier.config.cjs"

# Lint CSS Using Stylelint
lint-css:
	pnpm exec \
		stylelint "src/**/*.css" \
		--cache true \
		--cache-location ".cache/stylelint/" \
		--config ".config/stylelint.config.cjs" \
		--ignore-path ".config/.stylelintignore" \

fmt: 
	pnpm exec \
		prettier --config $(PRETTIER_CONFIG) --write . 

fmt-check:
	pnpm exec \
		prettier --config $(PRETTIER_CONFIG) --check .


# Development
build:
	pnpm exec \
		parcel build "./src/**/*.html" \
		--cache-dir ".cache/parcel/" \
		--config ".config/parcel.config.json"

dev:
	pnpm exec \
		parcel './src/*.html' \
		--cache-dir ".cache/parcel/" \
		--config ".config/parcel.config.json"

dev-static:
	@echo "Server running at http://localhost:4000"
	python3 -m http.server 4000

dev-docs:
	pnpm exec \
		tailwindcss \
		--content "docs/index.njk" \
		--output "src/index.css" \
		--config ".config/tailwind.config.cjs"

build-docs:
	pnpm exec \
		eleventy --config=".config/eleventy.js"