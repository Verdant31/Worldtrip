import Prismic from '@prismicio/client';

export function getPrismicClient(req?: unknown) {
  if (!process.env.PRISMIC_ENDPOINT) {
    throw new Error('End point do prismic não definido no .env')
  }
  const prismic = Prismic.client(
    process.env.PRISMIC_ENDPOINT as string,
    {
      req,
      accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    }
  )
  return prismic;
}