// @ts-ignore
const context = require.context('./', false, /\.(png|jpe?g|svg)$/);

const imgObj: any = {};
context.keys().forEach((key: string) => {
  const tileCode = key.replace('.png', '').replace('./', '');
  imgObj[tileCode] = context(key);
}, {});

export default imgObj;
