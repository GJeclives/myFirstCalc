document.addEventListener("mouseover", function () {
  if (blurr == 0) input.focus();
});

var e = Math.E;
var π = Math.PI;

var blurr = 0;
var err;
var w = 40;
var car = 0;
var start;
var end;
const back = [];
var acc = [];
function setAcc() {
  let d = 0;
  for (var w = 0; w < back.length; w++) {
    d += back[w];
    acc.push(d);
  }
}


var comArr = ["^", "!", "√", "Y", "C", "Q", "%"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ")", "π", "e", "!", "%"];
var mult = ["(", "*", "+", "-", "/", ",", "^", ""];
var evalu = ["n", "s", "g", "t", "l", "c"];
var mullt = ["w", "Y", /*"c",*/ "B", "K", "t", "R", "Z"];

var keys = [
  ["2ndF", "(", ")", "<-", "clear"],
  ["7", "8", "9", "<", ">"],
  ["4", "5", "6", "×", "/"],
  ["1", "2", "3", "+", "-"],
  [".", "0", "^(", "R/D", "="],
];
var keys2 = [
  ["1stF", "(", ")", "<-", "clear"],
  ["sin(", "cos(", "tan(", "<", ">"],
  ["asin(", "acos(", "atan(", "π", "e"],
  ["!", "C", "P", "log(", "In("],
  ["%", "E", "√(", "xπ", "="],
];
var hkey = document.querySelector(".keys");

var func = 1;

var sec = document.getElementById("button0");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");
var button9 = document.getElementById("button9");
var button10 = document.getElementById("button10");
var button11 = document.getElementById("button11");
var button12 = document.getElementById("button12");
var button13 = document.getElementById("button13");
var button14 = document.getElementById("button14");
var button15 = document.getElementById("button15");
var button16 = document.getElementById("button16");
var button17 = document.getElementById("button17");
var button18 = document.getElementById("button18");
var button19 = document.getElementById("button19");
var button20 = document.getElementById("button20");
var button21 = document.getElementById("button21");
var button22 = document.getElementById("button22");
var button23 = document.getElementById("button23");
var button24 = document.getElementById("button24");

var display = document.querySelector(".display");
var ang = document.getElementById("ang");
var input = document.querySelector(".input");
var output = document.querySelector(".output");

input.addEventListener("blur", (e) => {
  if (blurr==0) e.target.focus();
});
input.addEventListener("click", function () {
  output.textContent="";
  if (
    input.textContent.length != 0 &&
    start != 0 &&
    start != input.textContent.length
  ) {
    // let acc=[]; let d=0;
    // for (var v=0; v<back.length; v++)
    //    {d+=back[v]; acc.push(d);}
    var i = 0;
    while (i < start || !acc.includes(i)) {
      setCaret(i + 1);
      i++;
    }
    console.log(i);
  }
});

function getSelectionCharacterOffsetWithin(element) {
  start = 0;
  end = 0;
  var doc = element.ownerDocument || element.document;
  var win = doc.defaultView || doc.parentWindow;
  var sel;
  if (typeof win.getSelection != "undefined") {
    sel = win.getSelection();
    if (sel.rangeCount > 0) {
      var range = win.getSelection().getRangeAt(0);
      var preCaretRange = range.cloneRange();
      preCaretRange.selectNodeContents(element);
      preCaretRange.setEnd(range.startContainer, range.startOffset);
      start = preCaretRange.toString().length;
      preCaretRange.setEnd(range.endContainer, range.endOffset);
      end = preCaretRange.toString().length;
    }
  } else if ((sel = doc.selection) && sel.type != "Control") {
    var textRange = sel.createRange();
    var preCaretTextRange = doc.body.createTextRange();
    preCaretTextRange.moveToElementText(element);
    preCaretTextRange.setEndPoint("EndToStart", textRange);
    start = preCaretTextRange.text.length;
    preCaretTextRange.setEndPoint("EndToEnd", textRange);
    end = preCaretTextRange.text.length;
  }
  return { start: start, end: end };
}

function reportSelection() {
  var selOffsets = getSelectionCharacterOffsetWithin(input);
  console.log("Caret Range: " + selOffsets.start + ", " + selOffsets.end);
}

function setCaret(numb) {
  var char = numb,
    sel; // character at which to place caret
    blurr = 0;
  input.focus();
  // if (document.selection) {
  //   sel = document.selection.createRange();
  //   sel.moveStart('character', char);
  //   sel.select();
  // }
  // else {
  sel = window.getSelection();
  sel.collapse(input.firstChild, char);
} /*}*/

String.prototype.splice = function (idx, rem, str) {
  return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};

function checkCom(str, arr) {
  for (var i=0; i<str.length; i++){
    for (var j=0; j<arr.length; j++){
    if (str[i]==arr[j]){
     console.log("cg");
      return true
    }
    }
  }
  return false;
}

