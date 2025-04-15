up:
	docker compose up -d
stop:
	docker compose stop
down:
	docker compose down
down-rmi:
	docker compose down --rmi local

install:
	docker compose exec lara_next_fe pnpm install --frozen-lockfile
dev:
	docker compose exec lara_next_fe pnpm dev
build:
	docker compose exec lara_next_fe pnpm build
start:
	docker compose exec lara_next_fe pnpm start
lint:
	docker compose exec lara_next_fe pnpm lint

warmup:
	curl -I http://localhost:3000
#	curl http://localhost:3000 > /dev/null 2>&1 || true
