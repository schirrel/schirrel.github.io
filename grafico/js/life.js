var regions = {
        "PUB": "Public",
        "PRIV": "Private"
    },
    w = 900,
    h = 550 ,
    margin = 80,
    startYear = 2009,
    endYear = 2014,
    startAge = 619,
    endAge = 3286540,
    years = d3.range(startYear, endYear);
var MIN = Number.MAX_VALUE,
    MAX = 0;
 var selecionadas = [];

var countries_regions = {};

var startEnd = {},
    countryCodes = {};

function OnChange(){
    var e = document.getElementById("CourseSelect");
        var selected = e.options[e.selectedIndex].text;
    if(selected!="Choose Couse"){
        
          selecionadas = [];
        
    d3.text('linha.csv', 'text/csv', function(text) {
        var materias = d3.csv.parseRows(text);
         var s = ["Educação", "Direito", "Arquitetura"];
       
var e = document.getElementById("CourseSelect");
        var selected = e.options[e.selectedIndex].text;
        
    materias.forEach(function(m) {
        //console.log(m);
            if (m[0] == selected)
                selecionadas.push(m);
        });
        console.log(selecionadas)
        findMinMax(selecionadas);
        y = d3.scale.linear().domain([MAX, MIN - (MAX * .2)]).range([0 + margin, h - 10]);
        x = d3.scale.linear().domain([2009, 2014]).range([0 + margin - 10, w-90]);
        Chart();

    })
        
        
    }
        
}

function containsCurso(a, obj) {

    for (var i = 0; i < a.length; i++) {

        if (a[i][0] === obj) {
            return a[i];
        }
    }
    return null;
}

function findMinMax(list) {
    list.forEach(function(l) {
        for (var i = 1; i < 6; i++) {
            if (Number(l[i]) < MIN) {
                MIN = Number(l[i]);
            }
            if (Number(l[i]) > MAX) {
                MAX = Number(l[i]);
            }

        }

    });
}

function containsCursoNome(a, obj) {

    for (var i = 0; i < a.length; i++) {

        if (a[0] === obj) {
            return a[i];
        }
    }
    return null;
}


function Chart(){
     document.getElementById("vis").innerHTML = "";
        var vis = d3.select("#vis").append("svg:svg").attr("width", w).attr("height", h).append("svg:g");
var line = d3.svg.line().x(function(d, i) {
    return x(d.x);
}).y(function(d) {
    return y(d.y);
});[]
    for (i = 0; i < selecionadas.length; i++) {
            var values = selecionadas[i].slice(1, selecionadas[i.length - 1]);
            var currData = [];
            
            //countryCodes[countries[i][7]] = countries[i][0];
            var started = false;

            for (j = 0; j < values.length; j++) {
                if (values[j] != '') {
                    currData.push({
                        x: years[j],
                        y: values[j]
                    });
                    if (!started) {
                        startEnd[selecionadas[i][1]] = {
                            'startYear': years[j],
                            'startVal': values[j]
                        };
                        started = true;
                    } else if (j == values.length - 1) {
                        startEnd[selecionadas[i][1]]['endYear'] = years[j];
                        startEnd[selecionadas[i][1]]['endVal'] = values[j];
                    }
                }
            }
            vis.append("svg:path").data([currData]).attr("diciplina", selecionadas[i][0]).attr("class", selecionadas[i][6]).attr("d", line).on("mouseover", onmouseover).on("mouseout", onmouseout);
        }
   
    vis.append("svg:line").attr("x1", x(2009)).attr("y1", y(startAge)).attr("x2", x(2014)).attr("y2", y(startAge)).attr("class", "axis")
    vis.append("svg:line").attr("x1", x(startYear)).attr("y1", y(startAge)).attr("x2", x(startYear)).attr("y2", y(endAge)).attr("class", "axis")
    vis.selectAll(".xLabel").data(x.ticks(5)).enter().append("svg:text").attr("class", "xLabel").text(String).attr("x", function(d) {
        return x(d)
    }).attr("y", h - 10).attr("text-anchor", "middle")
    vis.selectAll(".yLabel").data(y.ticks(4)).enter().append("svg:text").attr("class", "yLabel").text(String).attr("x", 0).attr("y", function(d) {
        return y(d)
    }).attr("text-anchor", "right").attr("dy", 3)
    vis.selectAll(".xTicks").data(x.ticks(3)).enter().append("svg:line").attr("class", "xTicks").attr("x1", function(d) {
        return x(d);
    }).attr("y1", y(startAge)).attr("x2", function(d) {
        return x(d);
    }).attr("y2", y(startAge) + 7)
    vis.selectAll(".yTicks").data(y.ticks(4)).enter().append("svg:line").attr("class", "yTicks").attr("y1", function(d) {
        return y(d);
    }).attr("x1", x(2009)).attr("y2", function(d) {
        return y(d);
    }).attr("x2", x(2014))

    function onclick(d, i) {
        console.log("1111");
        var currClass = d3.select(this).attr("class");
        if (d3.select(this).classed('selected')) {
            d3.select(this).attr("class", currClass.substring(0, currClass.length - 9));
        } else {
            d3.select(this).classed('selected', true);
        }
    }

    function onmouseover(d, i) {
        var currClass = d3.select(this).attr("class");
        d3.select(this).attr("class", currClass + " current");
        var countryCode = $(this).attr("diciplina");
       //console.log(countryCode);
        var countryVals = startEnd[countryCode];
      //  var percentChange = 100 * (countryVals['endVal'] - countryVals['startVal']) / countryVals['startVal'];
        var blurb =  countryCode ;


//        blurb += "</p>";
        
        $("#blurb-content").html(blurb);
    }

}

