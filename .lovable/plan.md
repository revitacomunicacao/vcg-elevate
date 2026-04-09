
# Novo Site VCG Advocacia

## Paleta de Cores (baseada no site atual)
- **Primária**: Bordô/vinho (#8B1A2B) — cor principal do logo e destaques
- **Secundária**: Dourado escuro (#B8860B) — detalhes e acentos
- **Fundo**: Branco (#FFFFFF) e cinza claro (#F5F5F5)
- **Texto**: Cinza escuro (#333333)
- Tipografia elegante e serifada nos títulos (Playfair Display), sans-serif no corpo (Inter)

## Estrutura de Pastas
Cada página terá sua própria pasta de componentes:
```
src/pages/Home/          → Index.tsx + componentes (Hero, QuemSomos, Atuacao, ProvaSocial, Footer)
src/pages/Atuacao/       → Civil.tsx, Familia.tsx, Sucessoes.tsx
src/components/layout/   → Navbar.tsx, Footer.tsx (compartilhados)
```

## Página Home
1. **Hero** — Imagem de fundo do escritório com overlay escuro, título "Advocacia Vinicius Carneiro Gonçalves", subtítulo com a proposta de valor
2. **Quem Somos** — Texto institucional (fundado em 2000, escritório boutique, localização em Uberaba/MG, valores)
3. **Nossa Equipe** — Cards com foto placeholder, nome e cargo (Vinicius Carneiro — Sócio Proprietário, Isabelle Araujo — Advogada)
4. **Áreas de Atuação** — 3 cards (Civil, Família, Sucessões) com ícone, descrição curta e botão "Saiba mais" linkando para página interna
5. **Prova Social** — Seção com contadores animados: +24 anos de atuação, +500 clientes atendidos, +1.200 casos resolvidos, 98% de satisfação (números fictícios)
6. **Footer** — Contato, endereço, WhatsApp, OAB nº 5217

## Páginas Internas de Atuação
- **/atuacao/civil** — Detalhes sobre Direito Civil
- **/atuacao/familia** — Detalhes sobre Direito de Família
- **/atuacao/sucessoes** — Detalhes sobre Direito de Sucessões

Cada página terá: hero com título, texto explicativo, exemplos de serviços, e CTA para contato via WhatsApp.

## Navegação
- Navbar fixa no topo com logo, links (Início, Quem Somos, Equipe, Atuação, Contato) e botão WhatsApp
- Menu hamburger no mobile
- Scroll suave para seções da home
