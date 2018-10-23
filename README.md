
 - npm install -g commitizen  
 - npm install cz-customizable --save-dev  
 -  package.json 

        "config": {
            "commitizen": {    
                "path": "node_modules/cz-customizable"  
            },  
            "cz-customizable": {
                "config": "path to this file"
            }
        }
		
 -  git add  ***file  
    git cz
