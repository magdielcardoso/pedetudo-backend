const start = async (app) => {
    app.listen(process.env.PORT_BACKEND, () => {
      console.log('Servidor backend rodando na porta: ', process.env.PORT_BACKEND);
    })}
export default start