window.addEventListener("load", () => {
  let days_array = [
    { display_words: "One day before", days: 1 },
    { display_words: "Three days before", days: 3 },
    { display_words: "Ten days before", days: 10 },
    { display_words: "Fifteen days before", days: 15 },
    { display_words: "Twenty days before", days: 20 },
  ];

  class ReviewingInformation {
    constructor(days_object) {
      this.date = new Date().setDate(new Date().getDate() - days_object.days);
      this.display_words = days_object.display_words;
    }

    insertDisplayWords() {
      let li_element = document.createElement("li");
      li_element.className = "days";

      let days_word_element = document.createElement("p");
      days_word_element.className = "days_word";
      days_word_element.innerText = this.display_words;

      let days_display_element = document.createElement("p");
      days_display_element.innerText = moment(this.date).format("YYYY/MM/DD");

      li_element.appendChild(days_word_element);
      li_element.appendChild(days_display_element);
      document.getElementById("reviewing_information").appendChild(li_element);
    }
  }

  days_array.forEach((days_object) => {
    new ReviewingInformation(days_object).insertDisplayWords();
  });
});
