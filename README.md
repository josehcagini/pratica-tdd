Prova 1 Verificação e Validação Exercicio 7 

# Prática TDD com Stack Livre

Agora a empresa precisa de uma nova funcionalidade chamada `calculateInvoice(products, discount)` para calcular o valor final de uma fatura. A função deve seguir as regras abaixo:

## Regras da Função

### Entrada
- Uma lista de produtos, onde cada produto contém:
  - **`name` (string)**: Nome do produto.
  - **`price` (float)**: Preço unitário.
  - **`quantity` (int)**: Quantidade comprada.
- Um **`discount` (float)**: Percentual de desconto aplicável ao total da fatura.

### Saída
- O valor total da fatura após aplicar o desconto.

### Outras Regras
- Se o valor total da fatura antes do desconto for maior que R$ 1.000,00, o cliente ganha um desconto adicional de R$ 100,00.
- Se algum produto tiver preço ou quantidade negativa, a função deve lançar uma exceção (`InvalidProductException`).

## Tarefa (Entregáveis)

1. Escreva casos de teste para validar todas as regras acima antes de implementar a função (incluir em texto ou uma tabela no PDF).
2. Desenvolva a função `calculateInvoice` guiado pelos testes (incluir link GIT ou código no relatório).
3. Documente cada etapa do processo, incluindo (incluir via texto ou prints no relatório):
   - Os testes criados.
   - Alterações feitas no código em cada etapa.
   - Resultado final da execução dos testes.

# Relatório dos Entregáveis
Desenvolvido com TypeScript e Jest em NodeJs@20.13.1

1. Casos de testes desenvolvidos no ./src/service/calculateInvoice.test.ts
2. Função desenvolvida na ./src/service/calculateInvoice.ts
3. As etapas de desenvolvimento foram documentadas pelos commits do projeto
  1. Configurado o ambiente de desenvolvimento
  2. Desenvolvido os testes de todas as possíveis situações para a função calculateInvoice
  3. Desenvolvido a função em si calculateInvoice 
  4. Executado os testes para ver se a implementação passava em todos os testes escritos

![image](https://github.com/user-attachments/assets/f4dd74d7-f8e5-44cc-912b-38aaaac5deae)
