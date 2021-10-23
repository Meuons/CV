//Element variables
let coursesEl = document.getElementById("courses");
let experienceEl = document.getElementById("experience");
let webpagesEl = document.getElementById("webpages");
let notEl = document.getElementById('notification')
let link;
//Store the url for the fetch call in a variable
let url = 'http://studenter.miun.se/~mama2006/webb3/project/REST/rest.php';

window.onload = getRows();
