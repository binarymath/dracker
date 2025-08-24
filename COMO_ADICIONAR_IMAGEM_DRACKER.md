# 🐉 Como Adicionar a Imagem do Dracker

## 📁 **Método 1: Pasta Public (Mais Fácil)**

1. **Salve sua imagem** com um dos nomes:
   - `dracker.png`
   - `dracker.jpg` 
   - `dracker.jpeg`
   - `dracker.webp`

2. **Coloque a imagem** na pasta:
   ```
   C:\Users\arthg\OneDrive\Área de Trabalho\Dracker\public\
   ```

3. **Ative a imagem** no código:
   - Abra: `src\app\page.tsx`
   - Linha 7: Mude `const hasImage = false;` para `const hasImage = true;`
   - Linha 8: Confirme se o nome está correto: `const imagePath = "/dracker.png";`

## 🔗 **Método 2: URL Externa**

Se sua imagem está online (Google Drive, Imgur, etc.):

1. **Copie o link direto** da imagem
2. **Substitua** na linha 8: `const imagePath = "https://seu-link-aqui.com/dracker.png";`
3. **Ative**: `const hasImage = true;`

## 📤 **Método 3: Arrastar e Soltar no VS Code**

1. **Abra** a pasta `public` no VS Code
2. **Arraste** sua imagem para dentro da pasta
3. **Renomeie** para `dracker.png` (ou ajuste o nome no código)
4. **Ative** no código: `hasImage = true`

## ⚙️ **Configurações Recomendadas da Imagem:**

- **Formato**: PNG (com fundo transparente) ou JPG
- **Tamanho**: 400x400 pixels ou maior
- **Qualidade**: Alta resolução
- **Fundo**: Transparente (PNG) para melhor integração

## 🎨 **Dicas de Design:**

- **Fundo transparente** fica melhor com o design do site
- **Imagem quadrada** funciona melhor nos círculos
- **Alta qualidade** para não pixelizar ao redimensionar
- **Cores vibrantes** para destacar na floresta

## 🔧 **Após Adicionar a Imagem:**

O site irá automaticamente:
- ✅ Usar sua imagem real no lugar do emoji 🐉
- ✅ Aplicar as animações nos elementos ao redor
- ✅ Manter a responsividade em todos os dispositivos
- ✅ Otimizar o carregamento com Next.js

## 📋 **Checklist:**

- [ ] Imagem salva na pasta `public`
- [ ] Nome correto no código (`imagePath`)
- [ ] `hasImage = true` ativado
- [ ] Testado no navegador (http://localhost:3001)

---

**🌟 Depois de adicionar, o Dracker vai aparecer com sua imagem real em todo o site!**
