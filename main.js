var newRow = `
<div class="form__row">
        <div class="form__name">
          <label for="name">Name </label>
          <input type="text" name="name" placeholder="Enter your name" autocomplete="off" class="nameName" id=""/>
        </div>
        <div class="form__number">
          <label for="number">Phone no. </label>
          <input type="tel" name="number" placeholder="Enter your phone no." autocomplete="off" class="numberNumber" id=""/>
        </div>
        <div class="form__add">
            <button class="remove__button">Remove</button>
        </div>
      </div>
`;
var countId = 1; //put the id of div on html as "something"0
$(document).on("click", ".add__button", function () {
  let numItems = $(".form__row").length;
  console.log("add button");
  if (numItems <= 7) {
    // $(newRow.nameName).attr("id", "hello");
    $(newRow)
      .insertBefore(".form__submit")
      .find(".nameName")
      .prop("id", "name" + countId)
      .end()
      .find(".numberNumber")
      .prop("id", "Number" + countId);
    $(".form__add").show("slow");
    countId++;
  }
});
$(document).on("click", ".remove__button", function () {
  let numItems = $(".form__row").length;
  console.log("remove button");
  if (numItems <= 2) {
    $(".form__add").hide("slow");
  }
  if (numItems > 1) {
    $(this).parent().parent().remove();
  }
});
