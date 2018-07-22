
document.addEventListener("deviceready", onDeviceReady, false);
	
function onDeviceReady() {

	///Se for celular cria um SQLite, se for um navegador então cria um WebSQL
	if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
		
		db = window.sqlitePlugin.openDatabase({ 
				
				name: 'banco.db', location: 'default' 
		
		}, 
		function (db) {}, 
		function (error) { 
			
			console.log('Open database ERROR: ' + JSON.stringify(error)); 
			
		});          
	
		console.log('DB: SQLite');

	}else {

		db = window.openDatabase('banco', "0.1", "banco de dados", 200000);    
		console.log('DB: WebSQL');
	}

}