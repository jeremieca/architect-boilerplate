module.exports = [

	{
		roles:['guest','member'], 
		allows:[
			{resources:'blogs', permissions:'get'},
			{resources:['forums','news'], permissions:['get','put','delete']}
		]
	},
	{
		roles:['gold','silver'], 
		allows:[
			{resources:'cash', permissions:['sell','exchange']},
			{resources:['account','deposit'], permissions:['put','delete']}
		]
	}

]