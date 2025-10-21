# 🚀 Instruções de Instalação - SterMakeUp

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**
- **Git**

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/stermakeup.git
cd stermakeup
```

### 2. Instale as dependências

```bash
# Usando npm
npm install

# Ou usando yarn
yarn install
```

### 3. Configure as variáveis de ambiente (opcional)

Crie um arquivo `.env.local` na raiz do projeto:

```env
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

## 🛠️ Scripts Disponíveis

### Desenvolvimento

```bash
# Inicia o servidor de desenvolvimento
npm run dev

# Ou
yarn dev
```

O site estará disponível em `http://localhost:3000`

### Build para Produção

```bash
# Cria o build otimizado
npm run build

# Ou
yarn build
```

### Preview do Build

```bash
# Visualiza o build localmente
npm run preview

# Ou
yarn preview
```

### Linting

```bash
# Executa o linter
npm run lint

# Ou
yarn lint
```

## 🔧 Configuração do EmailJS

Para o formulário de contato funcionar:

1. Acesse [EmailJS](https://www.emailjs.com/)
2. Crie uma conta gratuita
3. Configure um serviço de email (Gmail, Outlook, etc.)
4. Crie um template de email
5. Atualize as configurações em `src/config/emailjs.ts`:

```typescript
export const EMAILJS_CONFIG = {
  serviceId: 'seu_service_id_aqui',
  templateId: 'seu_template_id_aqui',
  publicKey: 'sua_public_key_aqui',
}
```

## 🎨 Personalização

### Cores

As cores principais estão definidas em `tailwind.config.js`:

```javascript
colors: {
  gold: "#D4AF37",        // Dourado
  lightpink: "#F7B2B7",   // Rosa claro
  matteblack: "#1C1C1C",  // Preto fosco
  darkgray: "#2A2A2A",    // Cinza chumbo
}
```

### Fontes

As fontes estão configuradas no `index.html` e `tailwind.config.js`:

- **Títulos**: Playfair Display
- **Texto**: Poppins

### Imagens

Substitua as imagens placeholder em `src/assets/images/`:

- `hero-model.jpg` - Imagem principal
- `about-makeup-artist.jpg` - Foto da maquiadora
- `portfolio-*.jpg` - Fotos do portfólio

## 🚀 Deploy

### Vercel (Recomendado)

1. Instale a CLI da Vercel:
```bash
npm i -g vercel
```

2. Faça o deploy:
```bash
vercel
```

3. Ou conecte diretamente ao GitHub no dashboard da Vercel

### Netlify

1. Build do projeto:
```bash
npm run build
```

2. Upload da pasta `dist/` para o Netlify

### GitHub Pages

1. Configure o GitHub Actions
2. O build será feito automaticamente
3. O site ficará disponível em `https://seu-usuario.github.io/stermakeup`

## 📱 Testes

### Responsividade

Teste em diferentes dispositivos:

- **Mobile**: 375px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Performance

Execute o Lighthouse para verificar:

- Performance
- Acessibilidade
- SEO
- Boas Práticas

## 🐛 Solução de Problemas

### Erro de dependências

```bash
# Limpe o cache
npm cache clean --force

# Reinstale as dependências
rm -rf node_modules package-lock.json
npm install
```

### Erro de TypeScript

```bash
# Verifique os tipos
npm run build
```

### Erro de TailwindCSS

```bash
# Recompile os estilos
npm run dev
```

## 📞 Suporte

Se encontrar problemas:

1. Verifique se todas as dependências estão instaladas
2. Confirme se o Node.js está na versão correta
3. Verifique os logs do console
4. Consulte a documentação do React/Vite

## 🎯 Próximos Passos

Após a instalação:

1. ✅ Configure o EmailJS
2. ✅ Substitua as imagens placeholder
3. ✅ Personalize o conteúdo
4. ✅ Teste em diferentes dispositivos
5. ✅ Faça o deploy

---

**SterMakeUp** - Beleza que inspira confiança ✨


