# Documentação da Classe Apex `DW_DocusignGetStatusSignResponseTemplate`

## Descrição
A classe `DW_DocusignGetStatusSignResponseTemplate` é utilizada para armazenar as informações de resposta de status do envelope de um documento Docusign na Salesforce.

## Implementação
```apex
public with sharing class DW_DocusignGetStatusSignResponseTemplate {
        public String envelopeId;
    public String status;
}
```

## Variáveis

### `envelopeId`
- Tipo: `String`
- Descrição: Armazena o identificador do envelope Docusign.

### `status`
- Tipo: `String`
- Descrição: Armazena o status do envelope Docusign.

## Descrição para leigos
A classe `DW_DocusignGetStatusSignResponseTemplate` é como uma caixa que guarda duas informações importantes sobre documentos Docusign: o identificador do envelope do documento e o status desse envelope. 

O identificador do envelope é como um código que é único para cada envelope Docusign, ajudando a identificar e diferenciar os envelopes uns dos outros. O status do envelope nos diz o estado atual do envelope, como se ele foi enviado, recebido, aberto, assinado, etc.
# Documentação da Classe Apex DW_AvaliacaoGetAccessTokenRespTemplate

## Descrição

A classe `DW_AvaliacaoGetAccessTokenRespTemplate` é responsável por armazenar a resposta do token de acesso e seu tempo de expiração.

## Implementação

```apex
public with sharing class DW_AvaliacaoGetAccessTokenRespTemplate {
    \tpublic String token;\t
\tpublic Integer expiration;\t
}
```

## Variáveis

### `token`

- Tipo: `String`
- Descrição: Armazena o token de acesso.

### `expiration`

- Tipo: `Integer`
- Descrição: Armazena o tempo de expiração do token de acesso.

## Métodos

A classe `DW_AvaliacaoGetAccessTokenRespTemplate` não possui métodos definidos.

### Explicação para Leigos

Esta classe é como uma caixa que guarda duas informações: um "token", que é tipo uma chave especial para acessar alguns recursos, e um tempo de "expiração", que diz quanto tempo essa chave vai funcionar antes de precisarmos de uma nova.
# Documentação da Classe Apex DW_AvaliacaoGetAccessTokenReqTemplate

## Descrição
A classe `DW_AvaliacaoGetAccessTokenReqTemplate` é responsável por manter as informações de login necessárias para acessar e interagir com um serviço externo ou recurso protegido.

## Implementação
```apex
public with sharing class DW_AvaliacaoGetAccessTokenReqTemplate {
        public String login;
    public String password;
}
```

## Variáveis

### `login`
- Tipo: `String`
- Descrição: Armazena o nome de usuário ou identificador de login necessário para autenticar em um serviço externo ou recurso protegido.

### `password`
- Tipo: `String`
- Descrição: Armazena a senha correspondente ao nome de usuário ou identificador de login para autenticar em um serviço externo ou recurso protegido.

## Descrição para leigos

Esta classe é como uma chave para um armário. Ela contém duas informações principais: o nome de usuário (`login`) e a senha (`password`). Essas informações são usadas para acessar e interagir com serviços ou recursos que necessitam de segurança, como um website ou aplicativo que requer um login.
# Documentação da Classe de Teste Apex Pricebook2UtilTest

## Descrição

A classe `Pricebook2UtilTest` é responsável por realizar testes unitários na classe `Pricebook2Util` no Salesforce.

## Implementação

```apex
@isTest
public class Pricebook2UtilTest {
    
    @isTest
    static void getStandardPricebook2IdTest(){
            
        Assert.isNotNull(Pricebook2Util.getStandardPricebook2Id(), \'Era esperado que retornasse o Pricebook2Id Padrão\');
    }
}
```

## Métodos

### `getStandardPricebook2IdTest()`

Método de teste utilizado para verificar se o método `getStandardPricebook2Id()` na classe `Pricebook2Util` está retornando um valor não nulo.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.

## De maneira leiga

A classe `Pricebook2UtilTest` é como um inspetor de qualidade em uma fábrica, garantindo que a classe `Pricebook2Util` está fazendo seu trabalho corretamente. O método `getStandardPricebook2IdTest()` é um teste específico que verifica se a classe `Pricebook2Util` é capaz de retornar um identificador válido para um Pricebook2 padrão. Se esse identificador não for encontrado, o teste falhará, indicando que algo está errado com a forma como a classe `Pricebook2Util` está funcionando.
# Documentação da Classe Apex DW_IniciarFaturamentoResponseTemplate

## Descrição

A classe `DW_IniciarFaturamentoResponseTemplate` é responsável por moldar a resposta a ser enviada após o início do processo de faturamento no Salesforce.

## Implementação

```apex
public class DW_IniciarFaturamentoResponseTemplate {
        public String message;
    public Integer idSolicitacao;
}
```

## Variáveis

### `message`
- Tipo: `String`
- Descrição: Armazena a mensagem de resposta após o início do processo de faturamento. Esta mensagem pode incluir detalhes sobre o sucesso ou falha do processo.

### `idSolicitacao`
- Tipo: `Integer`
- Descrição: Armazena o identificador da solicitação de faturamento. Este é um valor único que pode ser usado para rastrear o status de uma solicitação específica.

## Métodos

A classe `DW_IniciarFaturamentoResponseTemplate` não possui métodos. As variáveis `message` e `idSolicitacao` podem ser acessadas diretamente.

## Em termos leigos

A classe `DW_IniciarFaturamentoResponseTemplate` é como um modelo para as respostas que são enviadas após o início do processo de faturamento. Ela contém uma mensagem que pode dizer se o processo foi bem-sucedido ou não, e um identificador único para cada solicitação de faturamento. Isso pode ser útil para encontrar informações sobre uma solicitação específica mais tarde.
# Documentação da Classe Apex CommunitiesSelfRegConfirmControllerTest

## Descrição

A classe `CommunitiesSelfRegConfirmControllerTest` é uma classe de teste responsável por testar o funcionamento correto do controlador de página `CommunitiesSelfRegConfirmController`. Esta classe de teste verifica se o controlador de página leva o usuário para a página inicial correta, com base nas credenciais fornecidas ou na falta delas.

## Implementação

```apex
/**
 * An apex page controller that takes the user to the right start page based on credentials or lack thereof
 */
@IsTest public with sharing class CommunitiesSelfRegConfirmControllerTest {
        @IsTest(SeeAllData=true) public static void testCommunitiesSelfRegConfirmController() {
            // Instantiate a new controller with all parameters in the page
        CommunitiesSelfRegConfirmController controller = new CommunitiesSelfRegConfirmController();
      }    
}
```

## Métodos

### `testCommunitiesSelfRegConfirmController()`

Este é um método de teste utilizado para testar o controlador `CommunitiesSelfRegConfirmController`. Ele instância um novo controlador e não recebe nem retorna nenhum parâmetro.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.

## Variáveis

Nenhuma variável é declarada nesta classe de teste.
# Documentação da Classe Apex SiteLoginController

## Descrição

A classe `SiteLoginController` é responsável por expor a funcionalidade de login do site no Salesforce.

## Implementação

```apex
global with sharing class SiteLoginController {
        global String username {get; set;}
    global String password {get; set;}

    global PageReference login() {
            String startUrl = System.currentPageReference().getParameters().get(\'startURL\');
        return Site.login(username, password, startUrl);
    }
    
   \tglobal SiteLoginController () {}
}
```

## Métodos

### `login()`

Método utilizado para realizar o login no site. Ele extrai o parâmetro \'startURL\' da página atual e passa junto com o nome de usuário e senha para o método de login do Site.

#### Parâmetros

- Nenhum.

#### Retorno

- `PageReference`: Um objeto PageReference que redireciona para a URL inicial após o login bem-sucedido.

### `SiteLoginController()`

Construtor padrão da classe `SiteLoginController`.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.

## Variáveis

### `username`

- Tipo: `String`
- Descrição: Armazena o nome de usuário para o login.

### `password`

- Tipo: `String`
- Descrição: Armazena a senha para o login.
# Documentação da Classe Apex CommunitiesLandingControllerTest

## Descrição

A classe `CommunitiesLandingControllerTest` é um teste que verifica se o usuário está sendo redirecionado para a página inicial correta com base em suas credenciais ou falta delas no Salesforce.

## Implementação

```apex
@IsTest 
public with sharing class CommunitiesLandingControllerTest {
        @IsTest(SeeAllData=true) 
    public static void testCommunitiesLandingController() {
            // Instantiate a new controller with all parameters in the page
        CommunitiesLandingController controller = new CommunitiesLandingController();
        PageReference pageRef = controller.forwardToStartPage();
        //PageRef is either null or an empty object in test context
        if(pageRef != null){
                String url = pageRef.getUrl();
            if(url != null){
                    System.assertEquals(true, String.isEmpty(url));
                //show up in perforce
            }
        }
    }
}
```

## Métodos

### `testCommunitiesLandingController()`

Método de teste utilizado para verificar se a página inicial está sendo carregada corretamente com base nas credenciais do usuário.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum. O método verifica se a URL da página inicial é nula ou vazia, e se afirmativo, passa a asserção.

## Variáveis

Não há variáveis de instância nesta classe.

## Em linguagem simples

Essa classe de teste garante que os usuários são direcionados para a página inicial correta no Salesforce, com base em suas credenciais. Ele cria um novo controlador, acessa a página inicial e verifica se a URL da página está vazia, o que é esperado no contexto de teste. Se tudo correr como esperado, o teste passa.
# Documentação da Classe de Teste Apex `MyProfilePageControllerTest`
  
## Descrição
  
A classe `MyProfilePageControllerTest` é responsável por realizar testes unitários na funcionalidade de atualização de detalhes de um usuário do portal. Usuários convidados nunca têm acesso a esta página.
  
## Implementação
  
```apex
@IsTest public with sharing class MyProfilePageControllerTest {
    
    @IsTest(SeeAllData=true) static void testSave() {
            //...
    }
}
```
  
## Métodos
  
### `testSave()`
  
Método de teste utilizado para verificar a funcionalidade de salvar a atualização de detalhes de um usuário do portal.
  
#### Parâmetros
  
- Nenhum.
  
#### Retorno
  
- Nenhum.
  
## Variáveis
  
Nenhuma variável de instância é definida nessa classe de teste.

## Explicação Leiga

Imagine que você tem uma página onde os usuários do portal (como clientes) podem atualizar seus detalhes, como nome, e-mail, telefone, endereço, etc. A classe `MyProfilePageControllerTest` é como um inspetor de qualidade que verifica se essa funcionalidade está funcionando corretamente.

Ela faz isso simulando a ação de um usuário atualizando seus detalhes e verifica se as atualizações são salvas corretamente. Também verifica se os usuários podem alternar entre modos de edição e visualização, e se podem mudar a senha. É como se estivesse garantindo que os usuários tenham uma experiência suave e livre de erros ao atualizar seus detalhes.
# Documentação da Classe Apex ChangePasswordController

## Descrição
A classe `ChangePasswordController` é responsável por manipular funcionalidades de alteração de senha no Salesforce.

## Implementação

```apex
public with sharing class ChangePasswordController {
       public String oldPassword {get; set;}
   public String newPassword {get; set;}
   public String verifyNewPassword {get; set;}        

   public PageReference changePassword() {
          return Site.changePassword(newPassword, verifyNewPassword, oldpassword);    
   }     

   public ChangePasswordController() {}
}
```

## Métodos

### `changePassword()`
Método utilizado para alterar a senha de um usuário.

#### Parâmetros
- Nenhum.

#### Retorno
- `PageReference`: Referência à página que será redirecionada após a alteração da senha.

## Variáveis

### `oldPassword`
- Tipo: `String`
- Descrição: Armazena a senha atual do usuário.

### `newPassword`
- Tipo: `String`
- Descrição: Armazena a nova senha que o usuário deseja utilizar.

### `verifyNewPassword`
- Tipo: `String`
- Descrição: Armazena a confirmação da nova senha do usuário. É utilizada para verificar se o usuário digitou a mesma senha nos campos de nova senha e confirmação de senha.

## Construtor

