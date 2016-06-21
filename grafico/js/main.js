/* VERDADEIRO PARA MOSTRAR SOMENTE NOME DO CURSO, FALSO PARA MOSTRAR VALORES JUNTOS*/
var MOSTRAR_NOME = false;
var regions = {
        "PUB": "Public",
        "PRIV": "Private"
    },
    w = 980,
    h = 600,
    margin = 80,
    startYear = 2009,
    endYear = 2014,
    years = d3.range(startYear, endYear);
var MIN = Number.MAX_VALUE,
    MAX = 0;
var global = {min: 0, max: 0};
var selecionadas = [];
var color = d3.scale.category10();

var startEnd = {};

/*
 * Encontrar os valores minimos e maximos da seleção de cursos para ajustar a escala do grafico
 */
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



/*
 * Cria o grafico para mostrar
 */
function Chart() {
    /* Se algum curso foi selecionado via checkbox então carrega o grafico só com ele, senão, carrega o grafico inicial com todos*/
    if (selecionadas.length > 0) {
        document.getElementById("vis").innerHTML = "";
        var vis = d3.select("#vis").append("svg:svg").attr("width", w).attr("height", h).append("svg:g");
        var line = d3.svg.line().x(function(d, i) {
            return x(d.x);
        }).y(function(d) {
            return y(d.y);
        });
        
        for (i = 0; i < selecionadas.length; i++) {
            var values = selecionadas[i].slice(1, selecionadas[i.length - 1]);
            var currData = [];

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
            if (selecionadas.length < 3) {
                vis.on("click", onclick);
            }
        }

            vis.append("svg:line").attr("x1", x(startYear)).attr("y1", y(MIN)).attr("x2", x(2013.5)).attr("y2", y(MIN)).attr("class", "axis").style("stroke", function(d) { return "#000"; });

        vis.append("svg:line").attr("x1", x(startYear)).attr("y1", y(MIN)).attr("x2", x(startYear)).attr("y2", y(MAX)).attr("class", "axis").style("stroke", function(d) {
            return "#000";
        });

        vis.append("svg:text")
            .attr("text-anchor", "middle") // this makes it easy to centre the text as the transform is applied to the anchor
            .attr("transform", "translate(" + 60 + "," + (h / 2) + ")rotate(-90)") // text is drawn off the screen top left, move down and out and rotate
            .text("Number of Students (square root)");

        vis.append("svg:text")
            .attr("text-anchor", "start") // this makes it easy to centre the text as the transform is applied to the anchor
            .attr("transform", "translate(" + (20) + "," + (h - 20) + ")") // centre below axis
            .text("Years");

        vis.selectAll(".xLabel").data(x.ticks(4)).enter().append("svg:text").attr("class", "xLabel").text(String).attr("x", function(d) {
            return x(d)
        }).attr("y", h - 10).attr("text-anchor", "middle");
        vis.selectAll(".yLabel").data(y.ticks(4)).enter().append("svg:text").attr("class", "yLabel").text(String).attr("x", 0).attr("y", function(d) {
            return y(d)
        }).attr("text-anchor", "right").attr("dy", 3);

//        vis.selectAll(".xTicks").data(x.ticks(6)).enter().append("svg:line").attr("class", "xTicks").attr("x1", function(d) {
//            return x(d);
//        }).attr("y1", y(MIN)).attr("x2", function(d) {
//            return x(d);
//        }).attr("y2", y(MIN) + 7);
//        vis.selectAll(".yTicks").data(y.ticks(4)).enter().append("svg:line").attr("class", "yTicks").attr("y1", function(d) {
//            return y(d + 60);
//        }).style("stroke", function(d) {
//            return "#666666";
//        }).attr("x1", x(2009)).attr("y2", function(d) {
//            return y(d + 60);
//        }).attr("x2", x(2013));
//  var yScale = d3.scale.linear()
//	        .domain([MAX, MIN - (MAX * .2)]).range([0 + margin, h]);
//         var yAxis = d3.svg.axis()
//            .orient("left")
//            .scale(yScale);
//vis.select(".yaxis")
//                    .transition().duration(1500).ease("sin-in-out")  // https://github.com/mbostock/d3/wiki/Transitions#wiki-d3_ease
//                    .call(yAxis);  

        function onclick(d, i) {



            var currClass = d3.select(this).attr("class");

            if (d3.select(this).classed('selected')) {
                d3.select(this).attr("class", currClass.substring(0, currClass.length - 9));
            } else {
                d3.select(this).classed('selected', true);
            }
        }
       

    } else {
        Load();
    }
    
   
   
}



/*
 * Volta a cor da linha ao normal
 */
