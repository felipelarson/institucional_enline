# Institucional Enline

Um site institucional moderno desenvolvido com Next.js, TypeScript e Chakra UI, focado em apresentar informações corporativas de forma elegante e responsiva.

## 🚀 Tecnologias

- **Next.js 13.4.3** - Framework React para produção
- **TypeScript 5.0.4** - Tipagem estática para JavaScript
- **Chakra UI 2.6.1** - Biblioteca de componentes UI
- **Framer Motion** - Animações fluidas
- **React Icons** - Ícones vetoriais
- **ESLint + Prettier** - Formatação e qualidade de código

## 📁 Estrutura do Projeto

```bash
├── src/
│   ├── assets/          # Assets estáticos
│   │   ├── img/         # Imagens
│   │   ├── svg/         # Ícones SVG
│   │   └── gif/         # Animações
│   ├── components/      # Componentes React
│   │   ├── Common/      # Componentes reutilizáveis
│   │   ├── Company/     # Componentes da empresa
│   │   └── Customer/    # Componentes do cliente
│   ├── pages/           # Páginas da aplicação
│   │   ├── careers/     # Página de carreiras
│   │   ├── company/     # Páginas da empresa
│   │   └── customer/    # Páginas do cliente
│   └── styles/          # Estilos globais
├── public/              # Arquivos públicos
│   ├── pdf/            # Documentos PDF
│   └── gif/            # Vídeos de fundo
└── ...
```

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone https://github.com/felipelarson/institucional_enline.git
cd institucional_enline
```

2. Instale as dependências:
```bash
yarn install
```

## 🚀 Execução

### Desenvolvimento
```bash
yarn dev
```
Acesse [http://localhost:3000](http://localhost:3000) para ver a aplicação.

### Produção
```bash
# Build da aplicação
yarn build

# Iniciar servidor de produção
yarn start
```

### Linting
```bash
yarn lint
```

## 📱 Funcionalidades

- **Design Responsivo** - Adaptável a diferentes tamanhos de tela
- **Animações Suaves** - Implementadas com Framer Motion
- **Componentes Modulares** - Arquitetura baseada em componentes reutilizáveis
- **TypeScript** - Tipagem estática para maior confiabilidade
- **SEO Otimizado** - Configurado para mecanismos de busca

## 🎨 Componentes Principais

- **Common** - Componentes base reutilizáveis
- **Company** - Seções específicas da empresa
- **Customer** - Componentes voltados ao cliente
- **Layouts** - Estruturas de página

## 📄 Páginas

- **Home** - Página inicial
- **Company** - Informações da empresa
- **Careers** - Oportunidades de carreira
- **Customer** - Área do cliente

## 🔧 Configuração

O projeto utiliza configurações personalizadas:
- **Next.js Config** - Otimizações e extensões de página customizadas
- **TypeScript** - Configuração strict para melhor tipagem
- **ESLint + Prettier** - Padrões de código consistentes

## 📝 Scripts Disponíveis

- `yarn dev` - Inicia o servidor de desenvolvimento
- `yarn build` - Gera build de produção
- `yarn start` - Inicia servidor de produção
- `yarn lint` - Executa verificação de código

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request
