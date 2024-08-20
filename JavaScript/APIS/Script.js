try {
  let p = fetch("https://goweather.herokuapp.com/weather/Pak");
  p.then((response) => {
    document.writeln("API Fetched");
    return response.json();
  }).then((values) => {
    console.log(values);
  });
} catch (error) {
  document.writeln("API Not Fetched");
  console.log("Error is : " + error);
}
