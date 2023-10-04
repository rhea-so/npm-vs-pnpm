## 디렉터리 설명

- 01-npm: 패키지 매니저로 npm 사용
- 02-pnpm 패키지 매니저로 pnpm 사용

- server-a: nestjs 9버전 + express + graphql
- server-b: nestjs 9버전 + fastify + graphql
- server-c: nestjs 10버전 + fastify + graphql
- server-d: nestjs 10버전 + express + graphql

## 테스트 결과

### NPM

#### server-a

문제 없음

#### server-b

`apollo-server-fastify` 패키지가 설치되어 있으나, 설치되어 있지 않다고 에러가 발생함. (비정상)

#### server-c

`toad-cache` 패키지를 못찾는다는 에러가 발생함. (비정상)

#### server-d

`graphql` 패키지를 여러 버전으로 동시에 설치해서 사용하면 안된다는 에러가 발생함. (비정상)

---

### PNPM

#### server-a

문제 없음

#### server-b

`fastify 3.x` 만 허용되는데, `fastify 4.18.0` 이 설치되어 있다고 에러가 발생함. (정상)

> **Note**  
> https://stackoverflow.com/questions/73807059/nestjs-graphql-fastify-fastifyerror-fastify-plugin-fastify-accepts-expected  
> `@nestjs/common v9`, `@nestjs/platform-fastify v9`에서 `fastify v4`를 사용하는데, `apollo-server-fastify` 는 이를 지원하지 않아서 발생하는 에러.  
> 패키지 개발자가 의도한 에러이며, 패키지 버전이 꼬여서 발생하는 문제는 아니다.  
> nestjs 패키지들을 v10으로 업데이트하고, `apollo-server-fastify`를 `@as-integrations/fastify` 교체해주면 문제가 해결된다.

#### server-c

문제 없음

#### server-d

문제 없음

## 결론

PNPM이 최고다.