function sin(x) {
  if (
    trat(x).toString().includes("ERROR")
   )
   return trat ("ERROR");
  if (ang.textContent=="R")
  return Math.sin(trat(x));
  else
  return Math.sin(trat(x) * (Math.PI/180));
}
function cos(x) {
  if (
    trat(x).toString().includes("ERROR")
   )
   return trat ("ERROR");
  return Math.cos((ang.textContent == "R") ? trat(x) : trat(x) * (Math.PI/180));
}
function tan(x) {
  if (
    trat(x).toString().includes("ERROR")
   )
   return trat ("ERROR");
  let coun = (ang.textContent == "R")? trat(π/2): 90; 
  if (Math.abs(trat(x))%coun==0&&x!=0) return trat("ERROR")
  else
  return Math.tan((ang.textContent == "R") ? trat(x) : trat(x) * (Math.PI/180));
}
function asin(x) {
  if (
    trat(x).toString().includes("ERROR")
   )
   return trat ("ERROR");
  return (ang.textContent == "R")
    ? Math.asin(trat(x))
    : Math.asin(trat(x)) * (180/Math.PI);
}
function acos(x) {
  if (
    trat(x).toString().includes("ERROR")
   )
   return trat ("ERROR");
  return (ang.textContent == "R")
    ? Math.acos(trat(x))
    : Math.acos(trat(x)) * (180/Math.PI);
}
function atan(x) {
  if (
    trat(x).toString().includes("ERROR")
   )
   return trat ("ERROR");
  return (ang.textContent == "R")
    ? Math.atan(trat(x))
    : Math.atan(trat(x)) * (180/Math.PI);
}

function sqrt(x) {
  if (
    trat(x).toString().includes("ERROR")
   )
   return trat ("ERROR");
  return Math.sqrt(trat(x));
}
function log(x) {
  if (
    trat(x).toString().includes("ERROR")
   )
   return trat ("ERROR");
  return Math.log10(trat(x));
}
function In(x) {
  if (
    trat(x).toString().includes("ERROR")
   )
   return trat ("ERROR");
  return Math.log(trat(x));
}

function fac(bef) {
  if (trat(bef) - Math.floor(trat(bef)) !== 0 || trat(bef) < 0 || trat(bef).toString().includes("ERROR"))
    return trat("ERROR");
  else if (trat(bef) == 0) return 1;
  else return trat(bef) * fac(trat(bef) - 1);
}
function pow(bef, aft) {
  if (
    trat(bef).toString().includes("ERROR") ||
    trat(aft).toString().includes("ERROR")
  )
    return (trat("ERROR"));
  return Math.pow(trat(bef), trat(aft));
}
function Z(bef, aft) {
  if (
    trat(bef).toString().includes("ERROR") ||
    trat(aft).toString().includes("ERROR")
  )
    return (trat("ERROR"));
  return trat(bef) * Math.pow(10, trat(aft));
}
function R(bef, aft) {
  if (
    trat(bef) - Math.floor(trat(bef)) !== 0 ||
    trat(aft) - Math.floor(trat(aft)) !== 0 ||
    trat(bef).toString().includes("ERROR") ||
    trat(aft).toString().includes("ERROR")
  )
    return (trat("ERROR"));
  else if (trat(aft) > trat(bef) || trat(bef) < 0) return trat("ERROR");
  else return fac(bef) / fac(trat(bef) - trat(aft));
}
function K(bef, aft) {
  if (
    trat(bef) - Math.floor(trat(bef)) !== 0 ||
    trat(aft) - Math.floor(trat(aft)) !== 0 ||
    trat(bef).toString().includes("ERROR") ||
    trat(aft).toString().includes("ERROR")
  )
    return trat("ERROR");
  else if (trat(aft) > trat(bef) || trat(bef) < 0) return trat("ERROR");
  else return fac(bef) / (fac(trat(bef) - trat(aft)) * fac(trat(aft)));
}
function pcnt(bef) {
 if (
  trat(bef).toString().includes("ERROR")
 )
 return trat ("ERROR");
  return trat(bef) * 0.01;
}

window.onload = function () {
  document.addEventListener("selectionchange", reportSelection, false);
  // document.addEventListener("mouseup", reportSelection, false);
  document.addEventListener("mousedown", reportSelection, false);
  document.addEventListener("keyup", reportSelection, false);
};

var getCaretCoordinates = input.textContent.caret;

sec.addEventListener("click", function () {
  func == 1 ? func++ : func--;
  //   console.log(func);
  //   console.log(skeys);

  for (var i = 0; i < 5; i++) {
    //    console.log(hkey.children[i])
    for (var j = 0; j < 5; j++) {
      var skeys;
      if (func == 1) {
        skeys = keys;
      } else {
        skeys = keys2;
      } //when you click the 2ndF/1stF button
      // console.log(hkey.children[i].children[j].innerHTML,i)
      hkey.children[i].children[j].innerHTML = `<br>${skeys[i][j]}`;
    }
  }
});

button3.addEventListener("click", function backSpace() {
  output.textContent="";
  console.log(start);
  console.log(back);
  let p = 0,
    v = 0,
    c = 0;
  while (p < start) {
    p += back[c];
    v = back[c];
    c++;
  }
  console.log(p);
  console.log(v);
  if (input.textContent.length != 0)
    input.textContent = input.textContent.splice(start - v, v);
  console.log(start);
  input.textContent = input.textContent.replace("undefined", "");
  setCaret(start - v);
  back.splice(c - 1, 1);
  console.log(back);
});

button4.addEventListener("click", function () {
   location.reload();
});

input.textContent += "";

input.onkeypress = input.onpaste = checkInput;

function checkInput(e) {
  var e = e || event;
  var char =
    e.type == "keypress"
      ? String.fromCharCode(e.keyCode || e.which)
      : (e.clipboardData || window.clipboardData).getData("Text");
  if (
    /[^\d]/gi.test(char) ||
    input.textContent.length > w ||
    !acc.includes(start)
  ) {
    let p = 0,
      v = 0,
      c = 0;
    while (p < start) {
      p += back[c];
      v = back[c];
      c++;
    }
    back.splice(c - 1, 1);
    return false;
  }
}

