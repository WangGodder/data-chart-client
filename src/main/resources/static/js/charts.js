let charts_num = 0;
const canvasDir_style = "canvasDir_class";
const optionsDiv_style = "optionsDiv_class container-fluid";
let chartsArray = [];
let indexArray = [];
let configArray = [];

colors = {
    "black": "#000000",
    "white": "#FFFFFF",
    "red": "#FF0000",
    "rebeccapurple": "#663399",
    "lime": "#00FF00",
    "green": "#008000",
    "blue": "#0000FF",
    "yellow": '#FFFF00',
    "aqua": "#00FFFF",
    "pink": "#FF00FF",
    "gold": "#FFD700",
    "gray": "#808080"
}

colorsArray = ["red", "rebeccapurple", "lime", "green", "blue", "yellow", "aqua", "pink", "gold", "gray", "black", "white"];

legendPositions = ["top", "right", "bottom", "left", "hide"];

/**
 * 将value显示在Chart上
 */
Chart.plugins.register({
    afterDatasetsDraw: function(chart) {
        let ctx = chart.ctx;

        chart.data.datasets.forEach(function(dataset, i) {
            let meta = chart.getDatasetMeta(i);
            if (!meta.hidden) {
                meta.data.forEach(function(element, index) {
                    // Draw the text in black, with the specified font
                    ctx.fillStyle = 'rgb(0, 0, 0)';

                    var fontSize = 16;
                    var fontStyle = 'normal';
                    var fontFamily = 'Helvetica Neue';
                    ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

                    // Just naively convert to string for now
                    var dataString = dataset.data[index].toString();

                    // Make sure alignment settings are correct
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';

                    var padding = 5;
                    var position = element.tooltipPosition();
                    ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
                });
            }
        });
    }
});

class Title {
    constructor(text, display=true) {
        this._text = text;
        this._display = display;
    }

    toJSON() {
        let {text, display} = this;
        return {text, display};
    }

    get text() {
        return this._text;
    }

    set text(value) {
        this._text = value;
    }

    get display() {
        return this._display;
    }

    set display(value) {
        this._display = value;
    }
}

class Ticks {
    get autoSkip() {
        return this._autoSkip;
    }

    set autoSkip(value) {
        this._autoSkip = value;
    }

    get maxRotation() {
        return this._maxRotation;
    }

    set maxRotation(value) {
        this._maxRotation = value;
    }
    constructor(autoSkip=false, maxRotation) {

        this._autoSkip = autoSkip;
        this._maxRotation = maxRotation;
    }

    toJSON() {
        let {autoSkip, maxRotation} = this;
        return {autoSkip, maxRotation};
    }
}

class Axes {
    get Axe() {
        return this._Axe;
    }

    set Axe(value) {
        this._Axe = value;
    }
    constructor(Axe) {

        this._Axe = Axe;
    }

    toJSON() {
        return JSON.stringify(this._Axe);
    }
}

class Scale{
    get xAxes() {
        return this._xAxes;
    }

    set xAxes(value) {
        this._xAxes = value;
    }

    get yAxes() {
        return this._yAxes;
    }

    set yAxes(value) {
        this._yAxes = value;
    }
    constructor(xAxes, yAxes) {

        this._xAxes = xAxes;
        this._yAxes = yAxes;
    }

    toJSON() {
        let {xAes, yAxes} = this;
        return {xAes, yAxes};
    }
}

class Line {
    get tension() {
        return this._tension;
    }

    set tension(value) {
        this._tension = value;
    }
    constructor(tension=0.000001) {

        this._tension = tension;
    }

    toJSON() {
        let {tension} = this;
        return {tension};
    }
}

class Elements {
    get line() {
        return this._line;
    }

    set line(value) {
        this._line = value;
    }
    constructor(line) {

        this._line = line;
    }

    toJSON() {
        let {line} = this;
        return {line};
    }
}

class Options {
    constructor(title, scale, elements, plugins, responsive) {
        this._title = title;
        this._scale = scale;
        this._elements = elements;
        this._plugins = plugins;
        this._responsive = responsive;
    }