### `ChangePasswordController()`
Construtor padrão da classe que não recebe nenhum parâmetro e não realiza nenhuma ação.

#### Parâmetros
- Nenhum.

#### Retorno
- Nenhum.
  
## Em termos leigos
A classe `ChangePasswordController` é como uma gerente que cuida de mudar a senha do usuário no Salesforce. Ela tem detalhes sobre a senha antiga, a nova senha e a confirmação da nova senha. A única tarefa que ela realiza é a mudança da senha quando solicitado.
# Documentação da Classe Apex ForgotPasswordController

## Descrição

A classe `ForgotPasswordController` é responsável por expor a funcionalidade de esqueci a senha do site no Salesforce.

## Implementação

```apex
public with sharing class ForgotPasswordController {
        public String username {get; set;}   
       
    public ForgotPasswordController() {}
\t
  \tpublic PageReference forgotPassword() {
      \t\tboolean success = Site.forgotPassword(username);
  \t\tPageReference pr = Page.ForgotPasswordConfirm;
  \t\tpr.setRedirect(true);
  \t\t
  \t\tif (success) {  \t\t\t
  \t\t\treturn pr;
  \t\t}
  \t\treturn null;
  \t}
}
```

## Métodos

### `ForgotPasswordController()`

Este é o construtor padrão da classe. Ele não recebe nenhum parâmetro e não retorna nada.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.

### `forgotPassword()`

Este método é usado quando o usuário esquece sua senha. Ele verifica se o nome de usuário existe e, em caso afirmativo, redireciona para a página de confirmação de esquecimento de senha.

#### Parâmetros

- Nenhum.

#### Retorno

- `PageReference`: Uma referência à página de confirmação de esquecimento de senha se o nome de usuário existir, caso contrário, retorna nulo.

## Variáveis

### `username`

- Tipo: `String`
- Descrição: Armazena o nome de usuário para o qual a senha foi esquecida. É acessível através dos métodos getter e setter.
   
## Explicação Simples

Esta classe é como um controlador para as pessoas que esquecem suas senhas no site. Eles inserem seu nome de usuário e este código verifica se esse nome de usuário existe. Se existir, ele os redireciona para uma página onde eles podem confirmar que esqueceram sua senha. Se o nome de usuário não existir, nada acontece.
# Documentação da Classe Apex `Pricebook2Util`

## Descrição

A classe `Pricebook2Util` é uma classe utilitária responsável por fornecer funcionalidades relacionadas ao `Pricebook2` no Salesforce.

## Implementação

```apex
public class Pricebook2Util {
        
    @InvocableMethod(Label=\'Get Standard Pricebook Id\')
    public static List<Id> getStandardPricebook2Id() {
            
        List<Id> pricebookIdListToReturn = new List<Id>();
        
        if(Test.isRunningTest()) pricebookIdListToReturn.add(Test.getStandardPricebookId());
        if(!Test.isRunningTest()) pricebookIdListToReturn.add([SELECT Id FROM Pricebook2 WHERE isStandard = true][0].Id);
        
        return pricebookIdListToReturn;
    }
}
```

## Métodos

### `getStandardPricebook2Id()`

Método utilizado para obter o ID do `Pricebook2` padrão.

#### Parâmetros

- Nenhum.

#### Retorno

- `List<Id>`: Lista contendo o ID do `Pricebook2` padrão.

## Variáveis

### `pricebookIdListToReturn`

- Tipo: `List<Id>`
- Descrição: Lista usada para armazenar o ID do `Pricebook2` padrão.

## Explicação para leigos

A classe `Pricebook2Util` é como uma caixa de ferramentas que contém uma única ferramenta que nos permite encontrar a identidade de um tipo especial de livro de preços (chamado `Pricebook2`) que é o padrão no Salesforce. Essa ferramenta é útil quando estamos testando outros códigos e precisamos do ID desse tipo de livro de preços.
# Documentação da Classe de Teste Apex DW_GetAvaliacaoIntegrableTest

## Descrição

A classe `DW_GetAvaliacaoIntegrableTest` é responsável por realizar testes unitários na classe `DW_GetAvaliacaoIntegrable`, assegurando que a integração com o serviço de avaliação está funcionando corretamente.

## Implementação

```apex
@isTest
private class DW_GetAvaliacaoIntegrableTest {
        // Código omitido para brevidade
}
```

## Métodos

### `testCallIntegrationSuccess()`

Método de teste que simula uma chamada bem-sucedida à integração.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.

### `testMissingTokenThrowsError()`

Método de teste que simula uma chamada à integração onde o token está faltando, esperando uma exceção.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.

## Variáveis

Não existem variáveis de instância nesta classe de teste.

## Nota

Esta classe usa a anotação `@isTest` para indicar que é uma classe de teste. As classes de teste não são contabilizadas para limites de código Apex, e você pode criar um número ilimitado de classes de teste para adicionar cobertura de código para o seu aplicativo.

Os métodos de teste são definidos usando a anotação `@isTest` e a palavra-chave `static`. Eles não aceitam parâmetros e não retornam um valor.

A classe de teste `DW_GetAvaliacaoIntegrableTest` contém dois métodos de teste: `testCallIntegrationSuccess()` e `testMissingTokenThrowsError()`. `testCallIntegrationSuccess()` testa o cenário bem-sucedido de uma chamada de integração, enquanto `testMissingTokenThrowsError()` testa o cenário de erro onde um token está ausente na chamada de integração.
# Documentação da Classe de Teste Apex DWLeadConversionHandlerTest

## Descrição

A classe `DWLeadConversionHandlerTest` é responsável por realizar testes unitários para a classe `DWLeadConversionHandler` no Salesforce.

## Implementação

```apex
@isTest
private class DWLeadConversionHandlerTest {
        @testSetup
    static void setupTestData() {
            // código omitido
    }
    
    @isTest
    static void testSuccessfulConversion() {
            // código omitido
    }
        
    @isTest
    static void testAlreadyConvertedLeads() {
            // código omitido
    }
}
```

## Métodos de teste

### `setupTestData()`

Este método é responsável por criar dados de teste que serão usados nos métodos de teste subsequentes. Cria uma lista de três leads com diferentes valores para seus campos.

### `testSuccessfulConversion()`

Este método testa a funcionalidade de converter leads na classe `DWLeadConversionHandler`. Ele seleciona dois leads não convertidos e tenta convertê-los. Depois disso, verifica se os leads foram convertidos corretamente.

### `testAlreadyConvertedLeads()`

Este método testa a funcionalidade de converter leads que já foram convertidos. Ele seleciona dois leads não convertidos, converte-os e, em seguida, tenta convertê-los novamente. Depois disso, verifica se o status dos leads não mudou.

## Explicação para leigos

Essa classe de teste é como um inspetor de qualidade. Ela cria alguns clientes em potencial (leads) fictícios e, em seguida, tenta converter esses clientes em potencial em clientes reais usando um programa que criamos (`DWLeadConversionHandler`). Depois, ela verifica se o programa funcionou corretamente. Ela realiza dois tipos de testes: um onde tenta converter clientes em potencial que não foram convertidos antes e outro onde tenta converter clientes em potencial que já foram convertidos. Em cada teste, ela verifica se o programa fez o que era esperado.
# Documentação da Classe de Teste Apex UtilValidacaoTest

## Descrição

A classe `UtilValidacaoTest` é um conjunto de testes unitários responsável por validar a funcionalidade de formatação e validação de campos como CPF, CNPJ, RG e Nome em Salesforce.

## Implementação

```apex
@isTest
public class UtilValidacaoTest {
        // Testes aqui
}
```

## Métodos de Teste

### `formatCPFTest()`

Método de teste para validar a correta formatação do CPF.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.

### `formatCNPJTest()`

Método de teste para validar a correta formatação do CNPJ.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.

### `formatRGEightDigitsTest()`

Método de teste para validar a correta formatação do RG com oito dígitos.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.

### `validateRGNineDigitFormat()`

Método de teste para validar a correta formatação do RG com nove dígitos.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.

### `validationNomeTest()`

Método de teste para validar a correta formatação e validação do Nome.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.

## Observações

Os métodos de teste estão comentados. Para que eles funcionem corretamente, é necessário remover os comentários (/* e */). O objetivo desses testes é verificar se a formatação e validação dos campos CPF, CNPJ, RG e Nome estão funcionando corretamente. Para cada teste, um objeto `Termo__c` é criado com um valor de campo específico. O teste então chama a função de formatação/validação apropriada e verifica se o resultado corresponde ao esperado.
# Documentação da Classe Apex DW_OpportunityAdditionalServiceDTO

## Descrição
A classe `DW_OpportunityAdditionalServiceDTO` encapsula o Id do serviço para ser utilizado em operações relacionadas a Serviços Adicionais em Oportunidades no Salesforce.

## Implementação
```apex
public with sharing class DW_OpportunityAdditionalServiceDTO {
        @InvocableVariable(label=\'Id do Serviço\')
    @AuraEnabled public Id serviceId;
}
```

## Variáveis

### `serviceId`

- Tipo: `Id`
- Descrição: Armazena o ID do serviço adicional relacionado à oportunidade.

## Anotações

### `InvocableVariable`

A anotação `@InvocableVariable` marca uma variável como invocável, o que significa que ela pode ser chamada por processos, fluxos e regras de negócios do Salesforce.

- Label: \'Id do Serviço\'
- Descrição: Define o rótulo da variável quando exibido em um processo, fluxo ou regra de negócio.

### `AuraEnabled`

A anotação `@AuraEnabled` expõe uma variável ou método para ser acessado a partir do código de uma aplicação Lightning, a nova interface de usuário do Salesforce.

- Descrição: Permite que o `serviceId` seja acessado e manipulado no código de uma aplicação Lightning. 

## Explicação para Leigos

A classe `DW_OpportunityAdditionalServiceDTO` é como uma caixa que armazena um único item: o ID de um serviço adicional. Este ID é como um número de identificação exclusivo para cada serviço adicional.

O termo "AuraEnabled" significa que esse número de identificação pode ser usado e alterado em uma parte específica do Salesforce chamada "Aplicação Lightning". 

E "InvocableVariable" significa que o número de identificação pode ser chamado e utilizado em diferentes processos dentro do Salesforce para realizar ações específicas. Por exemplo, pode ser usado para localizar informações específicas sobre o serviço ou para associar o serviço a uma oportunidade.
# Documentação da Classe de Teste Apex DW_FluigGetAccessTokenIntegrableTest

## Descrição

A classe `DW_FluigGetAccessTokenIntegrableTest` é responsável por realizar os testes da classe `DW_FluigGetAccessTokenIntegrable`, que por sua vez é responsável por obter um token de acesso para uma integração na plataforma Salesforce.

## Implementação

```apex
@isTest
private class DW_FluigGetAccessTokenIntegrableTest {
    
    ...

}
```

## Métodos

### `setup()`

Método para configurar o ambiente de teste. Cria um registro de metadados personalizados simulando as credenciais necessárias para a execução da classe principal.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.

### `testConstructEndpoint()`

Teste do método `constructEndpoint()` da classe principal, que é responsável por construir o endpoint para a requisição.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.

### `testGetSerializedRequest()`

Teste do método `getSerializedRequest()` da classe principal, que é responsável por serializar a requisição.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.

### `testConstructHeaders()`

Teste do método `constructHeaders()` da classe principal, que é responsável por construir os cabeçalhos para a requisição.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.

### `testCallIntegrationAndDeserializeResponse()`

Teste do método `callIntegration()` da classe principal, que é responsável por realizar a chamada de integração e desserializar a resposta.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.

### `testMissingCredentialsThrowsException()`

Teste do comportamento da classe principal quando as credenciais necessárias estão ausentes.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.

## Variáveis

Não há variáveis declaradas nesta classe de teste.

# Documentação da Classe de Teste Apex MicrobatchSelfRegControllerTest

## Descrição

A classe `MicrobatchSelfRegControllerTest` é responsável por realizar testes na classe controladora `MicrobatchSelfRegController`. Esta classe de teste garante que a classe controladora está funcionando como esperado.

## Implementação

