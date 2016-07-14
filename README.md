# m3js
Simple Graphs at server

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
  	//....
  });
  ```
#####Line Chart

  ```sh
  var m1js = require('m1js');

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
  	//...
  });
  ```
#####Donut Chart

  ```sh
  var m1js = require('m1js');

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
  	//...
  });
  ```
#####HBar Chart

  ```sh
  var m1js = require('m1js');

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
