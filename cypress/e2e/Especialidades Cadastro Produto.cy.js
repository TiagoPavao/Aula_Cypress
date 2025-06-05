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

  it("Cadastro Produto SKU", () => {
    cy.get(':nth-child(4) > .sf-with-ul').click();
    cy.contains("Produto (SKU)").click();
    cy.get('#ContentPlaceHolder1_btNovoProduto').click()
    cy.get('#ContentPlaceHolder1_dropDivisaoCadastro').select ("CARDIOLOGIA")
    cy.get('#ContentPlaceHolder1_dropGrupoProdutoCadastro').select("CARDIOLOGIA - ASPIRINA PREVENT")
    cy.get('#ContentPlaceHolder1_dropProduto').select("ASPIRINA")
    cy.get('#ContentPlaceHolder1_txtProDsc').type("Produto Teste")
    cy.get('#ContentPlaceHolder1_txtProNome').type("Produto Teste Automação1")
    cy.get('#ContentPlaceHolder1_txtProEAN').type("78945612")
    cy.get('#ContentPlaceHolder1_txtProCod').type("123")
    //cy.get(':nth-child(5) > :nth-child(1) > .switch > .slider').click()
    cy.get('.grid2 > .campo > .switch > .slider').click()
    cy.get('#ContentPlaceHolder1_txtQTdCaixas').type("10")
    cy.get('#ContentPlaceHolder1_txtQtdDentroCaixa').type("10")
    cy.get('#ContentPlaceHolder1_btSalvar').click()
    cy.get('#ContentPlaceHolder1_txtProdutoNomeFiltro').type("Produto Teste Automação1")
    cy.get('#ContentPlaceHolder1_BtnProcurar').click()   

   
  });
});