```apex
@IsTest
public with sharing class MicrobatchSelfRegControllerTest {
         @IsTest(SeeAllData=true)
    public static void testMicrobatchSelfRegController() {
            MicrobatchSelfRegController controller = new MicrobatchSelfRegController();
        controller.firstName = \'FirstName\';
        controller.lastName = \'LastName\';
        controller.email = \'test@force.com\';
        controller.communityNickname = \'test\';

        // registerUser will always return null when the page isn\'t accessed as a guest user
        System.assert(controller.registerUser() == null);
    }
}
```

## Métodos

### `testMicrobatchSelfRegController()`

Método de teste para a classe `MicrobatchSelfRegController`. Este método cria uma instância da classe controladora, define alguns valores para as propriedades e, em seguida, registra um usuário. A assertiva garante que o método `registerUser` retorne `null` quando a página não for acessada como um usuário convidado.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum. 

## Nota

O método `@IsTest(SeeAllData=true)` permite que o método de teste acesse todos os dados na organização, incluindo dados de registros padrão e personalizados. Esta é uma boa prática para evitar dependências de dados e garantir que os testes não falhem devido a problemas de dados.

Em termos mais leigos, esta classe de teste verifica se a classe controladora `MicrobatchSelfRegController` está funcionando corretamente. Ela faz isso criando um usuário fictício e verificando se o método de registro se comporta como esperado.
# Documentação da Classe de Teste Apex `DW_DynamicQueryControllerTest`

## Descrição

A classe `DW_DynamicQueryControllerTest` é responsável por realizar testes unitários na classe `DW_DynamicQueryController` no Salesforce. Ela garante que as funcionalidades da classe que está sendo testada funcionem corretamente.

## Implementação

```apex
@IsTest
private class DW_DynamicQueryControllerTest {
    
    @IsTest
    static void testGetRecords_withValidParams() {
            // Código de teste
    }

    @IsTest
    static void testGetRecords_withEmptyWhereClause() {
            // Código de teste
    }

    @IsTest
    static void testGetRecords_invalidQuery_throwsAuraException() {
            // Código de teste
    }
}
```

## Métodos de Teste

### `testGetRecords_withValidParams()`

Este método de teste verifica se o método `getRecords` da classe `DW_DynamicQueryController` retorna os registros corretos quando os parâmetros válidos são passados.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.

### `testGetRecords_withEmptyWhereClause()`

Este método de teste verifica se o método `getRecords` da classe `DW_DynamicQueryController` retorna os registros corretos mesmo quando a cláusula WHERE está vazia.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.

### `testGetRecords_invalidQuery_throwsAuraException()`

Este método de teste verifica se o método `getRecords` da classe `DW_DynamicQueryController` lança uma exceção `AuraHandledException` quando uma consulta inválida é passada.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.

Em termos menos técnicos, esses métodos de teste estão verificando se a classe `DW_DynamicQueryController` está se comportando corretamente, trazendo os resultados corretos quando as condições corretas são passadas, retornando os registros mesmo quando não há filtro específico, e lidando corretamente com erros quando a consulta é inválida.
# Documentação da Classe de Teste Apex DW_CustomLookupControllerTest

## Descrição

A classe `DW_CustomLookupControllerTest` é uma classe de teste que verifica o comportamento correto da classe `DW_CustomLookupController`.

## Implementação

```apex
@IsTest
private class DW_CustomLookupControllerTest {
    
    // Seus métodos de teste aqui...

}
```

## Métodos de Teste

### `testGetRecords()`

Este método de teste cria dados fictícios, serializa esses dados em um formato JSON e então chama o método `getRecords` na classe `DW_CustomLookupController`. Em seguida, verifica se o resultado não é nulo e se o tamanho do resultado é maior que zero.

### `testParseRelationFieldsAndSearchBase()`

Este método de teste cria um objeto `RequestDTO`, chama o método `getQueryBase` na classe `DW_CustomLookupController` e verifica se a consulta gerada contém as cláusulas corretas.

### `testCheckDateTimeAndDate()`

Este método de teste chama o método `checkDateTimeAndDate` na classe `DW_CustomLookupController` com diferentes entradas e verifica se o método retorna os resultados esperados.

### `testConvertObjectListToStringList()`

Este método de teste cria uma lista de objetos, chama o método `convertObjectListToStringList` na classe `DW_CustomLookupController` e verifica se o tamanho do resultado e os elementos do resultado são corretos.

## Explicação Leiga

Esta classe de teste verifica se a classe `DW_CustomLookupController` está funcionando corretamente. Ela faz isso simulando várias situações e verificando se a classe `DW_CustomLookupController` se comporta como esperado nessas situações. Por exemplo, ela verifica se a classe `DW_CustomLookupController` pode corretamente buscar registros, gerar consultas e converter datas e listas de objetos.
# Documentação da Classe Apex DW_ReceiveExternalSFController

## Descrição

A classe `DW_ReceiveExternalSFController` é responsável por gerenciar os eventos relacionados ao recebimento de códigos externos no Salesforce.

## Implementação

```apex
public without sharing class DW_ReceiveExternalSFController {
    
    public String code {get; set; }

    public DW_ReceiveExternalSFController(){
            this.code = ApexPages.currentPage().getParameters().get(\'code\');
        DW_SF__e event = new DW_SF__e();
        event.CodigoConsentimentoUsuario__c = this.code ?? \'nocode\';
        EventBus.publish(event);
    }

    @AuraEnabled
    public static String generateSaleforceUrlAuth(String env){
            // Implementation
    }

    @AuraEnabled
    public static String getUserConsentCode(){
            // Implementation
    }
}
```

## Métodos

### `DW_ReceiveExternalSFController()`

Construtor da classe. Ele define o valor do código a partir do parâmetro da página atual e publica um evento `DW_SF__e` com o código de consentimento do usuário.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.

### `generateSaleforceUrlAuth(String env)`

Método utilizado para gerar a URL de autorização do Salesforce com base no ambiente fornecido. Ele atualiza o registro do usuário atual no banco de dados Salesforce e retorna a URL de autorização.

#### Parâmetros

- `env` (String): O ambiente do Salesforce.

#### Retorno

- `String`: A URL de autorização do Salesforce.

### `getUserConsentCode()`

Método utilizado para obter o código de consentimento do usuário atual.

#### Parâmetros

- Nenhum.

#### Retorno

- `String`: O código de consentimento do usuário.

## Variáveis

### `code`

- Tipo: `String`
- Descrição: Armazena o código de consentimento do usuário atual.
# Documentação da Classe de Teste Apex `DW_CancelEnvDocusignMock` 

## Descrição

A classe `DW_CancelEnvDocusignMock` é uma classe de teste que implementa a interface `HttpCalloutMock`. É utilizada para simular respostas HTTP em testes unitários que fazem chamadas HTTP.

## Implementação

```apex
@isTest
public class DW_CancelEnvDocusignMock implements HttpCalloutMock {
        public HttpResponse respond(HttpRequest req) {
            HttpResponse res = new HttpResponse();
        if (req.getEndpoint().contains(\'token\')) {
                res.setHeader(\'Content-Type\', \'application/json\');
            res.setBody(\'"FAKE_ACCESS_TOKEN"\');
            res.setStatusCode(200);
        } else if (req.getEndpoint().contains(\'inativarEnvelope\')) {
                res.setHeader(\'Content-Type\', \'application/json\');
            res.setBody(\'{"status":"success"}\');
            res.setStatusCode(200);
        } else {
                res.setStatusCode(400);
            res.setBody(\'{"error":"Unexpected endpoint"}\');
        }
        return res;
    }
}
```

## Métodos 

### `respond(HttpRequest req)`

Método utilizado para simular uma resposta HTTP baseada no endpoint da requisição.

#### Parâmetros

- `req` (HttpRequest): Requisição HTTP que será respondida pelo mock.

#### Retorno

- `HttpResponse`: Resposta HTTP simulada.

## Para Leigos

Esta classe é como um dublê de teste para simular respostas de chamadas HTTP. Quando estamos testando nosso código, não queremos depender de serviços externos, porque eles podem falhar ou ter comportamento imprevisível. Em vez disso, usamos essa classe para simular a resposta que obteríamos do serviço externo. Desta forma, podemos concentrar-nos em testar o nosso código, não o serviço externo.
# Documentação da Classe de Teste Apex SiteRegisterControllerTest

## Descrição

A classe `SiteRegisterControllerTest` é responsável por realizar testes unitários na classe `SiteRegisterController`. 

## Implementação

```apex
@IsTest public with sharing class SiteRegisterControllerTest {
        @IsTest(SeeAllData=true) static void testRegistration() {
            SiteRegisterController controller = new SiteRegisterController();
        controller.username = \'test@force.com\';
        controller.email = \'test@force.com\';
        controller.communityNickname = \'test\';
        // registerUser will always return null when the page isn\'t accessed as a guest user
        System.assert(controller.registerUser() == null);    
        
        controller.password = \'abcd1234\';
        controller.confirmPassword = \'abcd123\';
        System.assert(controller.registerUser() == null);  
    }
}
```

## Métodos

### `testRegistration()`

Método de teste para validar o comportamento do método `registerUser()` na classe `SiteRegisterController`. O teste inclui a criação de um novo objeto `SiteRegisterController`, a configuração de suas propriedades e a verificação das condições esperadas por meio de chamadas `System.assert()`.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.

## Variáveis

Não há variáveis de instância nesta classe de teste. As variáveis utilizadas estão restritas ao escopo do método de teste `testRegistration()`, e são usadas para simular o comportamento esperado durante o teste.

## Nota

A anotação `@IsTest(SeeAllData=true)` permite que este método de teste acesse todos os dados na organização, incluindo dados padrão e de teste. É importante usar essa anotação com cautela, pois ela pode afetar o comportamento do teste, dependendo dos dados existentes na organização.
# Documentação da Classe Apex DW_CTIHelperTest

## Descrição
A classe `DW_CTIHelperTest` é uma classe de teste responsável por realizar testes unitários na classe `DW_CTIHelper`. Ela tem como objetivo verificar se todas as funções na classe `DW_CTIHelper` estão funcionando como esperado. 

## Implementação

```apex
@isTest
private class DW_CTIHelperTest {
        @testSetup
    static void setupData() {
            // código omitido para brevidade
    }

    @isTest
    static void testGetAccountPhone() {
            // código omitido para brevidade
    }

    @isTest
    static void testGetContactsPhone() {
            // código omitido para brevidade
    }

    @isTest
    static void testGetLeadPhone() {
            // código omitido para brevidade
    }
}
```

## Métodos

### `setupData()`

Este método é responsável por preparar os dados necessários para a execução dos testes. Ele cria e insere os objetos `Account`, `Lead`, `Opportunity` e `Contact` que serão usados nos testes.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.


### `testGetAccountPhone()`

Este método é um teste que verifica a funcionalidade do método `getAccountPhone()` na classe `DW_CTIHelper`. Ele garante que o método retorna uma conta e que o campo `Phone` da conta está preenchido.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.


### `testGetContactsPhone()`

Este método é um teste que verifica a funcionalidade do método `getContactsPhone()` na classe `DW_CTIHelper`. Ele garante que o método retorna uma lista de contatos com um único contato e que o campo `Phone` do contato está preenchido.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.


### `testGetLeadPhone()`

Este método é um teste que verifica a funcionalidade do método `getLeadPhone()` na classe `DW_CTIHelper`. Ele garante que o método retorna um lead e que o campo `Phone` do lead está preenchido.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.
# Documentação da Classe Apex DW_DynamicQueryController

## Descrição
A classe `DW_DynamicQueryController` é responsável por realizar consultas dinâmicas no Salesforce. Ela permite buscar registros de um objeto específico, com campos e condições de pesquisa definidos dinamicamente.

## Implementação
```apex
public without sharing class DW_DynamicQueryController {
        @AuraEnabled
    public static List<SObject> getRecords(String objectName, String fields, String whereClause) {
            try {
                String query = \'SELECT \' + fields + \' FROM \' + objectName;
            if (whereClause != null && whereClause != \'\') {
                    query += \' WHERE \' + whereClause;
            }
            return Database.query(query);
        } catch (Exception e) {
                throw new AuraHandledException(e.getMessage());
        }
    }
}
```

## Métodos

