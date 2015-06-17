```
cd foo
sudo npm link
cd ../app
npm install
npm link foo

npm run no-dedupe
node output # => false

npm run dedupe
node output # => false

npm run replace
node output # => true

npm run alias
node output # => true
```

