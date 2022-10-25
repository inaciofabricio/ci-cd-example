# NextJS

### Iniciando o Git
```bash
git init
```

### Inicialiando projeto / criando arquivo package.json
```bash
npm init -y
# ou
yarn init -y
```

### Instalando react e next
```bash
npm install next react react-dom
# ou
yarn add next react react-dom
```

### Incluindo os scripts do next no package.json
```json
# linux
"scripts": {
  "dev": "next dev",
  "build": "rm -rf build && next export mv ./out ./build",
  "start": "next start",
  "lint": "next lint"
}

# windowns
"scripts": {
    "dev": "next dev",
    "build": "next build && next export",
    "start": "next start",
    "lint": "next lint"
  },
```

### Crie uma pasta pages na raiz do projeto e duas paginas de exemplo
```
- pages
  - index.js
  - sobre.js
```

### Dentro do index.js monte o codigo da pagina
```javascript
export default function HomeScreen() {
    return (
        <div>
            <h1>Página Inicial</h1>
        </div>
    )
}
```

### Dentro do sobre.js monte o codigo da pagina
```javascript
export default function SobreScreen() {
    return (
        <div>
            <h1>Sobre</h1>
        </div>
    )
}
```

### Criando o arquivo gitignore
```bash
npx gitignore node
```

### Testando o projeto 
```bash
npm run dev
# ou 
yarn dev
```

### Acessando as páginas 
```bash
# home
http://localhost:3000

# sobre
http://localhost:3000/sobre
```

### Montando o build do projeto
```bash
npm run build
# ou 
yarn build
```

### Editando o gitignore para nao versionar a pasta build
```
# Nosso Projeto
build/
```