    toJSON() {
        let {title, scale, elements, plugins, responsive} = this;
        let json = {title, scale, elements, plugins, responsive};
        if (title == null) {
            delete json.title;
        }
        if (scale == null) {
            delete json.scale;
        }
        if (elements == null) {
            delete json.elements;
        }
        if (plugins == null) {
            delete json.plugins;
        }
        if (responsive == null) {
            delete json.responsive;
        }
        return json;
    }

    get responsive() {
        return this._responsive;
    }

    set responsive(value) {
        this._responsive = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get scale() {
        return this._scale;
    }

    set scale(value) {
        this._scale = value;
    }

    get elements() {
        return this._elements;
    }

    set elements(value) {
        this._elements = value;
    }

    get plugins() {
        return this._plugins;
    }

    set plugins(value) {
        this._plugins = value;
    }
}

class Datasets {
    constructor(label, data, backgroundColor, borderColor, fill=false, borderDash=null, type=null) {
        this._label = label;
        this._data = data;
        this._backgroundColor = backgroundColor;
        this._borderColor = borderColor;
        this._fill = fill;
        this._borderDash = borderDash;
        this._type = type;
    }

    toJSON() {
        let {type, label, data, backgroundColor, borderColor, borderDash, fill} = this;
        let json = {type, label, data, backgroundColor, borderColor, borderDash, fill};
        if (borderDash == null) {
            delete json.borderDash;
        }
        if (type == null) {
            delete json.type;
        }
        return json;
    }


    get borderDash() {
        return this._borderDash;
    }

    set borderDash(value) {
        this._borderDash = value;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get fill() {
        return this._fill;
    }

    set fill(value) {
        this._fill = value;
    }

    get label() {
        return this._label;
    }

    set label(value) {
        this._label = value;
    }

    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }

    get backgroundColor() {
        return this._backgroundColor;
    }

    set backgroundColor(value) {
        this._backgroundColor = value;
    }

    get borderColor() {
        return this._borderColor;
    }

    set borderColor(value) {
        this._borderColor = value;
    }
}

class Data {
    constructor(labels, datasets) {
        this._labels = labels;
        this._datasets = datasets;
    }

    toJSON() {
        let {labels, datasets} = this;
        return {labels, datasets};
    }

    get labels() {
        return this._labels;
    }

    set labels(value) {
        this._labels = value;
    }

    get datasets() {
        return this._datasets;
    }

    set datasets(value) {
        this._datasets = value;
    }
}

/**
 * 用来记录chart的配置信息，直接json化就可以作为chart的config配置
 */
class ChartInfo {
    constructor(type, data, options) {
        this._type = type;
        this._data = data;
        this._options = options;
    }

    toJSON() {
        let {type, data, options} = this;
        return {type, data, options};
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }

    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }

    get options() {
        return this._options;
    }

    set options(value) {
        this._options = value;
    }
}

/**
 * 记录可以使用smooth的类型
 * @type {string[]}
 */
const smoothType = ["line", "radar"];

/**
 * Chart的绘图类，用来构建div和canvas
 */
class Charts{
    constructor(id, config) {
        this._id = id;
        this._config = config;
    }

    get config() {
        return this._config;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }


