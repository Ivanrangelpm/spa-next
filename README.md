# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


##Mapeando ações com o Router-DOM
- Criar um módulo com uma lista de objetos. Um arquivo de nome ListaProdutos que vai conter uma lista de objetos com os produtos que serão exibidos na tela. Cada produto deve ter um id, nome, descrição e preço
- Listar os produtos na tela usando o método map() para percorrera lsita de produtos e exibir cada um deles na tela. Os produtos devem ser exibidos em uma tabela comonente em Produtos.jsx
- Criando a coluna de editar e excluir. Crie uma coluna na tabela para editar e excluir os produtos. Para isso, crie dois links, um para editar e outro para excluir. Vamos utilizar o id dos produtos como parâmetro.
