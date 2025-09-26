const cityInput = document.getElementById("cityInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", async () => {
  const input = cityInput.value.trim();
  if (!input) {
    result.textContent = "Please enter a city name";
    return;
  }

  try {
    const response = await fetch(
      `https://api.waqi.info/feed/${encodeURIComponent(input)}/?token=demo`
    );

    if (!response.ok) throw new Error("Someting went wrong!");
    const data = await response.json();

    const aqi = data.data.aqi;
    result.innerHTML = `AQI in <strong>${input}</strong>: <strong>${aqi}</strong>`;
  } catch (error) {
    result.textContent = "Error fetching data.";
    console.error(error);
  }
});
