Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Fluxo após login válido", () => {
  before(() => {
    cy.visit(
      "https://homologacaoesp.interplayers.com.br/PRJ/Especialidades/Acesso.aspx"
    );
    cy.get("#ContentPlaceHolder1_Control_Login2_Login1_UserName").type(
      "admbayer@dnaspecialty.com.br"
    );

    cy.get("#ContentPlaceHolder1_Control_Login2_Login1_Password").type(
      "12345678"
    );

    cy.get("#ContentPlaceHolder1_Control_Login2_Login1_LoginButton").click();
  });

  it("Cadastro de Cliente", () => {
    cy.get("#nav > :nth-child(3) > .sf-with-ul").click();
    cy.contains("Cadastro de Cliente").click();
    cy.get('#ContentPlaceHolder1_btNovoPDV').click()
    cy.get('#ContentPlaceHolder1_trTipoDocumento').contains('JURIDICA').click();
    cy.get('#ContentPlaceHolder1_DDLTipoCli').select("CLIENTE - Bayer"); 
    cy.get('#ContentPlaceHolder1_PesRazaoSocial_Nome').type("Teste")
    cy.get('#ContentPlaceHolder1_PesCNPJ_CPF').type("34152006000104")
    cy.get('#ContentPlaceHolder1_PesNomeFantasia').type("Teste Fantasia")
    cy.get('#ContentPlaceHolder1_PopupCNPJ_ctl00_btCancelarPopup').click();
    cy.get('#ContentPlaceHolder1_PesNomeFantasia').type("Teste Fantasia")
    cy.get('#ContentPlaceHolder1_ListSetorVenda').select("740")
    cy.get('#ContentPlaceHolder1_btnAddSetorVenda').click()     
    //Endereço
    cy.get('#liAbaEndereco').click()
    cy.get('#ContentPlaceHolder1_dlEndereco_EndCep_0').type("14340000")
    cy.get('#ContentPlaceHolder1_dlEndereco_ddlEstados_0').select("SP")
    cy.get('#ContentPlaceHolder1_dlEndereco_idCidade_0').select("Brodowski")
    cy.get('#ContentPlaceHolder1_dlEndereco_EndBairro_0').type("centro")
    cy.get('#ContentPlaceHolder1_dlEndereco_EndLogradouro_0').type("centro")
    cy.get('#ContentPlaceHolder1_dlEndereco_txtNrLogradouro_0').type("10")
    cy.get('#ContentPlaceHolder1_btEnviar').click()
    //cy.contains("Dados salvos com sucesso.",{timeout:10000})




   
  });
});
