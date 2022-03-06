window.addEventListener("load", () => {
  let days_array = [
    { days_word: "One day before", days: 1 },
    { days_word: "Three days before", days: 3 },
    { days_word: "Ten days before", days: 10 },
    { days_word: "Fifteen days before", days: 15 },
    { days_word: "Twenty days before", days: 20 },
  ];

  class DateFormatter {
    constructor(days) {
      this.date = new Date().setDate(new Date().getDate() - days);
    }

    insertDays(days_word) {
      let li_element = document.createElement("li");
      li_element.className = "days";

      let days_word_element = document.createElement("p");
      days_word_element.className = "days_word";
      days_word_element.innerText = days_word;

      let days_display_element = document.createElement("p");
      days_display_element.innerText = moment(this.date).format("YYYY/MM/DD");
      li_element.appendChild(days_word_element);
      li_element.appendChild(days_display_element);
      document.getElementById("reviewing_information").appendChild(li_element);
    }
  }

  days_array.forEach((element) => {
    new DateFormatter(element.days).insertDays(element.days_word);
  });
});
