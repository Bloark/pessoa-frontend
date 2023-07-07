## README - Componentes de Frontend para Interação com API

Este repositório contém componentes de frontend desenvolvidos para interagir com a API criada. Os principais componentes são o formulário de criação de pessoa e o formulário de atualização de pessoa.

### Funcionalidades

1. Formulário de Criação de Pessoa: Permite criar uma nova pessoa enviando os dados para a API.
   - Campos obrigatórios: nome, rua, cidade, estado, telefone, email, cpf.
   - Validação de campos: cada campo é validado de acordo com o tipo de valor esperado.
   - Exibição de alertas: exibe um alerta de sucesso ou erro após a submissão do formulário.
2. Formulário de Atualização de Pessoa: Permite atualizar os dados de uma pessoa existente enviando os dados para a API.
   - Campos editáveis: todos os campos podem ser editados, exceto o CPF.

### Tecnologias Utilizadas

- React: biblioteca JavaScript para criação de interfaces de usuário.
- Axios: biblioteca JavaScript para realizar requisições HTTP.
- SCSS: pré-processador CSS para estilização dos componentes.
- Jest e Enzyme: bibliotecas JavaScript para testes unitários dos componentes.

### Instruções de Uso

1. Clone o repositório para sua máquina local.
2. Instale as dependências do projeto executando o comando `npm install` ou `yarn install`.
3. Inicie o servidor local executando o comando `npm start` ou `yarn start`.
4. Acesse a aplicação no navegador pelo endereço `http://localhost:3000`.

### Estrutura do Projeto

- `src/components/PessoaForm`: contém o componente de formulário de criação de pessoa.
- `src/components/PessoaUpdateForm`: contém o componente de formulário de atualização de pessoa.
- `src/components/Alerta`: contém o componente de alerta para exibição de mensagens.
- `src/components/NavBar`: contém o componente de barra de navegação.
- `src/api/pessoaApi.js`: contém as funções para realizar requisições à API de pessoas.
- `src/styles`: contém os arquivos de estilos SCSS para os componentes.
- `src/tests`: contém os arquivos de testes unitários dos componentes.

### Testes

- Para executar os testes unitários dos componentes, execute o comando `npm test` ou `yarn test`.

### Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades. Abra uma issue para discutir suas ideias e envie um pull request com suas alterações.

### Autor

Este projeto foi desenvolvido por [seu nome]. Entre em contato se tiver alguma dúvida ou sugestão.

### Licença

Este projeto está licenciado sob a [licença].