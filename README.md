[![NPM](https://nodei.co/npm/m1js.png?downloads=true&stars=true)](https://nodei.co/npm/m1js/)

# m1js
  The goal is to create simple graphs at server end and save it to png, so the client can load it instead of preparing it.


###Install

```sh
$npm install m1js
```

###Types of Graphs
* Pie Chart
* Bar Chart
* Line Chart
* Donut Chart
* HBar Chart

###Usage

#####Pie Chart

  ```sh
  var m1js = require('m1js');

  m1js.createAPie({
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
  	//...

  });
  ```

#####Bar Chart

  ```sh
  var m1js = require('m1js');

  m1js.createABar({
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
  	//....
  });
  ```
#####Line Chart

  ```sh
  var m1js = require('m1js');

  m1js.createALine({
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
  	//...
  });
  ```
#####Donut Chart

  ```sh
  var m1js = require('m1js');

  m1js.createADonut({
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
  	//...
  });
  ```
#####HBar Chart

  ```sh
  var m1js = require('m1js');

  m1js.createAHBar({
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
  	//...
  });
  ```
####RoadMap
* Adding more Graphs
* Adding 3D WebGl Graphs
* Adding functionality for returning canvas objects.

####FAQ's

Having issues installing canvas

Install lib through the below command.
sudo apt-get install libcairo2-dev libjpeg-dev libgif-dev

Make sure you have G++ 4.8.
sudo apt-get install g++-4.8

####Preview

![Donut](https://github.com/mennu/m3js/blob/main/tests/donut.png?raw=true "Donut Graph")

![HBar](https://github.com/mennu/m3js/blob/main/tests/hbar.png?raw=true "HBar Graph")

![Pie](https://github.com/mennu/m3js/blob/main/tests/pie.png?raw=true "pie Graph")

![Bar](https://github.com/mennu/m3js/blob/main/tests/bar.png?raw=true "Bar Graph")

![line-graph](https://github.com/mennu/m3js/blob/main/tests/line-graph.png?raw=true "line Graph")
