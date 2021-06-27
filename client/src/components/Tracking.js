import React from "react";
import $ from "jquery";
function Tracking() {
  var participant = [];
  var maxPoints = 100;
  var barWidth = 75;
  function gatherData() {
    var password = 1111;
    var pass = window.prompt("Please enter the admin password");
    if (pass != null) {
      if (pass == password) {
        //var name=document.getElementById('task').value;
        var name = window.prompt(
          "Please enter the name of the Task:"
        );
        if (name == "") {
          alert("You must enter a valid Task name! ");
          return;
        }
        //var points=document.getElementById('points').value;
        var points = window.prompt(
          "Please enter the percentage of task completed(only number):"
        );
        points = parseInt(points, 10);
        if (/[^0-9\s\-\']/gi.test(points) || points == "") {
          alert("You must enter a valid number! ");
          return;
        }

        participant.push({ name: name, points: points });

        createChart();
      } else {
        alert("Enter correct Admin's Password.");
      }
    }
  }
  function createChart() {
    var i = 0;
    var len = participant.length;
    var bar = null;
    var sum = 0;
    var progress1 = 0;
    var container = document.getElementById("chart");
    container.innerHTML = "";

    while (i < len) {
      bar = document.createElement("div");
      bar.style.width = barWidth + "px";
      bar.style.backgroundColor = getRandomColor();
      bar.style.float = "left";
      bar.style.marginRight = "10px";

      bar.style.height = (participant[i].points / maxPoints) * 200 + "px";
      bar.style.marginTop = 200 - parseInt(bar.style.height) + "px";
      var percent = participant[i].points  + "%";
      bar.innerHTML = [
        '<p style="margin-top: ' + (parseInt(bar.style.height) - 17) + 'px">',
        '<p style="background-color:lightgrey;border:solid navy 2px;margin:0;padding:0">',percent,'</p>',
        participant[i].name,
        "</p>",
      ].join("");

      container.appendChild(bar);
      sum = sum + participant[i].points;
      progress1 = Math.round(sum / participant.length);
      i = i + 1;
    }
    console.log(progress1);
    progressBar(progress1, 100);
    return progress1;
  }

  function getRandomColor() {
    return [
      "rgb(",
      Math.floor(Math.random() * 255),
      ", ",
      Math.floor(Math.random() * 255),
      ", ",
      Math.floor(Math.random() * 255),
      ")",
    ].join("");
  }

  //circle
  function progressBar(progressVal, totalPercentageVal = 100) {
    var el = Math.round(progressVal) + "%";
    document.getElementById("ho").innerHTML = el;
    var strokeVal = (4.64 * 100) / totalPercentageVal;
    var x = document.querySelector(".progress-circle-prog");
    x.style.strokeDasharray = progressVal * strokeVal + " 999";
    var from = $(".progress-text").data("progress");
    $(".progress-text").data("progress", progressVal);
    var start = new Date().getTime();

    // setTimeout(function() {
    //     var now = (new Date().getTime()) - start;
    //     var progress = now / 700;
    //     //el.innerHTML = progressVal / totalPercentageVal * 100 + '%';
    //     //el.innerHTML=progress1;
    //     //$('.progress-text').empty().append(progressVal / totalPercentageVal * 100 + '%');
    //     //$('.progress-text').html('Hello World');
    //     if (progress < 1) setTimeout(arguments.callee, 10);
    // }, 10);
  }
  return (
    <>
      <div className="progress2">
        <p className="circleText">Total Progress Done</p>
        <p>
          <svg
            className="progress-circle"
            width="200px"
            height="200px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle className="progress-circle-back" cx={80} cy={80} r={74} />
            <circle className="progress-circle-prog" cx={80} cy={80} r={74} />
          </svg>
        </p>
        <div className="progress-text" id="ho" data-progress={0}>
          0%
        </div>
      </div>
      <div className="graph">
        <h4 className="chart">Individual Task's Progress</h4>
        <div id="chart"></div>
      </div>
      <button className="btn" onClick={gatherData}>
        Add Tasks
      </button>
    </>
  );
}

export default Tracking;