### `getRecords(String objectName, String fields, String whereClause)`
Este método é utilizado para obter registros de um objeto Salesforce específico, com base em campos e uma cláusula WHERE definidos dinamicamente.

#### Parâmetros
- `objectName` (String): Nome do objeto Salesforce do qual os registros serão obtidos.
- `fields` (String): Campos a serem selecionados na consulta. Deve ser uma string contendo os nomes dos campos, separados por vírgula.
- `whereClause` (String): Cláusula WHERE a ser aplicada na consulta. Deve ser uma string contendo a condição de pesquisa.

#### Retorno
- `List<SObject>`: Lista de registros SObject obtidos na consulta.

## Exceções

### `AuraHandledException`
Esta exceção é lançada quando ocorre um erro durante a execução da consulta. A mensagem da exceção original é passada para a `AuraHandledException`.

## Nota
A anotação `@AuraEnabled` no método `getRecords` permite que este método seja chamado a partir de um componente Aura ou LWC no Salesforce.
# Documentação da Classe Apex LightningSelfRegisterController

## Descrição
A classe `LightningSelfRegisterController` é responsável por gerenciar o registro de usuários na plataforma Salesforce. Esta classe valida as entradas de senha, cria novos usuários e gerencia campos extras durante o processo de registro.

## Implementação
```apex
global class LightningSelfRegisterController {
        // ... Implementação da classe ...
}
```

## Métodos

### `selfRegister(String firstname ,String lastname, String email, String password, String confirmPassword, String accountId, String regConfirmUrl, String extraFields, String startUrl, Boolean includePassword)`

Método utilizado para registrar um novo usuário. Ele recebe várias informações do usuário, como nome, sobrenome, email, senha, entre outros, e cria um novo usuário no Salesforce.

#### Parâmetros
- `firstname` (String): Primeiro nome do usuário.
- `lastname` (String): Sobrenome do usuário.
- `email` (String): O e-mail do usuário.
- `password` (String): A senha do usuário.
- `confirmPassword` (String): Confirmação da senha do usuário.
- `accountId` (String): ID da conta do usuário.
- `regConfirmUrl` (String): URL de confirmação de registro.
- `extraFields` (String): Campos extras de registro.
- `startUrl` (String): URL inicial após o registro.
- `includePassword` (Boolean): Indica se a senha deve ser incluída no registro.

#### Retorno
- `String`: Retorna null se o registro for bem-sucedido, caso contrário, retorna a mensagem de erro.

### `getExtraFields(String extraFieldsFieldSet)`
Método utilizado para obter campos extras de um conjunto de campos.

#### Parâmetros
- `extraFieldsFieldSet` (String): Nome do conjunto de campos extras.

#### Retorno
- `List<Map<String,Object>>`: Lista contendo informações dos campos extras.

### `setExperienceId(String expId)`
Método utilizado para definir o ID de uma experiência.

#### Parâmetros
- `expId` (String): ID da experiência.

#### Retorno
- `String`: Retorna null se não houver erro, caso contrário, retorna a mensagem de erro.

## Variáveis
Não há variáveis de instância nesta classe. Todos os dados são passados como parâmetros para os métodos.
# Documentação da Classe Apex DW_IniciarFaturamentoMock

## Descrição
A classe `DW_IniciarFaturamentoMock` é uma classe de teste responsável por simular as respostas de chamadas HTTP durante os testes unitários. Ela implementa a interface `HttpCalloutMock`, que é usada para especificar a resposta de um callout HTTP mock.

## Implementação

```apex
@isTest
public class DW_IniciarFaturamentoMock implements HttpCalloutMock {
    
    public HttpResponse respond(HttpRequest request) {
            HttpResponse response = new HttpResponse();

        if (request.getEndpoint().contains(\'https://homo-msflow.grupobarigui.com.br\') || 
            request.getEndpoint().contains(\'fluig\') ||
            request.getEndpoint().contains(\'Autenticar\')
            ) {
    
            String mockBody = \'{"idSolicitacao":"MOCK_ID_123"}\';

            response.setHeader(\'Content-Type\', \'application/json\');
            response.setBody(mockBody);
            response.setStatusCode(200);
            return response;
        }

        response.setStatusCode(404);
        response.setBody(\'{"error":"Endpoint não reconhecido"}\');
        return response;
    }
}
```

## Método

### `respond(HttpRequest request)`

Método utilizado para simular a resposta de uma chamada HTTP. Ele verifica se o endpoint da requisição contém certas strings. Se a condição for verdadeira, ele retorna uma resposta simulada com um código de status 200 e um corpo JSON. Se a condição for falsa, ele retorna uma resposta com um código de status 404 e uma mensagem de erro.

#### Parâmetros

- `request` (HttpRequest): A requisição HTTP que está sendo simulada.

#### Retorno

- `HttpResponse`: A resposta simulada para a requisição HTTP. A resposta e seu conteúdo dependem do endpoint da requisição.

## Explicação em termos leigos

A classe `DW_IniciarFaturamentoMock` é como um ator que interpreta o papel de um servidor durante um teste. Quando um teste solicita uma chamada HTTP, esta classe verifica para onde a chamada está indo (o endpoint). Se a chamada estiver indo para um dos endpoints especificados na classe, o ator (a classe) responde como se fosse o servidor real, fornecendo os dados especificados. Se a chamada estiver indo para um endpoint não reconhecido, a classe responderá com uma mensagem de erro.
# Documentação da Classe Apex DW_DocusignSendSignController

## Descrição

A classe `DW_DocusignSendSignController` é responsável por gerenciar a operação de envio de documentos para assinatura utilizando a plataforma Docusign.

## Implementação

```apex
public without sharing class DW_DocusignSendSignController {
        //... código da classe ...
}
```

## Métodos

### `sendToSign(String recordId, Map<String, Signer> signers, String typeOfDocument, String idDoc)`

Método utilizado para preparar e enviar um documento para assinatura no Docusign.

#### Parâmetros

- `recordId` (String): ID do registro associado ao documento. 
- `signers` (Map<String, Signer>): Mapa que mapeia papéis aos signatários do documento.
- `typeOfDocument` (String): Tipo do documento a ser enviado para assinatura.
- `idDoc` (String): ID do documento a ser enviado para assinatura.

#### Retorno

- `String`: Representação JSON da resposta HTTP do Docusign.

### `configurarGuiasPorTipoDocumento(DW_DocusignSendSignTemplate.Assinador assinador, String tipoDocumento, String papel)`

Método privado utilizado para configurar a lista de guias para o signatário com base no tipo de documento e no papel do signatário.

#### Parâmetros

- `assinador` (DW_DocusignSendSignTemplate.Assinador): O objeto Assinador a ser configurado.
- `tipoDocumento` (String): Tipo do documento a ser enviado para assinatura.
- `papel` (String): Papel do signatário no documento.

#### Retorno

- Nenhum.

### `getAncor(String papel)`

Método estático que retorna a âncora apropriada com base no papel do signatário.

#### Parâmetros

- `papel` (String): Papel do signatário no documento.

#### Retorno

- `String`: Âncora apropriada para o papel do signatário.

### `extractErrorMessage(String errorResponse)`

Método estático que extrai a mensagem de erro de uma resposta de erro JSON.

#### Parâmetros

- `errorResponse` (String): Resposta de erro JSON.

#### Retorno

- `String`: Mensagem de erro extraída.

## Classes Internas

### `Signer`

Classe interna que representa um signatário de um documento.

#### Parâmetros

- `name` (String): Nome do signatário.
- `email` (String): Email do signatário.
- `role` (String): Papel do signatário no documento.
- `id` (String): ID do signatário.

## Variáveis

Não há variáveis de instância nesta classe.
# Documentação da Classe Apex DW_IniciarFaturamentoTokenMock

## Descrição

A classe `DW_IniciarFaturamentoTokenMock` é responsável por simular uma chamada HTTP para fins de teste. Esta classe implementa a interface `HttpCalloutMock`, que é usada no Salesforce para simular respostas de chamadas HTTP em testes de unidade.

## Implementação

```apex
@isTest
public class DW_IniciarFaturamentoTokenMock implements HttpCalloutMock {
    
    public HttpResponse respond(HttpRequest request) {
            HttpResponse response = new HttpResponse();

        if (request.getEndpoint().contains(\'https://homo-msflow.grupobarigui.com.br\') || 
            request.getEndpoint().contains(\'fluig\') ||
            request.getEndpoint().contains(\'Autenticar\')
            ) {
    
            String mockBody = \'{"token":"mocked_token_value_123"}\';

            response.setHeader(\'Content-Type\', \'application/json\');
            response.setBody(mockBody);
            response.setStatusCode(200);
            return response;
        }

        response.setStatusCode(404);
        response.setBody(\'{"error":"Endpoint não reconhecido"}\');
        return response;
    }
}
```

## Métodos

### `respond(HttpRequest request)`

Método utilizado para fornecer uma resposta HTTP simulada baseada na solicitação HTTP fornecida.

#### Parâmetros

- `request` (HttpRequest): Solicitação HTTP para a qual a resposta está sendo simulada.

#### Retorno

- `HttpResponse`: Resposta HTTP simulada.

## Variáveis

Não há variáveis ​​de instância nesta classe.

## Em termos leigos

Esta classe é como uma atriz que desempenha um papel em um ensaio. Em vez de fazer uma chamada HTTP real (que pode ser demorada, instável e difícil de controlar), usamos essa classe para simular a chamada HTTP e sua resposta. Assim, podemos testar como nosso código se comporta em diferentes cenários sem a necessidade de uma conexão à internet real. Ela responde com um token falso quando a URL solicitada contém \'https://homo-msflow.grupobarigui.com.br\', \'fluig\' ou \'Autenticar\'. Se a URL não contém nenhum desses, ela responde com um erro 404, indicando que a URL não foi reconhecida.
# Documentação da Classe de Teste Apex DW_IniciarFaturamentoBatchTest

## Descrição

A classe `DW_IniciarFaturamentoBatchTest` é responsável por realizar testes unitários na classe `DW_IniciarFaturamentoBatch` do Salesforce. Estes testes são essenciais para garantir a correta funcionalidade do código principal.

## Implementação

```apex
@isTest
public class DW_IniciarFaturamentoBatchTest {
        // Métodos de teste estão aqui
}
```

## Métodos

### `testBatchExecution()`

Método de teste responsável por simular a execução do batch `DW_IniciarFaturamentoBatch`. Ele cria um registro de credencial e uma oportunidade, faz um mock de uma chamada HTTP, executa o batch e verifica os resultados.

#### Parâmetros
- Nenhum.

#### Retorno
- Nenhum.

### `testScheduleMethods()`

Método de teste responsável por verificar o agendamento do batch `DW_IniciarFaturamentoBatch`.

#### Parâmetros
- Nenhum.

#### Retorno
- Nenhum.

### `testRunEveryNMinutesInBusinessHours()`

Método de teste responsável por verificar a execução do método `runEveryNMinutesInBusinessHours` da classe `DW_IniciarFaturamentoBatch`.

#### Parâmetros
- Nenhum.

#### Retorno
- Nenhum.

### `testRunEveryNMinutes()`

Método de teste responsável por verificar a execução do método `runEveryNMinutes` da classe `DW_IniciarFaturamentoBatch`.

#### Parâmetros
- Nenhum.

#### Retorno
- Nenhum.

### `testNotificarAprovacaoMinuta()`

Método de teste responsável por verificar a execução do método `notificarAprovacaoMinuta` da classe `DW_IniciarFaturamentoBatch`.

#### Parâmetros
- Nenhum.

#### Retorno
- Nenhum.

### `testConstructHeaders()`

Método de teste responsável por verificar a construção de cabeçalhos HTTP através do método `constructHeaders` da classe `DW_IniciarFaturamentoIntegrable`.

#### Parâmetros
- Nenhum.

#### Retorno
- Nenhum.

## Em termos leigos

Esta classe de teste é como um inspetor de qualidade que verifica se a classe `DW_IniciarFaturamentoBatch` está funcionando corretamente. Ela simula diferentes cenários e verifica se a classe responde corretamente a cada um deles. Isso é muito importante para garantir que qualquer alteração no código não quebre a funcionalidade existente.
# Documentação da Classe de Teste Apex DWAccountPurchaseHistoryControllerTest

