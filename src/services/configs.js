import { http } from './config'

export default{

    listPrices:() =>{
		return http.get('coin')
	},
	
	findPrices:(id) =>{
		return http.get('coin/'.concat(id))
	},

	editPrices:(coin) =>{
		return http.put('coin',coin)
	},

}