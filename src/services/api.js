export const fetchData = async () => {
  try {
    const response = await fetch(
      "http://universities.hipolabs.com/search?country=United%20Arab%20Emirates"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
