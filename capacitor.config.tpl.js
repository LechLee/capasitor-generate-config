module.exports = {
	"appId": "com.example.app",
	"appName": "hello-cap-2",
	"bundledWebRuntime": false,
	"npmClient": "npm",
	"webDir": "www",
	"plugins": {
		"SplashScreen": {
			"launchShowDuration": 0
		}
	},
	"server": {
		"allowNavigation": ["*"]
	},
	"android": {
		"allowMixedContent": true
	},
	"cordova": {}
}
