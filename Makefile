npm:
	npm i

www/lib/onsenui: npm
	cp -r node_modules/onsenui www/lib/

build:
	cordova build

run-browser: build
	cordova run browser