## Descrição

A classe `DWAccountPurchaseHistoryControllerTest` é uma classe de teste unitário responsável por verificar a correta funcionalidade da classe de controle `DWAccountPurchaseHistoryController` no Salesforce.

## Implementação

```apex
@isTest
private class DWAccountPurchaseHistoryControllerTest {
    
    ... Implementação da classe ...

}
```

## Métodos de Teste

### `setupData()`

Este é um método `@testSetup` que é executado antes de cada método de teste. Ele cria e insere dados de teste no banco de dados.

### `testGetRecordsHistoryPurchaseWithOpportunity()`

Este método de teste verifica se o método `getRecordsHistoryPurchase()` da classe de controle retorna os registros de histórico de compra relacionados a uma oportunidade.

### `testGetRecordsHistoryPurchaseWithLead()`

Este método de teste verifica se o método `getRecordsHistoryPurchase()` da classe de controle retorna os registros de histórico de compra relacionados a um lead.

### `testGetRecordsHistoryPurchaseWithInvalidId()`

Este método de teste verifica se o método `getRecordsHistoryPurchase()` da classe de controle retorna `null` quando um ID inválido é fornecido.

### `testGetRecordsHistoryPurchaseWithUnsupportedObject()`

Este método de teste verifica se o método `getRecordsHistoryPurchase()` da classe de controle retorna um objeto com alguns campos nulos quando um objeto não suportado é fornecido.

### `testFormatCurrencyValid()`

Este método de teste verifica se o método `formatCurrency()` da classe de controle retorna um valor formatado corretamente quando um valor válido é fornecido.

### `testFormatCurrencyNull()`

Este método de teste verifica se o método `formatCurrency()` da classe de controle retorna \'R$ 0,00\' quando `null` é fornecido.

### `testParseToDTO()`

Este método de teste verifica se o método `parseToAccountHistoryPurchaseDTO()` da classe de controle retorna um objeto DTO com os campos corretos preenchidos.

## Variáveis

Não há variáveis de instância nesta classe de teste.

## Notas Adicionais

- A anotação `@isTest` antes de `private class DWAccountPurchaseHistoryControllerTest` indica que esta é uma classe de teste.
- A anotação `@isTest` antes de cada método de teste indica que este é um método de teste.
- `Test.startTest()` e `Test.stopTest()` são usados para delimitar o código que está sendo testado.
- Asserções, como `System.assertEquals()` e `System.assertNotEquals()`, são usadas para verificar se o código funciona como esperado. Se uma asserção falhar, o teste falhará.
# Documentação da Classe Apex `DWUsedVehicleSectionController`

## Descrição

A classe `DWUsedVehicleSectionController` é responsável por manipular informações relacionadas a oportunidades que possuem o mesmo estoque em um sistema de gerenciamento de vendas de veículos usados.

## Implementação

```apex
public without sharing class DWUsedVehicleSectionController {
        @AuraEnabled
    public static Map<String, Object> getOppWithSameStock(String stockId, String opportunityId) {
            System.debug(\'stockId: \' + stockId);
        try {
                List<Opportunity> opps = [select id, ownerid, owner.firstname from opportunity where id != :opportunityId and Estoque__c = :stockId and Estoque__c != null];
            Opportunity myOpp = [select id, ownerid, owner.firstname from opportunity where id = :opportunityId];
            return new Map<String, Object>{
                    \'isStockValid\' => !(opps.size() > 0),
                \'opps\' => opps,
                \'sameOwner\' => opps.size() > 0 ? myOpp.ownerid == opps[0].ownerid : false
            };
        } catch (Exception e) {
                throw new AuraHandledException(e.getMessage() + \' - \' + e.getStackTraceString());
        }
    }
}
```

## Métodos

### `getOppWithSameStock(String stockId, String opportunityId)`

Método utilizado para recuperar informações sobre oportunidades que possuem o mesmo estoque e seu respectivo proprietário.

#### Parâmetros

- `stockId` (String): Identificador do estoque a ser pesquisado.
- `opportunityId` (String): Identificador da oportunidade a ser pesquisada.

#### Retorno

- `Map<String, Object>`: Mapa contendo informações sobre a validade do estoque, lista de oportunidades com o mesmo estoque e se o proprietário da oportunidade é o mesmo.

## Exceções

### `AuraHandledException`

Exceção lançada quando ocorre um erro durante a execução do método `getOppWithSameStock`. A mensagem de erro contém a mensagem da exceção original e a pilha de chamadas.

## Em termos leigos

Esta classe é como um gerente que verifica se há oportunidades de venda que estão usando o mesmo veículo em estoque. Ele pode pegar um veículo em estoque específico e uma oportunidade específica, e verificar se há outras oportunidades usando o mesmo veículo em estoque. Ele retornará informações úteis como, se o veículo em estoque é válido (não usado por outras oportunidades), a lista de oportunidades usando o mesmo veículo em estoque, e se o proprietário da oportunidade inicial é o mesmo que o das outras oportunidades com o mesmo veículo em estoque. Se algo der errado durante essa verificação, ele informará o que exatamente deu errado.
# Documentação da Classe Apex DW_DocusignMock

## Descrição

A classe `DW_DocusignMock` é responsável por implementar a interface `HttpCalloutMock` do Salesforce, que é utilizada para simular respostas a chamadas HTTP em testes.

## Implementação

```apex
public with sharing class DW_DocusignMock implements HttpCalloutMock {
        public HTTPResponse respond(HTTPRequest req) {
            ...
    }
}
```

## Métodos

### `respond(HTTPRequest req)`

Método utilizado para definir a resposta simulada a uma chamada HTTP.

#### Parâmetros

- `req` (HTTPRequest): O pedido HTTP que está sendo simulado.

#### Retorno

- `HTTPResponse`: A resposta HTTP simulada.

## Implementação do método `respond`

O método `respond` verifica o endpoint do pedido HTTP e, com base nisso, define a resposta simulada. Ele define a resposta como um objeto `HttpResponse`, define o cabeçalho \'Content-Type\' como \'application/json\' e, dependendo do endpoint, configura diferentes corpos de resposta e códigos de status.

Por exemplo, se o endpoint contiver \'EnviarEnvelope\', o corpo da resposta será um JSON com detalhes sobre o envelope enviado e o código de status será 201.

```apex
if (req.getEndpoint().contains(\'EnviarEnvelope\')){
        res.setBody(\'{"id": "68476794f16808897f0b00dc","cliente": "BariguiDev","envelopeId": "cb0c0599-ba01-4d9e-9b2a-b66743dfd76c","status": "Enviado","dataCriacao": "2025-06-09T20:00:36.9116213-03:00","dataModificacao": null}\');
    res.setStatusCode(201); 
}
```

Se o endpoint contiver \'https://api.docusign.com/oauth/token\', a resposta simulará um token de autenticação, com um código de status 201.

```apex
else if (req.getEndpoint().contains(\'https://api.docusign.com/oauth/token\')){
        res.setBody(\'{"token": "873093a7-0eef-4727-a2cf-0d8c76d50213", "name":"tokenTeste"}\');
    res.setStatusCode(201); 
}
```

E assim por diante para outros endpoints. Se o endpoint não corresponder a nenhum dos casos especificados, a resposta terá um corpo genérico e um código de status 200.

```apex
else{
        res.setBody(\'{ "data": { "attributes": { "status": "closed", "filename": "test.pdf" }, "links": { "files": { "signed": "http://example.com/signed.pdf" } } } }\');
    res.setStatusCode(200);
}
```

No final, a resposta é retornada.

```apex
return res;
```
# Documentação da Classe Apex DWCustomListViewLead

## Descrição

A classe `DWCustomListViewLead` estende a classe `DwCustomListView`. É responsável por manipular e obter informações relacionadas a Leads e Oportunidades no Salesforce.

## Implementação

```apex
public with sharing class DWCustomListViewLead extends DwCustomListView {
        
    public DWCustomListViewLead(Id recordId, String title, String objectName) {
            super(recordId, \'RELATED_LEAD_OBJECT\', title);     
        this.relatedRecords = getRecordsRelatedByLeadId(recordId);
        this.recordName = DWCustomListViewDAO.getLeadById(recordId).Name;
        this.objectName = objectName;
    }

    private static List<DwCustomListView.RelatedRecordData> getRecordsRelatedByLeadId(Id recordId) {
            //...
    }

    private static List<Opportunity> getOpportunitiesById(Id recordId) {
           //...
    }

    private static List<Lead> getLeadsById(Id recordId) {
            //...
    }
}
```

## Métodos

### `DWCustomListViewLead(Id recordId, String title, String objectName)`

Construtor da classe. Responsável por inicializar a classe `DWCustomListViewLead` com um registro específico, um título e o nome do objeto.

#### Parâmetros

- `recordId` (Id): Identificador do registro a ser manipulado.
- `title` (String): Título a ser atribuído.
- `objectName` (String): Nome do objeto a ser manipulado.

#### Retorno

- Nenhum.

### `getRecordsRelatedByLeadId(Id recordId)`

Método privado e estático. Obtém uma lista de registros relacionados a um Lead específico.

#### Parâmetros

- `recordId` (Id): Identificador do Lead.

#### Retorno

- `List<DwCustomListView.RelatedRecordData>`: Lista de registros relacionados ao Lead.

### `getOpportunitiesById(Id recordId)`

Método privado e estático. Obtém uma lista de oportunidades relacionadas a um Lead específico.

#### Parâmetros

- `recordId` (Id): Identificador do Lead.

#### Retorno

- `List<Opportunity>`: Lista de oportunidades relacionadas ao Lead.

### `getLeadsById(Id recordId)`

Método privado e estático. Obtém uma lista de Leads a partir de um identificador específico.

#### Parâmetros

- `recordId` (Id): Identificador do Lead.

#### Retorno

- `List<Lead>`: Lista de Leads.

## Variáveis

Não há variáveis de instância declaradas explicitamente nesta classe. As variáveis `relatedRecords`, `recordName` e `objectName` herdam da classe `DwCustomListView`.
# Documentação da Classe Apex DW_CustomLookupController

## Descrição

A classe `DW_CustomLookupController` é responsável por manipular e enviar consultas de pesquisa personalizadas em objetos Salesforce.

## Implementação

```apex
public without sharing class DW_CustomLookupController {
        // código omitido para brevidade...
}
```

## Métodos

### `getRecords(String data)`

Método utilizado para obter registros de um objeto Salesforce especificado com base em um critério de pesquisa fornecido.

#### Parâmetros

- `data` (String): JSON string contendo critérios de pesquisa e informações sobre o objeto Salesforce a ser consultado.

#### Retorno

- `List<SObject>`: Lista de registros SObject que correspondem aos critérios de pesquisa.

### `getQueryBase(RequestDTO requestData)`

Método utilizado para construir a consulta SOQL baseada nas informações de RequestDTO.

#### Parâmetros

- `requestData` (RequestDTO): Objeto que contém informações sobre o objeto de destino e os critérios de pesquisa.

#### Retorno

- `String`: Consulta SOQL construída a partir dos dados de RequestDTO.

### `getQueryFieldsSet(RequestDTO requestData)`

Método utilizado para obter um conjunto de campos necessários para a consulta.

#### Parâmetros

- `requestData` (RequestDTO): Objeto que contém informações sobre o objeto de destino e os critérios de pesquisa.

#### Retorno

- `Set<String>`: Conjunto de campos necessários para a consulta.

### `parseSearchFields(List<Object> searchFields)`

Método utilizado para parsear os campos de pesquisa para a consulta SOQL.

#### Parâmetros

- `searchFields` (List<Object>): Lista de campos de pesquisa.

#### Retorno

- `String`: Campos de pesquisa parseados para a consulta SOQL.

### `parseRelationFields(List<RelationDTO> relations)`

Método utilizado para parsear os campos de relação para a consulta SOQL.

#### Parâmetros

- `relations` (List<RelationDTO>): Lista de relações.

#### Retorno

- `String`: Campos de relação parseados para a consulta SOQL.

### `checkDateTimeAndDate(String stringToCheck)`

