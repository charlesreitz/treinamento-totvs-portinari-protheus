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
	WSDATA STATUS			AS STRING OPTIONAL
	WSDATA EMPRESA			AS STRING OPTIONAL
	WSDATA DATADE			AS DATE OPTIONAL
	WSDATA DATAATE			AS DATE OPTIONAL
	WSDATA PROJETO			AS STRING OPTIONAL
	WSDATA CONSULTOR		AS STRING OPTIONAL
	WSDATA LATITUDE			AS FLOAT OPTIONAL
	WSDATA LONGITUDE		AS FLOAT OPTIONAL

	WSMETHOD GET  		CLIENTE_V1	    DESCRIPTION "" 	PATH "cliente/v1" PRODUCES APPLICATION_JSON
	WSMETHOD GET  		IDCLIENTE_V1	DESCRIPTION "" 	PATH "cliente/v1/{ID}" PRODUCES APPLICATION_JSON
	WSMETHOD POST  		CLIENTE_V1		DESCRIPTION "" 	PATH "cliente/v1" PRODUCES APPLICATION_JSON
	WSMETHOD PUT  		CLIENTE_V1		DESCRIPTION "" 	PATH "cliente/v1" PRODUCES APPLICATION_JSON
    WSMETHOD DELETE  	CLIENTE_V1		DESCRIPTION "" 	PATH "cliente/v1" PRODUCES APPLICATION_JSON

END WSRESTFUL

//QUERYPARAM
//PATHPARAM 

WSMETHOD GET CLIENTE_V1 WSSERVICE CLIENTE
    Local nCount
    Local nINc  :=   0 

    self:SetContentType("application/json")
	self:SetHeader('Access-Control-Allow-Credentials' , "true")
    

        
    Beginsql alias "TRB"
        SELECT A1_COD, A1_LOJA, A1_NOME FROM %table:SA1% 
        WHERE 
        A1_FILIAL = %xFilial:SA1%
        and %notdel%
       
    EndSql
    Count to nCount 
    
    TRB->(dbGoTop())

    ::SetResponse("[")
    While TRB->(!Eof())
        nINc++
        ::SetResponse(' {  "A1_COD":"'+TRB->A1_COD+'"   ,')
        ::SetResponse('    "A1_LOJA":"'+TRB->A1_LOJA+'"  ,')
        ::SetResponse('    "A1_NOME":"'+TRB->A1_NOME+'"   ')
        If nINc < nCount
            ::SetResponse(",")
        EndIf
        ::SetResponse(' } ')

        TRB->(dbSkip())
    EndDo
    ::SetResponse("]")

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