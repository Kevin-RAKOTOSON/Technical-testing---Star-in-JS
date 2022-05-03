let graph = '' ;
			for(i = 0; i < 5; i++){
			   for(j= 0; j <= 6; j++){
				    if([0, 4].includes(i)){
			            if(j === 3) graph += '*'
						else graph += ' '
			        }
					else if([1, 3].includes(i)){
						if([0, 1, 2, 4, 5, 6].includes(j)) graph += '*'
						else graph += ' '
					}
			        else if(i === 2){
			    	    if([1, 5].includes(j)) graph += '*'
						else graph += ' '
			        }
					else graph += ' '
			    }
			 	graph += '\n'
			}
			console.log(graph) 