input.addEventListener("keyup", function (e) {
  if (e.keyCode == 8 || e.charCode ==8) {
    if (start > 0) {
      let p = 0,
        v = 0,
        c = 0, ar = [];
      while (p < start) {
        ar.push(p);
        p += back[c];
        v = back[c];
        c++;
      }
      ar.push(start);
      if (start-ar[ar.length-1]!=1) 
       { setCaret(ar[ar.length-2]);
        input.textContent = input.textContent.splice(ar[ar.length-2], ar[ar.length-1]-ar[ar.length-2]-1, "");
        back.splice(c - 1, 1); setCaret(ar[ar.length-2]); }
    }setAcc();
  }
  if (e.keyCode == 40) {
    // down arrow
  }
  if (e.keyCode == 37|| e.charCode ==37) {
    if (start > 0) {
      let p = 0,
        v = 0,
        c = 0, ar = [];
      while (p <= start) {
        ar.push(p);
        p += back[c];
        v = back[c];
        c++;
      }
      ar.push(start);
      if (start-ar[ar.length-1]!=1) 
        setCaret(ar[ar.length-2]);
    }setAcc();
  }
  if (e.keyCode == 39|| e.charCode ==39) {
    if (start < input.textContent.length) {
      let p = 0,
        v = 0,
        c = 0;
      while (p < start) {
        p += back[c];
        v = back[c];
        c++;
      }
       setCaret(start + back[c-1]-1);
    } setAcc();
  }
});


// EACH BUTTON

button1.addEventListener("click", function () {
  output.textContent="";
  let not3 = ["×", "/", "^", "!", "C", "P", "E", "%"];
  if (
    button1.textContent.length + input.textContent.length < w &&
    input.textContent[start - 1] != "." &&
    !not3.includes(input.textContent[start])
  ) {
    let p = 0,
      v = 0,
      c = 0;
    while (p < start) {
      p += back[c];
      v = back[c];
      c++;
    }
    back.splice(c, 0, button1.textContent.length);
    setAcc();
    input.textContent = input.textContent.splice(start, 0, button1.textContent);
    setCaret(start + button1.textContent.length);
  }
});

button2.addEventListener("click", function () {
  output.textContent="";
  let not1 = ["/", "×", "+", "-", "^", ".", "(", "C", "P", "E"];
  let not3 = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "s",
    "c",
    "t",
    "a",
    "π",
    "e",
    "l",
    "I",
  ];
  if (
    button2.textContent.length + input.textContent.length < w &&
    !not1.includes(input.textContent[start - 1]) &&
    input.textContent.length > 0 &&
    !not3.includes(input.textContent[start])
  ) {
    let p = 0,
      v = 0,
      c = 0;
    while (p < start) {
      p += back[c];
      v = back[c];
      c++;
    }
    back.splice(c, 0, button2.textContent.length);
    setAcc();
    input.textContent = input.textContent.splice(start, 0, button2.textContent);
    setCaret(start + button2.textContent.length);
  }
});

button5.addEventListener("click", function () {
  output.textContent="";
  let not1 = [")", "π", "e", "!", "%"];
  let not2 = [".", ")", "π", "e", "!", "%"];
  let not23 = [")", "^", "×", "/", "!", "C", "P", "E", "%"];
  if (button5.textContent.length + input.textContent.length < w) {
    if (func == 1 && !not1.includes(input.textContent[start - 1])) {
      input.textContent = input.textContent.splice(
        start,
        0,
        button5.textContent
      );
      setCaret(start + button5.textContent.length);
      let p = 0,
        v = 0,
        c = 0;
      while (p < start) {
        p += back[c];
        v = back[c];
        c++;
      }
      back.splice(c, 0, button5.textContent.length);
      setAcc();
    }
    if (
      func == 2 &&
      !not2.includes(input.textContent[start - 1]) &&
      !not23.includes(input.textContent[start])
    ) {
      input.textContent = input.textContent.splice(
        start,
        0,
        button5.textContent
      );
      setCaret(start + button5.textContent.length);
      let p = 0,
        v = 0,
        c = 0;
      while (p < start) {
        p += back[c];
        v = back[c];
        c++;
      }
      back.splice(c, 0, button5.textContent.length);
      setAcc();
    }
  }
});

button6.addEventListener("click", function () {
  output.textContent="";
  let not1 = [")", "π", "e", "!", "%"];
  let not2 = [".", ")", "π", "e", "!", "%"];
  let not23 = [")", "^", "×", "/", "!", "C", "P", "E", "%"];
  if (button6.textContent.length + input.textContent.length < w) {
    if (func == 1 && !not1.includes(input.textContent[start - 1])) {
      input.textContent = input.textContent.splice(
        start,
        0,
        button6.textContent
      );
      setCaret(start + button6.textContent.length);
      let p = 0,
        v = 0,
        c = 0;
      while (p < start) {
        p += back[c];
        v = back[c];
        c++;
      }
      back.splice(c, 0, button6.textContent.length);
      setAcc();
    }
    if (
      func == 2 &&
      !not2.includes(input.textContent[start - 1]) &&
      !not23.includes(input.textContent[start])
    ) {
      input.textContent = input.textContent.splice(
        start,
        0,
        button6.textContent
      );
      setCaret(start + button6.textContent.length);
      let p = 0,
        v = 0,
        c = 0;
      while (p < start) {
        p += back[c];
        v = back[c];
        c++;
      }
      back.splice(c, 0, button6.textContent.length);
      setAcc();
    }
  }
});

