import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  async function usedata() {
    const response = await axios(
      "https://picsum.photos/v2/list?page=4&limit=20"
    );

    console.log(response.data);
    setData(response.data);
  }

  return (
    <div className="m-10">
      <div className="flex justify-center mb-10">
        <button
          onClick={usedata}
          className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-800"
        >
          Click here
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-7">
        {data.map((photo) => (
          <div key={photo.id} className="w-70">
            <img
              src={photo.download_url}
              alt={photo.author}
              className="w-70 h-60 object-cover rounded-lg"
            />

            <h2 className="text-lg font-bold mt-2 mb-2 text-white">
              {photo.author}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;