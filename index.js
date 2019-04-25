module.exports = (Vue) => {
	let openDelay = false;
	Vue.directive('delayClick', function(el, binding) {
	    el.onclick = function(e) {
	        if (openDelay) return;
	        openDelay = !openDelay;
	        if (!binding.value) {
	            throw "未传入value数据！";
	        }
	        let func = binding.value['func'];
	        let time = binding.value['time'] || 1000;
	        if (typeof time !== 'number') {
	            throw "传入的等待时间错误";
	        }
	        let params = binding.value['params'];
	        setTimeout(() => {
	            openDelay = !openDelay;
	        }, time);
	        if(params){
	        	func(...params);
	        } else {
	        	func()
	        }
	    }
	})
}
