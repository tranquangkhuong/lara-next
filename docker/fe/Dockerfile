FROM node:22-alpine as builder
WORKDIR /app
COPY package*.json ./
# RUN addgroup -g 1000 appgroup && \
#     adduser -u 1000 -G appgroup -s /bin/sh -D appuser
RUN corepack enable && corepack prepare pnpm@latest --activate

FROM builder AS final
USER node
WORKDIR /app
EXPOSE 3000
CMD ["tail", "-f", "/dev/null"]