button7.addEventListener("click", function () {
  output.textContent="";
  let not1 = [")", "π", "e", "!", "%"];
  let not2 = [".", ")", "π", "e", "!", "%"];
  let not23 = [")", "^", "×", "/", "!", "C", "P", "E", "%"];
  if (button7.textContent.length + input.textContent.length < w) {
    if (func == 1 && !not1.includes(input.textContent[start - 1])) {
      input.textContent = input.textContent.splice(
        start,
        0,
        button7.textContent
      );
      setCaret(start + button7.textContent.length);
      let p = 0,
        v = 0,
        c = 0;
      while (p < start) {
        p += back[c];
        v = back[c];
        c++;
      }
      back.splice(c, 0, button7.textContent.length);
      setAcc();
    }
    if (
      func == 2 &&
      !not2.includes(input.textContent[start - 1]) &&
      !not23.includes(input.textContent[start])
    ) {
      input.textContent = input.textContent.splice(
        start,
        0,
        button7.textContent
      );
      setCaret(start + button7.textContent.length);
      let p = 0,
        v = 0,
        c = 0;
      while (p < start) {
        p += back[c];
        v = back[c];
        c++;
      }
      back.splice(c, 0, button7.textContent.length);
      setAcc();
    }
  }
});

button8.addEventListener("click", function () {
  output.textContent="";
  if (start != 0) {
    let p = 0,
      v = 0,
      c = 0;
    while (p < start) {
      p += back[c];
      v = back[c];
      c++;
    }
    setCaret(start - back[c - 1]);
  }
});
button9.addEventListener("click", function () {
  output.textContent="";
  if (start != input.textContent.length) {
    let p = 0,
      v = 0,
      c = 0;
    while (p < start) {
      p += back[c];
      v = back[c];
      c++;
    }
    setCaret(start + back[c]);
  }
});

button10.addEventListener("click", function () {
  output.textContent="";
  let not1 = [")", "π", "e", "!", "%"];
  let not2 = [".", ")", "π", "e", "!", "%"];
  let not23 = [")", "^", "×", "/", "!", "C", "P", "E", "%"];
  if (button10.textContent.length + input.textContent.length < w) {
    if (func == 1 && !not1.includes(input.textContent[start - 1])) {
      input.textContent = input.textContent.splice(
        start,
        0,
        button10.textContent
      );
      setCaret(start + button10.textContent.length);
      var p = 0,
        v = 0,
        c = 0;
      while (p < start) {
        p += back[c];
        v = back[c];
        c++;
      }
      back.splice(c, 0, button10.textContent.length);
      setAcc();
    }
    if (
      func == 2 &&
      !not2.includes(input.textContent[start - 1]) &&
      !not23.includes(input.textContent[start])
    ) {
      input.textContent = input.textContent.splice(
        start,
        0,
        button10.textContent
      );
      setCaret(start + button10.textContent.length);
      var p = 0,
        v = 0,
        c = 0;
      while (p < start) {
        p += back[c];
        v = back[c];
        c++;
      }
      back.splice(c, 0, button10.textContent.length);
      setAcc();
    }
  }
});

button11.addEventListener("click", function () {
  output.textContent="";
  let not1 = [")", "π", "e", "!", "%"];
  let not2 = [".", ")", "π", "e", "!", "%"];
  let not23 = [")", "^", "×", "/", "!", "C", "P", "E", "%"];
  if (button11.textContent.length + input.textContent.length < w) {
    if (func == 1 && !not1.includes(input.textContent[start - 1])) {
      input.textContent = input.textContent.splice(
        start,
        0,
        button11.textContent
      );
      setCaret(start + button11.textContent.length);
      let p = 0,
        v = 0,
        c = 0;
      while (p < start) {
        p += back[c];
        v = back[c];
        c++;
      }
      back.splice(c, 0, button11.textContent.length);
      setAcc();
    }
    if (
      func == 2 &&
      !not2.includes(input.textContent[start - 1]) &&
      !not23.includes(input.textContent[start])
    ) {
      input.textContent = input.textContent.splice(
        start,
        0,
        button11.textContent
      );
      setCaret(start + button11.textContent.length);
      let p = 0,
        v = 0,
        c = 0;
      while (p < start) {
        p += back[c];
        v = back[c];
        c++;
      }
      back.splice(c, 0, button11.textContent.length);
      setAcc();
    }
  }
});

button12.addEventListener("click", function () {
  output.textContent="";
  let not1 = [")", "π", "e", "!", "%"];
  let not2 = [".", ")", "π", "e", "!", "%"];
  let not23 = [")", "^", "×", "/", "!", "C", "P", "E", "%"];
  if (button12.textContent.length + input.textContent.length < w) {
    if (func == 1 && !not1.includes(input.textContent[start - 1])) {
      input.textContent = input.textContent.splice(
        start,
        0,
        button12.textContent
      );
      setCaret(start + button12.textContent.length);
      let p = 0,
        v = 0,
        c = 0;
      while (p < start) {
        p += back[c];
        v = back[c];
        c++;
      }
      back.splice(c, 0, button12.textContent.length);
      setAcc();
    }
    if (
      func == 2 &&
      !not2.includes(input.textContent[start - 1]) &&
      !not23.includes(input.textContent[start])
    ) {
      input.textContent = input.textContent.splice(
        start,
        0,
        button12.textContent
      );
      setCaret(start + button12.textContent.length);
      let p = 0,
        v = 0,
        c = 0;
      while (p < start) {
        p += back[c];
        v = back[c];
        c++;
      }
      back.splice(c, 0, button12.textContent.length);
      setAcc();
    }
  }
});

