var graphEngine = require("../index.js");

graphEngine.createAPie({
	data : [{
		labels : "123456789",
		data : 45
	},{
		labels : "123456789",
		data : 20
	},{
		labels : "123456789123456789",
		data : 20
	}],
	outputFolder : __dirname,
	labelPath : "labels"
},function(imgPath){
	console.log(imgPath);
});

graphEngine.createABar({
	data : [{
		label : "123456789",
		data : 45
	},{
		label : "123456789",
		data : 20
	},{
		label : "123456789123456789",
		data : 80
	}],
	outputFolder : __dirname
},function(imgPath){
	console.log(imgPath);
});	

graphEngine.createALine({
	data : [{
		label : "123456789",
		data : 45
	},{
		label : "123456789",
		data : 20
	},{
		label : "12345",
		data : 80
	},{
		label : "123456789",
		data : 45
	},{
		label : "123456789",
		data : 20
	},{
		label : "12345",
		data : 80
	}],
	outputFolder : __dirname
},function(imgPath){
	console.log(imgPath);
});

graphEngine.createADonut({
	data : [{
		labels : "123456789",
		data : 45
	},{
		labels : "123456789",
		data : 20
	},{
		labels : "123456789123456789",
		data : 20
	}],
	outputFolder : __dirname,
	labelPath : "labels"
},function(imgPath){
	console.log(imgPath);
});

graphEngine.createAHBar({
	data : [{
		labels : "123456789",
		data : 45
	},{
		labels : "123456789",
		data : 20
	},{
		labels : "123456789123456789",
		data : 20
	}],
	outputFolder : __dirname,
	labelPath : "labels"
},function(imgPath){
	console.log(imgPath);
});
