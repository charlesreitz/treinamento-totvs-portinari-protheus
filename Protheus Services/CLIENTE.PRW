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
    Local lRet := .F.
    Local cIPOrig	:= if(!Empty(oWSRest:GetHeader('X-Forwarded-For')),oWSRest:GetHeader('X-Forwarded-For'),oWSRest:GetHeader('__IPCONN__'))

    self:SetContentType("application/json")
	self:SetHeader('Access-Control-Allow-Credentials' , "true")
    
    Begin Sequence 

        //SetRestFault(400,cMsgRet,.T.,400,/*cDetailMsg*/,/*cHelpUrl*/,/*aDetails*/)
        ::SetResponse("{}")
        lRet    := .F.
    End Sequence        


Return lRet

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