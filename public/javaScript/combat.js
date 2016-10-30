var mainState = {
	preload: function() {
		//sounds
		game.load.audio('bad1', '/sounds/bad1.png');
		game.load.audio('bad2', '/sounds/bad2.png');
		game.load.audio('bad3', '/sounds/bad3.png');
		game.load.audio('good1', '/sounds/good1.png');
		game.load.audio('good2', '/sounds/good2.png');
		game.load.audio('good3', '/sounds/good3.png');
		//background
		game.load.image('background', '/images/combat_background.png');
		// trainer
		game.load.image('trainer', '/images/trainer.png');
		// food
		game.load.image('apple_g', '/images/apple_g.png');
		game.load.image('apple_r', '/images/apple_r.png');
		game.load.image('banana', '/images/banana.png');
		game.load.image('berry', '/images/berry.png');
		game.load.image('bread', '/images/bread.png');
		game.load.image('cBar', '/images/c_bar.png');
		game.load.image('cake', '/images/cake.png');
		game.load.image('cCake', '/images/cake_c.png');
		game.load.image('candy', '/images/candy.png');
		game.load.image('cheese', '/images/cheese.png');
		game.load.image('cherry', '/images/cherry.png');
		game.load.image('cookie', '/images/cookie.png');
		game.load.image('corn', '/images/corn.png');
		game.load.image('doughnut', '/images/doughnut.png');
		game.load.image('eggplant', '/images/eggplant.png');
		game.load.image('fries', '/images/fries.png');
		game.load.image('grapes', '/images/grapes.png');
		game.load.image('ice_cream', '/images/ice_cream.png');
		game.load.image('lemon', '/images/lemon.png');
		game.load.image('mellon', '/images/mellon.png');
		game.load.image('orange', '/images/orange.png');
		game.load.image('peach', '/images/peach.png');
		game.load.image('pear', '/images/pear.png');
		game.load.image('pineapple', '/images/pineapple.png');
		game.load.image('pop', '/images/pop.png');
		game.load.image('popcorn', '/images/popcorn.png');
		game.load.image('tomato', '/images/tomato.png');
		//template images
		game.load.image('right', '/images/right_arrow.png');
		game.load.image('left', '/images/left_arrow.png');
		game.load.image('answer_div', '/images/answer_div.png');
		game.load.image('happiness_div', '/images/happiness_div.png');
		game.load.image('happiness_full', '/images/happiness_full.png');
		game.load.image('happiness_chart', '/images/happiness_chart.png');
		game.load.image('question_div', '/images/question_div.png');
		game.load.image('white_circle', '/images/white_circle.png');
		game.load.image('mad_face', '/images/mad_face.png');
		game.load.image('happy_face', '/images/happy_face.png');
		//veggimon
		game.load.image('brocolil', '/images/brocolil.png');
	},

	create: function() {
		game.stage.backgroundColor = '#71c5cf';
		this.background = game.add.sprite(0,0,'background');
		// this.background.anchor(.5,.5);
		this.trainer = game.add.sprite(-140,100, 'trainer');
		// this.trainer.alpha = 0;
		this.veggiemon = game.add.sprite(600,32, 'brocolil');
		this.veggiemon.alpha = 0;

		this.answerContainer = game.add.sprite(10,330, 'question_div');
		this.question_text = game.add.text(this.answerContainer.x+10, this.answerContainer.y+3, "question", {font: '45px Arial', fill: '#ffffff'});

		this.healthContainer = game.add.sprite(11,8, 'happiness_div');
		this.heathBack = game.add.sprite(this.healthContainer.x+6,this.healthContainer.y+6, 'happiness_full');
		this.happinessMeter = game.add.sprite(this.healthContainer.x+6, this.healthContainer.y+6, 'happiness_chart')
		this.happinessMeter.width = .5 * this.happinessMeter.width;
		this.happy = game.add.sprite(470, 15, 'happy_face');
		this.happy.width = this.happy.width *.75
		this.happy.height = this.happy.height *.75
		this.mad = game.add.sprite(10, 15, 'mad_face');
		this.mad.width = this.mad.width *.75
		this.mad.height = this.mad.height *.75

		this.answer1 = game.add.sprite(20,390, 'answer_div');
		this.answer1_text = game.add.text(this.answer1.x+85, this.answer1.y+35, "answer 1", {font: '25px Arial', fill: '#000000'});
		this.answer1_text.anchor.setTo(.5,.5);

		this.answer2 = game.add.sprite(215,390, 'answer_div');
		this.answer2_text = game.add.text(this.answer2.x+85, this.answer2.y+35, "answer 2", {font: '25px Arial', fill: '#000000'});
		this.answer2_text.anchor.setTo(.5,.5);

		this.answer3 = game.add.sprite(410,390, 'answer_div');
		this.answer3_text = game.add.text(this.answer3.x+85, this.answer3.y+35, "answer 3", {font: '25px Arial', fill: '#000000'});
		this.answer3_text.anchor.setTo(.5,.5);

		this.answer4 = game.add.sprite(605,390, 'answer_div');
		this.answer4_text = game.add.text(this.answer4.x+85, this.answer4.y+35, "answer 4", {font: '25px Arial', fill: '#000000'});
		this.answer4_text.anchor.setTo(.5,.5);

		this.left = game.add.sprite(215, 255, 'left');
		this.circle1 = game.add.sprite(270,250, 'white_circle');
		this.quantity1 = game.add.text(this.circle1.x+40, this.circle1.y+20, "x5", {font: '25px Arial', fontWeight: 'bold', fill: '#000000'});
		this.circle2 = game.add.sprite(370,250, 'white_circle');
		this.quantity2 = game.add.text(this.circle2.x+40, this.circle2.y+20, "x5", {font: '25px Arial',fontWeight: 'bold', fill: '#000000'});
		this.circle3 = game.add.sprite(470,250, 'white_circle');
		this.quantity3 = game.add.text(this.circle3.x+40, this.circle3.y+20, "x5", {font: '25px Arial',fontWeight: 'bold', fill: '#000000'});
		this.circle4 = game.add.sprite(570,250, 'white_circle');
		this.quantity4 = game.add.text(this.circle4.x+40, this.circle4.y+20, "x5", {font: '25px Arial',fontWeight: 'bold', fill: '#000000'});
		this.circle5 = game.add.sprite(670,250, 'white_circle');
		this.quantity5 = game.add.text(this.circle5.x+40, this.circle5.y+20, "x5", {font: '25px Arial',fontWeight: 'bold', fill: '#000000'});
		this.right = game.add.sprite(750,255, 'right')

		this.food1 = game.add.sprite(this.circle1.x-15, this.circle1.y+10, 'pear');
		this.food1.inputEnabled = true;
		this.food2 = game.add.sprite(this.circle2.x-15, this.circle2.y+10, 'corn');
		this.food3 = game.add.sprite(this.circle3.x-15, this.circle3.y+10, 'cake');
		this.food4 = game.add.sprite(this.circle4.x-15, this.circle4.y+10, 'banana');
		this.food5 = game.add.sprite(this.circle5.x-15, this.circle5.y+10, 'ice_cream');

		this.quantity1.bringToTop();
		this.quantity2.bringToTop();
		this.quantity3.bringToTop();
		this.quantity4.bringToTop();
		this.quantity5.bringToTop();

		var that = this;
		setTimeout(function(){that.spawnVeggie()},2000);
		this.spawnTrainer();
	},

	listner: function(food){
		console.log("hi");
		this.moveToVeggie(food);
	},

	moveToVeggie(food){
		apex = true
		while (food.x < veggiemon.x && food.y !== veggiemon.y){
			if (food.x < veggiemon.x) {food.x++};

			if (food.y > 10 && apex) {food.y += 2}
			else if (food.y< 10) {apex = false}
			else if (apex === false) { food.y -= ((food.y-veggiemon.y)/(food.x-veggiemon.x))}

			food.width -= 0.5;
			food.height -= 0.5;
		}
		food.kill;
	},

	update: function() {
	},

	spawnVeggie: function() {
		announce1 = game.add.text(game.world.centerX-2,game.world.centerY-78, "You found a wild \n        Brocolil", {font: '35px Arial',fontWeight: 'bold', fill: '#000000'});
		announce1.anchor.setTo(.5,.5);
		announce = game.add.text(game.world.centerX,game.world.centerY-80, "You found a wild \n        Brocolil", {font: '35px Arial',fontWeight: 'bold', fill: '#ffffff'});
		announce.anchor.setTo(.5,.5);
		if (this.veggiemon.alpha < 100){
			game.time.events.repeat(100, 20, function(){
				this.veggiemon.alpha+=.05;
				setTimeout(function(){
					announce1.text = "";
					announce.text = "";
				},3000)
			}, this);
		}
	},

	spawnTrainer: function() {
		if (this.trainer.x < 60){
			game.time.events.repeat(100,20,function(){this.trainer.x +=10}, this);
		}
	}
}

game = new Phaser.Game(800,480, Phaser.AUTO, '');
game.state.add('main', mainState);
game.state.start('main');
