# Fundamentos – Expo + React Native

Projeto criado com `create-expo-app` e `expo-router`, reunindo exemplos de fundamentos do React Native (componentes, props, navegação, estado, formulários, AsyncStorage) e pequenos exercícios (Mega-Sena, lista de tarefas etc.).

## Requisitos
- Node 18+ e npm
- Expo CLI (`npx expo`) e emulador Android/iOS configurado, ou Expo Go

## Instalação e execução
```bash
npm install          # instala dependências
npm start            # abre o menu do Expo
# ou
npm run android      # inicia no emulador Android
npm run ios          # inicia no simulador iOS (macOS)
npm run web          # versão web
```

## Estrutura principal
- `app/` – rotas file-based do Expo Router (`_layout.tsx` define o stack)
- `components/` – componentes de UI e estado (básicos, formulários, tarefas)
- `hooks/` – hooks customizados (`useMegaSena`, `useTarefas`, `useLocalStorage`)
- `services/` – regras de negócio (Mega-Sena, ordenação)
- `data/` – modelos e dados de exemplo (alunos, tarefas)
- `styles/` – utilitários de estilo compartilhados

## Telas/rotas de exemplo (app/)
- `/` – menu inicial com links para todos os exemplos.
- `/primeiro`, `/segundo` – textos simples com estilos utilitários.
- `/evento-1` – demonstração de evento `Pressable` com alerta.
- `/condicional` – renderização condicional via componente `<If>`.
- `/filhos` – composição de componentes filhos (`<Pai>`).
- `/component` – diferentes exports de componentes (padrão/alternativos).
- `/propriedade` – passagem de props (`<MinMax>`).
- `/lista` – lista de alunos aprovados renderizada em `ScrollView`.
- `/parImpar` – leitura de parâmetro da rota e checagem par/ímpar; há um input/navegação em `ButtonSomaNumeros`.
- `/contador` – contador com `useState` e ícones `AntDesign`.
- `/formulario` – formulário controlado (nome, email, senha) com validação (`ValidateFormUser`).
- `/megaSena` – gera números únicos (6–20) para a Mega-Sena, ordenados antes de exibir.
- `/tarefas` – CRUD simples de tarefas com AsyncStorage: adicionar, concluir, restaurar e excluir.

## Destaques de lógica
- **Mega-Sena**: `services/megaSenaService.ts` valida a quantidade (6–20), evita números repetidos; `hooks/index.ts` ordena (`services/OrderCresc.tsx`) e mostra os resultados.
- **Tarefas**: `hooks/useTarefas.ts` persiste em AsyncStorage (`useLocalStorage`), suporta marcar como concluída, restaurar e remover; UI em `components/tarefas/`.
- **Formulário**: `ValidateFormUser` garante campos obrigatórios e senha com 6+ caracteres; inputs reutilizáveis em `components/state/`.
- **Renderização condicional**: componente `components/shared/if.tsx`.
- **Componentes reutilizáveis**: botão (`ComponentsReutilizaveis/button`) e toast (`ComponentsReutilizaveis/toast`).

## Scripts npm
- `npm start` / `npm run android` / `npm run ios` / `npm run web` – iniciar o app.
- `npm run lint` – checar lint com `eslint-config-expo`.
- `npm run reset-project` – limpar o app para um template em branco (move starter para `app-example`).

## Observações
- O projeto usa TypeScript e `expo-router` (pilha configurada em `app/_layout.tsx`).
- `@react-native-async-storage/async-storage` é usado para persistir tarefas localmente.
- Ajuste textos/acentuação conforme necessário: alguns caracteres vieram com encoding incorreto no código-fonte.
