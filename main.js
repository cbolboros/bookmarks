var modal = document.querySelector(".modal");
var instance = M.Modal.init(modal);

var modalTitle = document.getElementById("bookmarkTitle");
var modalLink = document.getElementById("bookmarkLink");
var add = document.getElementById("addBookmarkBtn");
var bookmarkList = document.getElementById("bookmarks");
var remove = document.querySelectorAll(".deleteBtn");

add.addEventListener("click", addBookmark);

function addBookmark() {
  var list = document.createElement("li");
  var link = document.createElement("a");
  var image = document.createElement("img");
  var div = document.createElement("div");

  var deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "waves-effect", "red", "deleteBtn");

  list.classList.add("collection-item");
  bookmarkList.appendChild(list);
  image.setAttribute(
    "src",
    "https://www.google.com/s2/favicons?domain=" + modalLink.value
  );
  list.appendChild(image);
  link.setAttribute("href", modalLink.value);
  link.setAttribute("target", "_blank");
  list.appendChild(link);
  list.appendChild(deleteBtn);

  link.innerText = modalTitle.value;

  deleteBtn.addEventListener("click", deleteBookmark);

  instance.close();
}

function deleteBookmark() {
  var bookmark = this.parentNode;
  bookmark.remove();
}
