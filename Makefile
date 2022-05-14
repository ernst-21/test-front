 install:
	docker run -t --rm -v `pwd`:/app  -w /app node:13.7.0-alpine npm install

test:
	docker run -t --rm -v `pwd`:/app -w /app node:13.7.0-alpine npm run test

start:
	docker run -ti --rm -v `pwd`:/app -w /app -p 8080:8080 node:13.7.0-alpine npm run start -- --host=0.0.0.0

package:
	tar -zcvf ./test-front.tar.gz `git ls-tree -r main --name-only | sed '/test-front.tar.gz/d'`
