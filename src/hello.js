function main(params){
	msg = "Hello, " + params.name + " from " +params.place;
	return { greeting: msg };
                runtime: nodejs:10
}