button13.addEventListener("click", function () {
  output.textContent="";
  let not1 = ["/", "*", "+", "-", "^", ".", "C", "P", "E"];
  let not2 = [".", /*")",*/ "π", "e", "%"];
  let not13 = ["×", "/", ")", "^", "!", "C", "E", "P", "%"];
  let not23 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  if ((func == 1 && input.textContent.length != 0) || func == 2) {
    if (button13.textContent.length + input.textContent.length < w) {
      if (
        func == 1 &&
        !not1.includes(input.textContent[start - 1]) &&
        !not13.includes(input.textContent[start])
      ) {
        input.textContent = input.textContent.splice(
          start,
          0,
          button13.textContent
        );
        setCaret(start + button13.textContent.length);
        let p = 0,
          v = 0,
          c = 0;
        while (p < start) {
          p += back[c];
          v = back[c];
          c++;
        }
        back.splice(c, 0, button13.textContent.length);
        setAcc();
      }
      if (
        func == 2 &&
        !not2.includes(input.textContent[start - 1]) &&
        !not23.includes(input.textContent[start])
      ) {
        input.textContent = input.textContent.splice(
          start,
          0,
          button13.textContent
        );
        setCaret(start + button13.textContent.length);
        let p = 0,
          v = 0,
          c = 0;
        while (p < start) {
          p += back[c];
          v = back[c];
          c++;
        }
        back.splice(c, 0, button13.textContent.length);
        setAcc();
      }
    }
  }
});

button14.addEventListener("click", function () {
  output.textContent="";
  let not1 = ["/", "×", "+", "-", "^", ".", "!", "C", "P", "E"];
  let not2 = [".", ")", "π", "e", "!", "%"];
  let not13 = ["×", "/", ")", "^", "!", "C", "E", "P", "%"];
  let not23 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
  if ((func == 1 && input.textContent.length != 0) || func == 2) {
    if (button14.textContent.length + input.textContent.length < w) {
      if (
        func == 1 &&
        !not1.includes(input.textContent[start - 1]) &&
        !not13.includes(input.textContent[start])
      ) {
        input.textContent = input.textContent.splice(
          start,
          0,
          button14.textContent
        );
        setCaret(start + button14.textContent.length);
        let p = 0,
          v = 0,
          c = 0;
        while (p < start) {
          p += back[c];
          v = back[c];
          c++;
        }
        back.splice(c, 0, button14.textContent.length);
        setAcc();
      }
      if (
        func == 2 &&
        !not2.includes(input.textContent[start - 1]) &&
        !not23.includes(input.textContent[start])
      ) {
        input.textContent = input.textContent.splice(
          start,
          0,
          button14.textContent
        );
        setCaret(start + button14.textContent.length);
        let p = 0,
          v = 0,
          c = 0;
        while (p < start) {
          p += back[c];
          v = back[c];
          c++;
        }
        back.splice(c, 0, button14.textContent.length);
        setAcc();
      }
    }
  }
});

button15.addEventListener("click", function () {
  output.textContent="";
  let not1 = [")", "π", "e", "!", "%"];
  let not2 = ["(", ".", "C", "P", "E", "×"];
  let not23 = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "s",
    "c",
    "t",
    "a",
    "π",
    "e",
    "l",
    "I",
  ];
  if ((func == 2 && input.textContent.length != 0) || func == 1) {
    if (button15.textContent.length + input.textContent.length < w) {
      if (func == 1 && !not1.includes(input.textContent[start - 1])) {
        input.textContent = input.textContent.splice(
          start,
          0,
          button15.textContent
        );
        setCaret(start + button15.textContent.length);
        let p = 0,
          v = 0,
          c = 0;
        while (p < start) {
          p += back[c];
          v = back[c];
          c++;
        }
        back.splice(c, 0, button15.textContent.length);
        setAcc();
      }
      if (
        func == 2 &&
        !not2.includes(input.textContent[start - 1]) &&
        !not23.includes(input.textContent[start])
      ) {
        input.textContent = input.textContent.splice(
          start,
          0,
          button15.textContent
        );
        setCaret(start + button15.textContent.length);
        let p = 0,
          v = 0,
          c = 0;
        while (p < start) {
          p += back[c];
          v = back[c];
          c++;
        }
        back.splice(c, 0, button15.textContent.length);
        setAcc();
      }
    }
  }
});

button16.addEventListener("click", function () {
  output.textContent="";
  let not1 = [")", "π", "e", "!", "%"];
  let not2 = ["(", ".", "!", "C", "P", "E"];
  let not23 = ["!", ")", "×", "/", "C", "P", "E", "^", "%"];
  if ((func == 2 && input.textContent.length != 0) || func == 1) {
    if (button16.textContent.length + input.textContent.length < w) {
      if (func == 1 && !not1.includes(input.textContent[start - 1])) {
        input.textContent = input.textContent.splice(
          start,
          0,
          button16.textContent
        );
        setCaret(start + button16.textContent.length);
        let p = 0,
          v = 0,
          c = 0;
        while (p < start) {
          p += back[c];
          v = back[c];
          c++;
        }
        back.splice(c, 0, button16.textContent.length);
        setAcc();
      }
      if (
        func == 2 &&
        !not2.includes(input.textContent[start - 1]) &&
        !not23.includes(input.textContent[start])
      ) {
        input.textContent = input.textContent.splice(
          start,
          0,
          button16.textContent
        );
        setCaret(start + button16.textContent.length);
        let p = 0,
          v = 0,
          c = 0;
        while (p < start) {
          p += back[c];
          v = back[c];
          c++;
        }
        back.splice(c, 0, button16.textContent.length);
        setAcc();
      }
    }
  }
});

