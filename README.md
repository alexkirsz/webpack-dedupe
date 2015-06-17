```
cd foo
sudo npm link
cd ../app
npm install
npm link foo

npm run no-dedupe
node output
# react deduped: false
# react/addons deduped: false

npm run dedupe
node output
# react deduped: false
# react/addons deduped: false

npm run replace
node output
# react deduped: true
# react/addons deduped: false

npm run alias
node output
# react deduped: true
# react/addons deduped: false
```

