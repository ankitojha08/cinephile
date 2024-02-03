const StateListGen = async (PopularState) => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        PopularState +
        "?language=en-US&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      }
    );

    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
};

export default StateListGen;
