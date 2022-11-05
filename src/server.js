const Express = require('express')

const app = Express()
app.use(Express.json());

const port = 8080;

//ROTA ITERAÇÃO
app.get('/', async (req, res) =>{
    res.send("Olá Mundo!")
})

app.post('/cadastrar', async (req, res) =>{
    await xxx.create(req.body)
    .then(() => {
        return res.json({
            erro:false,
            mensagem:"Usuario cadastrado com sucesso!"
        })
    }).catch((err) => {console.log(err)
        return res.status(400).json({
            erro:true,
            mensagem:"Erro, Usuario nao cadastrado!"
        })
    })
}),



//PORTA
app.listen(port, ()=>{
    console.log("Servidor rodando na porta: ",port, "ROTA=> localhost:8080/")
});