import { component$, Resource, useResource$ } from "@builder.io/qwik";
import styles from "../../css/RepoCard.module.css"
import Card from "../shared/card";
type gitRepo = {
  name: string;
  language: string;
  desc: string;
  img: string;
};
const userName = "Steryy";
export default component$(() => {
  const reposResource = useResource$<gitRepo[]>(({ cleanup }) => {
    // We need a way to re-run fetching data whenever the `github.org` changes.
    // Use `track` to trigger re-running of this data fetching function.

    // A good practice is to use `AbortController` to abort the fetching of data if
    // new request comes in. We create a new `AbortController` and register a `cleanup`
    // function which is called when this function re-runs.
    const controller = new AbortController();
    cleanup(() => controller.abort());

    // Fetch the data and return the promises.
    return getRepositories(userName, controller);
  });

  return (
    <div class="w-full min-h-screen bg-gray-300 relative">
      <div class="text-4xl md:text-6xl pl-3 pt-20  ">
        Projects
      </div>

      <div class="w-5/6 mx-auto py-14  gap-10  ">
        <Resource
          value={reposResource}
          onPending={() => <>Loading...</>}
          onRejected={(error) => <>Error: {error.message}</>}
          onResolved={(repos) => (
            <ul>
              {repos.map((repo,id) => {
                return (
								<div
class={styles.card}
								>
                  <a
                    class={"bg-gray-100"}
                    href={`https://github.com/${userName}/${repo.name}`}
										key={id}
                  >
                    <Card >
                      <h1 class={"font-bold "}>{repo.name}</h1>
                      <img class={'max-h-[40vh]'} src={`${repo.img}`} />
                      <p>{repo.desc}</p>
                    </Card>
                  </a>
									</div>
                );
              })}
            </ul>
          )}
        />
      </div>
    </div>
  );
});

export async function getRepositories(
  username: string,
  controller?: AbortController,
): Promise<gitRepo[]> {
  console.log("FETCH", `https://api.github.com/users/${username}/repos`);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const resp = await fetch(`https://api.github.com/users/${username}/repos`, {
    signal: controller?.signal,
  });
  console.log("FETCH resolved");
  // let json = await resp.json();
	let json = null
  if (!Array.isArray(json)) {
    json = [
      {
        "id": 634545373,
        "node_id": "R_kgDOJdJk3Q",
        "name": "nvim_config",
        "full_name": "Steryy/nvim_config",
        "private": false,
        "description": "my nvim config",
        "fork": false,
        "homepage": "",
        "size": 81,
        "language": "Lua",
        "visibility": "public",
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "main",
      },
      {
        "id": 634631699,
        "name": "website",
        "homepage": null,
        "size": 88,
        "language": "TypeScript",

        "description": "Website",
        "visibility": "public",
      },
    ];
  }
  if (Array.isArray(json)) {
    const data: gitRepo[] = [];
    json.forEach((repo) => {
      if (
        repo.visibility == "public" && typeof (repo.description) == "string"
      ) {
        let desc: string = repo.description;
        if (desc.charAt(0) == desc.charAt(0).toUpperCase()) {
          desc = desc.substring(1, desc.length);
          const rep = {
            name: repo.name,
            language: repo.language,
            desc: desc,
            img:
              `https://raw.githubusercontent.com/${username}/${repo.name}/main/assets/preview.jpg`,
          } as gitRepo;
          data.push(rep);
        }
      }
    });
    return data;
  }

  return Promise.reject(json);
}
