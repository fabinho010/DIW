import "../sass/application.scss";
import $ from "./jquery-2.1.0.min.js";
import { MDCTopAppBar } from "@material/top-app-bar";
import { MDCTabBar } from "@material/tab-bar";
import { MDCTabScroller } from "@material/tab-scroller";
import { MDCRipple } from "@material/ripple";

var names = [
  "Tiger",
  "Samuel",
  "Leeloo",
  "Bella",
  "Mo",
  "Sly",
  "Beezy",
  "Maple",
  "Rodney",
  "Yonce",
  "Reginald",
  "Winifred",
];

var ages = [
  "9 Weeks",
  "12 Weeks",
  "3 Months",
  "8 Weeks",
  "1 Year",
  "15 Weeks",
  "4 Months",
  "2 Months",
  "14 Weeks",
  "6 Months",
  "10 Weeks",
  "8 Months",
];

$(".kittens")
  .find("li")
  .each(function (i, el) {
    var img = $(el).find("img");
    var name = $(el).find(".name");
    var age = $(el).find(".age");

    var w = 250;
    var h = 250;

    img.attr("src", "http://placekitten.com/" + w + "/" + h + "?image=" + i);
    name.text(names[i]);
    age.text(ages[i]);
  });

// Instantiation
const topAppBarElement = document.querySelector(".mdc-top-app-bar");
const topAppBar = new MDCTopAppBar(topAppBarElement);

//Tap bar-Tap scroll
const tabBar = new MDCTabBar(document.querySelector(".mdc-tab-bar"));
const tabScroller = new MDCTabScroller(
  document.querySelector(".mdc-tab-scroller")
);

//Buttons
const buttonRipple = new MDCRipple(document.querySelector(".mdc-button"));
