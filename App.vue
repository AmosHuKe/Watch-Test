<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	
	/* ColorUi */
	@import url("./lib/colorui/main.css");
	@import url("./lib/colorui/icon.css");
	/* 加载loding */
	.cu-load.load-modal {
		width: 0px;
		height: 0px;
		background-color: transparent;
	}
	.cu-load.load-modal::after {
		background-color: rgba(0, 0, 0, 0.3);
		width: 30px;
		height: 30px;
		border-left: 3px solid #FFF0F6;
	}
</style>
