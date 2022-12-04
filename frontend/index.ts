import axios from "axios";


document.body.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    axios.post('/query', {
        s: (document.getElementById("input") as HTMLInputElement).value
      })
      .then(function (response) {
        try {
          let html = "";
          for (const item of response.data) {
            console.log(item);
            html += `<div><span>${item[1]}</span><span>${item[0]}</span></div>`;
          }
          document.getElementById("result").innerHTML = html;
        } catch (e) {};
      })
      .catch(function (error) {
        console.log(error);
      });
  }
});

