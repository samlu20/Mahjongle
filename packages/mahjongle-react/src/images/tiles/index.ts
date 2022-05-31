// @ts-ignore
const context = require.context('./', false, /\.(png|jpe?g|svg)$/);

const imgObj: any = {};
context.keys().forEach((key: string) => {
  const tileCode = key.replace('.png', '').replace('./', '');
  console.log('tilecode check');
  console.log(key);
  imgObj[tileCode] = context(key);
}, {});

export default imgObj;
