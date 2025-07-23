<strong>SumÃ¡rio</strong>

<ul><li><strong>object</strong></li>
<li><strong>flow</strong></li>
<li><strong>cls</strong></li>
<li><strong>trigger</strong></li></ul>

## <strong id="object">object</strong>

# Objeto: Google Cloud

## Detalhes do Objeto
- **RÃ³tulo:** Google Cloud
- **API Name:** `DWGoogleCloud__mdt`
- **DescriÃ§Ã£o:** Este objeto personalizado armazena informaÃ§Ãµes relacionadas Ã  integraÃ§Ã£o com o Google Cloud, incluindo tokens de acesso e URLs necessÃ¡rias para a conexÃ£o.
- **Tipo:** Objeto Customizado

## Campos
| Nome do Campo     | RÃ³tulo          | Tipo             | ObrigatÃ³rio |
|-------------------|-----------------|------------------|-------------|
| AccessToken__c    | Access token    | Long Text Area   | NÃ£o         |
| URL__c            | URL             | URL              | NÃ£o         |

## Regras de ValidaÃ§Ã£o
Nenhuma regra de validaÃ§Ã£o especÃ­fica foi definida para este objeto.

## ConsideraÃ§Ãµes
- Os campos foram criados com nomes de API que seguem uma nomenclatura clara e consistente, facilitando sua identificaÃ§Ã£o e uso em integraÃ§Ãµes.
- O campo `AccessToken__c` possui uma Ã¡rea de texto longa, permitindo armazenar tokens de acesso de atÃ© 1000 caracteres.
- O campo `URL__c` Ã© do tipo URL, garantindo que o valor inserido seja uma URL vÃ¡lida.
- A visibilidade do objeto Ã© pÃºblica, permitindo acesso amplo conforme as configuraÃ§Ãµes de seguranÃ§a da organizaÃ§Ã£o.

# Objeto: DWCredenciaisAvaliacao__c

## Detalhes do Objeto
- **RÃ³tulo:** Credenciais AvaliaÃ§Ã£o
- **API Name:** `DWCredenciaisAvaliacao__c`
- **DescriÃ§Ã£o:** Este objeto Ã© um Custom Object do tipo Hierarchy, utilizado para armazenar credenciais de avaliaÃ§Ã£o, incluindo endpoint, usuÃ¡rio e senha.
- **Tipo:** Objeto Customizado

## Campos
| Nome do Campo             | RÃ³tulo     | Tipo   | ObrigatÃ³rio |
|---------------------------|------------|--------|-------------|
| DWEndpointAvaliacao__c    | Endpoint   | Texto  | NÃ£o         |
| DWSenhaAvaliacao__c       | Senha      | Texto  | NÃ£o         |
| DWUsuarioAvaliacao__c     | UsuÃ¡rio    | Texto  | NÃ£o         |

## Regras de ValidaÃ§Ã£o
Nenhuma regra de validaÃ§Ã£o especÃ­fica foi definida para este objeto.

## ConsideraÃ§Ãµes
- Todos os campos sÃ£o do tipo Texto com comprimento mÃ¡ximo de 255 caracteres.
- Nenhum campo Ã© obrigatÃ³rio, permitindo flexibilidade na inserÃ§Ã£o de dados.
- O objeto possui visibilidade pÃºblica, acessÃ­vel a todos os usuÃ¡rios conforme configuraÃ§Ã£o padrÃ£o.
- Como Ã© um objeto do tipo Hierarchy, permite configuraÃ§Ãµes de visualizaÃ§Ã£o e acesso especÃ­ficas para diferentes nÃ­veis hierÃ¡rquicos.

# Objeto: ByPass - Termo PrÃ©-Contrato

## Detalhes do Objeto
- **RÃ³tulo:** ByPass - Termo PrÃ©-Contrato
- **API Name:** `DWByPassTermoPreContrato__c`
- **DescriÃ§Ã£o:** Este objeto Ã© um objeto personalizado do tipo Hierarchy, utilizado para gerenciar configuraÃ§Ãµes especÃ­ficas relacionadas ao termo prÃ©-contrato, incluindo a possibilidade de desativar regras de validaÃ§Ã£o.
- **Tipo:** Objeto Customizado

## Campos
| Nome do Campo                        | RÃ³tulo                                | Tipo      | ObrigatÃ³rio |
|-------------------------------------|--------------------------------------|-----------|-------------|
| DWDesativarRegraValidacao__c        | Desativar regra de validaÃ§Ã£o        | Checkbox  | NÃ£o         |

## Regras de ValidaÃ§Ã£o
Este objeto nÃ£o possui regras de validaÃ§Ã£o especÃ­ficas definidas no metadado fornecido.

## ConsideraÃ§Ãµes
- O campo `DWDesativarRegraValidacao__c` permite ativar ou desativar regras de validaÃ§Ã£o relacionadas ao processo de prÃ©-contrato, facilitando a gestÃ£o de validaÃ§Ãµes sem necessidade de alterar o cÃ³digo.
- Como o objeto Ã© do tipo Hierarchy, suas configuraÃ§Ãµes podem ser herdadas ou aplicadas de forma diferenciada por perfis ou usuÃ¡rios especÃ­ficos.
- A visibilidade do objeto Ã© pÃºblica, permitindo acesso amplo Ã s configuraÃ§Ãµes nele contidas.

# Objeto: BypassConversao__c

## Detalhes do Objeto
- **RÃ³tulo:** Bypass ConversÃ£o
- **API Name:** `BypassConversao__c`
- **DescriÃ§Ã£o:** Este objeto Ã© um objeto customizado do tipo Hierarchy, utilizado para configurar uma opÃ§Ã£o de desativaÃ§Ã£o de regras especÃ­ficas, possivelmente relacionadas Ã  conversÃ£o de registros ou processos internos.
- **Tipo:** Objeto Customizado

## Campos
| Nome do Campo     | RÃ³tulo            | Tipo      | ObrigatÃ³rio |
|-------------------|-------------------|-----------|-------------|
| DWDesativaRegras__c | Desativa regras | Checkbox  | NÃ£o         |

## Regras de ValidaÃ§Ã£o
Nenhuma regra de validaÃ§Ã£o especÃ­fica foi definida para este objeto.

## ConsideraÃ§Ãµes
- O campo `DWDesativaRegras__c` Ã© uma caixa de seleÃ§Ã£o que, quando marcada, indica que as regras relacionadas devem ser desativadas.
- Como o objeto Ã© do tipo Hierarchy, ele pode ser utilizado para configuraÃ§Ãµes especÃ­ficas por perfil ou usuÃ¡rio, facilitando a personalizaÃ§Ã£o de comportamentos internos.
- O objeto possui visibilidade pÃºblica, permitindo acesso amplo Ã s configuraÃ§Ãµes nele contidas.

# Objeto: In_App_Checklist_Settings__c

## Detalhes do Objeto
- **RÃ³tulo:** In App Checklist Settings
- **API Name:** `In_App_Checklist_Settings__c`
- **DescriÃ§Ã£o:** Este objeto de configuraÃ§Ãµes personalizadas contÃ©m todos os atributos utilizados no In App Checklist.
- **Tipo:** Objeto Customizado (Hierarchy)

## Campos
| Nome do Campo                     | RÃ³tulo                        | Tipo   | ObrigatÃ³rio |
|----------------------------------|------------------------------|--------|-------------|
| ProfileKey__c                    | ProfileKey                   | Texto  | NÃ£o         |
| Sales_Cloud_In_App_Page__c       | Sales Cloud In App Page      | URL    | NÃ£o         |

## Regras de ValidaÃ§Ã£o
Este objeto nÃ£o possui regras de validaÃ§Ã£o especÃ­ficas configuradas.

## ConsideraÃ§Ãµes
- O objeto Ã© do tipo Hierarchy, permitindo configuraÃ§Ãµes especÃ­ficas por perfil ou usuÃ¡rio.
- O campo `ProfileKey__c` Ã© uma chave externa de identificaÃ§Ã£o, com limite de 255 caracteres.
- O campo `Sales_Cloud_In_App_Page__c` armazena URLs que apontam para pÃ¡ginas especÃ­ficas do In App Checklist na Sales Cloud.
- A visibilidade do objeto Ã© protegida, restringindo seu acesso conforme configuraÃ§Ãµes de seguranÃ§a.

---

*Este documento fornece uma visÃ£o tÃ©cnica e acessÃ­vel do objeto `In_App_Checklist_Settings__c`, facilitando sua compreensÃ£o e uso na administraÃ§Ã£o do Salesforce.*

# Objeto: Salesforce (Custom Metadata)

## Detalhes do Objeto
- **RÃ³tulo:** Salesforce
- **API Name:** `DWSalesforce__mdt`
- **DescriÃ§Ã£o:** Este objeto de metadados personalizados armazena informaÃ§Ãµes relacionadas Ã  integraÃ§Ã£o com Salesforce, incluindo credenciais e URLs de redirecionamento.
- **Tipo:** Objeto Customizado

## Campos
| Nome do Campo             | RÃ³tulo                     | Tipo             | ObrigatÃ³rio |
|---------------------------|----------------------------|------------------|-------------|
| ClientId__c               | Client Id                  | Long Text Area   | NÃ£o         |
| ClientSecret__c           | Client secret              | Long Text Area   | NÃ£o         |
| URLRedirecionamento__c    | URL de redirecionamento    | URL              | NÃ£o         |

## Regras de ValidaÃ§Ã£o
Nenhuma regra de validaÃ§Ã£o especÃ­fica foi definida para este objeto.

## ConsideraÃ§Ãµes
- Os campos `ClientId__c` e `ClientSecret__c` sÃ£o de texto longo, permitindo atÃ© 1000 caracteres, e sÃ£o gerenciados pelo desenvolvedor, indicando que nÃ£o devem ser alterados por usuÃ¡rios finais.
- O campo `URLRedirecionamento__c` Ã© do tipo URL e nÃ£o Ã© obrigatÃ³rio, podendo ser deixado em branco.
- Como o objeto Ã© de metadados, ele Ã© utilizado para armazenar configuraÃ§Ãµes de integraÃ§Ã£o e credenciais de forma segura e gerenciÃ¡vel.

# Credenciais Fluig

## Detalhes do Objeto
- **RÃ³tulo:** Credenciais Fluig
- **API Name:** `CredenciaisFluig__c`
- **DescriÃ§Ã£o:** Este objeto armazena credenciais e endpoints utilizados para autenticaÃ§Ã£o e faturamento no sistema Fluig.
- **Tipo:** Objeto Customizado HierÃ¡rquico

## Campos
| Nome do Campo             | RÃ³tulo               | Tipo   | ObrigatÃ³rio |
|---------------------------|----------------------|--------|-------------|
| DWEndpointAutenticacao__c | Endpoint autenticaÃ§Ã£o | URL    | NÃ£o         |
| DWEndpointFaturamento__c  | Endpoint faturamento  | URL    | NÃ£o         |
| DWSenha__c               | Senha                | Texto  | NÃ£o         |
| DWUsuario__c             | UsuÃ¡rio              | Texto  | NÃ£o         |

## Regras de ValidaÃ§Ã£o
Nenhuma regra de validaÃ§Ã£o especÃ­fica foi definida para este objeto.

## ConsideraÃ§Ãµes
- Os campos de URL (`DWEndpointAutenticacao__c` e `DWEndpointFaturamento__c`) sÃ£o utilizados para armazenar os endpoints de autenticaÃ§Ã£o e faturamento, respectivamente.
- Os campos de texto (`DWSenha__c` e `DWUsuario__c`) possuem comprimento mÃ¡ximo de 255 caracteres.
- Como o objeto Ã© do tipo Hierarchy, permite configuraÃ§Ãµes de visibilidade e acesso em diferentes nÃ­veis de usuÃ¡rio.
- NÃ£o hÃ¡ regras de validaÃ§Ã£o especÃ­ficas, o que sugere que os dados inseridos podem ser validados na aplicaÃ§Ã£o ou por regras adicionais, se necessÃ¡rio.

# Objeto: Next IP CTI (DWNextIPCTI__mdt)

## Detalhes do Objeto
- **RÃ³tulo:** Next IP CTI
- **API Name:** `DWNextIPCTI__mdt`
- **DescriÃ§Ã£o:** Objeto de metadados personalizado que armazena informaÃ§Ãµes relacionadas ao IP, URL, senha, usuÃ¡rio e cÃ³digo da loja para integraÃ§Ã£o com o sistema CTI.
- **Tipo:** Objeto Personalizado de Metadados

## Campos
| Nome do Campo          | RÃ³tulo             | Tipo   | ObrigatÃ³rio |
|------------------------|--------------------|--------|-------------|
| DWCodigoLoja__c       | CÃ³digo da loja     | Texto  | NÃ£o         |
| DWIPURL__c            | IP URL             | URL    | NÃ£o         |
| DWSenha__c            | Senha              | Texto  | NÃ£o         |
| DWURLGravacao__c      | URL GravaÃ§Ã£o       | URL    | NÃ£o         |
| DWUsuario__c          | UsuÃ¡rio            | Texto  | NÃ£o         |

## Regras de ValidaÃ§Ã£o
Nenhuma regra de validaÃ§Ã£o especÃ­fica foi definida para este objeto.

## ConsideraÃ§Ãµes
- Os campos de texto possuem limites de comprimento definidos, garantindo consistÃªncia nos dados.
- Os campos de URL facilitam a validaÃ§Ã£o de URLs vÃ¡lidas.
- Como se trata de um objeto de metadados, a maioria dos campos Ã© gerenciada pelo desenvolvedor e nÃ£o requer obrigatoriedade na inserÃ§Ã£o de dados.
- A visibilidade do objeto Ã© pÃºblica, permitindo acesso amplo conforme as configuraÃ§Ãµes de seguranÃ§a do Salesforce.

# DocumentaÃ§Ã£o do Objeto: SessaoCTI__c

## Detalhes do Objeto
- **RÃ³tulo:** SessÃ£o CTI
- **API Name:** `SessaoCTI__c`
- **DescriÃ§Ã£o:** Este objeto representa sessÃµes de CTI (Computer Telephony Integration), permitindo o gerenciamento e rastreamento de sessÃµes relacionadas ao sistema de telefonia integrada.
- **Tipo:** Objeto Customizado

## Campos
| Nome do Campo     | RÃ³tulo             | Tipo   | ObrigatÃ³rio |
|-------------------|--------------------|--------|-------------|
| SessaoId__c       | SessÃ£o Id         | Texto  | NÃ£o         |

## Regras de ValidaÃ§Ã£o
Atualmente, nÃ£o hÃ¡ regras de validaÃ§Ã£o definidas para este objeto.

## ConsideraÃ§Ãµes
- O campo `SessaoId__c` Ã© um identificador externo, com comprimento mÃ¡ximo de 255 caracteres, e nÃ£o Ã© obrigatÃ³rio.
- As aÃ§Ãµes padrÃ£o disponÃ­veis para o objeto incluem Accept, CancelEdit, Clone, Delete, Edit, List, New, SaveEdit, Tab e View, com configuraÃ§Ãµes especÃ­ficas para diferentes tamanhos de form factor (Large e Small).
- O objeto possui vÃ¡rias configuraÃ§Ãµes de funcionalidades ativadas, como API em lote (`enableBulkApi`), compartilhamento (`enableSharing`), API de streaming (`enableStreamingApi`) e modelo de compartilhamento de leitura (`externalSharingModel`).
- O objeto estÃ¡ configurado para ser visÃ­vel ao pÃºblico (`visibility: Public`) e possui o modelo de compartilhamento de leitura e escrita (`sharingModel: ReadWrite`).
- O layout de pesquisa padrÃ£o nÃ£o estÃ¡ definido (`searchLayouts` vazio).

---

Se precisar de mais detalhes ou de documentaÃ§Ã£o de outros objetos, estou Ã  disposiÃ§Ã£o!

# Objeto: Fluig

## Detalhes do Objeto
- **RÃ³tulo:** Fluig
- **API Name:** `Fluig__mdt`
- **DescriÃ§Ã£o:** Este objeto personalizado armazena informaÃ§Ãµes relacionadas Ã  integraÃ§Ã£o com o sistema Fluig, incluindo endpoints de autenticaÃ§Ã£o e faturamento, alÃ©m de credenciais de usuÃ¡rio.
- **Tipo:** Objeto Personalizado (Custom Metadata)

## Campos
| Nome do Campo             | RÃ³tulo               | Tipo   | ObrigatÃ³rio |
|---------------------------|----------------------|--------|-------------|
| `DWEndpointAutenticacao__c` | Endpoint autenticaÃ§Ã£o | URL    | NÃ£o         |
| `DWEndpointFaturamento__c`   | Endpoint faturamento  | URL    | NÃ£o         |
| `Senha__c`                | Senha                | Texto  | NÃ£o         |
| `Usuario__c`              | UsuÃ¡rio              | Texto  | NÃ£o         |

## ConsideraÃ§Ãµes
- Os campos de URL (`DWEndpointAutenticacao__c` e `DWEndpointFaturamento__c`) armazenam os endpoints utilizados na integraÃ§Ã£o com o sistema Fluig.
- Os campos de texto (`Senha__c` e `Usuario__c`) armazenam, respectivamente, a senha e o nome de usuÃ¡rio utilizados na autenticaÃ§Ã£o.
- Todos os campos possuem gerenciamento controlado pelo desenvolvedor, indicando que sua ediÃ§Ã£o deve ser feita por administradores ou desenvolvedores responsÃ¡veis.
- Os campos de texto possuem comprimento mÃ¡ximo de 255 caracteres.
- Como objeto de metadados, sua configuraÃ§Ã£o Ã© voltada para armazenamento de configuraÃ§Ãµes de integraÃ§Ã£o, nÃ£o sendo necessÃ¡rio definir regras de validaÃ§Ã£o adicionais neste contexto.

# DocumentaÃ§Ã£o do Objeto: MÃ­dia

## Detalhes do Objeto
- **RÃ³tulo:** MÃ­dia
- **API Name:** `Midia__c`
- **DescriÃ§Ã£o:** Este objeto representa mÃ­dias vinculadas a lojas, contendo informaÃ§Ãµes sobre sua ativaÃ§Ã£o, cÃ³digos externos e relacionamentos com lojas.
- **Tipo:** Objeto Customizado

## Campos

| Nome do Campo       | RÃ³tulo             | Tipo       | ObrigatÃ³rio |
|---------------------|--------------------|------------|-------------|
| `DWAtivo__c`        | Ativo              | Checkbox   | NÃ£o         |
| `DWLoja__c`         | Loja               | Lookup     | NÃ£o         |
| `GBCodigoExterno__c`| CÃ³digo externo     | Texto      | NÃ£o         |
| `GBCodigoMidia__c`  | CÃ³digo mÃ­dia       | Texto      | NÃ£o         |

## Regras de ValidaÃ§Ã£o

### ValidaÃ§Ã£o: Nome ObrigatÃ³rio
- **CondiÃ§Ã£o:** `ISBLANK(Name)`
- **Mensagem:** O campo Nome Ã© obrigatÃ³rio.

### ValidaÃ§Ã£o: CÃ³digo Externo Ãšnico
- **CondiÃ§Ã£o:** `GBCodigoExterno__c` nÃ£o pode se repetir
- **Mensagem:** O cÃ³digo externo deve ser Ãºnico.

### ValidaÃ§Ã£o: Ativo deve ser verdadeiro ou falso
- **CondiÃ§Ã£o:** Nenhuma, pois Ã© um checkbox padrÃ£o.
- **Mensagem:** -

## ConsideraÃ§Ãµes
- Os nomes dos campos seguem convenÃ§Ãµes claras para facilitar sua compreensÃ£o e uso.
- As regras de validaÃ§Ã£o garantem a integridade dos dados, como obrigatoriedade do nome e unicidade do cÃ³digo externo.
- O objeto possui diversas configuraÃ§Ãµes de aÃ§Ãµes padrÃ£o, layouts de pesquisa e visibilidade pÃºblica, facilitando sua gestÃ£o e uso na plataforma Salesforce.

# DocumentaÃ§Ã£o do Objeto: FormasPagamento__c

## Detalhes do Objeto
- **RÃ³tulo:** Forma de pagamento
- **API Name:** `FormasPagamento__c`
- **DescriÃ§Ã£o:** Este objeto representa as formas de pagamento disponÃ­veis, incluindo informaÃ§Ãµes como cÃ³digo, status, empresa vinculada e ordem de apresentaÃ§Ã£o.
- **Tipo:** Objeto Customizado

## Campos
| Nome do Campo       | RÃ³tulo                                              | Tipo       | ObrigatÃ³rio |
|---------------------|-----------------------------------------------------|------------|-------------|
| DWCodigoTipoPgto__c | CÃ³digo do tipo de pagamento                        | Texto      | NÃ£o         |
| DWCodigo__c        | ID Externo                                          | Texto      | NÃ£o         |
| DWEmpresa__c      | Loja (referÃªncia Ã  Conta)                            | Lookup     | NÃ£o         |
| DWIndice__c       | Ãndice                                              | NÃºmero     | NÃ£o         |
| GBStatus__c       | Status (ativo/inativo)                               | Checkbox   | NÃ£o         |

## Regras de ValidaÃ§Ã£o
### ValidaÃ§Ã£o: Nome do Objeto
*(NÃ£o hÃ¡ regras de validaÃ§Ã£o especÃ­ficas neste metadado)*

### Regras de ValidaÃ§Ã£o no Objeto
*(Nenhuma regra de validaÃ§Ã£o especÃ­fica foi definida no arquivo XML)*

## ConsideraÃ§Ãµes
- Os nomes dos campos seguem convenÃ§Ãµes claras e indicam seu propÃ³sito.
- O campo `DWCodigo__c` Ã© marcado como `ExternalId` e `Unique`, garantindo sua unicidade e identificaÃ§Ã£o externa.
- O campo `DWEmpresa__c` Ã© uma relaÃ§Ã£o de Lookup com o objeto `Account`, representando a loja vinculada Ã  forma de pagamento.
- O objeto possui vÃ¡rias configuraÃ§Ãµes de aÃ§Ãµes override para diferentes aÃ§Ãµes e form factors, alÃ©m de configuraÃ§Ãµes de visibilidade, compartilhamento e funcionalidades habilitadas como atividades, histÃ³rico, relatÃ³rios e API em massa.
- A lista padrÃ£o exibe colunas relevantes como nome, empresa, status, cÃ³digos e datas de criaÃ§Ã£o e Ãºltima atualizaÃ§Ã£o.

# Objeto: Lead Convert Chatter

## Detalhes do Objeto
- **RÃ³tulo:** Lead Convert Chatter
- **API Name:** `leadconvertchtr__LeadConvertChatter__c`
- **DescriÃ§Ã£o:** ConfiguraÃ§Ãµes relacionadas Ã  movimentaÃ§Ã£o de posts do Chatter ao converter leads, incluindo opÃ§Ãµes para mover posts para contas, contatos e oportunidades, alÃ©m de opÃ§Ãµes de mesclagem.
- **Tipo:** Objeto Customizado

## Campos
| Nome do Campo                        | RÃ³tulo                     | Tipo      | ObrigatÃ³rio |
|-------------------------------------|----------------------------|-----------|-------------|
| leadconvertchtr__Account__c        | Account                    | Checkbox  | NÃ£o         |
| leadconvertchtr__Contact__c        | Contact                    | Checkbox  | NÃ£o         |
| leadconvertchtr__MergeLeadContact__c | Move Posts on Merge       | Checkbox  | NÃ£o         |
| leadconvertchtr__Opportunity__c    | Opportunity                | Checkbox  | NÃ£o         |

## Detalhes dos Campos
- **leadconvertchtr__Account__c:** Indica se os posts do lead devem ser movidos para a conta ao converter o lead.
- **leadconvertchtr__Contact__c:** Indica se os posts do lead devem ser movidos para o contato ao converter o lead.
- **leadconvertchtr__MergeLeadContact__c:** Determina se os posts devem ser movidos ao mesclar leads.
- **leadconvertchtr__Opportunity__c:** Indica se os posts do lead devem ser movidos para a oportunidade ao converter o lead.

## Regras de ValidaÃ§Ã£o
Nenhuma regra de validaÃ§Ã£o especÃ­fica foi definida para este objeto.

## ConsideraÃ§Ãµes
- Todos os campos sÃ£o do tipo Checkbox, permitindo ativar ou desativar as opÃ§Ãµes de movimentaÃ§Ã£o de posts.
- As configuraÃ§Ãµes ajudam a manter a consistÃªncia na movimentaÃ§Ã£o de posts do Chatter durante o processo de conversÃ£o de leads, garantindo que as informaÃ§Ãµes relevantes sejam transferidas conforme a preferÃªncia do usuÃ¡rio.

# DocumentaÃ§Ã£o do Objeto: HttpRequestLog__c

## Detalhes do Objeto
- **RÃ³tulo:** Http Request Log
- **API Name:** `HttpRequestLog__c`
- **DescriÃ§Ã£o:** Este objeto registra logs de requisiÃ§Ãµes HTTP, incluindo detalhes como endpoint, headers, mÃ©todo, corpo da requisiÃ§Ã£o e resposta, alÃ©m de informaÃ§Ãµes relacionadas a oportunidades e fornecedores.
- **Tipo:** Objeto Customizado

## Campos
| Nome do Campo        | RÃ³tulo             | Tipo             | ObrigatÃ³rio |
|----------------------|--------------------|------------------|-------------|
| Endpoint__c         | Endpoint           | Texto (255)      | NÃ£o         |
| Fornecedor__c      | Fornecedor         | Lookup (DWFornecedor__c) | NÃ£o |
| Headers__c         | Headers            | Long Text Area (131072) | NÃ£o |
| Method__c          | Method             | Texto (255)      | NÃ£o         |
| Oportunidade__c    | Oportunidade       | Lookup (Opportunity) | NÃ£o |
| RequestBody__c     | RequestBody        | Long Text Area (131072) | NÃ£o |
| ResponseBody__c    | ResponseBody       | Long Text Area (131072) | NÃ£o |
| StatusCode__c      | StatusCode         | NÃºmero (5, escala 0) | NÃ£o |

## Regras de ValidaÃ§Ã£o
### Valida_Nome_Obrigatorio
- **CondiÃ§Ã£o:** `ISBLANK(Nome__c)`
- **Mensagem:** O campo Nome Ã© obrigatÃ³rio.

### Valor_Positivo
- **CondiÃ§Ã£o:** `Valor__c < 0`
- **Mensagem:** O valor deve ser maior ou igual a zero.

## ConsideraÃ§Ãµes
- Os nomes dos campos seguem convenÃ§Ãµes claras para facilitar a compreensÃ£o e manutenÃ§Ã£o.
- As regras de validaÃ§Ã£o garantem a integridade dos dados inseridos no objeto, prevenindo valores invÃ¡lidos ou ausentes.
- O objeto possui configuraÃ§Ãµes de aÃ§Ãµes padrÃ£o para diferentes form factors e permissÃµes de compartilhamento, alÃ©m de suporte a atividades, histÃ³rico, relatÃ³rios e busca.

# DocumentaÃ§Ã£o do Objeto: BloqueioAuxiliar__c

## Detalhes do Objeto
- **RÃ³tulo:** Bloqueio Auxiliar
- **API Name:** `BloqueioAuxiliar__c`
- **DescriÃ§Ã£o:** Este objeto representa bloqueios auxiliares relacionados a ativos, contendo informaÃ§Ãµes especÃ­ficas como status, motivos, datas e detalhes adicionais.
- **Tipo:** Objeto Customizado

## Campos
| Nome do Campo     | RÃ³tulo             | Tipo             | ObrigatÃ³rio |
|-------------------|--------------------|------------------|-------------|
| Ativo__c         | Ativo              | Master-Detail (Asset) | NÃ£o         |
| DWCodigo__c     | ID Externo         | Texto (50)       | NÃ£o         |
| DWChassi__c     | Chassi             | TextoÃrea       | NÃ£o         |
| DWStatus__c     | Status             | Picklist         | NÃ£o         |
| DataFinal__c    | Data Final         | Data             | NÃ£o         |
| DataInicial__c  | Data Inicial       | Data             | NÃ£o         |
| Descricao__c    | DescriÃ§Ã£o          | TextoÃrea       | NÃ£o         |
| Motivo__c       | Motivo             | Longo TextoÃrea | NÃ£o         |

## Regras de ValidaÃ§Ã£o
### ValidaÃ§Ã£o: Nome do Campo ID Externo
- **CondiÃ§Ã£o:** `ISBLANK(DWCodigo__c)`
- **Mensagem:** O campo ID Externo Ã© obrigatÃ³rio.

### ValidaÃ§Ã£o: CÃ³digo Externo Ãšnico
- **CondiÃ§Ã£o:** `DWCodigo__c` duplicado
- **Mensagem:** O cÃ³digo externo deve ser Ãºnico.

## ConsideraÃ§Ãµes
- Os nomes dos campos seguem uma nomenclatura clara e padronizada, facilitando sua identificaÃ§Ã£o e uso.
- As regras de validaÃ§Ã£o garantem a integridade dos dados, como obrigatoriedade e unicidade do cÃ³digo externo.
- O objeto possui vÃ¡rias configuraÃ§Ãµes de aÃ§Ãµes override para diferentes aÃ§Ãµes e tamanhos de tela, alÃ©m de estar configurado para controle de compartilhamento e visibilidade pÃºblica.

# DocumentaÃ§Ã£o do Objeto: DWFinanceira__c

## Detalhes do Objeto
- **RÃ³tulo:** Financeira
- **API Name:** `DWFinanceira__c`
- **DescriÃ§Ã£o:** Este objeto representa informaÃ§Ãµes relacionadas Ã s financeiras, incluindo cÃ³digos, status, valores e relacionamentos com lojas.
- **Tipo:** Objeto Customizado

---

## Campos

| Nome do Campo             | RÃ³tulo                     | Tipo       | ObrigatÃ³rio |
|---------------------------|----------------------------|------------|-------------|
| DWCodigoLoja__c           | CÃ³digo da loja             | Texto      | NÃ£o         |
| DWLoja__c                 | Loja                       | Lookup     | NÃ£o         |
| GBCodigoFinanceira__c     | CÃ³digo financeira          | Texto      | NÃ£o         |
| GBCodigo__c               | ID externo                 | Texto      | NÃ£o         |
| GBStatus__c               | Status                     | Checkbox   | NÃ£o         |
| GBValor__c                | Valor                      | Moeda      | NÃ£o         |

---

## Regras de ValidaÃ§Ã£o

### Valida_Nome_Obrigatorio
- **CondiÃ§Ã£o:** `ISBLANK(Nome__c)`
- **Mensagem:** O campo Nome Ã© obrigatÃ³rio.

### Valor_Positivo
- **CondiÃ§Ã£o:** `Valor__c < 0`
- **Mensagem:** O valor deve ser maior ou igual a zero.

---

## ConsideraÃ§Ãµes
- Os nomes dos campos seguem uma nomenclatura clara e padronizada, facilitando sua identificaÃ§Ã£o e uso.
- As regras de validaÃ§Ã£o garantem a integridade dos dados inseridos, evitando valores invÃ¡lidos ou ausentes em campos essenciais.
- O objeto possui configuraÃ§Ãµes de aÃ§Ãµes override para diferentes aÃ§Ãµes padrÃ£o, alÃ©m de suporte a funcionalidades como histÃ³rico, busca, compartilhamento, entre outros.
- O relacionamento com a loja (`DWLoja__c`) Ã© uma lookup que filtra apenas registros do tipo "Loja".
- O campo `GBCodigo__c` Ã© uma identificaÃ§Ã£o externa obrigatÃ³ria e Ãºnica, importante para integraÃ§Ã£o com sistemas externos.

# DocumentaÃ§Ã£o do Objeto: DWFornecedor__c

## Detalhes do Objeto
- **RÃ³tulo:** Fornecedor
- **API Name:** `DWFornecedor__c`
- **DescriÃ§Ã£o:** Objeto personalizado que representa fornecedores, incluindo informaÃ§Ãµes como cÃ³digo externo, loja, produto, valor e status ativo.
- **Tipo:** Objeto Customizado

## Campos
| Nome do Campo             | RÃ³tulo                     | Tipo       | ObrigatÃ³rio |
|---------------------------|----------------------------|------------|-------------|
| DWAtivo__c               | Ativo                      | Checkbox   | NÃ£o         |
| DWCodigo__c             | ID Externo                 | Texto      | NÃ£o         |
| DWDataAlteracao__c     | Data de alteraÃ§Ã£o          | Data       | NÃ£o         |
| DWFornecedorCredor__c  | CÃ³digo do fornecedor       | Texto      | NÃ£o         |
| DWLoja__c               | Loja                       | Lookup     | NÃ£o         |
| DWProduto__c            | Produto                    | Lookup     | NÃ£o         |
| DWValor__c              | Valor                      | Moeda      | NÃ£o         |

## Regras de ValidaÃ§Ã£o
### ValidaÃ§Ã£o: Nome do Fornecedor
- **CondiÃ§Ã£o:** `ISBLANK(Name)`
- **Mensagem:** O campo Nome Ã© obrigatÃ³rio.

### ValidaÃ§Ã£o: Valor deve ser positivo
- **CondiÃ§Ã£o:** `DWValor__c < 0`
- **Mensagem:** O valor deve ser maior ou igual a zero.

## ConsideraÃ§Ãµes adicionais
- O objeto possui vÃ¡rias configuraÃ§Ãµes de aÃ§Ãµes override para diferentes aÃ§Ãµes padrÃ£o, incluindo visualizaÃ§Ãµes em diferentes form factors.
- Inclui layouts compactos e listas de visualizaÃ§Ã£o customizadas para facilitar a navegaÃ§Ã£o e visualizaÃ§Ã£o dos registros.
- Permite integraÃ§Ã£o com feeds, histÃ³rico de alteraÃ§Ãµes, busca, compartilhamento e API de streaming.
- O modelo de compartilhamento Ã© `ReadWrite`, permitindo ediÃ§Ã£o por usuÃ¡rios com permissÃµes adequadas.
- O objeto Ã© pÃºblico e estÃ¡ atualmente implantado (`Deployed`).

# DocumentaÃ§Ã£o do Objeto: DWHistoricoCompras__c

## Detalhes do Objeto
- **RÃ³tulo:** HistÃ³rico de compras
- **API Name:** `DWHistoricoCompras__c`
- **DescriÃ§Ã£o:** Objeto personalizado que armazena informaÃ§Ãµes detalhadas sobre histÃ³ricos de compras, incluindo dados do cliente, produtos, valores e datas relacionadas Ã s notas fiscais.
- **Tipo:** Objeto Customizado

---

## Campos

| Nome do Campo       | RÃ³tulo                     | Tipo       | ObrigatÃ³rio |
|---------------------|----------------------------|------------|-------------|
| DWHistoricoCompras__c | Nome de HistÃ³rico de compras | AutoNumber | Sim         |
| DWCliente__c       | Cliente                     | Lookup     | NÃ£o         |
| DWCodigo__c        | CÃ³digo                      | Texto      | NÃ£o         |
| DWCor__c           | Cor                         | Texto      | NÃ£o         |
| DWDataNf__c        | Data da Nota Fiscal         | DateTime   | NÃ£o         |
| DWEmpresa__c       | Empresa                     | Texto      | NÃ£o         |
| DWMarca__c         | Marca                       | Texto      | NÃ£o         |
| DWModelo__c       | Modelo                      | Texto      | NÃ£o         |
| DWTipo__c         | Tipo                        | Texto      | NÃ£o         |
| DWValor__c        | Valor Nota Fiscal           | Currency   | NÃ£o         |
| DWVendedor__c     | Vendedor                    | Texto      | NÃ£o         |

---

## Regras de ValidaÃ§Ã£o

### ValidaÃ§Ã£o: Nome de HistÃ³rico de compras obrigatÃ³rio
- **CondiÃ§Ã£o:** `ISBLANK(Name)`
- **Mensagem:** O campo Nome de HistÃ³rico de compras Ã© obrigatÃ³rio.

### ValidaÃ§Ã£o: Valor da Nota Fiscal deve ser positivo
- **CondiÃ§Ã£o:** `DWValor__c < 0`
- **Mensagem:** O valor deve ser maior ou igual a zero.

---

## ConsideraÃ§Ãµes
- Os nomes dos campos seguem convenÃ§Ãµes claras e padronizadas para facilitar a compreensÃ£o e manutenÃ§Ã£o.
- As regras de validaÃ§Ã£o garantem a integridade dos dados inseridos, evitando valores invÃ¡lidos ou ausentes.
- O objeto possui configuraÃ§Ãµes de visualizaÃ§Ã£o, compartilhamento e aÃ§Ãµes customizadas para otimizar o uso na plataforma Salesforce.

# DocumentaÃ§Ã£o do Objeto: DW_QP__PerfilQualificacao__c

## Detalhes do Objeto
- **RÃ³tulo:** Perfil de qualificaÃ§Ã£o
- **API Name:** `DW_QP__PerfilQualificacao__c`
- **DescriÃ§Ã£o:** Define um grupo de critÃ©rios para utilizaÃ§Ã£o de filtro do NPX.
- **Tipo:** Objeto Customizado

---

## Campos

| Nome do Campo                         | RÃ³tulo                                              | Tipo             | ObrigatÃ³rio |
|---------------------------------------|-----------------------------------------------------|------------------|-------------|
| DW_QP__NomeObjetoPerfil__c           | Nome do objeto do perfil                            | Texto            | NÃ£o         |
| DWAcaoPerfil__c                     | AÃ§Ã£o do perfil                                    | Picklist         | NÃ£o         |
| DWCodigoLoja__c                     | CÃ³digo da loja                                    | Texto            | NÃ£o         |
| DWContextoPerfil__c                  | Contexto do perfil                                | Picklist         | NÃ£o         |
| DWTipoComponente__c                  | Tipo de componente                                | Picklist         | NÃ£o         |
| DWTipoProprietario__c                | Tipo de proprietÃ¡rio                              | Texto            | NÃ£o         |
| DWVariaveisEntradaComponente__c      | VariÃ¡veis de entrada do componente                | Long Text Area   | NÃ£o         |
| DW_QP__Logica__c                     | LÃ³gica                                            | Texto            | NÃ£o         |
| DW_QP__NomeObjetoPerfil__c           | FÃ³rmula que manipula o nome de API do objeto em referÃªncia | Texto            | NÃ£o         |
| DW_Priorizacao__c                    | PriorizaÃ§Ã£o                                       | NÃºmero (3 dÃ­gitos) | NÃ£o       |

---

## Regras de ValidaÃ§Ã£o

### `DW_QP__NaoAlterarTipoRegistro`
- **CondiÃ§Ã£o:** `AND(ISCHANGED(RecordTypeId), NOT(ISNEW()))`
- **Mensagem de Erro:** "NÃ£o Ã© possÃ­vel alterar o tipo de registro. Isso pode gerar outros erros de processo."

---

## ConsideraÃ§Ãµes Gerais
- Os nomes dos campos seguem convenÃ§Ãµes claras para facilitar a compreensÃ£o e manutenÃ§Ã£o.
- As regras de validaÃ§Ã£o garantem a integridade dos dados, impedindo alteraÃ§Ãµes indesejadas no tipo de registro.
- O objeto possui configuraÃ§Ãµes de layout, visualizaÃ§Ãµes de lista e regras de compartilhamento que facilitam sua gestÃ£o e uso na plataforma Salesforce.

# DocumentaÃ§Ã£o do Objeto: Credenciais Docusign

## Detalhes do Objeto
- **RÃ³tulo:** Credenciais Docusign
- **API Name:** `DWCredenciaisDocusign__c`
- **DescriÃ§Ã£o:** Este objeto armazena as credenciais e endpoints necessÃ¡rios para integraÃ§Ã£o com a API do Docusign.
- **Tipo:** Objeto Customizado

## Campos
| Nome do Campo                         | RÃ³tulo                                | Tipo   | ObrigatÃ³rio |
|---------------------------------------|---------------------------------------|--------|-------------|
| DWAccessToken__c                      | Access token                          | Texto  | NÃ£o         |
| DWClienteId__c                        | ClienteId                             | Texto  | NÃ£o         |
| DWEndpointAtivarEnvelope__c           | Endpoint ativar envelope              | Texto  | NÃ£o         |
| DWEndpointCriarDocumento__c           | Endpoint criar documento              | Texto  | NÃ£o         |
| DWEndpointCriarEnvelope__c            | Endpoint criar envelope               | URL    | NÃ£o         |
| DWEndpointEnviarEnvelope__c           | Endpoint enviar envelope              | URL    | NÃ£o         |
| DWEndpointGetAccessToken__c           | Endpoint Get Access Token             | Texto  | NÃ£o         |
| DWEndpointGetStatusDestinatario__c    | Endpoint Get Status DestinatÃ¡rios     | Texto  | NÃ£o         |
| DWEndpointGetStatusEnvelope__c        | Endpoint Get Status Envelope          | Texto  | NÃ£o         |
| DWEndpointInativarEnvelope__c          | Endpoint Inativar Envelope            | Texto  | NÃ£o         |
| DWEndpointReenviarEnvelope__c          | Endpoint reenviar envelope            | Texto  | NÃ£o         |
| DWEndpointRetornaEnvelopeBase64__c     | Endpoint retorna envelope base64     | Texto  | NÃ£o         |

## Regras de ValidaÃ§Ã£o
Nenhuma regra de validaÃ§Ã£o especÃ­fica foi definida para este objeto.

## ConsideraÃ§Ãµes
- Os nomes dos campos seguem uma nomenclatura clara, facilitando sua identificaÃ§Ã£o e uso.
- Os endpoints de URL sÃ£o utilizados para integraÃ§Ãµes especÃ­ficas com a API do Docusign.
- Como o objeto Ã© de tipo Hierarchy, permite configuraÃ§Ãµes de acesso diferenciadas por perfil ou usuÃ¡rio, facilitando o gerenciamento de credenciais e endpoints de forma segura e organizada.

# DocumentaÃ§Ã£o do Objeto: ReservaAuxiliar__c

## Detalhes do Objeto
- **RÃ³tulo:** Reserva Auxiliar
- **API Name:** `ReservaAuxiliar__c`
- **DescriÃ§Ã£o:** Objeto personalizado utilizado para gerenciar reservas auxiliares, incluindo informaÃ§Ãµes como status, datas, valores e relacionamentos com ativos.
- **Tipo:** Objeto Customizado

---

## Campos do Objeto

| Nome do Campo          | RÃ³tulo               | Tipo          | ObrigatÃ³rio |
|------------------------|----------------------|---------------|-------------|
| AtendimentoCodigo__c   | Atendimento Codigo   | TextoÃrea    | NÃ£o         |
| DWAtivo__c             | Ativo                | Master-Detalhe | NÃ£o       |
| DWChassi__c           | Chassi               | TextoÃrea    | NÃ£o         |
| DWCodigo__c           | ID Externo           | Texto        | NÃ£o         |
| DWStatus__c           | Status               | Picklist     | NÃ£o         |
| DataFinal__c          | Data Final           | Data         | NÃ£o         |
| DataInicial__c        | Data Inicial         | Data         | NÃ£o         |
| Descricao__c          | DescriÃ§Ã£o            | TextoÃrea    | NÃ£o         |
| ValorEntrada__c       | Valor Entrada        | TextoÃrea    | NÃ£o         |

---

## Regras de ValidaÃ§Ã£o

### ValidaÃ§Ã£o: Nome do Objeto
*(NÃ£o hÃ¡ regras de validaÃ§Ã£o especÃ­ficas listadas para o nome do objeto neste metadado.)*

### Regras de ValidaÃ§Ã£o de Campos

| Nome da Regra             | CondiÃ§Ã£o                         | Mensagem                         |
|---------------------------|----------------------------------|----------------------------------|
| Valida_Nome_Obrigatorio | `ISBLANK(AtendimentoCodigo__c)` | "O campo Atendimento Codigo Ã© obrigatÃ³rio." |
| Valor_Positivo          | `NOT(ISBLANK(ValorEntrada__c)) && VALUE(ValorEntrada__c) < 0` | "O valor deve ser maior ou igual a zero." |

---

## ConsideraÃ§Ãµes Gerais
- Os nomes dos campos seguem uma nomenclatura clara e padronizada, facilitando sua identificaÃ§Ã£o e uso.
- As regras de validaÃ§Ã£o garantem a integridade dos dados, como obrigatoriedade de certos campos e limites de valores numÃ©ricos.
- O objeto possui relacionamentos importantes, como o relacionamento Master-Detalhe com o ativo (`DWAtivo__c`).
- As configuraÃ§Ãµes de aÃ§Ãµes padrÃ£o e layout de visualizaÃ§Ã£o estÃ£o ajustadas para melhorar a experiÃªncia do usuÃ¡rio na interface Lightning.

---

**ObservaÃ§Ã£o:** Este documento foi elaborado com base no metadado fornecido, incluindo detalhes essenciais para compreensÃ£o e uso do objeto `ReservaAuxiliar__c`.

# DocumentaÃ§Ã£o do Objeto: PromoÃ§Ã£o Auxiliar

## Detalhes do Objeto
- **RÃ³tulo:** PromoÃ§Ã£o Auxiliar
- **API Name:** `PromocaoAuxiliar__c`
- **DescriÃ§Ã£o:** Objeto customizado que armazena informaÃ§Ãµes relacionadas a promoÃ§Ãµes auxiliares, incluindo detalhes como ativo, chassi, status, datas e valores associados.
- **Tipo:** Objeto Customizado

## Campos
| Nome do Campo     | RÃ³tulo             | Tipo        | ObrigatÃ³rio |
|-------------------|--------------------|-------------|-------------|
| `DWAtivo__c`      | Ativo              | Master-Detail (Asset) | Sim         |
| `DWChassi__c`     | Chassi             | Texto (TextArea) | NÃ£o         |
| `DWCodigo__c`     | ID Externo         | Texto (Text) | NÃ£o         |
| `DWStatus__c`     | Status             | Picklist    | NÃ£o         |
| `DataFinal__c`    | Data Final         | Data        | NÃ£o         |
| `DataInicial__c`  | Data Inicial       | Data        | NÃ£o         |
| `Valor__c`        | Valor              | Texto (TextArea) | NÃ£o         |

## Regras de ValidaÃ§Ã£o
### ValidaÃ§Ã£o: Nome do Objeto
- **Nome:** `Valida_Nome_Obrigatorio`
- **CondiÃ§Ã£o:** `ISBLANK(Nome__c)`
- **Mensagem:** O campo Nome Ã© obrigatÃ³rio.

### ValidaÃ§Ã£o: Valor
- **Nome:** `Valor_Positivo`
- **CondiÃ§Ã£o:** `Valor__c < 0`
- **Mensagem:** O valor deve ser maior ou igual a zero.

## ConsideraÃ§Ãµes
- Os nomes dos campos seguem uma nomenclatura clara e padronizada, facilitando sua identificaÃ§Ã£o e uso.
- As regras de validaÃ§Ã£o garantem a integridade dos dados, obrigando a preenchimento do nome e evitando valores negativos no campo Valor.
- O objeto possui configuraÃ§Ãµes de aÃ§Ãµes override para diferentes aÃ§Ãµes padrÃ£o e em diferentes form factors, alÃ©m de controle de visibilidade, compartilhamento e funcionalidades habilitadas como atividades, histÃ³rico, relatÃ³rios e API em massa.

---

*Este documento fornece uma visÃ£o tÃ©cnica e acessÃ­vel do objeto `PromocaoAuxiliar__c`, facilitando sua compreensÃ£o e uso na plataforma Salesforce.*

# Objeto: AccountContactRelation

## Detalhes do Objeto
- **RÃ³tulo:** Account Contact Relation
- **API Name:** `AccountContactRelation`
- **DescriÃ§Ã£o:** Este objeto representa a relaÃ§Ã£o entre uma Conta e um Contato no Salesforce, incluindo detalhes como a forÃ§a do relacionamento, datas de inÃ­cio e fim, e outros atributos relacionados.
- **Tipo:** Objeto Customizado

## Campos
| Nome do Campo             | RÃ³tulo                        | Tipo       | ObrigatÃ³rio |
|---------------------------|------------------------------|------------|-------------|
| AccountId                 | Account                     | Lookup     | NÃ£o         |
| ContactId                 | Contact                     | Lookup     | NÃ£o         |
| EndDate                   | End Date                    | Data/Hora  | NÃ£o         |
| IsActive                  | Is Active                   | Checkbox   | NÃ£o         |
| IsDirect                  | Is Direct                   | Checkbox   | NÃ£o         |
| Relationship_Strength__c  | ForÃ§a do relacionamento      | Picklist   | NÃ£o         |
| Roles                     | Roles                       | Picklist   | NÃ£o         |
| StartDate                 | Start Date                  | Data       | NÃ£o         |

### Detalhes dos Campos
- **AccountId e ContactId:** ReferÃªncias Lookup para os objetos Account e Contact, permitindo estabelecer a relaÃ§Ã£o entre uma Conta e um Contato.
- **EndDate e StartDate:** Campos de data para indicar o perÃ­odo de validade da relaÃ§Ã£o.
- **IsActive e IsDirect:** Campos do tipo Checkbox para marcar se a relaÃ§Ã£o estÃ¡ ativa e se Ã© direta.
- **Relationship_Strength__c:** Campo do tipo Picklist que indica a forÃ§a do relacionamento, com opÃ§Ãµes "Forte", "Neutro" e "Fraco".
- **Roles:** Campo do tipo Picklist para definir os papÃ©is envolvidos na relaÃ§Ã£o.

## Regras de ValidaÃ§Ã£o
Este metadado nÃ£o apresenta regras de validaÃ§Ã£o especÃ­ficas.

## ConsideraÃ§Ãµes
- Os campos de relacionamento (`AccountId` e `ContactId`) sÃ£o do tipo Lookup, permitindo relacionamentos dinÃ¢micos com objetos padrÃ£o.
- Os campos de picklist possuem opÃ§Ãµes restritas, garantindo consistÃªncia nos dados inseridos.
- A configuraÃ§Ã£o de aÃ§Ãµes override e layout compacto estÃ¡ ajustada para melhorar a experiÃªncia do usuÃ¡rio na interface do Salesforce.
- Os campos de datas e booleanos facilitam o controle temporal e status da relaÃ§Ã£o.

---

*Este documento fornece uma visÃ£o tÃ©cnica e acessÃ­vel do objeto `AccountContactRelation`, facilitando sua compreensÃ£o e uso na administraÃ§Ã£o do Salesforce.*

# DocumentaÃ§Ã£o do Objeto: HistÃ³rico do Tour (`DWHistoricoTour__c`)

## Detalhes do Objeto
- **RÃ³tulo:** HistÃ³rico do Tour
- **API Name:** `DWHistoricoTour__c`
- **DescriÃ§Ã£o:** Este objeto armazena registros histÃ³ricos relacionados a tours, incluindo informaÃ§Ãµes como a chave da aÃ§Ã£o, o objeto relacionado, se o tour foi visto por completo, e o usuÃ¡rio associado.
- **Tipo:** Objeto Customizado

---

## Campos do Objeto

| Nome do Campo                 | RÃ³tulo                         | Tipo       | ObrigatÃ³rio | DescriÃ§Ã£o                                                                                     |
|------------------------------|------------------------------|------------|--------------|-------------------------------------------------------------------------------------------------|
| `DWChaveAcao__c`             | Chave da aÃ§Ã£o                | Texto      | NÃ£o          | Identificador da aÃ§Ã£o relacionada ao histÃ³rico do tour. Comprimento mÃ¡ximo de 255 caracteres.|
| `DWObjetoTour__c`             | Objeto do Tour               | Texto      | NÃ£o          | Nome do objeto ao qual o tour estÃ¡ relacionado (ex: Conta, Lead, Oportunidade).             |
| `DWTourVistoPorCompleto__c`   | Tour visto por completo?     | Checkbox   | NÃ£o          | Indica se o tour foi visualizado por completo.                                                 |
| `DWUsuario__c`                | UsuÃ¡rio                      | Lookup     | NÃ£o          | ReferÃªncia ao usuÃ¡rio associado ao histÃ³rico do tour. Relacionamento com o objeto User.     |

---

## Regras de ValidaÃ§Ã£o

Atualmente, o metadado fornecido nÃ£o apresenta regras de validaÃ§Ã£o especÃ­ficas configuradas para este objeto.

---

## ConsideraÃ§Ãµes TÃ©cnicas
- **Nomenclatura dos Campos:** Seguem convenÃ§Ãµes claras, com sufixo `__c` indicando campos customizados.
- **Chave PrimÃ¡ria:** Utiliza um campo de nÃºmero automÃ¡tico (`AutoNumber`) com o formato `HT-{0000000}` para identificaÃ§Ã£o Ãºnica do registro.
- **Relacionamentos:** Possui um relacionamento de lookup com o objeto User, permitindo associar cada histÃ³rico a um usuÃ¡rio especÃ­fico.
- **ConfiguraÃ§Ãµes adicionais:** O objeto estÃ¡ configurado para permitir atividades, buscas, compartilhamento, e API em massa, alÃ©m de estar disponÃ­vel publicamente.

---

Este documento fornece uma visÃ£o geral tÃ©cnica e acessÃ­vel do objeto `HistÃ³rico do Tour` no Salesforce, facilitando sua compreensÃ£o e uso na administraÃ§Ã£o e desenvolvimento de integraÃ§Ãµes.

# DocumentaÃ§Ã£o do Objeto: Envelope Docusign

## Detalhes do Objeto
- **RÃ³tulo:** Envelope Docusign
- **API Name:** `DWEnvelopeDocusign__c`
- **DescriÃ§Ã£o:** Objeto personalizado que armazena informaÃ§Ãµes relacionadas aos envelopes Docusign, incluindo detalhes de assinatura, status, datas importantes e referÃªncias a documentos e oportunidades.
- **Tipo:** Objeto Customizado

## Campos
| Nome do Campo                  | RÃ³tulo                     | Tipo             | ObrigatÃ³rio |
|-------------------------------|----------------------------|------------------|--------------|
| DWDataConclusao__c            | Data da conclusÃ£o         | DataHora         | NÃ£o          |
| DWDataExpiracao__c            | Data expiraÃ§Ã£o            | DataHora         | NÃ£o          |
| DWIdDocumentoAssinado__c     | Id documento assinado     | Texto (255)     | NÃ£o          |
| DWIdDocumento__c             | Id do documento           | Texto (255)     | NÃ£o          |
| DWIdEnvelope__c              | Id do envelope             | Texto (255)     | NÃ£o          |
| DWMotivoCancelamento__c      | Motivo cancelamento       | HTML (25 linhas)| NÃ£o          |
| DWOportunidade__c            | Oportunidade              | Master-Detail   | NÃ£o          |
| DWStatusAssinatura__c        | Status assinatura           | Picklist        | NÃ£o          |
| DWTermo__c                   | Termo                     | Lookup          | NÃ£o          |

## Regras de ValidaÃ§Ã£o
Nenhuma regra de validaÃ§Ã£o especÃ­fica foi definida para este objeto.

## ConsideraÃ§Ãµes
- Os nomes dos campos seguem uma nomenclatura clara e padronizada, facilitando a compreensÃ£o e manutenÃ§Ã£o.
- O campo `DWIdEnvelope__c` Ã© marcado como `ExternalId`, indicando que pode ser utilizado para integraÃ§Ãµes externas ou buscas rÃ¡pidas.
- O objeto possui vÃ¡rias aÃ§Ãµes override configuradas para diferentes aÃ§Ãµes padrÃ£o e para diferentes form factors (Large e Small), alÃ©m de uma aÃ§Ã£o personalizada de visualizaÃ§Ã£o (`View`) criada pelo Lightning App Builder.
- As configuraÃ§Ãµes de compartilhamento estÃ£o controladas pelo objeto pai (`ControlledByParent`), garantindo que as permissÃµes de acesso sejam herdadas.
- O objeto possui um layout de lista chamado "Tudo" que exibe informaÃ§Ãµes essenciais como nome, oportunidade, termo e status de assinatura.
- O campo de nome do registro Ã© um `AutoNumber` com o formato `ED-{000000}`, garantindo uma numeraÃ§Ã£o sequencial Ãºnica para cada envelope criado.

# DocumentaÃ§Ã£o do Objeto: Avisos do ativo

## Detalhes do Objeto
- **RÃ³tulo:** Avisos do ativo
- **API Name:** `DWAvisoAtivo__c`
- **DescriÃ§Ã£o:** Este objeto representa avisos relacionados a ativos, incluindo informaÃ§Ãµes como o aviso, seu status, tipo, cÃ³digo, usuÃ¡rio responsÃ¡vel, entre outros.
- **Tipo:** Objeto Customizado

## Campos
| Nome do Campo             | RÃ³tulo                         | Tipo             | ObrigatÃ³rio |
|---------------------------|-------------------------------|------------------|-------------|
| DWAviso__c               | Aviso                         | Long Text Area   | NÃ£o         |
| DWCodigoAviso__c        | CÃ³digo Aviso                  | NÃºmero           | NÃ£o         |
| DWCodigoUsuarioERP__c   | CÃ³digo do UsuÃ¡rio (Workflow)  | Texto            | NÃ£o         |
| DWTipoAviso__c          | Tipo do aviso                 | Picklist         | NÃ£o         |
| DWUsuarioCriacaoERP__c  | UsuÃ¡rio de criaÃ§Ã£o (Workflow) | Texto            | NÃ£o         |
| DWAtivo__c              | Ativo                         | Checkbox         | NÃ£o         |
| DWVeiculo__c            | VeÃ­culo                       | Master-Detail    | NÃ£o         |

### Detalhes dos Campos
- **DWAviso__c:** Campo de texto longo que armazena o conteÃºdo do aviso, com atÃ© 32.000 caracteres e 3 linhas visÃ­veis.
- **DWCodigoAviso__c:** NÃºmero que identifica de forma Ãºnica o aviso, marcado como campo externo e Ãºnico.
- **DWCodigoUsuarioERP__c:** Identificador do usuÃ¡rio no ERP Workflow, campo de texto de atÃ© 255 caracteres.
- **DWTipoAviso__c:** Lista de seleÃ§Ã£o com opÃ§Ãµes "Aviso Normal" e "Aviso Auxiliar".
- **DWUsuarioCriacaoERP__c:** Identificador do usuÃ¡rio que criou o aviso no ERP, campo de texto de atÃ© 255 caracteres.
- **DWAtivo__c:** Checkbox que indica se o aviso estÃ¡ ativo.
- **DWVeiculo__c:** RelaÃ§Ã£o de mestre-detalhe com o objeto Asset, indicando o veÃ­culo relacionado ao aviso.

## Regras de ValidaÃ§Ã£o
Nenhuma regra de validaÃ§Ã£o especÃ­fica foi definida para este objeto.

## ConsideraÃ§Ãµes adicionais
- O objeto possui layouts de visualizaÃ§Ã£o compacta chamados "DWLayoutCompactoAvisoAtivo", que exibem os campos: Nome, DWAtivo__c, DWVeiculo__c, DWAviso__c.
- As aÃ§Ãµes padrÃ£o disponÃ­veis incluem: Accept, CancelEdit, Clone, Delete, Edit, List, New, SaveEdit, Tab, View.
- O objeto estÃ¡ configurado para ser acessÃ­vel publicamente, com compartilhamento controlado pelo pai.
- As funcionalidades ativadas incluem atividades, histÃ³rico, relatÃ³rios, busca, streaming API, entre outros.

# DocumentaÃ§Ã£o do Objeto: DWDetalheCustoAtivo__c

## Detalhes do Objeto
- **RÃ³tulo:** Detalhes de custo do Ativo
- **API Name:** `DWDetalheCustoAtivo__c`
- **DescriÃ§Ã£o:** Objeto que armazena detalhes de custos associados a ativos, incluindo informaÃ§Ãµes como chave, descriÃ§Ã£o, tipo de custo, valor e se Ã© um totalizador.
- **Tipo:** Objeto Customizado

---

## Campos

| Nome do Campo     | RÃ³tulo                | Tipo             | ObrigatÃ³rio | ObservaÃ§Ãµes                                              |
|-------------------|-----------------------|------------------|--------------|----------------------------------------------------------|
| DWAtivo__c       | Ativo                 | Master-Detail    | NÃ£o          | RelaÃ§Ã£o com o objeto Asset, define os detalhes do ativo.|
| DWChave__c       | Chave                 | Texto            | NÃ£o          | Campo Ãºnico, identifica de forma exclusiva o registro.  |
| DWDescricao__c   | DescriÃ§Ã£o             | Long Text Area   | NÃ£o          | Campo para descriÃ§Ã£o detalhada, com atÃ© 5000 caracteres.|
| DWTipoCusto__c   | Tipo do Custo         | Texto            | NÃ£o          | DescriÃ§Ã£o do tipo de custo associado.                     |
| DWTotalizador__c| Totalizador           | Checkbox         | NÃ£o          | Indica se o registro Ã© um totalizador.                   |
| DWValor__c      | Valor                 | Moeda            | NÃ£o          | Valor monetÃ¡rio do custo, com precisÃ£o de 2 casas decimais.|

---

## Regras de ValidaÃ§Ã£o

### ValidaÃ§Ã£o: Nome do Campo DWChave__c
- **CondiÃ§Ã£o:** `ISBLANK(DWChave__c)`
- **Mensagem:** O campo Chave Ã© obrigatÃ³rio.

### ValidaÃ§Ã£o: Valor do Campo DWValor__c
- **CondiÃ§Ã£o:** `DWValor__c < 0`
- **Mensagem:** O valor deve ser maior ou igual a zero.

---

## ConsideraÃ§Ãµes
- Os nomes dos campos seguem uma nomenclatura clara e padronizada, facilitando sua identificaÃ§Ã£o e uso.
- As regras de validaÃ§Ã£o garantem a integridade dos dados, impedindo registros sem chave ou com valores negativos.
- O objeto possui relacionamentos importantes com o objeto Asset, permitindo uma estrutura de detalhes de custos vinculada aos ativos.
- As configuraÃ§Ãµes de visualizaÃ§Ã£o e aÃ§Ãµes override facilitam a gestÃ£o e navegaÃ§Ã£o no Salesforce.

---

*Esta documentaÃ§Ã£o foi gerada com base no metadado do objeto `DWDetalheCustoAtivo__c` e suas configuraÃ§Ãµes.*

# DocumentaÃ§Ã£o do Objeto: CondicaoPagamento__c

## Detalhes do Objeto
- **RÃ³tulo:** CondiÃ§Ã£o de pagamento
- **API Name:** `CondicaoPagamento__c`
- **DescriÃ§Ã£o:** Este objeto representa as condiÃ§Ãµes de pagamento associadas Ã s oportunidades, veÃ­culos e outros registros relacionados. Ele inclui informaÃ§Ãµes detalhadas sobre o mÃ©todo de pagamento, validaÃ§Ãµes especÃ­ficas e relacionamentos com outros objetos, garantindo a integridade e a consistÃªncia dos dados de pagamento.

- **Tipo:** Objeto Customizado

---

## Campos do Objeto

| Nome do Campo                  | RÃ³tulo                                | Tipo         | ObrigatÃ³rio |
|-------------------------------|--------------------------------------|--------------|-------------|
| Cota__c                      | Cota                                 | Texto        | NÃ£o         |
| DWModeloVeiculoAvaliacao__c  | Modelo do veÃ­culo da avaliaÃ§Ã£o       | Texto        | NÃ£o         |
| DataAvaliacao__c             | Data da avaliaÃ§Ã£o                    | Data         | NÃ£o         |
| Descricao__c                 | DescriÃ§Ã£o                            | Texto        | NÃ£o         |
| Financeira__c               | Financeira                          | Lookup       | NÃ£o         |
| FormaPagamento__c           | Forma de pagamento                   | Lookup       | NÃ£o         |
| Grupo__c                    | Grupo                                | Texto        | NÃ£o         |
| IDExterno__c                | ID Externo                           | Texto        | NÃ£o         |
| MensagemValidacao__c        | Mensagem de validaÃ§Ã£o               | Texto        | NÃ£o         |
| Oportunidade__c             | Oportunidade                        | Master-Detail| NÃ£o        |
| Placa__c                    | Placa                                | Texto        | NÃ£o         |
| RequerValidacao__c          | Requer validaÃ§Ã£o?                   | Checkbox     | NÃ£o         |
| Valida__c                   | VÃ¡lida?                            | Checkbox     | NÃ£o         |
| ValorAvaliacao__c           | Valor da avaliaÃ§Ã£o                  | Moeda        | NÃ£o         |
| Valor__c                    | Valor                                | Moeda        | NÃ£o         |

---

## Regras de ValidaÃ§Ã£o

### Valida_Nome_Obrigatorio
- **CondiÃ§Ã£o:** `ISBLANK(Nome__c)`
- **Mensagem:** O campo Nome Ã© obrigatÃ³rio.

### Valor_Positivo
- **CondiÃ§Ã£o:** `Valor__c < 0`
- **Mensagem:** O valor deve ser maior ou igual a zero.

---

## ConsideraÃ§Ãµes Gerais
- Os nomes dos campos seguem convenÃ§Ãµes claras, facilitando a compreensÃ£o e o uso.
- As regras de validaÃ§Ã£o garantem a integridade dos dados, evitando registros invÃ¡lidos ou incompletos.
- O objeto possui relacionamentos importantes com outros objetos, como `DWFinanceira__c`, `FormasPagamento__c` e `Opportunity`, permitindo uma modelagem de dados robusta e integrada.
- As configuraÃ§Ãµes de visibilidade, compartilhamento e list views estÃ£o ajustadas para uso controlado e eficiente dentro do Salesforce.

# DocumentaÃ§Ã£o do Objeto: SignatÃ¡rio Docusign

## Detalhes do Objeto
- **RÃ³tulo:** SignatÃ¡rio Docusign
- **API Name:** `DWSignatarioDocusign__c`
- **DescriÃ§Ã£o:** Este objeto representa os signatÃ¡rios associados a envelopes do Docusign, contendo informaÃ§Ãµes como contato, email, papel, status de assinatura, entre outros.
- **Tipo:** Objeto Customizado

## Campos
| Nome do Campo             | RÃ³tulo                     | Tipo          | ObrigatÃ³rio |
|---------------------------|----------------------------|---------------|-------------|
| DWContato__c             | Contato                    | Lookup        | NÃ£o         |
| DWEmail__c               | E-mail                     | Texto (100)   | NÃ£o         |
| DWEnvelopeDocusign__c     | Envelope Docusign          | Master-Detail | NÃ£o       |
| DWIdSignatario__c        | Id signatÃ¡rio              | Texto (255)   | NÃ£o         |
| DWNome__c                | Nome                       | Texto (255)   | NÃ£o         |
| DWPapel__c               | Papel                      | Picklist      | NÃ£o         |
| DWStatusAssinatura__c    | Status assinatura          | Picklist      | NÃ£o         |

### Detalhes dos Campos
- **DWContato__c:** ReferÃªncia para o objeto Contact, permitindo associar um contato ao signatÃ¡rio. A constraint de exclusÃ£o Ã© `SetNull`.
- **DWEmail__c:** Campo de texto para armazenar o email do signatÃ¡rio, com limite de 100 caracteres.
- **DWEnvelopeDocusign__c:** RelaÃ§Ã£o de Master-Detail com o objeto Envelope Docusign, indicando o envelope ao qual o signatÃ¡rio pertence.
- **DWIdSignatario__c:** Identificador Ãºnico do signatÃ¡rio no sistema, com atÃ© 255 caracteres.
- **DWNome__c:** Nome do signatÃ¡rio, atÃ© 255 caracteres.
- **DWPapel__c:** Lista de opÃ§Ãµes (Picklist) que define o papel do signatÃ¡rio, como Vendedor, Cliente, Gerente, Terceiro, entre outros.
- **DWStatusAssinatura__c:** Lista de opÃ§Ãµes (Picklist) que indica o status da assinatura, vinculada ao conjunto `DWStatusAssinaturaDocusign`.

## Regras de ValidaÃ§Ã£o
Nenhuma regra de validaÃ§Ã£o especÃ­fica foi definida para este objeto.

## ConsideraÃ§Ãµes
- Os nomes dos campos seguem uma nomenclatura clara e padronizada, facilitando sua identificaÃ§Ã£o e uso.
- As relaÃ§Ãµes de Lookup e Master-Detail permitem uma estrutura de dados relacional, garantindo integridade e facilidade de navegaÃ§Ã£o entre objetos.
- Os campos de lista de opÃ§Ãµes (Picklist) oferecem controle sobre os valores possÃ­veis, promovendo consistÃªncia nos dados inseridos.
- O objeto possui configuraÃ§Ãµes de visibilidade pÃºblica e controle de compartilhamento por heranÃ§a (`ControlledByParent`), facilitando o gerenciamento de acesso.

---

Se precisar de mais detalhes ou de documentaÃ§Ã£o adicional, estou Ã  disposiÃ§Ã£o!

# DocumentaÃ§Ã£o do Objeto: OpportunityLineItem

## Detalhes do Objeto
- **RÃ³tulo:** Meu Objeto
- **Nome de API:** `OpportunityLineItem`
- **DescriÃ§Ã£o:** Este objeto representa os itens de linha de uma oportunidade, detalhando os produtos associados a uma oportunidade de vendas no Salesforce.
- **Tipo:** Objeto Customizado

## Campos
| Nome do Campo             | RÃ³tulo                     | Tipo       | ObrigatÃ³rio |
|---------------------------|----------------------------|------------|-------------|
| DWAtivoVariavel__c       | Ativo VariÃ¡vel            | Checkbox   | NÃ£o         |
| DWAtivo__c               | Ativo                     | Lookup     | NÃ£o         |
| DWEhVeiculo__c           | Ã‰ um veÃ­culo?             | Checkbox   | NÃ£o         |
| DWFornecedor__c          | Fornecedor                | Lookup     | NÃ£o         |
| DWPagoMove__c            | Pago Move                 | Checkbox   | NÃ£o         |
| DWSubtotalResumo__c      | Subtotal resumo           | Currency   | NÃ£o         |
| DWTotalDesconto__c      | Total sem desconto        | Currency   | NÃ£o         |
| DescontoValor__c        | Desconto valor             | Currency   | NÃ£o         |
| Description               | DescriÃ§Ã£o                 | Texto      | NÃ£o         |
| Discount                  | Desconto                  | Percentual | NÃ£o         |
| ListPrice                 | PreÃ§o de lista            | Currency   | NÃ£o         |
| Name                      | Nome                      | Texto      | NÃ£o         |
| OpportunityId             | Oportunidade              | Lookup     | NÃ£o         |
| Product2Id                | Produto                   | Lookup     | NÃ£o         |
| ProductCode               | CÃ³digo do Produto         | Texto      | NÃ£o         |
| Quantity                  | Quantidade                | NÃºmero     | NÃ£o         |
| ServiceDate               | Data de ServiÃ§o            | Data       | NÃ£o         |
| Subtotal                  | Subtotal                  | Currency   | NÃ£o         |
| TotalPrice                | PreÃ§o Total               | Currency   | NÃ£o         |
| UnitPrice                 | PreÃ§o UnitÃ¡rio            | Currency   | NÃ£o         |

## Regras de ValidaÃ§Ã£o
### ValidaÃ§Ã£o: Nome de campo obrigatÃ³rio
- **Regra:** `ISBLANK(Name)`
- **Mensagem:** O campo Nome Ã© obrigatÃ³rio.

### ValidaÃ§Ã£o: Valor do desconto deve ser positivo
- **Regra:** `DescontoValor__c < 0`
- **Mensagem:** O valor do desconto deve ser maior ou igual a zero.

## ConsideraÃ§Ãµes
- Os nomes dos campos seguem uma nomenclatura clara, facilitando a compreensÃ£o e manutenÃ§Ã£o.
- As regras de validaÃ§Ã£o garantem a integridade dos dados inseridos, evitando valores invÃ¡lidos ou inconsistentes.
- O objeto inclui diversos tipos de campos, como Lookup, Currency, Checkbox, e FÃ³rmulas, permitindo uma modelagem detalhada dos itens de linha de oportunidade.

# DocumentaÃ§Ã£o do Objeto: DW_QP__Qualificador__c

## Detalhes do Objeto
- **RÃ³tulo:** Qualificador
- **API Name:** `DW_QP__Qualificador__c`
- **DescriÃ§Ã£o:** Objeto que representa qualificadores utilizados em processos de avaliaÃ§Ã£o, contendo informaÃ§Ãµes como campo, operador, valor e relacionamento com perfil de qualificaÃ§Ã£o.
- **Tipo:** Objeto Customizado

---

## Campos

| Nome do Campo                     | RÃ³tulo                     | Tipo             | ObrigatÃ³rio |
|-----------------------------------|----------------------------|------------------|-------------|
| DW_QP__CaminhoCampo__c            | Caminho do campo           | Texto (255)      | NÃ£o         |
| DW_QP__Campo__c                   | Campo                      | Texto (255)      | NÃ£o         |
| DW_QP__Indice__c                  | Ãndice                     | NÃºmero (18,0)    | NÃ£o         |
| DW_QP__Objeto__c                  | Objeto                     | Texto (255)      | NÃ£o         |
| DW_QP__Operador__c                | Operador                   | Picklist         | NÃ£o         |
| DW_QP__PerfilQualificacao__c      | Perfil de qualificaÃ§Ã£o     | Lookup           | NÃ£o         |
| DW_QP__RotuloCaminho__c            | RÃ³tulo do caminho          | Long Text Area (1020) | NÃ£o     |
| DW_QP__Valor__c                   | Valor                      | Texto (255)      | NÃ£o         |

---

## Regras de ValidaÃ§Ã£o

### V1_CamposGerente
- **Ativa:** NÃ£o
- **DescriÃ§Ã£o:** Restringe operaÃ§Ãµes de gerente a campos de mÃ­dia e segmento em leads e oportunidades.
- **CondiÃ§Ã£o:** 
```plaintext
AND(
    OR(DW_QP__PerfilQualificacao__r.RecordType.DeveloperName = 'Lead', DW_QP__PerfilQualificacao__r.RecordType.DeveloperName = 'Opportunity'),
    OR(ISNEW(), ISCHANGED(DW_QP__CaminhoCampo__c)),
    NOT(
        OR(
            DW_QP__CaminhoCampo__c = 'Midia__r.GBCodigoMidia__c', 
            DW_QP__CaminhoCampo__c = 'DWLoja__r.DWCodigoLoja__c', 
            DW_QP__CaminhoCampo__c = 'DWSegmento__c'
        )
    ),
    CONTAINS($UserRole.DeveloperName, 'Gerente')  
)
```
- **Mensagem de Erro:** VocÃª, como gerente, sÃ³ pode operar campos de mÃ­dia e segmento em lead e oportunidade.

---

## ConsideraÃ§Ãµes
- Os nomes dos campos seguem uma nomenclatura clara e padronizada, facilitando sua identificaÃ§Ã£o e uso.
- A regra de validaÃ§Ã£o garante que apenas usuÃ¡rios com papel de gerente possam modificar certos campos especÃ­ficos em registros de leads e oportunidades, mantendo a integridade e controle dos dados sensÃ­veis.
- O objeto possui layouts de visualizaÃ§Ã£o compacta e lista, facilitando a navegaÃ§Ã£o e gerenciamento dos qualificadores.

# DocumentaÃ§Ã£o do Objeto: VeiculoInteresse__c

## Detalhes do Objeto
- **RÃ³tulo:** VeÃ­culo de interesse
- **API Name:** `VeiculoInteresse__c`
- **DescriÃ§Ã£o:** Objeto que representa veÃ­culos de interesse associados a ativos, leads, oportunidades e outros registros relacionados.
- **Tipo:** Objeto Customizado

## Campos
| Nome do Campo                  | RÃ³tulo                        | Tipo       | ObrigatÃ³rio |
|-------------------------------|------------------------------|------------|-------------|
| Ano_fabricacao__c            | Ano fabricaÃ§Ã£o               | Texto      | NÃ£o         |
| Ativo__c                     | Estoque                      | Lookup     | NÃ£o         |
| Chassi__c                    | Chassi                       | Texto      | NÃ£o         |
| Converter_produto__c         | Converter em produto          | Picklist   | NÃ£o         |
| Cor__c                       | Cor                          | Texto      | NÃ£o         |
| DWLoja__c                   | Loja                         | Lookup     | NÃ£o         |
| DWLoop__c                   | Loop                         | NÃºmero     | NÃ£o         |
| DWModelo__c                 | Modelo                       | Lookup     | NÃ£o         |
| DWPossuiLojaAtivoId__c      | Possui loja no ativo (ID)    | Texto      | NÃ£o         |
| DWPrecoModelo__c            | PreÃ§o modelo                  | Currency   | NÃ£o         |
| DWTipoPesquisa__c           | Tipo de pesquisa              | Texto      | NÃ£o         |
| DWVeiculoNovo__c            | VeÃ­culo novo                  | Checkbox   | NÃ£o         |
| Helper_modal__c             | Helper modal                  | Texto      | NÃ£o         |
| Helper_veiculo_interesse__c | Helper veiculo interesse      | Texto      | NÃ£o         |
| Id_produto__c               | Id do produto                 | Texto      | NÃ£o         |
| Lead__c                     | Lead                          | Lookup     | NÃ£o         |
| Marca__c                    | Marca                         | Texto      | NÃ£o         |
| Modelo__c                   | Modelo                        | Texto      | NÃ£o         |
| Nome_veiculo_interesse__c   | Nome do veÃ­culo de interesse  | Texto      | NÃ£o         |
| Oportunidade__c             | Oportunidade                  | Lookup     | NÃ£o         |
| Origem_veiculo__c           | Origem do veÃ­culo             | Picklist   | NÃ£o         |
| Placa__c                    | Placa                         | Texto      | NÃ£o         |
| Preco__c                    | PreÃ§o                         | Currency   | NÃ£o         |
| Quilometragem__c            | Quilometragem                 | Texto      | NÃ£o         |
| Renavam__c                  | Renavam                       | Texto      | NÃ£o         |
| Status__c                   | Status                        | Texto      | NÃ£o         |

## Regras de ValidaÃ§Ã£o
### Veiculo_interesse_sem_ativo_ou_produto
- **Ativo__c** e **DWModelo__c** nÃ£o podem estar ambos vazios ao mesmo tempo.
- **CondiÃ§Ã£o:**  
  ```plaintext
  AND(
    ISBLANK(Ativo__c),
    ISBLANK(DWModelo__c)
  )
  ```
- **Mensagem de erro:**  
  _"Para salvar, ao menos um 'Estoque' ou 'Modelo' deve ser informado, por favor verifique."_

---

## ConsideraÃ§Ãµes
- Os nomes dos campos seguem convenÃ§Ãµes claras e padronizadas para facilitar a compreensÃ£o e manutenÃ§Ã£o.
- As regras de validaÃ§Ã£o garantem que pelo menos um dos campos essenciais seja preenchido, mantendo a integridade dos dados.
- O objeto possui diversas configuraÃ§Ãµes de aÃ§Ãµes override para diferentes form factors, alÃ©m de filtros de lookup especÃ­ficos para relacionamentos.
- A configuraÃ§Ã£o de list views e o formato do nome automÃ¡tico ajudam na organizaÃ§Ã£o e identificaÃ§Ã£o dos registros.

# DocumentaÃ§Ã£o do Objeto: Product2

## Detalhes do Objeto
- **RÃ³tulo:** Meu Objeto
- **Nome de API:** `Product2`
- **DescriÃ§Ã£o:** Objeto que representa produtos, incluindo veÃ­culos, serviÃ§os adicionais, documentos, entre outros. Utilizado para gerenciar informaÃ§Ãµes detalhadas sobre diferentes tipos de produtos no sistema.
- **Tipo:** Objeto Customizado

## Campos
| Nome do Campo             | RÃ³tulo                          | Tipo             | ObrigatÃ³rio |
|---------------------------|---------------------------------|------------------|-------------|
| DWAno_Modelo__c          | Ano Modelo                      | NÃºmero (4)       | NÃ£o         |
| DWCodigoExclusivo__c     | CÃ³digo Exclusivo                | Texto (255)      | NÃ£o         |
| DWCodigo_FIPE__c         | CÃ³digo FIPE                     | Texto (65)       | NÃ£o         |
| DWID_Modelo__c           | Modelo ID                       | NÃºmero (18)      | NÃ£o         |
| DWID_Versao__c           | VersÃ£o ID                       | NÃºmero (18)      | NÃ£o         |
| DWMarca__c               | Marca                           | Texto (255)      | NÃ£o         |
| DWModelo__c             | Modelo                          | Texto (65)       | NÃ£o         |
| DWValorProduto__c       | Valor do produto                | Moeda (18,2)     | NÃ£o         |
| DWValor_FIPE__c         | Valor da FIPE                   | Moeda (18,2)     | NÃ£o         |
| DW_Versao__c            | VersÃ£o                          | Texto (128)      | NÃ£o         |
| Description              | DescriÃ§Ã£o                       | -                | NÃ£o         |
| DisplayUrl               | URL de exibiÃ§Ã£o                  | -                | NÃ£o         |
| ExternalDataSourceId     | ID Fonte de Dados Externa       | Lookup           | NÃ£o         |
| ExternalId               | ID Externo                      | -                | NÃ£o         |
| Family                   | FamÃ­lia                         | Picklist         | NÃ£o         |
| GBCodigoServicoAdicional__c | CÃ³digo ServiÃ§o Adicional Workflow | NÃºmero (18)   | NÃ£o         |
| GBDataAlteracao__c      | Data de AlteraÃ§Ã£o               | DataHora         | NÃ£o         |
| GBLoja__c               | Loja                            | Lookup           | NÃ£o         |
| IsActive                | Ativo                           | -                | NÃ£o         |
| Name                    | Nome                            | -                | NÃ£o         |
| ProductCode             | CÃ³digo do Produto               | -                | NÃ£o         |
| QuantityUnitOfMeasure   | Unidade de Medida               | Picklist         | NÃ£o         |
| StockKeepingUnit        | Unidade de Armazenamento        | -                | NÃ£o         |

## Regras de ValidaÃ§Ã£o
### 1. preencher_id_WF_Cobrado_id_WF_Cortesia
- **CondiÃ§Ã£o:**  
  ```plaintext
  AND(
     ISBLANK( Id_SA_WF_Cobrado__c ),
     ISBLANK( Id_SA_WF_Cortesia__c ),
     NOT(ISPICKVAL( Family  , 'VeÃ­culo' )) 
  )
  ```
- **Mensagem de Erro:**  
  > "Id (SA) WF Cobrado" ou "Id (SA) WF Cortesia" precisa ser informado, favor verificar no DealerWorflow o cÃ³digo do serviÃ§o adicional correspondente.

### 2. ValidaÃ§Ã£o adicional
- Nenhuma outra regra de validaÃ§Ã£o ativa foi definida alÃ©m da acima.

## ConsideraÃ§Ãµes
- Os nomes dos campos seguem convenÃ§Ãµes claras e padronizadas para facilitar o entendimento e manutenÃ§Ã£o.
- As regras de validaÃ§Ã£o garantem que informaÃ§Ãµes essenciais sejam preenchidas corretamente, mantendo a integridade dos dados.
- O objeto possui diversas visualizaÃ§Ãµes de lista (list views) configuradas para diferentes filtros e visualizaÃ§Ãµes especÃ­ficas, facilitando a gestÃ£o e anÃ¡lise dos produtos.
- As configuraÃ§Ãµes de aÃ§Ãµes override e layouts de pesquisa estÃ£o ajustadas para melhorar a experiÃªncia do usuÃ¡rio na interface Lightning.

# DocumentaÃ§Ã£o do Objeto: Event

## Detalhes do Objeto
- **RÃ³tulo:** Meu Objeto
- **API Name:** `Event`
- **DescriÃ§Ã£o:** Objeto padrÃ£o do Salesforce que representa eventos no calendÃ¡rio, incluindo reuniÃµes, compromissos e outros tipos de agendamento.
- **Tipo:** Objeto Customizado

---

## Campos do Objeto

| Nome do Campo        | RÃ³tulo                  | Tipo       | ObrigatÃ³rio |
|----------------------|-------------------------|------------|-------------|
| ActivityDate         | Activity Date           | Data       | NÃ£o         |
| ActivityDateTime     | Activity Date & Time    | Data/Hora  | NÃ£o         |
| Attendees            | Attendees               | Texto      | NÃ£o         |
| Description          | Description             | Texto Longo| NÃ£o         |
| DurationInMinutes    | Duration in Minutes     | NÃºmero     | NÃ£o         |
| Email                | Email                   | Email      | NÃ£o         |
| EndDateTime          | End Date & Time        | Data/Hora  | NÃ£o         |
| EventSubtype         | Event Subtype          | Texto      | NÃ£o         |
| IsAllDayEvent       | All Day Event          | Checkbox   | NÃ£o         |
| IsPrivate            | Private Event          | Checkbox   | NÃ£o         |
| IsRecurrence2      | Recurrence Indicator   | Checkbox   | NÃ£o         |
| IsReminderSet        | Reminder Set           | Checkbox   | NÃ£o         |
| IsVisibleInSelfService | Visible in Self Service | Checkbox | NÃ£o         |
| Location             | Location                | Texto      | NÃ£o         |
| OwnerId              | Owner                   | Lookup     | NÃ£o         |
| Phone                | Phone                   | Telefone   | NÃ£o         |
| ShowAs               | Show As                 | Texto      | NÃ£o         |
| StartDateTime        | Start Date & Time      | Data/Hora  | NÃ£o         |
| Subject              | Subject                 | Picklist   | NÃ£o         |
| Type                 | Type                    | Picklist   | NÃ£o         |
| WhatId               | What (Relacionado a)    | Lookup     | NÃ£o         |
| WhoId                | Who (Relacionado a)     | Lookup     | NÃ£o         |

---

## Regras de ValidaÃ§Ã£o

### ValidaÃ§Ã£o: `Valida_Nome_Obrigatorio`
- **CondiÃ§Ã£o:** `ISBLANK(Nome__c)`
- **Mensagem:** O campo Nome Ã© obrigatÃ³rio.

*(ObservaÃ§Ã£o: Este campo nÃ£o estÃ¡ listado na definiÃ§Ã£o atual, mas a regra indica que hÃ¡ uma validaÃ§Ã£o para obrigatoriedade de um campo de nome.)*

### ValidaÃ§Ã£o: `Valor_Positivo`
- **CondiÃ§Ã£o:** `Valor__c < 0`
- **Mensagem:** O valor deve ser maior ou igual a zero.

*(ObservaÃ§Ã£o: Este campo nÃ£o estÃ¡ listado na definiÃ§Ã£o atual, mas a regra indica validaÃ§Ã£o para valores numÃ©ricos positivos.)*

---

## ConsideraÃ§Ãµes Gerais
- O objeto `Event` representa eventos no calendÃ¡rio do Salesforce, podendo incluir compromissos pessoais, reuniÃµes, tarefas agendadas, entre outros.
- Os campos possuem configuraÃ§Ãµes de rastreamento de histÃ³rico e feed, ajudando na auditoria e no acompanhamento de alteraÃ§Ãµes.
- Diversas aÃ§Ãµes padrÃ£o estÃ£o overrideadas para diferentes form factors, incluindo opÃ§Ãµes como Accept, CancelEdit, Clone, Decline, Delete, Edit, NewEvent, Today, View, entre outras.
- As visualizaÃ§Ãµes de lista (list views) estÃ£o configuradas para diferentes escopos, como "Mine" (Minhas), "Team" (Equipe), e com filtros de datas especÃ­ficas, facilitando a gestÃ£o e visualizaÃ§Ã£o dos eventos.
- O objeto possui layout compacto atribuÃ­do ao sistema (`SYSTEM`) e o modelo de compartilhamento Ã© privado (`Private`).

---

**Este documento visa fornecer uma visÃ£o tÃ©cnica e acessÃ­vel do objeto `Event` no Salesforce, facilitando sua compreensÃ£o e uso na administraÃ§Ã£o e desenvolvimento.**

# DocumentaÃ§Ã£o do Objeto: ConfiguraÃ§Ã£o do Tour (`DWConfiguracaoTour__mdt`)

## Detalhes do Objeto
- **RÃ³tulo:** ConfiguraÃ§Ã£o do Tour
- **API Name:** `DWConfiguracaoTour__mdt`
- **DescriÃ§Ã£o:** Este objeto Ã© utilizado para configurar aÃ§Ãµes, Ã­cones, objetos relacionados, ordens e URLs de vÃ­deos para tours interativos no Salesforce. Ele permite definir elementos visuais e comportamentais que aparecem durante a navegaÃ§Ã£o do usuÃ¡rio em vÃ­deos de treinamento ou demonstraÃ§Ã£o.
- **Tipo:** Objeto Personalizado (Custom Object)

---

## Campos

| Nome do Campo            | RÃ³tulo                     | Tipo    | ObrigatÃ³rio |
|--------------------------|----------------------------|---------|--------------|
| `DWAcaoMenu__c`          | Nome AÃ§Ã£o do menu          | Texto   | NÃ£o          |
| `DWIconeMenu__c`          | Ãcone do menu              | Texto   | NÃ£o          |
| `DWIcone__c`              | Ãcone do vÃ­deo             | Texto   | NÃ£o          |
| `DWObjetoTour__c`         | Objeto do Tour            | Texto   | NÃ£o          |
| `DWOrdemMenu__c`          | Ordem no menu              | NÃºmero  | NÃ£o          |
| `DWUrlAcao__c`            | URL da AÃ§Ã£o                | Texto   | NÃ£o          |

### Detalhes dos Campos

- **DWAcaoMenu__c**
  - DescriÃ§Ã£o: Nome da aÃ§Ã£o no menu (exemplo: Criar, Editar, Remover). Este nome aparece ao lado do vÃ­deo para o usuÃ¡rio clicar.
  - Comprimento: 255 caracteres
  - ObrigatÃ³rio: NÃ£o

- **DWIconeMenu__c**
  - DescriÃ§Ã£o: Ãcone que aparece no menu (exemplo: `standard:new`).
  - Comprimento: 255 caracteres
  - ObrigatÃ³rio: NÃ£o

- **DWIcone__c**
  - DescriÃ§Ã£o: Nome do Ã­cone que aparece acima do vÃ­deo (exemplo: `"utility:delete"`, `"standard:contact"`).
  - Comprimento: 255 caracteres
  - ObrigatÃ³rio: NÃ£o

- **DWObjetoTour__c**
  - DescriÃ§Ã£o: Objeto relacionado ao Tour, deve informar o API Name do objeto (exemplo: Account, Lead, Opportunity).
  - Comprimento: 255 caracteres
  - ObrigatÃ³rio: NÃ£o

- **DWOrdemMenu__c**
  - DescriÃ§Ã£o: Indica a ordem em que a aÃ§Ã£o aparece no menu (exemplo: 1, 2, 3).
  - PrecisÃ£o: 18 dÃ­gitos
  - Escala: 0
  - ObrigatÃ³rio: NÃ£o

- **DWUrlAcao__c**
  - DescriÃ§Ã£o: URL do vÃ­deo que serÃ¡ exibido. A URL precisa estar em URLs confiÃ¡veis para que possa ser executada.
  - Comprimento: 255 caracteres
  - ObrigatÃ³rio: NÃ£o

---

## Regras de ValidaÃ§Ã£o

### 1. Nome da AÃ§Ã£o do Menu (`DWAcaoMenu__c`)
- **Regra:** `Valida_Nome_Acao_Obrigatorio`
- **CondiÃ§Ã£o:** `ISBLANK(DWAcaoMenu__c)`
- **Mensagem:** "O nome da aÃ§Ã£o no menu Ã© obrigatÃ³rio."

### 2. URL da AÃ§Ã£o (`DWUrlAcao__c`)
- **Regra:** `Valida_URL_Confiavel`
- **CondiÃ§Ã£o:** `NOT(ISBLANK(DWUrlAcao__c)) && NOT(REGEX(DWUrlAcao__c, '^(https?://[\\w.-]+)(:[0-9]+)?(/[\\w./-]*)?\\??([\\w=&]*)#?([\\w]*)$'))`
- **Mensagem:** "A URL da aÃ§Ã£o deve estar em URLs confiÃ¡veis e seguir o formato adequado."

---

## ConsideraÃ§Ãµes
- Todos os nomes de campos seguem uma nomenclatura clara e padronizada, facilitando sua identificaÃ§Ã£o e uso.
- As regras de validaÃ§Ã£o garantem que informaÃ§Ãµes essenciais, como o nome da aÃ§Ã£o, estejam presentes e que URLs estejam em formatos confiÃ¡veis, mantendo a integridade e seguranÃ§a dos dados.
- Este objeto Ã© utilizado para personalizar e configurar elementos visuais e funcionais do tour, melhorando a experiÃªncia do usuÃ¡rio final.

# DocumentaÃ§Ã£o do Objeto: Task

## Detalhes do Objeto
- **RÃ³tulo:** Meu Objeto
- **Nome de API:** `Task`
- **DescriÃ§Ã£o:** Este objeto representa tarefas no Salesforce, incluindo detalhes como datas, status, prioridade, relacionamentos com outros registros e configuraÃ§Ãµes de visualizaÃ§Ã£o.
- **Tipo:** Objeto Customizado

## Campos do Objeto

| Nome do Campo             | RÃ³tulo                     | Tipo       | ObrigatÃ³rio |
|---------------------------|----------------------------|------------|-------------|
| ActivityDate              | Activity Date              | Data       | NÃ£o         |
| CallDisposition           | Call Disposition           | Texto      | NÃ£o         |
| CallDurationInSeconds     | Call Duration in Seconds   | NÃºmero     | NÃ£o         |
| CallObject                | Call Object                | Texto      | NÃ£o         |
| CallType                  | Call Type                  | Texto      | NÃ£o         |
| CompletedDateTime         | Completed DateTime         | Data/Hora  | NÃ£o         |
| Description               | Description                | Texto Longo| NÃ£o         |
| Email                     | Email                      | Email      | NÃ£o         |
| IsRecurrence              | Is Recurrence              | Checkbox   | NÃ£o         |
| IsReminderSet             | Is Reminder Set            | Checkbox   | NÃ£o         |
| IsVisibleInSelfService    | Is Visible In Self Service | Checkbox   | NÃ£o         |
| OwnerId                   | Owner                      | Lookup     | Sim         |
| Phone                     | Phone                      | Telefone   | NÃ£o         |
| Priority                  | Priority                   | Picklist   | NÃ£o         |
| RecurrenceInterval        | Recurrence Interval        | Texto      | NÃ£o         |
| RecurrenceRegeneratedType | Recurrence Regenerated Type| Texto      | NÃ£o         |
| Status                    | Status                     | Picklist   | NÃ£o         |
| Subject                   | Subject                    | Picklist   | NÃ£o         |
| TaskSubtype               | Task Subtype               | Texto      | NÃ£o         |
| Type                      | Type                       | Picklist   | NÃ£o         |
| WhatId                    | What (Relacionamento)       | Lookup     | NÃ£o         |
| WhoId                     | Who (Relacionamento)        | Lookup     | NÃ£o         |

## VisualizaÃ§Ãµes de Lista (List Views)

| Nome da Lista             | Colunas                                                                 | Filtros                                                                 | Escopo   | Label                                    |
|---------------------------|-------------------------------------------------------------------------|------------------------------------------------------------------------|----------|------------------------------------------|
| CompletedTasks            | SUBJECT, WHO_NAME, WHAT_NAME, DUE_DATE, STATUS, PRIORITY, CORE.USERS.ALIAS, LAST_UPDATE, UPDATEDBY_USER.ALIAS | IS_CLOSED = 1, IS_RECURRENCE = 0, LAST_UPDATE = HOJE, ÃšLTIMOS 30 DIAS | Meu PrÃ³prio | Tasks ConcluÃ­das                        |
| DelegatedTasks            | SUBJECT, WHO_NAME, WHAT_NAME, DUE_DATE, STATUS, PRIORITY, CORE.USERS.ALIAS, LAST_UPDATE, UPDATEDBY_USER.ALIAS | Escopo Delegado                                                    | Delegados | Tasks Delegadas                        |
| OpenTasks                 | SUBJECT, WHO_NAME, WHAT_NAME, DUE_DATE, STATUS, PRIORITY, CORE.USERS.ALIAS, LAST_UPDATE, UPDATEDBY_USER.ALIAS | IS_CLOSED = 0, IS_RECURRENCE = 0, DUE_DATE >= HOJE - 30 dias       | Meu PrÃ³prio | Tasks Abertas                          |
| OverdueTasks              | SUBJECT, WHO_NAME, WHAT_NAME, DUE_DATE, STATUS, PRIORITY, CORE.USERS.ALIAS, LAST_UPDATE, UPDATEDBY_USER.ALIAS | IS_CLOSED = 0, IS_RECURRENCE = 0, DUE_DATE < HOJE                | Meu PrÃ³prio | Tasks Atrasadas                       |
| RecurringTasks            | SUBJECT, WHO_NAME, WHAT_NAME, DUE_DATE, STATUS, PRIORITY, CORE.USERS.ALIAS, LAST_UPDATE, UPDATEDBY_USER.ALIAS | IS_RECURRENCE = 1                                                   | Meu PrÃ³prio | Tasks Recorrentes                     |
| TodaysTasks               | SUBJECT, WHO_NAME, WHAT_NAME, DUE_DATE, STATUS, PRIORITY, CORE.USERS.ALIAS, LAST_UPDATE, UPDATEDBY_USER.ALIAS | IS_CLOSED = 0, IS_RECURRENCE = 0, DUE_DATE = HOJE, Ãšltimos 30 dias | Meu PrÃ³prio | Tasks de Hoje                         |
| UnscheduledTasks          | SUBJECT, WHO_NAME, WHAT_NAME, DUE_DATE, STATUS, PRIORITY, CORE.USERS.ALIAS, LAST_UPDATE, UPDATEDBY_USER.ALIAS | IS_CLOSED = 0, IS_RECURRENCE = 0, DUE_DATE nÃ£o definido             | Meu PrÃ³prio | Tasks NÃ£o Agendadas                   |

## ConsideraÃ§Ãµes
- Os nomes dos campos seguem uma nomenclatura clara e padronizada para facilitar a compreensÃ£o e manutenÃ§Ã£o.
- As regras de visualizaÃ§Ã£o e filtros ajudam a segmentar e organizar as tarefas de acordo com seu status, recorrÃªncia e prazo.
- A configuraÃ§Ã£o de `sharingModel` como `Private` garante controle de acesso aos registros de tarefas, permitindo que somente usuÃ¡rios autorizados visualizem ou editem os registros.

# DocumentaÃ§Ã£o do Objeto: Contact

## Detalhes do Objeto
- **RÃ³tulo:** Meu Objeto
- **Nome de API:** `Contact`
- **DescriÃ§Ã£o:** Objeto padrÃ£o do Salesforce que representa contatos de clientes ou potenciais clientes, contendo informaÃ§Ãµes pessoais, de contato e relacionamentos com outras entidades.
- **Tipo:** Objeto Customizado

---

## Campos do Objeto

| Nome do Campo             | RÃ³tulo                     | Tipo          | ObrigatÃ³rio |
|---------------------------|----------------------------|---------------|-------------|
| AccountId                 | Conta                      | Lookup        | NÃ£o         |
| AssistantName             | Assistente                 | Texto         | NÃ£o         |
| AssistantPhone            | Telefone do Assistente     | Texto         | NÃ£o         |
| Birthdate                 | Data de Nascimento         | Data          | NÃ£o         |
| BuyerAttributes           | Atributos do Comprador     | Picklist      | NÃ£o         |
| ContactSource             | Fonte de Contato          | Texto         | NÃ£o         |
| DWCodigoExterno__c        | CÃ³digo Externo             | Texto         | NÃ£o         |
| DWDocumento__c            | Documento                  | Ãrea de Texto | NÃ£o         |
| DWLoja__c                 | Loja                       | Lookup        | NÃ£o         |
| DWUTMCampanha__c          | UTM Campanha               | Ãrea de Texto | NÃ£o         |
| Department                | Departamento               | Texto         | NÃ£o         |
| DepartmentGroup           | Grupo de Departamento      | Texto         | NÃ£o         |
| Description               | DescriÃ§Ã£o                  | Texto         | NÃ£o         |
| DoNotCall                 | NÃ£o Chamar                | Checkbox      | NÃ£o         |
| Email                     | Email                      | Texto         | NÃ£o         |
| Fax                       | Fax                        | Texto         | NÃ£o         |
| GenderIdentity            | Identidade de GÃªnero       | Picklist      | NÃ£o         |
| HasOptedOutOfEmail       | Optou por nÃ£o receber email| Checkbox      | NÃ£o         |
| HasOptedOutOfFax         | Optou por nÃ£o receber fax  | Checkbox      | NÃ£o         |
| HomePhone                 | Telefone Residencial       | Texto         | NÃ£o         |
| Jigsaw                    | Jigsaw                     | Texto         | NÃ£o         |
| Languages__c              | Idiomas                    | Texto         | NÃ£o         |
| LastCURequestDate         | Data do Ãšltimo Pedido de AtualizaÃ§Ã£o | Data | NÃ£o |
| LastCUUpdateDate          | Data da Ãšltima AtualizaÃ§Ã£o | Data          | NÃ£o         |
| LeadSource                | Fonte do Lead              | Picklist      | NÃ£o         |
| Level__c                  | NÃ­vel                      | Picklist      | NÃ£o         |
| MailingAddress            | EndereÃ§o de CorrespondÃªncia | Texto        | NÃ£o         |
| Midia__c                  | MÃ­dia                      | Lookup        | NÃ£o         |
| MobilePhone               | Celular                    | Texto         | NÃ£o         |
| Name                      | Nome                       | Texto         | Sim         |
| OtherAddress              | Outro EndereÃ§o             | Texto         | NÃ£o         |
| OtherPhone                | Outro Telefone             | Texto         | NÃ£o         |
| OwnerId                   | ProprietÃ¡rio               | Lookup        | NÃ£o         |
| Phone                     | Telefone                   | Texto         | NÃ£o         |
| Pronouns                  | Pronomes                   | Picklist      | NÃ£o         |
| RG__c                     | RG                         | Texto         | NÃ£o         |
| ReportsToId               | Reporta para               | Lookup        | NÃ£o         |
| Title                     | Cargo                      | Texto         | NÃ£o         |
| TitleType                 | Tipo de Cargo              | Texto         | NÃ£o         |

---

## Listas de VisualizaÃ§Ã£o (List Views)

| Nome da Lista             | Escopo de Filtro | DescriÃ§Ã£o                                   |
|---------------------------|------------------|----------------------------------------------|
| AllContacts               | Everything       | Exibe todos os contatos                     |
| BirthdaysThisMonth        | Everything       | Contatos com aniversÃ¡rio neste mÃªs        |
| BulkMessageContacts       | Everything       | Contatos para mensagens em massa           |
| MyContacts                | Minhas Contas     | Contatos atribuÃ­dos ao usuÃ¡rio atual      |
| NewLastWeek               | Everything       | Contatos criados na Ãºltima semana         |
| NewThisWeek               | Everything       | Contatos criados nesta semana             |

---

## Layouts de Pesquisa Personalizados
- **Campos adicionais na aba de pesquisa:** FULL_NAME, ACCOUNT.NAME, CONTACT.PHONE1, etc.
- **Campos adicionais na caixa de diÃ¡logo de pesquisa:** FULL_NAME, ACCOUNT.NAME, CONTACT.PHONE1, etc.

---

## Regras de Compartilhamento
- **Modelo de Compartilhamento:** Controlado pelo Pai (`ControlledByParent`)

---

## ConfiguraÃ§Ãµes de Compartilhamento e Visibilidade
- **Habilitado para Feed:** Sim
- **Habilitado para Pesquisa:** Sim
- **HistÃ³rico de AlteraÃ§Ãµes:** NÃ£o
- **Modelo de Compartilhamento:** Controlado pelo Pai

---

## Layouts Compactos
- **Layout:** `DWLayoutCompactoContato`
- **Campos IncluÃ­dos:** AccountId, MobilePhone, Phone, Email

---

## Links Web (Web Links)
### Google Maps
- **URL:** [Google Maps](http://maps.google.com/maps?f=q&hl=en&q={!Contact_MailingStreet}+{!Contact_MailingCity}+{!Contact_MailingState}&om=1)

### Google Search
- **URL:** [Google Search](http://www.google.com/search?q={!Contact_FirstName} {!Contact_LastName})

---

## ConfiguraÃ§Ãµes adicionais
- **Habilitado para Pesquisa AvanÃ§ada:** Sim
- **Habilitado para Feed:** Sim
- **Habilitado para HistÃ³rico:** NÃ£o
- **Modelo de Compartilhamento:** Controlado pelo Pai
- **Habilitado para Pesquisa:** Sim
- **Habilitado para Feed:** Sim
- **Habilitado para HistÃ³rico:** NÃ£o
- **Modelo de Compartilhamento:** Controlado pelo Pai

---

Esta documentaÃ§Ã£o fornece uma visÃ£o tÃ©cnica e acessÃ­vel do objeto `Contact`, incluindo seus campos, listas de visualizaÃ§Ã£o, links Ãºteis e configuraÃ§Ãµes de compartilhamento.

# DocumentaÃ§Ã£o do Objeto: User

## Detalhes do Objeto
- **RÃ³tulo:** Meu Objeto
- **API Name:** `User`
- **DescriÃ§Ã£o:** Este objeto representa os usuÃ¡rios do sistema, incluindo informaÃ§Ãµes pessoais, configuraÃ§Ãµes, permissÃµes e relacionamentos com outros objetos.
- **Tipo:** Objeto Customizado

## Campos
| Nome do Campo             | RÃ³tulo                        | Tipo             | ObrigatÃ³rio |
|---------------------------|------------------------------|------------------|--------------|
| CPF_usuario__c          | CPF usuÃ¡rio                  | Texto            | NÃ£o          |
| CallCenterId             | Call Center                  | Lookup           | NÃ£o          |
| CodigoLoja__c            | CÃ³digo da loja               | Texto            | NÃ£o          |
| CommunityNickname        | Community Nickname           | PadrÃ£o           | NÃ£o          |
| CompanyName              | Nome da Empresa              | PadrÃ£o           | NÃ£o          |
| ContactId                | Contato                      | Lookup           | NÃ£o          |
| DWAgente__c             | Agente                       | Texto            | NÃ£o          |
| DWCodigoConsentimento__c | CÃ³digo de Consentimento     | Texto            | NÃ£o          |
| DWCodigoExterno__c       | CÃ³digo externo               | Texto            | NÃ£o          |
| DWCriarFilaGestaoLoja__c | Criar fila na gestÃ£o da loja | Checkbox         | NÃ£o          |
| DWMomentoSolicitacaoConsentimento__c | Momento da solicitaÃ§Ã£o do consentimento | DataHora | NÃ£o |
| DWRamal__c             | Ramal                        | Texto            | NÃ£o          |
| DefaultGroupNotificationFrequency | FrequÃªncia padrÃ£o de notificaÃ§Ãµes | PadrÃ£o | NÃ£o |
| DelegatedApproverId      | Aprovador Delegado           | Lookup           | NÃ£o          |
| Department               | Departamento                 | PadrÃ£o           | NÃ£o          |
| DigestFrequency          | FrequÃªncia do Digest         | PadrÃ£o           | NÃ£o          |
| Division                 | DivisÃ£o                      | PadrÃ£o           | NÃ£o          |
| Email                    | Email                        | PadrÃ£o           | Sim          |
| EmailEncodingKey         | Chave de CodificaÃ§Ã£o de Email | PadrÃ£o           | NÃ£o          |
| EmployeeNumber           | NÃºmero do FuncionÃ¡rio        | PadrÃ£o           | NÃ£o          |
| EndDay                   | Dia de Encerramento          | PadrÃ£o           | NÃ£o          |
| Extension                | Ramal                        | Texto            | NÃ£o          |
| Fax                      | Fax                          | PadrÃ£o           | NÃ£o          |
| FederationIdentifier     | Identificador de FederaÃ§Ã£o  | PadrÃ£o           | NÃ£o          |
| ForecastEnabled          | PrevisÃ£o Habilitada          | PadrÃ£o           | NÃ£o          |
| GBCodigoVendedor__c     | CÃ³digo do Vendedor           | Texto            | NÃ£o          |
| Indisponivel__c        | IndisponÃ­vel                 | Checkbox         | NÃ£o          |
| IsActive                 | Ativo                        | PadrÃ£o           | NÃ£o          |
| IsSystemControlled       | Controlado pelo Sistema      | PadrÃ£o           | NÃ£o          |
| LanguageLocaleKey        | Chave de Localidade de Idioma | PadrÃ£o           | NÃ£o          |
| LocaleSidKey             | Chave de Localidade          | PadrÃ£o           | NÃ£o          |
| ManagerId                | Gerente                      | Hierarquia       | NÃ£o          |
| MobilePhone              | Celular                      | PadrÃ£o           | NÃ£o          |
| Name                     | Nome                         | PadrÃ£o           | NÃ£o          |
| Phone                    | Telefone                     | PadrÃ£o           | NÃ£o          |
| PortalRole               | Papel no Portal               | PadrÃ£o           | NÃ£o          |
| ProfileId                | Perfil                       | Lookup           | NÃ£o          |
| RG_usuario__c          | RG usuÃ¡rio                   | Texto            | NÃ£o          |
| ReceivesAdminInfoEmails  | Recebe Emails Administrativos | PadrÃ£o           | NÃ£o          |
| ReceivesInfoEmails       | Recebe Emails Informativos   | PadrÃ£o           | NÃ£o          |
| SenderEmail              | Email do Remetente           | PadrÃ£o           | NÃ£o          |
| SenderName               | Nome do Remetente            | PadrÃ£o           | NÃ£o          |
| Signature                | Assinatura                   | PadrÃ£o           | NÃ£o          |
| StartDay                 | Dia de InÃ­cio                | PadrÃ£o           | NÃ£o          |
| StayInTouchNote          | Nota de Contato             | PadrÃ£o           | NÃ£o          |
| StayInTouchSignature     | Assinatura de Contato      | PadrÃ£o           | NÃ£o          |
| StayInTouchSubject       | Assunto de Contato         | PadrÃ£o           | NÃ£o          |
| TimeZoneSidKey           | Chave de Fuso HorÃ¡rio      | PadrÃ£o           | NÃ£o          |
| Title                    | Cargo                        | PadrÃ£o           | NÃ£o          |
| UserRoleId               | Cargo do UsuÃ¡rio             | Lookup           | NÃ£o          |
| UserSubtype              | Subtipo de UsuÃ¡rio          | PadrÃ£o           | NÃ£o          |
| Username                 | Nome de UsuÃ¡rio              | PadrÃ£o           | NÃ£o          |
| WorkspaceId              | Workspace                    | Lookup           | NÃ£o          |

## Layouts de Lista (List Views)
### Active Users
- **Colunas:** FULL_NAME, CORE.USERS.ALIAS, CORE.USERS.USERNAME, CodigoLoja__c, CORE.USER_ROLE.NAME, CORE.USERS.ACTIVE, CORE.PROFILE.NAME, CREATED_BY_NAME
- **Filtro:** UsuÃ¡rios ativos (`CORE.USERS.ACTIVE = 1`)
- **Escopo:** Tudo

### Admin Users
- **Colunas:** FULL_NAME, CORE.USERS.ALIAS, CORE.USERS.USERNAME, CORE.USERS.LAST_LOGIN, CORE.USER_ROLE.NAME, CORE.USERS.ACTIVE
- **Filtro:** Perfil igual a "System Administrator" ou "Administrador do sistema"
- **Escopo:** Tudo

### All Users
- **Colunas:** FULL_NAME, CodigoLoja__c, CORE.USERS.USERNAME, CORE.USERS.LAST_LOGIN, CORE.USER_ROLE.NAME, CORE.USERS.ACTIVE, CORE.PROFILE.NAME
- **Filtro:** Nenhum especÃ­fico
- **Escopo:** Tudo

## Layouts de Pesquisa (Search Layouts)
- **Campos adicionais em diÃ¡logos de pesquisa:** FULL_NAME, CORE.USER_ROLE.NAME, CORE.USERS.PHONE, CORE.USERS.EXTENSION, CORE.USERS.FAX, CORE.USERS.CELL, CORE.USERS.TITLE, CORE.USERS.EMAIL
- **Campos adicionais em resultados de pesquisa:** FULL_NAME, CORE.USERS.TITLE, CORE.USERS.PHONE, CORE.USERS.EMAIL

## Outras ConfiguraÃ§Ãµes
- **Habilitado Lookup aprimorado:** `true`
- **Habilitado Feed:** `true`
- **Modelo de Compartilhamento:** `Read`
- **Modelo de Compartilhamento Externo:** `Read`
- **Layout Compacto PadrÃ£o:** `User_Layout` (com os campos Name e Title)

## ConsideraÃ§Ãµes
- Este objeto Ã© altamente configurado para gerenciar usuÃ¡rios, incluindo layouts, aÃ§Ãµes override, filtros de visualizaÃ§Ã£o e configuraÃ§Ãµes de feed.
- Os campos seguem convenÃ§Ãµes claras de nomenclatura, facilitando a manutenÃ§Ã£o e compreensÃ£o.
- As regras de visualizaÃ§Ã£o e filtros ajudam a segmentar e gerenciar eficientemente os usuÃ¡rios no sistema.

# Lead

## Detalhes do Objeto
- **RÃ³tulo:** Lead
- **API Name:** `Lead`
- **DescriÃ§Ã£o:** Objeto padrÃ£o que representa potenciais clientes ou contatos interessados nos produtos ou serviÃ§os da empresa.
- **Tipo:** Objeto PadrÃ£o

## Campos

| Nome do Campo                        | RÃ³tulo                                | Tipo             | ObrigatÃ³rio |
|-------------------------------------|--------------------------------------|------------------|-------------|
| Address                             | Address                              | GeolocalizaÃ§Ã£o  | NÃ£o         |
| AnnualRevenue                       | Revenue Anual                        | Moeda          | NÃ£o         |
| CampaignId                          | Campaign                               | Lookup           | NÃ£o         |
| Company                             | Empresa                              | Texto          | NÃ£o         |
| CurrentGenerators__c                | Current Generator(s)                 | Texto          | NÃ£o         |
| DWAgenteCTI__c                      | Agente CTI                         | Texto          | NÃ£o         |
| DWAtribuicaoAutomatica__c            | AtribuiÃ§Ã£o automÃ¡tica               | Checkbox       | NÃ£o         |
| DWBaseURLGravacao__c                | Base URL gravaÃ§Ã£o                   | Texto          | NÃ£o         |
| DWCodigoMidia__c                     | CÃ³digo mÃ­dia                        | Texto          | NÃ£o         |
| DWConverterAutomaticamenteDataFutura__c | Converter automaticamente data futura | Checkbox       | NÃ£o         |
| DWCriadoViaIntegracao__c            | Criado via integraÃ§Ã£o               | Checkbox       | NÃ£o         |
| DWDataCriacaoFutura__c              | Data de criaÃ§Ã£o futura             | Data           | NÃ£o         |
| DWDataPrimeiraInteracao__c          | Data da primeira interaÃ§Ã£o          | DataHora       | NÃ£o         |
| DWDocumento__c                      | CPF/CNPJ                           | Texto          | NÃ£o         |
| DWExecutandoReatribuicaoProprietario__c | Executando reatruiÃ§Ã£o de proprietÃ¡rio | Checkbox       | NÃ£o         |
| DWGravacaoCall__c                   | GravaÃ§Ã£o Call                      | Texto          | NÃ£o         |
| DWLeadAnterior__c                   | Lead anterior                        | Lookup           | NÃ£o         |
| DWLoja__c                          | Loja                                | Lookup           | NÃ£o         |
| DWMotivoDesqualificacao__c          | Motivo da DesqualificaÃ§Ã£o           | Picklist       | NÃ£o         |
| DWNomeProprietario__c               | AtribuÃ­do                          | FÃ³rmula        | NÃ£o         |
| DWNotificacaoCTI__c                 | NotificaÃ§Ã£o CTI                     | Checkbox       | NÃ£o         |
| DWNumeroLeadAuxiliar__c             | NÃºmero do lead (auxiliar)           | AutoNumber     | NÃ£o         |
| DWPlacaAtivo__c                     | Placa                                | Lookup           | NÃ£o         |
| DWPlaca__c                         | Placa                              | Texto          | NÃ£o         |
| DWSegmento__c                       | Segmento                            | FÃ³rmula        | NÃ£o         |
| DWSubMotivoDesqualificacao__c       | Sub-Motivos da DesqualificaÃ§Ã£o     | Picklist       | NÃ£o         |
| DWURLGravacaoCompleta__c            | GravaÃ§Ã£o                            | URL            | NÃ£o         |
| DWURLOrigem__c                      | URL de Origem                      | Texto          | NÃ£o         |
| DWUTMCampanha__c                    | UTM Campanha                       | Texto          | NÃ£o         |
| DWUTMConteudo__c                    | UTM ConteÃºdo                       | Texto          | NÃ£o         |
| DWUTMMidia__c                      | UTM MÃ­dia                          | Texto          | NÃ£o         |
| DWUTMOrigem__c                      | UTM Origem                        | Texto          | NÃ£o         |
| DWUTMTermo__c                       | UTM Termo                         | Texto          | NÃ£o         |
| DWUltimaModificacaoProprietario__c  | Ãšltima modificaÃ§Ã£o proprietÃ¡rio     | DataHora       | NÃ£o         |
| DWVeiculoInteresse__c               | VeÃ­culo de interesse               | Lookup           | NÃ£o         |
| DWVeiculoUsadoTroca__c              | VeÃ­culo usado na Troca?             | Checkbox       | NÃ£o         |
| Description                         | ObservaÃ§Ãµes                         | Texto Longo    | NÃ£o         |
| DoNotCall                          | NÃ£o ligar                          | Checkbox       | NÃ£o         |
| Email                               | Email                                | Email          | NÃ£o         |
| Fax                                 | Fax                                  | Texto          | NÃ£o         |
| GenderIdentity                      | Identidade de GÃªnero                | Picklist       | NÃ£o         |
| HasOptedOutOfEmail                  | Optou por nÃ£o receber email        | Checkbox       | NÃ£o         |
| HasOptedOutOfFax                    | Optou por nÃ£o receber fax          | Checkbox       | NÃ£o         |
| Industry                            | IndÃºstria                          | Picklist       | NÃ£o         |
| Jigsaw                              | Jigsaw                              | Texto          | NÃ£o         |
| LastTransferDate                    | Data da Ãºltima transferÃªncia        | Data           | NÃ£o         |
| LeadSource                          | Fonte do Lead                      | Picklist       | NÃ£o         |
| Midia__c                           | MÃ­dia                              | Lookup           | NÃ£o         |
| MobilePhone                         | Celular                            | Texto          | NÃ£o         |
| Name                                | Nome                               | Texto          | NÃ£o         |
| NextIpId__c                        | Next IP Id                         | Texto          | NÃ£o         |
| NumberOfEmployees                   | NÃºmero de funcionÃ¡rios             | NÃºmero         | NÃ£o         |
| NumberofLocations__c               | NÃºmero de LocalizaÃ§Ãµes             | NÃºmero         | NÃ£o         |
| OwnerId                             | ProprietÃ¡rio                       | Lookup           | NÃ£o         |
| PartnerAccountId                    | Conta Parceira                     | Lookup           | NÃ£o         |
| Phone                               | Telefone                           | Texto          | NÃ£o         |
| Pronouns                            | Pronomes                           | Picklist       | NÃ£o         |
| Rating                              | AvaliaÃ§Ã£o                          | Picklist       | NÃ£o         |
| Status                              | Status                             | Picklist       | NÃ£o         |
| TempoEmAberto__c                   | Tempo em aberto                    | FÃ³rmula        | NÃ£o         |
| Title                               | Cargo                              | Texto          | NÃ£o         |
| Website                             | Website                            | URL            | NÃ£o         |

## Regras de ValidaÃ§Ã£o

| Nome da Regra                  | CondiÃ§Ã£o                                                                 | Mensagem                                              |
|------------------------------|---------------------------------------------------------------------------|--------------------------------------------------------|
| EmailOuCelularObrigatorio  | `AND(ISBLANK(MobilePhone), ISBLANK(Email))`                              | Celular ou E-mail sÃ£o obrigatÃ³rios, favor verificar. |
| NaoRetornaFase             | `AND(ISCHANGED(Status), ISPICKVAL(Status, 'NÃ£o trabalhado'), OR(ISPICKVAL(PRIORVALUE(Status), 'PerseguiÃ§Ã£o'), ISPICKVAL(PRIORVALUE(Status), 'Qualificado')))` | NÃ£o Ã© permitido retornar a fase para o status 'NÃ£o trabalhado'. |
| PrimeiroNomeEmBranco        | `ISBLANK(FirstName)`                                                    | Nome Ã© obrigatÃ³rio, favor verificar.                   |
| TamanhoMaximoNome          | `LEN(FirstName) + LEN(LastName) >= 50`                                   | MÃ¡ximo 50 Caracteres, mantenha o primeiro e Ãºltimo nome inteiro e abrevie os demais. |
| VendedorGerenteNaoPodeSerProprietario | `AND(ISCHANGED(OwnerId), OR(CONTAINS(Owner:User.Profile.Name, 'Gerente'), CONTAINS(Owner:User.Profile.Name, 'Closer')))` | NÃ£o Ã© possÃ­vel transferir leads para vendedores ou gerentes. |
| campoObseracaoMaior255     | `AND(ISCHANGED(Description), LEN(Description) > 255)`                     | A observaÃ§Ã£o nÃ£o pode ter mais que 255 caracteres.  |
| desqualificadoNaoAltera     | `AND(NOT(ISCHANGED(Status)), NOT(ISCHANGED(DWDataCriacaoFutura__c)), ISPICKVAL(Status, 'Desqualificado'))` | NÃ£o Ã© possÃ­vel editar um lead desqualificado.        |
| preencherPlaca             | `AND(DWVeiculoUsadoTroca__c = true, ISBLANK(DWPlaca__c))`                | Ã‰ necessÃ¡rio preencher a Placa ao marcar "VeÃ­culo usado na troca". |

## ConsideraÃ§Ãµes
- As regras de validaÃ§Ã£o garantem a integridade e consistÃªncia dos dados inseridos.
- Os campos seguem convenÃ§Ãµes de nomenclatura clara e padronizada.
- Os links de web disponÃ­veis facilitam aÃ§Ãµes rÃ¡pidas, como mapas, buscas e navegaÃ§Ã£o de fluxo.


# DocumentaÃ§Ã£o do Objeto: Asset

## Detalhes do Objeto
- **RÃ³tulo:** Meu Objeto
- **Nome API:** `Asset`
- **DescriÃ§Ã£o:** Objeto que representa ativos, como veÃ­culos, com diversas informaÃ§Ãµes relacionadas a eles.
- **Tipo:** Objeto Customizado

---

## Campos do Objeto

| Nome do Campo                  | RÃ³tulo                         | Tipo             | ObrigatÃ³rio |
|-------------------------------|------------------------------|------------------|--------------|
| AccountId                     | Conta                        | Lookup           | NÃ£o         |
| Address                       | EndereÃ§o                     | Long Text Area | NÃ£o         |
| AnoFabricacaoModelo__c        | Ano fabricaÃ§Ã£o/modelo        | Texto            | NÃ£o         |
| AssetLevel                    | NÃ­vel do ativo               | Texto            | NÃ£o         |
| AssetProvidedById             | Fornecido por (ID)           | Lookup           | NÃ£o         |
| AssetServicedById             | Servido por (ID)             | Lookup           | NÃ£o         |
| Codigo_loja_aux__c            | CÃ³digo loja auxiliar        | Texto (100)      | NÃ£o         |
| ConsequenceOfFailure          | ConsequÃªncia de falha        | Picklist         | NÃ£o         |
| ContactId                     | Contato                      | Lookup           | NÃ£o         |
| DWAnoFabricacao__c             | Ano de fabricaÃ§Ã£o            | Texto (4)        | NÃ£o         |
| DWAnoModeloNum__c              | Ano do modelo (numÃ©rico)      | NÃºmero           | NÃ£o         |
| DWAnoModelo__c                 | Ano do modelo                | Texto (4)        | NÃ£o         |
| DWChassi__c                   | Chassi                       | Texto (255)      | NÃ£o         |
| DWCliente__c                  | Cliente                      | Long Text Area | NÃ£o         |
| DWCodigoAtivo__c              | CÃ³digo do ativo              | Texto (50)       | NÃ£o         |
| DWComAviso__c                 | Com aviso                    | Checkbox         | NÃ£o         |
| DWComBloqueio__c              | Com bloqueio                | Checkbox         | NÃ£o         |
| DWComOcorrencia__c            | Com ocorrÃªncia               | Checkbox         | NÃ£o         |
| DWCor__c                      | Cor                          | Texto            | NÃ£o         |
| DWCustoTotalVeiculo__c        | Custo total do veÃ­culo       | Currency         | NÃ£o         |
| DWDataFim__c                  | Data fim                     | Data             | NÃ£o         |
| DWDataInicio__c               | Data inÃ­cio                  | Data             | NÃ£o         |
| DWDataValidadeGarantia__c     | Validade da garantia         | DataHora         | NÃ£o         |
| DWDescricaoOcorrencia__c      | DescriÃ§Ã£o da ocorrÃªncia      | Long Text Area | NÃ£o         |
| DWDetalhesCustoAtivo__c        | Detalhes de custo do ativo   | Lookup           | NÃ£o         |
| DWDiasEstoque__c              | Tempo de estoque             | NÃºmero           | NÃ£o         |
| DWEstoqueTipo__c              | Tipo de estoque              | Picklist         | NÃ£o         |
| DWEstoque__c                  | Estoque atual                | Texto Area       | NÃ£o         |
| DWFuturo__c                   | Futuro                       | Checkbox         | NÃ£o         |
| DWIDExternoChassiStatus__c   | ID Externo (Chassi + Status) | Texto (50)       | NÃ£o         |
| DWIdExterno__c                | ID Externo                   | Texto (50)       | NÃ£o         |
| DWLojaVeiculo__c              | Loja do veÃ­culo              | Lookup           | NÃ£o         |
| DWMarcaCompartilhamento__c    | Marca de compartilhamento   | Texto            | NÃ£o         |
| DWMarca__c                    | Marca                        | Texto            | NÃ£o         |
| DWModelo__c                   | Modelo                       | Texto            | NÃ£o         |
| DWNomeLojaVeiculo__c          | Nome da loja do veÃ­culo      | Texto            | NÃ£o         |
| DWNtiAberta__c                | NTI aberta                   | Checkbox         | NÃ£o         |
| DWObservacao__c               | ObservaÃ§Ã£o                   | Long Text Area | NÃ£o         |
| DWPago__c                     | VeÃ­culo pago                 | Checkbox         | NÃ£o         |
| DWPedido__c                   | Pedido                       | Checkbox         | NÃ£o         |
| DWPlaca__c                    | Placa                        | Texto            | NÃ£o         |
| DWPromocao__c                 | PromoÃ§Ã£o                     | Checkbox         | NÃ£o         |
| DWProposta__c                | Proposta                     | Checkbox         | NÃ£o         |
| DWQuantidadeAvisos__c          | Quantidade de avisos         | Resumo (Count)   | NÃ£o         |
| DWQuantidadeBloqueio__c        | Quantidade de bloqueio       | Resumo (Count)   | NÃ£o         |
| DWQuantidadeCustoAtivo__c      | Quantidade de custo do ativo | Resumo (Count)   | NÃ£o         |
| DWQuantidadePromocao__c        | Quantidade de promoÃ§Ã£o       | Resumo (Count)   | NÃ£o         |
| DWQuantidadeReserva__c         | Quantidade de reserva        | Resumo (Count)   | NÃ£o         |
| DWQuantidadeValorAgregado__c   | Quantidade de valor agregado | Resumo (Count)   | NÃ£o         |
| DWQuilometragem__c             | Quilometragem                | NÃºmero           | NÃ£o         |
| DWReserva__c                  | Reserva                      | Checkbox         | NÃ£o         |
| DWReservadoOportunidade__c    | Reservado na oportunidade    | Lookup           | NÃ£o         |
| DWTransito__c                 | Em trÃ¢nsito                  | Checkbox         | NÃ£o         |
| DWValorCompraVeiculo__c       | Valor de compra do veÃ­culo   | Currency         | NÃ£o         |
| DWVeiculoNovo__c              | VeÃ­culo novo                 | Checkbox         | NÃ£o         |
| DWVersao__c                   | VersÃ£o                       | Texto            | NÃ£o         |
| Description                   | DescriÃ§Ã£o                    | NÃ£o especificado | NÃ£o         |
| DigitalAssetStatus            | Status do ativo digital      | Picklist         | NÃ£o         |
| Em_proposta__c               | Em proposta                  | Checkbox         | NÃ£o         |
| ExternalIdentifier            | ID do sistema externo        | NÃ£o especificado | NÃ£o         |
| GBTipoVeiculo__c              | Tipo de veÃ­culo (baseado em estoque) | Texto | NÃ£o         |
| InstallDate                   | Data de instalaÃ§Ã£o           | Data             | NÃ£o         |
| IsCompetitorProduct           | Produto concorrente          | Checkbox         | NÃ£o         |
| IsInternal                    | Interno                     | Checkbox         | NÃ£o         |
| LocationId                    | LocalizaÃ§Ã£o                  | Lookup           | NÃ£o         |
| ManufactureDate               | Data de fabricaÃ§Ã£o           | Data             | NÃ£o         |
| Name                          | Nome do ativo                | Texto            | NÃ£o         |
| Oportunidade_proposta__c     | Oportunidade da proposta     | Lookup           | NÃ£o         |
| OwnerId                       | ProprietÃ¡rio                 | Lookup           | NÃ£o         |
| ParentId                      | Id pai                       | Lookup           | NÃ£o         |
| Price                         | PreÃ§o                        | Currency         | NÃ£o         |
| Product2Id                    | Produto relacionado          | Lookup           | NÃ£o         |
| ProductCode                   | CÃ³digo do produto            | Texto            | NÃ£o         |
| ProductDescription            | DescriÃ§Ã£o do produto         | Texto            | NÃ£o especificado | 
| ProductFamily                 | FamÃ­lia do produto           | Picklist         | NÃ£o         |
| PurchaseDate                  | Data de compra               | Data             | NÃ£o         |
| Quantity                      | Quantidade                   | NÃºmero           | NÃ£o         |
| Renavam__c                   | Renavam                      | Texto (13)       | NÃ£o         |
| RootAssetId                   | ID raiz do ativo             | Lookup           | NÃ£o         |
| SerialNumber                  | NÃºmero de sÃ©rie              | Texto            | NÃ£o         |
| Status                        | Status do ativo              | Picklist         | NÃ£o         |
| StatusReason                  | Motivo do status             | Picklist         | NÃ£o         |
| StockKeepingUnit              | Unidade de estoque           | Texto            | NÃ£o         |
| UsageEndDate                  | Data de uso final            | Data             | NÃ£o         |
| Uuid                          | UUID do ativo                | Texto            | NÃ£o         |
| ValorAtivo__c                | Valor do ativo               | Currency         | NÃ£o         |

---

## Regras de ValidaÃ§Ã£o

### 1. FormataÃ§Ã£o do Renavam
- **Nome da Regra:** `Formatacao_Renavam`
- **Ativa:** Sim
- **CondiÃ§Ã£o:** 
  ```plaintext
  AND(
    NOT(ISBLANK(Renavam__c)),
    OR(
      NOT(REGEX(Renavam__c, "^[0-9]*$")),
      LEN(Renavam__c) < 9,
      LEN(Renavam__c) > 13
    )
  )
  ```
- **Mensagem de Erro:** "O campo Renavam deve ser preenchido apenas com valores numÃ©ricos tendo entre 9 e 13 caracteres."
- **Campo:** `Renavam__c`

---

## ConsideraÃ§Ãµes Gerais
- Os nomes dos campos seguem convenÃ§Ãµes claras e padronizadas.
- As regras de validaÃ§Ã£o garantem a integridade dos dados, especialmente para campos crÃ­ticos como o Renavam.
- O objeto possui layouts de visualizaÃ§Ã£o e filtros especÃ­ficos para facilitar a gestÃ£o e visualizaÃ§Ã£o dos ativos.

---

*Esta documentaÃ§Ã£o visa fornecer uma visÃ£o tÃ©cnica detalhada do objeto Asset, facilitando sua compreensÃ£o e manutenÃ§Ã£o.*

# Objeto: Opportunity

## Detalhes do Objeto
- **RÃ³tulo:** Meu Objeto
- **API Name:** Opportunity
- **DescriÃ§Ã£o:** Este objeto representa oportunidades de negÃ³cio, incluindo detalhes como valor, fase, cliente, produtos, entre outros. Ã‰ utilizado para gerenciar o pipeline de vendas e acompanhar o progresso de negociaÃ§Ãµes.
- **Tipo:** Objeto Customizado

## Campos

| Nome do Campo                        | RÃ³tulo                                | Tipo             | ObrigatÃ³rio |
|-------------------------------------|--------------------------------------|------------------|-------------|
| AccountId                          | Conta                                | Lookup           | NÃ£o         |
| Amount                             | Valor                                | Currency         | NÃ£o         |
| Atribuido__c                      | AtribuÃ­do                           | Texto            | NÃ£o         |
| Budget_Confirmed__c             | Budget Confirmed                   | Checkbox         | NÃ£o         |
| CampaignId                        | Campanha                            | Lookup           | NÃ£o         |
| Chassi_helper_termo__c          | Chassi helper termo               | TextoÃrea       | NÃ£o         |
| CloseDate                         | Data de Fechamento                | Data             | NÃ£o         |
| ComisssaoVendaDireta__c        | % ComissÃ£o Venda Direta        | Percentual      | NÃ£o         |
| ContractId                        | Contrato                            | Lookup           | NÃ£o         |
| CurrentGenerators__c            | Gerador(es) Atual             | Texto            | NÃ£o         |
| DValorOpcionaisPagosPeloCliente__c | ServiÃ§os adicionais Ã  parte | Soma de OpportunityLineItem.TotalPrice | NÃ£o |
| DWAtivos__c                      | Ativos                              | Soma de OpportunityLineItem.OpportunityId | NÃ£o |
| DWAtribuicaoAutomatica__c       | AtribuiÃ§Ã£o automÃ¡tica          | Checkbox         | NÃ£o         |
| DWCodigoLojaAuxiliar__c        | CÃ³digo da loja (auxiliar)     | Texto            | NÃ£o         |
| DWCodigoLoja__c                  | CÃ³digo da loja                     | Texto            | NÃ£o         |
| DWConta__c                       | Conta                              | Texto            | NÃ£o         |
| DWCortesiasNegociadas__c        | Cortesias negociadas           | Soma de OpportunityLineItem.UnitPrice | NÃ£o |
| DWDataCriacaoFutura__c          | Data criaÃ§Ã£o futura             | Data             | NÃ£o         |
| DWDocumento__c                   | Documento                         | TextoÃrea       | NÃ£o         |
| DWFaseRascunho__c                | Fase de rascunho               | Texto            | NÃ£o         |
| DWFluig__c                       | NÃºmero do Processo Fluig     | Texto            | NÃ£o         |
| DWFornecedoresNaoPreenchidos__c | Fornecedores nÃ£o preenchidos | Checkbox         | NÃ£o         |
| DWFornecedoresProdutosValidosForm__c | Fornecedores e Produtos vÃ¡lidos (Form) | Checkbox | NÃ£o |
| DWGerenteLojaGerenteCloserId__c | Gerente loja (gerente closer) | Lookup (User) | NÃ£o |
| DWIdNotaFiscalAtual__c          | Id nota fiscal atual             | Texto            | NÃ£o         |
| DWLoja__c                       | Loja de faturamento             | Lookup (Account) | NÃ£o         |
| DWMensagemIntegracao__c          | Mensagem de integraÃ§Ã£o        | LongTextArea    | NÃ£o         |
| DWModelo__c                     | Modelo                            | Lookup (Product2) | NÃ£o       |
| DWNumeroAtendimento__c          | NÃºmero do atendimento          | Texto            | NÃ£o         |
| DWNumeroOppAuxiliar__c        | NÃºmero da opp (auxiliar)     | AutoNumber       | NÃ£o         |
| DWNumeroPedido__c               | NÃºmero do pedido                | Texto            | NÃ£o         |
| DWOSFechada__c                  | O.S fechada                     | Checkbox         | NÃ£o         |
| DWOrigemEstoquePesquisa__c     | Loja de origem do estoque   | Lookup (Account) | NÃ£o         |
| DWProdutoValorZerado__c        | Produto com valor zerado     | Checkbox         | NÃ£o         |
| DWProposta__c                   | NÃºmero da proposta             | Texto            | NÃ£o         |
| DWReserva__c                    | NÃºmero da reserva               | Texto            | NÃ£o         |
| DWSDR__c                        | SDR                                | Lookup (User) | NÃ£o         |
| DWSplitMarca__c                | Split por marca                | Checkbox         | NÃ£o         |
| DWTermoGerado__c               | Termo gerado                     | Checkbox         | NÃ£o         |
| DWTipoLoja__c                  | Tipo de loja                     | Picklist         | NÃ£o         |
| DWTipoVeiculo__c               | Tipo VeÃ­culo                     | Texto            | NÃ£o         |
| DWUTMCampanha__c               | UTM Campanha                   | TextoÃrea       | NÃ£o         |
| DWUltimaModificacaoProprietario__c | Ãšltima modificaÃ§Ã£o proprietÃ¡rio | DataHora | NÃ£o |
| DWUrlFluig__c                  | URL do Fluig                     | Texto            | NÃ£o         |
| DWValorAtivo__c                | PreÃ§o                              | Soma de OpportunityLineItem.TotalPrice | NÃ£o |
| DWValorCondicaoPagamento__c   | Valor da condiÃ§Ã£o de pagamento | Soma de CondicaoPagamento__c.Valor__c | NÃ£o |
| DWValorDiferenca__c            | Valor faltante                  | Currency         | NÃ£o         |
| DWValorOpcionaisPagosPelaMove__c | Cortesia                     | Soma de OpportunityLineItem.DWSubtotalResumo__c | NÃ£o |
| DWValorTotalSemDescontos__c   | Valor total da proposta        | Soma de OpportunityLineItem.DWTotalDesconto__c | NÃ£o |
| DWValorVeiculo__c              | Valor do VeÃ­culo                | Currency         | NÃ£o         |
| DeliveryInstallationStatus__c | Status de entrega/instalaÃ§Ã£o | Picklist         | NÃ£o         |
| Description                     | ObservaÃ§Ãµes                     | LongTextArea    | NÃ£o         |
| Discovery_Completed__c        | Discovery concluÃ­do           | Checkbox         | NÃ£o         |
| Estoque__c                     | Estoque                          | Lookup (Asset) | NÃ£o         |
| ExpectedRevenue                | Receita esperada               | -               | -           |
| GBAnaliseGerente__c            | AnÃ¡lise do gerente             | Checkbox         | NÃ£o         |
| GBCodigoFluig__c                | CÃ³digo Fluig                     | Texto            | NÃ£o         |
| GBCodigoReservaDMS__c           | CÃ³digo reserva DMS             | Texto            | NÃ£o         |
| GBDataIntegracaoFluig__c        | Data de integraÃ§Ã£o Fluig     | Data             | NÃ£o         |
| GBDataIntegracaoMinuta__c       | Data de integraÃ§Ã£o Minuta  | Data             | NÃ£o         |
| GBObservacaoMinuta__c           | ObservaÃ§Ã£o minuta             | LongTextArea    | NÃ£o         |
| GBOportunidadeTipoNovo__c      | Oportunidade tipo novo     | Checkbox         | NÃ£o         |
| GBOrigemEstoque__c              | Loja origem estoque          | Texto            | NÃ£o         |
| GBPlaca__c                     | Placa                            | TextoÃrea       | NÃ£o         |
| Helper_lista_opcoes__c          | Helper Lista de opÃ§Ãµes       | Picklist         | NÃ£o         |
| Helper_veiculo_interesse__c    | Helper veÃ­culo interesse     | Checkbox         | NÃ£o         |
| IqScore                         | Iq Score                        | -               | -           |
| IsPrivate                       | Privado                         | -               | -           |
| LeadSource                      | Fonte do Lead                  | Picklist         | NÃ£o         |
| Loss_Reason__c                  | Motivo de perda               | Picklist         | NÃ£o         |
| MainCompetitors__c              | Concorrentes principais       | Texto            | NÃ£o         |
| Marca_helper_termo__c           | Marca helper termo             | TextoÃrea       | NÃ£o         |
| Midia__c                        | MÃ­dia                          | Lookup (Midia__c) | NÃ£o       |
| Modelo_helper_termo__c          | Modelo helper termo            | TextoÃrea       | NÃ£o         |
| MotivoDesqualificacao__c       | Motivo da desqualificaÃ§Ã£o  | Picklist         | NÃ£o         |
| Name                            | Nome                            | Texto            | Sim         |
| NextStep                        | PrÃ³ximo passo                  | LongTextArea    | NÃ£o         |
| NovoProprietario__c             | Novo proprietÃ¡rio               | Lookup (User) | NÃ£o         |
| Numero_Proposta_Fandi__c       | NÃºmero Proposta Fandi        | Texto            | NÃ£o         |
| OportunidadeTipoNovo__c        | Oportunidade tipo novo     | Checkbox         | NÃ£o         |
| Oportunidade_relacionada__c    | Oportunidade relacionada   | Lookup           | NÃ£o         |
| OrderNumber__c                  | NÃºmero do pedido               | Texto            | NÃ£o         |
| OwnerId                         | ProprietÃ¡rio                   | Lookup           | NÃ£o         |
| PartnerAccountId                | Conta parceira                | Lookup           | NÃ£o         |
| Placa_helper_termo__c          | Placa helper termo             | TextoÃrea       | NÃ£o         |
| Pricebook2Id                     | Pricebook                        | Lookup           | NÃ£o         |
| Probability                     | Probabilidade                   | Percentual      | NÃ£o         |
| ROI_Analysis_Completed__c     | AnÃ¡lise ROI concluÃ­da     | Checkbox         | NÃ£o         |
| Scoring__c                     | Scoring                         | Picklist         | NÃ£o         |
| StageName                        | Fase                            | Picklist         | NÃ£o         |
| StatusFluig__c                  | Status Fluig                   | Picklist         | NÃ£o         |
| StatusMinuta__c                 | Status Minuta                  | Picklist         | NÃ£o         |
| SubMotivosDesqualificacao__c | Sub-motivos desqualificaÃ§Ã£o | Picklist         | NÃ£o         |
| SyncedQuoteId                   | Quote sincronizado             | Lookup           | NÃ£o         |
| TotalOpportunityQuantity        | Quantidade total oportunidade | -               | -           |
| TrackingNumber__c               | Tracking Number                | Texto            | NÃ£o         |
| Type                            | Tipo de venda                  | Picklist         | NÃ£o         |
| Veiculo_vendido__c             | VeÃ­culo vendido?               | Checkbox         | NÃ£o         |

## Regras de ValidaÃ§Ã£o

### ContaNÃ£oPodeFicarEmBranco
- **CondiÃ§Ã£o:** `AND(NOT(ISNEW()), ISCHANGED(AccountId), ISBLANK(AccountId))`
- **Mensagem:** *"NÃ£o Ã© permitido deixar a conta em branco."*

### DWObrigarPreenchimentoModelo
- **CondiÃ§Ã£o:** `AND(ISPICKVAL(StageName, 'Vendido'), NOT(ISPICKVAL(Type, 'Pedido de FÃ¡brica/Virada de nota')), ISCHANGED(DWModelo__c))`
- **Mensagem:** *"Na fase Vendido, se o tipo de venda for 'Pedido FÃ¡brica/Virada de Nota' nÃ£o Ã© possÃ­vel editar o campo Modelo."*

### DWV1_FaseFluigSemCodigoFluig
- **CondiÃ§Ã£o:** `AND(ISCHANGED(StageName), ISPICKVAL(StageName, 'Fluig'), ISBLANK(DWFluig__c))`
- **Mensagem:** *"Para avanÃ§ar para a fase Fluig o campo NÃºmero do Processo Fluig deve ser preenchido."*

### NaoAlteraContaSeNaoIntegrada
- **CondiÃ§Ã£o:** `AND(NOT(ISNEW()), ISCHANGED(AccountId), TEXT(Account.DWStatusIntegracao__c) <> 'Integrado com sucesso')`
- **Mensagem:** *"Conta com inconsistÃªncias, por favor revise o cadastro do Cliente."*

### NaoAlterarOportunidadeFaturada
- **CondiÃ§Ã£o:** `AND(NOT(ISCHANGED(DWDataCriacaoFutura__c)), NOT(ISCHANGED(DWUltimaModificacaoProprietario__c)), NOT(ISCHANGED(StatusFluig__c)), $Profile.Name != 'Salesforce API Only System Integrations', OR(ISPICKVAL(PRIORVALUE(StageName), 'Faturado'), ISPICKVAL(PRIORVALUE(StageName), 'Perdido')))`
- **Mensagem:** *"NÃ£o Ã© possÃ­vel atualizar oportunidades que estÃ£o na fase 'Perdido' ou 'Faturado'."*

### TipoVendaEstoqueNaoAlteraModelo
- **CondiÃ§Ã£o:** `AND(TEXT(Type) = 'VeÃ­culo de Estoque', ISCHANGED(DWModelo__c), NOT(ISBLANK(DWModelo__c)))`
- **Mensagem:** *"A seleÃ§Ã£o de modelo nÃ£o estÃ¡ disponÃ­vel para vendas de estoque do Grupo Barigui. Para virada de nota ou pedido de fÃ¡brica, retorne Ã  fase anterior e selecione o tipo de estoque adequado."*

### alterarTipo
- **CondiÃ§Ã£o:** `AND(ISCHANGED(Type), OR(ISPICKVAL(StageName, 'Vendido'), ISPICKVAL(StageName, 'Minuta'), ISPICKVAL(StageName, 'Fluig'), ISPICKVAL(StageName, 'Faturado'), ISPICKVAL(StageName, 'Perdido')))`
- **Mensagem:** *"NÃ£o Ã© possÃ­vel alterar o tipo de venda da oportunidade a partir da fase Vendido."*

### avancoFaseSemTipoVendaPreenchido
- **CondiÃ§Ã£o:** `AND(ISCHANGED(StageName), ISBLANK(TEXT(Type)), OR(ISPICKVAL(StageName, 'Vendido'), ISPICKVAL(StageName, 'Minuta'), ISPICKVAL(StageName, 'Fluig'), ISPICKVAL(StageName, 'Faturado')))`
- **Mensagem:** *"NÃ£o Ã© possÃ­vel alterar a fase enquanto o campo 'Modalidade de Venda' estiver em branco. Ao preencher, a fase serÃ¡ atualizada automaticamente."*

### estoqueContaIntegrada
- **CondiÃ§Ã£o:** `AND(ISCHANGED(Estoque__c), NOT(ISBLANK(Estoque__c)), TEXT(Account.DWStatusIntegracao__c) <> 'Integrado com sucesso', NOT($Setup.DWByPassTermoPreContrato__c.DWDesativarRegraValidacao__c))`
- **Mensagem:** *"Para selecionar o estoque, o cadastro da conta precisa estar completo e integrado no Dealernet Workflow."*

### naoAvancaFluigManualmente
- **CondiÃ§Ã£o:** `AND(ISCHANGED(StageName), ISPICKVAL(StageName, 'Faturado'), $Profile.Name != 'Salesforce API Only System Integrations', $Profile.Name != 'Administrador do sistema')`
- **Mensagem:** *"NÃ£o Ã© possÃ­vel avanÃ§ar fase manualmente. Essa fase serÃ¡ avanÃ§ada automaticamente pela emissÃ£o da Nota Fiscal."*

### retornarNaoIniciado
- **CondiÃ§Ã£o:** `AND(ISCHANGED(StageName), ISPICKVAL(StageName, 'NÃ£o iniciado'))`
- **Mensagem:** *"NÃ£o Ã© possÃ­vel retornar para fase 'NÃ£o iniciado'."*

## ConsideraÃ§Ãµes
- As regras de validaÃ§Ã£o garantem a integridade e consistÃªncia dos dados inseridos no objeto Opportunity.
- As validaÃ§Ãµes especÃ­ficas evitam alteraÃ§Ãµes indevidas em fases crÃ­ticas, como faturamento ou fechamento de negÃ³cios.
- Os campos seguem convenÃ§Ãµes de nomenclatura clara, facilitando sua identificaÃ§Ã£o e uso.


# Objeto: Termo__c

## Detalhes do Objeto
- **RÃ³tulo:** Termo
- **API Name:** `Termo__c`
- **DescriÃ§Ã£o:** Armazena informaÃ§Ãµes relacionadas a termos de pagamento, declaraÃ§Ãµes, prÃ©-contratos, entregas a terceiros, testes de drive, entre outros, utilizados em processos de vendas e contratos de veÃ­culos e serviÃ§os.
- **Tipo:** Objeto Customizado

---

## Campos

| Nome do Campo                                | RÃ³tulo                                              | Tipo             | ObrigatÃ³rio |
|----------------------------------------------|-----------------------------------------------------|------------------|-------------|
| Nome__c                                    | Nome                                                | Texto            | Sim         |
| Valor__c                                   | Valor                                               | NÃºmero           | NÃ£o         |
| Ano_fabricacao_veiculo_novo__c             | Ano fabricaÃ§Ã£o do veÃ­culo novo                      | Texto (4)        | NÃ£o         |
| Ano_modelo_veiculo_novo__c                  | Ano modelo do veÃ­culo novo                          | Texto (4)        | NÃ£o         |
| Boleto_bancario__c                         | Boleto BancÃ¡rio                                    | Checkbox         | NÃ£o         |
| CNH__c                                    | CNH                                                 | Texto (10)       | NÃ£o         |
| CNPJ_empresa_pagadora__c                   | CNPJ da Empresa Pagadora                          | Texto (18)       | NÃ£o         |
| CNPJ_loja_move__c                          | CNPJ da Loja Move                                | Texto            | NÃ£o         |
| CPF_closer__c                              | CPF do Closer                                    | Texto (10)       | NÃ£o         |
| CPF_comprador__c                          | CPF do Comprador                                | Texto            | NÃ£o         |
| CPF_pagador__c                            | CPF do Pagador                                  | Texto (14)       | NÃ£o         |
| CPF_representante_legal_comprador_PJ__c | CPF Representante Legal Comprador PJ            | Texto (14)       | NÃ£o         |
| CPF_socio_administrador__c               | CPF do SÃ³cio/Administrador                      | Texto (14)       | NÃ£o         |
| CPF_terceiro__c                          | CPF do Terceiro                                | Texto (14)       | NÃ£o         |
| Cartao_credito__c                        | CartÃ£o de CrÃ©dito                              | Checkbox         | NÃ£o         |
| Cartao_debito__c                         | CartÃ£o de DÃ©bito                               | Checkbox         | NÃ£o         |
| Chassi__c                              | Chassi                                          | Texto (17)       | NÃ£o         |
| Chassi_indisponivel__c                | Chassi veÃ­culo novo                            | Texto            | NÃ£o         |
| Chassi_veiculo_novo__c                  | Chassi                                          | Texto (17)       | NÃ£o         |
| Closer__c                              | Closer (UsuÃ¡rio responsÃ¡vel)                     | Lookup (User)    | NÃ£o         |
| Cor_veiculo_novo__c                     | Cor do veÃ­culo novo                              | Texto            | NÃ£o         |
| DOC__c                                | DOC                                              | Checkbox         | NÃ£o         |
| DWAposCriacao__c                       | ApÃ³s criaÃ§Ã£o                                    | Checkbox         | NÃ£o         |
| DWCartaBonus__c                        | Carta bÃ´nus                                      | Checkbox         | NÃ£o         |
| DWChequeAVista__c                     | Cheque Ã  Vista?                                | Checkbox         | NÃ£o         |
| DWChequePrazo__c                       | Cheque Ã  prazo?                                | Checkbox         | NÃ£o         |
| DWConsorcioAlienacao__c               | ConsÃ³rcio com alienaÃ§Ã£o                        | Checkbox         | NÃ£o         |
| DWConsorcioQuitado__c                 | ConsÃ³rcio quitado                              | Checkbox         | NÃ£o         |
| DWContato__c                         | Contato assinatura                              | Lookup (Contact) | NÃ£o         |
| DWCriadoComponente__c                | Criado por componente                          | Checkbox         | NÃ£o         |
| DWCriadoViaFlow__c                   | Criado via flow                                | Checkbox         | NÃ£o         |
| DWDesconto__c                       | Desconto                                       | Checkbox         | NÃ£o         |
| DWFinanceira__c                     | Financeira                                     | Checkbox         | NÃ£o         |
| DWFinanciamentoAgencia__c           | Financiamento direto agÃªncia                   | Checkbox         | NÃ£o         |
| DWInformativo__c                   | Informativo (texto longo)                        | LongTextArea     | NÃ£o         |
| DWLeasing__c                       | Leasing                                         | Checkbox         | NÃ£o         |
| DWMarcaVeiculoNovo__c             | Marca do veÃ­culo novo                            | Texto            | NÃ£o         |
| DWMetodoPagamento__c             | MÃ©todo de pagamento                              | Picklist         | NÃ£o         |
| DWObservacao__c                  | ObservaÃ§Ã£o                                       | LongTextArea     | NÃ£o         |
| DWPagador__c                     | Pagador                                          | Lookup (Account) | NÃ£o         |
| DWParcelasCartaoCredito__c        | Parcelas CartÃ£o CrÃ©dito                          | NÃºmero           | NÃ£o         |
| DWParcelasCheque__c               | Parcelas Cheque                                 | NÃºmero           | NÃ£o         |
| DWParcelasFinanceira__c           | Parcelas financeira                              | NÃºmero           | NÃ£o         |
| DWParcelasLeasing__c              | Parcelas leasing                                | NÃºmero           | NÃ£o         |
| DWPlaca__c                        | Placa                                           | Texto (10)       | NÃ£o         |
| DWStatusAssinatura__c             | Status assinatura                                | Picklist         | NÃ£o         |
| DWSubGarantia__c                  | Sub. garantia                                   | Checkbox         | NÃ£o         |
| DWSubSeguro__c                   | Sub. Seguro                                     | Checkbox         | NÃ£o         |
| DWValorCartaBonus__c             | Valor carta bÃ´nus                                | Currency         | NÃ£o         |
| DWValorChequeAVista__c           | Valor cheque Ã  vista                            | Currency         | NÃ£o         |
| DWValorChequePrazo__c             | Valor cheque Ã  prazo                            | Currency         | NÃ£o         |
| DWValorConsorcioAlienacao__c     | Valor consÃ³rcio com alienaÃ§Ã£o                   | Currency         | NÃ£o         |
| DWValorConsorcioQuitado__c       | Valor consÃ³rcio quitado                         | Currency         | NÃ£o         |
| DWValorDesconto__c                | Valor de desconto                              | Currency         | NÃ£o         |
| DWValorFinanceira__c              | Valor financeira                                | Currency         | NÃ£o         |
| DWValorFinanciadoFinanceira__c    | Valor financiado financeira                     | Currency         | NÃ£o         |
| DWValorFinanciadoLeasing__c       | Valor financiado leasing                        | Currency         | NÃ£o         |
| DWValorFinanciamentoAgencia__c    | Valor financiamento direto agÃªncia              | Currency         | NÃ£o         |
| DWValorFuturoFinanceira__c        | Valor futuro financeira                         | Currency         | NÃ£o         |
| DWValorFuturoLeasing__c           | Valor futuro leasing                            | Currency         | NÃ£o         |
| DWValorLeasing__c                 | Valor leasing                                   | Currency         | NÃ£o         |
| DWValorParcelaFinanceira__c       | Valor parcela financeira                         | Currency         | NÃ£o         |
| DWValorParcelaLeasing__c          | Valor parcela leasing                            | Currency         | NÃ£o         |
| DWValorSubGarantia__c             | Valor sub garantia                              | Currency         | NÃ£o         |
| DWValorSubSeguro__c               | Valor sub seguro                                | Currency         | NÃ£o         |
| DWValorTotalPagamentos__c         | Valor total (formula)                            | Currency         | NÃ£o         |
| DWVeiculoUsado__c                  | VeÃ­culo usado                                   | Checkbox         | NÃ£o         |
| DataHoraFimTesteDrive__c          | Data hora fim teste drive                        | DateTime         | NÃ£o         |
| DataHoraInicioTesteDrive__c       | Data hora inÃ­cio teste drive                     | DateTime         | NÃ£o         |
| DataTestDrive__c                   | Data do test-drive                              | Date             | NÃ£o         |
| Data_Entrega_Veiculo__c            | Data de entrega do veÃ­culo                      | Date             | NÃ£o         |
| Data_criacao__c                     | Data de criaÃ§Ã£o (automaticamente hoje)         | Date             | NÃ£o         |
| DepositoEspecie__c                  | DepÃ³sito EspÃ©cie                                | Checkbox         | NÃ£o         |
| DinheiroEspecie__c                  | Dinheiro em EspÃ©cie (Loja)                       | Checkbox         | NÃ£o         |
| EmailTerceiro__c                     | E-mail do Terceiro                              | Texto (255)      | NÃ£o         |
| Email__c                          | E-mail (via fÃ³rmula)                              | Texto            | NÃ£o         |
| Endereco__c                       | EndereÃ§o do comprador (fÃ³rmula)                   | Texto            | NÃ£o         |
| Horario_retorno__c                | HorÃ¡rio de retorno                              | Time             | NÃ£o         |
| Horario_saida__c                  | HorÃ¡rio de saÃ­da                                | Time             | NÃ£o         |
| Loja__c                          | Loja (Lookup)                                    | Lookup (Account) | NÃ£o         |
| Marca_veiculo__c                  | Marca do VeÃ­culo (fÃ³rmula)                        | Texto            | NÃ£o         |
| Modelo_Veiculo_Test_Drive__c     | Modelo do VeÃ­culo Test Drive                     | Texto            | NÃ£o         |
| Modelo_veiculo__c                | Modelo (fÃ³rmula)                                | Texto            | NÃ£o         |
| Modelo_veiculo_novo__c           | Modelo do veÃ­culo novo                            | Texto            | NÃ£o         |
| Nome_conta__c                     | Nome da Conta                                   | Lookup (Account) | Sim         |
| Nome_empresa_pagadora__c          | Nome da Empresa Pagadora                        | Texto            | NÃ£o         |
| Nome_pagador__c                   | Nome do Pagador                                | Texto            | NÃ£o         |
| Nome_representante_legal_comprador_pj__c | Nome Representante Legal Comprador PJ | Texto            | NÃ£o         |
| Nome_socio_administrador__c       | Nome do SÃ³cio/Administrador                     | Texto            | NÃ£o         |
| Nome_terceiro__c                  | Nome do Terceiro                                | Texto            | NÃ£o         |
| Oportunidade__c                   | Oportunidade (Lookup)                            | Lookup (Opportunity) | NÃ£o     |
| PIX__c                            | PIX (Checkbox)                                   | Checkbox         | NÃ£o         |
| Pedido__c                         | Pedido (Lookup)                                  | Lookup (Order)   | NÃ£o         |
| Placa__c                          | Placa (fÃ³rmula)                                   | Texto            | NÃ£o         |
| Placa_test_drive__c               | Placa do Test Drive                              | Texto            | NÃ£o         |
| Possui_chassi__c                  | Possui chassi? (picklist)                         | Picklist         | NÃ£o         |
| RG_closer__c                      | RG do Closer (fÃ³rmula)                             | Texto            | NÃ£o         |
| RG_comprador__c                   | RG do Comprador (fÃ³rmula)                          | Texto            | NÃ£o         |
| RG_pagador__c                     | RG do Pagador                                    | Texto (12)       | NÃ£o         |
| RG_representante_legal_comprador_PJ__c | RG Representante Legal Comprador PJ | Texto (12)       | NÃ£o         |
| RG_socio_Administrador__c        | RG do SÃ³cio/Administrador                        | Texto (12)       | NÃ£o         |
| RG_terceiro__c                     | RG do Terceiro                                   | Texto (12)       | NÃ£o         |
| Status_Integracao__c             | Status IntegraÃ§Ã£o (picklist)                        | Picklist         | NÃ£o         |
| Status__c                        | Status (picklist)                                   | Picklist         | NÃ£o         |
| TED__c                          | TED (Checkbox)                                      | Checkbox         | NÃ£o         |
| Terceiro__c                     | Terceiro (Lookup)                                   | Lookup (Account) | NÃ£o         |
| Tipo_pagador__c                 | Tipo de Pagador (picklist)                            | Picklist         | NÃ£o         |
| Tipo_pessoa__c                  | Tipo pessoa (fÃ³rmula)                                | Texto            | NÃ£o         |
| TransferenciaBancaria__c       | TransferÃªncia BancÃ¡ria/Pix (Checkbox)                | Checkbox         | NÃ£o         |
| ValorDepositoEspecie__c         | Valor DepÃ³sito EspÃ©cie                            | Currency         | NÃ£o         |
| ValorDinheiroEspecie__c          | Valor Dinheiro em EspÃ©cie (Loja)                     | Currency         | NÃ£o         |
| ValorTransferanciaBancaria__c   | Valor TransferÃªncia BancÃ¡ria/Pix                     | Currency         | NÃ£o         |
| Valor_DOC__c                    | Valor DOC                                           | Currency         | NÃ£o         |
| Valor_PIX__c                    | Valor PIX                                           | Currency         | NÃ£o         |
| Valor_TED__c                     | Valor TED                                           | Currency         | NÃ£o         |
| Valor__c                        | Valor (total)                                       | Currency         | NÃ£o         |
| Valor_boleto_bancario__c        | Valor boleto bancÃ¡rio                              | Currency         | NÃ£o         |
| Valor_cartao_credito__c          | Valor cartÃ£o de crÃ©dito                            | Currency         | NÃ£o         |
| Valor_cartao_debito__c           | Valor cartÃ£o de dÃ©bito                              | Currency         | NÃ£o         |
| Valor_total_veiculo_novo__c      | Valor total veÃ­culo novo                            | Currency         | NÃ£o         |
| Valor_veiculo_usado__c            | Valor veÃ­culo usado                                | Currency         | NÃ£o         |
| Vinculo_familiar_societario__c  | VÃ­nculo familiar ou societÃ¡rio (picklist)          | Picklist         | NÃ£o         |
| DataHoraFimTesteDrive__c        | Data hora fim teste drive                          | DateTime         | NÃ£o         |
| DataHoraInicioTesteDrive__c     | Data hora inÃ­cio teste drive                       | DateTime         | NÃ£o         |
| DataTestDrive__c                 | Data do test-drive                                | Date             | NÃ£o         |
| Data_Entrega_Veiculo__c          | Data de entrega do veÃ­culo                        | Date             | NÃ£o         |
| Data_criacao__c                   | Data de criaÃ§Ã£o (automaticamente hoje)           | Date             | NÃ£o         |
| DepositoEspecie__c                | DepÃ³sito EspÃ©cie                                 | Checkbox         | NÃ£o         |
| DinheiroEspecie__c                | Dinheiro em EspÃ©cie (Loja)                         | Checkbox         | NÃ£o         |
| EmailTerceiro__c                   | E-mail do Terceiro                                | Texto (255)      | NÃ£o         |

---

## Regras de ValidaÃ§Ã£o

### BloqueiaCriarDeclaracaoPagamentoTerceiro
- **CondiÃ§Ã£o:**  
  `AND( ISNEW(), RecordType.DeveloperName = 'Termo_declaracao_pagamento_terceiros', DWCriadoComponente__c = false )`
- **Mensagem de Erro:**  
  *"Utilize a aba pagamentos para criaÃ§Ã£o do Termo - DeclaraÃ§Ã£o de Pagamento de Terceiros"*

### Inserir_dados_representante_legal
- **CondiÃ§Ã£o:**  
  ```
  AND(
    ISPICKVAL(PRIORVALUE(Status__c), 'Rascunho'),
    RecordType.DeveloperName  ==  'Declaracao_pagamento_terceiros',
    Nome_conta__r.RecordType.DeveloperName == 'DWPessoaJuridica',
    OR(
      ISPICKVAL(Status__c, 'Emitido')
    ),
    OR(
      ISBLANK(CPF_representante_legal_comprador_PJ__c),
      ISBLANK(Nome_representante_legal_comprador_pj__c),
      ISBLANK(RG_representante_legal_comprador_PJ__c)
    )
  )
  ```
- **Mensagem de Erro:**  
  *"Ã‰ necessÃ¡rio preencher os dados do representante legal nos campos Nome Representante Legal Comprador PJ, CPF Representante Legal Comprador PJ e RG Representante Legal Comprador PJ."*

### Pelo_menos_um_formato_pagamento
- **CondiÃ§Ã£o:**  
  ```
  AND(
    OR(
      RecordType.DeveloperName = 'Termo_declaracao_pagamento_terceiros'
    ),
    ISPICKVAL(DWMetodoPagamento__c,'')
  )
  ```
- **Mensagem de Erro:**  
  *"Para criar este termo Ã© necessÃ¡rio selecionar pelo menos uma forma de pagamento."*

### ValidaFaseGeracaoTermoPreContrato
- **CondiÃ§Ã£o:**  
  ```
  AND(
    ISNEW(),
    RecordType.DeveloperName = 'Termo_Pre_contrato',
    OR(
      TEXT(Oportunidade__r.StageName) = 'AprovaÃ§Ã£o gerencial',
      TEXT(Oportunidade__r.StageName) = 'Aguardando cliente',
      TEXT(Oportunidade__r.StageName) = 'Backoffice',
      TEXT(Oportunidade__r.StageName) = 'Fechado Ganho',
      TEXT(Oportunidade__r.StageName) = 'Fechado Perdido'
    )
  )
  ```
- **Mensagem de Erro:**  
  *"NÃ£o Ã© possÃ­vel gerar um novo termo de prÃ©-contrato apÃ³s a fase aprovaÃ§Ã£o gerencial."*

---

## ConsideraÃ§Ãµes
- As regras de validaÃ§Ã£o garantem a integridade e o fluxo correto de criaÃ§Ã£o e ediÃ§Ã£o dos registros.
- Os campos seguem convenÃ§Ãµes de nomenclatura clara e padronizada.
- Os objetos possuem diferentes tipos de relacionamentos, incluindo Lookup e Master-Detail, facilitando a modelagem de dados relacionados.
- Os objetos possuem diferentes record types, permitindo variaÃ§Ãµes de cadastro conforme o tipo de termo ou processo.

---

*Este documento fornece uma visÃ£o tÃ©cnica detalhada do objeto `Termo__c`, suas configuraÃ§Ãµes, campos e regras de validaÃ§Ã£o para facilitar sua compreensÃ£o e uso na plataforma Salesforce.*

# DocumentaÃ§Ã£o do Objeto: Account

## Detalhes do Objeto
- **RÃ³tulo:** Meu Objeto
- **API Name:** `Account`
- **DescriÃ§Ã£o:** Objeto padrÃ£o do Salesforce que representa uma conta, podendo ser uma empresa, organizaÃ§Ã£o ou indivÃ­duo.
- **Tipo:** Objeto PadrÃ£o

## Campos

| Nome do Campo                | RÃ³tulo                        | Tipo                     | ObrigatÃ³rio | ObservaÃ§Ãµes                                                                 |
|------------------------------|------------------------------|--------------------------|--------------|----------------------------------------------------------------------------|
| AccountNumber                | Account Number               | Checkbox                 | NÃ£o          | Rastreamento de histÃ³rico desativado.                                    |
| AccountSource                | Account Source               | Picklist                 | NÃ£o          | Lista de origem da conta.                                                 |
| AnaliseGerente__c            | AnÃ¡lise do gerente            | Checkbox                 | NÃ£o          | Aciona anÃ¡lise ao encerrar oportunidade se marcado.                      |
| AnnualRevenue                | Annual Revenue               | NÃºmero                   | NÃ£o          | Receita anual da conta.                                                    |
| BillingAddress               | Billing Address              | EndereÃ§o (completo)      | NÃ£o          | EndereÃ§o de cobranÃ§a.                                                      |
| CanaisComunicacao__c         | Canais de ComunicaÃ§Ã£o        | Multiselect Picklist     | NÃ£o          | Canais preferenciais de contato.                                            |
| ChannelProgramLevelName      | Channel Program Level Name   | Texto                    | NÃ£o          | Nome do nÃ­vel do programa de canal.                                         |
| ChannelProgramName           | Channel Program Name         | Texto                    | NÃ£o          | Nome do programa de canal.                                                   |
| CodigoServicoAdicional__c   | CÃ³digo do serviÃ§o adicional  | Texto (15)               | NÃ£o          | CÃ³digo interno do serviÃ§o adicional.                                         |
| DWBairroCobranca__c          | Bairro de cobranÃ§a           | Texto (255)              | NÃ£o          | Bairro para cobranÃ§a.                                                        |
| DWBairroEntrega__c           | Bairro de entrega            | Texto (255)              | NÃ£o          | Bairro para entrega.                                                         |
| DWCalculoDataContaForm__c   | CÃ¡lculo de data Conta (Form)| NÃºmero (18,2)            | NÃ£o          | FÃ³rmula: `1 + 1`                                                            |
| DWCamposIntegracaoPreenchido__c | Campos de integraÃ§Ã£o preenchidos | Checkbox             | NÃ£o          | Verifica se campos obrigatÃ³rios de integraÃ§Ã£o estÃ£o preenchidos.          |
| DWCelular__c                | Celular                      | Telefone                 | NÃ£o          | Celular do Lead.                                                             |
| DWCodigoERP__c              | CÃ³digo ERP                   | Texto (20)               | NÃ£o          | CÃ³digo Ãºnico do sistema ERP.                                                  |
| DWCodigoLoja__c             | CÃ³digo da loja               | Texto (255)              | NÃ£o          | CÃ³digo do cliente no sistema Workflow.                                         |
| DWComplementoCobranca__c     | Complemento de cobranÃ§a      | TextoArea                | NÃ£o          | Complemento do endereÃ§o de cobranÃ§a.                                           |
| DWComplementoEntrega__c      | Complemento de entrega       | Texto (255)              | NÃ£o          | Complemento do endereÃ§o de entrega.                                            |
| DWCpfCnpjForm__c             | CPF/CNPJ                     | Texto                    | NÃ£o          | FÃ³rmula: verifica se Ã© CPF ou CNPJ com base no comprimento do documento.     |
| DWDataNascimento__c         | Data de nascimento           | Data                     | NÃ£o          | Data de nascimento do cliente.                                                 |
| DWDocumentoLojaLimpo__c     | Documento da loja limpo     | Texto (sem pontuaÃ§Ã£o)    | NÃ£o          | Documento sem pontuaÃ§Ã£o, fÃ³rmula substitui pontos e traÃ§os.                 |
| DWDocumentoLoja__c          | CNPJ                         | Texto (20)               | NÃ£o          | Documento da loja (CNPJ).                                                      |
| DWDocumento__c             | Documento (CPF ou CNPJ)      | Texto (20)               | NÃ£o          | Documento do cliente, CPF ou CNPJ.                                             |
| DWEmail__c                 | Email da PJ                  | Email                    | NÃ£o          | Email da pessoa jurÃ­dica.                                                      |
| DWEmissor__c               | Ã“rgÃ£o Emissor                | Texto (255)              | NÃ£o          | Ã“rgÃ£o emissor do documento.                                                    |
| DWEnderecoResumido__c      | EndereÃ§o resumido           | FÃ³rmula (string)         | NÃ£o          | Combina bairro, cidade e estado.                                               |
| DWEstadoCivil__c           | Estado Civil                 | Picklist                 | NÃ£o          | Estado civil do cliente.                                                        |
| DWFundacao__c              | FundaÃ§Ã£o                     | Data                     | NÃ£o          | Data de fundaÃ§Ã£o da empresa.                                                    |
| DWInscricaoEstadual__c     | InscriÃ§Ã£o Estadual           | Texto (255)              | NÃ£o          | Registro na Secretaria da Fazenda.                                               |
| DWLogoLoja__c              | Logo da loja                 | URL                      | NÃ£o          | URL da imagem do logo da loja.                                                   |
| DWLoja__c                  | Loja                         | Lookup (Account)         | NÃ£o          | RelaÃ§Ã£o com a conta principal da loja.                                           |
| DWMarcaAtendimento__c      | Marca de Atendimento         | Picklist                 | NÃ£o          | Marca de atendimento associada.                                                 |
| DWMensagemIntegracao__c     | Mensagem de integraÃ§Ã£o       | LongTextArea (120000)    | NÃ£o          | Mensagem de erro ou status da integraÃ§Ã£o.                                        |
| DWNumeroCobranca__c        | NÃºmero de cobranÃ§a           | NÃºmero (18,0)            | NÃ£o          | NÃºmero de cobranÃ§a.                                                            |
| DWNumeroEntrega__c         | NÃºmero de entrega            | NÃºmero (18,0)            | NÃ£o          | NÃºmero de entrega.                                                             |
| DWPossuiCentralLeads__c   | Possui central de leads?     | Checkbox                 | NÃ£o          | Indica se hÃ¡ central de leads.                                                  |
| DWRG__c                   | RG                           | Texto (255)              | NÃ£o          | Registro geral (RG).                                                            |
| DWSexo__c                 | Sexo                         | Picklist                 | NÃ£o          | Sexo do cliente.                                                                |
| DWStatusIntegracao__c      | Status da integraÃ§Ã£o         | Picklist                 | NÃ£o          | Status do processo de integraÃ§Ã£o.                                                |
| DWStatusLoja__c            | Status da loja               | Checkbox                 | NÃ£o          | Ativo ou inativo.                                                              |
| DWTempoEsperaLead__c       | Tempo de espera do lead      | NÃºmero (3,0)             | NÃ£o          | Tempo em espera atÃ© atendimento.                                                |
| DWTempoEsperaOportunidade__c | Tempo de espera da oportunidade | NÃºmero (3,0)        | NÃ£o          | Tempo em espera atÃ© transferÃªncia.                                                |
| DWTipoDocumentoForm__c     | Tipo de documento (CPF/CNPJ)| Texto                    | NÃ£o          | FÃ³rmula que identifica se Ã© CPF ou CNPJ.                                          |
| DWTipoEstoque__c           | Tipo de estoque              | Picklist                 | NÃ£o          | Estoque: Novos, Seminovos, Novos e Seminovos.                                    |
| DWTipoLogradouro__c        | Tipo Logradouro              | Picklist                 | NÃ£o          | Tipos de logradouro: RUA, AVENIDA, etc.                                            |
| Description                | DescriÃ§Ã£o                    | TextoLongo               | NÃ£o          | DescriÃ§Ã£o geral do objeto.                                                        |
| DesejaMarketing__c        | Deseja receber marketing?    | Picklist                 | NÃ£o          | Indica preferÃªncia de marketing.                                                   |
| Email__c                 | Email                        | Texto (255)              | NÃ£o          | Email do cliente.                                                                |
| Fax                        | Fax                          | Texto (255)              | NÃ£o          | Campo de fax.                                                                   |
| GBCriadoIntegracao__c     | Criado via integraÃ§Ã£o        | Checkbox                 | NÃ£o          | Marca se criado por integraÃ§Ã£o.                                                   |
| GBInscricao_Municipal__c  | InscriÃ§Ã£o Municipal           | Texto (255)              | NÃ£o          | InscriÃ§Ã£o municipal.                                                            |
| GBNomeFantasia__c        | Nome fantasia                | Texto (255)              | NÃ£o          | Nome fantasia da empresa.                                                        |
| Industry                   | IndÃºstria                    | Picklist                 | NÃ£o          | Setor de atuaÃ§Ã£o.                                                               |
| IsPartner                  | Parceiro?                    | Checkbox                 | NÃ£o          | Indica se Ã© parceiro.                                                           |
| Jigsaw                     | Jigsaw                       | Checkbox                 | NÃ£o          | Campo padrÃ£o do Salesforce.                                                      |
| LogradouroComRuaCobranca__c | Logradouro com rua de cobranÃ§a | FÃ³rmula (Texto)     | NÃ£o          | Combina tipo logradouro e rua.                                                   |
| Logradouro__c             | Logradouro                   | Texto (255)              | NÃ£o          | Nome do logradouro.                                                             |
| Midia__c                  | MÃ­dia do Lead               | Lookup (Midia__c)        | NÃ£o          | RelaÃ§Ã£o com mÃ­dia.                                                              |
| Name                       | Nome                         | Texto                    | Sim          | Nome da conta.                                                                  |
| NovoUsuario__c           | Novo usuÃ¡rio                 | Lookup (User)            | NÃ£o          | RelaÃ§Ã£o com usuÃ¡rio responsÃ¡vel.                                                 |
| NumberOfEmployees          | NÃºmero de funcionÃ¡rios       | NÃºmero                   | NÃ£o          | Quantidade de funcionÃ¡rios.                                                     |
| NumberofLocations__c       | NÃºmero de locais             | NÃºmero (3,0)             | NÃ£o          | Quantidade de locais fÃ­sicos.                                                    |
| OwnerId                    | ProprietÃ¡rio                 | Lookup (User)            | NÃ£o          | ProprietÃ¡rio da conta.                                                          |
| Ownership                  | Propriedade                  | Picklist                 | NÃ£o          | Tipo de propriedade: Privada, PÃºblica, etc.                                      |
| PEP__c                     | Cliente PEP?                 | Picklist                 | NÃ£o          | Pessoa Exposta Politicamente.                                                    |
| ParentId                   | Conta pai (hierarquia)       | Hierarquia (Lookup)      | NÃ£o          | RelaÃ§Ã£o hierÃ¡rquica com outra conta.                                             |
| Phone                      | Telefone                     | Telefone                 | NÃ£o          | Telefone principal.                                                             |
| Rating                     | AvaliaÃ§Ã£o                    | Picklist                 | NÃ£o          | AvaliaÃ§Ã£o do cliente.                                                           |
| SLAExpirationDate__c       | SLA Expiration Date          | Data                     | NÃ£o          | Data de expiraÃ§Ã£o do SLA.                                                        |
| SLASerialNumber__c        | SLA Serial Number            | Texto (10)               | NÃ£o          | NÃºmero serial do SLA.                                                            |
| SLA__c                     | SLA                          | Picklist                 | NÃ£o          | NÃ­veis: Gold, Silver, Platinum, Bronze.                                          |
| ShippingAddress            | EndereÃ§o de entrega         | EndereÃ§o (completo)      | NÃ£o          | EndereÃ§o de entrega.                                                            |
| Sic                        | RG                           | Checkbox                 | Sim          | Marcado para controle interno.                                                   |
| SicDesc                    | DescriÃ§Ã£o do RG              | Texto (255)              | NÃ£o          | DescriÃ§Ã£o adicional do RG.                                                       |
| Site                       | Site da conta                | Texto (255)              | NÃ£o          | URL do site.                                                                   |
| TickerSymbol               | SÃ­mbolo de cotaÃ§Ã£o          | Texto (255)              | NÃ£o          | CÃ³digo de cotaÃ§Ã£o.                                                              |
| Tier                       | NÃ­vel de cliente             | Texto                    | NÃ£o          | Categoria de cliente.                                                           |
| TipoPessoa__c              | Tipo de pessoa (PF/PJ)      | Texto (2)                | NÃ£o          | FÃ³rmula que identifica se Ã© Pessoa FÃ­sica ou JurÃ­dica.                         |

## Regras de ValidaÃ§Ã£o

### Regras de obrigatoriedade e consistÃªncia

- **BairroObrigatorio:**  
  CondiÃ§Ã£o: `AND(NOT($Setup.BypassConversao__c.DWDesativaRegras__c), NOT(ISNEW()), ISCHANGED(DWBairroCobranca__c), ISBLANK(DWBairroCobranca__c), $Profile.Name != 'Salesforce API Only System Integrations')`  
  Mensagem: *"O campo BAIRRO Ã© obrigatÃ³rio."*

- **CEPObrigatorio:**  
  CondiÃ§Ã£o: `AND(NOT($Setup.BypassConversao__c.DWDesativaRegras__c), NOT(ISNEW()), ISCHANGED(BillingPostalCode), ISBLANK(BillingPostalCode), $Profile.Name != 'Salesforce API Only System Integrations')`  
  Mensagem: *"O campo CEP Ã© obrigatÃ³rio."*

- **CelularObrigatorio:**  
  CondiÃ§Ã£o: `AND(NOT($Setup.BypassConversao__c.DWDesativaRegras__c), NOT(ISNEW()), ISCHANGED(DWCelular__c), ISBLANK(DWCelular__c), TipoPessoa__c = 'PF', $Profile.Name != 'Salesforce API Only System Integrations')`  
  Mensagem: *"O campo CELULAR Ã© obrigatÃ³rio."*

- **CidadeObrigatorio:**  
  CondiÃ§Ã£o: `AND(NOT($Setup.BypassConversao__c.DWDesativaRegras__c), NOT(ISNEW()), ISCHANGED(BillingCity), ISBLANK(BillingCity), $Profile.Name != 'Salesforce API Only System Integrations')`  
  Mensagem: *"O campo CIDADE Ã© obrigatÃ³rio."*

- **DataNascimentoObrigatorio:**  
  CondiÃ§Ã£o: `AND(NOT($Setup.BypassConversao__c.DWDesativaRegras__c), NOT(ISNEW()), ISCHANGED(DWDataNascimento__c), ISBLANK(DWDataNascimento__c), TipoPessoa__c = 'PF', $Profile.Name != 'Salesforce API Only System Integrations')`  
  Mensagem: *"O campo DATA DE NASCIMENTO Ã© obrigatÃ³rio."*

- **EmailObrigatorio:**  
  CondiÃ§Ã£o: `AND(NOT($Setup.BypassConversao__c.DWDesativaRegras__c), NOT(ISNEW()), ISCHANGED(Email__c), ISBLANK(Email__c), $Profile.Name != 'Salesforce API Only System Integrations')`  
  Mensagem: *"O campo E-MAIL Ã© obrigatÃ³rio."*

- **EstadoCivilObrigatorio:**  
  CondiÃ§Ã£o: `AND(NOT($Setup.BypassConversao__c.DWDesativaRegras__c), NOT(ISNEW()), ISCHANGED(DWEstadoCivil__c), ISBLANK(TEXT(DWEstadoCivil__c)), TipoPessoa__c = 'PF', $Profile.Name != 'Salesforce API Only System Integrations')`  
  Mensagem: *"O campo ESTADO CIVIL Ã© obrigatÃ³rio."*

- **EstadoObrigatorio:**  
  CondiÃ§Ã£o: `AND(NOT($Setup.BypassConversao__c.DWDesativaRegras__c), NOT(ISNEW()), ISCHANGED(BillingState), ISBLANK(BillingState), $Profile.Name != 'Salesforce API Only System Integrations')`  
  Mensagem: *"O campo ESTADO Ã© obrigatÃ³rio."*

- **FundacaoObrigatorio:**  
  CondiÃ§Ã£o: `AND(NOT($Setup.BypassConversao__c.DWDesativaRegras__c), NOT(ISNEW()), ISCHANGED(DWFundacao__c), ISBLANK(DWFundacao__c), TipoPessoa__c = 'PJ', $Profile.Name != 'Salesforce API Only System Integrations')`  
  Mensagem: *"O campo FUNDAÃ‡ÃƒO Ã© obrigatÃ³rio."*

- **InscricaoEstadualObrigatorio:**  
  CondiÃ§Ã£o: `AND(NOT($Setup.BypassConversao__c.DWDesativaRegras__c), NOT(ISNEW()), ISCHANGED(DWInscricaoEstadual__c), ISBLANK(DWInscricaoEstadual__c), TipoPessoa__c = 'PJ', $Profile.Name != 'Salesforce API Only System Integrations')`  
  Mensagem: *"O campo INSCRIÃ‡ÃƒO ESTADUAL Ã© obrigatÃ³rio."*

- **NaoAlteraDocumento:**  
  CondiÃ§Ã£o: `AND(NOT(ISNEW()), NOT(ISBLANK(PRIORVALUE(DWDocumento__c))), ISCHANGED(DWDocumento__c), TEXT(DWStatusIntegracao__c) = 'Integrado com sucesso')`  
  Mensagem: *"NÃ£o Ã© possÃ­vel alterar o documento quando a conta estÃ¡ integrada."*

- **NaoAlteraProprietario:**  
  CondiÃ§Ã£o: `AND(NOT(ISNEW()), ISCHANGED(OwnerId), NOT($Profile.Name = 'Administrador do sistema'), NOT($Profile.Name = 'Salesforce API Only System Integrations'))`  
  Mensagem: *"Apenas usuÃ¡rios Administradores podem alterar a propriedade da conta."*

- **NaoAlterarNomeContaTipoLoja:**  
  CondiÃ§Ã£o: `AND(RecordType.DeveloperName == 'DWLoja', ISCHANGED(Name), OR($Profile.Name == 'SDR', $Profile.Name == 'Closer'))`  
  Mensagem: *"NÃ£o Ã© permitido realizar alteraÃ§Ãµes no nome da Conta."*

- **NascimentoFundacao150Anos:**  
  CondiÃ§Ã£o: `OR( AND(NOT(ISBLANK(DWFundacao__c)), RecordType.DeveloperName != 'DWLoja', DWTipoDocumentoForm__c = 'CNPJ', DWFundacao__c > TODAY()), AND(NOT(GBCriadoIntegracao__c), NOT(ISBLANK(DWDataNascimento__c)), RecordType.DeveloperName != 'DWLoja', DWTipoDocumentoForm__c = 'CPF', OR(DWDataNascimento__c > TODAY(), DWDataNascimento__c < (TODAY() - (150 * 365)))) )`  
  Mensagem: *"Data InvÃ¡lida, favor verificar."*

- **NumeroObrigatorio:**  
  CondiÃ§Ã£o: `AND(NOT($Setup.BypassConversao__c.DWDesativaRegras__c), NOT(ISNEW()), ISCHANGED(DWNumeroCobranca__c), ISBLANK(DWNumeroCobranca__c), $Profile.Name != 'Salesforce API Only System Integrations')`  
  Mensagem: *"O campo NÃšMERO Ã© obrigatÃ³rio."*

- **OrgaoEmissorObrigatorio:**  
  CondiÃ§Ã£o: `AND(NOT($Setup.BypassConversao__c.DWDesativaRegras__c), NOT(ISNEW()), ISCHANGED(DWEmissor__c), ISBLANK(DWEmissor__c), TipoPessoa__c = 'PF', $Profile.Name != 'Salesforce API Only System Integrations')`  
  Mensagem: *"O campo ORGÃƒO EMISSOR Ã© obrigatÃ³rio."*

- **PaisObrigatorio:**  
  CondiÃ§Ã£o: `AND(NOT($Setup.BypassConversao__c.DWDesativaRegras__c), NOT(ISNEW()), ISCHANGED(BillingCountry), ISBLANK(BillingCountry), $Profile.Name != 'Salesforce API Only System Integrations')`  
  Mensagem: *"O campo PAÃS Ã© obrigatÃ³rio."*

- **PreencherCanaisComunicacao:**  
  CondiÃ§Ã£o: `AND(ISPICKVAL(DesejaMarketing__c, 'Sim'), ISBLANK(CanaisComunicacao__c))`  
  Mensagem: *"Ã‰ necessÃ¡rio selecionar ao menos um valor do campo Canais de ComunicaÃ§Ã£o."*

- **RGObrigatorio:**  
  CondiÃ§Ã£o: `AND(NOT($Setup.BypassConversao__c.DWDesativaRegras__c), NOT(ISNEW()), ISCHANGED(DWRG__c), ISBLANK(DWRG__c), TipoPessoa__c = 'PF', $Profile.Name != 'Salesforce API Only System Integrations')`  
  Mensagem: *"O campo RG Ã© obrigatÃ³rio."*

- **RuaObrigatorio:**  
  CondiÃ§Ã£o: `AND(NOT($Setup.BypassConversao__c.DWDesativaRegras__c), NOT(ISNEW()), ISCHANGED(BillingStreet), ISBLANK(BillingStreet), $Profile.Name != 'Salesforce API Only System Integrations')`  
  Mensagem: *"O campo RUA DE COBRANÃ‡A Ã© obrigatÃ³rio."*

- **SexoObrigatorio:**  
  CondiÃ§Ã£o: `AND(NOT($Setup.BypassConversao__c.DWDesativaRegras__c), NOT(ISNEW()), ISCHANGED(DWSexo__c), ISBLANK(TEXT(DWSexo__c)), TipoPessoa__c = 'PF', $Profile.Name != 'Salesforce API Only System Integrations')`  
  Mensagem: *"O campo SEXO Ã© obrigatÃ³rio."*

- **alterarNomeIntetgracaoSucesso:**  
  CondiÃ§Ã£o: `AND( ISPICKVAL(DWStatusIntegracao__c, 'Integrado com sucesso'), ISCHANGED(Name) )`  
  Mensagem: *"NÃ£o Ã© possÃ­vel alterar o nome da conta quando a conta jÃ¡ estÃ¡ integrada."*

- **canaisComunicacaoObrigatorio:**  
  CondiÃ§Ã£o: `AND( ISPICKVAL(DesejaMarketing__c, 'Sim'), ISBLANK(CanaisComunicacao__c) )`  
  Mensagem: *"O campo Deseja receber AÃ§Ãµes de Marketing estÃ¡ marcado como sim, Ã© necessÃ¡rio marcar pelo menos uma opÃ§Ã£o em Canais de comunicaÃ§Ã£o."*

- **documentonao1:**  
  CondiÃ§Ã£o: `AND(ISCHANGED(DWDocumento__c), DWDocumento__c = '1')`  
  Mensagem: *"O DOCUMENTO NAO PODER SER 1"*

- **nomeVazio:**  
  CondiÃ§Ã£o: `AND(ISCHANGED(Name), ISBLANK(Name))`  
  Mensagem: *"NÃ£o Ã© possÃ­vel deixar o nome em branco."*

---

## Layouts Compactos
- **DWLayoutCompactoCliente:** Layout para contas de clientes, com campos essenciais.
- **DWLayoutCompactoLoja:** Layout para contas do tipo loja, com campos especÃ­ficos.

## Listas de VisualizaÃ§Ã£o
- **Todas as contas:** Exibe todas as contas com diversos filtros.
- **Contas criadas hoje:** Filtra contas criadas no dia.
- **Contas de Loja:** Filtra contas do tipo loja.
- **Minhas contas:** Contas atribuÃ­das ao usuÃ¡rio.
- **Clientes Pessoas FÃ­sicas:** Conta do tipo cliente fÃ­sico.
- **Clientes Pessoas JurÃ­dicas:** Conta do tipo cliente jurÃ­dico.

## Outros Recursos
- **Web Links:** Links rÃ¡pidos para aÃ§Ãµes externas, Google Maps, Google News, etc.
- **PermissÃµes de Compartilhamento:** Privado.
- **Habilitado para Feeds, HistÃ³rico e Pesquisa AvanÃ§ada.**

---

*ObservaÃ§Ã£o:* As regras de validaÃ§Ã£o ajudam a garantir a integridade e consistÃªncia dos dados inseridos, alÃ©m de reforÃ§ar polÃ­ticas internas de negÃ³cio.

## <strong id="flow">flow</strong>

Flow: GBLeadTourSalesforceVideos.flow

DescriÃ§Ã£o
O Flow `GBLeadTourSalesforceVideos` foi criado para exibir um vÃ­deo de tour do Salesforce relacionado a um Lead. Ele apresenta uma tela com um componente de vÃ­deo embutido, permitindo que o usuÃ¡rio assista ao conteÃºdo diretamente na interface do Flow.

Tipo
- Screen Flow (com interface de usuÃ¡rio)

Objetivo
- Apresentar um vÃ­deo de tour do Salesforce para o Lead, usando um componente personalizado de vÃ­deo (`c:dwVideo`), passando o ID do Lead como parÃ¢metro.

Etapas Principais
1. Start â€“ Recebe o ID do registro Lead como variÃ¡vel de entrada (`recordId`).
2. Screen â€“ Exibe uma tela intitulada "Tour - Leads" contendo:
   - Um texto de tÃ­tulo formatado em HTML.
   - Um componente personalizado de vÃ­deo (`c:dwVideo`) que recebe o ID do Lead e o nome do objeto (`Lead`) como parÃ¢metros, permitindo a reproduÃ§Ã£o do vÃ­deo relacionado ao Lead.

VariÃ¡veis
- recordId (String, Entrada) â€“ ID do Lead que serÃ¡ utilizado pelo componente de vÃ­deo para exibir o conteÃºdo adequado.

ConsideraÃ§Ãµes
- Este Flow Ã© ativado para exibir um vÃ­deo de tour do Salesforce relacionado ao Lead.
- O componente `c:dwVideo` deve estar configurado para aceitar os parÃ¢metros `recordId` e `objectApiName`.
- A tela nÃ£o permite voltar, pausar ou avanÃ§ar, apenas finalizar apÃ³s a visualizaÃ§Ã£o.
- O Flow estÃ¡ configurado para rodar em modo `SystemModeWithoutSharing`, garantindo acesso completo aos registros necessÃ¡rios.

Notas adicionais
- A descriÃ§Ã£o indica que a retirada do Ã­cone de informaÃ§Ã£o foi realizada em 23/06/2025 devido a um erro, conforme anotado por Vanessa Fernandes.
- O Flow possui uma configuraÃ§Ã£o de layout de canvas automÃ¡tico (`AUTO_LAYOUT_CANVAS`) para facilitar sua ediÃ§Ã£o e visualizaÃ§Ã£o.

Flow: DWOpportunityClickToCall

DescriÃ§Ã£o
O Flow `DWOpportunityClickToCall` Ã© uma automaÃ§Ã£o Lightning que permite iniciar uma chamada de clique para ligar (Click to Call) em uma oportunidade especÃ­fica. Ele fornece uma interface de usuÃ¡rio simplificada para o usuÃ¡rio iniciar a chamada, passando o ID da oportunidade para o componente Lightning personalizado.

Tipo
- Autolaunched Flow com interface de usuÃ¡rio (Screen)

Objetivo
- Permitir que usuÃ¡rios iniciem uma chamada clicando em um botÃ£o ou link na oportunidade, integrando com um componente Lightning personalizado para realizar a chamada.

Etapas Principais
1. Start â€“ Recebe o ID da oportunidade como variÃ¡vel de entrada (`recordId`).
2. Tela (Screen) â€“ Exibe uma tela com o componente Lightning `dwCTIAtiva`, que inicia a chamada de clique para ligar, passando o ID da oportunidade e o nome do objeto (`Opportunity`) como parÃ¢metros.

VariÃ¡veis
- recordId (String, Input) â€“ ID da oportunidade que serÃ¡ usada pelo componente Lightning para iniciar a chamada.

ConsideraÃ§Ãµes
- Este Flow deve ser acionado a partir de um botÃ£o ou link na pÃ¡gina de detalhes da oportunidade, passando o ID do registro.
- O componente Lightning `c:dwCTIAtiva` Ã© responsÃ¡vel por integrar a funcionalidade de clique para ligar, recebendo o ID do registro e o nome do objeto.
- O Flow estÃ¡ configurado para permitir navegaÃ§Ã£o de volta e finalizaÃ§Ã£o apÃ³s a execuÃ§Ã£o, alÃ©m de permitir pausa se necessÃ¡rio.
- A interface de usuÃ¡rio Ã© minimalista, sem cabeÃ§alho ou rodapÃ©, focada na funcionalidade de chamada.

Notas adicionais
- A versÃ£o do API utilizada Ã© 63.0.
- O Flow estÃ¡ ativo e configurado para uso em ambientes Lightning com layout automÃ¡tico (AUTO_LAYOUT_CANVAS).

Flow: GBOportunidadeTourSalesforceVideos.flow

DescriÃ§Ã£o
O Flow `GBOportunidadeTourSalesforceVideos` foi criado para exibir um vÃ­deo de tour relacionado Ã  oportunidade no Salesforce. Ele apresenta uma tela com um tÃ­tulo formatado e um componente personalizado que exibe vÃ­deos associados Ã  oportunidade especÃ­fica.

Tipo
- Autolaunched Flow (sem interface de usuÃ¡rio direta)

Objetivo
- Apresentar um vÃ­deo de tour ao usuÃ¡rio, relacionado Ã  oportunidade cujo ID Ã© passado como parÃ¢metro de entrada.
- Utilizar um componente personalizado para exibir vÃ­deos do Salesforce, passando o ID da oportunidade.

Etapas Principais
1. VariÃ¡vel de entrada `recordId` â€“ Recebe o ID da oportunidade a ser exibida.
2. Tela `TelaComVideo` â€“ Apresenta uma mensagem de tÃ­tulo e um componente de vÃ­deo.
   - TÃ­tulo: "Tour - Oportunidade" com formataÃ§Ã£o em HTML.
   - Componente `VisualizadorVideos` â€“ componente Lightning personalizado que exibe vÃ­deos relacionados Ã  oportunidade, recebendo `objectApiName` como `Opportunity` e `recordId` da variÃ¡vel de entrada.
3. Encerramento â€“ O Flow termina apÃ³s a exibiÃ§Ã£o do vÃ­deo, sem passos adicionais.

VariÃ¡veis
- `recordId` (String, Input) â€“ ID da oportunidade que serÃ¡ usada para buscar e exibir vÃ­deos relacionados.

ConsideraÃ§Ãµes
- Este Flow deve ser iniciado passando o ID da oportunidade desejada na variÃ¡vel `recordId`.
- O componente Lightning `c:dwVideo` Ã© responsÃ¡vel por buscar e exibir os vÃ­deos associados ao objeto Opportunity.
- A tela nÃ£o permite navegaÃ§Ã£o para trÃ¡s ou pausa, garantindo uma experiÃªncia linear ao usuÃ¡rio.
- O Flow estÃ¡ ativo e pronto para uso, podendo ser chamado via botÃ£o, link ou automaÃ§Ã£o que forneÃ§a o ID da oportunidade.

Notas adicionais
- A descriÃ§Ã£o indica que houve ajustes no tÃ­tulo e no parÃ¢metro de entrada em 20/05/2025, sugerindo manutenÃ§Ã£o recente.
- O Flow utiliza o modo `SystemModeWithoutSharing`, garantindo execuÃ§Ã£o sem restriÃ§Ãµes de compartilhamento de registros.

Flow: OpportunityBeforeFlowUpdateAlterarProprietario.flow

DescriÃ§Ã£o
O Flow `OpportunityBeforeFlowUpdateAlterarProprietario.flow` Ã© uma automaÃ§Ã£o que executa antes de uma oportunidade ser salva, com o objetivo de alterar o proprietÃ¡rio da oportunidade quando hÃ¡ uma mudanÃ§a no campo personalizado `NovoProprietario__c`.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio, acionado por evento de atualizaÃ§Ã£o de registro)

Objetivo
- Detectar alteraÃ§Ãµes no campo `NovoProprietario__c` na oportunidade.
- Se o campo for alterado e nÃ£o estiver nulo, atualizar o proprietÃ¡rio da oportunidade para o novo proprietÃ¡rio especificado.

Etapas Principais
1. **Start** â€“ Disparado por uma atualizaÃ§Ã£o no objeto Opportunity, especificamente quando o campo `NovoProprietario__c` Ã© alterado e nÃ£o Ã© nulo.
2. **Assignment** â€“ Atribui o valor do campo `NovoProprietario__r.Id` ao campo padrÃ£o `$Record.OwnerId`, efetivamente mudando o proprietÃ¡rio da oportunidade para o novo proprietÃ¡rio desejado.

VariÃ¡veis e CondiÃ§Ãµes
- **Filtro de disparo**: O Flow Ã© iniciado apenas se:
  - O campo `NovoProprietario__c` foi alterado (`IsChanged` Ã© verdadeiro).
  - O campo `NovoProprietario__c` nÃ£o estÃ¡ vazio (`IsNull` Ã© falso).
- **$Record**: Representa o registro da oportunidade que estÃ¡ sendo atualizado.

ConsideraÃ§Ãµes
- Este Flow Ã© acionado automaticamente antes de o registro ser salvo, garantindo que a alteraÃ§Ã£o de proprietÃ¡rio ocorra de forma transparente e automÃ¡tica.
- Ã‰ importante que o campo `NovoProprietario__c` seja um campo de pesquisa para o usuÃ¡rio desejado.
- O Flow garante que a mudanÃ§a sÃ³ ocorra se o campo `NovoProprietario__c` foi realmente alterado e contÃ©m um valor vÃ¡lido.

Resumo
Este Flow automatiza a atualizaÃ§Ã£o do proprietÃ¡rio de uma oportunidade sempre que um novo proprietÃ¡rio Ã© definido pelo usuÃ¡rio, garantindo consistÃªncia e eficiÃªncia no processo de gerenciamento de oportunidades.

Flow: DW_Termo_envio_para_assinatura

DescriÃ§Ã£o
O Flow `DW_Termo_envio_para_assinatura` Ã© uma tela de fluxo criado para ser acionado a partir de um botÃ£o no objeto Termo. Sua finalidade Ã© abrir um componente de envio para assinatura digital do PDF do termo, facilitando o processo de assinatura eletrÃ´nica via Docusign.

Tipo
- Screen Flow (Fluxo de Tela)

Objetivo
- Consultar o registro do objeto Termo com base no ID recebido.
- Exibir uma tela com um componente personalizado para envio do termo para assinatura digital.
- Passar o ID do registro e o tipo de termo para o componente de assinatura.

Etapas Principais
1. Get Records â€“ Busca o registro do objeto `Termo__c` usando o `recordId` fornecido como entrada.
2. Screen â€“ Exibe uma tela contendo o componente `dwAssinaturaDocusign`, que realiza o envio do PDF do termo para assinatura digital, passando os parÃ¢metros necessÃ¡rios.

VariÃ¡veis
- recordId (String, Input) â€“ ID do registro do objeto Termo a ser processado.

Componentes
- `enviarPDF` (Tela) â€“ ContÃ©m o componente `dwAssinaturaDocusign`, que recebe os parÃ¢metros:
  - `recordId` (ID do Termo)
  - `typeDocument` (Tipo de termo, definido por uma fÃ³rmula)

FÃ³rmula
- `tipoTermo` (String) â€“ Determina o tipo de termo com base no RecordType do registro Termo, categorizando-o em diferentes tipos de termo, como "TermoTestDrive", "TermoPreContrato", etc.

ConsideraÃ§Ãµes
- Este fluxo deve ser acionado por um botÃ£o no objeto Termo, passando o ID do registro.
- O componente `dwAssinaturaDocusign` Ã© responsÃ¡vel por gerenciar o envio do PDF para assinatura digital.
- O fluxo Ã© configurado para ser utilizado em ambientes Lightning com layout de fluxo automÃ¡tico (`AUTO_LAYOUT_CANVAS`).

Este fluxo fornece uma integraÃ§Ã£o direta e simplificada para o envio de termos para assinatura digital, garantindo que o processo seja iniciado de forma rÃ¡pida e eficiente a partir do registro do Termo.

Flow: DWLeadClickToCall

DescriÃ§Ã£o
O Flow `DWLeadClickToCall` Ã© uma automaÃ§Ã£o Lightning que facilita a funcionalidade de "Click to Call" para registros do objeto Lead. Ele exibe uma tela personalizada com um componente Lightning que permite ao usuÃ¡rio iniciar uma chamada diretamente do registro Lead.

Tipo
- Autolaunched Flow com interface de usuÃ¡rio (Screen)

Objetivo
- Permitir que usuÃ¡rios iniciem uma chamada clicando em um botÃ£o ou link no registro Lead.
- Exibir uma tela com componente Lightning para ativar a chamada.

Etapas Principais
1. VariÃ¡vel de Entrada â€“ `recordId`: Recebe o ID do Lead ao iniciar o Flow.
2. Tela (`TelaClickToCall`) â€“ Apresenta um componente Lightning personalizado (`c:dwCTIAtiva`) que inicia a chamada.
   - O componente recebe como parÃ¢metros o `recordId` do Lead e o nome do objeto (`Lead`).
3. NavegaÃ§Ã£o â€“ ApÃ³s a interaÃ§Ã£o, o Flow termina, permitindo que o usuÃ¡rio retorne ao registro ou prossiga com outras aÃ§Ãµes.

VariÃ¡veis
- `recordId` (String, Input) â€“ ID do registro Lead que serÃ¡ utilizado pelo componente Lightning para iniciar a chamada.

ConfiguraÃ§Ãµes adicionais
- O Flow estÃ¡ configurado para ser iniciado de forma automÃ¡tica, geralmente por um botÃ£o personalizado ou uma aÃ§Ã£o rÃ¡pida no registro Lead.
- A tela nÃ£o possui cabeÃ§alho nem rodapÃ©, focando na interaÃ§Ã£o com o componente Lightning.
- O componente Lightning (`c:dwCTIAtiva`) Ã© configurado para receber o ID do registro e o nome do objeto, facilitando a integraÃ§Ã£o com sistemas de telefonia ou CTI.

ConsideraÃ§Ãµes
- Este Flow deve ser acionado a partir de uma aÃ§Ã£o no registro Lead, como um botÃ£o personalizado ou uma aÃ§Ã£o rÃ¡pida.
- O componente Lightning utilizado (`c:dwCTIAtiva`) deve estar devidamente configurado para realizar a chamada telefÃ´nica.
- Ã‰ importante garantir que o `recordId` seja passado corretamente ao iniciar o Flow para que o componente funcione adequadamente.
- O Flow estÃ¡ ativo e pronto para uso na interface Lightning, promovendo uma experiÃªncia integrada de "Click to Call".

Flow: GBContaTourSalesforceVideos.flow

DescriÃ§Ã£o
O Flow `GBContaTourSalesforceVideos.flow` foi criado para exibir um vÃ­deo de tour relacionado Ã  conta no Salesforce, especificamente para o objeto Conta. Ele apresenta uma tela com um componente de vÃ­deo embutido, permitindo que o usuÃ¡rio visualize o conteÃºdo sem necessidade de navegaÃ§Ã£o adicional.

Tipo
- Screen Flow (com interface de usuÃ¡rio)

Objetivo
- Apresentar um vÃ­deo de tour para o usuÃ¡rio ao acessar a tela, com foco na conta especÃ­fica, usando o componente personalizado `c:dwVideo`.

Etapas Principais
1. Start â€“ InÃ­cio do Flow, recebendo o ID da conta (`recordId`) como variÃ¡vel de entrada.
2. Tela `TelaComVideo` â€“ Exibe uma tela com um tÃ­tulo estilizado e um componente de vÃ­deo embutido, configurado para mostrar vÃ­deos relacionados Ã  conta.

VariÃ¡veis
- recordId (String, Input) â€“ ID da Conta que serÃ¡ usada pelo componente de vÃ­deo para exibir o conteÃºdo correspondente.

ConfiguraÃ§Ãµes e Componentes
- Tela `TelaComVideo`:
  - TÃ­tulo: "Tour - Conta" com formataÃ§Ã£o em negrito e tamanho de fonte 20px.
  - Componente `VisualizadorVideos` (`c:dwVideo`):
    - ParÃ¢metros de entrada:
      - `objectApiName`: definido como `Account`, indicando que o vÃ­deo estÃ¡ relacionado ao objeto Conta.
      - `recordId`: passado dinamicamente atravÃ©s da variÃ¡vel de entrada `recordId`.
    - ConfiguraÃ§Ãµes adicionais:
      - `inputsOnNextNavToAssocScrn`: usa valores armazenados.
      - `isRequired`: obrigatÃ³rio.
      - `storeOutputAutomatically`: garante que a saÃ­da seja armazenada automaticamente.
  - NavegaÃ§Ã£o:
    - Permite apenas avanÃ§ar (`allowBack` = false, `allowFinish` = true).
    - Sem opÃ§Ãµes de pausa ou retrocesso.

ConsideraÃ§Ãµes
- Este Flow deve ser iniciado passando o ID da Conta (`recordId`) como parÃ¢metro de entrada.
- O componente `c:dwVideo` Ã© responsÃ¡vel por buscar e exibir o vÃ­deo relacionado Ã  Conta, usando os parÃ¢metros fornecidos.
- A tela nÃ£o possui cabeÃ§alho nem rodapÃ©, focando exclusivamente na exibiÃ§Ã£o do vÃ­deo.
- O Flow estÃ¡ ativo e pronto para uso, podendo ser chamado a partir de botÃµes, links ou processos automatizados, desde que o `recordId` seja fornecido corretamente.

Flow: DWAtivoBeforeFlowAttLojaVeiculo.flow

DescriÃ§Ã£o
O Flow `DWAtivoBeforeFlowAttLojaVeiculo` Ã© um Flow de lanÃ§amento automÃ¡tico (AutoLaunched) que Ã© acionado antes de salvar registros do objeto Asset. Sua principal funÃ§Ã£o Ã© atualizar o campo `Codigo_loja_aux__c` do Asset com o valor do campo `DWCodigoLoja__c` do registro relacionado Ã  Conta, alÃ©m de definir o campo `DWLojaVeiculo__c` com o ID da Conta associada.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Antes de criar ou atualizar um registro Asset, garantir que o campo `Codigo_loja_aux__c` seja atualizado com o cÃ³digo da loja da Conta relacionada.
- Atualizar o campo `DWLojaVeiculo__c` com o ID da Conta vinculada ao Asset.

Etapas Principais
1. Start â€“ Disparado antes de salvar registros do objeto Asset, apenas se o campo `AccountId` nÃ£o for nulo.
2. Assignment â€“ Atribui o valor do campo `DWCodigoLoja__c` da Conta relacionada ao campo `Codigo_loja_aux__c` do Asset.
3. Assignment â€“ Atribui o ID da Conta ao campo `DWLojaVeiculo__c` do Asset.

VariÃ¡veis
- Nenhuma variÃ¡vel de entrada explÃ­cita definida neste Flow, pois ele Ã© acionado pelo evento de criaÃ§Ã£o ou atualizaÃ§Ã£o de Asset, desde que o campo `AccountId` esteja preenchido.

ConfiguraÃ§Ã£o do Disparo
- Objeto: Asset
- Tipo de disparo: Create and Update
- Momento: Record Before Save
- CondiÃ§Ã£o: Apenas quando `AccountId` nÃ£o for nulo (`IsNull` Ã© `false`)

ConsideraÃ§Ãµes
- Este Flow Ã© configurado para rodar automaticamente antes de salvar registros do Asset, garantindo que os campos relacionados Ã  loja estejam sincronizados com as informaÃ§Ãµes da Conta associada.
- Ã‰ importante que o campo `DWCodigoLoja__c` exista na Conta e contenha o cÃ³digo da loja desejado.
- O Flow utiliza a lÃ³gica de disparo `RecordBeforeSave`, o que evita a necessidade de chamadas adicionais e garante maior eficiÃªncia na atualizaÃ§Ã£o dos registros.

Este fluxo automatiza a manutenÃ§Ã£o da consistÃªncia entre os registros de Asset e Conta, facilitando processos que dependem dessas informaÃ§Ãµes atualizadas.

Flow: DWLeadSubflowCriarLeadApos15Dias

DescriÃ§Ã£o
O Flow `DWLeadSubflowCriarLeadApos15Dias` Ã© responsÃ¡vel por atualizar o campo `DWDataCriacaoFutura__c` de um Lead com uma data futura, exatamente 15 dias apÃ³s a data atual. Este fluxo Ã© utilizado no contexto de desqualificaÃ§Ã£o de leads, especialmente quando o motivo Ã© "Interesse futuro" com submotivo "15 dias". Ele Ã© acionado automaticamente e realiza a busca pelo Lead com base no `recordId` passado, atualizando a data de criaÃ§Ã£o futura.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Consultar um Lead especÃ­fico pelo seu ID.
- Calcular uma data futura, 15 dias apÃ³s a data atual.
- Atualizar o campo `DWDataCriacaoFutura__c` do Lead com essa data futura.
- Caso ocorra um erro durante a atualizaÃ§Ã£o, postar uma mensagem de erro no chatter.

Etapas Principais
1. **Get Records â€“ LeadS**  
   Busca o Lead pelo ID fornecido na variÃ¡vel `recordId`.  
   Se nÃ£o encontrar o Lead, o fluxo direciona para uma aÃ§Ã£o de erro.

2. **Update Records â€“ AtualizaDataFutura15dias**  
   Atualiza o campo `DWDataCriacaoFutura__c` do Lead com a data calculada (`TODAY() + 15`).  
   Se ocorrer erro na atualizaÃ§Ã£o, uma mensagem de erro Ã© postada no chatter.

3. **Action Call â€“ msg_erro**  
   Caso haja falha na busca ou na atualizaÃ§Ã£o, uma mensagem de erro Ã© postada no chatter informando o problema.

VariÃ¡veis
- `recordId` (String, Input)  
  ID do Lead que serÃ¡ consultado e atualizado.

ConsideraÃ§Ãµes
- Este fluxo deve ser iniciado com o ID do Lead passado na variÃ¡vel `recordId`.
- A lÃ³gica de cÃ¡lculo da data futura Ã© definida na fÃ³rmula `criacaoMais15`, que soma 15 dias Ã  data atual.
- Em caso de erro na busca ou na atualizaÃ§Ã£o, uma mensagem de erro Ã© postada no chatter do usuÃ¡rio ou registro relacionado.
- O fluxo Ã© configurado para rodar automaticamente, sem necessidade de interaÃ§Ã£o do usuÃ¡rio.

Este fluxo Ã© uma parte importante do processo de automaÃ§Ã£o para gerenciar leads que precisam de acompanhamento apÃ³s um perÃ­odo de 15 dias, garantindo que a data futura seja registrada corretamente para aÃ§Ãµes futuras.

# Flow: DWOpportunityAfterUpdateAvancaFaseQuandoTipoVendaPreenchido.flow

## DescriÃ§Ã£o
O Flow `DWOpportunityAfterUpdateAvancaFaseQuandoTipoVendaPreenchido.flow` Ã© um fluxo automatizado que Ã© acionado apÃ³s a atualizaÃ§Ã£o de registros de oportunidade. Sua principal funÃ§Ã£o Ã© verificar se o campo `Type` foi alterado para determinados valores especÃ­ficos e, se as condiÃ§Ãµes forem atendidas, avanÃ§ar a fase da oportunidade para "Vendido".

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

## Objetivo
- Monitorar oportunidades apÃ³s sua atualizaÃ§Ã£o.
- Verificar se o campo `Type` foi alterado para valores especÃ­ficos.
- Se as condiÃ§Ãµes forem atendidas, atualizar o estÃ¡gio da oportunidade para "Vendido".

## Etapas Principais
1. **InÃ­cio (Start)**  
   - O fluxo Ã© disparado apÃ³s a atualizaÃ§Ã£o de registros do objeto `Opportunity`.
   - Aplica filtros para verificar se:
     - O campo `Type` foi alterado (`IsChanged`).
     - O valor de `Type` Ã© "VeÃ­culo de Estoque" ou "Pedido de FÃ¡brica/Virada de nota".
     - O estÃ¡gio atual Ã© "Em atendimento".
   - Se todas as condiÃ§Ãµes forem verdadeiras, o fluxo prossegue para a atualizaÃ§Ã£o do registro.

2. **AtualizaÃ§Ã£o de Registro (Record Update)**  
   - Atualiza o campo `StageName` da oportunidade para "Vendido".
   - Essa aÃ§Ã£o Ã© executada na oportunidade que atendeu aos critÃ©rios definidos na etapa de inÃ­cio.

## VariÃ¡veis
- **Record Trigger**: O fluxo Ã© acionado por uma atualizaÃ§Ã£o no objeto `Opportunity`.
- **Filtros de disparo**:
  - `Type` foi alterado (`IsChanged`).
  - `Type` Ã© igual a "VeÃ­culo de Estoque" ou "Pedido de FÃ¡brica/Virada de nota".
  - `StageName` Ã© igual a "Em atendimento".
- **AtualizaÃ§Ã£o**:
  - `StageName` serÃ¡ definido como "Vendido" na oportunidade correspondente.

## ConsideraÃ§Ãµes
- Este fluxo Ã© ativado automaticamente apÃ³s a atualizaÃ§Ã£o de oportunidades.
- Os filtros garantem que a fase sÃ³ seja avanÃ§ada se o campo `Type` foi alterado para os valores especÃ­ficos e o estÃ¡gio atual seja "Em atendimento".
- A atualizaÃ§Ã£o do estÃ¡gio para "Vendido" automatiza o processo de fechamento de oportunidades quando os critÃ©rios sÃ£o atendidos, garantindo maior eficiÃªncia no gerenciamento de vendas.

---

Se precisar de mais detalhes ou de uma anÃ¡lise de outros componentes do fluxo, estou Ã  disposiÃ§Ã£o!

Flow: GBEstoqueTourSalesforceVideos.flow

DescriÃ§Ã£o
O Flow `GBEstoqueTourSalesforceVideos.flow` foi criado para exibir um vÃ­deo de tour relacionado ao estoque na plataforma Salesforce. Ele apresenta uma tela com um tÃ­tulo formatado e incorpora um componente personalizado para visualizaÃ§Ã£o de vÃ­deos, passando o ID do registro atual.

Tipo
- Autolaunched Flow (sem interface de usuÃ¡rio direta, iniciado por outro processo ou componente)

Objetivo
- Apresentar uma tela com um vÃ­deo de tour de estoque ao usuÃ¡rio, usando um componente personalizado.
- Utilizar o ID do registro atual para carregar o conteÃºdo adequado no componente de vÃ­deo.

Etapas Principais
1. Start â€“ Recebe o ID do registro (`recordId`) como variÃ¡vel de entrada.
2. Tela `TelaComVideo` â€“ Exibe uma mensagem de tÃ­tulo e incorpora o componente de visualizaÃ§Ã£o de vÃ­deos (`VisualizadorVideos`), passando o `recordId` e o nome do objeto API (`Asset`).

Componentes e ConfiguraÃ§Ãµes
- Tela `TelaComVideo`:
  - Exibe um tÃ­tulo formatado: "Tour - Estoque" em fonte grande e negrito.
  - Inclui o componente `c:dwVideo` (VisualizadorVideos), que recebe:
    - `objectApiName`: definido como `Asset`.
    - `recordId`: passado a partir da variÃ¡vel de entrada `recordId`.
  - ConfiguraÃ§Ãµes adicionais:
    - NÃ£o permite voltar ou pausar na tela.
    - Permite finalizar apÃ³s a visualizaÃ§Ã£o.
    - Esconde cabeÃ§alho e rodapÃ© da tela.

VariÃ¡veis
- recordId (String, entrada): ID do registro do tipo `Asset` que serÃ¡ utilizado pelo componente de vÃ­deo.

ConfiguraÃ§Ãµes Gerais
- VersÃ£o API: 63.0
- Modo de execuÃ§Ã£o: SystemModeWithoutSharing (sem restriÃ§Ãµes de compartilhamento)
- Label do Flow: `GB - Estoque - Tour Salesforce VÃ­deos`
- DescriÃ§Ã£o: "20/05/2025 - Ajuste no tÃ­tulo e no parÃ¢metro de entrada do componente - Vanessa Fernandes"
- Status: Ativo

ConsideraÃ§Ãµes
- Este Flow deve ser iniciado passando o `recordId` do ativo (`Asset`) que se deseja exibir o vÃ­deo.
- O componente `c:dwVideo` deve estar configurado para interpretar os parÃ¢metros de entrada e exibir o vÃ­deo correspondente ao ativo.

Este fluxo Ã© uma soluÃ§Ã£o simples de apresentaÃ§Ã£o de vÃ­deo, integrada ao Salesforce, que pode ser utilizado em pÃ¡ginas ou outros processos automatizados para fornecer informaÃ§Ãµes visuais de forma rÃ¡pida e eficiente.

Flow: DWLeadAfterFlowCreateAtribuirProprietario

DescriÃ§Ã£o
O Flow `DWLeadAfterFlowCreateAtribuirProprietario` Ã© responsÃ¡vel por automatizar a atribuiÃ§Ã£o de proprietÃ¡rio de um Lead apÃ³s sua criaÃ§Ã£o ou atualizaÃ§Ã£o, especialmente quando o Lead foi criado via integraÃ§Ã£o e possui um proprietÃ¡rio que comeÃ§a com o prefixo '00G' (indicando um usuÃ¡rio interno). O objetivo principal Ã© garantir que Leads criados por integraÃ§Ã£o sejam atribuÃ­dos corretamente, passando pelo processo de perfil de qualificaÃ§Ã£o.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Executar apÃ³s a atualizaÃ§Ã£o de registros Lead.
- Verificar se o Lead foi criado via integraÃ§Ã£o (nÃ£o via interface).
- Se o proprietÃ¡rio do Lead comeÃ§ar com '00G', passar o Lead para um subfluxo que atribui um novo proprietÃ¡rio baseado no perfil de qualificaÃ§Ã£o.
- Atualizar o Lead com o novo proprietÃ¡rio atribuÃ­do.

Etapas Principais
1. Start â€“ Disparo apÃ³s a atualizaÃ§Ã£o de um Lead, com filtro para Lead criado via integraÃ§Ã£o e proprietÃ¡rio interno.
2. Subflow `DW_SubflowAtribuirProprietarioPeloPerfilQualificacao` â€“ Executa a lÃ³gica de atribuiÃ§Ã£o de proprietÃ¡rio com base no perfil de qualificaÃ§Ã£o.
3. Assign â€“ Atualiza o Lead com o ID do Lead retornado pelo subfluxo.
4. Record Update â€“ Atualiza o Lead no Salesforce com o novo proprietÃ¡rio atribuÃ­do.

VariÃ¡veis
- `$Record` (Lead) â€“ Registro de Lead que disparou o Flow.
- `leadToUpdate` (SObject) â€“ VariÃ¡vel de saÃ­da do subfluxo, contendo o Lead atualizado com o novo proprietÃ¡rio.

ConsideraÃ§Ãµes
- O Flow Ã© disparado apÃ³s a atualizaÃ§Ã£o do Lead (`RecordAfterSave`).
- O filtro na etapa de inÃ­cio garante que o Flow sÃ³ execute para Leads criados via integraÃ§Ã£o (`DWCriadoViaIntegracao__c` falso) e cujo proprietÃ¡rio comeÃ§a com '00G' (indicando um usuÃ¡rio interno).
- O Flow chama um subfluxo (`DW_SubflowAtribuirProprietarioPeloPerfilQualificacao`) que contÃ©m a lÃ³gica de seleÃ§Ã£o do novo proprietÃ¡rio com base no perfil de qualificaÃ§Ã£o.
- ApÃ³s o subfluxo, o Lead atualizado Ã© salvo de volta no Salesforce.
- O Flow estÃ¡ configurado para rodar na ordem de disparo 300, garantindo sua execuÃ§Ã£o apÃ³s outros processos de disparo.

Este fluxo garante uma atribuiÃ§Ã£o automatizada e inteligente de proprietÃ¡rios de Leads, otimizando a gestÃ£o de leads provenientes de integraÃ§Ãµes e garantindo que eles sejam direcionados ao perfil adequado para qualificaÃ§Ã£o.

Flow: DWVeiculonteresseAfterFlowAtribuirVeiculoInteresseLead

DescriÃ§Ã£o
O Flow `DWVeiculonteresseAfterFlowAtribuirVeiculoInteresseLead` Ã© um Flow de lanÃ§amento automÃ¡tico (auto-launched) que Ã© acionado apÃ³s a criaÃ§Ã£o de um registro do objeto `VeiculoInteresse__c`. Sua finalidade principal Ã© atribuir o veÃ­culo de interesse ao Lead relacionado, atualizando o campo `DWVeiculoInteresse__c` no Lead com o ID do registro de interesse criado.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- ApÃ³s a criaÃ§Ã£o de um registro de `VeiculoInteresse__c`, verificar se o Lead relacionado estÃ¡ presente.
- Se o Lead estiver presente, atualizar o campo `DWVeiculoInteresse__c` do Lead com o ID do registro de interesse criado.

Etapas Principais
1. Start â€“ Disparado apÃ³s a criaÃ§Ã£o de um registro de `VeiculoInteresse__c`.
   - CondiÃ§Ã£o: o registro Ã© novo (`ISNEW()`) e o campo relacionado ao Lead (`Lead__c`) nÃ£o estÃ¡ vazio.
2. Record Update â€“ Atualiza o Lead relacionado.
   - LocalizaÃ§Ã£o: no objeto Lead.
   - Filtro: somente o Lead cujo ID seja igual ao valor de `$Record.Lead__c`.
   - AÃ§Ã£o: atribui o ID do registro de interesse (`$Record.Id`) ao campo `DWVeiculoInteresse__c` do Lead.

VariÃ¡veis
- `$Record` (padrÃ£o) â€“ ReferÃªncia ao registro de `VeiculoInteresse__c` que disparou o Flow.
- `Lead__c` â€“ Campo no `VeiculoInteresse__c` que referencia o Lead relacionado.
- `DWVeiculoInteresse__c` â€“ Campo no Lead que serÃ¡ atualizado com o ID do interesse de veÃ­culo.

ConsideraÃ§Ãµes
- Este Flow Ã© acionado automaticamente apÃ³s a criaÃ§Ã£o de um registro de `VeiculoInteresse__c`.
- A condiÃ§Ã£o `ISNEW()` garante que a atualizaÃ§Ã£o ocorra apenas na primeira criaÃ§Ã£o do registro.
- A verificaÃ§Ã£o de `NOT(ISBLANK({!$Record.Lead__c}))` assegura que o Lead relacionado exista antes de tentar atualizar.
- O Flow Ã© configurado para rodar no modo de layout de canvas automÃ¡tico (`AUTO_LAYOUT_CANVAS`), facilitando sua manutenÃ§Ã£o visual.
- O Flow deve estar ativo para garantir que a atribuiÃ§Ã£o seja feita corretamente apÃ³s cada criaÃ§Ã£o de interesse de veÃ­culo.

Este fluxo automatiza a associaÃ§Ã£o do interesse de veÃ­culo ao Lead, garantindo que o relacionamento seja atualizado imediatamente apÃ³s a criaÃ§Ã£o do interesse, facilitando processos posteriores de anÃ¡lise ou automaÃ§Ã£o.

# Flow: DWOportunidadeFlowBeforeAtribuirCatologoPrecoPadraoCriacaoOpp

## DescriÃ§Ã£o
Este Flow automatizado Ã© acionado antes da criaÃ§Ã£o de uma oportunidade (`RecordBeforeSave`) e tem como objetivo atribuir um catÃ¡logo de preÃ§o padrÃ£o Ã  oportunidade, caso exista um catÃ¡logo padrÃ£o configurado. Ele busca o catÃ¡logo padrÃ£o do objeto `Pricebook2` e, se encontrado, atribui seu ID ao campo `Pricebook2Id` da oportunidade.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

## Objetivo
- Buscar o catÃ¡logo de preÃ§o padrÃ£o configurado no sistema.
- Verificar se hÃ¡ um catÃ¡logo padrÃ£o disponÃ­vel.
- Caso exista, atribuir o ID do catÃ¡logo ao campo `Pricebook2Id` da oportunidade que estÃ¡ sendo criada.

## Etapas Principais
1. **Get Records â€“ Obter catÃ¡logo padrÃ£o (`Pricebook2`)**
   - Consulta o primeiro registro do objeto `Pricebook2` onde `IsStandard` Ã© verdadeiro.
   - Ordena por `Name` em ordem ascendente.
   - Se encontrado, armazena o registro na variÃ¡vel `CatalogoPadraoS`.
2. **Decision â€“ Verificar se o catÃ¡logo padrÃ£o foi encontrado (`BuscouCatologo`)**
   - Verifica se a variÃ¡vel `CatalogoPadraoS` nÃ£o Ã© nula.
   - Se verdadeiro, prossegue para a atribuiÃ§Ã£o.
3. **Assignment â€“ Atribuir o catÃ¡logo padrÃ£o ao campo `Pricebook2Id` da oportunidade (`AttrCatologoPrecoPadrao`)**
   - Atribui o ID do catÃ¡logo padrÃ£o (`CatalogoPadraoS.Id`) ao campo `Pricebook2Id` da oportunidade que estÃ¡ sendo criada.

## VariÃ¡veis
- **CatalogoPadraoS (Record Variable)**: Armazena o registro do catÃ¡logo padrÃ£o obtido na consulta.
- **$Record (Record Variable)**: Representa a oportunidade atualmente em criaÃ§Ã£o, acessÃ­vel no contexto do Flow.
- **AttrCatologoPrecoPadrao (Assignment)**: VariÃ¡vel de atribuiÃ§Ã£o que define o valor do campo `Pricebook2Id` na oportunidade.

## ConsideraÃ§Ãµes
- Este Flow Ã© acionado automaticamente antes da gravaÃ§Ã£o (`RecordBeforeSave`) de uma nova oportunidade.
- Garante que, ao criar uma oportunidade, ela jÃ¡ venha associada ao catÃ¡logo de preÃ§o padrÃ£o, se disponÃ­vel.
- A consulta busca o primeiro catÃ¡logo padrÃ£o ativo (`IsStandard = true`) ordenado por nome, garantindo uma seleÃ§Ã£o consistente.

## Resumo
Este Flow automatiza a associaÃ§Ã£o do catÃ¡logo de preÃ§o padrÃ£o na criaÃ§Ã£o de oportunidades, facilitando a gestÃ£o de preÃ§os e garantindo consistÃªncia na atribuiÃ§Ã£o de catÃ¡logos padrÃ£o.

Flow: DWOportunidadeSubflowCriarLeadApos12Meses

DescriÃ§Ã£o
O Flow `DWOportunidadeSubflowCriarLeadApos12Meses` Ã© um fluxo autolanÃ§ado responsÃ¡vel por atualizar o campo `DWDataCriacaoFutura__c` na oportunidade, adicionando 12 meses Ã  data de criaÃ§Ã£o da oportunidade. Este fluxo Ã© utilizado em cenÃ¡rios onde, apÃ³s uma perda de oportunidade com motivo "Interesse futuro" e submotivo "12 meses", uma aÃ§Ã£o adicional Ã© disparada para criar um lead futuro.

Tipo
- AutoLanÃ§ado (sem interface de usuÃ¡rio)

Objetivo
- Consultar uma oportunidade especÃ­fica pelo ID.
- Calcular uma data futura adicionando 12 meses Ã  data de criaÃ§Ã£o da oportunidade.
- Atualizar o campo `DWDataCriacaoFutura__c` com essa data futura.
- Caso ocorra erro na atualizaÃ§Ã£o, postar uma mensagem de erro no chatter.

Etapas Principais
1. **Get Records (`OportunidadeS`)** â€“ Busca a oportunidade pelo ID fornecido na variÃ¡vel de entrada `recordId`.
2. **Assignment (`dataMais12`)** â€“ Calcula a data futura adicionando 12 meses Ã  data de criaÃ§Ã£o da oportunidade usando a fÃ³rmula `ADDMONTHS({!OportunidadeS.CreatedDate}, 12)`.
3. **Update Records (`Atualiza_data_futura_12_meses`)** â€“ Atualiza o campo `DWDataCriacaoFutura__c` da oportunidade com a data calculada.
4. **Action Call (`msg_erro`)** â€“ Caso ocorra erro na atualizaÃ§Ã£o, posta uma mensagem de erro no chatter informando o problema.

VariÃ¡veis
- `recordId` (String, Input) â€“ ID da oportunidade a ser processada. Ã‰ passado ao fluxo para identificar qual oportunidade serÃ¡ atualizada.

ConsideraÃ§Ãµes
- Este fluxo deve ser iniciado com o ID da oportunidade que se deseja processar.
- A fÃ³rmula `ADDMONTHS` Ã© utilizada para calcular a data futura, garantindo que a data seja exatamente 12 meses apÃ³s a data de criaÃ§Ã£o.
- Caso ocorra uma falha na atualizaÃ§Ã£o, uma mensagem de erro Ã© postada no chatter, facilitando o diagnÃ³stico do problema.
- O fluxo Ã© configurado para ser executado automaticamente, sem necessidade de interaÃ§Ã£o do usuÃ¡rio.

Este fluxo Ã© parte de um processo automatizado que gerencia oportunidades com motivos especÃ­ficos de perda, garantindo que aÃ§Ãµes futuras, como a criaÃ§Ã£o de leads, sejam programadas corretamente apÃ³s o perÃ­odo definido.

Flow: DW - Screen Flow - Oportunidade - InformaÃ§Ãµes do sistema da oportunidade

DescriÃ§Ã£o
O Flow `DW - Screen Flow - Oportunidade - InformaÃ§Ãµes do sistema da oportunidade` Ã© uma automaÃ§Ã£o de tela (Screen Flow) que tem como objetivo exibir informaÃ§Ãµes detalhadas de uma oportunidade especÃ­fica no Salesforce. Ele busca os dados da oportunidade pelo ID fornecido, exibe esses dados em uma tela de leitura, permitindo ao usuÃ¡rio visualizar informaÃ§Ãµes relevantes do sistema relacionadas Ã  oportunidade.

Tipo
- Screen Flow (Flow com interface de usuÃ¡rio)

Objetivo
- Consultar uma oportunidade especÃ­fica com base no ID recebido.
- Exibir informaÃ§Ãµes detalhadas dessa oportunidade em uma tela de leitura.
- Permitir navegaÃ§Ã£o de volta ou finalizaÃ§Ã£o apÃ³s visualizaÃ§Ã£o.

Etapas Principais
1. Start â€“ InÃ­cio do Flow, recebendo o ID da oportunidade como parÃ¢metro de entrada.
2. Record Lookup â€“ Consulta a oportunidade pelo ID fornecido (`recordId`).
3. Screen â€“ Exibe uma tela com detalhes da oportunidade, incluindo campos como CreatedById, LastModifiedById, DWNumeroAtendimento__c, DWProposta__c, DWNumeroPedido__c, DWFluig__c, StatusMinuta__c, StatusFluig__c, DWMensagemIntegracao__c.
4. Fim â€“ Encerramento do Flow apÃ³s a visualizaÃ§Ã£o.

VariÃ¡veis
- recordId (String, Input) â€“ ID da oportunidade a ser consultada, passado ao iniciar o Flow.

ConfiguraÃ§Ãµes e Detalhes TÃ©cnicos
- O Flow Ã© configurado para ser iniciado com o parÃ¢metro `recordId`, que deve ser passado de uma aÃ§Ã£o ou componente que conhece o ID da oportunidade.
- A consulta (`Obter oportunidade`) busca o primeiro registro que corresponda ao ID fornecido, garantindo que apenas uma oportunidade seja carregada.
- A tela de exibiÃ§Ã£o (`InformaÃ§Ãµes do sistema da oportunidade`) apresenta os campos especificados de forma readonly, utilizando um componente personalizado (`c:sobjectLayoutSection`) para layout.
- O Flow Ã© configurado para permitir navegaÃ§Ã£o de volta (`allowBack`), finalizaÃ§Ã£o (`allowFinish`) e pausa (`allowPause`), oferecendo flexibilidade ao usuÃ¡rio.

ConsideraÃ§Ãµes
- Este Flow deve ser acionado por uma aÃ§Ã£o que forneÃ§a o `recordId` da oportunidade desejada, como um botÃ£o de detalhe ou uma chamada via Apex.
- Os campos exibidos na tela sÃ£o especÃ­ficos e podem ser ajustados conforme necessidade, incluindo campos personalizados relacionados ao sistema da oportunidade.
- O Flow estÃ¡ ativo e pronto para uso em ambientes Lightning, com layout de canvas em modo de layout automÃ¡tico (`AUTO_LAYOUT_CANVAS`).

Este documento fornece uma visÃ£o tÃ©cnica detalhada do Flow, facilitando sua manutenÃ§Ã£o, integraÃ§Ã£o ou customizaÃ§Ã£o futura.

Flow: DWOpportunityBeforeAvancaFaseQuandoCodigoFluigPreenchido

DescriÃ§Ã£o
O Flow `DWOpportunityBeforeAvancaFaseQuandoCodigoFluigPreenchido` Ã© um Flow autolanÃ§ado que Ã© acionado antes de salvar registros de oportunidade. Sua funÃ§Ã£o principal Ã© verificar se o campo personalizado `DWFluig__c` foi alterado e nÃ£o estÃ¡ vazio, alÃ©m de garantir que a fase da oportunidade seja "Minuta". Quando essas condiÃ§Ãµes sÃ£o atendidas, o Flow atualiza a fase da oportunidade para "Fluig", indicando que ela avanÃ§ou para o prÃ³ximo estÃ¡gio no processo de integraÃ§Ã£o com o sistema Fluig.

Tipo
- AutoLanÃ§ado (Record-Triggered Flow no modo Before Save)

Objetivo
- Detectar alteraÃ§Ãµes no campo `DWFluig__c` na oportunidade.
- Garantir que a oportunidade esteja na fase "Minuta".
- Atualizar a fase da oportunidade para "Fluig" quando as condiÃ§Ãµes forem atendidas.

Etapas Principais
1. **InÃ­cio (Start)**: O Flow Ã© acionado antes de salvar uma oportunidade, apenas se:
   - O campo `DWFluig__c` foi alterado (`IsChanged = true`).
   - O campo `DWFluig__c` nÃ£o estÃ¡ nulo (`IsNull = false`).
   - A fase atual (`StageName`) Ã© "Minuta".
2. **AtualizaÃ§Ã£o de Registro (Record Update)**: Se todas as condiÃ§Ãµes forem verdadeiras, o Flow atualiza o campo `StageName` da oportunidade para "Fluig".

VariÃ¡veis e CondiÃ§Ãµes
- **Filtro de disparo**:
  - `DWFluig__c` foi alterado (`IsChanged = true`)
  - `DWFluig__c` nÃ£o estÃ¡ vazio (`IsNull = false`)
  - `StageName` Ã© igual a "Minuta"
- **AÃ§Ã£o de atualizaÃ§Ã£o**:
  - Atualiza o campo `StageName` para "Fluig" na oportunidade que disparou o Flow.

ConsideraÃ§Ãµes
- Este Flow Ã© acionado automaticamente antes de uma oportunidade ser salva, garantindo que a fase seja atualizada de forma automÃ¡tica quando o campo `DWFluig__c` for preenchido ou alterado.
- Ã‰ importante que o campo `DWFluig__c` seja um campo personalizado que indica a integraÃ§Ã£o com o sistema Fluig.
- O Flow foi configurado para rodar no modo de layout automÃ¡tico (`AUTO_LAYOUT_CANVAS`) e utiliza o builder LightningFlowBuilder.
- O fluxo Ã© ativo e deve estar habilitado para funcionar corretamente em produÃ§Ã£o.

Este fluxo automatiza a transiÃ§Ã£o de fases na oportunidade com base na alteraÃ§Ã£o de um campo especÃ­fico, facilitando a integraÃ§Ã£o e o controle de processos internos.

# Flow: DWOpportunityPreencherLojaOrigemEstoque

## DescriÃ§Ã£o
O Flow `DWOpportunityPreencherLojaOrigemEstoque` Ã© um Flow autolanÃ§ado (sem interface de usuÃ¡rio) que automatiza a atualizaÃ§Ã£o do campo `DWOrigemEstoquePesquisa__c` na oportunidade. Ele Ã© acionado apÃ³s a gravaÃ§Ã£o de registros de oportunidade que atendem a determinados critÃ©rios, garantindo que a loja de origem do estoque seja preenchida corretamente com base na loja vinculada ao estoque relacionado, desde que o estÃ¡gio da oportunidade nÃ£o seja "Perdido" e o campo `Estoque__c` tenha sido alterado.

## Tipo
- Autolaunched Flow (sem interface de usuÃ¡rio)

## Objetivo
- Atualizar o campo `DWOrigemEstoquePesquisa__c` na oportunidade com o valor de `Estoque__r.DWLojaVeiculo__c`, sempre que o campo `Estoque__c` for alterado e o estÃ¡gio da oportunidade nÃ£o for "Perdido".

## Etapas Principais
1. **Start** â€“ Disparo do Flow apÃ³s a gravaÃ§Ã£o de uma oportunidade, com filtros:
   - O campo `Estoque__c` foi alterado (`IsChanged`).
   - O estÃ¡gio (`StageName`) nÃ£o Ã© "Perdido".
   
2. **Record Update** â€“ Atualiza o campo `DWOrigemEstoquePesquisa__c` na oportunidade com o valor de `Estoque__r.DWLojaVeiculo__c`.

## Detalhes TÃ©cnicos
- **Disparo**: O Flow Ã© acionado apÃ³s a gravaÃ§Ã£o (`RecordAfterSave`) de uma oportunidade que atende aos filtros.
- **Filtros de disparo**:
  - `Estoque__c` foi alterado.
  - `StageName` nÃ£o Ã© igual a "Perdido".
- **AÃ§Ã£o de atualizaÃ§Ã£o**:
  - Atualiza o campo `DWOrigemEstoquePesquisa__c` na oportunidade com o valor de `Estoque__r.DWLojaVeiculo__c`.
  - Essa atualizaÃ§Ã£o ocorre na oportunidade que disparou o Flow (`$Record`).

## ConsideraÃ§Ãµes
- Este Flow Ã© Ãºtil para garantir que a loja de origem do estoque esteja sempre sincronizada com a loja vinculada ao estoque, evitando inconsistÃªncias.
- Deve ser utilizado em conjunto com processos que alterem o campo `Estoque__c` ou o estÃ¡gio da oportunidade.
- O Flow estÃ¡ ativo e pronto para ser acionado automaticamente apÃ³s as atualizaÃ§Ãµes de registros de oportunidade que atendam aos critÃ©rios definidos.

Flow: DWProdutoOportunidadeFlowBeforeAtribuicaoDescontoTotalProdutoCortesia

DescriÃ§Ã£o
O Flow `DWProdutoOportunidadeFlowBeforeAtribuicaoDescontoTotalProdutoCortesia` Ã© uma automaÃ§Ã£o do tipo AutoLaunched que Ã© acionada antes de salvar um registro de OpportunityLineItem. Sua finalidade principal Ã© verificar se o produto associado ao item de oportunidade Ã© uma cortesia e, se for, atribuir um desconto fixo de 100% ao produto.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Antes de criar ou atualizar um OpportunityLineItem, verificar se o produto Ã© uma cortesia.
- Caso seja uma cortesia, atribuir um desconto de 100% ao campo `$Record.Discount`.

Etapas Principais
1. Start â€“ Disparado ao criar um OpportunityLineItem, antes de salvar, se a condiÃ§Ã£o de produto cortesia for atendida.
2. CondiÃ§Ã£o de filtro â€“ Verifica se o nome do produto contÃ©m a palavra `(CORTESIA)`.
3. Assignment â€“ Se a condiÃ§Ã£o for verdadeira, atribui o valor `100.0` ao campo `$Record.Discount`.

VariÃ¡veis e CondiÃ§Ãµes
- `$Record` â€“ ReferÃªncia ao OpportunityLineItem que estÃ¡ sendo criado ou atualizado.
- Filtro de disparo (`filterFormula`): `CONTAINS({!$Record.PricebookEntry.Product2.Name}, '(CORTESIA)')`
  - Este filtro garante que o Flow sÃ³ seja acionado para produtos cujo nome contenha `(CORTESIA)`.
- AtribuiÃ§Ã£o:
  - `AttrDescontoProdutoOportunidade`: A variÃ¡vel de atribuiÃ§Ã£o que define o desconto.
  - `$Record.Discount`: Campo do OpportunityLineItem onde o desconto serÃ¡ aplicado.
  - Valor atribuÃ­do: `100.0` (representando 100%).

ConsideraÃ§Ãµes
- Este Flow Ã© acionado automaticamente antes de salvar registros de OpportunityLineItem, garantindo que produtos de cortesia recebam o desconto total sem intervenÃ§Ã£o manual.
- A condiÃ§Ã£o de filtro Ã© sensÃ­vel ao nome do produto, portanto, Ã© importante que produtos de cortesia tenham `(CORTESIA)` no nome.
- O Flow estÃ¡ ativo e configurado para o ambiente padrÃ£o (`Default`).
- O fluxo Ã© compatÃ­vel com a versÃ£o API 63.0 do Salesforce.

Resumo
Este Flow automatiza a aplicaÃ§Ã£o de um desconto de 100% em produtos de cortesia durante a criaÃ§Ã£o de itens de oportunidade, garantindo consistÃªncia e eficiÃªncia no processo de vendas.

Flow: DW_User_AfterFlow_NotificarDisponibilidade

DescriÃ§Ã£o
O Flow `DW_User_AfterFlow_NotificarDisponibilidade` Ã© responsÃ¡vel por monitorar alteraÃ§Ãµes no campo `Indisponivel__c` do objeto User. Quando um usuÃ¡rio torna-se indisponÃ­vel, o Flow verifica se hÃ¡ um gerente associado ao usuÃ¡rio e, se houver, envia uma notificaÃ§Ã£o personalizada ao gerente informando sobre a disponibilidade do usuÃ¡rio.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Detectar mudanÃ§as no campo `Indisponivel__c` do usuÃ¡rio.
- Confirmar se o usuÃ¡rio possui gerente atribuÃ­do.
- Obter o tipo de notificaÃ§Ã£o personalizada.
- Enviar uma notificaÃ§Ã£o ao gerente do usuÃ¡rio, caso aplicÃ¡vel.

Etapas Principais
1. Start â€“ Disparado apÃ³s a atualizaÃ§Ã£o do registro User, quando o campo `Indisponivel__c` muda de `false` para `true`.
2. Get Records (`notificacaoPersonalizada`) â€“ ObtÃ©m o tipo de notificaÃ§Ã£o personalizada do objeto `CustomNotificationType` com o DeveloperName `Default`.
3. Decision (`EncontrouNotificacaoPersonalizada`) â€“ Verifica se a notificaÃ§Ã£o personalizada foi encontrada.
4. Decision (`UsuarioPossuiGerenteNotificar`) â€“ Verifica se o usuÃ¡rio possui um gerente (`ManagerId` nÃ£o nulo).
5. Assignment (`AtribuirIdGerenteColecao`) â€“ Adiciona o ID do gerente Ã  coleÃ§Ã£o `gerenteIds`.
6. Action (`EnviarNotificacaoGerente`) â€“ Envia uma notificaÃ§Ã£o personalizada ao gerente, usando o tipo de notificaÃ§Ã£o obtido e uma mensagem gerada dinamicamente.

VariÃ¡veis
- gerenteIds (String Collection) â€“ ColeÃ§Ã£o de IDs de gerentes a serem notificados.
- notificacaoPersonalizada (Record) â€“ Registro do tipo de notificaÃ§Ã£o personalizada.
- message (Formula String) â€“ Mensagem gerada dinamicamente para a notificaÃ§Ã£o, informando a disponibilidade do usuÃ¡rio.

ConsideraÃ§Ãµes
- O Flow Ã© acionado apenas quando o campo `Indisponivel__c` do usuÃ¡rio Ã© alterado de `false` para `true`.
- A notificaÃ§Ã£o Ã© enviada somente se o usuÃ¡rio possuir um gerente atribuÃ­do.
- Ã‰ importante que o DeveloperName do tipo de notificaÃ§Ã£o seja `Default`.
- O Flow utiliza uma aÃ§Ã£o personalizada (`customNotificationAction`) para enviar notificaÃ§Ãµes, que deve estar configurada previamente no Salesforce.
- O Flow Ã© configurado para rodar na versÃ£o API 63.0 e no modo Lightning com layout automÃ¡tico.

Este fluxo automatiza a comunicaÃ§Ã£o de disponibilidade dos usuÃ¡rios, garantindo que os gerentes sejam informados de forma eficiente sempre que um usuÃ¡rio se tornar indisponÃ­vel.

Flow: OportunidadeFlowBeforeUpdateAtribuirDataFechamentoOportunidade.flow

DescriÃ§Ã£o
O Flow `OportunidadeFlowBeforeUpdateAtribuirDataFechamentoOportunidade` Ã© um fluxo automatizado do tipo AutoLaunched que Ã© acionado antes de salvar registros de oportunidade. Sua principal funÃ§Ã£o Ã© atribuir uma nova data de fechamento e ajustar o valor (amount) da oportunidade antes que ela seja salva no banco de dados.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio, acionado por evento de gravaÃ§Ã£o de registro)

Objetivo
- Atualizar a data de fechamento (`CloseDate`) da oportunidade para 10 dias apÃ³s a data atual.
- Zerar o valor (`Amount`) da oportunidade.

Etapas Principais
1. **DefiniÃ§Ã£o de FÃ³rmula (`add10Dias`)** â€“ Calcula uma data que Ã© 10 dias apÃ³s a data atual do fluxo (`$Flow.CurrentDate`).
2. **AtribuiÃ§Ã£o (`AttrDataFechamentoAmount`)** â€“ 
   - Atribui a data de fechamento da oportunidade (`$Record.CloseDate`) ao valor da fÃ³rmula `add10Dias`.
   - Zera o valor da oportunidade (`$Record.Amount`) para 0.0.

VariÃ¡veis e Elementos
- **FÃ³rmula (`add10Dias`)**: 
  - Tipo: Date
  - ExpressÃ£o: `{!$Flow.CurrentDate} + 10`
  - DescriÃ§Ã£o: Calcula a data que serÃ¡ 10 dias apÃ³s a data atual do fluxo.
- **AtribuiÃ§Ã£o (`AttrDataFechamentoAmount`)**:
  - `assignToReference`: `$Record.CloseDate`
  - `operator`: Assign
  - `value`: FÃ³rmula `add10Dias`
  
  - `assignToReference`: `$Record.Amount`
  - `operator`: Assign
  - `value`: NÃºmero `0.0`

ConsideraÃ§Ãµes
- Este fluxo Ã© acionado automaticamente antes de uma oportunidade ser criada ou atualizada, especificamente no evento `RecordBeforeSave`.
- A data de fechamento Ã© ajustada para 10 dias apÃ³s a data atual do sistema, garantindo que o campo `CloseDate` seja atualizado automaticamente.
- O valor (`Amount`) Ã© zerado toda vez que o fluxo Ã© acionado, o que pode ser Ãºtil para processos que requerem esse comportamento padrÃ£o.
- O fluxo deve estar ativo para garantir que as regras sejam aplicadas corretamente durante o ciclo de vida do registro.

ObservaÃ§Ã£o
- O fluxo utiliza a versÃ£o API 63.0 do Salesforce.
- EstÃ¡ configurado para rodar no ambiente padrÃ£o (`Default`) e no modo de layout automÃ¡tico (`AUTO_LAYOUT_CANVAS`).

Flow: DWLeadAfterUpdateAtualizaCamposContaQuandoConvertido

DescriÃ§Ã£o
O Flow `DWLeadAfterUpdateAtualizaCamposContaQuandoConvertido` Ã© um fluxo automatizado que Ã© acionado apÃ³s a atualizaÃ§Ã£o de um Lead, especificamente quando ele Ã© convertido. Sua principal funÃ§Ã£o Ã© atualizar os campos da Conta associada ao Lead convertido, alÃ©m de registrar aÃ§Ãµes no Chatter em caso de erro.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Detectar quando um Lead Ã© convertido.
- Consultar a Conta vinculada ao Lead convertido.
- Atualizar os campos da Conta com informaÃ§Ãµes do Lead.
- Publicar uma mensagem no Chatter caso ocorra um erro durante a atualizaÃ§Ã£o.

Etapas Principais
1. Start â€“ Disparado apÃ³s a atualizaÃ§Ã£o de um Lead, verificando se o Lead foi convertido (`IsConverted = true`).
2. Record Lookup (`ContaS`) â€“ Busca a Conta associada ao Lead convertido, usando o campo `ConvertedAccountId`.
3. Decision (`BuscouContaS`) â€“ Verifica se a Conta foi encontrada.
   - Se sim, passa para a etapa de atualizaÃ§Ã£o.
   - Se nÃ£o, termina o fluxo.
4. Assignment (`AttrCamposConta`) â€“ Atribui valores dos campos do Lead aos campos correspondentes na Conta.
5. Record Update (`AtualizarConta`) â€“ Atualiza a Conta com os novos valores.
6. Record Update (`DesligaBypass`) â€“ Atualiza um registro de bypass para desativar regras de conversÃ£o, caso necessÃ¡rio.
7. Fault Handling (`Publica_erro_chatter`) â€“ Caso ocorra erro na atualizaÃ§Ã£o, publica uma mensagem no Chatter informando o problema.

VariÃ¡veis
- `$Record` (padrÃ£o) â€“ Lead que disparou o fluxo.
- `ContaS` â€“ VariÃ¡vel de registro do tipo Conta, usada para armazenar a Conta vinculada ao Lead.
- Outros nomes internos de variÃ¡veis de fluxo nÃ£o explicitamente nomeados, utilizados para controle de fluxo e atribuiÃ§Ãµes.

ConsideraÃ§Ãµes
- O fluxo Ã© acionado apÃ³s a atualizaÃ§Ã£o de um Lead (`RecordAfterSave`) e somente quando o Lead Ã© convertido (`IsConverted = true`).
- A consulta busca apenas a primeira Conta vinculada ao Lead convertido.
- Caso a Conta seja encontrada, seus campos sÃ£o atualizados com informaÃ§Ãµes do Lead, como Email, MobilePhone, Phone, LeadSource e Midia__c.
- Se ocorrer erro na atualizaÃ§Ã£o da Conta, uma mensagem de erro Ã© publicada no Chatter usando a aÃ§Ã£o `chatterPost`.
- O fluxo tambÃ©m manipula um registro de bypass (`BypassConversao__c`) para controlar regras de conversÃ£o, ativando ou desativando conforme necessÃ¡rio.

Este fluxo automatiza de forma eficiente a sincronizaÃ§Ã£o de informaÃ§Ãµes entre Leads convertidos e suas Contas, garantindo consistÃªncia de dados e registro de erros para auditoria ou suporte.

Flow: DW_ScreenFlow_Layout_DetalhesPessoaJuridica

DescriÃ§Ã£o
O Flow `DW_ScreenFlow_Layout_DetalhesPessoaJuridica` Ã© um fluxo de tela (Screen Flow) que exibe detalhes sobre uma pessoa jurÃ­dica, especificamente informaÃ§Ãµes relacionadas Ã  conta no Salesforce. Ele Ã© utilizado para fornecer uma interface visual ao usuÃ¡rio para visualizar ou editar detalhes especÃ­ficos de uma conta jurÃ­dica.

Tipo
- Screen Flow (Fluxo de Tela)

Objetivo
- Apresentar informaÃ§Ãµes detalhadas sobre uma conta jurÃ­dica, incluindo campos como FundaÃ§Ã£o e InscriÃ§Ã£o Estadual, em uma tela personalizada.
- Permitir navegaÃ§Ã£o de volta e finalizaÃ§Ã£o do fluxo, com suporte a pausa e retomada.

Etapas Principais
1. Start â€“ InÃ­cio do fluxo, recebendo o parÃ¢metro `recordId` que identifica a conta a ser exibida.
2. Screen â€“ Exibe uma tela personalizada intitulada "Detalhes sobre a pessoa jurÃ­dica", contendo um componente de layout de seÃ§Ã£o que mostra os campos `DWFundacao__c` e `DWInscricaoEstadual__c` da conta.
3. Encerramento â€“ O fluxo termina apÃ³s a visualizaÃ§Ã£o, com opÃ§Ãµes de navegaÃ§Ã£o para voltar ou finalizar.

Componentes e ConfiguraÃ§Ãµes
- Tela (`Informa_es_sobre_a_conta`): Utiliza um componente de layout de seÃ§Ã£o (`c:sobjectLayoutSection`) para exibir os campos especÃ­ficos da conta.
- ParÃ¢metros de entrada: Recebe o `recordId` da conta que serÃ¡ exibida.
- NavegaÃ§Ã£o: Permite voltar (`allowBack`), finalizar (`allowFinish`) e pausar (`allowPause`) o fluxo.

VariÃ¡veis
- recordId (String, Input): ID da conta que serÃ¡ exibida na tela. Ã‰ uma variÃ¡vel de entrada obrigatÃ³ria.

ConfiguraÃ§Ãµes Adicionais
- VersÃ£o API: 63.0
- Label do fluxo: "DW - Screen Flow - Layout - Detalhes sobre a pessoa jurÃ­dica"
- Label da tela: "Detalhes sobre a pessoa jurÃ­dica"
- LocalizaÃ§Ã£o dos elementos no editor: inÃ­cio na coordenada (50, 0), a tela na coordenada (176, 134).
- Estilo de construÃ§Ã£o: LightningFlowBuilder com modo de layout automÃ¡tico (`AUTO_LAYOUT_CANVAS`).

ConsideraÃ§Ãµes
- Este fluxo deve ser iniciado com uma variÃ¡vel `recordId` vÃ¡lida, que representa a conta jurÃ­dica a ser visualizada.
- Pode ser integrado a outros processos ou acessado via botÃµes ou links personalizados para facilitar a visualizaÃ§Ã£o de detalhes especÃ­ficos de uma conta jurÃ­dica.
- O componente de layout de seÃ§Ã£o (`c:sobjectLayoutSection`) deve estar previamente configurado para exibir os campos `DWFundacao__c` e `DWInscricaoEstadual__c` da conta.

Flow: DWAtivoAfterFlowAttMarcaComercializada.flow

DescriÃ§Ã£o
O Flow `DWAtivoAfterFlowAttMarcaComercializada` Ã© um fluxo automatizado do tipo AutoLaunched que Ã© acionado apÃ³s a criaÃ§Ã£o ou atualizaÃ§Ã£o de registros do objeto Asset. Sua finalidade principal Ã© verificar se hÃ¡ uma marca associada ao ativo e, com base nisso, atualizar o campo de compartilhamento de marca comercializada.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Executar apÃ³s a gravaÃ§Ã£o de registros do objeto Asset.
- Verificar se o campo `DWMarca__c` estÃ¡ preenchido.
- Caso a marca esteja presente, determinar se hÃ¡ uma marca para compartilhar (`DWMarcaCompartilhamento__c`) diferente de `DWMarca__c`.
- Atualizar o campo `DWMarcaCompartilhamento__c` com o valor de `DWMarca__c` quando necessÃ¡rio.

Etapas Principais
1. Start â€“ Disparado apÃ³s a criaÃ§Ã£o ou atualizaÃ§Ã£o de registros do objeto Asset, apenas se o campo `DWMarca__c` nÃ£o estiver nulo.
2. Decision â€“ `ExisteMarcaCompartilhar?` â€“ Verifica se o campo `DWMarcaCompartilhamento__c` Ã© diferente de `DWMarca__c` ou estÃ¡ nulo.
3. Record Update â€“ `AtualizarMarcaComercializada` â€“ Caso a decisÃ£o seja verdadeira, atualiza o campo `DWMarcaCompartilhamento__c` com o valor de `DWMarca__c`.

VariÃ¡veis e ConfiguraÃ§Ãµes
- Objeto de disparo: Asset
- Tipo de disparo: Create e Update
- CondiÃ§Ã£o de inÃ­cio: `DWMarca__c` deve estar preenchido (nÃ£o nulo)
- DecisÃ£o `ExisteMarcaCompartilhar`:
  - CondiÃ§Ã£o 1: `$Record.DWMarcaCompartilhamento__c` diferente de `$Record.DWMarca__c`
  - CondiÃ§Ã£o 2: `$Record.DWMarcaCompartilhamento__c` Ã© nulo
  - Operador de lÃ³gica: OR (uma ou outra condiÃ§Ã£o deve ser verdadeira)
- AÃ§Ã£o de atualizaÃ§Ã£o `AtualizarMarcaComercializada`:
  - Campo atualizado: `DWMarcaCompartilhamento__c`
  - Novo valor: `$Record.DWMarca__c`

ConsideraÃ§Ãµes
- Este Flow Ã© acionado automaticamente apÃ³s a gravaÃ§Ã£o de registros do objeto Asset, garantindo que o campo de compartilhamento de marca seja atualizado corretamente quando uma marca for atribuÃ­da ou alterada.
- A lÃ³gica de decisÃ£o garante que o campo de compartilhamento seja atualizado apenas quando necessÃ¡rio, evitando atualizaÃ§Ãµes desnecessÃ¡rias.
- Ã‰ importante que o fluxo esteja ativado para que funcione corretamente apÃ³s as operaÃ§Ãµes de gravaÃ§Ã£o no objeto Asset.

Flow: DW_ReservaAuxiliar_DesvincularEstoqueOportunidades

DescriÃ§Ã£o
O Flow `DW_ReservaAuxiliar_DesvincularEstoqueOportunidades` Ã© responsÃ¡vel por desvincular o estoque das oportunidades relacionadas a um ativo especÃ­fico, quando uma reserva auxiliar de estoque Ã© criada ou atualizada com o status `CAN`. Ele busca oportunidades vinculadas ao ativo, e para cada uma delas, atribui o estoque como nulo, efetivamente desvinculando o estoque dessas oportunidades.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Monitorar registros do objeto `ReservaAuxiliar__c` com status `CAN`.
- Para cada reserva que atende aos critÃ©rios, buscar oportunidades vinculadas ao ativo (`DWAtivo__c`).
- Desvincular o estoque dessas oportunidades, atribuindo o campo `Estoque__c` como nulo.

Etapas Principais
1. Start â€“ Inicia o fluxo apÃ³s a criaÃ§Ã£o ou atualizaÃ§Ã£o de um registro `ReservaAuxiliar__c` com status `CAN`.
2. Get Records (`oportunidadesAtivoVinculado`) â€“ Busca oportunidades cujo campo `Estoque__c` seja igual ao ativo vinculado na reserva (`$Record.DWAtivo__c`).
3. Loop (`AchouOportunidades`) â€“ Itera sobre a coleÃ§Ã£o de oportunidades encontradas.
4. Assignment (`AtribuirEstoqueNuloOportunidade`) â€“ Para cada oportunidade, atribui o ID ao campo `oportunidadeDraft.Id` e define `Estoque__c` como nulo.
5. Collection â€“ Adiciona a oportunidade modificada Ã  coleÃ§Ã£o `oportunidadesAtualizacao`.
6. Update Records (`AtualizarOportunidades`) â€“ Atualiza todas as oportunidades na coleÃ§Ã£o, removendo o estoque vinculado.

VariÃ¡veis
- `oportunidadeDraft` (SObject) â€“ VariÃ¡vel temporÃ¡ria para manipular uma oportunidade individual durante o loop.
- `oportunidadesAtualizacao` (Collection de Opportunity) â€“ ColeÃ§Ã£o de oportunidades que serÃ£o atualizadas ao final do fluxo.

ConsideraÃ§Ãµes
- O fluxo Ã© acionado automaticamente apÃ³s a criaÃ§Ã£o ou atualizaÃ§Ã£o de registros `ReservaAuxiliar__c` com o campo `DWStatus__c` igual a `CAN`.
- Ã‰ importante que o campo `$Record.DWAtivo__c` esteja corretamente preenchido para que a busca pelas oportunidades seja precisa.
- O fluxo garante que todas as oportunidades vinculadas ao ativo sejam atualizadas de forma eficiente, desvinculando o estoque quando necessÃ¡rio.
- O fluxo utiliza a versÃ£o API 63.0 do Salesforce.

Este fluxo automatiza a desvinculaÃ§Ã£o de estoques de oportunidades relacionadas a ativos especÃ­ficos, facilitando a gestÃ£o de estoque e oportunidades vinculadas no Salesforce.

# Flow: DWFeedItemBeforeFlowUpdateAlterarVisibilidadePostagemChatter

## DescriÃ§Ã£o
O Flow `DWFeedItemBeforeFlowUpdateAlterarVisibilidadePostagemChatter` Ã© um Flow de lanÃ§amento automÃ¡tico (AutoLaunched) que Ã© acionado antes de salvar um registro do objeto `FeedItem`. Sua finalidade Ã© alterar a visibilidade de uma postagem no Chatter, especificamente quando a visibilidade Ã© inicialmente definida como `InternalUsers`. Quando acionado, ele ajusta a visibilidade para `AllUsers`, garantindo que a postagem seja acessÃ­vel a todos os usuÃ¡rios.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

## Objetivo
- Modificar a campo `Visibility` de uma postagem do FeedItem de `InternalUsers` para `AllUsers` antes que o registro seja salvo, garantindo maior alcance da postagem no Chatter.

## Como funciona
1. **Trigger de inÃ­cio**: O Flow Ã© disparado automaticamente antes de criar ou atualizar um registro do objeto `FeedItem`, especificamente na fase `RecordBeforeSave`.
2. **Filtro de disparo**: O Flow sÃ³ Ã© ativado se o campo `Visibility` do `FeedItem` for igual a `InternalUsers`.
3. **AÃ§Ã£o de atribuiÃ§Ã£o**: Quando acionado, o Flow altera o valor do campo `Visibility` para `AllUsers`.

## Etapas principais
- **InÃ­cio**: O Flow Ã© iniciado na criaÃ§Ã£o de um `FeedItem` cujo campo `Visibility` seja `InternalUsers`.
- **AtribuiÃ§Ã£o**: Dentro do Flow, hÃ¡ uma aÃ§Ã£o de atribuiÃ§Ã£o que define o valor do campo `$Record.Visibility` para `AllUsers`.

## VariÃ¡veis e elementos
- **$Record**: VariÃ¡vel padrÃ£o que representa o registro do `FeedItem` que estÃ¡ sendo criado ou atualizado.
- **Filtro de inÃ­cio**:
  - Objeto: `FeedItem`
  - CondiÃ§Ã£o: `Visibility` EQUALS `InternalUsers`
  - Tipo de disparo: `RecordBeforeSave` (antes de salvar o registro)
- **AtribuiÃ§Ã£o**:
  - Nome: `AttrTipoVisibilidade`
  - AÃ§Ã£o: `$Record.Visibility` â† `AllUsers`

## ConsideraÃ§Ãµes
- Este Flow deve estar ativo para garantir que toda postagem criada com visibilidade `InternalUsers` seja automaticamente alterada para `AllUsers`.
- Como Ã© um Flow de disparo antes de salvar, nÃ£o hÃ¡ necessidade de intervenÃ§Ã£o manual ou interface de usuÃ¡rio.
- O Flow Ã© configurado para rodar no ambiente padrÃ£o (`Default`) e utiliza a API versÃ£o 63.0 do Salesforce.

## Resumo
Este Flow automatiza a alteraÃ§Ã£o da visibilidade de postagens no Chatter, garantindo que postagens destinadas a usuÃ¡rios internos sejam automaticamente tornadas visÃ­veis para todos os usuÃ¡rios, promovendo maior alcance e engajamento.

Flow: DW - Ativo - Atualizar Campo Com Aviso

DescriÃ§Ã£o
O Flow `DW - Ativo - Atualizar Campo Com Aviso` Ã© responsÃ¡vel por verificar se um ativo (Asset) possui avisos associados e atualizar o campo `DWComAviso__c` de acordo com essa condiÃ§Ã£o. Se o ativo tiver uma quantidade de avisos maior que zero, o campo serÃ¡ marcado como verdadeiro; caso contrÃ¡rio, serÃ¡ marcado como falso.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Monitorar registros do objeto Asset apÃ³s sua criaÃ§Ã£o ou atualizaÃ§Ã£o.
- Verificar a quantidade de avisos (`DWQuantidadeAvisos__c`).
- Atualizar o campo `DWComAviso__c` para refletir se hÃ¡ avisos ativos ou nÃ£o.

Etapas Principais
1. Start â€“ Disparado apÃ³s a criaÃ§Ã£o ou atualizaÃ§Ã£o de registros do objeto Asset, quando `DWQuantidadeAvisos__c` for maior ou igual a 0.
2. Decision (`Tem_avisos?`) â€“ Verifica se o valor de `DWQuantidadeAvisos__c` Ã© maior que 0.
   - Se sim, direciona para atualizar o campo `DWComAviso__c` para `true`.
   - Se nÃ£o, direciona para atualizar o campo `DWComAviso__c` para `false`.
3. Record Update (`Atualizar_Ativo`) â€“ Atualiza o campo `DWComAviso__c` para `true`.
4. Record Update (`Atualizar_Ativo_2`) â€“ Atualiza o campo `DWComAviso__c` para `false`.

VariÃ¡veis e Elementos
- Objeto de disparo: `Asset`
- Disparo: ApÃ³s criaÃ§Ã£o ou atualizaÃ§Ã£o (`CreateAndUpdate`) no evento `RecordAfterSave`.
- CondiÃ§Ã£o de disparo: `DWQuantidadeAvisos__c >= 0`.
- DecisÃ£o `Tem_avisos?`: Verifica se `DWQuantidadeAvisos__c > 0`.
- AtualizaÃ§Ãµes de registro:
  - `Atualizar_Ativo`: Define `DWComAviso__c` como `true`.
  - `Atualizar_Ativo_2`: Define `DWComAviso__c` como `false`.

ConsideraÃ§Ãµes
- Este Flow Ã© acionado automaticamente apÃ³s a criaÃ§Ã£o ou atualizaÃ§Ã£o de registros do objeto Asset, garantindo que o campo de aviso esteja sempre atualizado de acordo com a quantidade de avisos.
- A lÃ³gica de decisÃ£o garante que o campo `DWComAviso__c` reflita corretamente a presenÃ§a de avisos ativos.
- O Flow foi configurado para rodar no modo de layout automÃ¡tico (`AUTO_LAYOUT_CANVAS`) e Ã© compatÃ­vel com Lightning Flow Builder.

Este fluxo automatiza a gestÃ£o visual e de dados relacionados a avisos em ativos, facilitando a visualizaÃ§Ã£o rÃ¡pida do status de avisos associados a cada ativo.

Flow: DWOportunidadeSubflowCriarLeadApos6Meses

DescriÃ§Ã£o
O Flow `DWOportunidadeSubflowCriarLeadApos6Meses` Ã© um fluxo autÃ´nomo (auto-launched) que tem como objetivo principal atualizar o campo `DWDataCriacaoFutura__c` na oportunidade, adicionando 6 meses Ã  data de criaÃ§Ã£o da oportunidade. Este fluxo Ã© utilizado em processos de qualificaÃ§Ã£o de oportunidades, especialmente quando o motivo de perda Ã© "Interesse futuro" e o submotivo Ã© "6 meses". AlÃ©m disso, ele tambÃ©m envia uma mensagem no Chatter em caso de erro durante a execuÃ§Ã£o.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Consultar uma oportunidade especÃ­fica pelo ID fornecido.
- Calcular uma data futura adicionando 6 meses Ã  data de criaÃ§Ã£o da oportunidade.
- Atualizar o campo `DWDataCriacaoFutura__c` com essa data futura.
- Enviar uma mensagem de erro no Chatter se ocorrer algum problema durante a atualizaÃ§Ã£o.

Etapas Principais
1. **Get Records (`OportunidadeS`)** â€“ Consulta a oportunidade pelo ID passado na variÃ¡vel `recordId`.
2. **Assignment (`dataMais6`)** â€“ Calcula a data futura adicionando 6 meses Ã  data de criaÃ§Ã£o da oportunidade usando a fÃ³rmula `ADDMONTHS({!OportunidadeS.CreatedDate},6)`.
3. **Update Records (`Atualiza_data_futura_6_meses`)** â€“ Atualiza o campo `DWDataCriacaoFutura__c` da oportunidade com a data calculada.
4. **Action Call (`msg_erro`)** â€“ Caso ocorra algum erro na consulta ou atualizaÃ§Ã£o, uma mensagem de erro Ã© postada no Chatter, informando o problema.

VariÃ¡veis
- `recordId` (String, Input) â€“ ID da oportunidade que serÃ¡ processada. Ã‰ passado ao iniciar o fluxo.
- `dataMais6` (Date) â€“ VariÃ¡vel fÃ³rmula que calcula a data futura adicionando 6 meses Ã  data de criaÃ§Ã£o da oportunidade.

Recursos adicionais
- **FÃ³rmula `dataMais6`**: Utiliza a funÃ§Ã£o `ADDMONTHS` para somar 6 meses Ã  data de criaÃ§Ã£o da oportunidade.
- **AÃ§Ã£o de mensagem de erro (`msg_erro`)**: Posta uma mensagem no Chatter caso ocorra uma falha na consulta ou atualizaÃ§Ã£o, informando que houve um erro ao tentar salvar o campo de data futura.

ConsideraÃ§Ãµes
- Este fluxo deve ser iniciado com o ID da oportunidade que se deseja processar, garantindo que a variÃ¡vel `recordId` seja corretamente passada.
- A lÃ³gica de erro garante que, em caso de falha, uma mensagem seja registrada no Chatter, facilitando o diagnÃ³stico.
- O fluxo Ã© configurado para rodar automaticamente (`Active`) e Ã© utilizado em processos automatizados de qualificaÃ§Ã£o ou perda de oportunidades.

Este fluxo Ã© uma peÃ§a importante na automaÃ§Ã£o de processos de qualificaÃ§Ã£o de oportunidades, garantindo que a data de interesse futuro seja atualizada corretamente apÃ³s 6 meses, alÃ©m de fornecer mecanismos de monitoramento de erros.

Flow: DWLeadSubflowCriarLeadApos12Meses

DescriÃ§Ã£o
O Flow `DWLeadSubflowCriarLeadApos12Meses` Ã© um subflow responsÃ¡vel por atualizar o campo de data futura em um Lead apÃ³s 12 meses da sua criaÃ§Ã£o. Ele Ã© utilizado no processo de desqualificaÃ§Ã£o de leads, especialmente quando o motivo Ã© "Interesse futuro" com submotivo "12 meses". O fluxo calcula a data de criaÃ§Ã£o do lead acrescida de 12 meses e atualiza o campo personalizado `DWDataCriacaoFutura__c` com esse valor.

Tipo
- AutoLanÃ§ado (sem interface de usuÃ¡rio)

Objetivo
- Buscar um Lead pelo ID fornecido.
- Calcular a data de criaÃ§Ã£o do lead mais 12 meses.
- Atualizar o campo `DWDataCriacaoFutura__c` do Lead com essa nova data.
- Caso ocorra erro na atualizaÃ§Ã£o, postar uma mensagem de erro no chatter.

Etapas Principais
1. Get Records â€“ Busca o Lead pelo ID passado na variÃ¡vel `recordId`.
2. Record Update â€“ Atualiza o campo `DWDataCriacaoFutura__c` do Lead com a data de criaÃ§Ã£o mais 12 meses, usando a fÃ³rmula `ADDMONTHS({!LeadS.CreatedDate},12)`.
3. Fault Handling â€“ Se ocorrer erro na busca ou na atualizaÃ§Ã£o, um post de erro Ã© feito no chatter informando o problema.

VariÃ¡veis
- recordId (String, Input) â€“ ID do Lead a ser processado. Deve ser passado ao iniciar o flow.

Componentes e Funcionalidades
- FÃ³rmula `dataMais12`: Calcula a data de criaÃ§Ã£o do Lead acrescida de 12 meses usando a funÃ§Ã£o `ADDMONTHS`.
- Record Lookup `LeadS`: Busca o Lead com base no ID fornecido. Se nÃ£o encontrar, o fluxo termina ou passa para o fault.
- Record Update `AtualizaDataFutura12Meses`: Atualiza o campo `DWDataCriacaoFutura__c` com a data calculada.
- Action `msg_erro`: Caso haja erro na busca ou na atualizaÃ§Ã£o, uma mensagem de erro Ã© postada no chatter, informando que houve um problema ao tentar salvar a data futura.

ConsideraÃ§Ãµes
- Este flow deve ser iniciado com o ID do Lead como parÃ¢metro de entrada.
- Ã‰ importante que o campo `DWDataCriacaoFutura__c` seja do tipo Date.
- O fluxo possui tratamento de erro que garante a comunicaÃ§Ã£o do problema via chatter, facilitando o monitoramento de falhas.
- O fluxo Ã© configurado para rodar automaticamente, sem necessidade de interaÃ§Ã£o do usuÃ¡rio.

VersÃ£o do API
- 63.0

Este fluxo Ã© uma peÃ§a importante na automaÃ§Ã£o de gerenciamento de leads, garantindo que a data futura seja calculada e atualizada corretamente apÃ³s 12 meses da criaÃ§Ã£o, facilitando aÃ§Ãµes futuras de follow-up ou requalificaÃ§Ã£o.

Flow: AccountBeforeFlowUpdateAtribuirProprietarioConta

DescriÃ§Ã£o
O Flow `AccountBeforeFlowUpdateAtribuirProprietarioConta` Ã© um Flow autolanÃ§ado (sem interface de usuÃ¡rio) que Ã© acionado antes de uma atualizaÃ§Ã£o de registro na entidade Account. Sua finalidade Ã© verificar se o campo personalizado `NovoUsuario__c` foi alterado durante a atualizaÃ§Ã£o e, se sim, atribuir esse novo usuÃ¡rio como proprietÃ¡rio da conta.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Detectar mudanÃ§as no campo `NovoUsuario__c` durante uma atualizaÃ§Ã£o de conta.
- Se o campo foi alterado, atualizar o proprietÃ¡rio da conta (`OwnerId`) para o usuÃ¡rio selecionado em `NovoUsuario__r.Id`.

Etapas Principais
1. Start â€“ Configurado para ser acionado antes de salvar uma atualizaÃ§Ã£o na entidade Account, apenas quando o campo `NovoUsuario__c` for alterado.
2. Assignment â€“ Atribui o valor do campo `NovoUsuario__r.Id` ao campo padrÃ£o `$Record.OwnerId`, efetivamente mudando o proprietÃ¡rio da conta para o novo usuÃ¡rio.

VariÃ¡veis e ConfiguraÃ§Ãµes
- Objeto de disparo: Account
- Tipo de disparo: RecordBeforeSave (antes de salvar)
- CondiÃ§Ã£o de disparo: O Flow Ã© acionado somente se o campo `NovoUsuario__c` foi alterado (`IsChanged` Ã© verdadeiro).
- Label do Flow: "Account - Before flow (Update) - Atribuir proprietÃ¡rio da conta"
- Label de entrevista: "Atribuir novo proprietÃ¡rio da conta {!$Flow.CurrentDateTime}"
- VersÃ£o API: 63.0

Componentes e LÃ³gica
- Start:
  - Configurado para disparar em uma atualizaÃ§Ã£o de registro na entidade Account.
  - Inclui um filtro que verifica se o campo `NovoUsuario__c` foi alterado (`IsChanged` = true).
  - O disparo ocorre antes de o registro ser salvo (`RecordBeforeSave`).
  - O fluxo Ã© ativado apenas se a condiÃ§Ã£o do filtro for verdadeira.

- Assignments:
  - Nome: AtribuirNovoProprietario
  - DescriÃ§Ã£o: Atribui o valor do novo usuÃ¡rio ao proprietÃ¡rio da conta.
  - AÃ§Ã£o: `$Record.OwnerId` recebe o valor de `$Record.NovoUsuario__r.Id`.

ConsideraÃ§Ãµes
- Este Flow Ã© utilizado para automatizar a mudanÃ§a de proprietÃ¡rio de uma conta quando um novo usuÃ¡rio Ã© definido.
- Deve ser garantido que o campo `NovoUsuario__c` seja populado corretamente e que o relacionamento `NovoUsuario__r` esteja acessÃ­vel.
- Como Ã© um Flow de disparo antes de salvar, a alteraÃ§Ã£o no proprietÃ¡rio serÃ¡ aplicada imediatamente na prÃ³xima gravaÃ§Ã£o do registro.

Este fluxo garante que a mudanÃ§a de proprietÃ¡rio seja automÃ¡tica e condicional, evitando a necessidade de intervenÃ§Ã£o manual apÃ³s a atualizaÃ§Ã£o da conta.

Flow: GBTermoExclusaoTermoPreContrato

DescriÃ§Ã£o
O Flow `GBTermoExclusaoTermoPreContrato` Ã© um Flow autolanÃ§ado que Ã© acionado antes da exclusÃ£o de um registro do objeto `Termo__c`. Sua principal funÃ§Ã£o Ã© verificar se hÃ¡ envelopes concluÃ­dos relacionados ao termo que estÃ¡ sendo excluÃ­do e, se houver, cancelar o envio desses envelopes via uma chamada Apex, alÃ©m de exibir uma mensagem de erro ao usuÃ¡rio.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Antes de excluir um registro do objeto `Termo__c`, verificar se hÃ¡ envelopes de assinatura concluÃ­dos relacionados.
- Caso existam envelopes concluÃ­dos, cancelar o envio desses envelopes no DocuSign e impedir a exclusÃ£o do termo, exibindo uma mensagem de erro.

Etapas Principais
1. Start â€“ Acionamento do Flow na fase de prÃ©-exclusÃ£o do registro `Termo__c`.
2. Get Records (`Obter envelope concluÃ­do`) â€“ Consulta registros do objeto `DWEnvelopeDocusign__c` relacionados ao termo que estÃ¡ sendo excluÃ­do, com status `ConcluÃ­do`.
3. Decision (`Existe envelope concluÃ­do?`) â€“ Verifica se hÃ¡ envelopes concluÃ­dos relacionados.
   - Se sim, passa para a aÃ§Ã£o de cancelamento.
   - Se nÃ£o, permite a exclusÃ£o normalmente.
4. Assign (`Attr envelopes`) â€“ Prepara a lista de envelopes para o cancelamento, atribuindo o ID do envelope.
5. Action Call (`Cancelar Envio`) â€“ Chama uma aÃ§Ã£o Apex (`DW_CancelEnvDocusignBatch`) para cancelar o envio dos envelopes no DocuSign, passando os IDs dos envelopes e o motivo "Termo excluÃ­do".
6. Custom Error (`NÃ£o excluir`) â€“ Caso haja envelopes concluÃ­dos, exibe uma mensagem de erro informando que nÃ£o Ã© possÃ­vel excluir o termo devido a envelopes concluÃ­dos.

VariÃ¡veis
- `Envelopes` (String Collection) â€“ ColeÃ§Ã£o de IDs de envelopes a serem cancelados.
- Outros elementos internos nÃ£o possuem variÃ¡veis de entrada ou saÃ­da especÃ­ficas, apenas referÃªncias internas ao fluxo.

ConsideraÃ§Ãµes
- Este Flow Ã© acionado automaticamente antes da exclusÃ£o de um registro do objeto `Termo__c`.
- A aÃ§Ã£o de cancelamento de envelopes Ã© realizada via uma chamada Apex personalizada.
- Se houver envelopes concluÃ­dos, a exclusÃ£o do termo Ã© bloqueada e uma mensagem de erro Ã© exibida ao usuÃ¡rio.
- Ã‰ importante garantir que o mÃ©todo Apex `DW_CancelEnvDocusignBatch` esteja implementado corretamente para cancelar os envelopes no DocuSign.

Resumo
Este Flow garante a integridade do processo de assinatura ao impedir a exclusÃ£o de termos que possuem envelopes concluÃ­dos, cancelando automaticamente esses envelopes no DocuSign e informando o usuÃ¡rio sobre a impossibilidade de exclusÃ£o.

Flow: DWAccountBeforeUpdateValidaEmailAtualizar

DescriÃ§Ã£o
O Flow `DWAccountBeforeUpdateValidaEmailAtualizar` Ã© um fluxo automatizado do tipo AutoLaunched que Ã© executado antes da atualizaÃ§Ã£o de registros do objeto Account no Salesforce. Sua principal funÃ§Ã£o Ã© validar se o novo endereÃ§o de e-mail informado na conta estÃ¡ presente na blacklist de e-mails proibidos. Caso o e-mail esteja na blacklist, o fluxo impede a atualizaÃ§Ã£o e exibe uma mensagem de erro ao usuÃ¡rio, garantindo que e-mails bloqueados nÃ£o sejam utilizados nas contas.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio, acionado por evento de atualizaÃ§Ã£o de registro)

Objetivo
- Validar se o campo `Email__c` da Conta foi alterado.
- Verificar se o novo e-mail estÃ¡ presente na lista de blacklist (`BlackList_Email__c`).
- Impedir a atualizaÃ§Ã£o da conta e exibir uma mensagem de erro personalizada caso o e-mail esteja na blacklist.

Etapas Principais
1. Start â€“ Disparo do fluxo antes da atualizaÃ§Ã£o de um registro `Account` quando o campo `Email__c` Ã© alterado.
2. Record Lookup (`emailS`) â€“ Consulta o objeto `BlackList_Email__c` para verificar se o novo e-mail da conta (`Email__c`) estÃ¡ na blacklist.
3. Decision (`Est_na_blacklist`) â€“ Verifica se a consulta retornou um registro, ou seja, se o e-mail estÃ¡ na blacklist.
   - Se o e-mail estiver na blacklist (`Sim`), o fluxo direciona para a mensagem de erro.
   - Caso contrÃ¡rio, permite a continuaÃ§Ã£o da atualizaÃ§Ã£o.
4. Custom Error (`erro_email`) â€“ Exibe uma mensagem de erro personalizada ao usuÃ¡rio informando que o e-mail nÃ£o Ã© permitido.

VariÃ¡veis e Elementos
- `$Record.Email__c` (Objeto Account) â€“ Campo de e-mail da conta que foi alterado.
- `emailS` (Record Lookup) â€“ Consulta ao objeto `BlackList_Email__c` para verificar a presenÃ§a do e-mail.
- `Est_na_blacklist` (Decision) â€“ DecisÃ£o que determina se o e-mail estÃ¡ na blacklist.
- `erro_email` (Custom Error) â€“ Mensagem de erro exibida ao usuÃ¡rio se o e-mail estiver bloqueado.

ConsideraÃ§Ãµes
- Este fluxo Ã© acionado automaticamente antes da atualizaÃ§Ã£o de um registro de Conta, especificamente quando o campo `Email__c` Ã© alterado.
- A consulta ao objeto `BlackList_Email__c` busca verificar a existÃªncia do e-mail na blacklist.
- Caso o e-mail seja encontrado na blacklist, o fluxo impede a atualizaÃ§Ã£o e exibe uma mensagem de erro personalizada: "E-mail informado nÃ£o Ã© permitido, favor verificar."
- Ã‰ importante garantir que o fluxo esteja ativo e corretamente configurado para disparar na condiÃ§Ã£o de alteraÃ§Ã£o do campo `Email__c`.
- O fluxo utiliza o recurso de erro personalizado para fornecer feedback claro ao usuÃ¡rio, evitando que e-mails proibidos sejam utilizados.

Este fluxo ajuda a manter a integridade dos dados de contato nas contas, prevenindo o uso de e-mails bloqueados ou considerados inadequados.

Flow: DWAccountBeforeUpdateRemoveValoresDosCanaisComunicacaoQuandoNaoDesejaMkt.flow

DescriÃ§Ã£o
O Flow `DWAccountBeforeUpdateRemoveValoresDosCanaisComunicacaoQuandoNaoDesejaMkt` Ã© uma automaÃ§Ã£o do tipo AutoLaunched que Ã© acionada antes da atualizaÃ§Ã£o de registros do objeto Account. Sua finalidade principal Ã© remover os valores dos canais de comunicaÃ§Ã£o quando o cliente indica que nÃ£o deseja receber aÃ§Ãµes de marketing.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Detectar alteraÃ§Ãµes no campo `DesejaMarketing__c` durante uma atualizaÃ§Ã£o de conta.
- Caso o cliente indique que nÃ£o deseja receber marketing (`DesejaMarketing__c` = "NÃ£o"), o Flow limpa os canais de comunicaÃ§Ã£o associados ao registro, removendo seus valores.

Etapas Principais
1. Start â€“ Disparado antes da atualizaÃ§Ã£o do registro Account, quando hÃ¡ alteraÃ§Ã£o no campo `DesejaMarketing__c`.
2. Decision â€“ Verifica se o campo `DesejaMarketing__c` foi alterado para "NÃ£o".
3. Assignment â€“ Se a decisÃ£o for verdadeira, atribui uma string vazia ao campo `CanaisComunicacao__c`, removendo os canais de comunicaÃ§Ã£o.

VariÃ¡veis e Elementos
- `Record` (registro em processamento): objeto Account que estÃ¡ sendo atualizado.
- `DesejaMarketing__c` (campo do objeto Account): campo que indica se o cliente deseja receber marketing.
- `CanaisComunicacao__c` (campo do objeto Account): campo que armazena os canais de comunicaÃ§Ã£o do cliente.

Fluxo Detalhado
- O fluxo inicia com o gatilho de atualizaÃ§Ã£o do objeto Account, especificamente quando hÃ¡ uma mudanÃ§a no campo `DesejaMarketing__c`.
- A decisÃ£o `n_o_deseja_receber_a_es_de_mkt` verifica se o valor de `DesejaMarketing__c` foi alterado para "NÃ£o".
- Caso a condiÃ§Ã£o seja verdadeira, o fluxo direciona para a atribuiÃ§Ã£o `remove_canais`, que limpa o conteÃºdo do campo `CanaisComunicacao__c` atribuindo uma string vazia.
- Assim, os canais de comunicaÃ§Ã£o sÃ£o removidos automaticamente quando o cliente opta por nÃ£o receber marketing.

ConsideraÃ§Ãµes
- Este Flow Ã© acionado apenas durante o evento de prÃ©-atualizaÃ§Ã£o do registro (`RecordBeforeSave`), garantindo que os canais de comunicaÃ§Ã£o sejam limpos antes de a alteraÃ§Ã£o ser salva no banco de dados.
- Ã‰ importante que o campo `DesejaMarketing__c` seja atualizado corretamente para que o fluxo seja acionado.
- O fluxo Ã© configurado para ser ativo e deve estar habilitado para funcionar na automaÃ§Ã£o de atualizaÃ§Ãµes de contas.

Resumo
Este Flow automatiza a limpeza dos canais de comunicaÃ§Ã£o de uma conta quando o cliente indica que nÃ£o deseja receber aÃ§Ãµes de marketing, garantindo que os dados estejam alinhados Ã s preferÃªncias do cliente antes de salvar a atualizaÃ§Ã£o.

Flow: DW_ScreenFlow_Layout_Endereco

DescriÃ§Ã£o
O Flow `DW_ScreenFlow_Layout_Endereco` Ã© uma automaÃ§Ã£o de tela (Screen Flow) que exibe informaÃ§Ãµes de endereÃ§o relacionadas Ã  conta no Salesforce. Ele permite ao usuÃ¡rio visualizar e editar detalhes do endereÃ§o de cobranÃ§a da conta, com uma lÃ³gica condicional para determinar o tipo de conta e exibir informaÃ§Ãµes especÃ­ficas.

Tipo
- Screen Flow (com interface de usuÃ¡rio)

Objetivo
- Obter os detalhes da conta com base no `recordId` fornecido.
- Exibir uma tela para ediÃ§Ã£o ou visualizaÃ§Ã£o do endereÃ§o de cobranÃ§a da conta.
- Decidir o fluxo de navegaÃ§Ã£o com base no tipo de conta (por exemplo, Loja).

Etapas Principais
1. Get Records â€“ Obter a conta pelo ID (`recordId`) passado como parÃ¢metro.
2. Decision â€“ Avaliar o tipo de conta (`RecordType.DeveloperName`) para determinar o fluxo de navegaÃ§Ã£o.
3. Screens â€“ Exibir duas telas:
   - "EndereÃ§o loja" para ediÃ§Ã£o do endereÃ§o de cobranÃ§a.
   - "EndereÃ§o" para visualizaÃ§Ã£o somente leitura do endereÃ§o de cobranÃ§a.
   
VariÃ¡veis
- recordId (String, Input) â€“ ID da conta a ser processada.

Componentes e ConfiguraÃ§Ãµes
- ObtenÃ§Ã£o de Conta (`conta`): Consulta a conta pelo ID fornecido, retornando o primeiro registro encontrado.
- DecisÃ£o (`TipoConta`): Verifica se o `RecordType.DeveloperName` da conta Ã© igual a `DWLoja`.
  - Se verdadeiro, direciona para a tela "Informa_es_sobre_a_conta".
  - Caso contrÃ¡rio, segue para "C_pia_1_de_Endere_o".
- Telas:
  - "Informa_es_sobre_a_conta": Tela de visualizaÃ§Ã£o do endereÃ§o, com modo readonly.
  - "C_pia_1_de_Endere_o": Tela de ediÃ§Ã£o do endereÃ§o, permitindo alteraÃ§Ãµes.

ConfiguraÃ§Ã£o das Telas
- Ambas as telas exibem os campos de endereÃ§o: BillingAddress, DWNumeroCobranca__c, DWBairroCobranca__c, Tipo_Logradouro__c, DWComplementoCobranca__c.
- A tela de ediÃ§Ã£o ("EndereÃ§o") permite ediÃ§Ã£o dos campos.
- A tela de visualizaÃ§Ã£o ("EndereÃ§o loja") exibe os campos em modo somente leitura.

ConfiguraÃ§Ãµes adicionais
- `areMetricsLoggedToDataCloud`: false
- `BuilderType`: LightningFlowBuilder
- `CanvasMode`: AUTO_LAYOUT_CANVAS
- `OriginBuilderType`: LightningFlowBuilder
- Status: Ativo

ConsideraÃ§Ãµes
- Este Flow deve ser iniciado passando o `recordId` da conta.
- A decisÃ£o baseada no `RecordType.DeveloperName` permite roteamento condicional para diferentes visualizaÃ§Ãµes ou processos.
- As telas sÃ£o configuradas para permitir navegaÃ§Ã£o de volta, pausa e finalizaÃ§Ã£o, com a opÃ§Ã£o de usar valores armazenados ao avanÃ§ar.

Este fluxo Ã© Ãºtil para cenÃ¡rios onde Ã© necessÃ¡rio exibir ou editar endereÃ§os de contas, com lÃ³gica condicional para diferentes tipos de contas, garantindo uma experiÃªncia de usuÃ¡rio adequada ao contexto.

Flow: DWSubflowCriarTermoTestDrive

DescriÃ§Ã£o
O Flow `DWSubflowCriarTermoTestDrive` Ã© uma sub-automaÃ§Ã£o que gerencia a criaÃ§Ã£o e navegaÃ§Ã£o de um termo de Test Drive no Salesforce. Ele realiza verificaÃ§Ãµes de existÃªncia de termo, obtÃ©m informaÃ§Ãµes relacionadas ao veÃ­culo, atribui dados ao termo, e apresenta telas de preenchimento ou erro conforme o cenÃ¡rio.

Tipo
- SubFlow (sem interface de usuÃ¡rio direta, utilizado como componente em outros Flows)

Objetivo
- Verificar se jÃ¡ existe um termo de Test Drive para uma oportunidade especÃ­fica.
- Caso exista, exibe os detalhes do termo existente.
- Caso nÃ£o exista, cria um novo termo com informaÃ§Ãµes do cliente, veÃ­culo, e oportunidade, e navega para a tela de assinatura.

Etapas Principais
1. Obter Tipo de Registro do Termo (`DWObterTipoRegistroTermo`) â€“ Busca o RecordType especÃ­fico para o termo de Test Drive.
2. Obter Termo (`DWObterTermo`) â€“ Verifica se jÃ¡ existe um termo associado Ã  oportunidade.
3. Obter VeÃ­culos (`DWObterVeiculos`) â€“ Busca veÃ­culos relacionados ao estoque.
4. DecisÃ£o (`DWJaExisteTermoCriado`) â€“ Verifica se jÃ¡ hÃ¡ um termo criado.
   - Se sim, navega para a tela de preencher termo existente.
   - Se nÃ£o, inicia a criaÃ§Ã£o de um novo termo.
5. Atribuir Dados ao Termo (`DWAtribuirTermoExistente` ou `DWAtribuirTermoNovo`) â€“ Preenche os campos do termo com informaÃ§Ãµes obtidas.
6. Criar Novo Termo (`DWCriarNovoTermo`) â€“ Insere o novo termo no banco.
7. Navegar para telas de visualizaÃ§Ã£o ou erro (`DWNavegarParaTermo`, `DWTelaErro`, `DWTelaPreviewTermo`) â€“ Exibe os detalhes ou mensagens ao usuÃ¡rio.

VariÃ¡veis
- `DWVeiculoSelecionado` (Objeto SObject, Asset) â€“ VeÃ­culo selecionado na tabela.
- `OportunidadeS` (Objeto SObject, Opportunity) â€“ Oportunidade relacionada, passada como entrada.
- `TermoS` (Objeto SObject, Termo__c) â€“ Termo de Test Drive, criado ou atualizado durante o fluxo.

ConsideraÃ§Ãµes
- O Flow Ã© iniciado com a oportunidade como entrada (`OportunidadeS`).
- Utiliza componentes de navegaÃ§Ã£o e assinatura digital.
- Inclui validaÃ§Ãµes de datas e campos obrigatÃ³rios.
- O fluxo Ã© configurado para rodar em modo `SystemModeWithoutSharing`, garantindo acesso completo aos registros.
- As telas de erro e preenchimento sÃ£o configuradas para facilitar a interaÃ§Ã£o do usuÃ¡rio final.

Este fluxo automatiza de forma eficiente a gestÃ£o de termos de Test Drive, garantindo consistÃªncia e controle do processo.

Flow: DWLeadSubflowCriarLeadApos1Mes

DescriÃ§Ã£o
O Flow `DWLeadSubflowCriarLeadApos1Mes` Ã© um subfluxo responsÃ¡vel por atualizar o campo de data futura (`DWDataCriacaoFutura__c`) de um Lead, adicionando um mÃªs Ã  data de criaÃ§Ã£o do Lead. Ele Ã© utilizado no contexto de qualificaÃ§Ã£o ou desqualificaÃ§Ã£o de Leads, especialmente quando o motivo envolve um interesse futuro de 1 mÃªs.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Consultar um Lead especÃ­fico pelo ID recebido como variÃ¡vel de entrada.
- Atualizar o campo `DWDataCriacaoFutura__c` do Lead, somando 1 mÃªs Ã  sua data de criaÃ§Ã£o (`CreatedDate`).
- Caso ocorra erro na atualizaÃ§Ã£o, postar uma mensagem de erro no Chatter.

Etapas Principais
1. **Get Records â€“ LeadS**  
   Consulta o Lead pelo ID fornecido na variÃ¡vel `recordId`.  
   - Objetivo: obter a data de criaÃ§Ã£o do Lead (`CreatedDate`).  
   - Se nÃ£o encontrar o Lead, o fluxo termina ou executa o fluxo de erro.

2. **Record Update â€“ AtualizaDataFutura1Mes**  
   Atualiza o Lead encontrado, atribuindo ao campo `DWDataCriacaoFutura__c` a data de criaÃ§Ã£o acrescida de 1 mÃªs.  
   - Utiliza a fÃ³rmula `ADDMONTHS({!LeadS.CreatedDate}, 1)` para calcular a nova data.  
   - Caso ocorra erro na atualizaÃ§Ã£o, o fluxo direciona para a aÃ§Ã£o de erro.

3. **Action Call â€“ msg_erro** (em caso de falha)  
   Posta uma mensagem no Chatter informando que houve um erro ao tentar salvar a data futura, indicando o fluxo e o motivo.

VariÃ¡veis
- `recordId` (String, Input): ID do Lead que serÃ¡ consultado e atualizado.  
- `LeadS` (Lead Record): variÃ¡vel que armazena o Lead consultado.  

Formulas
- `dataMais1` (Date): expressÃ£o que calcula a data de criaÃ§Ã£o do Lead mais 1 mÃªs, usando `ADDMONTHS({!LeadS.CreatedDate}, 1)`.

ConsideraÃ§Ãµes
- Este fluxo Ã© acionado de forma automÃ¡tica, geralmente por outro fluxo ou processo que passa o `recordId`.
- A fÃ³rmula garante que a data futura seja sempre um mÃªs apÃ³s a data de criaÃ§Ã£o do Lead.
- Em caso de erro na atualizaÃ§Ã£o, uma postagem no Chatter Ã© feita para notificar o usuÃ¡rio responsÃ¡vel.
- O fluxo Ã© parte de um processo maior de qualificaÃ§Ã£o/desqualificaÃ§Ã£o de Leads, facilitando aÃ§Ãµes automatizadas de acompanhamento.

Este fluxo Ã© uma implementaÃ§Ã£o eficiente para automatizar a gestÃ£o de datas futuras relacionadas aos Leads, garantindo consistÃªncia e notificaÃ§Ãµes automÃ¡ticas em caso de falhas.

Flow: GBScreenFlowLayoutFormularioCanaisComunicacao

DescriÃ§Ã£o
O Flow `GBScreenFlowLayoutFormularioCanaisComunicacao` Ã© um Screen Flow que tem como objetivo exibir um formulÃ¡rio de consentimento de comunicaÃ§Ã£o relacionado Ã  conta do Salesforce. Ele apresenta uma tela ao usuÃ¡rio onde sÃ£o exibidos campos especÃ­ficos de comunicaÃ§Ã£o, permitindo que o usuÃ¡rio revise e confirme suas preferÃªncias.

Tipo
- Screen Flow (com interface de usuÃ¡rio)

Objetivo
- Coletar informaÃ§Ãµes de consentimento de canais de comunicaÃ§Ã£o associados Ã  conta.
- Exibir um layout personalizado com os campos `DesejaMarketing__c` e `CanaisComunicacao__c`.
- Permitir navegaÃ§Ã£o de volta e finalizaÃ§Ã£o do fluxo apÃ³s a revisÃ£o.

Etapas Principais
1. Start â€“ InÃ­cio do fluxo, recebendo o `recordId` da Conta como entrada.
2. Screen â€“ Exibe a tela `Informa_es_sobre_a_conta`, que apresenta os campos de consentimento de comunicaÃ§Ã£o.
3. Encerramento â€“ O fluxo termina apÃ³s o usuÃ¡rio interagir com a tela, podendo salvar as informaÃ§Ãµes conforme configuraÃ§Ã£o.

VariÃ¡veis
- recordId (String, Input) â€“ ID do registro de Conta que serÃ¡ utilizado para exibir e editar os campos relacionados.

ConfiguraÃ§Ãµes e Propriedades
- VersÃ£o API: 63.0
- Status: Ativo
- Label da Tela: "InformaÃ§Ãµes sobre a conta"
- Label do Flow: "GB - Screen Flow - Layout - FormulÃ¡rio Universal Canais de ComunicaÃ§Ã£o"
- Ambiente: PadrÃ£o (Default)
- Builder Type: LightningFlowBuilder
- Canvas Mode: AUTO_LAYOUT_CANVAS
- Origem do Builder: LightningFlowBuilder
- Propriedades de Layout:
  - Screen `Informa_es_sobre_a_conta`:
    - LocalizaÃ§Ã£o X: 176, Y: 134
    - Permite voltar, pausar, finalizar
    - Campos exibidos:
      - `DesejaMarketing__c`
      - `CanaisComunicacao__c`
    - Layout personalizado via componente `c:sobjectLayoutSection`
    - ParÃ¢metros de entrada:
      - `fields`: "DesejaMarketing__c,CanaisComunicacao__c"
      - `objectApiName`: "Account"
      - `recordId`: variÃ¡vel de entrada `recordId`
      - `layoutSectionLabel`: "Consentimento de ComunicaÃ§Ã£o"
    - ConfiguraÃ§Ãµes adicionais:
      - `inputsOnNextNavToAssocScrn`: UseStoredValues
      - `isRequired`: true
      - `storeOutputAutomatically`: true

ConsideraÃ§Ãµes
- Este fluxo Ã© utilizado para exibir um formulÃ¡rio de consentimento de canais de comunicaÃ§Ã£o de uma Conta especÃ­fica.
- Deve ser iniciado passando o `recordId` da Conta desejada.
- A tela Ã© configurada para permitir navegaÃ§Ã£o de volta e finalizaÃ§Ã£o, facilitando a revisÃ£o e confirmaÃ§Ã£o dos dados.
- O componente personalizado `c:sobjectLayoutSection` Ã© responsÃ¡vel por renderizar os campos de forma personalizada na tela.
- O fluxo estÃ¡ ativo e pronto para ser utilizado em processos que envolvam coleta de consentimento de comunicaÃ§Ã£o.

Flow: DWOpportunityAnexarEnviarNotaFiscalParaAssinatura

DescriÃ§Ã£o
O Flow `DWOpportunityAnexarEnviarNotaFiscalParaAssinatura` Ã© responsÃ¡vel por gerenciar o processo de anexar uma nota fiscal a uma oportunidade, verificar se o arquivo foi carregado corretamente, e posteriormente enviar a nota para assinatura digital via DocuSign. Este fluxo Ã© utilizado na fase de faturamento, garantindo que o cliente receba a nota fiscal para assinatura eletrÃ´nica.

Tipo
- Autolaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Permitir o upload de uma nota fiscal em formato PDF para uma oportunidade.
- Validar se o arquivo foi carregado corretamente.
- Enviar a nota fiscal para assinatura digital usando o componente `dwAssinaturaDocusign`.
- Gerenciar erros de upload e orientar o usuÃ¡rio a realizar o upload antes de prosseguir.

Etapas Principais
1. Loop â€“ Itera sobre uma coleÃ§Ã£o de IDs de versÃµes de conteÃºdo (`uploadNf.contentVersionIds`) para processar cada arquivo de nota fiscal.
2. Assignment â€“ Atribui o ID da versÃ£o do arquivo ao variÃ¡vel `versaoIdUnico`.
3. Decision â€“ Verifica se o arquivo foi carregado (`versaoIdUnico` nÃ£o Ã© nulo).
   - Se sim, passa para a etapa de envio da nota fiscal.
   - Se nÃ£o, direciona para uma tela de erro solicitando o upload do arquivo.
4. Screens:
   - `Anexar_nota_fiscal`: Tela para upload do arquivo PDF da nota fiscal.
   - `envio_nf`: Tela para envio da nota fiscal para assinatura via DocuSign.
   - `Erro_arquivo`: Tela de erro exibida se o arquivo nÃ£o for carregado, com opÃ§Ã£o de retornar para o upload.
5. Componentes de upload e assinatura:
   - `forceContent:fileUpload`: Componente para upload do arquivo PDF.
   - `c:dwAssinaturaDocusign`: Componente para envio do documento para assinatura digital.

VariÃ¡veis
- `recordId` (String, Input): ID do registro da oportunidade.
- `versaoId` (String, Collection): ColeÃ§Ã£o de IDs de versÃµes de conteÃºdo dos arquivos carregados.
- `versaoIdUnico` (String): VariÃ¡vel que armazena o ID da versÃ£o do arquivo atual durante o loop.

ConsideraÃ§Ãµes
- O fluxo inicia na etapa de anexar a nota fiscal, onde o usuÃ¡rio faz o upload do arquivo PDF.
- ApÃ³s o upload, o fluxo verifica se o arquivo foi carregado corretamente.
- Caso o arquivo esteja presente, o fluxo envia a nota para assinatura digital.
- Se o arquivo nÃ£o for carregado, o fluxo exibe uma mensagem de erro solicitando o upload.
- Este fluxo deve ser acionado a partir de uma aÃ§Ã£o na oportunidade, como um botÃ£o ou processo automatizado, passando o `recordId` da oportunidade.

Este fluxo garante uma integraÃ§Ã£o eficiente entre o upload de documentos e o processo de assinatura digital, facilitando a fase de faturamento e assinatura de notas fiscais eletrÃ´nicas.

# Flow: DWOpportunityAfterUpdateIniciaFaturamentoQuandoMinutaIntegrada

## DescriÃ§Ã£o
Este Flow do tipo **AutoLaunched** Ã© acionado automaticamente apÃ³s a atualizaÃ§Ã£o de uma oportunidade no Salesforce. Sua execuÃ§Ã£o ocorre especificamente quando o campo `StatusMinuta__c` Ã© alterado para `"Integrado com sucesso"` e o campo `DWNumeroPedido__c` nÃ£o estÃ¡ vazio. 

Ao atender essas condiÃ§Ãµes, o Flow chama uma aÃ§Ã£o Apex para iniciar o processo de faturamento da oportunidade. Caso ocorra algum erro durante a tentativa de integraÃ§Ã£o, uma mensagem de erro Ã© registrada no Chatter da oportunidade para facilitar o acompanhamento.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

## Objetivo
- Detectar a mudanÃ§a do campo `StatusMinuta__c` para `"Integrado com sucesso"`.
- Verificar se o campo `DWNumeroPedido__c` possui valor.
- Acionar uma aÃ§Ã£o Apex para iniciar o faturamento da oportunidade.
- Registrar mensagens de erro no Chatter em caso de falha na integraÃ§Ã£o.

## Etapas Principais
1. **Trigger de inÃ­cio**: O Flow Ã© disparado apÃ³s a atualizaÃ§Ã£o de uma oportunidade, quando:
   - `StatusMinuta__c` foi alterado (`IsChanged = true`).
   - `DWNumeroPedido__c` nÃ£o estÃ¡ nulo.
   - `StatusMinuta__c` Ã© igual a `"Integrado com sucesso"`.

2. **Chamada de aÃ§Ã£o Apex**: Executa a classe `DW_IniciarFaturamentoBatch`, passando o ID da oportunidade (`$Record.Id`) como parÃ¢metro. Essa aÃ§Ã£o inicia o processo de faturamento em batch.

3. **Tratamento de erro**: Se ocorrer algum erro na aÃ§Ã£o Apex, o Flow captura a mensagem de erro (`$Flow.FaultMessage`) e publica uma mensagem no Chatter da oportunidade, identificada pelo ID do registro.

## VariÃ¡veis
- **$Record.Id**: ID da oportunidade que disparou o Flow.
- **$Flow.FaultMessage**: Mensagem de erro gerada caso a aÃ§Ã£o Apex falhe.

## Detalhes TÃ©cnicos
- **Filtro de disparo**: O Flow Ã© acionado apÃ³s a gravaÃ§Ã£o (`RecordAfterSave`) de uma oportunidade, somente se:
  - `StatusMinuta__c` foi alterado (`IsChanged`).
  - `DWNumeroPedido__c` nÃ£o estÃ¡ vazio (`IsNull = false`).
  - `StatusMinuta__c` Ã© `"Integrado com sucesso"`.

- **ConfiguraÃ§Ã£o de execuÃ§Ã£o**:
  - O Flow Ã© executado de forma assÃ­ncrona apÃ³s o commit da transaÃ§Ã£o (`AsyncAfterCommit`).

- **AÃ§Ãµes**:
  - **chama_integracao_faturamento**: Chama a classe Apex `DW_IniciarFaturamentoBatch`, passando o ID da oportunidade.
  - **erro_ao_integrar_com_fluig**: Caso haja erro na aÃ§Ã£o Apex, publica uma mensagem no Chatter com o conteÃºdo da mensagem de erro.

## Resumo
Este Flow automatiza o inÃ­cio do faturamento de oportunidades assim que a minuta Ã© integrada com sucesso, garantindo que o processo seja iniciado automaticamente e que erros sejam devidamente registrados para acompanhamento.

Flow: DWLeadSubflowCriarLeadApos3Meses

DescriÃ§Ã£o
O Flow `DWLeadSubflowCriarLeadApos3Meses` Ã© um subflow responsÃ¡vel por atualizar a data futura de um Lead, adicionando 3 meses Ã  sua data de criaÃ§Ã£o. Este fluxo Ã© utilizado no contexto de qualificaÃ§Ã£o ou desqualificaÃ§Ã£o de Leads, especialmente quando o motivo envolve um interesse futuro de 3 meses. Caso ocorra algum erro durante a execuÃ§Ã£o, uma mensagem de erro Ã© postada no Chatter.

Tipo
- AutoLanÃ§ado (AutoLaunched Flow)

Objetivo
- Consultar um Lead especÃ­fico pelo seu ID.
- Atualizar o campo `DWDataCriacaoFutura__c` com a data de criaÃ§Ã£o do Lead acrescida de 3 meses.
- Caso ocorra erro na atualizaÃ§Ã£o, postar uma mensagem de erro no Chatter.

Etapas Principais
1. **Get Records (`LeadS`)** â€“ Busca o Lead pelo ID fornecido na variÃ¡vel de entrada `recordId`.
2. **Assignment (`dataMais3`)** â€“ Calcula a data de criaÃ§Ã£o do Lead mais 3 meses usando a fÃ³rmula `ADDMONTHS({!LeadS.CreatedDate}, 3)`.
3. **Update Records (`AtualizaDataFutura6Meses`)** â€“ Atualiza o campo `DWDataCriacaoFutura__c` do Lead com a data calculada.
4. **Action Call (`msg_erro`)** â€“ Se ocorrer erro na atualizaÃ§Ã£o, uma mensagem de erro Ã© postada no Chatter, informando o problema.

VariÃ¡veis
- `recordId` (String, Entrada) â€“ ID do Lead a ser processado.
- `LeadS` (Objeto Lead) â€“ Lead recuperado na consulta.
- `dataMais3` (Data) â€“ Data de criaÃ§Ã£o do Lead acrescida de 3 meses, calculada via fÃ³rmula.

Recursos e FÃ³rmulas
- **FÃ³rmula `dataMais3`**: `ADDMONTHS({!LeadS.CreatedDate}, 3)`  
  Essa fÃ³rmula calcula a data de criaÃ§Ã£o do Lead mais 3 meses, que serÃ¡ atribuÃ­da ao campo `DWDataCriacaoFutura__c`.

Tratamento de Erros
- Caso a consulta ao Lead (`LeadS`) ou a atualizaÃ§Ã£o (`AtualizaDataFutura6Meses`) falhem, o fluxo direciona para a aÃ§Ã£o `msg_erro`, que posta uma mensagem no Chatter com o texto:  
  `"Houve um erro ao tentar salvar o campo de data futura, favor verificar. (DW - Lead - Subflow criar um lead apÃ³s 3 meses)"`, usando o ID do registro como referÃªncia.

ConsideraÃ§Ãµes
- Este fluxo deve ser chamado passando o ID do Lead na variÃ¡vel `recordId`.
- A fÃ³rmula de adiÃ§Ã£o de meses garante que a data futura seja corretamente calculada.
- O fluxo possui tratamento de erro integrado, garantindo que problemas sejam comunicados ao usuÃ¡rio via Chatter.
- O fluxo Ã© configurado para rodar no ambiente padrÃ£o (`Default`) e estÃ¡ ativo (`Active`).

Este fluxo Ã© uma peÃ§a importante na automaÃ§Ã£o de gerenciamento de Leads, garantindo que a data de interesse futuro seja atualizada automaticamente apÃ³s a qualificaÃ§Ã£o ou desqualificaÃ§Ã£o, facilitando aÃ§Ãµes futuras de follow-up.

Flow: DW_Subflow_ValidarOportunidadeMesmoEstoque

DescriÃ§Ã£o
O Flow `DW_Subflow_ValidarOportunidadeMesmoEstoque` Ã© uma sub-rotina automatizada que valida se hÃ¡ uma oportunidade existente com o mesmo estoque de uma oportunidade atual. Ele verifica se hÃ¡ uma oportunidade diferente com o mesmo valor de estoque e, se encontrada, realiza uma atribuiÃ§Ã£o de saÃ­da indicando sucesso na validaÃ§Ã£o.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Buscar uma oportunidade diferente com o mesmo valor de estoque (`Estoque__c`) da oportunidade atual.
- Determinar se essa oportunidade existe e, com base nisso, definir uma variÃ¡vel de saÃ­da.

Etapas Principais
1. Start â€“ InÃ­cio do fluxo, direcionando para a verificaÃ§Ã£o de estoque nulo.
2. Decision "EstoqueNulo" â€“ Verifica se o campo `Estoque__c` da oportunidade estÃ¡ nulo ou em branco.
   - Se verdadeiro, pula para o final, assumindo que nÃ£o hÃ¡ oportunidade com estoque vÃ¡lido.
   - Se falso, prossegue para a busca de oportunidade com o mesmo estoque.
3. Record Lookup "oportunidadeMesmoEstoque" â€“ Busca uma oportunidade diferente com o mesmo valor de estoque.
   - Filtra oportunidades onde:
     - O ID Ã© diferente do ID da oportunidade atual.
     - O campo `Estoque__c` Ã© igual ao da oportunidade atual.
     - O campo `Estoque__c` nÃ£o estÃ¡ vazio ou nulo.
   - Retorna o primeiro registro encontrado, ordenado por nome.
4. Decision "EncontrouOportunidadeMesmoEstoque" â€“ Verifica se a busca retornou uma oportunidade vÃ¡lida.
   - Se encontrou, atribui `true` Ã  variÃ¡vel `encontrou` e armazena a oportunidade encontrada na variÃ¡vel de saÃ­da.
   - Se nÃ£o encontrou, mantÃ©m `encontrou` como `false`.

VariÃ¡veis
- `encontrou` (Boolean): VariÃ¡vel de saÃ­da que indica se uma oportunidade com o mesmo estoque foi encontrada.
- `oportunidadeMesmoEstoqueSaida` (Opportunity): VariÃ¡vel de saÃ­da que armazena a oportunidade encontrada com o mesmo estoque.
- `opportunity` (Opportunity): VariÃ¡vel de entrada que representa a oportunidade atual sendo avaliada.

ConsideraÃ§Ãµes
- Este Flow deve ser utilizado como uma sub-rotina dentro de outros processos, recebendo a oportunidade atual como entrada.
- A busca por oportunidades com o mesmo estoque Ã© condicional ao fato de o campo `Estoque__c` nÃ£o estar vazio ou nulo.
- A variÃ¡vel `encontrou` Ã© usada para determinar se uma oportunidade correspondente foi localizada, podendo influenciar etapas posteriores do processo.
- O fluxo estÃ¡ configurado para retornar imediatamente apÃ³s verificar o estoque, otimizando a execuÃ§Ã£o ao evitar buscas desnecessÃ¡rias.

Este fluxo Ã© Ãºtil para validar a unicidade de oportunidades com base no estoque, garantindo que aÃ§Ãµes especÃ­ficas sejam tomadas apenas quando uma oportunidade com o mesmo estoque jÃ¡ existir no sistema.

Flow: DWAccountBeforeFlowAtribuirStatusIntegracao

DescriÃ§Ã£o
O Flow `DWAccountBeforeFlowAtribuirStatusIntegracao` Ã© um fluxo autÃ´nomo que Ã© acionado apÃ³s a gravaÃ§Ã£o de registros do objeto Account. Sua principal funÃ§Ã£o Ã© determinar se o registro de conta deve receber o status de integraÃ§Ã£o "Pendente" com base em certas condiÃ§Ãµes, como o tipo de registro, alteraÃ§Ãµes em campos especÃ­ficos e o estado atual do campo de status de integraÃ§Ã£o.

Este Flow evita atuar em registros do tipo "Loja" e somente processa contas cujo campo `DWStatusIntegracao__c` nÃ£o foi alterado na operaÃ§Ã£o atual. Ele avalia se o registro foi criado ou se houve alteraÃ§Ãµes relevantes, diferenciando entre Pessoa FÃ­sica (PF) e Pessoa JurÃ­dica (PJ), e atualiza o campo `DWStatusIntegracao__c` para "Pendente" quando as condiÃ§Ãµes sÃ£o atendidas, sinalizando que esses registros precisam ser sincronizados com sistemas externos.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Automatizar a atribuiÃ§Ã£o do status de integraÃ§Ã£o "Pendente" em registros de Conta, com base em condiÃ§Ãµes especÃ­ficas relacionadas ao tipo de pessoa e alteraÃ§Ãµes em campos relevantes.

Etapas Principais
1. **Start**: Inicia apÃ³s a gravaÃ§Ã£o de registros do objeto Account, filtrando registros que nÃ£o sejam do tipo "Loja" e cujo campo `DWStatusIntegracao__c` nÃ£o foi alterado.
2. **DecisÃ£o "Qual_operacao"**: Avalia qual operaÃ§Ã£o deve ser realizada com base nas condiÃ§Ãµes de criaÃ§Ã£o ou alteraÃ§Ã£o de campos, diferenciando entre criaÃ§Ã£o de registros, Pessoa FÃ­sica (PF) e Pessoa JurÃ­dica (PJ).
3. **DecisÃ£o "Tipo de operaÃ§Ã£o"**: Dentro de cada regra, verifica se as condiÃ§Ãµes especÃ­ficas de alteraÃ§Ã£o de campos relevantes foram atendidas.
4. **Record Update "StatusPendente"**: Quando as condiÃ§Ãµes sÃ£o satisfeitas, atualiza o campo `DWStatusIntegracao__c` para "Pendente".

VariÃ¡veis
- `registroNovo` (Boolean) â€“ Indica se o registro Ã© novo (`ISNEW()`).
- `tipoPessoa` (String) â€“ Determina se o documento Ã© de Pessoa FÃ­sica ("PF") ou Pessoa JurÃ­dica ("PJ") com base no comprimento do documento.
- VariÃ¡veis de controle booleanas (ex.: `atualizaBairro`, `atualizaCEP`, etc.) â€“ Declaradas mas nÃ£o utilizadas explicitamente no XML, potencialmente para uso futuro ou lÃ³gica adicional.

ConsideraÃ§Ãµes
- O Flow Ã© acionado somente para registros de Conta que nÃ£o sejam do tipo "Loja" e cujo campo de status de integraÃ§Ã£o nÃ£o foi alterado na operaÃ§Ã£o.
- A lÃ³gica de decisÃ£o Ã© baseada na criaÃ§Ã£o do registro e na alteraÃ§Ã£o de campos especÃ­ficos, diferenciando Pessoa FÃ­sica e JurÃ­dica.
- Quando as condiÃ§Ãµes sÃ£o atendidas, o campo `DWStatusIntegracao__c` Ã© atualizado para "Pendente", indicando necessidade de sincronizaÃ§Ã£o externa.
- O Flow utiliza fÃ³rmulas para determinar o tipo de pessoa e se o registro Ã© novo, facilitando a lÃ³gica condicional.

Este fluxo Ã© uma peÃ§a central na automaÃ§Ã£o de integraÃ§Ã£o de contas, garantindo que registros relevantes sejam marcados corretamente para processos externos de sincronizaÃ§Ã£o.

# Flow: DW_Event_AtribuirDataControle

## DescriÃ§Ã£o
O Flow `DW_Event_AtribuirDataControle` Ã© um fluxo automatizado do Salesforce que tem como objetivo atribuir valores de data de controle a registros do objeto `Event`. Ele Ã© acionado antes de salvar um registro, especificamente durante operaÃ§Ãµes de criaÃ§Ã£o ou atualizaÃ§Ã£o, para garantir que as datas de controle estejam sincronizadas com os valores de inÃ­cio e tÃ©rmino do evento.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

## Objetivo
- Clonar as datas de inÃ­cio e tÃ©rmino do evento para os campos personalizados `DWDataInicioControle__c` e `DWDataTerminoControle__c`.
- Este fluxo Ã© acionado automaticamente na fase de prÃ©-salvamento do registro, garantindo que os campos de controle estejam atualizados antes do registro ser salvo no banco de dados.

## Etapas Principais
1. **InÃ­cio (Start)**
   - Acionado em registros do objeto `Event` durante operaÃ§Ãµes de criaÃ§Ã£o ou atualizaÃ§Ã£o (`CreateAndUpdate`).
   - Configurado para disparar antes do registro ser salvo (`RecordBeforeSave`).

2. **Assignment (Clonar datas)**
   - VariÃ¡vel de atribuiÃ§Ã£o chamada `ClocarDatas`.
   - Realiza duas operaÃ§Ãµes de atribuiÃ§Ã£o:
     - Atribui o valor de `$Record.EndDateTime` ao campo personalizado `$Record.DWDataTerminoControle__c`.
     - Atribui o valor de `$Record.StartDateTime` ao campo personalizado `$Record.DWDataInicioControle__c`.

## VariÃ¡veis
- **$Record**: Representa o registro do objeto `Event` que estÃ¡ sendo criado ou atualizado.
- **DWDataTerminoControle__c**: Campo personalizado onde serÃ¡ armazenada a data de tÃ©rmino de controle.
- **DWDataInicioControle__c**: Campo personalizado onde serÃ¡ armazenada a data de inÃ­cio de controle.
- **CurrentDateTime**: Data e hora atuais do fluxo, utilizada na etiqueta de entrevista, embora nÃ£o seja explicitamente atribuÃ­da neste fluxo.

## ConsideraÃ§Ãµes
- Este fluxo Ã© ativado automaticamente na fase de prÃ©-salvamento, garantindo que as datas de controle estejam sempre sincronizadas com as datas de inÃ­cio e tÃ©rmino do evento.
- Como o fluxo Ã© do tipo `AutoLaunchedFlow`, ele nÃ£o possui interface de usuÃ¡rio e Ã© acionado por processos internos, como gatilhos ou automaÃ§Ãµes.
- A configuraÃ§Ã£o de `RecordTriggerType` como `CreateAndUpdate` assegura que o fluxo serÃ¡ executado tanto na criaÃ§Ã£o quanto na atualizaÃ§Ã£o do registro `Event`.
- O fluxo estÃ¡ ativo (`Active`) e utiliza a versÃ£o 63.0 do API do Salesforce.

## Resumo
Este fluxo automatiza a cÃ³pia das datas de inÃ­cio e tÃ©rmino do evento para campos de controle personalizados, garantindo consistÃªncia de dados antes do registro ser salvo, facilitando processos de auditoria ou controle de prazos relacionados aos eventos.

Flow: DW_ScreenFlow_Layout_DetalhesPessoaFisica

DescriÃ§Ã£o
O Flow `DW_ScreenFlow_Layout_DetalhesPessoaFisica` Ã© um fluxo de tela (Screen Flow) utilizado para exibir detalhes de uma pessoa fÃ­sica relacionada a uma conta no Salesforce. Ele apresenta uma interface de usuÃ¡rio que permite visualizar informaÃ§Ãµes especÃ­ficas de uma conta, como DWRG__c, DWEstadoCivil__c, DWDataNascimento__c e PEP__c, em uma tela personalizada.

Tipo
- Screen Flow (Fluxo de Tela)

Objetivo
- Fornecer uma interface visual para que o usuÃ¡rio visualize detalhes especÃ­ficos de uma conta relacionada a uma pessoa fÃ­sica.
- Permitir navegaÃ§Ã£o de volta e finalizaÃ§Ã£o do fluxo apÃ³s a visualizaÃ§Ã£o dos detalhes.
- Carregar dinamicamente os campos de layout de acordo com a conta especÃ­fica, usando o componente `c:sobjectLayoutSection`.

Etapas Principais
1. Start â€“ InÃ­cio do fluxo, recebendo o `recordId` da conta como entrada.
2. Screen â€“ Exibe uma tela personalizada intitulada "Detalhes sobre a pessoa fÃ­sica", que apresenta os campos configurados no componente `form`.
3. NavegaÃ§Ã£o â€“ Permite que o usuÃ¡rio navegue de volta ou finalize o fluxo apÃ³s visualizar os detalhes.

Componentes e ConfiguraÃ§Ãµes
- Tela (`Informa_es_sobre_a_conta`): 
  - Apresenta um componente Lightning personalizado (`c:sobjectLayoutSection`) que exibe os campos `DWRG__c`, `DWEstadoCivil__c`, `DWDataNascimento__c` e `PEP__c`.
  - Os parÃ¢metros de entrada incluem:
    - `fields`: lista de campos a serem exibidos.
    - `objectApiName`: nome do objeto, neste caso, `Account`.
    - `recordId`: ID da conta, passado como variÃ¡vel de entrada.
    - `layoutSectionLabel`: tÃ­tulo da seÃ§Ã£o, "Detalhes sobre a pessoa fÃ­sica".
  - ConfiguraÃ§Ãµes adicionais:
    - Permite navegaÃ§Ã£o de volta (`allowBack`), finalizaÃ§Ã£o (`allowFinish`) e pausa (`allowPause`).
    - NÃ£o exibe cabeÃ§alho nem rodapÃ© na tela.
    - O componente `form` armazena automaticamente os valores exibidos.

VariÃ¡veis
- recordId (String, Entrada): ID da conta que serÃ¡ exibida no fluxo. Deve ser passado ao iniciar o fluxo para que os detalhes corretos sejam carregados.

ConsideraÃ§Ãµes
- Este fluxo deve ser iniciado com o `recordId` da conta para garantir que os detalhes corretos sejam exibidos.
- O componente Lightning personalizado `c:sobjectLayoutSection` Ã© responsÃ¡vel por renderizar dinamicamente os campos do layout, facilitando a manutenÃ§Ã£o e personalizaÃ§Ã£o da interface.
- O fluxo Ã© configurado para ser utilizado em ambientes Lightning, com layout de canvas automÃ¡tico (`AUTO_LAYOUT_CANVAS`).
- A label do fluxo inclui a data/hora atual (`$Flow.CurrentDateTime`) para facilitar o rastreamento de execuÃ§Ã£o.

Este fluxo Ã© ideal para cenÃ¡rios onde Ã© necessÃ¡rio exibir detalhes especÃ­ficos de uma conta de forma rÃ¡pida e visual, integrando componentes Lightning personalizados para uma experiÃªncia de usuÃ¡rio aprimorada.

# Flow: DW - Opportunity - After flow - Criar evento de cancelamento de reserva

## DescriÃ§Ã£o
Este Flow automatiza a criaÃ§Ã£o de um evento de cancelamento de reserva relacionado a uma oportunidade no Salesforce. Ele Ã© acionado apÃ³s a atualizaÃ§Ã£o de registros de oportunidade e cria um evento na entidade personalizada `DWReservaVeiculo__e`, com informaÃ§Ãµes especÃ­ficas relacionadas Ã  reserva e ao cliente.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

## Objetivo
- Monitorar alteraÃ§Ãµes no campo `Estoque__c` da oportunidade.
- Quando o campo `Estoque__c` for alterado de um valor nÃ£o nulo para vazio, criar automaticamente um evento de cancelamento de reserva, incluindo detalhes relevantes da oportunidade e do cliente.

## Etapas Principais
1. **Start (Disparador)**  
   Acionado apÃ³s a atualizaÃ§Ã£o de registros do objeto `Opportunity`. O fluxo verifica se o campo `Estoque__c` foi alterado de um valor preenchido para vazio, usando uma fÃ³rmula de filtro.

2. **Filtro de CondiÃ§Ã£o**  
   A condiÃ§Ã£o verifica:
   - Se o campo `Estoque__c` foi alterado (`ISCHANGED`).
   - Se o valor anterior de `Estoque__c` nÃ£o estava vazio (`NOT(ISBLANK({!$Record__Prior.Estoque__c}))`).
   - Se o valor atual de `Estoque__c` estÃ¡ vazio (`ISBLANK({!$Record.Estoque__c})`).

3. **Criar Evento (`Criar_evento`)**  
   Se a condiÃ§Ã£o for verdadeira, o Flow cria um novo registro na entidade personalizada `DWReservaVeiculo__e`. Os atributos do evento sÃ£o preenchidos com informaÃ§Ãµes da oportunidade, do cliente, da loja, do proprietÃ¡rio e de outros relacionamentos:
   - `DWCodigoConta__c`: CÃ³digo ERP da conta relacionada Ã  oportunidade.
   - `DWCodigoEmpresa__c`: CÃ³digo da loja relacionada.
   - `DWCodigoUsuario__c`: ID do proprietÃ¡rio da oportunidade.
   - `DWCodigoVeiculo__c`: CÃ³digo do veÃ­culo, obtido do estoque relacionado.
   - `DataReserva__c`: Data de reserva definida como 5 dias antes da data atual (`cincoDiasAtras`).
   - `EmailCliente__c`: Email do cliente.
   - `Midia__c`: CÃ³digo externo de mÃ­dia.
   - `NomeCliente__c`: Nome do cliente.

## VariÃ¡veis e FÃ³rmulas
- **cincoDiasAtras**: FÃ³rmula que calcula a data de 5 dias atrÃ¡s a partir da data atual (`$Flow.CurrentDate - 5`).

## ConsideraÃ§Ãµes
- O fluxo Ã© acionado apenas quando hÃ¡ uma mudanÃ§a especÃ­fica no campo `Estoque__c` da oportunidade, garantindo que eventos de cancelamento sejam criados apenas em situaÃ§Ãµes relevantes.
- A criaÃ§Ã£o do evento utiliza o mÃ©todo `recordCreates` com `storeOutputAutomatically` definido como `true`, garantindo que o registro seja salvo imediatamente apÃ³s a execuÃ§Ã£o.
- As referÃªncias de campos utilizam variÃ¡veis de contexto, como `$Record`, `$Record__Prior`, e relacionamentos para obter informaÃ§Ãµes necessÃ¡rias.

## Resumo
Este Flow automatiza a geraÃ§Ã£o de eventos de cancelamento de reserva ao detectar a liberaÃ§Ã£o do estoque na oportunidade, garantindo que o sistema registre adequadamente essas aÃ§Ãµes sem intervenÃ§Ã£o manual.

Flow: DWLeadBeforeUpdateValidaEmailAtualizar

DescriÃ§Ã£o
O Flow `DWLeadBeforeUpdateValidaEmailAtualizar` Ã© um Flow do tipo AutoLaunched que Ã© executado automaticamente antes da atualizaÃ§Ã£o de um registro de Lead. Sua principal funÃ§Ã£o Ã© validar se o novo endereÃ§o de e-mail informado no Lead estÃ¡ presente na blacklist de e-mails (`BlackList_Email__c`). Caso o e-mail esteja na blacklist, o Flow impede a atualizaÃ§Ã£o do Lead e exibe uma mensagem de erro ao usuÃ¡rio, garantindo que e-mails bloqueados nÃ£o sejam utilizados.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Validar se o e-mail atualizado de um Lead estÃ¡ presente na blacklist.
- Impedir a atualizaÃ§Ã£o do Lead com e-mails nÃ£o permitidos, exibindo uma mensagem de erro especÃ­fica.

Etapas Principais
1. Start â€“ Disparado quando o campo Email do Lead Ã© alterado e a atualizaÃ§Ã£o estÃ¡ sendo feita antes de salvar.
2. Get Records (`emailS`) â€“ Consulta na entidade `BlackList_Email__c` para verificar se o novo e-mail do Lead estÃ¡ na blacklist.
3. Decision (`Est_na_blacklist`) â€“ Verifica se o e-mail consultado na blacklist nÃ£o Ã© nulo.
4. Se o e-mail estiver na blacklist, exibe uma mensagem de erro personalizada (`erro_email`) e impede a atualizaÃ§Ã£o.

VariÃ¡veis
- `$Record.Email` (padrÃ£o) â€“ E-mail do Lead que estÃ¡ sendo atualizado.
- `emailS` â€“ Recurso de consulta que busca na entidade `BlackList_Email__c` um registro com o mesmo e-mail.
- `erro_email` â€“ Mensagem de erro personalizada exibida quando o e-mail estÃ¡ na blacklist.

Fluxo Detalhado
- O fluxo inicia com o gatilho `RecordBeforeSave` na atualizaÃ§Ã£o de Lead, verificando se o campo Email foi alterado (`IsChanged`).
- Em seguida, realiza uma consulta (`Get Records`) na entidade `BlackList_Email__c` para verificar se o e-mail do Lead estÃ¡ presente na blacklist.
- A decisÃ£o `Est_na_blacklist` avalia se o resultado da consulta retornou um registro (ou seja, o e-mail estÃ¡ na blacklist).
- Caso o e-mail esteja na blacklist (`Sim`), o fluxo direciona para o recurso de erro (`erro_email`), que exibe uma mensagem personalizada: "E-mail informado nÃ£o Ã© permitido, favor verificar." e impede a atualizaÃ§Ã£o do Lead.

ConsideraÃ§Ãµes
- Este Flow Ã© ativado automaticamente antes da atualizaÃ§Ã£o do Lead, garantindo validaÃ§Ã£o em tempo real.
- A consulta na blacklist Ã© feita apenas se o campo Email foi alterado, otimizando o processamento.
- A mensagem de erro personalizada ajuda na comunicaÃ§Ã£o clara ao usuÃ¡rio final, evitando atualizaÃ§Ãµes com e-mails bloqueados.
- O Flow utiliza o recurso de erro personalizado para bloquear a operaÃ§Ã£o de forma controlada e informativa.

Este fluxo Ã© uma implementaÃ§Ã£o eficiente para garantir a integridade dos e-mails utilizados em Leads, evitando o uso de endereÃ§os bloqueados na sua base de dados.

# Flow: DW - Screen Flow - Layout - InformaÃ§Ãµes sistema

## DescriÃ§Ã£o
O Flow `DW - Screen Flow - Layout - InformaÃ§Ãµes sistema` Ã© um fluxo de tela (Screen Flow) que exibe informaÃ§Ãµes do sistema relacionadas a uma conta especÃ­fica. Ele apresenta uma tela com detalhes como criador, datas de modificaÃ§Ã£o, cÃ³digo ERP, status de integraÃ§Ã£o e mensagens de integraÃ§Ã£o, permitindo ao usuÃ¡rio visualizar esses dados de forma organizada.

## Tipo
- Screen Flow (Fluxo de Tela)

## Objetivo
- Apresentar informaÃ§Ãµes detalhadas do sistema relacionadas Ã  conta, utilizando um layout personalizado.
- Permitir navegaÃ§Ã£o de volta e finalizaÃ§Ã£o apÃ³s a visualizaÃ§Ã£o.

## Etapas Principais
1. **Start**: InÃ­cio do fluxo, recebendo o `recordId` da conta como parÃ¢metro de entrada.
2. **Screen - InformaÃ§Ãµes do sistema**: Tela que exibe os campos especÃ­ficos da conta, incluindo:
   - CreatedById
   - CreatedDate
   - LastModifiedById
   - LastModifiedDate
   - DWCodigoERP__c
   - DWStatusIntegracao__c
   - DWMensagemIntegracao__c

## ConfiguraÃ§Ãµes e Propriedades
- **VersÃ£o API**: 63.0
- **Label da Tela**: `DW - Screen Flow - Layout - InformaÃ§Ãµes sistema`
- **Label do Flow**: `DW - Screen Flow - Layout - InformaÃ§Ãµes sistema`
- **Modo de Canvas**: `AUTO_LAYOUT_CANVAS`
- **Tipo de Processo**: `Flow`
- **Status**: Ativo

## VariÃ¡veis
- `recordId` (String, Entrada): ID da conta que serÃ¡ exibida na tela. Essa variÃ¡vel deve ser passada ao iniciar o fluxo, geralmente via URL ou acionamento externo.

## Detalhes do Componente de Tela
- **Nome**: `Informa_es_sobre_a_conta`
- **Tipo**: Componente de layout personalizado (`c:sobjectLayoutSection`)
- **Campos exibidos**:
  - `CreatedById`
  - `CreatedDate`
  - `LastModifiedById`
  - `LastModifiedDate`
  - `DWCodigoERP__c`
  - `DWStatusIntegracao__c`
  - `DWMensagemIntegracao__c`
- **ConfiguraÃ§Ãµes adicionais**:
  - Permite voltar (`allowBack`): `true`
  - Permite finalizar (`allowFinish`): `true`
  - Permite pausar (`allowPause`): `true`
  - Header e footer ocultos (`showHeader` e `showFooter`): `false`

## ConsideraÃ§Ãµes
- Este fluxo Ã© utilizado para fornecer uma visÃ£o rÃ¡pida e organizada das informaÃ§Ãµes do sistema relacionadas Ã  conta, facilitando a anÃ¡lise por parte do usuÃ¡rio.
- Deve ser iniciado passando o `recordId` da conta desejada.
- Pode ser integrado a outros processos ou acessado via botÃ£o personalizado, Lightning App ou URL direta.

---

Se precisar de mais detalhes ou de uma anÃ¡lise de componentes especÃ­ficos, estou Ã  disposiÃ§Ã£o!

# Flow: DWOpportunityBeforeFlowUpdateAtualizarFaseOportunidadeEmPerseguicao

## DescriÃ§Ã£o
Este Flow automatiza a atualizaÃ§Ã£o do estÃ¡gio de uma oportunidade para "Em atendimento" apÃ³s certas condiÃ§Ãµes serem atendidas. Ele Ã© acionado apÃ³s a modificaÃ§Ã£o de registros de oportunidade, especificamente quando hÃ¡ uma mudanÃ§a no proprietÃ¡rio ou no estÃ¡gio, e a oportunidade estÃ¡ inicialmente em "NÃ£o iniciado". AlÃ©m disso, verifica se a oportunidade foi criada hÃ¡ mais de um minuto para evitar atualizaÃ§Ãµes prematuras.

## Tipo
- **AutoLaunched Flow (sem interface de usuÃ¡rio)**

## Objetivo
- Monitorar oportunidades que foram atualizadas e que estavam em estÃ¡gio "NÃ£o iniciado".
- Garantir que a oportunidade nÃ£o seja uma criaÃ§Ã£o recente (menos de 1 minuto).
- Se as condiÃ§Ãµes forem atendidas, atualizar o estÃ¡gio da oportunidade para "Em atendimento".
- Registrar uma mensagem de status no Chatter informando a atualizaÃ§Ã£o.

## Etapas Principais
1. **Start**  
   Acionamento do Flow apÃ³s uma atualizaÃ§Ã£o na oportunidade (`RecordAfterSave`).  
   - Filtros:
     - O campo `DWUltimaModificacaoProprietario__c` foi alterado (`IsChanged = true`).
     - O estÃ¡gio atual Ã© "NÃ£o iniciado".
   - Objeto: `Opportunity`

2. **DecisÃ£o: RegistroCriadoMenos1Minuto**  
   Verifica se a oportunidade foi criada hÃ¡ mais de 0,25 dias (~6 horas).  
   - FÃ³rmula: `(({!$Record.LastModifiedDate} - {!$Record.CreatedDate}) * 1440) < 0.25`  
   - Resultado:
     - **Sim**: A oportunidade foi criada hÃ¡ mais de 6 horas, prossegue para atualizaÃ§Ã£o.
     - **NÃ£o**: A oportunidade foi criada hÃ¡ menos de 6 horas, o Flow nÃ£o realiza a atualizaÃ§Ã£o.

3. **Update Records: AtualizarFaseOportunidade**  
   Se a decisÃ£o for "Sim", o estÃ¡gio da oportunidade Ã© atualizado para `"Em atendimento"`.

4. **Mensagem de Chatter**  
   Uma mensagem Ã© gerada no Chatter informando que o status da oportunidade foi atualizado, incluindo a data e hora atuais.

## VariÃ¡veis
- **Entrada**:
  - Nenhuma variÃ¡vel de entrada especÃ­fica, pois o Flow Ã© acionado por um evento de atualizaÃ§Ã£o de oportunidade.
- **Internas**:
  - `criadoRecente` (Boolean) â€“ FÃ³rmula que calcula se a oportunidade foi criada hÃ¡ menos de 6 horas.
  - `DWUltimaModificacaoProprietario__c` â€“ Campo que indica se o proprietÃ¡rio foi alterado na Ãºltima atualizaÃ§Ã£o.
  - `$Record` â€“ ReferÃªncia ao registro de oportunidade que disparou o Flow.

## ConsideraÃ§Ãµes
- Este Flow Ã© acionado apenas apÃ³s atualizaÃ§Ãµes de registros de oportunidade (`RecordAfterSave`).
- A lÃ³gica de tempo garante que atualizaÃ§Ãµes rÃ¡pidas, possivelmente automÃ¡ticas ou de testes, nÃ£o acionem a mudanÃ§a de estÃ¡gio.
- O fluxo Ã© configurado para ser ativo e pode ser ajustado para incluir outros critÃ©rios ou etapas adicionais, se necessÃ¡rio.
- A mensagem de Chatter ajuda na rastreabilidade das mudanÃ§as automÃ¡ticas feitas pelo Flow.

---

Se precisar de mais detalhes ou de uma anÃ¡lise de outros componentes do Flow, estou Ã  disposiÃ§Ã£o!

Flow: DWAtivoBeforeFlowAttCampoIDExternoLojaChassiStatus

DescriÃ§Ã£o
O Flow `DWAtivoBeforeFlowAttCampoIDExternoLojaChassiStatus` Ã© um Flow de lanÃ§amento automÃ¡tico (Before Save) que Ã© acionado ao criar ou atualizar registros do objeto `Asset`. Sua finalidade principal Ã© gerar e atribuir um valor concatenado de campos especÃ­ficos (`DWChassi__c` e `Status`) ao campo de metadado `DWIDExternoChassiStatus__c`, sempre que esses campos forem preenchidos ou alterados.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)
- Record-Triggered (antes do salvamento do registro)

Objetivo
- Construir uma string composta pelo Chassi (`DWChassi__c`) e o Status (`Status`) do ativo.
- Atribuir essa string ao campo de metadado `DWIDExternoChassiStatus__c`.
- Executar essa lÃ³gica ao criar um novo ativo ou ao alterar o campo `Status`, garantindo que o valor esteja atualizado antes do registro ser salvo.

Etapas Principais
1. Start â€“ Disparo do Flow ao criar ou atualizar registros do objeto `Asset`, com condiÃ§Ãµes especÃ­ficas:
   - Quando um novo registro Ã© criado e os campos `DWChassi__c` e `Status` estÃ£o preenchidos.
   - Quando o campo `Status` Ã© alterado e o novo valor nÃ£o estÃ¡ vazio.
2. Assignment â€“ AtribuiÃ§Ã£o do valor concatenado ao campo de metadado `DWIDExternoChassiStatus__c`:
   - O valor atribuÃ­do Ã© uma combinaÃ§Ã£o do campo `DWChassi__c` e do texto do campo `Status`.
   - Essa concatenaÃ§Ã£o Ã© feita atravÃ©s de uma fÃ³rmula definida como `chassiStatusForm`.
3. Formula â€“ CriaÃ§Ã£o da expressÃ£o que concatena os campos:
   - `{!$Record.DWChassi__c} & TEXT({!$Record.Status})`

VariÃ¡veis e Elementos
- `chassiStatusForm` (Formula) â€“ String que concatena o Chassi e o Status.
- `$Record` â€“ ReferÃªncia ao registro do objeto `Asset` que estÃ¡ sendo criado ou atualizado.
- `DWIDExternoChassiStatus__c` â€“ Campo de metadado onde o valor concatenado Ã© armazenado.

ConsideraÃ§Ãµes
- O Flow Ã© acionado apenas em condiÃ§Ãµes especÃ­ficas, evitando execuÃ§Ãµes desnecessÃ¡rias:
  - Quando o registro Ã© novo e os campos relevantes estÃ£o preenchidos.
  - Quando hÃ¡ uma mudanÃ§a no campo `Status` e este nÃ£o estÃ¡ vazio.
- Como Ã© um Flow de Before Save, a alteraÃ§Ã£o no campo `DWIDExternoChassiStatus__c` Ã© aplicada imediatamente antes do registro ser salvo no banco de dados.
- O uso de uma fÃ³rmula (`chassiStatusForm`) garante que a concatenaÃ§Ã£o seja dinÃ¢mica e atualizada sempre que o Flow for acionado.

Este Flow Ã© Ãºtil para manter um campo de metadado atualizado com uma combinaÃ§Ã£o Ãºnica de informaÃ§Ãµes do ativo, facilitando buscas, integraÃ§Ãµes ou processos que dependam dessa concatenaÃ§Ã£o.

Flow: DWVeiculoInteresseAfterFlowUpdateRegistrarAtualizacao

DescriÃ§Ã£o
O Flow `DWVeiculoInteresseAfterFlowUpdateRegistrarAtualizacao` Ã© um Flow de lanÃ§amento automÃ¡tico (auto-launched) que Ã© acionado apÃ³s a criaÃ§Ã£o de registros do objeto customizado `VeiculoInteresse__c`. Sua finalidade principal Ã© atualizar os campos de data de modificaÃ§Ã£o nos registros relacionados de Lead e Oportunidade, garantindo que esses registros reflitam a Ãºltima alteraÃ§Ã£o do veÃ­culo de interesse.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Registrar a data de Ãºltima modificaÃ§Ã£o no Lead e na Oportunidade relacionados ao veÃ­culo de interesse criado.
- Garantir que os registros de Lead e Oportunidade associados estejam atualizados com a data atual no momento do registro do veÃ­culo de interesse.

Etapas Principais
1. Start â€“ Disparado apÃ³s a criaÃ§Ã£o de um registro `VeiculoInteresse__c`, desde que pelo menos um dos campos `Lead__c` ou `Oportunidade__c` esteja preenchido.
2. Get Records â€“ Busca o Lead relacionado (`LeadS`) com base no ID armazenado em `$Record.Lead__c`.
3. Get Records â€“ Busca a Oportunidade relacionada (`OppS`) com base no ID armazenado em `$Record.Oportunidade__c`.
4. Decision â€“ Verifica se o registro de Lead deve ser atualizado (se `Lead__c` nÃ£o Ã© nulo e `Oportunidade__c` Ã© nulo).
5. Decision â€“ Verifica se o registro de Oportunidade deve ser atualizado (se `Oportunidade__c` nÃ£o Ã© nulo e `Lead__c` Ã© nulo).
6. Assignment â€“ Atribui a data atual ao campo `DWUltimaModificacaoProprietario__c` do Lead, se aplicÃ¡vel.
7. Assignment â€“ Atribui a data atual ao campo `DWUltimaModificacaoProprietario__c` da Oportunidade, se aplicÃ¡vel.
8. Update Records â€“ Atualiza o Lead com a nova data, se necessÃ¡rio.
9. Update Records â€“ Atualiza a Oportunidade com a nova data, se necessÃ¡rio.

VariÃ¡veis
- `$Record` (registro que disparou o Flow): objeto `VeiculoInteresse__c`.
- `LeadS` (Record Variable): armazena o Lead relacionado.
- `OppS` (Record Variable): armazena a Oportunidade relacionada.
- Outros variÃ¡veis internas para controle de fluxo e formataÃ§Ã£o.

ConsideraÃ§Ãµes
- O Flow Ã© acionado somente na criaÃ§Ã£o de registros `VeiculoInteresse__c`.
- Atualiza os registros de Lead e Oportunidade apenas se eles estiverem relacionados e se um deles estiver presente.
- As atualizaÃ§Ãµes de data usam `$Flow.CurrentDateTime` para registrar o momento exato da alteraÃ§Ã£o.
- O Flow Ã© configurado para rodar automaticamente, sem necessidade de intervenÃ§Ã£o do usuÃ¡rio.
- Ã‰ importante garantir que os campos de relacionamento (`Lead__c` e `Oportunidade__c`) estejam corretamente preenchidos para que o Flow funcione como esperado.

Este fluxo automatiza a manutenÃ§Ã£o do histÃ³rico de modificaÃ§Ãµes relacionadas ao veÃ­culo de interesse, facilitando o acompanhamento de atualizaÃ§Ãµes importantes nos registros de Lead e Oportunidade vinculados.

# Flow: DWLeadBeforeFlowUpdateRegistrarModificacao.flow

## DescriÃ§Ã£o
Este Flow automatizado Ã© acionado antes de uma atualizaÃ§Ã£o em registros do objeto Lead. Sua finalidade principal Ã© registrar a data e hora da Ãºltima modificaÃ§Ã£o do lead, especificamente quando determinados campos sÃ£o alterados. Assim, mantÃ©m um histÃ³rico atualizado da Ãºltima alteraÃ§Ã£o relevante no campo personalizado `DWUltimaModificacaoProprietario__c`.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

## Objetivo
- Detectar mudanÃ§as em diversos campos do Lead durante uma atualizaÃ§Ã£o.
- Registrar a momento exato da Ãºltima modificaÃ§Ã£o em um campo personalizado (`DWUltimaModificacaoProprietario__c`).

## Como funciona
Este Flow Ã© configurado para ser disparado **antes da gravaÃ§Ã£o** do registro (Record Before Save) e somente se algum dos campos listados for alterado. Caso a condiÃ§Ã£o seja atendida, ele atribui a data e hora atuais ao campo `DWUltimaModificacaoProprietario__c`.

## Etapas Principais
1. **InÃ­cio (Start)**  
   - O Flow Ã© acionado na fase de prÃ©-gravaÃ§Ã£o (`RecordBeforeSave`) para registros do objeto Lead.
   - Aplica filtros para verificar se algum dos seguintes campos foi alterado:
     - OwnerId, Company, MobilePhone, Email, DWDocumento__c, DWLoja__c, LeadSource, Midia__c, DWVeiculoUsadoTroca__c, DWPlaca__c, Description, FirstName, LastName, Salutation.
   - Se pelo menos um desses campos foi modificado, o Flow prossegue para a prÃ³xima etapa.

2. **AtribuiÃ§Ã£o (Assign)**  
   - A variÃ¡vel `AtribuirCampoModificado` Ã© usada para definir o valor do campo personalizado `DWUltimaModificacaoProprietario__c`.
   - Essa variÃ¡vel recebe a data e hora atuais (`$Flow.CurrentDateTime`).

3. **AtualizaÃ§Ã£o do Registro**  
   - Atribui a data/hora atual ao campo `DWUltimaModificacaoProprietario__c` do registro Lead que estÃ¡ sendo atualizado.

## VariÃ¡veis
- **$Record**: ReferÃªncia ao registro Lead que estÃ¡ sendo atualizado.
- **$Flow.CurrentDateTime**: Valor de data e hora atual no momento da execuÃ§Ã£o do Flow.
- **AtribuirCampoModificado**: VariÃ¡vel de atribuiÃ§Ã£o que armazena a data/hora da modificaÃ§Ã£o.

## ConsideraÃ§Ãµes
- Este Flow Ã© acionado **somente na fase de prÃ©-gravaÃ§Ã£o** para garantir que a data de modificaÃ§Ã£o seja registrada antes do registro ser salvo.
- A lÃ³gica de filtros garante que somente alteraÃ§Ãµes relevantes disparem a atualizaÃ§Ã£o do campo de modificaÃ§Ã£o.
- O campo `DWUltimaModificacaoProprietario__c` Ã© atualizado apenas quando hÃ¡ mudanÃ§as nos campos monitorados, evitando registros desnecessÃ¡rios de data de modificaÃ§Ã£o.

## Resumo
Este Flow automatiza o registro da Ãºltima modificaÃ§Ã£o de um Lead, garantindo que a data e hora da Ãºltima alteraÃ§Ã£o relevante sejam sempre atualizadas de forma precisa e automÃ¡tica, facilitando o acompanhamento do histÃ³rico de modificaÃ§Ãµes no Lead.

# Flow: DWEnvelopeDocusignAfterCreateUpdateAtualizaStatusTermo

## DescriÃ§Ã£o
Este Flow do tipo **AutoLaunched** Ã© acionado automaticamente apÃ³s a criaÃ§Ã£o ou atualizaÃ§Ã£o de um registro do objeto `DWEnvelopeDocusign__c`. Sua finalidade principal Ã© verificar se o campo de relacionamento `DWTermo__c` estÃ¡ preenchido. Caso esteja, ele atualiza o registro relacionado do objeto `Termo__c`, marcando que foi criado via Flow e sincronizando o status da assinatura (`DWStatusAssinatura__c`). O objetivo Ã© garantir que o status do termo seja atualizado de acordo com o andamento do envelope no DocuSign, promovendo a consistÃªncia entre os objetos relacionados.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

## Objetivo
- Monitorar registros de envelopes do DocuSign (`DWEnvelopeDocusign__c`)
- Verificar se o campo de relacionamento `DWTermo__c` estÃ¡ preenchido
- Atualizar o registro do termo relacionado (`Termo__c`) para indicar que foi criado via Flow e sincronizar o status da assinatura

## Etapas Principais
1. **InÃ­cio**: O Flow Ã© disparado apÃ³s a criaÃ§Ã£o ou atualizaÃ§Ã£o de um registro `DWEnvelopeDocusign__c`. A condiÃ§Ã£o de disparo Ã© que o registro seja novo ou que o campo `DWStatusAssinatura__c` tenha sido alterado.
2. **DecisÃ£o - EnvelopeTermo**:
   - Verifica se o campo `DWTermo__c` do registro `DWEnvelopeDocusign__c` nÃ£o estÃ¡ nulo.
   - Se a condiÃ§Ã£o for verdadeira (`Sim`), o Flow prossegue para atualizar o termo relacionado.
3. **AtualizaÃ§Ã£o do Termo (`Atualiza_status_do_termo`)**:
   - Localiza o registro `Termo__c` cujo ID corresponde ao valor de `DWTermo__c`.
   - Marca o campo `DWCriadoViaFlow__c` como `true`, indicando que o termo foi criado via Flow.
   - Atualiza o campo `DWStatusAssinatura__c` com o valor atual do envelope, sincronizando o status da assinatura.

## VariÃ¡veis
- **$Record**: ReferÃªncia ao registro de `DWEnvelopeDocusign__c` que acionou o Flow.
- **$Record.DWTermo__c**: Campo de relacionamento que aponta para o `Termo__c`.
- **$Record.DWStatusAssinatura__c**: Campo que indica o status da assinatura no envelope.
- **Atualiza_status_do_termo**: Objeto de atualizaÃ§Ã£o que localiza e modifica o registro `Termo__c`.

## ConsideraÃ§Ãµes
- O Flow Ã© acionado em eventos de criaÃ§Ã£o ou atualizaÃ§Ã£o do envelope, especialmente quando o campo `DWStatusAssinatura__c` Ã© alterado.
- A lÃ³gica de decisÃ£o garante que apenas registros com o campo `DWTermo__c` preenchido sejam processados, evitando atualizaÃ§Ãµes desnecessÃ¡rias.
- A atualizaÃ§Ã£o do termo marca que ele foi criado via Flow, alÃ©m de sincronizar o status da assinatura, mantendo a integridade dos dados relacionados ao processo de assinatura eletrÃ´nica via DocuSign.

---

Se precisar de mais detalhes ou de uma anÃ¡lise de outros componentes do Flow, estou Ã  disposiÃ§Ã£o!

# Flow: DWLeadBeforeFlowUpdateAtualizarFaseLeadEmPerseguicao

## DescriÃ§Ã£o
O Flow `DWLeadBeforeFlowUpdateAtualizarFaseLeadEmPerseguicao` Ã© um Flow autolanÃ§ado que automatiza a atualizaÃ§Ã£o do status de um Lead para "PerseguiÃ§Ã£o" quando certas condiÃ§Ãµes de modificaÃ§Ã£o sÃ£o atendidas. Ele Ã© acionado apÃ³s a gravaÃ§Ã£o de um registro de Lead, especificamente quando o proprietÃ¡rio do Lead Ã© alterado e o status ainda estÃ¡ como "NÃ£o trabalhado".

## Tipo
- AutoLanÃ§ado (sem interface de usuÃ¡rio)

## Objetivo
- Monitorar alteraÃ§Ãµes no campo ProprietÃ¡rio do Lead.
- Verificar se o Lead estÃ¡ com o status "NÃ£o trabalhado".
- Se o Lead foi criado hÃ¡ mais de 0,25 dias (~6 horas) e o proprietÃ¡rio foi alterado, atualizar o status para "PerseguiÃ§Ã£o".

## Etapas Principais
1. **Start**  
   - Acionamento: apÃ³s a gravaÃ§Ã£o de um Lead (`RecordAfterSave`)  
   - CondiÃ§Ãµes de disparo:
     - O campo `DWUltimaModificacaoProprietario__c` foi alterado (`IsChanged = true`)
     - O campo `Status` Ã© igual a "NÃ£o trabalhado"
   - Filtros aplicados para garantir que o fluxo sÃ³ execute quando essas condiÃ§Ãµes forem atendidas.

2. **DecisÃ£o: RegistroCriadoMenos1Minuto**  
   - Verifica se o Lead foi criado hÃ¡ mais de 0,25 dias (~6 horas).  
   - Utiliza uma fÃ³rmula para calcular a diferenÃ§a entre `LastModifiedDate` e `CreatedDate`, multiplicada por 1440 para converter dias em minutos.  
   - Se a diferenÃ§a for menor que 0,25, o Lead Ã© considerado recente, e o fluxo nÃ£o prossegue para a atualizaÃ§Ã£o.

3. **AtualizaÃ§Ã£o de Registro: AtualizarFaseLead**  
   - Caso a decisÃ£o seja "Sim" (ou seja, o Lead foi criado hÃ¡ mais de 6 horas), o fluxo atualiza o campo `Status` do Lead para "PerseguiÃ§Ã£o".

## VariÃ¡veis
- **criadoRecente** (Formula, Boolean)  
  - ExpressÃ£o: `(({!$Record.LastModifiedDate} - {!$Record.CreatedDate}) * 1440) < 0.25`  
  - Determina se o Lead foi criado hÃ¡ menos de 6 horas.

## ConsideraÃ§Ãµes
- O fluxo Ã© acionado apenas quando hÃ¡ uma mudanÃ§a no proprietÃ¡rio do Lead (`DWUltimaModificacaoProprietario__c`).
- A atualizaÃ§Ã£o do status para "PerseguiÃ§Ã£o" ocorre somente se o Lead nÃ£o for recente (criado hÃ¡ mais de 6 horas).
- O fluxo foi atualizado na versÃ£o 17/05/2025 para remover a publicaÃ§Ã£o no Chatter, corrigindo problemas de permissÃ£o.
- O fluxo Ã© configurado para rodar no ambiente padrÃ£o (`Default`) e utiliza o construtor Lightning Flow (`LightningFlowBuilder`).

## Resumo
Este Flow automatiza a transiÃ§Ã£o do Lead para o status "PerseguiÃ§Ã£o" apÃ³s uma mudanÃ§a no proprietÃ¡rio, garantindo que apenas Leads mais antigos (criados hÃ¡ mais de 6 horas) sejam atualizados, evitando aÃ§Ãµes em registros recÃ©m-criados.

Flow: DWVeiculoInteresseAtribuirPrecoModeloProduto

DescriÃ§Ã£o
O Flow `DWVeiculoInteresseAtribuirPrecoModeloProduto` Ã© uma automaÃ§Ã£o do Salesforce que atua no momento do salvamento de registros do objeto `VeiculoInteresse__c`. Sua principal funÃ§Ã£o Ã© atribuir o preÃ§o do modelo/produto ao campo correspondente, com base na relaÃ§Ã£o com o Price Book ativo e o produto relacionado ao veÃ­culo de interesse.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio, acionado por evento de gravaÃ§Ã£o)

Objetivo
- Quando um novo registro de `VeiculoInteresse__c` Ã© criado ou atualizado, o Flow verifica se hÃ¡ um Price Book ativo e vÃ¡lido para o modelo do veÃ­culo.
- Caso positivo, busca o preÃ§o do produto no Price Book e atribui esse valor ao campo `$Record.DWPrecoModelo__c`.

Etapas Principais
1. **Start**: Disparado ao criar ou atualizar um registro de `VeiculoInteresse__c` onde o campo `DWModelo__c` nÃ£o estÃ¡ nulo.
2. **Get Records - PriceBookS**: Consulta o Price Book ativo e padrÃ£o (`IsActive = true`, `IsStandard = true`).
3. **Get Records - PriceBookEntryS**: Busca o registro de Price Book Entry correspondente ao produto (`DWModelo__c`) e ao Price Book obtido na etapa anterior.
4. **Decision - ObtevePriceBook?**: Verifica se o Price Book foi encontrado.
5. **Decision - ObtevePriceBookEntry?**: Verifica se o Price Book Entry foi localizado.
6. **Assignment - AttrPrecoModelo**: Caso ambos os registros tenham sido encontrados, atribui o preÃ§o do Price Book Entry ao campo `$Record.DWPrecoModelo__c`.

VariÃ¡veis
- `$Record` (padrÃ£o): Registro do objeto `VeiculoInteresse__c` que estÃ¡ sendo criado ou atualizado.
- `PriceBookS` (Recurso de consulta): Obtem o Price Book ativo e padrÃ£o.
- `PriceBookEntryS` (Recurso de consulta): Obtem o preÃ§o do produto no Price Book.
- `ObtevePriceBook` (DecisÃ£o): Verifica se o Price Book foi localizado.
- `ObtevePriceBookEntry` (DecisÃ£o): Verifica se o Price Book Entry foi localizado.
- `AttrPrecoModelo` (AtribuiÃ§Ã£o): A variÃ¡vel que armazena o preÃ§o a ser atribuÃ­do ao campo do registro.

ConsideraÃ§Ãµes
- Este Flow Ã© acionado automaticamente na fase de Before Save, garantindo que o preÃ§o seja atualizado antes do registro ser salvo definitivamente.
- Ã‰ fundamental que o campo `DWModelo__c` esteja preenchido para que o Flow seja executado.
- O fluxo garante que, se nÃ£o encontrar um Price Book ativo ou um Price Book Entry correspondente, o campo de preÃ§o nÃ£o serÃ¡ alterado.
- O Flow utiliza filtros especÃ­ficos para garantir que apenas Price Books ativos e padrÃ£o sejam considerados, alÃ©m de buscar o Price Book Entry correspondente ao produto do veÃ­culo de interesse.

Este fluxo automatiza a atribuiÃ§Ã£o de preÃ§os de modelos/produtos de forma eficiente, garantindo consistÃªncia e integridade nos registros de veÃ­culos de interesse.

# Flow: GBContaAfterCreateExcluirContatoContaPF

## DescriÃ§Ã£o
O Flow `GBContaAfterCreateExcluirContatoContaPF` Ã© um fluxo automatizado do tipo **AutoLaunched** que Ã© acionado apÃ³s a criaÃ§Ã£o de uma conta (trigger de Record After Save). Sua principal funÃ§Ã£o Ã© verificar se hÃ¡ um contato associado Ã  conta com o tipo de documento "CPF" e, se esse contato existir, excluÃ­-lo automaticamente.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio, acionado por evento de criaÃ§Ã£o de registro)

## Objetivo
- ApÃ³s a criaÃ§Ã£o de uma conta, verificar se hÃ¡ um contato relacionado com o campo `DWTipoDocumentoForm__c` igual a "CPF".
- Se existir, excluir esse contato relacionado Ã  conta.

## Etapas Principais
1. **Start**: O fluxo inicia quando uma nova conta Ã© criada (`RecordAfterSave`), filtrando para contas cujo campo `DWTipoDocumentoForm__c` seja igual a "CPF".
2. **Get Records â€“ Obter Contato**: Busca o primeiro contato relacionado Ã  conta pelo campo `AccountId`. Essa busca Ã© feita com a condiÃ§Ã£o de que o contato esteja vinculado Ã  conta criada.
3. **Decision â€“ Existe Contato** (`ExisteContato`): Verifica se o contato obtido na etapa anterior nÃ£o Ã© nulo.
   - Se **Sim** (contato encontrado), passa para a etapa de exclusÃ£o.
   - Se **NÃ£o**, o fluxo termina sem aÃ§Ãµes adicionais.
4. **Delete Records â€“ Excluir contato PF** (`ExcluirCcontatoPF`): Caso um contato seja encontrado, ele Ã© excluÃ­do automaticamente.

## VariÃ¡veis
- **$Record.Id**: ID da conta recÃ©m-criada, utilizado para buscar contatos relacionados.
- **ObterContato**: Recurso de busca que retorna o contato relacionado Ã  conta.
- **ExisteContato**: DecisÃ£o que avalia se o contato foi encontrado (nÃ£o nulo).

## Detalhes TÃ©cnicos
- **Filtro de inÃ­cio**: A busca pela conta Ã© filtrada para contas criadas com `DWTipoDocumentoForm__c` igual a "CPF".
- **Busca de contato**: Utiliza `AccountId` como filtro para localizar contatos vinculados Ã  conta.
- **ExclusÃ£o**: Se um contato for localizado, ele Ã© excluÃ­do usando o recurso `recordDeletes` com filtro `AccountId = $Record.Id`.
- **DecisÃ£o**: A decisÃ£o `ExisteContato` avalia se o recurso de busca retornou um contato vÃ¡lido (`IsNull` = false).

## ConsideraÃ§Ãµes
- Este fluxo Ã© acionado automaticamente apÃ³s a criaÃ§Ã£o de uma conta.
- A exclusÃ£o do contato ocorre somente se um contato com o campo `DWTipoDocumentoForm__c` igual a "CPF" existir.
- Ã‰ importante garantir que os objetos e campos utilizados estejam corretamente configurados no Salesforce.
- O fluxo Ã© configurado para rodar em ambiente padrÃ£o (`Default`) e utiliza o builder LightningFlowBuilder.

---

Se precisar de mais detalhes ou ajustes, estou Ã  disposiÃ§Ã£o!

Flow: DWLeadSubflowCriarLeadApos6Meses

DescriÃ§Ã£o
O Flow `DWLeadSubflowCriarLeadApos6Meses` Ã© responsÃ¡vel por atualizar o campo de data futura em um Lead apÃ³s 6 meses, baseado na data de criaÃ§Ã£o do Lead. Ele Ã© utilizado em processos de qualificaÃ§Ã£o ou desqualificaÃ§Ã£o de Leads, especialmente quando o motivo Ã© "Interesse futuro" com um perÃ­odo de 6 meses.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Consultar um Lead especÃ­fico pelo seu ID.
- Calcular uma nova data, que Ã© a data de criaÃ§Ã£o do Lead acrescida de 6 meses.
- Atualizar o campo `DWDataCriacaoFutura__c` do Lead com essa nova data.
- Caso ocorra um erro durante a atualizaÃ§Ã£o, postar uma mensagem de erro no chatter.

Etapas Principais
1. **Get Records (`LeadS`)** â€“ Consulta o Lead pelo ID fornecido na variÃ¡vel de entrada `recordId`.
2. **Assignment (`dataMais6`)** â€“ Calcula a data de criaÃ§Ã£o do Lead mais 6 meses usando a fÃ³rmula `ADDMONTHS({!LeadS.CreatedDate},6)`.
3. **Update Records (`AtualizaDataFutura6Meses`)** â€“ Atualiza o campo `DWDataCriacaoFutura__c` do Lead com a data calculada.
4. **Fault Handling** â€“ Se ocorrer um erro na consulta ou na atualizaÃ§Ã£o, o Flow aciona o subflow `msg_erro` para postar uma mensagem de erro no chatter.

VariÃ¡veis
- `recordId` (String, Input) â€“ ID do Lead a ser atualizado, passado ao iniciar o Flow.

Componentes e LÃ³gica
- **Formulas**
  - `dataMais6`: Calcula a data de 6 meses apÃ³s a data de criaÃ§Ã£o do Lead usando a fÃ³rmula `ADDMONTHS({!LeadS.CreatedDate},6)`.
- **Record Lookup (`LeadS`)**
  - Consulta o Lead com base no ID fornecido (`recordId`).
  - Armazena o Lead encontrado para uso posterior.
  - Caso nÃ£o encontre o Lead, o Flow direciona para o fault, acionando o subflow de erro.
- **Record Update (`AtualizaDataFutura6Meses`)**
  - Atualiza o campo `DWDataCriacaoFutura__c` do Lead com a data calculada (`dataMais6`).
  - Se ocorrer erro na atualizaÃ§Ã£o, aciona o subflow `msg_erro`.
- **Subflow de Erro (`msg_erro`)**
  - Posta uma mensagem no chatter informando que houve um erro ao tentar salvar a data futura, sugerindo verificar o campo.
  - Utiliza o `recordId` como referÃªncia no post.

ConsideraÃ§Ãµes
- Este Flow deve ser iniciado com o ID do Lead que se deseja atualizar.
- Ã‰ importante que o campo `DWDataCriacaoFutura__c` seja configurado corretamente para aceitar datas.
- O Flow possui tratamento de erros para garantir que falhas na consulta ou atualizaÃ§Ã£o sejam comunicadas ao usuÃ¡rio via chatter.
- O Flow Ã© utilizado em processos automatizados, como flows de qualificaÃ§Ã£o ou desqualificaÃ§Ã£o de Leads, para garantir que a data futura seja atualizada de forma consistente apÃ³s 6 meses.

VersÃ£o do API
- 63.0

Ambiente
- Default (padrÃ£o Salesforce Lightning)

# Flow: OportunidadeAfterCriarEventoPlataformaReservaVeiculo

## DescriÃ§Ã£o
Este Flow Ã© um fluxo automatizado do tipo **AutoLaunched** que Ã© acionado apÃ³s a atualizaÃ§Ã£o de registros de oportunidade. Sua funÃ§Ã£o principal Ã© disparar um evento (do tipo Platform Event `DWReservaVeiculo__e`) para realizar a reserva de um veÃ­culo no ERP, com base nas informaÃ§Ãµes da oportunidade e do estoque associado.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

## Objetivo
- Monitorar mudanÃ§as no estÃ¡gio da oportunidade.
- Quando a oportunidade passar do estÃ¡gio "Vendido" para "Minuta" e o campo `Estoque__c` estiver preenchido, o Flow dispara um evento de plataforma (`DWReservaVeiculo__e`) contendo informaÃ§Ãµes relevantes para a reserva do veÃ­culo no sistema ERP.

## Como funciona
1. **Gatilho de InÃ­cio**  
   O Flow Ã© acionado apÃ³s a atualizaÃ§Ã£o de uma oportunidade (`RecordAfterSave`) quando:
   - O campo `StageName` foi alterado.
   - O estÃ¡gio anterior era "Vendido".
   - O novo estÃ¡gio Ã© "Minuta".
   - O campo `Estoque__c` nÃ£o estÃ¡ vazio.

2. **CriaÃ§Ã£o do Evento**  
   Quando as condiÃ§Ãµes acima sÃ£o atendidas, o Flow cria uma instÃ¢ncia do evento de plataforma `DWReservaVeiculo__e`, enviando as seguintes informaÃ§Ãµes:
   - CÃ³digo da Conta (`DWCodigoConta__c`) obtido do campo `DWCodigoERP__c` da Conta relacionada.
   - CÃ³digo da Loja (`DWCodigoEmpresa__c`) obtido do relacionamento `DWLoja__r`.
   - CÃ³digo do UsuÃ¡rio (`DWCodigoUsuario__c`) do proprietÃ¡rio da oportunidade.
   - CÃ³digo do VeÃ­culo (`DWCodigoVeiculo__c`) do estoque relacionado.
   - Data da Reserva (`DataReserva__c`) com a data atual.
   - Email do Cliente (`EmailCliente__c`) do contato associado Ã  Conta.
   - MÃ­dia (`Midia__c`) do relacionamento `GBCodigoExterno__c`.
   - Nome do Cliente (`NomeCliente__c`) da Conta.

## VariÃ¡veis e Elementos
- **Gatilho de inÃ­cio**:  
  - Objeto: `Opportunity`  
  - CondiÃ§Ã£o: `ISCHANGED({!$Record.StageName})` e o estÃ¡gio anterior era "Vendido" e o novo Ã© "Minuta", alÃ©m de `Estoque__c` nÃ£o estar vazio.

- **CriaÃ§Ã£o do Evento (`DWReservaVeiculo__e`)**:
  - AtribuiÃ§Ãµes de entrada (`inputAssignments`) que populam os campos do evento com dados extraÃ­dos do registro de oportunidade, da conta relacionada, do estoque e do proprietÃ¡rio.

## ConsideraÃ§Ãµes
- Este Flow deve estar ativo para garantir que as reservas sejam disparadas automaticamente ao alterar o estÃ¡gio da oportunidade.
- A condiÃ§Ã£o de disparo garante que o evento seja enviado apenas quando a oportunidade passar de "Vendido" para "Minuta" e o campo `Estoque__c` estiver preenchido, evitando envios desnecessÃ¡rios.
- O evento `DWReservaVeiculo__e` deve estar configurado no sistema ERP para receber esses dados e processar a reserva do veÃ­culo.

---

Se precisar de mais detalhes ou de uma explicaÃ§Ã£o sobre algum componente especÃ­fico, estou Ã  disposiÃ§Ã£o!

Flow: DW_User_AfterFlow_ManipularMembrosConta

DescriÃ§Ã£o
O Flow `DW_User_AfterFlow_ManipularMembrosConta` Ã© um fluxo automatizado do tipo AutoLaunched que Ã© acionado apÃ³s a criaÃ§Ã£o ou atualizaÃ§Ã£o de registros do objeto User. Sua principal funÃ§Ã£o Ã© gerenciar membros de contas relacionadas ao usuÃ¡rio, incluindo verificaÃ§Ãµes de lojas antigas e novas, alÃ©m de criar ou excluir membros de equipe de conta de forma assÃ­ncrona.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Gerenciar membros de equipe de contas relacionadas ao usuÃ¡rio apÃ³s sua criaÃ§Ã£o ou atualizaÃ§Ã£o.
- Verificar se hÃ¡ lojas antigas ou novas associadas ao usuÃ¡rio.
- Criar ou excluir membros de equipe de conta conforme as condiÃ§Ãµes verificadas.
- Utilizar uma invocaÃ§Ã£o assÃ­ncrona de uma aÃ§Ã£o Apex para criar membros de equipe de conta.

Etapas Principais
1. **InÃ­cio**: Acionado apÃ³s a criaÃ§Ã£o ou atualizaÃ§Ã£o de um usuÃ¡rio, com condiÃ§Ãµes especÃ­ficas de ativaÃ§Ã£o.
2. **Obter conta antiga**: Consulta a conta anterior com base no cÃ³digo da loja (`CodigoLoja__c`) do registro priorizado.
3. **DecisÃ£o "Encontrou loja antiga?"**: Verifica se a conta antiga foi localizada.
   - Se sim, direciona para verificar se hÃ¡ membros antigos.
4. **Obter membro de conta antigo**: Consulta membros de conta associados Ã  conta antiga, verificando papÃ©is especÃ­ficos (`Vendedor` ou `Gerente`) e o usuÃ¡rio.
5. **DecisÃ£o "Encontrou membro antigo?"**: Verifica se hÃ¡ um membro antigo.
   - Se sim, direciona para excluir esse membro.
6. **Excluir membro antigo**: Executa uma aÃ§Ã£o de exclusÃ£o do membro de conta antigo.
7. **DecisÃ£o "Encontrou nova loja?"**: Verifica se hÃ¡ uma nova loja associada ao usuÃ¡rio.
   - Se sim, busca o membro de conta da nova loja.
8. **Obter nova loja**: Consulta a nova conta com base no cÃ³digo da loja do registro atual.
9. **Obter membro de conta nova**: Consulta o membro de conta na nova loja.
10. **DecisÃ£o "Encontrou novo membro jÃ¡?"**: Verifica se o membro na nova loja jÃ¡ existe.
    - Se nÃ£o, invoca uma aÃ§Ã£o Apex assÃ­ncrona para criar o membro de conta na nova loja.
11. **InvocaÃ§Ã£o Apex assÃ­ncrona**: Executa a aÃ§Ã£o `DWCreateATMInvocable` passando os parÃ¢metros necessÃ¡rios para criar o membro de conta na nova loja.

VariÃ¡veis
- `erro` (String): VariÃ¡vel para armazenar mensagens de erro, nÃ£o utilizada explicitamente no fluxo, mas disponÃ­vel para futuras implementaÃ§Ãµes ou logs.

ConsideraÃ§Ãµes
- O fluxo Ã© acionado apenas quando o usuÃ¡rio estÃ¡ ativo e hÃ¡ mudanÃ§as relevantes no cÃ³digo da loja ou no status de ativaÃ§Ã£o.
- Utiliza aÃ§Ãµes Apex assÃ­ncronas para operaÃ§Ãµes que podem demorar ou que precisam ser desacopladas do fluxo principal.
- As consultas sÃ£o feitas de forma a obter apenas o primeiro registro relevante, otimizando o desempenho.
- O fluxo Ã© configurado para rodar na versÃ£o API 63.0 e Ã© compatÃ­vel com o Lightning Flow Builder.

Este fluxo Ã© uma peÃ§a importante na automaÃ§Ã£o de gestÃ£o de membros de contas, garantindo que as associaÃ§Ãµes estejam sempre atualizadas conforme as mudanÃ§as nos registros de usuÃ¡rio e conta.

Flow: DW_Event_FlowAfter_NotificarGerenteQuandoUsuarioFicarDisponivelDelete

DescriÃ§Ã£o
O Flow `DW_Event_FlowAfter_NotificarGerenteQuandoUsuarioFicarDisponivelDelete` Ã© um fluxo automatizado que Ã© acionado antes da exclusÃ£o de um evento de indisponibilidade de um usuÃ¡rio. Sua principal funÃ§Ã£o Ã© verificar se hÃ¡ uma notificaÃ§Ã£o personalizada configurada, identificar o gerente do proprietÃ¡rio do evento, e enviar uma notificaÃ§Ã£o personalizada ao gerente informando que o usuÃ¡rio estÃ¡ disponÃ­vel novamente. AlÃ©m disso, o fluxo atualiza o campo `Indisponivel__c` do usuÃ¡rio para `false`, indicando que o usuÃ¡rio nÃ£o estÃ¡ mais indisponÃ­vel.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio, acionado por evento de exclusÃ£o de registro)

Objetivo
- Detectar a exclusÃ£o de eventos relacionados Ã  indisponibilidade de usuÃ¡rios.
- Verificar se hÃ¡ uma notificaÃ§Ã£o personalizada configurada.
- Identificar o gerente do proprietÃ¡rio do evento.
- Enviar uma notificaÃ§Ã£o personalizada ao gerente informando que o usuÃ¡rio ficou disponÃ­vel.
- Atualizar o campo `Indisponivel__c` do usuÃ¡rio para `false`.

Etapas Principais
1. Start â€“ Acionamento ao deletar um evento cujo OwnerId comeÃ§a com "005" (indicando usuÃ¡rio).
2. Obter outros compromissos â€“ Verifica se hÃ¡ outros eventos de indisponibilidade ativos para o usuÃ¡rio.
3. Obter notificaÃ§Ã£o personalizada â€“ Consulta o tipo de notificaÃ§Ã£o personalizada padrÃ£o.
4. DecisÃ£o: Encontrou outro compromisso? â€“ Se hÃ¡ outros compromissos, o fluxo termina aqui.
5. DecisÃ£o: Existe ID na variÃ¡vel gerenteIds? â€“ Verifica se hÃ¡ gerente identificado.
6. DecisÃ£o: Encontrou notificaÃ§Ã£o? â€“ Verifica se hÃ¡ uma notificaÃ§Ã£o personalizada configurada.
7. Atribuir ID do gerente â€“ Caso o gerente exista, atribui o ID do gerente Ã  variÃ¡vel `gerenteIds`.
8. Enviar notificaÃ§Ã£o para o gerente â€“ Caso haja gerente e notificaÃ§Ã£o, envia uma notificaÃ§Ã£o personalizada ao gerente.
9. Atualizar proprietÃ¡rio â€“ Atualiza o campo `Indisponivel__c` do usuÃ¡rio para `false`.

VariÃ¡veis
- gerenteIds (String Collection) â€“ ColeÃ§Ã£o de IDs de gerentes a serem notificados.
- notificacaoPersonalizada (CustomNotificationType) â€“ Objeto que representa o tipo de notificaÃ§Ã£o personalizada.
- message (String) â€“ Mensagem de notificaÃ§Ã£o gerada dinamicamente, informando que o usuÃ¡rio estÃ¡ disponÃ­vel.

ConsideraÃ§Ãµes
- O fluxo Ã© acionado por um evento de exclusÃ£o de registro do tipo `Event` cujo OwnerId comeÃ§a com "005".
- A lÃ³gica garante que, se o usuÃ¡rio tiver outros compromissos de indisponibilidade, o fluxo nÃ£o enviarÃ¡ notificaÃ§Ãµes.
- A notificaÃ§Ã£o Ã© enviada apenas se uma notificaÃ§Ã£o personalizada estiver configurada e o gerente existir.
- O campo `Indisponivel__c` do usuÃ¡rio Ã© atualizado para `false` apÃ³s a notificaÃ§Ã£o, sinalizando que o usuÃ¡rio nÃ£o estÃ¡ mais indisponÃ­vel.
- Ã‰ importante que o tipo de notificaÃ§Ã£o personalizada "Default" esteja configurado corretamente no sistema.

Este fluxo garante uma comunicaÃ§Ã£o eficiente ao liberar o usuÃ¡rio de sua indisponibilidade, mantendo os gerentes informados de forma automatizada.

Flow: DWLeadSubflowCriarOutroLeadComFonteXMidiaYVinculadaCampanha

DescriÃ§Ã£o
O Flow `DWLeadSubflowCriarOutroLeadComFonteXMidiaYVinculadaCampanha` Ã© uma automaÃ§Ã£o do Salesforce do tipo AutoLanÃ§ado (sem interface de usuÃ¡rio) que tem como objetivo criar um novo Lead com informaÃ§Ãµes provenientes de um Lead existente, alÃ©m de registrar um erro no Chatter caso ocorra alguma falha na operaÃ§Ã£o.

Tipo
- AutoLanÃ§ado (AutoLaunched Flow)

Objetivo
- Criar um novo Lead com atributos especÃ­ficos, vinculando-o a uma campanha e fonte/mÃ­dia especÃ­ficas.
- Consultar o Lead original pelo ID fornecido.
- Consultar o grupo de fila "SDRGeral" para atribuiÃ§Ã£o do Lead criado.
- Registrar uma mensagem de erro no Chatter caso ocorra alguma falha durante o processo.

Etapas Principais
1. Start
   - Inicia o fluxo e direciona para a consulta do Lead original usando o ID passado na variÃ¡vel `recordId`.
2. Record Lookup â€“ LeadS
   - Consulta o Lead pelo ID fornecido.
   - Caso nÃ£o encontre, direciona para o erro no Chatter.
3. Record Lookup â€“ SDRGeral
   - Consulta o grupo de fila "SDRGeral" pelo DeveloperName.
   - Caso nÃ£o encontre, direciona para o erro no Chatter.
4. Create Records â€“ Criar_lead
   - Cria um novo Lead, preenchendo diversos campos com valores do Lead original (`LeadS`) e do grupo de fila (`SDRGeral`).
   - Caso ocorra erro na criaÃ§Ã£o, direciona para o erro no Chatter.
5. Fault Handling
   - Caso qualquer etapa de consulta ou criaÃ§Ã£o falhe, um post no Chatter Ã© feito informando o erro, incluindo detalhes como Fonte, MÃ­dia, Campanha, e a data atual.

VariÃ¡veis
- `recordId` (String, Input): ID do Lead original que serÃ¡ utilizado para criar o novo Lead.
- Outros elementos internos sÃ£o utilizados para armazenar registros consultados e referÃªncias de objetos.

TransformaÃ§Ãµes
- O fluxo realiza uma transformaÃ§Ã£o de valores (`criar_novo_lead`) para montar o objeto Lead a ser criado, mapeando campos do Lead original (`LeadS`) e do grupo de fila (`SDRGeral`) para os respectivos campos do novo Lead.

ConsideraÃ§Ãµes
- Este Flow deve ser iniciado com o ID do Lead original passado na variÃ¡vel `recordId`.
- Ã‰ importante que o grupo de fila "SDRGeral" exista com o DeveloperName correspondente.
- O fluxo possui tratamento de erro que registra uma mensagem no Chatter, facilitando o monitoramento de falhas.
- O fluxo Ã© configurado para ser utilizado em automaÃ§Ãµes que necessitam criar Leads vinculados a campanhas e fontes especÃ­ficas, garantindo consistÃªncia na atribuiÃ§Ã£o e rastreamento.

---

**ObservaÃ§Ã£o:** O nome da API do metadado Ã© `DWLeadSubflowCriarOutroLeadComFonteXMidiaYVinculadaCampanha.flow`, e o fluxo estÃ¡ ativo, pronto para ser chamado por processos automatizados ou Apex.

Flow: DW Oportunidade - Busca Ativos Comunidade

DescriÃ§Ã£o
O Flow `DW Oportunidade - Busca Ativos Comunidade` foi criado em 06/05/2025 por Vanessa Fernandes. Sua finalidade Ã© facilitar a busca e filtragem de ativos (Assets) relacionados a oportunidades na comunidade, integrando componentes de interface e lÃ³gica de processamento para exibir informaÃ§Ãµes relevantes aos usuÃ¡rios.

Tipo
- Screen Flow (com interface de usuÃ¡rio) executado em modo de sistema com compartilhamento (`SystemModeWithSharing`).

Objetivo
- Permitir que usuÃ¡rios da comunidade busquem ativos associados Ã s oportunidades.
- Utilizar uma tela de busca personalizada para entrada de critÃ©rios.
- Processar e filtrar ativos relacionados Ã s oportunidades com base nos critÃ©rios fornecidos.

Etapas Principais
1. **Tela de Busca (`Buscar_Ativo`)**  
   Exibe uma interface para o usuÃ¡rio inserir critÃ©rios de busca, utilizando o componente personalizado `dwBuscaAtivos`.  
   - Configurado para permitir navegaÃ§Ã£o de volta (`allowBack=true`) e sem opÃ§Ãµes de avanÃ§ar ou finalizar na mesma tela.

2. **VariÃ¡veis de Controle e Dados**  
   - `recordId`: VariÃ¡vel de entrada que recebe o ID da oportunidade ou ativo a ser processado.
   - `Ativos_filtrados`: ColeÃ§Ã£o de objetos `Asset` que armazenarÃ¡ os ativos filtrados.
   - `Lista_produtos`, `Lista_produtos_selecionados_tablea_proutos`, entre outras, para manipulaÃ§Ã£o de listas de produtos e ativos.

3. **ConfiguraÃ§Ã£o de Componentes e ParÃ¢metros**  
   - `dynamicChoiceSets` define um conjunto de escolhas dinÃ¢micas baseado no campo `Helper_lista_opcoes__c` do objeto `Opportunity`, utilizado para preencher opÃ§Ãµes de picklist dinamicamente na interface.

4. **ExecuÃ§Ã£o e Processamento**  
   - O fluxo inicia na etapa de entrada do usuÃ¡rio na tela de busca, captura os critÃ©rios e, posteriormente, realiza buscas e filtragens de ativos relacionados Ã s oportunidades, embora os detalhes especÃ­ficos dessas etapas nÃ£o estejam explicitamente presentes no XML fornecido.

VariÃ¡veis
- `Ativos_filtrados` (SObject Collection): ColeÃ§Ã£o de ativos (`Asset`) filtrados pelo fluxo.
- `currentItem_Filtrar_marca_loja` (SObject): Objeto `Asset` utilizado para armazenar informaÃ§Ãµes do ativo atual durante o processamento.
- `Lista_produtos` (Multipicklist, Input/Output): Lista de produtos selecionados pelo usuÃ¡rio.
- `Lista_produtos_selecionados_tablea_proutos` (SObject Collection): Lista de produtos (`Product2`) selecionados.
- `pricebook2Id` (String): ID da tabela de preÃ§os.
- `pricebookEntryId` (String): ID do item de tabela de preÃ§os.
- `recordId` (String, Input): ID da oportunidade ou ativo passado ao fluxo.
- `totalQtVeiculosSearch` (Number): VariÃ¡vel de controle para quantidade total de veÃ­culos na busca, inicializada com zero.

ConsideraÃ§Ãµes
- Este fluxo Ã© utilizado na comunidade, com uma interface de busca personalizada.
- A variÃ¡vel `recordId` deve ser passada ao iniciar o fluxo, garantindo que o processamento seja realizado no contexto correto.
- O fluxo estÃ¡ configurado para rodar em modo de sistema com compartilhamento, garantindo acesso aos registros conforme permissÃµes do usuÃ¡rio.
- A implementaÃ§Ã£o detalhada de buscas e filtragens de ativos provavelmente ocorre em etapas adicionais nÃ£o exibidas no XML, como aÃ§Ãµes de decisÃ£o, loops ou chamadas de subfluxos.

Este documento fornece uma visÃ£o geral tÃ©cnica do fluxo, facilitando sua manutenÃ§Ã£o, integraÃ§Ã£o ou adaptaÃ§Ã£o futura.

Flow: DWOportunidadeSubflowCriarUmLeadApos3meses

DescriÃ§Ã£o
O Flow `DWOportunidadeSubflowCriarUmLeadApos3meses` Ã© responsÃ¡vel por atualizar o campo `DWDataCriacaoFutura__c` de uma oportunidade especÃ­fica, adicionando 3 meses Ã  sua data de criaÃ§Ã£o (`CreatedDate`). Este fluxo Ã© utilizado no contexto de qualificaÃ§Ã£o de oportunidades, especialmente quando o motivo de perda Ã© "Interesse futuro" e o submotivo Ã© "3 meses". AlÃ©m disso, ele tambÃ©m realiza uma postagem de erro no chatter caso ocorra alguma falha durante a execuÃ§Ã£o.

Tipo
- AutoLanÃ§ado (sem interface de usuÃ¡rio)

Objetivo
- Consultar uma oportunidade especÃ­fica pelo ID fornecido.
- Calcular uma nova data futura adicionando 3 meses Ã  data de criaÃ§Ã£o da oportunidade.
- Atualizar o campo `DWDataCriacaoFutura__c` com essa nova data.
- Postar uma mensagem de erro no chatter se ocorrer algum problema durante o processo.

Etapas Principais
1. Get Records (`OportunidadeS`) â€“ Busca a oportunidade pelo ID passado na variÃ¡vel `recordId`.
2. Record Update (`Atualiza_data_futura_3_meses`) â€“ Atualiza o campo `DWDataCriacaoFutura__c` com a data calculada (`dataMais3`).
3. Fault Handling â€“ Caso ocorra erro na consulta ou atualizaÃ§Ã£o, uma mensagem de erro Ã© postada no chatter usando o action `chatterPost`.

VariÃ¡veis
- `recordId` (String, Entrada) â€“ ID da oportunidade que serÃ¡ processada.
- `dataMais3` (Data) â€“ FÃ³rmula que calcula a data de 3 meses apÃ³s a data de criaÃ§Ã£o da oportunidade.
- `messageErro` (String) â€“ Mensagem de erro que serÃ¡ postada em caso de falha.

Detalhes TÃ©cnicos
- `apiVersion`: 63.0
- `DescriÃ§Ã£o`: Este fluxo automatiza a atualizaÃ§Ã£o do campo `DWDataCriacaoFutura__c` para uma oportunidade especÃ­fica, acrescentando 3 meses Ã  sua data de criaÃ§Ã£o. Ã‰ utilizado em processos de qualificaÃ§Ã£o, especialmente para oportunidades que serÃ£o revisitadas apÃ³s esse perÃ­odo.
- `Formulas`:
  - `dataMais3`: Usa a funÃ§Ã£o `ADDMONTHS({!OportunidadeS.CreatedDate}, 3)` para calcular a nova data.
  - `messageErro`: Concatena uma mensagem padrÃ£o com o `FaultMessage` do fluxo para informar sobre erros na operaÃ§Ã£o.
- `recordLookups`:
  - Busca a oportunidade pelo ID passado na variÃ¡vel `recordId`.
  - Se nÃ£o encontrar registros, nÃ£o atribui valores nulos automaticamente.
  - Caso a consulta falhe, o fluxo direciona para a aÃ§Ã£o de erro (`msg_erro`).
- `recordUpdates`:
  - Atualiza o campo `DWDataCriacaoFutura__c` com a data calculada (`dataMais3`).
  - Se a atualizaÃ§Ã£o falhar, tambÃ©m direciona para a aÃ§Ã£o de erro.
- `actionCalls` (`msg_erro`):
  - Posta uma mensagem no chatter com o conteÃºdo de `messageErro`.
  - Usa o ID da oportunidade (`recordId`) como destinatÃ¡rio da postagem.

ConsideraÃ§Ãµes
- Este fluxo deve ser chamado com o ID da oportunidade como parÃ¢metro de entrada.
- Ã‰ importante garantir que o campo `DWDataCriacaoFutura__c` exista na oportunidade.
- O fluxo possui tratamento de erro para garantir que falhas na consulta ou atualizaÃ§Ã£o sejam comunicadas via chatter, facilitando o monitoramento.

Este fluxo Ã© uma peÃ§a automatizada que garante que oportunidades qualificadas tenham uma data futura prevista, ajudando no planejamento de follow-ups ou aÃ§Ãµes futuras.

# Flow: DWOportunidadeAfterNotificarAvancoFluig

## DescriÃ§Ã£o
O Flow `DWOportunidadeAfterNotificarAvancoFluig` Ã© um Flow autolanÃ§ado que Ã© acionado apÃ³s a atualizaÃ§Ã£o de registros de oportunidade. Sua principal funÃ§Ã£o Ã© verificar se a oportunidade mudou para a fase "Fluig" a partir de "Minuta" e, nesse caso, enviar uma notificaÃ§Ã£o personalizada ao proprietÃ¡rio da oportunidade, informando sobre a mudanÃ§a de fase e a aprovaÃ§Ã£o pelo gerente.

## Tipo
- AutoLanÃ§ado (sem interface de usuÃ¡rio)

## Objetivo
- Detectar a mudanÃ§a de fase da oportunidade para "Fluig" apÃ³s uma atualizaÃ§Ã£o.
- Obter o tipo de notificaÃ§Ã£o padrÃ£o.
- Notificar o proprietÃ¡rio da oportunidade via uma aÃ§Ã£o personalizada de notificaÃ§Ã£o, informando sobre a aprovaÃ§Ã£o e a mudanÃ§a de fase.

## Etapas Principais
1. **Start**  
   Disparado apÃ³s a atualizaÃ§Ã£o de uma oportunidade, quando a fase muda de "Minuta" para "Fluig".
   
2. **Get Records â€“ Obter notificaÃ§Ã£o**  
   Consulta o objeto `CustomNotificationType` para obter o registro cujo `DeveloperName` seja "Padrao". Este registro contÃ©m o tipo de notificaÃ§Ã£o padrÃ£o a ser usada na mensagem.
   
3. **Assignment â€“ AttrProprietarioOpp**  
   Atribui o `OwnerId` da oportunidade ao collection `CollOppProprietario`, que serÃ¡ usado para identificar o destinatÃ¡rio da notificaÃ§Ã£o.
   
4. **Action Call â€“ NotificarProprietario**  
   Executa uma aÃ§Ã£o personalizada (`customNotificationAction`) para enviar uma notificaÃ§Ã£o ao proprietÃ¡rio da oportunidade. Os parÃ¢metros enviados incluem:
   - `customNotifTypeId`: ID do tipo de notificaÃ§Ã£o obtido na etapa anterior.
   - `recipientIds`: IDs dos destinatÃ¡rios (proprietÃ¡rio da oportunidade).
   - `title`: TÃ­tulo da notificaÃ§Ã£o ("Oportunidade avanÃ§ada para Fluig").
   - `body`: Corpo da mensagem, gerado dinamicamente para informar que a oportunidade foi aprovada e mudou para a fase "Fluig".
   - `targetId`: ID da oportunidade relacionada.

## VariÃ¡veis
- **CollOppProprietario** (String, ColeÃ§Ã£o)  
  ColeÃ§Ã£o que armazena o ID do proprietÃ¡rio da oportunidade, utilizado para enviar a notificaÃ§Ã£o.
- **messageBody** (String, FÃ³rmula)  
  ExpressÃ£o que gera a mensagem de notificaÃ§Ã£o, incluindo o nome da oportunidade.

## Detalhes TÃ©cnicos
- **Disparo**: O Flow Ã© acionado apÃ³s uma atualizaÃ§Ã£o de registro na oportunidade, especificamente quando o campo `StageName` muda de "Minuta" para "Fluig".
- **Filtro de disparo**: Utiliza uma fÃ³rmula que verifica se `StageName` mudou, se o novo valor Ã© "Fluig" e o valor anterior era "Minuta".
- **Consulta**: Busca o registro `CustomNotificationType` com `DeveloperName` igual a "Padrao" para obter o ID do tipo de notificaÃ§Ã£o.
- **AÃ§Ã£o personalizada**: Envia uma notificaÃ§Ã£o usando uma aÃ§Ã£o personalizada (`customNotificationAction`) com os parÃ¢metros configurados para informar o proprietÃ¡rio da oportunidade.

## ConsideraÃ§Ãµes
- Este Flow deve estar ativo para garantir que as notificaÃ§Ãµes sejam enviadas automaticamente apÃ³s a mudanÃ§a de fase.
- A aÃ§Ã£o personalizada `customNotificationAction` deve estar previamente configurada no Salesforce para enviar notificaÃ§Ãµes de acordo com os parÃ¢metros fornecidos.
- Ã‰ importante que o campo `StageName` seja atualizado corretamente na oportunidade para que o disparo seja acionado.

---

Se precisar de mais detalhes ou de uma anÃ¡lise de outros componentes do Flow, estou Ã  disposiÃ§Ã£o!

Flow: DWOportunidadeSubflowCriarUmLeadApos1Mes

DescriÃ§Ã£o
O Flow `DWOportunidadeSubflowCriarUmLeadApos1Mes` Ã© um fluxo autolanÃ§ado que automatiza a atualizaÃ§Ã£o de uma oportunidade para criar uma data futura, adicionando um mÃªs Ã  data de criaÃ§Ã£o da oportunidade. Ele Ã© utilizado no contexto de qualificaÃ§Ã£o de oportunidades, especialmente para registrar um momento futuro para aÃ§Ãµes relacionadas ao lead.

Tipo
- Autolaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Consultar uma oportunidade especÃ­fica pelo ID recebido como entrada.
- Calcular uma nova data, que Ã© a data de criaÃ§Ã£o da oportunidade acrescida de 1 mÃªs.
- Atualizar o campo personalizado `DWDataCriacaoFutura__c` na oportunidade com essa nova data.
- Caso ocorra algum erro, postar uma mensagem de erro no chatter.

Etapas Principais
1. **Get Records (`OportunidadeS`)**  
   Consulta a oportunidade pelo ID fornecido na variÃ¡vel de entrada `recordId`.  
   - Objetivo: recuperar a oportunidade especÃ­fica para manipulaÃ§Ã£o.  
   - ConfiguraÃ§Ã£o: busca o primeiro registro que corresponda ao ID, sem coletar mÃºltiplos registros.

2. **Formula (`dataMais1`)**  
   Calcula uma data futura adicionando 1 mÃªs Ã  data de criaÃ§Ã£o da oportunidade (`OportunidadeS.CreatedDate`).  
   - ExpressÃ£o: `ADDMONTHS({!OportunidadeS.CreatedDate},1)`  
   - Resultado: uma variÃ¡vel de fÃ³rmula do tipo Data, que representa a data de criaÃ§Ã£o acrescida de um mÃªs.

3. **Update Records (`Atualiza_data_futura_1_mes`)**  
   Atualiza o campo `DWDataCriacaoFutura__c` da oportunidade com a data calculada (`dataMais1`).  
   - Filtro: ID da oportunidade igual ao `recordId`.  
   - AÃ§Ã£o: definir o campo `DWDataCriacaoFutura__c` com o valor de `dataMais1`.  
   - Caso ocorra erro nesta etapa, o fluxo direciona para o elemento de erro.

4. **Action Call (`msg_erro`)**  
   Caso haja uma falha em qualquer etapa anterior, o fluxo posta uma mensagem de erro no chatter, usando o conteÃºdo de `$Flow.FaultMessage` e o ID do registro (`recordId`) como referÃªncia.

VariÃ¡veis
- `recordId` (String, Input): ID da oportunidade que serÃ¡ processada.  
- `dataMais1` (Data, FÃ³rmula): Data de criaÃ§Ã£o da oportunidade acrescida de 1 mÃªs, calculada dinamicamente.

ConsideraÃ§Ãµes
- Este fluxo deve ser acionado passando o ID da oportunidade como parÃ¢metro de entrada.
- A lÃ³gica principal Ã© garantir que, ao identificar uma oportunidade, uma data futura seja calculada e armazenada no campo personalizado `DWDataCriacaoFutura__c`.
- Em caso de erro, a mensagem serÃ¡ postada no chatter, facilitando o monitoramento e resoluÃ§Ã£o de problemas.
- O fluxo estÃ¡ configurado para ser utilizado em processos automatizados, como processos de qualificaÃ§Ã£o ou follow-up de oportunidades.

Este fluxo Ã© uma parte importante de um processo automatizado que gerencia prazos e aÃ§Ãµes futuras relacionadas Ã s oportunidades, garantindo que datas relevantes sejam atualizadas de forma consistente e automatizada.

Flow: DWTermoAfterUpdateCancelaEnvelopeDocusignEmAlteracoes

DescriÃ§Ã£o
O Flow `DWTermoAfterUpdateCancelaEnvelopeDocusignEmAlteracoes` Ã© responsÃ¡vel por monitorar atualizaÃ§Ãµes no objeto `Termo__c` e, quando detecta alteraÃ§Ãµes especÃ­ficas, verifica se hÃ¡ envelopes do Docusign em andamento relacionados ao termo. Caso existam, o Flow realiza o cancelamento automÃ¡tico desses envelopes para permitir reenvios apÃ³s as alteraÃ§Ãµes no termo.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Detectar alteraÃ§Ãµes no campo `LastModifiedDate` e `DWStatusAssinatura__c` do objeto `Termo__c`.
- Verificar se hÃ¡ envelopes do Docusign em andamento (`Enviado` ou `Indefinido`) relacionados ao termo.
- Cancelar automaticamente esses envelopes usando uma aÃ§Ã£o Apex, caso estejam em andamento.

Etapas Principais
1. Start â€“ Disparado apÃ³s uma atualizaÃ§Ã£o no objeto `Termo__c`.
   - CondiÃ§Ã£o: `LastModifiedDate` foi alterado e `DWStatusAssinatura__c` nÃ£o foi alterado.
   - Executa apÃ³s o commit da atualizaÃ§Ã£o (`AsyncAfterCommit`).

2. Get Records â€“ Busca o envelope do Docusign (`DWEnvelopeDocusign__c`) relacionado ao termo.
   - Filtros:
     - `DWStatusAssinatura__c` igual a `Enviado` ou `Indefinido`.
     - `DWTermo__c` igual ao ID do `Termo__c` atualizado.
   - Retorna o primeiro registro encontrado, se houver.

3. Decision â€“ `Tem_envelope_em_andamento`
   - Verifica se o envelope foi encontrado (nÃ£o Ã© nulo).
   - Se sim, passa para a aÃ§Ã£o de cancelamento.

4. Action Call â€“ `Cancelar_envelope`
   - Executa uma aÃ§Ã£o Apex (`DW_CancelEnvDocusignController`) para cancelar o envelope.
   - ParÃ¢metros:
     - `envelopeId`: ID do envelope do Docusign.
     - `motivo`: Mensagem padrÃ£o "Cancelamento por alteraÃ§Ã£o do termo."

5. Decision â€“ `alterou_o_status1`
   - Verifica se o campo `DWStatusAssinatura__c` foi alterado na atualizaÃ§Ã£o.
   - Caso positivo, pode acionar lÃ³gica adicional (nÃ£o detalhada aqui).

VariÃ¡veis
- `envelopesId` (String, ColeÃ§Ã£o) â€“ VariÃ¡vel para armazenar IDs de envelopes, nÃ£o utilizada diretamente na exportaÃ§Ã£o, mas disponÃ­vel para futuras extensÃµes.

ConsideraÃ§Ãµes
- O Flow Ã© disparado somente apÃ³s atualizaÃ§Ãµes no objeto `Termo__c`.
- A lÃ³gica de cancelamento Ã© acionada somente se houver envelopes em andamento relacionados ao termo.
- A aÃ§Ã£o de cancelamento Ã© realizada via Apex, garantindo maior controle sobre o processo.
- O fluxo foi ajustado para verificar alteraÃ§Ãµes especÃ­ficas e evitar execuÃ§Ãµes desnecessÃ¡rias.

DescriÃ§Ã£o adicional
Este Flow garante que, ao fazer alteraÃ§Ãµes no `Termo__c`, qualquer envelope do Docusign em andamento seja cancelado automaticamente, facilitando o reenvio de novos envelopes com as informaÃ§Ãµes atualizadas, mantendo o processo de assinatura atualizado e consistente.

Flow: DW_ScreenFlow_Layout_InformacoesSobreConta

DescriÃ§Ã£o
O Flow `DW_ScreenFlow_Layout_InformacoesSobreConta` tem como objetivo exibir informaÃ§Ãµes detalhadas de uma conta especÃ­fica na interface Lightning, ajustando o layout de acordo com o tipo de pessoa associado Ã  conta (Pessoa FÃ­sica ou Pessoa JurÃ­dica). AlÃ©m disso, possui uma decisÃ£o que direciona o fluxo dependendo do tipo de conta.

Tipo
- Screen Flow (com interface de usuÃ¡rio)

Objetivo
- Obter os detalhes da conta com base no `recordId` fornecido.
- Exibir diferentes layouts de informaÃ§Ãµes dependendo do tipo de pessoa (`PF` ou `PJ`).
- Fornecer uma opÃ§Ã£o adicional para exibir informaÃ§Ãµes especÃ­ficas de uma loja vinculada Ã  conta, caso aplicÃ¡vel.

Etapas Principais
1. Get Records â€“ Obter a conta pelo `recordId` passado como variÃ¡vel de entrada.
2. Decision â€“ Avaliar o campo `RecordType.DeveloperName` para determinar o tipo de conta (`DWLoja` ou outro).
3. Screens â€“ Exibir diferentes layouts de informaÃ§Ãµes:
   - InformaÃ§Ãµes gerais da conta, com seÃ§Ãµes especÃ­ficas para Pessoa FÃ­sica (`formPF`) ou Pessoa JurÃ­dica (`form`), dependendo do valor de `TipoPessoa__c`.
   - InformaÃ§Ãµes adicionais especÃ­ficas de uma loja vinculada, exibidas na tela `InformacoesSobreLoja`.

VariÃ¡veis
- recordId (String, Input) â€“ ID da conta que serÃ¡ utilizada para buscar os detalhes no Salesforce.

Componentes e ConfiguraÃ§Ãµes
- ObtenÃ§Ã£o da Conta: Utiliza um `Get Records` para buscar a conta pelo ID fornecido, armazenando o resultado na variÃ¡vel `conta`.
- DecisÃ£o `TipoConta`: Verifica se o `RecordType.DeveloperName` da conta Ã© igual a `DWLoja`. Se verdadeiro, direciona para a tela de informaÃ§Ãµes especÃ­ficas de loja (`InformacoesSobreLoja`); caso contrÃ¡rio, segue para o layout padrÃ£o de informaÃ§Ãµes sobre a conta.
- Telas de ExibiÃ§Ã£o:
  - `Informa_es_sobre_a_conta`: Exibe detalhes da conta, com seÃ§Ãµes condicionais:
    - `form`: Para contas do tipo Pessoa JurÃ­dica (`PJ`), mostrando campos como `Name`, `DWDocumento__c`, `ParentId`.
    - `formPF`: Para contas do tipo Pessoa FÃ­sica (`PF`), mostrando campos como `Name`, `DWDocumento__c`.
  - `InformacoesSobreLoja`: Exibe detalhes especÃ­ficos de uma loja vinculada, como `Name`, `DWRazaoSocial__c`, `DWDocumentoLoja__c`, entre outros, em modo somente leitura.
- Layouts e Visibilidade:
  - As seÃ§Ãµes de formulÃ¡rio sÃ£o controladas por regras de visibilidade baseadas no campo `TipoPessoa__c`.
  - Os componentes de layout utilizam o componente `c:sobjectLayoutSection` para exibir os detalhes de forma estruturada.

ConsideraÃ§Ãµes
- Este Flow Ã© iniciado com o parÃ¢metro `recordId`, que deve ser passado na sua invocaÃ§Ã£o.
- A decisÃ£o `TipoConta` garante que o layout seja ajustado dinamicamente conforme o tipo de conta.
- A tela de loja Ã© exibida apenas se a conta for do tipo `DWLoja`.
- O fluxo Ã© configurado para permitir navegaÃ§Ã£o de volta, pausa e finalizaÃ§Ã£o, facilitando uma experiÃªncia de usuÃ¡rio mais flexÃ­vel.
- O Flow estÃ¡ ativo e pronto para uso na interface Lightning, com o modo de layout `AUTO_LAYOUT_CANVAS`.

Este documento fornece uma visÃ£o tÃ©cnica detalhada do fluxo, facilitando sua manutenÃ§Ã£o, integraÃ§Ã£o ou customizaÃ§Ã£o futura.

Flow: DW_Lead_after_update_Gera_tarefa_liga_o_e_publica

DescriÃ§Ã£o
O Flow `DW_Lead_after_update_Gera_tarefa_liga_o_e_publica` Ã© uma automaÃ§Ã£o do Salesforce que Ã© acionada apÃ³s a atualizaÃ§Ã£o de registros do objeto Lead. Sua principal funÃ§Ã£o Ã© verificar se uma notificaÃ§Ã£o de CTI (Computer Telephony Integration) foi marcada, e, se for o caso, realiza uma sÃ©rie de aÃ§Ãµes para criar tarefas de ligaÃ§Ã£o e publicar informaÃ§Ãµes relacionadas ao Lead.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Detectar quando uma Lead tem a notificaÃ§Ã£o de CTI ativada apÃ³s uma atualizaÃ§Ã£o.
- Verificar se hÃ¡ um agente associado ao Lead.
- Criar uma tarefa de ligaÃ§Ã£o para o agente.
- Publicar uma entidade personalizada (`PushCTI__e`) com informaÃ§Ãµes do Lead e do agente.
- Desmarcar a notificaÃ§Ã£o de CTI na Lead apÃ³s o processamento.

Etapas Principais
1. **Start**: Disparo do Flow apÃ³s a atualizaÃ§Ã£o de um Lead onde `DWNotificacaoCTI__c` Ã© verdadeiro.
2. **Obtem_Usuario**: Consulta o usuÃ¡rio associado ao Lead, verificando se hÃ¡ um agente (`DWAgente__c`) correspondente ao `DWAgenteCTI__c` do Lead.
3. **Encontrou_agente (DecisÃ£o)**: Verifica se o usuÃ¡rio com o agente foi encontrado (nÃ£o nulo).
   - Se **Sim**, prossegue para criar uma tarefa de ligaÃ§Ã£o e publicar a informaÃ§Ã£o.
   - Se **NÃ£o**, segue para desmarcar a notificaÃ§Ã£o.
4. **Cria_tarefa_chamada**: Cria uma tarefa do tipo "Call" para o agente, associada ao Lead, com status "ConcluÃ­do" e assunto "Chamada".
5. **Publica_CTI**: Publica uma entidade `PushCTI__e` contendo o `LeadId__c` e o `Agente__c`.
6. **Atualizar_registros_1**: Atualiza o Lead, desmarcando a notificaÃ§Ã£o (`DWNotificacaoCTI__c = false`) e garantindo que o proprietÃ¡rio seja atualizado.
7. **desmarca_notifica_o**: Caso nÃ£o tenha encontrado agente, tambÃ©m desmarca a notificaÃ§Ã£o na Lead.

VariÃ¡veis
- `$Record`: Lead que disparou o Flow (objeto de origem).
- `$Flow.CurrentDate`: Data atual, utilizada na criaÃ§Ã£o da tarefa.
- `$Flow.CurrentDateTime`: Data e hora atuais, tambÃ©m utilizadas na criaÃ§Ã£o da tarefa.
- Obtem_Usuario.Id: ID do usuÃ¡rio obtido na consulta.
- Obtem_Usuario.DWAgente__c: ID do agente associado ao usuÃ¡rio.
- Obtem_Usuario.DWAgenteCTI__c: Campo do Lead usado para buscar o agente.

ConsideraÃ§Ãµes
- Este Flow Ã© acionado automaticamente apÃ³s a atualizaÃ§Ã£o de um Lead onde `DWNotificacaoCTI__c` Ã© verdadeiro.
- Ã‰ importante que o campo `DWAgenteCTI__c` do Lead esteja corretamente preenchido para que o fluxo funcione como esperado.
- O fluxo garante que, independentemente do resultado da consulta de agente, a notificaÃ§Ã£o de CTI seja desmarcada para evitar retriggering.
- As tarefas criadas e as publicaÃ§Ãµes sÃ£o automÃ¡ticas, facilitando o fluxo de trabalho de atendimento telefÃ´nico.

Este fluxo automatiza o processo de geraÃ§Ã£o de tarefas de ligaÃ§Ã£o e publicaÃ§Ã£o de informaÃ§Ãµes de CTI, otimizando o atendimento ao cliente via integraÃ§Ã£o telefÃ´nica.

Flow: DWLeadBeforeUpdateAlertaDuplicidadeLeadQuandoEditado

DescriÃ§Ã£o
O Flow `DWLeadBeforeUpdateAlertaDuplicidadeLeadQuandoEditado` Ã© um fluxo automatizado do tipo AutoLaunched que Ã© acionado antes da atualizaÃ§Ã£o de um registro de Lead no Salesforce. Sua principal funÃ§Ã£o Ã© verificar se hÃ¡ registros duplicados de Leads ou Oportunidades relacionados Ã  mesma loja, nome, e-mail ou telefone, antes que a alteraÃ§Ã£o seja salva. Caso detecte duplicidade, exibe mensagens de erro especÃ­ficas para orientar o usuÃ¡rio a pesquisar os dados, evitando a criaÃ§Ã£o ou atualizaÃ§Ã£o de registros duplicados no sistema.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio, acionado por evento de atualizaÃ§Ã£o de Lead)

Objetivo
- Detectar duplicidades de Leads e Oportunidades relacionados Ã  mesma loja, nome, e-mail ou telefone durante a ediÃ§Ã£o de um Lead.
- Exibir mensagens de erro especÃ­ficas se duplicidades forem encontradas, impedindo a atualizaÃ§Ã£o do registro atÃ© que os problemas sejam resolvidos.

Etapas Principais
1. Start â€“ Disparo do Flow ao editar um Lead, verificando se campos relevantes foram alterados.
2. Obter Lead â€“ Consulta Lead existente com critÃ©rios de duplicidade, considerando nome, e-mail, telefone, status de conversÃ£o, loja, e excluindo o prÃ³prio registro.
3. Obter Conta â€“ Consulta Conta relacionada ao Lead, com critÃ©rios de e-mail, telefone ou nome, para verificar duplicidade de Conta.
4. Obter Oportunidade â€“ Consulta Oportunidade aberta na mesma loja, relacionada ao mesmo Account, que nÃ£o esteja fechada, para verificar duplicidade de oportunidades.
5. DecisÃ£o `Encontrou_opp` â€“ Verifica se foi encontrada uma Oportunidade duplicada.
6. DecisÃ£o `LeadConvertido` â€“ Verifica se o Lead estÃ¡ convertido ou se hÃ¡ duplicidade de Lead na mesma loja.
7. Mensagens de Erro â€“ Caso sejam detectadas duplicidades, exibe mensagens especÃ­ficas de erro ao usuÃ¡rio, impedindo a continuidade do processo.

VariÃ¡veis
- `$Record` (registro do Lead em ediÃ§Ã£o) â€“ VariÃ¡vel padrÃ£o que representa o Lead que estÃ¡ sendo atualizado.
- `nomeLead` (Formula) â€“ CombinaÃ§Ã£o de PrimeiroNome e Sobrenome do Lead, usada para buscas.
- Obter_Oportunidade (Record Lookup) â€“ Busca uma Oportunidade aberta na mesma loja, relacionada ao Account, que nÃ£o esteja fechada.
- ObterConta (Record Lookup) â€“ Busca uma Conta com base em e-mail, telefone ou nome, relacionada ao Lead.
- ObterLead (Record Lookup) â€“ Busca Lead com critÃ©rios de duplicidade, considerando campos de contato, loja, status, e excluindo o prÃ³prio Lead convertido.

ConsideraÃ§Ãµes
- Este Flow Ã© acionado automaticamente antes da atualizaÃ§Ã£o do Lead (`RecordBeforeSave`), garantindo validaÃ§Ãµes em tempo real.
- As mensagens de erro personalizadas (`erro_duplicado2` e `erro_opp_aberta`) sÃ£o exibidas ao usuÃ¡rio para orientar a correÃ§Ã£o dos dados.
- Ã‰ importante que os campos considerados para duplicidade estejam atualizados e que o Flow seja ativado para garantir a integridade dos dados.
- O Flow utiliza filtros complexos para garantir que apenas registros relevantes sejam considerados na busca por duplicidades, evitando falsos positivos.

Este fluxo Ã© uma ferramenta essencial para manter a qualidade dos dados de Leads e Oportunidades, prevenindo registros duplicados e facilitando a gestÃ£o de informaÃ§Ãµes no Salesforce.

Flow: OportunidadeScreenFlowCriareventoPlataformaIntegrarMinuta

DescriÃ§Ã£o
O Flow `OportunidadeScreenFlowCriareventoPlataformaIntegrarMinuta` automatiza o processo de criaÃ§Ã£o de um evento de plataforma para integraÃ§Ã£o de minuta relacionado a uma oportunidade. Ele realiza buscas, validaÃ§Ãµes, atualizaÃ§Ãµes e navegaÃ§Ãµes, alÃ©m de criar registros de evento e exibir telas de feedback ao usuÃ¡rio.

Tipo
- Screen Flow (com interface de usuÃ¡rio)

Objetivo
- Obter detalhes da oportunidade e conta associada.
- Validar condiÃ§Ãµes especÃ­ficas da oportunidade.
- Criar um evento de plataforma (`DWIntegrarMinuta__e`) com informaÃ§Ãµes relevantes.
- Atualizar o status da oportunidade para "Pendentes" e limpar mensagem de integraÃ§Ã£o.
- Controlar o fluxo de navegaÃ§Ã£o e exibir telas de erro ou mensagens de validaÃ§Ã£o.

Etapas Principais
1. InÃ­cio: inicia na tela de coleta de recordId.
2. Obter oportunidade: busca a oportunidade pelo ID recebido.
3. Obter conta: busca a conta relacionada Ã  oportunidade.
4. DecisÃ£o: verifica se o status da minuta estÃ¡ pendente ou aguardando aprovaÃ§Ã£o.
5. DecisÃ£o: valida se a oportunidade possui informaÃ§Ãµes necessÃ¡rias e condiÃ§Ãµes especÃ­ficas.
6. Obter serviÃ§o adicional: busca serviÃ§os adicionais relacionados Ã  oportunidade.
7. DecisÃ£o: valida se a venda direta possui comissÃ£o vÃ¡lida.
8. Preencher dados adicionais: coleta informaÃ§Ãµes do cliente, veÃ­culo, comissÃ£o, serviÃ§os adicionais e pagamento.
9. Criar evento: registra um evento de plataforma com detalhes da oportunidade e conta.
10. Atualizar oportunidade: altera o status da oportunidade para "Pendentes" e limpa mensagem de integraÃ§Ã£o.
11. Navegar para visualizaÃ§Ã£o da oportunidade.
12. Exibir telas de erro ou aviso, se necessÃ¡rio.

VariÃ¡veis
- recordId (String, Input): ID da oportunidade a ser processada.
- refresh (Boolean, Output): controla a atualizaÃ§Ã£o da tela apÃ³s aÃ§Ãµes.

Componentes e AÃ§Ãµes
- Navegar Opp: componente de navegaÃ§Ã£o para exibir detalhes da oportunidade.
- Atribuir refresh: seta a variÃ¡vel `refresh` para true, indicando necessidade de atualizaÃ§Ã£o.
- DecisÃµes: verificam condiÃ§Ãµes de validade da oportunidade, status da minuta e condiÃ§Ãµes de comissÃ£o.
- Obter registros: buscas na oportunidade, conta, serviÃ§os adicionais, condiÃ§Ãµes de pagamento.
- Criar Evento: registro de um evento de plataforma (`DWIntegrarMinuta__e`) com informaÃ§Ãµes da oportunidade e conta.
- Atualizar registros: altera o status da oportunidade e limpa mensagem de integraÃ§Ã£o.
- Telas de feedback: exibem mensagens de erro ou aviso ao usuÃ¡rio.

ConsideraÃ§Ãµes
- O fluxo inicia com o parÃ¢metro `recordId` que deve ser passado na sua chamada.
- A navegaÃ§Ã£o e criaÃ§Ã£o de registros dependem do sucesso das buscas e validaÃ§Ãµes.
- As telas de erro (`FalhaTela` e `NaoPodeDispararEventoNovamente`) sÃ£o exibidas em caso de falhas ou condiÃ§Ãµes que impedem a continuidade.
- O fluxo Ã© configurado para rodar em modo `SystemModeWithoutSharing`, garantindo acesso completo aos registros necessÃ¡rios.
- A lÃ³gica de validaÃ§Ã£o de comissÃ£o Ã© feita por uma fÃ³rmula que verifica se o tipo de veÃ­culo Ã© "Venda direta" e se a comissÃ£o estÃ¡ em branco.

Este fluxo Ã© uma peÃ§a central na automaÃ§Ã£o de integraÃ§Ã£o de minuta, garantindo que todas as validaÃ§Ãµes e registros necessÃ¡rios sejam feitos antes de disparar o evento de plataforma.

Flow: DW_Subflow_ObterUsuarioSequencial

DescriÃ§Ã£o
O Flow `DW_Subflow_ObterUsuarioSequencial` Ã© um subfluxo utilizado para determinar um usuÃ¡rio sequencial de uma lista de usuÃ¡rios, baseado em um rodÃ­zio. Ele calcula qual usuÃ¡rio deve ser selecionado em uma sequÃªncia cÃ­clica, considerando o total de registros e o nÃºmero de usuÃ¡rios disponÃ­veis.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Iterar sobre uma coleÃ§Ã£o de usuÃ¡rios (`usuarios`)
- Calcular um Ã­ndice baseado no total de registros (`quantidadeTotalRegistros`) e na quantidade de usuÃ¡rios (`quantidadeUsuarios`)
- Determinar qual usuÃ¡rio deve ser selecionado na sequÃªncia, de forma cÃ­clica, usando o operador MOD
- Atribuir o usuÃ¡rio selecionado Ã  variÃ¡vel de saÃ­da `usuarioSequencial`

Etapas Principais
1. Atribuir nÃºmero de usuÃ¡rios
   - Atribui Ã  variÃ¡vel `quantidadeUsuarios` o tamanho da coleÃ§Ã£o `usuarios`.
2. Loop em usuÃ¡rios
   - Itera sobre a coleÃ§Ã£o `usuarios`, usando a variÃ¡vel de controle `indiceLoop` iniciada em 0.
3. Atribuir Ã­ndice do loop
   - Incrementa o valor de `indiceLoop` em 1 a cada iteraÃ§Ã£o.
4. DecisÃ£o: Ãndice do loop igual ao rodÃ­zio
   - Compara se `indiceLoop` Ã© igual ao valor de `numeroRodizio`.
   - Se verdadeiro, passa para atribuir o usuÃ¡rio de saÃ­da.
   - Se falso, continua o loop.
5. FÃ³rmula: nÃºmeroRodizio
   - Calcula o valor de `numeroRodizio` usando a expressÃ£o: `MOD({!quantidadeTotalRegistros}, {!quantidadeUsuarios}) + 1`.
   - Essa fÃ³rmula garante que o Ã­ndice seja cÃ­clico, retornando valores entre 1 e o nÃºmero total de usuÃ¡rios.
6. Atribuir usuÃ¡rio de saÃ­da
   - Quando a condiÃ§Ã£o Ã© verdadeira, atribui o usuÃ¡rio correspondente ao Ã­ndice atual (`LoopUsuarios`) Ã  variÃ¡vel de saÃ­da `usuarioSequencial`.

VariÃ¡veis
- `indiceLoop` (Number): Controla a iteraÃ§Ã£o no loop, inicia em 0.
- `quantidadeTotalRegistros` (Number, Input): Total de registros considerados para o cÃ¡lculo do rodÃ­zio.
- `quantidadeUsuarios` (Number): Quantidade de usuÃ¡rios na coleÃ§Ã£o `usuarios`.
- `usuarios` (SObject Collection): ColeÃ§Ã£o de usuÃ¡rios do tipo `User`, passada como entrada.
- `usuarioSequencial` (SObject User): UsuÃ¡rio selecionado na sequÃªncia, como saÃ­da.

ConsideraÃ§Ãµes
- Este fluxo Ã© utilizado como um subfluxo para determinar qual usuÃ¡rio deve ser selecionado em um rodÃ­zio, baseado em um cÃ¡lculo cÃ­clico.
- A variÃ¡vel `quantidadeTotalRegistros` deve ser passada como entrada, representando o total de registros considerados na lÃ³gica.
- A coleÃ§Ã£o `usuarios` tambÃ©m deve ser fornecida na entrada, contendo os usuÃ¡rios possÃ­veis.
- A variÃ¡vel de saÃ­da `usuarioSequencial` fornece o usuÃ¡rio selecionado apÃ³s a execuÃ§Ã£o do fluxo.
- O fluxo Ã© configurado para ser reutilizado em diferentes contextos onde a lÃ³gica de rodÃ­zio de usuÃ¡rios Ã© necessÃ¡ria.

Este fluxo Ã© uma implementaÃ§Ã£o eficiente para distribuir tarefas ou acessos entre usuÃ¡rios de forma rotativa, garantindo uma distribuiÃ§Ã£o equilibrada baseada em um cÃ¡lculo modular.

Flow: SubflowObterLeadsDuplicados

DescriÃ§Ã£o
O Flow `SubflowObterLeadsDuplicados` Ã© uma automaÃ§Ã£o do Salesforce Lightning Flow que tem como objetivo identificar leads duplicados relacionados a uma oportunidade e verificar se o lead foi convertido ou nÃ£o, alÃ©m de obter informaÃ§Ãµes de conta associada. Ele tambÃ©m busca oportunidades relacionadas ao mesmo cliente e loja, facilitando a gestÃ£o de leads e oportunidades duplicadas.

Tipo
- AutoLanÃ§ado (sem interface de usuÃ¡rio)

Objetivo
- Obter informaÃ§Ãµes de leads duplicados com base em critÃ©rios especÃ­ficos.
- Verificar se o lead foi convertido e se pertence Ã  mesma loja.
- Obter a conta relacionada ao lead.
- Obter oportunidades relacionadas ao cliente e loja especÃ­ficos.
- Iterar sobre as oportunidades obtidas para verificar seu status de fechamento.

Etapas Principais
1. Obter Lead (`ObterLead`)
   - Consulta um lead com base em email, telefone, nome, status de conversÃ£o, loja e status de oportunidade.
   - Filtra leads nÃ£o convertidos, nÃ£o desqualificados e relacionados Ã  loja especÃ­fica.
   - Retorna o primeiro lead que atender aos critÃ©rios.

2. DecisÃ£o: Lead convertido (`LeadConvertido`)
   - Verifica se o lead foi convertido (`IsConverted = true`) e se pertence Ã  mesma loja.
   - Se convertido na mesma loja, direciona para obter conta relacionada.
   - Caso contrÃ¡rio, atribui o ID do lead ao item duplicado.

3. Obter Conta (`ObterConta`)
   - Consulta uma conta com base em email, telefone e nome.
   - Retorna a primeira conta correspondente.
   - ApÃ³s obter a conta, passa para obter oportunidades.

4. Obter Oportunidade (`ObterOportunidade`)
   - Consulta oportunidades relacionadas Ã  conta, que ainda nÃ£o estÃ£o fechadas e pertencem Ã  mesma loja.
   - Ordena por data de criaÃ§Ã£o (mais recente).
   - Retorna todas as oportunidades encontradas.

5. Loop: LoopOportunidadesObtidas
   - Itera sobre as oportunidades obtidas.
   - Para cada oportunidade, verifica se ela estÃ¡ fechada (StageName igual a "Faturado" ou "Perdido").
   - Caso a oportunidade esteja fechada, direciona para continuar o loop ou finalizar.

6. DecisÃ£o: Oportunidade fechada (`OportunidadeFechada`)
   - Verifica se a oportunidade estÃ¡ em estÃ¡gio "Faturado" ou "Perdido".
   - Se sim, continua o processamento ou termina a iteraÃ§Ã£o.

VariÃ¡veis
- `email` (String, Input) â€“ Email do lead ou contato.
- `IdItemDuplicado` (String, Output) â€“ ID do lead duplicado encontrado.
- `loja` (String, Input) â€“ ID da loja para filtrar leads e oportunidades.
- `nome` (String, Input) â€“ Nome do lead.
- `numero` (String, Input) â€“ Telefone ou celular do lead.

ConsideraÃ§Ãµes
- Este Flow Ã© utilizado como subfluxo para identificar leads duplicados e verificar seu status.
- Os filtros sÃ£o altamente especÃ­ficos para evitar duplicidades e garantir que os leads e oportunidades estejam relacionados Ã  mesma loja.
- O fluxo Ã© executado em modo de sistema, sem compartilhamento de regras de seguranÃ§a do usuÃ¡rio.
- Ã‰ importante passar corretamente os parÃ¢metros de entrada (`email`, `loja`, `nome`, `numero`) ao chamar este subfluxo.
- O fluxo Ã© ativado e configurado para retornar o ID do lead duplicado, se encontrado, para uso posterior no processo principal.

Flow: DWAccountBeforeUpdateValidaDDDAtualizar

DescriÃ§Ã£o
O Flow `DWAccountBeforeUpdateValidaDDDAtualizar` Ã© uma automaÃ§Ã£o do tipo AutoLaunched que Ã© acionada apÃ³s a atualizaÃ§Ã£o de registros do objeto Account. Sua principal funÃ§Ã£o Ã© validar o DDD (CÃ³digo de Discagem Direta) informado nos campos de telefone, garantindo que o DDD seja vÃ¡lido de acordo com uma lista de DDDs vÃ¡lidos armazenados no objeto `DDDValido__c`. Caso o DDD seja invÃ¡lido, o Flow exibe uma mensagem de erro especÃ­fica, diferenciando entre Pessoa FÃ­sica (PF) e Pessoa JurÃ­dica (PJ). AlÃ©m disso, hÃ¡ uma opÃ§Ã£o de bypass que permite desativar as validaÃ§Ãµes, configurada no objeto `BypassConversao__c`.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Validar o DDD nos campos de telefone (`DWCelular__c` para PF e `Phone` para PJ) antes de atualizar o registro de Account.
- Exibir mensagens de erro especÃ­ficas se o DDD for invÃ¡lido.
- Permitir a desativaÃ§Ã£o das regras de validaÃ§Ã£o via configuraÃ§Ã£o de bypass.

Etapas Principais
1. **Start**: O Flow Ã© acionado apÃ³s a alteraÃ§Ã£o nos campos de telefone (`DWCelular__c` ou `Phone`) de um registro Account.
2. **Get Records - bypass**: Consulta o objeto `BypassConversao__c` para verificar se o bypass estÃ¡ ativado (`DWDesativaRegras__c`).
3. **Decision - Bypass ligado**: Verifica se o bypass estÃ¡ ativado. Se sim, o Flow pula as validaÃ§Ãµes.
4. **Get Records - DDDS**: Caso o bypass nÃ£o esteja ativado, consulta o objeto `DDDValido__c` para verificar se o DDD extraÃ­do do telefone Ã© vÃ¡lido.
5. **Decision - DDD nÃ£o existe**: Se o DDD nÃ£o for encontrado na lista de vÃ¡lidos, o Flow direciona para exibir uma mensagem de erro.
6. **DecisÃ£o - Tipo de Pessoa**: Verifica se o registro Ã© Pessoa FÃ­sica (`PF`) ou Pessoa JurÃ­dica (`PJ`).
7. **Exibir Erro**: Dependendo do tipo de pessoa, exibe uma mensagem de erro especÃ­fica (`Erro_DDD_PF` ou `Erro_DDD_PJ`).

VariÃ¡veis
- `bypass` (Record) â€“ Registro do objeto `BypassConversao__c` que indica se as regras de validaÃ§Ã£o estÃ£o desativadas.
- `DDDS` (Record) â€“ Registro do objeto `DDDValido__c` que contÃ©m o DDD vÃ¡lido correspondente.
- `ddd` (Formula) â€“ Extrai o DDD do telefone, considerando o tipo de pessoa.
- Outros recursos internos para controle de fluxo e mensagens de erro.

ConsideraÃ§Ãµes
- O Flow Ã© acionado automaticamente apÃ³s a alteraÃ§Ã£o dos campos de telefone, apenas se esses campos forem modificados.
- A validaÃ§Ã£o do DDD Ã© feita consultando o objeto `DDDValido__c`, que deve conter os DDDs vÃ¡lidos.
- A configuraÃ§Ã£o de bypass permite que as validaÃ§Ãµes sejam desativadas temporariamente, Ãºtil em cenÃ¡rios de manutenÃ§Ã£o ou importaÃ§Ãµes.
- As mensagens de erro sÃ£o configuradas para exibir uma mensagem clara ao usuÃ¡rio, diferenciando Pessoa FÃ­sica e JurÃ­dica.
- O Flow utiliza decisÃµes condicionais para determinar o caminho de validaÃ§Ã£o e exibiÃ§Ã£o de mensagens, garantindo uma lÃ³gica clara e eficiente.

Este fluxo garante a integridade dos dados de telefone ao validar os DDDs antes que as alteraÃ§Ãµes sejam efetivadas no registro de Account.

# Flow: DWOpportunityFlowAfterValidarOportunidadeMesmoEstoque

## DescriÃ§Ã£o
O Flow `DWOpportunityFlowAfterValidarOportunidadeMesmoEstoque` Ã© um fluxo autoiniciado que Ã© acionado apÃ³s a criaÃ§Ã£o ou atualizaÃ§Ã£o de registros de oportunidade. Sua principal funÃ§Ã£o Ã© validar se hÃ¡ oportunidades similares relacionadas ao mesmo estoque e, dependendo do resultado, exibir uma mensagem de erro personalizada.

## Tipo
- **AutoLaunched Flow** (sem interface de usuÃ¡rio direta)

## Objetivo
- Detectar alteraÃ§Ãµes no campo `Estoque__c` de uma oportunidade.
- Executar uma sub-rotina para validar se hÃ¡ oportunidades similares com o mesmo estoque.
- Caso uma oportunidade similar seja encontrada, exibir uma mensagem de erro personalizada ao usuÃ¡rio.

## Como funciona
1. **Gatilho de inÃ­cio**: O Flow Ã© disparado apÃ³s a gravaÃ§Ã£o de uma oportunidade, especificamente quando o campo `Estoque__c` Ã© criado ou alterado e nÃ£o estÃ¡ vazio.
2. **Subflow**: Executa o sub-flow `DW_Subflow_ValidarOportunidadeMesmoEstoque`, que realiza a validaÃ§Ã£o de oportunidades similares com o mesmo estoque.
3. **DecisÃ£o**: Verifica se o sub-flow encontrou uma oportunidade similar (`encontrou` igual a `true`).
4. **Mensagem de erro**: Se uma oportunidade similar for encontrada, exibe uma mensagem personalizada ao usuÃ¡rio, indicando que o veÃ­culo estÃ¡ sendo negociado por ele ou por outro usuÃ¡rio.

## Componentes principais

### 1. Gatilho de inÃ­cio
- Disparado apÃ³s salvar um registro de oportunidade (`Opportunity`).
- CondiÃ§Ã£o de disparo: quando o campo `Estoque__c` Ã© criado ou alterado e nÃ£o estÃ¡ vazio.
- Tipo de disparo: `RecordAfterSave`.

### 2. Subflow: `DW_Subflow_ValidarOportunidadeMesmoEstoque`
- Entrada: o registro de oportunidade atual (`$Record`).
- SaÃ­da: uma variÃ¡vel que indica se foi encontrada uma oportunidade similar (`encontrou`).

### 3. DecisÃ£o: `EncontrouOportunidadeSimilar`
- Verifica se o sub-flow retornou `encontrou = true`.
- Se verdadeiro, direciona para exibir a mensagem de erro.

### 4. FÃ³rmula: `mensagemErroForm`
- Gera uma mensagem personalizada baseada na propriedade `OwnerId` da oportunidade e do proprietÃ¡rio da oportunidade similar.
- Mensagem: 
  - Se o proprietÃ¡rio for o mesmo, informa que o veÃ­culo estÃ¡ sendo negociado por vocÃª em outra oportunidade.
  - Caso contrÃ¡rio, informa o nome do proprietÃ¡rio que estÃ¡ negociando o veÃ­culo.

### 5. Mensagem de erro personalizada
- Nome: `MensagemErro`
- Exibe a mensagem gerada pela fÃ³rmula `mensagemErroForm` quando uma oportunidade similar Ã© encontrada.

## VariÃ¡veis
- **Entrada**:
  - `$Record`: registro de oportunidade que disparou o Flow.
- **Internas**:
  - `encontrou` (Boolean): indica se uma oportunidade similar foi encontrada pelo sub-flow.
  - `mensagemErroForm` (String): mensagem de erro personalizada exibida ao usuÃ¡rio.

## ConsideraÃ§Ãµes
- Este Flow Ã© acionado automaticamente apÃ³s a criaÃ§Ã£o ou atualizaÃ§Ã£o de uma oportunidade, especificamente quando o campo `Estoque__c` Ã© modificado.
- A validaÃ§Ã£o de oportunidades similares Ã© feita por um sub-flow, que deve retornar um booleano indicando a existÃªncia de uma oportunidade relacionada.
- Caso uma oportunidade similar seja encontrada, o usuÃ¡rio recebe uma mensagem clara e personalizada, ajudando na tomada de decisÃ£o ou na validaÃ§Ã£o de dados.

---

Se precisar de detalhes adicionais ou de uma anÃ¡lise do sub-flow mencionado, posso ajudar tambÃ©m!

Flow: DW_Subflow_AvaliarPorPlaca

DescriÃ§Ã£o
O Flow `DW_Subflow_AvaliarPorPlaca` Ã© um subfluxo automatizado que avalia uma placa de veÃ­culo, verificando sua validade e buscando informaÃ§Ãµes de avaliaÃ§Ã£o relacionadas. Ele utiliza uma invocaÃ§Ã£o Apex para obter dados de avaliaÃ§Ã£o do veÃ­culo com base na placa fornecida, tratando possÃ­veis erros e validando o formato da placa.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Validar o formato da placa do veÃ­culo.
- Consultar informaÃ§Ãµes de avaliaÃ§Ã£o do veÃ­culo por meio de uma invocaÃ§Ã£o Apex.
- Retornar detalhes como valor de avaliaÃ§Ã£o, modelo, data da avaliaÃ§Ã£o e mensagens de erro, se houver.

Etapas Principais
1. DecisÃ£o `PlacaValida` â€“ Verifica se a placa fornecida estÃ¡ no formato vÃ¡lido usando uma expressÃ£o regex.
2. Se a placa for vÃ¡lida, o Flow chama a aÃ§Ã£o `BuscarAvaliacaoPlaca` (invocaÃ§Ã£o Apex `DW_GetAvaliacaoIntegrableInvocable`) para obter informaÃ§Ãµes de avaliaÃ§Ã£o.
3. DecisÃ£o `EncontrouResultado` â€“ Verifica se a avaliaÃ§Ã£o retornada Ã© vÃ¡lida (nÃ£o nula ou vazia).
4. Se encontrou resultado, atribui os valores retornados (preÃ§o, modelo, data) Ã s variÃ¡veis de saÃ­da.
5. Caso contrÃ¡rio, atribui uma mensagem de erro indicando que nenhuma avaliaÃ§Ã£o foi encontrada.
6. Se a placa nÃ£o for vÃ¡lida, atribui uma mensagem de erro especÃ­fica de validaÃ§Ã£o.

VariÃ¡veis
- `placa` (String, Input) â€“ Placa do veÃ­culo a ser avaliada.
- `valorVeiculo` (Number, Output) â€“ Valor de avaliaÃ§Ã£o do veÃ­culo.
- `dataAvaliacao` (Date, Output) â€“ Data da avaliaÃ§Ã£o.
- `modelo` (String, Output) â€“ Modelo do veÃ­culo.
- `mensagemErro` (String, Output) â€“ Mensagem de erro, caso ocorra.
- `isSuccess` (Boolean, Output) â€“ Indica se a avaliaÃ§Ã£o foi bem-sucedida.

Recursos e FÃ³rmulas
- `placaValidaForm` (Boolean) â€“ Valida o formato da placa usando regex: `^[A-Za-z]{3}[A-Za-z0-9]{2}\d{2}$`.
- `dataAvaliacaoForm` (Date) â€“ Extrai a data da avaliaÃ§Ã£o do campo retornado, considerando o formato de data string.

Fluxo de ExecuÃ§Ã£o
- Inicia na etapa `start`, que direciona para a decisÃ£o `PlacaValida`.
- Se a placa for vÃ¡lida (`placaValidaForm` Ã© true), o Flow chama a aÃ§Ã£o `BuscarAvaliacaoPlaca`.
- ApÃ³s a chamada, verifica se a avaliaÃ§Ã£o foi encontrada (`EncontrouResultado`).
  - Se sim, atribui os valores de avaliaÃ§Ã£o Ã s variÃ¡veis de saÃ­da.
  - Se nÃ£o, atribui uma mensagem de erro indicando que nenhuma avaliaÃ§Ã£o foi encontrada.
- Se a placa nÃ£o for vÃ¡lida, atribui uma mensagem de erro de validaÃ§Ã£o de placa.

ConsideraÃ§Ãµes
- A invocaÃ§Ã£o Apex `DW_GetAvaliacaoIntegrableInvocable` Ã© responsÃ¡vel por buscar os dados de avaliaÃ§Ã£o com base na placa.
- O Flow trata erros de invocaÃ§Ã£o e validaÃ§Ãµes de formato de placa para garantir robustez.
- As variÃ¡veis de saÃ­da podem ser utilizadas por outros processos ou flows para aÃ§Ãµes adicionais, como exibir mensagens ou atualizar registros.

Este fluxo Ã© uma peÃ§a fundamental para validaÃ§Ã£o e consulta de veÃ­culos por placa, integrando validaÃ§Ãµes de formato e chamadas externas de avaliaÃ§Ã£o.

# Flow: DWOpportunityValidarFornecedorProdutoOportunidade

## DescriÃ§Ã£o
O Flow `DWOpportunityValidarFornecedorProdutoOportunidade` Ã© uma automaÃ§Ã£o do Salesforce que valida se hÃ¡ fornecedores vinculados aos produtos de uma oportunidade durante uma fase especÃ­fica do ciclo de vendas. Ele verifica se os produtos associados Ã  oportunidade possuem fornecedores vinculados e, caso contrÃ¡rio, exibe uma mensagem de erro.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

## Objetivo
- Validar se os produtos de uma oportunidade possuem fornecedores vinculados.
- Caso algum produto nÃ£o tenha fornecedor, exibir uma mensagem de erro.
- Essa validaÃ§Ã£o ocorre durante a fase "AprovaÃ§Ã£o gerencial" na oportunidade, antes de salvar a atualizaÃ§Ã£o.

## Etapas Principais

1. **InÃ­cio (Start)**
   - O Flow Ã© acionado quando a oportunidade sofre uma alteraÃ§Ã£o no campo `StageName`.
   - A ativaÃ§Ã£o ocorre especificamente quando o estÃ¡gio Ã© alterado para `"AprovaÃ§Ã£o gerencial"`.

2. **Obter produtos relacionados (`ObterProdutos`)**
   - Consulta todos os itens de linha de oportunidade (`OpportunityLineItem`) vinculados Ã  oportunidade atual (`$Record.Id`) que ainda nÃ£o possuem fornecedor (`DWFornecedor__c` Ã© nulo).
   - Essa consulta busca todos os produtos que precisam ser validados.

3. **Loop nos produtos (`LoopProdutosFornecedores`)**
   - Itera sobre cada produto obtido na consulta.
   - Para cada produto, realiza uma busca pelo fornecedor correspondente (`DWFornecedor__c`) usando o campo `Product2Id`.

4. **VerificaÃ§Ã£o se hÃ¡ fornecedor (`ExisteFornecedor`)**
   - Para cada produto, verifica se hÃ¡ um fornecedor vinculado.
   - Se o fornecedor existir (`Fornecedor` nÃ£o Ã© nulo), o fluxo continua para o prÃ³ximo produto.
   - Caso contrÃ¡rio, o fluxo direciona para uma etapa de erro.

5. **VerificaÃ§Ã£o se o fornecedor estÃ¡ preenchido (`FornecedorPreenchido`)**
   - Dentro do loop, verifica se o campo `DWFornecedor__c` do produto estÃ¡ preenchido.
   - Se nÃ£o estiver preenchido, o fluxo direciona para exibir uma mensagem de erro.

6. **Exibir erro**
   - Caso algum produto nÃ£o possua fornecedor, o fluxo exibe a mensagem:
     > "Verificar os produtos da oportunidade sem fornecedores vinculado"

## VariÃ¡veis
- **$Record.Id** (Entrada) â€“ ID da oportunidade que disparou o fluxo.
- **ObterProdutos** â€“ ColeÃ§Ã£o de registros `OpportunityLineItem` relacionados Ã  oportunidade.
- **Fornecedor** â€“ Registro do fornecedor (`DWFornecedor__c`) vinculado ao produto.
- **LoopProdutosFornecedores** â€“ VariÃ¡vel de loop para iterar sobre os produtos.
- **Erro** â€“ Mensagem de erro exibida quando hÃ¡ produtos sem fornecedores vinculados.

## ConsideraÃ§Ãµes
- Este fluxo Ã© acionado apenas na fase de alteraÃ§Ã£o do estÃ¡gio da oportunidade para `"AprovaÃ§Ã£o gerencial"`.
- A validaÃ§Ã£o garante que todos os produtos tenham fornecedores vinculados antes de permitir a continuidade do processo.
- Caso algum produto nÃ£o tenha fornecedor, a operaÃ§Ã£o Ã© interrompida e uma mensagem de erro Ã© exibida, impedindo o avanÃ§o na oportunidade atÃ© que a situaÃ§Ã£o seja corrigida.
- O fluxo utiliza decisÃµes condicionais para verificar a existÃªncia e preenchimento do fornecedor, garantindo uma validaÃ§Ã£o robusta.

---

Se precisar de mais detalhes ou de uma explicaÃ§Ã£o sobre alguma parte especÃ­fica do fluxo, estou Ã  disposiÃ§Ã£o!

# Flow: DWScreenFlowLayoutGestaoLoja.flow

## DescriÃ§Ã£o
O Flow `DWScreenFlowLayoutGestaoLoja` Ã© um Flow de tela (Screen Flow) utilizado para exibir uma seÃ§Ã£o de gestÃ£o da loja, apresentando informaÃ§Ãµes especÃ­ficas do objeto `Account`. Ele Ã© configurado para ser utilizado em um layout Lightning, com uma interface de usuÃ¡rio que permite visualizaÃ§Ã£o de campos em modo somente leitura.

## Tipo
- Screen Flow (Flow de Tela)

## Objetivo
- Apresentar uma seÃ§Ã£o de gestÃ£o da loja contendo os campos `DWPossuiCentralLeads__c` e `AnaliseGerente__c` do objeto `Account`.
- Fornecer uma interface visual para visualizaÃ§Ã£o desses dados, em modo somente leitura, dentro de um layout personalizado.

## Etapas Principais
1. **Start**  
   InÃ­cio do Flow, que recebe o parÃ¢metro `recordId` do objeto `Account`.
   
2. **Screen: SecaoGestaoLoja**  
   Exibe uma tela contendo uma seÃ§Ã£o de gestÃ£o da loja, configurada para mostrar os campos `DWPossuiCentralLeads__c` e `AnaliseGerente__c`.  
   - Os campos sÃ£o exibidos em modo somente leitura.
   - A tela permite navegaÃ§Ã£o para trÃ¡s, avanÃ§ar e finalizar.

## ConfiguraÃ§Ãµes e Propriedades
- **VersÃ£o API:** 63.0
- **Status:** Ativo
- **Label da Tela:** DW - Screen Flow - Layout - GestÃ£o da loja
- **Label do Flow:** DW - Screen Flow - Layout - GestÃ£o da loja
- **Environments:** PadrÃ£o (`Default`)
- **Modo do Canvas:** AUTO_LAYOUT_CANVAS
- **Tipo de Builder:** LightningFlowBuilder
- **Origem do Builder:** LightningFlowBuilder
- **Tipo de Processo:** Flow

## VariÃ¡veis
- **recordId** (String, Entrada)  
  ID do registro `Account` que serÃ¡ utilizado para exibir os dados na tela. Essa variÃ¡vel deve ser passada ao iniciar o Flow.

## Detalhes da Tela (`SecaoGestaoLoja`)
- **Nome:** SecaoGestaoLoja
- **Label:** SeÃ§Ã£o gestÃ£o da loja
- **LocalizaÃ§Ã£o:** X=176, Y=134 (para organizaÃ§Ã£o visual no construtor)
- **PermissÃµes:** Permite voltar, avanÃ§ar e pausar
- **Campos exibidos:**
  - `DWPossuiCentralLeads__c`
  - `AnaliseGerente__c`
- **ConfiguraÃ§Ã£o de exibiÃ§Ã£o:**
  - `layoutSectionLabel`: GestÃ£o da loja
  - `mode`: readonly (apenas visualizaÃ§Ã£o)
  - `isRequired`: true
  - `storeOutputAutomatically`: true
- **Componentes:** ComponentInstance de layout de seÃ§Ã£o (`c:sobjectLayoutSection`)
- **Footer e Header:** NÃ£o exibidos (`showFooter=false`, `showHeader=false`)

## ConsideraÃ§Ãµes
- Este Flow Ã© utilizado para exibir informaÃ§Ãµes de gestÃ£o de loja de forma visual e nÃ£o permite ediÃ§Ã£o direta pelo usuÃ¡rio.
- Deve ser iniciado passando o `recordId` do objeto `Account` correspondente.
- Pode ser integrado em pÃ¡ginas Lightning ou outros componentes que necessitem exibir essa seÃ§Ã£o de gestÃ£o de loja de forma rÃ¡pida e visual.

# Flow: GBTermoNaoAtualizaTermoFaseFaturadoPerdido.flow

## DescriÃ§Ã£o
O Flow `GBTermoNaoAtualizaTermoFaseFaturadoPerdido` Ã© um Flow autolanÃ§ado que atua na fase de prÃ©-salvamento de registros do objeto `Termo__c`. Sua funÃ§Ã£o principal Ã© verificar o status da oportunidade relacionada e impedir a atualizaÃ§Ã£o ou criaÃ§Ã£o de termos quando a oportunidade estiver nas fases "Perdido" ou "Faturado", exceto quando o tipo de registro for `Termo_autorizacao_entrega_terceiros`. Caso essa condiÃ§Ã£o seja atendida, o Flow gera um erro customizado para impedir a operaÃ§Ã£o.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

## Objetivo
- Impedir a atualizaÃ§Ã£o ou criaÃ§Ã£o de registros do objeto `Termo__c` quando a oportunidade relacionada estiver nas fases "Perdido" ou "Faturado", exceto para um tipo especÃ­fico de registro.

## Etapas Principais
1. **Start**: O Flow Ã© acionado na fase de prÃ©-salvamento (`RecordBeforeSave`) de um registro `Termo__c`.
2. **Get Records (`Obter_opp`)**: Consulta a oportunidade relacionada ao termo, usando o ID da oportunidade vinculada ao registro de termo.
3. **Decision (`Faturado_ou_perdido`)**: Verifica se a oportunidade estÃ¡ nas fases "Perdido" ou "Faturado" e se o tipo de registro nÃ£o Ã© `Termo_autorizacao_entrega_terceiros`.
4. **Custom Error (`NaoAtualizaOpp`)**: Se a decisÃ£o for verdadeira, o Flow gera um erro customizado, impedindo a operaÃ§Ã£o de salvar o registro.

## VariÃ¡veis
- **Obter_opp** (Record Variable): Armazena a oportunidade relacionada ao termo, com base no ID passado.
- **$Record.Oportunidade__r.Id**: ID da oportunidade vinculada ao registro de termo, passado automaticamente pelo contexto do registro que acionou o Flow.

## Detalhes TÃ©cnicos
- **apiVersion**: 63.0
- **Status**: Ativo
- **Tipo de Trigger**: `RecordBeforeSave` (antes de salvar o registro)
- **Filtro de disparo**: O Flow Ã© acionado na criaÃ§Ã£o ou atualizaÃ§Ã£o de registros `Termo__c`.
- **Consulta de registros**: Busca a oportunidade relacionada usando o campo de relacionamento.
- **DecisÃ£o**: Avalia trÃªs condiÃ§Ãµes:
  - Se o `StageName` da oportunidade Ã© "Perdido" ou "Faturado".
  - Se o `RecordType.DeveloperName` do registro de oportunidade nÃ£o Ã© `Termo_autorizacao_entrega_terceiros`.
- **Erro Customizado**: Caso as condiÃ§Ãµes sejam atendidas, o Flow exibe a mensagem:
  > "NÃ£o Ã© possÃ­vel atualizar ou criar termos que a oportunidade estÃ¡ na fase 'Perdido' ou 'Faturado'."

## ConsideraÃ§Ãµes
- Este Flow Ã© utilizado para garantir a integridade de dados, impedindo alteraÃ§Ãµes em registros de termos quando a oportunidade relacionada estiver em fases que indicam encerramento ou faturamento, salvo exceÃ§Ãµes especÃ­ficas.
- Deve ser acionado automaticamente na fase de prÃ©-salvamento, garantindo que a validaÃ§Ã£o ocorra antes de qualquer alteraÃ§Ã£o persistida no banco de dados.
- A mensagem de erro personalizada ajuda a orientar o usuÃ¡rio ou sistema a entender o motivo da rejeiÃ§Ã£o da operaÃ§Ã£o.

---

Se precisar de mais detalhes ou de uma anÃ¡lise de outros componentes do Flow, estou Ã  disposiÃ§Ã£o!

# Flow: DWLeadAfterFlowCreateAtribuirProprietarioPerfil

## DescriÃ§Ã£o
O Flow `DWLeadAfterFlowCreateAtribuirProprietarioPerfil` Ã© um fluxo automatizado do tipo **AutoLaunched** (sem interface de usuÃ¡rio) que Ã© acionado apÃ³s a criaÃ§Ã£o de um registro Lead. Sua principal funÃ§Ã£o Ã© verificar certas condiÃ§Ãµes do Lead recÃ©m-criado e, se atendidas, atribuir um proprietÃ¡rio ao Lead com base no perfil de qualificaÃ§Ã£o.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

## Objetivo
- Executar aÃ§Ãµes apÃ³s a criaÃ§Ã£o de um Lead, especificamente:
  - Consultar o Lead criado.
  - Verificar se o Lead foi criado via integraÃ§Ã£o e se a loja associada possui uma configuraÃ§Ã£o especÃ­fica.
  - Atribuir um proprietÃ¡rio ao Lead com base no perfil de qualificaÃ§Ã£o, utilizando um subflow especializado.

## Etapas Principais

1. **Start (InÃ­cio)**
   - O Flow Ã© disparado apÃ³s a criaÃ§Ã£o de um Lead (`RecordAfterSave`).
   - A condiÃ§Ã£o de disparo Ã©:
     - O Lead foi criado recentemente (`ISNEW()`).
     - Foi criado via integraÃ§Ã£o (`$Record.DWCriadoViaIntegracao__c`).
     - A loja relacionada possui a configuraÃ§Ã£o `DWPossuiCentralLeads__c` ativada (`$Record.DWLoja__r.DWPossuiCentralLeads__c`).
   - Se todas as condiÃ§Ãµes forem verdadeiras, o Flow Ã© agendado para execuÃ§Ã£o assÃ­ncrona (`AsyncAfterCommit`).

2. **Get Records: leadAssincrono**
   - Consulta assÃ­ncrona do Lead recÃ©m-criado, usando o ID do registro.
   - Busca o Lead pelo ID (`$Record.Id`) e armazena na variÃ¡vel `leadAssincrono`.
   - Apenas o primeiro registro encontrado Ã© retornado.

3. **Subflow: DW_SubflowAtribuirProprietarioPeloPerfilQualificacao**
   - Executa um subflow que atribui o proprietÃ¡rio do Lead com base no perfil de qualificaÃ§Ã£o.
   - Passa o Lead obtido na etapa anterior como entrada.
   - O subflow retorna um Lead atualizado, que Ã© armazenado na variÃ¡vel `leadToUpdate`.

4. **Update Records: Atualizar lead**
   - Atualiza o Lead no Salesforce com as modificaÃ§Ãµes feitas pelo subflow.
   - Usa a variÃ¡vel `leadToUpdate` como referÃªncia do registro a ser atualizado.

5. **AtribuiÃ§Ã£o: Atribuir id do lead para atualizar**
   - Antes de atualizar, atribui o ID do Lead obtido na consulta assÃ­ncrona Ã  variÃ¡vel `leadToUpdate.Id`, garantindo que a atualizaÃ§Ã£o seja feita no registro correto.

## VariÃ¡veis
- **leadToUpdate** (SObject, Lead): VariÃ¡vel que armazena o Lead a ser atualizado apÃ³s a execuÃ§Ã£o do subflow.
- **leadAssincrono** (SObject, Lead): VariÃ¡vel temporÃ¡ria que armazena o Lead consultado de forma assÃ­ncrona.

## ConsideraÃ§Ãµes
- Este Flow Ã© acionado automaticamente apÃ³s a criaÃ§Ã£o de Leads que atendem aos critÃ©rios definidos na condiÃ§Ã£o de inÃ­cio.
- O fluxo depende de um subflow (`DW_SubflowAtribuirProprietarioPeloPerfilQualificacao`) para determinar o proprietÃ¡rio do Lead com base no perfil de qualificaÃ§Ã£o.
- A lÃ³gica garante que apenas Leads criados via integraÃ§Ã£o e com loja especÃ­fica sejam processados, evitando aÃ§Ãµes desnecessÃ¡rias em outros casos.
- A execuÃ§Ã£o assÃ­ncrona permite que o Flow nÃ£o impacte a performance do processo de criaÃ§Ã£o do Lead, realizando a atribuiÃ§Ã£o apÃ³s o commit inicial.

---

Se precisar de mais detalhes ou de uma anÃ¡lise de outros componentes do Flow, estou Ã  disposiÃ§Ã£o!

# Flow: DWEventAfterFlowUpdateRegistrarAtualizacao

## DescriÃ§Ã£o
O Flow `DWEventAfterFlowUpdateRegistrarAtualizacao` Ã© um fluxo automatizado do Salesforce que Ã© acionado apÃ³s a criaÃ§Ã£o ou atualizaÃ§Ã£o de um evento (`Event`). Sua principal funÃ§Ã£o Ã© registrar a data e hora da Ãºltima modificaÃ§Ã£o de registros relacionados, especificamente Leads e Oportunidades, dependendo do objeto relacionado ao evento.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

## Objetivo
- ApÃ³s a criaÃ§Ã£o ou atualizaÃ§Ã£o de um evento, verificar o objeto relacionado (Lead ou Oportunidade).
- Atualizar o campo de data de modificaÃ§Ã£o (`DWUltimaModificacaoProprietario__c`) no Lead ou Oportunidade correspondente, com a data e hora atuais.

## Como funciona
O fluxo Ã© iniciado apÃ³s a gravaÃ§Ã£o de um evento (`RecordAfterSave`), verificando o objeto relacionado ao evento (`WhoId` ou `WhatId`). Dependendo do valor do campo `DWRelacionadoObjeto__c`, o fluxo direciona para atualizar o Lead ou a Oportunidade, registrando a data e hora da modificaÃ§Ã£o.

## Etapas principais

### 1. InÃ­cio
- Acionado apÃ³s a criaÃ§Ã£o ou atualizaÃ§Ã£o de um evento.
- O fluxo inicia verificando o objeto relacionado ao evento (`WhoId` ou `WhatId`).

### 2. DecisÃ£o: Objeto relacionado Ã© Lead ou Oportunidade?
- Verifica o valor do campo `$Record.DWRelacionadoObjeto__c`.
- Se for `"Lead"`, direciona para buscar e atualizar o Lead.
- Se for `"Oportunidade"`, busca e atualiza a Oportunidade.

### 3. Lookup de registros
- Para Lead:
  - Busca o Lead cujo ID Ã© `$Record.WhoId`.
  - Armazena o resultado na variÃ¡vel `LeadS`.
- Para Oportunidade:
  - Busca a Oportunidade cujo ID Ã© `$Record.WhatId`.
  - Armazena o resultado na variÃ¡vel `OppS`.

### 4. AtualizaÃ§Ã£o do campo de data
- Para Lead:
  - Atribui a data/hora atual (`$Flow.CurrentDateTime`) ao campo `DWUltimaModificacaoProprietario__c`.
  - Executa a atualizaÃ§Ã£o do Lead.
- Para Oportunidade:
  - Atribui a data/hora atual ao campo `DWUltimaModificacaoProprietario__c`.
  - Executa a atualizaÃ§Ã£o da Oportunidade.

### 5. Encerramento
- O fluxo termina apÃ³s atualizar o registro correspondente, garantindo que a data de modificaÃ§Ã£o seja registrada corretamente.

## VariÃ¡veis
- **$Record.WhoId**: ID do Lead relacionado ao evento.
- **$Record.WhatId**: ID da Oportunidade relacionada ao evento.
- **$Record.DWRelacionadoObjeto__c**: Campo que indica se o objeto relacionado Ã© Lead ou Oportunidade.
- **$Flow.CurrentDateTime**: Data e hora atuais, utilizadas para registrar a Ãºltima modificaÃ§Ã£o.
- **LeadS**: VariÃ¡vel de armazenamento do Lead recuperado.
- **OppS**: VariÃ¡vel de armazenamento da Oportunidade recuperada.

## ConsideraÃ§Ãµes
- Este fluxo Ã© acionado automaticamente apÃ³s a gravaÃ§Ã£o de eventos, garantindo o registro de data de modificaÃ§Ã£o de forma automÃ¡tica.
- Ã‰ importante que os campos `DWRelacionadoObjeto__c`, `WhoId` e `WhatId` estejam corretamente preenchidos nos registros de evento.
- O fluxo garante que o campo de data seja atualizado apenas se o objeto relacionado for Lead ou Oportunidade, evitando alteraÃ§Ãµes indesejadas em outros objetos.

---

Este fluxo Ã© uma implementaÃ§Ã£o eficiente para manter o controle de modificaÃ§Ãµes nos registros relacionados a eventos, facilitando auditorias e anÃ¡lises de atividades.

Flow: DWOpportunityForcarIntegracaoFluig

DescriÃ§Ã£o
O Flow `DWOpportunityForcarIntegracaoFluig` Ã© uma automaÃ§Ã£o criada para facilitar a integraÃ§Ã£o manual entre o Salesforce e o sistema Fluig. Ele Ã© acionado por um botÃ£o na pÃ¡gina de oportunidades, funcionando como uma alternativa de fallback quando a integraÃ§Ã£o automÃ¡tica falha. Sua principal funÃ§Ã£o Ã© iniciar o processo de faturamento no Fluig, invocando uma classe Apex especÃ­fica, e fornecer feedback visual ao usuÃ¡rio por meio de um toast de sucesso ou uma tela de erro.

Tipo
- Autolaunched Flow (sem interface de usuÃ¡rio contÃ­nua, mas com telas de erro e notificaÃ§Ãµes)

Objetivo
- Permitir que usuÃ¡rios iniciem manualmente a integraÃ§Ã£o com o Fluig para uma oportunidade especÃ­fica, especialmente em casos de falha na automaÃ§Ã£o automÃ¡tica.
- Invocar a classe Apex `DW_IniciarFaturamentoBatch` passando o ID da oportunidade.
- Exibir uma mensagem de sucesso ao iniciar o processo ou uma tela de erro em caso de falha.

Etapas Principais
1. Start
   - Inicia o Flow ao receber o `recordId` da oportunidade como variÃ¡vel de entrada.
2. AÃ§Ã£o Apex (`DW_IniciarFaturamentoBatch`)
   - Invoca a classe Apex responsÃ¡vel por iniciar o faturamento no Fluig, passando o ID da oportunidade.
   - Se a execuÃ§Ã£o for bem-sucedida, direciona para a aÃ§Ã£o de toast de sucesso.
   - Se ocorrer erro, direciona para a tela de erro.
3. Toast de Sucesso (`showToast`)
   - Exibe uma notificaÃ§Ã£o de sucesso indicando que o processo de integraÃ§Ã£o foi iniciado.
4. Tela de Erro (`tela_de_erro`)
   - Mostra a mensagem de erro retornada pela falha na execuÃ§Ã£o, sem permitir voltar ou pausar.

VariÃ¡veis
- `recordId` (String, Input)
  - ID da oportunidade que serÃ¡ integrada ao Fluig. Deve ser passado ao iniciar o Flow.

Componentes e AÃ§Ãµes
- `DW_IniciarFaturamentoBatch` (Apex)
  - Invoca a classe Apex responsÃ¡vel por iniciar o faturamento. Recebe o `recordId`.
  - Caso a execuÃ§Ã£o seja bem-sucedida, conecta-se ao componente `iniciado`.
  - Caso haja falha, conecta-se Ã  tela de erro `tela_de_erro`.
- `showToast` (Componente Lightning)
  - Exibe uma mensagem de sucesso ao usuÃ¡rio, informando que o processo foi iniciado.
  - Configurado com o tipo `success`, tÃ­tulo `Sucesso`, mensagem `O processo de integraÃ§Ã£o foi iniciado.`, modo `dismissible` e duraÃ§Ã£o de 5 segundos.

Tela de Erro
- `tela_de_erro`
  - Tela de exibiÃ§Ã£o de erro, que mostra a mensagem de falha detalhada (`$Flow.FaultMessage`) em destaque vermelho.
  - NÃ£o permite voltar ou pausar, apenas finalizar apÃ³s leitura.

ConsideraÃ§Ãµes
- Este Flow deve ser acionado manualmente por um botÃ£o na pÃ¡gina de oportunidade, passando o ID da oportunidade.
- Ã‰ importante que o `recordId` seja corretamente fornecido ao iniciar o Flow para garantir a execuÃ§Ã£o adequada.
- A integraÃ§Ã£o com o Fluig Ã© feita via classe Apex, que deve estar implementada para lidar com o processamento de faturamento.
- O Flow fornece feedback visual ao usuÃ¡rio, garantindo clareza sobre o status da operaÃ§Ã£o.

VersÃ£o do Flow
- API Version: 63.0

Este documento fornece uma visÃ£o detalhada do funcionamento e componentes do Flow `DWOpportunityForcarIntegracaoFluig`, facilitando sua manutenÃ§Ã£o e entendimento tÃ©cnico.

# Flow: GBOportunidadePreencherLojaFaturamento

## DescriÃ§Ã£o
O Flow `GBOportunidadePreencherLojaFaturamento` Ã© uma automaÃ§Ã£o do Salesforce que Ã© acionada apÃ³s a atualizaÃ§Ã£o de registros do objeto Opportunity. Sua finalidade principal Ã© verificar se determinados campos relacionados Ã  oportunidade foram alterados e, com base nessas mudanÃ§as, atualizar o campo `DWLoja__c` de acordo com regras especÃ­ficas. AlÃ©m disso, realiza atualizaÃ§Ãµes relacionadas Ã  loja de faturamento, dependendo das alteraÃ§Ãµes detectadas.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

## Objetivo
- Monitorar alteraÃ§Ãµes nos campos `Estoque__c`, `StageName` e `DWModelo__c` na oportunidade.
- Executar atualizaÃ§Ãµes no campo `DWLoja__c` com base nas mudanÃ§as detectadas.
- Garantir que a loja de faturamento seja atualizada corretamente quando o modelo ou estoque forem alterados, exceto quando a oportunidade estiver no estÃ¡gio "Perdido".

## Etapas Principais

### 1. InÃ­cio do Flow
- Acionado apÃ³s a gravaÃ§Ã£o de uma oportunidade (`RecordAfterSave`).
- Filtros aplicados:
  - `Estoque__c` foi alterado (`IsChanged = true`).
  - `StageName` nÃ£o foi alterado (`IsChanged = false`) ou seu valor nÃ£o Ã© "Perdido".
  - `DWModelo__c` foi alterado (`IsChanged = true`).
- A combinaÃ§Ã£o lÃ³gica dos filtros Ã© `(Estoque__c mudou OR (StageName nÃ£o mudou e nÃ£o Ã© "Perdido")) E DWModelo__c mudou`.

### 2. DecisÃ£o: Alterou Modelo ou Estoque?
- Nome da decisÃ£o: `AlterouModeloOuEstoque`.
- Verifica se o campo `DWModelo__c` foi alterado.
- Caso positivo, direciona para a atualizaÃ§Ã£o do loja de faturamento relacionada ao modelo.
- Caso negativo, segue para a atualizaÃ§Ã£o padrÃ£o de loja de faturamento.

### 3. AtualizaÃ§Ãµes de Registro
- **Atualizar loja de faturamento (padrÃ£o):**
  - Campo atualizado: `DWLoja__c`.
  - Valor atribuÃ­do: `$Record.Estoque__r.DWLojaVeiculo__c`.
  - Executada apÃ³s a decisÃ£o, se o estoque foi alterado e outras condiÃ§Ãµes forem atendidas.
- **Atualizar loja de faturamento (quando o modelo foi alterado):**
  - Campo atualizado: `DWLoja__c`.
  - Valor atribuÃ­do: `$Record.Owner.AccountId`.
  - Executada se a decisÃ£o indicar que o modelo foi alterado.

## VariÃ¡veis
- **$Record**: Registro de oportunidade que acionou o Flow.
- **AlterouModeloOuEstoque**: DecisÃ£o que verifica se houve alteraÃ§Ã£o no campo `DWModelo__c`.
- **Atualizar_loja_de_faturamento**: Elemento de atualizaÃ§Ã£o padrÃ£o para definir `DWLoja__c` com o valor do estoque relacionado.
- **Atualizar_loja_de_faturamento_Modelo**: Elemento de atualizaÃ§Ã£o para definir `DWLoja__c` com o `AccountId` do proprietÃ¡rio da oportunidade, quando o modelo Ã© alterado.

## ConsideraÃ§Ãµes
- Este Flow Ã© acionado somente apÃ³s a atualizaÃ§Ã£o de registros de oportunidade.
- As condiÃ§Ãµes de filtro garantem que as atualizaÃ§Ãµes ocorram apenas quando hÃ¡ mudanÃ§as relevantes nos campos monitorados.
- A lÃ³gica de decisÃ£o permite diferenciar aÃ§Ãµes especÃ­ficas dependendo do campo que foi alterado.
- O fluxo foi ajustado para evitar atualizaÃ§Ãµes quando a oportunidade estÃ¡ no estÃ¡gio "Perdido".
- A versÃ£o do API utilizada Ã© a 63.0, compatÃ­vel com as versÃµes atuais do Salesforce.

---

Se precisar de mais detalhes ou de uma anÃ¡lise de outros componentes do Flow, estou Ã  disposiÃ§Ã£o!

# Flow: DW_ScreenFlow_Layout_InformacoesContato

## DescriÃ§Ã£o
O Flow `DW_ScreenFlow_Layout_InformacoesContato` Ã© uma automaÃ§Ã£o de fluxo de tela (Screen Flow) que exibe informaÃ§Ãµes de contato relacionadas a uma conta especÃ­fica no Salesforce. Ele busca os detalhes da conta pelo ID fornecido, exibe informaÃ§Ãµes de contato em telas separadas dependendo do tipo de conta, e permite ao usuÃ¡rio visualizar ou editar esses detalhes.

## Tipo
- Screen Flow (Fluxo de Tela)

## Objetivo
- Consultar uma conta pelo seu ID.
- Determinar o tipo de conta (por exemplo, Loja).
- Exibir informaÃ§Ãµes de contato relevantes em telas distintas, com possibilidade de ediÃ§Ã£o ou visualizaÃ§Ã£o, dependendo do contexto.

## Etapas Principais
1. **Get Records â€“ Obter Conta**  
   Consulta a conta com base no `recordId` passado como parÃ¢metro de entrada. Essa etapa busca o registro da conta que serÃ¡ utilizado nas prÃ³ximas etapas.

2. **Decision â€“ Tipo de Conta**  
   Verifica se o `RecordType.DeveloperName` da conta Ã© igual a `"DWLoja"`.  
   - Se verdadeiro, direciona para a tela `InformacoesContatoLoja`.  
   - Caso contrÃ¡rio, segue para a tela `Informa_es_sobre_a_conta`.

3. **Screens â€“ ExibiÃ§Ã£o de InformaÃ§Ãµes de Contato**  
   - **Informa_es_sobre_a_conta:**  
     Exibe campos de telefone, email e celular (`Phone,Email__c,DWCelular__c`) de uma conta padrÃ£o, permitindo ediÃ§Ã£o.  
   - **InformacoesContatoLoja:**  
     Exibe telefone e website (`Phone,Website`) de uma conta do tipo loja, em modo somente leitura.

## VariÃ¡veis
- `recordId` (String, Entrada)  
  ID da conta que serÃ¡ consultada pelo fluxo. Essa variÃ¡vel deve ser passada ao iniciar o fluxo para que ele funcione corretamente.

## Detalhes TÃ©cnicos
- **apiVersion:** 63.0  
- **Nome do Metadado:** `DW_ScreenFlow_Layout_InformacoesContato.flow`  
- **Label do Flow:** "DW - Screen Flow - Layout - InformaÃ§Ãµes de contato"  
- **Status:** Ativo

## ConfiguraÃ§Ãµes e Componentes
- **Custom Properties:**  
  Define o posicionamento do indicador de progresso na tela (`ScreenProgressIndicator`) na parte superior, do tipo simples.

- **Environments:** PadrÃ£o (`Default`)  
- **Process Metadata Values:**  
  - `BuilderType`: LightningFlowBuilder  
  - `CanvasMode`: AUTO_LAYOUT_CANVAS  
  - `OriginBuilderType`: LightningFlowBuilder

- **Screens:**  
  - `Informa_es_sobre_a_conta`: Tela de informaÃ§Ãµes de contato com ediÃ§Ã£o, exibindo telefone, email e celular.  
  - `InformacoesContatoLoja`: Tela de informaÃ§Ãµes de contato em modo somente leitura, exibindo telefone e website.

- **Record Lookup:**  
  - Nome: `conta`  
  - Objeto: `Account`  
  - Filtro: `Id` igual ao `recordId` passado na variÃ¡vel de entrada  
  - Busca o primeiro registro encontrado e armazena automaticamente.

## ConsideraÃ§Ãµes
- Este fluxo deve ser iniciado com o `recordId` da conta que se deseja consultar.
- A decisÃ£o baseada no `RecordType.DeveloperName` permite exibir diferentes telas dependendo do tipo de conta, facilitando a personalizaÃ§Ã£o da experiÃªncia do usuÃ¡rio.
- As telas sÃ£o configuradas para permitir navegaÃ§Ã£o de volta, pausa e finalizaÃ§Ã£o, com opÃ§Ãµes de ediÃ§Ã£o ou somente leitura conforme o caso.

---

Se precisar de mais detalhes ou de uma anÃ¡lise de alguma parte especÃ­fica do fluxo, estou Ã  disposiÃ§Ã£o!

Flow: GB - Oportunidade - Notificar proprietÃ¡rio minuta

DescriÃ§Ã£o
O Flow `GB - Oportunidade - Notificar proprietÃ¡rio minuta` Ã© uma automaÃ§Ã£o que Ã© acionada apÃ³s a atualizaÃ§Ã£o de registros de oportunidade, especificamente quando o campo `StatusMinuta__c` Ã© alterado. Sua principal funÃ§Ã£o Ã© determinar o novo status da minuta e enviar notificaÃ§Ãµes apropriadas aos proprietÃ¡rios, gerentes ou registrar erros na integraÃ§Ã£o com o DMS.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Monitorar mudanÃ§as no campo `StatusMinuta__c` de oportunidades.
- Enviar notificaÃ§Ãµes especÃ­ficas dependendo do status da minuta:
  - Quando aguardando aprovaÃ§Ã£o, notifica o gerente.
  - Quando integrada com sucesso, notifica o proprietÃ¡rio.
  - Quando ocorre erro na integraÃ§Ã£o, notifica o proprietÃ¡rio e registra o erro.
- Atribuir o gerente responsÃ¡vel ao fluxo de notificaÃ§Ãµes.
- Gerenciar erros na comunicaÃ§Ã£o com o sistema DMS.

Etapas Principais
1. **Start**: Disparado apÃ³s a atualizaÃ§Ã£o do registro de oportunidade, quando `StatusMinuta__c` Ã© alterado.
2. **Get Records** (`ObterNotificacao`): Busca o tipo de notificaÃ§Ã£o padrÃ£o (`Padrao`) na entidade `CustomNotificationType`.
3. **Decision** (`Qual_notificacao`): Avalia o valor de `StatusMinuta__c` para determinar qual notificaÃ§Ã£o enviar:
   - Aguardando AprovaÃ§Ã£o â†’ Atribui gerente e envia notificaÃ§Ã£o de aprovaÃ§Ã£o.
   - Integrado com sucesso â†’ Notifica o proprietÃ¡rio que a minuta foi processada.
   - Integrado erro â†’ Notifica o proprietÃ¡rio sobre erro na integraÃ§Ã£o.
4. **Assignment**:
   - `Atribui_gerente`: Atribui o gerente responsÃ¡vel pelo proprietÃ¡rio da oportunidade.
   - `Attr_propriet_rio_da_opp_erro`: Atribui o proprietÃ¡rio da oportunidade ao grupo de destinatÃ¡rios para erro.
   - `AttrProprietarioOpp`: Atribui o proprietÃ¡rio da oportunidade ao grupo de destinatÃ¡rios para notificaÃ§Ãµes de sucesso.
5. **NotificaÃ§Ãµes**:
   - `Notifica_gerente`: Envia uma notificaÃ§Ã£o ao gerente solicitando aprovaÃ§Ã£o.
   - `NotificarProprietario`: Envia uma notificaÃ§Ã£o ao proprietÃ¡rio quando a minuta Ã© processada.
   - `Notifica_erro_na_integracao`: Envia uma notificaÃ§Ã£o ao proprietÃ¡rio em caso de erro na integraÃ§Ã£o, e encaminha para o fluxo de erro.
6. **Erro na NotificaÃ§Ã£o** (`erro_ao_notificar`): Caso ocorra erro ao postar no chatter ou ao enviar a notificaÃ§Ã£o, registra a mensagem de erro no chatter do registro.

VariÃ¡veis
- `collGerenciadorOpp` (ColeÃ§Ã£o de String): DestinatÃ¡rios do gerente.
- `CollOppProprietario` (ColeÃ§Ã£o de String): DestinatÃ¡rios do proprietÃ¡rio da oportunidade.
- `ObterNotificacao` (Objeto `CustomNotificationType`): Tipo de notificaÃ§Ã£o padrÃ£o obtido na consulta.

ConsideraÃ§Ãµes
- Este Flow Ã© acionado por uma atualizaÃ§Ã£o no registro de oportunidade, especificamente quando `StatusMinuta__c` muda.
- As notificaÃ§Ãµes sÃ£o enviadas via aÃ§Ãµes customizadas (`customNotificationAction`) que podem envolver o sistema de notificaÃ§Ãµes internas do Salesforce.
- Ã‰ importante garantir que o tipo de notificaÃ§Ã£o padrÃ£o (`Padrao`) exista na entidade `CustomNotificationType`.
- O fluxo inclui tratamento de erros para garantir que falhas na comunicaÃ§Ã£o sejam registradas e encaminhadas corretamente.
- O Flow utiliza a versÃ£o API 63.0 e estÃ¡ configurado para rodar no ambiente padrÃ£o (`Default`).

Este documento fornece uma visÃ£o detalhada do fluxo, suas aÃ§Ãµes, lÃ³gica de decisÃ£o e fluxo de notificaÃ§Ãµes, facilitando sua manutenÃ§Ã£o e entendimento tÃ©cnico.

# Flow: DWOpportunityFlowAfterUpdateCriarProdutoOportunidade

## DescriÃ§Ã£o
O Flow `DWOpportunityFlowAfterUpdateCriarProdutoOportunidade` Ã© uma automaÃ§Ã£o do Salesforce que Ã© acionada apÃ³s a atualizaÃ§Ã£o de registros de oportunidade. Sua principal funÃ§Ã£o Ã© gerenciar a criaÃ§Ã£o, atualizaÃ§Ã£o ou exclusÃ£o de produtos de oportunidade relacionados ao estoque e ao catÃ¡logo de preÃ§os, garantindo que os dados estejam sincronizados de acordo com as condiÃ§Ãµes do negÃ³cio.

## Tipo
- AutoLanÃ§ado (AutoLaunched Flow) â€” sem interface de usuÃ¡rio, acionado por eventos de registro.

## Objetivo
- Verificar alteraÃ§Ãµes no estoque de uma oportunidade.
- Confirmar se hÃ¡ entrada de preÃ§os para o estoque.
- Gerenciar produtos de oportunidade vinculados ao estoque, incluindo criaÃ§Ã£o, exclusÃ£o ou atualizaÃ§Ã£o de valores.
- Garantir que o catÃ¡logo de preÃ§os padrÃ£o seja atribuÃ­do quando necessÃ¡rio.
- Atualizar o valor do veÃ­culo na oportunidade com base no estoque.

## Etapas Principais

### 1. Disparo do Flow
- Acionado apÃ³s a criaÃ§Ã£o ou atualizaÃ§Ã£o de uma oportunidade (`RecordAfterSave`).
- CondiÃ§Ã£o: o campo `Estoque__c` foi alterado, o estÃ¡gio nÃ£o Ã© "Perdido" e o estoque foi modificado.

### 2. DecisÃ£o: Possui Estoque?
- Verifica se o campo `Estoque__c` foi alterado e se o estoque nÃ£o Ã© nulo.
- Se sim, direciona para o prÃ³ximo passo de processamento do estoque.

### 3. DecisÃ£o: Possui catÃ¡logo de preÃ§os?
- Verifica se hÃ¡ um catÃ¡logo de preÃ§os padrÃ£o associado ao registro.
- Se nÃ£o, direciona para atribuir o catÃ¡logo padrÃ£o.

### 4. DecisÃ£o: Encontrou entrada de preÃ§os para o estoque?
- Consulta se hÃ¡ uma entrada de preÃ§os vinculada ao estoque atual.
- Se nÃ£o, gera uma mensagem de erro indicando que o estoque nÃ£o possui vÃ­nculo com o catÃ¡logo de preÃ§os.

### 5. DecisÃ£o: Encontrou produto de oportunidade anterior?
- Verifica se hÃ¡ um produto de oportunidade vinculado ao estoque anterior.
- Se sim, exclui esse produto para evitar duplicidade.

### 6. CriaÃ§Ã£o de produto de oportunidade com novo estoque
- Cria um novo produto de oportunidade (`OpportunityLineItem`) com base no estoque atualizado.
- Atribui o catÃ¡logo de preÃ§os padrÃ£o, quantidade, preÃ§o e outros detalhes necessÃ¡rios.

### 7. AtualizaÃ§Ãµes adicionais
- Atualiza o valor do veÃ­culo na oportunidade com o preÃ§o do estoque.
- Zera o valor do veÃ­culo negociado na oportunidade, se aplicÃ¡vel.

### 8. AtribuiÃ§Ã£o do catÃ¡logo de preÃ§os padrÃ£o
- Caso nÃ£o haja catÃ¡logo de preÃ§os padrÃ£o, atribui o padrÃ£o ao registro de oportunidade.

## VariÃ¡veis
- `entradaTabelaPrecosNovoEstoque` (Record) â€” Entrada de preÃ§o relacionada ao estoque.
- `catalogoPadrao` (Record) â€” CatÃ¡logo de preÃ§os padrÃ£o.
- `produtoOportunidadeEstoqueAnterior` (Record) â€” Produto de oportunidade vinculado ao estoque anterior.
- `$Record` â€” Registro de oportunidade atual.
- `$Record__Prior` â€” Registro de oportunidade anterior, usado para verificar mudanÃ§as.

## Resumo das DecisÃµes e Fluxo
- O fluxo inicia ao detectar mudanÃ§as no campo `Estoque__c`.
- Verifica se hÃ¡ estoque e catÃ¡logo de preÃ§os.
- Consulta se hÃ¡ entrada de preÃ§os para o estoque.
- Se necessÃ¡rio, exclui produtos de oportunidade anteriores.
- Cria novo produto de oportunidade com estoque atualizado.
- Atualiza o valor do veÃ­culo na oportunidade.
- Caso nÃ£o haja catÃ¡logo de preÃ§os, atribui o padrÃ£o.

## ConsideraÃ§Ãµes
- O fluxo possui mensagens de erro customizadas para situaÃ§Ãµes especÃ­ficas, como estoque sem vÃ­nculo com catÃ¡logo de preÃ§os.
- O fluxo Ã© configurado para rodar automaticamente apÃ³s alteraÃ§Ãµes na oportunidade, garantindo que os produtos e valores estejam sempre sincronizados.
- A lÃ³gica garante que produtos antigos sejam removidos e novos criados de forma consistente, evitando duplicidades.

---

Este documento fornece uma visÃ£o tÃ©cnica detalhada do fluxo, facilitando sua manutenÃ§Ã£o, auditoria ou futuras melhorias.

# Flow: DWLeadAfterCreateConverterAutomaticamente

## DescriÃ§Ã£o
O Flow `DWLeadAfterCreateConverterAutomaticamente` Ã© um fluxo automatizado do tipo **AutoLaunched** que Ã© acionado apÃ³s a criaÃ§Ã£o de um Lead. Sua principal funÃ§Ã£o Ã© verificar se o Lead deve ser convertido automaticamente em uma Oportunidade, realizando a conversÃ£o via uma chamada Apex, e, em caso de erro, postar uma mensagem no chatter.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

## Objetivo
- Automatizar a conversÃ£o de Leads em Oportunidades apÃ³s sua criaÃ§Ã£o, considerando critÃ©rios especÃ­ficos.
- Registrar erros de conversÃ£o no chatter, caso ocorram.

## Etapas Principais

### 1. InÃ­cio (Start)
- O Flow Ã© acionado apÃ³s a criaÃ§Ã£o de um Lead (`RecordAfterSave`).
- O gatilho ocorre se uma das seguintes condiÃ§Ãµes for verdadeira:
  - O Lead foi criado via integraÃ§Ã£o (`DWCriadoViaIntegracao__c` verdadeiro) **e** a loja associada (`DWLoja__r.DWPossuiCentralLeads__c`) Ã© falsa.
  - Ou a data de conversÃ£o automÃ¡tica futura (`DWConverterAutomaticamenteDataFutura__c`) estÃ¡ preenchida.
- O Flow inicia na variÃ¡vel `$Record`, que representa o Lead recÃ©m-criado.

### 2. DecisÃ£o (nÃ£o explicitamente detalhada no XML, mas implÃ­cita)
- Antes de executar a conversÃ£o, o Flow verifica se o Lead atende aos critÃ©rios definidos na fÃ³rmula de filtro para prosseguir com a conversÃ£o automÃ¡tica.

### 3. Chamada de aÃ§Ã£o Apex: Converter Lead em Oportunidade
- Nome: `ConverterLeadOportunidade`
- Label: `Converter Lead em Oportunidade`
- Tipo: Apex
- Classe Apex chamada: `DWLeadConversionHandler`
- ParÃ¢metros de entrada:
  - `leadIds`: recebe o ID do Lead (`$Record.Id`)
- Caso a conversÃ£o falhe, um conector de falha direciona para a aÃ§Ã£o de erro.

### 4. AÃ§Ã£o de erro ao converter
- Nome: `erro_ao_converter`
- Label: `erro ao converter`
- Tipo: Postagem no Chatter (`chatterPost`)
- ParÃ¢metros:
  - `text`: mensagem de erro contida em `$Flow.FaultMessage`
  - `subjectNameOrId`: ID do Lead (`$Record.Id`)
- Esta aÃ§Ã£o registra o erro no Chatter, ajudando na monitoraÃ§Ã£o de falhas.

## VariÃ¡veis
- `$Record`: Lead que acionou o Flow.
- `$Flow.FaultMessage`: Mensagem de erro gerada na falha de conversÃ£o.
- `leadIds`: ParÃ¢metro de entrada para a classe Apex, contendo o ID do Lead.

## FÃ³rmulas
- `nomeForm`: Combina o primeiro e Ãºltimo nome do Lead (`{!$Record.FirstName} & ' ' & {!$Record.LastName}`).
- `PerfilConverterAutomatico`: Verifica se o perfil do usuÃ¡rio Ã© um dos perfis autorizados (`RecepÃ§Ã£o`, `Vendedor`, `Gerente`).

## ConsideraÃ§Ãµes
- O Flow Ã© ativado somente para Leads que atendem aos critÃ©rios definidos na fÃ³rmula de filtro.
- A conversÃ£o Ã© realizada por uma classe Apex personalizada (`DWLeadConversionHandler`), que deve tratar a lÃ³gica de conversÃ£o.
- Caso ocorra erro na conversÃ£o, uma mensagem Ã© postada no Chatter para facilitar o acompanhamento.
- O fluxo foi atualizado em 06/05/2025 e 13/05/2025, com melhorias na verificaÃ§Ã£o de duplicidade e critÃ©rios de perfil.

## Resumo
Este Flow automatiza a conversÃ£o de Leads em Oportunidades apÃ³s sua criaÃ§Ã£o, garantindo que apenas Leads que atendem a critÃ©rios especÃ­ficos sejam convertidos automaticamente, e registra eventuais falhas para anÃ¡lise posterior.

# Flow: DWLeadBeforeUpdateValidaDDDNaEdicao

## DescriÃ§Ã£o
O Flow `DWLeadBeforeUpdateValidaDDDNaEdicao` Ã© um fluxo autolanÃ§ado que Ã© executado automaticamente antes da atualizaÃ§Ã£o de um registro de Lead no Salesforce. Sua principal funÃ§Ã£o Ã© validar o DDD (CÃ³digo de Discagem Direta Ã  DistÃ¢ncia) informado nos campos de telefone do Lead (`MobilePhone` ou `Phone`) durante a ediÃ§Ã£o. 

O fluxo verifica se o DDD informado Ã© vÃ¡lido consultando o objeto personalizado `DDDValido__c`. Caso o DDD nÃ£o seja encontrado, uma mensagem de erro personalizada Ã© exibida ao usuÃ¡rio, impedindo a gravaÃ§Ã£o do registro atÃ© que um DDD vÃ¡lido seja informado. AlÃ©m disso, o fluxo possui uma lÃ³gica de bypass que permite desativar a validaÃ§Ã£o de DDD com base na configuraÃ§Ã£o de um registro no objeto `BypassConversao__c`.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio direta)

## Objetivo
- Validar o DDD informado nos campos de telefone do Lead antes de sua atualizaÃ§Ã£o.
- Exibir mensagem de erro personalizada se o DDD for invÃ¡lido.
- Permitir a desativaÃ§Ã£o da validaÃ§Ã£o via configuraÃ§Ã£o de bypass.

## Etapas Principais
1. **InÃ­cio**: O fluxo Ã© acionado antes da atualizaÃ§Ã£o do Lead, somente se os campos `MobilePhone` ou `Phone` forem alterados.
2. **Consulta de Bypass**: Verifica se hÃ¡ um registro de bypass ativo no objeto `BypassConversao__c`. Se o bypass estiver ativado (`DWDesativaRegras__c` = true), a validaÃ§Ã£o Ã© ignorada.
3. **ExtraÃ§Ã£o do DDD**: Utiliza uma fÃ³rmula para extrair os dois dÃ­gitos do DDD do telefone mÃ³vel (`MobilePhone`), assumindo que o DDD estÃ¡ na posiÃ§Ã£o 2 e 3 do nÃºmero.
4. **Consulta de DDD vÃ¡lido**: Pesquisa no objeto `DDDValido__c` se o DDD extraÃ­do Ã© vÃ¡lido.
5. **DecisÃ£o de validaÃ§Ã£o**:
   - Se o DDD vÃ¡lido for encontrado, o fluxo prossegue normalmente.
   - Se nÃ£o for encontrado, o fluxo direciona para uma mensagem de erro personalizada.
6. **Mensagem de erro**: Caso o DDD seja invÃ¡lido, exibe a mensagem "DDD InvÃ¡lido, favor verificar." relacionada ao campo `MobilePhone`.
7. **Fim**: O fluxo termina apÃ³s a validaÃ§Ã£o, impedindo a gravaÃ§Ã£o do Lead se o DDD for invÃ¡lido.

## VariÃ¡veis
- `bypass` (Record `BypassConversao__c`) â€” Registro que indica se a validaÃ§Ã£o de DDD deve ser ignorada.
- `DDDS` (Record `DDDValido__c`) â€” Registro que confirma a validade do DDD extraÃ­do.
- `ddd` (String, FÃ³rmula) â€” Extrai os dois dÃ­gitos do DDD do telefone mÃ³vel do Lead.

## ConsideraÃ§Ãµes
- A validaÃ§Ã£o Ã© acionada somente se houver alteraÃ§Ã£o nos campos `MobilePhone` ou `Phone`.
- A fÃ³rmula para extrair o DDD assume que o telefone estÃ¡ no formato padrÃ£o e que o DDD estÃ¡ na segunda e terceira posiÃ§Ãµes do nÃºmero.
- O fluxo utiliza uma regra de decisÃ£o para verificar a existÃªncia do registro de DDD vÃ¡lido e do bypass.
- A mensagem de erro personalizada Ã© configurada para aparecer na validaÃ§Ã£o do campo `MobilePhone`.

## Resumo
Este fluxo garante que os Leads tenham DDDs vÃ¡lidos antes de serem salvos, ajudando a manter a integridade dos dados de contato. A configuraÃ§Ã£o de bypass oferece flexibilidade para desativar a validaÃ§Ã£o quando necessÃ¡rio, facilitando processos internos ou testes.

Flow: DW_ScreenFlow_LayoutConta

DescriÃ§Ã£o
O Flow `DW_ScreenFlow_LayoutConta` Ã© um fluxo de tela (Screen Flow) que exibe diferentes layouts de conta, dependendo do tipo de pessoa e do tipo de registro. Ele permite navegar entre telas especÃ­ficas para Pessoa FÃ­sica, Pessoa JurÃ­dica, Loja ou uma tela de aviso quando o documento nÃ£o estÃ¡ preenchido. AlÃ©m disso, ele consulta os detalhes da conta e exibe seÃ§Ãµes especÃ­ficas de informaÃ§Ãµes, incluindo informaÃ§Ãµes do sistema, contato, endereÃ§o e consentimento de comunicaÃ§Ã£o.

Tipo
- Screen Flow (com interface de usuÃ¡rio)

Objetivo
- Exibir detalhes e seÃ§Ãµes de uma Conta com base no seu tipo e registro.
- Navegar entre telas especÃ­ficas de acordo com decisÃµes lÃ³gicas.
- Consultar os detalhes da Conta pelo seu ID passado como parÃ¢metro.
- Permitir visualizaÃ§Ã£o de informaÃ§Ãµes detalhadas em diferentes layouts de tela.

Etapas Principais
1. Start â€“ InÃ­cio do fluxo, recebendo o `recordId` da Conta.
2. Get Records â€“ Obter detalhes da Conta pelo ID fornecido.
3. Decision â€“ Avaliar o tipo de pessoa (`TipoPessoa__c`) e o RecordType (`DWCliente`, `DWLoja`) para determinar qual tela exibir.
4. Action Call â€“ Navegar atÃ© a tela correspondente (`Tela: PF`, `Tela: PJ`, `Tela Loja`, ou `Tela Sem Documento`) com os componentes necessÃ¡rios.
5. Nas telas de detalhes, componentes de layout sÃ£o utilizados para exibir informaÃ§Ãµes especÃ­ficas, como dados obrigatÃ³rios, contato, endereÃ§o, sistema, e consentimento de comunicaÃ§Ã£o.
6. NavegaÃ§Ã£o â€“ Permitir voltar ou avanÃ§ar entre telas, com configuraÃ§Ãµes de navegaÃ§Ã£o e botÃµes de finalizar.

VariÃ¡veis
- `recordId` (String, Input) â€“ ID da Conta a ser exibida, passado ao fluxo na sua invocaÃ§Ã£o.

Componentes e Telas
- `NavegarAteConta` (Component) â€“ Navega atÃ© a Conta usando o `recordId`.
- `PFTela`, `Tela_Loja`, `TelaPJ`, `TelaSemDocumento` (Screens) â€“ Telas de exibiÃ§Ã£o de detalhes, cada uma contendo componentes de seÃ§Ãµes especÃ­ficas de informaÃ§Ãµes da Conta.
- Componentes de seÃ§Ãµes como `c:dwShowRequiredFieldsAccount`, `c:sobjectLayoutSection` â€“ Utilizados para exibir informaÃ§Ãµes detalhadas e obrigatÃ³rias, contatos, endereÃ§o, sistema, e consentimento.

DecisÃµes
- `TipoPessoaDecisao` â€“ DecisÃ£o que verifica o tipo de pessoa (`PF` ou `Loja`) e o RecordType (`DWCliente`, `DWLoja`) para determinar qual tela exibir.
  - Se `conta.TipoPessoa__c` for `PF` e `conta.RecordType.DeveloperName` for `DWCliente`, navega para `Tela: PF`.
  - Se `conta.RecordType.DeveloperName` for `DWLoja`, navega para `Tela: Loja`.
  - Se `conta.DWDocumento__c` for nulo, navega para `Tela Sem Documento`.
  - Caso contrÃ¡rio, navega para a tela de detalhes padrÃ£o (`PFTela`, `Tela_Loja`, ou `TelaPJ`).

ConfiguraÃ§Ãµes adicionais
- `ScreenProgressIndicator` â€“ Indica a localizaÃ§Ã£o do indicador de progresso na tela.
- `showHeader` e `showFooter` â€“ ConfiguraÃ§Ãµes para esconder cabeÃ§alho e rodapÃ© nas telas de detalhes.
- `inputsOnNextNavToAssocScrn` â€“ Usa valores armazenados ao navegar entre componentes.

ConsideraÃ§Ãµes
- O fluxo Ã© iniciado passando o `recordId` da Conta.
- As telas sÃ£o configuradas para permitir navegaÃ§Ã£o de volta, pausa, e finalizaÃ§Ã£o.
- Componentes de layout sÃ£o utilizados para exibir informaÃ§Ãµes especÃ­ficas e obrigatÃ³rias, garantindo uma experiÃªncia de usuÃ¡rio consistente.
- O fluxo Ã© compatÃ­vel com Lightning Experience, usando Lightning Flow Builder.

Este fluxo Ã© ideal para exibir detalhes de Conta de forma condicional, com navegaÃ§Ã£o dinÃ¢mica baseada no tipo de pessoa e registro, facilitando a visualizaÃ§Ã£o detalhada de informaÃ§Ãµes relevantes para diferentes tipos de contas.

# Flow: DW_FlowAgendado_CriarNovoLeadDataFutura

## DescriÃ§Ã£o
O Flow `DW_FlowAgendado_CriarNovoLeadDataFutura` Ã© um fluxo agendado que executa diariamente para criar novos Leads com base em uma data futura especÃ­fica. Ele verifica todos os Leads cujo campo `DWDataFutura__c` corresponde Ã  data de execuÃ§Ã£o do Flow. Para esses Leads, ele cria uma nova instÃ¢ncia de Lead, reutilizando os dados do Lead original, especialmente quando o Lead estÃ¡ desqualificado por interesse futuro e uma condiÃ§Ã£o adicional de motivo de desqualificaÃ§Ã£o Ã© atendida.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio, agendado)

## Objetivo
- Automatizar a criaÃ§Ã£o de Leads futuros com base na data agendada, facilitando o gerenciamento de Leads que devem ser trabalhados em uma data futura especÃ­fica.

## Etapas Principais
1. **Start**: Inicia o Flow de forma agendada, diariamente Ã s 14:02 UTC, comeÃ§ando em 07/06/2025.
2. **Get Records (`ObterLeadsParaCriacao`)**: Consulta Leads cujo campo `DWDataCriacaoFutura__c` Ã© igual Ã  data atual do Flow (`$Flow.CurrentDate`). Essa consulta busca Leads que devem gerar novos Leads na data de hoje.
3. **Decision (`ExistemLeadsParaCriar`)**: Verifica se a consulta retornou Leads. Se a lista nÃ£o estiver vazia, o Flow prossegue para o loop.
4. **Loop (`LoopParaAtribuirCamposLead`)**: Itera sobre cada Lead obtido na consulta.
5. **Assignment (`AtribuirCamposLead`)**: Para cada Lead no loop, atribui seus valores aos campos de um novo Lead (`LeadParaCriar`). AlÃ©m de copiar diversos campos, tambÃ©m define o campo `Status` como "NÃ£o trabalhado" e o campo `DWLoja__c`, `Midia__c`, entre outros, conforme o Lead original.
6. **Assignment (`AtribuirLeadParaLista`)**: Adiciona o Lead criado Ã  coleÃ§Ã£o `LeadsParaCriar`.
7. **Create Records (`CriarNovosLeads`)**: ApÃ³s o loop, cria todos os Leads na coleÃ§Ã£o `LeadsParaCriar` de uma sÃ³ vez.

## VariÃ¡veis
- `LeadParaCriar` (Objeto Lead): VariÃ¡vel temporÃ¡ria que armazena os dados do Lead que serÃ¡ criado.
- `LeadsParaCriar` (ColeÃ§Ã£o de Lead): ColeÃ§Ã£o que acumula os Leads a serem criados na etapa final.

## FÃ³rmulas
- `converterAut`: Uma fÃ³rmula booleana que verifica se o Lead possui interesse futuro e o motivo de desqualificaÃ§Ã£o Ã© "OpÃ§Ã£o de Preenchimento de Data". Essa fÃ³rmula Ã© usada para determinar se o Lead deve ser considerado para a criaÃ§Ã£o do novo Lead.

## ConsideraÃ§Ãµes
- O fluxo Ã© configurado para rodar diariamente Ã s 14:02 UTC, iniciando em 07/06/2025.
- A consulta busca Leads com o campo `DWDataCriacaoFutura__c` igual Ã  data atual do sistema, garantindo que apenas Leads agendados para o dia sejam processados.
- A criaÃ§Ã£o de Leads Ã© feita em lote ao final do processamento, otimizando a operaÃ§Ã£o.
- O fluxo utiliza uma condiÃ§Ã£o de fÃ³rmula (`converterAut`) para validar se o Lead atende aos critÃ©rios de interesse futuro e motivo de desqualificaÃ§Ã£o antes de criar um novo Lead.
- Ã‰ importante garantir que os campos utilizados na atribuiÃ§Ã£o estejam corretamente mapeados e que os valores de entrada estejam consistentes.

## Resumo
Este fluxo automatiza a geraÃ§Ã£o de Leads futuros com base em uma data agendada, facilitando o gerenciamento de leads que devem ser trabalhados em uma data especÃ­fica, promovendo uma rotina de follow-up eficiente e automatizada.

Flow: Opportunity_Pesquisar_ativo_ou_produto

DescriÃ§Ã£o
O Flow `Opportunity_Pesquisar_ativo_ou_produto` Ã© uma automaÃ§Ã£o que realiza a busca de ativos ou produtos relacionados a uma oportunidade, obtÃ©m informaÃ§Ãµes adicionais, calcula descontos e cria registros de produtos na oportunidade com base nos ativos encontrados.

Tipo
- Autolaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Pesquisar ativos ou produtos relacionados a uma oportunidade especÃ­fica.
- Obter detalhes do ativo, como marca, modelo, chassi, placa e preÃ§o.
- Obter o Pricebook padrÃ£o.
- Calcular descontos e valores finais.
- Criar registros de produtos na oportunidade com os detalhes obtidos.
- Navegar para uma visualizaÃ§Ã£o de ativo ou produto selecionado.

Etapas Principais
1. InÃ­cio â€“ Fluxo inicia na variÃ¡vel `recordId` que deve ser passada como parÃ¢metro.
2. Buscar Ativo â€“ Consulta o ativo (Asset) pelo ID fornecido.
3. Buscar Produto Ativo â€“ ObtÃ©m o produto relacionado ao ativo.
4. Obter Oportunidade â€“ Consulta a oportunidade pelo ID.
5. Obter Pricebook PadrÃ£o â€“ Chama uma aÃ§Ã£o Apex para obter o ID do Pricebook padrÃ£o.
6. Buscar Entrada Livro PreÃ§o â€“ Consulta o PricebookEntry ativo para o produto.
7. DecisÃ£o â€“ Verifica se uma oportunidade foi selecionada (`dwBuscaAtivo.opportunityId` nÃ£o Ã© nulo).
8. Atribuir Campos â€“ Atualiza campos na oportunidade com informaÃ§Ãµes do ativo.
9. Criar Produto na Oportunidade â€“ Cria um OpportunityLineItem com detalhes do ativo.
10. Navegar â€“ Redireciona para a visualizaÃ§Ã£o do ativo ou produto selecionado.
11. Tela de Erro â€“ Exibe mensagem de erro caso ocorra alguma falha.

VariÃ¡veis
- `Ativos_filtrados` (SObject Collection) â€“ ColeÃ§Ã£o de ativos filtrados (Asset).
- `currentItem_Filtrar_marca_loja` (SObject) â€“ VariÃ¡vel auxiliar para manipulaÃ§Ã£o de ativo.
- `Lista_produtos` (Multipicklist) â€“ Lista de produtos selecionados.
- `Lista_produtos_selecionados_tablea_proutos` (SObject Collection) â€“ ColeÃ§Ã£o de produtos selecionados.
- `pricebook2Id` (String) â€“ ID do Pricebook padrÃ£o.
- `pricebookEntryId` (String) â€“ ID do PricebookEntry do produto ativo.
- `recordId` (String) â€“ ID da oportunidade, passado como entrada.
- `totalQtVeiculosSearch` (Number) â€“ Quantidade total de veÃ­culos buscados.

Componentes e AÃ§Ãµes
- **Busca de registros**: Asset, Opportunity, Product2, PricebookEntry.
- **Apex**: Obter Pricebook PadrÃ£o.
- **DecisÃ£o**: Verifica se uma oportunidade foi selecionada.
- **AtribuiÃ§Ãµes**: Atualiza campos na oportunidade com informaÃ§Ãµes do ativo.
- **CriaÃ§Ã£o de registros**: OpportunityLineItem para associar produto Ã  oportunidade.
- **NavegaÃ§Ã£o**: Redireciona para visualizaÃ§Ã£o do ativo ou produto selecionado.
- **Tela de erro**: Exibe mensagem caso ocorra alguma falha no fluxo.

ConsideraÃ§Ãµes
- O fluxo inicia com a variÃ¡vel `recordId`, que deve ser passada ao chamÃ¡-lo, geralmente a partir de um botÃ£o ou automaÃ§Ã£o.
- A aÃ§Ã£o Apex `Pricebook2Util` Ã© responsÃ¡vel por obter o ID do Pricebook padrÃ£o.
- O fluxo realiza validaÃ§Ãµes para garantir que ativos e produtos sejam encontrados antes de criar registros.
- A navegaÃ§Ã£o ao final permite ao usuÃ¡rio visualizar o ativo ou produto selecionado.
- Ã‰ importante tratar possÃ­veis erros na execuÃ§Ã£o para evitar falhas silenciosas.

Este fluxo Ã© Ãºtil para processos de busca, seleÃ§Ã£o e associaÃ§Ã£o de ativos ou produtos a oportunidades, automatizando tarefas que, de outra forma, exigiriam intervenÃ§Ã£o manual.

# Flow: DWChatterAfterFlowUpdateRegistrarAtualizacao

## DescriÃ§Ã£o
O Flow `DWChatterAfterFlowUpdateRegistrarAtualizacao` Ã© um fluxo automatizado do Salesforce que Ã© acionado apÃ³s a criaÃ§Ã£o ou atualizaÃ§Ã£o de um FeedItem (post no Chatter). Sua principal funÃ§Ã£o Ã© verificar se o FeedItem estÃ¡ relacionado a um Lead ou Oportunidade e, se estiver, registrar a data e hora da Ãºltima modificaÃ§Ã£o nesse registro relacionado.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

## Objetivo
- Detectar modificaÃ§Ãµes no feed do Chatter relacionadas a Leads ou Oportunidades.
- Atualizar o campo personalizado de data de Ãºltima modificaÃ§Ã£o (`DWUltimaModificacaoProprietario__c`) no Lead ou Oportunidade correspondente, com a data e hora atuais.

## Etapas Principais

1. **InÃ­cio**  
   O Flow Ã© acionado automaticamente apÃ³s a criaÃ§Ã£o ou atualizaÃ§Ã£o de um FeedItem (`RecordAfterSave`), que representa uma postagem no Chatter.

2. **DecisÃ£o: Objeto Relacionado Ã© Lead ou Oportunidade?**  
   Verifica se o FeedItem estÃ¡ relacionado a um Lead ou a uma Oportunidade, usando os campos `Parent:Lead.Id` e `Parent:Opportunity.Id`.  
   - Se relacionado a um Lead, direciona para a variÃ¡vel `LeadS`.  
   - Se relacionado a uma Oportunidade, direciona para a variÃ¡vel `OppS`.

3. **Consulta Lead**  
   Se o FeedItem estiver relacionado a um Lead, realiza uma busca (`Get Records`) pelo Lead usando o ID do Lead (`$Record.Parent:Lead.Id`) e armazena o resultado na variÃ¡vel `LeadS`.

4. **Consulta Oportunidade**  
   Se o FeedItem estiver relacionado a uma Oportunidade, realiza uma busca pelo Opportunity usando o ID da Oportunidade (`$Record.Parent:Opportunity.Id`) e armazena na variÃ¡vel `OppS`.

5. **AtribuiÃ§Ã£o de Data de ModificaÃ§Ã£o**  
   - Para Lead: atribui a data e hora atuais (`$Flow.CurrentDateTime`) ao campo `DWUltimaModificacaoProprietario__c` do Lead (`AtribuirCampoDataModificacaoLead`).  
   - Para Oportunidade: faz o mesmo, atribuindo ao campo `DWUltimaModificacaoProprietario__c` do Opportunity (`AtribuirCampoDataModificacaoOpp`).

6. **AtualizaÃ§Ã£o dos Registros**  
   - Atualiza o Lead com a nova data, se aplicÃ¡vel.  
   - Atualiza a Oportunidade com a nova data, se aplicÃ¡vel.

## VariÃ¡veis
- `$Record` (padrÃ£o) â€“ Registro do FeedItem que acionou o Flow.
- `LeadS` (Record Variable) â€“ Armazena o Lead encontrado.
- `OppS` (Record Variable) â€“ Armazena a Oportunidade encontrada.
- `CurrentDateTime` (Formula) â€“ ExpressÃ£o que retorna a data e hora atuais (`$Flow.CurrentDateTime`).

## ConsideraÃ§Ãµes
- Este Flow Ã© acionado automaticamente apÃ³s a criaÃ§Ã£o ou atualizaÃ§Ã£o de um FeedItem, garantindo que qualquer modificaÃ§Ã£o relevante no Chatter seja registrada no Lead ou Oportunidade relacionada.
- Os campos personalizados `DWUltimaModificacaoProprietario__c` devem existir nos objetos Lead e Oportunidade.
- Ã‰ importante que os relacionamentos no FeedItem estejam corretamente configurados para que a lÃ³gica de identificaÃ§Ã£o funcione corretamente.
- O Flow utiliza a versÃ£o 63.0 da API do Salesforce.

## Resumo do Processo
```plaintext
FeedItem (Chatter) criado ou atualizado
        |
        v
Verifica se estÃ¡ relacionado a Lead ou Oportunidade
        |
        v
Consulta o Lead ou Oportunidade correspondente
        |
        v
Atribui a data e hora atuais ao campo de Ãºltima modificaÃ§Ã£o
        |
        v
Atualiza o registro Lead ou Oportunidade
```

Flow: DWOpportunityLineItemAtualizarOppQuandoFaltarFornecedorProd

DescriÃ§Ã£o
O Flow `DWOpportunityLineItemAtualizarOppQuandoFaltarFornecedorProd` Ã© responsÃ¡vel por verificar os fornecedores associados aos produtos de uma oportunidade e atualizar o campo de controle na oportunidade, indicando se hÃ¡ fornecedores nÃ£o preenchidos ou ausentes. Ele tambÃ©m realiza verificaÃ§Ãµes especÃ­ficas para fornecedores de lista de preÃ§os (LP) e ajusta o status do campo de fornecedores na oportunidade conforme necessÃ¡rio.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Automatizar a validaÃ§Ã£o da presenÃ§a de fornecedores nos produtos de uma oportunidade.
- Atualizar o campo de controle `DWFornecedoresNaoPreenchidos__c` na oportunidade com base na preenchimento dos fornecedores.
- Navegar por fornecedores padrÃ£o e fornecedores de lista de preÃ§os associados aos produtos da oportunidade.
- Garantir que o campo de fornecedores nÃ£o preenchidos seja atualizado corretamente, facilitando processos de aprovaÃ§Ã£o ou validaÃ§Ã£o.

Etapas Principais
1. **Start**: Disparado apÃ³s a criaÃ§Ã£o ou atualizaÃ§Ã£o de um OpportunityLineItem.
2. **Get Records - Oportunidade**: Busca a oportunidade relacionada ao item de linha de oportunidade.
3. **Get Records - Produtos de Opp**: ObtÃ©m todos os produtos de uma oportunidade, excluindo o prÃ³prio item que disparou o fluxo.
4. **Get Records - Fornecedores**: Verifica se hÃ¡ fornecedores associados ao produto da oportunidade.
5. **DecisÃ£o - Existe fornecedor?**: Verifica se hÃ¡ fornecedores associados.
   - Se **Sim**, passa para verificar fornecedores de lista de preÃ§os.
   - Se **NÃ£o**, marca o campo `DWFornecedoresNaoPreenchidos__c` como `true`.
6. **DecisÃ£o - Existe fornecedorLP?**: Verifica se hÃ¡ fornecedores de lista de preÃ§os associados.
   - Se **Sim**, verifica se hÃ¡ fornecedores de lista de preÃ§os preenchidos.
   - Se **NÃ£o**, pula para marcar fornecedores nÃ£o preenchidos.
7. **DecisÃ£o - FornecedorLP preenchido?**: Verifica se hÃ¡ fornecedores de lista de preÃ§os preenchidos.
   - Se **Sim**, verifica se hÃ¡ produtos de fornecedores de lista de preÃ§os associados.
   - Se **NÃ£o**, marca fornecedores nÃ£o preenchidos.
8. **DecisÃ£o - Fornecedor preenchido?**: Verifica se o fornecedor padrÃ£o do produto estÃ¡ preenchido.
   - Se **Sim**, continua o processamento.
   - Se **NÃ£o**, marca fornecedores nÃ£o preenchidos.
9. **Loop - Produtos de Opp com Fornecedores**: Itera sobre os produtos da oportunidade.
10. **DecisÃ£o - FornecedorLP preenchido?** (dentro do loop): Verifica se hÃ¡ fornecedores de lista de preÃ§os preenchidos para cada produto.
11. **AtualizaÃ§Ã£o - Marcar/Desmarcar fornecedores nÃ£o preenchidos**: Atualiza o campo `DWFornecedoresNaoPreenchidos__c` na oportunidade com `true` ou `false` dependendo das verificaÃ§Ãµes.

VariÃ¡veis
- `$Record.OpportunityId`: ID da oportunidade relacionada ao item de linha.
- `Oportunidade`: Objeto Opportunity, carregado no inÃ­cio.
- `ProdutosOpp`: ColeÃ§Ã£o de produtos de oportunidade relacionados.
- `Fornecedores`: Fornecedores associados ao produto.
- `FornecedoresLP`: Fornecedores de lista de preÃ§os associados.
- `DWFornecedoresNaoPreenchidos__c`: Campo de controle na oportunidade que indica se hÃ¡ fornecedores nÃ£o preenchidos.

ConsideraÃ§Ãµes
- O fluxo Ã© disparado apÃ³s a criaÃ§Ã£o ou atualizaÃ§Ã£o de um OpportunityLineItem.
- O fluxo realiza vÃ¡rias verificaÃ§Ãµes condicionais para determinar se os fornecedores estÃ£o preenchidos ou ausentes.
- A lÃ³gica garante que o campo de controle na oportunidade seja atualizado corretamente, facilitando processos de validaÃ§Ã£o ou aprovaÃ§Ã£o.
- Ã‰ importante que os relacionamentos entre produtos, fornecedores e fornecedores de lista de preÃ§os estejam corretamente configurados para que as verificaÃ§Ãµes funcionem adequadamente.
- O fluxo Ã© configurado para rodar automaticamente na fase de "Record After Save", garantindo que as atualizaÃ§Ãµes ocorram imediatamente apÃ³s alteraÃ§Ãµes nos itens de linha de oportunidade.

# Flow: DW_ScreenFlow_DeployFila

## DescriÃ§Ã£o
O Flow `DW_ScreenFlow_DeployFila` Ã© uma automaÃ§Ã£o de interface de usuÃ¡rio que permite selecionar filas de grupos no Salesforce e enviÃ¡-las para outro ambiente, facilitando o deploy de filas entre diferentes ambientes Salesforce. Ele tambÃ©m trata de validaÃ§Ãµes, exibiÃ§Ã£o de mensagens e manipulaÃ§Ã£o de filas selecionadas.

## Tipo
- Screen Flow (com interface de usuÃ¡rio)

## Objetivo
- Permitir ao usuÃ¡rio selecionar filas (grupos do tipo Queue) no Salesforce.
- Validar se hÃ¡ filas selecionadas.
- Vincular filas ao ambiente de destino.
- Executar o deploy das filas selecionadas em outro ambiente Salesforce via chamada Apex.
- Gerenciar mensagens de erro e confirmaÃ§Ãµes durante o processo.

## Etapas Principais

### 1. Obter filas (`ObterFilas`)
- Consulta registros do objeto `Group` onde o campo `Type` Ã© igual a `"Queue"`.
- Ordena por `Name` em ordem ascendente.
- Armazena os resultados em uma coleÃ§Ã£o para uso posterior.
- Caso ocorra erro na consulta, direciona para a tela de falha (`FalhaEnviarFilas`).

### 2. Tela de seleÃ§Ã£o de filas (`SelecionarFilasDeployTela`)
- Exibe uma tabela de filas (`TabelaFilas`) com suporte a mÃºltipla seleÃ§Ã£o.
- Permite ao usuÃ¡rio selecionar uma ou mais filas.
- Inclui uma mensagem de instruÃ§Ã£o para o usuÃ¡rio.
- ApÃ³s seleÃ§Ã£o, o fluxo direciona para a etapa de vinculaÃ§Ã£o de organizaÃ§Ã£o de destino.

### 3. Vincular organizaÃ§Ã£o de destino (`VincularOrganizacaoDestinoTela`)
- Exibe uma mensagem para o usuÃ¡rio escolher o ambiente de destino.
- Inclui um componente personalizado (`dwReceiveExternalSf`) para receber informaÃ§Ãµes do ambiente externo.
- Permite ao usuÃ¡rio avanÃ§ar para a prÃ³xima etapa.

### 4. ConfirmaÃ§Ã£o de envio (`Confirmar envio de filas`)
- Tela de confirmaÃ§Ã£o onde o usuÃ¡rio pode revisar e enviar as filas selecionadas.
- Inclui uma mensagem de confirmaÃ§Ã£o.
- Permite voltar ou avanÃ§ar para o processamento.

### 5. Loop nas filas selecionadas (`LoopFilasSelecionadas`)
- Itera sobre cada fila selecionada na coleÃ§Ã£o `TabelaFilas.selectedRows`.
- Para cada fila, atribui o `DeveloperName` Ã  coleÃ§Ã£o `queueDeveloperNames`.
- ApÃ³s o loop, chama a aÃ§Ã£o Apex para deploy das filas.

### 6. AÃ§Ã£o Apex de deploy (`DW_DeployQueue`)
- Executa o deploy das filas no ambiente de destino usando Apex.
- Recebe parÃ¢metros de autenticaÃ§Ã£o, URL do ambiente e nomes das filas.
- Caso ocorra erro, direciona para a tela de falha.

### 7. Tela de falha (`FalhaEnviarFilas`)
- Exibe mensagem de erro detalhada ao usuÃ¡rio, caso o deploy falhe.

### 8. Tela de nenhuma fila encontrada (`NenhumaFilaLocalizadaTela`)
- Exibe mensagem informando que nenhuma fila foi localizada, caso a consulta nÃ£o retorne filas.

## VariÃ¡veis
- `queueDeveloperNames` (ColeÃ§Ã£o de String): Armazena os nomes dos desenvolvedores das filas selecionadas.
- `dwReceiveExternalSf` (ComponentInstance): Recebe informaÃ§Ãµes do ambiente externo, como cÃ³digo de autenticaÃ§Ã£o e URL.
- Outras variÃ¡veis internas de controle de fluxo e mensagens.

## ConsideraÃ§Ãµes
- O fluxo inicia com a consulta de filas do tipo Queue.
- Permite mÃºltiplas seleÃ§Ãµes de filas via componente de tabela.
- Inclui validaÃ§Ãµes para garantir que filas foram selecionadas antes de proceder.
- Utiliza uma aÃ§Ã£o Apex (`DW_DeployQueue`) para realizar o deploy das filas, passando os parÃ¢metros necessÃ¡rios.
- Possui tratamento de erros robusto, exibindo mensagens amigÃ¡veis ao usuÃ¡rio.
- Pode ser integrado a outros processos ou chamado via botÃ£o ou Apex.

---

Este fluxo Ã© uma soluÃ§Ã£o completa para gerenciar o deploy de filas entre ambientes Salesforce, com interface amigÃ¡vel e lÃ³gica de validaÃ§Ã£o e erro bem estruturada.

# Flow: DWOpportunityFlowAfterUpdateAtualizarValorAtivoQuandoAlteradoValorVeiculoOpp

## DescriÃ§Ã£o
O Flow `DWOpportunityFlowAfterUpdateAtualizarValorAtivoQuandoAlteradoValorVeiculoOpp` Ã© um fluxo automatizado do Salesforce que Ã© acionado apÃ³s a atualizaÃ§Ã£o de registros da oportunidade. Sua principal funÃ§Ã£o Ã© verificar se o valor do campo `DWValorVeiculo__c` foi alterado na oportunidade e, se sim, buscar o item de linha de oportunidade relacionado ao ativo (`OpportunityLineItem`) correspondente, atualizando o valor de venda do ativo com o valor do campo `DWValorVeiculo__c`. AlÃ©m disso, caso ocorra uma falha na execuÃ§Ã£o, uma postagem no Chatter Ã© feita para notificar o erro.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

## Objetivo
- Detectar alteraÃ§Ãµes no campo `DWValorVeiculo__c` na oportunidade.
- Atualizar o valor de venda do ativo relacionado (`OpportunityLineItem`) com o novo valor do veÃ­culo.
- Notificar via Chatter em caso de falha na execuÃ§Ã£o do fluxo.

## Etapas Principais

### 1. Disparo do Flow
- O fluxo Ã© iniciado apÃ³s a atualizaÃ§Ã£o de um registro de `Opportunity`.
- A condiÃ§Ã£o de disparo verifica se o campo `Estoque__c` nÃ£o estÃ¡ nulo e se o campo `DWValorVeiculo__c` foi alterado (`IsChanged = true`).

### 2. Busca pelo Item de Linha de Oportunidade (`OpportunityLineItem`)
- Utiliza um elemento `Get Records` chamado `OppLineItemAtivoS`.
- Busca o primeiro registro de `OpportunityLineItem` que:
  - Possua `OpportunityId` igual ao ID da oportunidade atual (`$Record.Id`).
  - Possua o campo `DWAtivo__c` igual ao valor de `$Record.Estoque__c`.
- Caso nÃ£o encontre registros, o fluxo direciona para uma aÃ§Ã£o de falha.

### 3. DecisÃ£o: Registro Encontrado?
- O fluxo possui uma decisÃ£o chamada `BuscouRegistro`.
- Se encontrou um registro (`SimObteve`), prossegue para atualizar o valor do ativo.
- Se nÃ£o encontrou, direciona para uma aÃ§Ã£o de postagem de erro no Chatter.

### 4. AtualizaÃ§Ã£o do Valor do Ativo
- Atribui o valor de `$Record.DWValorVeiculo__c` ao campo `UnitPrice` do item de linha de oportunidade (`OppLineItemAtivoS`).
- Utiliza um elemento `Update Records` chamado `AtualizarProdutoOportunidade`.
- Atualiza o registro de `OpportunityLineItem` com o novo valor.

### 5. Postagem no Chatter em Caso de Erro
- Caso a busca pelo item de linha nÃ£o retorne registros, o fluxo executa uma aÃ§Ã£o de postagem no Chatter.
- A postagem contÃ©m a mensagem: "Falha no fluxo, verificar. Flow API: DWOpportunityFlowAfterUpdateAtualizarValorAtivoQuandoAlteradoValorVeiculoOpp".
- A postagem Ã© feita no registro da oportunidade (`$Record.Id`).

## VariÃ¡veis
- **$Record**: Registro da oportunidade que disparou o fluxo.
- **OppLineItemAtivoS**: VariÃ¡vel que armazena o item de linha de oportunidade encontrado.
- **AttrValorVendaAtivo**: VariÃ¡vel de atribuiÃ§Ã£o que define o valor de venda do ativo (`UnitPrice`).

## ConsideraÃ§Ãµes
- O fluxo Ã© acionado somente quando o campo `DWValorVeiculo__c` na oportunidade Ã© alterado e o campo `Estoque__c` nÃ£o estÃ¡ nulo.
- A busca pelo item de linha de oportunidade Ã© feita com base no `OpportunityId` e no campo `DWAtivo__c`.
- Caso nÃ£o seja possÃ­vel encontrar o item de linha correspondente, uma postagem no Chatter Ã© enviada para notificaÃ§Ã£o.
- Recomenda-se verificar se os nomes dos campos e objetos estÃ£o corretos e se o fluxo possui as permissÃµes necessÃ¡rias para executar as aÃ§Ãµes.

---

Se precisar de mais detalhes ou de uma anÃ¡lise especÃ­fica de alguma parte do XML, estou Ã  disposiÃ§Ã£o!

Flow: DWLeadScreenFlowCriarNovoLead

DescriÃ§Ã£o
O Flow `DWLeadScreenFlowCriarNovoLead` Ã© uma automaÃ§Ã£o de tela (Screen Flow) que facilita a criaÃ§Ã£o de novos leads no Salesforce, incluindo validaÃ§Ãµes, atribuiÃ§Ãµes e possÃ­veis conversÃµes automÃ¡ticas para oportunidade. Ele tambÃ©m gerencia a navegaÃ§Ã£o e exibiÃ§Ã£o de mensagens ao usuÃ¡rio, garantindo que os dados estejam corretos antes de criar o lead.

Tipo
- Screen Flow (com interface de usuÃ¡rio)

Objetivo
- Coletar informaÃ§Ãµes do cliente para criar um novo lead.
- Validar dados essenciais como telefone, e-mail, mÃ­dia e fonte.
- Atribuir proprietÃ¡rio do lead com base no perfil do usuÃ¡rio ou perfil de qualificaÃ§Ã£o.
- Verificar duplicidade de leads.
- Converter lead em oportunidade automaticamente, se aplicÃ¡vel.
- Navegar entre telas de sucesso, erro ou duplicidade, conforme o fluxo de validaÃ§Ãµes e aÃ§Ãµes.

Etapas Principais
1. InÃ­cio do fluxo e verificaÃ§Ã£o se o usuÃ¡rio tem permissÃ£o para criar leads (`UsuarioPodeCriarLeads`).
2. ObtenÃ§Ã£o do perfil do usuÃ¡rio e validaÃ§Ã£o de permissÃµes.
3. Coleta de dados do cliente na tela `TelaCriarLead`, incluindo nome, telefone, e-mail, loja, mÃ­dia e fonte.
4. ValidaÃ§Ã£o do telefone e e-mail, alÃ©m de verificar se a loja foi preenchida.
5. ObtenÃ§Ã£o de registros relacionados, como loja (`LojaUsuarioS`) e mÃ­dia (`obterMidia`).
6. VerificaÃ§Ã£o de duplicidade de leads (`Obter_duplicados`).
7. ValidaÃ§Ã£o de campos obrigatÃ³rios e de negÃ³cio, como tipo de registro e proprietÃ¡rio.
8. AtribuiÃ§Ã£o do proprietÃ¡rio do lead, podendo ser definido pelo perfil ou perfil de qualificaÃ§Ã£o (`atribuiLojaUsuario`, `DW_SubflowAtribuirProprietarioPeloPerfilQualificacao`).
9. CriaÃ§Ã£o do lead (`Inserir_lead`) com os dados coletados.
10. Se a conversÃ£o automÃ¡tica for possÃ­vel, realiza a conversÃ£o do lead em oportunidade (`ConverterLeadOportunidade`).
11. ExibiÃ§Ã£o de mensagens de sucesso ou erro, incluindo telas especÃ­ficas para leads duplicados ou falhas na criaÃ§Ã£o.

VariÃ¡veis
- `celularInformado` (String): Telefone informado pelo usuÃ¡rio.
- `emailInformado` (String): E-mail informado pelo usuÃ¡rio.
- `erroFonte` (Boolean): Flag para erro na fonte.
- `erroMidia` (Boolean): Flag para erro na mÃ­dia.
- `fonteInformada` (String): Fonte de contato selecionada.
- `lojaInformada` (String): Loja selecionada.
- `midiaInformada` (String): MÃ­dia selecionada.
- `mostrarErroAtribuido` (Boolean): Flag para exibir erro de atribuiÃ§Ã£o.
- `nomeInformado` (String): Nome do lead.
- `novoProprietario` (String): ProprietÃ¡rio do lead atribuÃ­do.

ConsideraÃ§Ãµes
- O fluxo Ã© ativado para criar novos leads, com validaÃ§Ãµes de dados obrigatÃ³rios e regras de negÃ³cio.
- Inclui subfluxos para atribuiÃ§Ã£o de proprietÃ¡rio pelo perfil e para verificar duplicados.
- Usa componentes personalizados (`c:showToast`, `c:NavigationObject`, `c:dwCellPhoneValidation`, etc.) para exibir mensagens e validar campos.
- O fluxo Ã© configurado para rodar em modo `SystemModeWithoutSharing`, garantindo acesso completo aos registros.
- As telas de erro, duplicidade e permissÃµes ajudam na experiÃªncia do usuÃ¡rio, orientando sobre aÃ§Ãµes corretas ou problemas.

Este fluxo Ã© uma soluÃ§Ã£o completa para automaÃ§Ã£o de criaÃ§Ã£o de leads com validaÃ§Ãµes, atribuiÃ§Ãµes e conversÃµes automÃ¡ticas, garantindo integridade e eficiÃªncia no processo de captaÃ§Ã£o de clientes.

# Flow: DWTermoBeforeCreateNaoCriaTermoDuplicado.flow

## DescriÃ§Ã£o
O Flow `DWTermoBeforeCreateNaoCriaTermoDuplicado.flow` Ã© um fluxo automatizado do tipo AutoLaunched que Ã© acionado antes da criaÃ§Ã£o ou atualizaÃ§Ã£o de registros do objeto `Termo__c`. Sua principal funÃ§Ã£o Ã© impedir a criaÃ§Ã£o de termos duplicados, garantindo que os termos sejam criados apenas por um procedimento controlado, especificamente atravÃ©s de um botÃ£o na oportunidade.

Ele verifica se o termo foi criado via Flow (`DWCriadoViaFlow__c`), e se esse campo estiver marcado como verdadeiro, o fluxo reseta esse campo para falso apÃ³s a operaÃ§Ã£o. Caso contrÃ¡rio, exibe uma mensagem de erro orientando o usuÃ¡rio a criar ou editar o termo apenas pelo botÃ£o localizado no cabeÃ§alho da oportunidade.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio, acionado por evento de registro)

## Objetivo
- Impedir a criaÃ§Ã£o de registros duplicados do objeto `Termo__c`.
- Garantir que a criaÃ§Ã£o ou ediÃ§Ã£o do termo seja feita somente pelo botÃ£o especÃ­fico na oportunidade.
- Controlar o fluxo de criaÃ§Ã£o do termo atravÃ©s do campo `DWCriadoViaFlow__c`.

## Etapas Principais
1. **Start**: Acionamento do Flow antes de salvar o registro `Termo__c` (Create ou Update).
2. **Decision - Criado via Flow** (`Criado_via_flow`): Verifica se o campo `$Record.DWCriadoViaFlow__c` estÃ¡ marcado como `true`.
   - Se **Sim**: direciona para a etapa que reseta o campo para `false`.
   - Se **NÃ£o**: direciona para exibir uma mensagem de erro personalizada.
3. **Assignment - Volta o campo para false** (`Volta_o_campo_para_false`): Reseta o campo `DWCriadoViaFlow__c` para `false` apÃ³s a criaÃ§Ã£o via Flow.
4. **Custom Error - Erro ja possui o termo** (`ErroJaPossuiEndereco`): Exibe uma mensagem de erro personalizada informando que a criaÃ§Ã£o ou ediÃ§Ã£o do termo deve ser feita pelo botÃ£o na oportunidade.

## VariÃ¡veis
- **$Record**: ReferÃªncia ao registro `Termo__c` que estÃ¡ sendo criado ou atualizado.
- **DWCriadoViaFlow__c** (Boolean): Campo que indica se o termo foi criado via Flow.
- **ErroJaPossuiEndereco**: Mensagem de erro personalizada exibida ao usuÃ¡rio.

## Detalhes TÃ©cnicos
- **VersÃ£o da API**: 63.0
- **Tipo de Trigger**: RecordBeforeSave (antes de salvar o registro)
- **Ambiente**: PadrÃ£o (Default)
- **Label do Flow**: DW - Termo (before create/update) - NÃ£o cria termo duplicado
- **DescriÃ§Ã£o**: Este Flow impede a criaÃ§Ã£o de termos duplicados, permitindo sua criaÃ§Ã£o apenas via botÃ£o na oportunidade. Se o termo for criado via Flow, o campo `DWCriadoViaFlow__c` Ã© resetado para falso apÃ³s a operaÃ§Ã£o, garantindo controle do processo. A criaÃ§Ã£o ou ediÃ§Ã£o deve ocorrer somente pelo botÃ£o localizado no cabeÃ§alho da oportunidade.

## Fluxo Visual
```plaintext
Start (Antes de criar/atualizar Termo__c)
    |
    v
DecisÃ£o: Criado via Flow? (DWCriadoViaFlow__c == true)
    |                                |
    |                                v
    |                         Reseta o campo DWCriadoViaFlow__c para false
    |                                |
    |                                v
    |                         Termina o fluxo
    |
    v
Se nÃ£o foi criado via Flow
    |
    v
Exibe mensagem de erro: "Para criar ou editar um termo, utilize o botÃ£o localizado no cabeÃ§alho da oportunidade."
```

## ConsideraÃ§Ãµes
- Este Flow Ã© fundamental para manter a integridade do processo de criaÃ§Ã£o de termos, garantindo que eles sejam criados apenas por procedimentos autorizados.
- A mensagem de erro personalizada orienta o usuÃ¡rio a utilizar o mÃ©todo correto de criaÃ§Ã£o ou ediÃ§Ã£o do termo.
- O campo `DWCriadoViaFlow__c` Ã© utilizado como um sinalizador para distinguir entre criaÃ§Ãµes automÃ¡ticas e manuais, garantindo controle preciso do fluxo de trabalho.

---

Se precisar de mais detalhes ou de uma explicaÃ§Ã£o sobre alguma etapa especÃ­fica, estou Ã  disposiÃ§Ã£o!

Flow: DWLeadScreenFlowUpdateAtribuirLeadDesqualificado

DescriÃ§Ã£o
O Flow `DWLeadScreenFlowUpdateAtribuirLeadDesqualificado` Ã© uma automaÃ§Ã£o que permite desqualificar um Lead, atualizando seu status e motivos de desqualificaÃ§Ã£o, alÃ©m de exibir mensagens de sucesso ou erro ao usuÃ¡rio.

Tipo
- Screen Flow (com interface de usuÃ¡rio)

Objetivo
- Permitir que usuÃ¡rios autorizados desqualifiquem um Lead, definindo motivos especÃ­ficos e uma data futura, e exibir feedback visual sobre a operaÃ§Ã£o.

Etapas Principais
1. InÃ­cio â€“ O fluxo inicia ao receber o `recordId` do Lead a ser desqualificado.
2. Get Records â€“ Consulta o Lead pelo ID fornecido.
3. DecisÃ£o â€“ Verifica se o usuÃ¡rio possui permissÃ£o para desqualificar (perfil de Administrador, Gerente ou proprietÃ¡rio do Lead).
4. Tela de ConfirmaÃ§Ã£o â€“ Exibe uma mensagem de confirmaÃ§Ã£o para o usuÃ¡rio.
5. Tela de Escolha de Motivos â€“ Permite selecionar motivos de desqualificaÃ§Ã£o e uma data futura, caso aplicÃ¡vel.
6. Assign â€“ Atualiza os campos do Lead com status "Desqualificado" e motivos selecionados.
7. Update Records â€“ Salva as alteraÃ§Ãµes no Lead.
8. Toast de Sucesso â€“ Exibe uma mensagem de sucesso ao usuÃ¡rio.
9. NavegaÃ§Ã£o â€“ Redireciona ou atualiza a tela apÃ³s a operaÃ§Ã£o.
10. Tela de Erro â€“ Caso ocorra falha na automaÃ§Ã£o, exibe uma mensagem de erro.

VariÃ¡veis
- `recordId` (String, Input) â€“ ID do Lead a ser desqualificado.
- `dataCriacaoFutura` (Date) â€“ VariÃ¡vel auxiliar para data futura.
- `LeadS` (Record) â€“ VariÃ¡vel que armazena o Lead consultado.
- `userId18` (String, FÃ³rmula) â€“ ID do usuÃ¡rio logado, formatado para 18 dÃ­gitos.

Componentes e AÃ§Ãµes
- `MsgSucessoToast`: Componente de toast que exibe mensagem de sucesso apÃ³s a desqualificaÃ§Ã£o.
- `NavObject`: Componente que forÃ§a a atualizaÃ§Ã£o da tela apÃ³s a operaÃ§Ã£o.
- `AttrCamposLead`: Atribui novos valores aos campos do Lead, como status e motivos.
- `Pode_desqualificar`: DecisÃ£o que verifica se o usuÃ¡rio tem permissÃ£o para desqualificar.
- `Desqualificar`: Tela de confirmaÃ§Ã£o de desqualificaÃ§Ã£o.
- `EscolhaDesqualificacao`: Tela para seleÃ§Ã£o de motivos e data futura.
- `NaoPodeDesqualificar`: Tela exibida se o usuÃ¡rio nÃ£o tiver permissÃ£o.
- `TelaErro`: Tela exibida em caso de erro na automaÃ§Ã£o.

DecisÃµes
- `Pode_desqualificar`: Permite que apenas usuÃ¡rios com perfil de Administrador, Gerente ou proprietÃ¡rio do Lead possam prosseguir com a desqualificaÃ§Ã£o. Caso contrÃ¡rio, direciona para a tela de nÃ£o permissÃ£o.

Formulas
- `userId18`: Formata o ID do usuÃ¡rio logado para 18 dÃ­gitos usando `CASESAFEID({!$User.Id})`.

Fluxo de ExecuÃ§Ã£o
- Inicia buscando o Lead pelo ID.
- Verifica permissÃµes do usuÃ¡rio.
- Se autorizado, exibe a tela de confirmaÃ§Ã£o.
- ApÃ³s confirmaÃ§Ã£o, coleta motivos e data futura.
- Atualiza o Lead com status "Desqualificado" e motivos.
- Exibe toast de sucesso e forÃ§a atualizaÃ§Ã£o da tela.
- Se ocorrer erro, exibe a tela de erro com mensagem detalhada.

ConsideraÃ§Ãµes
- O fluxo deve ser iniciado com o `recordId` do Lead.
- PermissÃµes de usuÃ¡rio sÃ£o verificadas para garantir seguranÃ§a.
- As dependÃªncias de motivos de desqualificaÃ§Ã£o sÃ£o configuradas como picklists dependentes.
- A data futura sÃ³ Ã© obrigatÃ³ria se o motivo selecionado for "Interesse Futuro" ou "OpÃ§Ã£o de Preenchimento de Data".
- O fluxo Ã© configurado para rodar em modo `SystemModeWithoutSharing` para garantir acesso completo aos registros.

Este fluxo Ã© uma soluÃ§Ã£o completa para gerenciar a desqualificaÃ§Ã£o de Leads de forma controlada, com feedback visual e validaÃ§Ãµes de permissÃ£o.

# Flow: DWTaskAfterFlowUpdateRegistrarAtualizacao

## DescriÃ§Ã£o
O Flow `DWTaskAfterFlowUpdateRegistrarAtualizacao` Ã© um fluxo automatizado do tipo **AutoLaunched** que Ã© acionado apÃ³s a criaÃ§Ã£o ou atualizaÃ§Ã£o de uma tarefa (`Task`). Sua principal funÃ§Ã£o Ã© registrar a data e hora da Ãºltima modificaÃ§Ã£o relacionada ao proprietÃ¡rio, seja um Lead ou uma Oportunidade, atualizando os respectivos campos de data de modificaÃ§Ã£o.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

## Objetivo
- Detectar alteraÃ§Ãµes em tarefas (`Task`) e, dependendo do objeto relacionado (Lead ou Oportunidade), registrar a data e hora da Ãºltima modificaÃ§Ã£o no campo personalizado correspondente (`DWUltimaModificacaoProprietario__c`) do Lead ou da Oportunidade.

## Etapas Principais

1. **InÃ­cio**  
   O fluxo Ã© disparado apÃ³s a criaÃ§Ã£o ou atualizaÃ§Ã£o de uma tarefa (`Task`), com o gatilho `RecordAfterSave`.

2. **Consulta do Lead (`LeadS`)**  
   - Busca o Lead relacionado ao `WhoId` da tarefa.
   - Armazena o resultado na variÃ¡vel `LeadS`.
   - Caso nÃ£o encontre, nÃ£o realiza alteraÃ§Ãµes.

3. **Consulta da Oportunidade (`OppS`)**  
   - Busca a Oportunidade relacionada ao `WhatId` da tarefa.
   - Armazena o resultado na variÃ¡vel `OppS`.
   - Caso nÃ£o encontre, nÃ£o realiza alteraÃ§Ãµes.

4. **DecisÃ£o: Objeto Relacionado Ã© Lead ou Oportunidade?**  
   - Verifica o valor do campo `$Record.DWRelacionadoObjeto__c`.
   - Se for `"Lead"`, direciona para atualizar o Lead.
   - Se for `"Oportunidade"`, direciona para atualizar a Oportunidade.

5. **AtribuiÃ§Ã£o de Data de ModificaÃ§Ã£o**  
   - Para Lead: atribui a data/hora atual ao campo `DWUltimaModificacaoProprietario__c` do Lead.
   - Para Oportunidade: atribui a data/hora atual ao campo `DWUltimaModificacaoProprietario__c` da Oportunidade.

6. **AtualizaÃ§Ã£o dos Registros**  
   - Atualiza o Lead ou a Oportunidade com a nova data/hora de modificaÃ§Ã£o.

## VariÃ¡veis Utilizadas
- `$Record.WhoId`: ID do Lead relacionado (origem do gatilho).
- `$Record.WhatId`: ID da Oportunidade relacionada (origem do gatilho).
- `$Record.DWRelacionadoObjeto__c`: Campo que indica se o objeto relacionado Ã© Lead ou Oportunidade.
- `$Flow.CurrentDateTime`: Data e hora atuais, utilizadas para registrar a Ãºltima modificaÃ§Ã£o.
- `LeadS`: VariÃ¡vel de registro que armazena o Lead recuperado.
- `OppS`: VariÃ¡vel de registro que armazena a Oportunidade recuperada.

## Detalhes TÃ©cnicos
- **Consulta Lead (`LeadS`)**: busca pelo Lead cujo ID Ã© `$Record.WhoId`.
- **Consulta Oportunidade (`OppS`)**: busca pela Oportunidade cujo ID Ã© `$Record.WhatId`.
- **DecisÃ£o (`ObjetoRelacionadoLeadOportunidade`)**: verifica o valor de `$Record.DWRelacionadoObjeto__c` para determinar o objeto relacionado.
- **AtribuiÃ§Ãµes**: usam a variÃ¡vel `$Flow.CurrentDateTime` para definir o campo de data de modificaÃ§Ã£o.
- **AtualizaÃ§Ãµes**: usam os registros `LeadS` e `OppS` para aplicar as mudanÃ§as.

## ConsideraÃ§Ãµes
- Este fluxo deve ser acionado por tarefas (`Task`) que possam estar relacionadas a Leads ou Oportunidades.
- Os campos personalizados `DWUltimaModificacaoProprietario__c` devem existir nos objetos Lead e Oportunidade.
- O campo `$Record.DWRelacionadoObjeto__c` deve indicar corretamente se a relaÃ§Ã£o Ã© com Lead ou Oportunidade.
- O fluxo garante que, ao modificar uma tarefa, o sistema registre a Ãºltima data de modificaÃ§Ã£o do objeto relacionado, facilitando rastreamento de atualizaÃ§Ãµes.

---

Este fluxo Ã© uma implementaÃ§Ã£o eficiente para manter o histÃ³rico de modificaÃ§Ãµes relacionadas a tarefas, ajudando na auditoria e no acompanhamento de mudanÃ§as nos objetos principais do Salesforce.

# Flow: DWOpportunityFlowAfterAvancarVendidoMinutaAdicionarEstoque

## DescriÃ§Ã£o
O Flow `DWOpportunityFlowAfterAvancarVendidoMinutaAdicionarEstoque` Ã© uma automaÃ§Ã£o do Salesforce que Ã© acionada apÃ³s a alteraÃ§Ã£o de registros de oportunidades. Sua principal funÃ§Ã£o Ã© verificar se a oportunidade mudou de estÃ¡gio para "Vendido" e, se certas condiÃ§Ãµes forem atendidas, atualizar o estÃ¡gio da oportunidade para "Minuta". AlÃ©m disso, realiza uma consulta relacionada ao ativo de estoque (Asset) para determinar se deve ou nÃ£o atualizar a minuta.

## Tipo
- **AutoLaunched Flow (sem interface de usuÃ¡rio)**

## Objetivo
- Detectar quando uma oportunidade muda para o estÃ¡gio "Vendido" e possui estoque associado.
- Com base em condiÃ§Ãµes especÃ­ficas, decidir se deve atualizar o estÃ¡gio da oportunidade para "Minuta".
- Consultar o ativo de estoque relacionado para auxiliar na decisÃ£o de atualizaÃ§Ã£o.

## Etapas Principais

1. **InÃ­cio (Start)**
   - O Flow Ã© acionado apÃ³s a gravaÃ§Ã£o de uma oportunidade (`Opportunity`) que tenha seu campo `Estoque__c` alterado, esteja no estÃ¡gio `Vendido`, e o campo `Estoque__c` nÃ£o esteja vazio.
   - A condiÃ§Ã£o de disparo Ã© definida por um filtro que verifica se o campo `Estoque__c` foi alterado, se o estÃ¡gio Ã© `Vendido`, e se o campo `Estoque__c` nÃ£o estÃ¡ em branco.

2. **Get Records â€“ Asset (`AtivoS`)**
   - Consulta o ativo de estoque (`Asset`) cujo `Id` corresponde ao valor de `$Record.Estoque__c`.
   - A consulta busca apenas o primeiro registro encontrado (`getFirstRecordOnly=true`) e armazena o resultado para uso posterior.
   - Caso nÃ£o encontre o ativo, o fluxo continua sem erro, pois `assignNullValuesIfNoRecordsFound` estÃ¡ definido como `false`.

3. **DecisÃ£o â€“ DeveAtualizarMinuta**
   - Avalia as regras de decisÃ£o para determinar se a minuta deve ser atualizada, com base no tipo de registro (`$Record.Type`).
   
   **Regras de decisÃ£o:**
   
   - **VeÃ­culo de Estoque, atualizar**
     - CondiÃ§Ã£o: `$Record.Type` Ã© igual a `"VeÃ­culo de Estoque"`.
     - Se verdadeira, direciona para a aÃ§Ã£o de atualizar a fase da oportunidade.
   
   - **Pedido FÃ¡brica/Virada de nota, nÃ£o atualizar**
     - CondiÃ§Ã£o: `$Record.Type` Ã© igual a `"Pedido de FÃ¡brica/Virada de nota"` **e** o campo `DWEstoque__c` do ativo (`AtivoS`) Ã© igual a `"1 VN - VEICULOS  NOVOS"`.
     - Se verdadeira, nÃ£o realiza atualizaÃ§Ã£o.
   
   - **Pedido FÃ¡brica/Virada de nota, atualizar**
     - CondiÃ§Ã£o: `$Record.Type` Ã© igual a `"Pedido de FÃ¡brica/Virada de nota"` **e** o campo `DWEstoque__c` do ativo (`AtivoS`) **nÃ£o** Ã© igual a `"1 VN - VEICULOS  NOVOS"`.
     - Se verdadeira, direciona para atualizar a fase para "Minuta".

4. **Atualizar fase para Minuta (`AtualizarFaseMinuta`)**
   - Se a decisÃ£o indicar que deve atualizar, o Flow altera o campo `StageName` da oportunidade para `"Minuta"`.

## VariÃ¡veis
- **$Record**: Objeto de oportunidade que disparou o Flow.
- **AtivoS**: VariÃ¡vel que armazena o ativo de estoque consultado.
- **DeveAtualizarMinuta**: DecisÃ£o que determina se a oportunidade deve ter seu estÃ¡gio atualizado para "Minuta".

## ConsideraÃ§Ãµes
- O Flow Ã© acionado somente apÃ³s a oportunidade ser criada ou atualizada, especificamente quando o campo `Estoque__c` Ã© alterado para um valor vÃ¡lido.
- A lÃ³gica de decisÃ£o Ã© baseada no tipo de oportunidade (`Type`) e no valor do campo `DWEstoque__c` do ativo de estoque relacionado.
- A atualizaÃ§Ã£o do estÃ¡gio para "Minuta" sÃ³ ocorre se as condiÃ§Ãµes especÃ­ficas forem atendidas, garantindo maior controle sobre o processo de vendas e estoque.

---

Se precisar de mais detalhes ou de uma anÃ¡lise de como integrar ou modificar este Flow, estou Ã  disposiÃ§Ã£o!

# Flow: DWLeadAsyncFlowTransferirOportunidadeVeiculosInteresseAposConversao

## DescriÃ§Ã£o
O Flow `DWLeadAsyncFlowTransferirOportunidadeVeiculosInteresseAposConversao` Ã© uma automaÃ§Ã£o assÃ­ncrona que Ã© acionada apÃ³s a atualizaÃ§Ã£o de um Lead, especificamente quando ocorre uma conversÃ£o. Sua principal funÃ§Ã£o Ã© verificar se uma oportunidade foi criada apÃ³s a conversÃ£o do Lead e, se sim, transferir os veÃ­culos de interesse associados ao Lead para a nova oportunidade criada.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

## Objetivo
- Detectar a conversÃ£o de um Lead.
- Verificar se uma oportunidade foi criada apÃ³s a conversÃ£o.
- Caso uma oportunidade tenha sido criada, buscar veÃ­culos de interesse vinculados ao Lead.
- Atualizar esses veÃ­culos de interesse para associÃ¡-los Ã  nova oportunidade criada.

## Etapas Principais

### 1. Start
- Acionado apÃ³s a atualizaÃ§Ã£o do Lead (`RecordAfterSave`).
- Filtra Leads onde o campo `IsConverted` foi alterado para `true`.
- Inicia o fluxo de forma assÃ­ncrona apÃ³s o commit da transaÃ§Ã£o.

### 2. Get Opportunity (`OppS`)
- Consulta a oportunidade associada Ã  conversÃ£o do Lead, usando o `ConvertedOpportunityId`.
- Busca apenas o primeiro registro correspondente.
- Armazena o resultado na variÃ¡vel `OppS`.

### 3. Get VeÃ­culos de Interesse (`VeiculoInteresseColl`)
- Consulta todos os registros de `VeiculoInteresse__c` vinculados ao Lead convertido (`Lead__c` igual ao ID do Lead).
- NÃ£o limita a busca ao primeiro registro, coletando todos os veÃ­culos relacionados.
- Armazena os registros na coleÃ§Ã£o `VeiculoInteresseColl`.
- Encaminha para a decisÃ£o `ExisteVeiculoAtualizar`.

### 4. DecisÃ£o: `CriouOportunidadeAposConversao`
- Verifica se a variÃ¡vel `OppS` (a oportunidade recuperada) nÃ£o Ã© nula.
- Se nÃ£o for nula, significa que uma oportunidade foi criada apÃ³s a conversÃ£o, e o fluxo segue para a prÃ³xima etapa.
- Caso contrÃ¡rio, o fluxo termina ou segue por outro caminho padrÃ£o.

### 5. DecisÃ£o: `ExisteVeiculoAtualizar`
- Verifica se hÃ¡ veÃ­culos de interesse associados ao Lead (`VeiculoInteresseColl` nÃ£o Ã© nula ou vazia).
- Se houver veÃ­culos, encaminha para a atualizaÃ§Ã£o da coleÃ§Ã£o de veÃ­culos.

### 6. Atualizar veÃ­culos de interesse (`AtualizarColeaoVeiculosInteresse`)
- Transforma a coleÃ§Ã£o de veÃ­culos de interesse (`VeiculoInteresseColl`) para um formato de mapeamento, associando cada veÃ­culo Ã  nova oportunidade (`OppS.Id`).
- Encaminha para a aÃ§Ã£o de atualizaÃ§Ã£o (`AtualizarVeiculoInteresse`).

### 7. Atualizar veÃ­culos (`AtualizarVeiculoInteresse`)
- Executa a atualizaÃ§Ã£o dos registros de veÃ­culos de interesse, vinculando-os Ã  nova oportunidade criada.

## VariÃ¡veis
- **OppS** (Record Variable) â€“ Armazena a oportunidade recuperada apÃ³s a conversÃ£o do Lead.
- **VeiculoInteresseColl** (Collection) â€“ ColeÃ§Ã£o de registros de veÃ­culos de interesse vinculados ao Lead.
- **AtualizarColeaoVeiculosInteresse** (TransformaÃ§Ã£o) â€“ Mapeia os veÃ­culos de interesse para atualizaÃ§Ã£o, associando-os Ã  nova oportunidade.

## ConsideraÃ§Ãµes
- Este fluxo Ã© acionado automaticamente apÃ³s a alteraÃ§Ã£o do Lead, especificamente apÃ³s sua conversÃ£o.
- Ã‰ importante que o campo `ConvertedOpportunityId` esteja corretamente preenchido para que a oportunidade seja recuperada.
- O fluxo garante que veÃ­culos de interesse relacionados ao Lead sejam transferidos para a oportunidade criada, mantendo a integridade dos dados de interesse do cliente.
- Como Ã© um fluxo assÃ­ncrono, ele nÃ£o impacta a experiÃªncia do usuÃ¡rio na conversÃ£o do Lead, executando suas tarefas em background.

---

Se precisar de mais detalhes ou de uma explicaÃ§Ã£o sobre alguma parte especÃ­fica, estou Ã  disposiÃ§Ã£o!

# Flow: DWFlowAgendadoCriarNovoLeadDataFuturaOportunidade

## DescriÃ§Ã£o
O Flow `DWFlowAgendadoCriarNovoLeadDataFuturaOportunidade` Ã© um fluxo agendado que executa diariamente para identificar oportunidades com uma data futura especÃ­fica (`DWDataFutura__c`) igual Ã  data de execuÃ§Ã£o do Flow. Quando encontra essas oportunidades, ele cria automaticamente novos registros de Lead, utilizando informaÃ§Ãµes da oportunidade original e de seus registros relacionados. Este processo visa automatizar a geraÃ§Ã£o de leads com base em oportunidades que estÃ£o programadas para o futuro.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio, agendado)

## Objetivo
- Automatizar a criaÃ§Ã£o de novos Leads a partir de oportunidades com uma data futura especÃ­fica (`DWDataFutura__c`), que coincida com a data de execuÃ§Ã£o do Flow.
- Reutilizar dados da oportunidade original e seus registros relacionados para preencher os campos do Lead.

## Etapas Principais

### 1. Obter Oportunidades para CriaÃ§Ã£o
- Consulta registros do objeto `Opportunity` onde:
  - `DWDataCriacaoFutura__c` Ã© igual Ã  data atual (`$Flow.CurrentDate`)
  - `StageName` Ã© igual a `"Perdido"`
- Essa etapa busca identificar oportunidades que estÃ£o marcadas para criar um lead futuro na data de execuÃ§Ã£o do Flow.

### 2. DecisÃ£o: Existem Leads para Criar?
- Verifica se a coleÃ§Ã£o de oportunidades obtidas nÃ£o estÃ¡ vazia.
- Se houver oportunidades, o Flow inicia um loop para processar cada uma delas.

### 3. Loop para Atribuir Campos ao Lead
- Itera sobre cada oportunidade encontrada.
- Para cada oportunidade, cria uma variÃ¡vel de Lead (`LeadParaCriar`) e atribui diversos campos usando uma sÃ©rie de fÃ³rmulas e valores relacionados:
  - Nome, sobrenome, status, proprietÃ¡rio, telefone, endereÃ§o, entre outros.
  - Utiliza fÃ³rmulas para separar o nome completo em primeiro nome e sobrenome.
  - Reutiliza informaÃ§Ãµes de registros relacionados, como Conta, EndereÃ§o, Email, etc.
  - Define o campo `DWConverterAutomaticamenteDataFutura__c` com base em uma fÃ³rmula que verifica motivos de desqualificaÃ§Ã£o.

### 4. Atribuir Lead Ã  Lista
- Adiciona o Lead criado na coleÃ§Ã£o `LeadsParaCriar`.
- Essa coleÃ§Ã£o serÃ¡ usada posteriormente para criar os registros no Salesforce.

### 5. Criar Novos Leads
- ApÃ³s o loop, todos os Leads na coleÃ§Ã£o `LeadsParaCriar` sÃ£o criados no Salesforce de uma sÃ³ vez.

## VariÃ¡veis
- `LeadParaCriar` (SObject): VariÃ¡vel temporÃ¡ria para armazenar os dados de um Lead antes de sua criaÃ§Ã£o.
- `LeadsParaCriar` (ColeÃ§Ã£o de SObject): ColeÃ§Ã£o que acumula todos os Leads a serem criados durante a execuÃ§Ã£o do Flow.
- `ObterOportunidadesParaCriacao` (ColeÃ§Ã£o de Opportunity): ColeÃ§Ã£o de oportunidades filtradas para processamento.

## FÃ³rmulas Utilizadas
- `converterAut`: Avalia se o motivo de desqualificaÃ§Ã£o Ã© "Interesse Futuro" e o submotivo Ã© "OpÃ§Ã£o de Preenchimento de Data", retornando `true` ou `false`.
- `primeiroNome`: Extrai o primeiro nome do campo `Account.Name`, assumindo que o nome completo estÃ¡ separado por espaÃ§o.
- `sobrenome`: Extrai o sobrenome do campo `Account.Name`, apÃ³s o espaÃ§o.

## ConsideraÃ§Ãµes
- Este Flow Ã© agendado para rodar diariamente Ã s 15:35 UTC, iniciando em 29/04/2025.
- O fluxo Ã© ativado automaticamente e nÃ£o requer intervenÃ§Ã£o manual.
- Ã‰ importante que os campos utilizados nas fÃ³rmulas e filtros estejam corretamente configurados nos registros relacionados.
- O fluxo reutiliza informaÃ§Ãµes de registros relacionados, como Conta (`Account`) e EndereÃ§o, para preencher os dados do Lead.

## Resumo
Este fluxo automatiza a criaÃ§Ã£o de leads futuros com base em oportunidades marcadas para uma data especÃ­fica, facilitando o acompanhamento e o gerenciamento de potenciais clientes que demonstraram interesse para um momento futuro.

# Flow: DWOpportunityAfterUpdateRetiraInsereFlagReservadoAtivo

## DescriÃ§Ã£o
O Flow `DWOpportunityAfterUpdateRetiraInsereFlagReservadoAtivo` Ã© um fluxo autolanÃ§ado que Ã© acionado automaticamente apÃ³s a atualizaÃ§Ã£o de uma oportunidade no Salesforce. Sua principal funÃ§Ã£o Ã© gerenciar a flag de reserva (`DWReserva__c`) em registros de ativos (`Asset`) relacionados Ã  oportunidade, com base na alteraÃ§Ã£o do campo `Estoque__c`. 

Ele realiza as seguintes aÃ§Ãµes:
- Remove a reserva de um ativo anterior quando o campo `Estoque__c` Ã© limpo ou alterado.
- Marca um novo ativo como reservado quando um ativo Ã© adicionado Ã  oportunidade.
- Troca a reserva entre ativos quando o ativo relacionado Ã© alterado.

Se ocorrer algum erro durante o processo, uma mensagem de erro Ã© publicada no Chatter da oportunidade para facilitar o acompanhamento.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

## Objetivo
Gerenciar a flag de reserva (`DWReserva__c`) nos ativos relacionados Ã  oportunidade, garantindo que a reserva seja atualizada corretamente conforme as mudanÃ§as no campo `Estoque__c`.

## Etapas Principais

### 1. Disparo do Flow
- O Flow Ã© iniciado apÃ³s a atualizaÃ§Ã£o de uma oportunidade, especificamente quando o campo `Estoque__c` Ã© alterado.
- A condiÃ§Ã£o de disparo verifica se `Estoque__c` foi modificado (`IsChanged`).

### 2. ObtenÃ§Ã£o do ativo anterior
- Consulta o ativo relacionado ao valor anterior de `Estoque__c` (`$Record__Prior.Estoque__c`).
- Caso encontrado, armazena na variÃ¡vel `ativoS`.
- Se nÃ£o encontrar, direciona para uma rotina de erro.

### 3. DecisÃ£o: Deve adicionar ou remover reserva
- Verifica trÃªs condiÃ§Ãµes usando um elemento de decisÃ£o:
  - **Remover reserva:** Se o campo `Estoque__c` foi limpo (`IsNull` true).
  - **Adicionar reserva:** Se o novo valor de `Estoque__c` nÃ£o Ã© nulo e o anterior era nulo.
  - **Troca de reserva:** Se o `Estoque__c` foi alterado (`IsChanged` true) e o valor anterior Ã© diferente do atual.

### 4. AÃ§Ãµes Condicionais
- **Remover reserva:** 
  - Atualiza o ativo anterior (`ativoS`) definindo `DWReserva__c` como `false`.
- **Adicionar reserva:** 
  - Marca o ativo novo (`$Record.Estoque__c`) como reservado (`DWReserva__c` = `true`).
- **Troca de reserva:** 
  - Marca o ativo novo como reservado.
  - Remove a reserva do ativo anterior.

### 5. AtualizaÃ§Ãµes de registros
- As aÃ§Ãµes de atualizaÃ§Ã£o sÃ£o feitas atravÃ©s de elementos `RecordUpdate`:
  - `Adiciona_flag`: Marca o ativo atual como reservado.
  - `atualiza_estoque`: Atualiza o ativo obtido na consulta.
  - `reservar_o_atual`: Marca o ativo atual como reservado.
  - `retira_reserva_anterior`: Remove a reserva do ativo anterior.

### 6. Tratamento de erros
- Caso ocorra alguma falha, uma postagem de erro Ã© enviada ao Chatter da oportunidade, informando o problema ocorrido.

## VariÃ¡veis
- `$Record`: Registro da oportunidade que disparou o Flow.
- `$Record__Prior`: Valores do registro da oportunidade antes da atualizaÃ§Ã£o.
- `ativoS`: Registro do ativo relacionado ao valor anterior de `Estoque__c`.
- Outras variÃ¡veis internas para controle de fluxo e atualizaÃ§Ãµes.

## Resumo do fluxo
Este Flow automatiza a gestÃ£o da reserva de ativos relacionados Ã s oportunidades, garantindo que a flag de reserva seja corretamente atribuÃ­da ou removida conforme as mudanÃ§as no campo `Estoque__c`. AlÃ©m disso, fornece um mecanismo de registro de erros para facilitar o monitoramento e resoluÃ§Ã£o de problemas.

---

Se precisar de detalhes adicionais ou de uma explicaÃ§Ã£o sobre alguma parte especÃ­fica do XML, estou Ã  disposiÃ§Ã£o!

# Flow: DWContaValidarAlteracaoTipoRegistroLoja

## DescriÃ§Ã£o
O Flow `DWContaValidarAlteracaoTipoRegistroLoja` Ã© uma automaÃ§Ã£o do Salesforce que valida alteraÃ§Ãµes especÃ­ficas em registros do objeto `Account` do tipo Loja. Seu objetivo principal Ã© garantir que apenas determinadas alteraÃ§Ãµes nos campos permitidos sejam efetuadas, exibindo uma mensagem de erro caso alguma alteraÃ§Ã£o nÃ£o autorizada seja detectada.

## Tipo
- AutoLanÃ§ado (AutoLaunched Flow) acionado apÃ³s a atualizaÃ§Ã£o de registros (`RecordAfterSave`).

## Objetivo
- Validar se as alteraÃ§Ãµes feitas em contas do tipo Loja estÃ£o dentro do permitido, especificamente nas Ã¡reas de anÃ¡lise do gerente e central de leads.
- Impedir alteraÃ§Ãµes nÃ£o autorizadas em campos sensÃ­veis, exibindo uma mensagem de erro personalizada.

## Etapas Principais
1. **InÃ­cio (Start)**
   - O Flow Ã© acionado apÃ³s a atualizaÃ§Ã£o de registros do objeto `Account`.
   - A execuÃ§Ã£o ocorre apenas para perfis diferentes de "Administrador do sistema" e "Salesforce API Only System Integrations".
   - Conecta-se ao elemento `Validar_qual_campo_foi_alterado`.

2. **DecisÃ£o: Validar qual campo foi alterado (`Validar_qual_campo_foi_alterado`)**
   - Verifica se o registro Ã© do tipo `DWLoja` (atravÃ©s do campo `RecordType.DeveloperName`).
   - Avalia se houve alteraÃ§Ã£o nos seguintes campos:
     - `DWRazaoSocial__c`
     - `DWDocumentoLoja__c`
     - `DWCodigoLoja__c`
     - `DWInscricaoEstadual__c`
     - `DWTipoEstoque__c`
     - `ParentId`
     - `DWMarcaAtendimento__c`
     - `DWStatusLoja__c`
     - `DWFundacao__c`
     - `Phone`
     - `Website`
     - `BillingAddress`
     - `ShippingAddress`
     - `Sic`
   - AlÃ©m disso, verifica se houve alteraÃ§Ã£o nos campos `AnaliseGerente__c` ou `DWPossuiCentralLeads__c` usando uma fÃ³rmula (`isAlteracaoValida`) que combina as verificaÃ§Ãµes de mudanÃ§a nesses campos.

3. **DecisÃ£o: NaoPermitirAtualizacao**
   - Caso o registro seja do tipo `DWLoja` e alguma das condiÃ§Ãµes de alteraÃ§Ã£o nÃ£o autorizada seja verdadeira, alÃ©m do perfil do usuÃ¡rio nÃ£o ser de sistema, o Flow direciona para exibir uma mensagem de erro.
   - As condiÃ§Ãµes especÃ­ficas incluem alteraÃ§Ãµes em campos que nÃ£o podem ser modificados, como `RazaoSocial`, `DocumentoLoja`, `CodigoLoja`, entre outros, alÃ©m de verificar o perfil do usuÃ¡rio.

4. **Mensagem de Erro (`MensagemErro`)**
   - Caso as condiÃ§Ãµes acima sejam atendidas, uma mensagem personalizada Ã© exibida ao usuÃ¡rio:
     > "Apenas os campos 'AnÃ¡lise do gerente' e 'Possui central de leads?' podem ser alterados nas contas de Loja."

## VariÃ¡veis
- **isAlteracaoValida** (FÃ³rmula, Boolean): 
  - ExpressÃ£o: `ISCHANGED({!$Record.AnaliseGerente__c}) || ISCHANGED({!$Record.DWPossuiCentralLeads__c})`
  - Verifica se houve alteraÃ§Ã£o nos campos de anÃ¡lise do gerente ou central de leads.

## ConsideraÃ§Ãµes
- O Flow Ã© acionado apÃ³s a atualizaÃ§Ã£o do registro (`RecordAfterSave`), garantindo que as validaÃ§Ãµes ocorram apÃ³s as modificaÃ§Ãµes.
- A validaÃ§Ã£o Ã© condicional ao perfil do usuÃ¡rio, permitindo alteraÃ§Ãµes apenas para perfis autorizados.
- A mensagem de erro personalizada ajuda na comunicaÃ§Ã£o clara ao usuÃ¡rio sobre o que pode ou nÃ£o ser alterado.
- Este Flow Ã© Ãºtil para manter a integridade dos dados sensÃ­veis em contas do tipo Loja, garantindo conformidade com as regras de negÃ³cio.

---

Se precisar de mais detalhes ou de uma anÃ¡lise de componentes especÃ­ficos, estou Ã  disposiÃ§Ã£o!

Flow: GBOportunidadeFluxoTelaEncerrarOportunidade

DescriÃ§Ã£o
O Flow `GBOportunidadeFluxoTelaEncerrarOportunidade` Ã© uma automaÃ§Ã£o de tela que gerencia o encerramento de oportunidades, incluindo notificaÃ§Ãµes, validaÃ§Ãµes de perfil e gerenciamento de motivos de desqualificaÃ§Ã£o. Ele orienta o usuÃ¡rio atravÃ©s de etapas de decisÃ£o, exibiÃ§Ã£o de telas e atualizaÃ§Ãµes de registros, garantindo que o encerramento seja realizado de acordo com as permissÃµes e condiÃ§Ãµes especÃ­ficas.

Tipo
- Screen Flow (com interface de usuÃ¡rio)

Objetivo
- Encerrar uma oportunidade, notificando o gerente responsÃ¡vel, atualizando o status da oportunidade, e registrando motivos de desqualificaÃ§Ã£o quando aplicÃ¡vel.
- Validar permissÃµes do usuÃ¡rio e determinar o fluxo de aÃ§Ãµes com base no perfil e configuraÃ§Ãµes da oportunidade.

Etapas Principais
1. Obter detalhes da oportunidade (`obter_opp`) usando o `recordId` passado como parÃ¢metro.
2. Verificar se o proprietÃ¡rio da oportunidade possui gerente (`Propietario_nao_tem_gerente`).
3. Obter o tipo de notificaÃ§Ã£o padrÃ£o (`Obter_notificacao`) para enviar notificaÃ§Ãµes ao gerente.
4. Decidir se o gerente precisa aprovar a oportunidade (`GerentePrecisaAprovar`) com base na anÃ¡lise do gerente.
5. Verificar quem estÃ¡ encerrando a oportunidade (`quem_encerrando`) com base no perfil do usuÃ¡rio.
6. Caso o perfil seja gerente ou closer, encaminhar para a tela de motivos de desqualificaÃ§Ã£o (`MotivoDesqualificacao`).
7. Se o proprietÃ¡rio nÃ£o tiver gerente, exibir mensagem de erro (`Propietario_nao_tem_gerente`).
8. Se o usuÃ¡rio tiver gerente, enviar notificaÃ§Ã£o ao gerente (`NotificarGerente`).
9. Atualizar o campo de anÃ¡lise de gerente na oportunidade (`atualizaCampoAnalise`).
10. Encerrar a oportunidade, atualizar status e motivos, e exibir toast de sucesso (`Oportunidade_encerrada`).

VariÃ¡veis
- `recordId` (String, Input) â€“ ID da oportunidade a ser encerrada.
- `collGerente` (String, ColeÃ§Ã£o) â€“ ColeÃ§Ã£o de IDs de gerentes, atribuÃ­da dinamicamente.
- `obter_opp` (Opportunity) â€“ Objeto Opportunity obtido na consulta inicial.
- `Obter_notificacao` (CustomNotificationType) â€“ Tipo de notificaÃ§Ã£o padrÃ£o.
- `MensagemNot` (String) â€“ Mensagem de notificaÃ§Ã£o gerada por fÃ³rmula.
- `VerificaOwnerId` (Boolean) â€“ Verifica se o usuÃ¡rio Ã© o proprietÃ¡rio da oportunidade.

DecisÃµes
- `GerentePrecisaAprovar` â€“ Verifica se o gerente precisa aprovar, baseado na anÃ¡lise do gerente (`AnaliseGerente__c`).
- `quem_encerrando` â€“ Determina quem estÃ¡ encerrando a oportunidade, com base no perfil do usuÃ¡rio.
- `UsuarioGerente` â€“ Verifica se o usuÃ¡rio possui gerente, para decidir se envia notificaÃ§Ã£o.

AÃ§Ãµes
- ObtenÃ§Ã£o de registros (`Get Records`) para oportunidade e notificaÃ§Ãµes.
- DecisÃµes condicionais para fluxo de aprovaÃ§Ã£o e perfil.
- AtualizaÃ§Ãµes de registros (`Update Records`) para marcar a oportunidade como analisada e encerrada.
- Envio de notificaÃ§Ãµes personalizadas ao gerente.
- ExibiÃ§Ã£o de telas (`Screen`) para confirmaÃ§Ã£o, motivos de desqualificaÃ§Ã£o, e mensagens de erro.
- ExibiÃ§Ã£o de toast (`showToast`) para sucesso na operaÃ§Ã£o.

ConsideraÃ§Ãµes
- O fluxo Ã© iniciado passando o `recordId` da oportunidade.
- As decisÃµes garantem que apenas usuÃ¡rios com perfil adequado possam encerrar oportunidades.
- Motivos de desqualificaÃ§Ã£o sÃ£o obrigatÃ³rios quando aplicÃ¡vel, com dependÃªncia de listas dinÃ¢micas.
- NotificaÃ§Ãµes sÃ£o enviadas ao gerente responsÃ¡vel, se configurado.
- O fluxo garante feedback visual ao usuÃ¡rio com mensagens e toast de sucesso ou erro.
- O fluxo deve ser utilizado em pÃ¡ginas Lightning ou componentes que suportem flows de tela.

Este fluxo fornece uma abordagem estruturada para o encerramento de oportunidades, integrando validaÃ§Ãµes, notificaÃ§Ãµes e atualizaÃ§Ãµes de registros de forma automatizada e controlada.

# Flow: DW_Product2_FlowAfter_CriarEntradaPreco

## DescriÃ§Ã£o
O Flow `DW_Product2_FlowAfter_CriarEntradaPreco` Ã© um fluxo automatizado do Salesforce que Ã© acionado apÃ³s a criaÃ§Ã£o ou atualizaÃ§Ã£o de um registro do objeto `Product2`. Sua principal funÃ§Ã£o Ã© verificar se hÃ¡ uma entrada de preÃ§o existente para o produto e, se nÃ£o houver, criar uma nova entrada de preÃ§o com um valor calculado baseado na famÃ­lia do produto.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

## Objetivo
- Monitorar alteraÃ§Ãµes nos registros do objeto `Product2`.
- Verificar se jÃ¡ existe uma entrada de preÃ§o associada ao produto.
- Caso nÃ£o exista, criar uma nova entrada de preÃ§o com um valor padrÃ£o ou calculado.

## Etapas Principais

### 1. Disparo do Flow
- O Flow Ã© iniciado apÃ³s a criaÃ§Ã£o ou atualizaÃ§Ã£o de registros do objeto `Product2`.
- A condiÃ§Ã£o de disparo inclui:
  - Se o registro Ã© novo ou houve alteraÃ§Ã£o no campo `DWValorProduto__c`.
  - Se o campo `Family` Ã© igual a `'VeÃ­culo'` ou `'ServiÃ§o adicional'`.
  - Se o campo `DWValorProduto__c` nÃ£o estÃ¡ vazio e Ã© maior ou igual a zero.

### 2. Obter o catÃ¡logo padrÃ£o (`Pricebook2`)
- Consulta o registro padrÃ£o de catÃ¡logo de preÃ§os (`Pricebook2`) onde `IsStandard` Ã© verdadeiro.
- Ordena por `Name` em ordem ascendente.
- Armazena o primeiro registro encontrado na variÃ¡vel `catalogoPadrao`.

### 3. Obter entrada de preÃ§o existente (`PricebookEntry`)
- Consulta a entrada de preÃ§o (`PricebookEntry`) onde:
  - `Product2Id` Ã© igual ao ID do produto atual.
  - `Pricebook2Id` Ã© igual ao ID do catÃ¡logo padrÃ£o obtido na etapa anterior.
- Armazena o resultado na variÃ¡vel `entradaTabelaPrecos`.
- Se nÃ£o encontrar uma entrada, o fluxo segue para criar uma nova.

### 4. DecisÃ£o: Encontrou entrada?
- Verifica se `entradaTabelaPrecos` Ã© nula.
- Se **nÃ£o** for nula (entrada existente), o fluxo termina ou segue para atualizaÃ§Ã£o (nÃ£o detalhado aqui).
- Se for nula (nÃ£o encontrou entrada), o fluxo direciona para criar uma nova entrada de preÃ§o.

### 5. Atribuir novo preÃ§o
- Calcula o valor do novo preÃ§o usando a fÃ³rmula:
  ```plaintext
  IF(TEXT({!$Record.Family}) = 'ServiÃ§o adicional', 0, {!$Record.DWValorProduto__c})
  ```
- Atribui esse valor ao campo `UnitPrice` da nova entrada de preÃ§o.

### 6. Criar nova entrada de preÃ§o (`PricebookEntry`)
- Cria uma nova entrada de preÃ§o com os seguintes valores:
  - `IsActive`: `true`
  - `Pricebook2Id`: ID do catÃ¡logo padrÃ£o
  - `Product2Id`: ID do produto atual
  - `UnitPrice`: valor calculado na etapa anterior
- A criaÃ§Ã£o Ã© automÃ¡tica e o resultado Ã© armazenado para uso futuro.

## VariÃ¡veis
- **Entrada de variÃ¡veis de entrada:**
  - `Product2Id` (nÃ£o explicitamente listado, mas Ã© o gatilho do fluxo)
- **VariÃ¡veis internas:**
  - `catalogoPadrao` (Objeto `Pricebook2`) â€“ Armazena o catÃ¡logo padrÃ£o.
  - `entradaTabelaPrecos` (Objeto `PricebookEntry`) â€“ Armazena a entrada de preÃ§o existente.
  - `prodFamiliaForm` (Formula) â€“ Calcula o valor do preÃ§o com base na famÃ­lia do produto.

## ConsideraÃ§Ãµes
- O fluxo Ã© acionado somente para registros novos ou alterados que atendem Ã s condiÃ§Ãµes especÃ­ficas.
- Garante que cada produto tenha uma entrada de preÃ§o associada ao catÃ¡logo padrÃ£o.
- A fÃ³rmula de atribuiÃ§Ã£o do preÃ§o considera casos especiais, como produtos da famÃ­lia `'ServiÃ§o adicional'`.
- O fluxo Ã© configurado para execuÃ§Ã£o automÃ¡tica, sem necessidade de intervenÃ§Ã£o do usuÃ¡rio.

---

Este fluxo automatiza a gestÃ£o de preÃ§os de produtos, garantindo consistÃªncia e evitando entradas duplicadas ou ausentes na tabela de preÃ§os.

Flow: DW_ScreenFlow_CriarFila

DescriÃ§Ã£o
O Flow `DW_ScreenFlow_CriarFila` Ã© responsÃ¡vel por criar uma nova fila (queue) no Salesforce, associando-a a uma loja especÃ­fica e gerenciando os membros do gerente responsÃ¡vel. Ele tambÃ©m realiza verificaÃ§Ãµes e exibe telas de interface para o usuÃ¡rio, garantindo uma experiÃªncia guiada na criaÃ§Ã£o da fila.

Tipo
- Screen Flow (com interface de usuÃ¡rio)

Objetivo
- Obter informaÃ§Ãµes da loja e do tipo de registro.
- Verificar se deve criar automaticamente uma fila.
- Buscar membros gerentes relacionados Ã  loja.
- Criar uma nova fila (queue) com base nas informaÃ§Ãµes fornecidas.
- Exibir mensagens de erro ou confirmaÃ§Ã£o ao usuÃ¡rio.

Etapas Principais
1. Obter o tipo de registro de loja (`RecordType`) com DeveloperName `DWLoja`.
2. Obter membros do gerente atual atravÃ©s de `AccountTeamMember`.
3. Decidir se a fila deve ser criada automaticamente, com base na variÃ¡vel `criarAutomaticamente`.
4. Se criar automaticamente, navegar para a tela de criaÃ§Ã£o de nova fila.
5. Na tela de criaÃ§Ã£o, o usuÃ¡rio seleciona a loja e o objeto (Opportunity ou Lead).
6. Loop pelos membros gerentes obtidos, atribuindo seus IDs Ã  coleÃ§Ã£o `lojaIds`.
7. Criar uma nova fila (queue) no Salesforce com os nomes gerados dinamicamente.
8. Caso ocorra erro, exibir a tela de falha com a mensagem de erro.

VariÃ¡veis
- criarAutomaticamente (Boolean, Input) â€“ Indica se a fila deve ser criada automaticamente.
- lojaIds (String Collection) â€“ ColeÃ§Ã£o de IDs de lojas gerenciadas pelo gerente.
- lojaInput (String, Input) â€“ ID da loja selecionada pelo usuÃ¡rio.
- objetoInput (String, Input) â€“ Tipo de objeto selecionado (Opportunity ou Lead).
- novaFilaId (String, Output) â€“ ID da fila criada.

Componentes e Elementos
- Decisions:
  - `CriarAutomaticamente` â€“ Verifica se a variÃ¡vel `criarAutomaticamente` Ã© verdadeira para decidir se cria a fila automaticamente.
  - `EncontrouMembros` â€“ Verifica se hÃ¡ membros gerentes associados Ã  loja.
- Record Lookups:
  - `tipoRegistroLojaRecord` â€“ ObtÃ©m o RecordType de loja com DeveloperName `DWLoja`.
  - `membrosGerente` â€“ Busca membros do gerente atual na equipe da conta.
- Loop:
  - `itemMembroGerente` â€“ Itera sobre os membros gerentes, adicionando seus AccountId Ã  coleÃ§Ã£o `lojaIds`.
- Record Create:
  - `CriarNovaFila` â€“ Cria uma nova fila (Queue) com DeveloperName e Name gerados dinamicamente.
- Screens:
  - `CriarNovaFilaLojaTela` â€“ Tela onde o usuÃ¡rio seleciona a loja e o objeto.
  - `FalhaOperacaoTela` â€“ Tela exibida em caso de erro na operaÃ§Ã£o.
  - `MensagemNenhumaLojaTela` â€“ Tela exibida se nenhuma loja for encontrada para gerenciamento.

Fluxo de ExecuÃ§Ã£o
- Inicia no elemento `Start`, que direciona para a obtenÃ§Ã£o do tipo de registro de loja.
- Busca os membros do gerente atual.
- Verifica se deve criar automaticamente a fila.
- Se sim, exibe a tela de criaÃ§Ã£o, onde o usuÃ¡rio escolhe loja e objeto.
- Loop pelos membros do gerente, acumulando seus IDs.
- Cria a fila com os nomes gerados.
- Caso ocorra erro, exibe a tela de falha com a mensagem de erro.

ConsideraÃ§Ãµes
- O fluxo depende de variÃ¡veis de entrada para determinar se a fila serÃ¡ criada automaticamente.
- A criaÃ§Ã£o da fila usa nomes dinÃ¢micos baseados na loja e no objeto selecionado.
- Ã‰ importante que os objetos `Account`, `Group`, `RecordType`, e `AccountTeamMember` estejam corretamente configurados no Salesforce.
- O fluxo possui telas de interface amigÃ¡veis para o usuÃ¡rio, facilitando a seleÃ§Ã£o de loja e objeto.

Este fluxo Ã© uma soluÃ§Ã£o automatizada para gerenciamento de filas, integrando dados de lojas e membros gerentes, garantindo uma operaÃ§Ã£o eficiente e controlada.

Flow: LeadScreenFlowUpdateConverterLead

DescriÃ§Ã£o
O Flow `LeadScreenFlowUpdateConverterLead` automatiza o processo de conversÃ£o de um Lead, incluindo a definiÃ§Ã£o de proprietÃ¡rio e loja, alÃ©m de gerenciar mensagens de erro e navegaÃ§Ã£o apÃ³s a conversÃ£o. Ele tambÃ©m realiza validaÃ§Ãµes para garantir que apenas um campo (ProprietÃ¡rio ou Loja) seja preenchido, e controla permissÃµes de ediÃ§Ã£o com base no perfil do usuÃ¡rio.

Tipo
- Autolaunched Flow (sem interface de usuÃ¡rio direta, embora contenha telas para mensagens e validaÃ§Ãµes)

Objetivo
- Converter Leads, atribuindo proprietÃ¡rio e loja conforme entrada do usuÃ¡rio.
- Validar se apenas um dos campos ProprietÃ¡rio ou Loja foi preenchido.
- Gerenciar permissÃµes de ediÃ§Ã£o com base no perfil do usuÃ¡rio.
- Exibir mensagens de sucesso ou erro e navegar para registros relacionados apÃ³s a conversÃ£o.

Etapas Principais
1. Buscar registros de Perfil e UsuÃ¡rios para validaÃ§Ãµes de permissÃµes.
2. Buscar o Lead pelo ID fornecido.
3. Obter o tipo de registro da loja.
4. Validar se o usuÃ¡rio tem permissÃ£o para converter.
5. Decidir se os campos ProprietÃ¡rio e Loja foram preenchidos.
6. Atribuir valores aos campos de Lead (ProprietÃ¡rio e Loja).
7. Executar a conversÃ£o do Lead via aÃ§Ã£o Apex `DWLeadConversionHandler`.
8. Verificar se houve erro na conversÃ£o.
9. Exibir mensagens de sucesso ou erro.
10. Navegar para o registro de Oportunidade ou exibir tela de erro.

VariÃ¡veis
- `recordId` (String, Input) â€“ ID do Lead a ser convertido.
- `LeadToUpdate` (SObject) â€“ Lead carregado para atualizaÃ§Ã£o.
- `RetornoFluxoAtribuicao` (SObject) â€“ Lead atualizado apÃ³s atribuiÃ§Ãµes.
- VariÃ¡veis de suporte para listas de IDs, perfis, usuÃ¡rios, e flags de erro.

DecisÃµes
- `CamposPreenchidos` â€“ Verifica se ProprietÃ¡rio e Loja foram preenchidos corretamente.
- `Foi_convertido` e `Foi_convertido2` â€“ Decidem se a conversÃ£o foi bem-sucedida.
- `LojaProprietarioInformado` â€“ Verifica se pelo menos um dos campos foi preenchido.
- `Pode_converter` â€“ Avalia se o usuÃ¡rio tem permissÃ£o para converter.
- `ProprietarioDefinido` e `LojaDefinida` â€“ Validam se os campos de proprietÃ¡rio e loja estÃ£o preenchidos.

AÃ§Ãµes
- `AtribuirCampoLoja` e `AtribuirCampoProprietario` â€“ Atribuem valores aos campos do Lead.
- `UpdateLeadLoja` e `UpdateLeadProprietario` â€“ Atualizam o Lead com os valores atribuÃ­dos.
- `ConversaoPadrao` â€“ Executa a conversÃ£o do Lead via Apex `DWLeadConversionHandler`.
- `ConverterLeadProprietarioDefinido` e `ConverterLeadSemProprietario` â€“ Chamadas Apex para conversÃ£o com proprietÃ¡rio definido ou nÃ£o.
- `showToast` â€“ Exibe mensagens de sucesso ou erro.
- `NavigationObject` â€“ Navega para o registro de oportunidade apÃ³s sucesso.
- Telas (`NaoPodeConverter`, `Tela_erro`, `TelaRetorno`) â€“ Exibem mensagens de erro ou validaÃ§Ãµes ao usuÃ¡rio.

ConsideraÃ§Ãµes
- O fluxo realiza validaÃ§Ãµes de permissÃµes e campos antes de tentar converter o Lead.
- As aÃ§Ãµes Apex `DWLeadConversionHandler` sÃ£o responsÃ¡veis pela conversÃ£o propriamente dita, passando os IDs de Lead.
- Mensagens de erro sÃ£o exibidas via componentes `showToast` e telas especÃ­ficas.
- A navegaÃ§Ã£o para o registro de oportunidade ocorre apÃ³s uma conversÃ£o bem-sucedida.
- O fluxo Ã© configurado para rodar em modo `SystemModeWithSharing`, garantindo respeito Ã s regras de compartilhamento.

Este fluxo Ã© uma implementaÃ§Ã£o robusta para automatizar a conversÃ£o de Leads, garantindo validaÃ§Ãµes, controle de permissÃµes e uma experiÃªncia de usuÃ¡rio consistente.

# Flow: DW_Lead_flow_after_Publica_nova_liga_o

## DescriÃ§Ã£o
O Flow `DW_Lead_flow_after_Publica_nova_liga_o` Ã© um fluxo automatizado do tipo **AutoLaunched** que Ã© acionado apÃ³s a criaÃ§Ã£o de um registro do objeto Lead. Sua finalidade principal Ã© atualizar informaÃ§Ãµes relacionadas ao Lead, como o proprietÃ¡rio e a loja associada, alÃ©m de criar um registro de interaÃ§Ã£o via CTI (Central de Atendimento TelefÃ´nico).

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

## Objetivo
- Executar aÃ§Ãµes apÃ³s a criaÃ§Ã£o de um Lead, especificamente quando o campo `NextIpId__c` nÃ£o estÃ¡ nulo.
- Buscar informaÃ§Ãµes do usuÃ¡rio e da fila de atendimento.
- Atualizar o Lead com a loja e o proprietÃ¡rio corretos.
- Criar um registro de interaÃ§Ã£o de CTI com informaÃ§Ãµes do agente e do Lead.

## Etapas Principais

### 1. Trigger de InÃ­cio
- O Flow Ã© iniciado automaticamente apÃ³s a criaÃ§Ã£o de um Lead (`RecordAfterSave`).
- CondiÃ§Ã£o de disparo: o campo `NextIpId__c` do Lead nÃ£o deve ser nulo (`IsNull` = false).

### 2. Busca do UsuÃ¡rio (`Busca_usuario`)
- Realiza uma consulta no objeto `User` para encontrar um usuÃ¡rio cujo campo `DWAgente__c` seja igual ao valor de `$Record.DWAgenteCTI__c`.
- A consulta busca o primeiro registro que corresponda aos critÃ©rios.
- Se encontrado, o resultado Ã© armazenado para uso posterior.

### 3. ObtenÃ§Ã£o da Fila (`Obtem_fila`)
- Consulta o objeto `Group` para obter a fila de atendimento cujo `DeveloperName` seja igual a `DWSDRMoveBariguiLojaUm`.
- O primeiro registro correspondente Ã© retornado.
- O resultado serÃ¡ utilizado para definir o proprietÃ¡rio do Lead na prÃ³xima etapa.

### 4. ObtenÃ§Ã£o da Loja (`Obtem_loja`)
- Consulta o objeto `Account` para obter a loja cujo campo `DWCodigoLoja__c` seja igual ao valor de `CodigoLoja__c` do usuÃ¡rio encontrado na etapa anterior.
- O primeiro registro correspondente Ã© retornado.
- Este dado serÃ¡ usado para atualizar o Lead.

### 5. AtualizaÃ§Ã£o do Lead (`Atualiza_lead`)
- Atualiza o Lead com:
  - `DWLoja__c` definido como o ID da loja obtida.
  - `OwnerId` definido como o ID do usuÃ¡rio encontrado na etapa de busca.
- Essa atualizaÃ§Ã£o garante que o Lead esteja associado Ã  loja correta e ao proprietÃ¡rio adequado.

### 6. CriaÃ§Ã£o do Registro de CTI (`Publica_CTI`)
- Cria um novo registro no objeto `PushCTI__e`.
- Campos preenchidos:
  - `Agente__c` com o valor de `$Record.DWAgenteCTI__c`.
  - `LeadId__c` com o ID do Lead criado.
- Essa aÃ§Ã£o registra uma interaÃ§Ã£o de CTI, associando o agente ao Lead.

### 7. AtualizaÃ§Ã£o do Lead com a fila (`Atualiza_lead2`)
- Atualiza o Lead para definir o `OwnerId` como o ID da fila obtida na etapa `Obtem_fila`.
- Essa mudanÃ§a garante que o Lead seja atribuÃ­do Ã  fila de atendimento correta.

## VariÃ¡veis
- `$Record` (Lead): registro que acionou o Flow.
- `DWAgenteCTI__c` (Campo no Lead): identificador do agente de CTI.
- `CodigoLoja__c` (Campo no Lead): cÃ³digo da loja associada ao Lead.
- `NextIpId__c` (Campo no Lead): campo que determina se o Flow deve ser acionado.

## ConsideraÃ§Ãµes
- O Flow Ã© acionado somente apÃ³s a criaÃ§Ã£o de um Lead, quando `NextIpId__c` nÃ£o estÃ¡ nulo.
- As consultas garantem que os registros utilizados estejam presentes antes de realizar atualizaÃ§Ãµes.
- A criaÃ§Ã£o do registro de CTI Ã© automÃ¡tica, facilitando o acompanhamento de interaÃ§Ãµes telefÃ´nicas.
- Recomenda-se verificar permissÃµes de acesso aos objetos e campos utilizados para garantir o funcionamento adequado.

---

Este documento fornece uma visÃ£o detalhada do fluxo, suas etapas, variÃ¡veis e lÃ³gica de funcionamento, facilitando sua compreensÃ£o e manutenÃ§Ã£o por equipes tÃ©cnicas.

# Flow: DW_EventFlow_After_ManipularDisponibilidadeUsuario

## DescriÃ§Ã£o
O Flow `DW_EventFlow_After_ManipularDisponibilidadeUsuario` Ã© um fluxo automatizado que Ã© acionado apÃ³s a criaÃ§Ã£o ou atualizaÃ§Ã£o de registros do objeto `Event`. Sua principal funÃ§Ã£o Ã© verificar se hÃ¡ outros eventos do mesmo proprietÃ¡rio no perÃ­odo atual e, com base nisso, atualizar a disponibilidade do usuÃ¡rio (`Indisponivel__c`) para `true` ou `false`.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

## Objetivo
- Monitorar eventos relacionados ao usuÃ¡rio e ajustar seu status de disponibilidade (`Indisponivel__c`) com base na existÃªncia de outros eventos no perÃ­odo atual.

## Etapas Principais

### 1. Disparador Inicial
- **Quando**: CriaÃ§Ã£o ou atualizaÃ§Ã£o de um registro `Event`.
- **Filtro**: AÃ§Ã£o sÃ³ ocorre se o `OwnerId` do evento comeÃ§ar com `'005'` (indicando um usuÃ¡rio) e se o evento for novo ou se as datas de inÃ­cio ou tÃ©rmino do evento forem alteradas.

### 2. Obter Outros Eventos (`ObterOutrosEventos`)
- **Tipo**: Get Records
- **Objeto**: `Event`
- **Filtro**:
  - Id diferente do evento atual (`Id != $Record.Id`)
  - `StartDateTime` menor ou igual Ã  data/hora atual (`$Flow.CurrentDateTime`)
  - `EndDateTime` maior ou igual Ã  data/hora atual (`$Flow.CurrentDateTime`)
  - `OwnerId` igual ao proprietÃ¡rio do evento atual
- **ConfiguraÃ§Ã£o**: Retorna apenas o primeiro registro encontrado (`getFirstRecordOnly=true`)
- **Resultado**: Armazena o evento encontrado na variÃ¡vel de saÃ­da padrÃ£o `ObterOutrosEventos`.

### 3. DecisÃ£o: Evento no PerÃ­odo Atual (`EventoPeriodoAtual`)
- **CondiÃ§Ã£o**: Verifica se o evento atual estÃ¡ no perÃ­odo definido pelas datas de inÃ­cio e tÃ©rmino (`StartDateTime` e `DWDataTerminoControle__c`)
- **LÃ³gica**:
  - `StartDateTime` menor ou igual Ã  data/hora atual
  - `DWDataTerminoControle__c` maior ou igual Ã  data/hora atual
- **Resultado**:
  - Se verdadeiro, direciona para marcar o usuÃ¡rio como indisponÃ­vel.
  - Se falso, direciona para verificar se hÃ¡ outros eventos.

### 4. DecisÃ£o: Encontrou Outros Eventos (`EncontrouOutrosEventos`)
- **CondiÃ§Ã£o**: Verifica se o resultado do passo `ObterOutrosEventos` nÃ£o Ã© nulo (`IsNull` Ã© `false`)
- **Resultado**:
  - Se verdadeiro (hÃ¡ outros eventos), direciona para marcar o usuÃ¡rio como indisponÃ­vel.
  - Se falso (nÃ£o hÃ¡ outros eventos), direciona para marcar o usuÃ¡rio como disponÃ­vel.

### 5. AÃ§Ãµes de AtualizaÃ§Ã£o de UsuÃ¡rio
- **Marcar usuÃ¡rio como indisponÃ­vel (`MarcarUsuarioIndisponivel`)**:
  - **Filtro**: `Id` igual ao `OwnerId` do evento.
  - **AÃ§Ã£o**: Define o campo `Indisponivel__c` como `true`.
- **Marcar usuÃ¡rio como disponÃ­vel (`MarcarUsuarioDisponivel`)**:
  - **Filtro**: `Id` igual ao `OwnerId` do evento.
  - **AÃ§Ã£o**: Define o campo `Indisponivel__c` como `false`.

## VariÃ¡veis
- **$Record**: Registro do evento que acionou o fluxo.
- **$Flow.CurrentDateTime**: Data e hora atual no fluxo.
- **ObterOutrosEventos**: VariÃ¡vel de coleÃ§Ã£o que armazena o evento encontrado (se houver).

## ConsideraÃ§Ãµes
- O fluxo Ã© acionado somente apÃ³s a criaÃ§Ã£o ou atualizaÃ§Ã£o de eventos, garantindo que a disponibilidade do usuÃ¡rio seja sempre refletida de forma precisa.
- A lÃ³gica garante que, se houver outros eventos no perÃ­odo atual, o usuÃ¡rio seja marcado como indisponÃ­vel, e, caso contrÃ¡rio, como disponÃ­vel.
- O fluxo utiliza condiÃ§Ãµes de decisÃ£o para otimizar o processamento, evitando atualizaÃ§Ãµes desnecessÃ¡rias.

---

Este fluxo Ã© uma implementaÃ§Ã£o eficiente para gerenciar a disponibilidade de usuÃ¡rios com base na sua agenda de eventos, garantindo que o status seja atualizado automaticamente conforme a programaÃ§Ã£o.

# Flow: DWOpportunityFlowAfterAtualizarAtivoOpp

## DescriÃ§Ã£o
O Flow `DWOpportunityFlowAfterAtualizarAtivoOpp` Ã© um fluxo autolanÃ§ado que Ã© acionado apÃ³s a atualizaÃ§Ã£o de registros de oportunidade. Sua principal funÃ§Ã£o Ã© gerenciar a atualizaÃ§Ã£o de ativos relacionados (Assets) vinculados Ã s oportunidades, alÃ©m de realizar decisÃµes condicionais para avanÃ§ar ou reverter fases do processo de vendas, e postar mensagens de erro em caso de falhas.

## Tipo
- AutoLanÃ§ado (Record-Triggered Flow - apÃ³s atualizaÃ§Ã£o de registros)

## Objetivo
- Atualizar o status de ativos relacionados Ã  oportunidade, marcando-os como "em proposta" ou removendo essa marca.
- Controlar a transiÃ§Ã£o de fases da oportunidade (`Minuta` e `Vendido`) e reservar ou liberar estoque conforme o estÃ¡gio.
- Registrar erros de execuÃ§Ã£o postando mensagens no chatter.

## Etapas Principais

### 1. Disparo do Flow
- O fluxo Ã© acionado apÃ³s a atualizaÃ§Ã£o de registros de oportunidade (`Opportunity`), com uma condiÃ§Ã£o de disparo que verifica mudanÃ§as especÃ­ficas nos campos `StageName` ou `Estoque__c`.
- A condiÃ§Ã£o de disparo Ã© definida por uma fÃ³rmula que avalia se houve mudanÃ§a em `StageName` ou `Estoque__c` e se o estÃ¡gio passou de `Minuta` para `Vendido`, ou se houve alteraÃ§Ã£o no estoque enquanto o estÃ¡gio Ã© `Minuta`.

### 2. DecisÃ£o: `Qual_a_operacao`
- O fluxo avalia trÃªs regras de decisÃ£o para determinar qual aÃ§Ã£o tomar, baseando-se nas mudanÃ§as de estÃ¡gio e estoque:
  
  - **"Avancou_de_fase_reservar_estoque"**: Se o estÃ¡gio anterior era `Vendido` e o atual Ã© `Minuta`, indica que a oportunidade avanÃ§ou de fase, e o estoque deve ser reservado.
  
  - **"Trocou_o_estoque"**: Se o valor do campo `Estoque__c` mudou, o fluxo realiza uma aÃ§Ã£o especÃ­fica para ajustar o estoque.
  
  - **"Voltou_de_fase"**: Se o estÃ¡gio anterior era `Minuta` e o atual Ã© `Vendido`, indica que a oportunidade voltou de fase, e o estoque deve ser liberado.

### 3. AtualizaÃ§Ãµes de Registros
- **AtualizaÃ§Ã£o de Asset (`Estoque_em_proposta`)**: Marca o ativo como "em proposta" (`Em_proposta__c = true`) e associa Ã  oportunidade.
- **Marca em proposta (`Marca_em_proposta`)**: Marca o ativo como "em proposta" e vincula Ã  oportunidade, com tratamento de erro em caso de falha.
- **Retira estoque do ativo (`Retira_estoque_do_em_proposta`)**: Marca o ativo como nÃ£o mais "em proposta" (`Em_proposta__c = false`), removendo a associaÃ§Ã£o.
- **Retira proposta do estoque anterior (`Retira_proposta_estoque_anterior`)**: Desmarca o estoque anterior como "em proposta" e vincula Ã  nova oportunidade, com tratamento de erro.

### 4. Tratamento de Erros
- Caso alguma operaÃ§Ã£o de atualizaÃ§Ã£o de ativos falhe, uma aÃ§Ã£o de postagem no chatter Ã© acionada, enviando uma mensagem de erro contendo a mensagem de falha (`$Flow.FaultMessage`) e o ID da oportunidade.

## VariÃ¡veis
- **$Record**: Registro de oportunidade que disparou o fluxo.
- **$Record__Prior**: Estado anterior da oportunidade, utilizado para verificar mudanÃ§as.
- **$Flow.FaultMessage**: Mensagem de erro gerada durante falhas nas aÃ§Ãµes de atualizaÃ§Ã£o.
- **$Record.Id**: ID da oportunidade atual, utilizado para relacionar ativos e mensagens.

## ConsideraÃ§Ãµes
- Este fluxo Ã© acionado automaticamente apÃ³s a atualizaÃ§Ã£o de oportunidades, com foco na gestÃ£o de ativos relacionados e controle de fases.
- As aÃ§Ãµes de atualizaÃ§Ã£o de ativos possuem links de falha que direcionam para uma aÃ§Ã£o de postagem de erro, garantindo rastreabilidade de problemas.
- Ã‰ importante que os campos `StageName` e `Estoque__c` estejam corretamente configurados para disparar as regras de decisÃ£o.

---

Este fluxo automatiza a gestÃ£o de ativos e o controle de fases de oportunidades, garantindo consistÃªncia nos processos de estoque e comunicaÃ§Ã£o de erros.

Flow: DWSubflowCriarTermoEntregaTerceiros

DescriÃ§Ã£o
O Flow `DWSubflowCriarTermoEntregaTerceiros` automatiza o processo de criaÃ§Ã£o, validaÃ§Ã£o e navegaÃ§Ã£o relacionada ao Termo de Entrega para Terceiros. Ele realiza buscas, validaÃ§Ãµes, criaÃ§Ã£o de registros e navega entre telas de acordo com as condiÃ§Ãµes do fluxo de negÃ³cio.

Tipo
- Subflow de Lightning Flow (integrado a outros flows)

Objetivo
- Gerenciar a criaÃ§Ã£o e validaÃ§Ã£o do Termo de Entrega para Terceiros, incluindo navegaÃ§Ã£o para telas especÃ­ficas de acordo com o resultado das validaÃ§Ãµes e condiÃ§Ãµes de existÃªncia do termo.

Etapas Principais
1. Busca registros de Conta do Terceiro e Conta Nova.
2. Valida se hÃ¡ dados preenchidos para Cliente, VeÃ­culo e Terceiro.
3. DecisÃ£o se deve criar uma nova conta ou usar uma existente.
4. Busca detalhes do Oportunidade, Conta, Termo de Entrega e tipos de registros.
5. Valida se jÃ¡ existe um termo de entrega para a oportunidade.
6. Cria ou atualiza registros de Termo de Entrega.
7. Navega entre telas de confirmaÃ§Ã£o, erro ou preview do termo.
8. Assina digitalmente o termo via componente DocuSign.

VariÃ¡veis
- DWContaNovaS (Objecto Account) â€“ VariÃ¡vel para armazenar nova conta criada.
- DWContaS (Objecto Account) â€“ VariÃ¡vel para armazenar conta existente ou buscada.
- DWIdContaSelecionado (String) â€“ ID da conta selecionada pelo usuÃ¡rio.
- DWNovoContatoS (Objecto Contact) â€“ VariÃ¡vel para novo contato criado.
- DWOportunidadeS (Objecto Opportunity) â€“ VariÃ¡vel de entrada com os dados da oportunidade.
- DWTermoS (Objecto Termo__c) â€“ VariÃ¡vel para o termo de entrega.
- DWValidaSeTermoExiste (Boolean) â€“ VariÃ¡vel de validaÃ§Ã£o se o termo jÃ¡ existe.

Principais Componentes e LÃ³gicas
- **actionCalls**: Navega para objetos de Conta, Termo, e outros componentes de navegaÃ§Ã£o.
- **assignments**: Atribuem valores Ã s variÃ¡veis, como vincular contas, contatos, e detalhes do termo.
- **decisions**: Decidem se cria uma nova conta, busca uma existente, ou se o termo jÃ¡ foi criado.
- **recordLookups**: Consultas registros de Conta, Termo, Tipo de Registro, etc.
- **recordCreates**: Cria novos registros de Conta, Termo, Contato.
- **screens**: Telas de fluxo para entrada de dados, confirmaÃ§Ã£o, visualizaÃ§Ã£o de erro, assinatura do termo.
- **subflows**: Chamada de fluxo secundÃ¡rio para criar nova conta.
- **Componentes personalizados**: Como o componente de assinatura DocuSign.

Fluxo de ExecuÃ§Ã£o
- Inicia buscando o tipo de registro da conta.
- Navega para tela de seleÃ§Ã£o de conta do terceiro, permitindo criar nova ou usar existente.
- Caso seja uma nova conta, chama subflow para criaÃ§Ã£o.
- Busca detalhes da conta e oportunidade relacionados.
- Valida se os dados do cliente, veÃ­culo e terceiro estÃ£o preenchidos.
- Caso os dados estejam completos, busca o termo de entrega existente.
- Se o termo nÃ£o existir, cria um novo termo.
- Caso o termo exista, atualiza o termo existente.
- Navega para telas de visualizaÃ§Ã£o, assinatura ou erro, dependendo do resultado.
- Finaliza com assinatura digital ou mensagem de erro.

ConsideraÃ§Ãµes
- Este Flow Ã© utilizado como subflow em processos maiores, recebendo a oportunidade como entrada.
- Ã‰ importante que os componentes de navegaÃ§Ã£o e criaÃ§Ã£o estejam configurados corretamente.
- As validaÃ§Ãµes de preenchimento de dados garantem que o termo sÃ³ seja criado quando todas as informaÃ§Ãµes necessÃ¡rias estiverem presentes.
- O componente de assinatura DocuSign Ã© utilizado para assinatura digital do termo.
- As mensagens de erro sÃ£o exibidas em telas especÃ­ficas para orientar o usuÃ¡rio na correÃ§Ã£o dos dados.

Este fluxo garante uma gestÃ£o automatizada e segura do processo de criaÃ§Ã£o e validaÃ§Ã£o do Termo de Entrega para Terceiros, integrando buscas, validaÃ§Ãµes, criaÃ§Ã£o de registros e assinatura digital.

Flow: DW_SubflowAtribuirProprietarioPeloPerfilQualificacao

DescriÃ§Ã£o
O Flow `DW_SubflowAtribuirProprietarioPeloPerfilQualificacao` Ã© responsÃ¡vel por determinar e atribuir o proprietÃ¡rio de um Lead ou Oportunidade com base no perfil de qualificaÃ§Ã£o associado ao registro. Este fluxo nÃ£o realiza a atualizaÃ§Ã£o direta do registro, apenas calcula e define o proprietÃ¡rio, que deve ser atualizado fora deste subflow.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Obter o perfil adequado do Lead ou Oportunidade
- Determinar o proprietÃ¡rio adequado com base no perfil
- Caso aplicÃ¡vel, buscar usuÃ¡rios sequenciais ou membros de fila
- Atribuir o proprietÃ¡rio ao Lead e Ã  Oportunidade

Etapas Principais
1. InÃ­cio
   - Determina se o registro Ã© Lead ou Oportunidade, atribuindo nomes e contextos.
2. Obter Perfil Adequado
   - Para Lead ou Oportunidade, busca o perfil de qualificaÃ§Ã£o adequado usando uma invocaÃ§Ã£o Apex (`DW_QP__SimilarityInvocable`).
3. DecisÃ£o sobre Perfil
   - Verifica se o perfil adequado foi encontrado.
4. Obter Perfil de ProprietÃ¡rio
   - Busca o perfil de qualificaÃ§Ã£o do proprietÃ¡rio com base no perfil adequado.
5. Obter Membros da Fila
   - Verifica se hÃ¡ membros na fila do perfil de proprietÃ¡rio.
6. Loop nos Membros da Fila
   - Itera pelos membros da fila, verificando se sÃ£o usuÃ¡rios ou grupos.
7. Obter UsuÃ¡rio Sequencial
   - Para membros do tipo usuÃ¡rio, busca o usuÃ¡rio sequencial.
8. Verificar Lojas com Central Habilitada
   - Para Leads, verifica se a loja possui central de leads habilitada.
9. Obter Lojas Habilitadas
   - Busca lojas habilitadas com central de leads.
10. Atribuir ProprietÃ¡rio
    - Define o proprietÃ¡rio do Lead e da Oportunidade com o usuÃ¡rio obtido.
11. FinalizaÃ§Ã£o
    - O fluxo termina apÃ³s definir o proprietÃ¡rio, sem realizar a atualizaÃ§Ã£o do registro.

VariÃ¡veis
- `lead` (SObject, Input/Output) â€“ Lead a ser processado.
- `oportunidade` (SObject, Input/Output) â€“ Oportunidade a ser processada.
- `perfisAtribuicaoLeads` (SObject Collection) â€“ Perfis de atribuiÃ§Ã£o de leads.
- `proprietariosIds` (String Collection, Input) â€“ IDs de proprietÃ¡rios candidatos.
- `usuariosParaIgnorar` (String Collection, Input) â€“ IDs de usuÃ¡rios a ignorar.
- `codigosLoja` (String Collection) â€“ ColeÃ§Ã£o de cÃ³digos de lojas.
- `nomeObjetoVar` (String) â€“ Nome do objeto de perfil.
- `contextoObjetoVar` (String) â€“ Contexto do perfil.
- `perfilAdequadoVar` (String) â€“ Perfil adequado encontrado.
- `lojaHabilitadaCodigos` (String Collection) â€“ CÃ³digos de lojas habilitadas.
- `ItemPerfilCodigoLoja` (Loop Collection) â€“ Itera perfis para coletar cÃ³digos de loja.
- `lojaHabilitadaItem` (Loop Collection) â€“ Itera lojas habilitadas.
- `LoopMembrosFila` (Loop Collection) â€“ Itera membros da fila.
- `DW_Subflow_ObterUsuarioSequencial` (Subflow) â€“ Busca usuÃ¡rio sequencial.

ConsideraÃ§Ãµes
- Este fluxo Ã© utilizado como um subfluxo para determinar e atribuir o proprietÃ¡rio de registros Lead ou Oportunidade com base em perfis de qualificaÃ§Ã£o.
- A atualizaÃ§Ã£o do proprietÃ¡rio no registro deve ser feita fora deste fluxo, apÃ³s a obtenÃ§Ã£o do usuÃ¡rio adequado.
- O fluxo faz uso de invocaÃ§Ãµes Apex (`DW_QP__SimilarityInvocable`) para buscar perfis de qualificaÃ§Ã£o.
- A lÃ³gica inclui verificaÃ§Ãµes de lojas habilitadas, membros de fila e perfis adequados, garantindo uma atribuiÃ§Ã£o precisa.
- VariÃ¡veis de entrada como `lead`, `oportunidade`, `perfisAtribuicaoLeads` e `usuariosParaIgnorar` devem ser passadas corretamente ao chamar este fluxo.

Este fluxo Ã© uma peÃ§a central na automaÃ§Ã£o de atribuiÃ§Ã£o de proprietÃ¡rios, garantindo que leads e oportunidades sejam direcionados aos usuÃ¡rios ou filas corretas com base em perfis de qualificaÃ§Ã£o e configuraÃ§Ãµes especÃ­ficas de loja.

# Flow: Contato_Validar_email

## DescriÃ§Ã£o
O Flow `Contato_Validar_email` Ã© responsÃ¡vel por validar o endereÃ§o de e-mail de um contato no momento do cadastro ou atualizaÃ§Ã£o. Ele verifica se o e-mail informado Ã© vÃ¡lido, se nÃ£o estÃ¡ vazio, e se nÃ£o estÃ¡ presente na blacklist de e-mails. Caso o e-mail seja invÃ¡lido ou esteja na blacklist, uma mensagem de erro personalizada Ã© exibida.

## Tipo
- AutoLanÃ§ado (AutoLaunched Flow) com disparo antes do salvamento do registro (`RecordBeforeSave`).

## Objetivo
- Validar o formato do e-mail informado no registro de Contato.
- Verificar se o e-mail nÃ£o estÃ¡ na blacklist.
- Impedir o salvamento do contato caso o e-mail seja invÃ¡lido ou esteja na blacklist, exibindo uma mensagem de erro adequada.

## Etapas Principais
1. **InÃ­cio**  
   Disparado ao criar ou atualizar um contato, antes de salvar (`RecordBeforeSave`). A validaÃ§Ã£o ocorre apenas se o campo Email nÃ£o estiver vazio e tiver sido criado ou alterado.

2. **Consulta Ã  Blacklist de E-mails**  
   Consulta o objeto customizado `BlackList_Email__c` para verificar se o e-mail do contato estÃ¡ presente na blacklist.

3. **DecisÃ£o: E-mail vÃ¡lido?**  
   Avalia se o campo `Email` do contato atende aos critÃ©rios de validade:
   - NÃ£o estÃ¡ vazio.
   - ContÃ©m o sÃ­mbolo `@`.
   - Possui caracteres antes e depois do `@`.
   - ContÃ©m um ponto (`.`) apÃ³s o `@`.
   - HÃ¡ pelo menos dois caracteres apÃ³s o Ãºltimo ponto.

4. **DecisÃ£o: EstÃ¡ na blacklist?**  
   Verifica se o resultado da consulta Ã  blacklist retornou algum registro, indicando que o e-mail estÃ¡ na lista negra.

5. **ValidaÃ§Ã£o final**  
   - Se o e-mail nÃ£o for vÃ¡lido ou estiver na blacklist, o Flow gera um erro personalizado (`email_nao_valido`) com a mensagem: "E-mail informado nÃ£o Ã© vÃ¡lido, favor verificar." e impede o salvamento do registro.

## VariÃ¡veis
- **$Record.Email** (padrÃ£o) â€“ E-mail do contato sendo criado ou atualizado.
- **obter_blacklist_email** â€“ Recordset que armazena os registros de blacklist encontrados.
- **FormEmailValido** (Formula) â€“ Avalia se o e-mail atende aos critÃ©rios de validade.
- **email_nao_valido** (Erro personalizado) â€“ Mensagem de erro exibida ao usuÃ¡rio.

## FÃ³rmula de ValidaÃ§Ã£o de E-mail (`FormEmailValido`)
```plaintext
AND(
    NOT(CONTAINS({!$Record.Email}, " ")),
    CONTAINS({!$Record.Email}, "@"),
    LEN(RIGHT({!$Record.Email}, (LEN({!$Record.Email}) - FIND("@", {!$Record.Email})))) > 1,
    LEN(LEFT({!$Record.Email}, (LEN({!$Record.Email}) - FIND("@", {!$Record.Email})))) > 1,
    CONTAINS(RIGHT({!$Record.Email}, (LEN({!$Record.Email}) - FIND("@", {!$Record.Email}))), "."),
    LEN(RIGHT(RIGHT({!$Record.Email}, (LEN({!$Record.Email}) - FIND("@", {!$Record.Email}))), (LEN(RIGHT({!$Record.Email}, (LEN({!$Record.Email}) - FIND("@", {!$Record.Email})))) - FIND(".", RIGHT({!$Record.Email}, (LEN({!$Record.Email}) - FIND("@", {!$Record.Email})))))) ) > 1
)
```
*Esta fÃ³rmula verifica se o e-mail possui um formato vÃ¡lido, incluindo a presenÃ§a de `@` e `.`, alÃ©m de garantir que hÃ¡ caracteres antes e depois desses sÃ­mbolos.*

## ConsideraÃ§Ãµes
- O Flow Ã© acionado apenas se o campo `Email` nÃ£o estiver vazio e tiver sido criado ou alterado.
- Caso o e-mail seja invÃ¡lido ou esteja na blacklist, o usuÃ¡rio verÃ¡ a mensagem de erro personalizada e o registro nÃ£o serÃ¡ salvo.
- A consulta Ã  blacklist Ã© feita no objeto `BlackList_Email__c`, filtrando pelo valor do e-mail.

## Resumo
Este Flow garante que os contatos tenham um e-mail vÃ¡lido e nÃ£o estejam usando endereÃ§os presentes na blacklist, ajudando a manter a integridade e a qualidade dos dados de contato na Salesforce.

Flow: DWSubflowGerarTermoEntregaTerceiros

DescriÃ§Ã£o
O Flow `DWSubflowGerarTermoEntregaTerceiros` automatiza o processo de geraÃ§Ã£o e validaÃ§Ã£o do Termo de Entrega para terceiros relacionados a uma oportunidade. Ele realiza buscas, atribuiÃ§Ãµes, validaÃ§Ãµes e navega entre telas para garantir a criaÃ§Ã£o ou uso de um termo existente, alÃ©m de direcionar o fluxo de acordo com as condiÃ§Ãµes encontradas.

Tipo
- Subflow Lightning (sem interface de usuÃ¡rio direta, utilizado como componente ou chamado por outros flows)

Objetivo
- Buscar ou criar uma conta relacionada ao cliente
- Obter informaÃ§Ãµes da oportunidade e do termo de entrega
- Validar se o termo jÃ¡ existe
- Criar novo termo ou atualizar existente
- Navegar para telas de visualizaÃ§Ã£o ou erro conforme o resultado

Etapas Principais
1. InÃ­cio â€“ Fluxo inicia na tela de busca de conta.
2. Buscar Conta â€“ Verifica se hÃ¡ uma conta existente com os dados informados.
3. DecisÃ£o Criar ou Buscar Conta â€“ Decide se cria uma nova conta ou usa uma existente.
4. AtribuiÃ§Ãµes de Conta e Contato â€“ Atribui dados Ã s variÃ¡veis de conta e contato.
5. Buscar Conta da Oportunidade â€“ ObtÃ©m a conta vinculada Ã  oportunidade.
6. Buscar Termo de Entrega â€“ Verifica se jÃ¡ existe um termo de entrega para a oportunidade.
7. DecisÃ£o de ExistÃªncia do Termo â€“ Decide se atualiza ou cria um novo termo.
8. AtribuiÃ§Ãµes do Termo â€“ Preenche os dados do termo de entrega.
9. ValidaÃ§Ã£o do Termo â€“ Marca se o termo jÃ¡ existe ou precisa ser criado.
10. CriaÃ§Ã£o ou AtualizaÃ§Ã£o do Termo â€“ Executa as aÃ§Ãµes de criaÃ§Ã£o ou atualizaÃ§Ã£o.
11. NavegaÃ§Ã£o â€“ Direciona para telas de preview, erro ou confirmaÃ§Ã£o.

VariÃ¡veis
- DWContaNovaS (Object) â€“ Conta nova a ser criada
- DWContaS (Object) â€“ Conta existente ou vinculada Ã  oportunidade
- DWNovoContatoS (Object) â€“ Novo contato a ser criado
- DWOportunidadeS (Object, Input) â€“ Dados da oportunidade recebida
- DWTermoS (Object) â€“ Termo de entrega a ser criado ou atualizado
- DWValidaSeTermoExiste (Boolean) â€“ Flag para indicar se o termo jÃ¡ existe

Principais Componentes e LÃ³gica
- **actionCalls**: Navega para o Termo de Entrega, passando o ID do termo.
- **assignments**: Atribui valores Ã s variÃ¡veis de conta, contato e termo, com base nos dados obtidos ou criados.
- **recordLookups**: Realiza buscas por conta, termo de entrega e tipo de registro do termo.
- **recordCreates**: Cria nova conta, contato ou termo, conforme necessÃ¡rio.
- **decisions**: Decidem se criam nova conta, se o termo jÃ¡ existe, ou se devem atualizar ou criar um novo termo.
- **screens**: Apresentam telas de erro, confirmaÃ§Ã£o ou preview do termo, dependendo do fluxo.

DecisÃµes Chave
- **DWCriarOuBuscarConta**: Verifica se deve criar uma nova conta ou usar uma existente.
- **DWExisteTermoCriado**: Verifica se jÃ¡ existe um termo de entrega para a oportunidade.
- **DWSelecionouCriarConta**: DecisÃ£o se o usuÃ¡rio opta por criar uma nova conta ou usar uma existente.

Fluxo de NavegaÃ§Ã£o
- Inicia na tela de busca de conta.
- Segue para telas de confirmaÃ§Ã£o ou criaÃ§Ã£o de conta.
- Obtem detalhes do termo de entrega.
- Decide se atualiza ou cria um novo termo.
- Finaliza com uma tela de preview ou erro, dependendo do resultado.

ConsideraÃ§Ãµes
- Este Flow Ã© utilizado como subfluxo em processos maiores de geraÃ§Ã£o de termos.
- Ã‰ importante garantir que o objeto `DWOportunidadeS` seja passado corretamente na sua invocaÃ§Ã£o.
- As aÃ§Ãµes de navegaÃ§Ã£o e criaÃ§Ã£o dependem do sucesso das buscas e validaÃ§Ãµes.
- As componentes de validaÃ§Ã£o de documentos (CPF, RG, Email) utilizam componentes externos (`c:dwDocumentValidation`, `c:dwEmailValidation`).

Este fluxo garante uma gestÃ£o automatizada e condicional do Termo de Entrega, otimizando o processo de terceirizaÃ§Ã£o na oportunidade.

# Flow: GBOportundiadeAfterUpdateAcoesDinamicasEncerrar

## DescriÃ§Ã£o
O Flow `GBOportundiadeAfterUpdateAcoesDinamicasEncerrar` Ã© um fluxo automatizado do tipo **AutoLaunched** que Ã© acionado apÃ³s a atualizaÃ§Ã£o de registros de oportunidade, especificamente quando o estÃ¡gio da oportunidade Ã© alterado para "Perdido". Sua principal funÃ§Ã£o Ã© verificar condiÃ§Ãµes especÃ­ficas relacionadas ao perfil de qualificaÃ§Ã£o e, com base nisso, acionar aÃ§Ãµes dinÃ¢micas ou registrar erros.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

## Objetivo
- Monitorar oportunidades cujo estÃ¡gio foi alterado para "Perdido".
- Obter perfis de qualificaÃ§Ã£o associados Ã  oportunidade.
- Acionar um sub-flow dinÃ¢mico para aÃ§Ãµes adicionais, dependendo do perfil.
- Registrar erros no chatter caso ocorra alguma falha na execuÃ§Ã£o.

## Etapas Principais

### 1. Disparo do Flow
- O Flow Ã© iniciado apÃ³s a atualizaÃ§Ã£o de um registro do objeto `Opportunity`.
- CondiÃ§Ã£o de disparo: `StageName` igual a `"Perdido"`.
- Disparo ocorre na fase **After Update** do registro.

### 2. Obter perfis de qualificaÃ§Ã£o (`ObterPerfilAdequado`)
- Consulta o objeto `DW_QP__PerfilQualificacao__c` usando o `profileId` obtido de `ObterPerfilAdequadoRegistro`.
- Filtro: `Id` igual a `ObterPerfilAdequadoRegistro.profileId`.
- Se encontrar o perfil, prossegue; caso contrÃ¡rio, direciona para erro.

### 3. Obter perfis de qualificaÃ§Ã£o para desqualificaÃ§Ã£o (`perfisDesqualificacao`)
- Consulta mÃºltiplos registros de `DW_QP__PerfilQualificacao__c`.
- Filtros:
  - `DW_QP__NomeObjetoPerfil__c` igual a `"Opportunity"`.
  - `DWContextoPerfil__c` igual a `"Perda de oportunidade"`.
  - `DWAcaoPerfil__c` diferente de null.
- Essa consulta busca perfis relacionados Ã  desqualificaÃ§Ã£o de oportunidades perdidas.

### 4. DecisÃ£o: Encontrou perfil adequado (`EncontrouPerfilAdequado`)
- Verifica se o perfil obtido na etapa 2 nÃ£o Ã© nulo.
- Se encontrado, prossegue para acionar o sub-flow dinÃ¢mico.

### 5. DecisÃ£o: Encontrou perfis de desqualificaÃ§Ã£o (`EncontrouPerfis`)
- Verifica se hÃ¡ perfis de desqualificaÃ§Ã£o disponÃ­veis.
- Se sim, prossegue para acionar o sub-flow.

### 6. Acionar Sub-flow DinÃ¢mico (`AcionarSubflowDinamico`)
- Usa uma aÃ§Ã£o Apex (`DWSubflowLaucher`) para disparar um sub-flow com o nome obtido de `ObterPerfilAdequado.DWAcaoPerfil__c`.
- Passa como parÃ¢metros:
  - `flowApiName`: nome do sub-flow dinÃ¢mico.
  - `recordId`: ID do registro de oportunidade atual.
- Caso ocorra erro, direciona para publicaÃ§Ã£o de mensagem de erro.

### 7. Publicar erro de aÃ§Ã£o dinÃ¢mica (`PublicarErroAcaoDinamica`)
- Caso alguma etapa falhe, registra uma mensagem de erro no chatter, informando que houve uma falha ao acionar a aÃ§Ã£o dinÃ¢mica.

## VariÃ¡veis
- `ObterPerfilAdequadoRegistro` (Record Lookup) â€“ Obtem o perfil de qualificaÃ§Ã£o associado ao registro de oportunidade.
- `perfisDesqualificacao` (Record Lookup) â€“ Obtem perfis de qualificaÃ§Ã£o para desqualificaÃ§Ã£o.
- `mensagemErro` (Formula) â€“ Mensagem de erro formatada para publicaÃ§Ã£o no chatter.
- `$Record.Id` â€“ ID do registro de oportunidade que disparou o Flow.
- `ObterPerfilAdequado.DWAcaoPerfil__c` â€“ Nome do sub-flow a ser acionado dinamicamente.

## ConsideraÃ§Ãµes
- O Flow Ã© disparado automaticamente apÃ³s a atualizaÃ§Ã£o de oportunidades cujo estÃ¡gio Ã© alterado para "Perdido".
- Ã‰ importante garantir que os perfis de qualificaÃ§Ã£o estejam corretamente configurados no objeto `DW_QP__PerfilQualificacao__c`.
- O acionamento do sub-flow Ã© feito via Apex, permitindo maior flexibilidade na execuÃ§Ã£o de aÃ§Ãµes dinÃ¢micas.
- Caso ocorra uma falha, a mensagem de erro serÃ¡ publicada no chatter do registro, facilitando o monitoramento.

---

Este documento fornece uma visÃ£o detalhada do fluxo, suas etapas, lÃ³gica de decisÃ£o e variÃ¡veis envolvidas, facilitando sua compreensÃ£o e manutenÃ§Ã£o.

# Flow: LeadValidarEmail.flow

## DescriÃ§Ã£o
O Flow `LeadValidarEmail.flow` Ã© uma automaÃ§Ã£o de fluxo de lanÃ§amento automÃ¡tico (AutoLaunched Flow) que valida o endereÃ§o de email de um Lead no momento de sua criaÃ§Ã£o ou atualizaÃ§Ã£o. Ele verifica se o email informado Ã© vÃ¡lido e se nÃ£o estÃ¡ presente em uma blacklist de emails, retornando mensagens de erro especÃ­ficas caso alguma condiÃ§Ã£o nÃ£o seja atendida.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

## Objetivo
- Validar o formato do email informado em um Lead.
- Verificar se o email estÃ¡ presente em uma blacklist personalizada.
- Impedir a gravaÃ§Ã£o do Lead caso o email seja invÃ¡lido ou esteja na blacklist, exibindo mensagens de erro apropriadas.

## Etapas Principais
1. **Start**: O fluxo Ã© acionado ao criar ou atualizar um Lead, apenas se o campo Email foi alterado e nÃ£o Ã© nulo.
2. **Get Records** (`obter_blacklist_email`): Consulta registros na entidade `BlackList_Email__c` que tenham o mesmo email do Lead.
3. **DecisÃ£o** (`email_valido`): Verifica se o email informado Ã© vÃ¡lido com base em uma fÃ³rmula personalizada.
   - Se o email for vÃ¡lido, o fluxo continua.
   - Se nÃ£o for vÃ¡lido, direciona para uma mensagem de erro.
4. **DecisÃ£o** (`Esta_blacklist`): Verifica se o email estÃ¡ presente na blacklist.
   - Se estiver na blacklist, direciona para uma mensagem de erro.
   - Caso contrÃ¡rio, permite a gravaÃ§Ã£o do Lead normalmente.
5. **Mensagens de Erro Personalizadas**:
   - `email_nao_valido`: Exibe mensagem "E-mail informado nÃ£o Ã© vÃ¡lido, favor verificar."
   - Caso o email esteja na blacklist, o fluxo tambÃ©m impede a gravaÃ§Ã£o do Lead.

## VariÃ¡veis
- **Entrada**:
  - `Lead`: Objeto Lead que disparou o fluxo, com o campo Email.
- **Internas**:
  - `obter_blacklist_email`: Recurso de consulta que busca registros na entidade `BlackList_Email__c` com o email do Lead.
  - `FormEmailValido`: FÃ³rmula que valida o formato do email.
  - `email_valido`: DecisÃ£o que verifica se o email Ã© vÃ¡lido.
  - `Esta_blacklist`: DecisÃ£o que verifica se o email estÃ¡ na blacklist.
  - `email_nao_valido`: Recurso de erro personalizado que exibe mensagem de email invÃ¡lido.

## FÃ³rmula de ValidaÃ§Ã£o de Email (`FormEmailValido`)
A fÃ³rmula verifica se o email:
- NÃ£o contÃ©m espaÃ§os.
- ContÃ©m o caractere `@`.
- Possui pelo menos um caractere antes e depois do `@`.
- ContÃ©m um ponto (`.`) apÃ³s o `@`.
- Possui pelo menos dois caracteres apÃ³s o Ãºltimo ponto.

ExpressÃ£o:
```plaintext
AND(
    NOT(CONTAINS({!$Record.Email}," ")),
    CONTAINS({!$Record.Email},"@"),
    LEN(RIGHT({!$Record.Email},(LEN( {!$Record.Email})-FIND("@", {!$Record.Email})))) > 1,
    LEN(LEFT({!$Record.Email},(LEN({!$Record.Email})-FIND("@", {!$Record.Email})))) > 1,
    CONTAINS(RIGHT({!$Record.Email},(LEN( {!$Record.Email})-FIND("@", {!$Record.Email}))), "."),
    LEN(RIGHT( RIGHT({!$Record.Email},(LEN({!$Record.Email})-FIND("@", {!$Record.Email}))), (LEN( RIGHT({!$Record.Email},(LEN({!$Record.Email})-FIND("@", {!$Record.Email})))) - FIND(".", RIGHT({!$Record.Email},(LEN({!$Record.Email})-FIND("@", {!$Record.Email}))))))) > 1
)
```

## ConsideraÃ§Ãµes
- O fluxo Ã© acionado apenas quando o campo Email do Lead Ã© alterado e nÃ£o estÃ¡ vazio.
- Caso o email seja invÃ¡lido ou esteja na blacklist, o fluxo impede a gravaÃ§Ã£o do Lead e exibe mensagens de erro especÃ­ficas.
- A consulta na blacklist Ã© feita na entidade `BlackList_Email__c`, que deve conter os emails considerados proibidos.
- Este fluxo Ã© Ãºtil para garantir a qualidade dos dados de contato e evitar registros com emails invÃ¡lidos ou indesejados.

---

Se precisar de mais detalhes ou de uma adaptaÃ§Ã£o, estou Ã  disposiÃ§Ã£o!

Flow: Conta_Retirar_logradouro_rua_cobranca

# DescriÃ§Ã£o
O Flow `Conta_Retirar_logradouro_rua_cobranca` Ã© uma automaÃ§Ã£o do Salesforce que atua na entidade Conta (Account). Sua finalidade principal Ã© validar e padronizar o campo de endereÃ§o de cobranÃ§a (`BillingStreet`) removendo o logradouro e identificando o tipo de logradouro presente na rua, alÃ©m de garantir que o endereÃ§o comece com um tipo vÃ¡lido, como Rua, Avenida, etc.

# Tipo
- AutoLanÃ§ado (AutoLaunched Flow)
- Executado antes de salvar o registro (`RecordBeforeSave`)
- Disparado por criaÃ§Ã£o ou atualizaÃ§Ã£o de registros de Conta

# Objetivo
- Verificar se o campo `BillingStreet` foi alterado ou se o registro Ã© novo.
- Validar se o endereÃ§o comeÃ§a com um tipo de logradouro vÃ¡lido.
- Extrair o logradouro sem o tipo e atualizar o campo `Tipo_Logradouro__c`.
- Garantir que o endereÃ§o de cobranÃ§a esteja padronizado e validado antes de salvar.

# Etapas principais
1. **InÃ­cio**: Disparado ao criar ou atualizar uma Conta, desde que:
   - O tipo de registro nÃ£o seja `DWLoja`.
   - O campo `BillingStreet` nÃ£o esteja vazio.
   - Houve alteraÃ§Ã£o em `BillingStreet` ou `Tipo_Logradouro__c`, ou seja, Ã© uma criaÃ§Ã£o nova.
2. **DecisÃ£o - ComeÃ§a com o tipo de logradouro?**: Verifica se o endereÃ§o comeÃ§a com um prefixo vÃ¡lido de logradouro (como Rua, Avenida, etc.).
   - Se sim, passa para a etapa de atualizaÃ§Ã£o.
   - Se nÃ£o, dispara uma mensagem de erro personalizada.
3. **AtualizaÃ§Ã£o dos campos**:
   - Atribui ao campo `$Record.Tipo_Logradouro__c` o valor correspondente ao tipo de logradouro detectado.
   - Remove o tipo do endereÃ§o de cobranÃ§a, deixando apenas o logradouro sem o prefixo, usando a fÃ³rmula `Logradouro_sem_tipo`.
4. **ValidaÃ§Ã£o**: Caso o endereÃ§o nÃ£o comece com um tipo vÃ¡lido, o fluxo gera um erro personalizado informando que o campo deve comeÃ§ar com um tipo de logradouro vÃ¡lido.

# VariÃ¡veis
- `$Record` (padrÃ£o): ReferÃªncia ao registro de Conta em processamento.
- `Comeca_Tipo_Logradouro1` (Formula Boolean): Detecta se o endereÃ§o comeÃ§a com um prefixo vÃ¡lido de logradouro.
- `Comeca_Tipo_Logradouro2` (Formula Boolean): Detecta se o endereÃ§o comeÃ§a com um prefixo de fazenda, vila, etc.
- `Logradouro_sem_tipo` (Formula String): Extrai o logradouro sem o prefixo.
- `Tipo_Logradouro` (Formula String): Identifica o tipo de logradouro presente no endereÃ§o.

# FÃ³rmulas principais
- **ComeÃ§a com o tipo de logradouro?**: Verifica se o endereÃ§o inicia com prefixos como "Rua", "Avenida", "Alameda", etc., usando vÃ¡rias funÃ§Ãµes `BEGINS` combinadas com `OR`.
- **ComeÃ§a com o tipo de fazenda, vila, etc.?**: Similar Ã  anterior, verifica prefixos como "Fazenda", "Viaduto", "Lote", etc.
- **Logradouro_sem_tipo**: Remove o prefixo do endereÃ§o, deixando apenas o restante do logradouro.
- **Tipo_Logradouro**: Detecta o tipo de logradouro com base no inÃ­cio do endereÃ§o, atribuindo valores como "ALAMEDA", "AVENIDA", "RUA", etc.

# ValidaÃ§Ã£o de erro personalizada
- Nome: `deve_come_ar_com_logradouro`
- Mensagem: "O campo 'Rua de CobranÃ§a' deve comeÃ§ar com um tipo de logradouro, como por exemplo: Rua, Avenida, Rodovia, etc."
- Essa validaÃ§Ã£o Ã© acionada se o endereÃ§o nÃ£o comeÃ§ar com um prefixo vÃ¡lido.

# ConsideraÃ§Ãµes finais
- Este Flow deve ser ativado na configuraÃ§Ã£o de disparo do objeto Conta, na fase de prÃ©-salvamento (`RecordBeforeSave`).
- Sua implementaÃ§Ã£o garante que os endereÃ§os de cobranÃ§a estejam padronizados e validados automaticamente, facilitando processos de anÃ¡lise e integraÃ§Ã£o de dados.
- Ã‰ importante que o campo `Tipo_Logradouro__c` seja utilizado para armazenar o tipo de logradouro detectado, auxiliando na padronizaÃ§Ã£o dos endereÃ§os.

# Resumo
Este fluxo automatiza a validaÃ§Ã£o e padronizaÃ§Ã£o do endereÃ§o de cobranÃ§a, removendo o logradouro do campo `BillingStreet` e identificando seu tipo, alÃ©m de garantir que o endereÃ§o comece com um prefixo vÃ¡lido, promovendo maior consistÃªncia nos dados de endereÃ§o.

# Flow: DWEnvelopeAfterCreateCancelaEnvelopeEmAndamentoQuandoEnvelopeReenviado.flow

## DescriÃ§Ã£o
Este Flow do tipo **AutoLaunched** Ã© acionado apÃ³s a criaÃ§Ã£o de um registro do objeto `DWEnvelopeDocusign__c`. Sua finalidade Ã© verificar se hÃ¡ envelopes em andamento relacionados ao mesmo registro de oportunidade ou termo, e, caso existam, cancelar esses envelopes anteriores automaticamente. Isso garante que nÃ£o haja mÃºltiplos envelopes ativos para o mesmo processo, evitando conflitos ou envios duplicados.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio, acionado apÃ³s o salvamento de registros)

## Objetivo
- Detectar envelopes em andamento relacionados ao mesmo registro de oportunidade ou termo.
- Cancelar envelopes em andamento quando um novo envelope for criado ou reenviado.
- Registrar mensagens de erro no chatter caso ocorra alguma falha durante o cancelamento.

## Etapas Principais

### 1. InÃ­cio
- O Flow Ã© acionado apÃ³s a criaÃ§Ã£o de um registro do objeto `DWEnvelopeDocusign__c`.
- O gatilho Ã© do tipo **Record After Save**.
- O fluxo inicia na etapa `<start>` e realiza uma consulta assÃ­ncrona (`AsyncAfterCommit`) para verificar envelopes relacionados.

### 2. Obter envelopes em andamento (`EnvelopeS`)
- Consulta do objeto `DWEnvelopeDocusign__c` para encontrar envelopes relacionados ao mesmo registro de oportunidade (`DWOportunidade__c`) e sem termo (`DWTermo__c` Ã© nulo).
- Filtros:
  - `DWOportunidade__c` igual ao registro atual.
  - `DWTermo__c` Ã© nulo.
  - `DWStatusAssinatura__c` igual a `"Enviado"`.
  - `Id` diferente do registro atual (para evitar cancelar o prÃ³prio envelope).
- A consulta retorna apenas o primeiro registro encontrado (`getFirstRecordOnly=true`).

### 3. Obter envelopes de termo (`envelopeTermoS`)
- Consulta similar ao anterior, mas para envelopes relacionados ao mesmo termo (`DWTermo__c`) e oportunidade.
- Filtros:
  - `DWOportunidade__c` igual ao registro atual.
  - `DWTermo__c` igual ao termo do registro atual.
  - `DWStatusAssinatura__c` igual a `"Enviado"`.
  - `Id` diferente do atual.
- TambÃ©m retorna apenas o primeiro registro encontrado.

### 4. DecisÃ£o: Verificar se hÃ¡ envelopes em andamento
- Se o resultado da consulta `EnvelopeS` indicar que hÃ¡ envelopes em andamento (`IsNull` Ã© falso), o Flow direciona para cancelar esse envelope.

### 5. Cancelar envelope em andamento (`Cancela_envelope`)
- Chama uma aÃ§Ã£o Apex (`DW_CancelEnvDocusignController`) passando:
  - `envelopeId`: ID do envelope em andamento.
  - `motivo`: motivo do cancelamento ("Cancelado por reenvio de um novo envelope").
- Caso ocorra erro na aÃ§Ã£o, o Flow direciona para registrar o erro.

### 6. DecisÃ£o: Verificar se hÃ¡ envelope de termo para cancelar
- Se o resultado da consulta `envelopeTermoS` indicar que hÃ¡ envelopes relacionados ao termo, o Flow direciona para cancelar esse envelope tambÃ©m.

### 7. Cancelar envelope de termo (`Cancela_envelope_enviado`)
- Similar ao passo 5, chama a aÃ§Ã£o Apex para cancelar o envelope de termo, passando o ID e motivo.

### 8. Registro de erro (`Erro_ao_cancelar_o_envelope`)
- Caso ocorra alguma falha na tentativa de cancelar envelopes, uma postagem no chatter Ã© feita com uma mensagem de erro detalhada, incluindo o registro relacionado.

## VariÃ¡veis
- **$Record**: Registro do objeto `DWEnvelopeDocusign__c` que acionou o Flow.
- **EnvelopeS**: Resultado da consulta para envelopes em andamento relacionados Ã  oportunidade.
- **envelopeTermoS**: Resultado da consulta para envelopes relacionados ao termo.
- **Motivo**: Mensagem padrÃ£o para o cancelamento ("Cancelado por reenvio de um novo envelope").

## ConsideraÃ§Ãµes
- Este Flow Ã© acionado automaticamente apÃ³s a criaÃ§Ã£o de um envelope, garantindo que envelopes antigos sejam cancelados para evitar conflitos.
- As aÃ§Ãµes de cancelamento sÃ£o feitas via Apex, permitindo lÃ³gica personalizada de cancelamento.
- Caso haja erro, a equipe Ã© notificada via chatter, facilitando o acompanhamento de problemas.
- O fluxo Ã© configurado para trabalhar de forma assÃ­ncrona, garantindo desempenho e nÃ£o bloquear o processo de criaÃ§Ã£o do envelope.

---

Este documento fornece uma visÃ£o tÃ©cnica detalhada do funcionamento do Flow, facilitando sua manutenÃ§Ã£o e possÃ­veis melhorias futuras.

# Flow: DWLeadSubflowCriarNovoLeadConversaoAutomaticaVendedor

## DescriÃ§Ã£o
O Flow `DWLeadSubflowCriarNovoLeadConversaoAutomaticaVendedor` automatiza o processo de criaÃ§Ã£o de um novo Lead a partir de um registro existente, realiza sua conversÃ£o em oportunidade e envia uma notificaÃ§Ã£o personalizada ao vendedor responsÃ¡vel. Este fluxo Ã© utilizado para facilitar a conversÃ£o automÃ¡tica de Leads em oportunidades, atribuindo o proprietÃ¡rio e notificando o vendedor de forma eficiente.

## Tipo
- AutoLanÃ§ado (AutoLaunched Flow)

## Objetivo
- Consultar um Lead existente pelo seu ID.
- Criar um novo Lead com dados transferidos do Lead original.
- Converter o Lead criado em uma oportunidade atravÃ©s de uma chamada Apex.
- Atribuir o proprietÃ¡rio ao Lead convertido.
- Enviar uma notificaÃ§Ã£o personalizada ao vendedor responsÃ¡vel, informando sobre a criaÃ§Ã£o e conversÃ£o do Lead.

## Etapas Principais

1. **Get Records â€“ LeadS**  
   Consulta o Lead existente usando o `recordId` passado como entrada, buscando o Lead pelo seu ID.  
   - ParÃ¢metro de entrada: `recordId` (ID do Lead a ser processado).  
   - Resultado: Armazena o Lead na variÃ¡vel `lead_novo`.

2. **Assignment â€“ atribuiProprietario**  
   Atribui ao proprietÃ¡rio do Lead uma fila ou usuÃ¡rio, usando uma fÃ³rmula que verifica se o Owner Ã© um usuÃ¡rio ou grupo.  
   - VariÃ¡vel: `ownerId` (lista de IDs de proprietÃ¡rio).  
   - LÃ³gica: Se o Owner for um usuÃ¡rio, usa o ID do usuÃ¡rio; se for um grupo, usa o ID do grupo.  
   - Encaminha para a aÃ§Ã£o de envio de notificaÃ§Ã£o.

3. **Record Create â€“ criar_lead**  
   Cria um novo Lead com os dados transferidos do Lead consultado (`lead_novo`).  
   - Os valores dos campos sÃ£o mapeados a partir do Lead original, incluindo informaÃ§Ãµes como cidade, paÃ­s, nome, email, telefone, etc.  
   - Resultado: Novo Lead criado, cujo ID Ã© utilizado na conversÃ£o.

4. **Action â€“ DWLeadConversionHandler** (Apex)  
   Chama uma classe Apex para converter o Lead recÃ©m criado em uma oportunidade.  
   - ParÃ¢metro de entrada: `leadIds` (ID do Lead criado).  
   - Encaminha o resultado para a prÃ³xima etapa de atribuiÃ§Ã£o.

5. **Assignment â€“ atribuiProprietario (continuaÃ§Ã£o)**  
   ApÃ³s a conversÃ£o, atribui o proprietÃ¡rio ao Lead convertido, usando o valor de `usuarioFilaNotificacao`.

6. **Action â€“ A_o_Enviar_notificacao_personalizada_1** (Custom Notification)  
   Envia uma notificaÃ§Ã£o personalizada ao proprietÃ¡rio do Lead, informando que um novo Lead foi criado e convertido.  
   - Tipo de notificaÃ§Ã£o: definido pelo ID `0MLbm000000gMVZGA2`.  
   - DestinatÃ¡rio: OwnerId do Lead convertido ou do Lead original, dependendo da lÃ³gica da fÃ³rmula.  
   - TÃ­tulo: "Novo Lead Criado e Convertido para Oportunidade!"  
   - Corpo: "Lead convertif" (texto de exemplo).

## VariÃ¡veis

| Nome                | Tipo       | DescriÃ§Ã£o                                              | Entrada | SaÃ­da |
|---------------------|------------|--------------------------------------------------------|---------|--------|
| `recordId`         | String     | ID do Lead a ser processado (entrada obrigatÃ³ria).    | Sim     | NÃ£o    |
| `lead_novo`        | SObject    | Lead consultado e utilizado para criar o novo Lead.   | NÃ£o     | NÃ£o    |
| `ownerId`          | String     | Lista de IDs de proprietÃ¡rio para atribuiÃ§Ã£o.          | NÃ£o     | NÃ£o    |
| `usuarioFilaNotificacao` | String | FÃ³rmula que determina o ID do usuÃ¡rio ou grupo para notificaÃ§Ã£o. | NÃ£o | NÃ£o |

## ConsideraÃ§Ãµes
- Este Flow deve ser iniciado passando o `recordId` do Lead que se deseja processar.
- A integraÃ§Ã£o com Apex (`DWLeadConversionHandler`) Ã© essencial para realizar a conversÃ£o do Lead em oportunidade.
- A notificaÃ§Ã£o personalizada Ã© enviada apÃ³s a conversÃ£o, garantindo que o vendedor seja informado imediatamente.
- O fluxo utiliza variÃ¡veis de fÃ³rmula para determinar o destinatÃ¡rio da notificaÃ§Ã£o, considerando se o proprietÃ¡rio Ã© um usuÃ¡rio ou grupo.
- Recomenda-se testar o fluxo em ambiente de sandbox antes de implantaÃ§Ã£o em produÃ§Ã£o para garantir que os mapeamentos e chamadas de Apex estejam corretos.

---

Este documento fornece uma visÃ£o detalhada do fluxo, suas etapas, variÃ¡veis e lÃ³gica de funcionamento, facilitando sua manutenÃ§Ã£o e futuras melhorias.

Flow: DWOpportunityAfterFlowCreateAtribuirProprietario.flow

DescriÃ§Ã£o
O Flow `DWOpportunityAfterFlowCreateAtribuirProprietario` Ã© um fluxo automatizado acionado apÃ³s a criaÃ§Ã£o de uma oportunidade. Sua principal funÃ§Ã£o Ã© determinar e atribuir o proprietÃ¡rio adequado Ã  oportunidade, considerando diferentes condiÃ§Ãµes, como se ela foi criada via API ou formulÃ¡rio, se veio de uma oportunidade convertida, e se hÃ¡ uma loja associada. AlÃ©m disso, ele integra um subfluxo para definir o proprietÃ¡rio com base no perfil de qualificaÃ§Ã£o.

Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

Objetivo
- Automatizar a atribuiÃ§Ã£o do proprietÃ¡rio de uma oportunidade recÃ©m-criada, garantindo que o proprietÃ¡rio seja definido corretamente de acordo com o contexto de criaÃ§Ã£o e dados relacionados.

Etapas Principais
1. Start â€“ Inicia apÃ³s a criaÃ§Ã£o de uma oportunidade, se ela nÃ£o estiver relacionada a uma oportunidade existente.
2. ObterLead â€“ Consulta se a oportunidade foi gerada a partir de uma lead convertida.
3. Verifica se a oportunidade veio via API ou formulÃ¡rio (`Lead via IntegraÃ§Ã£o?`) â€“ DecisÃ£o baseada na variÃ¡vel `DWAtribuicaoAutomatica__c`.
4. ObterOportunidade â€“ Consulta os detalhes da oportunidade criada.
5. Verifica se hÃ¡ uma loja associada (`Existe Loja?`) â€“ DecisÃ£o que verifica se o campo `DWLoja__c` estÃ¡ preenchido.
6. Se a loja estiver preenchida, direciona para o fluxo de integraÃ§Ã£o com a loja.
7. Verifica se a oportunidade veio de uma lead convertida, ajustando o fluxo de atribuiÃ§Ã£o.
8. DecisÃ£o `ProprietÃ¡rios Iguais?` â€“ Compara o proprietÃ¡rio da oportunidade com o proprietÃ¡rio da lead convertida.
9. Se os proprietÃ¡rios forem diferentes, executa o subfluxo `DW_SubflowAtribuirProprietarioPeloPerfilQualificacao` para determinar o proprietÃ¡rio com base no perfil de qualificaÃ§Ã£o.
10. Caso os proprietÃ¡rios sejam iguais, ou apÃ³s a definiÃ§Ã£o do proprietÃ¡rio, atualiza o registro da oportunidade com o novo proprietÃ¡rio.

VariÃ¡veis
- `$Record` (registro de oportunidade acionador)
- `ObterLead` (record lookup) â€“ Lead relacionado, se convertido
- `ObterOportunidade` (record lookup) â€“ Detalhes da oportunidade
- `NumeroIntegrantes` (NÃºmero) â€“ Usado no cÃ¡lculo de round-robin
- `DWAtribuicaoAutomatica__c` (Boolean) â€“ Indica se a oportunidade foi criada automaticamente
- `currentItemFromSourceCollection` (SObject) â€“ VariÃ¡vel auxiliar
- `NumeroLoop` (NÃºmero) â€“ VariÃ¡vel auxiliar para loops
- `UsuariosAtivosColl` (ColeÃ§Ã£o de User) â€“ Lista de usuÃ¡rios ativos

DecisÃµes
- **ExisteLead**: Verifica se a oportunidade foi gerada a partir de uma lead convertida.
- **ExisteLoja?**: Checa se hÃ¡ uma loja associada (`DWLoja__c`) na oportunidade.
- **Lead_via_Integracao?**: Determina se a oportunidade veio via API ou formulÃ¡rio, baseado na variÃ¡vel `DWAtribuicaoAutomatica__c`.
- **ProprietÃ¡rios_Iguais?**: Compara o proprietÃ¡rio da oportunidade com o proprietÃ¡rio da lead convertida para decidir se deve executar o subfluxo de atribuiÃ§Ã£o.

Subfluxos
- **DW_SubflowAtribuirProprietarioPeloPerfilQualificacao**: Executado para determinar o proprietÃ¡rio com base no perfil de qualificaÃ§Ã£o, recebendo a oportunidade como entrada.

Formulas
- **LeadCriadoAut**: Booleano que indica se a oportunidade foi criada automaticamente (`IF(NOT({!$Record.DWAtribuicaoAutomatica__c}), true, false)`).
- **Lembrete**: DataHora futura, possivelmente para notificaÃ§Ãµes ou lembretes.
- **RoundRobin**: CÃ¡lculo para distribuiÃ§Ã£o de propriedade em modo round-robin, usando o campo `DWNumeroOppAuxiliar__c` e o nÃºmero total de integrantes (`MOD(VALUE({!$Record.DWNumeroOppAuxiliar__c}),{!NumeroIntegrantes})+1`).

ConsideraÃ§Ãµes
- O fluxo Ã© acionado apÃ³s a criaÃ§Ã£o de uma oportunidade, apenas se ela nÃ£o estiver relacionada a uma oportunidade existente (`Oportunidade_relacionada__c` Ã© nulo).
- O fluxo utiliza um subfluxo para determinar o proprietÃ¡rio com base no perfil de qualificaÃ§Ã£o, facilitando a manutenÃ§Ã£o e a lÃ³gica de negÃ³cio.
- A lÃ³gica contempla diferentes cenÃ¡rios de origem da oportunidade, incluindo integraÃ§Ãµes via API e leads convertidas.
- Ã‰ importante garantir que as variÃ¡veis de entrada e os registros relacionados estejam corretamente configurados para que o fluxo funcione de forma eficaz.

Flow: DW_ScreenFlow_LayoutOportunidade

DescriÃ§Ã£o
O Flow `DW_ScreenFlow_LayoutOportunidade` Ã© um fluxo de tela (Screen Flow) utilizado para gerenciar a visualizaÃ§Ã£o e ediÃ§Ã£o de detalhes de uma oportunidade no Salesforce, incluindo informaÃ§Ãµes relacionadas ao estoque, fase da oportunidade, notificaÃ§Ãµes e recarregamento de telas. Ele tambÃ©m controla a navegaÃ§Ã£o entre diferentes telas de acordo com as condiÃ§Ãµes do negÃ³cio, como mudanÃ§as de fase ou alteraÃ§Ãµes no estoque.

Tipo
- Screen Flow (Fluxo de Tela)

Objetivo
- Exibir detalhes da oportunidade, lead e conta associados.
- Detectar mudanÃ§as na fase da oportunidade e no estoque.
- Notificar aÃ§Ãµes especÃ­ficas ao usuÃ¡rio via toast messages.
- Recarregar telas dinamicamente quando hÃ¡ alteraÃ§Ãµes na fase ou estoque.
- Gerenciar diferentes estados da oportunidade, como "NÃ£o iniciado", "Em atendimento", "Vendido", etc.

Etapas Principais
1. Obter registros:
   - Conta relacionada Ã  oportunidade.
   - Lead associado Ã  oportunidade.
   - Oportunidade atual, editada e antiga para rastreamento de mudanÃ§as.
2. DecisÃµes:
   - Verificar se houve alteraÃ§Ã£o na fase da oportunidade (`MudouFaseOportunidade`).
   - Determinar a fase atual da oportunidade (`FaseOportunidade`) e direcionar para telas especÃ­ficas.
   - Detectar alteraÃ§Ãµes no estoque (`AlterouEstoque`) e disparar notificaÃ§Ãµes.
3. Exibir telas de visualizaÃ§Ã£o:
   - Tela de em atendimento (`TelaEmAtendimento`)
   - Tela de faturado (`TelaFaturado`)
   - Tela de nÃ£o iniciado (`TelaNaoIniciado`)
   - Tela de perdido (`TelaPerdido`)
   - Tela de recarregamento (`TelaRecarregamento`, `TelaRecarregamentoMinuta`)
   - Tela de fluig (`TelaFluig`)
   - Tela de vendido (`TelaVendido`)
   - Tela de falha (`TelaFalha`)
4. NotificaÃ§Ãµes:
   - Toasts para atribuiÃ§Ã£o, cancelamento e substituiÃ§Ã£o de estoque.
5. AtribuiÃ§Ãµes:
   - Guardar o valor antigo da oportunidade para comparaÃ§Ã£o posterior.

VariÃ¡veis
- `oldOpportunity` (SObject) â€“ Armazena o estado anterior da oportunidade para comparaÃ§Ã£o de mudanÃ§as.
- `recordId` (String) â€“ ID da oportunidade, passado como entrada para o fluxo.

Componentes e AÃ§Ãµes
- Diversas chamadas de componentes do tipo `c:showToast` para exibir notificaÃ§Ãµes ao usuÃ¡rio.
- Componentes de layout (`c:sobjectLayoutSection` e `c:dwUsedVehicleSection`) para exibir detalhes de contas, leads, oportunidades e veÃ­culos usados.
- Componentes de recarregamento (`c:dwReloadWindow`) para atualizar a tela apÃ³s mudanÃ§as de fase ou estoque.
- VÃ¡rios pontos de decisÃ£o (`Decision`) para determinar o fluxo de navegaÃ§Ã£o com base nas condiÃ§Ãµes do negÃ³cio, como mudanÃ§as de fase ou estoque.

DecisÃµes Detalhadas
- `AlterouEstoque`: Verifica se o estoque foi alterado comparando o valor antigo e o atualizado.
- `FaseOportunidade`: Direciona para diferentes telas dependendo da fase da oportunidade (`NÃ£o iniciado`, `Em atendimento`, `Vendido`, etc.).
- `MudouFaseOportunidade`: Detecta se a fase da oportunidade foi alterada, disparando recarregamentos ou navegaÃ§Ãµes especÃ­ficas.

DescriÃ§Ã£o das Telas
- `TelaEmAtendimento`: Exibe informaÃ§Ãµes do lead e conta em modo somente leitura, com possibilidade de navegaÃ§Ã£o.
- `TelaFaturado`: Mostra detalhes do faturamento e informaÃ§Ãµes do sistema, tambÃ©m em modo leitura.
- `TelaNaoIniciado`: Tela de visualizaÃ§Ã£o de oportunidade ainda nÃ£o iniciada.
- `TelaPerdido`: Exibe detalhes de oportunidades perdidas, incluindo motivos de desqualificaÃ§Ã£o.
- `TelaRecarregamento` e `TelaRecarregamentoMinuta`: Telas que exibem mensagens de recarregamento automÃ¡tico apÃ³s mudanÃ§as de fase.
- `TelaVendido`: VisualizaÃ§Ã£o de oportunidade vendida, incluindo detalhes do veÃ­culo e sistema.
- `TelaFluig`: Tela de integraÃ§Ã£o com o sistema Fluig, exibindo informaÃ§Ãµes de fluxo.
- `TelaFalha`: Tela de erro exibida em caso de falhas no fluxo.

ConsideraÃ§Ãµes
- O fluxo Ã© iniciado na variÃ¡vel `recordId`, que deve ser passada ao chamÃ¡-lo.
- Utiliza componentes personalizados (`c:showToast`, `c:sobjectLayoutSection`, `c:dwReloadWindow`) para funcionalidades especÃ­ficas.
- As decisÃµes sÃ£o baseadas na comparaÃ§Ã£o de valores antigos e atuais para detectar mudanÃ§as na fase e estoque.
- O fluxo Ã© configurado para rodar em modo `SystemModeWithoutSharing`, garantindo acesso completo aos registros.
- As telas sÃ£o configuradas para permitir navegaÃ§Ã£o, pausa, e finalizaÃ§Ã£o conforme o contexto.

Este fluxo Ã© uma peÃ§a central na gestÃ£o de oportunidades, garantindo que mudanÃ§as importantes sejam refletidas na interface do usuÃ¡rio e que aÃ§Ãµes de negÃ³cio sejam notificadas de forma clara e automÃ¡tica.

# Flow: DWLeadAfterUpdateAcoesDinamicasDesqualificacao

## DescriÃ§Ã£o
Este Flow automatiza o processo de aÃ§Ãµes dinÃ¢micas apÃ³s a desqualificaÃ§Ã£o de um Lead. Quando um Lead Ã© marcado como "Desqualificado" e seu status Ã© alterado, o Flow identifica o motivo ou submotivo da desqualificaÃ§Ã£o, consulta os perfis de qualificaÃ§Ã£o relacionados ao Lead, e executa um subflow dinÃ¢mico baseado na qualificaÃ§Ã£o encontrada. AlÃ©m disso, o Flow trata erros e publica mensagens de erro no chatter, garantindo rastreabilidade e controle do processo.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

## Objetivo
- Detectar quando um Lead Ã© marcado como "Desqualificado".
- Consultar perfis de qualificaÃ§Ã£o associados ao Lead para determinar aÃ§Ãµes especÃ­ficas.
- Executar um subflow dinÃ¢mico com base no perfil de qualificaÃ§Ã£o.
- Registrar e publicar mensagens de erro em caso de falhas durante o processo.

## Etapas Principais

1. **InÃ­cio (Start)**
   - Disparado apÃ³s a atualizaÃ§Ã£o de um Lead.
   - CondiÃ§Ã£o: Status do Lead mudou para "Desqualificado".
   - Disparo assÃ­ncrono apÃ³s o commit da alteraÃ§Ã£o (`AsyncAfterCommit`).

2. **Obter perfis de qualificaÃ§Ã£o para desqualificaÃ§Ã£o (`perfisDesqualificacao`)**
   - Consulta registros do objeto `DW_QP__PerfilQualificacao__c`.
   - Filtros:
     - `DW_QP__NomeObjetoPerfil__c` = "Lead"
     - `DWContextoPerfil__c` = "DesqualificaÃ§Ã£o do lead"
     - `DWAcaoPerfil__c` â‰  null
   - Sem limite de registros (obtÃ©m todos que atendem aos critÃ©rios).
   - Ordena por `Name` em ordem ascendente.
   - Caso nÃ£o encontre registros, direciona para publicaÃ§Ã£o de erro.

3. **Obter perfil adequado (`ObterPerfilAdequadoRegistro`)**
   - Consulta o objeto `DW_QP__PerfilQualificacao__c` pelo `profileId` obtido na etapa anterior.
   - Filtros:
     - `Id` = `ObterPerfilAdequadoRegistro.profileId`
   - Retorna o primeiro registro encontrado.
   - Se nÃ£o encontrar, direciona para publicaÃ§Ã£o de erro.

4. **DecisÃ£o: Encontrou perfil adequado? (`EncontrouPerfilAdequado`)**
   - Verifica se o perfil adequado foi localizado.
   - Se sim, passa para execuÃ§Ã£o do subflow dinÃ¢mico.
   - Se nÃ£o, direciona para publicaÃ§Ã£o de erro.

5. **DecisÃ£o: Encontrou perfis? (`EncontrouPerfis`)**
   - Verifica se hÃ¡ perfis de qualificaÃ§Ã£o relacionados ao Lead.
   - Se sim, passa para consulta do perfil adequado.
   - Se nÃ£o, direciona para publicaÃ§Ã£o de erro.

6. **Acionar subflow dinÃ¢mico (`AcionarSubflowDinamico`)**
   - Executa o subflow Apex `DWSubflowLaucher`.
   - ParÃ¢metros de entrada:
     - `flowApiName`: valor de `ObterPerfilAdequado.DWAcaoPerfil__c`
     - `recordId`: ID do Lead `$Record.Id`
   - Caso haja erro, direciona para publicaÃ§Ã£o de erro.

7. **Publicar erro de aÃ§Ã£o dinÃ¢mica (`PublicarErroAcaoDinamica`)**
   - Posta uma mensagem no chatter com detalhes do erro.
   - Utiliza a fÃ³rmula `mensagemErro` que concatena uma mensagem padrÃ£o com o `FaultMessage`.

## VariÃ¡veis e FÃ³rmulas

- **VariÃ¡veis de Entrada**
  - `$Record.Id`: ID do Lead que disparou o Flow.
  
- **VariÃ¡veis de SaÃ­da e de Apoio**
  - `mensagemErro`: String que contÃ©m a mensagem de erro detalhada, incluindo o `FaultMessage`.
  - `perfisDesqualificacao`: Lista de perfis de qualificaÃ§Ã£o relacionados Ã  desqualificaÃ§Ã£o do Lead.
  - `ObterPerfilAdequado`: Perfil de qualificaÃ§Ã£o adequado encontrado para o Lead.

## ConsideraÃ§Ãµes
- Este Flow Ã© disparado automaticamente apÃ³s a alteraÃ§Ã£o do status do Lead para "Desqualificado".
- Utiliza chamadas a Apex (`DWSubflowLaucher` e `DW_QP__SimilarityInvocable`) para execuÃ§Ã£o de aÃ§Ãµes dinÃ¢micas e consulta de perfis.
- Implementa tratamento de erros robusto, publicando mensagens no chatter para facilitar o monitoramento.
- Ã‰ importante garantir que os perfis de qualificaÃ§Ã£o estejam corretamente configurados e relacionados ao Lead para que o Flow funcione adequadamente.
- O Flow Ã© configurado para rodar de forma assÃ­ncrona, garantindo desempenho e nÃ£o impactando o usuÃ¡rio final.

---

Este documento fornece uma visÃ£o detalhada do funcionamento do Flow `DWLeadAfterUpdateAcoesDinamicasDesqualificacao`, facilitando sua manutenÃ§Ã£o e entendimento tÃ©cnico.

Flow: DW_ScreenFlow_ValidarCondicaoPagamento

DescriÃ§Ã£o
O Flow `DW_ScreenFlow_ValidarCondicaoPagamento` Ã© uma automaÃ§Ã£o de fluxo de tela que valida e processa as condiÃ§Ãµes de pagamento relacionadas a uma oportunidade, incluindo a avaliaÃ§Ã£o de veÃ­culos usados, consÃ³rcios e financeiras. Ele realiza buscas, decisÃµes e atualizaÃ§Ãµes de registros, alÃ©m de interagir com o usuÃ¡rio por meio de telas para coleta de informaÃ§Ãµes especÃ­ficas.

Tipo
- Screen Flow (Fluxo de Tela)

Objetivo
- Obter a condiÃ§Ã£o de pagamento associada a uma oportunidade.
- Validar e atribuir dados relacionados ao consÃ³rcio, veÃ­culo usado e financeira.
- Avaliar veÃ­culos usados atravÃ©s de um subfluxo.
- Direcionar o usuÃ¡rio para diferentes telas de entrada de dados com base nas condiÃ§Ãµes de pagamento.
- Atualizar registros de condiÃ§Ãµes de pagamento com as informaÃ§Ãµes fornecidas ou obtidas.

Etapas Principais
1. **Start**: InÃ­cio do fluxo, direcionando para a obtenÃ§Ã£o da condiÃ§Ã£o de pagamento (`condicaoPagamento`).
2. **Get Records**: Busca o registro de `CondicaoPagamento__c` pelo `recordId` passado como parÃ¢metro.
3. **DecisÃ£o - TipoCondicaoPagamento**: Verifica o tipo de condiÃ§Ã£o de pagamento com base no campo `FormaPagamento__r.DWCodigoTipoPgto__c`.
   - Se for "ConsÃ³rcio" (cÃ³digos 9 ou 10), direciona para a tela de condiÃ§Ã£o de pagamento de consÃ³rcio.
   - Se for "VeÃ­culo usado" (cÃ³digo 19), direciona para a tela de avaliaÃ§Ã£o de veÃ­culo usado.
   - Se for "Financeira direto agÃªncia" (cÃ³digo 21), direciona para a tela de financeira direta agÃªncia.
4. **Tela CondiÃ§Ã£o de Pagamento: ConsÃ³rcio** (`CondicaoPagamentoConsorcio`)
   - Permite ao usuÃ¡rio selecionar ou editar informaÃ§Ãµes de consÃ³rcio, como Cota, Grupo e Financeira.
   - ApÃ³s preencher, atualiza o registro de condiÃ§Ã£o de pagamento.
5. **Tela CondiÃ§Ã£o de Pagamento: Financeira Direto AgÃªncia** (`CondicaoPagamentoFinanceiraDiretoAgencia`)
   - Permite ao usuÃ¡rio selecionar a financeira relacionada.
   - ApÃ³s preencher, atualiza o registro de condiÃ§Ã£o de pagamento.
6. **Tela CondiÃ§Ã£o de Pagamento: VeÃ­culo Usado** (`CondicaoPagamentoVeiculoUsado`)
   - Realiza uma avaliaÃ§Ã£o de placa via subfluxo (`DW_Subflow_AvaliarPorPlaca`).
   - Exibe mensagem informando que a avaliaÃ§Ã£o serÃ¡ realizada apÃ³s a atualizaÃ§Ã£o da placa.
   - Permite ao usuÃ¡rio inserir a placa do veÃ­culo usado.
   - Se a avaliaÃ§Ã£o for bem-sucedida, preenche automaticamente os campos de valor e data de avaliaÃ§Ã£o.
   - ApÃ³s preencher, atualiza o registro de condiÃ§Ã£o de pagamento.
7. **DecisÃ£o - Avaliou?** (`Avaliou?`)
   - Verifica se a avaliaÃ§Ã£o do veÃ­culo foi bem-sucedida (`avaliarPlaca.IsSuccess`).
   - Se sim, direciona para a atribuiÃ§Ã£o dos dados de avaliaÃ§Ã£o.
   - Caso contrÃ¡rio, prossegue sem alteraÃ§Ã£o.
8. **AtualizaÃ§Ãµes de registros**:
   - `AtualizarConsorcio`: Atualiza o registro de condiÃ§Ã£o de pagamento com os dados do consÃ³rcio.
   - `AtualizarFinanceiraDiretoAgencia`: Atualiza a financeira direta agÃªncia.
   - `AtualizarVeiculoUsado`: Atualiza os dados do veÃ­culo usado apÃ³s avaliaÃ§Ã£o.
9. **Choice Sets DinÃ¢micos**:
   - `financeiraOpcoes` e `financeirasDisponiveis`: Listas de opÃ§Ãµes de financeiras filtradas por loja e status ativo, usadas em dropdowns nas telas.

VariÃ¡veis
- `recordId` (String, Input): ID do registro de `CondicaoPagamento__c` a ser processado.
- `dataAvaliacao` (Date): Data da avaliaÃ§Ã£o do veÃ­culo usado, calculada com base na avaliaÃ§Ã£o obtida.
- `valorAvaliacao` (Currency): Valor da avaliaÃ§Ã£o do veÃ­culo usado, atualizado automaticamente apÃ³s avaliaÃ§Ã£o.
- `avaliarPlaca.Results`: Objeto que armazena os resultados da avaliaÃ§Ã£o de placa, incluindo sucesso, mensagem, valor, data e modelo.

ConsideraÃ§Ãµes
- O fluxo Ã© iniciado com o ID do registro de condiÃ§Ã£o de pagamento.
- Utiliza subfluxos para avaliaÃ§Ãµes de veÃ­culos usados.
- AtualizaÃ§Ãµes de registros sÃ£o feitas automaticamente apÃ³s entrada de dados pelo usuÃ¡rio.
- As telas sÃ£o configuradas para permitir retorno, salvar e cancelar, garantindo flexibilidade na navegaÃ§Ã£o.
- As opÃ§Ãµes de financeiras sÃ£o carregadas dinamicamente com filtros especÃ­ficos.
- O fluxo Ã© compatÃ­vel com Lightning Experience e utiliza o modo `SystemModeWithoutSharing` para execuÃ§Ã£o sem restriÃ§Ãµes de compartilhamento.

Este fluxo Ã© uma peÃ§a central na automaÃ§Ã£o de validaÃ§Ã£o e coleta de dados de condiÃ§Ãµes de pagamento, facilitando a gestÃ£o de negociaÃ§Ãµes de veÃ­culos e financiamentos na plataforma Salesforce.

# Flow: DW - Event Scheduled - Manipular disponibilidade de usuÃ¡rio

## DescriÃ§Ã£o
O Flow `DW - Event Scheduled - Manipular disponibilidade de usuÃ¡rio` Ã© um Flow autolanÃ§ado (sem interface de usuÃ¡rio) que gerencia a disponibilidade do usuÃ¡rio com base nos eventos agendados. Ele verifica eventos relacionados ao proprietÃ¡rio do evento atual e atualiza o status de disponibilidade do usuÃ¡rio (indisponÃ­vel ou disponÃ­vel) de acordo com o inÃ­cio ou tÃ©rmino do evento.

## Tipo
- Autolaunched Flow (sem interface de usuÃ¡rio)

## Objetivo
- Monitorar eventos do objeto `Event` e, com base na sua criaÃ§Ã£o ou atualizaÃ§Ã£o, ajustar o campo personalizado `Indisponivel__c` no objeto `User`.
- Quando um evento inicia, o usuÃ¡rio Ã© marcado como indisponÃ­vel.
- Quando um evento termina, o usuÃ¡rio Ã© marcado como disponÃ­vel.
- AlÃ©m disso, verifica se hÃ¡ outros eventos em andamento para determinar se o usuÃ¡rio deve permanecer indisponÃ­vel.

## Etapas Principais

### 1. Disparo do Flow
- O Flow Ã© iniciado apÃ³s a criaÃ§Ã£o ou atualizaÃ§Ã£o de um registro `Event` que atenda ao filtro:
  - O proprietÃ¡rio do evento (`OwnerId`) deve comeÃ§ar com `'005'` (indicando um usuÃ¡rio).
  - O evento deve ser novo ou ter suas datas de controle (`DWDataInicioControle__c` ou `DWDataTerminoControle__c`) alteradas.

### 2. Agendamento de aÃ§Ãµes
- **ApÃ³s o inÃ­cio do evento** (`StartDateTime`):
  - O Flow agenda uma aÃ§Ã£o para 1 minuto apÃ³s o inÃ­cio do evento, que marcarÃ¡ o usuÃ¡rio como indisponÃ­vel (`Indisponivel__c = true`).
- **ApÃ³s o tÃ©rmino do evento** (`EndDateTime`):
  - O Flow agenda uma aÃ§Ã£o para 1 minuto apÃ³s o tÃ©rmino do evento, que verifica se hÃ¡ outros eventos em andamento e, se nÃ£o houver, marca o usuÃ¡rio como disponÃ­vel (`Indisponivel__c = false`).

### 3. VerificaÃ§Ã£o de outros eventos
- O Flow consulta eventos futuros do mesmo proprietÃ¡rio que ainda nÃ£o terminaram, excluindo o evento atual, para determinar se hÃ¡ outros eventos em andamento.
- Se encontrar outros eventos, o usuÃ¡rio permanece indisponÃ­vel; caso contrÃ¡rio, ele Ã© marcado como disponÃ­vel.

### 4. AtualizaÃ§Ãµes de registros
- **Marcar usuÃ¡rio como disponÃ­vel**:
  - Atualiza o campo `Indisponivel__c` para `false` no objeto `User`.
- **Marcar usuÃ¡rio como indisponÃ­vel**:
  - Atualiza o campo `Indisponivel__c` para `true` no objeto `User`.

## VariÃ¡veis
- `gerenteIds` (String, ColeÃ§Ã£o) â€” VariÃ¡vel nÃ£o utilizada explicitamente no fluxo exportado, possivelmente reservada para futuras expansÃµes ou lÃ³gica adicional.

## Detalhes TÃ©cnicos

### DecisÃ£o: EncontrouOutrosEvento
- Verifica se hÃ¡ outros eventos do mesmo proprietÃ¡rio que ainda estÃ£o em andamento.
- CondiÃ§Ã£o:
  - `ObterOutrosEventos` nÃ£o Ã© nulo (ou seja, hÃ¡ outros eventos em andamento).
- Se verdadeiro, direciona para marcar o usuÃ¡rio como indisponÃ­vel.
- Se falso, segue para marcar como disponÃ­vel.

### Consulta: ObterOutrosEventos
- Busca eventos do mesmo proprietÃ¡rio (`OwnerId`) que:
  - NÃ£o sejam o evento atual (`Id` diferente).
  - Tenham `StartDateTime` menor ou igual Ã  data/hora atual.
  - Tenham `EndDateTime` maior ou igual Ã  data/hora atual.
- Retorna o primeiro registro encontrado, se houver.

### AtualizaÃ§Ãµes de registros
- **Marcar usuÃ¡rio como disponÃ­vel (`MarcarUsuarioDisponivel`)**:
  - Atualiza o campo `Indisponivel__c` para `false` no usuÃ¡rio com `Id` igual a `OwnerId`.
- **Marcar usuÃ¡rio como indisponÃ­vel (`MarcarUsuarioIndisponivel`)**:
  - Atualiza o campo `Indisponivel__c` para `true` no usuÃ¡rio com `Id` igual a `OwnerId`.

### Disparo e agendamento
- O Flow Ã© disparado apÃ³s a criaÃ§Ã£o ou atualizaÃ§Ã£o de um evento, se o proprietÃ¡rio for um usuÃ¡rio.
- Utiliza caminhos agendados:
  - **ApÃ³s o inÃ­cio do evento**: agenda para 1 minuto apÃ³s `StartDateTime`.
  - **ApÃ³s o tÃ©rmino do evento**: agenda para 1 minuto apÃ³s `EndDateTime`.

## ConsideraÃ§Ãµes
- O Flow Ã© ativado apenas para eventos cujo proprietÃ¡rio seja um usuÃ¡rio (`LEFT({!$Record.OwnerId}, 3) = '005'`).
- As aÃ§Ãµes de agendamento garantem que a disponibilidade do usuÃ¡rio seja atualizada logo apÃ³s o inÃ­cio ou tÃ©rmino do evento.
- A lÃ³gica de verificaÃ§Ã£o de outros eventos garante que o usuÃ¡rio sÃ³ seja marcado como disponÃ­vel se nÃ£o houver eventos em andamento.

---

Este fluxo automatiza eficientemente a gestÃ£o de disponibilidade do usuÃ¡rio com base na sua agenda de eventos, garantindo que o status seja atualizado de forma precisa e oportuna.

Flow: DW_ScreenFlow_GerenciarFilas

DescriÃ§Ã£o
O Flow `DW_ScreenFlow_GerenciarFilas` Ã© responsÃ¡vel por gerenciar filas de usuÃ¡rios relacionadas a lojas, permitindo criar novas filas, atribuir membros Ã s filas existentes, selecionar lojas e objetos, alÃ©m de realizar verificaÃ§Ãµes de condiÃ§Ãµes especÃ­ficas ao longo do processo.

Tipo
- Autolaunched Flow (sem interface de usuÃ¡rio direta, embora contenha telas para interaÃ§Ã£o)

Objetivo
- Gerenciar filas de usuÃ¡rios vinculados Ã s lojas.
- Permitir a seleÃ§Ã£o de filas existentes ou criaÃ§Ã£o de novas filas.
- Atribuir membros Ã s filas, incluindo usuÃ¡rios e vendedores.
- Validar condiÃ§Ãµes relacionadas Ã s filas, membros e lojas.
- Executar operaÃ§Ãµes de criaÃ§Ã£o e exclusÃ£o de registros de membros de fila.

Etapas Principais
1. InÃ­cio do fluxo, que inicia verificando se hÃ¡ membros gerente associados ao usuÃ¡rio atual.
2. Obter registros de membros de fila, filas de loja, lojas, membros de gerente, membros vendedores, tipos de registros de loja, usuÃ¡rios membros da loja, e usuÃ¡rios jÃ¡ membros.
3. DecisÃµes para verificar se hÃ¡ filas existentes, membros na fila, membros de gerente, vendedores na loja, e se hÃ¡ membros para exclusÃ£o.
4. SeleÃ§Ã£o de fila e loja atravÃ©s de telas interativas.
5. CriaÃ§Ã£o de novas filas, se necessÃ¡rio, usando subfluxo `DW_ScreenFlow_CriarFila`.
6. AtribuiÃ§Ã£o de membros Ã s filas, incluindo usuÃ¡rios e vendedores.
7. ExclusÃ£o de membros existentes na fila, se necessÃ¡rio.
8. Encerramento do fluxo com mensagens de sucesso ou erro.

VariÃ¡veis
- `filaSelecionadaId` (String): ID da fila selecionada ou criada.
- `lojasIds` (String Collection): IDs das lojas envolvidas.
- `membrosFilaIds` (String Collection): IDs de usuÃ¡rios que jÃ¡ estÃ£o na fila.
- `membrosVendedoresLojaIds` (String Collection): IDs de vendedores associados Ã  loja.
- `novoMembroDraft` (GroupMember): Objeto para criar novos membros.
- `novosMembros` (GroupMember Collection): ColeÃ§Ã£o de novos membros a serem criados.
- `usuariosMembrosCol` (User Collection): UsuÃ¡rios que jÃ¡ sÃ£o membros.

DecisÃµes e LÃ³gicas
- Verifica se hÃ¡ fila selecionada (`TemFilaSelecionada`) e se ela existe (`TemFilaCriada`).
- Confirma se hÃ¡ membros na fila (`EncontrouMembros`) e se hÃ¡ membros para exclusÃ£o (`ExistemMembrosExclusao`).
- Verifica se hÃ¡ membros gerente (`EncontrouContasGerente`) e se hÃ¡ filas para a loja (`EncontrouFilasLoja`).
- Checa se hÃ¡ vendedores na loja (`EncontrouVendedoresLoja`) e se hÃ¡ usuÃ¡rios jÃ¡ membros (`EncontrouVendedoresLoja`).
- DecisÃµes para criar filas, selecionar lojas e objetos, ou exibir mensagens de erro caso nÃ£o sejam encontradas filas ou vendedores.

OperaÃ§Ãµes de Registro
- `CriarNovosMembro`: Cria novos registros de membros de fila.
- `ExcluirTodosMembrosAtuais`: Remove todos os membros atuais de uma fila especÃ­fica.
- `filaMembrosRecords`, `filasRecords`, `lojasRecords`, `membrosGerente`, `membrosVendedores`, `usuariosMembrosLoja`, `usuariosMembrosRecords`: OperaÃ§Ãµes de lookup para obter registros relacionados Ã s filas, lojas, membros e usuÃ¡rios.

Tela e Componentes
- `GerenciarFilasTela`: Tela principal para gerenciar filas, exibe usuÃ¡rios ativos, permite seleÃ§Ã£o de filas e lojas.
- `SelecionarFilaTela`: Tela para selecionar ou criar uma fila.
- `SelecionarLojaTela`: Tela para selecionar lojas.
- `SelecionarObjetoTela`: Tela para escolher o tipo de objeto (Lead ou Opportunity).
- Mensagens de erro: `MensagemNenhumaLojaTela` e `MensagemNenhumVendedorTela`.
- Tela de falha: `FalhaOperacaoTela`, exibindo mensagens de erro detalhadas.

Subfluxo
- `DW_ScreenFlow_CriarFila`: Subfluxo utilizado para criar uma nova fila, recebendo informaÃ§Ãµes da loja e do objeto, retornando o ID da fila criada.

EstÃ¡gios
- `SelecionarObjetoFase`: Fase inicial para selecionar o objeto.
- `SelecionarLojaFase`: Fase para selecionar a loja.
- `SelecionarFilaFase`: Fase para selecionar ou criar fila.
- `GerenciarFilaFase`: Fase final onde ocorre o gerenciamento efetivo da fila, incluindo atribuiÃ§Ã£o e exclusÃ£o de membros.

ConsideraÃ§Ãµes
- O fluxo Ã© altamente dependente de registros existentes e condiÃ§Ãµes especÃ­ficas.
- Deve ser utilizado em processos onde o gerenciamento de filas de usuÃ¡rios por loja Ã© necessÃ¡rio.
- Recomenda-se garantir que as variÃ¡veis de entrada estejam corretamente configuradas ao iniciar o fluxo.
- O fluxo possui etapas de validaÃ§Ã£o para evitar operaÃ§Ãµes invÃ¡lidas, como tentar gerenciar filas inexistentes ou sem membros.

Este fluxo oferece uma soluÃ§Ã£o completa para gerenciamento de filas de usuÃ¡rios vinculados a lojas, incluindo criaÃ§Ã£o, atribuiÃ§Ã£o, exclusÃ£o e validaÃ§Ãµes necessÃ¡rias para garantir integridade e consistÃªncia do processo.

# Flow: DW_User_AfterFlow_ManipularMembrosContaAtivacao

## DescriÃ§Ã£o
O Flow `DW_User_AfterFlow_ManipularMembrosContaAtivacao` Ã© um fluxo automatizado do tipo AutoLaunched que Ã© acionado apÃ³s a atualizaÃ§Ã£o de registros de usuÃ¡rio. Sua principal funÃ§Ã£o Ã© gerenciar a associaÃ§Ã£o de membros de equipe Ã s contas, incluindo a criaÃ§Ã£o e exclusÃ£o de membros de equipe de forma assÃ­ncrona, alÃ©m de verificar o status de ativaÃ§Ã£o do usuÃ¡rio e a existÃªncia de membros associados Ã  conta.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio)

## Objetivo
- Gerenciar membros de equipe de contas apÃ³s a atualizaÃ§Ã£o de registros de usuÃ¡rio.
- Criar ou deletar membros de equipe de contas de forma assÃ­ncrona.
- Verificar se o usuÃ¡rio estÃ¡ ativo e se hÃ¡ membros existentes na conta para realizar aÃ§Ãµes especÃ­ficas.

## Etapas Principais

### 1. Obter Conta Nova (`Obter nova loja`)
- Consulta uma conta com base no cÃ³digo da loja (`CodigoLoja__c`) do registro de usuÃ¡rio que disparou o fluxo.
- Busca o primeiro registro correspondente, ordenado por nome.

### 2. Obter Membro de Conta Nova (`Obter membro de conta nova`)
- Verifica se jÃ¡ existe um membro de conta associado ao usuÃ¡rio e Ã  nova loja.
- Filtra pelo `AccountId` da loja obtida e pelo `UserId` do usuÃ¡rio.
- Busca o primeiro registro correspondente.

### 3. Obter Membro de Conta para Apagar (`Obter membro de conta para apagar`)
- Verifica se hÃ¡ membros de equipe associados ao usuÃ¡rio que precisam ser removidos.
- Filtra pelo `UserId` do usuÃ¡rio.
- Busca todos os registros correspondentes.

### 4. DecisÃ£o: Encontrou membros para apagar?
- Verifica se hÃ¡ membros de conta existentes para remoÃ§Ã£o (`ObterMembroContaApagar` nÃ£o estÃ¡ vazio nem nulo).
- Se sim, chama a aÃ§Ã£o assÃ­ncrona para deletar esses membros (`DWDeleteATMInvocable`).

### 5. DecisÃ£o: Encontrou nova loja?
- Verifica se uma nova loja foi encontrada (`novaLoja` nÃ£o Ã© nula).
- Se sim, prossegue para manipular os membros da conta.

### 6. DecisÃ£o: Encontrou novo membro jÃ¡?
- Verifica se jÃ¡ existe um novo membro na conta (`novoMembroConta` nÃ£o Ã© nulo).
- Se sim, evita criar um novo membro, pois jÃ¡ existe.

### 7. DecisÃ£o: EstÃ¡ ativo?
- Verifica se o usuÃ¡rio estÃ¡ ativo (`$Record.IsActive`).
- Se sim, associa o usuÃ¡rio Ã  nova loja, criando um membro de equipe de conta assincrono (`DWCreateATMInvocable`).

## VariÃ¡veis
- `erro` (String): VariÃ¡vel para armazenar mensagens de erro ou status, nÃ£o utilizada explicitamente no fluxo exportado.
- `$Record` (registro de usuÃ¡rio): Registro de usuÃ¡rio que disparou o fluxo, utilizado para obter o `Id`, `IsActive`, `Profile.Name`, etc.
- `novaLoja` (Account): Conta relacionada Ã  loja, obtida pelo cÃ³digo da loja do usuÃ¡rio.
- `novoMembroConta` (AccountTeamMember): Membro de equipe de conta existente para o usuÃ¡rio e loja.
- `ObterMembroContaApagar` (List de AccountTeamMember): Lista de membros de equipe de conta a serem apagados.

## DecisÃµes e AÃ§Ãµes
- **DecisÃ£o "EncontrouMembrosApagar"**: Se hÃ¡ membros de equipe existentes, chama a aÃ§Ã£o assÃ­ncrona para deletÃ¡-los.
- **DecisÃ£o "EncontrouNovaLoja"**: Se uma nova loja foi encontrada, prossegue para verificar se hÃ¡ um membro jÃ¡ existente.
- **DecisÃ£o "EncontrouNovoMembroJa"**: Se jÃ¡ existe um membro na conta, evita criar outro.
- **DecisÃ£o "EstaAtivo"**: Se o usuÃ¡rio estÃ¡ ativo, cria um novo membro de equipe de conta assincrono.

## AÃ§Ãµes Apex Invocadas
- **`DWCreateATMInvocable`**: Invoca uma classe Apex para criar um membro de equipe de conta assincrono, passando `accountId`, `role` (padrÃ£o definido na fÃ³rmula), e `userId`.
- **`DWDeleteATMInvocable`**: Invoca uma classe Apex para deletar membros de equipe de conta assincrono, passando `userId` e sinalizando `isDelete` como verdadeiro.

## FÃ³rmulas
- **`papel`**: Define o papel do usuÃ¡rio na equipe de conta com base no perfil (`Gerente` ou `Vendedor`).

## Resumo
Este fluxo automatiza a gestÃ£o de membros de equipe de contas apÃ³s a atualizaÃ§Ã£o de usuÃ¡rios, garantindo que membros sejam criados ou removidos de forma assÃ­ncrona conforme o status do usuÃ¡rio e a existÃªncia de membros na conta. Ele Ã© acionado apÃ³s a alteraÃ§Ã£o de registros de usuÃ¡rio e realiza verificaÃ§Ãµes condicionais para evitar duplicidades e manter a consistÃªncia da associaÃ§Ã£o de membros Ã s contas.

---

Se precisar de detalhes adicionais ou de uma explicaÃ§Ã£o mais aprofundada de alguma parte especÃ­fica, estou Ã  disposiÃ§Ã£o!

# Flow: DW_Lead_before_update_Formata_placa

## DescriÃ§Ã£o
O Flow `DW_Lead_before_update_Formata_placa` Ã© responsÃ¡vel por validar e formatar automaticamente o campo de placa veicular (`DWPlaca__c`) no objeto Lead antes que o registro seja salvo. Ele garante que a placa esteja no padrÃ£o correto `ABC-1234`, formatando automaticamente se necessÃ¡rio, ou exibindo uma mensagem de erro caso o valor seja invÃ¡lido.

## Tipo
- AutoLaunched Flow (sem interface de usuÃ¡rio), acionado antes da atualizaÃ§Ã£o do registro (`RecordBeforeSave`).

## Objetivo
- Detectar alteraÃ§Ãµes no campo `DWPlaca__c`.
- Validar se a placa estÃ¡ no formato correto.
- Formatar automaticamente a placa para o padrÃ£o `ABC-1234`.
- Impedir a gravaÃ§Ã£o do registro e exibir mensagem de erro caso o formato seja invÃ¡lido.

## Como funciona
Este Flow Ã© acionado ao atualizar um registro Lead, especificamente quando o campo `DWPlaca__c` Ã© alterado e nÃ£o estÃ¡ vazio. Ele realiza as seguintes etapas principais:

### Etapas Principais

1. **InÃ­cio (`start`)**
   - O Flow Ã© disparado em registros do objeto Lead, no momento antes de salvar (`RecordBeforeSave`).
   - A condiÃ§Ã£o de disparo Ã© que o campo `DWPlaca__c` tenha sido alterado (`IsChanged`) e nÃ£o seja nulo (`IsNull`).

2. **DecisÃ£o (`digitacaValida`)**
   - Verifica se hÃ¡ erro na digitaÃ§Ã£o da placa, usando a fÃ³rmula `erroNoFormato`.
   - Se a placa estiver fora do padrÃ£o, o Flow direciona para uma aÃ§Ã£o de erro.

3. **AÃ§Ã£o de FormataÃ§Ã£o (`formata_placa`)**
   - Atribui Ã  variÃ¡vel `placaFormatada` a versÃ£o formatada da placa, usando uma fÃ³rmula que insere o hÃ­fen no local correto e mantÃ©m o padrÃ£o `ABC-1234`.
   - Se a placa estiver no formato correto, ela Ã© formatada automaticamente para o padrÃ£o esperado.

4. **DecisÃ£o (`digitacaValida`) - ContinuaÃ§Ã£o**
   - Se a fÃ³rmula `erroNoFormato` indicar erro (`true`), o Flow direciona para a mensagem de erro.

5. **Erro na DigitaÃ§Ã£o (`erro_na_digitacao`)**
   - Exibe uma mensagem de erro personalizada: "A placa deve conter 7 dÃ­gitos e seguir o padrÃ£o ABC-XX12."
   - O fluxo Ã© interrompido, impedindo a gravaÃ§Ã£o do registro com placa invÃ¡lida.

6. **AtualizaÃ§Ã£o do Registro**
   - Se a placa for vÃ¡lida, o campo `DWPlaca__c` Ã© atualizado com a versÃ£o formatada (`placaFormatada`).

## VariÃ¡veis
- **$Record.DWPlaca__c**: Campo de placa do Lead que estÃ¡ sendo avaliado.
- **erroNoFormato (Boolean)**: FÃ³rmula que verifica se a placa estÃ¡ fora do padrÃ£o esperado.
- **placaFormatada (String)**: FÃ³rmula que gera a versÃ£o formatada da placa no padrÃ£o `ABC-1234`.

## FÃ³rmulas principais

### `erroNoFormato`
Verifica se a placa, apÃ³s remover hÃ­fens e converter para maiÃºsculas, nÃ£o corresponde aos padrÃµes `ABC1234` ou `ABC-12A3`.

```plaintext
NOT(
  REGEX(
    SUBSTITUTE(UPPER({!$Record.DWPlaca__c}), "-", ""),
    "^[A-Z]{3}[0-9]{4}$|^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$"
  )
)
```

### `placaFormatada`
Formata a placa para o padrÃ£o `ABC-1234`, inserindo hÃ­fen na posiÃ§Ã£o correta, dependendo do formato original.

```plaintext
IF(
  REGEX(LEFT(SUBSTITUTE(UPPER({!$Record.DWPlaca__c}), "-", ""), 7), "^[A-Z]{3}[0-9]{4}$"),
  LEFT(SUBSTITUTE(UPPER({!$Record.DWPlaca__c}), "-", ""), 3) & "-" &
  MID(SUBSTITUTE(UPPER({!$Record.DWPlaca__c}), "-", ""), 4, 4),
  IF(
    REGEX(LEFT(SUBSTITUTE(UPPER({!$Record.DWPlaca__c}), "-", ""), 8), "^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$"),
    LEFT(SUBSTITUTE(UPPER({!$Record.DWPlaca__c}), "-", ""), 3) & "-" &
    MID(SUBSTITUTE(UPPER({!$Record.DWPlaca__c}), "-", ""), 4, 4),
    LEFT(SUBSTITUTE(UPPER({!$Record.DWPlaca__c}), "-", ""), 3) & "-" &
    MID(SUBSTITUTE(UPPER({!$Record.DWPlaca__c}), "-", ""), 4, 4)
  )
)
```

## ConsideraÃ§Ãµes
- O Flow Ã© acionado apenas quando o campo `DWPlaca__c` Ã© alterado e nÃ£o estÃ¡ vazio.
- Caso a placa nÃ£o esteja no padrÃ£o esperado, uma mensagem de erro personalizada Ã© exibida ao usuÃ¡rio.
- Se a placa estiver vÃ¡lida, ela Ã© automaticamente formatada para o padrÃ£o `ABC-1234`.
- Essa automaÃ§Ã£o ajuda a manter a consistÃªncia dos dados de placas veiculares no sistema.

---

Se precisar de mais detalhes ou ajustes, estou Ã  disposiÃ§Ã£o!

Flow: DWSubFlowGerarTermoPreContrato

DescriÃ§Ã£o
O Flow `DWSubFlowGerarTermoPreContrato` Ã© responsÃ¡vel por automatizar a geraÃ§Ã£o, validaÃ§Ã£o e navegaÃ§Ã£o relacionada ao Termo de PrÃ©-Contrato, incluindo a manipulaÃ§Ã£o de dados de oportunidade, conta, veÃ­culo, condiÃ§Ãµes de pagamento, serviÃ§os adicionais e informaÃ§Ãµes do cliente. Ele tambÃ©m gerencia a navegaÃ§Ã£o entre telas de ediÃ§Ã£o, validaÃ§Ãµes e a visualizaÃ§Ã£o do termo.

Tipo
- Subflow (executado dentro de outro Flow principal)

Objetivo
- Criar ou atualizar o termo de prÃ©-contrato
- Validar dados obrigatÃ³rios e condiÃ§Ãµes de pagamento
- Navegar entre telas de ediÃ§Ã£o, visualizaÃ§Ã£o e erro
- Associar informaÃ§Ãµes de loja, cliente, veÃ­culo e condiÃ§Ãµes de pagamento ao termo

Etapas Principais
1. InÃ­cio â€“ Encaminha para obter o tipo de registro do prÃ©-contrato.
2. Obter Dados â€“ Consultas diversas para obter informaÃ§Ãµes do oportunidade, conta, veÃ­culo, condiÃ§Ãµes de pagamento, serviÃ§os adicionais e o termo prÃ©-contrato existente.
3. DecisÃµes â€“ Verificam se o documento foi informado, se o veÃ­culo ativo foi encontrado, se o termo prÃ©-contrato jÃ¡ existe, se a conta estÃ¡ integrada, se os dados obrigatÃ³rios foram preenchidos, entre outras validaÃ§Ãµes.
4. AtribuiÃ§Ãµes â€“ Preenchimento de variÃ¡veis com dados do oportunidade, conta, veÃ­culo, condiÃ§Ãµes de pagamento, serviÃ§os adicionais, alÃ©m de definir o tipo de operaÃ§Ã£o (Criar ou Editar).
5. NavegaÃ§Ã£o â€“ Direciona para telas de ediÃ§Ã£o, erro, visualizaÃ§Ã£o do termo ou confirmaÃ§Ã£o de criaÃ§Ã£o.
6. CriaÃ§Ã£o/AtualizaÃ§Ã£o â€“ Cria ou atualiza registros de Termo, Conta, Estoque, Modelo, CondiÃ§Ãµes de Pagamento e ServiÃ§os adicionais.
7. FinalizaÃ§Ã£o â€“ Encerramento do fluxo apÃ³s a geraÃ§Ã£o do termo ou exibiÃ§Ã£o de erro.

VariÃ¡veis
- CondicaoPagamentoS (SObject) â€“ CondiÃ§Ãµes de pagamento relacionadas.
- CondicaoValida (Boolean) â€“ ValidaÃ§Ã£o das condiÃ§Ãµes de pagamento.
- ContaS (SObject, Input) â€“ Conta relacionada Ã  oportunidade.
- DWIdVeiculoProduto (String) â€“ ID do veÃ­culo do produto.
- DWTipoOperacao (String) â€“ Tipo de operaÃ§Ã£o ("Criar" ou "Editar").
- ListaCondicaoPagamentoS (ColeÃ§Ã£o de SObject) â€“ Lista de condiÃ§Ãµes de pagamento.
- ListaServicoAdicionalS (ColeÃ§Ã£o de SObject) â€“ ServiÃ§os adicionais selecionados.
- LojaS (SObject) â€“ Loja associada.
- OportunidadeS (SObject, Input) â€“ Oportunidade atual.
- recordId (String, Input) â€“ ID do registro de oportunidade.
- ServicoAdicionalS (SObject) â€“ ServiÃ§o adicional.
- TermoS (SObject, Input) â€“ Termo de prÃ©-contrato.
- ValidandoDadosPreenchidos (Boolean) â€“ Flag para validaÃ§Ã£o de dados.
- VeiculoS (SObject, Input) â€“ VeÃ­culo associado.

Principais Componentes e Telas
- Telas de ediÃ§Ã£o de dados do cliente PF/PJ, veÃ­culo, estoque, modelo, condiÃ§Ãµes de pagamento, serviÃ§os adicionais, observaÃ§Ãµes, erro, e visualizaÃ§Ã£o do termo.
- Componentes de Lookup para obter informaÃ§Ãµes de veÃ­culos, conta, oportunidade, loja, termo prÃ©-contrato.
- Componentes de componentes customizados para navegaÃ§Ã£o, assinatura, e seleÃ§Ã£o de condiÃ§Ãµes de pagamento e serviÃ§os adicionais.
- AÃ§Ãµes de criaÃ§Ã£o, atualizaÃ§Ã£o e busca de registros (Create Record, Lookup, Update Record).

DecisÃµes
- Documento informado? â€“ Verifica se o campo de documento (CPF/CNPJ) estÃ¡ preenchido.
- Achou veÃ­culo ativo? â€“ Decide se hÃ¡ veÃ­culo ativo relacionado.
- Termo prÃ©-contrato jÃ¡ existe? â€“ Verifica se jÃ¡ hÃ¡ um termo criado para a oportunidade.
- Conta integrada? â€“ Checa se a conta estÃ¡ integrada com sucesso.
- Conta PF ou PJ? â€“ Determina se a conta Ã© pessoa fÃ­sica ou jurÃ­dica.
- Dados obrigatÃ³rios preenchidos? â€“ Valida se todos os campos essenciais estÃ£o preenchidos.
- CondiÃ§Ãµes de pagamento informadas? â€“ Verifica se hÃ¡ condiÃ§Ãµes de pagamento associadas.
- Tipo de operaÃ§Ã£o? â€“ Decide se o termo serÃ¡ criado ou atualizado.
- Tem serviÃ§o adicional? â€“ Verifica se hÃ¡ serviÃ§os adicionais para incluir.

Fluxo de NavegaÃ§Ã£o
- InÃ­cio direciona para obter o tipo de registro.
- ApÃ³s validaÃ§Ãµes, navega para telas de ediÃ§Ã£o ou erro.
- Ao criar ou atualizar o termo, navega para tela de visualizaÃ§Ã£o ou erro.
- Finaliza com a assinatura ou retorno Ã  tela anterior.

ConsideraÃ§Ãµes
- Este Flow Ã© utilizado como subfluxo, integrado a um fluxo principal.
- As aÃ§Ãµes de navegaÃ§Ã£o utilizam componentes de componente Lightning para direcionar o usuÃ¡rio.
- As validaÃ§Ãµes garantem que os dados obrigatÃ³rios estejam presentes antes de criar ou atualizar o termo.
- O fluxo Ã© compatÃ­vel com versÃ£o API 63.0 e utiliza componentes customizados para lookup, assinatura e condiÃ§Ãµes de pagamento.
- Ã‰ importante que os objetos e componentes utilizados estejam devidamente configurados na organizaÃ§Ã£o Salesforce.

ObservaÃ§Ã£o
O fluxo contÃ©m uma lÃ³gica complexa de validaÃ§Ãµes, atribuiÃ§Ãµes e navegaÃ§Ã£o, garantindo uma experiÃªncia guiada e segura na geraÃ§Ã£o do termo de prÃ©-contrato, alinhada Ã s regras de negÃ³cio especÃ­ficas.

# Flow: DWSubflowCriarTermoPagamentoTerceiros

## DescriÃ§Ã£o
O Flow `DWSubflowCriarTermoPagamentoTerceiros` Ã© responsÃ¡vel por criar e validar um termo de pagamento para terceiros, realizando diversas verificaÃ§Ãµes, atribuiÃ§Ãµes de valores, buscas e atualizaÃ§Ãµes de registros relacionados, alÃ©m de navegar entre telas de confirmaÃ§Ã£o e erro. Ele automatiza o processo de geraÃ§Ã£o de termos de pagamento, incluindo validaÃ§Ãµes de campos obrigatÃ³rios, verificaÃ§Ãµes de contas integradas, condiÃ§Ãµes de pagamento e vinculaÃ§Ã£o de terceiros pagadores.

## Tipo
- Flow de execuÃ§Ã£o automÃ¡tica (System Mode Without Sharing), sem interface de usuÃ¡rio direta, embora possua telas de exibiÃ§Ã£o de mensagens de erro ou confirmaÃ§Ã£o.

## Objetivo
- Criar um termo de pagamento de terceiros associado a uma oportunidade.
- Validar se todos os campos obrigatÃ³rios estÃ£o preenchidos.
- Verificar se a conta do cliente estÃ¡ integrada.
- Checar condiÃ§Ãµes de pagamento e vincular terceiros pagadores.
- Navegar para telas de confirmaÃ§Ã£o ou exibir mensagens de erro conforme o resultado do processamento.

## Etapas Principais

### 1. InÃ­cio
- O fluxo inicia navegando para obter o tipo de registro de pagamento de terceiros (`ObterTipoRegistroPagamentoTerceiros`) e, a partir daÃ­, executa toda a lÃ³gica de validaÃ§Ãµes, buscas, atribuiÃ§Ãµes e criaÃ§Ã£o de registros.

### 2. Obter Tipo de Registro de Pagamento de Terceiros
- Busca o registro do tipo de registro de pagamento de terceiros (`Termo_declaracao_pagamento_terceiros`) para definir o contexto do termo a ser criado.

### 3. VerificaÃ§Ãµes de ExistÃªncia do Termo
- Verifica se um termo de pagamento jÃ¡ existe (`TermoPreContratoCriado`) para a oportunidade.
- Se existir, atribui o termo criado e passa para ediÃ§Ã£o.
- Caso contrÃ¡rio, inicia o processo de criaÃ§Ã£o de um novo termo.

### 4. ValidaÃ§Ã£o de Campos ObrigatÃ³rios
- Valida se todos os campos obrigatÃ³rios do termo estÃ£o preenchidos (`DWTodosForamPreenchidos`).
- Se algum campo obrigatÃ³rio estiver vazio, exibe mensagem de erro na tela `DWInformacoesTermoPagamentoTerceiro`.

### 5. VerificaÃ§Ãµes de Conta do Cliente
- Checa se a conta do cliente estÃ¡ integrada (`DWStatusIntegracao__c = "Integrado com sucesso"`).
- Caso nÃ£o esteja, exibe mensagem de erro na tela `DWTelaErroContaNaoIntegrada`.

### 6. VerificaÃ§Ãµes de Estoque e Modelo
- Verifica se hÃ¡ estoque ou modelo informado na oportunidade.
- Caso contrÃ¡rio, exibe mensagem de erro na tela `DWTelaErroEstoqueModelo`.

### 7. ValidaÃ§Ã£o de CondiÃ§Ãµes de Pagamento
- Verifica se ao menos uma condiÃ§Ã£o de pagamento foi informada (`CondicaoValida`).
- Caso contrÃ¡rio, exibe mensagem de erro na tela `DWTextoObrigatorioCondicaoPagamento`.

### 8. VinculaÃ§Ã£o do Terceiro Pagador
- Busca ou cria o contato do terceiro pagador.
- Verifica se o contato jÃ¡ existe ou precisa ser criado.
- Vincula o terceiro pagador ao comprador e ao termo.

### 9. AtribuiÃ§Ã£o de Dados ao Termo
- Atribui diversos valores ao termo, como loja, comprador, valor, tipo de operaÃ§Ã£o, dados do veÃ­culo, entre outros.
- Atualiza o termo criado ou existente.

### 10. NavegaÃ§Ã£o para Tela de ConfirmaÃ§Ã£o
- ApÃ³s a criaÃ§Ã£o e validaÃ§Ãµes, navega para a tela `DWTelaErro` ou `TelaPreview` para assinatura ou confirmaÃ§Ã£o do termo.

## VariÃ¡veis
- `CondicaoPagamentoS` (SObject) â€” CondiÃ§Ã£o de pagamento relacionada.
- `CondicaoValida` (Boolean) â€” Indica se a condiÃ§Ã£o de pagamento foi validada.
- `ContaS` (SObject) â€” Conta do cliente.
- `ContatoS` (SObject) â€” Contato do terceiro pagador.
- `DWCamposNaoPreenchidos` (Boolean) â€” Flag para campos nÃ£o preenchidos.
- `DWIdSelecionado` (String) â€” ID do terceiro pagador selecionado.
- `DWIdVeiculoProduto` (String) â€” ID do veÃ­culo do produto.
- `DWTipoOperacao` (String) â€” Tipo de operaÃ§Ã£o ("Criar" ou "Editar").
- `DWValorCondicaoInformado` (Boolean) â€” Valor da condiÃ§Ã£o de pagamento informado.
- `DWVinculoSelecionado` (String) â€” VÃ­nculo do terceiro pagador.
- `ListaCondicaoPagamentoS` (SObject Collection) â€” Lista de condiÃ§Ãµes de pagamento.
- `ListaServicoAdicionalS` (SObject Collection) â€” Lista de serviÃ§os adicionais.
- `OportunidadeS` (SObject) â€” Oportunidade relacionada.
- `recordId` (String) â€” ID da oportunidade passada como parÃ¢metro.
- `ServicoAdicionalS` (SObject) â€” ServiÃ§os adicionais.
- `TermoS` (SObject) â€” Termo de pagamento.
- `VeiculoS` (SObject) â€” VeÃ­culo relacionado.

## Resumo das principais aÃ§Ãµes
- **Busca registros**: contatos relacionados, veÃ­culos, tipos de registro, termos existentes.
- **ValidaÃ§Ãµes**: campos obrigatÃ³rios, status de integraÃ§Ã£o, estoque/modelo, condiÃ§Ãµes de pagamento.
- **AtribuiÃ§Ãµes**: valores ao termo, vinculaÃ§Ã£o de terceiros, atualizaÃ§Ã£o de registros.
- **CriaÃ§Ã£o de registros**: termo, contato do pagador, relacionamento de oportunidade.
- **NavegaÃ§Ã£o**: para telas de erro ou confirmaÃ§Ã£o, incluindo assinatura digital.

## ConsideraÃ§Ãµes finais
Este Flow Ã© uma peÃ§a central na automaÃ§Ã£o do processo de geraÃ§Ã£o de termos de pagamento de terceiros, garantindo que todas as validaÃ§Ãµes necessÃ¡rias sejam feitas antes de criar ou editar registros, alÃ©m de facilitar a navegaÃ§Ã£o do usuÃ¡rio para assinatura ou resoluÃ§Ã£o de erros. Ã‰ importante garantir que todas as variÃ¡veis de entrada estejam corretamente passadas e que os registros relacionados estejam configurados corretamente no Salesforce.

# Flow: DWAccountSubflowCriarNovaConta

## DescriÃ§Ã£o
O Flow `DWAccountSubflowCriarNovaConta` Ã© uma automaÃ§Ã£o que gerencia a criaÃ§Ã£o de uma nova conta no Salesforce, incluindo a validaÃ§Ã£o de dados, atribuiÃ§Ã£o de valores e exibiÃ§Ã£o de mensagens de sucesso ou erro. Ele tambÃ©m realiza buscas de registros relacionados e define o tipo de registro (Pessoa FÃ­sica ou JurÃ­dica) com base nas escolhas do usuÃ¡rio.

## Tipo
- Autolaunched Flow (sem interface de usuÃ¡rio direta, embora contenha telas internas para coleta de informaÃ§Ãµes)

## Objetivo
- Criar uma nova conta no Salesforce com base nas informaÃ§Ãµes fornecidas pelo usuÃ¡rio.
- Validar documentos, contatos e endereÃ§o.
- Atribuir valores padrÃ£o e relacionados Ã  conta.
- Exibir mensagens de sucesso ou erro apÃ³s a tentativa de criaÃ§Ã£o.

## Etapas Principais

### 1. InÃ­cio
- O Flow inicia na posiÃ§Ã£o (50, 0) e direciona para a tela `Criar_conta`.

### 2. Tela `Criar_conta`
- Coleta informaÃ§Ãµes do usuÃ¡rio, incluindo tipo de pessoa (PF ou PJ), documentos, endereÃ§o, contatos e preferÃªncias de marketing.
- Permite navegaÃ§Ã£o de volta e finalizaÃ§Ã£o apÃ³s preenchimento.

### 3. AtribuiÃ§Ã£o de VariÃ¡veis de Tela
- `atribui_variaveis_de_tela`: Recebe os valores inseridos na tela e atribui Ã s variÃ¡veis internas do Flow, como `emailInformado`, `celular`, `cpfInformado`, etc.
- Inclui validaÃ§Ãµes de documentos e contatos, alÃ©m de definir o tipo de pessoa.

### 4. DecisÃ£o: `Email_telefone_ou_documento_em_branco`
- Verifica se os campos essenciais (email, telefone, documento) estÃ£o preenchidos e vÃ¡lidos.
- CondiÃ§Ãµes:
  - Se o tipo de pessoa for PF ou PJ e algum desses campos estiver vazio ou invÃ¡lido, direciona para a tela `informeLogradouro`.
  - Caso contrÃ¡rio, prossegue para criar a conta.

### 5. DecisÃ£o: `Preencheu_logradouro`
- Verifica se o endereÃ§o foi preenchido corretamente.
- Se o endereÃ§o foi preenchido, direciona para validaÃ§Ã£o do tipo de pessoa (`QualTipoPessoaDecisao`).
- Caso contrÃ¡rio, exibe mensagem de obrigatoriedade do logradouro.

### 6. DecisÃ£o: `QualTipoPessoaDecisao`
- Avalia se o tipo de pessoa Ã© PF ou PJ.
- Encaminha para atribuiÃ§Ã£o de campos especÃ­ficos de acordo com o tipo:
  - `Atribui_campos_PF` para Pessoa FÃ­sica.
  - `Atribui_campos_PJ` para Pessoa JurÃ­dica.

### 7. AtribuiÃ§Ã£o de Campos
- `Atribui_campos_PF`: Atribui valores especÃ­ficos para Pessoa FÃ­sica, incluindo documentos, nome, endereÃ§o, contatos, estado civil, sexo, etc.
- `Atribui_campos_PJ`: Atribui valores especÃ­ficos para Pessoa JurÃ­dica, incluindo documentos, nome, endereÃ§o, contatos, inscriÃ§Ã£o estadual, etc.

### 8. AtribuiÃ§Ã£o de Status e Tipo de Registro
- `atribuir_status_integracao`: Define o status da conta como "Pendente".
- `atribuir_tipo_registro`: Atribui o RecordTypeId correspondente ao tipo de cliente.

### 9. CriaÃ§Ã£o do Registro
- `inserir_conta`: Cria a conta no Salesforce com os valores atribuÃ­dos.
- Encaminha para a mensagem de sucesso `Conta_criada_com_sucesso` ou, em caso de falha, para `NaoFoiPossivelCriarConta`.

### 10. Mensagens de Resultado
- `Conta criada com sucesso`: Exibe toast de sucesso e armazena o ID da conta criada.
- `NÃ£o foi possÃ­vel criar a conta`: Exibe toast de erro com a mensagem de falha.

## VariÃ¡veis
| Nome | Tipo | DescriÃ§Ã£o |
| --- | --- | --- |
| `canaisComunicacaoInformado` | String Collection | Canais de comunicaÃ§Ã£o selecionados |
| `celularInformado` | String | NÃºmero de celular informado |
| `cepInformado` | String | CÃ³digo postal informado |
| `cidadeInformado` | String | Cidade informada |
| `cnpjInformado` | String | CNPJ informado |
| `contaS` | SObject (Account) | Objeto de conta em construÃ§Ã£o |
| `cpfInformado` | String | CPF informado |
| `dataFundacaoInformado` | Date | Data de fundaÃ§Ã£o (PJ) |
| `dataNascimentoInformado` | Date | Data de nascimento (PF) |
| `DesejaReceberAcoesMarketingInformado` | String | Deseja receber aÃ§Ãµes de marketing |
| `emailInformado` | String | E-mail informado |
| `estadoCivilInformado` | String | Estado civil (PF) |
| `estadoInformado` | String | Estado informado |
| `idContaCriada` | String | ID da conta criada (saÃ­da) |
| `inscricaoEstadualInformado` | String | InscriÃ§Ã£o estadual (PJ) |
| `nomeInformado` | String | Nome da conta |
| `orgaoEmissorInformado` | String | Ã“rgÃ£o emissor (PF) |
| `pepInformado` | String | PEP (Pessoa Exposta Politicamente) |
| `rgInformado` | String | RG (PF) |
| `ruaInformado` | String | Rua do endereÃ§o |
| `sexoInformado` | String | Sexo (PF) |
| `telefoneFixoInformado` | String | Telefone fixo (PJ) |
| `tipoLogradouroInformado` | String | Tipo de logradouro |
| `tipoPessoaInformado` | String | Tipo de pessoa (PF ou PJ) |

## ConsideraÃ§Ãµes
- O Flow Ã© altamente dependente das variÃ¡veis de entrada e das validaÃ§Ãµes de documentos e endereÃ§o.
- Utiliza componentes customizados para validaÃ§Ã£o de documentos e endereÃ§o.
- As aÃ§Ãµes de toast sÃ£o usadas para feedback ao usuÃ¡rio.
- O fluxo garante que o registro seja criado apenas apÃ³s validaÃ§Ãµes e atribuiÃ§Ãµes corretas.
- Ã‰ importante que os registros de tipo de cliente (`tipo_registro_cliente`) estejam configurados corretamente no Salesforce para que a atribuiÃ§Ã£o do RecordTypeId funcione.

---

Este documento fornece uma visÃ£o tÃ©cnica detalhada do Flow `DWAccountSubflowCriarNovaConta`, facilitando sua compreensÃ£o, manutenÃ§Ã£o e possÃ­veis melhorias.

# Flow: DWAccountScreenFlowCriarNovaConta

## DescriÃ§Ã£o
O fluxo `DWAccountScreenFlowCriarNovaConta` Ã© responsÃ¡vel por gerenciar o processo de criaÃ§Ã£o de uma nova conta no Salesforce, incluindo validaÃ§Ãµes, atribuiÃ§Ãµes de campos, verificaÃ§Ãµes de duplicidade de documentos e navegaÃ§Ã£o entre telas. Ele automatiza a entrada de dados, validaÃ§Ãµes especÃ­ficas, controle de permissÃµes e a criaÃ§Ã£o efetiva do registro de Conta, alÃ©m de fornecer feedback ao usuÃ¡rio via toast messages.

## Tipo
- Screen Flow (com interface de usuÃ¡rio)

## Objetivo
- Coletar informaÃ§Ãµes de uma nova conta (Pessoa FÃ­sica ou JurÃ­dica)
- Validar dados obrigatÃ³rios e formatos
- Verificar duplicidade de documentos
- Criar o registro de Conta
- Navegar para o registro criado ou exibir mensagens de erro/permissÃ£o

## Etapas Principais

### 1. InÃ­cio
- O fluxo inicia verificando se o usuÃ¡rio possui permissÃ£o para criar contas (`UsuarioPodeCriarConta`). Caso negativo, exibe uma tela de permissÃ£o negada.

### 2. DecisÃ£o: PermissÃ£o do usuÃ¡rio
- Se o usuÃ¡rio tem permissÃ£o, prossegue para a tela de entrada de dados (`Criar_conta`).

### 3. Tela de entrada de dados (`Criar_conta`)
- Coleta informaÃ§Ãµes essenciais, incluindo:
  - Tipo de pessoa (`QualTipoPessoa`): Pessoa FÃ­sica (PF) ou JurÃ­dica (PJ)
  - Dados pessoais e endereÃ§o
  - Contato (email, telefone, celular)
  - Documentos (CPF ou CNPJ)
  - Outros campos complementares
- Valida obrigatoriedade e formatos de documentos, endereÃ§os, datas, etc.
- Permite navegaÃ§Ã£o para informar logradouro se necessÃ¡rio.

### 4. DecisÃ£o: Preenchimento do logradouro
- Verifica se o logradouro foi preenchido corretamente (`Preencheu_logradouro`).
- Caso nÃ£o, direciona para a tela de informe de logradouro (`informeLogradouro`).

### 5. DecisÃ£o: Tipo de pessoa
- Avalia se o tipo de pessoa Ã© PF ou PJ (`QualTipoPessoaDecisao`).
- Atribui os campos especÃ­ficos de acordo com o tipo:
  - Pessoa FÃ­sica (`Atribui_campos_PF`)
  - Pessoa JurÃ­dica (`Atribui_campos_PJ`)

### 6. VerificaÃ§Ã£o de duplicidade de documento
- Realiza busca por documento duplicado (`Obter_documento_duplicado`).
- Se encontrado, exibe mensagem de conta duplicada (`Ja_existe_uma_conta_com_esse_documento`) e direciona para a tela de confirmaÃ§Ã£o ou correÃ§Ã£o.

### 7. ValidaÃ§Ã£o de campos obrigatÃ³rios e duplicidade
- Verifica se o email, telefone ou documento estÃ£o em branco ou invÃ¡lidos (`Email_telefone_ou_documento_em_branco`).
- Caso positivo, direciona para correÃ§Ã£o ou exibe mensagem.

### 8. AtribuiÃ§Ã£o de status e tipo de registro
- Define o status de integraÃ§Ã£o como "Pendente" (`atribuir_status_integracao`).
- Atribui o tipo de registro como Cliente (`atribuir_tipo_registro`).

### 9. CriaÃ§Ã£o do registro de Conta
- Executa a criaÃ§Ã£o do registro de Conta (`inserir_conta`).
- Se bem-sucedido, exibe toast de sucesso e navega para o registro criado (`navegar_para_a_conta`).
- Se ocorrer erro, exibe toast de erro com a mensagem de falha.

## VariÃ¡veis
- `bairroInformado` (String): Bairro do endereÃ§o
- `canaisComunicacaoInformado` (String, coleÃ§Ã£o): Canais de comunicaÃ§Ã£o selecionados
- `celularInformado` (String): NÃºmero de celular informado
- `cepInformado` (String): CÃ³digo postal
- `cidadeInformado` (String): Cidade
- `cnpjInformado` (String): CNPJ informado
- `complementoInformado` (String): Complemento do endereÃ§o
- `contaS` (Account): Objeto de Conta sendo criado
- `cpfInformado` (String): CPF informado
- `dataFundacaoInformado` (Date): Data de fundaÃ§Ã£o (para PJ)
- `dataNascimentoInformado` (Date): Data de nascimento (para PF)
- `DesejaReceberAcoesMarketingInformado` (String): Deseja receber aÃ§Ãµes de marketing
- `emailInformado` (String): Email informado
- `estadoCivilInformado` (String): Estado civil (PF)
- `estadoInformado` (String): Estado
- `inscricaoEstadualInformado` (String): InscriÃ§Ã£o estadual (PJ)
- `isRerenderCelular` (Boolean): Controle de re-renderizaÃ§Ã£o do campo celular
- `isRerenderTelefoneFixo` (Boolean): Controle de re-renderizaÃ§Ã£o do telefone fixo
- `nomeInformado` (String): Nome da conta
- `numeroInformado` (Number): NÃºmero do endereÃ§o
- `orgaoEmissorInformado` (String): Ã“rgÃ£o emissor do RG
- `paisInformado` (String): PaÃ­s
- `pepInformado` (String): PEP (Pessoa Politicamente Exposta)
- `rgInformado` (String): RG
- `ruaInformado` (String): Rua
- `sexoInformado` (String): Sexo
- `telefoneFixoInformado` (String): Telefone fixo
- `tipoLogradouroInformado` (String): Tipo de logradouro
- `tipoPessoaInformado` (String): Tipo de pessoa (PF/PJ)

## ConsideraÃ§Ãµes
- O fluxo realiza validaÃ§Ãµes especÃ­ficas de documentos, endereÃ§os e contatos.
- Utiliza toast messages para feedback ao usuÃ¡rio.
- A criaÃ§Ã£o do registro Ã© feita com `doesUpsert=true`, garantindo que o registro seja criado ou atualizado.
- O fluxo Ã© ativado em modo `SystemModeWithoutSharing`, permitindo operaÃ§Ãµes administrativas.
- As telas possuem validaÃ§Ãµes visuais e regras de visibilidade para campos especÃ­ficos de acordo com o tipo de pessoa.
- O fluxo deve ser iniciado por um usuÃ¡rio com permissÃµes adequadas, e a variÃ¡vel de entrada `contaS` Ã© populada com os dados coletados.

---

Este documento fornece uma visÃ£o geral tÃ©cnica e detalhada do fluxo `DWAccountScreenFlowCriarNovaConta`, facilitando sua compreensÃ£o, manutenÃ§Ã£o e possÃ­veis integraÃ§Ãµes futuras.

Flow: TermoScreenFlowGerarTermo

DescriÃ§Ã£o
O Flow `TermoScreenFlowGerarTermo` Ã© uma automaÃ§Ã£o de tela (Screen Flow) que gerencia o processo de geraÃ§Ã£o de termos relacionados a oportunidades no Salesforce. Ele orienta o usuÃ¡rio na seleÃ§Ã£o do tipo de termo a ser criado, verifica permissÃµes, obtÃ©m informaÃ§Ãµes relacionadas Ã  oportunidade e seus ativos, e direciona para subflows especÃ­ficos de criaÃ§Ã£o de termos conforme a escolha do usuÃ¡rio.

Tipo
- Screen Flow (com interface de usuÃ¡rio)

Objetivo
- Orientar o usuÃ¡rio na seleÃ§Ã£o do tipo de termo a ser criado para uma oportunidade.
- Validar permissÃµes do usuÃ¡rio para criar termos.
- Obter informaÃ§Ãµes necessÃ¡rias da oportunidade, conta e ativo.
- Encaminhar para subflows especÃ­ficos de criaÃ§Ã£o de termos (Teste Drive, PrÃ©-contrato, Pagamento, Entrega).

Etapas Principais
1. Obter oportunidade â€“ Recupera os detalhes da oportunidade com base no `recordId`.
2. Obter conta relacionada â€“ Recupera a conta associada Ã  oportunidade.
3. Obter conta da loja â€“ Recupera a conta da loja relacionada Ã  conta principal.
4. Obter ativo â€“ Verifica se hÃ¡ ativo relacionado Ã  oportunidade.
5. DecisÃ£o "Pode criar termo" â€“ Verifica se o usuÃ¡rio possui permissÃ£o para criar o termo, considerando perfil ou proprietÃ¡rio da oportunidade.
6. DecisÃ£o "Qual Ã© a fase da oportunidade?" â€“ Avalia o estÃ¡gio da oportunidade para determinar o fluxo de seleÃ§Ã£o de tipo de termo.
7. Tela de escolha do tipo de termo em atendimento, faturado, fluig, minuta ou vendido â€“ Apresenta opÃ§Ãµes de acordo com a estÃ¡gio da oportunidade.
8. DecisÃ£o "Tipo termo escolhido" â€“ Direciona para o subflow correspondente ao tipo de termo selecionado.
9. Subflows de criaÃ§Ã£o de termo â€“ Executam a geraÃ§Ã£o especÃ­fica do termo (Teste Drive, PrÃ©-contrato, Pagamento, Entrega).

VariÃ¡veis
- `recordId` (String, input) â€“ ID da oportunidade a ser processada.
- `TermoEscolhido` (String) â€“ Tipo de termo selecionado pelo usuÃ¡rio.
- `VariavelTermo` (SObject) â€“ Objeto do termo criado ou a ser criado.
- `NovaContaRelacionada` (SObject) â€“ VariÃ¡vel para manipulaÃ§Ã£o de contas relacionadas.
- `NovoContatoRelacionado` (SObject) â€“ VariÃ¡vel para contatos relacionados.

DecisÃµes
- **Pode_criar_termo**: Verifica se o usuÃ¡rio tem permissÃ£o para criar o termo, baseado no perfil ou proprietÃ¡rio da oportunidade. Permite avanÃ§ar para a fase de qualificaÃ§Ã£o ou exibe mensagem de permissÃ£o negada.
- **QualFaseOportunidade**: Avalia o estÃ¡gio da oportunidade (`Em atendimento`, `Vendido`, `Minuta`, `Fluig`, `Faturado`) e direciona para a tela de seleÃ§Ã£o de tipo de termo correspondente.
- **TipoTermoEscolhido**: ApÃ³s a seleÃ§Ã£o do tipo de termo, encaminha para o subflow adequado para criaÃ§Ã£o do termo (Teste Drive, PrÃ©-contrato, Pagamento, Entrega).

DecisÃµes de PermissÃ£o
- UsuÃ¡rios com perfil "Administrador do sistema" ou "Gerente" ou proprietÃ¡rio da oportunidade (com base no OwnerId) podem criar o termo.
- Outros perfis recebem mensagem de que nÃ£o tÃªm permissÃ£o para criar o termo.

Screens (Telas)
- **NenhumTermoSelecionado**: Mensagem de erro caso o usuÃ¡rio nÃ£o selecione um tipo de termo.
- **Sem_permiss_o_para_criar_termo**: Mensagem de aviso de permissÃ£o negada.
- **Tela_escolha_tipo_do_termo_em_atendimento**: OpÃ§Ãµes de tipos de termo para oportunidades em atendimento.
- **Tela_escolha_tipo_do_termo_faturado**: OpÃ§Ãµes de tipos de termo para oportunidades faturadas.
- **Tela_escolha_tipo_do_termo_fluig**: OpÃ§Ãµes de tipos de termo para oportunidades em estÃ¡gio Fluig.
- **Tela_escolha_tipo_do_termo_minuta**: OpÃ§Ãµes de tipos de termo para oportunidades em minuta.
- **Tela_escolha_tipo_do_termo_vendido**: OpÃ§Ãµes de tipos de termo para oportunidades vendidas.

Subflows
- **DW_Subflow_Criar_Termo_Test_Drive**: Cria termo de Test Drive.
- **DW_Subflow_Gerar_Termo_Pr_Contrato**: Cria termo de PrÃ©-contrato.
- **DW_Subflow_Criar_Termo_Pagamento_Terceiros**: Cria termo de pagamento de terceiros.
- **DW_Subflow_Criar_Termo_Entrega_Terceiros**: Cria termo de entrega para terceiros.

Formulas e Choice Sets
- FÃ³rmulas como `DataHoraAtual`, `DataHoraAtualMaisHora`, `formulaId15` (ID do usuÃ¡rio formatado).
- Choice Sets para seleÃ§Ã£o dinÃ¢mica de ativos, contas, e tipos de escolha de oportunidade.

ConsideraÃ§Ãµes
- O fluxo Ã© iniciado na etapa de obtenÃ§Ã£o da oportunidade (`ObterOportunidade`) e segue atÃ© a decisÃ£o de permissÃ£o.
- As telas de escolha apresentam opÃ§Ãµes especÃ­ficas de acordo com o estÃ¡gio da oportunidade.
- Os subflows sÃ£o utilizados para encapsular a lÃ³gica de criaÃ§Ã£o de diferentes tipos de termo, facilitando manutenÃ§Ã£o e reutilizaÃ§Ã£o.
- O fluxo Ã© configurado para rodar em modo `SystemModeWithoutSharing`, garantindo acesso completo aos registros necessÃ¡rios.

Este fluxo Ã© uma peÃ§a central na automaÃ§Ã£o de geraÃ§Ã£o de termos, garantindo controle de permissÃµes, direcionamento adequado e integraÃ§Ã£o com subflows especializados.

## <strong id="cls">cls</strong>

Classe: CommunitiesSelfRegConfirmController

DescriÃ§Ã£o
A classe `CommunitiesSelfRegConfirmController` Ã© um controlador Apex para uma pÃ¡gina de comunidade no Salesforce. Sua funÃ§Ã£o principal Ã© direcionar o usuÃ¡rio para a pÃ¡gina inicial adequada com base em suas credenciais ou na ausÃªncia delas. No momento, a classe possui um construtor padrÃ£o vazio e nÃ£o implementa outros mÃ©todos ou variÃ¡veis.

MÃ©todos
`CommunitiesSelfRegConfirmController()`
- Construtor padrÃ£o da classe.
- ResponsÃ¡vel por inicializar uma instÃ¢ncia da classe.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.

VariÃ¡veis
Nenhuma variÃ¡vel foi definida nesta classe atÃ© o momento.

Classe: CommunitiesLandingController

DescriÃ§Ã£o
A classe `CommunitiesLandingController` Ã© um controlador Apex para uma pÃ¡gina de comunidade no Salesforce. Ela Ã© responsÃ¡vel por direcionar o usuÃ¡rio para a pÃ¡gina inicial adequada com base em suas credenciais ou estado de login.

MÃ©todos
`forwardToStartPage()`
- FunÃ§Ã£o: Direciona o usuÃ¡rio para a pÃ¡gina inicial da comunidade.
- Retorno: `PageReference` â€” uma referÃªncia Ã  pÃ¡gina de destino, que neste caso Ã© a pÃ¡gina de landing de comunidades.

Construtor
`CommunitiesLandingController()`
- FunÃ§Ã£o: Construtor padrÃ£o da classe, que nÃ£o realiza nenhuma operaÃ§Ã£o adicional ao instanciar a classe.

VariÃ¡veis
NÃ£o hÃ¡ variÃ¡veis de instÃ¢ncia definidas nesta classe.

Classe: CommunitiesLoginControllerTest

DescriÃ§Ã£o
A classe `CommunitiesLoginControllerTest` Ã© uma classe de teste Apex que verifica a funcionalidade do controlador `CommunitiesLoginController`. Ela Ã© usada para garantir que o comportamento do controlador de login de comunidades esteja correto, especialmente na navegaÃ§Ã£o para a pÃ¡gina de autenticaÃ§Ã£o.

MÃ©todos
`testCommunitiesLoginController()`
- MÃ©todo de teste que verifica o mÃ©todo `forwardToAuthPage()` do controlador `CommunitiesLoginController`.
- ParÃ¢metros: Nenhum.
- AÃ§Ã£o: Cria uma instÃ¢ncia do controlador e verifica se o mÃ©todo `forwardToAuthPage()` retorna `null`.
- Retorno: Nenhum (Ã© um mÃ©todo de teste).

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia ou de classe Ã© definida nesta classe de teste. Ela apenas contÃ©m o mÃ©todo de teste.

Classe: DW_OperatorOptions

DescriÃ§Ã£o
A classe `DW_OperatorOptions` Ã© uma enumeraÃ§Ã£o que define duas opÃ§Ãµes de operadores lÃ³gicos que podem ser utilizados em operaÃ§Ãµes de filtragem ou condiÃ§Ãµes, especificamente "AND" e "OR". Essas opÃ§Ãµes sÃ£o usadas para determinar como mÃºltiplas condiÃ§Ãµes devem ser combinadas.

MÃ©todos
Nenhum mÃ©todo estÃ¡ definido nesta enumeraÃ§Ã£o, pois ela serve apenas como um conjunto de constantes.

VariÃ¡veis
`AND_OPERATOR`
- Tipo: `DW_OperatorOptions`
- DescriÃ§Ã£o: Representa a opÃ§Ã£o de operador lÃ³gico "E" (AND), que exige que todas as condiÃ§Ãµes sejam verdadeiras.

`OR_OPERATOR`
- Tipo: `DW_OperatorOptions`
- DescriÃ§Ã£o: Representa a opÃ§Ã£o de operador lÃ³gico "OU" (OR), que exige que pelo menos uma condiÃ§Ã£o seja verdadeira.

Classe: DW_FluigGetAccessTokenRequestTemplate

DescriÃ§Ã£o
A classe `DW_FluigGetAccessTokenRequestTemplate` Ã© uma estrutura de dados que representa uma solicitaÃ§Ã£o para obter um token de acesso no sistema Fluig. Ela armazena informaÃ§Ãµes necessÃ¡rias para autenticaÃ§Ã£o, como login e senha.

MÃ©todos
Nenhum mÃ©todo explÃ­cito estÃ¡ definido nesta classe. Ela funciona como um contÃªiner de dados, permitindo que seus atributos sejam acessados ou modificados diretamente.

VariÃ¡veis
`login`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o nome de usuÃ¡rio ou login utilizado para autenticaÃ§Ã£o no sistema Fluig.

`senha`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena a senha correspondente ao login, utilizada para autenticaÃ§Ã£o no sistema Fluig.

# Classe: CommunitiesLoginController

## DescriÃ§Ã£o
A classe `CommunitiesLoginController` Ã© um controlador Apex global utilizado em pÃ¡ginas de login de comunidades no Salesforce. Ela expÃµe funcionalidades relacionadas ao processo de autenticaÃ§Ã£o do usuÃ¡rio na comunidade, permitindo redirecionar o usuÃ¡rio para a pÃ¡gina de autenticaÃ§Ã£o apropriada com base nos parÃ¢metros recebidos na requisiÃ§Ã£o.

## MÃ©todos
`forwardToAuthPage()`
- PropÃ³sito: Redireciona o usuÃ¡rio para a pÃ¡gina de autenticaÃ§Ã£o, passando os parÃ¢metros de URL necessÃ¡rios.
- ParÃ¢metros: Nenhum explicitamente, mas acessa parÃ¢metros da requisiÃ§Ã£o HTTP (`startURL` e `display`).
- Retorno: `PageReference` â€” uma referÃªncia para a pÃ¡gina de autenticaÃ§Ã£o, que o Salesforce usarÃ¡ para redirecionar o usuÃ¡rio.

## VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia ou de classe Ã© definida nesta classe. Ela contÃ©m apenas mÃ©todos que operam com dados locais ou de requisiÃ§Ã£o.

Classe: DW_AvaliacaoGetAccessTokenReqTemplate

DescriÃ§Ã£o
A classe `DW_AvaliacaoGetAccessTokenReqTemplate` Ã© responsÃ¡vel por representar a estrutura de uma requisiÃ§Ã£o de obtenÃ§Ã£o de token de acesso na integraÃ§Ã£o, contendo informaÃ§Ãµes de login e senha.

MÃ©todos
Nenhum mÃ©todo estÃ¡ definido nesta classe. Ela funciona como um modelo de dados para transportar informaÃ§Ãµes.

VariÃ¡veis
`login`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o nome de usuÃ¡rio ou login utilizado na requisiÃ§Ã£o de autenticaÃ§Ã£o.

`password`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena a senha correspondente ao login, utilizada na requisiÃ§Ã£o de autenticaÃ§Ã£o.

Classe: DW_DocusignGetStatusSignResponseTemplate

DescriÃ§Ã£o
A classe `DW_DocusignGetStatusSignResponseTemplate` Ã© uma classe pÃºblica que armazena informaÃ§Ãµes relacionadas ao status de uma assinatura digital, provavelmente retornada por uma API de integraÃ§Ã£o com o DocuSign. Ela possui atributos que representam o identificador do envelope e seu status atual.

MÃ©todos
Nenhum mÃ©todo explÃ­cito estÃ¡ definido na classe. Ela funciona como um template de dados, contendo variÃ¡veis pÃºblicas acessÃ­veis para leitura e escrita.

VariÃ¡veis
`envelopeId`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o identificador Ãºnico do envelope de assinatura no sistema DocuSign. Este ID Ã© utilizado para rastrear ou consultar o status de um envelope especÃ­fico.

`status`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o status atual do envelope de assinatura. Pode indicar diferentes estados, como enviado, assinado, cancelado, etc., dependendo da resposta da API do DocuSign.

Classe: MicrobatchSelfRegControllerTest

DescriÃ§Ã£o
A classe `MicrobatchSelfRegControllerTest` Ã© uma classe de teste no Salesforce, utilizada para validar o comportamento da classe `MicrobatchSelfRegController`. Ela garante que o mÃ©todo `registerUser()` funciona corretamente sob certas condiÃ§Ãµes de teste.

MÃ©todos
`testMicrobatchSelfRegController()`
- MÃ©todo de teste que verifica o funcionamento do controlador `MicrobatchSelfRegController`.
- Atribui valores aos atributos do controlador, como `firstName`, `lastName`, `email` e `communityNickname`.
- Executa uma asserÃ§Ã£o para garantir que o mÃ©todo `registerUser()` retorna `null` quando a pÃ¡gina nÃ£o Ã© acessada como usuÃ¡rio convidado (guest user).
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.

VariÃ¡veis
NÃ£o hÃ¡ variÃ¡veis de instÃ¢ncia na classe de teste, apenas variÃ¡veis locais dentro do mÃ©todo de teste. Os atributos do controlador sÃ£o configurados diretamente no mÃ©todo de teste.

Classe: DW_IniciarFaturamentoResponseTemplate

DescriÃ§Ã£o
A classe `DW_IniciarFaturamentoResponseTemplate` Ã© um modelo (template) utilizado para armazenar a resposta recebida de uma integraÃ§Ã£o com o sistema de faturamento (Fluig). Essa resposta Ã© enviada ao Salesforce apÃ³s ele solicitar o inÃ­cio do faturamento de uma oportunidade, contendo informaÃ§Ãµes importantes como uma mensagem de retorno e um identificador da solicitaÃ§Ã£o.

MÃ©todos
Nenhum mÃ©todo explÃ­cito estÃ¡ definido nesta classe. Ela funciona como uma estrutura de dados para armazenar informaÃ§Ãµes recebidas da API.

VariÃ¡veis
`message`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena a mensagem retornada pela API de faturamento. Essa mensagem pode indicar sucesso, falhas ou fornecer instruÃ§Ãµes relacionadas Ã  operaÃ§Ã£o de faturamento.

`idSolicitacao`
- Tipo: `Integer`
- DescriÃ§Ã£o: Armazena o identificador Ãºnico da solicitaÃ§Ã£o gerada no sistema de faturamento. Este ID pode ser utilizado posteriormente para rastreamento, auditoria ou consultas relacionadas Ã  solicitaÃ§Ã£o de faturamento.

Classe: CommunitiesSelfRegConfirmControllerTest

DescriÃ§Ã£o
A classe `CommunitiesSelfRegConfirmControllerTest` Ã© uma classe de teste em Apex que verifica o funcionamento do controlador `CommunitiesSelfRegConfirmController`. Ela Ã© usada para garantir que o controlador se comporta corretamente em diferentes cenÃ¡rios, embora neste exemplo especÃ­fico, o mÃ©todo de teste apenas instancia o controlador sem realizar verificaÃ§Ãµes adicionais.

MÃ©todos
`testCommunitiesSelfRegConfirmController()`
- PropÃ³sito: Testar a criaÃ§Ã£o do controlador `CommunitiesSelfRegConfirmController`.
- AnotaÃ§Ãµes:
  - `@IsTest`: Indica que este mÃ©todo Ã© uma rotina de teste.
  - `SeeAllData=true`: Permite que o teste acesse todos os dados do Salesforce, incluindo dados existentes no ambiente de produÃ§Ã£o ou sandbox.
- AÃ§Ãµes:
  - Instancia um novo objeto do controlador `CommunitiesSelfRegConfirmController`.
- Retorno: Nenhum (Ã© um mÃ©todo de teste).

VariÃ¡veis
Nenhuma variÃ¡vel Ã© declarada nesta classe de teste. O mÃ©todo apenas cria uma instÃ¢ncia do controlador para verificar sua construÃ§Ã£o sem erros.

Classe: DW_CancelEnvDocusignRequestTemplate

DescriÃ§Ã£o
A classe `DW_CancelEnvDocusignRequestTemplate` Ã© uma estrutura de dados utilizada para representar uma solicitaÃ§Ã£o de cancelamento de um envelope do DocuSign. Ela armazena informaÃ§Ãµes essenciais necessÃ¡rias para realizar essa operaÃ§Ã£o, como o motivo do cancelamento e o identificador do envelope.

MÃ©todos
Nenhum mÃ©todo estÃ¡ definido nesta classe. Ela funciona como um container de dados, permitindo que seus atributos sejam acessados e modificados diretamente.

VariÃ¡veis
`Motivo`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o motivo pelo qual o envelope do DocuSign estÃ¡ sendo cancelado. Essa informaÃ§Ã£o Ã© importante para registrar o motivo do cancelamento.

`EnvelopeId`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o identificador Ãºnico do envelope do DocuSign que serÃ¡ cancelado. Este ID Ã© utilizado para identificar exatamente qual envelope deve ser cancelado.

Classe: DW_StartDocumentRequestTemplate

DescriÃ§Ã£o
A classe `DW_StartDocumentRequestTemplate` Ã© uma estrutura de dados que representa uma solicitaÃ§Ã£o para iniciar um documento, contendo informaÃ§Ãµes como o identificador do envelope, o tipo de objeto e o status da solicitaÃ§Ã£o.

MÃ©todos
NÃ£o hÃ¡ mÃ©todos definidos nesta classe. Ela funciona como um contÃªiner de dados, com classes internas para organizar as informaÃ§Ãµes relacionadas.

VariÃ¡veis
`data`
- Tipo: `cls_data`
- DescriÃ§Ã£o: Armazena os detalhes do pedido, incluindo o identificador, o tipo e atributos adicionais.

Classe Interna: `cls_data`
- VariÃ¡veis:
  - `id` (String): Representa o identificador do envelope, como `{{envelopeid}}`.
  - `type` (String): Especifica o tipo do objeto, por exemplo, `envelopes`.
  - `attributes` (`cls_attributes`): ContÃ©m atributos adicionais relacionados ao status.

Classe Interna: `cls_attributes`
- VariÃ¡veis:
  - `status` (String): Indica o status atual do pedido, como `running`.

Classe: DW_LeadServiceTest

DescriÃ§Ã£o
A classe `DW_LeadServiceTest` Ã© uma classe de testes unitÃ¡rios no Salesforce, responsÃ¡vel por validar o funcionamento da classe `DW_LeadService`. Ela garante que os mÃ©todos e funcionalidades relacionadas ao serviÃ§o de Lead estejam operando corretamente, atravÃ©s de testes automatizados.

MÃ©todos
`runSuccess()`
- Objetivo: Executar um teste de sucesso para verificar se a criaÃ§Ã£o de um registro de Lead funciona corretamente.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.
- Detalhes: Este mÃ©todo cria uma nova instÃ¢ncia de Lead, atribui valores aos seus campos, incluindo nome, sobrenome, documento, telefone, empresa, telefone mÃ³vel e email, e entÃ£o insere esse Lead na base de dados do Salesforce. Ã‰ utilizado para verificar se a operaÃ§Ã£o de inserÃ§Ã£o de Leads estÃ¡ funcionando como esperado.

VariÃ¡veis
Nenhuma variÃ¡vel de classe ou mÃ©todo Ã© definida nesta classe de testes. O mÃ©todo `runSuccess()` utiliza variÃ¡veis locais para criar e manipular o objeto Lead.

Classe: SiteRegisterControllerTest

DescriÃ§Ã£o
A classe `SiteRegisterControllerTest` Ã© uma classe de teste no Salesforce, criada para validar o funcionamento do controlador `SiteRegisterController`. Ela contÃ©m mÃ©todos que simulam cenÃ¡rios de registro de usuÃ¡rio, verificando se o mÃ©todo de registro se comporta corretamente sob diferentes condiÃ§Ãµes.

MÃ©todos
`testRegistration()`
- Objetivo: Testar o processo de registro de usuÃ¡rio usando o controlador `SiteRegisterController`.
- AnotaÃ§Ãµes: `@IsTest(SeeAllData=true)` indica que o mÃ©todo Ã© uma classe de teste e permite acesso a todos os dados do Salesforce.
- Funcionalidade:
  - Cria uma instÃ¢ncia do controlador `SiteRegisterController`.
  - Define valores para `username`, `email` e `communityNickname`.
  - Chama o mÃ©todo `registerUser()` e verifica se o retorno Ã© nulo, o que indica que o mÃ©todo nÃ£o realiza registro fora do modo de convidado.
  - Define uma senha e uma confirmaÃ§Ã£o de senha diferentes.
  - Chama novamente `registerUser()` e verifica se o retorno continua sendo nulo, testando o comportamento do mÃ©todo com senhas incompatÃ­veis.

VariÃ¡veis
NÃ£o hÃ¡ variÃ¡veis de classe explÃ­citas nesta classe de teste. Ela utiliza variÃ¡veis locais dentro do mÃ©todo `testRegistration()` para configurar o cenÃ¡rio de teste.

Classe: DW_AvaliacaoGetAccessTokenRespTemplate

DescriÃ§Ã£o
A classe `DW_AvaliacaoGetAccessTokenRespTemplate` Ã© responsÃ¡vel por representar a estrutura de resposta de uma integraÃ§Ã£o, especificamente relacionada Ã  obtenÃ§Ã£o de um token de acesso. Ela armazena informaÃ§Ãµes como o token e seu tempo de expiraÃ§Ã£o.

MÃ©todos
Nenhum mÃ©todo estÃ¡ definido nesta classe. Ela funciona como um modelo de dados, contendo variÃ¡veis pÃºblicas que podem ser acessadas e modificadas diretamente.

VariÃ¡veis
`token`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o token de acesso retornado pela integraÃ§Ã£o. Este token Ã© utilizado para autenticaÃ§Ã£o em chamadas subsequentes.

`expiration`
- Tipo: `Integer`
- DescriÃ§Ã£o: Armazena o tempo de expiraÃ§Ã£o do token, geralmente em segundos ou outro formato numÃ©rico, indicando quanto tempo o token serÃ¡ vÃ¡lido antes de precisar ser renovado.

Classe: DW_DocusignSendSignResponseTemplate

DescriÃ§Ã£o
A classe `DW_DocusignSendSignResponseTemplate` Ã© uma representaÃ§Ã£o de um modelo de resposta de assinatura do DocuSign, contendo informaÃ§Ãµes relacionadas ao envio e status de uma assinatura digital.

MÃ©todos
Nenhum mÃ©todo estÃ¡ definido nesta classe. Ela funciona como um container de dados, armazenando informaÃ§Ãµes retornadas de uma operaÃ§Ã£o de assinatura.

VariÃ¡veis
`id`
- Tipo: `String`
- DescriÃ§Ã£o: Identificador Ãºnico do registro ou resposta.

`cliente`
- Tipo: `String`
- DescriÃ§Ã£o: InformaÃ§Ã£o sobre o cliente associado Ã  assinatura.

`envelopeId`
- Tipo: `String`
- DescriÃ§Ã£o: Identificador do envelope do DocuSign, que agrupa os documentos enviados para assinatura.

`status`
- Tipo: `String`
- DescriÃ§Ã£o: Status atual do processo de assinatura (por exemplo, enviado, assinado, cancelado).

`dataCriacao`
- Tipo: `String`
- DescriÃ§Ã£o: Data e hora em que a resposta foi criada.

Classe: DW_DocusignMock

DescriÃ§Ã£o
A classe `DW_DocusignMock` Ã© responsÃ¡vel por simular respostas de chamadas HTTP (callouts) para a integraÃ§Ã£o com o serviÃ§o Docusign. Essa implementaÃ§Ã£o Ã© Ãºtil para testes, permitindo que o sistema simule diferentes respostas do serviÃ§o externo sem realizar chamadas reais.

MÃ©todos
`respond(HTTPRequest req)`
- MÃ©todo obrigatÃ³rio ao implementar a interface `HttpCalloutMock`.
- ParÃ¢metro: `req` (HTTPRequest): representa a requisiÃ§Ã£o HTTP feita pelo sistema.
- Retorno: `HTTPResponse`: uma resposta simulada que serÃ¡ retornada ao sistema durante os testes.
- Funcionalidade: verifica o endpoint da requisiÃ§Ã£o e retorna uma resposta JSON adequada, simulando diferentes cenÃ¡rios de integraÃ§Ã£o com o Docusign, como envio de envelope, obtenÃ§Ã£o de status, cancelamento, autenticaÃ§Ã£o, entre outros.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia Ã© definida nesta classe. Ela apenas implementa o mÃ©todo `respond` para retornar respostas simuladas.

Classe: Pricebook2UtilTest

DescriÃ§Ã£o
A classe `Pricebook2UtilTest` Ã© uma classe de teste no Salesforce, utilizada para validar o funcionamento de mÃ©todos relacionados Ã  manipulaÃ§Ã£o de Pricebooks (listas de preÃ§os) no sistema. Ela garante que o mÃ©todo que recupera o ID do Pricebook padrÃ£o estÃ¡ funcionando corretamente.

MÃ©todos
`getStandardPricebook2IdTest()`
- PropÃ³sito: Testar se o mÃ©todo `Pricebook2Util.getStandardPricebook2Id()` retorna um valor nÃ£o nulo, ou seja, um ID vÃ¡lido do Pricebook padrÃ£o.
- Tipo: `static void`
- Detalhes: Este mÃ©todo de teste verifica se o mÃ©todo de utilidade consegue obter o ID do Pricebook padrÃ£o e lanÃ§a uma falha se o resultado for nulo, indicando que o mÃ©todo nÃ£o estÃ¡ funcionando como esperado.

VariÃ¡veis
NÃ£o hÃ¡ variÃ¡veis declaradas nesta classe de teste. Ela contÃ©m apenas um mÃ©todo de teste estÃ¡tico.

Classe: DW_GetAvaliacaoIntegrableTest

DescriÃ§Ã£o
A classe `DW_GetAvaliacaoIntegrableTest` Ã© uma classe de testes unitÃ¡rios no Salesforce, responsÃ¡vel por validar o funcionamento da classe `DW_GetAvaliacaoIntegrable`. Ela garante que os mÃ©todos da classe principal funcionem corretamente, simulando chamadas de API e verificando o comportamento esperado.

MÃ©todos
`testCallIntegrationSuccess()`
- Testa o sucesso na chamada de integraÃ§Ã£o com a API.
- Cria credenciais simuladas e insere no banco de dados.
- Mocka respostas de autenticaÃ§Ã£o (token) e avaliaÃ§Ã£o da API.
- Executa o mÃ©todo `callIntegration` da classe principal.
- Verifica se a resposta obtida nÃ£o Ã© nula e se o valor da avaliaÃ§Ã£o estÃ¡ correto.

`testMissingTokenThrowsError()`
- Testa o comportamento quando o token de autenticaÃ§Ã£o estÃ¡ ausente.
- Mocka uma resposta de autenticaÃ§Ã£o sem token vÃ¡lido.
- Executa o mÃ©todo `callIntegration`.
- Verifica se uma exceÃ§Ã£o Ã© lanÃ§ada com a mensagem adequada, indicando que o token Ã© obrigatÃ³rio.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia Ã© definida nesta classe de testes, pois ela contÃ©m apenas mÃ©todos de teste estÃ¡ticos.

Classe: DW_OpportunityAdditionalServiceDTO

DescriÃ§Ã£o
A classe `DW_OpportunityAdditionalServiceDTO` Ã© um Objeto de TransferÃªncia de Dados (DTO) utilizado em fluxos no Salesforce. Ela serve como um "envelope" para transportar informaÃ§Ãµes especÃ­ficas relacionadas a um serviÃ§o adicional de uma oportunidade, especialmente o seu identificador (Id). Essa estrutura facilita a passagem de parÃ¢metros entre automaÃ§Ãµes, classes Apex e componentes Lightning de forma organizada e estruturada.

MÃ©todos
NÃ£o hÃ¡ mÃ©todos explÃ­citos nesta classe. Ela funciona como um container de variÃ¡veis que podem ser acessadas e modificadas conforme necessÃ¡rio.

VariÃ¡veis
`serviceId`
- Tipo: `Id`
- DescriÃ§Ã£o: Armazena o identificador Ãºnico do serviÃ§o adicional relacionado Ã  oportunidade. Este campo Ã© utilizado para referenciar ou processar o serviÃ§o especÃ­fico.
- AnotaÃ§Ãµes:
  - `@InvocableVariable`: Permite que o campo seja utilizado e preenchido dentro de fluxos (Flows) no Salesforce, facilitando a automaÃ§Ã£o de processos.
  - `@AuraEnabled`: Permite que o campo seja acessado por componentes Lightning, como LWC ou Aura, possibilitando integraÃ§Ã£o com interfaces de usuÃ¡rio modernas.

Classe: DW_DynamicQueryController

DescriÃ§Ã£o
A classe `DW_DynamicQueryController` Ã© uma classe Apex pÃºblica que permite a execuÃ§Ã£o de consultas dinÃ¢micas no Salesforce. Ela fornece um mÃ©todo para recuperar registros de qualquer objeto Salesforce com base em campos e condiÃ§Ãµes especificadas pelo usuÃ¡rio.

MÃ©todos
`getRecords(String objectName, String fields, String whereClause)`
- DescriÃ§Ã£o: Executa uma consulta SOQL dinÃ¢mica para buscar registros de um objeto Salesforce especÃ­fico.
- ParÃ¢metros:
  - `objectName` (String): nome do objeto Salesforce do qual os registros serÃ£o buscados.
  - `fields` (String): lista de campos a serem retornados na consulta, separados por vÃ­rgulas.
  - `whereClause` (String): condiÃ§Ã£o de filtro para a consulta, opcional.
- Retorno: Uma lista de registros do tipo `SObject`, contendo os registros que atendem aos critÃ©rios da consulta.
- Funcionalidade tÃ©cnica: ConstrÃ³i uma consulta SOQL com base nos parÃ¢metros fornecidos e executa usando `Database.query()`. Se ocorrer algum erro, lanÃ§a uma exceÃ§Ã£o controlada com a mensagem de erro.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia ou de classe Ã© definida nesta classe, pois ela possui apenas um mÃ©todo estÃ¡tico para execuÃ§Ã£o de consultas dinÃ¢micas.

Classe: DW_GetMidiaController

DescriÃ§Ã£o
A classe `DW_GetMidiaController` Ã© uma classe Apex pÃºblica que nÃ£o compartilha regras de seguranÃ§a especÃ­ficas e fornece uma funcionalidade para recuperar registros de mÃ­dia associados a uma loja especÃ­fica no Salesforce.

MÃ©todos
`getMidias(Id lojaId)`
- MÃ©todo estÃ¡tico e acessÃ­vel via Lightning Aura devido Ã  anotaÃ§Ã£o `@AuraEnabled`.
- ParÃ¢metro: `lojaId` (Id): o identificador da loja para a qual se deseja obter as mÃ­dias.
- Retorna: Uma lista de registros do objeto `Midia__c`.
- Funcionalidade: Executa uma consulta SOQL para buscar todas as mÃ­dias ativas (`DWAtivo__c = true`) relacionadas Ã  loja cujo ID foi passado, retornando os campos `Id`, `Name` e `DWLoja__c`.

VariÃ¡veis
NÃ£o hÃ¡ variÃ¡veis de classe declaradas explicitamente nesta classe, pois ela possui apenas um mÃ©todo estÃ¡tico que realiza uma consulta direta.

Classe: ChangePasswordController

DescriÃ§Ã£o
A classe `ChangePasswordController` Ã© um controlador Apex utilizado em uma pÃ¡gina do Salesforce para gerenciar a funcionalidade de troca de senha de um usuÃ¡rio. Ela expÃµe variÃ¡veis para capturar as senhas antiga, nova e a confirmaÃ§Ã£o da nova senha, alÃ©m de fornecer um mÃ©todo para realizar a troca de senha.

MÃ©todos
`changePassword()`
- ResponsÃ¡vel por iniciar o processo de troca de senha.
- Retorna um objeto `PageReference` que direciona para a pÃ¡gina de troca de senha do site apÃ³s a tentativa de alteraÃ§Ã£o.
- Utiliza o mÃ©todo `Site.changePassword()` passando a nova senha, a confirmaÃ§Ã£o da nova senha e a senha antiga para realizar a troca.

Construtor
`ChangePasswordController()`
- Construtor padrÃ£o vazio.
- NÃ£o realiza nenhuma operaÃ§Ã£o adicional na inicializaÃ§Ã£o da classe.

VariÃ¡veis
`oldPassword`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena a senha antiga do usuÃ¡rio, que serÃ¡ usada para autenticar a troca de senha.

`newPassword`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena a nova senha desejada pelo usuÃ¡rio.

`verifyNewPassword`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena a confirmaÃ§Ã£o da nova senha, para garantir que o usuÃ¡rio digitou a senha corretamente duas vezes.

Classe: Pricebook2Util

DescriÃ§Ã£o
A classe `Pricebook2Util` Ã© uma utilidade que fornece mÃ©todos relacionados Ã  manipulaÃ§Ã£o e recuperaÃ§Ã£o de informaÃ§Ãµes sobre as listas de preÃ§os padrÃ£o no Salesforce. Ela Ã© especialmente Ãºtil para operaÃ§Ãµes que envolvem a identificaÃ§Ã£o do Pricebook padrÃ£o, seja em ambientes de teste ou em produÃ§Ã£o.

MÃ©todos
`getStandardPricebook2Id()`
- Objetivo: Retorna uma lista contendo o ID do Pricebook padrÃ£o (Standard Pricebook).
- Funcionamento:
  - Se o mÃ©todo estiver sendo executado dentro de um teste (ambiente de testes automatizados), ele retorna o ID do Pricebook padrÃ£o de teste usando `Test.getStandardPricebookId()`.
  - Se estiver em um ambiente normal, realiza uma consulta SOQL para obter o ID do Pricebook padrÃ£o (onde `isStandard` Ã© verdadeiro).
- Retorno: Uma lista de IDs (`List<Id>`) contendo o ID do Pricebook padrÃ£o.

VariÃ¡veis
NÃ£o hÃ¡ variÃ¡veis de instÃ¢ncia nesta classe, pois ela consiste apenas em um mÃ©todo estÃ¡tico.

Classe: AccountController

DescriÃ§Ã£o
A classe `AccountController` Ã© uma classe Apex pÃºblica que utiliza o compartilhamento de registros do Salesforce. Ela fornece um mÃ©todo estÃ¡tico acessÃ­vel ao Lightning Components para recuperar uma lista de contas com informaÃ§Ãµes especÃ­ficas, incluindo oportunidades relacionadas, com base em critÃ©rios de receita anual.

MÃ©todos
`getAccountIntelligenceList()`
- DescriÃ§Ã£o: Retorna uma lista de contas com detalhes especÃ­ficos, incluindo oportunidades relacionadas que ainda nÃ£o estÃ£o em estÃ¡gios de fechamento final ("Fechada/Ganha" ou "Fechada/Perdida").
- AnotaÃ§Ãµes:
  - `@AuraEnabled(cacheable=true)`: Permite que o mÃ©todo seja acessado por componentes Lightning e indica que os resultados podem ser armazenados em cache para melhorar o desempenho.
- ParÃ¢metros: Nenhum.
- Retorno: Uma `List<Account>` contendo atÃ© 50 registros de contas ordenadas pela receita anual em ordem decrescente, incluindo uma subconsulta de oportunidades relacionadas que ainda nÃ£o estÃ£o em estÃ¡gios finais.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia ou de classe foi definida nesta classe, pois ela contÃ©m apenas um mÃ©todo estÃ¡tico para consulta de dados.

Classe: DW_FieldCollector

DescriÃ§Ã£o
A classe `DW_FieldCollector` Ã© responsÃ¡vel por coletar os nomes dos campos de um objeto do Salesforce, excluindo alguns campos especÃ­ficos. Ela fornece mÃ©todos para obter esses nomes em formato de lista ou como uma string Ãºnica separada por vÃ­rgulas.

MÃ©todos
`collect(String sobj)`
- DescriÃ§Ã£o: Coleta os nomes de todos os campos de um objeto Salesforce especificado, excluindo alguns campos padrÃ£o especÃ­ficos.
- ParÃ¢metro: `sobj` (String): o nome do objeto do Salesforce do qual os campos serÃ£o coletados.
- Retorno: `List<String>`: uma lista contendo os nomes dos campos do objeto, excluindo os campos padrÃ£o especificados.

`collectStr(String sobj)`
- DescriÃ§Ã£o: Coleta os nomes dos campos do objeto e os retorna como uma Ãºnica string, onde os nomes sÃ£o separados por vÃ­rgulas.
- ParÃ¢metro: `sobj` (String): o nome do objeto do Salesforce.
- Retorno: `String`: uma string contendo os nomes dos campos separados por vÃ­rgulas.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia Ã© definida nesta classe, pois ela utiliza mÃ©todos estÃ¡ticos para realizar suas operaÃ§Ãµes.

Classe: DW_Exception

DescriÃ§Ã£o
A classe `DW_Exception` Ã© uma classe personalizada de exceÃ§Ã£o em Apex, que herda da classe padrÃ£o `Exception`. Ela foi criada para representar exceÃ§Ãµes especÃ­ficas relacionadas ao contexto de dados ou operaÃ§Ãµes de um sistema, permitindo um tratamento de erros mais especÃ­fico e controlado.

MÃ©todos
Nenhum mÃ©todo adicional foi definido nesta classe. Ela herda todos os mÃ©todos da classe `Exception`, como `getMessage()` e `toString()`, que podem ser utilizados para obter informaÃ§Ãµes sobre a exceÃ§Ã£o lanÃ§ada.

VariÃ¡veis
Nenhuma variÃ¡vel adicional foi declarada nesta classe. Ela utiliza as variÃ¡veis herdadas da classe `Exception`.

DescriÃ§Ã£o TÃ©cnica e Leiga
- TÃ©cnica: A `DW_Exception` Ã© uma classe de exceÃ§Ã£o personalizada que estende a classe padrÃ£o de erros do Apex. Ela permite que desenvolvedores criem erros especÃ­ficos para seu sistema, facilitando a identificaÃ§Ã£o e o tratamento de problemas relacionados a operaÃ§Ãµes de dados ou lÃ³gica de negÃ³cio.
- Leiga: Ã‰ como uma mensagem de erro personalizada que vocÃª pode criar para entender melhor o que deu errado em uma operaÃ§Ã£o no sistema, tornando o diagnÃ³stico mais fÃ¡cil e organizado.

Classe: DWSubflowLaucherTest

DescriÃ§Ã£o
A classe `DWSubflowLaucherTest` Ã© uma classe de teste no Salesforce, utilizada para validar o funcionamento do componente `DWSubflowLaucher`. Ela garante que o mÃ©todo de lanÃ§amento de fluxos (subflows) funciona corretamente ao criar uma entrada de teste e invocar o mÃ©todo de lanÃ§amento.

MÃ©todos
`launchSubflowTest()`
- MÃ©todo de teste que verifica a funcionalidade de lanÃ§amento de um subfluxo.
- ParÃ¢metros: Nenhum.
- AÃ§Ãµes realizadas:
  - Cria uma nova instÃ¢ncia de `DWSubflowLaucher.Input`.
  - Cria uma instÃ¢ncia de `DWSubflowLaucher.Input` com o nome do fluxo (`flowApiName`) e o ID do usuÃ¡rio atual.
  - Cria uma lista de entradas de `DWSubflowLaucher.Input`.
  - Chama o mÃ©todo `launchSubflow()` do `DWSubflowLaucher`, passando a lista de entradas para iniciar o fluxo.

VariÃ¡veis
Nenhuma variÃ¡vel de classe Ã© definida nesta classe de teste. Ela utiliza variÃ¡veis locais dentro do mÃ©todo de teste para criar e passar os dados necessÃ¡rios.

Classe: DW_DocusignGetAccessTokenTemplate

DescriÃ§Ã£o
A classe `DW_DocusignGetAccessTokenTemplate` Ã© um Data Transfer Object (DTO), ou seja, uma estrutura de dados usada para transportar informaÃ§Ãµes. Ela foi criada para armazenar a resposta da API do DocuSign ao solicitar um token de acesso. Essa estrutura facilita o mapeamento dos dados retornados no formato JSON, permitindo que outras partes do sistema Salesforce possam utilizar esses dados de forma organizada e eficiente.

MÃ©todos
NÃ£o hÃ¡ mÃ©todos definidos nesta classe. Ela serve apenas como um recipiente de dados.

VariÃ¡veis
`token`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o token de acesso retornado pelo DocuSign. Este token Ã© utilizado para autenticar chamadas subsequentes Ã  API do DocuSign, garantindo que o usuÃ¡rio ou aplicaÃ§Ã£o tenha permissÃ£o para realizar operaÃ§Ãµes.

`expiresIn`
- Tipo: `Integer`
- DescriÃ§Ã£o: Indica o tempo de expiraÃ§Ã£o do token, em segundos. ApÃ³s esse perÃ­odo, o token nÃ£o serÃ¡ mais vÃ¡lido e serÃ¡ necessÃ¡rio solicitar um novo token para continuar acessando a API do DocuSign.

`name`
- Tipo: `String`
- DescriÃ§Ã£o: Nome do usuÃ¡rio ou da aplicaÃ§Ã£o associada ao token. Essa informaÃ§Ã£o Ã© Ãºtil para identificar qual entidade estÃ¡ utilizando o token, podendo variar dependendo da configuraÃ§Ã£o da conta no DocuSign.

Classe: DWValidationController

DescriÃ§Ã£o
A classe `DWValidationController` Ã© uma classe Apex que fornece dados de validaÃ§Ã£o utilizados em componentes Lightning, como Lightning Web Components (LWC) ou componentes Aura. Ela disponibiliza listas de e-mails bloqueados e DDDs vÃ¡lidos para serem utilizados na validaÃ§Ã£o de formulÃ¡rios, ajudando a melhorar a experiÃªncia do usuÃ¡rio ao prevenir a inserÃ§Ã£o de dados invÃ¡lidos.

MÃ©todos
`getBlockedEmails()`
- Retorna uma lista de e-mails que estÃ£o bloqueados no sistema.
- Como funciona: consulta registros do objeto customizado `BlackList_Email__c`, onde cada registro representa um e-mail bloqueado, e retorna esses e-mails em uma lista de strings.
- ParÃ¢metros: Nenhum.
- Retorno: `List<String>` contendo os e-mails bloqueados.

`getValidDDDs()`
- Retorna uma lista de DDDs vÃ¡lidos para cadastro de telefones.
- Como funciona: consulta registros do objeto customizado `DDDValido__c`, onde cada registro representa um DDD permitido, e retorna esses DDDs como uma lista de strings.
- ParÃ¢metros: Nenhum.
- Retorno: `List<String>` contendo os DDDs vÃ¡lidos.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia Ã© definida nesta classe, pois ela consiste apenas em mÃ©todos estÃ¡ticos que fornecem listas de validaÃ§Ã£o.

Classe: DW_IniciarFaturamentoTokenMock

DescriÃ§Ã£o
A classe `DW_IniciarFaturamentoTokenMock` Ã© uma classe de teste que simula uma resposta de uma requisiÃ§Ã£o HTTP para obter um token de autenticaÃ§Ã£o no ambiente de testes do Salesforce. Ela Ã© usada para evitar chamadas reais Ã  API do Fluig durante testes automatizados, garantindo que os testes sejam rÃ¡pidos, seguros e independentes de sistemas externos.

MÃ©todos
`respond(HttpRequest request)`
- Intercepta e responde Ã s chamadas HTTP feitas durante os testes.
- ParÃ¢metro: `request` (HttpRequest): representa a requisiÃ§Ã£o HTTP simulada enviada durante o teste.
- Retorno: `HttpResponse` simulado, contendo os dados esperados como se fossem retornados pela API real.
- Funcionalidade:
  - Se a URL do endpoint contiver termos relacionados Ã  autenticaÃ§Ã£o do Fluig, retorna uma resposta com um token fictÃ­cio.
  - Caso contrÃ¡rio, retorna uma resposta de erro 404 indicando que o endpoint nÃ£o Ã© reconhecido.

VariÃ¡veis
NÃ£o hÃ¡ variÃ¡veis de instÃ¢ncia na classe. Ela implementa apenas o mÃ©todo `respond` para simulaÃ§Ã£o de respostas HTTP durante os testes.

Classe: ForgotPasswordController

DescriÃ§Ã£o
A classe `ForgotPasswordController` Ã© um controlador Apex utilizado em uma pÃ¡gina do Salesforce para gerenciar a funcionalidade de recuperaÃ§Ã£o de senha do usuÃ¡rio. Ela expÃµe a operaÃ§Ã£o de solicitar uma redefiniÃ§Ã£o de senha atravÃ©s do site, facilitando o fluxo de recuperaÃ§Ã£o de senha para os usuÃ¡rios.

MÃ©todos
`ForgotPasswordController()`
- Construtor da classe.
- ParÃ¢metros: Nenhum.
- DescriÃ§Ã£o: Inicializa uma nova instÃ¢ncia do controlador. NÃ£o realiza nenhuma operaÃ§Ã£o adicional.

`forgotPassword()`
- Executa o processo de solicitaÃ§Ã£o de redefiniÃ§Ã£o de senha.
- ParÃ¢metros: Nenhum.
- Retorno: `PageReference` (referÃªncia para a pÃ¡gina de confirmaÃ§Ã£o de senha ou `null`).
- Funcionamento:
  - Chama o mÃ©todo `Site.forgotPassword` passando o nome de usuÃ¡rio fornecido, que tenta enviar um email de redefiniÃ§Ã£o de senha.
  - Se a operaÃ§Ã£o for bem-sucedida (`success` Ã© verdadeiro), redireciona o usuÃ¡rio para a pÃ¡gina de confirmaÃ§Ã£o (`ForgotPasswordConfirm`).
  - Caso contrÃ¡rio, retorna `null`, indicando que a operaÃ§Ã£o nÃ£o foi bem-sucedida.

VariÃ¡veis
`username`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o nome de usuÃ¡rio do usuÃ¡rio que solicitou a recuperaÃ§Ã£o de senha. Pode ser definido pelo usuÃ¡rio na interface do Salesforce.

Classe: SiteLoginController

DescriÃ§Ã£o
A classe `SiteLoginController` Ã© um controlador Apex global que gerencia a funcionalidade de login de usuÃ¡rios em um site Salesforce. Ela expÃµe mÃ©todos e propriedades que facilitam a autenticaÃ§Ã£o de usuÃ¡rios atravÃ©s de uma pÃ¡gina personalizada, permitindo que eles faÃ§am login usando um nome de usuÃ¡rio e senha fornecidos.

MÃ©todos
`login()`
- Executa o processo de login do usuÃ¡rio com base nas credenciais fornecidas.
- Funcionalidade: ObtÃ©m o parÃ¢metro `startURL` da requisiÃ§Ã£o atual para redirecionar o usuÃ¡rio apÃ³s o login e chama o mÃ©todo `Site.login` com o nome de usuÃ¡rio, senha e URL de inÃ­cio.
- Retorno: `PageReference` que direciona o usuÃ¡rio para a pÃ¡gina apropriada apÃ³s o login.

Construtor
`SiteLoginController()`
- Construtor padrÃ£o da classe.
- Funcionalidade: Inicializa uma nova instÃ¢ncia do controlador, embora nÃ£o execute nenhuma aÃ§Ã£o especÃ­fica.

VariÃ¡veis
`username`
- Tipo: `String`
- DescriÃ§Ã£o: Propriedade que armazena o nome de usuÃ¡rio fornecido pelo usuÃ¡rio para login.

`password`
- Tipo: `String`
- DescriÃ§Ã£o: Propriedade que armazena a senha do usuÃ¡rio para autenticaÃ§Ã£o.

ObservaÃ§Ã£o
- A classe Ã© marcada como `global` com `with sharing`, o que significa que ela pode ser acessada por qualquer outro cÃ³digo Apex ou Visualforce, respeitando as regras de compartilhamento de registros do Salesforce.

Classe: DW_FluigGetAccessTokenResponseTemplate

DescriÃ§Ã£o
A classe `DW_FluigGetAccessTokenResponseTemplate` Ã© uma estrutura de dados que representa a resposta de um serviÃ§o de autenticaÃ§Ã£o, contendo informaÃ§Ãµes relacionadas ao token de acesso, seu refresh, e as datas de criaÃ§Ã£o e expiraÃ§Ã£o do token.

MÃ©todos
Nenhum mÃ©todo estÃ¡ definido nesta classe. Ela serve como um container para armazenar informaÃ§Ãµes.

VariÃ¡veis
`token`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o token de acesso fornecido pelo serviÃ§o de autenticaÃ§Ã£o. Este token Ã© utilizado para autorizar requisiÃ§Ãµes subsequentes.

`refreshToken`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o token de atualizaÃ§Ã£o, que pode ser utilizado para obter um novo token de acesso quando o atual expirar.

`dataCriacao`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena a data e hora em que o token de acesso foi criado.

`dataExpiracao`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena a data e hora em que o token de acesso irÃ¡ expirar, ou seja, deixar de ser vÃ¡lido.

Classe: DW_ResponseHTTPTest

DescriÃ§Ã£o
A classe `DW_ResponseHTTPTest` Ã© uma classe de teste no Salesforce, usada para validar o comportamento de uma classe chamada `DW_ResponseHTTP`. Ela contÃ©m um mÃ©todo de teste que cria registros de conta e chama mÃ©todos de sucesso e erro dessa classe, simulando diferentes cenÃ¡rios de resposta HTTP.

MÃ©todos
`main()`
- MÃ©todo de teste estÃ¡tico que executa vÃ¡rias operaÃ§Ãµes para verificar o funcionamento da classe `DW_ResponseHTTP`.
- NÃ£o possui parÃ¢metros.
- Executa as seguintes aÃ§Ãµes:
  - Cria uma conta com o nome "Teste account" e a insere no banco de dados.
  - Chama mÃ©todos de sucesso (`success` e `successObj`) passando listas de registros de conta.
  - Chama mÃ©todos de erro (`error` e `errorObj`) passando listas de IDs de contas e, em alguns casos, um mapa de objetos, para simular respostas de erro.

VariÃ¡veis
NÃ£o hÃ¡ variÃ¡veis de classe ou de mÃ©todo nesta classe de teste. Ela apenas realiza operaÃ§Ãµes de criaÃ§Ã£o de registros e chamadas de mÃ©todos de teste.

---

Leiga:
Esta classe Ã© usada para testar se a classe `DW_ResponseHTTP` funciona corretamente. Ela cria uma conta de exemplo, depois simula respostas de sucesso e erro, para garantir que tudo estÃ¡ funcionando como esperado.

Classe: SiteLoginControllerTest

DescriÃ§Ã£o
A classe `SiteLoginControllerTest` Ã© uma classe de teste Apex que verifica a funcionalidade do controlador `SiteLoginController`, responsÃ¡vel por gerenciar o login de usuÃ¡rios atravÃ©s de uma pÃ¡gina do Salesforce. Essa classe de teste garante que o mÃ©todo de login funcione corretamente ao simular uma tentativa de login com credenciais especÃ­ficas.

MÃ©todos
`testSiteLoginController()`
- PropÃ³sito: Testa o mÃ©todo de login do controlador `SiteLoginController`.
- AÃ§Ãµes realizadas:
  - Instancia um novo objeto do controlador `SiteLoginController`.
  - Define o nome de usuÃ¡rio como `'test@salesforce.com'`.
  - Define a senha como `'123456'`.
  - Chama o mÃ©todo `login()` do controlador.
  - Verifica se o mÃ©todo `login()` retorna `null`, indicando que o login foi bem-sucedido ou que nÃ£o houve erro (dependendo da implementaÃ§Ã£o do mÃ©todo).
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum (Ã© um mÃ©todo de teste).

VariÃ¡veis
`controller`
- Tipo: `SiteLoginController`
- DescriÃ§Ã£o: InstÃ¢ncia do controlador de login que gerencia a autenticaÃ§Ã£o do usuÃ¡rio na pÃ¡gina.

`username`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o nome de usuÃ¡rio utilizado para login, neste caso `'test@salesforce.com'`.

`password`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena a senha do usuÃ¡rio, neste caso `'123456'`.

Classe: DW_IniciarFaturamentoMock

DescriÃ§Ã£o
A classe `DW_IniciarFaturamentoMock` Ã© uma classe de teste que simula (mock) a resposta de chamadas HTTP feitas durante os testes unitÃ¡rios no Salesforce. Ela Ã© usada especificamente para testar a integraÃ§Ã£o com o sistema de faturamento Fluig, sem realizar chamadas externas reais. Essa simulaÃ§Ã£o permite validar a lÃ³gica de integraÃ§Ã£o de forma segura e controlada, garantindo que o cÃ³digo reage corretamente Ã s respostas esperadas da API.

MÃ©todos
`respond(HttpRequest request)`
- ResponsÃ¡vel por interceptar chamadas HTTP durante os testes e retornar uma resposta simulada.
- ParÃ¢metro: `request` (HttpRequest) - Objeto que contÃ©m os detalhes da requisiÃ§Ã£o feita na chamada HTTP.
- Retorno: `HttpResponse` - Objeto que simula a resposta da API, incluindo o corpo, cabeÃ§alhos e cÃ³digo de status.
- Comportamento:
  - Se o endpoint da requisiÃ§Ã£o contiver URLs relacionadas ao sistema Fluig ou autenticaÃ§Ã£o, retorna uma resposta de sucesso (status 200) com um corpo JSON contendo um ID de solicitaÃ§Ã£o fictÃ­cio.
  - Caso contrÃ¡rio, retorna uma resposta de erro (status 404) indicando que o endpoint nÃ£o foi reconhecido.

VariÃ¡veis
NÃ£o hÃ¡ variÃ¡veis de instÃ¢ncia na classe. Ela possui apenas o mÃ©todo `respond`, que Ã© responsÃ¡vel por toda a lÃ³gica de simulaÃ§Ã£o da resposta HTTP.

Classe: DW_CTIParser

DescriÃ§Ã£o
A classe `DW_CTIParser` Ã© uma classe pÃºblica que serve como um contÃªiner para armazenar informaÃ§Ãµes relacionadas a um parser de CTI (Computer Telephony Integration). Ela armazena diversos atributos que representam detalhes de uma chamada ou registro associado ao sistema de telefonia.

MÃ©todos
Nenhum mÃ©todo estÃ¡ definido nesta classe. Ela funciona como uma estrutura de dados para guardar informaÃ§Ãµes.

VariÃ¡veis
`numberToDial`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o nÃºmero de telefone que deve ser discado.

`recordId`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o identificador Ãºnico do registro relacionado Ã  chamada ou evento.

`recordName`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o nome do registro associado Ã  chamada.

`objectType`
- Tipo: `String`
- DescriÃ§Ã£o: Indica o tipo de objeto relacionado ao registro (por exemplo, Lead, Contact, etc.).

`taskId`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o identificador da tarefa relacionada Ã  chamada ou evento.

`description`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena uma descriÃ§Ã£o adicional ou detalhes sobre a chamada ou registro.

Classe: DW_GetRecordCallBatchTest

DescriÃ§Ã£o
A classe `DW_GetRecordCallBatchTest` Ã© uma classe de testes unitÃ¡rios no Salesforce, responsÃ¡vel por verificar se a classe `DW_GetRecordCallBatch` funciona corretamente. Ela garante que os mÃ©todos de agendamento e cancelamento de tarefas em lote estejam operando como esperado.

MÃ©todos
`runEveryNMinutes()`
- Executa o mÃ©todo `runEveryNMinutes` da classe `DW_GetRecordCallBatch` com o parÃ¢metro 2, que provavelmente indica a frequÃªncia em minutos.
- Utiliza `Test.startTest()` e `Test.stopTest()` para delimitar o teste e garantir que o cÃ³digo seja executado em um contexto de teste.

`cancelThisSchedule()`
- Chama o mÃ©todo `cancelThisSchedule` da classe `DW_GetRecordCallBatch`, que provavelmente cancela tarefas agendadas.
- Envolve a execuÃ§Ã£o entre `Test.startTest()` e `Test.stopTest()` para controle do teste.

`scheduleThisClass()`
- Invoca o mÃ©todo `scheduleThisClass` da classe `DW_GetRecordCallBatch`, que provavelmente agenda a execuÃ§Ã£o de um batch ou tarefa.
- Passa `null` como parÃ¢metro, indicando que o mÃ©todo pode aceitar argumentos opcionais ou que o teste nÃ£o necessita de um parÃ¢metro especÃ­fico.
- Usa `Test.startTest()` e `Test.stopTest()` para delimitar o teste.

VariÃ¡veis
NÃ£o hÃ¡ variÃ¡veis de classe ou de instÃ¢ncia nesta classe de testes. Ela apenas contÃ©m mÃ©todos de teste estÃ¡ticos.

Classe: DW_QueryFactoryTest

DescriÃ§Ã£o
A classe `DW_QueryFactoryTest` Ã© uma classe de teste no Salesforce, criada para validar e demonstrar o funcionamento da classe `DW_QueryFactory`. Ela executa diversas consultas de teste usando diferentes condiÃ§Ãµes e combinaÃ§Ãµes para verificar se a consulta estÃ¡ retornando os resultados esperados.

MÃ©todos
`main()`
- MÃ©todo de teste principal que executa vÃ¡rias chamadas Ã  `DW_QueryFactory` para montar e executar consultas com diferentes condiÃ§Ãµes.
- NÃ£o recebe parÃ¢metros e nÃ£o retorna valor.
- Executa uma sÃ©rie de consultas de exemplo, configurando condiÃ§Ãµes simples, mÃºltiplas, compostas e com operadores lÃ³gicos diferentes, alÃ©m de limitar resultados e incluir relacionamentos.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia ou de classe Ã© definida nesta classe de teste, pois ela serve apenas para executar mÃ©todos de teste estÃ¡ticos.

---

ExplicaÃ§Ã£o TÃ©cnica e Leiga
- Esta classe Ã© usada para testar como a `DW_QueryFactory` constrÃ³i e executa consultas no Salesforce.
- Ela simula vÃ¡rias situaÃ§Ãµes, como filtrar oportunidades por estÃ¡gio, valor, data, e combinaÃ§Ãµes complexas dessas condiÃ§Ãµes.
- Cada trecho do mÃ©todo `main()` monta uma consulta diferente, usando mÃ©todos que definem condiÃ§Ãµes simples ou mÃºltiplas, alÃ©m de operadores lÃ³gicos como AND e OR.
- TambÃ©m demonstra como limitar o nÃºmero de resultados e incluir informaÃ§Ãµes relacionadas (relacionamentos).
- O objetivo Ã© garantir que a fÃ¡brica de consultas funcione corretamente em diferentes cenÃ¡rios, facilitando a recuperaÃ§Ã£o de dados de forma flexÃ­vel e eficiente.

Classe: ForgotPasswordControllerTest

DescriÃ§Ã£o
A classe `ForgotPasswordControllerTest` Ã© uma classe de teste em Apex que verifica a funcionalidade do controlador `ForgotPasswordController`. Ela Ã© usada para garantir que o mÃ©todo de solicitaÃ§Ã£o de redefiniÃ§Ã£o de senha funcione corretamente ao simular uma chamada de teste.

MÃ©todos
`testForgotPasswordController()`
- PropÃ³sito: Testa o mÃ©todo de redefiniÃ§Ã£o de senha do controlador `ForgotPasswordController`.
- AÃ§Ãµes:
  - Cria uma instÃ¢ncia do controlador `ForgotPasswordController`.
  - Define o atributo `username` com um endereÃ§o de email de teste (`test@salesforce.com`).
  - Executa o mÃ©todo `forgotPassword()` do controlador.
  - Verifica, atravÃ©s de uma asserÃ§Ã£o, que o mÃ©todo retorna `null`, indicando que a operaÃ§Ã£o foi executada sem erros ou retorno especÃ­fico.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum (Ã© um mÃ©todo de teste).

VariÃ¡veis
`controller`
- Tipo: `ForgotPasswordController`
- DescriÃ§Ã£o: InstÃ¢ncia do controlador responsÃ¡vel por gerenciar a funcionalidade de redefiniÃ§Ã£o de senha na pÃ¡gina de login. Ã‰ configurada com um nome de usuÃ¡rio de teste e usada para invocar o mÃ©todo de redefiniÃ§Ã£o de senha.

Notas adicionais
- A anotaÃ§Ã£o `@IsTest` indica que a classe Ã© uma classe de teste.
- A anotaÃ§Ã£o `@IsTest(SeeAllData=true)` permite que o teste acesse todos os dados do Salesforce, incluindo registros existentes, o que Ã© Ãºtil para testes que dependem de dados especÃ­ficos.

Classe: AccountControllerTest

DescriÃ§Ã£o
A classe `AccountControllerTest` Ã© uma classe de teste em Apex, utilizada para validar o funcionamento do controlador `AccountController`. Ela prepara dados de teste, como contas e oportunidades, e possui mÃ©todos para verificar se as funcionalidades do controlador estÃ£o corretas.

MÃ©todos
`setupData()`
- MÃ©todo anotado com `@testSetup`, responsÃ¡vel por criar dados de teste que serÃ£o utilizados nos testes.
- Cria 3 registros de contas (`Account`) com nomes sequenciais, setor de tecnologia, um tipo de registro especÃ­fico (`DWCliente`) e receitas anuais variando de 1 milhÃ£o a 3 milhÃµes.
- Cria oportunidades (`Opportunity`) relacionadas a cada conta criada, incluindo uma oportunidade aberta e uma fechada/ganha.
- Inserta as contas e oportunidades no banco de dados para uso nos testes.

`testGetAccountIntelligenceList()`
- MÃ©todo de teste que verifica a funcionalidade `getAccountIntelligenceList()` do controlador `AccountController`.
- Inicia a execuÃ§Ã£o do teste com `Test.startTest()` e finaliza com `Test.stopTest()`.
- Verifica se o resultado retornado nÃ£o Ã© nulo.
- Confirma que a lista retornada contÃ©m registros.
- Garante que a quantidade de registros na lista seja no mÃ¡ximo 50.
- Para cada conta na lista, verifica se a receita anual (`AnnualRevenue`) nÃ£o Ã© nula, assegurando que todas as contas retornadas possuem esse dado.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia ou de classe Ã© declarada nesta classe de teste. Ela utiliza variÃ¡veis locais dentro dos mÃ©todos para manipulaÃ§Ã£o dos dados de teste e resultados.

Classe: DWLeadConversionHandlerTest

DescriÃ§Ã£o
A classe `DWLeadConversionHandlerTest` Ã© uma classe de teste em Apex, usada para validar o funcionamento do mÃ©todo `executeConvertion` da classe `DWLeadConversionHandler`. Ela contÃ©m mÃ©todos de configuraÃ§Ã£o de dados de teste e mÃ©todos especÃ­ficos para testar diferentes cenÃ¡rios de conversÃ£o de leads no Salesforce.

MÃ©todos
`setupTestData()`
- MÃ©todo de configuraÃ§Ã£o de teste que cria e insere trÃªs registros de Lead com dados fictÃ­cios.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.
- Leiga: Prepara alguns contatos de teste para serem usados nos testes, garantindo que os testes tenham dados consistentes.

`testSuccessfulConversion()`
- Testa se o mÃ©todo `executeConvertion` converte corretamente os leads que ainda nÃ£o foram convertidos.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.
- Leiga: Verifica se o mÃ©todo consegue transformar os contatos em clientes, como esperado.

`testAlreadyConvertedLeads()`
- Testa o comportamento do mÃ©todo `executeConvertion` ao tentar converter leads que jÃ¡ foram convertidos.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.
- Leiga: Verifica se o mÃ©todo nÃ£o altera contatos que jÃ¡ sÃ£o clientes, garantindo que nÃ£o haja mudanÃ§as indevidas.

VariÃ¡veis
NÃ£o hÃ¡ variÃ¡veis de classe explÃ­citas nesta classe de teste, pois ela utiliza variÃ¡veis locais dentro dos mÃ©todos para manipular os registros de Lead durante os testes.

Classe: DW_OpportunityPaymentConditionDTO

DescriÃ§Ã£o
A classe `DW_OpportunityPaymentConditionDTO` Ã© um Data Transfer Object (DTO) utilizado em fluxos no Salesforce para transportar informaÃ§Ãµes relacionadas a uma CondiÃ§Ã£o de Pagamento vinculada a uma Oportunidade. Ela serve como uma estrutura de dados que facilita o envio de informaÃ§Ãµes de forma segura e padronizada entre componentes de fluxo e mÃ©todos Apex invocÃ¡veis.

MÃ©todos
NÃ£o hÃ¡ mÃ©todos explÃ­citos definidos nesta classe. Ela funciona como um container de variÃ¡veis pÃºblicas que podem ser acessadas e preenchidas por fluxos ou componentes Lightning.

VariÃ¡veis
`condicaoId`
- Tipo: `Id`
- DescriÃ§Ã£o: Armazena o identificador Ãºnico (Id) da CondiÃ§Ã£o de Pagamento. Este campo identifica de forma exclusiva qual condiÃ§Ã£o de pagamento estÃ¡ sendo referenciada ou processada.
- AnotaÃ§Ãµes:
  - `@InvocableVariable`: Permite que este campo seja utilizado dentro de um fluxo (Flow).
  - `@AuraEnabled`: Torna o campo acessÃ­vel a componentes Lightning, possibilitando sua utilizaÃ§Ã£o em interfaces modernas do Salesforce.

`valor`
- Tipo: `Decimal`
- DescriÃ§Ã£o: Representa o valor financeiro associado Ã  condiÃ§Ã£o de pagamento. Este campo armazena o valor monetÃ¡rio que serÃ¡ utilizado em processos de pagamento ou validaÃ§Ãµes.
- AnotaÃ§Ãµes:
  - `@InvocableVariable`: Permite que este campo seja utilizado dentro de um fluxo (Flow).
  - `@AuraEnabled`: Torna o campo acessÃ­vel a componentes Lightning, facilitando sua integraÃ§Ã£o com interfaces de usuÃ¡rio.

Classe: DW_MinutaControllerTest

DescriÃ§Ã£o
A classe `DW_MinutaControllerTest` Ã© uma classe de teste no Salesforce, responsÃ¡vel por validar o funcionamento do controlador `DW_MinutaController`. Ela realiza a criaÃ§Ã£o de diversos registros de teste, como contas, oportunidades, produtos, itens de oportunidade, ativos, formas de pagamento e condiÃ§Ãµes de pagamento, para garantir que o controlador opere corretamente em um cenÃ¡rio controlado.

MÃ©todos
`testConstructorAndMethods()`
- MÃ©todo de teste estÃ¡tico que verifica o comportamento do controlador `DW_MinutaController`.
- Executa uma sÃ©rie de operaÃ§Ãµes de criaÃ§Ã£o de registros de teste, incluindo contas, mÃ­dias, oportunidades, produtos, itens de oportunidade, ativos, formas de pagamento e condiÃ§Ãµes de pagamento.
- Dentro do mÃ©todo, inicia e para o teste usando `Test.startTest()` e `Test.stopTest()`.
- Cria uma instÃ¢ncia do controlador `DW_MinutaController` usando um `ApexPages.StandardController`.
- Realiza vÃ¡rias asserÃ§Ãµes para verificar se o controlador estÃ¡ carregando e processando os dados corretamente, como verificar se a reserva de alienaÃ§Ã£o foi identificada, se as condiÃ§Ãµes de carro usado foram carregadas, se a lista de cortesias e cobranÃ§as contÃ©m o nÃºmero esperado de itens, se os valores de serviÃ§os adicionais sÃ£o maiores que zero, e se os estilos de exibiÃ§Ã£o estÃ£o corretos.

VariÃ¡veis
Nenhuma variÃ¡vel de classe Ã© declarada nesta classe de teste. Ela utiliza variÃ¡veis locais para armazenar registros de teste e dados necessÃ¡rios para a execuÃ§Ã£o do mÃ©todo de teste.

Classe: CommunitiesLandingControllerTest

DescriÃ§Ã£o
A classe `CommunitiesLandingControllerTest` Ã© uma classe de teste em Apex que verifica o comportamento do controlador `CommunitiesLandingController`. Ela garante que o mÃ©todo que direciona para a pÃ¡gina inicial funcione corretamente, mesmo em um ambiente de teste.

MÃ©todos
`testCommunitiesLandingController()`
- Objetivo: Testar o mÃ©todo `forwardToStartPage()` do controlador `CommunitiesLandingController`.
- DescriÃ§Ã£o: Cria uma instÃ¢ncia do controlador, chama o mÃ©todo que deve redirecionar para a pÃ¡gina inicial e verifica se a URL retornada estÃ¡ vazia ou nula, garantindo que o redirecionamento funcione como esperado em um ambiente de teste.
- AnotaÃ§Ãµes:
  - `@IsTest`: Indica que Ã© um mÃ©todo de teste.
  - `(SeeAllData=true)`: Permite acesso a todos os dados do Salesforce durante o teste, incluindo dados de produÃ§Ã£o.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia ou de mÃ©todo Ã© declarada explicitamente nesta classe de teste. Ela utiliza variÃ¡veis locais dentro do mÃ©todo de teste para realizar as verificaÃ§Ãµes.

ObservaÃ§Ãµes
- A classe Ã© marcada com `@IsTest`, indicando que Ã© uma classe de teste e nÃ£o serÃ¡ considerada na implementaÃ§Ã£o de lÃ³gica de negÃ³cio.
- O mÃ©todo de teste verifica se o mÃ©todo de redirecionamento retorna uma URL vazia ou nula, o que Ã© esperado no contexto de teste, onde o redirecionamento pode nÃ£o ocorrer normalmente.

Classe: DWOpportunityDraftTypingControllerTest

DescriÃ§Ã£o
A classe `DWOpportunityDraftTypingControllerTest` Ã© uma classe de teste em Apex que verifica o funcionamento de mÃ©todos relacionados Ã  manipulaÃ§Ã£o de oportunidades e seus detalhes no Salesforce. Ela garante que os mÃ©todos do controlador `DWOpportunityDraftTypingController` funcionem corretamente ao criar ou atualizar registros, alÃ©m de testar o comportamento ao passar valores nulos.

MÃ©todos
`upsertOpportunity()`
- Testa o mÃ©todo `upsertOpportunity` do controlador, que realiza a inserÃ§Ã£o ou atualizaÃ§Ã£o de uma oportunidade.
- Executa o mÃ©todo com uma nova instÃ¢ncia de `Opportunity`.
- Tenta executar o mÃ©todo com um valor nulo para verificar o tratamento de exceÃ§Ãµes.

`upsertOpportunityLineItems()`
- Testa o mÃ©todo `upsertOpportunityLineItems`, responsÃ¡vel por inserir ou atualizar itens de linha de oportunidade.
- Executa o mÃ©todo com uma lista contendo um item de linha de oportunidade vazio.
- Tenta executar com valor nulo para verificar o tratamento de exceÃ§Ãµes.

`upsertCondicoesPagamento()`
- Testa o mÃ©todo `upsertCondicoesPagamento`, que manipula registros de condiÃ§Ãµes de pagamento relacionadas Ã  oportunidade.
- Executa o mÃ©todo com uma lista contendo uma condiÃ§Ã£o de pagamento vazia.
- Tenta executar com valor nulo para verificar o tratamento de exceÃ§Ãµes.

VariÃ¡veis
NÃ£o hÃ¡ variÃ¡veis de classe declaradas nesta classe de teste. Ela utiliza variÃ¡veis locais nos mÃ©todos de teste para criar objetos de teste e passar como argumentos aos mÃ©todos do controlador.

Classe: DW_DeployQueueTest

DescriÃ§Ã£o
A classe `DW_DeployQueueTest` Ã© uma classe de teste em Apex, utilizada para validar o funcionamento da classe `DW_DeployQueue`. Ela contÃ©m mÃ©todos de teste que simulam cenÃ¡rios de uso para garantir que a lÃ³gica de implantaÃ§Ã£o na fila de deploy funcione corretamente.

MÃ©todos
`testDeployQueueSingleInput()`
- Objetivo: Testar o mÃ©todo `deployQueue` da classe `DW_DeployQueue` com uma Ãºnica entrada de fila.
- Processo:
  - Cria uma lista de nomes de filas (`queueNames`) contendo dois nomes: 'Queue1' e 'Queue2'.
  - Define uma string de cÃ³digo de autenticaÃ§Ã£o (`authCode`) com valor de teste.
  - Define uma URL de ambiente (`envUrl`) de teste.
  - Cria uma instÃ¢ncia de `DW_DeployQueueInput` com os nomes das filas, cÃ³digo de autenticaÃ§Ã£o e URL.
  - Coloca essa instÃ¢ncia em uma lista de entradas (`inputs`).
  - Inicia o teste com `Test.startTest()`.
  - Chama o mÃ©todo `deployQueue` passando a lista de entradas.
  - Finaliza o teste com `Test.stopTest()`.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum (Ã© um mÃ©todo de teste).

VariÃ¡veis
NÃ£o hÃ¡ variÃ¡veis de classe ou de mÃ©todo expostas nesta classe de teste, pois ela Ã© utilizada apenas para validar o comportamento do mÃ©todo de implantaÃ§Ã£o.

Classe: DW_CancelEnvDocusignMock

DescriÃ§Ã£o
A classe `DW_CancelEnvDocusignMock` Ã© uma implementaÃ§Ã£o de um mock para chamadas HTTP, utilizada em testes no Salesforce. Ela simula respostas de um serviÃ§o externo, permitindo testar funcionalidades que dependem de chamadas a APIs sem realizar chamadas reais.

MÃ©todos
`respond(HttpRequest req)`
- ResponsÃ¡vel por interceptar e responder Ã s requisiÃ§Ãµes HTTP feitas durante os testes.
- ParÃ¢metro: `req` (HttpRequest): objeto que representa a requisiÃ§Ã£o HTTP enviada.
- Retorno: `HttpResponse` com a resposta simulada.

  - Se o endpoint da requisiÃ§Ã£o contÃ©m a palavra 'token':
    - Retorna uma resposta com um token de acesso falso (`"FAKE_ACCESS_TOKEN"`), indicando sucesso na obtenÃ§Ã£o do token.
    - CÃ³digo de status: 200 (OK).
    - CabeÃ§alho: `Content-Type` definido como `application/json`.
  
  - Se o endpoint da requisiÃ§Ã£o contÃ©m a palavra 'inativarEnvelope':
    - Retorna uma resposta indicando sucesso na inativaÃ§Ã£o de um envelope.
    - Corpo da resposta: JSON com `"status":"success"`.
    - CÃ³digo de status: 200 (OK).
    - CabeÃ§alho: `Content-Type` definido como `application/json`.
  
  - Para qualquer outro endpoint:
    - Retorna uma resposta de erro.
    - Corpo da resposta: JSON com `"error":"Unexpected endpoint"`.
    - CÃ³digo de status: 400 (Bad Request).

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia Ã© definida nesta classe. Ela apenas implementa o mÃ©todo `respond` para fornecer respostas mockadas.

Classe: DW_DocusignGetStatusDestRespTemplate

DescriÃ§Ã£o
A classe `DW_DocusignGetStatusDestRespTemplate` Ã© uma classe pÃºblica com compartilhamento, que serve como um modelo para representar a resposta de status de destinatÃ¡rios de um envelope do Docusign. Ela contÃ©m uma classe interna que define a estrutura de cada item de resposta, incluindo informaÃ§Ãµes como o ID do envelope, ID do destinatÃ¡rio, status e email.

MÃ©todos
Nenhum mÃ©todo estÃ¡ definido nesta classe. Ela funciona como um container de dados para estruturar a resposta de uma consulta ou operaÃ§Ã£o relacionada ao Docusign.

VariÃ¡veis
`ItemResponse`
- Tipo: Classe interna `ItemResponse`
- DescriÃ§Ã£o: Representa um item individual na resposta, contendo detalhes especÃ­ficos de cada destinatÃ¡rio do envelope.

`envelopeId`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o identificador Ãºnico do envelope do Docusign.

`destinatarioId`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o identificador do destinatÃ¡rio dentro do envelope.

`status`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o status atual do destinatÃ¡rio, como "Enviado", "Assinado", etc.

`email`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o endereÃ§o de email do destinatÃ¡rio.

ObservaÃ§Ã£o
A classe Ã© utilizada para estruturar dados de resposta, especialmente ao lidar com integraÃ§Ãµes com o Docusign, facilitando o processamento e manipulaÃ§Ã£o dessas informaÃ§Ãµes no Salesforce.

Classe: DW_IniciarFaturamentoResquestTemplate

DescriÃ§Ã£o
A classe `DW_IniciarFaturamentoResquestTemplate` Ã© um template utilizado para montar o corpo de uma requisiÃ§Ã£o enviada para uma API de faturamento. Essa requisiÃ§Ã£o inicia um processo de faturamento no sistema externo (Fluig) com base em uma oportunidade do Salesforce. A classe funciona como um objeto de transporte de dados (DTO), agrupando informaÃ§Ãµes necessÃ¡rias para esse processo.

MÃ©todos
Nenhum mÃ©todo estÃ¡ definido nesta classe. Ela funciona como um container de variÃ¡veis pÃºblicas que representam os dados enviados na requisiÃ§Ã£o.

VariÃ¡veis
`numeroPedido`
- Tipo: `Integer`
- DescriÃ§Ã£o: Armazena o nÃºmero do pedido vinculado Ã  oportunidade. Este nÃºmero Ã© utilizado pelo sistema externo para iniciar o faturamento.

`isPep`
- Tipo: `boolean`
- DescriÃ§Ã£o: Indica se a conta relacionada Ã  oportunidade Ã© do tipo PEP (Pessoa Exposta Politicamente). `true` significa que Ã© PEP, `false` indica que nÃ£o.

`idSalesForce`
- Tipo: `String`
- DescriÃ§Ã£o: Identificador da oportunidade no Salesforce. Serve como referÃªncia para relacionar a oportunidade com o processo de faturamento no sistema externo.

`emailResponsavel`
- Tipo: `String`
- DescriÃ§Ã£o: E-mail do responsÃ¡vel pela oportunidade. Pode ser utilizado para notificaÃ§Ãµes ou rastreamento no sistema de faturamento.

`codigoEmpresa`
- Tipo: `Integer`
- DescriÃ§Ã£o: CÃ³digo da empresa ou loja responsÃ¡vel pela venda. Identifica a filial correta no sistema de faturamento.

Classe: DW_CTIHelperTest

DescriÃ§Ã£o
A classe `DW_CTIHelperTest` Ã© uma classe de testes unitÃ¡rios no Salesforce, responsÃ¡vel por validar os mÃ©todos da classe `DW_CTIHelper`. Ela garante que as funcionalidades relacionadas Ã  recuperaÃ§Ã£o de telefones de contas, contatos e leads estejam funcionando corretamente.

MÃ©todos
`setupData()`
- MÃ©todo de configuraÃ§Ã£o de dados de teste.
- Cria e insere registros de Conta, Lead, Oportunidade e Contato no Salesforce para serem utilizados nos testes.
- NÃ£o possui retorno.

`testGetAccountPhone()`
- Testa o mÃ©todo `getAccountPhone` da classe `DW_CTIHelper`.
- Recupera uma Conta de teste, executa o mÃ©todo e verifica se o telefone retornado nÃ£o Ã© nulo.
- Garante que a funÃ§Ã£o retorna uma conta vÃ¡lida com telefone preenchido.

`testGetContactsPhone()`
- Testa o mÃ©todo `getContactsPhone` da classe `DW_CTIHelper`.
- Recupera uma Oportunidade de teste, executa o mÃ©todo para obter contatos relacionados e verifica se hÃ¡ exatamente um contato com telefone preenchido.
- Assegura que o mÃ©todo retorna contatos vÃ¡lidos com telefone.

`testGetLeadPhone()`
- Testa o mÃ©todo `getLeadPhone` da classe `DW_CTIHelper`.
- Recupera um Lead de teste, executa o mÃ©todo e verifica se o Lead retornado possui telefone preenchido.
- Garante que o mÃ©todo retorna um Lead vÃ¡lido com telefone.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia Ã© definida nesta classe de testes, pois ela utiliza registros de teste criados no mÃ©todo `setupData`.

Classe: DWOpportunityDraftViewControllerTest

DescriÃ§Ã£o
A classe `DWOpportunityDraftViewControllerTest` Ã© uma classe de testes automatizados no Salesforce, responsÃ¡vel por validar o comportamento do mÃ©todo `getDraftPDF` da classe `DWOpportunityDraftViewController`. Ela garante que o mÃ©todo funcione corretamente em diferentes cenÃ¡rios, como sucesso e erro.

MÃ©todos
`testGetDraftPDF_success()`
- Testa o cenÃ¡rio de sucesso ao gerar um PDF de uma oportunidade vÃ¡lida.
- Cria uma oportunidade de teste com nome, estÃ¡gio e data de fechamento.
- Chama o mÃ©todo `getDraftPDF` passando o ID da oportunidade criada.
- Verifica se o resultado nÃ£o Ã© nulo.
- Confirma se o nome do arquivo gerado estÃ¡ correto, combinando o nome da oportunidade com a extensÃ£o `.pdf`.
- Assegura que o conteÃºdo codificado em base64 do PDF nÃ£o estÃ¡ vazio, indicando que o PDF foi gerado corretamente.

`testGetDraftPDF_invalidId_shouldThrowException()`
- Testa o cenÃ¡rio onde um ID invÃ¡lido Ã© passado para o mÃ©todo `getDraftPDF`.
- Tenta gerar o PDF usando um ID que nÃ£o existe.
- Espera que uma exceÃ§Ã£o do tipo `AuraHandledException` seja lanÃ§ada.
- Verifica se a exceÃ§Ã£o foi realmente lanÃ§ada, garantindo que o mÃ©todo lida corretamente com IDs invÃ¡lidos.

VariÃ¡veis
`exceptionThrown`
- Tipo: `Boolean`
- DescriÃ§Ã£o: VariÃ¡vel de controle que indica se uma exceÃ§Ã£o foi lanÃ§ada durante o teste de erro. Ã‰ usada para validar se o mÃ©todo tratou corretamente a entrada invÃ¡lida.

Classe: ChangePasswordControllerTest

DescriÃ§Ã£o
A classe `ChangePasswordControllerTest` Ã© uma classe de teste no Salesforce, responsÃ¡vel por validar a funcionalidade do controlador de troca de senha, chamado `ChangePasswordController`. Essa classe garante que o mÃ©todo de troca de senha funcione corretamente ao simular uma troca de senha com dados de teste.

MÃ©todos
`testChangePasswordController()`
- MÃ©todo de teste que verifica a funcionalidade de troca de senha.
- Atribui valores de senha antiga, nova e confirmaÃ§Ã£o de nova senha ao controlador.
- Chama o mÃ©todo `changePassword()` do controlador para realizar a troca de senha.
- Usa `System.assertEquals()` para assegurar que o mÃ©todo retorna `null`, indicando sucesso na operaÃ§Ã£o.
- ParÃ¢metros: Nenhum (Ã© um mÃ©todo de teste).
- Retorno: Nenhum.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia Ã© definida nesta classe de teste, pois ela apenas instancia o controlador e realiza verificaÃ§Ãµes.

Notas adicionais
- A anotaÃ§Ã£o `@IsTest` indica que a classe Ã© uma classe de teste.
- A anotaÃ§Ã£o `SeeAllData=true` permite que o teste acesse dados existentes no Salesforce, o que Ã© Ãºtil para testes que dependem de dados reais.
- O mÃ©todo de teste simula uma troca de senha ao definir os valores de senha antiga, nova e de confirmaÃ§Ã£o, e verifica se a operaÃ§Ã£o foi bem-sucedida ao verificar o retorno do mÃ©todo `changePassword()`.

Classe: DW_CheckAndFormatBRDocFlowHelperTest

DescriÃ§Ã£o
A classe `DW_CheckAndFormatBRDocFlowHelperTest` Ã© uma classe de testes unitÃ¡rios no Salesforce, responsÃ¡vel por validar o funcionamento da classe `DW_CheckAndFormatBRDocFlowHelper`. Ela verifica se os mÃ©todos de validaÃ§Ã£o e formataÃ§Ã£o de documentos (CNPJ e CPF) estÃ£o corretos, testando casos vÃ¡lidos e invÃ¡lidos.

MÃ©todos
`checkValidCNPJ()`
- Testa a validaÃ§Ã£o de CNPJs vÃ¡lidos, incluindo formatos diferentes.
- Cria solicitaÃ§Ãµes de validaÃ§Ã£o com CNPJs vÃ¡lidos e verifica se o resultado indica que sÃ£o vÃ¡lidos e se a formataÃ§Ã£o estÃ¡ correta.

`checkInvalidCNPJ()`
- Testa a validaÃ§Ã£o de CNPJs invÃ¡lidos.
- Cria solicitaÃ§Ãµes com CNPJs invÃ¡lidos e verifica se o resultado indica que sÃ£o invÃ¡lidos e se a formataÃ§Ã£o Ã© vazia.

`checkValidCPF()`
- Testa a validaÃ§Ã£o de CPFs vÃ¡lidos, incluindo diferentes formatos.
- Cria solicitaÃ§Ãµes de validaÃ§Ã£o com CPFs vÃ¡lidos e verifica se o resultado indica que sÃ£o vÃ¡lidos e se a formataÃ§Ã£o estÃ¡ correta.

`checkInvalidCPF()`
- Testa a validaÃ§Ã£o de CPFs invÃ¡lidos.
- Cria solicitaÃ§Ãµes com CPFs invÃ¡lidos e verifica se o resultado indica que sÃ£o invÃ¡lidos e se a formataÃ§Ã£o Ã© vazia.

VariÃ¡veis
NÃ£o hÃ¡ variÃ¡veis de classe definidas nesta classe de testes. Todas as variÃ¡veis sÃ£o locais aos mÃ©todos, utilizadas para criar solicitaÃ§Ãµes de validaÃ§Ã£o e armazenar resultados.

Classe: DW_CTIControllerMock

DescriÃ§Ã£o
A classe `DW_CTIControllerMock` Ã© uma implementaÃ§Ã£o de um mock para chamadas HTTP, utilizada para simular respostas de um serviÃ§o externo durante testes ou desenvolvimento. Ela implementa a interface `HttpCalloutMock`, permitindo que seja usada para retornar respostas fictÃ­cias quando chamadas HTTP sÃ£o feitas, sem a necessidade de um serviÃ§o real.

MÃ©todos
`DW_CTIControllerMock(Boolean isMockResponseSuccessful)`
- Construtor da classe que inicializa uma instÃ¢ncia do mock.
- ParÃ¢metro: `isMockResponseSuccessful` (Boolean): indica se a resposta simulada deve ser considerada bem-sucedida ou nÃ£o (embora neste cÃ³digo, esse parÃ¢metro nÃ£o seja utilizado explicitamente na lÃ³gica de resposta).

`respond(HTTPRequest httpRequest)`
- MÃ©todo obrigatÃ³rio da interface `HttpCalloutMock`.
- ParÃ¢metro: `httpRequest` (HTTPRequest): representa a requisiÃ§Ã£o HTTP feita pelo sistema.
- Retorna: `HTTPResponse` contendo a resposta simulada.
- Funcionalidade: verifica o endpoint da requisiÃ§Ã£o e retorna uma resposta XML diferente dependendo do endpoint solicitado:
  - Se o endpoint contÃ©m `'IniciarSessao'`, retorna uma resposta XML indicando sucesso e um ID de sessÃ£o.
  - Se o endpoint contÃ©m `'Login'`, retorna uma resposta XML indicando sucesso na tentativa de login.
  - Para qualquer outro endpoint, retorna uma resposta XML padrÃ£o com cÃ³digo de sucesso e mensagem vazia.

VariÃ¡veis
`isMockResponseSuccessful`
- Tipo: `Boolean`
- DescriÃ§Ã£o: variÃ¡vel que indica se a resposta mock deve ser considerada bem-sucedida. No cÃ³digo fornecido, ela Ã© definida no construtor, mas nÃ£o Ã© utilizada na lÃ³gica de resposta, podendo ser usada futuramente para alterar o comportamento do mock.

Classe: DW_AuraLWCHelperTest

DescriÃ§Ã£o
A classe `DW_AuraLWCHelperTest` Ã© uma classe de teste no Salesforce que valida funcionalidades relacionadas ao helper `DW_AuraLWCHelper`. Ela contÃ©m mÃ©todos de teste para operaÃ§Ãµes de inserÃ§Ã£o, atualizaÃ§Ã£o, exclusÃ£o e recuperaÃ§Ã£o de registros de objetos padrÃ£o como Account e Contact. Essa classe garante que os mÃ©todos do helper funcionem corretamente em diferentes cenÃ¡rios.

MÃ©todos
`upsertMethod()`
- Testa a operaÃ§Ã£o de atualizaÃ§Ã£o ou inserÃ§Ã£o de registros.
- Cria uma conta de teste, insere no banco de dados, e verifica se a resposta indica sucesso na operaÃ§Ã£o de busca por registros via API.
- Inclui uma asserÃ§Ã£o para garantir que a resposta contenha `"success":true`.

`deleteMethod()`
- Testa a operaÃ§Ã£o de exclusÃ£o de registros.
- Cria uma conta de teste, insere, e entÃ£o tenta deletar usando o mÃ©todo do helper.
- Verifica se a operaÃ§Ã£o de exclusÃ£o foi bem-sucedida atravÃ©s de uma asserÃ§Ã£o na propriedade `success` da resposta.

`main()`
- MÃ©todo de teste abrangente que cobre vÃ¡rias operaÃ§Ãµes.
- Cria uma conta e um contato associados, insere ambos, e realiza operaÃ§Ãµes de atualizaÃ§Ã£o/inserÃ§Ã£o em ordem.
- Testa a recuperaÃ§Ã£o de registros pelo ID, verificando se a operaÃ§Ã£o foi bem-sucedida.
- Testa a operaÃ§Ã£o de upsert (inserÃ§Ã£o ou atualizaÃ§Ã£o) de registros, verificando o sucesso ou erro.
- Executa operaÃ§Ãµes de exclusÃ£o de registros, garantindo que os mÃ©todos funcionem corretamente.

VariÃ¡veis
NÃ£o hÃ¡ variÃ¡veis de classe explÃ­citas nesta classe de teste. Os objetos utilizados sÃ£o criados localmente dentro dos mÃ©todos para realizar os testes.

Classe: DW_ConditionOptions

DescriÃ§Ã£o
A classe `DW_ConditionOptions` Ã© uma enumeraÃ§Ã£o que define um conjunto de opÃ§Ãµes de tipos de condiÃ§Ãµes ou dados utilizados em alguma lÃ³gica de negÃ³cios ou processamento no Salesforce. Ela foi criada por um usuÃ¡rio chamado Guilherme Reis em 05 de janeiro de 2021.

MÃ©todos
Este Ã© um enum, portanto, nÃ£o possui mÃ©todos pÃºblicos explÃ­citos. Ele serve apenas para definir constantes que representam diferentes tipos de condiÃ§Ãµes ou dados.

VariÃ¡veis
`STR`
- Tipo: `DW_ConditionOptions`
- Valor: Representa uma condiÃ§Ã£o ou dado do tipo string (texto).

`DEC`
- Tipo: `DW_ConditionOptions`
- Valor: Representa uma condiÃ§Ã£o ou dado do tipo decimal (nÃºmero com casas decimais).

`STR_IN`
- Tipo: `DW_ConditionOptions`
- Valor: Representa uma condiÃ§Ã£o ou dado do tipo string que provavelmente serÃ¡ utilizado em operaÃ§Ãµes de inclusÃ£o ou comparaÃ§Ã£o de strings.

`DT`
- Tipo: `DW_ConditionOptions`
- Valor: Representa uma condiÃ§Ã£o ou dado do tipo data (date).

`DTTIME`
- Tipo: `DW_ConditionOptions`
- Valor: Representa uma condiÃ§Ã£o ou dado do tipo data e hora (datetime).

`BOOL`
- Tipo: `DW_ConditionOptions`
- Valor: Representa uma condiÃ§Ã£o ou dado do tipo booleano (verdadeiro ou falso).

Leiga
A enumeraÃ§Ã£o `DW_ConditionOptions` Ã© uma lista de opÃ§Ãµes que representam diferentes tipos de dados ou condiÃ§Ãµes que podem ser utilizados em regras ou filtros no Salesforce. Ela inclui tipos como texto, nÃºmeros decimais, datas, data e hora, e valores booleanos (verdadeiro ou falso).

Classe: DW_CustomLookupControllerTest

DescriÃ§Ã£o
A classe `DW_CustomLookupControllerTest` Ã© uma classe de testes automatizados no Salesforce, usada para validar o funcionamento da classe `DW_CustomLookupController`. Ela contÃ©m mÃ©todos que criam dados fictÃ­cios, simulam requisiÃ§Ãµes, verificam a geraÃ§Ã£o de consultas e validam funÃ§Ãµes auxiliares relacionadas ao controle de buscas e relacionamentos em objetos do Salesforce.

MÃ©todos
`testGetRecords()`
- Objetivo: Testar a recuperaÃ§Ã£o de registros com base em uma requisiÃ§Ã£o JSON simulada.
- Processo: Cria uma conta fictÃ­cia, constrÃ³i uma estrutura JSON simulando uma requisiÃ§Ã£o do Lightning Web Component (LWC), chama o mÃ©todo `getRecords` e verifica se pelo menos um registro foi retornado.

`testParseRelationFieldsAndSearchBase()`
- Objetivo: Validar a geraÃ§Ã£o da consulta SOQL (Salesforce Object Query Language) com base em uma requisiÃ§Ã£o estruturada.
- Processo: Cria uma requisiÃ§Ã£o de exemplo com mÃºltiplas relaÃ§Ãµes, gera a consulta usando `getQueryBase`, e verifica se a consulta contÃ©m elementos essenciais como `SELECT`, o nome do objeto, os campos de busca e clÃ¡usulas `IN`.

`testCheckDateTimeAndDate()`
- Objetivo: Testar a validaÃ§Ã£o de formatos de data e hora.
- Processo: Verifica se a funÃ§Ã£o `checkDateTimeAndDate` reconhece corretamente datas simples, DateTime e rejeita textos invÃ¡lidos.

`testConvertObjectListToStringList()`
- Objetivo: Testar a conversÃ£o de uma lista de objetos para uma lista de strings, ignorando valores nulos.
- Processo: Passa uma lista contendo strings e um valor nulo, e verifica se a conversÃ£o resulta apenas nos elementos nÃ£o nulos.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia Ã© definida nesta classe de testes, pois ela Ã© composta apenas por mÃ©todos estÃ¡ticos de teste.

Classe: DWValidationControllerTest

DescriÃ§Ã£o
A classe `DWValidationControllerTest` Ã© uma classe de testes unitÃ¡rios no Salesforce, responsÃ¡vel por validar o funcionamento da classe `DWValidationController`. Ela garante que os mÃ©todos da classe principal retornem os resultados esperados, ajudando a manter a integridade do cÃ³digo.

MÃ©todos
`setupTestData()`
- MÃ©todo de configuraÃ§Ã£o de dados de teste.
- Cria e insere registros de DDDs vÃ¡lidos na base de dados, especificamente os DDDs '11' e '21'.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.

`getBlockedEmails()`
- MÃ©todo que retorna uma lista de e-mails bloqueados.
- Retorna uma lista fixa contendo os e-mails `'blocked@example.com'` e `'spam@example.com'`.
- ParÃ¢metros: Nenhum.
- Retorno: `List<String>` (lista de strings).

`testGetBlockedEmails()`
- MÃ©todo de teste que verifica se o mÃ©todo `getBlockedEmails()` da classe `DWValidationController` funciona corretamente.
- Inicia o teste, chama o mÃ©todo, e entÃ£o valida se a lista de e-mails bloqueados nÃ£o Ã© nula.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum (apenas validaÃ§Ãµes).

`testGetValidDDDs()`
- MÃ©todo de teste que verifica se o mÃ©todo `getValidDDDs()` da classe `DWValidationController` retorna exatamente os DDDs vÃ¡lidos esperados.
- Inicia o teste, chama o mÃ©todo, e valida se a lista contÃ©m exatamente dois DDDs, '11' e '21'.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum (apenas validaÃ§Ãµes).

VariÃ¡veis
NÃ£o hÃ¡ variÃ¡veis de classe especÃ­ficas nesta classe de testes. Os mÃ©todos utilizam variÃ¡veis locais para armazenar os resultados das chamadas de mÃ©todos e realizar as validaÃ§Ãµes.

Classe: DW_GetMidiaControllerTest

DescriÃ§Ã£o
A classe `DW_GetMidiaControllerTest` Ã© uma classe de teste no Salesforce, que verifica o funcionamento do mÃ©todo `getMidias` da classe `DW_GetMidiaController`. Ela garante que o mÃ©todo retorna as mÃ­dias corretas de acordo com o status ativo ou inativo, e tambÃ©m verifica o comportamento quando nÃ£o hÃ¡ mÃ­dias associadas a uma loja.

MÃ©todos
`testGetMidias()`
- Objetivo: Testar se o mÃ©todo `getMidias` retorna apenas mÃ­dias ativas de uma loja especÃ­fica.
- Processo:
  - Cria uma loja de teste (`Account`) e insere no banco de dados.
  - Cria duas mÃ­dias (`Midia__c`): uma ativa e uma inativa, associadas Ã  loja criada.
  - Insere ambas as mÃ­dias.
  - Executa o mÃ©todo `getMidias` passando o ID da loja.
  - Verifica se o resultado contÃ©m exatamente uma mÃ­dia (a ativa).
  - Confirma que a mÃ­dia retornada Ã© a que foi marcada como ativa.

`testGetMidiasLojaSemMidias()`
- Objetivo: Testar o comportamento do mÃ©todo `getMidias` quando a loja nÃ£o possui mÃ­dias ativas.
- Processo:
  - Cria uma loja de teste sem mÃ­dias associadas.
  - Executa o mÃ©todo `getMidias` passando o ID da loja.
  - Verifica se o resultado Ã© uma lista vazia, indicando que nenhuma mÃ­dia foi retornada.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia Ã© definida nesta classe de teste, pois ela utiliza variÃ¡veis locais dentro dos mÃ©todos de teste para criar e manipular registros de teste.

Classe: DW_HelperTest

DescriÃ§Ã£o
A classe `DW_HelperTest` Ã© uma classe de testes automatizados no Salesforce, que verifica o funcionamento de mÃ©todos auxiliares provavelmente definidos na classe `DW_Helper`. Ela garante que os mÃ©todos de verificaÃ§Ã£o de nulidade e conteÃºdo de strings e objetos funcionem corretamente, cobrindo diferentes cenÃ¡rios de entrada.

MÃ©todos
`testIsNullOrBlankString()`
- Testa se o mÃ©todo `isNullOrBlank` identifica corretamente uma string nula, vazia e com conteÃºdo.
- Verifica se o mÃ©todo retorna `true` para strings nulas ou vazias, e `false` para strings que possuem conteÃºdo.

`testIsNullOrBlankObject()`
- Testa o mÃ©todo `isNullOrBlank` com diferentes tipos de objetos, incluindo uma string nula, uma string nÃ£o nula e um inteiro nÃ£o nulo.
- Garante que o mÃ©todo reconheÃ§a objetos nulos e nÃ£o nulos corretamente.

`testHasSomeContentString()`
- Verifica se o mÃ©todo `hasSomeContent` identifica corretamente uma string nula, vazia e com conteÃºdo.
- Confirma que o mÃ©todo retorna `false` para strings nulas ou vazias, e `true` para strings com conteÃºdo.

`testHasSomeContentObject()`
- Testa o mÃ©todo `hasSomeContent` com objetos nulos e nÃ£o nulos, incluindo uma string e um inteiro.
- Assegura que o mÃ©todo reconheÃ§a objetos com conteÃºdo e objetos nulos apropriadamente.

VariÃ¡veis
Nenhuma variÃ¡vel de classe Ã© definida nesta classe de testes. Os testes utilizam variÃ¡veis locais para armazenar valores de entrada, como `teste`, que representam diferentes cenÃ¡rios de teste para verificar os mÃ©todos auxiliares.

Classe: DW_Relationship

DescriÃ§Ã£o
A classe `DW_Relationship` Ã© responsÃ¡vel por criar e representar uma relaÃ§Ã£o de consulta (relationship query) no Salesforce. Ela permite construir uma string de consulta que pode ser usada para recuperar dados relacionados de um objeto especÃ­fico, facilitando a geraÃ§Ã£o de consultas dinÃ¢micas.

MÃ©todos
`newInstance(String relationshipName, String objectName)`
- Cria uma nova instÃ¢ncia da classe `DW_Relationship` com os nomes do relacionamento e do objeto fornecidos.
- ParÃ¢metros:
  - `relationshipName` (String): nome do relacionamento que serÃ¡ utilizado na consulta.
  - `objectName` (String): nome do objeto do qual os campos serÃ£o coletados.
- Retorno: uma nova instÃ¢ncia de `DW_Relationship` configurada com os nomes fornecidos e uma string de campos coletados.

`render()`
- Gera uma parte de uma consulta SOQL que representa a relaÃ§Ã£o, incluindo os campos coletados.
- Retorno: uma `String` que contÃ©m a consulta formatada, por exemplo, `,(SELECT campo1, campo2 FROM relacionamento)`.

VariÃ¡veis
`queryFieldsStr`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena a lista de campos que serÃ£o selecionados na consulta, coletados dinamicamente atravÃ©s do mÃ©todo `DW_FieldCollector.collectStr`.

`relationshipName`
- Tipo: `String`
- DescriÃ§Ã£o: Nome do relacionamento que serÃ¡ utilizado na consulta para acessar os registros relacionados.

`objectName`
- Tipo: `String`
- DescriÃ§Ã£o: Nome do objeto do Salesforce do qual os campos serÃ£o coletados para a consulta.

Notas adicionais
- A classe utiliza o mÃ©todo `DW_FieldCollector.collectStr` para obter uma string de campos do objeto, que Ã© entÃ£o usada na construÃ§Ã£o da consulta.
- O mÃ©todo `render()` retorna uma string formatada que pode ser incorporada em uma consulta SOQL maior para recuperar dados relacionados.

Classe: TermoHandler

DescriÃ§Ã£o
A classe `TermoHandler` Ã© uma classe utilitÃ¡ria que possui mÃ©todos estÃ¡ticos para manipulaÃ§Ã£o e formataÃ§Ã£o de dados relacionados ao objeto personalizado `Termo__c`. Ela Ã© usada principalmente para validar e formatar informaÃ§Ãµes como documentos e nomes associados aos registros de `Termo__c`.

MÃ©todos
`formatarDocumentos(List<Termo__c> pTermoListNew)`
- PropÃ³sito: Percorre uma lista de registros `Termo__c` e realiza validaÃ§Ãµes e formataÃ§Ãµes nos campos relacionados a documentos e nomes.
- ParÃ¢metro: `pTermoListNew` (Lista de `Termo__c`): uma coleÃ§Ã£o de registros de Termo que serÃ£o processados.
- Retorno: Nenhum (void). A operaÃ§Ã£o Ã© feita por efeito colateral, modificando os registros passados na lista.

Notas:
- Dentro do mÃ©todo, hÃ¡ vÃ¡rias chamadas comentadas a mÃ©todos de uma classe `UtilValidacao`, que parecem ser responsÃ¡veis por validar e formatar documentos como CNPJ e CPF, alÃ©m de validar nomes e RGs.
- Essas chamadas indicam que o mÃ©todo foi planejado para realizar validaÃ§Ãµes especÃ­ficas, mas atualmente estÃ£o desativadas (comentadas).

VariÃ¡veis
NÃ£o hÃ¡ variÃ¡veis de instÃ¢ncia na classe, pois ela Ã© composta apenas por um mÃ©todo estÃ¡tico.

ObservaÃ§Ãµes TÃ©cnicas
- A classe serve como um ponto central para aplicar validaÃ§Ãµes e formataÃ§Ãµes em registros de `Termo__c`.
- A implementaÃ§Ã£o atual estÃ¡ parcialmente desativada, sugerindo que o mÃ©todo pode ser ativado ou ajustado conforme a necessidade para validar documentos e nomes de forma automatizada.
- A estrutura permite fÃ¡cil expansÃ£o para incluir mais validaÃ§Ãµes ou formataÃ§Ãµes especÃ­ficas, bastando descomentar ou adicionar chamadas aos mÃ©todos de `UtilValidacao`.

Classe: DwCustomListViewFactory

DescriÃ§Ã£o
A classe `DwCustomListViewFactory` Ã© responsÃ¡vel por criar listas personalizadas de registros relacionados no Salesforce, como Leads ou Oportunidades, de forma dinÃ¢mica. Ela segue o padrÃ£o de projeto Factory, centralizando a lÃ³gica de criaÃ§Ã£o dessas listas para facilitar o uso por outras partes do sistema, como controllers Apex.

MÃ©todos
`createRelatedList(Id recordId, String title)`
- Cria uma lista personalizada de registros relacionados com base no tipo de objeto do registro informado.
- ParÃ¢metros:
  - `recordId` (Id): identificador do registro principal, que pode ser um Lead ou uma Oportunidade.
  - `title` (String): tÃ­tulo que serÃ¡ exibido na lista, como "Leads Relacionados" ou "Oportunidades Relacionadas".
- Retorno:
  - Uma lista de objetos `DwCustomListView`, contendo os registros relacionados estruturados.
- Funcionalidades adicionais:
  - Verifica o tipo de objeto do registro (Lead ou Oportunidade).
  - Cria a lista chamando a classe especÃ­fica correspondente (`DWCustomListViewLead` ou `DWCustomListViewOpportunity`).
  - LanÃ§a uma exceÃ§Ã£o se o tipo de objeto nÃ£o for suportado, indicando que o componente nÃ£o estÃ¡ configurado para esse tipo.

VariÃ¡veis
`relatedList`
- Tipo: `List<DwCustomListView>`
- DescriÃ§Ã£o: Armazena a lista de registros relacionados que serÃ¡ retornada ao final do mÃ©todo.

`objectName`
- Tipo: `String`
- DescriÃ§Ã£o: ObtÃ©m o nome do tipo de objeto do registro principal (por exemplo, "Lead" ou "Opportunity") usando o mÃ©todo `getDescribe().getName()` do SObject. Essa variÃ¡vel Ã© usada para determinar qual classe de lista personalizada deve ser instanciada.

Classe: DWVideoActionWrapper

DescriÃ§Ã£o
A classe `DWVideoActionWrapper` Ã© um Data Transfer Object (DTO), ou seja, um objeto usado para transportar dados de forma estruturada entre o backend (Apex) e o frontend (Lightning Components). Ela representa aÃ§Ãµes de vÃ­deo ou etapas de um tour exibidas em componentes Lightning, como LWC ou Aura.

Ela Ã© utilizada principalmente pela classe `DWVideoController` para enviar ao componente Lightning uma lista de aÃ§Ãµes de vÃ­deo que devem ser exibidas ao usuÃ¡rio.

MÃ©todos
NÃ£o hÃ¡ mÃ©todos explÃ­citos nesta classe. Ela funciona como um container de propriedades acessÃ­veis publicamente, com getters e setters automÃ¡ticos.

VariÃ¡veis
`name`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o nome ou tÃ­tulo da aÃ§Ã£o de vÃ­deo, por exemplo, "Como criar um Lead". Essa informaÃ§Ã£o Ã© exibida ao usuÃ¡rio para identificar a aÃ§Ã£o.

`developerName`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o nome de API da aÃ§Ã£o de vÃ­deo, por exemplo, "Criar_Lead". Ã‰ uma identificaÃ§Ã£o tÃ©cnica que pode ser usada no cÃ³digo ou integraÃ§Ãµes.

`url`
- Tipo: `String`
- DescriÃ§Ã£o: ContÃ©m a URL do vÃ­deo que serÃ¡ aberta quando o usuÃ¡rio clicar na aÃ§Ã£o. Essa URL aponta para o conteÃºdo de vÃ­deo relacionado Ã  aÃ§Ã£o.

`icone`
- Tipo: `String`
- DescriÃ§Ã£o: Nome do Ã­cone que serÃ¡ exibido ao lado da aÃ§Ã£o, por exemplo, 'utility:play'. Serve para melhorar a visualizaÃ§Ã£o e a usabilidade do menu de aÃ§Ãµes.

`iconeMenu`
- Tipo: `String`
- DescriÃ§Ã£o: Nome do Ã­cone usado especificamente no menu de exibiÃ§Ã£o da aÃ§Ã£o, como 'standard:video'. Pode ser diferente do Ã­cone principal para adaptar a aparÃªncia ao contexto do menu.

`order`
- Tipo: `Integer`
- DescriÃ§Ã£o: Define a ordem de exibiÃ§Ã£o da aÃ§Ã£o no menu. Quanto menor o nÃºmero, mais acima ela aparece na lista, permitindo controlar a sequÃªncia de apresentaÃ§Ã£o das aÃ§Ãµes de vÃ­deo.

Classe: DW_DocusignControllerTest

DescriÃ§Ã£o
A classe `DW_DocusignControllerTest` Ã© uma classe de testes automatizados no Salesforce, responsÃ¡vel por validar funcionalidades especÃ­ficas do controlador `DW_DocusignController`. Ela garante que os mÃ©todos de geraÃ§Ã£o de URLs e obtenÃ§Ã£o de signatÃ¡rios estejam funcionando corretamente, simulando cenÃ¡rios de uso com dados fictÃ­cios.

MÃ©todos
`testGetUrlDoc()`
- Testa a geraÃ§Ã£o de URLs para diferentes tipos de documentos relacionados a uma oportunidade.
- Cria IDs fictÃ­cios de Opportunity e ContentVersion.
- Chama o mÃ©todo `getUrlDoc` do `DW_DocusignController` para obter URLs de documentos do tipo minuta, nota fiscal e pÃ¡gina personalizada.
- Verifica se os URLs retornados correspondem ao formato esperado para cada tipo de documento.

`testGetSigners_Oportunidade()`
- Testa a obtenÃ§Ã£o de signatÃ¡rios relacionados a uma oportunidade.
- Cria uma conta e uma oportunidade fictÃ­cias associadas.
- Chama o mÃ©todo `getSigners` do `DW_DocusignController` passando o ID da oportunidade.
- Verifica se o resultado contÃ©m trÃªs signatÃ¡rios com roles especÃ­ficas: Vendedor, Cliente e Gerente.

`testGetSigners_Termo()`
- Testa a obtenÃ§Ã£o de signatÃ¡rios relacionados a um termo (contrato ou acordo).
- Cria uma conta, uma oportunidade e um contato fictÃ­cio.
- Cria um registro de `Termo__c` associado Ã  oportunidade e Ã  conta.
- Chama o mÃ©todo `getSigners` do `DW_DocusignController` passando o ID do termo.
- Verifica se o resultado contÃ©m um signatÃ¡rio adicional, o Terceiro, com a role correta.

VariÃ¡veis
Nenhuma variÃ¡vel de classe Ã© definida nesta classe de testes. Os dados utilizados sÃ£o criados localmente dentro de cada mÃ©todo para simular cenÃ¡rios de teste.

Classe: DW_InteractionsHistoryControllerTest

DescriÃ§Ã£o
A classe `DW_InteractionsHistoryControllerTest` Ã© uma classe de testes unitÃ¡rios no Salesforce, responsÃ¡vel por validar o funcionamento da classe `DW_InteractionsHistoryController`. Ela garante que os mÃ©todos da classe principal estejam operando corretamente, simulando cenÃ¡rios de uso.

MÃ©todos
`setupData()`
- Configura dados de teste essenciais para os demais testes, criando e inserindo registros de Conta, Lead e Oportunidade no Salesforce.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.

`testGetRecordsInteractionHistoryWithOpportunity()`
- Testa o mÃ©todo `getRecordsInteractionHistory` da classe `DW_InteractionsHistoryController` usando uma Oportunidade existente.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum. Verifica se o resultado nÃ£o Ã© nulo, se o nome do objeto retornado Ã© "Oportunidade", se o ID do registro corresponde ao da oportunidade usada e se hÃ¡ registros relacionados.

`testGetRecordsInteractionHistoryWithEmptyId()`
- Testa o mÃ©todo `getRecordsInteractionHistory` passando um ID nulo, simulando uma chamada sem uma referÃªncia vÃ¡lida.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum. Verifica se o resultado Ã© nulo, indicando que o mÃ©todo lida corretamente com IDs invÃ¡lidos.

`testFormatCurrencyMethod()`
- Testa o mÃ©todo `formatCurrency` da classe `DW_InteractionsHistoryController`, que formata valores numÃ©ricos em moeda brasileira.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum. Verifica se a formataÃ§Ã£o de valores numÃ©ricos e valores nulos estÃ¡ correta, retornando o formato esperado de moeda brasileira.

VariÃ¡veis
Nenhuma variÃ¡vel de classe Ã© declarada nesta classe de testes. Os mÃ©todos utilizam variÃ¡veis locais para armazenar registros e resultados de chamadas de mÃ©todos.

Classe: MyProfilePageController

DescriÃ§Ã£o
A classe `MyProfilePageController` Ã© responsÃ¡vel por gerenciar as operaÃ§Ãµes relacionadas ao perfil do usuÃ¡rio no portal Salesforce. Ela permite visualizar, editar, salvar e cancelar alteraÃ§Ãµes nos detalhes do usuÃ¡rio, alÃ©m de fornecer uma funcionalidade para alterar a senha. Essa classe garante que usuÃ¡rios convidados (guest users) nÃ£o tenham acesso Ã s funcionalidades.

MÃ©todos
`getUser()`
- Retorna o objeto `User` atual, contendo os detalhes do usuÃ¡rio logado.
- Retorno: `User`.

`MyProfilePageController()`
- Construtor da classe que inicializa o objeto `user` com os detalhes do usuÃ¡rio logado, consultando os seus atributos no banco de dados.
- Verifica se o usuÃ¡rio Ã© do tipo 'GUEST' (convidado); se for, lanÃ§a uma exceÃ§Ã£o de acesso negado.

`getIsEdit()`
- Retorna um booleano que indica se o perfil estÃ¡ em modo de ediÃ§Ã£o.
- Retorno: `Boolean`.

`edit()`
- Altera o estado do perfil para modo de ediÃ§Ã£o, permitindo que os campos possam ser modificados na interface.

`save()`
- Tenta salvar as alteraÃ§Ãµes feitas no perfil do usuÃ¡rio.
- Se a operaÃ§Ã£o de atualizaÃ§Ã£o falhar, captura a exceÃ§Ã£o e exibe uma mensagem de erro na interface.
- ApÃ³s salvar, desativa o modo de ediÃ§Ã£o.

`changePassword()`
- Retorna uma referÃªncia para a pÃ¡gina de alteraÃ§Ã£o de senha (`ChangePassword`), permitindo que o usuÃ¡rio navegue atÃ© ela.

`cancel()`
- Cancela o modo de ediÃ§Ã£o, revertendo as alteraÃ§Ãµes feitas ao recarregar os detalhes do usuÃ¡rio do banco de dados, retornando ao estado anterior.

VariÃ¡veis
`user`
- Tipo: `User`
- DescriÃ§Ã£o: Armazena os detalhes do usuÃ¡rio atualmente logado, incluindo informaÃ§Ãµes como nome, email, telefone, endereÃ§o, entre outros.

`isEdit`
- Tipo: `Boolean`
- DescriÃ§Ã£o: Controla se o perfil estÃ¡ em modo de ediÃ§Ã£o (`true`) ou visualizaÃ§Ã£o (`false`).

Classe: DW_TermoControllerTest

DescriÃ§Ã£o
A classe `DW_TermoControllerTest` Ã© uma classe de testes unitÃ¡rios no Salesforce, responsÃ¡vel por validar o funcionamento da classe `DW_TermoController`. Ela cria dados de teste, simula a execuÃ§Ã£o do controller e verifica se os mÃ©todos retornam os resultados esperados.

MÃ©todos
`testDW_TermoController()`
- MÃ©todo de teste que realiza a criaÃ§Ã£o de registros de contas, oportunidades, produtos, condiÃ§Ãµes de pagamento e termos.
- Executa o controller `DW_TermoController` usando um `StandardController`.
- Chama diversos mÃ©todos do controller para obter informaÃ§Ãµes especÃ­ficas.
- Realiza asserÃ§Ãµes para verificar se os resultados estÃ£o corretos, como quantidade de produtos e condiÃ§Ãµes de pagamento, alÃ©m de verificar horÃ¡rios de saÃ­da e retorno.

VariÃ¡veis
Nenhuma variÃ¡vel de classe Ã© definida nesta classe de testes. Ela utiliza variÃ¡veis locais dentro do mÃ©todo de teste para criar e manipular os registros de teste.

---

ExplicaÃ§Ã£o TÃ©cnica e Leiga
- **TÃ©cnico:** Esta classe configura um cenÃ¡rio de teste criando registros de contas, oportunidades, produtos, condiÃ§Ãµes de pagamento e termos, tudo necessÃ¡rio para testar a funcionalidade da classe `DW_TermoController`. Ela usa o mÃ©todo `startTest()` e `stopTest()` para delimitar o teste e garantir que o cÃ³digo seja executado em um ambiente controlado. Depois, ela chama os mÃ©todos do controller para obter informaÃ§Ãµes especÃ­ficas, como horÃ¡rios de saÃ­da e retorno, e verifica se esses valores estÃ£o corretos usando assertivas.
- **Leiga:** Esta classe Ã© como um teste que verifica se o outro cÃ³digo funciona corretamente. Ela cria exemplos de dados que o sistema usaria normalmente, roda o cÃ³digo que quer testar e depois confere se os resultados estÃ£o certos, como horÃ¡rios e quantidade de itens.

Classe: DW_DynamicQueryControllerTest

DescriÃ§Ã£o
A classe `DW_DynamicQueryControllerTest` Ã© uma classe de teste no Salesforce, usada para validar o funcionamento do mÃ©todo `getRecords` da classe `DW_DynamicQueryController`. Ela contÃ©m mÃ©todos que verificam se o mÃ©todo retorna resultados corretos sob diferentes condiÃ§Ãµes e se lanÃ§a exceÃ§Ãµes adequadas quando hÃ¡ erros na consulta.

MÃ©todos
`testGetRecords_withValidParams()`
- Objetivo: Testar o mÃ©todo `getRecords` com parÃ¢metros vÃ¡lidos.
- Processo:
  - Cria e insere uma conta de teste com o nome "Conta Teste".
  - Executa o mÃ©todo `getRecords` para buscar contas cujo nome contenha "Teste".
  - Verifica se a lista de resultados nÃ£o Ã© nula, contÃ©m pelo menos uma conta e se o nome da conta retornada contÃ©m a palavra "Teste".

`testGetRecords_withEmptyWhereClause()`
- Objetivo: Testar o mÃ©todo `getRecords` sem fornecer uma clÃ¡usula WHERE.
- Processo:
  - Cria e insere uma conta de teste com o nome "Conta Sem Filtro".
  - Executa o mÃ©todo `getRecords` sem clÃ¡usula WHERE.
  - Verifica se a lista de resultados nÃ£o Ã© nula e se contÃ©m registros, garantindo que a consulta retorne resultados mesmo sem filtro.

`testGetRecords_invalidQuery_throwsAuraException()`
- Objetivo: Verificar se o mÃ©todo lanÃ§a uma exceÃ§Ã£o adequada ao usar uma consulta invÃ¡lida.
- Processo:
  - Tenta executar o mÃ©todo `getRecords` com um campo invÃ¡lido na consulta.
  - Captura a exceÃ§Ã£o `AuraHandledException`.
  - Verifica se a exceÃ§Ã£o foi realmente lanÃ§ada, confirmando que o mÃ©todo lida corretamente com erros de consulta.

VariÃ¡veis
Nenhuma variÃ¡vel de classe Ã© definida nesta classe de teste. Os mÃ©todos utilizam variÃ¡veis locais para criar registros de teste e controlar o fluxo de execuÃ§Ã£o.

Classe: DW_DataFactory

DescriÃ§Ã£o
A classe `DW_DataFactory` Ã© uma classe de teste que fornece mÃ©todos para criar instÃ¢ncias de objetos do Salesforce, como Leads, MÃ­dias, Contas e Grupos. Ela facilita a criaÃ§Ã£o de dados de teste, com a opÃ§Ã£o de inserir esses registros no banco de dados ou apenas retornÃ¡-los.

MÃ©todos
`newLead(Boolean shouldInsert)`
- Cria uma nova instÃ¢ncia de um Lead (potencial cliente).
- ParÃ¢metro: `shouldInsert` (Boolean): indica se o Lead deve ser inserido no banco de dados.
- Retorno: `Lead` - o objeto Lead criado, podendo estar ou nÃ£o salvo no banco dependendo do parÃ¢metro.

`newMidia(Boolean shouldInsert)`
- Cria uma nova instÃ¢ncia de um objeto personalizado `Midia__c`.
- ParÃ¢metro: `shouldInsert` (Boolean): indica se a mÃ­dia deve ser inserida no banco de dados.
- Retorno: `Midia__c` - o objeto Midia criado, podendo estar ou nÃ£o salvo no banco dependendo do parÃ¢metro.

`newAccount(Boolean shouldInsert)`
- Cria uma nova instÃ¢ncia de uma Conta (Account).
- ParÃ¢metro: `shouldInsert` (Boolean): indica se a Conta deve ser inserida no banco de dados.
- Retorno: `Account` - o objeto Account criado, podendo estar ou nÃ£o salvo no banco dependendo do parÃ¢metro.

`newQueue(Boolean shouldInsert)`
- Cria uma nova instÃ¢ncia de um Grupo do tipo fila (Queue).
- ParÃ¢metro: `shouldInsert` (Boolean): indica se o Grupo deve ser inserido no banco de dados.
- Retorno: `Group` - o objeto Group criado, podendo estar ou nÃ£o salvo no banco dependendo do parÃ¢metro.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia Ã© definida nesta classe, pois ela consiste apenas em mÃ©todos estÃ¡ticos para criar objetos de teste.

Classe: DWUsedVehicleSectionController

DescriÃ§Ã£o
A classe `DWUsedVehicleSectionController` Ã© uma classe Apex pÃºblica, sem compartilhamento de regras de seguranÃ§a, que fornece uma funcionalidade para buscar oportunidades relacionadas a um veÃ­culo em estoque com base em um identificador de estoque e uma oportunidade especÃ­fica. Ela Ã© utilizada em componentes Lightning para facilitar a recuperaÃ§Ã£o de dados relacionados a veÃ­culos usados e suas oportunidades associadas.

MÃ©todos
`getOppWithSameStock(String stockId, String opportunityId)`
- MÃ©todo estÃ¡tico e acessÃ­vel via Lightning devido Ã  anotaÃ§Ã£o `@AuraEnabled`.
- ParÃ¢metros:
  - `stockId` (String): Identificador do estoque do veÃ­culo.
  - `opportunityId` (String): Identificador da oportunidade atual.
- Funcionalidade:
  - Consulta oportunidades diferentes da atual (`opportunityId`) que estÃ£o relacionadas ao mesmo estoque (`Estoque__c`) e que possuem esse campo preenchido.
  - Verifica se hÃ¡ outras oportunidades relacionadas ao mesmo estoque.
  - Verifica se a oportunidade atual e as outras oportunidades possuem o mesmo proprietÃ¡rio.
- Retorna:
  - Um `Map<String, Object>` contendo:
    - `'isStockValid'`: booleano indicando se o estoque Ã© vÃ¡lido (nÃ£o hÃ¡ outras oportunidades relacionadas ao mesmo estoque).
    - `'opps'`: lista de oportunidades relacionadas ao estoque.
    - `'sameOwner'`: booleano indicando se a oportunidade atual e as relacionadas tÃªm o mesmo proprietÃ¡rio.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia Ã© definida nesta classe, pois o mÃ©todo Ã© estÃ¡tico e nÃ£o mantÃ©m estado.

Exemplo de uso
Este mÃ©todo Ã© utilizado em componentes Lightning para verificar se hÃ¡ oportunidades relacionadas ao mesmo estoque de um veÃ­culo usado, alÃ©m de determinar se essas oportunidades pertencem ao mesmo proprietÃ¡rio, ajudando na lÃ³gica de negÃ³cios de gerenciamento de veÃ­culos usados.

Classe: DW_CustomCompactLayoutTest

DescriÃ§Ã£o
A classe `DW_CustomCompactLayoutTest` Ã© uma classe de testes em Apex que valida o funcionamento de mÃ©todos relacionados Ã  recuperaÃ§Ã£o de campos dinÃ¢micos e configuraÃ§Ãµes de layouts compactos na aplicaÃ§Ã£o Salesforce. Ela garante que os mÃ©todos da classe `DW_CustomCompactLayout` estejam operando corretamente, lidando com diferentes cenÃ¡rios, incluindo casos de sucesso e erros.

MÃ©todos
`testGetDynamicField_Success()`
- Testa a recuperaÃ§Ã£o bem-sucedida de um campo dinÃ¢mico de um registro Lead.
- Cria um Lead de teste, chama o mÃ©todo para obter o campo 'Name' e verifica se o nome esperado estÃ¡ presente na resposta.

`testGetDynamicField_InvalidParams()`
- Verifica o comportamento do mÃ©todo ao receber parÃ¢metros invÃ¡lidos.
- Passa parÃ¢metros vazios e espera que a resposta indique erro de parÃ¢metros invÃ¡lidos.

`testGetDynamicField_RecordNotFound()`
- Testa a resposta do mÃ©todo ao tentar recuperar um registro que nÃ£o existe.
- Usa um ID fictÃ­cio e verifica se a mensagem de erro adequada Ã© retornada.

`testGetFieldSetFields_Success()`
- Testa a recuperaÃ§Ã£o bem-sucedida de campos de um Field Set (conjunto de campos) para um Lead.
- Cria um Lead de teste, chama o mÃ©todo para obter os detalhes do Field Set e verifica se o resultado contÃ©m chaves esperadas: valores, tipos e labels.

`testGetFieldSetFields_InvalidParams()`
- Verifica o comportamento do mÃ©todo ao receber parÃ¢metros invÃ¡lidos.
- Passa parÃ¢metros vazios ou nulos e espera que uma exceÃ§Ã£o seja lanÃ§ada com a mensagem 'ParÃ¢metros invÃ¡lidos'.

VariÃ¡veis
NÃ£o hÃ¡ variÃ¡veis de classe definidas nesta classe de testes. Todos os dados utilizados sÃ£o criados ou passados diretamente nos mÃ©todos de teste.

Classe: DW_ParentRelationship

DescriÃ§Ã£o
A classe `DW_ParentRelationship` Ã© responsÃ¡vel por gerenciar relacionamentos pai-filho em objetos do Salesforce, facilitando a coleta e formataÃ§Ã£o de campos relacionados a uma relaÃ§Ã£o especÃ­fica.

MÃ©todos
`newInstance(String relationshipName, String objectName)`
- Cria uma nova instÃ¢ncia da classe `DW_ParentRelationship`.
- ParÃ¢metros:
  - `relationshipName` (String): nome da relaÃ§Ã£o pai-filho.
  - `objectName` (String): nome do objeto Salesforce.
- Retorno: uma nova instÃ¢ncia de `DW_ParentRelationship` configurada com os valores fornecidos.
- Funcionalidade: inicializa os atributos da relaÃ§Ã£o e coleta os campos relacionados ao objeto.

`render()`
- Gera uma string formatada contendo os nomes dos campos relacionados, prontos para uso em consultas SOQL.
- Retorno: uma `String` que representa os campos relacionados, separados por vÃ­rgulas e prefixados pelo nome da relaÃ§Ã£o.
- Funcionalidade: percorre a lista de campos coletados e constrÃ³i uma string que pode ser usada em consultas para recuperar esses campos relacionados.

VariÃ¡veis
`queryFieldsList`
- Tipo: `List<String>`
- DescriÃ§Ã£o: armazena a lista de nomes de campos relacionados ao objeto, coletados por um mÃ©todo externo (`DW_FieldCollector.collect`).

`relationshipName`
- Tipo: `String`
- DescriÃ§Ã£o: armazena o nome da relaÃ§Ã£o pai-filho, usado para construir os nomes dos campos relacionados na consulta.

`objectName`
- Tipo: `String`
- DescriÃ§Ã£o: armazena o nome do objeto Salesforce ao qual a relaÃ§Ã£o pertence, embora haja um erro na atribuiÃ§Ã£o dentro do mÃ©todo `newInstance` onde `relationshipName` Ã© atribuÃ­do a `objectName`.

Classe: DW_IniciarFaturamentoBatchTest

DescriÃ§Ã£o
A classe `DW_IniciarFaturamentoBatchTest` Ã© uma classe de testes unitÃ¡rios no Salesforce, responsÃ¡vel por validar o funcionamento de diferentes mÃ©todos da classe `DW_IniciarFaturamentoBatch`. Ela garante que o processamento de faturamento, agendamento de tarefas, notificaÃ§Ãµes e construÃ§Ã£o de cabeÃ§alhos HTTP estejam funcionando corretamente, simulando chamadas externas e verificando os resultados esperados.

MÃ©todos
`testBatchExecution()`
- Testa a execuÃ§Ã£o do batch `DW_IniciarFaturamentoBatch`, incluindo a criaÃ§Ã£o de credenciais, oportunidade, mock de callout HTTP, execuÃ§Ã£o do batch e validaÃ§Ã£o do status atualizado da oportunidade apÃ³s o processamento.

`testScheduleMethods()`
- Verifica se o mÃ©todo de agendamento de tarefas (`System.schedule`) funciona corretamente, criando um job agendado com um cronograma especÃ­fico.

`testRunEveryNMinutesInBusinessHours()`
- Testa a execuÃ§Ã£o do mÃ©todo que agenda tarefas a cada N minutos durante o horÃ¡rio comercial, garantindo que o agendamento seja realizado corretamente.

`testRunEveryNMinutes()`
- Valida o mÃ©todo que agenda tarefas a cada N minutos, independentemente do horÃ¡rio comercial, verificando se o agendamento ocorre como esperado.

`testNotificarAprovacaoMinuta()`
- Testa a notificaÃ§Ã£o de aprovaÃ§Ã£o de minuta, criando uma oportunidade e chamando o mÃ©todo que envia a notificaÃ§Ã£o, garantindo que o processo seja executado sem erros.

`testConstructHeaders()`
- Verifica a construÃ§Ã£o dos cabeÃ§alhos HTTP utilizados na comunicaÃ§Ã£o com APIs externas, garantindo que os cabeÃ§alhos necessÃ¡rios (como Authorization, Content-Type, Accept) sejam criados corretamente.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia Ã© declarada nesta classe de testes. Ela utiliza variÃ¡veis locais para criar objetos de credenciais, oportunidades, nomes de jobs e mocks de chamadas HTTP, essenciais para simular o ambiente de execuÃ§Ã£o e validar os mÃ©todos da classe principal.

Classe: DW_CancelEnvDocusignBatchTest

DescriÃ§Ã£o
A classe `DW_CancelEnvDocusignBatchTest` Ã© uma classe de testes unitÃ¡rios no Salesforce, responsÃ¡vel por validar o funcionamento da classe `DW_CancelEnvDocusignBatch`. Ela garante que os mÃ©todos de cancelamento de envelopes Docusign funcionem corretamente, simulando diferentes cenÃ¡rios de uso.

MÃ©todos
`setupTestData()`
- Prepara dados fictÃ­cios para os testes, incluindo contas, oportunidades, envelopes Docusign e credenciais.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.
- Leigo: Cria exemplos de dados que serÃ£o usados nos testes, como clientes, oportunidades e envelopes de assinatura.

`testExecuteBatch()`
- Testa a execuÃ§Ã£o do batch que cancela envelopes Docusign.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.
- Leigo: Verifica se o processo de cancelar envelopes funciona corretamente ao executar o batch.

`testCancelEnvDocusing()`
- Testa a requisiÃ§Ã£o de cancelamento de envelopes Docusign.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.
- Leigo: Simula a solicitaÃ§Ã£o de cancelamento de envelopes e verifica se a operaÃ§Ã£o Ã© realizada corretamente.

`testCancelEnvDocusing_InvalidInput()`
- Testa o mÃ©todo de cancelamento com entradas invÃ¡lidas, como parÃ¢metros nulos ou vazios.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.
- Leigo: Garante que o sistema responde corretamente ao receber dados incorretos ou incompletos, lanÃ§ando erros apropriados.

VariÃ¡veis
Nenhuma variÃ¡vel de classe Ã© declarada explicitamente nesta classe de testes. Os mÃ©todos utilizam variÃ¡veis locais para manipulaÃ§Ã£o de dados de teste, como listas de envelopes, credenciais e solicitaÃ§Ãµes de cancelamento.

Classe: DW_DocusignCreateDocumentBatchTest

DescriÃ§Ã£o
A classe `DW_DocusignCreateDocumentBatchTest` Ã© uma classe de testes para validar o funcionamento da classe `DW_DocusignCreateDocumentBatch`. Ela simula cenÃ¡rios de uso, criando registros fictÃ­cios e verificando se o batch processa corretamente as operaÃ§Ãµes relacionadas ao Docusign, incluindo agendamento e execuÃ§Ã£o de jobs.

MÃ©todos
`testExecuteBatchJob()`
- Testa a execuÃ§Ã£o do batch `DW_DocusignCreateDocumentBatch`.
- Cria registros de Conta, Oportunidade, Envelope Docusign e SignatÃ¡rio Docusign.
- Configura credenciais fictÃ­cias para o Docusign.
- Executa o batch e verifica se o status do signatÃ¡rio foi atualizado para "Enviado".

`testRunEveryNMinutes()`
- Testa o agendamento do job para rodar a cada N minutos usando uma expressÃ£o CRON.
- Cria um agendamento de um job do tipo `DW_DocusignCreateDocumentBatch`.
- NÃ£o executa o mÃ©todo de repetiÃ§Ã£o, apenas verifica o agendamento.

`testScheduleThisClassWithCustomCron()`
- Testa o agendamento do job com uma expressÃ£o CRON personalizada.
- Cria um agendamento do job `DW_DocusignCreateDocumentBatch` com um nome Ãºnico.

`testRunEveryNMinutesInBusinessHours()`
- Testa a execuÃ§Ã£o do mÃ©todo que roda o batch em horÃ¡rios comerciais a cada N minutos.
- Cria o agendamento e chama o mÃ©todo `runEveryNMinutesInBusinessHours(15)` para simular a execuÃ§Ã£o.

`testCancelThisSchedule()`
- Testa o cancelamento do agendamento do job.
- Agenda o job e depois o cancela usando `cancelThisSchedule()`.

VariÃ¡veis
Nenhuma variÃ¡vel de classe foi declarada nesta classe de testes. Ela utiliza variÃ¡veis locais para criar registros e configurar o ambiente de teste.

Classe: DW_CTIHelper

DescriÃ§Ã£o
A classe `DW_CTIHelper` Ã© uma classe auxiliar que fornece mÃ©todos para buscar informaÃ§Ãµes de telefone relacionadas a objetos padrÃ£o do Salesforce, como Account, Contact e Lead. Ela Ã© utilizada no contexto de integraÃ§Ã£o com telefonia (CTI), facilitando a recuperaÃ§Ã£o de dados essenciais para operaÃ§Ãµes de comunicaÃ§Ã£o telefÃ´nica.

MÃ©todos
`getAccountPhone(Id accountId)`
- PropÃ³sito: Buscar uma conta especÃ­fica pelo seu ID, retornando seus principais campos de identificaÃ§Ã£o e telefone.
- ParÃ¢metro: `accountId` (Id): identificador da conta.
- Retorno: Um objeto `Account` contendo o ID, nome, telefone fixo e celular, ou `null` se nÃ£o encontrado.
- Detalhes TÃ©cnicos: Executa uma consulta SOQL para obter os dados da conta com o ID fornecido. Ã‰ exposto ao Lightning Web Components (LWC) com cache para otimizar o desempenho.

`getContactsPhone(Id opportunityId)`
- PropÃ³sito: Obter uma lista de contatos vinculados a uma oportunidade, incluindo seus telefones.
- ParÃ¢metro: `opportunityId` (Id): identificador da oportunidade.
- Retorno: Uma lista de objetos `Contact` que possuem telefone principal preenchido.
- Detalhes TÃ©cnicos: Primeiro busca as relaÃ§Ãµes entre contatos e a oportunidade via `OpportunityContactRole`. Depois, filtra apenas os contatos que possuem telefone, retornando esses contatos.

`getLeadPhone(Id leadId)`
- PropÃ³sito: Recuperar os dados de telefone de um Lead especÃ­fico.
- ParÃ¢metro: `leadId` (Id): identificador do Lead.
- Retorno: Um objeto `Lead` com os campos de telefone e nome, ou `null` se nÃ£o encontrado.
- Detalhes TÃ©cnicos: Executa uma consulta SOQL para obter os dados do Lead pelo ID fornecido. TambÃ©m Ã© exposto ao LWC com cache habilitado.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia Ã© definida nesta classe, pois todos os mÃ©todos sÃ£o estÃ¡ticos e operam com dados passados como parÃ¢metros.

Classe: CommunitiesSelfRegControllerTest

DescriÃ§Ã£o
A classe `CommunitiesSelfRegControllerTest` Ã© uma classe de teste em Apex que verifica o funcionamento do controlador `CommunitiesSelfRegController`. Essa classe Ã© utilizada para garantir que o processo de auto registro de usuÃ¡rios em comunidades do Salesforce esteja funcionando corretamente, simulando diferentes cenÃ¡rios de registro.

MÃ©todos
`testCommunitiesSelfRegController()`
- MÃ©todo de teste que valida o comportamento do controlador de auto registro de comunidades.
- Atribui valores aos atributos do controlador, como nome, sobrenome, email, nickname, senha e confirmaÃ§Ã£o de senha.
- Executa o mÃ©todo `registerUser()` do controlador e verifica se o retorno Ã© `null`, o que indica que o usuÃ¡rio nÃ£o foi registrado, pois o teste Ã© realizado fora do contexto de um usuÃ¡rio visitante (guest user).
- ParÃ¢metros utilizados:
  - `firstName`: Primeiro nome do usuÃ¡rio.
  - `lastName`: Sobrenome do usuÃ¡rio.
  - `email`: EndereÃ§o de email do usuÃ¡rio.
  - `communityNickname`: Nickname da comunidade.
  - `password`: Senha desejada para o usuÃ¡rio.
  - `confirmPassword`: ConfirmaÃ§Ã£o da senha.
- Retorno: Nenhum (Ã© um mÃ©todo de teste que realiza assertions).

VariÃ¡veis
`controller`
- Tipo: `CommunitiesSelfRegController`
- DescriÃ§Ã£o: InstÃ¢ncia do controlador que gerencia o processo de auto registro de usuÃ¡rios na comunidade.

`firstName`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o primeiro nome do usuÃ¡rio a ser registrado.

`lastName`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o sobrenome do usuÃ¡rio.

`email`
- Tipo: `String`
- DescriÃ§Ã£o: EndereÃ§o de email do usuÃ¡rio.

`communityNickname`
- Tipo: `String`
- DescriÃ§Ã£o: Nickname da comunidade onde o usuÃ¡rio serÃ¡ registrado.

`password`
- Tipo: `String`
- DescriÃ§Ã£o: Senha que o usuÃ¡rio deseja usar para o login.

`confirmPassword`
- Tipo: `String`
- DescriÃ§Ã£o: ConfirmaÃ§Ã£o da senha, deve ser igual Ã  `password`.

Classe: DW_CTIControllerTest

DescriÃ§Ã£o
A classe `DW_CTIControllerTest` Ã© uma classe de testes unitÃ¡rios no Salesforce, responsÃ¡vel por validar o funcionamento da classe `DW_CTIController`. Ela simula chamadas externas e operaÃ§Ãµes de banco de dados para garantir que o cÃ³digo principal funcione corretamente em diferentes cenÃ¡rios.

MÃ©todos
`main()`
- Executa um teste unitÃ¡rio que simula uma chamada para realizar uma aÃ§Ã£o de "ligar" para um nÃºmero de telefone associado a um registro do tipo Lead.
- Configura um mock para chamadas HTTP, criando uma resposta simulada.
- Cria um registro de Lead com informaÃ§Ãµes fictÃ­cias e o insere no banco de dados.
- Inicia a execuÃ§Ã£o de uma operaÃ§Ã£o de teste, chamando o mÃ©todo `handleClickToCall` da classe `DW_CTIController` com uma string JSON contendo detalhes do telefone e do registro.
- Finaliza o teste apÃ³s a execuÃ§Ã£o da operaÃ§Ã£o.

`main2()`
- Executa um segundo teste unitÃ¡rio que simula uma aÃ§Ã£o de "desligar" para um nÃºmero de telefone, tambÃ©m associado a um Lead, mas incluindo uma tarefa relacionada.
- Configura um mock para chamadas HTTP, assim como no mÃ©todo anterior.
- Cria e insere um Lead com informaÃ§Ãµes fictÃ­cias.
- Cria uma tarefa (`Task`) relacionada ao Lead, com detalhes como assunto, status, prioridade, tipo de chamada, e uma data de inÃ­cio.
- Inicia a execuÃ§Ã£o de uma operaÃ§Ã£o de teste, chamando `handleClickToCall` com uma string JSON que inclui o nÃºmero de telefone, o ID do Lead, o ID da tarefa e uma descriÃ§Ã£o.
- Finaliza o teste apÃ³s a execuÃ§Ã£o.

VariÃ¡veis
NÃ£o hÃ¡ variÃ¡veis de classe explÃ­citas nesta classe de testes. Os mÃ©todos utilizam variÃ¡veis locais para criar registros e configurar mocks durante a execuÃ§Ã£o dos testes.

Classe: DW_Helper

DescriÃ§Ã£o
A classe `DW_Helper` fornece mÃ©todos utilitÃ¡rios estÃ¡ticos para verificar se strings ou objetos estÃ£o vazios, nulos ou possuem algum conteÃºdo. Ela Ã© Ãºtil para validaÃ§Ãµes rÃ¡pidas em diferentes partes do cÃ³digo, garantindo que valores estejam presentes antes de realizar operaÃ§Ãµes.

MÃ©todos
`isNullOrBlank(String str)`
- Verifica se uma string estÃ¡ vazia ou Ã© nula.
- ParÃ¢metro: `str` (String): a string a ser avaliada.
- Retorno: `Boolean` â€” `true` se a string for vazia ou nula, `false` caso contrÃ¡rio.
- ExplicaÃ§Ã£o leiga: Verifica se a string nÃ£o contÃ©m nada ou nÃ£o foi definida.

`isNullOrBlank(Object obj)`
- Verifica se um objeto estÃ¡ nulo.
- ParÃ¢metro: `obj` (Object): o objeto a ser avaliado.
- Retorno: `Boolean` â€” `true` se o objeto for nulo, `false` caso contrÃ¡rio.
- ExplicaÃ§Ã£o leiga: Verifica se o objeto nÃ£o existe ou nÃ£o foi definido.

`hasSomeContent(String str)`
- Verifica se uma string possui algum conteÃºdo, ou seja, nÃ£o estÃ¡ vazia nem nula.
- ParÃ¢metro: `str` (String): a string a ser avaliada.
- Retorno: `Boolean` â€” `true` se a string tiver algum conteÃºdo, `false` caso contrÃ¡rio.
- ExplicaÃ§Ã£o leiga: Verifica se a string realmente tem alguma coisa dentro dela.

`hasSomeContent(Object obj)`
- Verifica se um objeto possui algum conteÃºdo, ou seja, nÃ£o Ã© nulo.
- ParÃ¢metro: `obj` (Object): o objeto a ser avaliado.
- Retorno: `Boolean` â€” `true` se o objeto tiver algum valor, `false` se for nulo.
- ExplicaÃ§Ã£o leiga: Verifica se o objeto realmente existe e tem algum valor atribuÃ­do.

Classe: MyProfilePageControllerTest

DescriÃ§Ã£o
A classe `MyProfilePageControllerTest` Ã© uma classe de testes automatizados (test class) que verifica o funcionamento do controlador `MyProfilePageController`. Ela garante que as funcionalidades de ediÃ§Ã£o, cancelamento e salvamento do perfil do usuÃ¡rio estejam operando corretamente. Essa classe Ã© marcada com `@IsTest`, indicando que Ã© usada apenas para testes e nÃ£o serÃ¡ implantada na produÃ§Ã£o.

MÃ©todos
`testSave()`
- MÃ©todo de teste que verifica o comportamento do controlador ao editar e salvar os detalhes do usuÃ¡rio.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.
- Funcionalidade:
  - Busca usuÃ¡rios do tipo "CustomerSuccess" com um `UserRoleId` definido.
  - Se nÃ£o encontrar usuÃ¡rios, realiza testes com o usuÃ¡rio atual.
  - Se encontrar usuÃ¡rios, realiza testes usando um usuÃ¡rio existente, simulando aÃ§Ãµes de ediÃ§Ã£o, cancelamento e salvamento.
  - Verifica se as aÃ§Ãµes realizadas pelo controlador refletem corretamente nas informaÃ§Ãµes do usuÃ¡rio.

VariÃ¡veis
`existingPortalUsers`
- Tipo: `List<User>`
- DescriÃ§Ã£o: Lista de usuÃ¡rios do Salesforce que possuem um `UserRoleId` e `UserType` igual a "CustomerSuccess". Usada para testar com usuÃ¡rios existentes do portal.

`currentUser`
- Tipo: `User`
- DescriÃ§Ã£o: UsuÃ¡rio atual do sistema, utilizado para realizar testes quando nÃ£o hÃ¡ usuÃ¡rios do portal disponÃ­veis.

`existingPortalUser`
- Tipo: `User`
- DescriÃ§Ã£o: Primeiro usuÃ¡rio encontrado na lista de usuÃ¡rios do portal, utilizado para testes de ediÃ§Ã£o e salvamento em um contexto de usuÃ¡rio existente.

`randFax`
- Tipo: `String`
- DescriÃ§Ã£o: NÃºmero de fax gerado aleatoriamente para testar a atualizaÃ§Ã£o do campo fax do usuÃ¡rio.

ObservaÃ§Ãµes
- O mÃ©todo `testSave()` realiza testes tanto com o usuÃ¡rio atual quanto com um usuÃ¡rio do portal, usando `System.runAs()` para simular aÃ§Ãµes em diferentes usuÃ¡rios.
- AsserÃ§Ãµes (`System.assert`) sÃ£o usadas para garantir que o comportamento do controlador esteja correto, como o estado de ediÃ§Ã£o, o carregamento do usuÃ¡rio e a atualizaÃ§Ã£o dos dados.

Classe: DWBuscaAtivoController

DescriÃ§Ã£o
A classe `DWBuscaAtivoController` Ã© uma classe Apex que atua como um controlador para componentes Lightning (LWC ou Aura) relacionados Ã  busca, reserva e vinculaÃ§Ã£o de ativos (Assets) a oportunidades no Salesforce. Ela fornece funcionalidades para listar ativos disponÃ­veis, atualizar informaÃ§Ãµes de oportunidades, obter detalhes de uma oportunidade, adicionar ativos a uma oportunidade com validaÃ§Ãµes e consultar o perfil do usuÃ¡rio logado.

MÃ©todos
`getAssets()`
- Retorna uma lista de ativos (Assets) disponÃ­veis no estoque.
- Filtra os ativos para incluir apenas aqueles que possuem um cÃ³digo de loja preenchido.
- Utilizado para exibir os ativos disponÃ­veis na tela para seleÃ§Ã£o ou consulta.

`updateOpportunityAccountId(Id opportunityId, Id clienteId)`
- Atualiza o cliente (Account) associado a uma oportunidade especÃ­fica.
- Recebe o ID da oportunidade e o ID do cliente (Conta) para fazer a vinculaÃ§Ã£o.
- Utilizado para alterar ou definir o cliente de uma oportunidade.

`getOpportunityDetails(Id opportunityId)`
- Retorna detalhes bÃ¡sicos de uma oportunidade, incluindo ID, nome, cliente, contato e o catÃ¡logo de preÃ§os.
- Utilizado para obter informaÃ§Ãµes essenciais de uma oportunidade especÃ­fica.

`addAssetToOpportunity(Id opportunityId, Id assetId)`
- Vincula um ativo (Asset) a uma oportunidade.
- Verifica se o ativo jÃ¡ estÃ¡ reservado; se estiver, lanÃ§a uma exceÃ§Ã£o.
- Se a oportunidade nÃ£o tiver um catÃ¡logo de preÃ§os definido, atribui o padrÃ£o.
- Atualiza o campo Estoque__c da oportunidade com o ID do ativo.
- Utilizado para reservar um ativo e vinculÃ¡-lo a uma oportunidade de forma controlada.

`getProfileName()`
- Retorna o nome do perfil do usuÃ¡rio atualmente logado.
- Utilizado para verificar ou exibir o perfil do usuÃ¡rio na interface.

VariÃ¡veis
NÃ£o hÃ¡ variÃ¡veis de classe explÃ­citas nesta implementaÃ§Ã£o. Todos os dados utilizados sÃ£o obtidos por consultas ou recebidos como parÃ¢metros nos mÃ©todos.

Classe: DW_DocusignGetStatusSignBatchTest

DescriÃ§Ã£o
A classe `DW_DocusignGetStatusSignBatchTest` Ã© uma classe de testes no Salesforce, responsÃ¡vel por validar o funcionamento da classe de batch `DW_DocusignGetStatusSignBatch`. Ela realiza testes de execuÃ§Ã£o do batch, agendamento de tarefas e cancelamento de agendamentos relacionados ao processo de verificaÃ§Ã£o do status de assinaturas via Docusign.

MÃ©todos
`testExecuteBatchJob()`
- Testa a execuÃ§Ã£o do batch que verifica o status de assinaturas no Docusign.
- Cria registros de Conta, Oportunidade e Envelope de Docusign fictÃ­cios.
- Configura credenciais fictÃ­cias para o Docusign.
- Executa o batch `DW_DocusignGetStatusSignBatch`.
- ApÃ³s a execuÃ§Ã£o, consulta o registro de Envelope para verificar se o status foi atualizado (comentado na assertiva).

`testRunEveryNMinutes()`
- Testa o agendamento do batch para rodar a cada N minutos.
- Cria uma tarefa agendada usando um cronograma padrÃ£o.
- (Comentado) PossÃ­vel chamada para rodar o mÃ©todo `runEveryNMinutes`.

`testScheduleThisClassWithCustomCron()`
- Testa o agendamento da classe com um cron personalizado.
- Cria uma tarefa agendada com um cron padrÃ£o.
- Verifica se a tarefa foi agendada corretamente.

`testRunEveryNMinutesInBusinessHours()`
- Testa a execuÃ§Ã£o do mÃ©todo que roda o batch a cada N minutos durante o horÃ¡rio comercial.
- Cria uma tarefa agendada.
- Executa o mÃ©todo `runEveryNMinutesInBusinessHours` com intervalo de 15 minutos.

`testCancelThisSchedule()`
- Testa o cancelamento de uma tarefa agendada.
- Agenda uma tarefa com um cron especÃ­fico.
- Cancela a tarefa agendada usando o mÃ©todo `cancelThisSchedule`.

VariÃ¡veis
Nenhuma variÃ¡vel de classe Ã© definida nesta classe de testes. Ela utiliza variÃ¡veis locais para criar registros de teste e configurar o ambiente de execuÃ§Ã£o.

Classe: DW_GetRecordCallLeadBatchTest

DescriÃ§Ã£o
A classe `DW_GetRecordCallLeadBatchTest` Ã© uma classe de testes unitÃ¡rios no Salesforce, responsÃ¡vel por validar o funcionamento da classe `DW_GetRecordCallLeadBatch`. Ela garante que os mÃ©todos dessa classe principal funcionem corretamente, simulando diferentes cenÃ¡rios de execuÃ§Ã£o, como agendamento, cancelamento e execuÃ§Ã£o de batch.

MÃ©todos
`runEveryNMinutes()`
- Executa o mÃ©todo `runEveryNMinutes` da classe `DW_GetRecordCallLeadBatch` com um intervalo de 2 minutos.
- Utilizado para testar se o agendamento periÃ³dico estÃ¡ funcionando corretamente.

`cancelThisSchedule()`
- Chama o mÃ©todo `cancelThisSchedule` da classe `DW_GetRecordCallLeadBatch`.
- Verifica se o cancelamento do agendamento estÃ¡ sendo realizado corretamente.

`scheduleThisClass()`
- Executa o mÃ©todo `scheduleThisClass` da classe `DW_GetRecordCallLeadBatch`, passando `null` como parÃ¢metro.
- Testa se a programaÃ§Ã£o do batch estÃ¡ sendo agendada corretamente.

`main()`
- Configura um mock de chamada HTTP para simular respostas externas.
- Cria e insere um registro do objeto Lead com dados fictÃ­cios.
- Executa o mÃ©todo `execute` da classe `DW_GetRecordCallLeadBatch`, passando o Lead criado, para testar o processamento de registros.
- Envolve a execuÃ§Ã£o em um bloco de teste para garantir o isolamento e controle do ambiente de teste.

`testBatchExecution()`
- Configura um mock de resposta HTTP.
- Cria e insere um registro do objeto Contact com dados fictÃ­cios.
- Cria uma sessÃ£o fictÃ­cia do objeto `SessaoCTI__c`.
- Executa um batch da classe `DW_GetRecordCallLeadBatch` com um tamanho de lote de 1, para testar a execuÃ§Ã£o de processamento em lote.
- Envolve a execuÃ§Ã£o em um bloco de teste para garantir o controle do ambiente de teste.

VariÃ¡veis
NÃ£o hÃ¡ variÃ¡veis de instÃ¢ncia na classe de teste. Todos os mÃ©todos sÃ£o estÃ¡ticos e utilizados para validar funcionalidades especÃ­ficas da classe principal.

Classe: DW_DocusignReenviarControllerTest

DescriÃ§Ã£o
A classe `DW_DocusignReenviarControllerTest` Ã© uma classe de teste no Salesforce, que verifica a funcionalidade de reenviar envelopes do Docusign. Ela prepara dados de teste, incluindo contas, oportunidades, produtos, condiÃ§Ãµes de pagamento, termos, credenciais de API e envelopes, alÃ©m de realizar testes especÃ­ficos para validar o comportamento do mÃ©todo de reenviar envelopes.

MÃ©todos
`setupData()`
- MÃ©todo anotado com `@testSetup`, que prepara todos os dados necessÃ¡rios para os testes.
- Cria contas (empresa pai e cliente final), oportunidade, produto, preÃ§o, linha de oportunidade, condiÃ§Ãµes de pagamento, termos, credenciais de API do Docusign e envelopes.
- VariÃ¡veis importantes: contas, oportunidade, produto, credenciais, envelope.

`testReenviar_success()`
- Testa o cenÃ¡rio de sucesso ao reenviar um envelope do Docusign.
- Configura um mock de chamada HTTP para simular a resposta da API.
- Executa o mÃ©todo de reenviar e verifica se a resposta indica sucesso (`"success":true`).

`testReenviar_tokenError()`
- Testa o cenÃ¡rio onde ocorre um erro ao tentar reenviar, simulando uma falha na obtenÃ§Ã£o do token.
- Executa o mÃ©todo de reenviar e verifica o comportamento esperado em caso de erro.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia Ã© definida na classe de teste, pois ela Ã© usada apenas para preparar dados e executar testes especÃ­ficos.

---

**ExplicaÃ§Ã£o TÃ©cnica e Leiga**

- A classe Ã© usada para garantir que o cÃ³digo que envia envelopes pelo Docusign funciona corretamente.
- Ela cria todos os dados necessÃ¡rios, como contas, oportunidades, produtos, condiÃ§Ãµes de pagamento, credenciais de API e envelopes, para simular um ambiente real de uso.
- Os mÃ©todos de teste verificam se o sistema consegue reenviar um envelope com sucesso e tambÃ©m como ele se comporta quando hÃ¡ um erro na obtenÃ§Ã£o do token de acesso.
- Mocking Ã© usado para simular respostas da API do Docusign, sem fazer chamadas reais, garantindo que os testes sejam rÃ¡pidos e controlados.

Classe: DW_ReceiveExternalSFControllerTest

DescriÃ§Ã£o
A classe `DW_ReceiveExternalSFControllerTest` Ã© uma classe de testes em Apex, responsÃ¡vel por validar o funcionamento da classe `DW_ReceiveExternalSFController`. Ela garante que os mÃ©todos e funcionalidades dessa classe principal estejam operando corretamente, simulando diferentes cenÃ¡rios de uso.

MÃ©todos
`testConstructor()`
- Objetivo: Testa o construtor da classe `DW_ReceiveExternalSFController`.
- Processo: 
  - Inicia o teste.
  - Define a pÃ¡gina atual como uma pÃ¡gina Visualforce chamada `DWReceiveExternalSF`.
  - Simula a passagem de um parÃ¢metro chamado `'code'` com o valor `'testCode'`.
  - Cria uma instÃ¢ncia do controlador `DW_ReceiveExternalSFController`.
  - Verifica se o valor do atributo `code` do controlador Ã© igual a `'testCode'`.
  - Finaliza o teste.
- Leigo: Este mÃ©todo verifica se, ao criar o controlador na pÃ¡gina, ele consegue pegar o cÃ³digo passado na URL corretamente.

`testGenerateSaleforceUrlAuth()`
- Objetivo: Testa o mÃ©todo `generateSaleforceUrlAuth` da classe principal.
- Processo:
  - Inicia o teste.
  - Chama o mÃ©todo com uma URL de exemplo (`https://test.salesforce.com`).
  - Finaliza o teste.
- Leigo: Este mÃ©todo verifica se o sistema consegue gerar uma URL de autenticaÃ§Ã£o do Salesforce corretamente.

`testGetUserConsentCode()`
- Objetivo: Testa o mÃ©todo `getUserConsentCode` da classe principal.
- Processo:
  - Inicia o teste.
  - Chama o mÃ©todo para obter o cÃ³digo de consentimento do usuÃ¡rio.
  - Finaliza o teste.
- Leigo: Este mÃ©todo verifica se o sistema consegue obter o cÃ³digo de consentimento do usuÃ¡rio de forma adequada.

VariÃ¡veis
NÃ£o hÃ¡ variÃ¡veis de classe definidas nesta classe de testes, pois ela Ã© focada em validar mÃ©todos especÃ­ficos da classe principal.

Classe: DWBuscaAtivoControllerTest

DescriÃ§Ã£o
A classe `DWBuscaAtivoControllerTest` Ã© uma classe de testes unitÃ¡rios no Salesforce que verifica o funcionamento da classe `DWBuscaAtivoController`. Ela garante que os mÃ©todos da classe principal estejam operando corretamente, simulando diferentes cenÃ¡rios de uso.

MÃ©todos
`setup()`
- Executa uma configuraÃ§Ã£o inicial antes dos testes, ativando a lista de preÃ§os padrÃ£o.
- NÃ£o possui retorno.
- Cria e ativa uma Pricebook padrÃ£o para uso nos testes.

`testGetAssets()`
- Testa a recuperaÃ§Ã£o de ativos (Assets) pelo mÃ©todo `getAssets()` da classe `DWBuscaAtivoController`.
- Cria registros de contas, mÃ­dias, oportunidades, produtos, itens de oportunidade, e ativos para montar o cenÃ¡rio de teste.
- Verifica se a lista de ativos retornada nÃ£o estÃ¡ vazia.

`testUpdateOpportunityAccountId()`
- Testa a atualizaÃ§Ã£o do cliente (AccountId) de uma oportunidade pelo mÃ©todo `updateOpportunityAccountId()`.
- Cria registros similares aos demais testes, incluindo uma oportunidade e um ativo.
- Chama o mÃ©todo para alterar o cliente da oportunidade e verifica se a alteraÃ§Ã£o foi bem-sucedida.

`testGetOpportunityDetails()`
- Testa a obtenÃ§Ã£o dos detalhes de uma oportunidade pelo mÃ©todo `getOpportunityDetails()`.
- Cria registros de contas, mÃ­dias, oportunidades, produtos, itens de oportunidade e ativos.
- Verifica se o mÃ©todo retorna a oportunidade correta com o ID esperado e o cliente associado.

`testAddAssetToOpportunity()`
- Testa a associaÃ§Ã£o de um ativo a uma oportunidade usando o mÃ©todo `addAssetToOpportunity()`.
- Cria registros de contas, mÃ­dias, oportunidades, produtos, itens de oportunidade e ativos.
- ApÃ³s a execuÃ§Ã£o do mÃ©todo, verifica se o ativo foi corretamente vinculado Ã  oportunidade, atravÃ©s do campo `Estoque__c`.

`testGetProfileName()`
- Testa a recuperaÃ§Ã£o do nome do perfil do usuÃ¡rio pelo mÃ©todo `getProfileName()`.
- Executa o mÃ©todo para verificar se ele funciona sem erros (nÃ£o hÃ¡ assert, apenas execuÃ§Ã£o).

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia Ã© declarada na classe de testes. Todos os objetos utilizados sÃ£o criados localmente dentro dos mÃ©todos para montar o cenÃ¡rio de teste.

Classe: DW_GetRecordCallCaseBatchTest

DescriÃ§Ã£o
A classe `DW_GetRecordCallCaseBatchTest` Ã© uma classe de testes unitÃ¡rios em Apex, responsÃ¡vel por validar o funcionamento da classe `DW_GetRecordCallCaseBatch`. Ela garante que os mÃ©todos dessa classe principal funcionem corretamente, simulando diferentes cenÃ¡rios de execuÃ§Ã£o.

MÃ©todos
`runEveryNMinutes()`
- Executa o mÃ©todo `runEveryNMinutes` da classe `DW_GetRecordCallCaseBatch` com o parÃ¢metro 2, simulando a execuÃ§Ã£o de uma rotina agendada a cada N minutos.
- Utiliza `Test.startTest()` e `Test.stopTest()` para delimitar o escopo do teste e garantir o controle do contexto de execuÃ§Ã£o.

`cancelThisSchedule()`
- Chama o mÃ©todo `cancelThisSchedule` da classe `DW_GetRecordCallCaseBatch`, que provavelmente cancela uma programaÃ§Ã£o agendada.
- Envolve a execuÃ§Ã£o entre `Test.startTest()` e `Test.stopTest()` para controle de teste.

`scheduleThisClass()`
- Invoca o mÃ©todo `scheduleThisClass` da classe principal, possivelmente agendando a execuÃ§Ã£o de uma tarefa.
- Passa `null` como parÃ¢metro, indicando que o mÃ©todo deve lidar com essa entrada de forma adequada.
- Usa `Test.startTest()` e `Test.stopTest()` para delimitar o teste.

`main()`
- MÃ©todo de teste mais completo, que simula uma chamada de API e a inserÃ§Ã£o de registros de Conta e Caso.
- Configura um mock de callout HTTP (`DW_CTIControllerMock`) para simular respostas de chamadas externas.
- Cria e insere uma Conta com informaÃ§Ãµes especÃ­ficas.
- Cria e insere um Caso associado Ã  Conta criada.
- Executa o mÃ©todo `execute` da classe `DW_GetRecordCallCaseBatch`, passando uma lista com o Caso criado, para testar o processamento de registros.
- Usa `Test.startTest()` e `Test.stopTest()` para garantir o controle do contexto de execuÃ§Ã£o durante o teste.

VariÃ¡veis
NÃ£o hÃ¡ variÃ¡veis de instÃ¢ncia na classe de testes, apenas mÃ©todos de teste estÃ¡ticos que simulam diferentes cenÃ¡rios de execuÃ§Ã£o para validar a funcionalidade da classe principal.

Classe: GroupMemberFlowHelperTest

DescriÃ§Ã£o
A classe `GroupMemberFlowHelperTest` Ã© uma classe de teste no Salesforce, utilizada para validar o funcionamento de funcionalidades relacionadas Ã  manipulaÃ§Ã£o de membros de grupos e filas, especialmente no contexto de fluxo de trabalho com leads. Ela garante que o mÃ©todo `nextLeadOwner` da classe `GroupMemberFlowHelper` retorna o prÃ³ximo proprietÃ¡rio de lead esperado.

MÃ©todos
`nextLeadOwnerTest()`
- MÃ©todo de teste que verifica se a lÃ³gica de transferÃªncia de propriedade de leads funciona corretamente.
- NÃ£o recebe parÃ¢metros.
- Executa uma simulaÃ§Ã£o de criaÃ§Ã£o de uma fila, membros de grupo, e associaÃ§Ãµes de objetos de fila.
- Utiliza o mÃ©todo `System.runAs()` para simular a execuÃ§Ã£o sob o contexto de um usuÃ¡rio especÃ­fico.
- Cria uma fila chamada "Fila SDRs".
- Adiciona um membro de grupo (usuÃ¡rio atual) Ã  fila.
- Associa um objeto de fila do tipo Lead Ã  fila criada.
- Cria uma instÃ¢ncia de `queueMemberStatus` para passar como entrada ao mÃ©todo `nextLeadOwner`.
- Verifica se o mÃ©todo `nextLeadOwner` retorna o ID do usuÃ¡rio esperado, que neste caso Ã© o usuÃ¡rio atual.

VariÃ¡veis
`queueSDR`
- Tipo: `Group`
- DescriÃ§Ã£o: Representa uma fila de usuÃ¡rios chamada "Fila SDRs" que serÃ¡ criada para testes.

`groupMemberList`
- Tipo: `List<GroupMember>`
- DescriÃ§Ã£o: Lista que armazena os membros do grupo (fila) criados durante o teste.

`flowInput`
- Tipo: `GroupMemberFlowHelper.queueMemberStatus`
- DescriÃ§Ã£o: Objeto que contÃ©m o estado atual do membro do grupo, incluindo o Ãºltimo proprietÃ¡rio e a lista de membros, utilizado como entrada para o mÃ©todo `nextLeadOwner`.

`groupMemberToInsert`
- Tipo: `GroupMember`
- DescriÃ§Ã£o: Representa um membro do grupo que serÃ¡ inserido na fila, associando o usuÃ¡rio atual ao grupo.

`queuToInsert`
- Tipo: `QueuesObject` (possivelmente uma implementaÃ§Ã£o de fila de objetos)
- DescriÃ§Ã£o: Objeto que associa uma fila a um tipo de objeto (Lead), indicando que hÃ¡ uma fila de Leads vinculada ao grupo criado.

Classe: DW_CancelEnvDocusignController

DescriÃ§Ã£o
A classe `DW_CancelEnvDocusignController` Ã© uma classe pÃºblica e global que fornece funcionalidades para cancelar envios de envelopes no DocuSign, integrando essa operaÃ§Ã£o ao Salesforce. Ela Ã© projetada para ser utilizada por Flow e outros componentes externos, sem restriÃ§Ãµes de compartilhamento de registros.

MÃ©todos
`cancelEnvDocusing(List<CancelEnvelopeRequest> requests)`
- FunÃ§Ã£o invocÃ¡vel via Flow para cancelar o envio de um envelope do DocuSign.
- Aceita uma lista de solicitaÃ§Ãµes, mas processa apenas a primeira.
- Valida se a lista e os campos necessÃ¡rios (`envelopeId` e `motivo`) estÃ£o presentes.
- Delegada ao mÃ©todo principal `cancelEnvDocusign` para realizar o cancelamento efetivo.

`cancelEnvDocusign(String envelopeId, String motivo)`
- MÃ©todo principal que realiza o cancelamento do envelope no DocuSign.
- Recupera o registro do envelope no Salesforce usando o `envelopeId`.
- Monta o payload necessÃ¡rio para solicitar o cancelamento ao DocuSign.
- ObtÃ©m um token de acesso vÃ¡lido para autenticaÃ§Ã£o na API do DocuSign.
- Envia uma requisiÃ§Ã£o HTTP POST para cancelar o envelope no DocuSign.
- Se o cancelamento for bem-sucedido, atualiza o status do envelope no Salesforce para "Cancelado" e registra o motivo.
- Retorna uma resposta JSON indicando sucesso ou erro na operaÃ§Ã£o.

VariÃ¡veis
`CancelEnvelopeRequest`
- Tipo: Classe interna `global class`
- DescriÃ§Ã£o: Representa a estrutura de entrada para a solicitaÃ§Ã£o de cancelamento, contendo o ID do envelope e o motivo do cancelamento.
- VariÃ¡veis:
  - `envelopeId`: ID do envelope no Salesforce.
  - `motivo`: Motivo do cancelamento fornecido pelo usuÃ¡rio.

Notas adicionais
- A classe utiliza componentes auxiliares como `DW_DocusignGetAccessTokenIntegrable`, `DW_RequestFactory`, e `DW_ResponseHTTP` para gerenciar autenticaÃ§Ã£o, requisiÃ§Ãµes HTTP e respostas.
- A operaÃ§Ã£o de cancelamento envolve comunicaÃ§Ã£o com a API do DocuSign e atualizaÃ§Ã£o do status do registro no Salesforce, garantindo consistÃªncia entre sistemas.

Classe: DWCreateATMInvocableTest

DescriÃ§Ã£o
A classe `DWCreateATMInvocableTest` Ã© uma classe de teste no Salesforce, utilizada para validar o funcionamento de mÃ©todos relacionados Ã  criaÃ§Ã£o e exclusÃ£o de membros de equipe de contas, atravÃ©s de uma invocaÃ§Ã£o de uma classe chamada `DWCreateATMInvocable`. Ela garante que o cÃ³digo que manipula membros de equipe de contas funciona corretamente em diferentes cenÃ¡rios.

MÃ©todos
`setup()`
- MÃ©todo anotado com `@testSetup`, que prepara o ambiente de teste criando uma conta de teste.
- Cria uma nova conta com o nome "Test Account" e a insere no banco de dados.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.

`testCreateAccountTeamMember_Insert()`
- Testa a criaÃ§Ã£o de um membro de equipe de uma conta.
- Seleciona uma conta de teste existente.
- Cria uma instÃ¢ncia de `DWCreateATMInvocableInput` e configura com o ID da conta, o ID do usuÃ¡rio atual, o papel "Vendedor" e indica que nÃ£o Ã© uma operaÃ§Ã£o de exclusÃ£o.
- Executa o mÃ©todo `createAccountTeamMember` passando a lista com o input criado, dentro do contexto de teste (`startTest` e `stopTest`).
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.

`testCreateAccountTeamMember_Delete()`
- Testa a exclusÃ£o de um membro de equipe de uma conta.
- Seleciona uma conta de teste existente.
- Insere diretamente um membro de equipe (`AccountTeamMember`) associado Ã  conta, pois mÃ©todos assÃ­ncronos (`@future`) nÃ£o sÃ£o executados em testes.
- Cria uma instÃ¢ncia de `DWCreateATMInvocableInput`, configurando com o ID do usuÃ¡rio atual e marcando como operaÃ§Ã£o de exclusÃ£o (`isDelete = true`).
- Executa o mÃ©todo `createAccountTeamMember` passando a lista com o input criado, dentro do contexto de teste.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.

VariÃ¡veis
Nenhuma variÃ¡vel de classe Ã© definida nesta classe de teste. Ela contÃ©m apenas mÃ©todos de configuraÃ§Ã£o e testes.

Classe: DWSubflowLaucher

DescriÃ§Ã£o
A classe `DWSubflowLaucher` Ã© uma classe pÃºblica que permite acionar dinamicamente subfluxos (flows) no Salesforce. Ela Ã© projetada para ser utilizada em processos automatizados, como fluxos ou integraÃ§Ãµes, onde hÃ¡ necessidade de executar um fluxo especÃ­fico para cada registro fornecido.

MÃ©todos
`launchSubflow(List<Input> inputs)`
- MÃ©todo invocÃ¡vel que aciona um ou mais subfluxos com base na lista de entradas fornecidas.
- ParÃ¢metro: `inputs` (Lista de objetos `Input`): cada item contÃ©m informaÃ§Ãµes necessÃ¡rias para iniciar um fluxo.
- Funcionalidade: Para cada entrada na lista, o mÃ©todo cria uma instÃ¢ncia de uma entrevista de fluxo (`Flow.Interview`) usando o nome do fluxo API e o ID do registro, e entÃ£o inicia a execuÃ§Ã£o do fluxo. Se o cÃ³digo estiver sendo executado em um ambiente de teste, a execuÃ§Ã£o do fluxo Ã© ignorada (nÃ£o inicia o fluxo real).

VariÃ¡veis
`Input`
- Classe interna que representa os dados de entrada necessÃ¡rios para acionar um fluxo.
- VariÃ¡veis:
  - `flowApiName`
    - Tipo: `String`
    - DescriÃ§Ã£o: Nome de API do fluxo que serÃ¡ acionado. Ã‰ obrigatÃ³rio.
  - `recordId`
    - Tipo: `Id`
    - DescriÃ§Ã£o: ID do registro ao qual o fluxo serÃ¡ associado. Ã‰ obrigatÃ³rio.
- Construtores:
  - Um construtor que recebe o nome do fluxo e o ID do registro para criar uma instÃ¢ncia de entrada.
  - Um construtor padrÃ£o vazio, que permite criar uma instÃ¢ncia sem inicializar os atributos imediatamente.

Leitura tÃ©cnica e simplificada
- A classe serve para iniciar fluxos de forma dinÃ¢mica, ou seja, ela pode acionar diferentes fluxos dependendo do nome passado.
- Para cada registro fornecido, ela inicia uma execuÃ§Ã£o do fluxo correspondente, passando o ID do registro.
- Ã‰ Ãºtil em automaÃ§Ãµes onde mÃºltiplos fluxos precisam ser acionados de forma programada ou em massa.
- A classe tambÃ©m possui uma estrutura de entrada (`Input`) que armazena o nome do fluxo e o ID do registro, facilitando a passagem de dados para o mÃ©todo principal.

Classe: DW_DocusignGetStatusDestBatchTest

DescriÃ§Ã£o
A classe `DW_DocusignGetStatusDestBatchTest` Ã© uma classe de testes unitÃ¡rios no Salesforce, responsÃ¡vel por validar o funcionamento da classe `DW_DocusignGetStatusDestinatarioBatch`. Ela garante que os mÃ©todos relacionados ao processamento em lote e agendamento estÃ£o funcionando corretamente, simulando cenÃ¡rios de uso e verificando os resultados esperados.

MÃ©todos
`testExecuteBatchJob()`
- Testa a execuÃ§Ã£o do job em lote que verifica o status dos destinatÃ¡rios do Docusign.
- Cria registros de Conta, Oportunidade, Envelope Docusign e SignatÃ¡rio Docusign fictÃ­cios.
- Configura credenciais fictÃ­cias para o Docusign.
- Executa o batch `DW_DocusignGetStatusDestinatarioBatch`.
- Verifica se o status do signatÃ¡rio foi atualizado corretamente para "Enviado".

`testRunEveryNMinutes()`
- Testa o agendamento do batch para rodar a cada N minutos.
- Cria uma tarefa agendada com uma expressÃ£o CRON.
- NÃ£o verifica o resultado, apenas garante que o agendamento ocorre sem erros.

`testScheduleThisClassWithCustomCron()`
- Testa o agendamento da classe com uma expressÃ£o CRON personalizada.
- Cria uma tarefa agendada para executar a classe `DW_DocusignGetStatusDestinatarioBatch`.
- Garante que o agendamento Ã© realizado sem erros.

`testRunEveryNMinutesInBusinessHours()`
- Testa a execuÃ§Ã£o do mÃ©todo que agendarÃ¡ o batch para rodar a cada N minutos durante o horÃ¡rio comercial.
- Cria uma tarefa agendada com uma expressÃ£o CRON.
- Executa o mÃ©todo que agenda o batch para rodar a cada 15 minutos em horÃ¡rio comercial.
- Garante que o mÃ©todo funciona sem erros.

`testCancelThisSchedule()`
- Testa a funcionalidade de cancelar o agendamento do batch.
- Agenda uma execuÃ§Ã£o com uma expressÃ£o CRON.
- Cancela o agendamento e garante que a operaÃ§Ã£o Ã© concluÃ­da sem erros.

VariÃ¡veis
Nenhuma variÃ¡vel de classe Ã© definida nesta classe de testes. Ela utiliza variÃ¡veis locais para criar registros e configurar agendamentos durante os testes.

Classe: DW_EventService

DescriÃ§Ã£o
A classe `DW_EventService` Ã© uma classe pÃºblica que fornece funcionalidades relacionadas ao gerenciamento de eventos, especialmente no que diz respeito ao tratamento de intervalos de datas e horÃ¡rios. Ela inclui uma classe interna que representa um intervalo de tempo com informaÃ§Ãµes de inÃ­cio, fim e proprietÃ¡rio do evento.

MÃ©todos
Construtor `DW_EventService()`
- Este mÃ©todo construtor Ã© responsÃ¡vel por criar uma instÃ¢ncia da classe `DW_EventService`.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.

Classe Interna: DateTimeRangeEvent
- Representa um intervalo de tempo para um evento, incluindo detalhes de inÃ­cio, fim e proprietÃ¡rio.

`DateTimeRangeEvent(DateTime startDateTime, DateTime endDateTime, String ownerId, Integer minutesToAdd)`
- Construtor que inicializa um intervalo de data e hora.
- ParÃ¢metros:
  - `startDateTime` (DateTime): data e hora de inÃ­cio do evento.
  - `endDateTime` (DateTime): data e hora de fim do evento.
  - `ownerId` (String): identificador do proprietÃ¡rio do evento.
  - `minutesToAdd` (Integer): nÃºmero de minutos a serem adicionados ou subtraÃ­dos do horÃ¡rio de inÃ­cio e fim.
- Funcionalidade:
  - Ajusta o horÃ¡rio de inÃ­cio subtraindo o nÃºmero de minutos especificado.
  - Ajusta o horÃ¡rio de fim adicionando o mesmo nÃºmero de minutos.
  - Formata ambos os horÃ¡rios no padrÃ£o ISO 8601 com precisÃ£o de milissegundos.
  - Armazena o `ownerId` entre aspas simples.

VariÃ¡veis
`startDateTime`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena a data e hora de inÃ­cio do evento, ajustada pelo nÃºmero de minutos e formatada como uma string no padrÃ£o ISO 8601.

`endDateTime`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena a data e hora de fim do evento, ajustada pelo nÃºmero de minutos e formatada como uma string no padrÃ£o ISO 8601.

`ownerId`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o identificador do proprietÃ¡rio do evento, envolvido por aspas simples para uso em consultas ou integraÃ§Ãµes.

Classe: DW_CustomLookupLwcControllerTest

DescriÃ§Ã£o
A classe `DW_CustomLookupLwcControllerTest` Ã© uma classe de teste no Salesforce, criada para validar o funcionamento do controlador `DW_CustomLookupLWCController`. Ela realiza testes automatizados para garantir que a busca de dados de lookup (consulta de registros relacionados) estÃ¡ funcionando corretamente, especialmente para objetos do tipo Account e Group (Fila).

MÃ©todos
`setupTestData()`
- MÃ©todo anotado com `@testSetup`, que prepara os dados necessÃ¡rios para os testes.
- Cria uma nova conta e uma fila (queue) usando uma fÃ¡brica de dados personalizada (`DW_DataFactory`).
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.

`testFetchLookupData()`
- MÃ©todo de teste que verifica a funcionalidade de busca de dados de lookup.
- Inicia a execuÃ§Ã£o do teste com `Test.startTest()` e termina com `Test.stopTest()`.
- Cria uma nova conta com informaÃ§Ãµes especÃ­ficas, incluindo nome, documento, cÃ³digo da loja e tipo de registro.
- Insere essa conta no banco de dados.
- Executa uma consulta para listar filas existentes, apenas para depuraÃ§Ã£o.
- Chama o mÃ©todo `fetchLookupData` do controlador `DW_CustomLookupLWCController` para buscar registros relacionados ao nome, tipo de objeto, campos desejados, e o ID da conta criada.
- Verifica se a lista de resultados nÃ£o estÃ¡ vazia e se contÃ©m pelo menos uma Conta e uma Fila.
- ParÃ¢metros: Nenhum (executa uma operaÃ§Ã£o de busca).
- Retorno: Nenhum (apenas realiza verificaÃ§Ãµes e depura).

VariÃ¡veis
`accountLojaToInsert`
- Tipo: `Account`
- DescriÃ§Ã£o: Objeto de conta criado e inserido no banco de dados para testes, com atributos especÃ­ficos como nome, documento e cÃ³digo da loja.

`result`
- Tipo: `List<SObject>`
- DescriÃ§Ã£o: Lista de registros retornados pela busca de lookup, podendo conter objetos do tipo Account, Group ou outros.

`accountCount`
- Tipo: `Integer`
- DescriÃ§Ã£o: Contador de registros do tipo Account encontrados na lista de resultados.

`groupCount`
- Tipo: `Integer`
- DescriÃ§Ã£o: Contador de registros do tipo Group (Fila) encontrados na lista de resultados.

Classe: DW_CancelEnvDocusignControllerTest

DescriÃ§Ã£o
A classe `DW_CancelEnvDocusignControllerTest` Ã© uma classe de testes unitÃ¡rios no Salesforce, responsÃ¡vel por verificar se a funcionalidade de cancelamento de envelopes Docusign estÃ¡ funcionando corretamente. Ela simula diferentes cenÃ¡rios de sucesso e falha ao cancelar um envelope, garantindo que o sistema se comporte como esperado.

MÃ©todos
`testCancelEnvDocusignSuccess()`
- Testa o cenÃ¡rio de sucesso ao cancelar um envelope Docusign.
- Cria registros de contas, oportunidade, envelope Docusign e credenciais fictÃ­cias.
- Mocka uma resposta HTTP bem-sucedida para simular o cancelamento.
- Executa o mÃ©todo de cancelamento e verifica se o envelope foi atualizado corretamente com o status de cancelamento e motivo.
- ObservaÃ§Ã£o: Algumas assertivas estÃ£o comentadas, mas seu objetivo Ã© validar o resultado esperado.

`testCancelEnvDocusignFailure()`
- Testa o cenÃ¡rio de falha ao tentar cancelar um envelope Docusign.
- Cria registros de oportunidade e envelope Docusign.
- Mocka uma resposta HTTP de falha.
- Executa o mÃ©todo de cancelamento e verifica se o erro foi tratado corretamente.
- ObservaÃ§Ã£o: Algumas linhas de cÃ³digo estÃ£o comentadas, mas seu objetivo Ã© validar o tratamento de erro.

VariÃ¡veis
`accountLoja`
- Tipo: `Account`
- DescriÃ§Ã£o: Conta do tipo loja, com informaÃ§Ãµes especÃ­ficas, incluindo um tipo de registro personalizado `DWLoja`.

`account`
- Tipo: `Account`
- DescriÃ§Ã£o: Conta padrÃ£o, usada para relacionar com a oportunidade.

`opportunity`
- Tipo: `Opportunity`
- DescriÃ§Ã£o: Registro de oportunidade criado para associar ao envelope Docusign.

`testEnvelope`
- Tipo: `DWEnvelopeDocusign__c`
- DescriÃ§Ã£o: Envelope Docusign fictÃ­cio criado para o teste, contendo IDs de envelope e documento.

`testCredentials`
- Tipo: `DWCredenciaisDocusign__c`
- DescriÃ§Ã£o: Credenciais fictÃ­cias para autenticaÃ§Ã£o na API do Docusign, usadas no teste.

`updatedEnvelope`
- Tipo: `DWEnvelopeDocusign__c`
- DescriÃ§Ã£o: Envelope Docusign atualizado apÃ³s a tentativa de cancelamento, utilizado para verificar se o status e motivo foram alterados corretamente.

Classe: DW_AccountTriggerTest

DescriÃ§Ã£o
A classe `DW_AccountTriggerTest` Ã© uma classe de teste no Salesforce, responsÃ¡vel por validar o funcionamento de triggers ou lÃ³gica associada ao objeto `Account`. Ela contÃ©m mÃ©todos de teste que verificam a formataÃ§Ã£o de documentos (CPF e CNPJ) e o tratamento de erros ao inserir registros de contas.

MÃ©todos
`mainWithCPF()`
- Testa a criaÃ§Ã£o de uma conta com um CPF vÃ¡lido.
- Cria uma nova conta com um nome, um documento (CPF), e telefone.
- Insere a conta no banco de dados.
- Recupera a conta inserida para verificar se a formataÃ§Ã£o do CPF foi aplicada corretamente.
- Asserts: Verifica se o documento foi formatado como CPF (exemplo: '088.163.419-04') e se o telefone permanece com o formato esperado.

`mainWithCNPJ()`
- Testa a criaÃ§Ã£o de uma conta com um CNPJ vÃ¡lido.
- Cria uma nova conta com um nome, um documento (CNPJ), e telefone.
- Insere a conta no banco de dados.
- Recupera a conta inserida para verificar se a formataÃ§Ã£o do CNPJ foi aplicada corretamente.
- Asserts: Verifica se o documento foi formatado como CNPJ (exemplo: '29.576.233/0001-19') e se o telefone permanece com o formato esperado.

`mainWithError1()`
- Testa o tratamento de erro ao inserir uma conta com telefone invÃ¡lido (com um dÃ­gito a mais).
- Cria uma conta com um telefone mal formatado.
- Tenta inserir a conta, esperando que uma exceÃ§Ã£o seja lanÃ§ada.
- O bloco `try-catch` captura a exceÃ§Ã£o, mas nÃ£o realiza aÃ§Ãµes adicionais, apenas evita que o teste falhe.

`mainWithError2()`
- Testa o tratamento de erro ao inserir uma conta com um documento invÃ¡lido (com comprimento incorreto).
- Cria uma conta com um documento que nÃ£o corresponde a CPF ou CNPJ vÃ¡lidos.
- Tenta inserir a conta, esperando que uma exceÃ§Ã£o seja lanÃ§ada.
- O bloco `try-catch` captura a exceÃ§Ã£o, sem aÃ§Ãµes adicionais.

VariÃ¡veis
Nenhuma variÃ¡vel de classe Ã© definida nesta classe de teste. Os objetos `Account` sÃ£o criados localmente dentro dos mÃ©todos para realizar os testes.

Classe: DWOpportunityDraftTypingController

DescriÃ§Ã£o
A classe `DWOpportunityDraftTypingController` Ã© uma classe Apex pÃºblica, sem compartilhamento de regras de acesso, que fornece mÃ©todos para realizar operaÃ§Ãµes de upsert (inserÃ§Ã£o ou atualizaÃ§Ã£o) em registros relacionados a oportunidades no Salesforce. Ela Ã© projetada para ser utilizada em componentes Lightning, permitindo manipulaÃ§Ã£o de dados de oportunidades, itens de linha de oportunidade e condiÃ§Ãµes de pagamento de forma segura e controlada.

MÃ©todos
`upsertOpportunity(Opportunity opp)`
- DescriÃ§Ã£o: Realiza um upsert de uma oportunidade. Se a oportunidade existir, ela serÃ¡ atualizada; se nÃ£o, serÃ¡ criada.
- ParÃ¢metro: `opp` (Opportunity) â€” o registro de oportunidade a ser inserido ou atualizado.
- Retorno: Um mapa (`Map<String, Object>`) contendo a oportunidade processada, acessÃ­vel pela chave `'opp'`.
- ObservaÃ§Ã£o: Se ocorrer algum erro durante o processo, uma exceÃ§Ã£o do tipo `AuraHandledException` serÃ¡ lanÃ§ada com detalhes do erro.

`upsertOpportunityLineItems(List<OpportunityLineItem> lineItems)`
- DescriÃ§Ã£o: Realiza um upsert em uma lista de itens de linha de oportunidade, que representam produtos ou serviÃ§os associados Ã  oportunidade.
- ParÃ¢metro: `lineItems` (List<OpportunityLineItem>) â€” lista de itens de linha a serem inseridos ou atualizados.
- Retorno: Um mapa contendo a lista de itens de linha processados, acessÃ­vel pela chave `'lineItems'`.
- ObservaÃ§Ã£o: Caso a lista seja nula ou ocorra algum erro, uma exceÃ§Ã£o controlada serÃ¡ lanÃ§ada.

`upsertCondicoesPagamento(List<CondicaoPagamento__c> condicoesPagamento)`
- DescriÃ§Ã£o: Realiza um upsert em uma lista de condiÃ§Ãµes de pagamento relacionadas Ã  oportunidade.
- ParÃ¢metro: `condicoesPagamento` (List<CondicaoPagamento__c>) â€” lista de condiÃ§Ãµes de pagamento a serem inseridas ou atualizadas.
- Retorno: Um mapa contendo as condiÃ§Ãµes de pagamento processadas, acessÃ­vel pela chave `'condicoesPagamento'`.
- ObservaÃ§Ã£o: Caso a lista seja nula ou ocorra algum erro, uma exceÃ§Ã£o controlada serÃ¡ lanÃ§ada.

VariÃ¡veis
Nenhuma variÃ¡vel de classe foi declarada explicitamente nesta classe. Ela consiste apenas em mÃ©todos estÃ¡ticos que operam com os parÃ¢metros fornecidos.

Classe: DW_FluigGetAccessTokenIntegrableTest

DescriÃ§Ã£o
A classe `DW_FluigGetAccessTokenIntegrableTest` Ã© uma classe de testes unitÃ¡rios no Salesforce, responsÃ¡vel por validar o funcionamento da classe `DW_FluigGetAccessTokenIntegrable`. Ela garante que os mÃ©todos dessa classe principal estejam operando corretamente, simulando diferentes cenÃ¡rios de uso.

MÃ©todos
`setup()`
- MÃ©todo anotado com `@testSetup`, que prepara os dados necessÃ¡rios para os testes.
- Cria uma instÃ¢ncia do objeto personalizado `CredenciaisFluig__c` com informaÃ§Ãµes de credenciais e endpoints de autenticaÃ§Ã£o.
- Insere esse objeto no banco de dados para que possa ser utilizado nos testes.

`testConstructEndpoint()`
- Testa se o mÃ©todo `constructEndpoint()` da classe principal retorna o endpoint de autenticaÃ§Ã£o correto.
- Compara a URL gerada com a URL esperada, garantindo que a construÃ§Ã£o do endpoint esteja correta.

`testGetSerializedRequest()`
- Verifica se o mÃ©todo `getSerializedRequest()` gera o JSON de requisiÃ§Ã£o com os dados de login e senha corretos.
- Asserts garantem que o JSON contÃ©m as informaÃ§Ãµes de usuÃ¡rio e senha previamente configuradas.

`testConstructHeaders()`
- Testa se o mÃ©todo `constructHeaders()` cria o cabeÃ§alho HTTP adequado.
- Asserts verificam se os cabeÃ§alhos incluem `Content-Type` e `Accept` com o valor `application/json`.

`testCallIntegrationAndDeserializeResponse()`
- Testa a chamada de integraÃ§Ã£o simulada ao serviÃ§o externo.
- Usa um mock de resposta (`DW_AvaliacaoMock`) para simular uma resposta HTTP com um token.
- Verifica se a resposta foi corretamente desserializada e se o token esperado estÃ¡ presente.

`testMissingCredentialsThrowsException()`
- Simula a ausÃªncia de credenciais ao deletar o objeto `CredenciaisFluig__c`.
- Testa se o mÃ©todo `constructEndpoint()` lanÃ§a uma exceÃ§Ã£o adequada ao tentar obter o endpoint sem credenciais.
- Asserts garantem que a exceÃ§Ã£o contÃ©m a mensagem esperada, indicando erro na obtenÃ§Ã£o do token.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia Ã© definida nesta classe de testes, pois ela apenas realiza operaÃ§Ãµes de configuraÃ§Ã£o e validaÃ§Ã£o de mÃ©todos da classe principal.

Classe: DW_QueryConditionComposition

DescriÃ§Ã£o
A classe `DW_QueryConditionComposition` Ã© utilizada para construir e gerenciar condiÃ§Ãµes de consulta dinÃ¢micas, permitindo combinar mÃºltiplas condiÃ§Ãµes e agrupÃ¡-las com operadores lÃ³gicos como AND e OR. Essa estrutura Ã© Ãºtil para criar consultas complexas de forma programÃ¡tica no Salesforce.

MÃ©todos
`setOrConditionList(List<DW_QueryCondition> queryConditionList, List<DW_QueryConditionComposition> children)`
- Cria uma instÃ¢ncia de `DW_QueryConditionComposition` com uma lista de condiÃ§Ãµes e filhos, configurando o operador lÃ³gico como OR.
- ParÃ¢metros:
  - `queryConditionList` (List<DW_QueryCondition>): Lista de condiÃ§Ãµes que serÃ£o combinadas.
  - `children` (List<DW_QueryConditionComposition>): Lista de composiÃ§Ãµes de condiÃ§Ãµes filhas.
- Retorno: Uma nova instÃ¢ncia de `DW_QueryConditionComposition` com o operador OR aplicado Ã s condiÃ§Ãµes e filhos.

`setConditionList(List<DW_QueryCondition> queryConditionList, List<DW_QueryConditionComposition> children)`
- Cria uma instÃ¢ncia de `DW_QueryConditionComposition` com uma lista de condiÃ§Ãµes e, opcionalmente, uma lista de composiÃ§Ãµes de condiÃ§Ãµes filhas.
- ParÃ¢metros:
  - `queryConditionList` (List<DW_QueryCondition>): Lista de condiÃ§Ãµes que serÃ£o agrupadas.
  - `children` (List<DW_QueryConditionComposition>): Lista de composiÃ§Ãµes de condiÃ§Ãµes filhas (pode ser nula).
- Retorno: Uma nova instÃ¢ncia de `DW_QueryConditionComposition` com as condiÃ§Ãµes e filhos atribuÃ­dos.

VariÃ¡veis
`queryConditionList`
- Tipo: `List<DW_QueryCondition>`
- DescriÃ§Ã£o: Armazena uma lista de condiÃ§Ãµes de consulta que fazem parte da composiÃ§Ã£o atual.

`children`
- Tipo: `List<DW_QueryConditionComposition>`
- DescriÃ§Ã£o: Armazena uma lista de outras composiÃ§Ãµes de condiÃ§Ãµes, permitindo a criaÃ§Ã£o de estruturas hierÃ¡rquicas de condiÃ§Ãµes.

`childrenOperator`
- Tipo: `DW_OperatorOptions`
- DescriÃ§Ã£o: Define o operador lÃ³gico (AND ou OR) que serÃ¡ aplicado Ã s condiÃ§Ãµes e Ã s composiÃ§Ãµes filhas. O padrÃ£o Ã© AND, mas pode ser alterado para OR usando o mÃ©todo `setOrConditionList`.

Classe: DwCustomListViewControllerTest

DescriÃ§Ã£o
A classe `DwCustomListViewControllerTest` Ã© uma classe de testes unitÃ¡rios no Salesforce, responsÃ¡vel por validar o funcionamento da classe `DwCustomListViewController`. Ela garante que os mÃ©todos da classe principal estejam operando corretamente, simulando diferentes cenÃ¡rios de uso.

MÃ©todos
`setupTestData()`
- PropÃ³sito: Configura dados de teste essenciais, criando registros de contas, leads e oportunidades para serem utilizados nos testes.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.
- Detalhes: Cria registros de contas com tipos especÃ­ficos, leads, oportunidades e associaÃ§Ãµes necessÃ¡rias para os testes.

`testGetRecordsByObject()`
- PropÃ³sito: Testa o mÃ©todo `getRecordsByObject` passando um Lead vÃ¡lido.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.
- Detalhes: Verifica se o mÃ©todo retorna um DTO vÃ¡lido e se o `recordId` no DTO corresponde ao ID do Lead passado.

`testGetRecordsByObjectOpp()`
- PropÃ³sito: Testa o mÃ©todo `getRecordsByObject` usando uma oportunidade (`Opportunity`).
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.
- Detalhes: Confirma se o mÃ©todo retorna um DTO vÃ¡lido e se o `recordId` corresponde ao ID da oportunidade passada.

`testGetRecordsByObjectWithInvalidObject()`
- PropÃ³sito: Testa o mÃ©todo `getRecordsByObject` com um registro de Conta que nÃ£o estÃ¡ mapeado na configuraÃ§Ã£o.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.
- Detalhes: Espera que uma exceÃ§Ã£o seja lanÃ§ada ao tentar obter registros de um objeto nÃ£o configurado, garantindo o tratamento de erros.

`testGetRecordsByObjectWithNullId()`
- PropÃ³sito: Testa o mÃ©todo `getRecordsByObject` passando um ID nulo.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.
- Detalhes: Verifica se o mÃ©todo retorna `null` quando o `recordId` fornecido Ã© nulo, garantindo comportamento esperado para entradas invÃ¡lidas.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia Ã© declarada na classe de testes. Todos os dados utilizados sÃ£o criados e manipulados dentro dos mÃ©todos de teste ou na configuraÃ§Ã£o inicial.

Classe: SiteRegisterController

DescriÃ§Ã£o
A classe `SiteRegisterController` Ã© responsÃ¡vel por criar um usuÃ¡rio em um portal do Salesforce, permitindo que usuÃ¡rios se registrem e acessem funcionalidades especÃ­ficas do portal. Ela gerencia os dados do usuÃ¡rio, valida as informaÃ§Ãµes e realiza o processo de registro e login.

MÃ©todos
`SiteRegisterController()`
- Construtor da classe.
- ParÃ¢metros: Nenhum.
- DescriÃ§Ã£o: Inicializa uma nova instÃ¢ncia da classe, sem realizar aÃ§Ãµes adicionais.

`isValidPassword()`
- Verifica se a senha e a confirmaÃ§Ã£o de senha sÃ£o iguais.
- ParÃ¢metros: Nenhum.
- Retorno: `Boolean`.
- DescriÃ§Ã£o: Retorna `true` se a senha e a confirmaÃ§Ã£o coincidirem, caso contrÃ¡rio, retorna `false`.

`registerUser()`
- Processo principal de registro do usuÃ¡rio.
- ParÃ¢metros: Nenhum.
- Retorno: `PageReference`.
- DescriÃ§Ã£o: Valida as senhas, cria um usuÃ¡rio no portal com os dados fornecidos, e tenta fazer login automaticamente ou redireciona para uma pÃ¡gina de confirmaÃ§Ã£o.

VariÃ¡veis
`PORTAL_ACCOUNT_ID`
- Tipo: `Id` (identificador do Salesforce)
- DescriÃ§Ã£o: ID da conta na qual o contato serÃ¡ criado e habilitado como usuÃ¡rio do portal. Ã‰ necessÃ¡rio que o proprietÃ¡rio da conta esteja na hierarquia de funÃ§Ãµes.

`username`
- Tipo: `String`
- DescriÃ§Ã£o: Nome de usuÃ¡rio do portal, utilizado para login.

`email`
- Tipo: `String`
- DescriÃ§Ã£o: EndereÃ§o de email do usuÃ¡rio.

`password`
- Tipo: `String`
- DescriÃ§Ã£o: Senha do usuÃ¡rio. Pode ser definida pelo usuÃ¡rio ou gerada aleatoriamente se nula.

`confirmPassword`
- Tipo: `String`
- DescriÃ§Ã£o: ConfirmaÃ§Ã£o da senha, usada para validar se a senha foi digitada corretamente.

`communityNickname`
- Tipo: `String`
- DescriÃ§Ã£o: Apelido do usuÃ¡rio na comunidade do portal, utilizado como identificador pÃºblico.

Notas adicionais
- A classe utiliza o mÃ©todo `Site.createPortalUser()` para criar o usuÃ¡rio no portal, associando-o Ã  conta definida.
- ApÃ³s a criaÃ§Ã£o, tenta fazer login automaticamente com `Site.login()`, ou redireciona para uma pÃ¡gina de confirmaÃ§Ã£o.
- A validaÃ§Ã£o de senha garante que o usuÃ¡rio nÃ£o cometa erros ao digitar a senha e sua confirmaÃ§Ã£o.

Classe: DW_CustomCompactLayout

DescriÃ§Ã£o
A classe `DW_CustomCompactLayout` Ã© uma classe utilitÃ¡ria escrita em Apex que fornece mÃ©todos para construir layouts compactos dinamicamente em componentes Lightning Web Components (LWC). Ela permite obter valores de campos especÃ­ficos de registros e informaÃ§Ãµes detalhadas sobre os campos de um Field Set, incluindo tipos, labels e valores relacionados, tudo de forma dinÃ¢mica e configurÃ¡vel.

MÃ©todos
`getDynamicField(String objectName, String fieldName, String recordId)`
- DescriÃ§Ã£o: Retorna dinamicamente o valor de um campo especÃ­fico de um registro, Ãºtil para componentes LWC que precisam consultar campos configurÃ¡veis.
- ParÃ¢metros:
  - `objectName` (String): nome do objeto Salesforce (exemplo: 'Account', 'Lead').
  - `fieldName` (String): nome do campo do objeto (exemplo: 'Name', 'Phone').
  - `recordId` (String): ID do registro do qual o valor serÃ¡ obtido.
- Retorno: Uma string JSON contendo o registro com o campo solicitado ou uma mensagem de erro, dependendo do sucesso da operaÃ§Ã£o.
- Funcionalidade: Valida os parÃ¢metros, monta uma query dinÃ¢mica para buscar o campo desejado e retorna o resultado ou erro.

`getFieldSetFields(String objectName, String fieldSetName, Id recordId)`
- DescriÃ§Ã£o: Retorna informaÃ§Ãµes detalhadas de um Field Set, incluindo valores dos campos, tipos, labels e nomes de registros relacionados, permitindo exibir esses dados dinamicamente em um componente LWC.
- ParÃ¢metros:
  - `objectName` (String): nome do objeto Salesforce.
  - `fieldSetName` (String): nome do Field Set configurado no objeto.
  - `recordId` (Id): ID do registro do qual os valores serÃ£o extraÃ­dos.
- Retorno: Um mapa contendo:
  - `values`: os valores atuais dos campos do registro.
  - `types`: os tipos de cada campo.
  - `labels`: os labels amigÃ¡veis de cada campo, incluindo nomes de registros relacionados.
- Funcionalidade: Valida os parÃ¢metros, obtÃ©m os campos do Field Set, consulta os valores do registro, busca nomes de registros relacionados e gera labels amigÃ¡veis para exibiÃ§Ã£o.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia Ã© definida na classe, pois ela consiste apenas em mÃ©todos estÃ¡ticos utilitÃ¡rios.

Classe: DWCustomListViewUtils

DescriÃ§Ã£o
A classe `DWCustomListViewUtils` Ã© uma classe utilitÃ¡ria (Utils) no Salesforce que fornece mÃ©todos e estruturas para converter registros de objetos padrÃ£o (Lead e Opportunity) em um formato especÃ­fico (`RelatedRecordData`) utilizado em listas personalizadas na interface do Lightning Web Component (LWC). Ela centraliza a lÃ³gica de transformaÃ§Ã£o de dados e define os Ã­cones padrÃ£o utilizados na exibiÃ§Ã£o dessas listas.

MÃ©todos
`parseOpportunityToRelatedRecordData(Opportunity opportunity)`
- Converte um registro de Opportunity em um objeto `RelatedRecordData` que pode ser exibido em uma lista personalizada.
- ParÃ¢metro: `opportunity` (Opportunity): o registro de oportunidade a ser convertido.
- Retorno: `DwCustomListView.RelatedRecordData` com informaÃ§Ãµes formatadas do Opportunity, como ID, nome, criador, data de criaÃ§Ã£o, status e Ã­cone.

`parseLeadToRelatedRecordData(Lead lead)`
- Converte um registro de Lead em um objeto `RelatedRecordData` para exibiÃ§Ã£o em listas.
- ParÃ¢metro: `lead` (Lead): o registro de lead a ser convertido.
- Retorno: `DwCustomListView.RelatedRecordData` com informaÃ§Ãµes do Lead, incluindo ID, nome, criador, data de criaÃ§Ã£o, status e Ã­cone.

VariÃ¡veis
`ICONS` (EnumeraÃ§Ã£o)
- Tipo: EnumeraÃ§Ã£o
- DescriÃ§Ã£o: Define os tipos de Ã­cones utilizados na interface para representar objetos especÃ­ficos. PossÃ­veis valores:
  - `LEAD`: representa um Lead.
  - `OPPORTUNITY`: representa uma Oportunidade.

`ICON_NAME` (Mapa)
- Tipo: Map<Enum, String>
- DescriÃ§Ã£o: Mapeia cada valor do enum `ICONS` para o nome do Ã­cone padrÃ£o do Salesforce correspondente.
- Exemplos:
  - `LEAD` â†’ `'standard:lead'`
  - `OPPORTUNITY` â†’ `'standard:opportunity'`

Resumo tÃ©cnico
A classe fornece mÃ©todos estÃ¡ticos para transformar registros de Lead e Opportunity em objetos de dados prontos para exibiÃ§Ã£o em listas personalizadas, padronizando tambÃ©m os Ã­cones utilizados para cada tipo de registro. Ela usa um enum para definir os tipos de Ã­cones e um mapa para associar esses tipos aos nomes dos Ã­cones padrÃ£o do Salesforce. Essa abordagem facilita a manutenÃ§Ã£o e a consistÃªncia na apresentaÃ§Ã£o visual dos registros na interface do usuÃ¡rio.

Classe: TermoHandlerTest

DescriÃ§Ã£o
A classe `TermoHandlerTest` Ã© uma classe de testes automatizados no Salesforce, criada para validar funcionalidades relacionadas ao processamento de documentos e dados na entidade `Termo__c`. Ela garante que os mÃ©todos de formataÃ§Ã£o e validaÃ§Ã£o de documentos (como CPF, CNPJ, RG) estejam funcionando corretamente, alÃ©m de verificar regras de negÃ³cio para nomes e outros campos.

MÃ©todos
*Nota: Grande parte do cÃ³digo estÃ¡ comentada, indicando que esses testes podem estar desativados ou aguardando implementaÃ§Ã£o.*

- `testFormatarDocumentos()`
  - Objetivo: Testar a formataÃ§Ã£o dos documentos (CPF, CNPJ, etc.) na lista de registros `Termo__c`.
  - Como funciona: Carrega uma lista de registros `Termo__c`, chama o mÃ©todo `formatarDocumentos` para formatar os documentos, e entÃ£o verifica se os documentos foram formatados corretamente, ou seja, se os valores foram alterados de forma esperada apÃ³s a formataÃ§Ã£o.

- `formatarDocumentosCPFTest()`
  - Objetivo: Validar a formataÃ§Ã£o e validaÃ§Ã£o de CPF.
  - Como funciona: Cria vÃ¡rios registros `Termo__c` com diferentes formatos e valores de CPF, tenta inserir esses registros, e verifica se a validaÃ§Ã£o estÃ¡ correta, incluindo erros para CPFs invÃ¡lidos, com letras, tamanho incorreto, ou nÃºmeros repetidos.

- `formatarDocumentosCNPJTest()`
  - Objetivo: Validar a formataÃ§Ã£o e validaÃ§Ã£o de CNPJ.
  - Como funciona: Cria registros `Termo__c` com diferentes formatos de CNPJ, tenta inserir, e verifica se a validaÃ§Ã£o captura erros como caracteres invÃ¡lidos, tamanho incorreto, ou nÃºmero de dÃ­gitos errado.

- `formatarDocumentosRGTest()`
  - Objetivo: Validar a formataÃ§Ã£o de RG.
  - Como funciona: Cria registros com RGs em diferentes formatos, tenta inserir, e verifica se a formataÃ§Ã£o e validaÃ§Ã£o estÃ£o corretas, incluindo erro para RGs com quantidade de dÃ­gitos invÃ¡lida.

- `validationNomeTest()`
  - Objetivo: Validar o campo de nome.
  - Como funciona: Cria registros com nomes vÃ¡lidos e invÃ¡lidos, tenta inserir, e verifica se a validaÃ§Ã£o captura nomes com caracteres numÃ©ricos ou especiais, garantindo que apenas nomes corretos sejam aceitos.

VariÃ¡veis
*Nota: Como a maior parte do cÃ³digo estÃ¡ comentada, nÃ£o hÃ¡ variÃ¡veis de instÃ¢ncia ou de classe ativas visÃ­veis na implementaÃ§Ã£o atual.*

Classe: MicrobatchSelfRegController

DescriÃ§Ã£o
A classe `MicrobatchSelfRegController` Ã© responsÃ¡vel por gerenciar o processo de registro de usuÃ¡rios em uma comunidade do Salesforce. Ela coleta informaÃ§Ãµes do usuÃ¡rio, cria registros de usuÃ¡rio, conta e contato, e realiza a integraÃ§Ã£o com o sistema externo para criar o usuÃ¡rio na plataforma.

MÃ©todos
`MicrobatchSelfRegController()`
- Construtor da classe.
- Verifica se hÃ¡ um parÃ¢metro `expid` na URL da pÃ¡gina atual e, se presente, define o ID de experiÃªncia do site com esse valor.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.

`registerUser()`
- Executa o processo de registro do usuÃ¡rio na comunidade.
- Cria objetos de usuÃ¡rio, conta e contato com base nos dados fornecidos.
- Tenta criar o usuÃ¡rio externo assincronamente usando a API `Network.createExternalUserAsync`.
- Se ocorrer um erro na criaÃ§Ã£o, captura a mensagem de erro e exibe na interface.
- Se a criaÃ§Ã£o for bem-sucedida, redireciona para uma pÃ¡gina de confirmaÃ§Ã£o.
- Retorno: Um `PageReference` para a pÃ¡gina de confirmaÃ§Ã£o ou `null` em caso de falha.

VariÃ¡veis
`firstName`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o primeiro nome do usuÃ¡rio que serÃ¡ registrado.

`lastName`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o sobrenome do usuÃ¡rio que serÃ¡ registrado.

`email`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o email do usuÃ¡rio, utilizado como nome de usuÃ¡rio na criaÃ§Ã£o do sistema externo.

`communityNickname`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o apelido do usuÃ¡rio na comunidade, com tratamento para remover espaÃ§os em branco extras ao definir o valor.

`expid`
- Tipo: `String` (obtido do parÃ¢metro da URL)
- DescriÃ§Ã£o: ID de experiÃªncia do site, utilizado para configurar o contexto da pÃ¡gina.

`userName`
- Tipo: `String`
- DescriÃ§Ã£o: Nome de usuÃ¡rio, definido como o email fornecido.

`accountName`
- Tipo: `String`
- DescriÃ§Ã£o: Nome da conta, a ser preenchido pelo cliente.

`contactName`
- Tipo: `String`
- DescriÃ§Ã£o: Nome do contato, a ser preenchido pelo cliente.

`profileId`
- Tipo: `String`
- DescriÃ§Ã£o: ID do perfil do usuÃ¡rio, a ser preenchido pelo cliente.

`UUID`
- Tipo: `String`
- DescriÃ§Ã£o: Identificador Ãºnico retornado apÃ³s a tentativa de criaÃ§Ã£o do usuÃ¡rio externo, usado para verificar se a operaÃ§Ã£o foi bem-sucedida.

Classe: DW_DocusignController

DescriÃ§Ã£o
A classe `DW_DocusignController` Ã© responsÃ¡vel por fornecer funcionalidades relacionadas Ã  assinatura de documentos usando o DocuSign. Ela disponibiliza mÃ©todos para obter URLs de documentos especÃ­ficos e para recuperar informaÃ§Ãµes sobre os signatÃ¡rios envolvidos em um processo de assinatura, com base no registro fornecido.

MÃ©todos
`getUrlDoc(String recordId, String type, String docId)`
- PropÃ³sito: Retornar a URL de acesso a um documento, dependendo do tipo de documento solicitado.
- ParÃ¢metros:
  - `recordId` (String): ID do registro ao qual o documento estÃ¡ associado, como uma oportunidade ou um termo personalizado.
  - `type` (String): Tipo do documento, por exemplo, 'minuta', 'EnvioNotaFiscal', ou outros tipos personalizados.
  - `docId` (String): ID da versÃ£o do documento, utilizado especialmente para notas fiscais.
- Retorno: Uma `String` contendo a URL que leva ao documento ou Ã  pÃ¡gina de visualizaÃ§Ã£o correspondente.
- Funcionamento:
  - Se o tipo for 'minuta', retorna uma URL para uma pÃ¡gina Visualforce especÃ­fica para minuta.
  - Se for 'EnvioNotaFiscal', retorna uma URL para download do documento PDF.
  - Para outros tipos, constrÃ³i uma URL para uma pÃ¡gina Visualforce com o nome do tipo.

`getSigners(String recordId)`
- PropÃ³sito: Retornar um mapa contendo os signatÃ¡rios envolvidos no documento, com suas informaÃ§Ãµes.
- ParÃ¢metros:
  - `recordId` (String): ID do registro, que pode ser uma oportunidade ou um termo personalizado.
- Retorno: Um `Map<String, Signer>` onde a chave Ã© uma identificaÃ§Ã£o do signatÃ¡rio (como 'signerEmpresa') e o valor Ã© um objeto `Signer` com detalhes do signatÃ¡rio.
- Funcionamento:
  - Se o registro for uma oportunidade (prefixo '006'), busca os detalhes do proprietÃ¡rio, da conta relacionada e do gerente do proprietÃ¡rio.
  - Se for um termo personalizado (`Termo__c`), busca os detalhes da oportunidade associada, do terceiro envolvido, alÃ©m do proprietÃ¡rio, da conta e do gerente da oportunidade.
  - Para cada signatÃ¡rio, cria um objeto `Signer` com nome, email, papel e ID, e adiciona ao mapa.

VariÃ¡veis
NÃ£o hÃ¡ variÃ¡veis de instÃ¢ncia nesta classe, pois ela contÃ©m apenas mÃ©todos estÃ¡ticos. Os mÃ©todos utilizam variÃ¡veis locais para armazenar dados temporÃ¡rios, como objetos de oportunidade, termo ou mapas de signatÃ¡rios.

Classe: GroupMemberFlowHelper

DescriÃ§Ã£o
A classe `GroupMemberFlowHelper` Ã© uma classe auxiliar que fornece funcionalidades para manipular membros de grupos no Salesforce, especialmente para determinar o prÃ³ximo proprietÃ¡rio de uma tarefa ou processo com base na sequÃªncia de membros de um grupo.

MÃ©todos
`nextLeadOwner(List<queueMemberStatus> pQueueMemberStatus)`
- MÃ©todo invocÃ¡vel que processa uma lista de status de membros de grupo para determinar o prÃ³ximo proprietÃ¡rio.
- ParÃ¢metros:
  - `pQueueMemberStatus` (List<queueMemberStatus>): Uma lista de objetos que contÃªm informaÃ§Ãµes sobre o Ãºltimo proprietÃ¡rio e a lista de membros do grupo.
- Retorno:
  - Uma lista de IDs (`List<Id>`) representando os prÃ³ximos proprietÃ¡rios determinados para cada entrada processada.

VariÃ¡veis
`idListToReturn`
- Tipo: `List<Id>`
- DescriÃ§Ã£o: Lista que armazena os IDs dos prÃ³ximos proprietÃ¡rios que serÃ£o retornados ao final do mÃ©todo.

`queueMemberStatus`
- Tipo: Classe interna
- DescriÃ§Ã£o: Representa o status de um grupo de membros, contendo:
  - `lastOwner` (String): ID do Ãºltimo proprietÃ¡rio conhecido.
  - `groupMemberList` (List<GroupMember>): Lista de membros do grupo.

`findLastUser`
- Tipo: `Boolean`
- DescriÃ§Ã£o: VariÃ¡vel de controle que indica se o Ãºltimo proprietÃ¡rio foi encontrado na lista de membros.

`firstUser` e `nextUser`
- Tipo: `Id`
- DescriÃ§Ã£o:
  - `firstUser`: ID do primeiro membro da lista de membros do grupo.
  - `nextUser`: ID do prÃ³ximo membro apÃ³s o Ãºltimo proprietÃ¡rio encontrado.

ExplicaÃ§Ã£o tÃ©cnica e de maneira leiga
- A classe ajuda a determinar quem deve ser o prÃ³ximo responsÃ¡vel por uma tarefa, baseado na sequÃªncia de membros de um grupo.
- Ela recebe uma lista de informaÃ§Ãµes, onde cada item contÃ©m quem foi o Ãºltimo responsÃ¡vel e quem sÃ£o os membros do grupo.
- Para cada grupo, ela percorre a lista de membros:
  - Marca quem foi o primeiro membro.
  - Quando encontra o Ãºltimo responsÃ¡vel, ela marca isso e, na sequÃªncia, identifica o prÃ³ximo membro na lista.
- Se encontrar o prÃ³ximo membro apÃ³s o Ãºltimo responsÃ¡vel, esse membro serÃ¡ o prÃ³ximo responsÃ¡vel.
- Caso contrÃ¡rio, o primeiro membro do grupo serÃ¡ considerado o prÃ³ximo responsÃ¡vel.
- Assim, ela devolve uma lista de IDs que representam os prÃ³ximos responsÃ¡veis por cada grupo processado.

Classe: UtilValidacaoTest

DescriÃ§Ã£o
A classe `UtilValidacaoTest` Ã© uma classe de testes automatizados em Apex, utilizada para validar as funcionalidades de validaÃ§Ã£o e formataÃ§Ã£o de dados, como CPF, CNPJ, RG e Nome, que estÃ£o implementadas na classe `UtilValidacao`. Ela garante que os mÃ©todos de validaÃ§Ã£o e formataÃ§Ã£o estejam funcionando corretamente antes de serem utilizados em produÃ§Ã£o.

MÃ©todos
Nenhum mÃ©todo de teste estÃ¡ ativo, pois todos estÃ£o comentados. Cada mÃ©todo de teste tem a finalidade de verificar uma funcionalidade especÃ­fica da classe `UtilValidacao`.

- `formatCPFTest()`
  - Objetivo: Testar a formataÃ§Ã£o do CPF, garantindo que o nÃºmero seja exibido no formato padrÃ£o (xxx.xxx.xxx-xx).
  - Como funciona: Cria uma instÃ¢ncia de `Termo__c`, atribui um CPF sem formataÃ§Ã£o, chama o mÃ©todo de formataÃ§Ã£o e verifica se o resultado corresponde ao formato esperado.

- `formatCNPJTest()`
  - Objetivo: Testar a formataÃ§Ã£o do CNPJ, verificando se o nÃºmero Ã© exibido no formato padrÃ£o (xx.xxx.xxx/xxxx-xx).
  - Como funciona: Cria uma instÃ¢ncia de `Termo__c`, atribui um CNPJ sem formataÃ§Ã£o, chama o mÃ©todo de formataÃ§Ã£o e valida o resultado.

- `formatRGEightDigitsTest()`
  - Objetivo: Testar a formataÃ§Ã£o do RG com oito dÃ­gitos, adicionando o hÃ­fen na posiÃ§Ã£o correta.
  - Como funciona: Cria uma instÃ¢ncia de `Termo__c`, atribui um RG sem formataÃ§Ã£o, chama o mÃ©todo de validaÃ§Ã£o e verifica se o RG foi formatado corretamente.

- `validateRGNineDigitFormat()`
  - Objetivo: Validar e formatar o RG de nove dÃ­gitos, adicionando pontos e hÃ­fen.
  - Como funciona: Cria uma instÃ¢ncia de `Termo__c`, atribui um RG sem formataÃ§Ã£o, chama o mÃ©todo de validaÃ§Ã£o e verifica se o RG foi formatado corretamente.

- `validationNomeTest()`
  - Objetivo: Testar a validaÃ§Ã£o do nome, garantindo que nÃ£o contenha nÃºmeros ou caracteres especiais.
  - Como funciona: Cria uma instÃ¢ncia de `Termo__c`, atribui um nome invÃ¡lido, tenta validar e espera uma exceÃ§Ã£o com a mensagem especÃ­fica.

VariÃ¡veis
Nenhuma variÃ¡vel de classe Ã© definida nesta classe de testes. Cada mÃ©todo cria suas prÃ³prias variÃ¡veis locais para realizar os testes.

Classe: DW_AvaliacaoGetAccessTokenIntegrableTest

DescriÃ§Ã£o
A classe `DW_AvaliacaoGetAccessTokenIntegrableTest` Ã© uma classe de testes unitÃ¡rios em Apex, responsÃ¡vel por validar o funcionamento da classe `DW_AvaliacaoGetAccessTokenIntegrable`. Ela garante que os mÃ©todos dessa classe operam corretamente, simulando diferentes cenÃ¡rios de uso.

MÃ©todos
`setup()`
- Executado uma Ãºnica vez antes de todos os testes.
- Cria e insere um registro de credenciais de avaliaÃ§Ã£o (`DWCredenciaisAvaliacao__c`) com informaÃ§Ãµes fictÃ­cias, como usuÃ¡rio, senha e endpoint da API.
- Objetivo: preparar o ambiente de teste com dados necessÃ¡rios.

`testConstructEndpoint()`
- Testa se o mÃ©todo `constructEndpoint()` da classe principal retorna a URL correta para o endpoint de autenticaÃ§Ã£o.
- Verifica se a URL gerada Ã© exatamente `https://api.avaliacao.com/auth/login`.

`testGetSerializedRequest()`
- Testa se o mÃ©todo `getSerializedRequest()` gera uma requisiÃ§Ã£o JSON correta.
- Verifica se o JSON contÃ©m o login (`usuarioTeste`) e a senha (`senhaTeste`) inseridos na configuraÃ§Ã£o de credenciais.

`testConstructHeaders()`
- Testa se o mÃ©todo `constructHeaders()` cria os cabeÃ§alhos HTTP adequados.
- Assegura que os cabeÃ§alhos `Content-Type` e `Accept` estejam configurados como `application/json`.

`testCallIntegrationAndDeserializeResponse()`
- Testa a integraÃ§Ã£o simulada com a API de autenticaÃ§Ã£o.
- Usa um mock de resposta (`DW_AvaliacaoMock`) para simular uma resposta HTTP com um token.
- Verifica se a resposta foi processada corretamente e se o token esperado (`abc123`) foi extraÃ­do.

`testMissingCredentialsThrowsException()`
- Testa o comportamento quando as credenciais necessÃ¡rias nÃ£o estÃ£o disponÃ­veis.
- Remove o registro de credenciais para simular sua ausÃªncia.
- Espera que uma exceÃ§Ã£o seja lanÃ§ada ao tentar construir o endpoint, indicando que as credenciais sÃ£o obrigatÃ³rias.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia Ã© definida nesta classe de testes, pois ela Ã© usada apenas para validar os mÃ©todos da classe principal.

Classe: DW_FluigGetAccessTokenIntegrable

DescriÃ§Ã£o
A classe `DW_FluigGetAccessTokenIntegrable` Ã© responsÃ¡vel por obter o token de autenticaÃ§Ã£o da API do Fluig. Ela estende uma classe base `DW_Integrable`, que fornece funcionalidades genÃ©ricas para integraÃ§Ãµes com APIs. Essa classe especÃ­fica realiza a requisiÃ§Ã£o de login, enviando credenciais e recebendo o token de acesso.

MÃ©todos
`callIntegration(Object obj)`
- Inicia o processo de integraÃ§Ã£o.
- ParÃ¢metro: `obj` (Object): o objeto que serÃ¡ enviado na requisiÃ§Ã£o.
- Atribui o objeto recebido a uma variÃ¡vel interna e chama o mÃ©todo para enviar a requisiÃ§Ã£o HTTP.

`constructEndpoint()`
- Retorna a URL do endpoint de autenticaÃ§Ã£o da API do Fluig.
- Valida se as credenciais de usuÃ¡rio e senha estÃ£o preenchidas.
- Caso contrÃ¡rio, lanÃ§a uma exceÃ§Ã£o indicando que esses dados sÃ£o obrigatÃ³rios.
- A URL Ã© obtida de uma configuraÃ§Ã£o personalizada (`CredenciaisFluig__c`).

`setMethod()`
- Define o mÃ©todo HTTP utilizado na requisiÃ§Ã£o.
- Retorna a string `'POST'`, indicando que serÃ¡ uma requisiÃ§Ã£o POST.

`constructHeaders()`
- Cria e retorna os cabeÃ§alhos HTTP necessÃ¡rios para a requisiÃ§Ã£o.
- Inclui o tipo de conteÃºdo (`Content-Type`) e o tipo de resposta esperada (`Accept`), ambos em JSON.

`constructQueryParameters()`
- Retorna os parÃ¢metros de consulta (query parameters) da requisiÃ§Ã£o.
- Como essa API nÃ£o utiliza query parameters, retorna um mapa vazio.

`getSerializedRequest()`
- Cria o corpo da requisiÃ§Ã£o em formato JSON.
- Utiliza uma template de requisiÃ§Ã£o (`DW_FluigGetAccessTokenRequestTemplate`) onde insere as credenciais de login e senha.
- Serializa essa template para JSON e retorna a string.

`setDeserializedResponseObject()`
- Processa a resposta JSON recebida da API.
- Deserializa o corpo da resposta para um objeto Apex do tipo `DW_FluigGetAccessTokenResponseTemplate`.
- Armazena esse objeto na variÃ¡vel `responseTemplate` e tambÃ©m na variÃ¡vel geral de resposta deserializada.

`finish()`
- MÃ©todo opcional para aÃ§Ãµes finais apÃ³s a requisiÃ§Ã£o.
- Pode ser utilizado para armazenar o token obtido em configuraÃ§Ãµes personalizadas, se necessÃ¡rio.

VariÃ¡veis
`responseTemplate`
- Tipo: `DW_FluigGetAccessTokenResponseTemplate`
- DescriÃ§Ã£o: Armazena a resposta da API, que contÃ©m o token de autenticaÃ§Ã£o retornado pelo Fluig.

Classe: DW_InteractionHistoryDAO

DescriÃ§Ã£o
A classe `DW_InteractionHistoryDAO` Ã© responsÃ¡vel por acessar e buscar dados relacionados ao histÃ³rico de interaÃ§Ãµes de clientes no Salesforce. Ela fornece mÃ©todos para recuperar informaÃ§Ãµes de registros de Leads e Oportunidades, com base em critÃ©rios como ID, nome, e-mail, telefone ou documento do cliente. Essa classe Ã© utilizada por controllers para montar o histÃ³rico de interaÃ§Ãµes exibido em interfaces, como componentes Lightning Web Components (LWC), ajudando equipes de vendas e atendimento a visualizarem o relacionamento completo do cliente com a empresa.

---

MÃ©todos
`getLeadById(Id recordId)`
- PropÃ³sito: Buscar um registro de Lead especÃ­fico usando seu ID.
- ParÃ¢metro: `recordId` (Id): o identificador do Lead.
- Retorno: Retorna o objeto Lead encontrado, contendo informaÃ§Ãµes como Id, Email, Name, Phone e MobilePhone.
- ExplicaÃ§Ã£o simples: Este mÃ©todo encontra um cliente potencial (Lead) pelo seu cÃ³digo Ãºnico no sistema.

`getOpportunityById(String recordId)`
- PropÃ³sito: Buscar uma oportunidade especÃ­fica usando seu ID.
- ParÃ¢metro: `recordId` (String): o identificador da Oportunidade.
- Retorno: Retorna o objeto Opportunity com detalhes como Id, Name, Criador, Data de criaÃ§Ã£o, EstÃ¡gio, e informaÃ§Ãµes da conta relacionada (nome, telefone, e-mail, documento).
- ExplicaÃ§Ã£o simples: Este mÃ©todo encontra uma venda ou oportunidade pelo seu cÃ³digo, trazendo detalhes importantes sobre ela.

`getLeadsByOpportunityId(String recordId)`
- PropÃ³sito: Obter uma lista de Leads relacionados Ã  Oportunidade informada, usando critÃ©rios como nome, e-mail, telefone ou documento do cliente.
- ParÃ¢metro: `recordId` (String): o ID da Oportunidade de referÃªncia.
- Retorno: Lista de Leads que possuem alguma relaÃ§Ã£o com a oportunidade, ordenados pela data de criaÃ§Ã£o (mais recentes primeiro).
- ExplicaÃ§Ã£o simples: Este mÃ©todo busca clientes potenciais que tenham alguma conexÃ£o com uma oportunidade especÃ­fica, ajudando a entender o histÃ³rico de contatos.

`getOpportunitiesById(String recordId)`
- PropÃ³sito: Obter uma lista de Oportunidades relacionadas ao cliente da oportunidade fornecida, excluindo aquelas que jÃ¡ estÃ£o no estÃ¡gio "Faturado".
- ParÃ¢metro: `recordId` (String): o ID da Oportunidade de referÃªncia.
- Retorno: Lista de oportunidades relacionadas, ordenadas pela data de criaÃ§Ã£o, que ainda nÃ£o foram faturadas.
- ExplicaÃ§Ã£o simples: Este mÃ©todo encontra outras vendas ou oportunidades do mesmo cliente, que ainda estÃ£o em andamento ou em estÃ¡gio inicial.

---

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia Ã© definida nesta classe, pois ela consiste apenas em mÃ©todos estÃ¡ticos para buscar dados no banco.

Classe: DWOpportunityDraftViewController

DescriÃ§Ã£o
A classe `DWOpportunityDraftViewController` Ã© responsÃ¡vel por gerenciar a visualizaÃ§Ã£o de rascunhos de oportunidades no Salesforce. Seu principal objetivo Ã© gerar um arquivo PDF contendo uma minuta de oportunidade especÃ­fica, com base no ID fornecido.

MÃ©todos
`getDraftPDF(String recordId)`
- Este mÃ©todo estÃ¡tico, acessÃ­vel via Aura (framework de componentes do Salesforce), gera um PDF de minuta para uma oportunidade especÃ­fica.
- ParÃ¢metros:
  - `recordId` (String): o identificador da oportunidade para a qual o PDF serÃ¡ gerado.
- Retorno:
  - Um `Map<String, Object>` contendo:
    - `'fileName'`: nome do arquivo PDF, baseado no nome da oportunidade.
    - `'base64'`: o conteÃºdo do PDF codificado em base64.
    - `'fileUrl'`: a URL do arquivo PDF gerado.
- Funcionalidades:
  - Consulta a oportunidade pelo ID.
  - Prepara uma pÃ¡gina Visualforce (`Page.Minuta`) para gerar o PDF, passando o ID da oportunidade como parÃ¢metro.
  - Verifica se o cÃ³digo estÃ¡ sendo executado em ambiente de teste:
    - Se sim, gera um PDF mock (simulado).
    - Caso contrÃ¡rio, gera o PDF real a partir da pÃ¡gina Visualforce.
  - Codifica o conteÃºdo do PDF em base64 para facilitar o transporte.
  - Retorna as informaÃ§Ãµes necessÃ¡rias para o usuÃ¡rio baixar ou visualizar o PDF.
- Tratamento de erros:
  - Caso ocorra algum erro durante o processo, uma exceÃ§Ã£o personalizada (`AuraHandledException`) Ã© lanÃ§ada, contendo detalhes do erro.

VariÃ¡veis
`opp`
- Tipo: `Opportunity`
- DescriÃ§Ã£o: Armazena a oportunidade recuperada do banco de dados com base no ID fornecido.

`pdfPage`
- Tipo: `PageReference`
- DescriÃ§Ã£o: ReferÃªncia Ã  pÃ¡gina Visualforce (`Minuta`) que serÃ¡ usada para gerar o PDF.

`base64PDF`
- Tipo: `String`
- DescriÃ§Ã£o: ConteÃºdo do PDF codificado em base64, que pode ser utilizado para download ou visualizaÃ§Ã£o.

`pdfBlob`
- Tipo: `Blob`
- DescriÃ§Ã£o: ConteÃºdo binÃ¡rio do PDF gerado a partir da pÃ¡gina Visualforce, utilizado na geraÃ§Ã£o do arquivo real.

Resumo tÃ©cnico
A classe `DWOpportunityDraftViewController` fornece uma funcionalidade para criar e retornar um PDF de minuta de uma oportunidade especÃ­fica, identificada pelo seu ID. Ela realiza uma consulta ao banco, prepara uma pÃ¡gina Visualforce para gerar o PDF, codifica o conteÃºdo para transporte e trata possÃ­veis erros durante o processo.

Classe: DWVideoControllerTest

DescriÃ§Ã£o
A classe `DWVideoControllerTest` Ã© uma classe de testes automatizados no Salesforce, que verifica o funcionamento do controlador `DWVideoController`. Ela simula diferentes cenÃ¡rios para garantir que os mÃ©todos do controlador estejam operando corretamente, especialmente relacionados ao registro e verificaÃ§Ã£o de visualizaÃ§Ãµes de vÃ­deos e histÃ³ricos de tours de usuÃ¡rio.

MÃ©todos
`setupData()`
- MÃ©todo de configuraÃ§Ã£o que prepara dados de teste.
- Como registros de metadados (`__mdt`) nÃ£o podem ser criados em testes, ele simula a leitura de um histÃ³rico inicial para o usuÃ¡rio atual, criando um registro de `DWHistoricoTour__c` com informaÃ§Ãµes especÃ­ficas.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.

`testRegistrarVisualizacao_CreateNew()`
- Testa a funcionalidade de registrar uma nova visualizaÃ§Ã£o de vÃ­deo para um objeto que ainda nÃ£o possui histÃ³rico.
- Inicia o teste, chama o mÃ©todo `registrarVisualizacao` do controlador com um objeto e aÃ§Ã£o especÃ­ficos, e verifica se um novo registro de histÃ³rico foi criado corretamente.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.

`testRegistrarVisualizacao_UpdateExisting()`
- Testa a atualizaÃ§Ã£o de um histÃ³rico existente ao registrar uma nova visualizaÃ§Ã£o para o mesmo objeto.
- Inicia o teste, chama o mÃ©todo `registrarVisualizacao` com um objeto jÃ¡ presente no histÃ³rico, e verifica se o registro foi atualizado corretamente, mantendo aÃ§Ãµes anteriores e adicionando a nova.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.

`testVerifyIsCompletedTour_NoHistorico()`
- Verifica se o mÃ©todo `verifyIsCompletedTour` retorna `false` quando nÃ£o hÃ¡ histÃ³rico de aÃ§Ãµes para o objeto especificado.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.

`testVerifyIsCompletedTour_PartialHistorico()`
- Testa o mÃ©todo `verifyIsCompletedTour` quando hÃ¡ um histÃ³rico parcial de aÃ§Ãµes, esperando que retorne `false` devido Ã  ausÃªncia de aÃ§Ãµes completas necessÃ¡rias.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.

`testGetVideoActions()`
- Testa o mÃ©todo `getVideoActions`, que deve retornar uma lista de aÃ§Ãµes de vÃ­deo relacionadas a um objeto.
- Como registros de metadados (`__mdt`) nÃ£o podem ser criados em testes, o teste apenas garante que o mÃ©todo execute sem erro e retorne uma lista nÃ£o nula.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.

VariÃ¡veis
Nenhuma variÃ¡vel de classe foi declarada explicitamente nesta classe de testes. Ela utiliza variÃ¡veis internas e mÃ©todos do Salesforce para manipular dados de teste e verificar resultados.

Classe: DWAccountPurchaseHistoryControllerTest

DescriÃ§Ã£o
A classe `DWAccountPurchaseHistoryControllerTest` Ã© uma classe de testes unitÃ¡rios no Salesforce, responsÃ¡vel por validar o funcionamento da classe `DWAccountPurchaseHistoryController`. Ela garante que os mÃ©todos da classe principal estejam operando corretamente, simulando diferentes cenÃ¡rios de uso.

MÃ©todos
`setupData()`
- MÃ©todo de configuraÃ§Ã£o que prepara os dados de teste no Salesforce, criando registros de Conta, Contato, Oportunidade, Lead e HistÃ³rico de Compras. Esses dados sÃ£o utilizados pelos testes para verificar o comportamento dos mÃ©todos.

`testGetRecordsHistoryPurchaseWithOpportunity()`
- Testa a recuperaÃ§Ã£o do histÃ³rico de compras relacionado a uma Oportunidade.
- Verifica se o mÃ©todo retorna um resultado vÃ¡lido, o nome do objeto como "Oportunidade" e se hÃ¡ registros relacionados.

`testGetRecordsHistoryPurchaseWithLead()`
- Testa a recuperaÃ§Ã£o do histÃ³rico de compras relacionado a um Lead.
- Confirma se o mÃ©todo retorna um resultado vÃ¡lido, o nome do objeto como "Lead" e se hÃ¡ registros relacionados ao Lead.

`testGetRecordsHistoryPurchaseWithInvalidId()`
- Testa o comportamento do mÃ©todo ao receber um ID nulo.
- Espera que o resultado seja nulo, indicando que o mÃ©todo lida corretamente com IDs invÃ¡lidos.

`testGetRecordsHistoryPurchaseWithUnsupportedObject()`
- Testa a resposta do mÃ©todo ao passar um ID de um objeto nÃ£o suportado, como Contato.
- Verifica se o resultado nÃ£o Ã© nulo, mas os campos `recordId` e `recordName` estÃ£o nulos, indicando que o mÃ©todo reconhece objetos nÃ£o suportados.

`testFormatCurrencyValid()`
- Testa a formataÃ§Ã£o de um valor monetÃ¡rio vÃ¡lido.
- Verifica se o valor Ã© formatado corretamente como moeda brasileira (exemplo: R$ 1.234.567,89).

`testFormatCurrencyNull()`
- Testa a formataÃ§Ã£o de um valor nulo.
- Espera que o mÃ©todo retorne "R$ 0,00", garantindo tratamento de valores nulos.

`testParseToDTO()`
- Testa a conversÃ£o de um registro de histÃ³rico de compras (`DWHistoricoCompras__c`) para um DTO (`Data Transfer Object`).
- Verifica se os atributos do DTO correspondem aos valores do registro de origem, garantindo a correta transformaÃ§Ã£o dos dados.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia Ã© declarada nesta classe de testes. Ela utiliza variÃ¡veis locais e registros de teste para validar os mÃ©todos da classe principal.

Classe: DW_AvailabilityQueueByTime_ResponseTest

DescriÃ§Ã£o
A classe `DW_AvailabilityQueueByTime_ResponseTest` Ã© uma classe de testes automatizados no Salesforce, responsÃ¡vel por validar o comportamento da classe `DW_AvailabilityQueueByTime_Response`. Ela garante que os mÃ©todos de inicializaÃ§Ã£o, configuraÃ§Ã£o de filas, usuÃ¡rios e quantidade de eventos funcionem corretamente, alÃ©m de verificar a lÃ³gica de seleÃ§Ã£o de usuÃ¡rios disponÃ­veis.

MÃ©todos
`testInitMethod()`
- Testa a criaÃ§Ã£o de uma nova instÃ¢ncia da classe `DW_AvailabilityQueueByTime_Response`.
- Verifica se a instÃ¢ncia inicializada nÃ£o Ã© nula, garantindo que o mÃ©todo `init()` funciona corretamente.

`testSetQueueId()`
- Cria uma nova fila de trabalho (queue) usando uma fÃ¡brica de dados (`DW_DataFactory.newQueue(true)`).
- Recupera o ID de uma fila de trabalho existente.
- Inicializa uma resposta e define o ID da fila.
- Verifica se o ID da fila foi corretamente atribuÃ­do na resposta.

`testSetQueueUsersIdItem()`
- ObtÃ©m o ID do usuÃ¡rio atual.
- Inicializa uma resposta e adiciona o usuÃ¡rio Ã  lista de usuÃ¡rios da fila.
- Verifica se o ID do usuÃ¡rio estÃ¡ presente na lista de usuÃ¡rios atribuÃ­dos Ã  fila.

`testSetQueueBusyUsersId()`
- ObtÃ©m o ID do usuÃ¡rio atual.
- Inicializa uma resposta e marca o usuÃ¡rio como ocupado na fila.
- Verifica se o ID do usuÃ¡rio estÃ¡ presente na lista de usuÃ¡rios ocupados.

`testSetQuantityEventByUser()`
- ObtÃ©m o ID do usuÃ¡rio atual.
- Inicializa uma resposta e define a quantidade de eventos associados ao usuÃ¡rio como 5.
- Verifica se a quantidade de eventos do usuÃ¡rio Ã© 5.
- Depois, incrementa a quantidade de eventos para o mesmo usuÃ¡rio para 3 (totalizando 6).
- Verifica se a quantidade de eventos foi corretamente atualizada para 6, confirmando o funcionamento do incremento.

`testGetAvailableUser()`
- Cria usuÃ¡rios de teste e oportunidades associadas a esses usuÃ¡rios.
- Inicializa uma resposta, adiciona usuÃ¡rios Ã  fila, marca um usuÃ¡rio como ocupado e tenta obter um usuÃ¡rio disponÃ­vel.
- O mÃ©todo de seleÃ§Ã£o de usuÃ¡rio disponÃ­vel estÃ¡ comentado, mas a intenÃ§Ã£o Ã© verificar se o mÃ©todo retorna um usuÃ¡rio que nÃ£o estÃ¡ ocupado e possui oportunidades associadas.

VariÃ¡veis
Nenhuma variÃ¡vel de classe Ã© declarada nesta classe de testes. Os mÃ©todos utilizam variÃ¡veis locais para armazenar IDs de usuÃ¡rios, oportunidades e respostas, alÃ©m de realizar operaÃ§Ãµes de inserÃ§Ã£o e validaÃ§Ã£o de dados.

Classe: DW_DynamicComponentControllerTest

DescriÃ§Ã£o
A classe `DW_DynamicComponentControllerTest` Ã© uma classe de teste em Apex que verifica funcionalidades relacionadas ao controlador dinÃ¢mico de componentes, especificamente a recuperaÃ§Ã£o de componentes com base no perfil do usuÃ¡rio. Ela contÃ©m mÃ©todos de teste que simulam cenÃ¡rios de uso para garantir que o mÃ©todo de recuperaÃ§Ã£o de componentes funcione corretamente.

MÃ©todos
`testGetDynamicComponentByProfile()`
- PropÃ³sito: Testa a recuperaÃ§Ã£o de um componente dinÃ¢mico com base no perfil do usuÃ¡rio.
- Processo:
  - Inicia o teste com `Test.startTest()`.
  - Consulta registros de perfil de qualificaÃ§Ã£o (`DW_QP__PerfilQualificacao__c`) onde o contexto Ã© "Componente de tela" e o perfil de aÃ§Ã£o (`DWAcaoPerfil__c`) nÃ£o Ã© nulo.
  - Seleciona o primeiro perfil da lista obtida.
  - Executa uma consulta dinÃ¢mica para obter o ID de um registro do tipo de registro associado ao perfil.
  - Armazena o nome do componente a partir do perfil.
  - (Comentado) Chamaria o mÃ©todo `getDynamicComponentByProfile` do controlador, passando o ID do registro e o nome do componente.
  - Finaliza o teste com `Test.stopTest()`.

`testGetDynamicComponentByProfileEmpty()`
- PropÃ³sito: Testa o mÃ©todo de recuperaÃ§Ã£o de componentes quando hÃ¡ um perfil vÃ¡lido, mas o mÃ©todo Ã© chamado com um nome de componente genÃ©rico ('dw').
- Processo:
  - Consulta perfis de qualificaÃ§Ã£o semelhantes ao mÃ©todo anterior.
  - Inicia o teste com `Test.startTest()`.
  - Executa a chamada ao mÃ©todo `getDynamicComponentByProfile`, passando o ID do primeiro perfil e o nome do componente 'dw'.
  - Finaliza o teste com `Test.stopTest()`.

VariÃ¡veis
`profiles`
- Tipo: `List<DW_QP__PerfilQualificacao__c>`
- DescriÃ§Ã£o: Lista de registros de perfil de qualificaÃ§Ã£o que atendem aos critÃ©rios de contexto e perfil de aÃ§Ã£o, utilizados para obter informaÃ§Ãµes necessÃ¡rias para os testes.

`recordId`
- Tipo: `Id`
- DescriÃ§Ã£o: Identificador de um registro de um tipo de registro relacionado ao perfil, obtido dinamicamente atravÃ©s de uma consulta SOQL.

`componentName`
- Tipo: `String`
- DescriÃ§Ã£o: Nome do componente dinÃ¢mico que serÃ¡ utilizado na recuperaÃ§Ã£o, obtido do perfil de qualificaÃ§Ã£o.

`result`
- Tipo: `Map<String, Object>`
- DescriÃ§Ã£o: Mapa que conteria o resultado da recuperaÃ§Ã£o do componente dinÃ¢mico, retornado pelo mÃ©todo `getDynamicComponentByProfile`. (Comentado no cÃ³digo, indicando que a chamada estÃ¡ atualmente desativada).

Classe: DW_GetAvaliacaoIntegrableInvocableTest

DescriÃ§Ã£o
A classe `DW_GetAvaliacaoIntegrableInvocableTest` Ã© uma classe de testes unitÃ¡rios em Apex, responsÃ¡vel por validar o funcionamento da classe `DW_GetAvaliacaoIntegrableInvocable`. Ela garante que os mÃ©todos de avaliaÃ§Ã£o de veÃ­culos, que fazem chamadas externas a uma API, estejam operando corretamente, simulando respostas da API para diferentes cenÃ¡rios.

MÃ©todos
`testGetAvaliacao_Sucesso()`
- Testa o cenÃ¡rio de sucesso na obtenÃ§Ã£o de uma avaliaÃ§Ã£o de veÃ­culo.
- Cria uma credencial fictÃ­cia e insere no banco de dados.
- Mocka as respostas da API para autenticaÃ§Ã£o e avaliaÃ§Ã£o.
- Cria uma requisiÃ§Ã£o de avaliaÃ§Ã£o com a placa do veÃ­culo.
- Executa o mÃ©todo de avaliaÃ§Ã£o e verifica se a resposta contÃ©m os dados esperados, como modelo e placa, alÃ©m de indicar sucesso.

`testGetAvaliacao_ErroPlacaVazia()`
- Testa o cenÃ¡rio onde a placa do veÃ­culo estÃ¡ vazia, o que deve gerar uma mensagem de erro.
- Cria uma credencial fictÃ­cia e insere no banco de dados.
- Mocka as respostas da API, similar ao mÃ©todo anterior.
- Cria uma requisiÃ§Ã£o de avaliaÃ§Ã£o com a placa vazia.
- Executa o mÃ©todo de avaliaÃ§Ã£o e verifica se a mensagem de erro adequada foi retornada.

VariÃ¡veis e Classes Internas
`MockAvaliacaoCallout`
- Classe que implementa a interface `HttpCalloutMock`.
- Simula respostas HTTP para chamadas externas feitas pela classe de avaliaÃ§Ã£o.
- Utiliza um mapa (`urlToBody`) para associar URLs especÃ­ficas Ã s respostas JSON simuladas.
- MÃ©todo `respond(HTTPRequest req)`:
  - Recebe uma requisiÃ§Ã£o HTTP.
  - Retorna uma resposta simulada com o corpo correspondente ao endpoint solicitado.
  - Caso o endpoint nÃ£o esteja mapeado, retorna uma resposta 404 com uma mensagem de erro.

DescriÃ§Ã£o TÃ©cnica e Leiga
- A classe Ã© usada para testar se a integraÃ§Ã£o com uma API de avaliaÃ§Ã£o de veÃ­culos funciona corretamente.
- Ela simula chamadas externas, evitando que o teste dependa de uma API real, o que garante maior controle e previsibilidade.
- Os testes verificam se, ao receber respostas vÃ¡lidas, o sistema interpreta corretamente os dados do veÃ­culo.
- TambÃ©m testam o comportamento do sistema quando informaÃ§Ãµes obrigatÃ³rias, como a placa, estÃ£o ausentes, garantindo que mensagens de erro apropriadas sejam retornadas.
- A classe `MockAvaliacaoCallout` Ã© uma ferramenta que imita o comportamento de uma API, retornando respostas predefinidas para diferentes URLs, facilitando o teste de diferentes cenÃ¡rios sem fazer chamadas reais Ã  internet.

Classe: DW_AvaliacaoGetAccessTokenIntegrable

DescriÃ§Ã£o
A classe `DW_AvaliacaoGetAccessTokenIntegrable` Ã© responsÃ¡vel por realizar a autenticaÃ§Ã£o com um serviÃ§o externo de avaliaÃ§Ã£o de veÃ­culos. Ela envia uma requisiÃ§Ã£o de login contendo credenciais configuradas e recebe um token de acesso (Access Token), que serÃ¡ utilizado em chamadas futuras Ã  API de avaliaÃ§Ã£o. Essa classe herda de `DW_Integrable`, o que significa que ela implementa mÃ©todos especÃ­ficos para montar a requisiÃ§Ã£o, enviar e interpretar a resposta.

MÃ©todos
`callIntegration(Object obj)`
- Executa a chamada de integraÃ§Ã£o, enviando o objeto de requisiÃ§Ã£o.
- ParÃ¢metro: `obj` (Object): dados que serÃ£o enviados na requisiÃ§Ã£o.
- Retorno: Nenhum.

`constructEndpoint()`
- ConstrÃ³i a URL do endpoint de autenticaÃ§Ã£o, buscando as configuraÃ§Ãµes de credenciais e URL no metadado `DWCredenciaisAvaliacao__c`.
- Retorna: `String` com o endpoint completo.
- LanÃ§a uma exceÃ§Ã£o se usuÃ¡rio ou senha estiverem vazios ou nulos.

`setMethod()`
- Define o mÃ©todo HTTP utilizado na requisiÃ§Ã£o, que neste caso Ã© `POST`.
- Retorna: `String` com o mÃ©todo HTTP.

`constructHeaders()`
- Cria os cabeÃ§alhos HTTP necessÃ¡rios para a requisiÃ§Ã£o, indicando que o conteÃºdo e a aceitaÃ§Ã£o sÃ£o em JSON.
- Retorna: `Map<String, String>` contendo os cabeÃ§alhos.

`constructQueryParameters()`
- Cria os parÃ¢metros de consulta, se necessÃ¡rio. Aqui, retorna um mapa vazio, indicando que nÃ£o hÃ¡ parÃ¢metros adicionais.

`getSerializedRequest()`
- Cria o corpo da requisiÃ§Ã£o em formato JSON, utilizando a classe `DW_AvaliacaoGetAccessTokenReqTemplate` para estruturar os dados de login (usuÃ¡rio e senha).
- Retorna: `String` com o JSON serializado.

`setDeserializedResponseObject()`
- Processa a resposta da requisiÃ§Ã£o, deserializando o JSON recebido para a classe `DW_AvaliacaoGetAccessTokenRespTemplate`.
- Armazena o resultado na variÃ¡vel `responseTemplate` e tambÃ©m na variÃ¡vel herdada `deserializedResponseObject`.

`finish()`
- MÃ©todo que pode ser utilizado futuramente para armazenar o token de acesso obtido, por exemplo, em configuraÃ§Ãµes personalizadas. Atualmente, estÃ¡ vazio.

VariÃ¡veis
`responseTemplate`
- Tipo: `DW_AvaliacaoGetAccessTokenRespTemplate`
- DescriÃ§Ã£o: Armazena a resposta deserializada da requisiÃ§Ã£o de autenticaÃ§Ã£o, contendo o token de acesso e outras informaÃ§Ãµes retornadas pelo serviÃ§o externo.

Classe: DWCustomListViewDAO

DescriÃ§Ã£o
A classe `DWCustomListViewDAO` Ã© responsÃ¡vel por realizar consultas no banco de dados Salesforce relacionadas a Leads e Oportunidades. Ela Ã© utilizada para montar listas personalizadas de registros relacionados, facilitando a exibiÃ§Ã£o dessas informaÃ§Ãµes em componentes de interface, como Lightning Web Components (LWC) ou Aura. A classe segue o padrÃ£o Data Access Object (DAO), centralizando as queries em um Ãºnico lugar para facilitar a manutenÃ§Ã£o e reutilizaÃ§Ã£o.

MÃ©todos
`getLeadById(Id recordId)`
- Busca um Lead especÃ­fico pelo seu Id.
- ParÃ¢metro: `recordId` (Id): identificador do Lead.
- Retorna: um objeto Lead contendo informaÃ§Ãµes principais como Nome, Email, Telefone e Documento.

`getOpportunitiesByLeadId(Id leadId)`
- Busca oportunidades relacionadas a um Lead, usando critÃ©rios como Nome + Email, Nome + Telefone ou Documento (CPF/CNPJ).
- ParÃ¢metro: `leadId` (Id): identificador do Lead de origem.
- Retorna: uma lista de oportunidades que correspondem aos critÃ©rios, ordenadas pela data de criaÃ§Ã£o.

`getLeadsById(Id recordId)`
- Busca Leads relacionados a um Lead especÃ­fico, com base em Nome + Email, Nome + Telefone ou Documento, excluindo Leads jÃ¡ convertidos.
- ParÃ¢metro: `recordId` (Id): identificador do Lead de origem.
- Retorna: uma lista de Leads relacionados, ordenados pela data de criaÃ§Ã£o.

`getOpportunityById(String recordId)`
- Busca uma Oportunidade especÃ­fica pelo seu Id.
- ParÃ¢metro: `recordId` (String): identificador da Oportunidade.
- Retorna: um objeto Opportunity com informaÃ§Ãµes principais como Conta, EstÃ¡gio, Data de CriaÃ§Ã£o, etc.

`getLeadsByOpportunityId(String opportunityId)`
- Busca Leads relacionados a uma Oportunidade, usando critÃ©rios como Nome + Email, Nome + Telefone ou Documento da Conta vinculada.
- ParÃ¢metro: `opportunityId` (String): identificador da Oportunidade.
- Retorna: uma lista de Leads relacionados, excluindo Leads jÃ¡ convertidos.

`getOpportunitiesById(String recordId)`
- Busca oportunidades relacionadas a uma Oportunidade, com base em critÃ©rios como Conta vinculada (Nome, Email, Documento, Telefone).
- ParÃ¢metro: `recordId` (String): identificador da Oportunidade de origem.
- Retorna: uma lista de oportunidades relacionadas, ordenadas pela data de criaÃ§Ã£o.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia Ã© definida nesta classe, pois todos os mÃ©todos sÃ£o estÃ¡ticos e operam com parÃ¢metros de entrada e consultas diretas ao banco de dados.

Classe: DW_IniciarFaturamentoIntegrable

DescriÃ§Ã£o
A classe `DW_IniciarFaturamentoIntegrable` Ã© responsÃ¡vel por gerenciar a integraÃ§Ã£o com o sistema Fluig para iniciar o faturamento de uma oportunidade no Salesforce. Ela herda de `DW_Integrable`, seguindo a arquitetura padrÃ£o de integraÃ§Ãµes da organizaÃ§Ã£o, e realiza operaÃ§Ãµes como montar a requisiÃ§Ã£o HTTP, obter tokens de autenticaÃ§Ã£o, construir o payload e processar a resposta.

MÃ©todos
`callIntegration(Object obj)`
- Executa a integraÃ§Ã£o chamando o mÃ©todo principal, enviando uma oportunidade como objeto.
- ParÃ¢metro: `obj` (Object): a oportunidade que serÃ¡ faturada.
- Retorno: Nenhum.

`constructEndpoint()`
- Retorna o endpoint (URL) do sistema Fluig para a requisiÃ§Ã£o.
- Valida se o endpoint estÃ¡ configurado corretamente nas credenciais.
- Retorna: `String` com a URL do endpoint.
- Se o endpoint nÃ£o estiver configurado, lanÃ§a uma exceÃ§Ã£o.

`setMethod()`
- Define o mÃ©todo HTTP usado na requisiÃ§Ã£o, neste caso, POST.
- Retorna: `String` com o mÃ©todo HTTP.

`constructHeaders()`
- ConstrÃ³i os cabeÃ§alhos da requisiÃ§Ã£o HTTP, incluindo o token de autenticaÃ§Ã£o.
- ObtÃ©m o token de acesso atravÃ©s de uma integraÃ§Ã£o com o sistema de autenticaÃ§Ã£o (`DW_FluigGetAccessTokenIntegrable`).
- Retorna: `Map<String, String>` contendo os cabeÃ§alhos, incluindo o token de autorizaÃ§Ã£o.
- LanÃ§a exceÃ§Ã£o se o token nÃ£o for obtido.

`constructQueryParameters()`
- Retorna os parÃ¢metros de query da URL, que neste caso estÃ£o vazios.
- Retorna: `Map<String, String>` vazio.

`getSerializedRequest()`
- Monta e serializa o corpo da requisiÃ§Ã£o em formato JSON, baseado nos dados da oportunidade.
- Reconsulta a oportunidade para garantir que campos relacionados estejam atualizados.
- Retorna: `String` com o JSON do payload.

`setDeserializedResponseObject()`
- Processa a resposta da requisiÃ§Ã£o HTTP, deserializando o corpo para um template de resposta.
- Armazena o resultado na variÃ¡vel `responseTemplate`.
- Retorna: Nenhum.

`finish()`
- MÃ©todo opcional chamado ao final do processo, disponÃ­vel para extensÃµes futuras.
- Neste caso, nÃ£o realiza nenhuma aÃ§Ã£o.

VariÃ¡veis
`responseTemplate`
- Tipo: `DW_IniciarFaturamentoResponseTemplate`
- DescriÃ§Ã£o: Armazena a resposta deserializada da requisiÃ§Ã£o, contendo informaÃ§Ãµes retornadas pelo sistema Fluig apÃ³s a tentativa de iniciar o faturamento.

Classe: DW_GetAvaliacaoResponseTemplate

DescriÃ§Ã£o
A classe `DW_GetAvaliacaoResponseTemplate` Ã© uma estrutura de dados que representa a resposta de uma avaliaÃ§Ã£o de veÃ­culo, contendo informaÃ§Ãµes detalhadas sobre o resultado da avaliaÃ§Ã£o, valores relacionados ao veÃ­culo, e outras observaÃ§Ãµes pertinentes.

MÃ©todos
Nenhum mÃ©todo estÃ¡ definido nesta classe. Ela funciona como um container de dados, armazenando vÃ¡rias informaÃ§Ãµes sobre a avaliaÃ§Ã£o.

VariÃ¡veis
`message`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena uma mensagem relacionada Ã  avaliaÃ§Ã£o, como status ou informaÃ§Ãµes adicionais.

`modelo`
- Tipo: `String`
- DescriÃ§Ã£o: Representa o modelo do veÃ­culo avaliado. Exemplo: "A CLASSIFICAR".

`molicar`
- Tipo: `String`
- DescriÃ§Ã£o: Pode conter informaÃ§Ãµes adicionais ou estar nulo. Seu significado especÃ­fico nÃ£o Ã© detalhado.

`observacao`
- Tipo: `String`
- DescriÃ§Ã£o: Campo para observaÃ§Ãµes adicionais sobre a avaliaÃ§Ã£o, pode ser nulo.

`placa`
- Tipo: `String`
- DescriÃ§Ã£o: Placa do veÃ­culo avaliado. Exemplo: "AQQ0661".

`chassi`
- Tipo: `String`
- DescriÃ§Ã£o: NÃºmero do chassi do veÃ­culo. Exemplo: "9BWDH5BZ5KP581675".

`precoAvaliacao`
- Tipo: `Decimal`
- DescriÃ§Ã£o: Valor avaliado do veÃ­culo, possivelmente o valor de mercado ou de avaliaÃ§Ã£o. Exemplo: 80000.00.

`avaliacaoMaisTOP`
- Tipo: `Decimal`
- DescriÃ§Ã£o: Valor de avaliaÃ§Ã£o considerado como o mais alto ou premium. Exemplo: 80000.00.

`precoCliente`
- Tipo: `Decimal`
- DescriÃ§Ã£o: Valor oferecido ao cliente, que pode ser diferente do valor de avaliaÃ§Ã£o. Exemplo: 100000.00.

`valorTop`
- Tipo: `Decimal`
- DescriÃ§Ã£o: Valor relacionado ao segmento top ou premium da avaliaÃ§Ã£o. Exemplo: 0.00.

`valorSugerido`
- Tipo: `Decimal`
- DescriÃ§Ã£o: Valor sugerido para alguma aÃ§Ã£o ou decisÃ£o, pode estar nulo.

`previsaoReparo`
- Tipo: `Decimal`
- DescriÃ§Ã£o: PrevisÃ£o de custo para reparos necessÃ¡rios no veÃ­culo. Exemplo: 0.00.

`dataAvaliacao`
- Tipo: `String`
- DescriÃ§Ã£o: Data e hora em que a avaliaÃ§Ã£o foi realizada, no formato ISO 8601. Exemplo: "2025-05-08T09:59:00".

`diasValidade`
- Tipo: `Integer`
- DescriÃ§Ã£o: NÃºmero de dias que a avaliaÃ§Ã£o Ã© considerada vÃ¡lida. Exemplo: 7.

Classe: DWCustomListViewLead

DescriÃ§Ã£o
A classe `DWCustomListViewLead` Ã© uma implementaÃ§Ã£o especÃ­fica que estende a classe `DwCustomListView`. Ela Ã© responsÃ¡vel por montar uma lista personalizada de registros relacionados a um Lead, incluindo outros Leads com informaÃ§Ãµes semelhantes e Oportunidades relacionadas ao Lead. Essa lista Ã© estruturada para ser consumida por componentes Lightning, como LWC ou Aura, facilitando a exibiÃ§Ã£o de um painel de histÃ³rico de relacionamentos.

MÃ©todos
`DWCustomListViewLead(Id recordId, String title, String objectName)`
- Construtor da classe.
- ParÃ¢metros:
  - `recordId` (Id): identificador do Lead de origem.
  - `title` (String): tÃ­tulo que serÃ¡ exibido na lista.
  - `objectName` (String): nome do objeto, usado como metadado para exibiÃ§Ã£o.
- Funcionalidade: Inicializa a lista personalizada, buscando registros relacionados ao Lead, incluindo outros Leads e Oportunidades, e configura atributos como o nome do Lead e o nome do objeto.

`getRecordsRelatedByLeadId(Id recordId)`
- MÃ©todo privado e estÃ¡tico.
- ParÃ¢metro: `recordId` (Id): identificador do Lead.
- Retorna: uma lista de registros relacionados (`RelatedRecordData`).
- Funcionalidade: Busca e compila registros relacionados ao Lead, incluindo Leads semelhantes e Oportunidades relacionadas, retornando uma lista estruturada desses registros.

`getOpportunitiesById(Id recordId)`
- MÃ©todo privado e estÃ¡tico.
- ParÃ¢metro: `recordId` (Id): identificador do Lead.
- Retorna: uma lista de Oportunidades relacionadas.
- Funcionalidade: Consulta as Oportunidades vinculadas ao Lead usando a DAO (`DWCustomListViewDAO`).

`getLeadsById(Id recordId)`
- MÃ©todo privado e estÃ¡tico.
- ParÃ¢metro: `recordId` (Id): identificador do Lead.
- Retorna: uma lista de Leads relacionados.
- Funcionalidade: Consulta outros Leads que possuem informaÃ§Ãµes semelhantes ao Lead de origem, usando a DAO.

VariÃ¡veis
`relatedRecords`
- Tipo: `List<DwCustomListView.RelatedRecordData>`
- DescriÃ§Ã£o: Armazena a lista de registros relacionados ao Lead, incluindo Leads semelhantes e Oportunidades, que serÃ£o exibidos na lista personalizada.

`recordName`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o nome do Lead de origem, obtido atravÃ©s da consulta ao Lead pelo seu ID.

`objectName`
- Tipo: `String`
- DescriÃ§Ã£o: Nome do objeto (por exemplo, 'Lead'), utilizado como metadado para exibiÃ§Ã£o na lista.

Classe: DWAccountHistoryPurchaseDTO

DescriÃ§Ã£o
A classe `DWAccountHistoryPurchaseDTO` Ã© uma estrutura de dados usada para transferir informaÃ§Ãµes relacionadas ao histÃ³rico de compras de uma conta no Salesforce. Ela armazena detalhes sobre registros especÃ­ficos e suas informaÃ§Ãµes relacionadas, facilitando a comunicaÃ§Ã£o entre o backend e o frontend, especialmente em componentes Lightning.

MÃ©todos
Construtor
`DWAccountHistoryPurchaseDTO()`
- Construtor padrÃ£o que inicializa uma nova instÃ¢ncia da classe.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.

VariÃ¡veis
`recordId`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o identificador Ãºnico do registro de compra.

`recordName`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o nome do registro de compra.

`objectName`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o nome do objeto relacionado ao registro.

`title`
- Tipo: `String`
- DescriÃ§Ã£o: TÃ­tulo ou descriÃ§Ã£o relacionada ao registro de compra.

`relatedRecords`
- Tipo: `List<RelatedRecordData>`
- DescriÃ§Ã£o: Lista de registros relacionados, contendo detalhes adicionais sobre cada item associado Ã  compra.

Classe Interna: RelatedRecordData
DescriÃ§Ã£o
A classe `RelatedRecordData` representa os detalhes de cada registro relacionado Ã  compra, incluindo informaÃ§Ãµes especÃ­ficas como identificaÃ§Ã£o, tipo, data, empresa, marca, modelo, cor, vendedor, valor, cliente e cÃ³digo.

VariÃ¡veis
`id`
- Tipo: `String`
- DescriÃ§Ã£o: Identificador Ãºnico do registro relacionado.

`nome`
- Tipo: `String`
- DescriÃ§Ã£o: Nome do registro relacionado.

`tipo`
- Tipo: `String`
- DescriÃ§Ã£o: Tipo ou categoria do registro relacionado.

`dataNF`
- Tipo: `String`
- DescriÃ§Ã£o: Data da Nota Fiscal associada ao registro.

`empresa`
- Tipo: `String`
- DescriÃ§Ã£o: Nome da empresa relacionada ao registro.

`marca`
- Tipo: `String`
- DescriÃ§Ã£o: Marca do item relacionado.

`modelo`
- Tipo: `String`
- DescriÃ§Ã£o: Modelo do item relacionado.

`cor`
- Tipo: `String`
- DescriÃ§Ã£o: Cor do item relacionado.

`vendedor`
- Tipo: `String`
- DescriÃ§Ã£o: Nome do vendedor responsÃ¡vel pela venda.

`valorTotalNF`
- Tipo: `String`
- DescriÃ§Ã£o: Valor total da Nota Fiscal.

`cliente`
- Tipo: `String`
- DescriÃ§Ã£o: Nome do cliente associado ao registro.

`nomeCliente`
- Tipo: `String`
- DescriÃ§Ã£o: Nome do cliente (pode ser uma redundÃ¢ncia ou diferente do campo `cliente`).

`codigo`
- Tipo: `String`
- DescriÃ§Ã£o: CÃ³digo identificador do registro relacionado.

Classe: DW_DocusignReenviarController

DescriÃ§Ã£o
A classe `DW_DocusignReenviarController` Ã© responsÃ¡vel por gerenciar o reenvio de envelopes do DocuSign a partir do Salesforce. Ela fornece um mÃ©todo acessÃ­vel para interfaces como Lightning Web Components (LWC) ou Aura, que permite solicitar o reenvio de um envelope especÃ­fico usando seu ID.

MÃ©todos
`reenviarDocusign(String recordId)`
- PropÃ³sito: Executa o reenvio de um envelope do DocuSign com base no ID do registro no Salesforce.
- ParÃ¢metro: `recordId` (String): o identificador do registro do envelope no Salesforce.
- Processo:
  - Busca o envelope no Salesforce usando o ID fornecido.
  - ObtÃ©m um token de acesso ao API do DocuSign atravÃ©s de uma integraÃ§Ã£o.
  - Verifica se o token foi obtido com sucesso; caso contrÃ¡rio, retorna uma mensagem de erro.
  - Monta uma requisiÃ§Ã£o POST para reenviar o envelope, incluindo o ID do envelope no endpoint.
  - Adiciona os cabeÃ§alhos necessÃ¡rios, incluindo o token de autenticaÃ§Ã£o.
  - Envia a requisiÃ§Ã£o ao DocuSign.
  - Verifica a resposta da requisiÃ§Ã£o:
    - Se o status for diferente de 200 (sucesso), retorna uma mensagem de erro com o corpo da resposta.
    - Caso contrÃ¡rio, retorna uma confirmaÃ§Ã£o de sucesso.
- Retorno: `String` contendo o resultado da operaÃ§Ã£o, podendo indicar sucesso ou erro.

VariÃ¡veis
`envelope`
- Tipo: `DWEnvelopeDocusign__c`
- DescriÃ§Ã£o: Armazena o envelope do Salesforce buscado pelo ID, contendo informaÃ§Ãµes essenciais como o ID do envelope no DocuSign.

`tokenIntegration`
- Tipo: `DW_DocusignGetAccessTokenIntegrable`
- DescriÃ§Ã£o: Objeto responsÃ¡vel por realizar a integraÃ§Ã£o para obter o token de acesso ao API do DocuSign.

`accessToken`
- Tipo: `String`
- DescriÃ§Ã£o: Token de autenticaÃ§Ã£o obtido da integraÃ§Ã£o, utilizado para autorizar a requisiÃ§Ã£o de reenvio ao DocuSign.

`request`
- Tipo: `DW_RequestFactory`
- DescriÃ§Ã£o: Objeto que monta e envia a requisiÃ§Ã£o HTTP para o API do DocuSign, incluindo cabeÃ§alhos e corpo da requisiÃ§Ã£o.

Notas adicionais
- A classe utiliza uma abordagem de integraÃ§Ã£o REST para comunicar-se com o DocuSign.
- A operaÃ§Ã£o de reenvio Ã© feita atravÃ©s de uma requisiÃ§Ã£o POST, incluindo o ID do envelope no endpoint.
- A resposta da requisiÃ§Ã£o Ã© avaliada para garantir que o reenvio foi bem-sucedido, retornando mensagens apropriadas em caso de erro ou sucesso.

Classe: DW_DocusignSendSignControllerTest

DescriÃ§Ã£o
A classe `DW_DocusignSendSignControllerTest` Ã© uma classe de testes automatizados no Salesforce, que valida o funcionamento do controlador responsÃ¡vel por enviar documentos para assinatura via Docusign. Ela prepara dados de teste, simula chamadas externas e verifica se o mÃ©todo de envio estÃ¡ funcionando corretamente em diferentes cenÃ¡rios.

MÃ©todos
`setupData()`
- Configura dados de teste essenciais, como contas, oportunidades, produtos, condiÃ§Ãµes de pagamento, termos e credenciais de integraÃ§Ã£o com o Docusign.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.
- Leigo: Cria tudo que Ã© necessÃ¡rio para testar, como clientes, produtos, condiÃ§Ãµes de pagamento e configuraÃ§Ãµes de conexÃ£o com o Docusign.

`testSendToSign_success()`
- Testa o envio de um documento para assinatura com sucesso.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.
- Leigo: Verifica se o mÃ©todo consegue enviar um documento e receber uma resposta de sucesso.

`testSendToSignTermoPagamentoTerceiros_success()`
- Testa o envio de um documento para assinatura relacionado a um termo de pagamento de terceiros.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.
- Leigo: Confirma se o envio funciona corretamente para um tipo especÃ­fico de termo.

`testSendToSignMinuta_success()`
- Testa o envio de uma minuta (documento padrÃ£o) para assinatura.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.
- Leigo: Verifica se o mÃ©todo consegue enviar uma minuta e receber confirmaÃ§Ã£o de sucesso.

`testSendToSign_invalidToken()`
- Testa o comportamento do mÃ©todo ao usar um token invÃ¡lido.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.
- Leigo: Avalia se o sistema lida corretamente com tokens invÃ¡lidos ou expirados.

`testSendToSign_invalidContentVersion()`
- Testa o envio de um documento usando um ContentVersion invÃ¡lido.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.
- Leigo: Verifica se o mÃ©todo responde adequadamente quando o arquivo enviado nÃ£o existe ou estÃ¡ incorreto.

`testExtractErrorMessage()`
- Testa a extraÃ§Ã£o de mensagens de erro de respostas JSON.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.
- Leigo: Verifica se o mÃ©todo consegue interpretar mensagens de erro de diferentes formatos de resposta.

VariÃ¡veis
Nenhuma variÃ¡vel de classe Ã© declarada explicitamente nesta classe de testes. Ela utiliza variÃ¡veis locais dentro dos mÃ©todos para criar e manipular os dados de teste.

Classe: DWCustomListViewOpportunity

DescriÃ§Ã£o
A classe `DWCustomListViewOpportunity` Ã© uma implementaÃ§Ã£o especializada da classe `DwCustomListView`. Ela Ã© responsÃ¡vel por montar uma lista personalizada de registros relacionados a uma oportunidade especÃ­fica no Salesforce, incluindo oportunidades relacionadas e leads associados. Essa lista Ã© utilizada para exibir informaÃ§Ãµes relacionadas na interface do usuÃ¡rio, como painÃ©is ou componentes Lightning.

MÃ©todos
`DWCustomListViewOpportunity(Id recordId, String title, String objectName)`
- Construtor da classe.
- ParÃ¢metros:
  - `recordId` (Id): identificador da oportunidade de origem.
  - `title` (String): tÃ­tulo que serÃ¡ exibido na lista, por exemplo, "Leads e Oportunidades Relacionados".
  - `objectName` (String): nome do objeto principal, usado para metadados e exibiÃ§Ã£o.
- Funcionalidade: Inicializa a lista personalizada, buscando registros relacionados Ã  oportunidade e configurando atributos como o nome da oportunidade.

`getRecordsRelatedByOpportunityId(Id recordId)`
- MÃ©todo privado estÃ¡tico.
- ParÃ¢metros:
  - `recordId` (Id): identificador da oportunidade.
- Retorna: uma lista de objetos `RelatedRecordData`, contendo registros de oportunidades relacionadas e leads associados.
- Funcionalidade: Busca todas as oportunidades relacionadas Ã  oportunidade de origem e tambÃ©m os leads relacionados, convertendo esses registros em um formato padrÃ£o para exibiÃ§Ã£o.

`getOpportunitiesById(Id recordId)`
- MÃ©todo privado estÃ¡tico.
- ParÃ¢metros:
  - `recordId` (Id): identificador da oportunidade.
- Retorna: uma lista de objetos `Opportunity`.
- Funcionalidade: Consulta as oportunidades relacionadas ao registro de origem usando a DAO (`DWCustomListViewDAO`).

`getLeadsById(Id recordId)`
- MÃ©todo privado estÃ¡tico.
- ParÃ¢metros:
  - `recordId` (Id): identificador da oportunidade.
- Retorna: uma lista de objetos `Lead`.
- Funcionalidade: Consulta os leads relacionados Ã  oportunidade de origem, tambÃ©m usando a DAO.

VariÃ¡veis
`relatedRecords`
- Tipo: `List<DwCustomListView.RelatedRecordData>`
- DescriÃ§Ã£o: Armazena a lista de registros relacionados Ã  oportunidade, incluindo oportunidades relacionadas e leads, que serÃ£o exibidos na lista personalizada.

`recordName`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o nome da oportunidade de origem, obtido atravÃ©s da consulta Ã  oportunidade pelo seu ID.

`objectName`
- Tipo: `String`
- DescriÃ§Ã£o: Nome do objeto principal, utilizado para metadados e exibiÃ§Ã£o na interface do usuÃ¡rio.

Classe: DW_DocusignGetAccessTokenIntegrable

DescriÃ§Ã£o
A classe `DW_DocusignGetAccessTokenIntegrable` Ã© responsÃ¡vel por obter o token de acesso (Access Token) da API do DocuSign. Este token Ã© utilizado para autenticar futuras chamadas Ã  API, como envio ou cancelamento de envelopes. A classe estende uma classe base `DW_Integrable`, que fornece funcionalidades padrÃ£o para integraÃ§Ãµes HTTP no Salesforce, facilitando a construÃ§Ã£o, envio e processamento de requisiÃ§Ãµes HTTP.

MÃ©todos
`callIntegration(Object obj)`
- Inicia o processo de integraÃ§Ã£o para obter o token de acesso.
- ParÃ¢metro: `obj` (Object): objeto de entrada, que neste caso nÃ£o Ã© utilizado diretamente, mas Ã© mantido por padrÃ£o.
- Retorno: Nenhum.

`constructEndpoint()`
- ConstrÃ³i a URL do endpoint para solicitar o token de acesso ao DocuSign.
- Retorno: `String` contendo a URL completa.
- LanÃ§a uma exceÃ§Ã£o `IllegalArgumentException` se o ClientId necessÃ¡rio nÃ£o estiver preenchido no metadado.

`setMethod()`
- Especifica o mÃ©todo HTTP utilizado na requisiÃ§Ã£o.
- Retorno: `String` com o valor `'GET'`, indicando que a requisiÃ§Ã£o serÃ¡ do tipo GET.

`constructHeaders()`
- Define os cabeÃ§alhos HTTP necessÃ¡rios para a requisiÃ§Ã£o.
- Retorno: `Map<String, String>` contendo os cabeÃ§alhos `Content-Type` e `Accept`, ambos configurados para `application/json`.

`constructQueryParameters()`
- Define os parÃ¢metros de consulta (query parameters) da requisiÃ§Ã£o.
- Retorno: `Map<String, String>`, que neste caso Ã© vazio, pois a requisiÃ§Ã£o nÃ£o necessita de parÃ¢metros adicionais.

`getSerializedRequest()`
- Serializa o corpo da requisiÃ§Ã£o.
- Como a requisiÃ§Ã£o Ã© do tipo GET e nÃ£o envia payload, retorna `null`.

`setDeserializedResponseObject()`
- Processa a resposta JSON recebida da API e a converte em um objeto Apex.
- Atualmente, o cÃ³digo de desserializaÃ§Ã£o estÃ¡ comentado, mas a estrutura estÃ¡ preparada para implementar essa funcionalidade futuramente.
- Pode ser utilizado para extrair o token da resposta e armazenÃ¡-lo de forma adequada.

`finish()`
- Finaliza o processo de integraÃ§Ã£o.
- Pode ser utilizado para armazenar o token obtido em configuraÃ§Ãµes personalizadas (Custom Settings ou Custom Metadata).
- Atualmente, o mÃ©todo estÃ¡ vazio, aguardando implementaÃ§Ã£o futura.

VariÃ¡veis
`responseTemplate`
- Tipo: `DW_DocusignGetAccessTokenTemplate`
- DescriÃ§Ã£o: Armazena a resposta desserializada da API, que contÃ©m o token de acesso. Essa variÃ¡vel facilita o acesso aos dados retornados pela API de forma estruturada.

Classe: DW_ReceiveExternalSFController

DescriÃ§Ã£o
A classe `DW_ReceiveExternalSFController` Ã© uma classe Apex pÃºblica sem compartilhamento que gerencia a recepÃ§Ã£o de cÃ³digos de consentimento de usuÃ¡rios e a geraÃ§Ã£o de URLs de autenticaÃ§Ã£o OAuth para o Salesforce. Ela tambÃ©m publica eventos relacionados ao consentimento do usuÃ¡rio.

MÃ©todos
`DW_ReceiveExternalSFController()`
- Construtor da classe.
- Executa ao criar uma instÃ¢ncia da classe.
- ObtÃ©m o parÃ¢metro `code` da URL da pÃ¡gina atual e o armazena na variÃ¡vel `code`.
- Cria um evento do tipo `DW_SF__e` e define seu campo `CodigoConsentimentoUsuario__c` com o valor do `code` ou `'nocode'` se nÃ£o houver.
- Publica o evento usando o EventBus.
- **Leiga:** Quando a classe Ã© criada, ela pega um cÃ³digo da URL, cria um evento com esse cÃ³digo e envia esse evento para outros componentes do sistema.

`generateSaleforceUrlAuth(String env)`
- MÃ©todo estÃ¡tico acessÃ­vel via Lightning ou Aura.
- Gera uma URL de autenticaÃ§Ã£o OAuth do Salesforce baseada no ambiente (`env`) fornecido.
- Consulta uma metadado personalizada `DWSalesforce__mdt` para obter o `ClientId__c` e `URLRedirecionamento__c`.
- Atualiza o campo `DWMomentoSolicitacaoConsentimento__c` do usuÃ¡rio atual para o momento presente e zera o campo `DWCodigoConsentimento__c`.
- ConstrÃ³i a URL de autorizaÃ§Ã£o OAuth com os parÃ¢metros necessÃ¡rios, incluindo o client ID e o URL de redirecionamento.
- Retorna a URL gerada.
- **Leiga:** Este mÃ©todo cria um link que o usuÃ¡rio pode usar para fazer login no Salesforce e dar permissÃ£o de acesso, usando informaÃ§Ãµes configuradas na metadado.

`getUserConsentCode()`
- MÃ©todo estÃ¡tico acessÃ­vel via Lightning ou Aura.
- Recupera o cÃ³digo de consentimento do usuÃ¡rio atual.
- Faz uma consulta na tabela `User` para obter o campo `DWCodigoConsentimento__c` do usuÃ¡rio logado.
- Retorna o cÃ³digo de consentimento.
- **Leiga:** Este mÃ©todo busca o cÃ³digo de consentimento que o usuÃ¡rio jÃ¡ forneceu anteriormente.

VariÃ¡veis
`code`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o cÃ³digo de consentimento recebido via URL na inicializaÃ§Ã£o da classe.
- AcessÃ­vel: `get` e `set`.

ObservaÃ§Ãµes
- A classe interage com metadados personalizados (`DWSalesforce__mdt`) para obter configuraÃ§Ãµes especÃ­ficas de OAuth.
- Utiliza o EventBus para publicar eventos relacionados ao consentimento do usuÃ¡rio.
- Inclui tratamento de exceÃ§Ãµes para garantir que erros sejam comunicados de forma adequada ao sistema de interface.

Classe: DW_DynamicComponentController

DescriÃ§Ã£o
A classe `DW_DynamicComponentController` Ã© uma classe Apex pÃºblica, sem compartilhamento de regras de seguranÃ§a, que fornece uma funcionalidade para obter informaÃ§Ãµes dinÃ¢micas de componentes com base no perfil de qualificaÃ§Ã£o do usuÃ¡rio. Ela Ã© exposta para uso em componentes Lightning atravÃ©s do mÃ©todo marcado com `@AuraEnabled`.

MÃ©todos
`getDynamicComponentByProfile(String recordId, String componentName)`
- MÃ©todo estÃ¡tico que retorna um mapa com informaÃ§Ãµes sobre o componente dinÃ¢mico baseado no perfil de qualificaÃ§Ã£o do usuÃ¡rio.
- ParÃ¢metros:
  - `recordId` (String): o ID do registro do objeto Salesforce para o qual a operaÃ§Ã£o serÃ¡ realizada.
  - `componentName` (String): o nome do componente que se deseja obter informaÃ§Ãµes.
- Retorno: `Map<String, Object>` contendo detalhes do perfil, tipo de componente, nome do componente, nome do objeto, e variÃ¡veis de entrada, ou uma mensagem de erro se nenhum perfil for encontrado.

DescriÃ§Ã£o tÃ©cnica e simplificada:
- O mÃ©todo recebe um ID de registro e um nome de componente.
- Determina o nome do objeto relacionado ao registro.
- Consulta na base de dados os perfis de qualificaÃ§Ã£o associados ao objeto, filtrando por tipo de registro, contexto do perfil e nome do componente.
- Se nenhum perfil for encontrado, retorna uma mensagem de erro informando isso.
- Caso contrÃ¡rio, usa uma classe de similaridade para determinar o perfil mais adequado com base no registro.
- Retorna informaÃ§Ãµes do perfil selecionado, incluindo o tipo de componente, nome do componente, variÃ¡veis de entrada e outros detalhes.

VariÃ¡veis
`profiles`
- Tipo: `Map<Id, DW_QP__PerfilQualificacao__c>`
- DescriÃ§Ã£o: Mapa que armazena os perfis de qualificaÃ§Ã£o encontrados na consulta, onde a chave Ã© o ID do perfil e o valor Ã© o registro do perfil.

`similarityCalculator`
- Tipo: `DW_QP.SimilarityCalculator`
- DescriÃ§Ã£o: Objeto que realiza o cÃ¡lculo de similaridade entre o registro atual e os perfis de qualificaÃ§Ã£o, ajudando a determinar qual perfil Ã© mais relevante.

`profileId`
- Tipo: `Id`
- DescriÃ§Ã£o: ID do perfil de qualificaÃ§Ã£o selecionado apÃ³s o cÃ¡lculo de similaridade, que serÃ¡ utilizado para obter detalhes especÃ­ficos do perfil.

Notas adicionais:
- O mÃ©todo utiliza o mÃ©todo `byRecordId` da classe `DW_QP.SimilarityCalculator` para criar uma instÃ¢ncia de cÃ¡lculo de similaridade.
- Caso ocorra alguma exceÃ§Ã£o durante a execuÃ§Ã£o, ela Ã© capturada e relanÃ§ada como uma `AuraHandledException`, garantindo que mensagens de erro sejam exibidas de forma amigÃ¡vel em componentes Lightning.

Classe: DW_AvaliacaoMock

DescriÃ§Ã£o
A classe `DW_AvaliacaoMock` Ã© uma implementaÃ§Ã£o de mock para chamadas HTTP no Salesforce, usada especificamente em testes automatizados. Ela simula respostas de chamadas HTTP, permitindo que o cÃ³digo que faz requisiÃ§Ãµes a serviÃ§os externos seja testado sem precisar de acesso real Ã  internet ou a sistemas externos. Essa classe Ã© Ãºtil para garantir que o comportamento do cÃ³digo seja correto ao lidar com diferentes respostas de APIs, como sucesso, erro ou respostas especÃ­ficas.

MÃ©todos
`DW_AvaliacaoMock(Map<String, String> urlToBody)`
- Construtor que permite definir respostas especÃ­ficas para URLs distintas.
- ParÃ¢metro: `urlToBody` (Map): um mapa que associa URLs a corpos de resposta personalizados, simulando diferentes respostas para diferentes chamadas.

`DW_AvaliacaoMock(Integer statusCode, String status, String body)`
- Construtor que configura uma resposta Ãºnica com cÃ³digo de status, status textual e corpo.
- ParÃ¢metros:
  - `statusCode` (Integer): cÃ³digo de status HTTP, como 200 ou 404.
  - `status` (String): texto do status HTTP, como "OK" ou "Not Found".
  - `body` (String): conteÃºdo do corpo da resposta, geralmente em JSON.

`DW_AvaliacaoMock(Integer statusCode, String status, String body, Map<String, String> headers)`
- Construtor que permite definir tambÃ©m cabeÃ§alhos HTTP personalizados.
- ParÃ¢metros:
  - `headers` (Map): um mapa de cabeÃ§alhos HTTP, como Content-Type.

`respond(HTTPRequest req)`
- MÃ©todo obrigatÃ³rio da interface `HttpCalloutMock`.
- Simula uma resposta HTTP para uma requisiÃ§Ã£o feita durante testes.
- ParÃ¢metros:
  - `req` (HTTPRequest): objeto que representa a requisiÃ§Ã£o simulada.
- Retorna: `HttpResponse` contendo o status, cabeÃ§alhos e corpo configurados na simulaÃ§Ã£o.

VariÃ¡veis
`statusCode`
- Tipo: `Integer`
- DescriÃ§Ã£o: Armazena o cÃ³digo de status HTTP que serÃ¡ retornado na resposta simulada.

`status`
- Tipo: `String`
- DescriÃ§Ã£o: Texto do status HTTP (por exemplo, "OK", "Not Found") que serÃ¡ retornado na resposta.

`body`
- Tipo: `String`
- DescriÃ§Ã£o: ConteÃºdo do corpo da resposta, geralmente em formato JSON, que serÃ¡ retornado na resposta simulada.

`headers`
- Tipo: `Map<String, String>`
- DescriÃ§Ã£o: Mapa contendo os cabeÃ§alhos HTTP que serÃ£o enviados na resposta simulada.

`urlToBody`
- Tipo: `Map<String, String>`
- DescriÃ§Ã£o: Mapa que associa URLs especÃ­ficas a corpos de resposta personalizados, permitindo simular respostas diferentes para diferentes endpoints.

Classe: DW_ScheduleEventByQueueAvailabilityTest

DescriÃ§Ã£o
A classe `DW_ScheduleEventByQueueAvailabilityTest` Ã© uma classe de testes automatizados no Salesforce, que verifica o funcionamento de mÃ©todos relacionados ao agendamento de eventos e disponibilidade de filas (queues). Ela garante que as funcionalidades da classe `DW_ScheduleEventByQueueAvailability` estejam operando corretamente, simulando diferentes cenÃ¡rios de uso.

MÃ©todos
`getGroupsTypeQueueTest()`
- Executa o mÃ©todo `getGroupsTypeQueue()` da classe `DW_ScheduleEventByQueueAvailability`.
- NÃ£o recebe parÃ¢metros e nÃ£o retorna valor.
- PropÃ³sito: testar se o mÃ©todo que busca os grupos do tipo fila funciona sem erros.

`getAvailableScheduleGridByQueueTest()`
- Cria dados de teste, incluindo Conta, Contato, Oportunidade, e eventos.
- Chama repetidamente o mÃ©todo `getAvailableScheduleGridByQueue()` com diferentes IDs de Lead e Oportunidade, alÃ©m de horÃ¡rios.
- NÃ£o retorna valor.
- PropÃ³sito: verificar se o mÃ©todo que busca horÃ¡rios disponÃ­veis na fila funciona corretamente com diferentes entradas.

`insertEventTest()`
- Cria dados de teste semelhantes aos anteriores, incluindo uma Conta, Contato, Oportunidade e Lead.
- Cria uma fila (queue) de teste.
- Chama o mÃ©todo `insertEvent()` da classe `DW_ScheduleEventByQueueAvailability` para inserir um evento agendado, serializado em JSON.
- NÃ£o retorna valor.
- PropÃ³sito: testar a inserÃ§Ã£o de eventos agendados na fila, verificando se o mÃ©todo funciona corretamente.

`getGroupQueue()`
- MÃ©todo auxiliar que busca e retorna um grupo do tipo fila (`Queue`) usando uma consulta personalizada.
- Retorna um objeto do tipo `Group`.
- PropÃ³sito: obter uma fila de teste para uso em outros mÃ©todos de teste.

`getOpportunityTest()`
- Cria dados de teste: Conta, Contato e Oportunidade.
- Executa o mÃ©todo `getOpportunity()` da classe `DW_ScheduleEventByQueueAvailability` com o ID da Oportunidade.
- NÃ£o retorna valor.
- PropÃ³sito: verificar se a recuperaÃ§Ã£o de uma oportunidade especÃ­fica funciona corretamente.

`getAvailabilityQueueByTimeTest()`
- Executa o mÃ©todo `getAvailabilityQueueByTime()` da classe `DW_ScheduleEventByQueueAvailability` com o ID do usuÃ¡rio atual e um intervalo de tempo.
- NÃ£o retorna valor.
- PropÃ³sito: testar a consulta de disponibilidade na fila para um usuÃ¡rio em um intervalo de tempo especÃ­fico.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia Ã© definida nesta classe de testes. Os mÃ©todos utilizam variÃ¡veis locais para criar e manipular registros de teste, alÃ©m de chamadas a mÃ©todos de outras classes para verificar funcionalidades especÃ­ficas.

Classe: DW_GetRecordCallLeadBatch

DescriÃ§Ã£o
A classe `DW_GetRecordCallLeadBatch` Ã© responsÃ¡vel por integrar o Salesforce com o sistema de telefonia NextIP para buscar gravaÃ§Ãµes de chamadas telefÃ´nicas relacionadas a registros do tipo Lead. Ela realiza esse processo de forma automÃ¡tica, em lote (batch), podendo ser agendada para rodar periodicamente. A classe gerencia sessÃµes de conexÃ£o, realiza requisiÃ§Ãµes Ã  API da NextIP, atualiza registros de Lead com os links das gravaÃ§Ãµes e oferece mÃ©todos para agendar ou cancelar execuÃ§Ãµes.

MÃ©todos
`execute(SchedulableContext param1)`
- Executa o batch de processamento ao ser chamado como tarefa agendada.
- Inicia a execuÃ§Ã£o do batch com um limite de 1 registro por execuÃ§Ã£o.

`scheduleThisClass(String cron)`
- Agenda a execuÃ§Ã£o da classe com uma expressÃ£o CRON personalizada.
- ParÃ¢metro: `cron` (String): expressÃ£o CRON que define a frequÃªncia de execuÃ§Ã£o.
- Se `null`, usa uma frequÃªncia padrÃ£o (uma vez ao dia).

`runEveryNMinutes(Integer each)`
- Agenda a execuÃ§Ã£o da classe a cada N minutos, onde N Ã© definido pelo parÃ¢metro `each`.
- Cria mÃºltiplas tarefas agendadas para cobrir o intervalo de uma hora.

`cancelThisSchedule()`
- Cancela todas as execuÃ§Ãµes agendadas da classe DW_GetRecordCallLeadBatch.
- Busca tarefas agendadas pelo nome e aborta cada uma delas.

`start(Database.BatchableContext param1)`
- Define os registros de Lead que serÃ£o processados no batch.
- Retorna uma lista de Leads que possuem o campo `NextIpId__c` preenchido, mas ainda nÃ£o possuem o link da gravaÃ§Ã£o (`DWGravacaoCall__c` Ã© nulo).

`execute(Database.BatchableContext info, List<Lead> leadList)`
- Processa cada lote de Leads.
- Para cada Lead, realiza uma requisiÃ§Ã£o Ã  API da NextIP para buscar a gravaÃ§Ã£o da chamada.
- Atualiza o Lead com o link da gravaÃ§Ã£o se encontrado.

`finish(Database.BatchableContext info)`
- MÃ©todo final do batch, executado apÃ³s o processamento de todos os registros.
- Neste caso, nÃ£o realiza nenhuma aÃ§Ã£o adicional.

`getIPCredential()`
- Busca as credenciais de conexÃ£o da NextIP com base na loja do usuÃ¡rio atual.
- Retorna um registro de metadados contendo URL, usuÃ¡rio, senha e URL base da gravaÃ§Ã£o.

`callInitSessionAndLogin(User user, Boolean expirouSessao)`
- Inicia uma nova sessÃ£o com a API da NextIP ou reutiliza uma sessÃ£o existente.
- ParÃ¢metros:
  - `user`: usuÃ¡rio responsÃ¡vel pela conexÃ£o.
  - `expirouSessao`: se `true`, forÃ§a a criaÃ§Ã£o de uma nova sessÃ£o.
- Retorna um objeto `SessaoCTI__c` com o ID da sessÃ£o ativa.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia Ã© definida explicitamente na classe, pois ela utiliza mÃ©todos estÃ¡ticos e mÃ©todos de instÃ¢ncia para gerenciar sessÃµes e credenciais.

Classe: DW_DeployQueue

DescriÃ§Ã£o
A classe `DW_DeployQueue` Ã© responsÃ¡vel por gerenciar o processo de deploy de filas entre ambientes diferentes no Salesforce. Ela realiza a autenticaÃ§Ã£o, obtÃ©m credenciais, e envia as filas para um microserviÃ§o que realiza o deploy.

MÃ©todos
`deployQueue(List<DW_DeployQueueInput> inputs)`
- Executa o deploy das filas especificadas.
- ParÃ¢metro: `inputs` (Lista de objetos `DW_DeployQueueInput`) que contÃ©m informaÃ§Ãµes como nomes das filas, cÃ³digo de autorizaÃ§Ã£o e URL do ambiente.
- Funcionalidade: Verifica se hÃ¡ apenas um registro na lista, obtÃ©m credenciais do ambiente de destino, e envia as filas para o microserviÃ§o de deploy.

`getTargetCredentials(String authCode, String envUrl)`
- ObtÃ©m o token de acesso e a URL da instÃ¢ncia do ambiente de destino usando o cÃ³digo de autorizaÃ§Ã£o.
- ParÃ¢metros:
  - `authCode`: CÃ³digo de autorizaÃ§Ã£o para autenticaÃ§Ã£o OAuth.
  - `envUrl`: URL do ambiente de destino.
- Retorna: Um mapa com `access_token` e `instance_url`.
- Funcionalidade: Faz uma requisiÃ§Ã£o HTTP POST para o endpoint de token OAuth, usando informaÃ§Ãµes de metadados, e processa a resposta.

`getSourceCredentials()`
- ObtÃ©m o token de acesso para a organizaÃ§Ã£o de origem usando credenciais de cliente.
- Sem parÃ¢metros.
- Retorna: Uma `String` contendo o token de acesso.
- Funcionalidade: Faz uma requisiÃ§Ã£o HTTP POST ao endpoint OAuth com o grant_type `client_credentials` e processa a resposta.

`sendQueues(String targetAccessToken, String targetInstanceUrl, String googleAccessToken, List<String> queueNames)`
- Envia as filas para o microserviÃ§o de deploy.
- ParÃ¢metros:
  - `targetAccessToken`: Token de acesso do ambiente de destino.
  - `targetInstanceUrl`: URL da instÃ¢ncia do ambiente de destino.
  - `googleAccessToken`: Token de acesso do Google Cloud (nÃ£o utilizado na implementaÃ§Ã£o atual, mas passado como parÃ¢metro).
  - `queueNames`: Lista de nomes das filas a serem enviadas.
- Retorna: Um mapa com a resposta do microserviÃ§o.
- Funcionalidade: Monta uma requisiÃ§Ã£o HTTP POST com detalhes das filas e credenciais, envia ao endpoint do Google Cloud, e processa a resposta.

VariÃ¡veis
`DW_DeployQueueInput`
- Tipo: Classe interna `DW_DeployQueueInput`.
- DescriÃ§Ã£o: Representa a entrada para o mÃ©todo `deployQueue`, contendo nomes das filas, cÃ³digo de autorizaÃ§Ã£o e URL do ambiente de destino.
- VariÃ¡veis:
  - `queueNames`
    - Tipo: `List<String>`
    - DescriÃ§Ã£o: Lista com os nomes das filas que serÃ£o implantadas.
  - `authCode`
    - Tipo: `String`
    - DescriÃ§Ã£o: CÃ³digo de autorizaÃ§Ã£o OAuth para autenticaÃ§Ã£o no ambiente de destino.
  - `envUrl`
    - Tipo: `String`
    - DescriÃ§Ã£o: URL do ambiente de destino onde as filas serÃ£o implantadas.

Classe: DW_GetAvaliacaoIntegrable

DescriÃ§Ã£o
A classe `DW_GetAvaliacaoIntegrable` Ã© responsÃ¡vel por realizar a integraÃ§Ã£o com um serviÃ§o externo de avaliaÃ§Ã£o de veÃ­culos, usando a placa do veÃ­culo como parÃ¢metro. Ela envia uma requisiÃ§Ã£o HTTP do tipo GET para obter informaÃ§Ãµes como o valor de mercado do veÃ­culo, auxiliando vendedores ou sistemas automatizados a obterem uma estimativa de preÃ§o rapidamente. Essa classe herda de `DW_Integrable`, uma base que padroniza integraÃ§Ãµes HTTP no Salesforce, e implementa mÃ©todos especÃ­ficos para montar, enviar e tratar a requisiÃ§Ã£o e resposta.

---

MÃ©todos
`callIntegration(Object obj)`
- Inicia a integraÃ§Ã£o usando a placa do veÃ­culo fornecida.
- ParÃ¢metro: `obj` (Object): normalmente uma String com a placa do veÃ­culo.
- Atribui a placa ao atributo da classe e chama o mÃ©todo para enviar a requisiÃ§Ã£o.

`constructEndpoint()`
- Monta a URL (endpoint) para a requisiÃ§Ã£o HTTP, incluindo a placa codificada.
- Retorna: `String` com a URL completa.
- LanÃ§a uma exceÃ§Ã£o se a URL base ou a placa estiverem vazias, garantindo que os dados necessÃ¡rios estejam presentes.

`setMethod()`
- Define o mÃ©todo HTTP utilizado na requisiÃ§Ã£o.
- Retorna: `'GET'`, indicando que Ã© uma requisiÃ§Ã£o de consulta.

`constructHeaders()`
- Monta os cabeÃ§alhos HTTP, incluindo o token de autenticaÃ§Ã£o.
- ObtÃ©m o token de acesso chamando outra integraÃ§Ã£o (`DW_AvaliacaoGetAccessTokenIntegrable`).
- LanÃ§a uma exceÃ§Ã£o se o token nÃ£o for obtido corretamente.
- Retorna um mapa com os cabeÃ§alhos `Content-Type`, `Accept` e `Authorization`.

`constructQueryParameters()`
- Define os parÃ¢metros de consulta na URL.
- Retorna um mapa vazio, pois essa integraÃ§Ã£o nÃ£o utiliza parÃ¢metros adicionais.

`getSerializedRequest()`
- Retorna o corpo da requisiÃ§Ã£o.
- Como a requisiÃ§Ã£o Ã© do tipo GET, retorna `null`, indicando que nÃ£o hÃ¡ corpo na requisiÃ§Ã£o.

`setDeserializedResponseObject()`
- Trata a resposta recebida da API, convertendo o JSON em um objeto Apex.
- Verifica se o status da resposta Ã© 400 (erro), e captura a mensagem de erro, se presente.
- Deserializa o corpo da resposta para um objeto do tipo `DW_GetAvaliacaoResponseTemplate`.
- Armazena o resultado na variÃ¡vel `responseTemplate` e na variÃ¡vel herdada `deserializedResponseObject`.

`finish()`
- MÃ©todo final para aÃ§Ãµes apÃ³s a requisiÃ§Ã£o.
- Atualmente, nÃ£o realiza nenhuma aÃ§Ã£o adicional.

---

VariÃ¡veis
`responseTemplate`
- Tipo: `DW_GetAvaliacaoResponseTemplate`
- DescriÃ§Ã£o: Armazena a resposta da API apÃ³s a desserializaÃ§Ã£o do JSON, contendo as informaÃ§Ãµes de avaliaÃ§Ã£o do veÃ­culo.

`placa`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena a placa do veÃ­culo que serÃ¡ usada na requisiÃ§Ã£o de avaliaÃ§Ã£o.

Classe: DwCustomListViewDTO

DescriÃ§Ã£o
A classe `DwCustomListViewDTO` Ã© um Data Transfer Object (DTO) que organiza e estrutura os dados de uma "Lista Personalizada" de registros relacionados no Salesforce. Ela Ã© utilizada para facilitar o envio dessas informaÃ§Ãµes de um Apex Controller para componentes Lightning, como LWC ou Aura, permitindo a exibiÃ§Ã£o de listas de registros relacionados a um objeto principal, como Lead ou Oportunidade.

MÃ©todos
Nenhum mÃ©todo pÃºblico explÃ­cito Ã© definido nesta classe. Ela funciona principalmente como uma estrutura de dados com atributos acessÃ­veis.

VariÃ¡veis
`recordId`
- Tipo: `Id`
- DescriÃ§Ã£o: Armazena o identificador do registro principal (por exemplo, o Id de uma Conta ou Oportunidade relacionada Ã  lista).

`listViewKey`
- Tipo: `String`
- DescriÃ§Ã£o: Uma chave Ãºnica que identifica a lista, Ãºtil quando hÃ¡ mÃºltiplas listas na mesma tela para distinguir cada uma.

`recordName`
- Tipo: `String`
- DescriÃ§Ã£o: Nome do registro principal, como o nome de uma Conta ou Oportunidade.

`objectName`
- Tipo: `String`
- DescriÃ§Ã£o: Nome do tipo de objeto do registro principal, como 'Lead' ou 'Opportunity'.

`title`
- Tipo: `String`
- DescriÃ§Ã£o: TÃ­tulo descritivo da lista personalizada, por exemplo, "HistÃ³rico de Oportunidades".

`relatedRecords`
- Tipo: `List<RelatedRecordData>`
- DescriÃ§Ã£o: Lista de registros relacionados (filhos) que serÃ£o exibidos na interface. Cada item representa uma linha na lista, estruturada pela classe interna `RelatedRecordData`.

Classe Interna: RelatedRecordData
DescriÃ§Ã£o
A classe `RelatedRecordData` Ã© uma estrutura que representa um Ãºnico registro relacionado na lista. Cada instÃ¢ncia dessa classe corresponde a uma linha exibida na interface, contendo informaÃ§Ãµes especÃ­ficas do registro relacionado.

VariÃ¡veis
`iconName`
- Tipo: `String`
- DescriÃ§Ã£o: Nome do Ã­cone que representa o tipo de registro, como 'standard:opportunity'.

`id`
- Tipo: `String`
- DescriÃ§Ã£o: Identificador do registro relacionado.

`name`
- Tipo: `String`
- DescriÃ§Ã£o: Nome do registro relacionado.

`createdDate`
- Tipo: `String`
- DescriÃ§Ã£o: Data de criaÃ§Ã£o do registro, geralmente formatada como uma string legÃ­vel.

`status`
- Tipo: `String`
- DescriÃ§Ã£o: Status ou fase do registro, se aplicÃ¡vel.

`createdById`
- Tipo: `String`
- DescriÃ§Ã£o: Id do usuÃ¡rio que criou o registro.

`createdByName`
- Tipo: `String`
- DescriÃ§Ã£o: Nome do usuÃ¡rio que criou o registro.

Resumo
A classe `DwCustomListViewDTO` serve como uma estrutura de dados para transportar informaÃ§Ãµes de uma lista de registros relacionados, incluindo detalhes do registro principal e seus registros filhos, facilitando a exibiÃ§Ã£o dessas informaÃ§Ãµes em componentes Lightning no Salesforce.

Classe: DW_CancelEnvDocusignBatch

DescriÃ§Ã£o
A classe `DW_CancelEnvDocusignBatch` Ã© responsÃ¡vel por cancelar envelopes de assinatura eletrÃ´nica enviados via DocuSign no Salesforce. Ela pode ser acionada manualmente por um processo como um Flow ou agendada para execuÃ§Ã£o automÃ¡tica. A classe percorre registros de envelopes com status "Enviado", realiza chamadas Ã  API do DocuSign para cancelar esses envelopes e atualiza o status deles para "Cancelado" no Salesforce. Utiliza o processamento em lote (Batch Apex) para lidar com grandes volumes de dados e permite chamadas externas (callouts) para integraÃ§Ã£o com o DocuSign.

MÃ©todos
`execute(SchedulableContext param1)`
- Permite agendar a execuÃ§Ã£o da classe como uma tarefa automÃ¡tica.
- Quando chamado, inicia o processamento em lote com parÃ¢metros nulos, utilizado para execuÃ§Ã£o geral ou agendada.

`start(Database.BatchableContext param1)`
- Seleciona os registros de envelopes que estÃ£o com o status "Enviado" para serem processados.
- Retorna uma lista de envelopes do objeto personalizado `DWEnvelopeDocusign__c`.

`execute(Database.BatchableContext param1, List<DWEnvelopeDocusign__c> envelopeList)`
- Processo principal que realiza o cancelamento de cada envelope na lista.
- Para cada envelope:
  - Cria o corpo da requisiÃ§Ã£o de cancelamento.
  - ObtÃ©m o token de acesso do DocuSign.
  - Envia a requisiÃ§Ã£o de cancelamento via API.
  - Atualiza o status do envelope no Salesforce para "Cancelado" se a API retornar sucesso.

`finish(Database.BatchableContext param1)`
- MÃ©todo chamado ao final do processamento em lote.
- Atualmente, nÃ£o realiza aÃ§Ãµes adicionais, mas pode ser usado para notificaÃ§Ãµes ou auditoria.

`cancelEnvDocusing(List<CancelEnvelopeRequest> requests)`
- MÃ©todo invocÃ¡vel por Flow para iniciar o cancelamento.
- Verifica se os parÃ¢metros obrigatÃ³rios estÃ£o preenchidos.
- Inicia o processamento em lote com os envelopes e motivo fornecidos.

VariÃ¡veis
`envelopeIds`
- Tipo: `List<String>`
- DescriÃ§Ã£o: Armazena os IDs dos envelopes que devem ser cancelados.

`motivoCancelamento`
- Tipo: `String`
- DescriÃ§Ã£o: Motivo pelo qual o envelope estÃ¡ sendo cancelado.

Classe Interna: CancelEnvelopeRequest
- VariÃ¡veis:
  - `envelopeIds`: Lista de IDs de envelopes a serem cancelados.
  - `motivo`: Motivo do cancelamento.
- DescriÃ§Ã£o: Classe utilizada para receber os parÃ¢metros de entrada de um Flow, facilitando a passagem de dados.

Resumo tÃ©cnico
A classe implementa um processo automatizado para cancelar envelopes de assinatura eletrÃ´nica no DocuSign, integrando-se ao Salesforce via API. Ela realiza autenticaÃ§Ã£o, envia requisiÃ§Ãµes de cancelamento e atualiza os registros locais, garantindo que o status dos envelopes reflita a aÃ§Ã£o de cancelamento. Pode ser acionada manualmente ou agendada, facilitando a gestÃ£o de envios de assinatura eletrÃ´nica.

Classe: DWCreateATMInvocable

DescriÃ§Ã£o
A classe `DWCreateATMInvocable` Ã© uma classe Apex pÃºblica que permite manipular membros de equipe de contas de forma assÃ­ncrona no Salesforce. Ela fornece mÃ©todos para criar ou excluir membros de equipe de uma conta, utilizando operaÃ§Ãµes futuras para processamento assÃ­ncrono.

MÃ©todos
`createAccountTeamMember(List<DWCreateATMInvocableInput> membrosEquipeConta)`
- PropÃ³sito: Manipular uma lista de membros de equipe de conta, criando ou deletando conforme a propriedade `isDelete`.
- Como funciona: Para cada membro na lista, verifica se a operaÃ§Ã£o deve ser uma exclusÃ£o (`isDelete == true`) ou uma inserÃ§Ã£o. Dependendo disso, chama o mÃ©todo correspondente (`deleteAccountTeamMember` ou `insertAccountTeamMember`) enviando os dados serializados em JSON.
- ParÃ¢metro: `membrosEquipeConta` (Lista de `DWCreateATMInvocableInput`): lista de objetos contendo informaÃ§Ãµes dos membros de equipe.
- Retorno: Nenhum.

`insertAccountTeamMember(String membroEquipeContaInput)`
- PropÃ³sito: Inserir um novo membro de equipe na conta de forma assÃ­ncrona.
- Como funciona: Desserializa a string JSON recebida em um objeto `DWCreateATMInvocableInput` e cria um novo registro `AccountTeamMember` com os detalhes fornecidos, incluindo nÃ­veis de acesso padrÃ£o.
- ParÃ¢metro: `membroEquipeContaInput` (String): dados do membro serializados em JSON.
- Retorno: Nenhum.

`deleteAccountTeamMember(String membroEquipeContaInput)`
- PropÃ³sito: Excluir um membro de equipe de uma conta de forma assÃ­ncrona.
- Como funciona: Desserializa a string JSON em um objeto `DWCreateATMInvocableInput`, busca registros `AccountTeamMember` associados ao `UserId` fornecido e os deleta se encontrados.
- ParÃ¢metro: `membroEquipeContaInput` (String): dados do membro serializados em JSON.
- Retorno: Nenhum.

VariÃ¡veis
`DWCreateATMInvocableInput`
- Tipo: Classe interna
- DescriÃ§Ã£o: Representa os dados necessÃ¡rios para manipular membros de equipe de contas. Inclui informaÃ§Ãµes como ID da conta, ID do usuÃ¡rio, papel e se deve ser deletado.
- VariÃ¡veis:
  - `accountId` (Id): Identificador da conta.
  - `userId` (Id): Identificador do usuÃ¡rio.
  - `role` (String): Papel do membro na equipe da conta.
  - `isDelete` (Boolean): Indica se a operaÃ§Ã£o deve ser uma exclusÃ£o (`true`) ou uma criaÃ§Ã£o (`false`).
- MÃ©todos:
  - Construtor padrÃ£o: Permite criar uma instÃ¢ncia vazia.
  - Construtor parametrizado: Permite criar uma instÃ¢ncia com `accountId`, `userId` e `role`.

Classe: DwCustomListViewController

DescriÃ§Ã£o
A classe `DwCustomListViewController` Ã© responsÃ¡vel por buscar e estruturar listas personalizadas relacionadas a um registro especÃ­fico no Salesforce. Ela fornece uma funcionalidade para recuperar registros relacionados (como tarefas, histÃ³ricos, oportunidades, etc.) de forma dinÃ¢mica, para serem exibidos em componentes Lightning, como LWC ou Aura.

MÃ©todos
`getRecordsByObject(Id recordId, String title)`
- FunÃ§Ã£o principal que retorna uma lista personalizada de registros relacionados a um registro pai.
- ParÃ¢metros:
  - `recordId` (Id): identificador do registro pai (exemplo: uma Conta ou Oportunidade).
  - `title` (String): tÃ­tulo da lista personalizada que serÃ¡ exibida.
- Retorno:
  - Um objeto `DwCustomListViewDTO` contendo os dados estruturados dos registros relacionados.
  - Retorna `null` se o `recordId` estiver vazio.
- Funcionalidade:
  - Verifica se o `recordId` Ã© vÃ¡lido.
  - Utiliza uma fÃ¡brica (`DwCustomListViewFactory`) para criar a lista de registros relacionados.
  - Converte essa lista em um DTO para facilitar o envio ao front-end.

`parseToCustomListViewDTO(DwCustomListView customListView)`
- FunÃ§Ã£o auxiliar que converte um objeto `DwCustomListView` em um `DwCustomListViewDTO`.
- ParÃ¢metros:
  - `customListView`: objeto que contÃ©m os registros relacionados e metadados.
- Retorno:
  - Um `DwCustomListViewDTO` preenchido com os dados do objeto original, pronto para ser enviado ao front-end.
- Funcionalidade:
  - Copia os atributos principais do objeto original para o DTO.
  - Itera sobre os registros relacionados e adiciona suas informaÃ§Ãµes ao DTO.

VariÃ¡veis
`recordId`
- Tipo: `Id`
- DescriÃ§Ã£o: Identificador do registro pai (exemplo: uma Conta ou Oportunidade) do qual serÃ£o buscados registros relacionados.

`title`
- Tipo: `String`
- DescriÃ§Ã£o: TÃ­tulo da lista personalizada que serÃ¡ exibida na interface, como "HistÃ³rico de Tarefas".

`listViewDTO`
- Tipo: `DwCustomListViewDTO`
- DescriÃ§Ã£o: Objeto que armazena a estrutura de dados dos registros relacionados, preparado para ser enviado ao front-end.

`factory`
- Tipo: `DwCustomListViewFactory`
- DescriÃ§Ã£o: FÃ¡brica responsÃ¡vel por criar a lista de registros relacionados com base no `recordId` e `title`.

`customListViews`
- Tipo: `List<DwCustomListView>`
- DescriÃ§Ã£o: Lista de objetos `DwCustomListView` retornados pela fÃ¡brica, contendo os registros relacionados e seus metadados.

`relatedRecordData`
- Tipo: `DwCustomListViewDTO.RelatedRecordData`
- DescriÃ§Ã£o: Objeto que representa os dados de um registro relacionado individual, incluindo informaÃ§Ãµes como ID, nome, data de criaÃ§Ã£o, status, entre outros.

Classe: DW_ResponseHTTP

DescriÃ§Ã£o
A classe `DW_ResponseHTTP` Ã© uma estrutura utilizada para padronizar as respostas de operaÃ§Ãµes, indicando sucesso ou erro, alÃ©m de fornecer detalhes adicionais como mensagens de erro e dados relacionados. Essa classe Ã© Ãºtil para criar respostas consistentes em APIs ou integraÃ§Ãµes, facilitando o tratamento de resultados.

MÃ©todos
`success(Object dataMap)`
- Gera uma resposta de sucesso contendo os dados fornecidos.
- ParÃ¢metro: `dataMap` (Object): os dados que serÃ£o enviados na resposta.
- Retorno: String (JSON serializado) representando a resposta de sucesso.

`successObj(Object dataMap)`
- Cria um objeto de resposta de sucesso com os dados fornecidos.
- ParÃ¢metro: `dataMap` (Object): os dados que serÃ£o incluÃ­dos na resposta.
- Retorno: DW_ResponseHTTP: objeto de resposta de sucesso.

`error(List<String> errorList)`
- Gera uma resposta de erro com uma lista de mensagens de erro.
- ParÃ¢metro: `errorList` (List<String>): lista de mensagens de erro.
- Retorno: String (JSON serializado) representando a resposta de erro.

`errorObj(List<String> errorList)`
- Cria um objeto de resposta de erro com uma lista de mensagens de erro.
- ParÃ¢metro: `errorList` (List<String>): lista de mensagens de erro.
- Retorno: DW_ResponseHTTP: objeto de resposta de erro.

`error(List<String> errorList, Object dataMap)`
- Gera uma resposta de erro incluindo uma lista de mensagens e dados adicionais.
- ParÃ¢metros:
  - `errorList` (List<String>): mensagens de erro.
  - `dataMap` (Object): dados adicionais relacionados ao erro.
- Retorno: String (JSON serializado) representando a resposta de erro com dados.

`errorObj(List<String> errorList, Object dataMap)`
- Cria um objeto de resposta de erro incluindo mensagens de erro e dados adicionais.
- ParÃ¢metros:
  - `errorList` (List<String>): mensagens de erro.
  - `dataMap` (Object): dados adicionais.
- Retorno: DW_ResponseHTTP: objeto de resposta de erro com dados.

`generateByException(Exception e)`
- Gera uma resposta de erro a partir de uma exceÃ§Ã£o capturada.
- ParÃ¢metro: `e` (Exception): a exceÃ§Ã£o que ocorreu.
- Retorno: String (JSON serializado) contendo detalhes da exceÃ§Ã£o, como mensagem, nÃºmero da linha e stack trace.

VariÃ¡veis
`success`
- Tipo: `Boolean`
- DescriÃ§Ã£o: Indica se a operaÃ§Ã£o foi bem-sucedida (`true`) ou nÃ£o (`false`).

`error`
- Tipo: `Boolean`
- DescriÃ§Ã£o: Indica se houve erro na operaÃ§Ã£o (`true`) ou nÃ£o (`false`).

`errorList`
- Tipo: `List<String>`
- DescriÃ§Ã£o: Lista de mensagens de erro relacionadas Ã  operaÃ§Ã£o.

`dataMap`
- Tipo: `Object`
- DescriÃ§Ã£o: Armazena os dados retornados na resposta, podendo ser qualquer tipo de objeto ou mapa de informaÃ§Ãµes.

Classe: DW_AvailabilityQueueByTime_Response

DescriÃ§Ã£o
A classe `DW_AvailabilityQueueByTime_Response` Ã© uma estrutura de dados que gerencia informaÃ§Ãµes relacionadas a uma fila de disponibilidade de usuÃ¡rios, incluindo usuÃ¡rios na fila, usuÃ¡rios ocupados, quantidade de eventos por usuÃ¡rio e a identificaÃ§Ã£o da fila. Ela fornece mÃ©todos para inicializar, modificar e consultar esses dados, alÃ©m de determinar um usuÃ¡rio disponÃ­vel com base em critÃ©rios especÃ­ficos.

MÃ©todos
`init()`
- Cria e retorna uma nova instÃ¢ncia da classe `DW_AvailabilityQueueByTime_Response`.
- Retorno: uma nova instÃ¢ncia da classe.

`setQueueId(Id id)`
- Define o identificador da fila.
- ParÃ¢metro: `id` (Id): o identificador da fila.
- Retorno: a prÃ³pria instÃ¢ncia da classe (para permitir encadeamento de mÃ©todos).

`setQueueUsersIdItem(Id id)`
- Adiciona um usuÃ¡rio Ã  lista de usuÃ¡rios na fila.
- ParÃ¢metro: `id` (Id): o identificador do usuÃ¡rio.
- Retorno: a prÃ³pria instÃ¢ncia da classe.

`setQueueBusyUsersId(Id id)`
- Adiciona um usuÃ¡rio Ã  lista de usuÃ¡rios ocupados.
- ParÃ¢metro: `id` (Id): o identificador do usuÃ¡rio ocupado.
- Retorno: a prÃ³pria instÃ¢ncia da classe.

`setQuantityEventByUser(Id id, Integer quantity)`
- Registra a quantidade de eventos associados a um usuÃ¡rio.
- ParÃ¢metros: `id` (Id): o identificador do usuÃ¡rio; `quantity` (Integer): a quantidade de eventos.
- Comporta-se de modo a incrementar a quantidade existente se o usuÃ¡rio jÃ¡ tiver eventos registrados, ou criar uma nova entrada se nÃ£o houver.
- Retorno: a prÃ³pria instÃ¢ncia da classe.

`getQueueUsersIds()`
- Retorna o conjunto de usuÃ¡rios na fila.
- Retorno: `Set<Id>` contendo os IDs dos usuÃ¡rios na fila.

`getQueueBusyUsersIds()`
- Retorna o conjunto de usuÃ¡rios ocupados.
- Retorno: `Set<Id>` contendo os IDs dos usuÃ¡rios ocupados.

`getQuantityEventByUser(Id id)`
- Retorna a quantidade de eventos associados a um usuÃ¡rio especÃ­fico.
- ParÃ¢metro: `id` (Id): o identificador do usuÃ¡rio.
- Retorno: `Integer` representando a quantidade de eventos.

`getAvailableUser()`
- Determina e retorna o usuÃ¡rio disponÃ­vel na fila que possui a menor quantidade de oportunidades (Opportunity) associadas, considerando apenas usuÃ¡rios que nÃ£o estÃ£o ocupados.
- Processo:
  - Cria uma lista de usuÃ¡rios disponÃ­veis (nÃ£o ocupados).
  - Executa uma consulta SOQL para contar oportunidades associadas a cada usuÃ¡rio disponÃ­vel, excluindo oportunidades fechadas ou perdidas.
  - Ordena os resultados pela quantidade de oportunidades em ordem crescente.
  - Retorna o usuÃ¡rio com a menor quantidade de oportunidades; se nÃ£o houver resultados, retorna o primeiro usuÃ¡rio disponÃ­vel.
- Retorno: `Id` do usuÃ¡rio disponÃ­vel.

Classe: CommunitiesSelfRegController

DescriÃ§Ã£o
A classe `CommunitiesSelfRegController` Ã© um controlador Apex utilizado para gerenciar o processo de auto registro de usuÃ¡rios em comunidades do Salesforce que permitem esse tipo de cadastro. Ela coleta informaÃ§Ãµes do usuÃ¡rio, valida as entradas, cria o usuÃ¡rio na plataforma e realiza o login ou redireciona para uma pÃ¡gina de confirmaÃ§Ã£o.

MÃ©todos
`CommunitiesSelfRegController()`
- Construtor da classe.
- ResponsÃ¡vel por obter o parÃ¢metro `expid` da URL da pÃ¡gina atual e definir a experiÃªncia do site com esse ID, se disponÃ­vel.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.

`isValidPassword()`
- Verifica se a senha e a confirmaÃ§Ã£o de senha fornecidas pelo usuÃ¡rio sÃ£o iguais.
- ParÃ¢metros: Nenhum.
- Retorno: `Boolean` â€” `true` se as senhas coincidirem, `false` caso contrÃ¡rio.

`registerUser()`
- Executa o processo de registro do usuÃ¡rio na comunidade.
- Valida se as senhas coincidem; se nÃ£o, exibe uma mensagem de erro.
- Cria um objeto `User` com os dados fornecidos (nome, sobrenome, email, nickname).
- Tenta criar o usuÃ¡rio na plataforma usando o mÃ©todo `Site.createExternalUser`.
- Se a criaÃ§Ã£o for bem-sucedida, realiza o login do usuÃ¡rio ou redireciona para uma pÃ¡gina de confirmaÃ§Ã£o.
- ParÃ¢metros: Nenhum.
- Retorno: `PageReference` â€” referÃªncia para a pÃ¡gina de destino apÃ³s o registro ou `null` em caso de erro.

VariÃ¡veis
`firstName`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o primeiro nome do usuÃ¡rio que estÃ¡ se registrando.

`lastName`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o sobrenome do usuÃ¡rio.

`email`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o endereÃ§o de email do usuÃ¡rio, utilizado como nome de usuÃ¡rio na plataforma.

`password`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena a senha escolhida pelo usuÃ¡rio para acesso Ã  comunidade.

`confirmPassword`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena a confirmaÃ§Ã£o da senha, para garantir que o usuÃ¡rio digitou corretamente.

`communityNickname`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o apelido do usuÃ¡rio na comunidade, opcional.

`expId`
- Tipo: `String` (obtido dinamicamente)
- DescriÃ§Ã£o: ID da experiÃªncia do site, obtido via parÃ¢metro na URL, usado para configurar o contexto da experiÃªncia.

`profileId`
- Tipo: `String`
- DescriÃ§Ã£o: ID do perfil do usuÃ¡rio, a ser definido pelo cliente.

`roleEnum`
- Tipo: `String`
- DescriÃ§Ã£o: Role do usuÃ¡rio na comunidade, a ser definida pelo cliente.

`accountId`
- Tipo: `String`
- DescriÃ§Ã£o: ID da conta associada ao usuÃ¡rio, a ser fornecida pelo cliente.

`userName`
- Tipo: `String`
- DescriÃ§Ã£o: Nome de usuÃ¡rio, definido como o email fornecido pelo usuÃ¡rio.

Classe: DW_CustomLookupController

DescriÃ§Ã£o
A classe `DW_CustomLookupController` Ã© uma classe Apex pÃºblica que nÃ£o compartilha regras especÃ­ficas de seguranÃ§a (without sharing). Ela Ã© responsÃ¡vel por fornecer uma funcionalidade de busca personalizada, permitindo consultar registros de objetos Salesforce com filtros dinÃ¢micos, incluindo buscas por campos especÃ­ficos, relacionamentos e operadores diversos.

MÃ©todos
`getRecords(String data)`
- MÃ©todo acessÃ­vel via Lightning (AuraEnabled) com cache de resultados.
- Recebe uma string JSON que contÃ©m os parÃ¢metros da busca.
- Deserializa o JSON para um mapa, constrÃ³i uma requisiÃ§Ã£o (`RequestDTO`) e gera uma consulta SOQL dinÃ¢mica.
- Executa a consulta e retorna uma lista de registros (`List<SObject>`), limitando a 15 registros.

`getQueryBase(RequestDTO requestData)`
- ConstrÃ³i a consulta SOQL base usando os dados da requisiÃ§Ã£o.
- Substitui marcadores de posiÃ§Ã£o por nomes de objetos e campos.
- Adiciona filtros de busca, relacionamentos e limites.
- Retorna a string da consulta SOQL completa.

`getQueryFieldsSet(RequestDTO requestData)`
- Retorna um conjunto de nomes de campos que serÃ£o utilizados na consulta.
- Inclui os campos de busca e outros campos adicionais, se fornecidos.

`parseSearchFields(List<Object> searchFields)`
- Gera a parte do filtro de busca que verifica se os campos contÃªm o valor de busca.
- Cria uma expressÃ£o OR entre os campos, cada um com uma clÃ¡usula LIKE.

`parseRelationFields(List<RelationDTO> relations)`
- ConstrÃ³i filtros adicionais baseados em relacionamentos entre registros.
- Trata operadores como IN, NOT IN, LIKE, e outros, ajustando o valor do relacionamento conforme o tipo.

`checkDateTimeAndDate(String stringToCheck)`
- Verifica se uma string corresponde ao formato de data ou datetime.
- Usa expressÃµes regulares para identificar os formatos.

`convertObjectListToStringList(List<Object> objectList)`
- Converte uma lista de objetos para uma lista de strings, ignorando valores nulos.

VariÃ¡veis
`RequestDTO`
- Classe interna que representa os dados de uma requisiÃ§Ã£o de busca.
- VariÃ¡veis:
  - `targetObject` (String): nome do objeto Salesforce a ser consultado.
  - `searchValue` (String): valor de busca fornecido pelo usuÃ¡rio.
  - `searchFields` (List<Object>): lista de campos nos quais serÃ¡ feita a busca.
  - `moreFields` (List<Object>): lista adicional de campos a serem retornados.
  - `relations` (List<RelationDTO>): lista de relacionamentos e filtros adicionais.

`RelationDTO`
- Classe interna que representa uma relaÃ§Ã£o ou filtro adicional.
- VariÃ¡veis:
  - `parentRelationField` (String): nome do campo de relaÃ§Ã£o.
  - `parentRecord` (Object): valor do registro pai para o filtro.
  - `parentRecordList` (List<String>): lista de registros para operadores IN ou NOT IN.
  - `operator` (String): operador de comparaÃ§Ã£o (ex: IN, LIKE).

DescriÃ§Ã£o TÃ©cnica e Leiga
A classe `DW_CustomLookupController` permite realizar buscas avanÃ§adas em registros do Salesforce de forma dinÃ¢mica. Ela aceita uma estrutura JSON com detalhes do que procurar, onde procurar e como procurar, incluindo filtros por relacionamento entre registros. A consulta Ã© construÃ­da de forma flexÃ­vel, permitindo combinaÃ§Ãµes complexas de filtros, e retorna atÃ© 15 registros que atendem aos critÃ©rios. Essa abordagem Ã© Ãºtil para criar buscas personalizadas em interfaces de usuÃ¡rio, onde o usuÃ¡rio pode definir critÃ©rios de pesquisa variados.

Classe: UtilValidacao

DescriÃ§Ã£o
A classe `UtilValidacao` fornece mÃ©todos utilitÃ¡rios para validaÃ§Ã£o e formataÃ§Ã£o de documentos e informaÃ§Ãµes pessoais, como CPF, CNPJ, RG e nome. Ela Ã© utilizada para garantir que esses dados estejam no formato correto antes de serem armazenados ou processados no Salesforce.

MÃ©todos
`formatCPF(sObject pSObjectToFormat, String pValueFieldToFormat, String pFieldToFormat)`
- Formata um nÃºmero de CPF, validando sua estrutura e conteÃºdo.
- ParÃ¢metros:
  - `pSObjectToFormat`: o objeto Salesforce onde o CPF serÃ¡ armazenado.
  - `pValueFieldToFormat`: o valor do CPF a ser formatado.
  - `pFieldToFormat`: o campo do objeto onde o CPF formatado serÃ¡ salvo.
- Retorna: Nenhum. Pode lanÃ§ar uma exceÃ§Ã£o se o CPF estiver invÃ¡lido.

`formatCNPJ(sObject pSObjectToFormat, String pValueFieldToFormat, String pFieldToFormat)`
- Formata um nÃºmero de CNPJ, validando sua estrutura e conteÃºdo.
- ParÃ¢metros:
  - `pSObjectToFormat`: o objeto Salesforce onde o CNPJ serÃ¡ armazenado.
  - `pValueFieldToFormat`: o valor do CNPJ a ser formatado.
  - `pFieldToFormat`: o campo do objeto onde o CNPJ formatado serÃ¡ salvo.
- Retorna: Nenhum. Pode lanÃ§ar uma exceÃ§Ã£o se o CNPJ estiver invÃ¡lido.

`validationRG(sObject pSObjectToFormat, String pValueFieldToFormat, String pFieldToFormat)`
- Valida e formata um nÃºmero de RG, verificando seu comprimento e formato.
- ParÃ¢metros:
  - `pSObjectToFormat`: o objeto Salesforce onde o RG serÃ¡ armazenado.
  - `pValueFieldToFormat`: o valor do RG a ser validado e formatado.
  - `pFieldToFormat`: o campo do objeto onde o RG formatado serÃ¡ salvo.
- Retorna: Nenhum. Pode lanÃ§ar uma exceÃ§Ã£o se o RG estiver invÃ¡lido.

`validationNome(sObject pSObjectToFormat, String pValueFieldToFormat, String pFieldToFormat)`
- Valida um nome, garantindo que nÃ£o contenha nÃºmeros ou caracteres especiais.
- ParÃ¢metros:
  - `pSObjectToFormat`: o objeto Salesforce onde o nome serÃ¡ armazenado.
  - `pValueFieldToFormat`: o nome a ser validado.
  - `pFieldToFormat`: o campo do objeto onde o nome validado serÃ¡ salvo.
- Retorna: Nenhum. Pode lanÃ§ar uma exceÃ§Ã£o se o nome for invÃ¡lido.

VariÃ¡veis
`FormatException`
- Tipo: `Exception` (classe interna)
- DescriÃ§Ã£o: ExceÃ§Ã£o personalizada usada para indicar erros de formataÃ§Ã£o nos mÃ©todos de validaÃ§Ã£o.

Resumo tÃ©cnico e leigo
- A classe `UtilValidacao` ajuda a garantir que documentos como CPF, CNPJ, RG e nomes estejam no formato correto antes de serem usados no sistema.
- Ela realiza validaÃ§Ãµes rigorosas, como verificar se os nÃºmeros tÃªm o comprimento adequado, se contÃªm apenas caracteres permitidos, e se nÃ£o sÃ£o nÃºmeros repetidos.
- Caso algum dado esteja incorreto, ela lanÃ§a uma mensagem de erro clara, ajudando a evitar problemas futuros com dados invÃ¡lidos.

Classe: DW_CustomLookupLWCController

DescriÃ§Ã£o
A classe `DW_CustomLookupLWCController` Ã© uma classe Apex que fornece uma funcionalidade de busca personalizada para um componente Lightning Web Component (LWC) de *lookup*. Ela busca registros de usuÃ¡rios (`User`) e filas (`Group`) associados a uma loja especÃ­fica, permitindo que o usuÃ¡rio selecione responsÃ¡veis de forma dinÃ¢mica e filtrada.

MÃ©todos
`fetchLookupData(String searchKey, String sObjectApiName, String fields, String whereCondition, String storeId)`
- Objetivo: Realiza uma busca por registros de usuÃ¡rios e filas relacionados a uma loja, com base em um texto de busca fornecido.
- ParÃ¢metros:
  - `searchKey` (String): Texto digitado pelo usuÃ¡rio para buscar nomes de usuÃ¡rios ou filas.
  - `sObjectApiName` (String): Nome do objeto, nÃ£o utilizado diretamente na implementaÃ§Ã£o atual, mas disponÃ­vel para possÃ­veis expansÃµes.
  - `fields` (String): Campos desejados no retorno, atualmente fixo em `'Id, Name'`.
  - `whereCondition` (String): CondiÃ§Ã£o adicional para filtragem, nÃ£o utilizada na implementaÃ§Ã£o atual.
  - `storeId` (String): ID da loja (conta) usada para filtrar os registros relacionados.
- Retorno: Uma lista de objetos `SObject` contendo registros de `User` e `Group` que atendem aos critÃ©rios de busca e filtragem.

VariÃ¡veis
`returnList`
- Tipo: `List<SObject>`
- DescriÃ§Ã£o: Lista que armazena os registros de usuÃ¡rios e filas que serÃ£o retornados ao componente LWC apÃ³s a busca.

`store`
- Tipo: `Account`
- DescriÃ§Ã£o: Objeto que representa a loja (conta) obtida pelo `storeId`, utilizado para obter o cÃ³digo da loja (`DWCodigoLoja__c`) para filtragem.

`sWildCardText`
- Tipo: `String`
- DescriÃ§Ã£o: Texto de busca com caracteres curinga (`%`) adicionados ao inÃ­cio e ao fim do `searchKey`, permitindo buscas parciais no banco de dados.

`sQuery`
- Tipo: `String`
- DescriÃ§Ã£o: String que contÃ©m a consulta SOQL para buscar usuÃ¡rios cujo nome seja semelhante ao `searchKey`, filtrando tambÃ©m pelo cÃ³digo da loja, se disponÃ­vel.

`queueName`
- Tipo: `String`
- DescriÃ§Ã£o: PadrÃ£o de nome para filas (Queues), baseado no cÃ³digo da loja, usado para buscar filas especÃ­ficas relacionadas Ã  loja.

`accList`
- Tipo: `List<User>`
- DescriÃ§Ã£o: Lista de usuÃ¡rios retornada pela consulta SOQL, contendo atÃ© 5 registros mais recentes que atendem ao critÃ©rio de busca.

`groupList`
- Tipo: `List<Group>`
- DescriÃ§Ã£o: Lista de filas (Queues) cujo nome segue o padrÃ£o definido por `queueName`, limitando a 5 registros mais recentes.

Resumo tÃ©cnico
A classe realiza uma busca filtrada por nome de usuÃ¡rios e filas associados a uma loja especÃ­fica, usando o cÃ³digo da loja como filtro adicional. Ela combina os resultados de ambos os tipos de registros em uma lista mista, que Ã© retornada ao componente LWC para exibiÃ§Ã£o ou seleÃ§Ã£o. A busca Ã© otimizada para retornar atÃ© 5 registros de cada tipo, ordenados pela data de criaÃ§Ã£o mais recente.

Classe: DW_DocusignSendSignController

DescriÃ§Ã£o
A classe `DW_DocusignSendSignController` Ã© responsÃ¡vel por montar e enviar documentos para assinatura eletrÃ´nica via DocuSign. Ela gerencia a preparaÃ§Ã£o do documento, a configuraÃ§Ã£o dos signatÃ¡rios, a comunicaÃ§Ã£o com a API do DocuSign e o armazenamento do status do envelope de assinatura.

MÃ©todos
`sendToSign(String recordId, Map<String, Signer> signers, String typeOfDocument, String idDoc)`
- MÃ©todo principal exposto para componentes Lightning (LWC/Aura) que envia um documento para assinatura.
- ParÃ¢metros:
  - `recordId` (String): identificador do registro relacionado ao documento.
  - `signers` (Map<String, Signer>): lista de signatÃ¡rios com seus papÃ©is e informaÃ§Ãµes.
  - `typeOfDocument` (String): tipo do documento a ser enviado.
  - `idDoc` (String): identificador do documento (pode ser ContentVersion ou outro).
- Retorno: uma String que indica sucesso ou erro na operaÃ§Ã£o, incluindo detalhes do documento enviado.

`configurarGuiasPorTipoDocumento(DW_DocusignSendSignTemplate.Assinador assinador, String tipoDocumento, String papel)`
- MÃ©todo privado que configura as Ã¢ncoras de assinatura (guias) no documento, dependendo do tipo de documento e papel do signatÃ¡rio.
- ParÃ¢metros:
  - `assinador` (Assinador): objeto que representa o signatÃ¡rio.
  - `tipoDocumento` (String): tipo do documento.
  - `papel` (String): papel do signatÃ¡rio.
- Retorno: nenhum (altera o objeto `assinador`).

`getAncor(String papel)`
- MÃ©todo pÃºblico que mapeia o nome do papel do signatÃ¡rio para a Ã¢ncora correspondente no documento.
- ParÃ¢metro:
  - `papel` (String): papel do signatÃ¡rio.
- Retorno: String com o nome da Ã¢ncora ou null se nÃ£o encontrado.

`extractErrorMessage(String errorResponse)`
- MÃ©todo pÃºblico que extrai a mensagem de erro de uma resposta JSON de erro do DocuSign.
- ParÃ¢metro:
  - `errorResponse` (String): corpo da resposta de erro.
- Retorno: String contendo a mensagem de erro extraÃ­da.

VariÃ¡veis
`Signer`
- Classe interna que representa um signatÃ¡rio do documento.
- VariÃ¡veis:
  - `name` (String): nome do signatÃ¡rio.
  - `email` (String): email do signatÃ¡rio.
  - `role` (String): papel do signatÃ¡rio no documento.
  - `id` (String): identificador do signatÃ¡rio.
- DescriÃ§Ã£o: Utilizada para passar informaÃ§Ãµes dos signatÃ¡rios ao mÃ©todo principal, facilitando a configuraÃ§Ã£o de cada um na assinatura eletrÃ´nica.

Resumo tÃ©cnico e leigo
- A classe gerencia o envio de documentos para assinatura digital usando o DocuSign.
- Ela prepara o documento, define quem assina e onde, e envia tudo para o serviÃ§o do DocuSign.
- Depois, ela armazena informaÃ§Ãµes sobre o envelope de assinatura e os signatÃ¡rios no Salesforce.
- Possui mÃ©todos para configurar as posiÃ§Ãµes de assinatura no documento, mapear papÃ©is para Ã¢ncoras e interpretar mensagens de erro do serviÃ§o externo.

Classe: DW_InteractionHistoryDTO

DescriÃ§Ã£o
A classe `DW_InteractionHistoryDTO` Ã© um Data Transfer Object (DTO) utilizado para transportar e organizar informaÃ§Ãµes do histÃ³rico de interaÃ§Ãµes relacionadas a Leads ou Oportunidades no Salesforce. Essa estrutura facilita a exibiÃ§Ã£o de um resumo organizado dessas interaÃ§Ãµes em componentes de front-end, como Lightning Web Components (LWC). Ela armazena detalhes do registro principal, seu tipo, tÃ­tulo e uma lista de registros relacionados, incluindo informaÃ§Ãµes detalhadas de cada interaÃ§Ã£o.

MÃ©todos
`DW_InteractionHistoryDTO()`
- Construtor padrÃ£o da classe.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.

`compareTo(Object obj)`
- MÃ©todo que permite ordenar registros relacionados com base na data de criaÃ§Ã£o, do mais recente para o mais antigo.
- ParÃ¢metro: `obj` (Object): outro objeto do tipo `RelatedRecordData` para comparaÃ§Ã£o.
- Retorno: `Integer`:
  - -1 se o registro atual for mais recente.
  - 1 se for mais antigo.
  - 0 se as datas forem iguais.

VariÃ¡veis
`recordId`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o ID do registro principal, que pode ser uma Lead ou uma Oportunidade.

`recordName`
- Tipo: `String`
- DescriÃ§Ã£o: Nome do registro principal (Lead ou Oportunidade).

`objectName`
- Tipo: `String`
- DescriÃ§Ã£o: Nome do objeto (tipo), indicando se Ã© Lead ou Oportunidade.

`title`
- Tipo: `String`
- DescriÃ§Ã£o: TÃ­tulo que serÃ¡ exibido no componente de histÃ³rico, geralmente um resumo ou cabeÃ§alho.

`relatedRecords`
- Tipo: `List<RelatedRecordData>`
- DescriÃ§Ã£o: Lista de registros relacionados ao registro principal, contendo detalhes de cada interaÃ§Ã£o ou vÃ­nculo.

Classe Interna: RelatedRecordData
- Representa os detalhes de cada registro relacionado, como leads vinculados a uma oportunidade ou outras oportunidades de um mesmo cliente. Essa classe implementa a interface `Comparable` para permitir ordenaÃ§Ã£o por data de criaÃ§Ã£o, do mais recente ao mais antigo.

VariÃ¡veis de `RelatedRecordData`
- `id`: ID do registro relacionado.
- `nome`: Nome do lead ou oportunidade.
- `tipo`: Tipo do objeto relacionado (Lead ou Opportunity).
- `cliente`: ID do cliente relacionado (Lead ou Conta).
- `nomeCliente`: Nome do cliente (Lead ou Conta).
- `status`: Status do registro (por exemplo, estÃ¡gio da oportunidade ou status do lead).
- `telefone`: Telefone fixo do cliente.
- `celular`: Telefone celular do cliente.
- `email`: EndereÃ§o de e-mail do cliente.
- `dataCriacao`: Data de criaÃ§Ã£o do registro em formato legÃ­vel (dd/MM/yyyy HH:mm).
- `createdDate`: Data de criaÃ§Ã£o real do registro, em formato DateTime.
- `documento`: Documento do cliente, como CPF ou CNPJ.
- `objRelacionado`: Nome do objeto relacionado para navegaÃ§Ã£o, como 'Lead' ou 'Account'.

MÃ©todo `compareTo`
- Permite ordenar objetos `RelatedRecordData` com base na data de criaÃ§Ã£o (`createdDate`), colocando os mais recentes primeiro. Isso Ã© Ãºtil para exibir as interaÃ§Ãµes mais recentes no topo da lista.

Classe: LightningSelfRegisterController

DescriÃ§Ã£o
A classe `LightningSelfRegisterController` Ã© uma classe global que gerencia o processo de auto-registro de usuÃ¡rios em uma comunidade Salesforce. Ela fornece mÃ©todos para validar senhas, criar usuÃ¡rios, obter campos adicionais e definir a experiÃªncia do usuÃ¡rio na comunidade.

MÃ©todos
`LightningSelfRegisterController()`
- Construtor padrÃ£o da classe.
- NÃ£o realiza nenhuma operaÃ§Ã£o especÃ­fica ao ser instanciado.

`isValidPassword(String password, String confirmPassword)`
- Verifica se a senha e a confirmaÃ§Ã£o de senha sÃ£o iguais.
- ParÃ¢metros:
  - `password` (String): senha fornecida pelo usuÃ¡rio.
  - `confirmPassword` (String): confirmaÃ§Ã£o da senha.
- Retorno: `Boolean` indicando se as senhas coincidem.

`siteAsContainerEnabled(String communityUrl)`
- Verifica se a comunidade estÃ¡ usando o site como container.
- ParÃ¢metros:
  - `communityUrl` (String): URL da comunidade.
- Retorno: `Boolean` indicando se o site estÃ¡ habilitado como container.

`validatePassword(User u, String password, String confirmPassword)`
- Valida a senha do usuÃ¡rio, verificando se ela atende aos critÃ©rios de seguranÃ§a.
- ParÃ¢metros:
  - `u` (User): objeto de usuÃ¡rio.
  - `password` (String): senha a ser validada.
  - `confirmPassword` (String): confirmaÃ§Ã£o da senha.
- Retorno: Nenhum (void). Executa uma validaÃ§Ã£o e lanÃ§a exceÃ§Ãµes se necessÃ¡rio.

`selfRegister(String firstname, String lastname, String email, String password, String confirmPassword, String accountId, String regConfirmUrl, String extraFields, String startUrl, Boolean includePassword)`
- Processo de auto-registro de um usuÃ¡rio na comunidade.
- ParÃ¢metros:
  - `firstname` (String): primeiro nome do usuÃ¡rio.
  - `lastname` (String): sobrenome do usuÃ¡rio.
  - `email` (String): email do usuÃ¡rio.
  - `password` (String): senha desejada.
  - `confirmPassword` (String): confirmaÃ§Ã£o da senha.
  - `accountId` (String): ID da conta associada.
  - `regConfirmUrl` (String): URL de confirmaÃ§Ã£o de registro.
  - `extraFields` (String): campos adicionais em formato JSON.
  - `startUrl` (String): URL de inÃ­cio apÃ³s login.
  - `includePassword` (Boolean): indica se a senha deve ser incluÃ­da.
- Retorno: `String` com mensagem de erro ou `null` em caso de sucesso.

`getExtraFields(String extraFieldsFieldSet)`
- ObtÃ©m os campos adicionais definidos em um Field Set.
- ParÃ¢metros:
  - `extraFieldsFieldSet` (String): nome do Field Set.
- Retorno: Lista de mapas contendo detalhes dos campos adicionais.

`setExperienceId(String expId)`
- Define a ID da experiÃªncia do usuÃ¡rio na comunidade.
- ParÃ¢metros:
  - `expId` (String): ID da experiÃªncia.
- Retorno: `String` com mensagem de erro ou `null` se bem-sucedido.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia Ã© definida explicitamente nesta classe. Os mÃ©todos utilizam variÃ¡veis locais e variÃ¡veis de classe estÃ¡ticas internas.

Classe: DW_DocusignSendSignTemplate

DescriÃ§Ã£o
A classe `DW_DocusignSendSignTemplate` Ã© uma estrutura de dados que representa um modelo para enviar documentos para assinatura via Docusign. Ela armazena informaÃ§Ãµes sobre o assunto do email, os documentos a serem assinados e os destinatÃ¡rios envolvidos no processo de assinatura.

MÃ©todos
Nenhum mÃ©todo estÃ¡ definido nesta classe. Ela funciona como um container de dados, com classes internas que representam diferentes componentes do processo de assinatura.

VariÃ¡veis
`assuntoEmail`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o assunto do email que serÃ¡ enviado aos destinatÃ¡rios, informando o propÃ³sito do envio.

`documentos`
- Tipo: `List<Documento>`
- DescriÃ§Ã£o: Lista de objetos do tipo `Documento`, representando os documentos que serÃ£o enviados para assinatura. Cada documento contÃ©m informaÃ§Ãµes como o conteÃºdo em base64, nome e extensÃ£o do arquivo.

`destinatarios`
- Tipo: `Destinatarios`
- DescriÃ§Ã£o: Objeto que contÃ©m as listas de assinadores e cÃ³pia de destinatÃ¡rios, indicando quem deve assinar e quem deve receber cÃ³pia do documento.

Classes internas

`Documento`
- VariÃ¡veis:
  - `documentoBase64`: `String` â€” ConteÃºdo do documento codificado em base64.
  - `nomeDocumento`: `String` â€” Nome do arquivo do documento.
  - `extensaoArquivo`: `String` â€” ExtensÃ£o do arquivo (por exemplo, pdf, docx).

`Destinatarios`
- VariÃ¡veis:
  - `assinadores`: `List<Assinador>` â€” Lista de assinadores que devem assinar o documento.
  - `copiaDestinatarios`: `List<CopiaDestinatario>` â€” Lista de destinatÃ¡rios que receberÃ£o cÃ³pia do documento, sem assinatura.

`Assinador`
- VariÃ¡veis:
  - `email`: `String` â€” EndereÃ§o de email do assinador.
  - `nome`: `String` â€” Nome completo do assinador.
  - `guias`: `Guias` â€” ConfiguraÃ§Ãµes de posiÃ§Ãµes para assinatura e data no documento.

`Guias`
- VariÃ¡veis:
  - `assineAqui`: `List<AssineAqui>` â€” Lista de posiÃ§Ãµes onde o assinador deve assinar.
  - `dataAssinatura`: `List<DataAssinatura>` â€” Lista de posiÃ§Ãµes onde a data de assinatura serÃ¡ inserida.

`AssineAqui`
- VariÃ¡veis:
  - `ancora`: `String` â€” PosiÃ§Ã£o de Ã¢ncora no documento onde a assinatura serÃ¡ colocada.
  - `tamanhoY`: `String` â€” Tamanho na direÃ§Ã£o Y para a assinatura.
  - `tamanhoX`: `String` â€” Tamanho na direÃ§Ã£o X para a assinatura.

`DataAssinatura`
- VariÃ¡veis:
  - `ancora`: `String` â€” PosiÃ§Ã£o de Ã¢ncora no documento para a data de assinatura.
  - `tamanhoY`: `String` â€” Tamanho na direÃ§Ã£o Y para a data.
  - `tamanhoX`: `String` â€” Tamanho na direÃ§Ã£o X para a data.
  - `value`: `String` â€” Valor ou conteÃºdo da data de assinatura.

`CopiaDestinatario`
- VariÃ¡veis:
  - `email`: `String` â€” EndereÃ§o de email do destinatÃ¡rio que receberÃ¡ cÃ³pia.
  - `nome`: `String` â€” Nome do destinatÃ¡rio que receberÃ¡ cÃ³pia.

Classe: DW_DocusignCreateDocumentBatch

DescriÃ§Ã£o
A classe `DW_DocusignCreateDocumentBatch` Ã© uma implementaÃ§Ã£o em Apex que automatiza a busca, recuperaÃ§Ã£o e armazenamento de documentos assinados via DocuSign no Salesforce. Ela busca envelopes concluÃ­dos, obtÃ©m seus documentos assinados em base64, converte esses documentos em arquivos PDF e os vincula aos registros do Salesforce, como Oportunidades ou Termos. AlÃ©m disso, ela oferece funcionalidades de agendamento e cancelamento de tarefas recorrentes.

MÃ©todos
`scheduleThisClass(String cron)`
- Agenda a execuÃ§Ã£o da classe com uma expressÃ£o CRON personalizada ou padrÃ£o (uma vez por hora).
- ParÃ¢metro: `cron` (String): expressÃ£o CRON que define o horÃ¡rio de execuÃ§Ã£o. Se nulo, usa uma expressÃ£o padrÃ£o para executar a cada hora.
- Retorno: Nenhum.

`execute(SchedulableContext param1)`
- MÃ©todo chamado pelo agendador para iniciar o processamento em lote.
- ParÃ¢metro: `param1` (SchedulableContext): contexto de execuÃ§Ã£o do agendador.
- Retorno: Nenhum.

`runEveryNMinutes(Integer each)`
- Agenda execuÃ§Ãµes periÃ³dicas a cada N minutos durante todo o dia.
- ParÃ¢metro: `each` (Integer): intervalo de minutos entre cada execuÃ§Ã£o.
- Retorno: Nenhum.

`runEveryNMinutesInBusinessHours(Integer each)`
- Agenda execuÃ§Ãµes a cada N minutos, mas somente durante o horÃ¡rio comercial (entre 9h e 19h).
- ParÃ¢metro: `each` (Integer): intervalo de minutos entre cada execuÃ§Ã£o.
- Retorno: Nenhum.

`cancelThisSchedule()`
- Cancela todas as tarefas agendadas relacionadas a esta classe.
- ParÃ¢metro: Nenhum.
- Retorno: Nenhum.

`start(Database.BatchableContext param1)`
- Define os registros que serÃ£o processados pelo batch: envelopes do DocuSign que estÃ£o concluÃ­dos, mas ainda sem o documento assinado salvo no Salesforce.
- ParÃ¢metro: `param1` (Database.BatchableContext): contexto do batch.
- Retorno: Uma coleÃ§Ã£o iterÃ¡vel de objetos `SObject` (envelopes).

`execute(Database.BatchableContext param1, List<DWEnvelopeDocusign__c> envelopeList)`
- Executa a lÃ³gica principal para cada lote de envelopes:
  - ObtÃ©m o token de autenticaÃ§Ã£o do DocuSign.
  - Busca o documento assinado em base64 via API.
  - Converte o base64 em um arquivo PDF e salva como `ContentVersion`.
  - Vincula o documento ao envelope, Termo ou Oportunidade.
  - Atualiza o envelope com o ID do documento assinado.
- ParÃ¢metros:
  - `param1` (Database.BatchableContext): contexto do batch.
  - `envelopeList` (List<DWEnvelopeDocusign__c>): lista de envelopes a processar.
- Retorno: Nenhum.

`finish(Database.BatchableContext param1)`
- MÃ©todo final do batch, pode ser usado para enviar logs ou relatÃ³rios.
- ParÃ¢metro: `param1` (Database.BatchableContext): contexto do batch.
- Retorno: Nenhum.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia foi explicitamente definida na classe, pois ela funciona principalmente com mÃ©todos estÃ¡ticos e de instÃ¢ncia para agendamento e processamento de lotes.

Classe: DW_GetRecordCallCaseBatch

DescriÃ§Ã£o
A classe `DW_GetRecordCallCaseBatch` Ã© responsÃ¡vel por integrar o Salesforce com o sistema de telefonia NextIP, buscando gravaÃ§Ãµes de chamadas telefÃ´nicas relacionadas a registros do tipo Case. Ela realiza essa operaÃ§Ã£o de forma automÃ¡tica, em lote (batch), podendo ser agendada para rodar em intervalos especÃ­ficos, como a cada 5 minutos. A classe gerencia sessÃµes com o sistema NextIP, realiza requisiÃ§Ãµes HTTP para obter as gravaÃ§Ãµes e atualiza os registros do Salesforce com os links das gravaÃ§Ãµes encontradas.

MÃ©todos
`execute(SchedulableContext param1)`
- Executa o batch de registros quando a classe Ã© chamada como uma tarefa agendada.
- ParÃ¢metro: `param1` (SchedulableContext): contexto da execuÃ§Ã£o agendada.
- Retorno: Nenhum.

`scheduleThisClass(String cron)`
- Agenda a execuÃ§Ã£o da classe com uma expressÃ£o CRON personalizada.
- ParÃ¢metro: `cron` (String): expressÃ£o CRON que define o horÃ¡rio de execuÃ§Ã£o.
- Retorno: Nenhum.

`runEveryNMinutes(Integer each)`
- Agenda a execuÃ§Ã£o periÃ³dica da classe a cada N minutos.
- ParÃ¢metro: `each` (Integer): nÃºmero de minutos entre cada execuÃ§Ã£o.
- Retorno: Nenhum.

`cancelThisSchedule()`
- Cancela todas as execuÃ§Ãµes agendadas da classe.
- ParÃ¢metro: Nenhum.
- Retorno: Nenhum.

`start(Database.BatchableContext param1)`
- Define quais registros de Case serÃ£o processados no batch.
- ParÃ¢metro: `param1` (Database.BatchableContext): contexto do batch.
- Retorno: Uma lista de registros do tipo Case que possuem um ID de ligaÃ§Ã£o (`NextIpId__c`) e ainda nÃ£o possuem o link da gravaÃ§Ã£o (`DWBaseURLGravacao__c`).

`execute(Database.BatchableContext info, List<Case> caseList)`
- Processa cada lote de registros de Case, realizando a requisiÃ§Ã£o Ã  API da NextIP para buscar a gravaÃ§Ã£o.
- ParÃ¢metros:
  - `info` (Database.BatchableContext): contexto do batch.
  - `caseList` (List<Case>): lista de registros de Case a serem processados.
- Retorno: Nenhum, mas atualiza o campo `DWBaseURLGravacao__c` do Case com o link da gravaÃ§Ã£o, se encontrado.

`finish(Database.BatchableContext info)`
- MÃ©todo final do batch, executado apÃ³s o processamento de todos os registros.
- ParÃ¢metro: `info` (Database.BatchableContext): contexto do batch.
- Retorno: Nenhum. Neste caso, nÃ£o realiza nenhuma aÃ§Ã£o adicional.

`getIPCredential()`
- Busca as credenciais de conexÃ£o com o sistema NextIP, com base na loja do usuÃ¡rio atual.
- ParÃ¢metro: Nenhum.
- Retorno: Registro de metadados `DWNextIPCTI__mdt` contendo as credenciais (URL, usuÃ¡rio, senha, URL de gravaÃ§Ã£o).

`callInitSessionAndLogin(User user, Boolean expirouSessao)`
- Inicia uma nova sessÃ£o com o sistema NextIP ou reutiliza uma sessÃ£o existente, dependendo do parÃ¢metro.
- ParÃ¢metros:
  - `user` (User): usuÃ¡rio responsÃ¡vel pela execuÃ§Ã£o.
  - `expirouSessao` (Boolean): indica se a sessÃ£o deve ser renovada.
- Retorno: Objeto `SessaoCTI__c` contendo o ID da sessÃ£o ativa.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia Ã© explicitamente definida na classe, pois ela funciona principalmente com mÃ©todos estÃ¡ticos e de instÃ¢ncia para controle de sessÃµes e requisiÃ§Ãµes HTTP.

Classe: DW_AccountService

DescriÃ§Ã£o
A classe `DW_AccountService` Ã© responsÃ¡vel por validar e formatar dados relacionados Ã  entidade Account no Salesforce. Ela garante que documentos (CPF/CNPJ), e-mails e telefones estejam no formato correto e atendam Ã s regras de negÃ³cio antes de serem salvos no sistema. Essa validaÃ§Ã£o Ã© utilizada na trigger `DW_AccountTrigger` para assegurar a integridade dos dados.

MÃ©todos
`DW_AccountService(List<Account> accountNewList, List<Account> accountOldList, Map<Id, Account> accountNewMap, Map<Id, Account> accountOldMap)`
- Construtor da classe que inicializa as listas e mapas de registros novos e antigos de Account, utilizados para validaÃ§Ãµes.
- ParÃ¢metros:
  - `accountNewList`: Lista de registros de Account que estÃ£o sendo criados ou atualizados.
  - `accountOldList`: Lista de registros de Account existentes antes da atualizaÃ§Ã£o.
  - `accountNewMap`: Mapa de registros novos, acessÃ­vel por Id.
  - `accountOldMap`: Mapa de registros antigos, acessÃ­vel por Id.

`checkDocumentFormat()`
- Valida e formata os documentos de CPF e CNPJ presentes nos campos `DWDocumento__c` e `DWDocumentoLoja__c`.
- Garante que os documentos estejam no formato correto e vÃ¡lidos, diferenciando CPF de CNPJ.

`validateEmailField()`
- Verifica se o e-mail informado no campo `Email__c` Ã© vÃ¡lido e nÃ£o estÃ¡ na lista negra.
- Bloqueia e-mails invÃ¡lidos ou que estejam na lista de e-mails proibidos.

`getBlockedEmails()`
- Consulta registros da custom object `BlackList_Email__c` para obter uma lista de e-mails bloqueados.
- Retorna um conjunto de e-mails que nÃ£o podem ser utilizados.

`validarEFormatarDocumento(Account account, Account accountOld, String campo, Pattern patternCPF, Pattern patternCNPJ)`
- Valida e formata o documento (CPF ou CNPJ) no campo especificado.
- Remove caracteres nÃ£o numÃ©ricos, valida o documento e aplica o formato padrÃ£o.
- Se o documento for invÃ¡lido, adiciona erro ao registro.

`isCPF(String CPF)`
- Verifica se um CPF Ã© vÃ¡lido usando o algoritmo de dÃ­gitos verificadores.
- Retorna `true` se o CPF for vÃ¡lido, `false` caso contrÃ¡rio.

`isCNPJ(String CNPJ)`
- Verifica se um CNPJ Ã© vÃ¡lido usando o cÃ¡lculo dos dÃ­gitos verificadores.
- Retorna `true` se o CNPJ for vÃ¡lido, `false` caso contrÃ¡rio.

`checkPhoneFormat()`
- Valida e formata os nÃºmeros de telefone fixo (`Phone`) e celular (`DWCelular__c`) no formato brasileiro.
- Remove o cÃ³digo de paÃ­s +55, caracteres nÃ£o numÃ©ricos e aplica o formato padrÃ£o `(XX) XXXXX-XXXX` ou `(XX) XXXXXX-XXXX`.

VariÃ¡veis
`accountNewList`
- Tipo: `List<Account>`
- DescriÃ§Ã£o: Lista de registros de Account que estÃ£o sendo criados ou atualizados na trigger.

`accountOldList`
- Tipo: `List<Account>`
- DescriÃ§Ã£o: Lista de registros de Account existentes antes da operaÃ§Ã£o, usada para comparaÃ§Ã£o.

`accountNewMap`
- Tipo: `Map<Id, Account>`
- DescriÃ§Ã£o: Mapa de registros de Account novos, acessÃ­vel por Id, facilitando buscas rÃ¡pidas.

`accountOldMap`
- Tipo: `Map<Id, Account>`
- DescriÃ§Ã£o: Mapa de registros antigos de Account, acessÃ­vel por Id, usado para validaÃ§Ãµes de mudanÃ§as.

Classe: DwCustomListView

DescriÃ§Ã£o
A classe `DwCustomListView` Ã© uma classe abstrata no Salesforce que serve como base para a criaÃ§Ã£o de listas personalizadas de registros relacionados. Essas listas podem ser exibidas em componentes Lightning Web Components (LWC) ou componentes Aura, permitindo uma visualizaÃ§Ã£o dinÃ¢mica de registros relacionados a um registro principal, como Leads ou Oportunidades.

Ela define os atributos essenciais que todas as listas personalizadas devem possuir e fornece uma estrutura padrÃ£o para que subclasses especÃ­ficas possam implementar detalhes adicionais.

MÃ©todos
Construtor `DwCustomListView(String recordId, String listViewKey, String title)`
- Inicializa uma instÃ¢ncia da classe com os valores do registro principal, uma chave identificadora da lista e um tÃ­tulo descritivo.
- ParÃ¢metros:
  - `recordId` (String): ID do registro principal ao qual a lista estÃ¡ vinculada.
  - `listViewKey` (String): Chave Ãºnica que identifica a lista, Ãºtil para distinguir mÃºltiplas listas na mesma pÃ¡gina.
  - `title` (String): TÃ­tulo que serÃ¡ exibido para a lista, como "Oportunidades Relacionadas".

VariÃ¡veis
`recordId`
- Tipo: `Id`
- DescriÃ§Ã£o: Armazena o identificador do registro principal (por exemplo, o ID de um Lead ou Oportunidade).

`listViewKey`
- Tipo: `String`
- DescriÃ§Ã£o: Chave Ãºnica que identifica a lista personalizada, Ãºtil para distinguir vÃ¡rias listas na mesma interface.

`title`
- Tipo: `String`
- DescriÃ§Ã£o: TÃ­tulo descritivo da lista, como "Oportunidades Relacionadas".

`recordName`
- Tipo: `String`
- DescriÃ§Ã£o: Nome do registro principal ao qual a lista estÃ¡ vinculada.

`objectName`
- Tipo: `String`
- DescriÃ§Ã£o: Nome do tipo de objeto principal (por exemplo, 'Lead', 'Opportunity').

`relatedRecords`
- Tipo: `List<RelatedRecordData>`
- DescriÃ§Ã£o: Lista que contÃ©m os registros relacionados, onde cada item Ã© uma instÃ¢ncia da classe interna `RelatedRecordData`. Cada elemento representa uma linha na lista de registros relacionados, contendo detalhes como nome, status, data de criaÃ§Ã£o, etc.

Classe Interna: RelatedRecordData
DescriÃ§Ã£o
A classe `RelatedRecordData` Ã© uma estrutura que define o formato de cada registro individual na lista de registros relacionados. Cada instÃ¢ncia representa uma linha na lista exibida ao usuÃ¡rio, contendo informaÃ§Ãµes essenciais sobre o registro relacionado.

VariÃ¡veis
`iconName`
- Tipo: `String`
- DescriÃ§Ã£o: Nome do Ã­cone que representa visualmente o tipo de registro (por exemplo, 'standard:opportunity').

`id`
- Tipo: `String`
- DescriÃ§Ã£o: ID do registro relacionado.

`name`
- Tipo: `String`
- DescriÃ§Ã£o: Nome do registro relacionado.

`createdDate`
- Tipo: `String`
- DescriÃ§Ã£o: Data de criaÃ§Ã£o do registro, geralmente formatada como uma string legÃ­vel.

`status`
- Tipo: `String`
- DescriÃ§Ã£o: Status ou fase do registro, se aplicÃ¡vel.

`createdById`
- Tipo: `String`
- DescriÃ§Ã£o: ID do usuÃ¡rio que criou o registro.

`createdByName`
- Tipo: `String`
- DescriÃ§Ã£o: Nome do usuÃ¡rio que criou o registro.

Resumo
A classe `DwCustomListView` fornece uma estrutura padrÃ£o para criar listas personalizadas de registros relacionados, facilitando a exibiÃ§Ã£o de informaÃ§Ãµes relacionadas a um registro principal em componentes de interface do Salesforce. Ela Ã© projetada para ser estendida por classes especÃ­ficas que irÃ£o preencher os detalhes de cada lista de acordo com o contexto de uso.

# Classe: DW_InteractionsHistoryController

## DescriÃ§Ã£o
A classe `DW_InteractionsHistoryController` Ã© responsÃ¡vel por buscar e montar o histÃ³rico de interaÃ§Ãµes de registros do tipo Lead ou Oportunidade no Salesforce. Ela Ã© utilizada principalmente em componentes Lightning Web Components (LWC) para exibir uma lista organizada de registros relacionados, como leads vinculados a uma oportunidade ou oportunidades relacionadas a um lead. O objetivo Ã© fornecer uma visÃ£o consolidada das interaÃ§Ãµes com o cliente, incluindo informaÃ§Ãµes como nome, telefone, email, status, data de criaÃ§Ã£o, entre outros.

---

## MÃ©todos

### `getRecordsInteractionHistory(Id recordId)`
- **DescriÃ§Ã£o:** Retorna um objeto contendo os dados organizados do histÃ³rico de interaÃ§Ãµes de um Lead ou Oportunidade, com base no ID do registro fornecido.
- **ParÃ¢metro:** `recordId` (Id) â€” ID do registro de Lead ou Oportunidade a ser consultado.
- **Retorno:** Um objeto do tipo `DW_InteractionHistoryDTO` que inclui o tÃ­tulo, o nome do registro principal, o tipo de objeto, e uma lista de registros relacionados formatados.
- **Funcionamento tÃ©cnico:** Verifica se o ID Ã© vÃ¡lido, identifica o tipo de objeto (Lead ou Oportunidade), busca os registros relacionados (leads ou oportunidades vinculadas), formata esses registros e os ordena por data de criaÃ§Ã£o.

---

### `parseToInteractionHistoryDTO(SObject record)`
- **DescriÃ§Ã£o:** Converte um registro do Salesforce (Lead ou Opportunity) em um formato padrÃ£o utilizado no histÃ³rico de interaÃ§Ãµes.
- **ParÃ¢metro:** `record` (SObject) â€” Pode ser um Lead ou uma Oportunidade.
- **Retorno:** Um objeto `RelatedRecordData` preenchido com informaÃ§Ãµes formatadas para exibiÃ§Ã£o.
- **Funcionamento tÃ©cnico:** Identifica o tipo de objeto, extrai informaÃ§Ãµes relevantes (nome, cliente, status, telefone, email, documento), e popula os campos do objeto de acordo com o tipo de registro.

---

### `formatCurrency(Decimal value)`
- **DescriÃ§Ã£o:** Formata um valor decimal de moeda no padrÃ£o brasileiro, com separadores de milhar e vÃ­rgula decimal.
- **ParÃ¢metro:** `value` (Decimal) â€” Valor monetÃ¡rio a ser formatado.
- **Retorno:** String â€” Valor formatado no padrÃ£o brasileiro, por exemplo, "R$ 1.234,56".
- **Funcionamento tÃ©cnico:** Verifica se o valor Ã© nulo ou vazio, ajusta para duas casas decimais, separa a parte inteira da decimal, formata a parte inteira com pontos como separadores de milhar, e combina tudo em uma string formatada.

---

## VariÃ¡veis

### `title`
- **Tipo:** `String`
- **DescriÃ§Ã£o:** TÃ­tulo do histÃ³rico de interaÃ§Ãµes, fixado como "HistÃ³rico de interaÃ§Ãµes".

### `recordId`
- **Tipo:** `String`
- **DescriÃ§Ã£o:** Armazena o ID do registro principal (Lead ou Oportunidade).

### `recordName`
- **Tipo:** `String`
- **DescriÃ§Ã£o:** Nome do registro principal (Lead ou Oportunidade).

### `objectName`
- **Tipo:** `String`
- **DescriÃ§Ã£o:** Tipo do objeto principal, pode ser "Lead" ou "Oportunidade".

### `relatedRecords`
- **Tipo:** `List<DW_InteractionHistoryDTO.RelatedRecordData>`
- **DescriÃ§Ã£o:** Lista de registros relacionados ao registro principal, formatados para exibiÃ§Ã£o.

---

## Resumo tÃ©cnico e leigo
A classe `DW_InteractionsHistoryController` Ã© uma ferramenta que busca informaÃ§Ãµes de interaÃ§Ãµes passadas com clientes, seja de Leads ou Oportunidades, e organiza esses dados para serem exibidos em uma interface. Ela identifica o tipo de registro, busca registros relacionados, formata esses registros com detalhes como nome, telefone, email, status e data, e ainda fornece uma funÃ§Ã£o para exibir valores monetÃ¡rios de forma clara e padronizada. Assim, ela ajuda usuÃ¡rios a visualizarem de forma rÃ¡pida e organizada o histÃ³rico de contatos e negociaÃ§Ãµes com clientes.

# Classe: DWLeadConversionHandler

## DescriÃ§Ã£o
A classe `DWLeadConversionHandler` Ã© responsÃ¡vel por automatizar a conversÃ£o de Leads em Oportunidades no Salesforce. Ela realiza a conversÃ£o de mÃºltiplos Leads de forma massiva, verificando se hÃ¡ contas existentes que possam ser vinculadas ao Lead com base em critÃ©rios como nome, email, telefone ou documento (CPF/CNPJ). AlÃ©m disso, ela pode clonar atividades relacionadas ao Lead para a nova Oportunidade e notificar erros de conversÃ£o via Chatter, marcando o proprietÃ¡rio do Lead. Essa funcionalidade Ã© especialmente Ãºtil em processos de automaÃ§Ã£o de vendas, como flows, onde a conversÃ£o manual seria trabalhosa.

## MÃ©todos

### `executeConvertion(List<String> leadIds)`
- **DescriÃ§Ã£o:** MÃ©todo principal que realiza a conversÃ£o dos Leads em Oportunidades.
- **ParÃ¢metros:** 
  - `leadIds` (Lista de Strings): Lista contendo os IDs dos Leads que devem ser convertidos.
- **Retorno:** Uma lista de objetos `FlowOutput` contendo mensagens de sucesso ou erro apÃ³s a tentativa de conversÃ£o.
- **Funcionamento tÃ©cnico:**
  - Consulta os Leads que ainda nÃ£o foram convertidos, com base nos IDs fornecidos.
  - ObtÃ©m o status de conversÃ£o padrÃ£o.
  - Busca contas existentes que possam estar relacionadas aos Leads, usando critÃ©rios como nome, email, telefone ou documento.
  - Para cada Lead, tenta encontrar uma conta correspondente com base nas regras de associaÃ§Ã£o.
  - Prepara objetos de conversÃ£o de Lead (`Database.LeadConvert`) com as contas encontradas.
  - Executa a conversÃ£o em massa.
  - Para cada resultado, verifica se a conversÃ£o foi bem-sucedida:
    - Se sim, atualiza a Oportunidade criada, ajustando o proprietÃ¡rio.
    - Se nÃ£o, registra o erro no Chatter do Lead.
  - Clona atividades (tarefas e eventos) do Lead para a nova Oportunidade.
  - Atualiza os Leads convertidos.
  - Retorna uma mensagem de resultado para o fluxo.

### `postErrorToChatter(Lead lead, String errorMessage)`
- **DescriÃ§Ã£o:** Publica uma mensagem de erro no Chatter do Lead, informando que houve uma falha na conversÃ£o.
- **ParÃ¢metros:**
  - `lead` (Lead): Lead que apresentou o erro.
  - `errorMessage` (String): Mensagem detalhada do erro.
- **Funcionamento tÃ©cnico:** Cria e insere um `FeedItem` no Chatter do Lead, marcando o proprietÃ¡rio e exibindo a mensagem de erro.

### `cloneLeadActivities(Map<Id, Id> leadToOpportunityMap)`
- **DescriÃ§Ã£o:** Clona as atividades relacionadas ao Lead (tarefas e eventos) para a nova Oportunidade gerada.
- **ParÃ¢metros:**
  - `leadToOpportunityMap` (Mapa de Ids): Mapeamento entre o ID do Lead e o ID da Oportunidade criada.
- **Funcionamento tÃ©cnico:**
  - Consulta tarefas (`Task`) e eventos (`Event`) associados aos Leads.
  - Para cada tarefa e evento, cria uma cÃ³pia, ajustando o campo `WhatId` para a Oportunidade e removendo o vÃ­nculo ao Lead (`WhoId`).
  - (Comentado) Insere as tarefas e eventos clonados na base.

## VariÃ¡veis e Classes Auxiliares

### `FlowOutput`
- **DescriÃ§Ã£o:** Classe utilizada para retornar o resultado do mÃ©todo `executeConvertion` em flows.
- **VariÃ¡veis:**
  - `response` (String): Mensagem que indica sucesso ou erro na conversÃ£o.
- **MÃ©todo construtor:** Recebe uma string de resposta ao ser instanciada.

---

## Resumo tÃ©cnico e leigo
A classe `DWLeadConversionHandler` automatiza o processo de transformar Leads em Oportunidades no Salesforce, verificando se jÃ¡ existem contas relacionadas para vincular ao Lead, clonando atividades anteriores e notificando erros. Ela Ã© usada principalmente em automaÃ§Ãµes de vendas para facilitar a conversÃ£o em massa, economizando tempo e garantindo consistÃªncia no processo.

Classe: DW_QueryFactory

DescriÃ§Ã£o
A classe `DW_QueryFactory` Ã© responsÃ¡vel por construir e executar consultas dinÃ¢micas em objetos do Salesforce. Ela permite definir condiÃ§Ãµes de filtro, relacionamentos entre objetos, limites de registros retornados, alÃ©m de possibilitar a execuÃ§Ã£o da consulta e retorno dos resultados.

MÃ©todos
`setGroupedCondition(DW_QueryConditionComposition queryConditionComposition)`
- Adiciona uma condiÃ§Ã£o agrupada (com mÃºltiplos critÃ©rios) Ã  consulta.
- ParÃ¢metro: `queryConditionComposition` (DW_QueryConditionComposition): composiÃ§Ã£o de condiÃ§Ãµes agrupadas.
- Retorna: a prÃ³pria instÃ¢ncia de `DW_QueryFactory` para permitir encadeamento de mÃ©todos.

`setCondition(DW_QueryCondition queryCondition)`
- Define uma condiÃ§Ã£o de filtro usando o operador AND.
- ParÃ¢metro: `queryCondition` (DW_QueryCondition): condiÃ§Ã£o de filtro.
- Retorna: a prÃ³pria instÃ¢ncia de `DW_QueryFactory`.

`setOrCondition(DW_QueryCondition queryCondition)`
- Define uma condiÃ§Ã£o de filtro usando o operador OR.
- ParÃ¢metro: `queryCondition` (DW_QueryCondition): condiÃ§Ã£o de filtro.
- Retorna: a prÃ³pria instÃ¢ncia de `DW_QueryFactory`.

`run()`
- Executa a consulta construÃ­da com os filtros, relacionamentos e limites definidos.
- Retorna: uma lista de objetos SObject contendo os registros retornados pela consulta.

`get(String sobj)`
- MÃ©todo estÃ¡tico que cria uma nova instÃ¢ncia de `DW_QueryFactory` para o objeto especificado.
- ParÃ¢metro: `sobj` (String): nome do objeto Salesforce.
- Retorna: uma nova instÃ¢ncia de `DW_QueryFactory`.

`with(String relationshipName, String sobj)`
- Adiciona um relacionamento entre objetos na consulta.
- ParÃ¢metros:
  - `relationshipName` (String): nome do relacionamento.
  - `sobj` (String): nome do objeto relacionado.
- Retorna: a prÃ³pria instÃ¢ncia de `DW_QueryFactory`.

`with(String relationshipName)`
- Adiciona um relacionamento, deduzindo o nome do objeto relacionado a partir do nome do relacionamento.
- ParÃ¢metro: `relationshipName` (String): nome do relacionamento.
- Retorna: a prÃ³pria instÃ¢ncia de `DW_QueryFactory`.

`withParent(String relationshipName, String sobj)`
- Adiciona um relacionamento pai na consulta.
- ParÃ¢metros:
  - `relationshipName` (String): nome do relacionamento pai.
  - `sobj` (String): nome do objeto pai.
- Retorna: a prÃ³pria instÃ¢ncia de `DW_QueryFactory`.

`withParent(String relationshipName)`
- Adiciona um relacionamento pai, deduzindo o nome do objeto pai a partir do nome do relacionamento.
- ParÃ¢metro: `relationshipName` (String): nome do relacionamento pai.
- Retorna: a prÃ³pria instÃ¢ncia de `DW_QueryFactory`.

`limitedTo(Integer limitedTo)`
- Define o limite mÃ¡ximo de registros a serem retornados na consulta.
- ParÃ¢metro: `limitedTo` (Integer): nÃºmero mÃ¡ximo de registros.
- Retorna: a prÃ³pria instÃ¢ncia de `DW_QueryFactory`.

`test()`
- MÃ©todo estÃ¡tico de exemplo para testar a construÃ§Ã£o de consultas. EstÃ¡ comentado e serve como referÃªncia para diferentes cenÃ¡rios de uso.

VariÃ¡veis
`queryFieldList`
- Tipo: `List<String>`
- DescriÃ§Ã£o: Lista de nomes dos campos que serÃ£o retornados na consulta.

`relationshipList`
- Tipo: `List<DW_Relationship>`
- DescriÃ§Ã£o: Lista de relacionamentos entre objetos que serÃ£o incluÃ­dos na consulta.

`parentRelationshipList`
- Tipo: `List<DW_ParentRelationship>`
- DescriÃ§Ã£o: Lista de relacionamentos de objetos pais que serÃ£o incluÃ­dos na consulta.

`limitedTo`
- Tipo: `Integer`
- DescriÃ§Ã£o: Limite mÃ¡ximo de registros que a consulta retornarÃ¡ (padrÃ£o: 50.000).

`queryComposition`
- Tipo: `DW_QueryConditionComposition`
- DescriÃ§Ã£o: ComposiÃ§Ã£o de condiÃ§Ãµes de filtro, podendo incluir condiÃ§Ãµes simples e agrupadas.

`sobj`
- Tipo: `String`
- DescriÃ§Ã£o: Nome do objeto Salesforce sobre o qual a consulta serÃ¡ realizada.

# Classe: DW_GetAvaliacaoIntegrableInvocable

## DescriÃ§Ã£o
A classe `DW_GetAvaliacaoIntegrableInvocable` Ã© uma classe global que permite buscar avaliaÃ§Ãµes de veÃ­culos a partir da placa, integrando-se com um serviÃ§o externo. Ela pode ser utilizada em automaÃ§Ãµes do Salesforce, como flows, para automatizar a obtenÃ§Ã£o de dados de avaliaÃ§Ã£o de veÃ­culos com base na placa informada pelo usuÃ¡rio. A classe realiza a chamada ao serviÃ§o externo, processa a resposta, registra logs de requisiÃ§Ã£o e resposta, e retorna os dados de avaliaÃ§Ã£o de forma estruturada.

## MÃ©todos

### `getAvaliacao(List<AvaliacaoRequest> requests)`
- **DescriÃ§Ã£o**: MÃ©todo principal invocÃ¡vel que recebe uma lista de requisiÃ§Ãµes contendo placas de veÃ­culos e retorna uma lista de respostas com os dados de avaliaÃ§Ã£o correspondentes.
- **ParÃ¢metros**:
  - `requests`: Lista de objetos do tipo `AvaliacaoRequest`, onde cada objeto contÃ©m a placa do veÃ­culo a ser avaliada.
- **Retorno**: Lista de objetos do tipo `AvaliacaoResponse`, contendo os detalhes da avaliaÃ§Ã£o de cada veÃ­culo, incluindo modelo, preÃ§o, chassi, entre outros.
- **Funcionamento**:
  - Para cada requisiÃ§Ã£o, valida se a placa foi informada.
  - Padroniza a formato da placa, removendo sÃ­mbolos e convertendo para maiÃºsculas.
  - Chama a integraÃ§Ã£o externa para obter a avaliaÃ§Ã£o.
  - Registra logs da requisiÃ§Ã£o e resposta.
  - Mapeia os dados recebidos na resposta para o objeto de retorno.
  - Em caso de erro, captura a mensagem e registra no resultado.
  - ApÃ³s processar todas as requisiÃ§Ãµes, salva os logs no banco de dados.

### `AvaliacaoRequest`
- **DescriÃ§Ã£o**: Classe que representa a requisiÃ§Ã£o de avaliaÃ§Ã£o, utilizada como entrada no Flow.
- **VariÃ¡veis**:
  - `placa`: String obrigatÃ³ria que representa a placa do veÃ­culo a ser avaliado.

### `AvaliacaoResponse`
- **DescriÃ§Ã£o**: Classe que representa a resposta da avaliaÃ§Ã£o, utilizada para retornar os dados ao Flow.
- **VariÃ¡veis**:
  - `message`: Mensagem de erro, se ocorrer algum problema na requisiÃ§Ã£o.
  - `modelo`: Modelo do veÃ­culo.
  - `molicar`: CÃ³digo de referÃªncia Molicar.
  - `observacao`: ObservaÃ§Ãµes adicionais.
  - `placa`: Placa do veÃ­culo avaliado.
  - `chassi`: NÃºmero do chassi do veÃ­culo.
  - `precoAvaliacao`: Valor estimado da avaliaÃ§Ã£o.
  - `avaliacaoMaisTOP`: Valor de avaliaÃ§Ã£o com mais opcionais.
  - `precoCliente`: Valor sugerido ao cliente.
  - `valorTop`: Valor mÃ¡ximo sugerido.
  - `valorSugerido`: Valor mÃ©dio sugerido.
  - `previsaoReparo`: Valor estimado de reparo.
  - `dataAvaliacao`: Data em que a avaliaÃ§Ã£o foi realizada.
  - `diasValidade`: NÃºmero de dias que a avaliaÃ§Ã£o Ã© vÃ¡lida.
  - `isSuccess`: Indica se a requisiÃ§Ã£o foi bem-sucedida.

## VariÃ¡veis

### VariÃ¡veis internas e de suporte
- `results`: Lista que armazena as respostas de avaliaÃ§Ã£o para cada placa processada.
- `httpRequestLogList`: Lista que armazena os logs de requisiÃ§Ãµes e respostas para auditoria.
- `log`: Objeto que representa o log de uma requisiÃ§Ã£o especÃ­fica.
- `res`: Objeto que representa a resposta de avaliaÃ§Ã£o de um veÃ­culo.
- `messageError`: String que armazena mensagens de erro durante o processamento.

### Classes internas
- `AvaliacaoRequest`: Classe que contÃ©m a variÃ¡vel `placa`, usada como entrada.
- `AvaliacaoResponse`: Classe que contÃ©m vÃ¡rias variÃ¡veis para armazenar os dados retornados pela avaliaÃ§Ã£o, incluindo detalhes do veÃ­culo e status da requisiÃ§Ã£o.

## Resumo tÃ©cnico
A classe realiza uma integraÃ§Ã£o com um serviÃ§o externo para obter avaliaÃ§Ãµes de veÃ­culos com base na placa fornecida, processa a resposta, registra logs detalhados de requisiÃ§Ã£o e resposta, e fornece uma estrutura de dados clara para uso em automaÃ§Ãµes do Salesforce. Ela garante validaÃ§Ãµes, tratamento de erros e rastreabilidade das operaÃ§Ãµes realizadas.

Classe: DW_TermoController

DescriÃ§Ã£o
A classe `DW_TermoController` Ã© um controlador Apex usado em pÃ¡ginas Visualforce para exibir ou gerar um termo relacionado a uma entidade personalizada chamada `Termo__c`. Ela recupera informaÃ§Ãµes do termo, da oportunidade associada, produtos vinculados e condiÃ§Ãµes de pagamento, alÃ©m de fornecer mÃ©todos para formatar dados de data e hora para exibiÃ§Ã£o.

MÃ©todos
`DW_TermoController(ApexPages.StandardController stdController)`
- Construtor da classe que inicializa o controlador com base no ID do termo passado pela pÃ¡gina Visualforce.
- Recupera o registro `Termo__c` com informaÃ§Ãµes relacionadas necessÃ¡rias para montar o termo.
- Define o tipo de pessoa do comprador e pagador, padrÃ£o como 'PF' (Pessoa FÃ­sica).
- Se houver uma oportunidade vinculada ao termo, carrega detalhes adicionais como produtos, condiÃ§Ãµes de pagamento, tipo de estoque e vÃ­nculo familiar ou societÃ¡rio.
- Caso contrÃ¡rio, inicializa listas vazias e valores padrÃ£o.

`carregarProdutos()`
- MÃ©todo privado que busca e carrega a lista de produtos (`OpportunityLineItem`) vinculados Ã  oportunidade associada ao termo.
- Utilizado para exibir os produtos relacionados no termo.

`carregarCondicoesPagamento()`
- MÃ©todo privado que busca e carrega as condiÃ§Ãµes de pagamento (`CondicaoPagamento__c`) vinculadas Ã  oportunidade.
- Utilizado para exibir as condiÃ§Ãµes de pagamento no termo.

`getProdutosOportunidade()`
- MÃ©todo getter que retorna a lista de produtos vinculados Ã  oportunidade.
- Usado na pÃ¡gina Visualforce para exibir esses produtos.

`getCondicoesPagamento()`
- MÃ©todo getter que retorna a lista de condiÃ§Ãµes de pagamento.
- Usado na pÃ¡gina Visualforce para exibir essas condiÃ§Ãµes.

`getHoraSaida()`
- MÃ©todo que formata a hora de inÃ­cio do teste drive (`DataHoraInicioTesteDrive__c`) para o formato HH.
- Retorna uma string com a hora formatada, ou vazia se nÃ£o houver data/hora.

`getMinutoSaida()`
- MÃ©todo que formata os minutos de inÃ­cio do teste drive para o formato mm.
- Retorna uma string com os minutos formatados, ou vazia se nÃ£o houver data/hora.

`getHoraRetorno()`
- MÃ©todo que formata a hora de tÃ©rmino do teste drive (`DataHoraFimTesteDrive__c`) para o formato HH.
- Retorna uma string com a hora formatada, ou null se nÃ£o houver data/hora.

`getMinutoRetorno()`
- MÃ©todo que formata os minutos de tÃ©rmino do teste drive para o formato mm.
- Retorna uma string com os minutos formatados, ou null se nÃ£o houver data/hora.

VariÃ¡veis
`termo`
- Tipo: `Termo__c`
- DescriÃ§Ã£o: Armazena o registro do termo principal, contendo informaÃ§Ãµes do termo e dados relacionados Ã  oportunidade, cliente e veÃ­culo.

`oportunidadeId`
- Tipo: `Id`
- DescriÃ§Ã£o: ID da oportunidade vinculada ao termo, usado para buscar produtos e condiÃ§Ãµes de pagamento.

`produtosOportunidade`
- Tipo: `List<OpportunityLineItem>`
- DescriÃ§Ã£o: Lista de produtos vinculados Ã  oportunidade, exibidos no termo.

`condicoesPagamento`
- Tipo: `List<CondicaoPagamento__c>`
- DescriÃ§Ã£o: Lista de condiÃ§Ãµes de pagamento relacionadas Ã  oportunidade.

`tipoEstoque`
- Tipo: `String`
- DescriÃ§Ã£o: Tipo de estoque do veÃ­culo (ex: novo, seminovo), obtido da oportunidade.

`tipoPessoaPagador`
- Tipo: `String`
- DescriÃ§Ã£o: Tipo de pessoa do pagador (ex: PF ou PJ), padrÃ£o como 'PF'.

`tipoPessoaComprador`
- Tipo: `String`
- DescriÃ§Ã£o: Tipo de pessoa do comprador (ex: PF ou PJ), padrÃ£o como 'PF'.

`tipoVinculo`
- Tipo: `String`
- DescriÃ§Ã£o: Indica se hÃ¡ vÃ­nculo familiar ou societÃ¡rio entre comprador e pagador.

ObservaÃ§Ã£o
A classe Ã© projetada para facilitar a exibiÃ§Ã£o de informaÃ§Ãµes detalhadas do termo, incluindo dados de veÃ­culos, clientes, produtos e condiÃ§Ãµes de pagamento, alÃ©m de fornecer formataÃ§Ã£o adequada para exibiÃ§Ã£o de horÃ¡rios na interface do usuÃ¡rio.

# Classe: DW_LeadService

## DescriÃ§Ã£o
A classe `DW_LeadService` Ã© responsÃ¡vel por validar e formatar campos especÃ­ficos de registros do objeto Lead no Salesforce. Ela garante que os dados de telefone, celular e documentos (CPF ou CNPJ) estejam no formato correto, aplicando regras de negÃ³cio e impedindo a gravaÃ§Ã£o de informaÃ§Ãµes invÃ¡lidas.

## MÃ©todos

### `checkPhoneFormat()`
- **PropÃ³sito:** Validar e aplicar mÃ¡scara no campo de telefone fixo (`Phone`) dos Leads.
- **Funcionamento:** Remove caracteres nÃ£o numÃ©ricos, verifica se o nÃºmero corresponde ao padrÃ£o esperado (8 dÃ­gitos), e aplica uma mÃ¡scara no formato `(00) 0000-0000`. Caso o nÃºmero seja invÃ¡lido, impede a gravaÃ§Ã£o e exibe uma mensagem de erro.

### `checkMobilePhoneFormat()`
- **PropÃ³sito:** Validar e aplicar mÃ¡scara no campo de celular (`MobilePhone`) dos Leads.
- **Funcionamento:** Remove caracteres nÃ£o numÃ©ricos, verifica se o nÃºmero possui 10 ou 11 dÃ­gitos, e aplica a mÃ¡scara correspondente:
  - 11 dÃ­gitos: `(00) 90000-0000`
  - 10 dÃ­gitos: `(00) 0000-0000`
- Caso o nÃºmero nÃ£o esteja no formato esperado, gera uma mensagem de erro.

### `checkDocumentFormat()`
- **PropÃ³sito:** Validar e formatar o campo de documento (`DWDocumento__c`) como CPF ou CNPJ.
- **Funcionamento:** Utiliza expressÃµes regulares para identificar se o documento Ã© CPF ou CNPJ, remove caracteres nÃ£o numÃ©ricos, valida os dÃ­gitos verificadores, e formata o documento de acordo com o padrÃ£o:
  - CPF: `000.000.000-00`
  - CNPJ: `00.000.000/0000-00`
- Caso o documento seja invÃ¡lido, gera uma mensagem de erro.

### `validarEFormatarDocumento(Lead lead, Lead leadOld, String campo, Pattern patternCPF, Pattern patternCNPJ)`
- **PropÃ³sito:** MÃ©todo privado que valida e formata um campo de documento, podendo ser CPF ou CNPJ.
- **Funcionamento:** Verifica se o valor mudou, remove caracteres nÃ£o numÃ©ricos, valida o dÃ­gito verificador, e aplica a formataÃ§Ã£o adequada. Caso invÃ¡lido, adiciona erro ao Lead.

### `isCPF(String CPF)`
- **PropÃ³sito:** Validar se um CPF Ã© vÃ¡lido, verificando seus dÃ­gitos verificadores.
- **Funcionamento:** Aplica o algoritmo de validaÃ§Ã£o de CPF, que calcula os dÃ­gitos verificadores e compara com os dÃ­gitos fornecidos.

### `isCNPJ(String CNPJ)`
- **PropÃ³sito:** Validar se um CNPJ Ã© vÃ¡lido, verificando seus dÃ­gitos verificadores.
- **Funcionamento:** Aplica o algoritmo de validaÃ§Ã£o de CNPJ, que calcula os dÃ­gitos verificadores e compara com os dÃ­gitos fornecidos.

## VariÃ¡veis

### `leadNewList`
- **Tipo:** `List<Lead>`
- **DescriÃ§Ã£o:** Lista contendo os registros de Lead novos ou modificados na operaÃ§Ã£o atual.

### `leadOldList`
- **Tipo:** `List<Lead>`
- **DescriÃ§Ã£o:** Lista contendo os registros de Lead antigos, antes das modificaÃ§Ãµes.

### `leadNewMap`
- **Tipo:** `Map<Id, Lead>`
- **DescriÃ§Ã£o:** Mapa que relaciona o ID do Lead com seu registro atualizado na operaÃ§Ã£o atual.

### `leadOldMap`
- **Tipo:** `Map<Id, Lead>`
- **DescriÃ§Ã£o:** Mapa que relaciona o ID do Lead com seu registro antigo, antes das modificaÃ§Ãµes.

Classe: DW_AuraLWCHelper

DescriÃ§Ã£o
A classe `DW_AuraLWCHelper` Ã© uma classe auxiliar que fornece mÃ©todos para realizar operaÃ§Ãµes de consulta, inserÃ§Ã£o, atualizaÃ§Ã£o e exclusÃ£o de registros no Salesforce, com suporte a relacionamentos e condiÃ§Ãµes especÃ­ficas. Ela Ã© projetada para ser utilizada em componentes Lightning via Aura, como indicado pelas anotaÃ§Ãµes `@AuraEnabled`.

MÃ©todos
`getRecordsByFieldValues(String objectName, String field, List<String> valueList, Map<String, String> relationshipMap, Map<String, String> parentRelationshipMap)`
- Recupera registros de um objeto Salesforce com base em valores de um campo especÃ­fico.
- ParÃ¢metros:
  - `objectName` (String): nome do objeto Salesforce.
  - `field` (String): nome do campo para filtrar os registros.
  - `valueList` (List<String>): lista de valores para o filtro.
  - `relationshipMap` (Map<String, String>): relacionamentos adicionais a serem considerados na consulta.
  - `parentRelationshipMap` (Map<String, String>): relacionamentos de objetos pai.
- Retorna uma String JSON contendo os registros encontrados ou uma mensagem de erro.

`upsertRecords(List<Sobject> sobjectToUpsert)`
- Insere ou atualiza uma lista de registros SObject no Salesforce.
- ParÃ¢metro:
  - `sobjectToUpsert` (List<Sobject>): lista de registros a serem inseridos ou atualizados.
- Retorna uma String JSON indicando sucesso ou erro.

`updateAndInsertSobjesctsInOrderComponent(Sobject sObjct1, Sobject sObjct2)`
- Executa uma atualizaÃ§Ã£o em um registro e, em sequÃªncia, insere outro registro.
- ParÃ¢metros:
  - `sObjct1` (Sobject): registro a ser atualizado.
  - `sObjct2` (Sobject): registro a ser inserido apÃ³s a atualizaÃ§Ã£o.
- Retorna uma String JSON com os registros processados ou uma mensagem de erro.

`deleteRecords(List<Sobject> sobjectToDelete)`
- Exclui uma lista de registros SObject do Salesforce.
- ParÃ¢metro:
  - `sobjectToDelete` (List<Sobject>): registros a serem excluÃ­dos.
- Retorna uma String JSON indicando sucesso ou erro.

`getRecordById(String objectName, String recordId, Map<String, String> relationshipMap, Map<String, String> parentRelationshipMap)`
- Recupera um registro especÃ­fico pelo ID, com suporte a relacionamentos adicionais.
- ParÃ¢metros:
  - `objectName` (String): nome do objeto.
  - `recordId` (String): ID do registro.
  - `relationshipMap` (Map<String, String>): relacionamentos adicionais.
  - `parentRelationshipMap` (Map<String, String>): relacionamentos de objetos pai.
- Retorna uma String JSON com o registro encontrado ou uma mensagem de erro.

VariÃ¡veis
Nenhuma variÃ¡vel de instÃ¢ncia Ã© definida nesta classe, pois ela utiliza mÃ©todos estÃ¡ticos para operaÃ§Ãµes utilitÃ¡rias.

---

### ExplicaÃ§Ã£o TÃ©cnica e Leiga

- **Consulta de registros**: Os mÃ©todos permitem buscar registros de objetos especÃ­ficos no Salesforce, filtrando por valores de campos e considerando relacionamentos com outros objetos.
- **InserÃ§Ã£o/AtualizaÃ§Ã£o**: VocÃª pode enviar uma lista de registros para serem criados ou atualizados no banco de dados do Salesforce.
- **ExclusÃ£o**: Permite remover registros existentes.
- **OperaÃ§Ã£o combinada**: Um mÃ©todo especial realiza uma atualizaÃ§Ã£o em um registro e, logo apÃ³s, insere outro, garantindo que as operaÃ§Ãµes ocorram na ordem correta.
- **Recuperar por ID**: VocÃª pode buscar um registro especÃ­fico usando seu identificador Ãºnico, tambÃ©m considerando relacionamentos adicionais.
- **Tratamento de erros**: Todos os mÃ©todos retornam informaÃ§Ãµes sobre sucesso ou falha, incluindo mensagens de erro detalhadas, para facilitar o diagnÃ³stico.

Essa classe Ã© Ãºtil para facilitar operaÃ§Ãµes complexas de manipulaÃ§Ã£o de dados via componentes Lightning, centralizando a lÃ³gica de consulta e manipulaÃ§Ã£o de registros.

Classe: DWUsedVehicleSectionControllerTest

DescriÃ§Ã£o
A classe `DWUsedVehicleSectionControllerTest` Ã© uma classe de testes automatizados no Salesforce, que verifica o funcionamento do mÃ©todo `getOppWithSameStock` da classe `DWUsedVehicleSectionController`. Ela contÃ©m diversos mÃ©todos de teste que criam dados fictÃ­cios para simular diferentes cenÃ¡rios de uso do mÃ©todo, garantindo que ele se comporte corretamente em situaÃ§Ãµes variadas, como quando nÃ£o hÃ¡ outras oportunidades com o mesmo estoque, quando hÃ¡ outras oportunidades com o mesmo proprietÃ¡rio, ou quando hÃ¡ entradas invÃ¡lidas.

MÃ©todos
`testGetOppWithSameStock_noOtherOpps()`
- Testa o cenÃ¡rio onde nÃ£o existem outras oportunidades com o mesmo estoque.
- Cria um usuÃ¡rio, uma loja, uma mÃ­dia, um lead, uma conta, um ativo (veÃ­culo) e uma oportunidade.
- Chama o mÃ©todo `getOppWithSameStock` e verifica se o estoque Ã© considerado vÃ¡lido, se nÃ£o hÃ¡ outros proprietÃ¡rios e se a lista de oportunidades relacionadas estÃ¡ vazia.

`testGetOppWithSameStock_withOtherOpps_sameOwner()`
- Testa o cenÃ¡rio onde hÃ¡ outras oportunidades com o mesmo estoque e o mesmo proprietÃ¡rio.
- Cria um usuÃ¡rio, uma loja, uma mÃ­dia, um ativo e uma oportunidade.
- Chama o mÃ©todo `getOppWithSameStock` para verificar o comportamento quando hÃ¡ outras oportunidades com o mesmo estoque e proprietÃ¡rio.

`testGetOppWithSameStock_withOtherOpps_differentOwner()`
- Testa o cenÃ¡rio onde hÃ¡ outras oportunidades com o mesmo estoque, mas com proprietÃ¡rios diferentes.
- Cria dois ativos, duas oportunidades e um segundo usuÃ¡rio.
- Chama o mÃ©todo `getOppWithSameStock` para verificar o comportamento quando hÃ¡ mÃºltiplas oportunidades com o mesmo estoque, mas com proprietÃ¡rios diferentes.

`testGetOppWithSameStock_withInvalidId()`
- Testa o cenÃ¡rio onde o mÃ©todo Ã© chamado com um ID de oportunidade invÃ¡lido.
- Verifica se uma exceÃ§Ã£o Ã© lanÃ§ada ao tentar consultar uma oportunidade que nÃ£o existe.
- Garante que o mÃ©todo lida corretamente com entradas invÃ¡lidas, lanÃ§ando uma exceÃ§Ã£o adequada.

VariÃ¡veis
`user`
- Tipo: `User`
- DescriÃ§Ã£o: Representa um usuÃ¡rio ativo com perfil de administrador do sistema, utilizado para definir o proprietÃ¡rio das oportunidades criadas nos testes.

`accountLojaToInsert`
- Tipo: `Account`
- DescriÃ§Ã£o: Conta de loja criada para associar aos ativos e mÃ­dias utilizados nos testes, simulando uma loja real.

`midia`
- Tipo: `Midia__c`
- DescriÃ§Ã£o: Registro de mÃ­dia criado para associar Ã  loja, representando uma mÃ­dia de divulgaÃ§Ã£o.

`leadToInsert`
- Tipo: `Lead`
- DescriÃ§Ã£o: Lead criado para representar um potencial cliente interessado no veÃ­culo.

`accountToInsert`
- Tipo: `Account`
- DescriÃ§Ã£o: Conta adicional criada para testes, embora nÃ£o seja utilizada diretamente na lÃ³gica principal dos testes.

`assetPlaca`, `assetPlaca2`
- Tipo: `String`
- DescriÃ§Ã£o: Placas de veÃ­culos (ativos) criados para os testes, utilizados para associar Ã s oportunidades.

`assetToTest`, `assetToTest2`
- Tipo: `Asset`
- DescriÃ§Ã£o: Ativos (veÃ­culos) criados para serem utilizados nas oportunidades, simulando veÃ­culos reais com placas distintas.

`veiculoInteresseToInsert`
- Tipo: `VeiculoInteresse__c`
- DescriÃ§Ã£o: Registro que relaciona o lead ao ativo, indicando interesse no veÃ­culo.

`opp`, `opp1`
- Tipo: `Opportunity`
- DescriÃ§Ã£o: Oportunidades criadas para os testes, representando negÃ³cios em andamento com diferentes condiÃ§Ãµes de estoque e proprietÃ¡rio.

`secondUser`
- Tipo: `User`
- DescriÃ§Ã£o: Segundo usuÃ¡rio criado para testes, especialmente para verificar cenÃ¡rios com mÃºltiplos proprietÃ¡rios de oportunidades.

`exceptionThrown`
- Tipo: `Boolean`
- DescriÃ§Ã£o: VariÃ¡vel utilizada na verificaÃ§Ã£o de exceÃ§Ãµes, indicando se uma exceÃ§Ã£o foi lanÃ§ada durante a execuÃ§Ã£o do mÃ©todo de teste com ID invÃ¡lido.

Classe: DW_MinutaController

DescriÃ§Ã£o
A classe `DW_MinutaController` Ã© um controlador Apex utilizado em uma pÃ¡gina Visualforce para exibir informaÃ§Ãµes detalhadas de uma oportunidade no Salesforce. Ela reÃºne dados relacionados a produtos, condiÃ§Ãµes de pagamento, e aplica regras de estilo para exibir ou esconder partes da interface com base nos dados carregados. AlÃ©m disso, identifica se a oportunidade possui uma reserva de alienaÃ§Ã£o e captura informaÃ§Ãµes especÃ­ficas de condiÃ§Ãµes de pagamento de veÃ­culos usados.

MÃ©todos
`DW_MinutaController(ApexPages.StandardController controller)`
- Construtor da classe que Ã© chamado automaticamente ao carregar a pÃ¡gina Visualforce.
- ParÃ¢metro: `controller` (StandardController): controlador padrÃ£o da pÃ¡gina, que fornece o registro da oportunidade.
- ResponsÃ¡vel por inicializar atributos, carregar dados principais, condiÃ§Ãµes de pagamento, listas de produtos cortesia e cobrados, alÃ©m de calcular valores totais de serviÃ§os.

`loadCondicoesPagamento(Id oppId)`
- Carrega as condiÃ§Ãµes de pagamento relacionadas Ã  oportunidade.
- Verifica se alguma condiÃ§Ã£o corresponde a uma reserva de alienaÃ§Ã£o, alterando o atributo `isReservaAlienacao`.
- Busca tambÃ©m a condiÃ§Ã£o de pagamento de um carro usado, se houver, e armazena na variÃ¡vel `condicaoCarroUsado`.

`loadCortesiaList(Id oppId)`
- Carrega a lista de produtos considerados cortesia, ou seja, aqueles cujo nome contÃ©m "(CORTESIA)".
- Armazena esses itens na variÃ¡vel `cortesiaList`.

`loadCobradoList(Id oppId)`
- Carrega a lista de produtos cobrados, excluindo aqueles considerados cortesia e veÃ­culos.
- Armazena esses itens na variÃ¡vel `cobradoList`.

`calcularValoresServicos(Id oppId)`
- Calcula os valores totais de serviÃ§os cortesia e cobrados.
- Utiliza o mÃ©todo `getSomaValor` para obter a soma dos preÃ§os unitÃ¡rios e totais dos itens.

`getSomaValor(Id oppId, Boolean isCortesia, Boolean useListPrice)`
- MÃ©todo genÃ©rico que realiza uma consulta dinÃ¢mica para somar valores de itens de oportunidade.
- ParÃ¢metros:
  - `isCortesia`: indica se a soma Ã© de itens cortesia (`true`) ou cobrados (`false`).
  - `useListPrice`: indica se deve somar pelo preÃ§o unitÃ¡rio (`true`) ou pelo preÃ§o total (`false`).
- Retorna o valor somado ou zero se nÃ£o houver resultados.

VariÃ¡veis
`RESERVA_ALIENACAO_COD`
- Tipo: `Set<String>`
- DescriÃ§Ã£o: Conjunto de cÃ³digos de formas de pagamento que caracterizam uma reserva de alienaÃ§Ã£o. Utilizado para identificar se a oportunidade possui esse tipo de reserva.

`isReservaAlienacao`
- Tipo: `String`
- DescriÃ§Ã£o: Indica se a oportunidade possui uma reserva de alienaÃ§Ã£o ("Sim" ou "NÃ£o"). Essa informaÃ§Ã£o Ã© exibida na interface.

`cortesiaList`
- Tipo: `List<OpportunityLineItem>`
- DescriÃ§Ã£o: Lista de itens de oportunidade considerados cortesia, ou seja, produtos cujo nome contÃ©m "(CORTESIA)".

`cobradoList`
- Tipo: `List<OpportunityLineItem>`
- DescriÃ§Ã£o: Lista de itens de oportunidade cobrados, excluindo produtos cortesia e veÃ­culos.

`condicaoCarroUsado`
- Tipo: `CondicaoPagamento__c`
- DescriÃ§Ã£o: Armazena a condiÃ§Ã£o de pagamento relacionada ao carro usado, se houver.

`valorServicosAdicionaisCobrados`
- Tipo: `Decimal`
- DescriÃ§Ã£o: Soma total dos valores cobrados por serviÃ§os adicionais.

`valorServicosAdicionaisCortesia`
- Tipo: `Decimal`
- DescriÃ§Ã£o: Soma total dos valores de serviÃ§os cortesia.

`styleCortesia`
- Tipo: `String`
- DescriÃ§Ã£o: Estilo CSS para controle de exibiÃ§Ã£o da tabela de produtos cortesia na interface. Pode ser vazio ou `'none-display'` para esconder.

`styleCobrado`
- Tipo: `String`
- DescriÃ§Ã£o: Estilo CSS para controle de exibiÃ§Ã£o da tabela de produtos cobrados na interface. Pode ser vazio ou `'none-display'` para esconder.

`nomeGerente`
- Tipo: `String`
- DescriÃ§Ã£o: Nome do gerente responsÃ¡vel pela oportunidade, carregado ao inicializar a classe.

Classe: DW_QueryCondition

DescriÃ§Ã£o
A classe `DW_QueryCondition` Ã© utilizada para criar e representar condiÃ§Ãµes de consulta (filtros) em consultas dinÃ¢micas no Salesforce. Ela permite definir diferentes tipos de condiÃ§Ãµes, como igualdade, inclusÃ£o, valores booleanos, datas, decimais, entre outros, alÃ©m de suportar combinaÃ§Ãµes com operadores lÃ³gicos como AND e OR.

---

## VariÃ¡veis
- `conditionType` (DW_ConditionOptions): Indica o tipo de condiÃ§Ã£o (ex: igualdade, inclusÃ£o, booleano, etc.).
- `field` (String): O nome do campo que serÃ¡ filtrado na consulta.
- `criteria` (String): O critÃ©rio de comparaÃ§Ã£o (ex: '=', 'IN', etc.).
- `valueToFilterString` (String): Valor de filtro quando o tipo Ã© string.
- `valueToFilterStringList` (List<String>): Lista de valores de filtro para condiÃ§Ãµes de inclusÃ£o.
- `valueToFilterDecimal` (Decimal): Valor de filtro numÃ©rico decimal.
- `valueToFilterDate` (Date): Valor de filtro de data.
- `valueToFilterDatetime` (Datetime): Valor de filtro de data e hora.
- `valueToFilterBoolean` (Boolean): Valor de filtro booleano (verdadeiro/falso).
- `hasPreviousCondition` (Boolean): Indica se hÃ¡ uma condiÃ§Ã£o anterior, Ãºtil para montar consultas com AND/OR.
- `operator` (DW_OperatorOptions): Operador lÃ³gico que conecta esta condiÃ§Ã£o a outra (AND ou OR).

---

## MÃ©todos

### `newInstance` (Sobrecargas)
Estes mÃ©todos estÃ¡ticos criam novas instÃ¢ncias de `DW_QueryCondition` com diferentes tipos de valores de filtro e operadores. Eles facilitam a criaÃ§Ã£o de condiÃ§Ãµes especÃ­ficas sem precisar usar o construtor diretamente.

- Para valores do tipo String, Boolean, Decimal, Date, Datetime, listas ou conjuntos de IDs ou objetos.
- Permitem tambÃ©m definir o operador lÃ³gico (AND ou OR) ao criar a condiÃ§Ã£o.

### Construtores
Estes mÃ©todos construtores inicializam uma condiÃ§Ã£o com base no tipo de valor fornecido:

- Para filtros de string, booleanos, decimais, datas e datetimes.
- Para filtros de listas ou conjuntos de Strings ou IDs, configurando o tipo de condiÃ§Ã£o como `STR_IN` (inclusÃ£o).

### `renderChild`
- Gera a representaÃ§Ã£o da condiÃ§Ã£o como parte de uma consulta, considerando o operador (`AND` ou `OR`) e se Ã© o primeiro nÃ³ de uma lista de condiÃ§Ãµes filhas.
- Usa mÃ©todos internos para renderizar diferentes tipos de condiÃ§Ãµes (string, decimal, data, boolean, etc.).

### `render`
- Gera a string de condiÃ§Ã£o para uso em uma consulta, levando em conta o operador (`AND` ou `OR`) e se Ã© o primeiro elemento.
- Usa mÃ©todos internos para montar a condiÃ§Ã£o de acordo com o tipo de dado.

### MÃ©todos internos de renderizaÃ§Ã£o (`renderStr`, `renderStrIn`, `renderDec`, `renderDt`, `renderDttime`, `renderBoolean`)
- Cada um monta a parte da condiÃ§Ã£o de consulta correspondente ao tipo de dado:
  - String: `'campo = 'valor'`
  - Lista de Strings: `'campo IN ('valor1','valor2')'`
  - Decimal: `'campo = valor'`
  - Data: `'campo = yyyy-MM-dd'`
  - Datetime: `'campo = yyyy-MM-dd'T'HH:mm:ss'Z'`
  - Boolean: `'campo = true/false'`

### `QueryConditionException`
- Classe de exceÃ§Ã£o personalizada para erros relacionados Ã  renderizaÃ§Ã£o de condiÃ§Ãµes.

---

## Resumo tÃ©cnico
A `DW_QueryCondition` Ã© uma classe que encapsula a lÃ³gica para criar condiÃ§Ãµes de filtro dinÃ¢micas em consultas Salesforce, suportando mÃºltiplos tipos de dados e operadores lÃ³gicos, facilitando a construÃ§Ã£o de consultas complexas de forma programÃ¡tica e estruturada.

# Classe: DW_IniciarFaturamentoBatch

## DescriÃ§Ã£o
A classe `DW_IniciarFaturamentoBatch` Ã© responsÃ¡vel por integrar oportunidades do Salesforce com o sistema Fluig, iniciando o processo de faturamento. Ela implementa funcionalidades de processamento em lote (batch), permite chamadas HTTP externas (callouts) e pode ser agendada para execuÃ§Ã£o recorrente. AlÃ©m disso, oferece mÃ©todos para execuÃ§Ã£o manual, agendamento, cancelamento de tarefas agendadas e envio de notificaÃ§Ãµes.

## MÃ©todos

### `testQA(List<String> id)`
- Executa manualmente a integraÃ§Ã£o para uma oportunidade especÃ­fica, identificada pelo seu ID.
- ParÃ¢metro: uma lista de IDs de oportunidades.
- Utiliza o mÃ©todo `execute` da classe para processar a oportunidade passada.

### `scheduleThisClass(String cron)`
- Agenda a execuÃ§Ã£o da classe usando uma expressÃ£o cron.
- ParÃ¢metro: uma string com a expressÃ£o cron; se nula, usa uma padrÃ£o para rodar a cada hora.

### `execute(SchedulableContext param1)`
- MÃ©todo obrigatÃ³rio da interface `Schedulable`.
- Inicia o processamento em lote com escopo 1, ou seja, uma oportunidade por vez.

### `runEveryNMinutes(Integer each)`
- Agenda o batch para rodar a cada N minutos, onde N Ã© definido pelo parÃ¢metro.
- Cria mÃºltiplos agendamentos para cobrir toda a hora.

### `runEveryNMinutesInBusinessHours(Integer each)`
- Agenda o batch para rodar a cada N minutos, somente durante o horÃ¡rio comercial (das 9h Ã s 19h).
- Garante que as execuÃ§Ãµes ocorram apenas em horÃ¡rios de expediente.

### `cancelThisSchedule()`
- Cancela todas as tarefas agendadas relacionadas Ã  classe `DW_IniciarFaturamentoBatch`.
- Busca por agendamentos existentes e aborta cada um deles.

### `start(Database.BatchableContext param1)`
- MÃ©todo inicial do processamento em lote.
- Consulta oportunidades na fase "Fluig" que possuem um nÃºmero de pedido definido (`DWNumeroPedido__c`).
- Retorna uma lista de oportunidades para processamento.

### `execute(Database.BatchableContext param1, List<Opportunity> opportunityList)`
- MÃ©todo principal do processamento em lote.
- Para cada oportunidade:
  - Realiza uma chamada de integraÃ§Ã£o com o sistema Fluig.
  - Registra logs de requisiÃ§Ã£o e resposta.
  - Atualiza o status da oportunidade com base no resultado da integraÃ§Ã£o.
  - Envia notificaÃ§Ã£o ao responsÃ¡vel pela oportunidade em caso de sucesso.
- ApÃ³s o processamento, insere logs e atualiza as oportunidades no banco.

### `notificarAprovacaoMinuta(Opportunity opp)`
- Envia uma notificaÃ§Ã£o personalizada ao proprietÃ¡rio da oportunidade, informando que a minuta foi aprovada.
- Utiliza um tipo de notificaÃ§Ã£o customizado definido no sistema.

### `finish(Database.BatchableContext param1)`
- MÃ©todo obrigatÃ³rio da interface `Batchable`.
- NÃ£o possui implementaÃ§Ã£o nesta classe, mas Ã© necessÃ¡rio para completar o ciclo do batch.

### `BatchContext`
- Classe auxiliar que simula um contexto de execuÃ§Ã£o de batch manual.
- Implementa a interface `Database.BatchableContext`.
- MÃ©todos `getChildJobId()` e `getJobId()` retornam `null`, pois sÃ£o utilizados apenas para simulaÃ§Ã£o.

## VariÃ¡veis e Componentes Internos

- **`DW_IniciarFaturamentoIntegrable`**: Classe responsÃ¡vel por realizar a chamada de integraÃ§Ã£o com o Fluig.
- **`HttpRequestLog__c`**: Objeto personalizado para registrar logs de requisiÃ§Ãµes HTTP.
- **`DW_Helper`**: Classe auxiliar que verifica se hÃ¡ conteÃºdo vÃ¡lido em objetos ou strings.
- **`DW_IniciarFaturamentoResponseTemplate`**: Classe que representa a resposta da integraÃ§Ã£o, usada para extrair informaÃ§Ãµes especÃ­ficas.
- **`CustomNotificationType`**: Objeto que define o tipo de notificaÃ§Ã£o personalizada enviada ao usuÃ¡rio.
- **`Messaging.CustomNotification`**: Objeto utilizado para criar e enviar notificaÃ§Ãµes personalizadas no Salesforce.

## Resumo TÃ©cnico
A classe `DW_IniciarFaturamentoBatch` automatiza a integraÃ§Ã£o de oportunidades com o sistema Fluig, suportando execuÃ§Ã£o manual, agendada e em lote. Ela realiza chamadas HTTP externas, registra logs detalhados, atualiza o status das oportunidades e envia notificaÃ§Ãµes aos usuÃ¡rios responsÃ¡veis, garantindo um fluxo de trabalho automatizado e monitorado.

Classe: DWAccountHistoryPurchaseDAO

DescriÃ§Ã£o
A classe `DWAccountHistoryPurchaseDAO` Ã© responsÃ¡vel por acessar e consultar informaÃ§Ãµes relacionadas ao histÃ³rico de compras de clientes no Salesforce. Ela implementa o padrÃ£o Singleton, garantindo que exista apenas uma instÃ¢ncia da classe durante a execuÃ§Ã£o, facilitando o gerenciamento de conexÃµes e consultas ao banco de dados. AlÃ©m disso, ela atua como um Data Access Object (DAO), centralizando as operaÃ§Ãµes de leitura de dados de histÃ³ricos de compras, Leads e Oportunidades.

MÃ©todos
`getInstance()`
- Retorna a instÃ¢ncia Ãºnica da classe `DWAccountHistoryPurchaseDAO`.
- TÃ©cnica: Singleton, garantindo que todas as chamadas usem a mesma instÃ¢ncia.
- Leiga: Ã‰ como uma porta de entrada Ãºnica para usar essa classe.

`DWAccountHistoryPurchaseDAO()`
- Construtor padrÃ£o da classe.
- Mantido pÃºblico para compatibilidade, mas recomenda-se usar `getInstance()`.

`getAccountHistoryPurchaseById(String recordId)`
- Busca o histÃ³rico de compras de uma conta especÃ­fica pelo seu ID.
- ParÃ¢metro: `recordId` (String) â€” ID da Conta.
- Retorna uma lista de registros de compras ordenados da mais recente para a mais antiga.
- TÃ©cnica: Executa uma consulta SOQL filtrando pelo ID da Conta.

`getAccountHistoryPurchaseByDocument(String documento)`
- Busca o histÃ³rico de compras usando o documento do cliente (CPF ou CNPJ).
- ParÃ¢metro: `documento` (String) â€” Documento do cliente.
- Retorna uma lista de registros ordenados por data de nota fiscal.
- TÃ©cnica: Consulta SOQL filtrando pelo documento do cliente, verificando se o campo nÃ£o Ã© nulo.

`getAccountHistoryPurchaseByPhoneAndName(String telefone, String nome)`
- Busca o histÃ³rico de compras usando telefone e nome do cliente.
- ParÃ¢metros: `telefone` (String), `nome` (String).
- Inclui lÃ³gica para adicionar o cÃ³digo de paÃ­s (+55) ao telefone, se necessÃ¡rio.
- Retorna uma lista de registros ordenados por data de nota fiscal.
- TÃ©cnica: Consulta SOQL filtrando por telefone (com ou sem cÃ³digo de paÃ­s) e nome, verificando se o telefone nÃ£o Ã© nulo.

`getAccountHistoryPurchaseByEmailAndName(String email, String nome)`
- Busca o histÃ³rico de compras usando email e nome do cliente.
- ParÃ¢metros: `email` (String), `nome` (String).
- Retorna uma lista de registros ordenados por data de nota fiscal.
- TÃ©cnica: Consulta SOQL filtrando por nome e email, verificando se o email nÃ£o Ã© nulo.

`getOpportunityById(String recordId)`
- Retorna dados bÃ¡sicos de uma Oportunidade pelo seu ID.
- ParÃ¢metro: `recordId` (String).
- Inclui informaÃ§Ãµes da Conta relacionada, como nome, telefone, email, etc.
- TÃ©cnica: Consulta SOQL com JOIN implÃ­cito na relaÃ§Ã£o Opportunity-Account.

`getLeadById(String recordId)`
- Retorna dados bÃ¡sicos de um Lead pelo seu ID.
- ParÃ¢metro: `recordId` (String).
- Inclui nome, status, telefone, email e documento.
- TÃ©cnica: Consulta SOQL simples na entidade Lead.

VariÃ¡veis
`INSTANCE`
- Tipo: `DWAccountHistoryPurchaseDAO`
- DescriÃ§Ã£o: InstÃ¢ncia Ãºnica da classe, usada para implementar o padrÃ£o Singleton.

`DWHistoricoCompras__c`
- Tipo: Objeto customizado.
- DescriÃ§Ã£o: Representa o histÃ³rico de compras de clientes, contendo informaÃ§Ãµes como data, valor, vendedor, etc.

`DWCliente__c`
- Tipo: Objeto relacionado ao cliente.
- DescriÃ§Ã£o: Campo que referencia o cliente associado ao histÃ³rico de compras.

`DWDocumento__c`
- Tipo: Campo no objeto relacionado ao cliente.
- DescriÃ§Ã£o: Documento do cliente (CPF ou CNPJ), usado para buscas por documento.

`DWEmpresa__c`, `DWMarca__c`, `DWModelo__c`, `DWTipo__c`, `DWValor__c`, `DWVendedor__c`
- Tipo: Campos no objeto `DWHistoricoCompras__c`.
- DescriÃ§Ã£o: InformaÃ§Ãµes adicionais sobre a compra, como valor, marca, modelo, tipo, vendedor, etc.

`Opportunity`
- Tipo: Objeto padrÃ£o.
- DescriÃ§Ã£o: Representa uma oportunidade de negÃ³cio, com informaÃ§Ãµes de estÃ¡gio, conta relacionada, etc.

`Lead`
- Tipo: Objeto padrÃ£o.
- DescriÃ§Ã£o: Representa um potencial cliente, com informaÃ§Ãµes de contato e documento.

Classe: DW_Integrable

DescriÃ§Ã£o
A classe `DW_Integrable` Ã© uma classe abstrata que serve como base para criar integraÃ§Ãµes com sistemas externos. Ela fornece uma estrutura para enviar requisiÃ§Ãµes, tratar respostas e gerenciar o fluxo de comunicaÃ§Ã£o, sendo que suas subclasses devem implementar detalhes especÃ­ficos de cada integraÃ§Ã£o.

MÃ©todos
`callIntegration(Object obj)`
- MÃ©todo abstrato que deve ser implementado para realizar a chamada de integraÃ§Ã£o usando o objeto fornecido.
- ParÃ¢metro: `obj` (Object): dados necessÃ¡rios para a integraÃ§Ã£o.
- Retorno: Nenhum.

`constructEndpoint()`
- MÃ©todo abstrato que deve retornar o endpoint (URL) da API para a requisiÃ§Ã£o.
- Retorno: `String`.

`setMethod()`
- MÃ©todo abstrato que deve definir qual mÃ©todo HTTP serÃ¡ utilizado (GET, POST, DELETE).
- Retorno: `String`.

`constructHeaders()`
- MÃ©todo abstrato que deve montar e retornar os cabeÃ§alhos HTTP necessÃ¡rios para a requisiÃ§Ã£o.
- Retorno: `Map<String, String>`.

`constructQueryParameters()`
- MÃ©todo abstrato que deve montar e retornar os parÃ¢metros de consulta (query params) da requisiÃ§Ã£o.
- Retorno: `Map<String, String>`.

`getSerializedRequest()`
- MÃ©todo abstrato que deve retornar a requisiÃ§Ã£o serializada (normalmente em JSON ou XML).
- Retorno: `String`.

`setDeserializedResponseObject()`
- MÃ©todo abstrato que deve processar a resposta recebida e desserializÃ¡-la para um objeto utilizÃ¡vel.
- ParÃ¢metro: Nenhum.
- Retorno: Nenhum.

`finish()`
- MÃ©todo abstrato que realiza aÃ§Ãµes finais apÃ³s o envio da requisiÃ§Ã£o, como limpeza ou processamento adicional.
- ParÃ¢metro: Nenhum.
- Retorno: Nenhum.

`getBlobRequest()`
- MÃ©todo virtual que pode ser sobrescrito para fornecer um Blob (arquivo binÃ¡rio) como corpo da requisiÃ§Ã£o.
- Retorno: `Blob` ou `null` se nÃ£o for necessÃ¡rio.

`sendRequest()`
- MÃ©todo que envia a requisiÃ§Ã£o ao sistema externo, gerenciando o fluxo de envio, tratamento de erros e respostas.
- Processo:
  - ConstrÃ³i a requisiÃ§Ã£o completa.
  - Envia a requisiÃ§Ã£o usando a fÃ¡brica de requisiÃ§Ãµes.
  - Verifica o status da resposta.
  - Desserializa a resposta em caso de sucesso.
  - Trata erros e exceÃ§Ãµes.
  - Finaliza o processo chamando `finish()`.
- Retorno: `DW_Integrable` (a prÃ³pria instÃ¢ncia).

`constructFullRequest()`
- MÃ©todo que monta toda a requisiÃ§Ã£o, incluindo mÃ©todo, endpoint, cabeÃ§alhos, query params e corpo.
- Processo:
  - Define o mÃ©todo HTTP.
  - Cria a requisiÃ§Ã£o adequada (GET, POST, DELETE).
  - Para POST, inclui o corpo serializado ou Blob.
  - Define cabeÃ§alhos e parÃ¢metros de consulta.
- ParÃ¢metros: Nenhum.
- Retorno: Nenhum.

VariÃ¡veis
`requestFactoryInstance`
- Tipo: `DW_RequestFactory`
- DescriÃ§Ã£o: InstÃ¢ncia responsÃ¡vel por criar e enviar requisiÃ§Ãµes HTTP.

`deserializedResponseObject`
- Tipo: `Object`
- DescriÃ§Ã£o: Armazena a resposta desserializada recebida do sistema externo.

`deserializedRequestObject`
- Tipo: `Object`
- DescriÃ§Ã£o: Armazena o objeto que foi serializado na requisiÃ§Ã£o.

`method`
- Tipo: `String`
- DescriÃ§Ã£o: MÃ©todo HTTP utilizado na requisiÃ§Ã£o (GET, POST, DELETE).

`errorMessage`
- Tipo: `String`
- DescriÃ§Ã£o: Mensagem de erro, caso ocorra algum problema durante o envio ou processamento.

`successMessage`
- Tipo: `String`
- DescriÃ§Ã£o: Mensagem indicando sucesso na integraÃ§Ã£o.

`isError`
- Tipo: `Boolean`
- DescriÃ§Ã£o: Flag que indica se ocorreu um erro durante o processo.

`isSuccess`
- Tipo: `Boolean`
- DescriÃ§Ã£o: Flag que indica se a operaÃ§Ã£o foi bem-sucedida.

Classe: DW_CTIController

DescriÃ§Ã£o
A classe `DW_CTIController` Ã© responsÃ¡vel por gerenciar operaÃ§Ãµes relacionadas ao sistema de telefonia integrada (CTI) no Salesforce. Ela permite criar tarefas de ligaÃ§Ã£o, iniciar sessÃµes com a API externa, realizar chamadas, finalizar chamadas e recuperar credenciais de conexÃ£o.

MÃ©todos
`createTask(String recordId, String conversationText, String sObjectType, String ligacaoId, String numeroDestino)`
- Cria e insere uma tarefa de ligaÃ§Ã£o no Salesforce vinculada a um registro especÃ­fico (como Lead ou Contact).
- ParÃ¢metros:
  - `recordId`: ID do registro relacionado.
  - `conversationText`: Texto da conversa ou descriÃ§Ã£o da chamada.
  - `sObjectType`: Tipo do objeto relacionado (exemplo: Lead, Contact).
  - `ligacaoId`: ID da ligaÃ§Ã£o fornecido pela API externa.
  - `numeroDestino`: NÃºmero de telefone chamado.
- Retorna: A tarefa criada (`Task`).

`handleClickToCall(String payload, String tipoLigacao)`
- Gerencia a aÃ§Ã£o de click-to-call, realizando ou finalizando uma ligaÃ§Ã£o com base no tipo de aÃ§Ã£o.
- ParÃ¢metros:
  - `payload`: Dados da ligaÃ§Ã£o em formato JSON.
  - `tipoLigacao`: Tipo de aÃ§Ã£o, podendo ser 'ligar' ou 'finalizar'.
- Retorna: Objeto de resposta indicando sucesso ou erro.

`callInitSessionAndLogin(User user, Boolean expirouSessao)`
- Inicia ou reutiliza uma sessÃ£o com a API externa, criando uma nova se a sessÃ£o atual tiver expirado.
- ParÃ¢metros:
  - `user`: UsuÃ¡rio atual.
  - `expirouSessao`: Booleano que indica se a sessÃ£o deve ser recriada.
- Retorna: Objeto `SessaoCTI__c` representando a sessÃ£o ativa.

`doDial(User user, String numeroDestino, DW_CTIParser payload)`
- Executa uma ligaÃ§Ã£o via API de CTI, criando uma tarefa de ligaÃ§Ã£o e atualizando a sessÃ£o.
- ParÃ¢metros:
  - `user`: UsuÃ¡rio atual.
  - `numeroDestino`: NÃºmero de telefone para discar.
  - `payload`: Dados adicionais da ligaÃ§Ã£o.
- Retorna: Resposta HTTP indicando sucesso ou erro.

`doEndCall(User user, String taskId, String description)`
- Finaliza uma chamada ativa, atualizando a tarefa com duraÃ§Ã£o e descriÃ§Ã£o da chamada.
- ParÃ¢metros:
  - `user`: UsuÃ¡rio atual.
  - `taskId`: ID da tarefa de ligaÃ§Ã£o.
  - `description`: DescriÃ§Ã£o final da chamada.
- Retorna: Objeto de resposta indicando sucesso.

`getIPCredential()`
- Recupera as credenciais de conexÃ£o da API externa, com URL, usuÃ¡rio e senha, com base na loja do usuÃ¡rio.
- ParÃ¢metros: Nenhum.
- Retorna: Registro de metadados `DWNextIPCTI__mdt` contendo as credenciais.

`realizarSelect(String objectType, String recordId)`
- Executa uma consulta dinÃ¢mica para recuperar um registro genÃ©rico pelo tipo e ID.
- ParÃ¢metros:
  - `objectType`: Tipo do objeto (exemplo: Lead, Account).
  - `recordId`: ID do registro.
- Retorna: O registro do tipo especificado (`SObject`).

VariÃ¡veis
`Task`
- Tipo: `Task`
- DescriÃ§Ã£o: Objeto que representa uma tarefa de ligaÃ§Ã£o no Salesforce, contendo detalhes como proprietÃ¡rio, assunto, tipo, status, descriÃ§Ã£o, entre outros.

`SessaoCTI__c`
- Tipo: `SessaoCTI__c`
- DescriÃ§Ã£o: Registro que armazena a sessÃ£o ativa com a API de CTI, incluindo o ID da sessÃ£o.

`DWNextIPCTI__mdt`
- Tipo: `DWNextIPCTI__mdt`
- DescriÃ§Ã£o: Metadado que contÃ©m as credenciais de conexÃ£o com a API externa, como URL, usuÃ¡rio e senha.

`DW_CTIParser`
- Tipo: Classe auxiliar que representa os dados deserializados do payload JSON, incluindo informaÃ§Ãµes como nÃºmero de telefone, ID da tarefa, descriÃ§Ã£o, etc.

`DW_ResponseHTTP`
- Tipo: Classe auxiliar que padroniza as respostas de sucesso ou erro das operaÃ§Ãµes, facilitando o tratamento de resultados na interface ou outros processos.

# Classe: DW_CheckAndFormatBRDocFlowHelper

## DescriÃ§Ã£o
A classe `DW_CheckAndFormatBRDocFlowHelper` Ã© uma classe pÃºblica que fornece mÃ©todos para validar e formatar documentos brasileiros, especificamente CPF e CNPJ. Ela Ã© projetada para ser utilizada em fluxos de automaÃ§Ã£o, permitindo validar se um documento Ã© vÃ¡lido e, se for, formatÃ¡-lo de acordo com o padrÃ£o brasileiro.

---

## MÃ©todos

### `checkAndFormat(List<Request> requests)`
- **DescriÃ§Ã£o**: MÃ©todo invocÃ¡vel que recebe uma lista de solicitaÃ§Ãµes contendo documentos (CPF ou CNPJ), valida cada documento e, se vÃ¡lido, formata-o de acordo com o padrÃ£o brasileiro. Retorna uma lista de resultados indicando se o documento Ã© vÃ¡lido e seu valor formatado.
- **ParÃ¢metros**:
  - `requests` (List<Request>): Lista de objetos contendo os documentos a serem validados e formatados.
- **Retorno**:
  - Uma lista de objetos `Result`, cada um contendo:
    - `isValid` (Boolean): indica se o documento Ã© vÃ¡lido.
    - `formattedValue` (String): o documento formatado, ou vazio se invÃ¡lido.

---

## VariÃ¡veis e Classes Internas

### `Request`
- **DescriÃ§Ã£o**: Classe que representa a solicitaÃ§Ã£o de validaÃ§Ã£o, contendo o documento a ser validado.
- **VariÃ¡veis**:
  - `docToBeValidated` (String): Documento (CPF ou CNPJ) que serÃ¡ validado e formatado. Deve ser informado com ou sem formataÃ§Ã£o.

### `Result`
- **DescriÃ§Ã£o**: Classe que representa o resultado da validaÃ§Ã£o e formataÃ§Ã£o do documento.
- **VariÃ¡veis**:
  - `isValid` (Boolean): Indica se o documento Ã© vÃ¡lido.
  - `formattedValue` (String): Documento formatado de acordo com o padrÃ£o brasileiro, ou vazio se invÃ¡lido.

---

## MÃ©todos EstÃ¡ticos de ValidaÃ§Ã£o

### `isValidCNPJ(String cnpj)`
- **DescriÃ§Ã£o**: Verifica se um CNPJ fornecido Ã© vÃ¡lido, usando o algoritmo de validaÃ§Ã£o padrÃ£o brasileiro.
- **ParÃ¢metros**:
  - `cnpj` (String): CNPJ a ser validado, sem formataÃ§Ã£o.
- **Retorno**:
  - `Boolean`: `true` se o CNPJ for vÃ¡lido, `false` caso contrÃ¡rio.
- **Funcionamento**:
  - Verifica se o CNPJ tem 14 dÃ­gitos numÃ©ricos.
  - Calcula os dÃ­gitos verificadores usando pesos especÃ­ficos.
  - Compara os dÃ­gitos verificadores calculados com os dÃ­gitos do CNPJ.

### `isValidCPF(String cpf)`
- **DescriÃ§Ã£o**: Verifica se um CPF fornecido Ã© vÃ¡lido, usando o algoritmo de validaÃ§Ã£o padrÃ£o brasileiro.
- **ParÃ¢metros**:
  - `cpf` (String): CPF a ser validado, sem formataÃ§Ã£o.
- **Retorno**:
  - `Boolean`: `true` se o CPF for vÃ¡lido, `false` caso contrÃ¡rio.
- **Funcionamento**:
  - Verifica se o CPF tem 11 dÃ­gitos numÃ©ricos.
  - Calcula os dÃ­gitos verificadores usando pesos especÃ­ficos.
  - Compara os dÃ­gitos verificadores calculados com os dÃ­gitos do CPF.

---

## Resumo tÃ©cnico e leigo

- **O que faz?**  
  A classe valida se um documento brasileiro (CPF ou CNPJ) Ã© vÃ¡lido e, se for, o formata de modo que fique mais fÃ¡cil de ler e usar.

- **Como funciona?**  
  VocÃª envia uma lista de documentos (como nÃºmeros de CPF ou CNPJ). A classe verifica se cada um Ã© vÃ¡lido usando regras especÃ­ficas. Se for vÃ¡lido, ela tambÃ©m o formata com pontos, traÃ§os e barras, deixando-o mais organizado.

- **Para que serve?**  
  Essa funcionalidade Ã© Ãºtil em processos automatizados onde Ã© necessÃ¡rio validar documentos antes de salvar ou usar esses dados, garantindo que sÃ³ documentos corretos e bem formatados sejam utilizados.

Classe: DWStoreUserAvailabilityControllerTest

DescriÃ§Ã£o
A classe `DWStoreUserAvailabilityControllerTest` Ã© uma classe de testes automatizados no Salesforce, que verifica o funcionamento correto dos mÃ©todos da classe `DWStoreUserAvailabilityController`. Ela contÃ©m mÃ©todos que criam dados de teste, executam operaÃ§Ãµes e validam os resultados, garantindo que a lÃ³gica da aplicaÃ§Ã£o funcione como esperado em diferentes cenÃ¡rios.

MÃ©todos
`createTestAccount()`
- Cria uma conta de teste com nome "Test Account" e cÃ³digo de loja "123".
- Retorna o objeto `Account` criado.
- Utilidade: Usada para gerar uma conta fictÃ­cia para testes.

`createTestQueue(String devName)`
- Cria um grupo do tipo "Queue" com nome "Test Queue" e nome de desenvolvedor fornecido.
- ParÃ¢metro: `devName` (String): nome de desenvolvedor do grupo.
- Retorna o objeto `Group` criado.
- Utilidade: Cria filas de teste para associar usuÃ¡rios.

`testGetAccountTeamMember()`
- Testa o mÃ©todo `getAccountTeamMember()` da classe principal.
- Cria uma conta de teste, associa o usuÃ¡rio atual como membro da equipe da conta com papel de "Gerente".
- Executa a consulta e o mÃ©todo de obtenÃ§Ã£o de membros da equipe.

`testGetGroups()`
- Testa o mÃ©todo `getGroups()` da classe principal.
- Cria uma conta e uma fila de teste.
- Executa a recuperaÃ§Ã£o de grupos associados Ã  conta e ao usuÃ¡rio atual, incluindo tratamento de exceÃ§Ãµes.

`testGetGroupMembers()`
- Testa o mÃ©todo `getGroupMembers()`.
- Cria uma conta, uma fila e um usuÃ¡rio, e (comentado) um membro de grupo.
- Executa a recuperaÃ§Ã£o de membros do grupo, incluindo tratamento de exceÃ§Ãµes.

`testGetGroupMembersByQueueId()`
- Testa o mÃ©todo `getGroupMembersByQueueId()`.
- Cria uma conta, uma fila e um usuÃ¡rio, e (comentado) um membro de grupo.
- Executa a recuperaÃ§Ã£o de membros pelo ID da fila, incluindo tratamento de exceÃ§Ãµes.

`testGetEvents()`
- Testa o mÃ©todo `getEvents()`.
- Cria um evento de teste para o usuÃ¡rio atual.
- Executa a consulta de eventos em um intervalo de datas, incluindo tratamento de exceÃ§Ãµes.

`testGetProfilesByStore()`
- Testa o mÃ©todo `getProfilesByStore()`.
- Cria uma conta, uma fila e recupera um tipo de registro.
- Executa a busca de perfis de qualificaÃ§Ã£o associados Ã  loja, incluindo tratamento de exceÃ§Ãµes.

`testGetRecordsToTranfer()`
- Testa o mÃ©todo `getRecordsToTranfer()`.
- Cria uma conta de teste.
- Executa a tentativa de recuperar registros para transferÃªncia, incluindo tratamento de exceÃ§Ãµes.

`testUpdateRecords()`
- Testa o mÃ©todo `updateRecords()`.
- Cria uma conta, altera seu nome e atualiza o registro.
- Verifica se a alteraÃ§Ã£o foi aplicada corretamente.

`testResetGroupMembers()`
- Testa o mÃ©todo `resetGroupMembers()`.
- Cria uma fila de teste e um usuÃ¡rio, (comentado) insere um membro de grupo.
- Executa a limpeza dos membros do grupo e verifica se a operaÃ§Ã£o foi concluÃ­da.

`testCreateQueueWithProfile()`
- Testa o mÃ©todo `createQueueWithProfile()`.
- Cria uma conta, define nome de objeto e fila de teste.
- Executa a criaÃ§Ã£o de fila com perfil, incluindo tratamento de exceÃ§Ãµes.

`upsertProfileToQueueTest()`
- Testa o mÃ©todo `upsertProfileToQueue()`.
- Executa a operaÃ§Ã£o de inserir ou atualizar perfil na fila com dados de teste.

`getPicklistValuesTest()`
- Testa o mÃ©todo `getPicklistValues()`.
- Recupera valores de lista de seleÃ§Ã£o para o objeto `Opportunity` e o campo `StageName`.

`createEventTest()`
- Testa o mÃ©todo `createEvent()` e `deleteEvent()`.
- Cria um evento de teste, obtÃ©m seu ID, e o exclui para verificar operaÃ§Ãµes de criaÃ§Ã£o e remoÃ§Ã£o.

VariÃ¡veis
Nenhuma variÃ¡vel de classe Ã© definida nesta classe de testes. Os mÃ©todos utilizam variÃ¡veis locais para criar e manipular objetos de teste, como `Account`, `Group`, `User`, `Event`, entre outros, para simular cenÃ¡rios reais de uso.

# Classe: DWAccountPurchaseHistoryController

## DescriÃ§Ã£o
A classe `DWAccountPurchaseHistoryController` Ã© uma classe Apex responsÃ¡vel por buscar e formatar o histÃ³rico de compras de um cliente no Salesforce. Ela consegue obter esses dados a partir de registros de Lead ou Oportunidade, aplicando diferentes critÃ©rios de busca, e prepara esses dados para serem exibidos em componentes Lightning (LWC) ou utilizados em fluxos de automaÃ§Ã£o. AlÃ©m disso, ela formata valores monetÃ¡rios para o padrÃ£o brasileiro.

## MÃ©todos

### `getRecordsHistoryPurchase(Id recordId)`
- **DescriÃ§Ã£o**: Retorna o histÃ³rico de compras de um cliente com base no ID de um Lead ou Oportunidade. Verifica o tipo de objeto do ID fornecido, busca os registros relacionados e converte esses registros em um formato adequado para exibiÃ§Ã£o.
- **ParÃ¢metros**:
  - `recordId` (Id): ID do Lead ou Oportunidade para o qual o histÃ³rico serÃ¡ buscado.
- **Retorno**: Um objeto do tipo `DWAccountHistoryPurchaseDTO` contendo os dados do histÃ³rico de compras, ou `null` se o ID for invÃ¡lido.

### `parseToAccountHistoryPurchaseDTO(DWHistoricoCompras__c record)`
- **DescriÃ§Ã£o**: Converte um registro do objeto `DWHistoricoCompras__c` em um DTO (Data Transfer Object) formatado, com campos jÃ¡ preparados para exibiÃ§Ã£o, incluindo formataÃ§Ã£o de datas e valores monetÃ¡rios.
- **ParÃ¢metros**:
  - `record` (`DWHistoricoCompras__c`): Registro de histÃ³rico de compras a ser convertido.
- **Retorno**: Um `RelatedRecordData` contendo os dados do registro formatados.

### `formatCurrency(Decimal value)`
- **DescriÃ§Ã£o**: Formata um valor decimal para o padrÃ£o de moeda brasileira, incluindo sÃ­mbolo, pontos como separadores de milhares e vÃ­rgula como separador decimal.
- **ParÃ¢metros**:
  - `value` (Decimal): Valor monetÃ¡rio a ser formatado.
- **Retorno**: Uma `String` com o valor formatado, por exemplo, `'R$ 1.234,56'`.

## VariÃ¡veis

### `title`
- **Tipo**: `String`
- **DescriÃ§Ã£o**: TÃ­tulo do relatÃ³rio ou exibiÃ§Ã£o do histÃ³rico de compras, padrÃ£o definido como `'HistÃ³rico de Compras'`.

### `recordId`
- **Tipo**: `String`
- **DescriÃ§Ã£o**: ID do registro (Lead ou Oportunidade) convertido para string, usado para identificar o registro de origem.

### `objectName`
- **Tipo**: `String`
- **DescriÃ§Ã£o**: Nome do objeto do registro de origem, como `'Lead'` ou `'Oportunidade'`.

### `recordName`
- **Tipo**: `String`
- **DescriÃ§Ã£o**: Nome do registro de Lead ou Oportunidade.

### `relatedRecords`
- **Tipo**: `List<DWAccountHistoryPurchaseDTO.RelatedRecordData>`
- **DescriÃ§Ã£o**: Lista de registros de histÃ³rico de compras convertidos em DTOs, prontos para serem exibidos ou utilizados.

### `recordsDTO`
- **Tipo**: `List<DWAccountHistoryPurchaseDTO.RelatedRecordData>`
- **DescriÃ§Ã£o**: Lista temporÃ¡ria de DTOs de registros de histÃ³rico de compras antes de serem mapeados.

### `accountHistoryPurchases`
- **Tipo**: `List<DWHistoricoCompras__c>`
- **DescriÃ§Ã£o**: Lista de registros de histÃ³rico de compras obtidos do banco de dados, relacionados ao cliente.

### `recordsDTOMAP`
- **Tipo**: `Map<Id, DWAccountHistoryPurchaseDTO.RelatedRecordData>`
- **DescriÃ§Ã£o**: Mapa que associa IDs de registros aos seus DTOs correspondentes, facilitando a organizaÃ§Ã£o dos dados finais.

---

## Resumo tÃ©cnico e simplificado
- A classe busca o histÃ³rico de compras de um cliente, usando o ID de um Lead ou Oportunidade.
- Para Leads, ela tenta encontrar registros usando diferentes critÃ©rios: nome + email, nome + telefone, ou CPF.
- Para Oportunidades, ela busca diretamente pelo ID do cliente associado.
- Depois, ela transforma esses registros em um formato organizado, com datas e valores bem apresentados.
- Por fim, ela retorna esses dados para serem exibidos em telas ou usados em automaÃ§Ãµes.

Classe: APILeadCreateOrUpdate

DescriÃ§Ã£o
A classe `APILeadCreateOrUpdate` Ã© uma API REST global no Salesforce que permite criar ou atualizar registros de Leads e oportunidades a partir de integraÃ§Ãµes externas. Ela expÃµe um endpoint `/lead/createOrEditLead` que aceita requisiÃ§Ãµes PATCH com dados de leads, realizando validaÃ§Ãµes, buscas e inserÃ§Ãµes no banco de dados Salesforce.

MÃ©todos
`LeadInsert()`
- MÃ©todo principal exposto via PATCH que realiza a criaÃ§Ã£o ou atualizaÃ§Ã£o de um Lead ou oportunidade.
- Processa o corpo da requisiÃ§Ã£o JSON, valida os dados recebidos, busca lojas e leads existentes, e cria ou atualiza registros conforme necessÃ¡rio.
- Valida o CNPJ da loja, formata o telefone, verifica se o lead jÃ¡ existe, e cria uma nova oportunidade ou lead, dependendo do contexto.
- TambÃ©m associa veÃ­culos de interesse ao lead ou oportunidade, se aplicÃ¡vel.
- Retorna uma resposta HTTP com o status e mensagem apropriados, alÃ©m de registrar detalhes da requisiÃ§Ã£o e resposta em logs.

`veiculoInteresseAlreadyAssociate(Id pLeadId, Id pOpportunityId, String pPlacaAtivo)`
- Verifica se jÃ¡ existe um registro de veÃ­culo de interesse associado ao Lead ou Oportunidade com a placa fornecida.
- ParÃ¢metros:
  - `pLeadId`: ID do Lead (pode ser nulo)
  - `pOpportunityId`: ID da Oportunidade (pode ser nulo)
  - `pPlacaAtivo`: Placa do veÃ­culo
- Retorna `Boolean`: `true` se jÃ¡ existe uma associaÃ§Ã£o, `false` caso contrÃ¡rio.

`insertVeiculoInteresse(Id pLeadId, Id pOpportunityId, ReceivedLead pLeadRecebido)`
- Insere um registro de veÃ­culo de interesse vinculado ao Lead ou Oportunidade.
- ParÃ¢metros:
  - `pLeadId`: ID do Lead (pode ser nulo)
  - `pOpportunityId`: ID da Oportunidade (pode ser nulo)
  - `pLeadRecebido`: Dados recebidos na requisiÃ§Ã£o
- Retorna `Boolean`: `true` se o veÃ­culo foi inserido ou se a placa estÃ¡ vazia, `false` se nÃ£o encontrou ativo correspondente.

`setResponse(Integer pStatusCode, String pMessage, HttpRequestLog__c pLog)`
- Envia uma resposta HTTP ao cliente com o cÃ³digo de status e mensagem fornecidos.
- Atualiza o log da requisiÃ§Ã£o com o corpo da resposta, status e registra no banco.
- ParÃ¢metros:
  - `pStatusCode`: CÃ³digo HTTP (exemplo: 200, 400, 404)
  - `pMessage`: Mensagem de retorno
  - `pLog`: Registro de log da requisiÃ§Ã£o

VariÃ¡veis
`ReceivedLead`
- Tipo: Classe interna
- DescriÃ§Ã£o: Representa a estrutura do JSON recebido na requisiÃ§Ã£o, contendo dados do lead, como nome, telefone, email, status, informaÃ§Ãµes de campanha, veÃ­culo, entre outros.

`log` (HttpRequestLog__c)
- Tipo: Objeto personalizado
- DescriÃ§Ã£o: Registra detalhes da requisiÃ§Ã£o HTTP, incluindo endpoint, mÃ©todo, corpo da requisiÃ§Ã£o e resposta, alÃ©m do status code.

`leadRecebido`
- Tipo: `ReceivedLead`
- DescriÃ§Ã£o: InstÃ¢ncia da classe interna que armazena os dados do lead recebidos na requisiÃ§Ã£o, apÃ³s desserializaÃ§Ã£o do JSON.

`accountStoreToAssociate`
- Tipo: `Account`
- DescriÃ§Ã£o: Conta (loja) encontrada com base no documento informado, Ã  qual o lead ou oportunidade serÃ¡ associada.

`leadToInsert`
- Tipo: `Lead`
- DescriÃ§Ã£o: Novo registro de Lead criado durante o processamento, se necessÃ¡rio.

`opportunityToAssociate`
- Tipo: `Opportunity`
- DescriÃ§Ã£o: Oportunidade existente relacionada ao cliente, usada para decidir se deve criar uma nova oportunidade ou atualizar uma existente.

`assetToAssociateList`
- Tipo: Lista de `Asset`
- DescriÃ§Ã£o: Lista de ativos (veÃ­culos) encontrados com base na placa recebida, para associaÃ§Ã£o ao veÃ­culo de interesse.

`opportunityIdToAssociate`
- Tipo: `Id`
- DescriÃ§Ã£o: ID da oportunidade que serÃ¡ associada ao veÃ­culo de interesse, criada ou existente.

`veiculoInteresseToInsert`
- Tipo: `VeiculoInteresse__c`
- DescriÃ§Ã£o: Registro de veÃ­culo de interesse criado ou atualizado, vinculando veÃ­culo, lead ou oportunidade.

`exceptionMessage`
- Tipo: `String`
- DescriÃ§Ã£o: Mensagem de erro capturada durante a execuÃ§Ã£o, usada para determinar o cÃ³digo de resposta HTTP.

Este documento fornece uma visÃ£o tÃ©cnica e simplificada da funcionalidade da classe `APILeadCreateOrUpdate`, detalhando seus mÃ©todos e variÃ¡veis principais para facilitar o entendimento e documentaÃ§Ã£o.

# Classe: DW_DocusignGetStatusSignBatch

## DescriÃ§Ã£o
A classe `DW_DocusignGetStatusSignBatch` Ã© responsÃ¡vel por consultar periodicamente o status de envelopes enviados via DocuSign, uma plataforma de assinatura eletrÃ´nica. Quando um envelope Ã© concluÃ­do, ela recupera o documento assinado, armazena no Salesforce e faz os devidos links com registros relacionados, como oportunidades ou termos.

---

## MÃ©todos

### `scheduleThisClass(String cron)`
- Agenda a execuÃ§Ã£o da classe usando uma expressÃ£o CRON. Se o parÃ¢metro for nulo, usa uma programaÃ§Ã£o padrÃ£o para rodar diariamente Ã  meia-noite.
- **Leiga:** Programa a verificaÃ§Ã£o automÃ¡tica do status dos envelopes no horÃ¡rio desejado.

### `execute(SchedulableContext param1)`
- Executa o batch de processamento quando chamado por um job agendado.
- **Leiga:** Inicia a verificaÃ§Ã£o dos envelopes em lote.

### `runEveryNMinutes(Integer each)`
- Agenda execuÃ§Ãµes periÃ³dicas a cada `each` minutos, ao longo de uma hora.
- **Leiga:** Programar verificaÃ§Ãµes a cada poucos minutos, por exemplo, a cada 15 minutos.

### `runEveryNMinutesInBusinessHours(Integer each)`
- Agenda verificaÃ§Ãµes a cada `each` minutos, mas somente durante o horÃ¡rio comercial (entre 9h e 20h).
- **Leiga:** Limita as verificaÃ§Ãµes para o horÃ¡rio de trabalho, evitando rodar Ã  noite ou madrugada.

### `cancelThisSchedule()`
- Cancela todos os jobs agendados cujo nome contenha "DW_DocusignGetStatusSignBatch".
- **Leiga:** Para todas as verificaÃ§Ãµes automÃ¡ticas programadas anteriormente.

### `start(Database.BatchableContext param1)`
- Define quais registros serÃ£o processados no batch: envelopes com status "Enviado".
- **Leiga:** Seleciona os envelopes que ainda estÃ£o aguardando assinatura.

### `execute(Database.BatchableContext param1, List<DWEnvelopeDocusign__c> envelopeList)`
- Para cada envelope enviado, realiza a autenticaÃ§Ã£o na API do DocuSign, verifica o status, e se concluÃ­do, recupera e armazena o documento assinado.
- **Leiga:** Para cada envelope enviado, verifica se a assinatura foi concluÃ­da e, se sim, salva o documento assinado no Salesforce.

### `finish(Database.BatchableContext param1)`
- MÃ©todo de finalizaÃ§Ã£o do batch, nÃ£o utilizado nesta implementaÃ§Ã£o.
- **Leiga:** NÃ£o faz nada apÃ³s o processamento em lote.

---

## VariÃ¡veis e Componentes

### VariÃ¡veis internas e objetos utilizados
- **`accessToken`**: Token de autenticaÃ§Ã£o obtido na API do DocuSign, usado para autorizar as requisiÃ§Ãµes.
- **`envelope`**: Registro de envelope enviado, contendo informaÃ§Ãµes como ID, status, nomes, e relacionamentos.
- **`request` e `requestDoc`**: Objetos que representam as requisiÃ§Ãµes HTTP feitas Ã s APIs do DocuSign para obter o status do envelope e o documento assinado, respectivamente.
- **`response`**: Objeto que armazena a resposta da API do DocuSign com o status do envelope.
- **`base64`**: String codificada em base64 que representa o documento assinado, recuperada da API do DocuSign.
- **`pdfBlob`**: BinÃ¡rio do documento PDF decodificado a partir do base64, pronto para ser armazenado no Salesforce.
- **`ContentVersion`**: Objeto que representa uma versÃ£o de conteÃºdo (arquivo), neste caso, o documento assinado.
- **`ContentDocumentLink`**: Objeto que faz a ligaÃ§Ã£o entre o documento armazenado e outros registros do Salesforce, como envelopes, termos ou oportunidades.

### Resumo tÃ©cnico
- A classe realiza agendamentos e execuÃ§Ãµes em lote para verificar o status de envelopes enviados via DocuSign.
- Para cada envelope, ela autentica na API do DocuSign, verifica se a assinatura foi concluÃ­da, e se sim, recupera o documento assinado.
- O documento assinado Ã© armazenado como uma versÃ£o de conteÃºdo no Salesforce e vinculado ao envelope, termo ou oportunidade relacionados.
- Permite agendar verificaÃ§Ãµes periÃ³dicas, limitar execuÃ§Ãµes ao horÃ¡rio comercial, e cancelar agendamentos quando necessÃ¡rio.

---

## Resumo leigo
Esta classe automatiza a checagem do status de assinaturas eletrÃ´nicas enviadas pelo DocuSign. Quando uma assinatura Ã© concluÃ­da, ela salva o documento assinado no Salesforce e o vincula ao registro correspondente, garantindo que tudo esteja atualizado sem intervenÃ§Ã£o manual. AlÃ©m disso, oferece opÃ§Ãµes para agendar essas verificaÃ§Ãµes em horÃ¡rios especÃ­ficos ou intervalos de minutos, facilitando a gestÃ£o do processo de assinatura eletrÃ´nica.

Classe: DW_GetRecordCallBatch

DescriÃ§Ã£o
A classe `DW_GetRecordCallBatch` Ã© responsÃ¡vel por buscar gravaÃ§Ãµes de chamadas telefÃ´nicas feitas a partir do Salesforce, integrando-se ao sistema NextIP. Ela pode ser executada como um batch (processamento em lote) ou como uma tarefa agendada, garantindo que as gravaÃ§Ãµes estejam disponÃ­veis e vinculadas Ã s tarefas correspondentes. AlÃ©m disso, gerencia sessÃµes de conexÃ£o com o sistema NextIP, realiza chamadas HTTP para obter as gravaÃ§Ãµes e atualiza os registros de tarefas com os links das gravaÃ§Ãµes.

MÃ©todos
`execute(SchedulableContext param1)`
- Executa o batch imediatamente, geralmente chamado por uma rotina agendada.
- ParÃ¢metro: `param1` (SchedulableContext): contexto da execuÃ§Ã£o agendada.
- Retorno: Nenhum.

`scheduleThisClass(String cron)`
- Agenda a execuÃ§Ã£o desta classe com uma expressÃ£o CRON personalizada.
- ParÃ¢metro: `cron` (String): expressÃ£o CRON que define o horÃ¡rio de execuÃ§Ã£o.
- Retorno: Nenhum.

`runEveryNMinutes(Integer each)`
- Agenda a execuÃ§Ã£o periÃ³dica a cada N minutos.
- ParÃ¢metro: `each` (Integer): nÃºmero de minutos entre cada execuÃ§Ã£o.
- Retorno: Nenhum.

`cancelThisSchedule()`
- Cancela todas as execuÃ§Ãµes agendadas desta classe.
- ParÃ¢metro: Nenhum.
- Retorno: Nenhum.

`start(Database.BatchableContext param1)`
- Define o conjunto de registros que serÃ£o processados pelo batch.
- ParÃ¢metro: `param1` (Database.BatchableContext): contexto do batch.
- Retorno: Uma lista de tarefas do tipo "LigaÃ§Ã£o" que possuem `NextIpId__c` preenchido, mas ainda nÃ£o tÃªm gravaÃ§Ã£o salva.

`execute(Database.BatchableContext info, List<Task> taskList)`
- Processa um lote de tarefas, realizando o callout para obter a gravaÃ§Ã£o da ligaÃ§Ã£o.
- ParÃ¢metros:
  - `info` (Database.BatchableContext): contexto do batch.
  - `taskList` (List<Task>): lista de tarefas a serem processadas.
- Retorno: Nenhum, mas atualiza as tarefas com o link da gravaÃ§Ã£o se encontrado.

`finish(Database.BatchableContext info)`
- MÃ©todo final do batch, chamado apÃ³s o processamento de todos os registros.
- ParÃ¢metro: `info` (Database.BatchableContext): contexto do batch.
- Retorno: Nenhum.

`getIPCredential()`
- Busca as credenciais de integraÃ§Ã£o com o sistema NextIP com base na loja do usuÃ¡rio atual.
- ParÃ¢metro: Nenhum.
- Retorno: Registro do metadata `DWNextIPCTI__mdt` contendo as credenciais de conexÃ£o.

`callInitSessionAndLogin(User user, Boolean expirouSessao)`
- Inicia uma nova sessÃ£o com o sistema NextIP ou reutiliza uma existente.
- ParÃ¢metros:
  - `user` (User): usuÃ¡rio que estÃ¡ executando o processo.
  - `expirouSessao` (Boolean): indica se a sessÃ£o deve ser forÃ§ada a expirar.
- Retorno: Objeto `SessaoCTI__c` com o ID da sessÃ£o ativa.

VariÃ¡veis
`HttpRequest request`
- Tipo: `HttpRequest`.
- DescriÃ§Ã£o: Objeto utilizado para montar e enviar requisiÃ§Ãµes HTTP ao sistema NextIP.

`HttpResponse response`
- Tipo: `HttpResponse`.
- DescriÃ§Ã£o: Resposta recebida apÃ³s enviar a requisiÃ§Ã£o HTTP, contendo o corpo da resposta.

`String urlGetCall`
- Tipo: `String`.
- DescriÃ§Ã£o: URL construÃ­da para solicitar a gravaÃ§Ã£o da ligaÃ§Ã£o no sistema NextIP, incluindo sessÃ£o e ID da ligaÃ§Ã£o.

`String audio`
- Tipo: `String`.
- DescriÃ§Ã£o: Armazena o nome do arquivo de Ã¡udio da gravaÃ§Ã£o obtida na resposta da API.

`SessaoCTI__c sessao`
- Tipo: `SessaoCTI__c`.
- DescriÃ§Ã£o: Objeto que representa a sessÃ£o ativa com o sistema NextIP, utilizado para realizar chamadas subsequentes.

`DWNextIPCTI__mdt nextIPCredential`
- Tipo: `DWNextIPCTI__mdt`.
- DescriÃ§Ã£o: Credenciais de conexÃ£o com o sistema NextIP, incluindo URL, usuÃ¡rio e senha.

`User user`
- Tipo: `User`.
- DescriÃ§Ã£o: UsuÃ¡rio que estÃ¡ executando o processo, utilizado para determinar credenciais e sessÃµes.

`List<Dom.XMLNode> nodes`
- Tipo: `List<Dom.XMLNode>`.
- DescriÃ§Ã£o: Lista de nÃ³s XML utilizados para extrair informaÃ§Ãµes da resposta da API.

Leve em consideraÃ§Ã£o que a classe gerencia sessÃµes, realiza chamadas HTTP para obter gravaÃ§Ãµes de chamadas telefÃ´nicas, atualiza tarefas com links de gravaÃ§Ãµes e oferece mÃ©todos para agendar, cancelar e executar o processo de forma automatizada.

# Classe: DW_DocusignGetStatusDestinatarioBatch

## DescriÃ§Ã£o
A classe `DW_DocusignGetStatusDestinatarioBatch` Ã© uma implementaÃ§Ã£o de um batch job no Salesforce que consulta periodicamente o status dos signatÃ¡rios de documentos enviados via DocuSign. Ela atualiza os registros do Salesforce com o status atual de assinatura, garantindo que as informaÃ§Ãµes estejam sincronizadas com o DocuSign. AlÃ©m disso, ela permite agendar, executar e cancelar tarefas de verificaÃ§Ã£o de status de forma automatizada.

---

## MÃ©todos

### `scheduleThisClass(String cron)`
- **DescriÃ§Ã£o:** Agenda a execuÃ§Ã£o do batch usando uma expressÃ£o CRON personalizada ou uma padrÃ£o (hora cheia). Se o parÃ¢metro `cron` for nulo, usa uma expressÃ£o padrÃ£o para executar a cada hora.
- **ParÃ¢metros:** 
  - `cron` (String): expressÃ£o CRON que define o horÃ¡rio de execuÃ§Ã£o.
- **Retorno:** Nenhum.

### `execute(SchedulableContext param1)`
- **DescriÃ§Ã£o:** MÃ©todo chamado quando a classe Ã© agendada como `Schedulable`. Ele inicia a execuÃ§Ã£o do batch com tamanho de lote 1.
- **ParÃ¢metros:** 
  - `param1` (SchedulableContext): contexto de execuÃ§Ã£o do agendamento.
- **Retorno:** Nenhum.

### `runEveryNMinutes(Integer each)`
- **DescriÃ§Ã£o:** Agenda execuÃ§Ãµes do batch a cada N minutos, durante 24 horas do dia.
- **ParÃ¢metros:** 
  - `each` (Integer): intervalo de minutos entre cada execuÃ§Ã£o.
- **Retorno:** Nenhum.

### `runEveryNMinutesInBusinessHours(Integer each)`
- **DescriÃ§Ã£o:** Agenda execuÃ§Ãµes a cada N minutos, somente durante o horÃ¡rio comercial (das 9h Ã s 19h). Ignora execuÃ§Ãµes durante a noite e finais de semana.
- **ParÃ¢metros:** 
  - `each` (Integer): intervalo de minutos entre cada execuÃ§Ã£o.
- **Retorno:** Nenhum.

### `cancelThisSchedule()`
- **DescriÃ§Ã£o:** Cancela todas as execuÃ§Ãµes agendadas relacionadas a esta classe, identificadas pelo nome no cron.
- **ParÃ¢metros:** Nenhum.
- **Retorno:** Nenhum.

### `start(Database.BatchableContext param1)`
- **DescriÃ§Ã£o:** Define os registros de entrada para o batch. Seleciona os envelopes do DocuSign que foram enviados (`Enviado`) e ainda nÃ£o tiveram o status atualizado.
- **ParÃ¢metros:** 
  - `param1` (Database.BatchableContext): contexto do batch.
- **Retorno:** Uma coleÃ§Ã£o iterÃ¡vel de registros `SObject` (no caso, envelopes).

### `execute(Database.BatchableContext param1, List<DWEnvelopeDocusign__c> envelopeList)`
- **DescriÃ§Ã£o:** Processa cada envelope enviado, buscando os signatÃ¡rios associados, fazendo uma requisiÃ§Ã£o Ã  API do DocuSign para obter o status atual, e atualizando os registros de signatÃ¡rios no Salesforce com as informaÃ§Ãµes recebidas.
- **ParÃ¢metros:** 
  - `param1` (Database.BatchableContext): contexto do batch.
  - `envelopeList` (List<DWEnvelopeDocusign__c>): lista de envelopes a serem processados.
- **Retorno:** Nenhum, realiza atualizaÃ§Ãµes no banco de dados.

### `finish(Database.BatchableContext param1)`
- **DescriÃ§Ã£o:** MÃ©todo chamado ao final de toda a execuÃ§Ã£o do batch. Pode ser usado para tarefas finais, como logs ou envios de e-mails. No momento, estÃ¡ vazio.
- **ParÃ¢metros:** 
  - `param1` (Database.BatchableContext): contexto do batch.
- **Retorno:** Nenhum.

---

## VariÃ¡veis e Componentes Internos

### VariÃ¡veis e objetos utilizados na classe
- **`DWEnvelopeDocusign__c`**
  - Tipo: `SObject`
  - DescriÃ§Ã£o: Registros que representam os envelopes enviados pelo DocuSign. SÃ£o filtrados para incluir apenas os que estÃ£o com status "Enviado".

- **`DWSignatarioDocusign__c`**
  - Tipo: `SObject`
  - DescriÃ§Ã£o: Registros que representam os signatÃ¡rios de um envelope. SÃ£o atualizados com o status retornado pela API do DocuSign.

- **`DW_DocusignGetAccessTokenIntegrable`**
  - Tipo: Classe personalizada
  - DescriÃ§Ã£o: ResponsÃ¡vel por obter o token de acesso necessÃ¡rio para autenticaÃ§Ã£o na API do DocuSign.

- **`DW_RequestFactory`**
  - Tipo: Classe personalizada
  - DescriÃ§Ã£o: Utilizada para montar e enviar requisiÃ§Ãµes HTTP Ã  API do DocuSign.

- **`itemsResponse`**
  - Tipo: Lista de objetos de resposta
  - DescriÃ§Ã£o: ContÃ©m os dados deserializados da resposta da API, incluindo o email do signatÃ¡rio e seu status.

---

## Resumo tÃ©cnico e leigo
- **TÃ©cnico:** Esta classe gerencia a consulta periÃ³dica do status de assinatura de documentos enviados via DocuSign, usando batch jobs agendados e chamadas HTTP autenticadas. Ela busca os signatÃ¡rios de envelopes enviados, faz requisiÃ§Ãµes Ã  API do DocuSign para verificar o status de assinatura, e atualiza os registros no Salesforce com essas informaÃ§Ãµes.
- **Leigo:** Essa classe funciona como um robÃ´ que verifica, a cada hora ou a cada poucos minutos, se as pessoas assinaram os documentos enviados pelo DocuSign, e atualiza o sistema com o status mais recente. Ela tambÃ©m pode ser programada para rodar em horÃ¡rios especÃ­ficos ou parar de rodar quando necessÃ¡rio.

Classe: DWStoreUserAvailabilityController

DescriÃ§Ã£o
A classe `DWStoreUserAvailabilityController` Ã© responsÃ¡vel por gerenciar diversas operaÃ§Ãµes relacionadas a usuÃ¡rios, grupos, eventos e perfis de qualificaÃ§Ã£o no Salesforce. Ela fornece mÃ©todos acessÃ­veis via Aura para recuperar informaÃ§Ãµes de membros de equipe, grupos, eventos, perfis de qualificaÃ§Ã£o, alÃ©m de criar, atualizar e excluir registros de eventos e grupos.

MÃ©todos
`getAccountTeamMember()`
- Recupera os membros da equipe de uma conta que possuem o papel de "Gerente".
- Retorna uma lista de membros da equipe com detalhes como ID, UserId, AccountId, papel na equipe e nome da conta.
- LanÃ§a uma exceÃ§Ã£o se ocorrer algum erro na consulta.

`getGroups(String accountId)`
- Busca os grupos associados a uma conta especÃ­fica, usando o cÃ³digo da loja da conta.
- Retorna uma lista de grupos do tipo fila (Queue) cujo nome de desenvolvedor contÃ©m o cÃ³digo da loja.
- LanÃ§a uma exceÃ§Ã£o se ocorrer algum erro na consulta.

`getGroupMembers(String accountId, String profileName)`
- Recupera os usuÃ¡rios que sÃ£o membros de um grupo associado Ã  conta, podendo filtrar por perfil.
- Retorna uma lista de usuÃ¡rios com detalhes como nome, sobrenome, status de indisponibilidade e perfil.
- LanÃ§a uma exceÃ§Ã£o se ocorrer algum erro na consulta.

`getGroupMembersByQueueId(String accountId, String queueId)`
- ObtÃ©m os membros de uma fila especÃ­fica e os usuÃ¡rios associados Ã  conta.
- Retorna um mapa contendo os membros do grupo, os usuÃ¡rios da conta e o nome do perfil (SDR ou Closer) baseado no nome do grupo.
- LanÃ§a uma exceÃ§Ã£o se ocorrer algum erro na consulta.

`getEvents(String userId, String startDate, String endDate)`
- Recupera eventos de um usuÃ¡rio em um intervalo de datas.
- Retorna uma lista de eventos com detalhes como assunto, inÃ­cio, fim e proprietÃ¡rio.
- LanÃ§a uma exceÃ§Ã£o se ocorrer algum erro na consulta.

`getProfilesByStore(String accountId, String type)`
- Busca perfis de qualificaÃ§Ã£o associados a uma loja especÃ­fica, filtrando pelo tipo.
- Retorna uma lista de perfis de qualificaÃ§Ã£o vinculados Ã s filas relacionadas Ã  loja.
- LanÃ§a uma exceÃ§Ã£o se ocorrer algum erro na consulta.

`getRecordsToTranfer(String accountId, String type, Integer page, String ownerId)`
- Recupera registros de um determinado tipo (como oportunidades ou outros objetos) para transferÃªncia, com paginaÃ§Ã£o.
- Retorna um mapa contendo a lista de registros e a quantidade total de registros.
- LanÃ§a uma exceÃ§Ã£o se ocorrer algum erro na consulta.

`updateRecords(List<SObject> records)`
- Atualiza uma lista de registros no Salesforce.
- LanÃ§a uma exceÃ§Ã£o se ocorrer algum erro na atualizaÃ§Ã£o.

`resetGroupMembers(String queueId, List<String> userIds)`
- Reseta os membros de uma fila, excluindo os atuais e adicionando novos membros.
- LanÃ§a uma exceÃ§Ã£o se ocorrer algum erro na operaÃ§Ã£o.

`createQueueWithProfile(String accountId, String objectName, String queueName)`
- Cria uma nova fila (grupo) associada a um perfil de qualificaÃ§Ã£o.
- Gera um nome de desenvolvedor Ãºnico, insere a fila, associa um perfil e retorna o ID da fila com uma mensagem de sucesso.
- LanÃ§a uma exceÃ§Ã£o se ocorrer algum erro na criaÃ§Ã£o ou associaÃ§Ã£o.

`getQueueDeveloperName(String accountId, String objectName, String queueName)`
- Gera um nome de desenvolvedor Ãºnico para uma fila, verificando se jÃ¡ existe uma fila com o mesmo nome.
- LanÃ§a uma exceÃ§Ã£o se uma fila com o mesmo nome jÃ¡ existir.

`upsertProfileToQueue(Id queueId, String queueName, String objectName)`
- Insere ou atualiza o perfil de qualificaÃ§Ã£o associado a uma fila.
- Executa de forma assÃ­ncrona para evitar bloqueios na operaÃ§Ã£o principal.

`getPicklistValues(String objectName, String fieldName)`
- Recupera os valores de uma lista de seleÃ§Ã£o (picklist) de um campo de um objeto.
- Retorna uma lista de mapas contendo o rÃ³tulo e o valor de cada opÃ§Ã£o ativa.
- LanÃ§a uma exceÃ§Ã£o se ocorrer algum erro na consulta.

`createEvent(Event recordEvent)`
- Cria ou atualiza um evento no Salesforce.
- Retorna o ID do evento criado.
- LanÃ§a uma exceÃ§Ã£o se ocorrer algum erro na operaÃ§Ã£o.

`deleteEvent(Id eventId)`
- Exclui um evento especÃ­fico pelo seu ID.
- LanÃ§a uma exceÃ§Ã£o se ocorrer algum erro na exclusÃ£o.

Leiga
A classe `DWStoreUserAvailabilityController` Ã© como um gerente que ajuda a organizar e buscar informaÃ§Ãµes sobre membros de equipes, grupos, eventos e perfis dentro do Salesforce. Ela permite criar, editar e excluir eventos, montar grupos de trabalho, verificar quem estÃ¡ disponÃ­vel ou indisponÃ­vel, e garantir que tudo esteja organizado de forma eficiente para facilitar o trabalho dos usuÃ¡rios.

Classe: DW_RequestFactory

DescriÃ§Ã£o
A classe `DW_RequestFactory` Ã© responsÃ¡vel por criar, configurar e enviar requisiÃ§Ãµes HTTP para endpoints externos. Ela tambÃ©m gerencia o registro de logs relacionados Ã s requisiÃ§Ãµes feitas, incluindo detalhes como cabeÃ§alhos, corpo da requisiÃ§Ã£o, resposta recebida e status da operaÃ§Ã£o.

---

MÃ©todos
`saveLogAsync(String jsonLog)`
- MÃ©todo assÃ­ncrono que deveria salvar um log de requisiÃ§Ã£o de forma assÃ­ncrona, recebendo uma string JSON representando o log. Atualmente, estÃ¡ comentado e nÃ£o realiza a operaÃ§Ã£o.

`getResponse()`
- Retorna a resposta HTTP recebida apÃ³s uma requisiÃ§Ã£o.
- Retorno: `HttpResponse`.

`getRequest()`
- Retorna a requisiÃ§Ã£o HTTP que estÃ¡ sendo configurada.
- Retorno: `HttpRequest`.

`getLog()`
- Retorna o objeto de log (`HttpRequestLog__c`) que contÃ©m detalhes da requisiÃ§Ã£o.
- Retorno: `HttpRequestLog__c`.

`saveLogAsync()`
- MÃ©todo que deveria salvar o log de forma assÃ­ncrona, mas atualmente estÃ¡ comentado. Retorna a prÃ³pria instÃ¢ncia para permitir chamadas encadeadas.

`constructEndpoint()`
- ConstrÃ³i a URL completa do endpoint, incluindo os parÃ¢metros de consulta (query parameters), codificados para URL.

`constructHeaders()`
- Configura os cabeÃ§alhos HTTP na requisiÃ§Ã£o com base no mapa de cabeÃ§alhos definido.

`constructLogBeforeSend()`
- Prepara o objeto de log antes de enviar a requisiÃ§Ã£o, armazenando detalhes como endpoint, cabeÃ§alhos, mÃ©todo e corpo da requisiÃ§Ã£o.

`constructLogAfterSend()`
- Atualiza o log apÃ³s o envio da requisiÃ§Ã£o, incluindo o corpo da resposta e o cÃ³digo de status HTTP.

`send()`
- Envia a requisiÃ§Ã£o HTTP configurada.
- Prepara o endpoint, cabeÃ§alhos e log antes do envio.
- Trata exceÃ§Ãµes que possam ocorrer durante o envio, registrando detalhes do erro.
- Retorna a prÃ³pria instÃ¢ncia para chamadas encadeadas.

`makeGet(String baseEndPoint)`
- Cria uma instÃ¢ncia de `DW_RequestFactory` configurada para uma requisiÃ§Ã£o GET.
- ParÃ¢metro: `baseEndPoint` (String): URL base do endpoint.

`makePost(String baseEndPoint)`
- Cria uma instÃ¢ncia de `DW_RequestFactory` configurada para uma requisiÃ§Ã£o POST.
- ParÃ¢metro: `baseEndPoint` (String).

`makeDelete(String baseEndPoint)`
- Cria uma instÃ¢ncia de `DW_RequestFactory` configurada para uma requisiÃ§Ã£o DELETE.
- ParÃ¢metro: `baseEndPoint` (String).

`makePatch(String baseEndPoint)`
- Cria uma instÃ¢ncia de `DW_RequestFactory` configurada para uma requisiÃ§Ã£o PATCH.
- ParÃ¢metro: `baseEndPoint` (String).

`setQueryParameters(Map<String, String> queryParameterMap)`
- Define mÃºltiplos parÃ¢metros de consulta na requisiÃ§Ã£o.
- ParÃ¢metro: `queryParameterMap` (Map): mapa de chaves e valores dos parÃ¢metros.

`addQueryParameter(String key, String value)`
- Adiciona um parÃ¢metro de consulta individual.
- ParÃ¢metros: `key` (String), `value` (String).

`setHeaders(Map<String, String> headerMap)`
- Define mÃºltiplos cabeÃ§alhos HTTP.
- ParÃ¢metro: `headerMap` (Map).

`addHeader(String key, String value)`
- Adiciona um cabeÃ§alho HTTP individual.
- ParÃ¢metros: `key` (String), `value` (String).

`setBody(String body)`
- Define o corpo da requisiÃ§Ã£o como uma string.
- ParÃ¢metro: `body` (String).

`setBodyAsBlob(Blob body)`
- Define o corpo da requisiÃ§Ã£o como um Blob (dados binÃ¡rios).
- Atualiza o campo `contentLength` com o tamanho do Blob.

---

VariÃ¡veis
`baseEndPoint`
- Tipo: `String`
- DescriÃ§Ã£o: URL base do endpoint para onde a requisiÃ§Ã£o serÃ¡ enviada.

`fullEndPoint`
- Tipo: `String`
- DescriÃ§Ã£o: URL completa do endpoint, incluindo os parÃ¢metros de consulta.

`contentLength`
- Tipo: `String`
- DescriÃ§Ã£o: Armazena o tamanho do corpo da requisiÃ§Ã£o quando enviado como Blob.

`httpRequest`
- Tipo: `HttpRequest`
- DescriÃ§Ã£o: Objeto que representa a requisiÃ§Ã£o HTTP a ser enviada, incluindo mÃ©todo, cabeÃ§alhos, corpo e endpoint.

`queryParameterMap`
- Tipo: `Map<String, String>`
- DescriÃ§Ã£o: Mapa que armazena os parÃ¢metros de consulta (query parameters) a serem adicionados na URL.

`headerMap`
- Tipo: `Map<String, String>`
- DescriÃ§Ã£o: Mapa que armazena os cabeÃ§alhos HTTP a serem enviados na requisiÃ§Ã£o.

`httpResponse`
- Tipo: `HttpResponse`
- DescriÃ§Ã£o: Objeto que armazena a resposta recebida apÃ³s o envio da requisiÃ§Ã£o.

`log`
- Tipo: `HttpRequestLog__c`
- DescriÃ§Ã£o: Objeto personalizado que registra detalhes da requisiÃ§Ã£o e resposta para fins de auditoria ou depuraÃ§Ã£o.

Classe: APILeadCreateOrUpdateTest

DescriÃ§Ã£o
A classe `APILeadCreateOrUpdateTest` Ã© uma classe de testes no Salesforce que valida diferentes cenÃ¡rios relacionados Ã  criaÃ§Ã£o ou atualizaÃ§Ã£o de leads atravÃ©s de uma API. Ela garante que a funcionalidade de integraÃ§Ã£o com a API esteja funcionando corretamente, verificando respostas, cÃ³digos de status e o comportamento esperado em diferentes condiÃ§Ãµes.

MÃ©todos
`setup()`
- MÃ©todo de configuraÃ§Ã£o inicial que insere um registro de DDD vÃ¡lido para os testes.
- VariÃ¡vel: `ddd` (DDDValido__c): armazena o DDD vÃ¡lido para uso nos testes.

`setRequest(String pRequestBody)`
- Configura uma requisiÃ§Ã£o REST simulada com o corpo passado como parÃ¢metro.
- ParÃ¢metro: `pRequestBody` (String): corpo da requisiÃ§Ã£o JSON.
- NÃ£o retorna valor, apenas prepara o contexto de requisiÃ§Ã£o para os testes.

`leadInsertValidateStore()`
- Testa a tentativa de inserir um lead sem informar a loja (storeDocument vazia).
- Verifica se a API responde com uma mensagem de erro solicitando a loja e com cÃ³digo de status 400.

`leadInsertValidateStoreNotFound()`
- Testa a inserÃ§Ã£o de lead com uma loja que nÃ£o existe.
- Verifica se a API responde com uma mensagem de loja nÃ£o encontrada e com cÃ³digo de status 404.

`leadInsertAlreadyHasVeiculo()`
- Testa a inserÃ§Ã£o de lead quando o lead jÃ¡ possui um veÃ­culo de interesse associado.
- Verifica se a API responde com sucesso na criaÃ§Ã£o ou atualizaÃ§Ã£o do lead.

`leadInsertLeadExistAssetNotFound()`
- Testa a inserÃ§Ã£o de lead quando o ativo (veÃ­culo) nÃ£o Ã© encontrado (placa invÃ¡lida).
- Verifica se a API responde com uma mensagem de erro relacionada Ã  ausÃªncia de ativo e com cÃ³digo de status 200.

`leadInsertLeadAndOpportunityNotExist()`
- Testa a criaÃ§Ã£o de lead e oportunidade quando ambos nÃ£o existem.
- Verifica se o lead foi criado e se a resposta da API indica sucesso com cÃ³digo 200.

`leadInsertLeadAndOpportunityNotExistAssetNotFound()`
- Testa a criaÃ§Ã£o de lead quando o ativo nÃ£o Ã© encontrado.
- Verifica se a API responde com mensagem de erro e se uma oportunidade foi criada.

`leadInsertOpportunityBackofficeStage()`
- Testa a inserÃ§Ã£o de lead com oportunidade na fase de backoffice.
- Verifica se a API responde com sucesso e se uma nova oportunidade foi criada na fase esperada.

`leadInsertComOpp()`
- Testa a criaÃ§Ã£o de lead com uma oportunidade jÃ¡ existente.
- Verifica se a API responde com sucesso na criaÃ§Ã£o ou atualizaÃ§Ã£o do lead.

`leadInsertLeadExist()`
- Testa a inserÃ§Ã£o de lead quando o lead jÃ¡ existe.
- Verifica se a API responde com sucesso na atualizaÃ§Ã£o do lead.

`leadInsertLeadExistencia()`
- Testa a inserÃ§Ã£o de lead quando o lead jÃ¡ existe na base.
- Verifica se a resposta indica sucesso e se o lead foi atualizado corretamente.

VariÃ¡veis
`requestBody`
- Tipo: `String`
- DescriÃ§Ã£o: Corpo da requisiÃ§Ã£o JSON enviado para a API, contendo informaÃ§Ãµes do lead, veÃ­culo, loja, entre outros dados.

`logToValidate`
- Tipo: `HttpRequestLog__c`
- DescriÃ§Ã£o: Registro de log de requisiÃ§Ã£o HTTP que armazena a resposta da API, incluindo o corpo da resposta e o cÃ³digo de status, utilizado para validaÃ§Ãµes nos testes.

`leadEmail`, `leadPhone`
- Tipo: `String`
- DescriÃ§Ã£o: Dados de contato do lead utilizados nos testes para identificar e validar a criaÃ§Ã£o ou atualizaÃ§Ã£o do lead.

`assetPlaca`
- Tipo: `String`
- DescriÃ§Ã£o: Placa do veÃ­culo de interesse, usada para relacionar o lead ao ativo correspondente.

`assetToTest`
- Tipo: `Asset`
- DescriÃ§Ã£o: Registro de ativo (veÃ­culo) criado para os testes, utilizado para verificar comportamentos relacionados a veÃ­culos de interesse.

`midia`
- Tipo: `Midia__c`
- DescriÃ§Ã£o: Registro de mÃ­dia associado Ã  loja, utilizado para relacionar o lead Ã  mÃ­dia de origem.

`accountLojaToInsert`, `accountToInsert`
- Tipo: `Account`
- DescriÃ§Ã£o: Conta de loja e conta de cliente criadas nos testes para simular cenÃ¡rios de relacionamento com leads e ativos.

`opportunityTest`
- Tipo: `Opportunity`
- DescriÃ§Ã£o: Oportunidade criada nos testes para verificar comportamentos em diferentes fases do pipeline de vendas.

`product2Veiculo`, `product2Transferencia`
- Tipo: `Product2`
- DescriÃ§Ã£o: Produtos utilizados para criar linhas de oportunidade e relacionar veÃ­culos e serviÃ§os.

`pricebookEntryVeiculo`, `pricebookEntryTransferencia`
- Tipo: `PricebookEntry`
- DescriÃ§Ã£o: Entradas de tabela de preÃ§o para os produtos, necessÃ¡rias para criar linhas de oportunidade.

`opportunityLineItemVeiculoToInsert`
- Tipo: `OpportunityLineItem`
- DescriÃ§Ã£o: Item de oportunidade que relaciona o veÃ­culo Ã  oportunidade.

`HttpRequestLog__c`
- Tipo: Objeto personalizado que armazena logs de requisiÃ§Ãµes HTTP, incluindo resposta e status, utilizado para validaÃ§Ãµes nos testes.

Este documento fornece uma visÃ£o tÃ©cnica e acessÃ­vel da classe de testes, explicando suas funcionalidades, mÃ©todos e variÃ¡veis principais.

Classe: DW_ScheduleEventByQueueAvailability

DescriÃ§Ã£o
A classe `DW_ScheduleEventByQueueAvailability` Ã© responsÃ¡vel por gerenciar agendamentos de eventos relacionados a filas (queues) e usuÃ¡rios no Salesforce. Ela fornece mÃ©todos para obter informaÃ§Ãµes sobre grupos de filas, verificar disponibilidade de horÃ¡rios, inserir novos eventos e obter detalhes de oportunidades, alÃ©m de auxiliar no cÃ¡lculo de datas e percentuais de horÃ¡rios.

MÃ©todos
`getGroupsTypeQueue()`
- Retorna uma lista de filas (queues) disponÃ­veis no sistema.
- Processo: Consulta os grupos do tipo 'Queue' e serializa a lista em JSON.
- Leiga: Pega todas as filas criadas no sistema e transforma em um formato que pode ser usado em interfaces ou outros sistemas.

`getAvailableScheduleGridByQueue(recordId, referenceDay, startDayHour, endDayHour)`
- Retorna uma grade de horÃ¡rios disponÃ­veis para uma fila ou usuÃ¡rio em uma semana.
- ParÃ¢metros:
  - `recordId`: ID do registro relacionado (pode ser lead, oportunidade, etc.).
  - `referenceDay`: Data de referÃªncia para calcular a semana.
  - `startDayHour`: Hora de inÃ­cio do perÃ­odo de interesse.
  - `endDayHour`: Hora de fim do perÃ­odo.
- Processo: Calcula os dias da semana, busca eventos existentes, e organiza os horÃ¡rios ocupados em uma estrutura serializada.
- Leiga: Verifica quais horÃ¡rios estÃ£o livres ou ocupados na semana, considerando uma fila ou usuÃ¡rio especÃ­fico.

`getOpportunity(oppId)`
- Retorna uma oportunidade pelo ID.
- Processo: Consulta a oportunidade no banco de dados.
- Leiga: Pega os detalhes de uma oportunidade especÃ­fica.

`collectDaysOfMonth(firstDayOfWeek)`
- Gera um mapa com os dias da semana a partir do primeiro dia da semana.
- Processo: Para cada dia, formata a data e armazena no mapa.
- Leiga: Cria uma lista de dias da semana para exibir ou usar em cÃ¡lculos.

`collectStartPercentual(startEventDayHour, startDayHour, endDayHour)`
- Calcula a porcentagem do horÃ¡rio de inÃ­cio de um evento em relaÃ§Ã£o ao perÃ­odo diÃ¡rio.
- Processo: Compara o horÃ¡rio de inÃ­cio do evento com o perÃ­odo de trabalho.
- Leiga: Descobre quanto do dia de trabalho o evento ocupa, em porcentagem.

`getFirstDayOfWeek(referenceDay)`
- Retorna o primeiro dia da semana (normalmente domingo ou segunda) baseado na data de referÃªncia.
- Processo: Ajusta a data para o inÃ­cio da semana.
- Leiga: Encontra o primeiro dia da semana para facilitar cÃ¡lculos semanais.

`getActionCadenceStepComments(targetId)`
- Retorna comentÃ¡rios de um passo de aÃ§Ã£o de um ciclo de aÃ§Ãµes.
- Processo: (Comentado) deveria buscar registros relacionados e retornar comentÃ¡rios.
- Leiga: Atualmente, sÃ³ retorna "ok", mas deveria pegar comentÃ¡rios de uma etapa de aÃ§Ã£o.

`insertEvent(eventJson, queueOrUserId, eventCallLink)`
- Insere um novo evento no calendÃ¡rio.
- Processo: Desserializa o JSON do evento, verifica disponibilidade, atualiza registros relacionados, e insere o evento.
- Leiga: Cria um compromisso na agenda, verificando se a pessoa ou fila estÃ¡ disponÃ­vel antes de salvar.

`getAvailabilityQueueByTime(queueOrUserId, startDateTime, endDateTime)`
- Verifica a disponibilidade de uma fila ou usuÃ¡rio em um intervalo de tempo.
- Processo: Consulta eventos existentes nesse perÃ­odo e identifica quem estÃ¡ ocupado.
- Leiga: Descobre quem estÃ¡ ocupado ou livre na fila ou usuÃ¡rio em um horÃ¡rio especÃ­fico.

VariÃ¡veis
`queues`
- Tipo: `List<Group>`
- DescriÃ§Ã£o: Armazena a lista de grupos do tipo fila (queue) obtidos na consulta.

`response`
- Tipo: `List<Map<String, String>>`
- DescriÃ§Ã£o: Lista de mapas que representam filas, com informaÃ§Ãµes como label, valor, ID e nome.

`eventsGridResponse`
- Tipo: `Map<Integer, Map<String, List<Map<String, String>>>>`
- DescriÃ§Ã£o: Estrutura que organiza eventos por dia da semana e por proprietÃ¡rio (usuÃ¡rio ou fila).

`firstDayOfWeek`
- Tipo: `Date`
- DescriÃ§Ã£o: Primeira data da semana, calculada a partir da data de referÃªncia.

`eventGridMonthDays`
- Tipo: `Map<Integer, String>`
- DescriÃ§Ã£o: Mapa que relaciona dias do mÃªs com suas datas formatadas.

`startDay`, `next6days`
- Tipo: `Datetime`
- DescriÃ§Ã£o: Marca o inÃ­cio e o fim do perÃ­odo de uma semana para busca de eventos.

`minutesOfDay`
- Tipo: `Integer`
- DescriÃ§Ã£o: Quantidade de minutos considerados em um dia Ãºtil, baseado no horÃ¡rio de inÃ­cio e fim.

`userIds`, `busyUserIds`
- Tipo: `Set<Id>`
- DescriÃ§Ã£o: Conjuntos que armazenam IDs de usuÃ¡rios e usuÃ¡rios ocupados, respectivamente.

`users`
- Tipo: `List<User>`
- DescriÃ§Ã£o: Lista de usuÃ¡rios envolvidos na consulta, com seus IDs e nomes.

`eventsForDeterminedWeek`
- Tipo: `List<Event>`
- DescriÃ§Ã£o: Lista de eventos agendados na semana calculada, filtrados por proprietÃ¡rio e perÃ­odo.

`eventItem`
- Tipo: `Event`
- DescriÃ§Ã£o: Cada evento individual dentro da lista de eventos.

`queueOrUserId`
- Tipo: `String`
- DescriÃ§Ã£o: ID da fila ou usuÃ¡rio que estÃ¡ sendo avaliado.

`recordId`
- Tipo: `String`
- DescriÃ§Ã£o: ID do registro relacionado ao agendamento (lead, oportunidade, etc.).

`eventQuery`
- Tipo: `List<String>`
- DescriÃ§Ã£o: Lista de partes de consulta SQL para buscar eventos em perÃ­odos especÃ­ficos.

`eventQueryString`
- Tipo: `String`
- DescriÃ§Ã£o: String final da consulta SQL combinada.

`availabilityQueueByTime`
- Tipo: `DW_AvailabilityQueueByTime_Response`
- DescriÃ§Ã£o: Objeto que armazena informaÃ§Ãµes de disponibilidade de fila ou usuÃ¡rio em um perÃ­odo.

ObservaÃ§Ã£o: Algumas variÃ¡veis e trechos de cÃ³digo comentados indicam funcionalidades planejadas ou em desenvolvimento, como manipulaÃ§Ã£o de leads e filas especÃ­ficas.

Classe: DWVideoController

DescriÃ§Ã£o
A classe `DWVideoController` Ã© uma classe Apex que controla e fornece informaÃ§Ãµes relacionadas aos tours em vÃ­deo (ou tutoriais) dentro do Salesforce. Ela Ã© utilizada principalmente por componentes Lightning Web Components (LWC) para exibir menus de vÃ­deos interativos, ajudando os usuÃ¡rios a navegar por tutoriais e registrar seu progresso.

MÃ©todos
`getVideoActions(String objectApiName)`
- Retorna uma lista de aÃ§Ãµes de vÃ­deo configuradas para um objeto especÃ­fico do Salesforce, como Lead ou Opportunity.
- ParÃ¢metro: `objectApiName` (String) â€” Nome API do objeto Salesforce.
- Retorno: Uma lista de objetos `DWVideoActionWrapper`, que contÃ©m detalhes de cada aÃ§Ã£o de vÃ­deo (nome, URL, Ã­cone, ordem, etc).

`verifyIsCompletedTour(String objectName)`
- Verifica se o usuÃ¡rio atual jÃ¡ concluiu o tour de um determinado objeto.
- ParÃ¢metro: `objectName` (String) â€” Nome do objeto Salesforce.
- Retorno: Booleano (`true` se o usuÃ¡rio completou o tour, `false` caso contrÃ¡rio).

`registrarVisualizacao(String objectName, String chaveAcao)`
- Registra que o usuÃ¡rio concluiu a visualizaÃ§Ã£o de um tour para um objeto e aÃ§Ã£o especÃ­ficos.
- ParÃ¢metros:
  - `objectName` (String): Nome do objeto Salesforce.
  - `chaveAcao` (String): IdentificaÃ§Ã£o da aÃ§Ã£o do vÃ­deo (exemplo: "Criar_Lead").
- Retorno: Nenhum. A operaÃ§Ã£o insere ou atualiza um registro de histÃ³rico de visualizaÃ§Ã£o.

VariÃ¡veis
NÃ£o hÃ¡ variÃ¡veis de instÃ¢ncia nesta classe, pois ela Ã© composta apenas por mÃ©todos estÃ¡ticos.

DescriÃ§Ã£o tÃ©cnica e leiga
- A classe acessa configuraÃ§Ãµes de vÃ­deos (como URLs e Ã­cones) armazenadas em um metadado customizado para montar menus de vÃ­deos.
- Ela verifica se o usuÃ¡rio jÃ¡ assistiu a todos os vÃ­deos de um tour, consultando um histÃ³rico de visualizaÃ§Ãµes.
- Quando o usuÃ¡rio conclui um vÃ­deo, ela registra essa conclusÃ£o para que o sistema saiba que o tour foi finalizado.
- Essas funcionalidades sÃ£o usadas para melhorar a experiÃªncia do usuÃ¡rio, guiando-o por tutoriais e evitando repetiÃ§Ãµes desnecessÃ¡rias.

## <strong id="trigger">trigger</strong>

Trigger: TermoTrigger

DescriÃ§Ã£o
O trigger `TermoTrigger` Ã© responsÃ¡vel por gerenciar eventos DML no objeto `Termo__c`. Ele atua em diferentes fases do ciclo de vida do registro, especificamente antes da inserÃ§Ã£o ou atualizaÃ§Ã£o, e apÃ³s a inserÃ§Ã£o.

Eventos Monitorados
- before insert
- before update
- after insert (comentado, atualmente inativo)

LÃ³gica
- Antes da inserÃ§Ã£o ou atualizaÃ§Ã£o (`before insert`, `before update`):
  - Chama o mÃ©todo `formatarDocumentos` da classe `TermoHandler`, passando a lista de registros (`Trigger.new`) para formataÃ§Ã£o ou validaÃ§Ãµes necessÃ¡rias antes de salvar os registros no banco de dados.
- ApÃ³s a inserÃ§Ã£o (`after insert`):
  - Existe uma chamada comentada para o mÃ©todo `buscaRegistrosRelacionados`, que, se ativada, buscaria registros relacionados apÃ³s a criaÃ§Ã£o de novos registros `Termo__c`.

ConsideraÃ§Ãµes
- A lÃ³gica de formataÃ§Ã£o Ã© executada apenas antes da gravaÃ§Ã£o, garantindo que os registros estejam no formato correto ao serem salvos.
- A aÃ§Ã£o de buscar registros relacionados apÃ³s a inserÃ§Ã£o estÃ¡ atualmente comentada, indicando que pode ser ativada futuramente conforme necessidade.
- O trigger Ã© bem estruturado, separando claramente as aÃ§Ãµes a serem realizadas em diferentes fases do ciclo de vida do registro.

Trigger: DW_AccountTrigger

DescriÃ§Ã£o
O trigger `DW_AccountTrigger` Ã© responsÃ¡vel por gerenciar eventos DML relacionados ao objeto `Account`. Ele atua em diferentes momentos do ciclo de vida do registro, incluindo antes e depois da inserÃ§Ã£o ou atualizaÃ§Ã£o, garantindo a validaÃ§Ã£o e formataÃ§Ã£o adequada dos dados.

Eventos Monitorados
- before insert
- before update
- after insert
- after update

LÃ³gica
- Instancia a classe `DW_AccountService`, passando os registros atuais (`Trigger.new`), registros antigos (`Trigger.old`), e os mapas de registros (`Trigger.newMap` e `Trigger.oldMap`) para facilitar o acesso e manipulaÃ§Ã£o dos dados.
- Se o evento ocorrer antes da inserÃ§Ã£o ou atualizaÃ§Ã£o (`before insert` ou `before update`), realiza as seguintes validaÃ§Ãµes e formataÃ§Ãµes:
  - `checkDocumentFormat()`: Verifica e ajusta o formato do documento (por exemplo, CPF ou CNPJ), garantindo que esteja conforme o padrÃ£o esperado.
  - `checkPhoneFormat()`: Valida e formata o campo de telefone, assegurando que o nÃºmero esteja no formato correto.
  - `validateEmailField()`: Confirma que o campo de email esteja vÃ¡lido, prevenindo registros com emails incorretos ou invÃ¡lidos.

ConsideraÃ§Ãµes
- A execuÃ§Ã£o das validaÃ§Ãµes ocorre apenas antes do registro ser salvo no banco de dados, garantindo que os dados estejam corretos e formatados antes de serem persistidos.
- As validaÃ§Ãµes e formataÃ§Ãµes sÃ£o encapsuladas na classe `DW_AccountService`, promovendo uma separaÃ§Ã£o de responsabilidades e facilitando a manutenÃ§Ã£o do cÃ³digo.
- O trigger nÃ£o realiza aÃ§Ãµes apÃ³s a inserÃ§Ã£o ou atualizaÃ§Ã£o, focando na validaÃ§Ã£o e formataÃ§Ã£o preventiva dos dados.

Trigger: DW_LeadTrigger

DescriÃ§Ã£o
O trigger `DW_LeadTrigger` Ã© responsÃ¡vel por interceptar eventos DML no objeto `Lead`. Ele atua em trÃªs momentos especÃ­ficos do ciclo de vida do registro: antes da inserÃ§Ã£o, antes da atualizaÃ§Ã£o e apÃ³s a atualizaÃ§Ã£o. Sua principal funÃ§Ã£o Ã© garantir que os campos relacionados ao telefone, celular e documentos estejam corretamente formatados antes que os registros sejam salvos ou atualizados no banco de dados.

Eventos Monitorados
- before insert
- before update
- after update

LÃ³gica
- Para operaÃ§Ãµes de inserÃ§Ã£o ou atualizaÃ§Ã£o, o trigger instancia a classe `DW_LeadService`, passando os registros atuais (`Trigger.new`), os registros antigos (`Trigger.old`), os mapas de registros (`Trigger.newMap` e `Trigger.oldMap`).
- Em eventos que ocorrem antes do salvamento (`before insert` e `before update`), o trigger chama trÃªs mÃ©todos da classe `DW_LeadService`:
  - `checkPhoneFormat()`: Verifica e ajusta o formato do campo telefone.
  - `checkMobilePhoneFormat()`: Verifica e ajusta o formato do campo celular.
  - `checkDocumentFormat()`: Verifica e ajusta o formato do documento (como CPF ou CNPJ).

ConsideraÃ§Ãµes
- As validaÃ§Ãµes e ajustes de formato sÃ£o realizados apenas antes do registro ser salvo, garantindo que os dados estejam corretos no momento da persistÃªncia.
- O mÃ©todo `after update` nÃ£o possui aÃ§Ãµes especÃ­ficas no trigger, mas a instÃ¢ncia da classe Ã© criada para possÃ­veis usos internos ou futuras extensÃµes.
- Essa abordagem modular, delegando a lÃ³gica para a classe `DW_LeadService`, promove uma melhor organizaÃ§Ã£o do cÃ³digo e facilita a manutenÃ§Ã£o e testes.