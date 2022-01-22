import React from 'react';
import PropTypes from 'prop-types';
import { StarFilled, Watching, Forks } from './icons';

const GitHubCard = (props) => {    
  const { node } = props;
  const { owner, full_name, description, html_url, stargazers_count, created_at, watchers_count, forks_count} = node;
  const { avatar_url } = owner;
  return (
    <div className="p-6 w-full min-h-min mx-auto bg-white rounded-sm shadow-lg flex items-center space-x-4 ">
        <div className="shrink-0">
            <img className="h-12 w-12 rounded-sm" src={avatar_url} alt="avatar" />
        </div>
    <div>
        <p className=" flex flex-row font-medium ">
            <a target="_blank" rel="noopener noreferrer" href={html_url}>{full_name}</a>
        </p>
        <p className="text-slate-500">{description || "-"}</p>

            
             <p className="text-slate-500 flex flex-row items-center " >
                 <p className="pr-3 " >
                {created_at}
            </p>
                <StarFilled />
                 {stargazers_count}
              
                <Watching />
                 {watchers_count}
                
                <Forks />
                 {forks_count}

                 
                
            </p>

    </div>
</div>
  );
};

export default GitHubCard;

GitHubCard.propTypes = {
  node: PropTypes.object,
  owner: PropTypes.object,
  avatar_url: PropTypes.string,
  full_name: PropTypes.string,
  description: PropTypes.string,
};

