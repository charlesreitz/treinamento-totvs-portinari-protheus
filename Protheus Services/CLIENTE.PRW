#include 'protheus.ch'
#include 'parmtype.ch'
#INCLUDE "RESTFUL.CH"
#INCLUDE "fileio.ch"
/*/{Protheus.doc} PCIClienteOrdemServico
    Planejamento Controle ImplantaÃ§Ã£o Cliente
    @type  Function
    @author CHARLES REITZ 
    @since 01/07/2019
    @version version
    @param param_name, param_type, param_descr
    @return return_var, return_type, return_description
    @example
    (examples)
    @see (links_or_references)
/*/
WSRESTFUL CLIENTE DESCRIPTION "" FORMAT "application/json"

    WSDATA QUICKSEARCH 		AS STRING OPTIONAL
    WSDATA PAGE 			AS INTEGER OPTIONAL
    WSDATA A1_COD			AS STRING OPTIONAL
    WSDATA A1_LOJA			AS STRING OPTIONAL

    WSMETHOD GET  		CLIENTE_V1	    DESCRIPTION "" 	PATH "cliente/v1"                       WSSYNTAX "/cliente/v1"                      PRODUCES APPLICATION_JSON
    WSMETHOD GET  		IDCLIENTE_V1	DESCRIPTION "" 	PATH "cliente/v1/{A1_COD}/{A1_LOJA}"    WSSYNTAX "/cliente/v1/{A1_COD}/{A1_LOJA}"   PRODUCES APPLICATION_JSON
    WSMETHOD POST  		CLIENTE_V1		DESCRIPTION "" 	PATH "cliente/v1"                       WSSYNTAX "/cliente/v1"                      PRODUCES APPLICATION_JSON
    WSMETHOD PUT  		CLIENTE_V1		DESCRIPTION "" 	PATH "cliente/v1/{A1_COD}/{A1_LOJA}"     WSSYNTAX "/cliente/v1/{A1_COD}/{A1_LOJA}"  PRODUCES APPLICATION_JSON
    WSMETHOD DELETE  	CLIENTE_V1		DESCRIPTION "" 	PATH "cliente/v1/{A1_COD}/{A1_LOJA}"     WSSYNTAX "/cliente/v1/{A1_COD}/{A1_LOJA}"  PRODUCES APPLICATION_JSON

END WSRESTFUL

//QUERYPARAM
//PATHPARAM 

WSMETHOD GET CLIENTE_V1 WSSERVICE CLIENTE
    Local nCount
    Local nINc  :=   0

    ::SetContentType("application/json")
    ::SetHeader('Access-Control-Allow-Credentials' , "true")



    nLimPorPag  :=   10
    cOffSet	:=	"% "
    //Conta o total de registros para fazer paginaÃ§Ã£o
    Beginsql alias "TRBCOUNT"
        SELECT count(1) TOTALREG
        FROM %table:SA1% 
        WHERE A1_FILIAL = %xFilial:SA1%
        and %notdel%
       
    EndSql

    If self:PAGE == 0
        nPageAtu	:=	1
    Else
        nPageAtu	:=	self:PAGE
    EndIf

    nAverage	:=	TRBCOUNT->TOTALREG/nLimPorPag
    nOffSet  :=	(nPageAtu-1) * nLimPorPag

    cOffSet	+=	" OFFSET "+cValTochar(nOffSet)
    cOffSet	+=	" ROWS FETCH NEXT "+cValToChar(nLimPorPag)+" ROWS ONLY "
    nQtdNex	:=	TRBCOUNT->TOTALREG-nOffSet

    cOffSet	+=	" %"
    TRBCOUNT->(dbCloseArea())

    Beginsql alias "TRB"
        SELECT  R_E_C_N_O_,A1_COD, A1_LOJA, A1_NOME , A1_MSBLQL
        FROM %table:SA1% 
        WHERE A1_FILIAL = %xFilial:SA1%
        and %notdel%
        ORDER BY R_E_C_N_O_ DESC
        %exp:cOffSet%
    EndSql
    Count to nCount

    TRB->(dbGoTop())

    ::SetResponse('{ "items": ')
    ::SetResponse("[")
    While TRB->(!Eof())
        nINc++
        nQtdNex--

        ::SetResponse(' {  "A1_COD":"'+TRB->A1_COD+'"   ,')
        ::SetResponse('    "A1_LOJA":"'+TRB->A1_LOJA+'"  ,')
        ::SetResponse('    "A1_MSBLQL":"'+ if(Empty(TRB->A1_MSBLQL),'2',TRB->A1_MSBLQL) +'"  ,')
        ::SetResponse('    "ACAO": ["alterar", "excluir"],')
        ::SetResponse('    "A1_NOME":"'+CapitalACE(TRB->A1_NOME)+'"   ')
        ::SetResponse(' } ')
        If nINc < nCount
            ::SetResponse(",")
        EndIf


        TRB->(dbSkip())
    EndDo

    ::SetResponse("],")
    ::SetResponse(' "disablenext":"'+ If(nQtdNex>0, 'false','true') +'"')
    ::SetResponse("}")

    TRB->(dbCloseArea())


Return .T.

