export async function getGithubInfo(name, endpoint = "", url_params = "") {
  let headers = new Headers();
  let url = `https://api.github.com/users/${name}${endpoint}?${url_params}`;

  let params = {
    method: "GET",
    headers: headers,
  };

  return fetch(url, params).then((res) => res.json());
}
