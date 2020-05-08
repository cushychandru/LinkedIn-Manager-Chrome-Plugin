

'use strict';

function connect(e) {
  console.log("id of div : " + e.id);
  chrome.tabs.executeScript(null,
    { code: "document.querySelectorAll('button[data-control-name=\"people_connect\"]').forEach(function(ele){  setTimeout(function() {ele.click();console.log('clicked');},1000);});" });
  window.close();
}

function company(e) {
  console.log("id of div : " + e.id);
  chrome.tabs.executeScript(null,
    { code: "document.querySelectorAll('button[data-control-name=\"companies_follow\"]').forEach(function(ele){  setTimeout(function() {ele.click();console.log('clicked');},1000);});" });
  window.close();
}

function hashtag(e) {
  console.log("id of div : " + e.id);
  chrome.tabs.executeScript(null,
    { code: "document.querySelectorAll('button[data-control-name=\"follow\"]').forEach(function(ele){  setTimeout(function() {ele.click();console.log('clicked');},1000);});" });
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#connect').addEventListener('click', connect);
  document.querySelector('#company').addEventListener('click', company);
  document.querySelector('#hashtag').addEventListener('click', hashtag);
});

