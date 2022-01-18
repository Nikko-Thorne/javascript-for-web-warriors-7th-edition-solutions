/*    JavaScript 7th Edition
      Chapter 3
      Project 03-03

      Application to generate a movie list
      Author: Nikko Thorne
      Date:   01/17/2022

      Filename: project03-03.js
*/

let titles = [];
titles[0] = "The Shawshank Redemption (1994)";
titles[1] = "The Godfather (1994)";
titles[2] = "The Dark Knight (2008)";
titles[3] = "The Godfather: Part II (1974)";
titles[4] = "The Lord of the Rings: The Return of the King (2003)";
titles[5] = "Pulp Fiction (1994)";
titles[6] = "Schindler's List (1993)";
titles[7] = "12 Angry Men (1957)";
titles[8] = "Inception (2010)";
titles[9] = "Fight Club (1999)";

let ratings = [];
ratings[0] = "9.3";
ratings[1] = "9.2";
ratings[2] = "9.0";
ratings[3] = "9.0";
ratings[4] = "8.9";
ratings[5] = "8.9";
ratings[6] = "8.9";
ratings[7] = "8.9";
ratings[8] = "8.8";
ratings[9] = "8.8";

let summaries = [];
summaries[0] = "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.";
summaries[1] = "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.";
summaries[2] = "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.";
summaries[3] = "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.";
summaries[4] = "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.";
summaries[5] = "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.";
summaries[6] = "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.";
summaries[7] = "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.";
summaries[8] = "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.";
summaries[9] = "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.";

let links = [];
links[0] = "https://www.imdb.com/title/tt0111161/?ref_=adv_li_tt";
links[1] = "https://www.imdb.com/title/tt0068646/?ref_=adv_li_tt";
links[2] = "https://www.imdb.com/title/tt0468569/?ref_=adv_li_tt";
links[3] = "https://www.imdb.com/title/tt0071562/?ref_=adv_li_tt";
links[4] = "https://www.imdb.com/title/tt0167260/?ref_=adv_li_tt";
links[5] = "https://www.imdb.com/title/tt0110912/?ref_=adv_li_tt";
links[6] = "https://www.imdb.com/title/tt0108052/?ref_=adv_li_tt";
links[7] = "https://www.imdb.com/title/tt0050083/?ref_=adv_li_tt";
links[8] = "https://www.imdb.com/title/tt1375666/?ref_=adv_li_tt";
links[9] = "https://www.imdb.com/title/tt0137523/?ref_=adv_li_tt";

//htmlCode Variable
let htmlCode = "";

//for loop 
for(let i = 0; i < titles.length; i++) {
    htmlCode += "<tr>";
    htmlCode += "<td>";
      htmlCode += "<a href='" + links[i] + "'>" + titles[i] + "</a>";
      htmlCode += "</td>";
    htmlCode += "<td>";
    htmlCode += summaries[i];
    htmlCode += "</td>";
    htmlCode += "<td>";
    htmlCode += ratings[i];
    htmlCode += "</td>";
    htmlCode += "</tr>";
}

let tableBody = document.getElementsByTagName("tbody")[0];
       tableBody.innerHTML = htmlCode;