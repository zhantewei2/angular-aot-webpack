let path=require('path');
let ROOT=path.resolve(__dirname,'..');
function root(args){
	args=Array.prototype.slice.call(arguments,0);
	let test= path.join.apply(path,[ROOT].concat(args));
	return test;
}
exports.root=root;