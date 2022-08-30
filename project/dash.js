document.addEventListener('DOMContentLoaded', function () {
    var modeSwitch = document.querySelector('.mode-switch');
  
    modeSwitch.addEventListener('click', function () {                     document.documentElement.classList.toggle('dark');
      modeSwitch.classList.toggle('active');
    });
    
    var listView = document.querySelector('.list-view');
    var gridView = document.querySelector('.grid-view');
    var projectsList = document.querySelector('.project-boxes');
    
    listView.addEventListener('click', function () {
      gridView.classList.remove('active');
      listView.classList.add('active');
      projectsList.classList.remove('jsGridView');
      projectsList.classList.add('jsListView');
    });
    
    gridView.addEventListener('click', function () {
      gridView.classList.add('active');
      listView.classList.remove('active');
      projectsList.classList.remove('jsListView');
      projectsList.classList.add('jsGridView');
    });
    
    document.querySelector('.messages-btn').addEventListener('click', function () {
      document.querySelector('.messages-section').classList.add('show');
    });
    
    document.querySelector('.messages-close').addEventListener('click', function() {
      document.querySelector('.messages-section').classList.remove('show');
    });
  });
  
var today = new Date();

var yyyy = today.getFullYear();

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
const d = new Date();
toda = yyyy;
document.getElementById('date').innerHTML= monthNames[d.getMonth()]+" "+toda;

var i = new Date(new Date().getTime() + 4*60*60*1000).toLocaleTimeString(); // 3:18:48 PM or 15 :18:48

console.log(i)

function card() {
  const element = document.getElementById("card").style.display='none';
}
function card2() {
  const element = document.getElementById("card-2").style.display='none';
}
function card3() {
  const element = document.getElementById("card-3").style.display='none';
}
function card4() {
  const element = document.getElementById("card-4").style.display='none';
}
function card5() {
  const element = document.getElementById("card-5").style.display='none';
}
function card6() {
  const element = document.getElementById("card-6").style.display='none';
}

function card_msg1() {
  const element = document.getElementById("mbox1").style.display='none';
}
function card_msg2() {
  const element = document.getElementById("mbox2").style.display='none';
}
function card_msg3() {
  const element = document.getElementById("mbox3").style.display='none';
}
function card_msg4() {
  const element = document.getElementById("mbox4").style.display='none';
}