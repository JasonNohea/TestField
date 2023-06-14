const apiEndpoint = "https://jsonplaceholder.typicode.com/users";
const display = document.querySelector("#display-data");
const input = document.querySelector("#input");

const getData = async () => {
  const response = await fetch(apiEndpoint);
  const data = await response.json();
  //   console.log(response);
  //   if (!response.ok) {
  //     throw new Error(`HTTP error! status: ${response.status}`);
  //   }
  return data;
  //   console.log(data);
};

// getData();

const displayUser = async () => {
  let query = input.value;
  console.log("Query ::", query);

  const payload = await getData();
  // console.log(payload);

  let dataDisplay = payload
    .filter((eventData) => {
      if (query === "") {
        return eventData;
      } else if (eventData.name.toLowerCase().includes(query.toLowerCase())) {
        return eventData;
      }
    })
    .map((object) => {
      // console.log(object);
      const { name, username } = object;

      return `
        <div class="container">
        <p>Name: ${name}</p>
        <p>Username: ${username}</p>
        </div>
        <hr>
        `;
    })
    .join("");

  display.innerHTML = dataDisplay;
};

displayUser();
