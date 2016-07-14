var fs = require("fs");
var crypto = require('crypto');
var jquery = fs.readFileSync(__dirname+'/lib/jquery.min.js').toString();
var pieGraph = fs.readFileSync(__dirname+"/lib/myGraph.pie.js", "utf-8");
var bamyGraph = fs.readFileSync(__dirname+"/lib/myGraph.bar.js", "utf-8");
var lineGraph = fs.readFileSync(__dirname+"/lib/myGraph.line.js", "utf-8");
var hbar = fs.readFileSync(__dirname+"/lib/myGraph.hbar.js", "utf-8");
var common = fs.readFileSync(__dirname+"/lib/myGraph.common.core.js", "utf-8");
var jsdom = require("jsdom");
var canvas = require("canvas");
var hardColors = ["#3333CC","#993CF3","#C69633","#963939","#6FFF00","#C3690F","#FF6F60","#FF6F00","#9F3333","#C9960C","#009000","#3F3F3F","#FF3300","#9F6C33","#6600CC"];

module.exports = {
	createAPie : function(opts, cb) {
		var pieData = {
			width: opts.width || 480,
			height: opts.height || 250,
			labelPath: opts.labelPath || "label",
			labelData: opts.labelData || "data",
			data: opts.data || [],
			outputFolder: opts.outputFolder || __dirname
		}

		jsdom.env({

		  html: "<html><body></body></html>",

		  src: [
		    jquery,common,pieGraph
		  ],

		  done : function (err, window) {
		  	  window = window;
			  document = window.document;
			  window.cvsEl = new canvas(pieData.width, pieData.height);
			  var $ = window.jQuery;
			  var myGraph = window.myGraph;
			  var colors = hardColors.slice(0,pieData.length);
				var data = [],labels = [];
				for (var i=0; i<pieData.data.length; ++i) {
				    data.push(pieData.data[i][pieData.labelData]);
				    labels.push(pieData.data[i][pieData.labelPath]+", "+pieData.data[i][pieData.labelData]+"%");
				}
					var pie = new myGraph.Pie({
					    id: 'cvs',
					    data: data,
					    options: {
					    	//variant: 'donut',
					        labels: labels,
					        colors: colors,
					        strokestyle: 'white',
					        linewidth: 0,
					        shadow: {
					            offsetx: 2,
					            offsety: 2,
					            blur: 3
					        },
					        script: function() {

					        },
					        exploded: 5
					    }
					}).on("draw",function(){
					var fileName = crypto.randomBytes(20).toString('hex');
					var out = fs.createWriteStream(pieData.outputFolder+'/'+fileName+".png");
					var stream = this.canvas.pngStream();
					stream.on('data', function(chunk){
					  out.write(chunk);
					});

					stream.on('end', function(){
					  cb(pieData.outputFolder+'/'+fileName+".png");
					});
				}).draw();
			}
		});
	},
	createABar : function(opts, cb) {
		var barData = {
			width: opts.width || 480,
			height: opts.height || 250,
			labelPath: opts.labelPath || "label",
			labelData: opts.labelData || "data",
			color: opts.color || hardColors[parseInt(Math.random() * (14 - 0) + 0)],
			data: opts.data || [],
			outputFolder: opts.outputFolder || __dirname
		}

		jsdom.env({

		  html: "<html><body></body></html>",

		  src: [
		    jquery,common,bamyGraph
		  ],

		  done : function (err, window) {
			  window = window;
			  document = window.document;
			  window.cvsEl = new canvas(barData.width, barData.height);
			  var $ = window.jQuery;
			  var myGraph = window.myGraph;
			  var data = [],labels = [];
				for (var i=0; i<barData.data.length; ++i) {
				    data.push(barData.data[i][barData.labelData]);
				    labels.push(barData.data[i][barData.labelPath]);
				}
				var colors = [barData.color];

					var bar = new myGraph.Bar({
		                id: 'cvs',
		                data: data,
		                options: {
		                    'text.size': 11,
		                    'background.grid.autofit.numvlines': 6,
		                    colors: colors,
		                    labels: {
		                    	self : labels,
		                    	above : true
		                    },
		                    numyticks: 4,
		                    ylabels: {
		                        count: 4
		                    },
		                    gutter: {
		                        left: 100,
			                    right: 5,
			                    top: 10,
			                    bottom: 125
		                    },
		                    variant: '3d',
		                    strokestyle: 'transparent',
		                    text: {
			                    angle: 30
			                },
		                    hmargin: {
		                        grouped: 0
		                    },
		                    scale: {
		                        round: true
		                    }
		                }
		            }).on("draw",function(){
		            	var fileName = crypto.randomBytes(20).toString('hex');
							var out = fs.createWriteStream(barData.outputFolder + '/'+fileName+".png");
							var stream = this.canvas.pngStream();
							stream.on('data', function(chunk){
							  out.write(chunk);
							});

							stream.on('end', function(){
							  cb(barData.outputFolder + '/'+fileName+".png");
							});
		            }).draw();
			}
		});
	},
	createALine : function(opts, cb) {

		var lineData = {
			width: opts.width || 480,
			height: opts.height || 250,
			labelPath: opts.labelPath || "label",
			labelData: opts.labelData || "data",
			color: opts.color || hardColors[parseInt(Math.random() * (14 - 0) + 0)],
			data: opts.data || [],
			outputFolder: opts.outputFolder || __dirname
		};

		jsdom.env({

		  html: "<html><body></body></html>",

		  src: [
		    jquery,common,lineGraph
		  ],

		  done : function (err, window) {
			  window = window;
			  document = window.document;
			  window.cvsEl = new canvas(lineData.width, lineData.height);
			  var $ = window.jQuery;
			  var myGraph = window.myGraph;
			  var data = [],labels = [];
				for (var i=0; i<lineData.data.length; ++i) {
				    data.push(lineData.data[i][lineData.labelData]);
				    labels.push(lineData.data[i][lineData.labelPath]);
				}
				var colors = [lineData.color];
				var line = new myGraph.Line({
                id: 'cvs',
                data: data,
                options: {
                    gutter: {
                        bottom: 45
                    },
                    labels: {
                        self : labels,
                        above : true,
                        colors: ['#7CB5EC']
                    },
                    colors: colors,
                    tickmarks: 'filledcircle',
                    shadow: false,
                    background: {
                        grid: {
                            color: '#ccc',
                            vlines: false,
                            border: false
                        }
                    },
                    text: {
			            angle: 30
			        },
                    hmargin: 5,
                    scale: {
                        zerostart: true
                    },
                    axis: {
                        color: '#000000'
                    },
                    numxticks: 0,
                    noyaxis: false,
                    text: {
                        font: 'Segoe UI',
                        size: 14,
                        color: '#000000'
                    }
                }
            }).on("draw",function(){
            	var fileName = crypto.randomBytes(20).toString('hex');
							var out = fs.createWriteStream(lineData.outputFolder + '/'+fileName+".png");
							var stream = this.canvas.pngStream();
							stream.on('data', function(chunk){
							  out.write(chunk);
							});

							stream.on('end', function(){
							  cb(lineData.outputFolder + '/'+fileName+".png");
							});
				}).draw()
			}
		})
	},
	createADonut : function(opts, cb) {

		var pieData = {
			width: opts.width || 480,
			height: opts.height || 250,
			labelPath: opts.labelPath || "label",
			labelData: opts.labelData || "data",
			data: opts.data || [],
			outputFolder: opts.outputFolder || __dirname
		}

		jsdom.env({

		  html: "<html><body></body></html>",

		  src: [
		    jquery,common,pieGraph
		  ],

		  done : function (err, window) {
			  window = window;
			  document = window.document;
			  window.cvsEl = new canvas(pieData.width, pieData.height);
			  var $ = window.jQuery;
			  var myGraph = window.myGraph;
			  var colors = hardColors.slice(0,pieData.length);
				var data = [],labels = [];
				for (var i=0; i<pieData.data.length; ++i) {
				    data.push(pieData.data[i][pieData.labelData]);
				    labels.push(pieData.data[i][pieData.labelPath]+", "+pieData.data[i][pieData.labelData]+"%");
				}
					var pie = new myGraph.Pie({
					    id: 'cvs',
					    data: data,
					    options: {
					    	variant: 'donut',
					        labels: labels,
					        colors: colors,
					        strokestyle: 'white',
					        linewidth: 0,
					        shadow: {
					            offsetx: 2,
					            offsety: 2,
					            blur: 3
					        },
					        script: function() {

					        },
					        exploded: 5
					    }
					}).on("draw",function(){
					var fileName = crypto.randomBytes(20).toString('hex');
					var out = fs.createWriteStream(pieData.outputFolder+'/'+fileName+".png");
					var stream = this.canvas.pngStream();
					stream.on('data', function(chunk){
					  out.write(chunk);
					});

					stream.on('end', function(){
					  cb(pieData.outputFolder+'/'+fileName+".png");
					});
				}).draw();
			}
		});
	},
	createAHBar : function(opts, cb) {

		var barData = {
			width: opts.width || 480,
			height: opts.height || 250,
			labelPath: opts.labelPath || "label",
			labelData: opts.labelData || "data",
			color: opts.color || hardColors[parseInt(Math.random() * (14 - 0) + 0)],
			data: opts.data || [],
			outputFolder: opts.outputFolder || __dirname
		}

		jsdom.env({

		  html: "<html><body></body></html>",

		  src: [
		    jquery,common,hbar
		  ],

		  done : function (err, window) {
			  window = window;
			  document = window.document;
			  window.cvsEl = new canvas(barData.width, barData.height);
			  var $ = window.jQuery;
			  var myGraph = window.myGraph;
			  var data = [],labels = [];
				for (var i=0; i<barData.data.length; ++i) {
				    data.push(barData.data[i][barData.labelData]);
				    labels.push(barData.data[i][barData.labelPath]);
				}
				var colors = [barData.color];

					var bar = new myGraph.HBar({
		                id: 'cvs',
		                data: data,
		                options: {
		                    'text.size': 11,
		                    colors: colors,
		                    labels: {
		                    	self : labels,
		                    	above : true
		                    },
		                    gutter: {
		                        left: 125
		                    }
		                }
		            }).on("draw",function(){
		            	var fileName = crypto.randomBytes(20).toString('hex');
							var out = fs.createWriteStream(barData.outputFolder + '/'+fileName+".png");
							var stream = this.canvas.pngStream();
							stream.on('data', function(chunk){
							  out.write(chunk);
							});

							stream.on('end', function(){
							  cb(barData.outputFolder + '/'+fileName+".png");
							});
		            }).draw();
			}
		});
	}
};
