import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import GitHubCard from './githubCard';

const RepositoryList = () => {

const data = useStaticQuery(graphql`
    query {
    allGithubRepositories {
        nodes {
        full_name
        git_url
        html_url
        name
        stargazers_count
        created_at(fromNow: true)
        description
        forks_count
        watchers_count
        owner {
            avatar_url
            html_url
            login
        }
        clone_url
        ssh_url
        }
  }
}
  `);
  const { allGithubRepositories } = data;
  const { nodes } = allGithubRepositories;

  return (
        <>
          {
            nodes?.map((node, key) => {
                return (
                    <GitHubCard node={node} key={key + node.full_name}/>
                    )
            })
            }
        </>
  );
};

export default RepositoryList;


