let zoomList = document.getElementById("zoomList");
let newLink = document.getElementById("newLink");
let newName = document.getElementById("newName");
let btnAddLink = document.getElementById("add-btn");
let data = Neutralino.storage.getData("zooms");

function close() {
  Neutralino.storage.setData('zooms', JSON.stringify(data));
  Neutralino.app.exit();
}

document.body.addEventListener(onload, () => {
  for (const i in data) {
    let li = document.createElement("li");
    li.textContent = Object.keys(data)[i] + " - " + data[i];
    let span = document.createElement("span");
    span.classList.add("remove");
    span.textContent = "remove";
    span.addEventListener("click", removeZoom);
    li.appendChild(span);
    zoomList.appendChild(li);
  }
})

function addZoom() {
  if (newLink.value !== "") {

    Neutralino.debug.log(data);
    data[newName] = newLink;

    let li = document.createElement("li");
    li.textContent = newLink.value + " - " + newName.value;

    let span = document.createElement("span");
    span.classList.add("remove");
    span.textContent = "remove";
    span.addEventListener("click", removeZoom);
    li.appendChild(span);
    zoomList.appendChild(li);
    newLink.value = "";
    newName.value = "";
  }
}

function removeZoom() {
  zoomList.removeChild(this.closest("li"));
}
