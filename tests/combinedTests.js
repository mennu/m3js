var graphEngine = require("../index.js");

graphEngine.createAPie({
	data : [{
		labels : "Car",
		data : 45
	},{
		labels : "Cycle",
		data : 10
	},{
		labels : "Walk",
		data : 10
	},{
		labels : "Bus",
		data : 20
	}],
	outputFolder : __dirname,
	labelPath : "labels"
},function(imgPath){
	console.log(imgPath);
});

graphEngine.createABar({
	data : [{
		label : "2012",
		data : 50
	},{
		label : "2013",
		data : 35
	},{
		label : "2014",
		data : 45
	},{
		label : "2015",
		data : 20
	},{
		label : "2016",
		data : 80
	}],
	outputFolder : __dirname
},function(imgPath){
	console.log(imgPath);
});

graphEngine.createALine({
	data : [{
		label : "Sun",
		data : 45
	},{
		label : "Mon",
		data : 20
	},{
		label : "Tue",
		data : 80
	},{
		label : "Wed",
		data : 45
	},{
		label : "Thr",
		data : 20
	},{
		label : "Fri",
		data : 80
	},{
		label : "Sat",
		data : 50
	}],
	outputFolder : __dirname
},function(imgPath){
	console.log(imgPath);
});

graphEngine.createADonut({
	data : [{
		labels : "jQuery",
		data : 45
	},{
		labels : "Ruby",
		data : 20
	},{
		labels : "Python",
		data : 20
	}],
	outputFolder : __dirname,
	labelPath : "labels"
},function(imgPath){
	console.log(imgPath);
});

graphEngine.createAHBar({
	data : [{
		labels : "USA",
		data : 45
	},{
		labels : "Europe",
		data : 50
	},{
		labels : "Asia",
		data : 60
	}],
	outputFolder : __dirname,
	labelPath : "labels"
},function(imgPath){
	console.log(imgPath);
});
