# 🛍️ Frontend Challenge - Fake Store CRUD

Este é um projeto desenvolvido como parte do **Desafio Front-End** para criar um CRUD completo de produtos, utilizando a API pública [Fake Store API](https://fakestoreapi.com/). O projeto foi estruturado como um **monorepo** com **Turborepo**, seguindo boas práticas de organização, código limpo e princípios **SOLID**.

---

## 🚀 Tecnologias Utilizadas

- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **UI:** Tailwind CSS + Radix Primitives
- **Gerenciamento de Pacotes:** PNPM + Turborepo
- **Gerenciamento de Estado:** React Query
- **Validação de Formulários:** Zod
- **Testes:** Jest
- **Storybook:** Documentação de componentes
- **Deploy:** Vercel

---

## 📁 Estrutura do Monorepo

O projeto é organizado como um **monorepo** usando **Turborepo**, permitindo o compartilhamento eficiente de código entre pacotes.

```
📦 frontend-challenge
├── apps
│   ├── web              # Aplicação Next.js (Front-end principal)
│   ├── storybook        # Documentação de componentes
│
├── packages
│   ├── ui               # Componentes reutilizáveis (Button, Table, Input, FormFields, etc.)
│   ├── tokens           # Design Tokens
│
├── Config               # Configurações globais (eslint, prettier, tsconfig, etc.)
│
├── .turbo               # Cache do Turborepo
├── .github              # Configurações do GitHub (CI/CD, PR templates, etc.)
├── turbo.json           # Configuração do Turborepo
├── package.json         # Dependências do monorepo
└── README.md            # Documentação do projeto
```

---

## ⚡️ Funcionalidades Implementadas

✅ **Listagem de produtos paginada**  
✅ **Filtro por categoria**  
✅ **Ordenação por preço**  
✅ **Destaque para produtos com avaliação acima de 4.5**  
✅ **Validação no nome dos produtos (máx. 30 caracteres)**  
✅ **Edição de produtos sem alterar categoria**  
✅ **Confirmação antes da exclusão de um produto**  
✅ **Componentes documentados no Storybook**

---

## 🛠️ Como Rodar o Projeto

### 🔹 **1. Clonar o Repositório**

```sh
git clone https://github.com/JoaoArouca/frontend-challenge.git
cd frontend-challenge
```

### 🔹 **2. Instalar Dependências**

```sh
pnpm install
```

### 🔹 **3. Rodar a Aplicação**

```sh
pnpm dev
```

A aplicação estará disponível em **http://localhost:3000**.

### 🔹 **4. Rodar o Storybook**

```sh
pnpm storybook
```

Acesse **http://localhost:6006** para visualizar os componentes documentados.

---

## 🧪 Rodando os Testes

Para garantir a qualidade do código, o projeto inclui **testes unitários com Jest**. Para rodar os testes, utilize:

```sh
pnpm test
```

---

## 🚀 Deploy

O projeto também pode ser acessado pelo deploy na [Vercel](https://frontend-challenge-web.vercel.app/):

---

## 🎨 Design & UI

A interface foi construída com **Tailwind CSS + Radix Primitives**, garantindo um design responsivo e acessível. Além disso:

- O botão de exclusão possui um **diálogo de confirmação** para evitar exclusões acidentais.
- **Feedbacks visuais** foram adicionados para indicar interações (hover, skeletons, etc.).
- A navegação é fluida e os estados de carregamento foram bem tratados.

---

## 📩 Contato

Caso tenha dúvidas ou sugestões, fique à vontade para abrir uma **issue** ou entrar em contato:

📧 Email: [jarouca21@gmail.com](mailto:jarouca21@gmail.com)  
🐙 GitHub: [JoaoArouca](https://github.com/JoaoArouca)

🚀 **Obrigado por conferir o projeto!**