WSMETHOD GET IDCLIENTE_V1 PATHPARAM A1_COD,A1_LOJA WSSERVICE CLIENTE
    Local lRet := .F.
    //Local oJSon	 	:= JsonObject():New()
    ::SetContentType("application/json")
    ::SetHeader('Access-Control-Allow-Credentials' , "true")


    Begin Sequence

        SA1->(dbSetOrder(1))
        If !SA1->(dbseek(FWxFilial("SA1")+ Padr(::A1_COD,GetSX3Cache("A1_COD","X3_TAMANHO"))+Padr(::A1_LOJA,GetSX3Cache("A1_LOJA","X3_TAMANHO")) ))
            SetRestFault(400,"Cliente não localizado com código e loja informado",.T.,400,/*cDetailMsg*/,/*cHelpUrl*/,/*aDetails*/)
            Break
        EndIf

        ::SetResponse(' {  ')
        ::SetResponse(' "A1_COD":"'+SA1->A1_COD+'"   ,')
        ::SetResponse(' "A1_LOJA":"'+SA1->A1_LOJA+'"   ,')
        ::SetResponse(' "A1_NOME":"'+Alltrim(SA1->A1_NOME)+'"   ,')
        ::SetResponse(' "A1_NREDUZ":"'+Alltrim(SA1->A1_NREDUZ)+'"   ,')
        ::SetResponse(' "A1_MSBLQL":"'+Alltrim(SA1->A1_MSBLQL)+'"   ,')
        ::SetResponse(' "A1_CGC":"'+SA1->A1_CGC+'"   ')
        ::SetResponse(' } ')

        lRet    := .T.
    End Sequence


Return lRet


WSMETHOD POST CLIENTE_V1 WSSERVICE CLIENTE
    Local lRet := .F.
    Local oJSon	 	:= JsonObject():New()

    ::SetContentType("application/json")
    ::SetHeader('Access-Control-Allow-Credentials' , "true")

    Begin Sequence
        oJSon:FromJson(::GetContent())

        SA1->(dbSetOrder(1))
        If SA1->(dbseek(FWxFilial("SA1")+ Padr(oJSon['A1_COD'],GetSX3Cache("A1_COD","X3_TAMANHO"))+Padr(oJSon['A1_LOJA'] ,GetSX3Cache("A1_LOJA","X3_TAMANHO")) ))
            SetRestFault(400,"Cliente já cadastrado com código e loja informado",.T.,400,/*cDetailMsg*/,/*cHelpUrl*/,/*aDetails*/)
            Break
        EndIf

        SA1->(Reclock("SA1",.T.))
        SA1->A1_COD     := oJSon['A1_COD']
        SA1->A1_LOJA    := oJSon['A1_LOJA']
        SA1->A1_NOME    := oJSon['A1_NOME']
        SA1->A1_NREDUZ  := oJSon['A1_NREDUZ']
        SA1->A1_CGC     := oJSon['A1_CGC']
        SA1->A1_MSBLQL  := oJSon['A1_MSBLQL']
        
        SA1->(msUnlock())

        ::SetResponse("{")
        ::SetResponse('"_messages": [{')
        ::SetResponse('"type":"success", ')
        ::SetResponse('"code":200, ')
        ::SetResponse('"message":"Cliente Incluído com Sucesso", ')
        ::SetResponse('"detailedMessage":"O cliente com o código '+SA1->A1_COD+' loja '+SA1->A1_LOJA+' foi incluído com sucesso " ')
        ::SetResponse("}]")
        ::SetResponse('}')


        lRet    := .T.
    End Sequence


Return lRet

WSMETHOD PUT CLIENTE_V1 WSSERVICE CLIENTE
    Local lRet := .F.
    Local oJSon	 	:= JsonObject():New()

    ::SetContentType("application/json")
    ::SetHeader('Access-Control-Allow-Credentials' , "true")

    Begin Sequence
        oJSon:FromJson(::GetContent())

        SA1->(dbSetOrder(1))
        If !SA1->(dbseek(FWxFilial("SA1")+ Padr(oJSon['A1_COD'],GetSX3Cache("A1_COD","X3_TAMANHO"))+Padr(oJSon['A1_LOJA'] ,GetSX3Cache("A1_LOJA","X3_TAMANHO")) ))
            SetRestFault(400,"Cliente não localizado com código e loja informado",.T.,400,/*cDetailMsg*/,/*cHelpUrl*/,/*aDetails*/)
            Break
        EndIf

        SA1->(Reclock("SA1",.F.))
        SA1->A1_COD     := oJSon['A1_COD']
        SA1->A1_LOJA    := oJSon['A1_LOJA']
        SA1->A1_NOME    := oJSon['A1_NOME']
        SA1->A1_NREDUZ  := oJSon['A1_NREDUZ']
        SA1->A1_CGC     := oJSon['A1_CGC']
        SA1->A1_MSBLQL  := oJSon['A1_MSBLQL']
        SA1->(msUnlock())


        ::SetResponse("{")
        ::SetResponse('"_messages": [{')
        ::SetResponse('"type":"success", ')
        ::SetResponse('"code":200, ')
        ::SetResponse('"message":"Cliente Alterado com Sucesso", ')
        ::SetResponse('"detailedMessage":"O cliente com o código '+SA1->A1_COD+' loja '+SA1->A1_LOJA+' foi alterado com sucesso " ')
        ::SetResponse("}]")
        ::SetResponse('}')

        lRet    := .T.
    End Sequence

Return lRet


WSMETHOD DELETE CLIENTE_V1 PATHPARAM A1_COD, A1_LOJA WSSERVICE CLIENTE
    Local lRet := .F.

    Begin Sequence

        SA1->(dbSetOrder(1))
        if SA1->(msSeek(FWxFilial("SA1")+self:A1_COD+self:A1_LOJA))
            SA1->(reclock("SA1",.F.))
            SA1->(dbDelete())
            SA1->(msUnlock())
        Else
            SetRestFault(400,"Código não localizado para realizar exclusão",.T.,400,/*cDetailMsg*/,/*cHelpUrl*/,/*aDetails*/)
            Break
        EndIf

        lRet    := .T.
    End Sequence


Return lRet