//Problem 7: Fetching data

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let Data = ["data1", "data2", "data3"];
      if (Data != Error) {
        resolve(Data);
      } else {
        reject("data not found");
      }
    }, 3000);
  });
}
async function getData() {
  console.log(`fetching data in progress`);
  try {
    console.log(await fetchData());
  } catch (err) {
    console.log(`error: ${err}`);
  }
  console.log(`fetching data complete`);
}
getData();
