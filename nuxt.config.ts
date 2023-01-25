export default defineNuxtConfig({
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    sourceMap: true,
                    additionalData: `
                    @use "@/assets/styles/_variables.scss" as *;
                    @use "@/assets/styles/_text.scss" as *;
                    @use "@/assets/styles/fonts.scss" as *;
                     @use "@/assets/styles/normalize.scss" as *;
                    `
                }
            }
        }
    }
})
