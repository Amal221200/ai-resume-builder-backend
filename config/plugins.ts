export default () => ({
    "netlify-deployments": {
        enabled: true,
        config: {
            accessToken: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN,
            sites: [
                {
                    name: "ai-resume-builder-backend",
                    id: "2b07ff05-cbc6-4c82-9de3-acec85a70069",
                    buildHook: "https://api.netlify.com/build_hooks/6676509d3bf94c31184ac55f",
                    branch: 'master' // optional
                }
            ],
        },
    },
});
