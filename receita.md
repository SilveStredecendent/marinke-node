**Passo 0**.

Sem ele instalado, o seu terminal nem sequer vai reconhecer comandos como `npm` ou `node`.

**Passo 0: Instalação do Node.js (Ambiente Local)**

* **O que fazer:** Acessar o site oficial (nodejs.org) e baixar o instalador da versão LTS (Long Term Support), que é a mais recomendada e estável.
* **Instalação:** No Windows, por exemplo, basta rodar o executável e seguir o padrão "Next, Next, Install". Ele já configura tudo automaticamente por baixo dos panos.
* **Verificação:** Para ter certeza de que a instalação funcionou, basta abrir o PowerShell (ou o terminal da sua preferência) e digitar dois comandos:
* `node -v` (para confirmar a versão do Node instalada)
* `npm -v` (para confirmar que o gerenciador de pacotes veio junto)

---

1. **Inicialização do Projeto (`npm init -y`)**
* O primeiro passo em qualquer pasta de projeto Node.js é criar o arquivo gerador `package.json`.
* **Comando no terminal:** `npm init -y`
* **Explicação:** A flag `-y` responde "sim" para todas as perguntas padrão. Isso gera o arquivo de configuração raiz que gerenciará os scripts e as bibliotecas do seu projeto.

---

2. **Instalação das Dependências**
* Você precisa instalar o framework web e a ferramenta de reinicialização automática.
* **Comando no terminal:** `npm install express`
* **Comando no terminal:** `npm install --save-dev nodemon`
* **Explicação:** O Express construirá o servidor e as rotas. O Nodemon é instalado como dependência de desenvolvimento (`--save-dev`) para monitorar os arquivos e reiniciar o servidor automaticamente a cada vez que você salvar o código.

---

3. **Criação da Estrutura de Pastas e Arquivos**
* Construa o esqueleto da arquitetura para separar as responsabilidades.
* Crie uma pasta chamada `src` na raiz do projeto.
* Dentro de `src`, crie três subpastas: `controllers`, `routes` e `services`.
* Crie o arquivo principal `index.js` solto dentro da pasta `src`.
* Crie os arquivos específicos de domínio dentro de cada subpasta (ex: `produto.service.js`, `produto.controller.js` e `produto.routes.js`).

---

4. **Configuração do Script de Execução**
* É necessário ensinar o Node.js como iniciar o seu projeto utilizando o Nodemon.
* Abra o arquivo `package.json`.
* Localize o bloco `"scripts"` e adicione o comando `dev`:
```json
"scripts": {
  "dev": "nodemon src/index.js"
}

```


* **Explicação:** Isso cria um atalho. Agora, ao pedir para rodar o ambiente de desenvolvimento, o Node.js saberá que deve acionar o Nodemon apontando exatamente para o arquivo que liga o servidor.

---

5. **Escrita do Código (De Dentro para Fora)**
* A ordem ideal para programar as regras sem se perder é começar pelos dados e terminar na internet.
* **Primeiro o Service:** Escreva o array de dados e as funções contendo a lógica e as validações (listar, buscar, criar).
* **Depois o Controller:** Importe o Service e crie as funções que vão extrair dados de `req` e responder através do `res`.
* **Em seguida as Routes:** Importe o Controller e conecte os verbos HTTP (GET, POST) aos métodos do Controller.
* **Por fim o Index:** Importe o Express, ative o recebimento de JSON (`app.use(express.json())`), importe as rotas, defina a porta e ative o `app.listen()`.

---

6. **Execução e Testes**
* Com o código salvo, você inicializa o servidor.
* **Comando no terminal:** `npm run dev`
* **Explicação:** O terminal informará que o servidor está rodando. A partir deste momento, você pode abrir o navegador para testar requisições GET ou abrir o Thunder Client para testar requisições POST. Qualquer alteração nos arquivos `src` será aplicada instantaneamente pelo Nodemon.

---
