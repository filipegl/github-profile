import React, { useEffect, useState } from "react";
import { getGithubInfo } from "../../services/githubApi";
import LoadingView from "../LoadingView";
import styled from "styled-components";

import "./styles.css";
const ProfileView = ({ nickname }) => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [followersCount, setFollowersCount] = useState(0);
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getGithubInfo(nickname)
      .then((resProfile) => {
        if (resProfile.message) {
          alert("Usuário não encontrado");
          setIsLoading(false);
        } else {
          setAvatarUrl(resProfile.avatar_url);
          const promiseFollowers = getGithubInfo(
            nickname,
            "/followers"
          ).then((resFollowers) => setFollowersCount(resFollowers.length));
          const promiseRepo = getGithubInfo(
            nickname,
            "/repos",
            "sort=updated"
          ).then((resRepos) => {
            let listRepos = resRepos.slice(0, 4).map((repo) => (
              <Repo>
                <RepoLink href={repo.html_url}>{repo.full_name}</RepoLink>
              </Repo>
            ));
            setRepos(listRepos);
          });
          Promise.all([promiseFollowers, promiseRepo]).then(() =>
            setIsLoading(false)
          );
        }
      })
      .catch((err) => {
        console.error("err", err);
        setIsLoading(false);
      });
  }, [nickname]);

  return isLoading ? (
    <LoadingView />
  ) : (
    <Container>
      <Avatar src={avatarUrl} className="Avatar" alt="Profile" />
      <ShortInfoView>
        <SideInfoView>
          <TitleInfo>Repositórios</TitleInfo>
          <Amount>{repos.length}</Amount>
        </SideInfoView>
        <Name>{nickname}</Name>
        <SideInfoView>
          <TitleInfo>Seguidores</TitleInfo>
          <Amount>{followersCount}</Amount>
        </SideInfoView>
      </ShortInfoView>
      <div>
        <h2>Top repositórios atualizados</h2>
        <ul>{repos}</ul>
      </div>
    </Container>
  );
};

export default ProfileView;

const Name = styled.h2`
  font-size: 30px;
  margin: 5px;
`;
const Avatar = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  align-self: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
`;
const ShortInfoView = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
  min-width: 35vw;
`;

const SideInfoView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleInfo = styled.p`
  padding-top: 20px;
  margin-bottom: 0;
`;

const Amount = styled.p`
  font-size: 26px;
  margin-top: 0px;
`;

const Repo = styled.li`
  margin-bottom: 6px;
`;
const RepoLink = styled.a`
  &:link {
    color: ${({ theme }) => theme.link};
  }
  &:visited {
    color: ${({ theme }) => theme.linkVisited};
  }
`;
