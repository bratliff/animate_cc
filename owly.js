(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0066FF").ss(1,1,1).p("AhZAAICzhnIAADPg");
	this.shape.setTransform(9,10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AhZAAICzhnIAADPg");
	this.shape_1.setTransform(9,10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-1,-1,20,22.8), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AnkFoIAArPIPJAAIAALPg");
	this.shape.setTransform(48.5,36);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,97,72), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0066CC").ss(1,1,1).p("AAAFwImnrfINPAAg");
	this.shape.setTransform(42.4,36.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AmnlvINPAAImoLfg");
	this.shape_1.setTransform(42.4,36.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-1,86.9,75.5), null);


(lib.eyewhite = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0066FF").ss(1,1,1).p("ACnAAQAABGgxAxQgxAxhFAAQhFAAgxgxQgxgxAAhGQAAhFAxgwQAxgyBFAAQBFAAAxAyQAxAwAABFg");
	this.shape.setTransform(16.8,16.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah2B2QgwgwgBhGQABhEAwgyQAygxBEABQBFgBAyAxQAwAyAABEQAABGgwAwQgyAyhFAAQhEAAgygyg");
	this.shape_1.setTransform(16.8,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.eyewhite, new cjs.Rectangle(-1,-1,35.5,35.5), null);


(lib.eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABuAAQAAAuggAgQggAgguAAQgtAAghggQggggAAguQAAgtAgghQAhggAtAAQAuAAAgAgQAgAhAAAtg");
	this.shape.setTransform(11.1,11.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhNBOQghggAAguQAAgtAhghQAggfAtgBQAuABAgAfQAgAhABAtQgBAuggAgQggAgguAAQgtAAggggg");
	this.shape_1.setTransform(11.1,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.eye, new cjs.Rectangle(-1,-1,24.1,24.1), null);


(lib.button2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXBFQgLgGgDgJQgDgIAAgQIAAgKIAiAAIAAASQAAAIACACQABACADAAQADAAACgDQACgDAAgFQAAgNgDgEQgEgEgNgJIgSgMQgFgEgCgHQgDgIAAgLQAAgQAEgIQAEgIAJgEQAKgEANAAQANAAAKAFQAKAEAEAHQADAHAAARIAAAGIgiAAIAAgLQAAgHgCgCQAAAAAAgBQgBAAAAAAQgBgBgBAAQAAAAAAAAQgDAAgCADQgCACAAAGQAAAHACAEQACADAIAFQAYAPAHAJQAGAJAAAVQAAAPgDAHQgEAHgKAFQgKAFgOAAQgOAAgKgFg");
	this.shape.setTransform(86.7,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYBGQgHgFgFgGQgEgHgBgHIgBgXIAAgpQAAgUACgJQACgKALgHQAKgIAQAAQAQAAALAHQAKAGAEAKQADAJAAARIAAAGIglAAIAAgNQAAgMgBgDQgCgDgDAAQgDAAgBADQgBACAAALIAABEQAAAJABADQABADADAAQAEAAACgDQABgEAAgKIAAgRIgHAAIAAgUIArAAIAABLIgYAAIgDgKQgEAHgFADQgGADgHAAQgKAAgIgEg");
	this.shape_1.setTransform(77.1,19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAJBHIgShAIAABAIgfAAIAAiNIAfAAIATBAIAAhAIAfAAIAACNg");
	this.shape_2.setTransform(67.3,19);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSBHIAAiNIAkAAIAACNg");
	this.shape_3.setTransform(59.9,19);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AALBHQgHghgEgoIgKBJIguAAIgQiNIAkAAIAEAyIADAvQACglAJg8IAlAAIAEAvIAEA1QADgzAHgxIAkAAIgQCNg");
	this.shape_4.setTransform(50,19);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnBHIAAiNIAlAAQAPAAAIACQAIADAEAEQAEAFABAGQACAGAAAOIAAAMQAAAOgDAFQgDAGgHAEQgIADgMAAIgJAAIAAA5gAgCgJIACAAQAFAAACgDQACgCAAgIIAAgMQAAgHgCgDQgDgCgGAAg");
	this.shape_5.setTransform(35.2,19);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAJBHIgCgZIgMAAIgCAZIgnAAIATiNIA1AAIAVCNgAAGAUIgGg6IgGA6IAMAAIAAAAg");
	this.shape_6.setTransform(26,19);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdBHIAAiNIAkAAIAABxIAXAAIAAAcg");
	this.shape_7.setTransform(17.9,19);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeBHIAAiNIA9AAIAAAcIgZAAIAAAbIAWAAIAAAaIgWAAIAAA8g");
	this.shape_8.setTransform(10.9,19);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.1,1,1).p("Anfi4IO/AAIAAFxIu/AAg");
	this.shape_9.setTransform(48,18.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AnfC5IAAlxIO/AAIAAFxg");
	this.shape_10.setTransform(48,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.button2, new cjs.Rectangle(-1,-1,98,39), null);


(lib.button1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXBFQgLgGgDgJQgDgIAAgQIAAgKIAiAAIAAASQAAAIACACQABACADAAQADAAACgDQACgDAAgFQAAgNgDgEQgEgEgNgJIgSgMQgFgEgCgHQgDgIAAgLQAAgQAEgIQAEgIAJgEQAKgEANAAQANAAAKAFQAKAEAEAHQADAHAAARIAAAGIgiAAIAAgLQAAgHgCgCQAAAAAAgBQgBAAAAAAQgBgBgBAAQAAAAAAAAQgDAAgCADQgCACAAAGQAAAHACAEQACADAIAFQAYAPAHAJQAGAJAAAVQAAAPgDAHQgEAHgKAFQgKAFgOAAQgOAAgKgFg");
	this.shape.setTransform(77.8,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfBHIAAiNIA8AAIAAAcIgYAAIAAAbIAXAAIAAAaIgXAAIAAAgIAbAAIAAAcg");
	this.shape_1.setTransform(69.6,19);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQBHIAAgzIgahaIAiAAQAHAqABAOQACgXAIghIAiAAIgbBaIAAAzg");
	this.shape_2.setTransform(61.4,19);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfBHIAAiNIA9AAIAAAcIgZAAIAAAbIAXAAIAAAaIgXAAIAAAgIAbAAIAAAcg");
	this.shape_3.setTransform(53.7,19);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfBHIAAiNIA8AAIAAAcIgYAAIAAAbIAXAAIAAAaIgXAAIAAAgIAbAAIAAAcg");
	this.shape_4.setTransform(43.1,19);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaBHIgViNIAnAAQAGA7ACAnIAHhIIACgaIAnAAIgTCNg");
	this.shape_5.setTransform(34.4,19);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUBHQgJgEgFgIQgGgHgBgJIgBgfIAAgXIABgeQABgJAFgIQAGgHAJgEQAJgEALAAQALAAAJAEQAKADAFAIQAGAHABAJIABAfIAAAXIgBAfQgBAJgGAHQgFAHgJAEQgJAEgMAAQgLAAgJgDgAgDgvQgCADAAALIAABBQAAAMABADQABADADAAQAEAAABgDQABgEAAgMIAAhAQAAgKgBgDQgCgDgDAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAg");
	this.shape_6.setTransform(24.8,19);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAZBHIAAhfIgNBfIgWAAIgOhdIAABdIggAAIAAiNIAwAAIAEAeIAFAkIAIhCIAwAAIAACNg");
	this.shape_7.setTransform(13.5,19);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("Anfi4IO/AAIAAFxIu/AAg");
	this.shape_8.setTransform(48,18.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AnfC5IAAlxIO/AAIAAFxg");
	this.shape_9.setTransform(48,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.button1, new cjs.Rectangle(-1,-1,98,39), null);


(lib.wing1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(9,36.4,1,3.5,0,0,0,9,10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wing1, new cjs.Rectangle(-0.5,-1.7,19,76.2), null);


// stage content:
(lib.owly = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.eyebutton.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(1);
		}
		
		this.wingbutton.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
			this.gotoAndPlay(7);
		}
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(14).call(this.frame_19).wait(1));

	// wing2
	this.instance = new lib.wing1();
	this.instance.parent = this;
	this.instance.setTransform(168.1,164.7,1,1,0,0,0,9,36.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({regY:36.4,rotation:-45,x:196.1,y:151.8},3).to({regY:36.3,rotation:0,x:168.1,y:164.7},10).wait(1));

	// wing1
	this.instance_1 = new lib.wing1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(88.1,160.3,1,1,180,0,0,9,36.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({rotation:225,x:66.1,y:151.8},3).to({rotation:180,x:88.1,y:160.3},10).wait(1));

	// Layer 7
	this.wingbutton = new lib.button2();
	this.wingbutton.parent = this;
	this.wingbutton.setTransform(198.5,328,1,1,0,0,0,48,18.5);

	this.eyebutton = new lib.button1();
	this.eyebutton.parent = this;
	this.eyebutton.setTransform(198.5,279.5,1,1,0,0,0,48,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.eyebutton},{t:this.wingbutton}]}).wait(20));

	// eye2
	this.instance_2 = new lib.eye();
	this.instance_2.parent = this;
	this.instance_2.setTransform(157.6,72.1,1,1,0,0,0,11.1,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:161.6},5).wait(15));

	// eye1
	this.instance_3 = new lib.eye();
	this.instance_3.parent = this;
	this.instance_3.setTransform(109.2,72.1,1,1,0,0,0,11.1,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:102.2},5).wait(15));

	// Layer 1
	this.instance_4 = new lib.eyewhite();
	this.instance_4.parent = this;
	this.instance_4.setTransform(106.9,71.9,1,1,0,0,0,16.8,16.8);

	this.instance_5 = new lib.eyewhite();
	this.instance_5.parent = this;
	this.instance_5.setTransform(156.4,71.9,1,1,0,0,0,16.8,16.8);

	this.instance_6 = new lib.Symbol2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(128.6,77.1,1,1,0,0,0,48.5,36);

	this.instance_7 = new lib.Symbol1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(130.2,160.4,1.107,1.107,0,0,0,42.5,36.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0066CC").ss(1,1,1).p("AnklnIPJAAIAALPIvJAAg");
	this.shape.setTransform(128.6,77.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).to({state:[{t:this.shape},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},9).to({state:[{t:this.shape},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(216.1,240.1,168,306.5);
// library properties:
lib.properties = {
	width: 275,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;