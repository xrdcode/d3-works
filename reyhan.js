function hex2rgb(hex, opacity) {
    var h=hex.replace('#', '');
    h =  h.match(new RegExp('(.{'+h.length/3+'})', 'g'));

    for(var i=0; i<h.length; i++)
        h[i] = parseInt(h[i].length==1? h[i]+h[i]:h[i], 16);

    if (typeof opacity != 'undefined')  h.push(opacity);

    return 'rgba('+h.join(',')+')';
}

function shuffle(arr) {
    var tmp = [];
    while(arr.length > 1) {
        var rand = random(arr.length-1);
        tmp.push(arr[rand]);
        arr.splice(rand, 1);
    }

    tmp.push(arr[0]);

    return tmp;
}

function random(range) {
    return Math.floor((Math.random() * range) + 1);
}

function generateToolTip(string) {
    var tips = string.split(".");
    for(var i = 0; i < tips.length; i++)
        tips[i] = tips[i].replace(/_/g, " ");
    return tips.splice(1, tips.length-1).join("\n");
}

function generateLegend(data, color, fontsize = 10, col = 3) {
    var html = "<table style='font-size: " + fontsize +"px'><tr>";
    html += "<td style='background-color:" + color[0] + ";width: 15px;padding-left: 2px'></td><td style=';padding-left: 2px;padding-right: 2px'>" + data[0] + "</td>";
    for ( var i = 1;  i < data.length; i++) {
        html += "<td style='background-color:" + color[i] + ";width: 15px'></td><td style=';padding-left: 2px;padding-right: 2px'>" + data[i] + "</td>";
        if(i%col == 0) {
            html += "</tr><tr>";
        }
    }

    return html + "</tr></table>";
}

function materialColorRand() {
    var colors = [
        "#EF5350",
        "#F06292",
        "#880E4F",
        "#9C27B0",
        "#E1BEE7",
        "#4A148C",
        "#3F51B5",
        "#5C6BC0",
        "#E8EAF6",
        "#2196F3",
        "#0277BD",
        "#00BCD4",
        "#009688",
        "#A7FFEB",
        "#4CAF50",
        "#1B5E20",
        "#AED581",
        "#76FF03",
        "#CDDC39",
        "#FFEB3B",
        "#F57F17",
        "#FF5722"
    ];
    return shuffle(colors);
}