button17.addEventListener("click", function () {
  output.textContent="";
  let not1 = [")", "π", "e", "!", "%"];
  let not2 = ["(", ".", "!", "C", "P", "E"];
  let not23 = ["!", ")", "×", "/", "C", "P", "E", "^", "%"];
  if ((func == 2 && input.textContent.length != 0) || func == 1) {
    if (button17.textContent.length + input.textContent.length < w) {
      if (func == 1 && !not1.includes(input.textContent[start - 1])) {
        input.textContent = input.textContent.splice(
          start,
          0,
          button17.textContent
        );
        setCaret(start + button17.textContent.length);
        let p = 0,
          v = 0,
          c = 0;
        while (p < start) {
          p += back[c];
          v = back[c];
          c++;
        }
        back.splice(c, 0, button17.textContent.length);
        setAcc();
      }
      if (
        func == 2 &&
        !not2.includes(input.textContent[start - 1]) &&
        !not23.includes(input.textContent[start])
      ) {
        input.textContent = input.textContent.splice(
          start,
          0,
          button17.textContent
        );
        setCaret(start + button17.textContent.length);
        let p = 0,
          v = 0,
          c = 0;
        while (p < start) {
          p += back[c];
          v = back[c];
          c++;
        }
        back.splice(c, 0, button17.textContent.length);
        setAcc();
      }
    }
  }
});

button18.addEventListener("click", function () {
  output.textContent="";
  let not1 = ["+", "-", "^", ".", "(", "C", "P", "E"];
  let not2 = [".", ")", "!", "%"];
  let not13 = [")", "×", "/", "!", "C", "P", "E", "+", "-"];
  let not23 = [")", "^", "×", "/", "!", "C", "P", "E", "%"];
  if (button18.textContent.length + input.textContent.length < w) {
    if (
      func == 1 &&
      !not1.includes(input.textContent[start - 1]) &&
      !not13.includes(input.textContent[start])
    ) {
      input.textContent = input.textContent.splice(
        start,
        0,
        button18.textContent
      );
      setCaret(start + button18.textContent.length);
      let p = 0,
        v = 0,
        c = 0;
      while (p < start) {
        p += back[c];
        v = back[c];
        c++;
      }
      back.splice(c, 0, button18.textContent.length);
      setAcc();
    }
    if (
      func == 2 &&
      !not2.includes(input.textContent[start - 1]) &&
      !not23.includes(input.textContent[start])
    ) {
      input.textContent = input.textContent.splice(
        start,
        0,
        button18.textContent
      );
      setCaret(start + button18.textContent.length);
      let p = 0,
        v = 0,
        c = 0;
      while (p < start) {
        p += back[c];
        v = back[c];
        c++;
      }
      back.splice(c, 0, button18.textContent.length);
      setAcc();
    }
  }
});

button19.addEventListener("click", function () {
  output.textContent="";
  let not1 = ["+", "-", "^", ".", "C", "P"];
  let not2 = [".", ")", "!", "%"];
  let not13 = [")", "×", "/", "!", "C", "P", "E", "+", "-"];
  let not23 = [")", "^", "×", "/", "!", "C", "P", "E", "%"];
  if (button19.textContent.length + input.textContent.length < w) {
    if (
      func == 1 &&
      !not1.includes(input.textContent[start - 1]) &&
      !not13.includes(input.textContent[start])
    ) {
      input.textContent = input.textContent.splice(
        start,
        0,
        button19.textContent
      );
      setCaret(start + button19.textContent.length);
      let p = 0,
        v = 0,
        c = 0;
      while (p < start) {
        p += back[c];
        v = back[c];
        c++;
      }
      back.splice(c, 0, button19.textContent.length);
      setAcc();
    }
    if (
      func == 2 &&
      !not2.includes(input.textContent[start - 1]) &&
      !not23.includes(input.textContent[start])
    ) {
      input.textContent = input.textContent.splice(
        start,
        0,
        button19.textContent
      );
      setCaret(start + button19.textContent.length);
      let p = 0,
        v = 0,
        c = 0;
      while (p < start) {
        p += back[c];
        v = back[c];
        c++;
      }
      back.splice(c, 0, button19.textContent.length);
      setAcc();
    }
  }
});

button20.addEventListener("click", function () {
  output.textContent="";
  let not1 = [".", ")", "!", "π", "e", "!", "%"];
  let not2 = [".", "(", "π", "!", "%", "C", "P", "E"];
  let not13 = [")", "×", "/", "^", "!", "C", "P", "E", "%"];
  let not23 = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "s",
    "c",
    "t",
    "a",
    "π",
    "e",
    "l",
    "I",
    "C",
    "P",
    "E",
    "%",
    "√",
  ];
  var yet = ["(", ")", "+", "-", "×", "/", "C", "P", "E", "^"];
  var yes = 0;
  for (var i = 0; i < input.textContent.length; i++) {
    if (yet.includes(input.textContent[i])) {
      yes = 0;
    } else if (input.textContent[i] == ".") {
      yes = 1;
    }
  }
  if (button20.textContent.length + input.textContent.length < w) {
    if (
      func == 1 &&
      !not1.includes(input.textContent[start - 1]) &&
      yes == 0 &&
      !not13.includes(input.textContent[start])
    ) {
      input.textContent = input.textContent.splice(
        start,
        0,
        button20.textContent
      );
      setCaret(start + button20.textContent.length);
      let p = 0,
        v = 0,
        c = 0;
      while (p < start) {
        p += back[c];
        v = back[c];
        c++;
      }
      back.splice(c, 0, button20.textContent.length);
      setAcc();
    }
    if (
      func == 2 &&
      !not2.includes(input.textContent[start - 1]) &&
      input.textContent.length > 0 &&
      !not23.includes(input.textContent[start])
    ) {
      input.textContent = input.textContent.splice(
        start,
        0,
        button20.textContent
      );
      setCaret(start + button20.textContent.length);
      let p = 0,
        v = 0,
        c = 0;
      while (p < start) {
        p += back[c];
        v = back[c];
        c++;
      }
      back.splice(c, 0, button20.textContent.length);
      setAcc();
    }
  }
});