function PlotChart() {

    d3.text('linha.csv', 'text/csv', function(text) {
        var countries = d3.csv.parseRows(text);
        for (i = 0; i < countries.length; i++) {
            var values = countries[i].slice(1, countries[i.length - 1]);
            var currData = [];
            
            //countryCodes[countries[i][7]] = countries[i][0];
            var started = false;

            for (j = 0; j < values.length; j++) {
                if (values[j] != '') {
                    currData.push({
                        x: years[j],
                        y: values[j]
                    });
                    if (!started) {
                        startEnd[countries[i][1]] = {
                            'startYear': years[j],
                            'startVal': values[j]
                        };
                        started = true;
                    } else if (j == values.length - 1) {
                        startEnd[countries[i][1]]['endYear'] = years[j];
                        startEnd[countries[i][1]]['endVal'] = values[j];
                    }
                }
            }
            vis.append("svg:path").data([currData]).attr("diciplina", countries[i][0]).attr("class", countries[i][6]).attr("d", line).on("mouseover", onmouseover).on("mouseout", onmouseout);
        }
    });
    vis.append("svg:line").attr("x1", x(2009)).attr("y1", y(startAge)).attr("x2", x(2014)).attr("y2", y(startAge)).attr("class", "axis")
    vis.append("svg:line").attr("x1", x(startYear)).attr("y1", y(startAge)).attr("x2", x(startYear)).attr("y2", y(endAge)).attr("class", "axis")
    vis.selectAll(".xLabel").data(x.ticks(5)).enter().append("svg:text").attr("class", "xLabel").text(String).attr("x", function(d) {
        return x(d)
    }).attr("y", h - 10).attr("text-anchor", "middle")
    vis.selectAll(".yLabel").data(y.ticks(4)).enter().append("svg:text").attr("class", "yLabel").text(String).attr("x", 0).attr("y", function(d) {
        return y(d)
    }).attr("text-anchor", "right").attr("dy", 3)
    vis.selectAll(".xTicks").data(x.ticks(3)).enter().append("svg:line").attr("class", "xTicks").attr("x1", function(d) {
        return x(d);
    }).attr("y1", y(startAge)).attr("x2", function(d) {
        return x(d);
    }).attr("y2", y(startAge) + 7)
    vis.selectAll(".yTicks").data(y.ticks(4)).enter().append("svg:line").attr("class", "yTicks").attr("y1", function(d) {
        return y(d);
    }).attr("x1", x(2009)).attr("y2", function(d) {
        return y(d);
    }).attr("x2", x(2014))

    function onclick(d, i) {
        var currClass = d3.select(this).attr("class");
        if (d3.select(this).classed('selected')) {
            d3.select(this).attr("class", currClass.substring(0, currClass.length - 9));
        } else {
            d3.select(this).classed('selected', true);
        }
    }

    function onmouseover(d, i) {
        var currClass = d3.select(this).attr("class");
        d3.select(this).attr("class", currClass + " current");
        var countryCode = $(this).attr("diciplina");
       //console.log(countryCode);
        var countryVals = startEnd[countryCode];
      //  var percentChange = 100 * (countryVals['endVal'] - countryVals['startVal']) / countryVals['startVal'];
        var blurb =  countryCode ;


//        blurb += "</p>";
        
        $("#blurb-content").html(blurb);
    }




}

function onmouseout(d, i) {
    var currClass = d3.select(this).attr("class");
    var prevClass = currClass.substring(0, currClass.length - 8);
    d3.select(this).attr("class", prevClass);
//    $("#default-blurb").show();
//    $("#blurb-content").html('');
}

function showRegion(regionCode) {
    var countries = d3.selectAll("path." + regionCode);
    if (countries.classed('highlight')) {
        countries.attr("class", regionCode);
    } else {
        countries.classed('highlight', true);
    }
}

  function AddCourse() {
        var e = document.getElementById("CourseSelect");
        var selected = e.options[e.selectedIndex].text;
        $('#TagsCourses').tagsinput('add', selected);
    }

function Load(){
    
        d3.text('linha.csv', 'text/csv', function(text) {
        var materias = d3.csv.parseRows(text);
        var cursos = [];
 var select = document.getElementById("CourseSelect");
for(var i = 1; i < materias.length/2;i++){
    var option = document.createElement("option");
    option.text = materias[i][0];
    select.add(option);
}
   
    });
    
    ChartInit();
}

function ShowChart() {
  
}




function ChartInit(){
        d3.text('linha.csv', 'text/csv', function(text) {
        var materias = d3.csv.parseRows(text);
         var s = ["Educação", "Direito", "Arquitetura"];
       
var e = document.getElementById("CourseSelect");
        var selected = e.options[e.selectedIndex].text;
        
    materias.forEach(function(m) {
                selecionadas.push(m);
        });
       
        findMinMax(selecionadas);
        y = d3.scale.linear().domain([MAX, MIN - (MAX * .2)]).range([0 + margin, h - 10]);
        x = d3.scale.linear().domain([2009, 2014]).range([0 + margin - 10, w-90]);
        Chart();

    })
}