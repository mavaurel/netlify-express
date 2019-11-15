# Prepare dev env (to use without docker)

Install nodejs > 10 version
https://nodejs.org/en/

Install dev dependancy 
`npm install`

You can use docker for this stage same as in https://github.com/mavaurel/netlify-oauth/readme.md

# How to use netlifycms on local env

To start server with netlifycms:

`npm start`

Default application port is `3000`, but you can freely override it in the `index.js`

Follow http://localhost:3000 to enter application 

You can change your `repo`  and `base url` in `admin/config.yaml`

`repo: mavaurel/netlifycms_portfolio` change this to your repo

`base_url: http://104.248.3.32/` change this to your OAuth server
