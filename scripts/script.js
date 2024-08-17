const logRectangle = document.querySelector("#rect-log");
const actionButton = document.querySelector("#action-btn");

const workStartContent = document.createElement("div");
workStartContent.textContent = "Work session started!";

const relaxStartContent = document.createElement("div");
relaxStartContent.textContent = "Relax session started!";

const relaxEndContent = document.createElement("div");
relaxEndContent.textContent = "Relax session ended!";

actionButton.onclick = () => {
  logRectangle.appendChild(workStartContent);

  setTimeout(() => {
    logRectangle.appendChild(relaxStartContent);
    setTimeout(() => {
      logRectangle.appendChild(relaxEndContent);
    }, 5 * 60 * 1000);
  }, 25 * 60 * 1000);
};
