# Portal Mah Morando — Arquitetura

## Objetivo
Preparar o portal para crescer de uma página institucional para uma operação editorial completa, com matérias, colunistas, publicidade, vídeos, busca, autenticação e painel administrativo.

## Estrutura atual
- `index.html`: portal público.
- `styles.css`: identidade visual responsiva.
- `script.js`: navegação, busca e newsletter.
- `app-config.js`: configuração central para integrações futuras.
- `login.html`: tela de acesso preparada para autenticação real.

## Próxima etapa de backend
A versão atual continua hospedável como Static Site no Render. Recursos com dados e contas reais devem usar backend seguro.

Recomendação inicial:
1. Firebase Authentication ou Supabase Auth para login.
2. Firestore ou Supabase Database para matérias, usuários, colunistas e banners.
3. Storage para fotos, capas, logos e vídeos/imagens.
4. Papéis de acesso: `admin`, `editor`, `colunista` e, se necessário, `comercial`.
5. Regras de segurança no servidor/banco — nunca confiar apenas em botões ocultos no navegador.

## Módulos planejados
- Cadastro e edição de matérias.
- Rascunho, revisão, agendamento e publicação.
- Categorias e tags.
- Cadastro de colunistas e perfis.
- Upload de imagens com otimização.
- Área de banners/publicidade com período de exibição.
- Busca por título, categoria e autor.
- Newsletter.
- Vídeos/Mah Play.
- SEO por matéria.
- Dashboard com visualizações e conteúdo mais acessado.
- Auditoria básica de alterações.

## Segurança
- Não armazenar senha em arquivos JavaScript ou HTML.
- Não expor chaves administrativas no frontend.
- Validar permissões no backend/banco.
- Manter backups/exportações periódicas.
- Exigir autenticação para rotas administrativas.
- Aplicar política de mínimo privilégio para cada perfil.

## Escalabilidade
O frontend pode continuar no Render. Banco, autenticação e storage podem ser serviços gerenciados. Essa separação permite aumentar tráfego e número de colunistas sem reconstruir todo o portal.
