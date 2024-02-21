const flexList = document.querySelector(".flex-list");
const flexList_items = document.querySelectorAll(".flex-list-items");

// setting background styles
const setBackgroundStyle = (name) =>
  `linear-gradient(180deg, rgba(15, 15, 15, 0) 0%, #111111 100%),url(./images/${name}.jpg) no-repeat center center/cover`;

// removing the selected tags to the elements
const removeSelectedItems = (items) => {
  items.forEach((elements) => {
    elements.classList.remove("selected");
    elements.style.background = "";
  });
};

// getting attributes to the elements
const getAttribute = (element, name) => element.getAttribute(name);

document.addEventListener("click", (e) => {
  const target = e.target;
  const keywords = {
    items: "flex-list-items",
    selected: "selected",
    user: "user-name",
  };

  // checking if the target has the class name of the keywords
  if (target.classList.contains(keywords.user)) {
    const parent = target.parentElement;
    removeSelectedItems(flexList_items);

    const currentName = getAttribute(parent, "name");
    parent.style.background = setBackgroundStyle(currentName);
    parent.classList.add(keywords.selected);
  }

  // checking if the target has the class name of the keywords
  if (target.classList.contains(keywords.items)) {
    removeSelectedItems(flexList_items);
    const currentName = getAttribute(target, "name");
    target.style.background = setBackgroundStyle(currentName);
    target.classList.add(keywords.selected);
  }
});
