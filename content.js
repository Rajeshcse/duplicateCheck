// xpath function
function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

alert("hello");
var input5 = document.createElement("input");
input5.type = "button";
input5.value = "Final Check";

// input5.onclick = getSelectedText;

input5.onclick = getSelectedText;
input5.setAttribute(
  "style",
  "font-size:14px; position:absolute; top:190px; left:450px;"
);
document.body.appendChild(input5);


// var input1 = document.createElement("input");
// input1.type = "button";
// input1.value = "Validation source";
// input1.onclick = valSource;
// input1.setAttribute(
//   "style",
//   "font-size:14px; position:absolute; top:270px; left:680px; background-color: #F3B15E; border-radius: 5px; "
// );
// document.body.appendChild(input1);

// Label
var newlabel = document.createElement("label");
newlabel.type="label";

document.body.appendChild(newlabel);
newlabel.setAttribute(
  "style",
  "font-size:14px; position:absolute; top:100px; left:750px; color : red "
)

// label1
var newlabel1 = document.createElement("label");
newlabel1.type="label";

document.body.appendChild(newlabel1);
newlabel1.setAttribute(
  "style",
  "font-size:14px; position:absolute; top:80px; left:750px; color : red "
)

// label2
var newlabel2 = document.createElement("label");
newlabel2.type="label";

document.body.appendChild(newlabel2);
newlabel2.setAttribute(
  "style",
  "font-size:14px; position:absolute; top:60px; left:750px; color : red"
)


// var res = str.replace("-- Choose one --", "");
function valSource(){
  var asin= getElementByXpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[2]/select[1]");
  var str= asin.textContent;
  // var x = getElementByXpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[6]");
  // var book = x.textContent;
  var ddpTitle= getElementByXpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[6]");
  var dppTitle= ddpTitle.textContent;

  var asin = str.replace("-- Choose one --", "");
  
  window.open("https://www.amazon.com/dp/"+asin);
  window.open("https://www.goodreads.com/search?q="+asin+"&qid="+asin);
  window.open("https://www.fantasticfiction.com/search/?searchfor=book&keywords="+dppTitle);
  window.open("https://ebook-vendor-portal.amazon.com/ebookedit?bookSearchText="+asin+"&asin="+asin);
  window.open("https://www.google.com/search?q="+dppTitle +" Original publication date");

}

function getSelectedText() {

  // Alert 
  var Stitle= getElementByXpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[8]/input[1]");
  var seriesTitle = Stitle.value.toLowerCase().trim();

  if(seriesTitle==="step into reading" || seriesTitle==="world of reading"){
    newlabel2.innerHTML = `Special cases:Curate as Not a Series`;
  }
  else if(seriesTitle==="twilight saga"){
    newlabel2.innerHTML = `Though this series has series information in Goodreads that midnight sun is Book 5 we will be considering it as Tier 2 content`;
  }
  
  else if(seriesTitle==="the witcher saga" ||seriesTitle==="halo universe" || seriesTitle==="mini myths"){
    newlabel2.innerHTML = `Series Number upon PM/PF Request || Refer the SOP link https://w.amazon.com/bin/view/KCQ-Series-Update/#Hcase7:Actionon27TwilightSaga27`;
  }
  else{
    newlabel2.innerHTML=``;
  }




  // Validation Source
  var e = getElementByXpath("/html[1]/body[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/table[1]/tbody[1]/tr[1]/td[21]/select[1]");
  // var value = e.options[e.selectedIndex].value;
  var text = e.options[e.selectedIndex].text;
  if (text === "-- Choose one --") {
    newlabel1.innerHTML = `Choose a validation Source !`;
  }
  else{
    newlabel1.innerHTML = ``;
  }

  //  dpp Title
  var tLength = document.getElementById("md_grd_2_tbl").rows.length;
  var dppTitle = [];
  for (let i = 1; i < tLength; i++) {
    var row = document.getElementById("md_grd_2_tbl").rows[i].cells[4].innerHTML;
    dppTitle.push(row);
  }
  dppTitle.push("ICT Systems Security and Privacy Protection");
  
  let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

  console.log([...new Set(findDuplicates(dppTitle))]);
  if (findDuplicates) {
    // alert([...new Set(findDuplicates(dppTitle))]);
    
    newlabel.innerHTML ="Duplicate title(s) : "+[...new Set(findDuplicates(dppTitle))];
  }
  
}
