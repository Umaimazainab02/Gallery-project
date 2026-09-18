import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function usedata() {
    setLoading(true);

    try {
      const response = await axios(
        `https://picsum.photos/v2/list?page=${page}&limit=20`
      );

      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    usedata();
  }, [page]);

  return (
    <div className="m-10">
      {loading ? (
        <h1 className="text-3xl text-white text-center">
          Loading...
        </h1>
      ) : (
        <>
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

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="bg-amber-500 text-xl text-black py-2 px-6 disabled:opacity-50"
            >
              Prev
            </button>

            <h1 className="text-3xl text-white">
              {page}
            </h1>

            <button
              onClick={() => setPage(page + 1)}
              className="bg-amber-500 text-xl text-black py-2 px-6"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;