    /**
     * 绘制div控件
     */
    createDOM() {
        const chartDiv = $("<div id='chartDiv_" + this._id + "' class='" + canvasDir_style + "' ></div>");
        const canvasDiv = $("<div id='canvasDiv_" + this._id + "'></div>");
        const canvas = $("<canvas id='chart_" + this._id + "'></canvas>");
        const optionsDiv = $("<div id='optionDiv_" + this._id + "' class='"+  optionsDiv_style +"'></div>");
        // const buttons = this.createOptionations();

        // const buttons = $("<button id='random_data_" + this.id + "' onclick='randomData(" + this.id + ")'>Random Data</button>");
        $("#chartsDiv").append(chartDiv);
        $("#chartDiv_" + this._id).append(canvasDiv);
        $("#canvasDiv_" + this._id).append(canvas);
        $("#chartDiv_" + this._id).append(optionsDiv);


        const randomData = $("<button class='btn-primary' id='random_data_" + this.id + "' onclick='randomData(" + this.id + ")'>Random Data</button>");
        $("#optionDiv_" + this._id).append(randomData);
        const deleteChart = $("<button class='btn-primary' id='delete_data_" + this.id + "' onclick='deleteCharts(" + this.id + ")'>Delete Chart</button>");
        $("#optionDiv_" + this._id).append(deleteChart);
        const showValue = $("<button class='btn-primary' id='show_value_" + this.id + "' onclick='showValue(" + this.id + ")'>Show Value</button>");
        $("#optionDiv_" + this._id).append(showValue);
        $("#optionDiv_" + this._id).append($("<text>legend position:</text>"));
        const legendPosition = $("<select class='selectpicker' id='legend_position_" + this.id + "' onchange='legendPosition(" + this.id + ", this.selectedIndex)'></select>")
        $("#optionDiv_" + this._id).append(legendPosition);
        for(let i = 0; i < legendPositions.length; i++) {
            $("#legend_position_" + this._id).append("<option>" + legendPositions[i] + "</option>");
        }
        const datasets = this._config.data.datasets;
        for (let i = 0; i < datasets.length; i++) {

        }
        if ($.inArray(this._config.type, smoothType) >= 0) {
            const smooth = $("<button class='btn-primary' id='smooth_data_" + this.id + "' onclick='smoothLine(" + this.id + ")'>Smooth Data</button>");
            $("#optionDiv_" + this._id).append(smooth);
        }

    }

    /**
     * 删除div
     */
    deleteDOM() {
        $("#canvasDiv_" + this._id).remove();
    }

}

function toggleOptions(id) {
    $("#optionDiv_" + id).slideToggle("fast");
}

/**
 * 添加一个新的chart
 * @param chartJson chart的config信息，str or json
 */
function addCharts(chartJson) {
    let config = chartJson;
    try {
        config = JSON.parse(chartJson);
    } catch(e) {}
    charts_num++;
    configArray.push(config);
    let newChart = new Charts(charts_num, config);
    newChart.createDOM();
    indexArray.push(newChart.id);
    let ctx = $("#chart_" + newChart._id);
    let newChartInfo = new Chart(ctx, config);
    chartsArray.push(newChartInfo);
}

/**
 * 删除指定id的chart
 * @param id 删除chart的id
 */
function deleteCharts(id) {
    const index = indexArray.indexOf(id);
    // const id = chartsArray[index];
    let chart = new Charts(id);
    chart.deleteDOM();
    indexArray.slice(index, index);
    chartsArray.slice(index, index);
    configArray.slice(index, index);
    // charts_num--;
}

/**
 * 删除所有的Chart
 */
function deleteAllCharts() {
    if (!confirm("Are you sure to clear all charts and data?")) {
        return;
    }
    indexArray.forEach(function(id) {
        let chart = new Charts(id);
        chart.deleteDOM();
    });
    indexArray = [];
    chartsArray = [];
    configArray = [];
    charts_num = 0;
}

/**
 * 获得随机数
 * @returns {number}
 */
let randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};

/**
 * 下滑所有的操作栏
 */
function toggleAllOptions() {
    indexArray.forEach(function (id) {
        toggleOptions(id);
    })
}

/**
 * 获取通过随机数得到的Data对象（JSON化直接作为Chart的config中的data部分）
 * @param datasetNum    dataset number
 * @param dataNum   the number of data in each dataset
 * @param fill  only use in line-type chart (such as 'line', 'radar'   and so on)
 * @param multColor if true, then each data will has a different color to show(recommend use in pie-type)
 * @param borderWhite if true, the border of each data is white. (warning no use in line-type charts)
 * @returns {Data} the data object
 */
