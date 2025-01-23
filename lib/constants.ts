export const useAppConfiger = () => {
    // Add safety check for SSR
    if (process.server) {
        const config = useRuntimeConfig()
        return {
            APP_NAME: config.public.appName,
            BASE_API_URL: config.public.baseApiUrl,
            ARTICLES_PER_PAGE: config.public.articlesPerPage
        }
    }

    // Add safety check for client-side
    const nuxtApp = useNuxtApp()
    const config = nuxtApp.$config.public
    return {
        APP_NAME: config.appName,
        BASE_API_URL: config.baseApiUrl,
        ARTICLES_PER_PAGE: config.articlesPerPage
    }
}