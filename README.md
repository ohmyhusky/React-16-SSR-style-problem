## A project to show React 16 SSR style problem

### install 

```js
yarn

```

### build

```js
yarn run build
```

### run server

```js
node ./build/server.js
```

Then open browser (didn't compile to es5, please use a modern browser) to access ```http://localhost:3003```

As you can see in the page, the div element's background color is red (should be skyblue). It will log a warning in to console :
```Warning: Prop `style` did not match. Server: "height:500px;background-color:red" Client: "height:500px;background-color:skyblue"``` but the DOM's style can't update correctly.

1. The virtual DOM's style is correct, the backgroundColor property is 'skyblue', I think it just didn't update DOM.
2. String doesn't have this problem, you can see the string inside div element is 'browser'.
3. Tried ```renderToNodeStream``` or ```renderToString``` combine with ```render``` or ```hydrate```, none of it work.
4. React 15 doesn't have this problem, you can run ```git checkout react-15.6.2``` to see it.