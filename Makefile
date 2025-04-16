backend:=lara_next_be
frontend:=lara_next_fe

up:
	docker compose up -d
stop:
	docker compose stop
down:
	docker compose down
down-rmi:
	docker compose down --rmi local
down-volumes:
	docker compose down -v

install:
	cp .env.example .env
	cp be/.env.example be/.env
	cp fe/.env.example fe/.env
	docker compose exec $(backend) composer install
	docker compose exec $(backend) php artisan key:generate
	docker compose exec $(frontend) pnpm install --frozen-lockfile
create-dir:
	mkdir files logs
dev:
	docker compose exec $(frontend) pnpm dev
build:
	docker compose exec $(frontend) pnpm build
start:
	docker compose exec $(frontend) pnpm start
lint:
	docker compose exec $(frontend) pnpm lint

warmup:
	curl -I http://localhost:3000
