import { registerEndpoint } from '@nuxt/test-utils/runtime'
import {useAppConfiger} from "~/lib/constants";


export function registerTagsEndpoints() {
  const { BASE_API_URL } = useAppConfiger()
  registerEndpoint(`${BASE_API_URL}/tags`, () => ({
    tags: ['tag-1', 'tag-2', 'tag-3', 'tag-4', 'tag-5', 'tag-6', 'tag-7', 'tag-8', 'tag-9', 'tag-10'],
  }))
}