button21.addEventListener("click", function () {
  output.textContent="";
  let not1 = [")", "π", "e", "!", "%"];
  let not2 = ["(", ".", "!", "C", "P", "E"];
  let not23 = ["!", ")", "×", "/", "C", "P", "E", "^", "%"];
  if ((func == 2 && start != 0) || func == 1) {
    if (button21.textContent.length + input.textContent.length < w) {
      if (func == 1 && !not1.includes(input.textContent[start - 1])) {
        input.textContent = input.textContent.splice(
          start,
          0,
          button21.textContent
        );
        setCaret(start + button21.textContent.length);
        let p = 0,
          v = 0,
          c = 0;
        while (p < start) {
          p += back[c];
          v = back[c];
          c++;
        }
        back.splice(c, 0, button21.textContent.length);
        setAcc();
      }
      if (
        func == 2 &&
        !not2.includes(input.textContent[start - 1]) &&
        !not23.includes(input.textContent[start])
      ) {
        input.textContent = input.textContent.splice(
          start,
          0,
          button21.textContent
        );
        setCaret(start + button21.textContent.length);
        let p = 0,
          v = 0,
          c = 0;
        while (p < start) {
          p += back[c];
          v = back[c];
          c++;
        }
        back.splice(c, 0, button21.textContent.length);
        setAcc();
      }
    }
  }
});

button22.addEventListener("click", function () {
  output.textContent="";
  let not1 = ["(", ".", "!", "C", "P", "E"];
  let not2 = [".", "π", "e", "!", "%"];
  let not3 = [")", "^", "×", "/", "!", "C", "P", "E", "%"];
  if (button22.textContent.length + input.textContent.length < w) {
    if (
      func == 1 &&
      !not1.includes(input.textContent[start - 1]) &&
      start != 0 &&
      !not3.includes(input.textContent[start])
    ) {
      input.textContent = input.textContent.splice(
        start,
        0,
        button22.textContent
      );
      setCaret(start + button22.textContent.length);
      let p = 0,
        v = 0,
        c = 0;
      while (p < start) {
        p += back[c];
        v = back[c];
        c++;
      }
      back.splice(c, 0, button22.textContent.length);
      setAcc();
    }
    if (
      func == 2 &&
      !not2.includes(input.textContent[start - 1]) &&
      !not3.includes(input.textContent[start])
    ) {
      input.textContent = input.textContent.splice(
        start,
        0,
        button22.textContent
      );
      setCaret(start + button22.textContent.length);
      let p = 0,
        v = 0,
        c = 0;
      while (p < start) {
        p += back[c];
        v = back[c];
        c++;
      }
      back.splice(c, 0, button22.textContent.length);
      setAcc();
    }
  }
});

button23.addEventListener("click", function () {
  if (func==1 && output.textContent=="")
  ang.textContent == "R" ? (ang.textContent = "D") : (ang.textContent = "R");
  else if (func==2&&output.textContent!=""&&output.textContent!="ERROR"&&output.textContent.toString()!="Nan")
  { 
    if (!(output.textContent).includes("π"))
    output.textContent = (trat(output.textContent + "/π")).toString() + "π";
    else{ 
      output.textContent=trat(output.textContent);
    }
  }
});

button24.addEventListener("click", function () {
  input.blur()
  err = 0;
  output.textContent = trat(input.textContent);
  console.log (output.textContent);
});


