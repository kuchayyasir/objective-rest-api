
module.exports = {
	index(req, res){
		console.log('hi')
		res.send( {
			status: true,
			message: 'Welcome to the Objective API'
		})
	}
}