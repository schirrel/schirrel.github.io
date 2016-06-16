'use strict';
var color = d3.scale.category10();
var parseDate = d3.time.format("%Y").parse;


function AddCourse() {
    var e = document.getElementById("CourseSelect");
    var selected = e.options[e.selectedIndex].text;
    $('#TagsCourses').tagsinput('add', selected);
}


function Load(){
d3.tsv("novo.csv", function(error, data) {
  if (error) throw error;

  color.domain(d3.keys(data[0]).filter(function(key) { return key !== "date"; }));

  data.forEach(function(d) {
	
   d.date = parseDate(d.date);
  });


  var materias = color.domain().map(function(name) {
    return {
      name: name,
      values: data.map(function(d) {
        return {name: +d[name], date: d.date};
      })
    };
  });
    var x = document.getElementById("CourseSelect");

materias.forEach(function(m){
       // console.log();
    var option = document.createElement("option");
option.text = m.name;
x.add(option);
    });   
    
    
}
       );
       }
           
function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
       // console.log(a[i]+ " "+obj)
        if (a[i] === obj) { 
            return true;
        }
    }
    return false;
}
function ShowChart() {
    var color = d3.scale.category10();
document.getElementById("legenda").style.display =  "block";
    document.getElementById("fNovo").style.display =  "block";
    document.getElementById("fInit").style.display =  "none";
document.getElementById("grafico").style.display =  "block";
    document.getElementById("grafico").innerHTML = "";
     document.getElementById("leg").innerHTML = "";
    var margin = {top: 20, right: 80, bottom: 30, left: 50},
    width = 760 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var parseDate = d3.time.format("%Y").parse;

var x = d3.time.scale()
    .range([0, width]);
    

    
    
var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

    
   xAxis.ticks(d3.time.years);
    
var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line = d3.svg.line()
    .interpolate("basis")
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.name); });

var svg = d3.select("#grafico").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.tsv("novo.csv", function(error, data) {
  if (error) throw error;

  color.domain(d3.keys(data[0]).filter(function(key) { return key !== "date"; }));

  data.forEach(function(d) {
   d.date = parseDate(d.date);
  });


  var aux = color.domain().map(function(name) {
    return {
      name: name,
      values: data.map(function(d) {
        return {name: +d[name], date: d.date};
      })
    };
  });

    var materias=[]
    var tags = $("#TagsCourses").tagsinput('items');


    aux.forEach(function(m){
        if(contains(tags, m.name)){
            materias.push(m);
        }
    });
  x.domain(d3.extent(data, function(d) { return d.date; }));

  y.domain([
    d3.min(materias, function(c) { return d3.min(c.values, function(v) { return v.name; }); }),
    d3.max(materias, function(c) { return d3.max(c.values, function(v) { return v.name; }); })
  ]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end");
//      .text("Matricula");
var DivLegendas = document.getElementById("leg");
  var materia = svg.selectAll(".materia")
      .data(materias)
    .enter().append("g")
      .attr("class", "materia");
  materia.append("path")
      .attr("class", "line")
      .attr("d", function(d) { return line(d.values); })
      .style("stroke", function(d) {
      var tempElement = document.createElement('div');
tempElement.innerHTML = "<div style='color:"+color(d.name)+"'>"+d.name+"</div>";
document.getElementById("leg").appendChild(tempElement);
  return color(d.name); 
      
  });
//
//  materia.append("text")
//      .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; })
//      .attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.name) + ")"; })
//      .attr("x", 3)
//      .attr("dy", ".35em")
//      .text(function(d) { return d.name; });
//materia.forEach(function(m){
//        
//        console.log(m.name+ " " +color(m.name));
//           
//        
//    });

});
    
   
}

function NewChart() {
    document.getElementById("legenda").style.display =  "none";
    document.getElementById("fNovo").style.display =  "none";
    document.getElementById("fInit").style.display =  "block";
     document.getElementById("grafico").style.display =  "none";
}