function onmouseout(d, i) {
    var currClass = d3.select(this).attr("class");
    var prevClass = currClass.substring(0, currClass.length - 8);
    d3.select(this).attr("class", prevClass);
    //        $("#default-coursename").show();
    //        $("#coursename-content").html('<br />');
}

 /*
         * Muda a cor da linha e coloca o nome do curso em evidencia
         */
function onmouseover(d, i) {
            var currClass = d3.select(this).attr("class");
            d3.select(this).attr("class", currClass + " current");
            var coursename = $(this).attr("diciplina");
    if(MOSTRAR_NOME) {
            $("#coursename-content").html("<b>"+coursename+"</b>");
    }
    else{
            var value="";
            var uni = "";
           if($(this)[0]["__data__"][5]['y']=='PRIV') {
                uni = "Private";
            } else if ($(this)[0]["__data__"][5]['y']=='PUB')
           {
               uni = "Public"; 
           }
            for(var i = 0; i < 5; i++) {
               
                value +="&nbsp;&nbsp;&nbsp;&nbsp;"+$(this)[0]["__data__"][i]['x']+": "+$(this)[0]["__data__"][i]['y']+".";
                
            }
          
            
            $("#coursename-content").html("<b>"+coursename+"</b>, "+uni+". &nbsp;&nbsp;&nbsp; "+value);
        
        }
}

/*
 * Mudar a cor da linha do curso quando selecionado o tipo de universidade
 */

function showCourse(courseCode) {
    var courses = d3.selectAll("path." + courseCode);

    if (courses.classed('highlight')) {
        courses.attr("class", courseCode);
    } else {
        courses.classed('highlight', true);
    }
}


/*
 * Quando a pagina é totalmente carregada, inicia o grafico com todos os valores e chama MakeCheck  
 */
function Load() {

    d3.text('linhas-pub-priv.csv', 'text/csv', function(text) {
        var materias = d3.csv.parseRows(text);

        materias.forEach(function(m) {
            selecionadas.push(m);
        });

        MakeCheck();
        findMinMax(selecionadas);
        global.max = MAX;
        global.min = MIN;
        y = d3.scale.linear().domain([MAX, MIN - (MAX * .2)]).range([0 + margin, h]);
        x = d3.scale.linear().domain([2009, 2013.5]).range([0 + margin - 10, w - 10]);
        Chart();
    });


}


/*
 * Cria os checkbox de acordo com o arquivo de cursos
 */
function MakeCheck() {

var left = document.getElementById("CourseChecksL");
    var right = document.getElementById("CourseChecksR");

if(left.childElementCount > 0 ) {
    while (left.firstChild) {
        left.removeChild(left.firstChild);
    } 
}
   if(right.childElementCount > 0 ){
   while (right.firstChild) {
        right.removeChild(right.firstChild);
    }}
    
    for (var j = 1; j < selecionadas.length / 2; j++) {
        
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "courseCheck";
        checkbox.value = selecionadas[j][0];
        checkbox.id = "courseCheck";
        checkbox.style.marginLeft = "5px";
        checkbox.style.marginRight = "5px";
        checkbox.onclick = function() {
            Check();
        }
        var label = document.createElement('label')
        label.style.fontSize = "8px"
        label.htmlFor = "id";
        label.appendChild(document.createTextNode(selecionadas[j][0]));
if ( j % 2 == 0) {
        left.appendChild(checkbox);
    left.appendChild(label);
    left.appendChild(document.createElement("br"));
    } else {
             right.appendChild(checkbox);
    right.appendChild(label); 
         right.appendChild(document.createElement("br"));
    }
    };

}

/*
 *Atualiza grafico quando selecionado checkbox
 */
function Check() {
    var checkeds = [];
    $("input:checkbox[name=courseCheck]:checked").each(function() {
        checkeds.push($(this).val());
    });


    $('#filters a').toggleClass("PUB", false);
    $('#filters a').toggleClass("PRIV", false);
    MIN = Number.MAX_VALUE,
        MAX = 0;
    selecionadas = [];

    d3.text('linhas-pub-priv.csv', 'text/csv', function(text) {
        var materias = d3.csv.parseRows(text);

        checkeds.forEach(function(c) {
            materias.forEach(function(m) {
                if (m[0] == c)
                    selecionadas.push(m);
            });
        });

        findMinMax(selecionadas);
       console.log(MIN+" "+MAX)
        y = d3.scale.linear().domain([MAX, MIN - (MAX * .05)]).range([0 + margin, h]);
        x = d3.scale.linear().domain([2009, 2013.5]).range([0 + margin - 10, w - 10]);
        
            
        Chart();
    });

}