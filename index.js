var tasks = document.getElementsByClassName(
  "secondary-content waves-effect btn red"
);
for (var i = 0; i < tasks.length; i++) {
  tasks[i].onclick = function () {
    var task = this.parentElement;
    task.style.display = "none";
    M.toast({ html: "Task Deleted Successfully!" });
  };
}

function addNewElement() {
  var li = document.createElement("li");
  var inputText = document.getElementById("inputText").value;
  var inputText1 = document.getElementById("inputText1").value;

  var i = document.createElement("i");
  var span = document.createElement("span");
  var p = document.createElement("p");
  var a = document.createElement("a");
  var icon = document.createElement("i");

  icon.innerText = "delete";
  span.innerText = inputText;
  p.innerText = inputText1;

  span.className = "title";
  li.className = "collection-item avatar";
  i.className = "material-icons circle";
  a.className = "secondary-content waves-effect btn red";
  icon.className = "material-icons";

  a.appendChild(icon);

  li.appendChild(i);
  li.appendChild(span);
  li.appendChild(p);

  li.appendChild(a);

  document.getElementById("myTasks").appendChild(li);

  //   Close the modal
  document.getElementById("closeButton").click();

  M.toast({ html: "New Task Added Successfully!" });

  var tasks = document.getElementsByClassName(
    "secondary-content waves-effect btn red"
  );
  for (var i = 0; i < tasks.length; i++) {
    tasks[i].onclick = function () {
      var task = this.parentElement;
      task.style.display = "none";
      M.toast({ html: "Task Deleted Successfully!" });
    };
  }
}