function sort (put, i){
  put = put.toString();
  var pstop = ["*", "+", "-", "/", ""];
  var stop = ["*", "/", "^", "Y", "!", "Q", "C", "Z", "R", ""];
  var repl = ["^", "Y", "!", "Q", "C", "%", "√"];
  var bf = "";
  var aft = "";
  var j;
  var k;
  var ar = 1,
    br = 0,
    pr = 0,
    cr = 1,
    dr = 0,
    tr = 0;
    if (repl.includes(put[i]) && put[i - 1] != ".")  {
      bf = ""; aft = "";
      j = i - 1;
      k = i + 1;
      var mark = put[i]; if(mark=="^") mark=mark+"(";
      if (put[j] == ")") {
        br = 1; ar = 0; pstop = [];
      }
      if (put[k] == "(") {
        dr = 1; cr = 0; stop.length-=2;
      }
      if (mark != "√") {
      while (!pstop.includes(put[j]) && j >= 0 && ((ar == 0&&br!=0)||(br==pr&&ar!=0))) {
        bf = put[j] + bf;
        j--;
        if (put[j] == ")") {
          br += 1; console.log("br:"+br);
        }
        if (put[j] == "(") {
          pr += 1;
        }
        if (br == pr || (br == 0 && put[j] == "(")) {
          ar = 1;
        }
      }}
      if (mark != "!" && mark != "%") {
        while (
          !stop.includes(put[k]) &&
          k <= put.length - 1 &&
          (cr == 0&&dr!=0||dr==tr&&cr!=0)
        ) {
          aft = aft + put[k];
          k++;
          if (k-i>=2) {stop+="+"; stop+="-";}
          if (put[k] == "(") {
            dr += 1;
          }
          if (put[k] == ")") {
            tr += 1;
          }
          if (dr == tr || (dr == 0 && put[k] == ")") || comArr.includes(put[k]) ) {
            cr = 1;
            if (comArr.includes(put[k-1])) aft = aft + put[k+1];
          }
        }
      }
      console.log(put);
      bf=bf.toString();
      if (checkCom(bf, comArr)){
        console.log("bf");
      for (var l=bf.length-1;l>=0;l--){
      if (comArr.includes(bf[l]))
      console.log("yes");
     return sort(put, l);}
      }
      else{
      console.log(bf);
      console.log(aft);
      console.log(mark);
      console.log(put);
    

      if (mark == "√" && bf.length > 0) {
        put = put.replace(put.splice(j + 1, k), bf + "*" + mark);
      } else if (mark == "√" && bf.length == 0) { console.log(bf.length)
        put = put.replace(put.splice(j + 1, k), bf + mark); console.log(put);
      } 
          if (mark=="^(")  {console.log("j:"+j); console.log("k:"+k);
                            put = put.replace(put.slice(j + 1, k), "pow(" + bf + "," + aft + ")")}
          else if (mark=="Y")  put = put.replace(put.slice(j + 1, k), "Z(" + bf + "," + aft + ")")
          else if (mark=="!")  {put = put.replace(put.slice(j+1, k), "fac(" + bf + ")")}
          else if (mark=="√")  {put = put.replace(put.slice(j+1, k), "sqrt(" + aft + ")")}
          else if (mark=="Q")  put = put.replace(put.slice(j + 1, k), "R(" + bf + "," + aft + ")")
          else if (mark=="C")  put = put.replace(put.slice(j + 1, k), "K(" + bf + "," + aft + ")")
          else if (mark=="%")  put = put.replace(put.slice(j + 1, k), "pcnt(" + bf + ")")
      
    }
  return put;}
}


function trat(nput) {
  nput=nput.toString();
  if (nput.includes("ERROR")||nput.includes("∞")){ err=1; return "ERROR";}



  var repl = ["^", "Y", "!", "Q", "C", "%", "√"];

  for (var i = 0; i < nput.length; i++) {
    if (nput[i] == "E" && nput[i - 1] != ".") nput= nput.splice(i, 1, "Y");
    if (nput[i] == "P" && nput[i - 1] != ".") nput[i] = nput= nput.splice(i, 1, "Q");
    if (nput[i] == "e" && nput[i + 1] != "v") nput[i] = nput= nput.splice(i, 1, "(Math.E)");
    if (nput[i] == "π") nput[i] = nput= nput.splice(i, 1, "(Math.PI)");
    if (nput[i] == "×") nput[i] = nput= nput.splice(i, 1, "*");
  }


  var brack = [];
  for (var i = 0; i < nput.length; i++) {
    if (nput[i] == "(" || nput[i] == ")") brack += nput[i];
  }
  console.log(brack);
  if (brack.length != 0 && err == 0) {
    console.log(err);
    var openBrack = 0;
    for (var i = 0; i < brack.length; i++) {
      console.log(brack[i]);
      brack[i] == "(" ? openBrack++ : openBrack--;
      if (openBrack < 0) err = 1;
      console.log(openBrack);
    }
    if (openBrack > 0) {
      for (var i=0; i<openBrack; i++)
      nput = nput + ")"
     }
  }
  console.log(err);

  if (
    err == 0 &&
    (nput.includes("^(") ||
      nput.includes("Y") ||
      nput.includes("!") ||
      nput.includes("√") ||
      nput.includes("Q") ||
      nput.includes("C") ||
      nput.includes("%"))
  ) {
    for (var i = nput.length-1; i >=0; i--) {
      if (repl.includes(nput[i]) && nput[i - 1] != ".") {
        var r=nput
        nput = sort(nput, i); 
        if (r!=nput) i=nput.length-1;
      }
  }
  }
  if (err == 0) {
    // for (var i = 0; i < nput.length; i++) 
      // if (nput[i] == "√") { nput= nput.splice(i, 1, "sqrt"); console.log("yes"); i+=4}
    let bck = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ")", "π", "e"];
    let list = [
      "sin",
      "cos",
      "tan",
      "asin",
      "acos",
      "atan",
      "log",
      "In",
      "sqrt",
      "fac"
    ];
    for (var i = 0; i < bck.length; i++) {
      for (var j = 0; j < list.length; j++) {
        if (nput.includes(bck[i] + list[j])) {
          // var mystring = input;
          // var find = bck[i] + list[j];
          // var regex = new RegExp(find, "g");
          nput = nput.replace(
            new RegExp(bck[i] + list[j], "g"),
            bck[i] + "*" + list[j]
          );
        }
      }
    }
    for (var i = nput.length - 1; i >= 0; i--) {
      if (nput[i] == "(" && !evalu.includes(nput[i - 1])) {
        if (
          i != 0 &&
          !mult.includes(nput[i - 1]) &&
          !mullt.includes(nput[i - 1])
        ) {
          nput= nput.splice(i, 0, "*trat");
          i += 4;
        } else if (mullt.includes(nput[i - 1])) {
          nput = nput.splice(i, 0, "");
        } else {
          nput = nput.splice(i, 0, "trat");
          i += 4;
        }
      }
    }
  }
  console.log(nput);
  console.log(eval(nput));
  ans = Math.round(Math.pow(10,20)*eval(nput))/Math.pow(10,20);
if (err == 0)
return ans;
else if (err == 1 || nput.toString() == "NaN") return "ERROR";
}