import useSWR from "swr";
import { IGithubRepositories } from "../model/githubRepositories";

const ghToken = process.env.NEXT_PUBLIC_GH_TOKEN;
const ghUrl = process.env.NEXT_PUBLIC_GH_REPO_URL;

const fetcher = async (url: string) => {
  try {
    const urlQuery = `${url}?sort=created&type=all`;
    const response = await fetch(urlQuery, {
      headers: {
        Authorization: `Bearer ${ghToken}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData?.message || "Failed to fetch data");
    }

    const repositories = await response.json();

    // Filter out forked repositories
    const nonForkedRepositories = repositories.filter(
      (repo: IGithubRepositories) => !repo.fork
    );

    return nonForkedRepositories;
  } catch (error) {
    console.error("Error during fetch:", error);
    throw error;
  }
};

export const useGetGhAPI = () => {
  const { data, error, isLoading } = useSWR(ghUrl, fetcher);

  console.log(data);

  return { data, error, isLoading };
};
