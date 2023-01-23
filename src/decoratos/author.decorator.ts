import { createParamDecorator, ExecutionContext } from '@nestjs/common';

function handleAuthor(data: any, ctx: ExecutionContext) {
  const request = ctx.switchToHttp().getRequest();
  return request.query.author;
}

export const Author = createParamDecorator(handleAuthor);
