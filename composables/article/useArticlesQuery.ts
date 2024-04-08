import type { NuxtError } from '#app'
import type { GetArticlesFeed200Response, GetArticlesRequest } from '~/lib/api/__generated__'
import { apiFetch } from '~/lib/api/apiFetch'

export async function useArticlesQuery(opts: ComputedRef<GetArticlesRequest & { feed?: boolean }>) {
  const response = await useLazyAsyncData<GetArticlesRequest, NuxtError, GetArticlesFeed200Response>('articles', () =>
    apiFetch(opts.value.feed ? '/articles/feed' : '/articles', { method: 'GET', query: opts.value }), { watch: [opts], server: false })
  return response
}
