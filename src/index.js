import React from "react";
import useAxios from "./use-axios.js";

function Giphy({ tag, triggers = [] }) {
  const key = "V6AU97qCSCYVmbIC5UDppEiVM1xnuO9E";
  const giphyUrl = `https://api.giphy.com/v1/gifs/random`;

  const { response, loading, error } = useAxios({
    url: giphyUrl,
    method: "GET",
    triggers,
    options: { params: { api_key: key, tag: tag } }
  });

  const { data } = response || {};

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {data && (
        <div className="gif">
          <p>{data.data.title}</p>
          <img alt="Gif" src={data.data.image_original_url} />
        </div>
      )}
    </div>
  );
}

export default Giphy;
