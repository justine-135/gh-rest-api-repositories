import { IGithubRepositories } from "../model/githubRepositories";
import ButtonCustom from "./ButtonCustom";
import { ButtonTypes } from "../enum/types";
import dayjs from "dayjs";

interface Props {
  title: string;
  list: IGithubRepositories[];
}

export const ListCustom = ({ list, title }: Props) => {
  return (
    <>
      <h1 className="font-bold text-3xl">{title}</h1>
      <ul className="grid gap-3 mt-5 w-[40%] grid-cols-2">
        {list?.map((item: IGithubRepositories) => {
          return (
            <li className="p-3 rounded-md shadow" key={item.id}>
              <h2 className="font-medium">{item.name}</h2>
              <p className="text-xs">
                Created at:
                {dayjs(item.created_at).format("MMMM DD, YYYY hh:mm:ss")}
              </p>
              <p className="text-xs">
                Updated at:{" "}
                {dayjs(item.updated_at).format("MMMM DD, YYYY hh:mm:ss")}
              </p>
              <p className="mt-5">{item.description}</p>

              {item.topics && (
                <ul className="flex items-center flex-wrap gap-2 my-5">
                  {item.topics.map((topic) => (
                    <li className="px-2 shadow" key={topic}>
                      {topic}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex gap-2 mt-[auto] ">
                <ButtonCustom
                  type={ButtonTypes.LINK}
                  title="Github"
                  href={item.html_url}
                />
                {item.homepage && (
                  <ButtonCustom
                    type={ButtonTypes.LINK}
                    title="View"
                    href={item.homepage}
                  />
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