Método utilizado para verificar se uma string é uma data ou datetime.

#### Parâmetros

- `stringToCheck` (String): String a ser verificada.

#### Retorno

- `Boolean`: Retorna `true` se a string é uma data ou datetime, `false` caso contrário.

### `convertObjectListToStringList(List<Object> objectList)`

Método utilizado para converter uma lista de objetos em uma lista de strings.

#### Parâmetros

- `objectList` (List<Object>): Lista de objetos a ser convertida.

#### Retorno

- `List<String>`: Lista de strings.

## Classes Internas

### `RequestDTO`

Classe utilizada para encapsular os dados de solicitação de pesquisa.

### `RelationDTO`

Classe utilizada para encapsular os dados de relação para a pesquisa.
# Documentação da Classe Apex DW_DynamicComponentController

## Descrição

A classe `DW_DynamicComponentController` é responsável por obter um componente dinâmico baseado no perfil do usuário no Salesforce.

## Implementação

```apex
public without sharing class DW_DynamicComponentController {
        @AuraEnabled
    public static Map<String, Object> getDynamicComponentByProfile(String recordId, String componentName){
            // Código da classe omitido por questões de legibilidade
    }
}
```

## Métodos

### `getDynamicComponentByProfile(String recordId, String componentName)`

Método utilizado para obter um componente dinâmico baseado no perfil do usuário.

#### Parâmetros

- `recordId` (String): ID do registro que será usado para determinar o tipo de objeto e buscar o perfil de qualificação correspondente.
- `componentName` (String): Nome do componente que está sendo buscado.

#### Retorno

- `Map<String, Object>`: Um mapa contendo diversas informações sobre o componente e o perfil. Se nenhum perfil de qualificação for encontrado, o mapa retornará um erro. Se for bem-sucedido, o mapa retornará o ID do perfil, o tipo de componente, o nome do componente, o nome do objeto e as variáveis de entrada do componente.

## Variáveis

Não existem variáveis de instância nesta classe.

## Detalhes técnicos

Esta classe é uma controladora de componentes dinâmicos, ela usa um método chamado `getDynamicComponentByProfile` que recebe um `recordId` e um `componentName`. 

O `recordId` é usado para obter o nome do objeto e buscar o perfil de qualificação correspondente. O `componentName` é usado para encontrar o perfil de qualificação que corresponde a esse componente.

Se nenhum perfil de qualificação for encontrado, o método retornará um mapa com uma mensagem de erro. Se for bem-sucedido, o método retornará um mapa com o ID do perfil, o tipo de componente, o nome do componente, o nome do objeto e as variáveis de entrada do componente.

O método usa uma exceção try-catch para lidar com possíveis erros que possam ocorrer durante a execução. Se ocorrer um erro, uma exceção `AuraHandledException` será lançada com a mensagem de erro e a pilha de chamadas. 

## Explicação para leigos

Imagine que você está usando um software e dependendo do seu perfil (como administrador, usuário regular, visitante), você vê diferentes recursos ou componentes na tela. Esta classe é como o gerente que decide que recursos você deve ver com base no seu perfil. Ele olha para o seu perfil, verifica quais componentes correspondem ao seu perfil e, em seguida, exibe esses componentes para você. Se ele não encontrar nenhum componente que corresponda ao seu perfil, ele lhe dirá que não encontrou nada. Se ocorrer algum erro durante esse processo, ele lhe dirá qual é o problema.
# Documentação da Classe de Teste Apex DWUsedVehicleSectionControllerTest

## Descrição
A classe `DWUsedVehicleSectionControllerTest` é responsável por realizar testes unitários dos métodos disponíveis na classe `DWUsedVehicleSectionController`. Estes testes garantem que os métodos da classe principal estão executando como esperado.

## Implementação

```apex
@IsTest
private class DWUsedVehicleSectionControllerTest {
    
    @IsTest
    static void testGetOppWithSameStock_noOtherOpps() {
            // Código do teste
    }

    @IsTest
    static void testGetOppWithSameStock_withOtherOpps_sameOwner() {
            // Código do teste
    }

    @IsTest
    static void testGetOppWithSameStock_withOtherOpps_differentOwner() {
            // Código do teste
    }

    @IsTest
    static void testGetOppWithSameStock_withInvalidId() {
            // Código do teste
    }
}
```

## Métodos de Teste

### `testGetOppWithSameStock_noOtherOpps()`

Este método de teste verifica o cenário em que não há outras oportunidades (`Opps`) com o mesmo estoque. Ele cria uma série de dados de teste, incluindo um usuário, uma conta, um ativo e uma oportunidade, e então chama o método `getOppWithSameStock()` da classe `DWUsedVehicleSectionController` com o ID do estoque e da oportunidade. O método de teste então verifica se os resultados retornados estão corretos.

### `testGetOppWithSameStock_withOtherOpps_sameOwner()`

Este método de teste verifica o cenário em que existem outras oportunidades (`Opps`) com o mesmo estoque e o mesmo proprietário. Similar ao método de teste anterior, ele cria dados de teste e chama o método `getOppWithSameStock()`. O teste então verifica se os resultados retornados estão corretos.

### `testGetOppWithSameStock_withOtherOpps_differentOwner()`

Este método de teste verifica o cenário em que existem outras oportunidades (`Opps`) com o mesmo estoque, mas com proprietários diferentes. Ele cria dados de teste, incluindo dois usuários e duas oportunidades, cada uma com um proprietário diferente, e então chama o método `getOppWithSameStock()`. O teste então verifica se os resultados retornados estão corretos.

### `testGetOppWithSameStock_withInvalidId()`

Este método de teste verifica o cenário em que o ID da oportunidade fornecido ao método `getOppWithSameStock()` é inválido. O método de teste chama `getOppWithSameStock()` com um ID inválido e verifica se uma exceção é lançada.

## Leigo

Esta classe de teste é como um inspetor de qualidade para a classe `DWUsedVehicleSectionController`. Ela executa a classe `DWUsedVehicleSectionController` em diferentes cenários para garantir que tudo esteja funcionando corretamente. Se algo não estiver funcionando como deveria, essa classe de teste nos ajudará a descobrir.
# Documentação da Classe Apex DW_GetAvaliacaoResponseTemplate

## Descrição
A classe `DW_GetAvaliacaoResponseTemplate` é responsável por estruturar a resposta de uma avaliação. Essa classe contém informações como mensagem, modelo do veículo, preço de avaliação, valor sugerido, previsão de reparo e outros.

## Implementação

```apex
public with sharing class DW_GetAvaliacaoResponseTemplate {
        public String message;
    public String modelo; //"A CLASSIFICAR",
    public String molicar; //null,
    public String observacao; //null,
    public String placa; //"AQQ0661 ",
    public String chassi; //"9BWDH5BZ5KP581675",
    public Decimal precoAvaliacao; //80000.00,
    public Decimal avaliacaoMaisTOP; //80000.00,
    public Decimal precoCliente; //100000.00,
    public Decimal valorTop; //0.00,
    public Decimal valorSugerido; //null,
    public Decimal previsaoReparo; //0.00,
    public String dataAvaliacao; //"2025-05-08T09:59:00",
    public Integer diasValidade; //7
}
```

## Variáveis

### `message`
- Tipo: `String`
- Descrição: Armazena a mensagem da resposta da avaliação.

### `modelo`
- Tipo: `String`
- Descrição: Armazena o modelo do veículo a ser avaliado.

### `molicar`
- Tipo: `String`
- Descrição: Variável para armazenar dados específicos, pode estar vazia.

### `observacao`
- Tipo: `String`
- Descrição: Armazena observações referentes à avaliação.

### `placa`
- Tipo: `String`
- Descrição: Armazena a placa do veículo a ser avaliado.

### `chassi`
- Tipo: `String`
- Descrição: Armazena o número do chassi do veículo a ser avaliado.

### `precoAvaliacao`
- Tipo: `Decimal`
- Descrição: Armazena o preço da avaliação do veículo.

### `avaliacaoMaisTOP`
- Tipo: `Decimal`
- Descrição: Armazena o valor da avaliação mais top do veículo.

### `precoCliente`
- Tipo: `Decimal`
- Descrição: Armazena o preço sugerido pelo cliente.

### `valorTop`
- Tipo: `Decimal`
- Descrição: Armazena o valor top para a avaliação.

### `valorSugerido`
- Tipo: `Decimal`
- Descrição: Armazena o valor sugerido para a avaliação.

### `previsaoReparo`
- Tipo: `Decimal`
- Descrição: Armazena a previsão do custo de reparo do veículo.

### `dataAvaliacao`
- Tipo: `String`
- Descrição: Armazena a data da avaliação.

### `diasValidade`
- Tipo: `Integer`
- Descrição: Armazena o número de dias de validade da avaliação.
# Documentação da Classe Apex DW_ScheduleEventByQueueAvailability

## Descrição

A classe `DW_ScheduleEventByQueueAvailability` é responsável por manipular e obter informações sobre agendamentos de eventos no Salesforce, considerando a disponibilidade de usuários e grupos na fila.

## Implementação

```apex
public without sharing class DW_ScheduleEventByQueueAvailability {
        // Métodos da classe
}
```

## Métodos

### `getGroupsTypeQueue()`

Método utilizado para obter uma lista de grupos do tipo \'Queue\' no Salesforce e serializar essa lista em formato JSON.

#### Parâmetros

- Nenhum.

#### Retorno

- `String`: Lista de grupos do tipo \'Queue\' em formato JSON.

### `getAvailableScheduleGridByQueue(String recordId, Date referenceDay, Integer startDayHour, Integer endDayHour)`

Método utilizado para obter a grade de horários disponíveis de uma fila específica, baseado em um dia de referência e horários de início e fim do dia.

#### Parâmetros

- `recordId` (String): ID do registro.
- `referenceDay` (Date): Dia de referência para a grade de horários.
- `startDayHour` (Integer): Hora de início do dia.
- `endDayHour` (Integer): Hora de fim do dia.

#### Retorno

- `String`: Grade de horários disponíveis em formato JSON.

### `getActionCadenceStepComments(String targetId)`

Método utilizado para obter os comentários de uma etapa de cadência de ação.

#### Parâmetros

- `targetId` (String): ID do alvo.

#### Retorno

- `String`: Comentários da etapa de cadência de ação.

### `insertEvent(String eventJson, String queueOrUserId, String eventCallLink)`

Método utilizado para inserir um novo evento, baseado em um objeto JSON que representa o evento, um ID de usuário ou fila e um link de chamada para o evento.

#### Parâmetros

- `eventJson` (String): Objeto JSON que representa o evento.
- `queueOrUserId` (String): ID do usuário ou da fila.
- `eventCallLink` (String): Link de chamada para o evento.

#### Retorno

- `String`: Resultado da operação de inserção do evento.

## Variáveis

Esta classe não possui variáveis de instância.

## Observações

- Alguns métodos da classe possuem blocos de código comentados que foram deixados para futura referência ou uso. Esses blocos de código não afetam o comportamento atual da classe.
- O código desta classe faz uso extensivo de consultas SOQL para interagir com os dados no Salesforce.
- Esta classe também faz uso de exceções para lidar com erros que podem ocorrer durante a execução dos métodos.
# Documentação da Classe Apex DW_DocusignCreateDocumentBatch

## Descrição

A classe `DW_DocusignCreateDocumentBatch` é responsável por realizar operações relacionadas à criação de documentos Docusign de maneira programada (Batch) e agendada (Schedulable) no Salesforce.

## Implementação

```apex
global with sharing class DW_DocusignCreateDocumentBatch implements Database.Batchable<SObject>, Database.AllowsCallouts, Schedulable {
    
    // Métodos e variáveis da classe...

}
```

## Métodos

### `scheduleThisClass(String cron)`

Método utilizado para programar a execução desta classe de acordo com uma expressão cron.

#### Parâmetros

- `cron` (String): Expressão cron que representa o horário de execução desejado.

#### Retorno

- Nenhum.

### `execute(SchedulableContext param1)`

Método utilizado para executar a operação programada.

#### Parâmetros

- `param1` (SchedulableContext): Contexto de programação.

#### Retorno

- Nenhum.

### `runEveryNMinutes(Integer each)`

