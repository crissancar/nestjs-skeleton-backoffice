.PHONY = build deps start_infrastructure start

# Build project
build:
	npm run build

# Install dependencies
deps:
	npm install

# Start app in dev environment
start:
	npm run start:dev

# Build and start infrastructure
start_infrastructure:
	npm run docker:env
