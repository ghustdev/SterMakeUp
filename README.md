# 💄 SterMakeUp - Landing Page

Uma landing page moderna e interativa para serviços de maquiagem profissional, desenvolvida com React, TypeScript e TailwindCSS.

## ✨ Características

- **Design Moderno**: Interface elegante com cores foscas (preto, dourado, rosa)
- **Totalmente Responsivo**: Mobile-first design
- **Animações Suaves**: Framer Motion para transições fluidas
- **Efeitos Visuais**: Partículas douradas, cursor personalizado, parallax
- **Performance**: Otimizado para velocidade e SEO
- **Acessibilidade**: Componentes acessíveis e semânticos

## 🚀 Tecnologias Utilizadas

- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **TailwindCSS** - Estilização
- **Framer Motion** - Animações
- **GSAP** - Animações avançadas
- **Locomotive Scroll** - Scroll suave
- **SwiperJS** - Carrossel de depoimentos
- **React TSParticles** - Partículas douradas
- **EmailJS** - Formulário de contato

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/stermakeup.git
cd stermakeup

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Linting
npm run lint
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── CustomCursor.tsx
│   └── Loading.tsx
├── hooks/              # Hooks personalizados
│   └── useScrollAnimation.ts
├── config/             # Configurações
│   └── emailjs.ts
├── assets/             # Recursos estáticos
│   └── images/
├── styles/             # Estilos globais
│   └── globals.css
├── App.tsx
└── main.tsx
```

## 🎨 Paleta de Cores

- **Preto Fosco**: `#1C1C1C` - Fundo principal
- **Dourado**: `#D4AF37` - Destaques e acentos
- **Rosa Claro**: `#F7B2B7` - Toques femininos
- **Cinza Chumbo**: `#2A2A2A` - Fundo secundário
- **Branco**: `#FFFFFF` - Texto principal

## 📱 Seções da Landing Page

1. **Header** - Navegação fixa com logo e menu
2. **Hero** - Seção principal com CTA
3. **About** - Sobre a maquiadora e estatísticas
4. **Services** - Serviços oferecidos
5. **Portfolio** - Galeria de trabalhos
6. **Testimonials** - Depoimentos de clientes
7. **Contact** - Formulário de contato
8. **Footer** - Links e informações

## 🔧 Configuração do EmailJS

1. Crie uma conta no [EmailJS](https://www.emailjs.com/)
2. Configure um serviço de email
3. Crie um template de email
4. Atualize as configurações em `src/config/emailjs.ts`:

```typescript
export const EMAILJS_CONFIG = {
  serviceId: 'seu_service_id',
  templateId: 'seu_template_id',
  publicKey: 'sua_public_key',
}
```

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Instale a CLI da Vercel
npm i -g vercel

# Deploy
vercel

# Ou conecte diretamente ao GitHub
```

### Netlify

```bash
# Build do projeto
npm run build

# Upload da pasta dist/
```

## 📈 Performance

- **Lighthouse Score**: 95+ em todas as métricas
- **Core Web Vitals**: Otimizado
- **SEO**: Meta tags e estrutura semântica
- **Acessibilidade**: WCAG 2.1 AA

## 🎯 Funcionalidades

- ✅ Design responsivo
- ✅ Animações suaves
- ✅ Cursor personalizado
- ✅ Partículas douradas
- ✅ Scroll suave
- ✅ Formulário de contato
- ✅ Carrossel de depoimentos
- ✅ Galeria de portfólio
- ✅ Navegação suave
- ✅ Loading screen
- ✅ SEO otimizado

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato:

- **Email**: contato@stermakeup.com
- **WhatsApp**: (11) 99999-9999

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**SterMakeUp** - Beleza que inspira confiança ✨