Método utilizado para programar a execução desta classe a cada N minutos.

#### Parâmetros

- `each` (Integer): Intervalo de tempo em minutos.

#### Retorno

- Nenhum.

### `runEveryNMinutesInBusinessHours(Integer each)`

Método utilizado para programar a execução desta classe a cada N minutos durante o horário comercial.

#### Parâmetros

- `each` (Integer): Intervalo de tempo em minutos.

#### Retorno

- Nenhum.

### `cancelThisSchedule()`

Método utilizado para cancelar a programação atual desta classe.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.

### `start(Database.BatchableContext param1)`

Método utilizado para iniciar a operação programada.

#### Parâmetros

- `param1` (Database.BatchableContext): Contexto de operação programada.

#### Retorno

- `Iterable<SObject>`: Conjunto de registros a serem processados.

### `execute(Database.BatchableContext param1, List<DWEnvelopeDocusign__c> envelopeList)`

Método utilizado para executar a operação programada em cada registro do conjunto.

#### Parâmetros

- `param1` (Database.BatchableContext): Contexto de operação programada.
- `envelopeList` (List<DWEnvelopeDocusign__c>): Lista de envelopes Docusign a serem processados.

#### Retorno

- Nenhum.

### `finish(Database.BatchableContext param1)`

Método utilizado para finalizar a operação programada.

#### Parâmetros

- `param1` (Database.BatchableContext): Contexto de operação programada.

#### Retorno

- Nenhum.

## Variáveis

- Nenhuma variável de instância nesta classe.
# Documentação da Classe de Teste Apex `DW_DynamicComponentControllerTest`

## Descrição

A classe `DW_DynamicComponentControllerTest` é responsável por realizar os testes unitários da classe `DW_DynamicComponentController` no Salesforce.

## Implementação

```apex
@isTest
public with sharing class DW_DynamicComponentControllerTest {
        @isTest(seeAllData=true)
    static void testGetDynamicComponentByProfile() {
            Test.startTest();
        List<DW_QP__PerfilQualificacao__c> profiles = [
                SELECT Id, DWAcaoPerfil__c, DWContextoPerfil__c, DWTipoComponente__c, RecordType.DeveloperName
            FROM DW_QP__PerfilQualificacao__c
            WHERE 
                DWContextoPerfil__c = \'Componente de tela\' AND
                DWAcaoPerfil__c != null
        ];
        
        Id recordId = Database.query(\'select id from \' + profiles.get(0).RecordType.DeveloperName + \' limit 1\').get(0).Id;
        String componentName = profiles.get(0).DWAcaoPerfil__c;

        Test.stopTest();
    }

    @isTest(seeAllData=true)
    static void testGetDynamicComponentByProfileEmpty() {
            List<DW_QP__PerfilQualificacao__c> profiles = [
                SELECT Id, DWAcaoPerfil__c, DWContextoPerfil__c, DWTipoComponente__c, RecordType.DeveloperName
            FROM DW_QP__PerfilQualificacao__c
            WHERE 
                DWContextoPerfil__c = \'Componente de tela\' AND
                DWAcaoPerfil__c != null
        ];

        Test.startTest();
        Map<String, Object> result = DW_DynamicComponentController.getDynamicComponentByProfile(
                Database.query(\'select id from \' + profiles.get(0).RecordType.DeveloperName + \' limit 1\').get(0).Id, 
            \'dw\'
        );
        Test.stopTest();
    }
}
```

## Métodos de Teste

### `testGetDynamicComponentByProfile()`

O método `testGetDynamicComponentByProfile` é um teste unitário que verifica o comportamento do método `getDynamicComponentByProfile` da classe `DW_DynamicComponentController`.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.

### `testGetDynamicComponentByProfileEmpty()`

O método `testGetDynamicComponentByProfileEmpty` é um teste unitário que verifica o comportamento do método `getDynamicComponentByProfile` da classe `DW_DynamicComponentController` quando um componente dinâmico vazio é passado como parâmetro.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.

## Variáveis

Não há variáveis de instância na classe `DW_DynamicComponentControllerTest`.

### Explicação para Leigos

Esta classe é como um inspetor que verifica se os métodos na classe `DW_DynamicComponentController` estão funcionando corretamente. Ela tem dois métodos de teste que verificam o comportamento de um método específico chamado `getDynamicComponentByProfile` em diferentes cenários.
# Documentação da Classe Apex MicrobatchSelfRegController

## Descrição

A classe `MicrobatchSelfRegController` é responsável por controlar o registro de usuários no contexto de uma comunidade no Salesforce.

## Implementação

```apex
public class MicrobatchSelfRegController {
        public String firstName {get; set;}
    public String lastName {get; set;}
    public String email {get; set;}
    public String communityNickname {get; set { communityNickname = value == null ? value : value.trim(); } }

    public MicrobatchSelfRegController() {
            String expid = ApexPages.currentPage().getParameters().get(\'expid\');
        if (expId != null) {
                Site.setExperienceId(expId);
        }
    }

    public PageReference registerUser() {
            String userName = email;
        String accountName;
        String contactName;
        String profileId = null;
        String UUID;

        User u = new User();
        u.Username = userName;
        u.Email = email;
        u.FirstName = firstName;
        u.LastName = lastName;
        u.CommunityNickname = communityNickname;
        u.ProfileId = profileId;
        u.LocaleSidKey = \'en_US\';
        u.TimeZoneSidKey = \'GMT\';
        u.LanguageLocaleKey = \'en_US\';
        u.EmailEncodingKey = \'UTF-8\';

        Account acc = new Account();
        acc.Name = \'Account for \' + lastName;
        Contact c = new Contact();
        c.lastName = lastName;

        try {
                UUID = Network.createExternalUserAsync(u, c,acc);
        } catch(Site.ExternalUserCreateException ex) {
                List<String> errors = ex.getDisplayMessages();
            for (String error : errors)  {
                    ApexPages.addMessage(new ApexPages.Message(ApexPages.Severity.ERROR, error));
            }

            System.debug(ex.getMessage());
        }

        if (UUID != null) {
               PageReference page = System.Page.CommunitiesSelfRegConfirm;
           page.setRedirect(true);
           return page;
        }

        return null;
    }
}
```

## Métodos

### `MicrobatchSelfRegController()`

Construtor da classe `MicrobatchSelfRegController`. Ele busca o parâmetro \'expid\' da página atual e, se existir, define o ID da experiência do site.

#### Parâmetros

- Nenhum.

#### Retorno

- Nenhum.

### `registerUser()`

Método utilizado para registrar um usuário na comunidade. Cria um novo usuário, conta e contato, e tenta criar um usuário externo de forma assíncrona. Se a criação do usuário externo for bem-sucedida, redireciona para a página de confirmação de auto-registro.

#### Parâmetros

- Nenhum.

#### Retorno

- `PageReference`: Referência para a página de confirmação de auto-registro se a criação do usuário externo for bem-sucedida, caso contrário, retorna nulo.

## Variáveis

### `firstName`

- Tipo: `String`
- Descrição: Armazena o primeiro nome do usuário a ser registrado.

### `lastName`

- Tipo: `String`
- Descrição: Armazena o sobrenome do usuário a ser registrado.

### `email`

- Tipo: `String`
- Descrição: Armazena o email do usuário a ser registrado.

### `communityNickname`

- Tipo: `String`
- Descrição: Armazena o apelido da comunidade para o usuário a ser registrado. O valor é automaticamente ajustado para remover espaços em branco no final.
# Documentação da Classe de Teste Apex `DW_GetMidiaControllerTest`

## Descrição

A classe `DW_GetMidiaControllerTest` é responsável por realizar testes unitários na classe `DW_GetMidiaController`. Ela verifica se os métodos de obtenção de mídias estão retornando os resultados esperados.

## Implementação

```apex
@isTest
private class DW_GetMidiaControllerTest {
        
    @isTest
    static void testGetMidias() {
            // Setup
        Account loja = new Account(Name = \'Loja Teste\');
        insert loja;

        // Criação de mídias ativas e inativas
        Midia__c midiaAtiva = new Midia__c(
                Name = \'Midia Ativa\',
            DWLoja__c = loja.Id,
            DWAtivo__c = true
        );
        Midia__c midiaInativa = new Midia__c(
                Name = \'Midia Inativa\',
            DWLoja__c = loja.Id,
            DWAtivo__c = false
        );
        insert new List<Midia__c>{ midiaAtiva, midiaInativa };

        // Execução do teste
        Test.startTest();
        List<Midia__c> resultado = DW_GetMidiaController.getMidias(loja.Id);
        Test.stopTest();

        // Verificação dos resultados
        System.assertEquals(1, resultado.size(), \'Deve retornar apenas mídias ativas\');
        System.assertEquals(\'Midia Ativa\', resultado[0].Name, \'A mídia ativa deve ser retornada\');
    }

    @isTest
    static void testGetMidiasLojaSemMidias() {
            // Setup
        Account loja = new Account(Name = \'Loja Vazia\');
        insert loja;

        // Execução do teste
        Test.startTest();
        List<Midia__c> resultado = DW_GetMidiaController.getMidias(loja.Id);
        Test.stopTest();

        // Verificação dos resultados
        System.assertEquals(0, resultado.size(), \'Nenhuma mídia deve ser retornada para loja sem mídias ativas\');
    }
}
```

## Métodos

### `testGetMidias()`

#### Descrição Técnica

Método de teste responsável por verificar o correto funcionamento do método `getMidias` da classe `DW_GetMidiaController`. Ele cria uma conta e duas mídias, uma ativa e uma inativa. O teste verifica se apenas a mídia ativa é retornada quando o método `getMidias` é chamado.

#### Descrição para Leigos

Este método testa se o programa está identificando corretamente as mídias ativas de uma loja. Ele cria uma loja com duas mídias, uma ativa e uma inativa, e verifica se somente a mídia ativa é retornada.

### `testGetMidiasLojaSemMidias()`

#### Descrição Técnica

Método de teste responsável por verificar o correto funcionamento do método `getMidias` da classe `DW_GetMidiaController` quando a loja não tem mídias ativas. Ele cria uma conta sem mídias e verifica se nenhuma mídia é retornada.

#### Descrição para Leigos

Este método testa se o programa está lidando corretamente com uma loja que não possui mídias ativas. Ele cria uma loja sem mídias e verifica se nenhuma mídia é retornada.
# Documentação da Classe Apex DW_CancelEnvDocusignBatch

## Descrição

A classe `DW_CancelEnvDocusignBatch` é responsável por cancelar envelopes de documentos em lote na plataforma DocuSign. Esta classe implementa as interfaces `Database.Batchable<SObject>`, `Database.AllowsCallouts` e `Schedulable`, permitindo que seja executada como um trabalho em lote, faça chamadas externas e seja programada, respectivamente.

## Implementação

```apex
global with sharing class DW_CancelEnvDocusignBatch implements Database.Batchable<SObject>, Database.AllowsCallouts, Schedulable {
        // restante do código
}
```

## Métodos

### `DW_CancelEnvDocusignBatch(List<String> envelopeIds, String motivo)`

Construtor da classe. Inicializa a classe com os IDs dos envelopes e o motivo do cancelamento.

#### Parâmetros

- `envelopeIds` (List<String>): Lista de IDs dos envelopes.
- `motivo` (String): Motivo do cancelamento.

#### Retorno

- Nenhum.

### `execute(SchedulableContext param1)`

Método que é executado quando o trabalho programado é disparado.

#### Parâmetros

- `param1` (SchedulableContext): Contexto do trabalho programado.

#### Retorno

- Nenhum.

### `start(Database.BatchableContext param1)`

Método que é executado no início do trabalho em lote. Retorna um iterável de registros que serão processados em lote.

#### Parâmetros

- `param1` (Database.BatchableContext): Contexto do trabalho em lote.

#### Retorno

- `Iterable<SObject>`: Iterável de registros a serem processados.

### `execute(Database.BatchableContext param1, List<DWEnvelopeDocusign__c> envelopeList)`

Método que é executado para cada lote de registros. Realiza o processo de cancelamento dos envelopes.

#### Parâmetros

