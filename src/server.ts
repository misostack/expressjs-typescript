import App from './app';

const bootstrap = async () => {
  const application = new App();
  application.start();
}
if(require.main === module) {
  (async ()=>{
    await bootstrap();
  })();
}