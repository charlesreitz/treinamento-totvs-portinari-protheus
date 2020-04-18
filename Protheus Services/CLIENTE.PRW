#include 'protheus.ch'
#include 'parmtype.ch'
#INCLUDE "RESTFUL.CH"
#INCLUDE "fileio.ch"
/*/{Protheus.doc} PCIClienteOrdemServico
    Planejamento Controle Implantação Cliente
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
    WSDATA LIMIT 			AS INTEGER OPTIONAL
    WSDATA ID				AS INTEGER OPTIONAL

    WSMETHOD GET  		CLIENTE_V1	    DESCRIPTION "" 	PATH "cliente/v1" WSSYNTAX "/cliente/v1" PRODUCES APPLICATION_JSON
    WSMETHOD GET  		IDCLIENTE_V1	DESCRIPTION "" 	PATH "cliente/v1/{ID}"  WSSYNTAX "/cliente/v1/{ID}" PRODUCES APPLICATION_JSON
    WSMETHOD POST  		CLIENTE_V1		DESCRIPTION "" 	PATH "cliente/v1"  WSSYNTAX "/cliente/v1" PRODUCES APPLICATION_JSON
    WSMETHOD PUT  		CLIENTE_V1		DESCRIPTION "" 	PATH "cliente/v1"  WSSYNTAX "/cliente/v1" PRODUCES APPLICATION_JSON
    WSMETHOD DELETE  	CLIENTE_V1		DESCRIPTION "" 	PATH "cliente/v1"  WSSYNTAX "/cliente/v1" PRODUCES APPLICATION_JSON

END WSRESTFUL

//QUERYPARAM
//PATHPARAM 

WSMETHOD GET CLIENTE_V1 WSSERVICE CLIENTE
    Local nCount
    Local nINc  :=   0

    self:SetContentType("application/json")
    self:SetHeader('Access-Control-Allow-Credentials' , "true")


    nLimPorPag  :=   10
    cOffSet	:=	"% "
    //Conta o total de registros para fazer paginação
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
        SELECT  A1_COD, A1_LOJA, A1_NOME FROM %table:SA1% 
        WHERE A1_FILIAL = %xFilial:SA1%
        and %notdel%
        ORDER BY  A1_COD, A1_LOJA
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
        ::SetResponse('    "A1_NOME":"'+TRB->A1_NOME+'"   ')
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

WSMETHOD GET IDCLIENTE_V1 WSSERVICE CLIENTE
    Local lRet := .F.
    //Local oJSon	 	:= JsonObject():New()
    Begin Sequence


        lRet    := .F.
    End Sequence


Return lRet


WSMETHOD POST CLIENTE_V1 WSSERVICE CLIENTE
    Local lRet := .F.

    Begin Sequence


        lRet    := .F.
    End Sequence


Return lRet

WSMETHOD PUT CLIENTE_V1 WSSERVICE CLIENTE
    Local lRet := .F.

    Begin Sequence


        lRet    := .F.
    End Sequence


Return lRet


WSMETHOD DELETE CLIENTE_V1 WSSERVICE CLIENTE
    Local lRet := .F.

    Begin Sequence


        lRet    := .F.
    End Sequence


Return lRet