function getRandomData(datasetNum, dataNum, fill=false, multColor=false, borderWhite=false) {
    let labels = [];
    for (let j = 0; j < dataNum; j++) {
        labels.push(j);
    }

    let datasets = [];
    for (let i = 0; i < datasetNum; i++) {
        let data = [];
        let borderColor = colors[colorsArray[i]];
        let dataset;
        if (borderWhite) {
            borderColor = colors["white"];
        }
        if (multColor) {
            let backgroundColor = [];
            for (let j = 0; j < dataNum; j++) {
                data.push(randomScalingFactor());
                backgroundColor.push(colors[colorsArray[j % colorsArray.length]]);
            }
            dataset = new Datasets("random dataset " + i, data, backgroundColor, borderColor, fill);
        } else {
            for (let j = 0; j < dataNum; j++) {
                data.push(randomScalingFactor());
            }
            dataset = new Datasets("random dataset " + i, data, colors[colorsArray[i]], colors[colorsArray[i]], fill);
        }
        datasets.push(dataset);
    }
    return new Data(labels, datasets);
}

/**
 * get a default options of chart config
 * @param title     the title of chart, default: null
 * @param smooth    if the line is smooth, only use in line-type charts.    default: false
 * @returns {Options}   Options object
 */
function getNormalOptions(title=null, smooth=false) {
    let t, elements;
    if (title == null) {
        t = {};
    } else {
        t = new Title(title);
    }
    if (smooth) {
        elements = new Elements(new Line(0.4));
    } else {
        elements = new Elements((new Line()));
    }
    return new Options(t, null, elements, null, null);
}

/**
 * create a chart with random data in parameter type
 * @param type  the type of chart, and all dataset will be this type
 * @param title     the title of chart.  default:null
 */
function createRandomChart(type, title=null) {
    let data, options;
    if (type == 'pie' || type == 'doughnut') {
        data = getRandomData(2, 10, false, true, true);
    } else {
        data = getRandomData(2, 10);
    }
    if (type == 'line' || type == 'radar') {
        options = getNormalOptions(title, false);
    } else {
        options = getNormalOptions(title, false);
    }
    
    let chart = new ChartInfo(type, data, options);
    let json = JSON.stringify(chart);
    addCharts(json);
}

/**
 * random data of a chart with id
 * @param id    the id of chart you want random data
 */
function randomData(id) {
    let index = indexArray.indexOf(id);
    let config = configArray[index];
    // config = JSON.parse(config);
    config.data.datasets.forEach( function (dataset) {
        dataset.data = dataset.data.map(function() {
            return randomScalingFactor();
        })
    });
    chartsArray[indexArray.indexOf(id)].update();
    // chart.update();
}

/**
 * smooth the line of chart with id
 * @param id    the id of chart you want smooth data
 */
function smoothLine(id) {
    let index = indexArray.indexOf(id);
    let config = configArray[index];
    if (config.options.elements.line.tension == '0.4') {
        config.options.elements.line.tension = 0.000001;
    } else {
        config.options.elements.line.tension = 0.4;
    }
    chartsArray[indexArray.indexOf(id)].update();
}

/**
 * show value of each data
 * @param id    the id of chart you want to show value
 */
function showValue(id) {
    let index = indexArray.indexOf(id);
    let chart = chartsArray[index];
    chart.data.datasets.forEach(function (dataset, i) {
        if (!chart.getDatasetMeta(i).hidden) {
            chart.getDatasetMeta(i).hidden = 'hidden';
            $("#show_value_" + id).removeClass('active');
            $("#show_value_" + id).text("hide value");
        } else {
            chart.getDatasetMeta(i).hidden = null;
            $("#show_value_" + id).addClass('active');
            $("#show_value_" + id).text("show value");
        }
    })
    chart.update();

}

/**
 * chagne the position of legend
 * @param id
 * @param value
 */
function legendPosition(id, value) {
    let index = indexArray.indexOf(id);
    let chart = chartsArray[index];
    if (value == 4) {
        chart.options.legend.display = false;
    } else {
        chart.options.legend.display = true;
        chart.options.legend.position = legendPositions[value];
    }
    chart.update()
}

/**
 * get chart json from server with url
 * @param url   the url to get
 */
function getServerChart(url) {
    $.ajax({
        "url": "/charts/" + url,
        "dataType": "text",
        "success": function(config) {
            // charts_num++;
            // configArray.push(config);
            // let newChart = new Charts(charts_num, config);
            // newChart.createDOM();
            // let ctx = $("#chart_"+newChart.id);
            // let chart = new Chart(ctx, config);
            // chartsArray.push(chart);
            addCharts(config);
        }
    }


    )
}