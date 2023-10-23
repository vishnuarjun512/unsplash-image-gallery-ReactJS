export async function fetchRequest(img) {
  const Access_Key = "K_M3CXlzBvD_i8H-5tnlaz1BgKtGUtepZvrCtk7_EOk";
  const perPage = 20; // Define the number of images per page

  try {
    let apiUrl = "";

    if (img === "") {
      apiUrl = `https://api.unsplash.com/photos/random?count=${perPage}&client_id=${Access_Key}`;
    } else {
      apiUrl = `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${Access_Key}`;
    }

    // console.log("API URL:", apiUrl);

    const data = await fetch(apiUrl);
    // console.log("Data : ", dataJ);

    if (!data.ok) {
      console.error("HTTP error! Status:", data.status);
      throw new Error(`HTTP error! Status: ${data.status}`);
    }

    const dataJ = await data.json();
    console.log("Data : ", dataJ);
    return img === "" ? dataJ : dataJ.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
