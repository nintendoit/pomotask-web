const logRectangle = document.querySelector("#rect-log");
const actionButton = document.querySelector("#action-btn");
const permissionButton = document.querySelector("#notif-permission-btn");
const permissionStatusText = document.querySelector("#permission-status-txt");
const audio = new Audio('assets/350860__cabled_mess__blip_c_07.wav');

const workStartContent = document.createElement("div");
workStartContent.textContent = "Work session started!";

const relaxStartContent = document.createElement("div");
relaxStartContent.textContent = "Relax session started!";

const relaxEndContent = document.createElement("div");
relaxEndContent.textContent = "Relax session ended!";

actionButton.onclick = () => {
  logRectangle.appendChild(workStartContent);
  new Notification("Pomodoro started!", {
    body: "Concentrate for 30 minutes!",
  });

  setTimeout(() => {
    logRectangle.appendChild(relaxStartContent);
    new Notification("Good work!", { body: "Take a 5 minute break!" });
    audio.play();
    setTimeout(() => {
      logRectangle.appendChild(relaxEndContent);
      new Notification("Back to work!", { body: "Write down the tasks!" });
      audio.play();
    }, 5 * 60 * 1000);
  }, 25 * 60 * 1000);
};

permissionButton.onclick = () => {
  Notification.requestPermission().then((result) => {
    permissionStatusText.textContent = "Notification permission:" + result;
  });
};
