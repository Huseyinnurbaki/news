const fetch = require('node-fetch');
const GITHUB_REPOSITORIES = "github_repositories";

let today = new Date() // YYYY-MM-DD
today = today.toISOString().split('T')[0]

const GITHUB_API_QUERY = `https://api.github.com/search/repositories?q=created:>=${today}&sort:stars&per_page=20`

exports.sourceNodes = async ({ actions, createContentDigest, createNodeId }) => {
    const { createNode } = actions;
    // cryptos
    const cryptocurrinciesResponse = await fetch(GITHUB_API_QUERY);
    const result = await cryptocurrinciesResponse.json() || [];
    result.items.forEach((node, index) => {
    createNode({
        ...node,
        id: createNodeId(`${GITHUB_REPOSITORIES}-${index}`),
        parent: null,
        children: [],
        internal: {
            type: GITHUB_REPOSITORIES,
            content: JSON.stringify(node),
            contentDigest: createContentDigest(node)
        }
    });
    });

    return
};
