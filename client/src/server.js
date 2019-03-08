var axios =  require('axios');
var input = process.argv[2];
var key = '30e77a591ab3a009323f28be315be367';

axios.get('https://www.food2fork.com/api/search?key=' + key + '&q=' + input)
	.then(function(response){
		for(var i = 0; i<response.data.count; i++){
			var listNum = i + 1;
			var firstLine = '\n*******RESULT #' + listNum + '*******\n';
			var lastLine = '';

			console.log(firstLine);
			console.log('    Title: ' + response.data.recipes[i].title);
			console.log('    ID#: ' + response.data.recipes[i].recipe_id);
			console.log('    Link: ' + response.data.recipes[i].source_url + '\n');
			
			for (var j = 0; j < firstLine.length; j++){
				lastLine += '*';
			};
			console.log(lastLine);


			//console.log(response.data.recipes[i]);
		}
	}).catch(function(error){throw error});
