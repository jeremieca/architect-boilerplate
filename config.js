module.exports = [
	{
		packagePath: "./plugins/http-app",
		port: 8080
	},
	{
		packagePath: "./plugins/http-static",
		root: "www"
	},
	{
		packagePath: "./plugins/auth",
		express: {
			session: {
				secret: "jk<y8FY8fçYDfç!fyshdfç!qsd!9p^q$ùqsdpà"
			}
		},
		providers: {
			facebook : {
				clientID: "id client facebook7",
				clientSecret: "secret facebook0",
				callbackURL: "/auth/facebook/callback"
			}
		}
	},
	{
		packagePath: "./plugins/mongoose-connect",
		connect: "mongodb://localhost/myapp",
		modelDirectory: "mongoose"
	}
]
