export default () => ({
    "netlify-deployments": {
        enabled: true,
        config: {
            accessToken: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN
        },
        sites: [
            {
                name: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_SITE_NAME,
                id: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_SITE_ID,
                buildHook:process.env.NETLIFY_DEPLOYMENTS_PLUGIN_BUILD_HOOK,
                branch: 'master' // optional
            }
        ],
    },
});
