# Tema da Identidade Padrão de Comunicação Digital do Governo Federal para Joomla

A proposta deste repositório foi tornar o tema para Joomla contido no projeto [joomla-3.x](https://github.com/joomlagovbr/joomla-3.x) um repositório indepente de uma versão do Joomla e dar suporte a atualização automática do mesmo.

Como utilizar:

 * Baixar o arquivo zip da pasta dist do repositário e instalar no Joomla em Extensões > Gerenciar > Instalar.
 * Na área administrativa do Joomla ir em Extensões > Temas > Estilos e selecionar "portalidentidadepadrao - Padrão" como padrão.
 * Ainda em Extensões > Temas > Estilos e editar "portalidentidadepadrao - Padrão" e realizar as configurações necessárias.

### Configuração para desenvolvimento
O processo de "build" foi todo automatizadado independente de plataforma utilizando a ferramenta [Gulp](http://gulpjs.com/):

#### Pré-requisitos
   * Instalar o [Nodejs](https://nodejs.org)
   * Instalar de forma global o GULP
        * `` npm install --global gulp-cli `` para instalar o [gulpjs](https://gulpjs.com/);
   - Após a instalação, um terminal, dentro da pasta raiz do projeto execute o comando:
        * `` npm install `` para instalar as dependências;

#### Processo de build para liberação de novas versões
	* Editar o arquivo package.json e alterar o atributo "version";
	* Abra um terminal na raiz do projeto e execute: `` gulp build ``. Com isso será gerado um build funcional na pasta build que pode ser movido ou lincado para uma instalação de Joomla para desenvolvimento.
	* Para distribuir faça o envio dos arquivos gerados na pasta dist para o repositório no github. Com isso as instalações de Joomla que utilizarem o tema identificarão a nova versão e poderão ser atualizadas utilizando Extensões > Gerenciar > Atualizar.

### Referências

 * [Portal padrão em CMS Joomla 3.7.4](https://github.com/joomlagovbr/joomla-3.x) fork em 26/10/2017
 * [Identidade Padrão de Comunicação Digital do Governo Federal](http://www.secom.gov.br/atuacao/comunicacao-digital/identidade-digital-1/identidade-digital)