- `param1` (Database.BatchableContext): Contexto do trabalho em lote.
- `envelopeList` (List<DWEnvelopeDocusign__c>): Lista de envelopes a serem cancelados.

#### Retorno

- Nenhum.

### `finish(Database.BatchableContext param1)`

Método que é executado após todos os lotes terem sido processados.

#### Parâmetros

- `param1` (Database.BatchableContext): Contexto do trabalho em lote.

#### Retorno

- Nenhum.

### `cancelEnvDocusing(List<CancelEnvelopeRequest> requests)`

Método invocável que recebe uma lista de pedidos de cancelamento de envelope e executa o trabalho em lote.

#### Parâmetros

- `requests` (List<CancelEnvelopeRequest>): Lista de pedidos de cancelamento de envelope.

#### Retorno

- Nenhum.

## Variáveis

### `envelopeIds`

- Tipo: `List<String>`
- Descrição: Armazena os IDs dos envelopes a serem cancelados.

### `motivoCancelamento`

- Tipo: `String`
- Descrição: Armazena o motivo do cancelamento dos envelopes.

## Classes Internas

### `CancelEnvelopeRequest`

Classe interna que encapsula os parâmetros para o cancelamento de envelopes.

#### Variáveis

- `envelopeIds` (List<String>): IDs dos envelopes a serem cancelados.
- `motivo` (String): Motivo do cancelamento.
# Documentação da Classe Apex `MyProfilePageController`

## Descrição
A classe `MyProfilePageController` é responsável por gerenciar e atualizar os detalhes do usuário do portal. Usuários convidados (guest users) não têm acesso a esta página.

## Implementação
```apex
public with sharing class MyProfilePageController {
    
    private User user;
    private boolean isEdit = false;

    public User getUser() {
            return user;
    }

    public MyProfilePageController() {
            user = [SELECT id, email, username, usertype, communitynickname, timezonesidkey, languagelocalekey, firstname, lastname, phone, title,
                street, city, country, postalcode, state, localesidkey, mobilephone, extension, fax, contact.email
                FROM User
                WHERE id = :UserInfo.getUserId()];
        // guest users should never be able to access this page
        if (user.usertype == \'GUEST\') {
                throw new NoAccessException();
        }
    }

    public Boolean getIsEdit() {
            return isEdit;
    }

    public void edit() {
            isEdit=true;
    }

    public void save() {
            try {
                update user;
            isEdit=false;
        } catch(DmlException e) {
                ApexPages.addMessages(e);
        }
    }

    public PageReference changePassword() {
            return Page.ChangePassword;
    }

    public void cancel() {
            isEdit=false;
        user = [SELECT id, email, username, communitynickname, timezonesidkey, languagelocalekey, firstname, lastname, phone, title,
                street, city, country, postalcode, state, localesidkey, mobilephone, extension, fax, contact.email
                FROM User
                WHERE id = :UserInfo.getUserId()];
    }    
}
```

## Métodos

### `getUser()`

Método utilizado para obter o usuário atual.

#### Parâmetros
- Nenhum.

#### Retorno
- `User`: Usuário atual.

### `MyProfilePageController()`

Construtor que busca os dados do usuário atual e verifica se é um usuário convidado. Se for um usuário convidado, uma exceção é lançada.

#### Parâmetros
- Nenhum.

#### Retorno
- Nenhum.

### `getIsEdit()`

Método utilizado para verificar se o usuário está no modo de edição.

#### Parâmetros
- Nenhum.

#### Retorno
- `Boolean`: Verdadeiro se o usuário está no modo de edição, falso caso contrário.

### `edit()`

Método para colocar o perfil do usuário em modo de edição.

#### Parâmetros
- Nenhum.

#### Retorno
- Nenhum.

### `save()`

Método para salvar as alterações feitas no perfil do usuário. Se ocorrer uma exceção durante a atualização, a mensagem de erro é adicionada à página.

#### Parâmetros
- Nenhum.

#### Retorno
- Nenhum.

### `changePassword()`

Método para redirecionar o usuário para a página de alteração de senha.

#### Parâmetros
- Nenhum.

#### Retorno
- `PageReference`: Referência para a página de alteração de senha.

### `cancel()`

Método para cancelar a edição do perfil e recarregar os dados do usuário.

#### Parâmetros
- Nenhum.

#### Retorno
- Nenhum.

## Variáveis

### `user`
- Tipo: `User`
- Descrição: Armazena os dados do usuário atual.

### `isEdit`
- Tipo: `Boolean`
- Descrição: Determina se o perfil do usuário está em modo de edição.
# Documentação da Classe Apex DW_InteractionHistoryDTO

## Descrição

A classe `DW_InteractionHistoryDTO` é responsável por armazenar as informações de histórico de interação em Salesforce. Essa classe contém uma subclasse `RelatedRecordData` que implementa a interface `Comparable`, usada para ordenar objetos desta subclasse.

## Implementação

```apex
public with sharing class DW_InteractionHistoryDTO{
        @AuraEnabled
    public String recordId { get;set; } 
    @AuraEnabled
    public String recordName { get;set; } 
    @AuraEnabled
    public String objectName { get;set; } 
    @AuraEnabled  
    public String title { get;set; } 
    @AuraEnabled  
    public List<RelatedRecordData> relatedRecords { get;set; }   

    public class RelatedRecordData implements Comparable{
            @AuraEnabled 
        public String id { get; set; } //Id
        @AuraEnabled 
        public String nome { get; set; } //Nome
        @AuraEnabled 
        public String tipo { get; set; } //Tipo
        @AuraEnabled 
        public String cliente { get; set; } //Cliente
        @AuraEnabled 
        public String nomeCliente { get; set; } //Cliente
        @AuraEnabled 
        public String status { get; set; } //Status
        @AuraEnabled 
        public String telefone { get; set; } //Telefone
        @AuraEnabled 
        public String celular { get; set; } //Telefone
        @AuraEnabled 
        public String email { get; set; } //Email
        @AuraEnabled 
        public String dataCriacao { get; set; } //Data de Criação Formatada
        @AuraEnabled 
        public DateTime createdDate { get; set; } //Data de Criação
        @AuraEnabled 
        public String documento { get; set; } //Documento
        @AuraEnabled 
        public String objRelacionado { get; set; } //Documento

        public Integer compareTo(Object obj) {
                RelatedRecordData other = (RelatedRecordData)obj;
            if (this.createdDate > other.createdDate) return -1;
            if (this.createdDate < other.createdDate) return 1;
            return 0;
        }
    }

    public DW_InteractionHistoryDTO() {
    
    }
}
```

## Métodos

### `compareTo(Object obj)`

Este método é usado para comparar dois objetos `RelatedRecordData` com base em suas datas de criação. 

#### Parâmetros

- `obj` (Object): o objeto a ser comparado.

#### Retorno

- `Integer`: retorna -1 se a data de criação do objeto atual for maior do que a do objeto comparado, 1 se for menor e 0 se forem iguais.

## Variáveis

### `recordId`

- Tipo: `String`
- Descrição: Armazena o ID do registro.

### `recordName`

- Tipo: `String`
- Descrição: Armazena o nome do registro.

### `objectName`

- Tipo: `String`
- Descrição: Armazena o nome do objeto.

### `title`

- Tipo: `String`
- Descrição: Armazena o título.

### `relatedRecords`

- Tipo: `List<RelatedRecordData>`
- Descrição: Armazena uma lista de objetos `RelatedRecordData`.

## Subclasse `RelatedRecordData`

Esta subclasse é usada para armazenar dados de registros relacionados ao registro principal.

### Variáveis

- `id`: Armazena o ID do registro relacionado.
- `nome`: Armazena o nome do registro relacionado.
- `tipo`: Armazena o tipo do registro relacionado.
- `cliente`: Armazena o cliente do registro relacionado.
- `nomeCliente`: Armazena o nome do cliente do registro relacionado.
- `status`: Armazena o status do registro relacionado.
- `telefone`: Armazena o telefone do registro relacionado.
- `celular`: Armazena o celular do registro relacionado.
- `email`: Armazena o email do registro relacionado.
- `dataCriacao`: Armazena a data de criação do registro relacionado em formato de string.
- `createdDate`: Armazena a data de criação do registro relacionado.
- `documento`: Armazena o documento do registro relacionado.
- `objRelacionado`: Armazena o objeto relacionado ao registro relacionado.
# Documentação da Classe Apex `DW_DocusignSendSignTemplate`

## Descrição

A classe `DW_DocusignSendSignTemplate` é responsável por enviar templates de assinatura para o Docusign. Ela contém informações sobre o assunto do email, os documentos a serem assinados e os destinatários.

## Implementação

```apex
public class DW_DocusignSendSignTemplate {
        public String assuntoEmail;
    public List<Documento> documentos;
    public Destinatarios destinatarios;

    public class Documento {
            public String documentoBase64;
        public String nomeDocumento;
        public String extensaoArquivo;
    }

    public class Destinatarios {
            public List<Assinador> assinadores;
        public List<CopiaDestinatario> copiaDestinatarios;
    }

    public class Assinador {
            public String email;
        public String nome;
        public Guias guias;
    }

    public class Guias {
            public List<AssineAqui> assineAqui;
        public List<DataAssinatura> dataAssinatura;
    }

    public class AssineAqui {
            public String ancora;
        public String tamanhoY;
        public String tamanhoX;
    }

    public class DataAssinatura {
            public String ancora;
        public String tamanhoY;
        public String tamanhoX;
        public String value;
    }

    public class CopiaDestinatario {
            public String email;
        public String nome;
    }
}
```

## Variáveis

### `assuntoEmail`
- Tipo: `String`
- Descrição: Armazena o assunto do email que será enviado pelo Docusign.

### `documentos`
- Tipo: `List<Documento>`
- Descrição: Lista de documentos a serem assinados. Cada documento é representado por uma classe interna `Documento` que contém o documento em base64, o nome do documento e a extensão do arquivo.

### `destinatarios`
- Tipo: `Destinatarios`
- Descrição: Representa os destinatários do email. Inclui os assinadores e destinatários de cópia.

## Classes Internas

### `Documento`
- Variáveis:
  - `documentoBase64` (String): Documento codificado em base64.
  - `nomeDocumento` (String): Nome do documento.
  - `extensaoArquivo` (String): Extensão do arquivo do documento.

### `Destinatarios`
- Variáveis:
  - `assinadores` (List<Assinador>): Lista de assinadores.
  - `copiaDestinatarios` (List<CopiaDestinatario>): Lista de destinatários que receberão uma cópia.

### `Assinador`
- Variáveis:
  - `email` (String): Email do assinador.
  - `nome` (String): Nome do assinador.
  - `guias` (Guias): Guias de assinatura para o assinador.

### `Guias`
- Variáveis:
  - `assineAqui` (List<AssineAqui>): Lista de guias "Assine Aqui".
  - `dataAssinatura` (List<DataAssinatura>): Lista de guias "Data de Assinatura".

### `AssineAqui`
- Variáveis:
  - `ancora` (String): Âncora para a guia "Assine Aqui".
  - `tamanhoY` (String): Tamanho Y da guia.
  - `tamanhoX` (String): Tamanho X da guia.

### `DataAssinatura`
- Variáveis:
  - `ancora` (String): Âncora para a guia "Data de Assinatura".
  - `tamanhoY` (String): Tamanho Y da guia.
  - `tamanhoX` (String): Tamanho X da guia.
  - `value` (String): Valor da guia.

### `CopiaDestinatario`
- Variáveis:
  - `email` (String): Email do destinatário da cópia.
  - `nome` (String): Nome do destinatário da cópia. 

## Descrição Leiga

A classe `DW_DocusignSendSignTemplate` é como uma carta, onde você define o assunto do email (assuntoEmail), os documentos que deseja enviar (documentos) e para quem deseja enviar (destinatários). Cada documento tem informações, como o documento em si (documentoBase64), o nome (nomeDocumento) e a extensão do arquivo (extensaoArquivo). Os destinatários podem ser pessoas que precisam assinar o documento (assinadores) ou apenas receber uma cópia dele (copiaDestinatarios). Para os assinadores, você pode especificar onde eles devem assinar (assineAqui) e onde a data da assinatura deve ser colocada (dataAssinatura).